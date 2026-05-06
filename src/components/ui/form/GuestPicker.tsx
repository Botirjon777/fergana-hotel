"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiUsers, FiMinus, FiPlus } from "react-icons/fi";
import { useTranslations } from "next-intl";

function CustomAgeSelect({
  value,
  onChange,
  theme
}: {
  value: number;
  onChange: (value: number) => void;
  theme: "light" | "dark";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    { value: 0, label: "до 1 года" },
    { value: 1, label: "1 год" },
    { value: 2, label: "2 года" },
  ];

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between gap-3 border rounded px-3 py-1.5 text-sm min-w-[110px] outline-none transition-colors ${
          theme === "light" 
            ? "border-gray-300 text-gray-800 bg-white hover:border-gold" 
            : "border-white/20 text-white bg-transparent hover:border-gold"
        }`}
      >
        <span>{selectedOption?.label}</span>
        <span className="text-[10px] text-gold">▼</span>
      </button>
      
      {isOpen && (
        <div className={`absolute top-full left-0 right-0 mt-1 rounded shadow-lg z-[1600] overflow-hidden ${
          theme === "light" 
            ? "bg-white border border-gray-200" 
            : "bg-[#2a1f14] border border-gold/20"
        }`}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`px-3 py-2 text-sm cursor-pointer transition-colors ${
                theme === "light"
                  ? opt.value === value ? "bg-gold/10 text-gold font-medium" : "text-gray-800 hover:bg-gray-100"
                  : opt.value === value ? "bg-gold/20 text-gold font-medium" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface GuestPickerProps {
  adults: number;
  childrenAges: number[];
  onChange: (adults: number, childrenAges: number[]) => void;
  label?: string;
  className?: string;
  theme?: "light" | "dark";
}

export function GuestPicker({
  adults,
  childrenAges,
  onChange,
  label,
  className = "",
  theme = "dark",
}: GuestPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Booking");

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

  const handleAdultsChange = (delta: number) => {
    const newAdults = Math.max(1, Math.min(3, adults + delta));
    
    // Adjust children if total exceeds 4
    let newChildrenAges = [...childrenAges];
    const maxChildren = 4 - newAdults;
    if (newChildrenAges.length > maxChildren) {
      newChildrenAges = newChildrenAges.slice(0, maxChildren);
    }
    
    onChange(newAdults, newChildrenAges);
  };

  const handleChildrenChange = (delta: number) => {
    const maxChildren = 4 - adults;
    const currentChildren = childrenAges.length;
    
    if (delta > 0 && currentChildren < maxChildren) {
      onChange(adults, [...childrenAges, 0]); // Add child with default age 0
    } else if (delta < 0 && currentChildren > 0) {
      onChange(adults, childrenAges.slice(0, -1)); // Remove last child
    }
  };

  const handleAgeChange = (index: number, age: number) => {
    const newChildrenAges = [...childrenAges];
    newChildrenAges[index] = age;
    onChange(adults, newChildrenAges);
  };

  // Determine display text
  const totalGuests = adults + childrenAges.length;
  // Localized string for guests count
  const displayText = `${adults} Взрослых` + (childrenAges.length > 0 ? `, ${childrenAges.length} Дет.` : "");

  return (
    <div className={`relative flex flex-col gap-1 ${className}`} ref={containerRef}>
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
        <div className="flex flex-col">
          <span className={`text-[9px] ${theme === "light" ? "text-gray-500" : "text-white/50"}`}>Количество гостей</span>
          <span className={`text-sm font-medium tracking-[0.5px] truncate ${theme === "light" ? "text-text-dark font-jost" : "text-white"}`}>
            {displayText}
          </span>
        </div>
        <FiUsers className="text-gold text-lg" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[1500] md:absolute md:top-full md:inset-auto md:left-0 md:right-0 md:mt-2 md:border md:shadow-2xl animate-[fadeIn_0.2s_ease-out]">
          {/* Mobile Overlay Background (clickable to close) */}
          <div 
            className="md:hidden absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu Container */}
          <div className={`absolute bottom-0 left-0 right-0 w-full md:relative md:bottom-auto rounded-t-2xl md:rounded-md max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible custom-scrollbar flex flex-col ${
             theme === "light" ? "bg-white text-gray-800 md:border-gold/30" : "bg-[#1a1108] text-white md:border-gold/20"
          }`}>
             {/* Mobile Header */}
             <div className="md:hidden px-6 py-4 border-b border-gold/20 flex justify-between items-center sticky top-0 bg-inherit z-10">
                <span className="font-bold text-sm tracking-widest uppercase">{label || "Guests"}</span>
                <button onClick={() => setIsOpen(false)} className="text-2xl leading-none">&times;</button>
             </div>

             <div className="p-6 md:p-5 flex flex-col gap-6 pb-24 md:pb-6">
                
                {/* Adults Counter */}
                <div className="flex justify-between items-center">
                   <div>
                     <div className={`text-sm font-medium ${theme === "light" ? "text-gray-800" : "text-white"}`}>Взрослые</div>
                   </div>
                   <div className="flex items-center gap-4">
                     <button 
                       className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${adults <= 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-gold/10"} ${theme === "light" ? "border-gray-300 text-gray-800" : "border-white/20 text-white"}`}
                       onClick={() => handleAdultsChange(-1)}
                       disabled={adults <= 1}
                     >
                       <FiMinus />
                     </button>
                     <span className={`w-4 text-center font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}>{adults}</span>
                     <button 
                       className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${adults >= 3 || adults + childrenAges.length >= 4 ? "opacity-30 cursor-not-allowed" : "hover:bg-gold/10"} ${theme === "light" ? "border-gray-300 text-gray-800" : "border-white/20 text-white"}`}
                       onClick={() => handleAdultsChange(1)}
                       disabled={adults >= 3 || adults + childrenAges.length >= 4}
                     >
                       <FiPlus />
                     </button>
                   </div>
                </div>

                {/* Children Counter */}
                <div className="flex justify-between items-center">
                   <div>
                     <div className={`text-sm font-medium ${theme === "light" ? "text-gray-800" : "text-white"}`}>Дети младше 3 лет</div>
                   </div>
                   <div className="flex items-center gap-4">
                     <button 
                       className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${childrenAges.length <= 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gold/10"} ${theme === "light" ? "border-gray-300 text-gray-800" : "border-white/20 text-white"}`}
                       onClick={() => handleChildrenChange(-1)}
                       disabled={childrenAges.length <= 0}
                     >
                       <FiMinus />
                     </button>
                     <span className={`w-4 text-center font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}>{childrenAges.length}</span>
                     <button 
                       className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${childrenAges.length >= (4 - adults) ? "opacity-30 cursor-not-allowed" : "hover:bg-gold/10"} ${theme === "light" ? "border-gray-300 text-gray-800" : "border-white/20 text-white"}`}
                       onClick={() => handleChildrenChange(1)}
                       disabled={childrenAges.length >= (4 - adults)}
                     >
                       <FiPlus />
                     </button>
                   </div>
                </div>

                {/* Children Ages */}
                {childrenAges.length > 0 && (
                  <div className={`pt-4 border-t ${theme === "light" ? "border-gray-200" : "border-white/10"} flex flex-col gap-4`}>
                    {childrenAges.map((age, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className={`text-xs ${theme === "light" ? "text-gray-600" : "text-white/70"}`}>
                          Возраст {index + 1} ребёнка
                        </div>
                        <CustomAgeSelect 
                          value={age}
                          onChange={(newAge) => handleAgeChange(index, newAge)}
                          theme={theme}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Mobile specific close button */}
                <button 
                  className="md:hidden mt-4 bg-gold hover:bg-gold-dark text-white py-3 rounded-md font-bold tracking-wider uppercase text-xs"
                  onClick={() => setIsOpen(false)}
                >
                  Готово
                </button>

             </div>
          </div>
        </div>
      )}
    </div>
  );
}

