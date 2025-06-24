import { createContext, useContext, useEffect, useState } from "react";

const SlideBarContext = createContext();

export function SlideBarProvider({ children }) {
   const [isOpen, setIsOpen] = useState(false);

   const open = () => setIsOpen(true);
   const close = () => setIsOpen(false);
   const toggle = () => setIsOpen(prev => !prev);

   useEffect(() => {
      document.body.classList.toggle("overflow-hidden", isOpen);

      return () => document.body.classList.remove("overflow-hidden");
   }, [isOpen]);

   return (
      <SlideBarContext.Provider value={{ isOpen, open, close, toggle }}>
         {children}
      </SlideBarContext.Provider>
   );
};

export function useSlideBar() {
   return useContext(SlideBarContext);
};