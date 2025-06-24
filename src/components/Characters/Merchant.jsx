import { useImageModal } from "../../hook/useImageModal";
import { characters } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Merchant() {
   const { name, phrase, description, images, phrase2, description2, } = characters[4];

   const { openImage, handleOpen, handleClose, isClosing } = useImageModal();

   return (
      <>
         <section
            id="merchant"
            className="
            flex flex-col 
            justify-center 
            items-center 
            gap-40 
            bg-[linear-gradient(to_bottom,_#2C2F4A,_#3C4065)] 
            py-50"
         >
            <div className="grid lg:grid-cols-2 gap-15">
               <div className="grid grid-cols-1 grid-rows-1 gap-15">
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
                           max-w-180 
                           text-[3.5rem] 
                           font-bold 
                           text-[#FFF200]
                           pb-10
                           px-12
                           lg:px-0"
                     >
                        {phrase2}
                     </h2>

                     <h3
                        className="
                           max-w-190 
                           text-[2.5rem] 
                           text-white 
                           font-bold 
                           pb-40
                           px-12
                           lg:px-0"
                     >
                        {description}
                     </h3>
                  </div>

                  <div
                     className="
                     h-260
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
                        group-hover:border-8 
                        border-[#FFF9D6] 
                        duration-300 ease-in"
                        src={images[0]}
                        alt="Mercador Image 1"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                        group-hover:text-[#2C3E4F] 
                        group-hover:bg-[#FFF9D6] 
                        duration-300 ease-in 
                        text-[#FFF9D6] 
                        text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#2C3E4F] 
                        absolute 
                        bottom-15 
                        right-15"
                     />
                  </div>

                  <div className="flex justify-center">
                     <h2
                        className="
                           max-w-190 
                           text-[3.5rem] 
                           font-bold 
                           py-20
                           px-12
                           lg:px-0
                           text-[#FFF200]"
                     >
                        {phrase}
                     </h2>
                  </div>

                  <div
                     className="
                     h-230 
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
                        group-hover:border-8 
                        border-[#FFF9D6] 
                        duration-300 ease-in"
                        src={images[1]}
                        alt="MercadorImage 2"
                     />

                     <FontAwesomeIcon
                        icon={faExpand}
                        className="
                        group-hover:text-[#2C3E4F] 
                        group-hover:bg-[#FFF9D6] 
                        duration-300 ease-in 
                        text-[#FFF9D6] 
                        text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#2C3E4F] 
                        absolute 
                        bottom-15 
                        right-15"
                     />
                  </div>
               </div>

               <div className="lg:pr-40">
                  <div className="flex flex-col items-center gap-20">
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
                           max-w-180 
                           text-[3.5rem] 
                           font-bold 
                           text-[#FFF200]
                           pb-10"
                        >
                           {phrase2}
                        </h2>

                        <h3
                           className="
                           max-w-190 
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
                           group-hover:border-8 
                           border-[#FFF9D6] 
                           duration-300 ease-in"
                           src={images[2]}
                           alt="Mercador Image 3"
                        />

                        <FontAwesomeIcon
                           icon={faExpand}
                           className="
                        group-hover:text-[#2C3E4F] 
                        group-hover:bg-[#FFF9D6] 
                        duration-300 ease-in 
                        text-[#FFF9D6] 
                        text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#2C3E4F] 
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
                        py-15
                        px-12
                        lg:px-0"
                     >
                        {description2}
                     </h3>

                     <div
                        className="
                        h-180
                        relative 
                        group
                        cursor-zoom-in"
                        onClick={() => handleOpen(images[3])}
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
                           src={images[3]}
                           alt="Mercador Image 4"
                        />

                        <FontAwesomeIcon
                           icon={faExpand}
                           className="
                        group-hover:text-[#2C3E4F] 
                        group-hover:bg-[#FFF9D6] 
                        duration-300 ease-in 
                        text-[#FFF9D6] 
                        text-4xl
                        px-6 
                        py-5 
                        rounded-[50%] 
                        bg-[#2C3E4F] 
                        absolute 
                        bottom-15 
                        right-15"
                        />
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:w-screen lg:h-screen">
               <img className="w-full h-full object-cover"
                  src={images[4]}
                  alt="MercadorImage 5"
               />
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

export default Merchant;