
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
    
    svg += '</svg>'
    
    with open(filename, 'w') as f:
        f.write(svg)
    print(f"Saved {filename}")

def create_helix_svg(filename):
    width, height = 800, 150
    
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
    svg += f'<rect width="{width}" height="{height}" fill="#0a0e17" />'
    svg += f'<line x1="0" y1="{height/2}" x2="{width}" y2="{height/2}" stroke="#1a1f35" stroke-width="2" />'
    
    num_dots = 40
    for i in range(num_dots):
        x = i * (width / num_dots)
        y = height / 2
        delay = i * 0.1
        svg += f'<circle cx="{x}" cy="{y-20}" r="3" fill="#00ffff" class="dot" style="animation-delay: -{delay}s" />'
        svg += f'<circle cx="{x}" cy="{y+20}" r="3" fill="#9d4edd" class="dot" style="animation-delay: -{delay+1.0}s; animation-direction: reverse;" />'
        
    svg += '</svg>'
    
    with open(filename, 'w') as f:
        f.write(svg)
    print(f"Saved {filename}")

def create_project_card(filename, title, subtitle, color):
    width, height = 300, 150
    
    svg = f'<svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">'
    # Font import (often ignored but good for local)
    svg += '<style>.text { font-family: monospace; font-weight: bold; }</style>'
    
    # Frame
    svg += f'<path d="M 10 0 L {width-10} 0 L {width} 10 L {width} {height-10} L {width-10} {height} L 10 {height} L 0 {height-10} L 0 10 Z" fill="#0d1117" stroke="{color}" stroke-width="2" stroke-opacity="0.8"/>'
    
    # Corners
    marker_len = 15
    svg += f'<polyline points="{marker_len},4 4,4 4,{marker_len}" fill="none" stroke="{color}" stroke-width="2" />' 
    svg += f'<polyline points="{width-marker_len},4 {width-4},4 {width-4},{marker_len}" fill="none" stroke="{color}" stroke-width="2" />' 
    svg += f'<polyline points="{width-marker_len},{height-4} {width-4},{height-4} {width-4},{height-marker_len}" fill="none" stroke="{color}" stroke-width="2" />' 
    svg += f'<polyline points="{marker_len},{height-4} 4,{height-4} 4,{height-marker_len}" fill="none" stroke="{color}" stroke-width="2" />' 

    # Title
    svg += f'<text x="{width/2}" y="50" fill="{color}" font-family="Courier New, monospace" font-weight="bold" font-size="18" text-anchor="middle" class="text">{title}</text>'
    
    # Subtitle
    svg += f'<text x="{width/2}" y="80" fill="#aaaaaa" font-family="sans-serif" font-size="12" text-anchor="middle">{subtitle}</text>'

    # Status Bar
    svg += f'<rect x="40" y="{height-30}" width="{width-80}" height="4" fill="#333" rx="2" />'
    svg += f'<rect x="40" y="{height-30}" width="{width-120}" height="4" fill="{color}" rx="2" />'

    svg += '</svg>'
    
    with open(filename, 'w') as f:
        f.write(svg)
    print(f"Saved {filename}")

if __name__ == "__main__":
    create_radar_svg("assets/radar.svg")
    create_helix_svg("assets/helix.svg")
    # Generate specific cards
    create_project_card("assets/card_alpha.svg", "PROJECT_ALPHA", "Next-Gen Rust Engine", "#00ffff")
    create_project_card("assets/card_sentinel.svg", "NET_SENTINEL", "AI Cyber Firewall", "#ff0055")
    create_project_card("assets/card_void.svg", "VOID_RENDER", "WebGL 2.0 Visualizer", "#9d4edd")

