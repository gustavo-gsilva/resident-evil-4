import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import VillageDetails from "../components/Locals/VillageDetails";
import CastleDetails from "../components/Locals/CastleDetails";
import IslandDetails from "../components/Locals/IslandDetails";

function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/village" element={<VillageDetails />} />
         <Route path="/castle" element={<CastleDetails />} />
         <Route path="/island" element={<IslandDetails />} />
      </Routes>
   );
};

export default AppRoutes;