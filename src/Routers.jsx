
import { Route, Routes } from "react-router-dom";
import TransactionLog from "./pages/TransactionLog";
import TradingSystem from "./pages/TradingSystem";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/trading-system" element={<TradingSystem/>} />
      <Route path="/big-win-trades" element={<TransactionLog/>} />
    </Routes>
  );
};


export default RoutesComponent;
