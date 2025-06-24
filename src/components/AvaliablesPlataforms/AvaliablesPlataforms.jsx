import { bannerAssets, AvailablePlatformsIcons } from "../../data";

function AvailablesPlatforms() {
   const { logoArtWork } = bannerAssets;
   const { LogoPs4, LogoPs5, LogoXbox, LogoPc } = AvailablePlatformsIcons;

   return (
      <section
         className="
         flex 
         flex-col 
         justify-center 
         items-center 
         pt-30 
         pb-20"
      >
         <img
            className="w-200 sm:w-185"
            src={logoArtWork}
            alt="Logo do Resident Evil 4"
         />

         <div
            className="
            flex 
            flex-col 
            items-center 
            gap-25"
         >
            <h2
               className="
               text-[5rem]
               sm:text-[6rem]
               text-[#fff]
               font-bold 
               uppercase"
            >
               Disponível
            </h2>

            <div
               className="
               flex 
               justify-center 
               flex-wrap 
               gap-12 
               px-20"
            >
               <img
                  className="w-50"
                  src={LogoPs4}
                  alt="Logo do PS4"
               />
               <img
                  className="w-50"
                  src={LogoPs5}
                  alt="Logo PS5"
               />
               <img
                  className="w-80"
                  src={LogoXbox}
                  alt="Logo Xbox Series X/S"
               />
               <img
                  className="w-20"
                  src={LogoPc}
                  alt="Logo PC"
               />
            </div>
         </div>
      </section>
   );
};

export default AvailablesPlatforms;