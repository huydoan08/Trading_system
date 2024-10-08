import * as React from "react";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupsIcon from '@mui/icons-material/Groups';
import LayersIcon from "@mui/icons-material/Layers";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import StarsIcon from '@mui/icons-material/Stars';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import SailingIcon from '@mui/icons-material/Sailing';
import MoodIcon from '@mui/icons-material/Mood';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import TradingSystem from "./pages/TradingSystem";
import BigWinTrades from "./pages/BigWinTrades";
import BigLossTrades from "./pages/BigLossTrades";
import ImporttantNotes from "./pages/ImportantNotes";
import BeforeEnterOrders from "./pages/CriteriaBeforeEnteringOrders";
import AfterPlacingOrders from "./pages/AfterPlacingOrders";
import TechnicalAnalysis from "./pages/TechnicalAnalysis";
import CrowdPsychologyAnalysis from "./pages/CrowdPsychologyAnalysis";
import PricingAnalysis from "./pages/PricingAnalysis";
import PersonalFeelingsAnalysis from "./pages/PersonalFeelingsAnalysis";
import Phylosophy from "./pages/Phylosophy";

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
    icon: <TipsAndUpdatesIcon />,
  },
  {
    segment: "history",
    title: "NHẬT KÍ GIAO DỊCH",
    icon: <HistoryToggleOffIcon />,
    children: [
      {
        segment: "big-win-trades",
        title: "Lệnh thắng lớn",
        icon: <ArrowCircleUpIcon />,
      },
      {
        segment: "big-loss-trades",
        title: "Lệnh thua lỗ lớn",
        icon: <ArrowCircleDownIcon />,
      },
    ],
  },
  {
    segment: "important-trades",
    title: "LƯU Ý QUAN TRỌNG",
    icon: <StarsIcon />,
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
  {
    segment: "crowd-psychology-analysis",
    title: "PHÂN TÍCH TÂM LÝ ĐÁM ĐÔNG",
    icon: <GroupsIcon />,
  },
  {
    segment: "pricing-analysis",
    title: "PHÂN TÍCH BÀI TOÁN LÀM GIÁ",
    icon: <SailingIcon />,
  },
  {
    segment: "personal-feelings-analysis",
    title: "PHÂN TÍCH CẢM XÚC BẢN THÂN",
    icon: <SettingsAccessibilityIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Philosophy",
  },
  {
    segment: "phylosophy-of-life",
    title: "GIAO DỊCH VS CUỘC ĐỜI",
    icon: <MoodIcon />,
  },
];

const demoTheme = createTheme({
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

function DemoPageContent({ pathname }) {
  switch (pathname) {
    case "/trading-system":
      return <TradingSystem />;
    case "/history/big-win-trades":
      return <BigWinTrades />;
    case "/history/big-loss-trades":
      return <BigLossTrades />;
    case "/important-trades":
      return <ImporttantNotes />;
    case "/criteria":
      return <BeforeEnterOrders />;
    case "/after-placing-order":
      return <AfterPlacingOrders />;
    case "/technical-analysis":
      return <TechnicalAnalysis />;
    case "/crowd-psychology-analysis":
      return <CrowdPsychologyAnalysis />;
    case "/pricing-analysis":
      return <PricingAnalysis />;
    case "/personal-feelings-analysis":
      return <PersonalFeelingsAnalysis />;
    case "/phylosophy-of-life":
      return <Phylosophy />;
    default:
      return <TradingSystem />;
  }
}

export default function DashboardLayoutBasic() {

  const [pathname, setPathname] = React.useState("/dashboard");

  React.useEffect(() => {
    const logo = document.querySelector(".css-gua3uq");
    const textElement = document.querySelector(".css-i9gxme")
    const theme = document.querySelector(".css-15wfblr-MuiButtonBase-root-MuiIconButton-root")
    if (!theme || !logo) return;
    logo.style.display = "none";
    theme.style.color = "#3e6291de";
    textElement.innerText = "TRADING SYSTEMS";
    textElement.style.fontSize = "24px"; 
    textElement.style.fontWeight = "bold";
  }, []);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
