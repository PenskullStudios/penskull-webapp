"use client";
import React, { useRef, useEffect, useState } from "react";

export default function Heading({ title }: { title: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.75 } // Adjust the threshold as needed
    );

    const currentRef = headingRef.current; // Store the current value of headingRef

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <h1
      ref={headingRef}
      className={`uppercase text-center lg:text-left white-neon text-5xl lg:text-7xl tracking-wide ${
        isVisible ? "animate-ease-in animate-fade" : ""
      }`}
    >
      {title}
    </h1>
  );
}
