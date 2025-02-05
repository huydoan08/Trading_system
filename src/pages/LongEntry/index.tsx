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
import Image01 from "/image/M30-L01.png";
import Header from "../../components/Header";
import ItemLists from "../../components/ItemLists";

export default function LongEntry() {
  const images = [
    {
      original: Image01,
      thumbnail: Image01,
    },
  ];
  const data = [
    "Có dấu hiệu của Price Action.",
    "Đã tạo đáy sau cao hơn đáy trước.",
    "Phản ứng bật lên ngay tại vùng hỗ trợ tạo ra trước đó.",
    "Đã retest lần 2 xong.",
    "Áp dụng chiến lược stoploss của người ta là entry vào lệnh của mình."
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
