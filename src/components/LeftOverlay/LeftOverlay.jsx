import { header } from "../../data";
import { useSlideBar } from "../../context/SlideBarContext";

function LeftOverlay() {
   const { logo } = header;
   const { isOpen } = useSlideBar();

   return (
      <div
         className={`
            w-[100dvw] 
            h-[100dvh]
            fixed 
            z-20
            backdrop-blur-3xl
            transition-opacity 
            duration-500 
            ease-in-out
            hidden
            lg:block
         ${isOpen
               ? "opacity-100"
               : "opacity-0 pointer-events-none"}`}
      >
         <img
            className="
               w-[22%] 
               absolute 
               top-1/2
               left-1/4
               -translate-x-1/2
               -translate-y-1/2"
            src={logo}
            alt="Logotipo Resident Evil 4"
         />
      </div>
   );
};

export default LeftOverlay;