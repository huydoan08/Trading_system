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

import Image01 from "/image/Strategy01.png";
import Header from "../../components/Header";
import ItemLists from "../../components/ItemLists";

export default function Strategy() {
  const images = [
    {
      original: Image01,
      thumbnail: Image01,
    },
  ];
  const data = [
    "Khung W: Sideway, nhưng mà thiên về xu hướng giảm.",
    "Khung D: Giảm mới đi được 10% hành trình, nhưng mà thiên về sideway biên độ rộng.",
    "Khung H4: Sideway",
    "Khung H1: Sideway",
    "Chiến lược ngắn hạn H4: Chờ nhịp rơi xuống vùng hỗ trợ rồi xem phản ứng giá thế nào rồi sẽ ra tay hành động.",
    "Chiến lược trung hạn D: Đánh theo sóng sideway khung D, nhưng ý thức là xu hướng chính đang là xu hướng giảm.",
    "Chiến lược dài hạn: Chưa có vùng tích lũy đẹp, nên ngồi ngoài học tập, rèn luyện sự kiên nhẫn, sự kỉ luật.",
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
