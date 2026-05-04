"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CustomDatePickerProps {
  value: string; // ISO string or YYYY-MM-DD
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

export function CustomDatePicker({
  value,
  onChange,
  label,
  className = "",
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(
    value ? new Date(value) : new Date(),
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedDate = value ? new Date(value) : null;

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

  const daysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    // Format to YYYY-MM-DD for consistency
    const formatted = newDate.toISOString().split("T")[0];
    onChange(formatted);
    setIsOpen(false);
  };

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(viewDate.getFullYear(), viewDate.getMonth());
    const firstDay = firstDayOfMonth(
      viewDate.getFullYear(),
      viewDate.getMonth(),
    );

    // Padding for first day of week
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let d = 1; d <= totalDays; d++) {
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === d &&
        selectedDate.getMonth() === viewDate.getMonth() &&
        selectedDate.getFullYear() === viewDate.getFullYear();

      const isToday =
        new Date().getDate() === d &&
        new Date().getMonth() === viewDate.getMonth() &&
        new Date().getFullYear() === viewDate.getFullYear();

      days.push(
        <div
          key={d}
          onClick={() => handleDateSelect(d)}
          className={`p-2 text-center text-[10px] cursor-pointer transition-all duration-200 rounded-full hover:bg-gold hover:text-white ${
            isSelected
              ? "bg-gold text-white"
              : isToday
                ? "text-gold font-bold"
                : "text-white/60"
          }`}
        >
          {d}
        </div>,
      );
    }
    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatDate = (date: Date) => {
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear();
    return `${d}.${m}.${y}`;
  };

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
        className="flex items-center justify-between cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white text-xs font-light tracking-[0.5px]">
          {selectedDate ? formatDate(selectedDate) : "Select Date"}
        </span>
        <FiCalendar className="text-gold" />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[240px] bg-[#1a1108] border border-gold/20 p-4 shadow-2xl z-1000 animate-[fadeIn_0.2s_ease-out]">
          <div className="flex items-center justify-between mb-4 border-b border-gold/10 pb-3">
            <button
              onClick={handlePrevMonth}
              className="text-gold hover:opacity-50"
            >
              <FiChevronLeft />
            </button>
            <span className="text-white text-[10px] uppercase tracking-[1px] font-medium">
              {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
            </span>
            <button
              onClick={handleNextMonth}
              className="text-gold hover:opacity-50"
            >
              <FiChevronRight />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <div
                key={day}
                className="text-center text-[8px] text-gold/40 font-bold"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
        </div>
      )}
    </div>
  );
}
