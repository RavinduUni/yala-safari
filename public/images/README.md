# Images Directory Structure

This folder contains all static images for the Yala Sri Lanka website.

## Folder Organization

### `/wildlife`
Images of animals found in Yala National Park:
- Leopards
- Elephants
- Sloth bears
- Birds
- Deer and other mammals

### `/landscapes`
Scenic views and terrain images:
- Open plains
- Forests
- Water bodies
- Coastal areas
- Scrublands

### `/safari`
Safari experience images:
- Jeep safaris
- Safari guides
- Wildlife tracking
- Safari equipment

### `/heritage`
Historical and cultural sites:
- Sithulpahuwa Rock Temple
- Magul Vihara
- Ancient ruins
- Archaeological sites

## Usage in Next.js

Images in the public folder are served from the root URL. For example:
```jsx
<img src="/images/wildlife/leopard.jpg" alt="Sri Lankan Leopard" />
```

Or with Next.js Image component:
```jsx
import Image from 'next/image'

<Image 
  src="/images/wildlife/leopard.jpg" 
  alt="Sri Lankan Leopard"
  width={800}
  height={600}
/>
```

## Image Guidelines

- Use descriptive filenames (e.g., `leopard-yala-tree.jpg`)
- Optimize images before uploading (compress, resize)
- Preferred formats: WebP for photos, SVG for logos/icons
- Keep file sizes under 500KB for faster loading
- Use consistent naming conventions (lowercase, hyphens)
