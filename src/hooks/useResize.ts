import { useState, useEffect, useCallback } from 'react';

const useResize = (min: number, max: number) => {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(300);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        if (e.clientX <= min || e.clientX >= max) return;
        setWidth(e.clientX);
      }
    },
    [isResizing, min, max],
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return { width, isResizing, startResizing };
};

export default useResize;
