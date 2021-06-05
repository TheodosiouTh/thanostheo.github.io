import { useEffect, useState } from 'react';
/**
 * Checks if a component is visible to the user
 * @param {Reference} ref The refernence object of a react component
 * @returns True if component is visible else returns false
 */
export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect(); };
  });

  return isIntersecting;
}
