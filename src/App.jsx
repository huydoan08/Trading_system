import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import TradingSystem from './pages/TradingSystem';
import BigWinTrades from './pages/BigWinTrades';
import BigLossTrades from './pages/BigLossTrades';
import ImporttantNotes from './pages/ImportantNotes';
import BeforeEnterOrders from './pages/CriteriaBeforeEnteringOrders';
import AfterPlacingOrders from './pages/AfterPlacingOrders';
import TechnicalAnalysis from './pages/TechnicalAnalysis';

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


const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
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
    case '/trading-system':
      return (
        <TradingSystem/>
      );
    case '/history/big-win-trades':
      return (
       <BigWinTrades/>
      );
    case '/history/big-loss-trades':
      return (
       <BigLossTrades/>
      );
    case '/important-trades':
      return (
       <ImporttantNotes/>
      );
    case '/criteria':
      return (
       <BeforeEnterOrders/>
      );
    case '/after-placing-order':
      return (
       <AfterPlacingOrders/>
      );
    case '/technical-analysis':
      return (
       <TechnicalAnalysis/>
      );
    default:
      return (
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography>404 - Page not found</Typography>
        </Box>
      );
  }
}


export default function DashboardLayoutBasic(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
