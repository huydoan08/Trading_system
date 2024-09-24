import { Box, Grid, Paper, Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image1M from "/image/1M_00002.png";
import Image1W from "/image/1W_00002.png";
import Image1D from "/image/1D_00002.png";
import ImageH4 from "/image/H4_00002.png";
import ImageH2 from "/image/H2_00002.png";
import ImageH1 from "/image/H1_00002.png";

const images = [
  {
    original: Image1M,
    thumbnail: Image1M,
  },
  {
    original: Image1W,
    thumbnail: Image1W,
  },
  {
    original: Image1D,
    thumbnail: Image1D,
  },
  {
    original: ImageH4,
    thumbnail: ImageH4,
  },
  {
    original: ImageH2,
    thumbnail: ImageH2,
  },
  {
    original: ImageH1,
    thumbnail: ImageH1,
  },
];

const timeFrames = [
  {
    title: "Khung M",
    content:
      "Lưỡng lự,  chưa giảm ",
  },
  {
    title: "Khung 1W",
    content:
      "Giảm, nhưng có dấu hiệu đã bắt đầu hướng lên",
  },
  {
    title: "Khung 1D",
    content:
      "Tăng, nhưng RSI đã đi được 1 quãng xa (2/3 chặng đường), và lực tăng này không thực sự mạnh mẽ vì mới ở vùng RSI 60, có khả năng đã hết hiệu lực sóng tăng. " ,
  },
  {
    title: "Khung H4",
    content:
      "Tăng, nhưng có dấu hiệu suy yếu, RSI suy yếu, đã rút râu nến tăng lần thứ 2, khả năng cao sẽ rơi.",
  },
  {
    title: "Khung H2, H1",
    content:
      "H2, H1 không có RSI vượt ra vùng 80, đã hình thành cấu trúc sóng suy yếu, RSI đã quay lại retest xong và không phá qua.",
  },
];

export default function BigLossTrades() {
  return (
    <Box>
      <Grid container spacing={2} style={{ padding: 16 }}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <ImageGallery items={images} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          {timeFrames.map((frame, index) => (
            <Paper key={index} style={{ padding: 16, marginBottom: 16 }}>
              <Typography variant="h6">{frame.title}</Typography>
              <Typography>{frame.content}</Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
