import * as React from "react";

// Measures a DOM node's content box and re-measures on resize.
// Returns null until the first measurement has happened (useLayoutEffect
// runs before paint, so consumers never render a stale/guessed size).
export function useSize(ref) {
  const [size, setSize] = React.useState(null);

  React.useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const updateSize = () => {
      const { width, height } = node.getBoundingClientRect();
      setSize({ width, height });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return size;
}
