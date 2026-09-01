import os
from rembg import remove
from PIL import Image

def main():
    input_dir = 'public/3d'
    
    # Process frames 1 to 60
    for i in range(1, 61):
        filename = f'ezgif-frame-{i:03d}.jpg'
        input_path = os.path.join(input_dir, filename)
        output_filename = f'ezgif-frame-{i:03d}.png'
        output_path = os.path.join(input_dir, output_filename)
        
        if os.path.exists(input_path):
            print(f"Processing {filename}...")
            try:
                input_image = Image.open(input_path)
                output_image = remove(input_image)
                output_image.save(output_path)
            except Exception as e:
                print(f"Failed to process {filename}: {e}")
        else:
            print(f"Skipping {filename}, not found.")
            
if __name__ == '__main__':
    main()
