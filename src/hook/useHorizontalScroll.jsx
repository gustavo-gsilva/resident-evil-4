import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
   const containerRef = useRef(null); 

   useEffect(() => {
      const container = containerRef.current;

      if (!container) return;

      const onWheelScroll = (e) => {
         if (e.deltaY !== 0) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
         }
      };

      container.addEventListener("wheel", onWheelScroll, { passive: false });

      return () => {
         container.removeEventListener("wheel", onWheelScroll);
      };
   }, []);

   return containerRef;
};