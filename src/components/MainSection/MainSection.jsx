import { bannerAssets } from "../../data";

import Leon from "../Characters/Leon";
import Luis from "../Characters/Luis";
import Ada from "../Characters/Ada";
import Ashley from "../Characters/Ashley";
import Merchant from "../Characters/Merchant";
import Bitores from "../Characters/Bitores";
import Salazar from "../Characters/Salazar";
import Krauser from "../Characters/Krauser";
import Saddler from "../Characters/Saddler";

import Village from "../Locals/Village";
import Castle from "../Locals/Castle";
import Island from "../Locals/Island";

import AvailablesPlatforms from "../AvaliablesPlataforms/AvaliablesPlataforms";
import ImportantNotice from "../ImportantNotice/ImportantNotice";

function MainSection() {
   const { artWork2, artWork3 } = bannerAssets;

   return (
      <>
         <Leon />
         <Luis />

         <img className="w-screen" src={artWork2} alt="Resident Evil 4 Artwork 2" />

         <Ada />
         <Village />
         <Ashley />
         <Merchant />
         <Bitores />
         <Castle />
         <Salazar />
         <Krauser />
         <Saddler />
         <Island />

         <img className="w-screen" src={artWork3} alt="Resident Evil 4 Artwork 3" />

         <div
            className="
            flex 
            flex-col 
            gap-40 
            pb-40 
            bg-[linear-gradient(to_bottom,_#261e1e,_#5b4949)]"
         >
            <AvailablesPlatforms />
            <ImportantNotice />
         </div>
      </>
   );
};

export default MainSection;