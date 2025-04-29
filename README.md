# Suspensible Image

## Make Your Image Loading Smooth and Faster with a Clean Skeleton Loader

When working with images in React, it's important to provide a smooth loading experience for users. One effective way to do this is by using a **skeleton loader** while the image is being fetched. This approach improves user experience by avoiding blank spaces and providing a placeholder until the image is ready.

### Important Note:
This approach works **only with React 19**.

### Key Benefits:
- **Improved UX**: Users will see a skeleton or placeholder while the image loads, which avoids the blank screen effect.
- **Faster Perceived Loading**: By using skeleton loaders, you make the loading process appear faster.
- **Seamless Integration**: You can easily integrate a skeleton loader with the image component, without adding too much complexity.

### How to Use:

```jsx
import { Suspense } from "react";
import { Image, Skeleton } from "@rime-ui/suspensible-image";
export default function App() {
    return (
       <Suspense fallback={<Skeleton />}>
         <Image src="https://via.placeholder.com/150" />
       </Supense>
    );
}
```