import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // We create the observer inside the useEffect hook.
    const observer = new IntersectionObserver(([entry]) => {
      // If the element is intersecting (visible) and we haven't already marked it as such...
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
        // Once the element is visible, we can stop observing it for performance.
        observer.unobserve(entry.target);
      }
    }, options);

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    // The cleanup function is crucial. It runs when the component unmounts
    // to prevent memory leaks by stopping the observation.
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options, isVisible]); // Dependencies for the useEffect hook

  return [elementRef, isVisible];
};

export default useIntersectionObserver;

