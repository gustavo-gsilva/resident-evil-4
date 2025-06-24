import { locations } from "../../data";
import { Link } from "react-router-dom";

function Village() {
   const { phrase1, villageImages } = locations[0];

   return (
      <section
         id="village"
         className="
         flex 
         flex-col 
         items-center
         gap-40
         py-50
         bg-[linear-gradient(to_bottom,_#340c0c,_#210D0D)]"
      >
         <h2
            className="
            max-w-[350px] 
            text-[2.5rem] 
            text-white 
            font-bold
            px-12
            lg:px-0"
         >
            {phrase1}
         </h2>

         <Link to={"/village/"}>
            <div
               className="
               relative 
               group 
               cursor-pointer
               px-15
               2xl:px-0"
            >
               <img
                  className="
                  2xl:w-[70vw] 
                  2xl:h-[85vh] 
                  object-cover 
                  border-11
                  lg:border-20 
                  border-white 
                  duration-300 ease-in
                  group-hover:rotate-[0.8deg]
                  group-hover:scale-101
                  group-hover:brightness-110"
                  src={villageImages[0]}
                  alt="Village Image 1"
               />

               <button
                  className="
                  text-[1.3rem]
                  sm:text-[1.5rem]
                  lg:text-[1.7rem]
                  font-medium
                  bg-white
                  group-hover:bg-[#FFF9D6]
                  duration-200 ease-in
                  absolute 
                  bottom-10
                  lg:bottom-23 
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  py-[9px]
                  px-[22px]
                  lg:py-[12px]
                  lg:px-[30px]
                  cursor-pointer"
               >
                  Explore El Pueblo
               </button>
            </div>
         </Link>
      </section>
   );
};

export default Village;