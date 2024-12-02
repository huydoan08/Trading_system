import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ImageGallery from "react-image-gallery";

import Image01 from "/image/01.png";
import Image02 from "/image/02.png";
import Image03 from "/image/03.png";
import Image04 from "/image/04.png";
import Image05 from "/image/05.png";
import Image06 from "/image/06.png";
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
  ];
  const data = [
    {
      info: "Quản lý lệnh giao dịch theo cấu trúc sóng, follow theo chiến lược giao dịch một cách tuyệt đối.",
    },
    {
      info: "Giao dịch ở khung thời gian nào thì sẽ quản lý lệnh giao dịch ở khung thời gian đó.",
    },
    {
      info: "Chỉ dời Stoploss theo cấu trúc sóng về những vùng giá quan trọng.",
    },
    {
      info: "Đối với một số coin lowcap thì quản lý lệnh bằng cách đặt chốt lời từng phần."
    },
    {
      info: "Tuyệt đối không để bị cảm xúc chi phối vào và đóng lệnh bằng tay, cần phải kỉ luật theo systems một cách tuyệt đối.",
    },
    {
      info: "Giao dịch theo xu hướng - Cắt vị thế lỗ nhanh chóng - Duy trì vị thế lời - Đừng vội đóng vị thế khi đang có khoản lợi nhuận lớn.",
    }
  ];
  return (
    <Box>
      <Box sx={{ padding: 4 }}>
        <Header>CÁCH ĐỂ QUẢN LÝ MỘT LỆNH GIAO DỊCH</Header>
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
                    {data.map((it, idx) => {
                      return (
                        <ListItem
                          key={idx}
                          sx={{ display: "flex", alignItems: "flex-start" }}
                        >
                          <ItemLists item={it?.info} />
                        </ListItem>
                      )
                    })}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
