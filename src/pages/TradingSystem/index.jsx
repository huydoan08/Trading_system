import { Box } from "@mui/material";
import ImageH1 from "/image/chu-nhan-thu-phap.jpg";
import Header from "../../components/Header";

const TradingSystem = () => {
  return (
    <Box sx={{ padding: 4}} align="center">
      <Header>TRADING SYSTEMS - TRADE WHAT YOU SEE NOT WHAT YOU THINK</Header>
      <Header>( KIÊN NHẪN, QUYẾT ĐOÁN, KỈ LUẬT )</Header>

      <Box mt={10}>
        <img src={ImageH1} width={800} height={1000} />
      </Box>
    </Box>
  );
};

export default TradingSystem;
