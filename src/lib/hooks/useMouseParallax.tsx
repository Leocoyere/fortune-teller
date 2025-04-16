import { useState, useEffect, useMemo } from "react";

export default function useMouseParallax(ref: React.RefObject<HTMLElement>) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = useMemo(() => windowWidth < 1000, [windowWidth]);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current || isMobile) return;

    const { clientX, clientY } = event;
    const rect = ref.current.getBoundingClientRect();

    setMouseX((clientX - rect.left) / rect.width - 0.5);
    setMouseY((clientY - rect.top) / rect.height - 0.5);
  };

  const getTransform = (depth: number) => {
    if (isMobile) return undefined;
    const offsetX = mouseX * depth * 10;
    const offsetY = mouseY * depth * 10;
    return `translate(-0%, -0%) rotateY(${offsetX * 0.2}deg) rotateX(${-offsetY * 0.2}deg) translate3d(${offsetX}px, ${offsetY}px, ${depth}px)`;
  };

  const resetTransform = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(-0%, -0%) rotateY(0deg) rotateX(0deg) translate3d(0px, 0px, 0px)";
  }

  return { handleMouseMove, getTransform, resetTransform };
}