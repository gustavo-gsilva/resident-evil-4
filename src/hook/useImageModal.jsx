import { useState, useEffect } from "react";

export function useImageModal() {
   const [openImage, setOpenImage] = useState(null);
   const [isClosing, setIsClosing] = useState(false);

   const handleOpen = (src) => setOpenImage(src);

   useEffect(() => {
      if (openImage) {
         document.body.classList.add("overflow-hidden");
      } else {
         document.body.classList.remove("overflow-hidden");
      }

      return () => document.body.classList.remove("overflow-hidden");
   }, [openImage]);

   const handleClose = () => {
      setIsClosing(true);
      setTimeout(() => {
         setOpenImage(null);
         setIsClosing(false);
      }, 300);
   };

   return { openImage, handleOpen, handleClose, isClosing };
};