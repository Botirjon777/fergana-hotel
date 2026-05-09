import { useState, useEffect } from 'react';

interface RoomPrice {
  price_before_tax: number;
  price_after_tax: number;
  currency: string;
  originalPrice?: number;
  discountPercentage?: number;
}

export function useRoomPrices() {
  const [prices, setPrices] = useState<Record<number, RoomPrice>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const today = new Date();
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);

        const startDate = today.toISOString().split('T')[0];
        const endDate = nextWeek.toISOString().split('T')[0];

        const res = await fetch(`https://uz-ibe.hopenapi.com/ApiWebDistribution/AvailabilityCalendar/room_type_availability_2?aggregate_dates=false&currency=UZS&end_date=${endDate}&hotel=506781&max_nights=1&start_date=${startDate}&shared=false`);
        const data = await res.json();

        const priceMap: Record<number, RoomPrice> = {};
        data.room_type_availability?.forEach((rt: any) => {
          // Find the first date where this room is available
          const firstAvail = rt.availability_date?.find((a: any) => a.is_available);
          if (firstAvail && firstAvail.price) {
            const finalPrice = firstAvail.price.price_after_tax;
            const originalPrice = firstAvail.price.price_before_tax;
            
            // Dynamically detect discount from API data
            // If before_tax is higher than after_tax, we have a discount
            const hasDiscount = originalPrice > finalPrice;
            const discountPercentage = hasDiscount 
              ? Math.round(((originalPrice - finalPrice) / originalPrice) * 100) 
              : 0;

            priceMap[rt.id_room_type] = {
              ...firstAvail.price,
              price_after_tax: finalPrice,
              originalPrice: hasDiscount ? originalPrice : undefined,
              discountPercentage: hasDiscount ? discountPercentage : undefined
            };
          }
        });

        setPrices(priceMap);
      } catch (e) {
        console.error("Failed to fetch room prices", e);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return { prices, loading };
}
