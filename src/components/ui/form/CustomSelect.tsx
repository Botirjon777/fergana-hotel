"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
  theme?: "light" | "dark";
}

export function CustomSelect({
  options,
  value,
  onChange,
  label,
  className = "",
  theme = "dark",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`relative flex flex-col gap-1 ${className}`}
      ref={containerRef}
    >
      {label && (
        <label className="text-[8px] tracking-[2px] uppercase text-gold font-bold">
          {label}
        </label>
      )}
      <div
        className={`flex items-center justify-between cursor-pointer group px-4 h-[58px] border transition-all duration-300 ${
          theme === "light"
            ? "bg-white border-gold/30 hover:border-gold focus:bg-white text-text-dark rounded-[4px]"
            : "border-transparent"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-xs font-light tracking-[0.5px] truncate ${theme === "light" ? "text-text-dark font-jost" : "text-white"}`}>
          {selectedOption ? selectedOption.label : "Select..."}
        </span>
        <FiChevronDown
          className={`text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div className={`absolute top-full left-0 right-0 mt-2 border border-gold/20 shadow-2xl z-[1000] animate-[fadeIn_0.2s_ease-out] ${
          theme === "light" ? "bg-white" : "bg-[#1a1108]"
        }`}>
          <div className="max-h-[200px] overflow-y-auto custom-scrollbar">
            {options.map((option) => (
              <div
                key={option.value}
                className={`px-4 py-3 text-xs font-light cursor-pointer transition-colors duration-200 hover:bg-gold/10 hover:text-gold ${
                  value === option.value
                    ? "text-gold bg-gold/5"
                    : theme === "light" ? "text-gray-800" : "text-white/70"
                }`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
