
import math
import random

def create_radar_svg(filename):
    width, height = 400, 400
    cx, cy = width / 2, height / 2
    radius = 180
    
    # CSS Animation for rotation
    css = """
    <style>
        .scan { transform-origin: center; animation: rot 4s linear infinite; }
        .blip { animation: blink 2s ease-in-out infinite; }
        @keyframes rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blink { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
    </style>
    """
    
    svg = f'<svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">'
    svg += css
    
    # Background Grid
    svg += f'<circle cx="{cx}" cy="{cy}" r="{radius}" fill="#0a0e17" stroke="#00ffff" stroke-width="2" opacity="0.5"/>'
    svg += f'<circle cx="{cx}" cy="{cy}" r="{radius*0.66}" fill="none" stroke="#00ffff" stroke-width="1" opacity="0.3"/>'
    svg += f'<circle cx="{cx}" cy="{cy}" r="{radius*0.33}" fill="none" stroke="#00ffff" stroke-width="1" opacity="0.3"/>'
    
    # Crosshairs
    svg += f'<line x1="{cx-radius}" y1="{cy}" x2="{cx+radius}" y2="{cy}" stroke="#00ffff" stroke-width="1" opacity="0.3"/>'
    svg += f'<line x1="{cx}" y1="{cy-radius}" x2="{cx}" y2="{cy+radius}" stroke="#00ffff" stroke-width="1" opacity="0.3"/>'
    
    # Random Blips (Targets)
    targets = [
        (cx + 80, cy - 60), (cx - 100, cy + 40), (cx + 50, cy + 100)
    ]
    for i, (tx, ty) in enumerate(targets):
        svg += f'<circle cx="{tx}" cy="{ty}" r="5" fill="#ff0055" class="blip" style="animation-delay: {i*0.5}s"/>'
        svg += f'<text x="{tx+8}" y="{ty+4}" fill="#ff0055" font-family="monospace" font-size="10" opacity="0.8">TARGET_{i+1}</text>'

    # Scanner Line (Gradient Sector)
    # Using a path for the "sweep"
    svg += f"""
    <g class="scan">
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#00ffff" stop-opacity="0" />
                <stop offset="100%" stop-color="#00ffff" stop-opacity="0.5" />
            </linearGradient>
        </defs>
        <path d="M {cx} {cy} L {cx+radius} {cy} A {radius} {radius} 0 0 1 {cx+radius*0.7} {cy+radius*0.7} Z" fill="url(#grad)" opacity="0.8" />
        <line x1="{cx}" y1="{cy}" x2="{cx+radius}" y2="{cy}" stroke="#00ffff" stroke-width="2" />
    </g>
    """
    
    # Outer Decor
    svg += f'<circle cx="{cx}" cy="{cy}" r="{radius+5}" fill="none" stroke="#9d4edd" stroke-width="2" stroke-dasharray="20,10" opacity="0.7"/>'

    svg += '</svg>'
    
    with open(filename, 'w') as f:
        f.write(svg)
    print(f"Saved {filename}")

def create_helix_svg(filename):
    width, height = 800, 200
    
    css = """
    <style>
        .dot { animation: bounce 2s infinite ease-in-out; }
        @keyframes bounce { 
            0%, 100% { transform: translateY(0); fill: #00ffff; r: 3; opacity: 0.5; } 
            50% { transform: translateY(20px); fill: #ff0055; r: 5; opacity: 1; } 
        }
    </style>
    """
    
    svg = f'<svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">'
    svg += css
    
    # Background Line
    svg += f'<line x1="0" y1="{height/2}" x2="{width}" y2="{height/2}" stroke="#1a1f35" stroke-width="2" />'
    
    # DNA Strands
    num_dots = 40
    for i in range(num_dots):
        x = i * (width / num_dots)
        y = height / 2
        delay = i * 0.1
        # Top Strand
        svg += f'<circle cx="{x}" cy="{y-20}" r="3" fill="#00ffff" class="dot" style="animation-delay: -{delay}s" />'
        # Bottom Strand (Opposite phase)
        svg += f'<circle cx="{x}" cy="{y+20}" r="3" fill="#9d4edd" class="dot" style="animation-delay: -{delay+1.0}s; animation-direction: reverse;" />'
        
    svg += '</svg>'
    
    with open(filename, 'w') as f:
        f.write(svg)
    print(f"Saved {filename}")

def create_hud_panel_svg(filename, title="SYSTEM_CORE"):
    width, height = 600, 300
    
    svg = f'<svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">'
    
    # Panel Background
    svg += f'<path d="M 20 0 L {width-20} 0 L {width} 20 L {width} {height-20} L {width-20} {height} L 20 {height} L 0 {height-20} L 0 20 Z" fill="#0a0e17" stroke="#00ffff" stroke-width="2" fill-opacity="0.8"/>'
    
    # Corner Accents
    svg += f'<path d="M 5 20 L 5 5 L 20 5" fill="none" stroke="#ff0055" stroke-width="3" />'
    svg += f'<path d="M {width-20} 5 L {width-5} 5 L {width-5} 20" fill="none" stroke="#ff0055" stroke-width="3" />'
    svg += f'<path d="M {width-5} {height-20} L {width-5} {height-5} L {width-20} {height-5}" fill="none" stroke="#ff0055" stroke-width="3" />'
    svg += f'<path d="M 20 {height-5} L 5 {height-5} L 5 {height-20}" fill="none" stroke="#ff0055" stroke-width="3" />'
    
    # Title Box
    svg += f'<rect x="{width/2 - 100}" y="-10" width="200" height="30" fill="#00ffff" />'
    svg += f'<text x="{width/2}" y="10" font-family="Courier New" font-weight="bold" font-size="16" fill="#000000" text-anchor="middle">{title}</text>'
    
    # Grid Lines
    for i in range(1, 10):
        y = i * (height/10)
        svg += f'<line x1="20" y1="{y}" x2="{width-20}" y2="{y}" stroke="#1a1f35" stroke-width="1" />'
        
    svg += '</svg>'
    
    with open(filename, 'w') as f:
        f.write(svg)
    print(f"Saved {filename}")

if __name__ == "__main__":
    create_radar_svg("assets/radar.svg")
    create_helix_svg("assets/helix.svg")
    create_hud_panel_svg("assets/hud_panel.svg")
