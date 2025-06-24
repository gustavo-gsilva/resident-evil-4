import { bannerAssets } from "../../data";

function Banner() {
   const { artWork, logoArtWork } = bannerAssets;

   return (
      <div
         className="
         w-screen 
         h-screen
         relative"
         id="banner"
      >
         <img
            className="
            w-full 
            h-full 
            object-cover"
            src={artWork}
            alt="ArtWork do Resident Evil 4"
         />
         <img
            className="
            absolute 
            top-1/2 
            left-1/2 
            transform 
            -translate-x-1/2 
            -translate-y-1/2"
            src={logoArtWork}
            alt="Logo do Resident Evil 4"
         />
      </div>
   );
};

export default Banner;