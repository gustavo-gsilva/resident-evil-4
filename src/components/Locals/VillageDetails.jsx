import { locations } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faArrowLeft, faExpand } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useHorizontalScroll } from "../../hook/useHorizontalScroll";
import { useImageModal } from "../../hook/useImageModal";

function VillageDetails() {
   const { name, phrase2, description, villageImages } = locations[0];

   const { openImage, handleOpen, handleClose, isClosing } = useImageModal();

   const scrollContainerRef = useHorizontalScroll();

   return (
      <section
         ref={scrollContainerRef}
         className="
         w-screen
         h-screen
         flex
         md:pl-40
         pl-15
         pr-20
         relative
         overflow-x-auto
         bg-[linear-gradient(to_bottom,_#340c0c,_#210D0D)]"
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
                  src={villageImages[0]}
                  alt="Village Image 1"
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
                     text-[#9a8567]
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
                     onClick={() => handleOpen(villageImages[1])}
                  >
                     <img
                        className="
                        h-full 
                        object-cover 
                        group-hover:border-8 border-[#854848] duration-300 ease-in"
                        src={villageImages[1]}
                        alt="Village Image 2"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                     group-hover:text-[#ffffff] 
                     group-hover:bg-[#854848]
                        duration-300 ease-in
                        text-[#c5a981] text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#602424] 
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
                     onClick={() => handleOpen(villageImages[2])}
                  >
                     <img
                        className="
                        w-[800px] 
                        h-full 
                        object-cover
                        group-hover:border-8 border-[#854848] duration-300 ease-in"
                        src={villageImages[2]}
                        alt="Village Image 3"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                     group-hover:text-[#ffffff] 
                     group-hover:bg-[#854848]
                        duration-300 ease-in
                        text-[#c5a981] text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#602424] 
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
                     h-200 
                     relative 
                     group 
                     cursor-zoom-in"
                     onClick={() => handleOpen(villageImages[3])}
                  >
                     <img
                        className="
                        w-full
                        h-full 
                        object-cover
                        group-hover:border-8 border-[#854848] duration-300 ease-in"
                        src={villageImages[3]}
                        alt="Village Image 4"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                     group-hover:text-[#ffffff] 
                     group-hover:bg-[#854848]
                        duration-300 ease-in
                        text-[#c5a981] text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#602424] 
                        absolute 
                        bottom-15 
                        right-15"
                     />
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-8">
               <div
                  className="
                  w-[360px]
                  h-[93dvh]
                  sm:h-[715px]
                  relative
                  group 
                  cursor-zoom-in
                  ml-10"
                  onClick={() => handleOpen(villageImages[4])}
               >
                  <img
                     className="
                     w-full
                     h-full 
                     object-cover 
                     group-hover:border-8 border-[#854848] duration-300 ease-in"
                     src={villageImages[4]}
                     alt="Village Image 5"
                  />

                  <FontAwesomeIcon
                     icon={faExpand}
                     className="
                     group-hover:text-[#ffffff] 
                     group-hover:bg-[#854848]
                        duration-300 ease-in
                        text-[#c5a981] text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#602424] 
                        absolute 
                        bottom-15 
                        right-15"
                  />
               </div>

               <div className="flex items-center">
                  <div
                     className="
                     w-180
                     h-180 
                     relative 
                     group 
                     cursor-zoom-in"
                     onClick={() => handleOpen(villageImages[5])}
                  >
                     <img
                        className="
                        w-full
                        h-full 
                        object-cover
                        group-hover:border-8 border-[#854848] duration-300 ease-in"
                        src={villageImages[5]}
                        alt="Village Image 6"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                     group-hover:text-[#ffffff] 
                     group-hover:bg-[#854848]
                        duration-300 ease-in
                        text-[#c5a981] text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#602424] 
                        absolute 
                        bottom-15 
                        right-15"
                     />
                  </div>

                  <div
                     className="
                     w-120
                     h-210 
                     relative 
                     group 
                     cursor-zoom-in
                     ml-35"
                     onClick={() => handleOpen(villageImages[6])}
                  >
                     <img
                        className="
                        w-full
                        h-full 
                        object-cover
                        group-hover:border-8 border-[#854848] duration-300 ease-in"
                        src={villageImages[6]}
                        alt="Village Image 7"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                     group-hover:text-[#ffffff] 
                     group-hover:bg-[#854848]
                        duration-300 ease-in
                        text-[#c5a981] text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#602424] 
                        absolute 
                        bottom-15 
                        right-15"
                     />
                  </div>

                  <div
                     className="
                     w-[750px]
                     h-[93dvh]
                     sm:h-[715px]
                     relative 
                     group 
                     cursor-zoom-in
                     ml-35"
                     onClick={() => handleOpen(villageImages[7])}
                  >
                     <img
                        className="
                        w-full
                        h-full 
                        object-cover
                        group-hover:border-8 border-[#854848] duration-300 ease-in"
                        src={villageImages[7]}
                        alt="Village Image 8"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                     group-hover:text-[#ffffff] 
                     group-hover:bg-[#854848]
                        duration-300 ease-in
                        text-[#c5a981] text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#602424] 
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
            text-[#c5a981]
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
            hover:bg-[#411313]
            bg-[#501717]
            duration-200 ease-in"
         >
            <FontAwesomeIcon
               icon={faArrowLeft}
               className="
               text-[#c5a981] 
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
                  absolute 
                  top-13 
                  right-13
                  sm:top-20
                  sm:right-20  
                  text-7xl
                  cursor-pointer"
               />
            </div>
         )}
      </section>
   );
};

export default VillageDetails;