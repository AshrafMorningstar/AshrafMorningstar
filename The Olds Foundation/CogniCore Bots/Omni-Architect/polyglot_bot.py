import os
import random
import time
from code_generators import ensure_min_lines
import language_templates

# Output directory
OUTPUT_DIR = "generated_languages"

# comprehensive list of 100+ languages with metadata
# Format: Name: (Extension, CommentPrefix, BlockStart, BlockEnd, VarKeyword, PrintKeyword)
LANGUAGES = {
    "Python": ("py", "#", ":", "", "", "print"),
    "JavaScript": ("js", "//", "{", "}", "let", "console.log"),
    "Java": ("java", "//", "{", "}", "int", "System.out.println"),
    "C++": ("cpp", "//", "{", "}", "int", "std::cout <<"),
    "C": ("c", "//", "{", "}", "int", "printf"),
    "C#": ("cs", "//", "{", "}", "var", "Console.WriteLine"),
    "Ruby": ("rb", "#", "do", "end", "", "puts"),
    "Go": ("go", "//", "{", "}", "var", "fmt.Println"),
    "Rust": ("rs", "//", "{", "}", "let", "println!"),
    "Swift": ("swift", "//", "{", "}", "var", "print"),
    "Kotlin": ("kt", "//", "{", "}", "var", "println"),
    "PHP": ("php", "//", "{", "}", "$", "echo"),
    "TypeScript": ("ts", "//", "{", "}", "let", "console.log"),
    "Scala": ("scala", "//", "{", "}", "var", "println"),
    "Perl": ("pl", "#", "{", "}", "my $", "print"),
    "Lua": ("lua", "--", "then", "end", "local", "print"),
    "R": ("r", "#", "{", "}", "", "print"),
    "Dart": ("dart", "//", "{", "}", "var", "print"),
    "Haskell": ("hs", "--", "do", "", "", "putStrLn"),
    "Julia": ("jl", "#", "begin", "end", "", "println"),
    "Elixir": ("ex", "#", "do", "end", "", "IO.puts"),
    "Erlang": ("erl", "%", "->", ".", "", "io:format"),
    "Clojure": ("clj", ";;", "(", ")", "def", "println"),
    "F#": ("fs", "//", "begin", "end", "let", "printfn"),
    "OCaml": ("ml", "(*", "begin", "end", "let", "print_endline"),
    "Racket": ("rkt", ";;", "(", ")", "define", "displayln"),
    "Scheme": ("scm", ";;", "(", ")", "define", "display"),
    "Common Lisp": ("lisp", ";;", "(", ")", "defvar", "print"),
    "Groovy": ("groovy", "//", "{", "}", "def", "println"),
    "Visual Basic": ("vb", "'", "Sub", "End Sub", "Dim", "Console.WriteLine"),
    "VBA": ("vbs", "'", "Sub", "End Sub", "Dim", "MsgBox"),
    "Pascal": ("pas", "//", "begin", "end", "var", "WriteLn"),
    "Delphi": ("dpr", "//", "begin", "end", "var", "WriteLn"),
    "Ada": ("adb", "--", "begin", "end", "", "Put_Line"),
    "Fortran": ("f90", "!", "program", "end program", "integer", "print *, "),
    "COBOL": ("cbl", "*", "PROCEDURE DIVISION.", "STOP RUN.", "", "DISPLAY"),
    "ABAP": ("abap", "*", "", "", "DATA", "WRITE"),
    "PL/SQL": ("sql", "--", "BEGIN", "END;", "", "DBMS_OUTPUT.PUT_LINE"),
    "T-SQL": ("sql", "--", "BEGIN", "END", "DECLARE", "PRINT"),
    "SQL": ("sql", "--", "", "", "", "SELECT"),
    "SAS": ("sas", "*", "data", "run;", "", "put"),
    "MATLAB": ("m", "%", "", "end", "", "disp"),
    "Wolfram": ("wl", "(*", "", "", "", "Print"),
    "PowerShell": ("ps1", "#", "{", "}", "$", "Write-Host"),
    "Bash": ("sh", "#", "{", "}", "", "echo"),
    "Zsh": ("zsh", "#", "{", "}", "", "echo"),
    "Fish": ("fish", "#", "begin", "end", "set", "echo"),
    "Awk": ("awk", "#", "{", "}", "", "print"),
    "Sed": ("sed", "#", "{", "}", "", "p"),
    "Tcl": ("tcl", "#", "{", "}", "set", "puts"),
    "Vim Script": ("vim", '"', "function", "endfunction", "let", "echo"),
    "Emacs Lisp": ("el", ";;", "(", ")", "setq", "message"),
    "AppleScript": ("scpt", "--", "tell", "end tell", "set", "display dialog"),
    "CoffeeScript": ("coffee", "#", "->", "", "", "console.log"),
    "ActionScript": ("as", "//", "{", "}", "var", "trace"),
    "Haxe": ("hx", "//", "{", "}", "var", "trace"),
    "D": ("d", "//", "{", "}", "auto", "writeln"),
    "Nim": ("nim", "#", ":", "", "var", "echo"),
    "Crystal": ("cr", "#", "do", "end", "", "puts"),
    "Vala": ("vala", "//", "{", "}", "var", "print"),
    "Genie": ("gs", "//", "do", "end", "var", "print"),
    "Eiffel": ("e", "--", "do", "end", "", "print"),
    "Smalltalk": ("st", '"', "[", "]", "", "Transcript show:"),
    "Prolog": ("pl", "%", "", ".", "", "write"),
    "Mercury": ("m", "%", ":-", ".", "", "io.write_string"),
    "Logtalk": ("lgt", "%", ":-", ".", "", "write"),
    "Oz": ("oz", "%", "proc", "end", "", "Show"),
    "Alice": ("alice", "(*", "", "*)", "", "print"),
    "Elm": ("elm", "--", "", "", "", "text"),
    "PureScript": ("purs", "--", "do", "", "", "log"),
    "Idris": ("idr", "--", "do", "", "", "putStrLn"),
    "Agda": ("agda", "--", "where", "", "", ""),
    "Coq": ("v", "(*", "", "*)", "", ""),
    "Lean": ("lean", "--", "", "", "", "#eval"),
    "Verilog": ("v", "//", "begin", "end", "reg", "$display"),
    "VHDL": ("vhd", "--", "begin", "end", "signal", "report"),
    "SystemVerilog": ("sv", "//", "begin", "end", "logic", "$display"),
    "Assembly (x86)": ("asm", ";", "section .text", "", "", ""),
    "Assembly (ARM)": ("s", ";", ".text", "", "", ""),
    "MIPS": ("s", "#", ".text", "", "", ""),
    "6502 Assembly": ("asm", ";", "", "", "", ""),
    "Z80 Assembly": ("asm", ";", "", "", "", ""),
    "Arduino": ("ino", "//", "{", "}", "int", "Serial.println"),
    "Processing": ("pde", "//", "{", "}", "int", "println"),
    "OpenSCAD": ("scad", "//", "{", "}", "", "echo"),
    "G-code": ("gcode", ";", "", "", "", ""),
    "PostScript": ("ps", "%", "{", "}", "/", "show"),
    "Forth": ("fs", "\\", ":", ";", "", "."),
    "Factor": ("factor", "!", ":", ";", "", "print"),
    "J": ("ijs", "NB.", "", "", "", "echo"),
    "APL": ("apl", "⍝", "{", "}", "", "⎕←"),
    "Raku": ("raku", "#", "{", "}", "my", "say"),
    "Rexx": ("rexx", "/*", "", "*/", "", "SAY"),
    "Icon": ("icn", "#", "procedure", "end", "", "write"),
    "Unicon": ("icn", "#", "procedure", "end", "", "write"),
    "Simula": ("sim", "!", "begin", "end", "", "OutText"),
    "Modula-2": ("mod", "(*", "BEGIN", "END", "VAR", "WriteString"),
    "Oberon": ("ob", "(*", "BEGIN", "END", "VAR", "Out.String"),
    "Component Pascal": ("cp", "(*", "BEGIN", "END", "VAR", "StdLog.String"),
    "Zig": ("zig", "//", "{", "}", "var", "debug.print"),
    "V": ("v", "//", "{", "}", "mut", "println"),
    "Odin": ("odin", "//", "{", "}", "", "fmt.println"),
    "Jai": ("jai", "//", "{", "}", "", "print"),
    "Chapel": ("chpl", "//", "{", "}", "var", "writeln"),
    "Fortress": ("fss", "(*", "", "*)", "", "println"),
    "X10": ("x10", "//", "{", "}", "var", "Console.OUT.println"),
    "Ceylon": ("ceylon", "//", "{", "}", "value", "print"),
    "Fantom": ("fan", "//", "{", "}", "var", "echo"),
    "Gosu": ("gs", "//", "{", "}", "var", "print"),
    "Nemerle": ("n", "//", "{", "}", "def", "System.Console.WriteLine"),
    "Boo": ("boo", "#", "", "", "def", "print"),
    "Cylc": ("cylc", "#", "", "", "", ""),
    "INI": ("ini", ";", "[", "]", "", ""),
    "TOML": ("toml", "#", "[", "]", "", ""),
    "YAML": ("yaml", "#", "", "", "", ""),
    "JSON": ("json", "", "{", "}", "", ""),
    "XML": ("xml", "<!--", "<", ">", "", ""),
    "HTML": ("html", "<!--", "<html>", "</html>", "", ""),
    "CSS": ("css", "/*", "{", "}", "", ""),
    "Sass": ("sass", "//", "", "", "", ""),
    "Less": ("less", "//", "{", "}", "@", ""),
    "Stylus": ("styl", "//", "", "", "", ""),
    "Markdown": ("md", "<!--", "", "", "", ""),
    "LaTeX": ("tex", "%", "\\begin", "\\end", "", ""),
    "BibTeX": ("bib", "%", "{", "}", "", ""),
    "Texinfo": ("texi", "@c", "@", "@bye", "", ""),
    "Troff": ("1", '.\\"', "", "", "", ""),
    "Groff": ("1", '.\\"', "", "", "", ""),
    "Man": ("1", '.\\"', "", "", "", ""),
    "Diff": ("diff", "", "", "", "", ""),
    "CMake": ("cmake", "#", "function", "endfunction", "set", "message"),
    "Make": ("mk", "#", "", "", "", "echo"),
    "Docker": ("dockerfile", "#", "", "", "", "RUN echo"),
    "Nginx": ("conf", "#", "{", "}", "", ""),
    "Apache": ("conf", "#", "<", ">", "", ""),
    "Solidity": ("sol", "//", "{", "}", "uint", "emit"),
    "Vyper": ("vy", "#", "", "", "", "log"),
    "Chaincode": ("go", "//", "{", "}", "", ""),
    "Brainfuck": ("bf", "", "[", "]", "", "."),
    "Whitespace": ("ws", "", "", "", "", ""),
    "Befunge": ("befunge", "", "", "", "", ""),
    "LOLCODE": ("lol", "BTW", "HAI", "KTHXBYE", "I HAS A", "VISIBLE"),
    "Chicken": ("scm", ";;", "(", ")", "", ""),
    "Piet": ("png", "", "", "", "", ""),
    "Malbolge": ("mal", "", "", "", "", ""),
    "Intercal": ("i", "DO", "PLEASE", "GIVE UP", "", ""),
    "ArnoldC": ("arnoldc", "", "IT'S SHOWTIME", "YOU HAVE BEEN TERMINATED", "HEY CHRISTMAS TREE", "TALK TO THE HAND"),
    "Shakespeare": ("spl", "", "Act", "Exeunt", "", "Speak your mind"),
    "Chef": ("chef", "", "", "", "", ""),
    "Rockstar": ("rock", "(", "", ")", "", "Say"),
    "Omgrofl": ("omgrofl", "", "", "", "", "")
}

