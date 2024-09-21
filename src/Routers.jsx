
import { Route, Routes } from "react-router-dom";
import BigWinTrades from "./pages/BigWinTrades";
import TradingSystem from "./pages/TradingSystem";
import BigLossTrades from "./pages/BigLossTrades";
import ImporttantNotes from "./pages/ImportantNotes";
import Criteria from "./pages/CriteriaBeforeEnteringOrders";
import TechnicalAnalysis from "./pages/TechnicalAnalysis";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/trading-system" element={<TradingSystem/>} />
      <Route path="/big-win-trades" element={<BigWinTrades/>} />
      <Route path="/big-loss-trades" element={<BigLossTrades/>} />
      <Route path="/important-trades" element={<ImporttantNotes/>} />
      <Route path="/criteria" element={<Criteria/>} />
      <Route path="/technical-analysis" element={<TechnicalAnalysis />} />
    </Routes>
  );
};

export default RoutesComponent;
