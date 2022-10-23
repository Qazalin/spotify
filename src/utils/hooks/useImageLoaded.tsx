import { MutableRefObject, useEffect, useRef, useState } from "react";

export function useImageLoaded(): [
  MutableRefObject<HTMLImageElement | null>,
  boolean,
  () => void
] {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoad = () => setIsLoaded(true);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return [ref, isLoaded, onLoad];
}
