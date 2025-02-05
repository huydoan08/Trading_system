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
import Image01 from "/image/M30-S01.png";
import Header from "../../components/Header";
import ItemLists from "../../components/ItemLists";

export default function ShotEntry() {
  const images = [
    {
      original: Image01,
      thumbnail: Image01,
    },
  ];
  const data = [
    "Trước đó có RSI vượt xuống dưới vùng 20 nên khả năng cao sẽ có một con sóng retest.",
    "Trước đó không có RSI vượt ra khỏi vùng 80 nên lực tăng không thực sự mạnh mẽ.",
    "Cấu trúc sóng cho thấy lực tăng khá yếu, không thể phá qua nổi đỉnh cũ tạo ra trước đó."
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
