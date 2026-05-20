"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  type?: "center" | "full" | "dropdown";
  coords?: { top: number; left: number; width?: number };
  id?: string;
}

export function Modal({
  isOpen,
  onClose,
  children,
  className = "",
  type = "center",
  coords,
  id,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsAnimatingOut(false);
      document.body.classList.add("no-scroll");
    } else if (shouldRender) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsAnimatingOut(false);
        document.body.classList.remove("no-scroll");
      }, 350); // Match animation duration in CSS
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!mounted || !shouldRender) return null;

  // Determine animation classes based on type and state
  let animationClass = "";
  if (
    type === "full" &&
    typeof window !== "undefined" &&
    window.innerWidth < 768
  ) {
    animationClass = isAnimatingOut
      ? "animate-slide-up-out"
      : "animate-slide-up-in";
  } else {
    animationClass = isAnimatingOut ? "animate-modal-out" : "animate-modal-in";
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
      id={id}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto ${
          isAnimatingOut ? "opacity-0" : "opacity-100"
        }`}
        onClick={onClose}
      />

      {/* Content */}
      <div
        className={`relative z-10 pointer-events-auto ${animationClass} ${className} ${
          type === "full" ? "w-full h-full md:h-auto md:w-auto" : ""
        }`}
        style={
          type === "dropdown" &&
          coords &&
          typeof window !== "undefined" &&
          window.innerWidth >= 768
            ? {
                position: "absolute",
                top: coords.top + 8,
                left: coords.left,
                margin: 0,
              }
            : {}
        }
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
