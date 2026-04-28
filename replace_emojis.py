import os
import glob

# Define replacements
replacements = {
    '🔒': '<img src="images/emojis/cake.png" alt="Premium" style="width:12px; height:12px; display:inline-block; vertical-align:middle; margin-right:4px;">',
    '👁️': '<img src="images/emojis/eye.png" alt="Stealth" style="width:14px; height:14px; display:inline-block; vertical-align:middle;">',
    '✓': '<img src="images/emojis/cupcake.png" alt="Success" style="width:14px; height:14px; display:inline-block; vertical-align:middle;">',
}

# List of HTML files to process
html_files = ['home.html', 'brew.html', 'features.html', 'asset-marketplace.html']

for file in html_files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Apply replacements
        for emoji, replacement in replacements.items():
            content = content.replace(emoji, replacement)
        
        # Write back
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Updated {file}")
    else:
        print(f"✗ File not found: {file}")

print("\nAll emoji replacements complete!")
