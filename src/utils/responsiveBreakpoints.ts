import { useEffect, useState } from "react";

type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};

type BreakpointPrefix = "sm" | "md" | "lg" | "xl" | "2xl";
const TAILWIND_BREAKPOINS: Record<BreakpointPrefix, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowDimensions;
};

export const useTailwindBreakpoint = (
  breakpoint: BreakpointPrefix
): boolean => {
  const windowDimensions = useWindowDimensions();

  if (windowDimensions.width) {
    const isMeetingRequirement: boolean =
      windowDimensions.width <= TAILWIND_BREAKPOINS[breakpoint];
    return isMeetingRequirement;
  }
  return false; // in SSR
};
