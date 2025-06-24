import { header } from "../../data";
import { useSlideBar } from "../../context/SlideBarContext";

function Header() {
   const { logo } = header;
   const { isOpen, toggle } = useSlideBar();

   return (
      <header
         className="
         w-full 
         flex 
         justify-between
         items-center 
         fixed 
         px-15 
         py-15
         z-30
         pointer-events-none"
      >

         <a href="#banner">
            <img
               className={`
               w-27 
               pointer-events-auto 
               duration-200 
               ease-in
               ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
               src={logo}
               alt="Logo Header"
            />
         </a>

         <div
            onClick={toggle}
            className="
            relative
            w-12
            h-12
            cursor-pointer
            pointer-events-auto
            group"
         >
            <div
               className={`
               absolute
               left-0
               w-12 
               h-3 
               transition-transform 
               duration-500
               z-10
               bg-white
               group-hover:bg-[#fff19f]
               ${isOpen
                     ? 'top-1/2 -translate-y-1/2 rotate-[45deg]'
                     : 'top-[calc(50%-6px)] rotate-0'}`}
            >
            </div>

            <div
               className={`
               absolute
               left-0
               w-12 
               h-3 
               transition-transform 
               duration-500
               z-10 
               bg-white
               group-hover:bg-[#fff19f]
               ${isOpen
                     ? 'top-1/2 -translate-y-1/2 rotate-[-45deg]'
                     : 'top-[calc(50%+6px)] rotate-0'}`}
            >
            </div>
         </div>
      </header>
   );
};

export default Header;