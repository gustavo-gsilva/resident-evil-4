import { useImageModal } from "../../hook/useImageModal";
import { characters } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Ada() {
   const { name, phrase, description, images, phrase2, description2 } = characters[2];

   const { openImage, handleOpen, handleClose, isClosing } = useImageModal();

   return (
      <>
         <section
            id="ada"
            className="
            flex flex-col 
            justify-center 
            items-center 
            gap-40 
            bg-[linear-gradient(to_bottom,_#5C1B1B,_#542121)] 
            py-50"
         >
            <div className="grid lg:grid-cols-2 gap-15">
               <div className="flex justify-center lg:pl-40">
                  <div>
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
                        max-w-180 
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
                        pb-50
                        px-12
                        lg:px-0"
                     >
                        {description}
                     </h3>

                     <div
                        className="
                        h-250
                        lg:h-300 
                        relative 
                        group
                        cursor-zoom-in"
                        onClick={() => handleOpen(images[0])}
                     >
                        <img
                           className="
                           w-[800px]
                           lg:w-[700px] 
                           h-full 
                           object-cover 
                           group-hover:border-8 border-[#FFF9D6] duration-300 ease-in"
                           src={images[0]}
                           alt="Ada Image 1"
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

               <div className="grid grid-cols-1 grid-rows-1 gap-15">
                  <div
                     className="
                     h-200
                     lg:h-full
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
                        alt="Ada Image 2"
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
                     onClick={() => handleOpen(images[2])}
                  >
                     <img
                        className="
                        w-[800px] 
                        h-full 
                        object-cover 
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in"
                        src={images[2]}
                        alt="Ada Image 3"
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

            <div className="grid lg:grid-cols-2 gap-15">
               <div className="grid grid-cols-1 grid-rows-1 gap-15">
                  <div className="flex justify-center">
                     <h2
                        className="
                        max-w-170 
                        text-[3rem]
                        lg:text-[3.5rem] 
                        font-bold
                        text-[#FFF200]
                        pb-20
                        px-12
                        lg:px-0"
                     >
                        {phrase2}
                     </h2>
                  </div>

                  <div
                     className="
                     h-210
                     lg:h-[928px] 
                     relative
                     group 
                     cursor-zoom-in"
                     onClick={() => handleOpen(images[3])}
                  >
                     <img
                        className="
                        w-[800px] 
                        h-full
                        object-cover 
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in"
                        src={images[3]}
                        alt="Ada Image 4"
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

               <div className="flex justify-center pt-20 lg:pr-30">
                  <div>
                     <div className="flex justify-center">
                        <h3
                           className="
                           max-w-150 
                           text-[2.5rem] 
                           text-white 
                           font-bold 
                           pb-50
                           px-12
                           lg:px-0"
                        >
                           {description2}
                        </h3>
                     </div>

                     <div
                        className="
                        h-250
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
                           group-hover:border-8 
                           border-[#FFF9D6] 
                           duration-300 ease-in"
                           src={images[4]}
                           alt="Ada Image 5"
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
                     text-7xl
                     text-[#a7a1a1]
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

export default Ada;