import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import ImageGallery from "react-image-gallery";

import Image01 from "/image/01.png";
import Image02 from "/image/02.png";
import Image03 from "/image/03.png";
import Image04 from "/image/04.png";
import Image05 from "/image/05.png";
import Image06 from "/image/06.png";
import Image07 from "/image/07.png";
import Image08 from "/image/08.png";
import Image09 from "/image/09.png";
import Image10 from "/image/10.png";
import ImageL1 from "/image/L1.png";
import Header from "../../components/Header";
import ItemLists from "../../components/ItemLists";

export default function AfterPlacingOrders() {
  const images = [
    {
      original: Image01,
      thumbnail: Image01,
    },
    {
      original: Image02,
      thumbnail: Image02,
    },
    {
      original: Image03,
      thumbnail: Image03,
    },
    {
      original: Image04,
      thumbnail: Image04,
    },
    {
      original: Image05,
      thumbnail: Image05,
    },
    {
      original: Image06,
      thumbnail: Image06,
    },
    {
      original: Image07,
      thumbnail: Image07,
    },
    {
      original: Image08,
      thumbnail: Image08,
    },
    {
      original: Image09,
      thumbnail: Image09,
    },
    {
      original: Image10,
      thumbnail: Image10,
    },
    {
      original: ImageL1,
      thumbnail: ImageL1,
    },
  ];
  const data = [
    "Quản lý lệnh giao dịch theo cấu trúc sóng hoặc theo fibo, không đặt SL quá sát.",
    "Không để cảm xúc chi phối vào và chốt lời non, chỉ đóng lệnh khi đã đạt đủ target đặt ra trước đó hoặc chạm SL.",
    "Không vội vàng dời Stoploss ngay sau khi giá vừa mới chạy một xíu.",
    "Không cố gắng tìm cơ hội vào lệnh ngay sau khi chạm Stoploss.",
    "Tuyệt đối không đóng lệnh bằng tay khi mà giá đang chạy.",
    "Chỉ giao dịch 1 chiều thôi."
  ];           
  return (
    <Box sx={{ padding: 4 }}>
      <Header></Header>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: 16 }}>
              <ImageGallery items={images} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxHeight: "67.5vh", overflow: "auto" }}>
              <CardContent>
                <List>
                  {data.map((item, idx) => {
                    return (
                      <ListItem
                        key={idx}
                        sx={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <ItemLists item={item} />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
