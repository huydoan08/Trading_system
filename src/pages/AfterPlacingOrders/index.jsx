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
      info: "Quản lý lệnh theo cấu trúc sóng, follow chiến lược giao dịch một cách tuyệt đối.",
    },
    {
      info: "Tuyệt đối không nới lỏng SL ra xa, nếu nó quét SL thì hãy cứ để cho nó quét, ta sẽ tìm 1 cơ hội khác để vào lệnh, thị trường luôn đúng, mọi tình huống đều có thể xảy ra.",
    },
    {
      info: "Không bị cảm xúc chi phối vào và chốt lời non, cứ follow theo cấu trúc sóng và dời SL về những vùng giá quan trọng.",
    },
    {
      info: "Chỉ nhồi thêm lệnh khi giá đã có xác nhận của sự điều chỉnh.",
    },
    {
      info: "Tiền kiếm được trong lúc chờ đợi, chứ không phải là liên tục vào lệnh.",
    },
    {
      info: "Giao dịch theo xu hướng - Cắt vị thế lỗ nhanh chóng - Duy trì vị thế lời - Đừng đóng vị thế khi đang có khoản lợi nhuận lớn.",
    },
  ];
  return (
    <Box sx={{ mt: "-100px" }}>
      <Box sx={{ padding: 4 }}>
        <Typography
          variant="h6"
          align="center"
          fontWeight="bold"
          gutterBottom
          fontSize={"50px"}
          mb={10}
        >
          QUẢN LÝ LỆNH SAO CHO TỐI ƯU ?
        </Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: 16 }}>
                <ImageGallery items={images} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ maxHeight: "617px", overflow: "auto" }}>
                <CardContent>
                  <List>
                    {data.map((it, idx) => {
                      return (
                        <ListItem
                          key={idx}
                          sx={{ display: "flex", alignItems: "flex-start" }}
                        >
                          <Box
                            sx={{
                              width: "10px",
                              height: "10px",
                              backgroundColor: "black",
                              borderRadius: "50%",
                              marginRight: "30px",
                              flexShrink: 0,
                              mt: "20px",
                            }}
                          />
                          <ListItemText
                            primaryTypographyProps={{
                              fontSize: "30px",
                              fontWeight: "700",
                            }}
                            primary={it?.info}
                          />
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
    </Box>
  );
}
