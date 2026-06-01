# Image Placeholders Guide

This directory contains all images used in the IPE School website.

## Directory Structure

```
images/
├── hero/           # Hero section images
├── courses/        # Course thumbnail images
├── teachers/       # Teacher profile photos
├── students/       # Student photos and results
├── gallery/        # Gallery images
├── logos/          # Partner/university logos
├── testimonials/   # Testimonial images
└── partners/       # Partner logos
```

## Recommended Image Sizes

### Hero Images
- **hero-image.jpg**: 1920x1080px (16:9 ratio)
- **hero-video.mp4**: 1920x1080px (optional)

### Course Images
- **course-name.jpg**: 800x600px (4:3 ratio)
- Use high-quality images that represent the course topic

### Teacher Photos
- **teacher-name.jpg**: 400x400px (1:1 ratio, square)
- Professional headshots with clean backgrounds

### Student Results
- **result-1.jpg, result-2.jpg, etc.**: Various sizes
- IELTS/CEFR certificates, achievement photos

### Gallery Images
- Various sizes, maintain good quality
- Campus photos, classroom images, event photos

### Logos
- **logo.png/svg**: Your main logo (transparent background preferred)
- Partner logos: 300x100px (approx)

## Adding Images

1. Place your images in the appropriate directory
2. Update the image paths in the corresponding data files:
   - `src/app/data/courses.ts` - for course images
   - `src/app/data/teachers.ts` - for teacher photos

## Tips

- Use WebP format for better performance
- Optimize images before uploading (use tools like TinyPNG)
- Keep file sizes under 500KB for faster loading
- Use descriptive filenames (e.g., `general-english-course.jpg`)