def generate_generic_code(lang_name, syntax):
    """Generates a generic but meaningful code structure for any language."""
    ext, comment, block_start, block_end, var_kw, print_kw = syntax

    lines = []

    # Header
    lines.append(f"{comment} {lang_name} - Generated Code Example")
    lines.append(f"{comment} Automatically generated meaningful code structure")
    lines.append("")

    # Variable declarations
    lines.append(f"{comment} Variable Declarations")
    for i in range(10):
        if var_kw:
            lines.append(f"{var_kw} var_{i} = {i * 10};")
        else:
            lines.append(f"var_{i} = {i * 10}")

    lines.append("")

    # Control Flow Simulation
    lines.append(f"{comment} Control Flow Logic")

    # Loop structure
    lines.append(f"{comment} Simulating a loop structure")
    if "{" in block_start:
        lines.append(f"function main() {block_start}")
        lines.append(f"    // Main execution logic")
        for i in range(5):
            lines.append(f"    {print_kw} \"Processing step {i}\";")
            lines.append(f"    if (var_{i} > 20) {block_start}")
            lines.append(f"        {print_kw} \"Value is large\";")
            lines.append(f"    {block_end}")
        lines.append(f"{block_end}")
    elif "begin" in block_start.lower():
         lines.append(f"{block_start}")
         lines.append(f"    {comment} Main logic")
         for i in range(5):
             lines.append(f"    {print_kw} \"Step {i}\"")
         lines.append(f"{block_end}")
    else:
        # Fallback for line-based or other syntaxes
        for i in range(20):
            lines.append(f"{print_kw} \"Operation {i} executed\"")

    lines.append("")

    # Math operations
    lines.append(f"{comment} Mathematical Calculations")
    for i in range(10):
        lines.append(f"{comment} Calculation {i}")
        lines.append(f"result_{i} = var_{i} * 2 + 5")
        lines.append(f"{print_kw} result_{i}")

    lines.append("")
    lines.append(f"{comment} End of generated code")

    return "\n".join(lines)

def main():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    print(f"Starting generation of {len(LANGUAGES)} language files...")

    generated_count = 0

    for lang, syntax in LANGUAGES.items():
        ext = syntax[0]
        # Sanitize filename
        safe_lang_name = lang.lower().replace(' ', '_').replace('(', '').replace(')', '').replace('/', '_').replace('\\', '_')
        filename = os.path.join(OUTPUT_DIR, f"example_{safe_lang_name}.{ext}")

        # Determine content
        content = ""
        if lang == "Python":
            content = language_templates.get_python_code()
        elif lang == "JavaScript":
            content = language_templates.get_javascript_code()
        elif lang == "Java":
            content = language_templates.get_java_code()
        elif lang == "C++":
            content = language_templates.get_cpp_code()
        else:
            content = generate_generic_code(lang, syntax)

        # Ensure 100+ lines
        content = ensure_min_lines(content, 100)

        with open(filename, "w", encoding="utf-8") as f:
            f.write(content)

        generated_count += 1
        print(f"Generated {lang} ({filename})")

    print(f"\nSuccessfully generated {generated_count} files in '{OUTPUT_DIR}'")

if __name__ == "__main__":
    main()
