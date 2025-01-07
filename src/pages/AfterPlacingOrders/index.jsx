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
      info: "Tuyệt đối không mở chart ra xem quá nhiều để tránh việc bản ngã có cơ hội trỗi dậy."
    },
    {
      info: "Quản lý lệnh giao dịch theo cấu trúc sóng H4, D1 dời SL về những vùng giá quan trọng.",
    },
    {
      info: "Bình tĩnh quan sát các dấu hiệu của thị trường và cảm nhận bằng trực giác để có thể đưa ra quyết định đúng.",
    },
    {
      info: "Chỉ giao dịch theo xu hướng chính của khung 1W, 1M.",
    },
    {
      info: "Hãy cứ để lệnh giao dịch tiếp tục chạy khi đã lợi nhuận, đừng để cảm xúc chi phối vào và chốt lời non."
    },
    {
      info: "Tuyệt đối không DCA âm, nhồi lệnh âm."
    }
  ];
  return (
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
