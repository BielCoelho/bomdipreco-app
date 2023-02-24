import { useState, useEffect } from "react";

interface IWindowSize {
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
}

function useWindowSize(): IWindowSize {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
    isMobile: false,
  });

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 768;
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
