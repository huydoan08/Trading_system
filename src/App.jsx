import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout as CustomLayout } from "@toolpad/core/DashboardLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TradingSystem from "./pages/TradingSystem";
import BigWinTrades from "./pages/BigWinTrades";
import BigLossTrades from "./pages/BigLossTrades";
import ImporttantNotes from "./pages/ImportantNotes";
import Criteria from "./pages/CriteriaBeforeEnteringOrders";
import TechnicalAnalysis from "./pages/TechnicalAnalysis";
import AfterPlacingOrders from "./pages/AfterPlacingOrders";

const NAVIGATION = [
  {
    segment: "trading-system",
    title: "HỆ THỐNG GIAO DỊCH",
    icon: <DashboardIcon />,
  },
  {
    segment: "criteria",
    title: "TIÊU CHÍ TRƯỚC KHI VÀO LỆNH",
    icon: <LayersIcon />,
  },
  {
    segment: "after-placing-order",
    title: "QUẢN LÝ SAU KHI VÀO LỆNH",
    icon: <LayersIcon />,
  },
  {
    segment: "history",
    title: "NHẬT KÍ GIAO DỊCH",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "big-win-trades",
        title: "Lệnh thắng lớn",
        icon: <DescriptionIcon />,
      },
      {
        segment: "big-loss-trades",
        title: "Lệnh thua lỗ lớn",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "important-trades",
    title: "LƯU Ý QUAN TRỌNG",
    icon: <LayersIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "technical-analysis",
    title: "PHÂN TÍCH KĨ THUẬT",
    icon: <BarChartIcon />,
  },
];

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function App() {
  return (
    <Router>
      <AppProvider navigation={NAVIGATION} theme={theme}>
        <CustomLayout>
          <Routes>
            <Route
              path="/trading-system"
              element={<TradingSystem pathname="trading-system" />}
            />
            <Route
              path="/history/big-win-trades"
              element={<BigWinTrades pathname="big-win-trades" />}
            />
            <Route
              path="/history/big-loss-trades"
              element={
                <BigLossTrades pathname="big-loss-trades" />
              }
            />
            <Route
              path="/important-trades"
              element={<ImporttantNotes pathname="important-trades" />}
            />
            <Route
              path="/criteria"
              element={<Criteria pathname="criteria" />}
            />
            <Route
              path="/after-placing-order"
              element={<AfterPlacingOrders pathname="after-placing-order" />}
            />
            <Route
              path="/technical-analysis"
              element={<TechnicalAnalysis pathname="technical-analysis" />}
            />
          </Routes>
        </CustomLayout>
      </AppProvider>
    </Router>
  );
}
