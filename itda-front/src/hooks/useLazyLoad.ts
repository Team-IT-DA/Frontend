import { useEffect, useState, useRef } from "react";

const useLazyLoad = (src: string) => {
  const [imageSrc, setImageSrc] = useState(
    "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"
  );
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
        { threshold: 0.4 }
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
