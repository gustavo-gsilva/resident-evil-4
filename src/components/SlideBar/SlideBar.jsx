import { useState } from "react";
import { useSlideBar } from "../../context/SlideBarContext";

function SlideBar() {
   const [selected, setSelected] = useState("characters");
   const [selectedItem, setSelectedItem] = useState(null);

   const { close } = useSlideBar();

   const handleSelected = (opcao) => {
      setSelected(opcao);
   };

   return (
      <div
         className="
         w-[90vw]
         lg:w-[50dvw] 
         h-[100dvh] 
         fixed 
         right-0
         z-20 
         bg-[#060713]
         animate__animated animate__fadeInRightBig"
      >

         <div className="absolute sm:static bottom-3 flex sm:gap-7 pt-19 pb-15 px-12 sm:px-20">
            <button
               onClick={() => handleSelected("characters")}
               className={`
                  text-[1.5rem]
                  sm:text-[1.7rem]
                  font-medium
                  rounded-full
                  py-[12px]
                  px-[15px]
                  sm:px-[17px]
                  cursor-pointer
                  ${selected === "characters" ?
                     "text-[#000] bg-white duration-200 ease-in"
                     : "text-white bg-transparent hover:text-[#fff19f] duration-100 ease-in"}
                     `}
            >
               Personagens
            </button>

            <button
               onClick={() => handleSelected("places")}
               className={`
                  text-[1.5rem]
                  sm:text-[1.7rem]
                  font-medium
                  rounded-full
                  py-[10px]
                  px-[15px]
                  sm:px-[19px]
                  cursor-pointer
                  ${selected === "places" ?
                     "text-[#000] bg-white duration-200 ease-in"
                     : "text-white bg-transparent hover:text-[#fff19f] duration-100 ease-in"}
                     `}
            >
               Lugares
            </button>

            <a href="#about">
               <button
                  onClick={() => {
                     handleSelected("about")
                     close();
                  }}
                  className={`
                  text-[1.5rem]
                  sm:text-[1.7rem]
                  font-medium
                  rounded-full
                  py-[11px]
                  px-[15px]
                  sm:px-[19px]
                  cursor-pointer
                  ${selected === "about" ?
                        "text-[#000] bg-white duration-200 ease-in"
                        : "text-white bg-transparent hover:text-[#fff19f] duration-100 ease-in"}
                     `}
               >
                  Sobre
               </button>
            </a>
         </div>

         <ul
            className={`
               flex 
               flex-col 
               justify-center 
               sm:pl-20 
               pl-12
               pt-20
               sm:pt-0
               transition-all
               duration-300 
               absolute
               ${selected === "characters"
                  ? "opacity-100 blur-0"
                  : "opacity-0 blur-sm pointer-events-none"}`}
         >
            <li
               className="
               text-[2.9rem]
               sm:text-[4rem] 
               pb-2
               sm:pb-0
               font-bold 
               uppercase"
            >
               <a
                  href="#leon"
                  onClick={() => {
                     setSelectedItem("leon")
                     close()
                  }}
                  className={`
                  cursor-pointer
                  ${selectedItem === "leon" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                     `}
               >Leon S. Kennedy</a>
            </li>

            <li
               className="
                  text-[2.9rem]
                  sm:text-[4rem]  
                  pb-2
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#luis"
                  onClick={() => {
                     setSelectedItem("luis")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "luis" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Luis Serra</a>
            </li>

            <li
               className="
                  text-[2.9rem]
                  sm:text-[4rem]
                  pb-2 
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#ada"
                  onClick={() => {
                     setSelectedItem("ada")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "ada" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Ada Wong</a>
            </li>

            <li
               className="
                  text-[2.9rem]
                  sm:text-[4rem]  
                  pb-2
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#ashley"
                  onClick={() => {
                     setSelectedItem("ashley")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "ashley" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Ashley Graham</a>
            </li>

            <li
               className="
                  text-[2.9rem]
                  sm:text-[4rem]
                  pb-2  
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#merchant"
                  onClick={() => {
                     setSelectedItem("merchant")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "merchant" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Mercador</a>
            </li>

            <li
               className="
                  text-[2.9rem]
                  sm:text-[4rem] 
                  pb-2
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#bitores"
                  onClick={() => {
                     setSelectedItem("bitores")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "bitores" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Bitores Méndez</a>
            </li>

            <li
               className="
                  text-[2.9rem]
                  sm:text-[4rem] 
                  pb-2
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#salazar"
                  onClick={() => {
                     setSelectedItem("salazar")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "salazar" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Ramon Salazar</a>
            </li>

            <li
               className="
                  text-[2.9rem]
                  sm:text-[4rem] 
                  pb-2
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#krauser"
                  onClick={() => {
                     setSelectedItem("krauser")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "krauser" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Jack Krauser</a>
            </li>

            <li
               className="
                  text-[2.9rem]
                  sm:text-[4rem] 
                  pb-2 
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#saddler"
                  onClick={() => {
                     setSelectedItem("saddle")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "saddler" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Osmund Saddler</a>
            </li>
         </ul >

         <ul className={`
            sm:pl-20 
            pl-12
            pt-22
            sm:pt-0
            transition-all
            duration-300 
            absolute
               ${selected === "places"
               ? "opacity-100 blur-0"
               : "opacity-0 blur-sm pointer-events-none"}`}
         >
            <li
               className="
                  text-[2.4rem]
                  sm:text-[4rem] 
                  pb-2  
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#village"
                  onClick={() => {
                     setSelectedItem("village")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "village" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Vilarejo El Pueblo</a>
            </li>

            <li
               className="
                  text-[2.4rem]
                  sm:text-[4rem]  
                  pb-2
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#castle"
                  onClick={() => {
                     setSelectedItem("castle")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "castle" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Castelo</a>
            </li>

            <li
               className="
                  text-[2.4rem]
                  sm:text-[4rem] 
                  pb-2
                  sm:pb-0
                  font-bold 
                  uppercase"
            >
               <a
                  href="#island"
                  onClick={() => {
                     setSelectedItem("island")
                     close()
                  }}
                  className={`
                     cursor-pointer
                  ${selectedItem === "island" ?
                        "text-[#340c0c]"
                        : "text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `}
               >Ilha de La Puerta</a>
            </li>
         </ul>
      </div >
   );
};

export default SlideBar;