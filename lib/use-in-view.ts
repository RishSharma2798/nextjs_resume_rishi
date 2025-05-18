"use client";

import { useState, useEffect, useRef } from 'react';

interface InViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView({
  threshold = 0,
  triggerOnce = false,
  rootMargin = '0px',
}: InViewOptions = {}): [React.RefObject<any>, boolean] {
  const ref = useRef<Element | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        // Unobserve if triggerOnce is true and element is in view
        if (inView && triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return [ref, isInView];
}