import { useImageModal } from "../../hook/useImageModal";
import { characters } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Luis() {
   const { name, phrase, description, images, phrase2, description2, description3 } = characters[1];

   const { openImage, handleOpen, handleClose, isClosing } = useImageModal();

   return (
      <>
         <section
            id="luis"
            className="
            flex flex-col 
            justify-center 
            items-center 
            gap-40 
            bg-[linear-gradient(to_bottom,_#87584d,_#5B3A33)] 
            pt-40"
         >

            <div className="lg:hidden">
               <h1
                  className="
                  text-[5rem] 
                  font-bold
                  uppercase 
                  text-[#fff]
                  pb-20
                  px-12
                  lg:px-0"
               >
                  {name}
               </h1>

               <h2
                  className="
                  max-w-170 
                  text-[3.5rem] 
                  font-bold 
                  text-[#FFF200]
                  pb-10
                  px-12
                  lg:px-0"
               >
                  {phrase}
               </h2>

               <h3
                  className="
                  max-w-180 
                  text-[2.5rem] 
                  text-white 
                  font-bold 
                  px-12
                  lg:px-0"
               >
                  {description}
               </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-15">
               <div className="grid grid-cols-1 grid-rows-1 gap-15">
                  <div
                     className="
                     h-[600px]
                     lg:h-[890px] 
                     relative
                     group 
                     cursor-zoom-in"
                     onClick={() => handleOpen(images[0])}
                  >
                     <img
                        className="
                        w-[800px] 
                        h-full
                        object-cover 
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in"
                        src={images[0]}
                        alt="Luis Image 1"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                        group-hover:text-[#2C3E4F] 
                        group-hover:bg-[#FFF9D6] 
                        bg-[#2C3E4F]
                        duration-300 ease-in 
                        text-[#FFF9D6] 
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
                     h-200 
                     lg:h-300
                     relative 
                     group 
                     cursor-zoom-in"
                     onClick={() => handleOpen(images[1])}
                  >
                     <img
                        className="
                        w-[800px] 
                        h-full 
                        object-cover 
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in"
                        src={images[1]}
                        alt="Luis Image 2"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                        group-hover:text-[#2C3E4F] 
                        group-hover:bg-[#FFF9D6] 
                        bg-[#2C3E4F]
                        duration-300 ease-in 
                        text-[#FFF9D6] 
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

               <div className="lg:pr-40">
                  <div className="flex flex-col items-center">
                     <div className="hidden lg:block">
                        <h1
                           className="
                           text-[5rem] 
                           font-bold
                           uppercase 
                           text-[#fff]
                           pb-20"
                        >
                           {name}
                        </h1>

                        <h2
                           className="
                           max-w-170 
                           text-[3.5rem] 
                           font-bold 
                           pb-10
                           bg-gradient-to-r from-[#FFF200] to-[#999100] bg-clip-text text-transparent"
                        >
                           {phrase}
                        </h2>

                        <h3
                           className="
                           max-w-180 
                           text-[2.5rem] 
                           text-white 
                           font-bold 
                           pb-50"
                        >
                           {description}
                        </h3>
                     </div>

                     <div
                        className="
                        h-180
                        relative 
                        group
                        cursor-zoom-in"
                        onClick={() => handleOpen(images[2])}
                     >
                        <img
                           className="
                           w-[800px]
                           lg:w-[700px] 
                           h-full 
                           object-cover 
                           group-hover:border-8 border-[#FFF9D6] duration-300 ease-in"
                           src={images[2]}
                           alt="Luis Image 3"
                        />

                        <FontAwesomeIcon
                           icon={faExpand}
                           className="
                        group-hover:text-[#2C3E4F] 
                        group-hover:bg-[#FFF9D6] 
                        bg-[#2C3E4F]
                           duration-300 ease-in 
                        text-[#FFF9D6] 
                           text-4xl
                           px-6 
                           py-5 
                           rounded-[50%] 
                           absolute 
                           bottom-15 
                           right-15"
                        />
                     </div>

                     <h3
                        className="
                        max-w-180 
                        text-[2.5rem] 
                        text-white 
                        font-bold 
                        pt-50
                        px-12
                        lg:px-0"
                     >
                        {description2}
                     </h3>
                  </div>
               </div>
            </div>

            <div className="lg:w-screen lg:h-screen">
               <img className="w-full h-full object-cover"
                  src={images[3]}
                  alt="Luis Image 4"
               />
            </div>

            <div className="grid lg:grid-cols-2 gap-15">
               <div className="pt-20 lg:pl-40">
                  <div className="flex flex-col items-center justify-center">
                     <h3
                        className="
                        max-w-180 
                        text-[2.5rem] 
                        text-white 
                        font-bold 
                        pb-50
                        px-12
                        lg:px-0"
                     >
                        {description3}
                     </h3>

                     <div
                        className="
                        h-230
                        lg:h-300 
                        relative 
                        group
                        cursor-zoom-in"
                        onClick={() => handleOpen(images[4])}
                     >
                        <img
                           className="
                           w-[800px]
                           lg:w-[700px] 
                           h-full 
                           object-cover 
                           group-hover:border-8 border-[#FFF9D6] duration-300 ease-in"
                           src={images[4]}
                           alt="Luis Image 5"
                        />

                        <FontAwesomeIcon
                           icon={faExpand}
                           className="
                        group-hover:text-[#2C3E4F] 
                        group-hover:bg-[#FFF9D6] 
                        bg-[#2C3E4F]
                           duration-300 ease-in 
                        text-[#FFF9D6] 
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

               <div className="grid grid-cols-1 grid-rows-1 gap-15 pb-50">
                  <div className="flex flex-col items-center">
                     <h2
                        className="
                        max-w-170 
                        text-[3.5rem] 
                        font-bold 
                        text-[#FFF200]
                        pb-20
                        pt-20
                        lg:pt-0
                        px-12
                        lg:px-0"
                     >
                        {phrase2}
                     </h2>
                  </div>

                  <div
                     className="
                     h-240
                     lg:h-[890px] 
                     relative
                     group 
                     cursor-zoom-in"
                     onClick={() => handleOpen(images[5])}
                  >
                     <img
                        className="
                        w-[800px] 
                        h-full
                        object-cover 
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in"
                        src={images[5]}
                        alt="Luis Image 6"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                        group-hover:text-[#2C3E4F] 
                        group-hover:bg-[#FFF9D6] 
                        bg-[#2C3E4F]
                           duration-300 ease-in 
                        text-[#FFF9D6] 
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
                     h-190 
                     relative 
                     group 
                     cursor-zoom-in"
                     onClick={() => handleOpen(images[6])}
                  >
                     <img
                        className="
                        w-[800px] 
                        h-full 
                        object-cover 
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in"
                        src={images[6]}
                        alt="Luis Image 7"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                        group-hover:text-[#2C3E4F] 
                        group-hover:bg-[#FFF9D6] 
                        bg-[#2C3E4F]
                           duration-300 ease-in 
                        text-[#FFF9D6] 
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
                     text-[#a7a1a1]
                     text-7xl
                     hover:text-[#ffffff] 
                     duration-300 ease-in
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
      </>
   );
};

export default Luis;