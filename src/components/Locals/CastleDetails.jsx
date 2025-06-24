import { locations } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faArrowLeft, faExpand } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useHorizontalScroll } from "../../hook/useHorizontalScroll";
import { useImageModal } from "../../hook/useImageModal";

function CastleDetails() {
   const { name, phrase2, description, castleImages } = locations[1];

   const { openImage, handleOpen, handleClose, isClosing } = useImageModal();

   const scrollContainerRef = useHorizontalScroll();

   return (
      <section
         ref={scrollContainerRef}
         className="
         w-screen
         h-screen
         flex
         bg-[linear-gradient(to_bottom,_#192836,_#213952)]
         md:pl-40 
         pl-15
         pr-20
         relative
         overflow-x-auto"
      >
         <div
            className="
            w-max 
            flex 
            items-center 
            gap-30"
         >
            <div
               className="
               2xl:w-[80vw]
               2xl:flex 
               items-center 
               gap-30"
            >
               <img
                  className="
                  w-[80vw]
                  md:w-[60vw]
                  lg:w-[45vw]
                  xl:w-[80dvh] 
                  2xl:w-[95dvh] 
                  2xl:h-[60dvh]
                  sm:rotate-[-5deg]
                  object-cover 
                  border-8
                  sm:border-12 
                  border-white
                  animate__animated animate__rotateIn"
                  src={castleImages[0]}
                  alt="Castle Image 1"
               />

               <div
                  className="
                  min-w-[500px] 
                  2xl:flex 
                  gap-15
                  flex-col
                  2xl:gap-8"
               >
                  <h1
                     className="
                     w-[250px]
                     text-[3.3rem]
                     2xl:text-[5rem] 
                     font-bold 
                     uppercase 
                     text-[#C2A85D]
                     pt-20
                     2xl:pt-0"
                  >
                     {name}
                  </h1>

                  <h2
                     className="
                     w-[300px]
                     sm:w-[400px]
                     text-[2rem]
                     2xl:text-[2.2rem] 
                     font-bold 
                     uppercase 
                     text-[#FFF200]
                     pt-5
                     2xl:pt-0"
                  >
                     {phrase2}
                  </h2>

                  <p
                     className="
                     w-[300px]
                     sm:w-[400px]
                     md:w-[600px]
                     2xl:w-[400px] 
                     text-[1.7rem]
                     2xl:text-[2rem] 
                     text-white 
                     font-medium
                     pt-5
                     2xl:pt-0"
                  >
                     {description}
                  </p>
               </div>
            </div>

            <div className="flex gap-8">
               <div className="flex flex-col gap-8">
                  <div
                     className="
                     w-[260px]
                     h-[200px]
                     relative
                     group 
                     cursor-zoom-in
                     ml-96"
                     onClick={() => handleOpen(castleImages[1])}
                  >
                     <img
                        className="
                        w-[800px] 
                        h-full 
                        object-cover 
                        group-hover:border-8 border-[#275188] duration-300 ease-in"
                        src={castleImages[1]}
                        alt="Castle Image 2"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                     group-hover:text-[#ffffff] group-hover:bg-[#384152]
                     bg-[#275188]
                        duration-300 ease-in 
                        text-[#c5a981]
                        text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        absolute 
                        bottom-15 
                        right-15"
                     />
                  </div>

                  <div
                     className="
                     w-200
                     h-180 
                     relative 
                     group 
                     cursor-zoom-in"
                     onClick={() => handleOpen(castleImages[2])}
                  >
                     <img
                        className="
                        w-[800px] 
                        h-full 
                        object-cover
                        group-hover:border-8 border-[#275188] duration-300 ease-in"
                        src={castleImages[2]}
                        alt="Castle Image 3"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                     group-hover:text-[#ffffff] group-hover:bg-[#384152]
                     bg-[#275188]
                        duration-300 ease-in 
                        text-[#c5a981]
                        text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        absolute 
                        bottom-15 
                        right-15"
                     />
                  </div>
               </div>

               <div className="flex items-center">
                  <div
                     className="
                     w-120
                     h-230 
                     relative 
                     group 
                     cursor-zoom-in"
                     onClick={() => handleOpen(castleImages[3])}
                  >
                     <img
                        className="
                        w-full
                        h-full 
                        object-cover
                        group-hover:border-8 border-[#275188] duration-300 ease-in"
                        src={castleImages[3]}
                        alt="Castle Image 4"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                     group-hover:text-[#ffffff] group-hover:bg-[#384152]
                     bg-[#275188]
                        duration-300 ease-in 
                        text-[#c5a981]
                        text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        absolute 
                        bottom-15 
                        right-15"
                     />
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-30">
               <div
                  className="
                  w-[450px]
                  h-[450px]
                  relative
                  group 
                  cursor-zoom-in"
                  onClick={() => handleOpen(castleImages[4])}
               >
                  <img
                     className="
                     w-full
                     h-full 
                     object-cover 
                     group-hover:border-8 border-[#275188] duration-300 ease-in"
                     src={castleImages[4]}
                     alt="Castle Image 5"
                  />

                  <FontAwesomeIcon
                     icon={faExpand}
                     className="
                     group-hover:text-[#ffffff] group-hover:bg-[#384152]
                     bg-[#275188]
                        duration-300 ease-in 
                        text-[#c5a981]
                        text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        absolute 
                        bottom-15 
                        right-15"
                  />
               </div>

               <div className="flex items-center">
                  <div
                     className="
                     w-[750px]
                     h-[715px]
                     relative 
                     group 
                     cursor-zoom-in"
                     onClick={() => handleOpen(castleImages[5])}
                  >
                     <img
                        className="
                        w-full
                        h-full 
                        object-cover
                        group-hover:border-8 border-[#275188] duration-300 ease-in"
                        src={castleImages[5]}
                        alt="Castle Image 6"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                     group-hover:text-[#ffffff] group-hover:bg-[#384152]
                     bg-[#275188]
                        duration-300 ease-in 
                        text-[#c5a981]
                        text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        absolute 
                        bottom-15 
                        right-15"
                     />
                  </div>
               </div>
            </div>
         </div>

         <Link
            to={"/"}
            className="
            flex
            items-center
            text-[1.5rem]
            sm:text-[1.7rem]
            text-[#C2A85D]
            font-medium
            fixed 
            top-15
            lef-15
            md:top-25 
            md:left-25
            py-[13px]
            px-[23px]
            sm:px-[30px]
            rounded-full
            cursor-pointer
            hover:bg-[#2a3a46]
            bg-[#315071]
            duration-200 ease-in"
         >
            <FontAwesomeIcon
               icon={faArrowLeft}
               className="
               text-[#C2A85D] 
               text-[1.5rem]
               pr-5"
            />
            Voltar
         </Link>

         {openImage && (
            <div
               onClick={handleClose}
               className="
               flex 
               justify-center 
               items-center
               fixed 
               inset-0 
               bg-black 
               bg-opacity-80 
               z-50 
               cursor-zoom-out"
            >
               <img
                     className={`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${isClosing ? 'animate__zoomOut' : 'animate__zoomIn'}
                        `}
                     src={openImage}
                     alt="Image Expanded"
                  />

               <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="
                  hover:text-[#ffffff] 
                  duration-300 ease-in 
                  text-[#c5a981]
                  text-7xl
                  absolute 
                  top-13 
                  right-13
                  sm:top-20
                  sm:right-20  
                  cursor-pointer"
               />
            </div>
         )}
      </section>
   );
};

export default CastleDetails;