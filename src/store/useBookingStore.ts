import { create } from "zustand";

interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  setCheckIn: (date: string) => void;
  setCheckOut: (date: string) => void;
  setGuests: (guests: string) => void;
  setRoomType: (roomType: string) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  checkIn: new Date().toISOString().split("T")[0],
  checkOut: new Date(Date.now() + 86400000).toISOString().split("T")[0],
  guests: "2",
  roomType: "deluxe",
  setCheckIn: (date) => set({ checkIn: date }),
  setCheckOut: (date) => set({ checkOut: date }),
  setGuests: (guests) => set({ guests }),
  setRoomType: (roomType) => set({ roomType }),
}));
