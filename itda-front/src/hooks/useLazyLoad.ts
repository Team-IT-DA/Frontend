import { useEffect, useState, useRef } from "react";
import skeletonUI from "images/skeletonUI.gif";

const useLazyLoad = (src: string) => {
  const [imageSrc, setImageSrc] = useState(skeletonUI);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    let observer: IntersectionObserver;
    if (imageRef) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.3 }
      );
      imageRef.current && observer.observe(imageRef.current);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, [imageRef, imageSrc, src]);

  return { imageSrc, imageRef };
};

export default useLazyLoad;
