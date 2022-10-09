import { useEffect, useState } from "react";

type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};

export type BreakpointPrefix = "sm" | "md" | "lg" | "xl" | "2xl";
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
  const { width } = useWindowDimensions();

  if (width) {
    const isMeetingRequirement: boolean =
      width <= TAILWIND_BREAKPOINS[breakpoint];
    return isMeetingRequirement;
  }
  return false; // in SSR
};

export const useTailwindScreen = () => {
  const [tailwindDim, setTailwindDim] = useState<BreakpointPrefix>("sm");

  useEffect(() => {
    function handleResize(): void {
      if (window.innerWidth <= TAILWIND_BREAKPOINS.sm) {
        setTailwindDim("sm");
      } else if (window.innerWidth <= TAILWIND_BREAKPOINS.md) {
        setTailwindDim("md");
      } else if (window.innerWidth <= TAILWIND_BREAKPOINS.lg) {
        setTailwindDim("lg");
      } else if (window.innerWidth <= TAILWIND_BREAKPOINS.xl) {
        setTailwindDim("xl");
      } else if (window.innerWidth <= TAILWIND_BREAKPOINS["2xl"]) {
        setTailwindDim("2xl");
      } else {
        setTailwindDim("2xl"); // always set it to the largest breakpoint unless I tell you otherwise
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return tailwindDim;
};
