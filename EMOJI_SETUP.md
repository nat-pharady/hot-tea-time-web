# Emoji Replacement Setup Guide

Your website has been updated to use custom PNG images instead of emojis! 

## Required Image Files

Copy these PNG files to the `images/emojis/` folder:

| File Name | Purpose | Replaces |
|-----------|---------|----------|
| `apricots.png` | Sparkle points (✦) | Used in hero section, feature lists, pricing |
| `cherries.png` | Hearts (❤️) | Used in cherry/hearts list items |
| `raspberries.png` | Bullet points | Optional accent bullets |
| `rose.png` | Decorative element (❧) | Section dividers, footer |
| `cake.png` | Premium/Lock (🔒) | Premium badges, AI generator icon |
| `cupcake.png` | Success/Check (✓) | Toast notifications |
| `eye.png` | Stealth Mode (👁️) | Stealth mode button |

## Folder Structure

```
hot-tea-time-web/
├── images/
│   └── emojis/
│       ├── apricots.png
│       ├── cake.png
│       ├── cherries.png
│       ├── cupcake.png
│       ├── eye.png
│       ├── raspberries.png
│       └── rose.png
```

## What's Been Updated

✅ All HTML files updated to reference image files
✅ CSS updated to use background-image for ::before and ::after pseudo-elements
✅ Image folder created at `images/emojis/`

## Next Steps

1. Save/convert your provided images as PNG files
2. Name them according to the table above
3. Place them in `images/emojis/` folder
4. Done! Your website will now use custom image assets instead of emojis
