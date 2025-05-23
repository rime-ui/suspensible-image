import { ComponentPropsWithRef, use } from "react";



interface ImageProps extends ComponentPropsWithRef<"img"> {
    src: string
    alt: string
}

export function SuspensibleImage({ src, alt, ...props }: ImageProps) {
    const imagePromise = createImageResource(src);
    const image = use(imagePromise)

    return <img src={image.src} alt={alt} loading="lazy" {...props} />
}

const cache = new Map<string, Promise<HTMLImageElement>>();

function createImageResource(src: string) {
    console.log(cache)
    let promise = cache.get(src);
    if (!promise) {
        promise = loadImage(src);
        cache.set(src, promise)
    }

    return promise
}


function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve,) => {
        const image = new window.Image();
        image.src = src;
        image.onload = () => resolve(image);
        // image.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    });
}