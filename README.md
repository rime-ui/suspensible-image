# Suspensible Image

## Make Your Image Loading Smooth and Faster with a Clean Skeleton Loader

When working with images in React, it's important to provide a smooth loading experience for users. One effective way to do this is by using a **skeleton loader** while the image is being fetched. This approach improves user experience by avoiding blank spaces and providing a placeholder until the image is ready.

### Important Note:
- React 19 Required.
- No SSR Support.

### Key Benefits:
- **Skeleton Loading**: Provides visual feedback during image loading with an animated shimmer effect.
- **React 19 Suspense**: Uses React's latest Suspense API for handling asynchronous operations.
- **Built-in Caching**: Stores previously loaded images to avoid redundant network requests


### How to Use:

```tsx
import { Suspense } from "react";
import { SuspensibleImage, Skeleton } from "@rime-ui/suspensible-image";
import "@rime-ui/suspensible-image/dist/index.css";

function MyComponent() {
  return (
    <Suspense fallback={<Skeleton />}>
      <SuspensibleImage src="https://example.com/image.jpg" alt="Description" />
    </Suspense>
  );
}
```