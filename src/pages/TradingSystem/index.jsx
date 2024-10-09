import { Box, Paper } from "@mui/material";
import ImageGallery from "react-image-gallery";
import DB01 from "/image/chu-nhan-thu-phap.jpg";
import DB02 from "/image/DB02.jpg";
import DB03 from "/image/DB03.jpg";
import DB04 from "/image/DB04.jpg";
import DB05 from "/image/DB05.jpg";
import Header from "../../components/Header";

const TradingSystem = () => {
  const images = [
    {
      original: DB01,
      thumbnail: DB01,
    },
    {
      original: DB02,
      thumbnail: DB02,
    },
    {
      original: DB03,
      thumbnail: DB03,
    },
    {
      original: DB04,
      thumbnail: DB04,
    },
    {
      original: DB05,
      thumbnail: DB05,
    },
  ];
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      margin="0 auto"
      minHeight="100vh"
      textAlign="center"
    >
      <Header>TRADING SYSTEMS - TRADE WHAT YOU SEE NOT WHAT YOU THINK</Header>
      <Header color="#9f9f9f">( KIÊN NHẪN, QUYẾT ĐOÁN, KỈ LUẬT )</Header>
      <Paper style={{ padding: 10 }}>
        <ImageGallery items={images} />
      </Paper>
    </Box>
  );
};

export default TradingSystem;
