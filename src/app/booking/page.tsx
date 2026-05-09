import BookingView from "@/features/booking/BookingView";
import { Suspense } from "react";

export default function BookingPage() {
  return (
    <Suspense fallback={null}>
      <BookingView />
    </Suspense>
  );
}
