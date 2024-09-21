import { Grid, Paper, Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image1M from "/image/1M_00001.png";
import Image1W from "/image/1W_00001.png";
import Image1D from "/image/1D_00001.png";
import ImageH4 from "/image/H4_00001.png";
import ImageH2 from "/image/H2_00001.png";
import ImageH1 from "/image/H1_00001.png";

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
      "Tăng, nhưng thực sự mới đi được một  xíu (1/3 chặng đường, có khả năng đi tiếp rất cao vì bắt đầu mở rộng). " ,
  },
  {
    title: "Khung H4",
    content:
      "Tăng, nhưng có khả năng là dã đi hết sóng, có thể có nhịp điều chỉnh nhẹ",
  },
  {
    title: "Khung H1",
    content:
      "H2, H1 không có RSI vượt ra vùng 80, nhưng vẫn giữ giá khá tốt và chưa có hình thành cấu trúc giảm",
  },
];

export default function BigWinTrades() {
  return (
    <>
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
    </>
  );
}
