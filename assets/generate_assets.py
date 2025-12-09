import math
import random
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import pyfiglet

# Colors
BG_COLOR = (10, 14, 23) # #0a0e17
NEBULA_BLUE = (26, 31, 53) # #1a1f35
CYAN = (0, 255, 255) # #00ffff
PURPLE = (157, 78, 221) # #9d4edd
GREEN = (57, 255, 20) # #39ff14
WHITE = (255, 255, 255)

def create_gradient(width, height, c1, c2):
    base = Image.new('RGB', (width, height), c1)
    top = Image.new('RGB', (width, height), c2)
    mask = Image.new('L', (width, height))
    mask_data = []
    for y in range(height):
        for x in range(width):
            mask_data.append(int(255 * (y / height)))
    mask.putdata(mask_data)
    base.paste(top, (0, 0), mask)
    return base

def draw_3d_text_gif(text, filename, font_name='isometric3'):
    # Generate ASCII art
    try:
        ascii_art = pyfiglet.figlet_format(text, font=font_name)
    except:
        ascii_art = pyfiglet.figlet_format(text) # Fallback

    lines = ascii_art.split('\n')
    width = max(len(line) for line in lines) * 12
    height = len(lines) * 20 + 50
    
    # Create frames
    frames = []
    for i in range(20): # 20 frames for a shimmering effect
        img = Image.new('RGB', (width, height), BG_COLOR)
        draw = ImageDraw.Draw(img)
        
        y = 20
        # Draw text
        for line_idx, line in enumerate(lines):
            for char_idx, char in enumerate(line):
                if char != ' ':
                    # Shimmer effect
                    brightness = int(155 + 100 * math.sin(i * 0.5 + char_idx * 0.1))
                    color = (0, brightness, brightness) # Cyan shimmer
                    x = char_idx * 12
                    draw.text((x, y), char, fill=color)
            y += 18
        
        frames.append(img)
        
    frames[0].save(filename, save_all=True, append_images=frames[1:], duration=100, loop=0)
    print(f"Saved {filename}")

def project_point(x, y, z, width, height, scale, time_rot):
    # Rotate around Y
    angle = time_rot
    rx = x * math.cos(angle) - z * math.sin(angle)
    rz = x * math.sin(angle) + z * math.cos(angle)
    ry = y
    
    # Rotate around X slightly for tilt
    tilt = 0.3
    ry_rot = ry * math.cos(tilt) - rz * math.sin(tilt)
    rz_rot = ry * math.sin(tilt) + rz * math.cos(tilt)
    
    # Perspective
    camera_z = 5
    factor = 200 / (camera_z + rz_rot)
    
    px = rx * factor * scale + width / 2
    py = ry_rot * factor * scale + height / 2
    
    return (px, py), rz_rot

def draw_globe_gif(filename):
    width, height = 400, 400
    scale = 1.5
    frames = []
    
    # Generate points for sphere
    points = []
    num_lat = 10
    num_lon = 12
    for lat in range(num_lat + 1):
        phi = math.pi * lat / num_lat
        for lon in range(num_lon):
            theta = 2 * math.pi * lon / num_lon
            x = math.sin(phi) * math.cos(theta)
            y = math.cos(phi)
            z = math.sin(phi) * math.sin(theta)
            points.append((x, y, z))
            
    # Animation loop
    for f in range(30):
        img = Image.new('RGB', (width, height), BG_COLOR)
        draw = ImageDraw.Draw(img)
        angle = f * (2 * math.pi / 30)
        
        # Draw connections
        # This is strictly wireframe, need to connect points
        # Horizontal lines (Latitude)
        for lat in range(num_lat + 1):
            for lon in range(num_lon):
                p1_idx = lat * num_lon + lon
                p2_idx = lat * num_lon + ((lon + 1) % num_lon)
                
                pt1 = points[p1_idx]
                pt2 = points[p2_idx]
                
                (x1, y1), z1 = project_point(pt1[0], pt1[1], pt1[2], width, height, scale, angle)
                (x2, y2), z2 = project_point(pt2[0], pt2[1], pt2[2], width, height, scale, angle)
                
                # Depth cues
                depth = (z1 + z2) / 2
                color = CYAN if depth < 0 else (0, 100, 100) # Dim back lines
                width_line = 2 if depth < 0 else 1
                
                draw.line([(x1, y1), (x2, y2)], fill=color, width=width_line)

        # Vertical lines (Longitude)
        for lat in range(num_lat):
            for lon in range(num_lon):
                 p1_idx = lat * num_lon + lon
                 p2_idx = (lat + 1) * num_lon + lon
                 
                 pt1 = points[p1_idx]
                 pt2 = points[p2_idx]
                 
                 (x1, y1), z1 = project_point(pt1[0], pt1[1], pt1[2], width, height, scale, angle)
                 (x2, y2), z2 = project_point(pt2[0], pt2[1], pt2[2], width, height, scale, angle)
                 
                 depth = (z1 + z2) / 2
                 color = PURPLE if depth < 0 else (80, 40, 110)
                 width_line = 2 if depth < 0 else 1
                 
                 draw.line([(x1, y1), (x2, y2)], fill=color, width=width_line)

        frames.append(img)

    frames[0].save(filename, save_all=True, append_images=frames[1:], duration=100, loop=0)
    print(f"Saved {filename}")

def draw_cube_gif(filename):
    width, height = 400, 400
    frames = []
    
    # Cube vertices
    vertices = [
        (-1, -1, -1), (1, -1, -1), (1, 1, -1), (-1, 1, -1),
        (-1, -1, 1), (1, -1, 1), (1, 1, 1), (-1, 1, 1)
    ]
    edges = [
        (0,1), (1,2), (2,3), (3,0), # Back face
        (4,5), (5,6), (6,7), (7,4), # Front face
        (0,4), (1,5), (2,6), (3,7)  # Connecting
    ]
    
    for f in range(30):
        img = Image.new('RGB', (width, height), BG_COLOR)
        draw = ImageDraw.Draw(img)
        angle = f * (2 * math.pi / 30)
        
        # Rotate cube
        # Rotation around X and Y
        rot_pts = []
        for x, y, z in vertices:
            # Rotate Y
            rx = x * math.cos(angle) - z * math.sin(angle)
            rz = x * math.sin(angle) + z * math.cos(angle)
            ry = y
            
            # Rotate X
            tilt = 0.5
            ry2 = ry * math.cos(tilt) - rz * math.sin(tilt)
            rz2 = ry * math.sin(tilt) + rz * math.cos(tilt)
            rx2 = rx

            rot_pts.append((rx2, ry2, rz2))

        # Project and Draw
        proj_pts = []
        for x, y, z in rot_pts:
            scale = 100
            px = x * scale + width/2
            py = y * scale + height/2
            proj_pts.append((px, py))
            
        for i, j in edges:
             p1 = proj_pts[i]
             p2 = proj_pts[j]
             # Color based on depth? simplified here
             draw.line([p1, p2], fill=GREEN, width=3)
             
        frames.append(img)
        
    frames[0].save(filename, save_all=True, append_images=frames[1:], duration=100, loop=0)
    print(f"Saved {filename}")

if __name__ == "__main__":
    draw_3d_text_gif("ASHRAF", "assets/header_3d.gif")
    draw_globe_gif("assets/sphere_3d.gif")
    draw_cube_gif("assets/cube_3d.gif")
