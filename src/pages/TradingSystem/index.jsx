import { Box, Typography } from "@mui/material";
import ImageH1 from "/image/chu-nhan-thu-phap.jpg";

const TradingSystem = () => {
  return (
    <Box sx={{ padding: 4, marginTop: "50px",}}  align="center">
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        TRADING SYSTEMS - TRADE WHAT YOU SEE NOT WHAT YOU THINK
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 700, fontSize: "40px" }}
        color="#000"
      >
        ( KIÊN NHẪN, QUYẾT ĐOÁN, KỈ LUẬT )
      </Typography>

      <Box mt={10}>
        <img src={ImageH1} width={800} height={1000} />
      </Box>
    </Box>
  );
};

export default TradingSystem;
