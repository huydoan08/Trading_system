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
  ];
  const data = [
    {
      info: "Quản lý lệnh giao dịch theo cấu trúc sóng H4 dời SL về những vùng giá quan trọng.",
    },
    {
      info: "Không để cảm xúc chi phối vào và chốt lời non."
    },
    {
      info: "Luôn luôn tuân thủ đặt Stoploss hợp lý.",
    },
    {
      info: "Khi lệnh đi ngược xu hướng cũng không đóng lệnh ngay và cũng không dời Stoploss ra xa."
    },
    {
      info: "Không cố gắng tìm cơ hội vào lệnh ngay sau khi chạm Stoploss."
    },
    {
      info: "Không kì vọng lệnh đó phải thắng và càng không sợ lệnh đó bị thua, tất cả cứ để cho hệ thống giao dịch đo lường, thời gian sẽ trả lời tất cả."
    },
    {
      info: "Cắt out ra ngoài 1 phần lợi nhuận nhỏ sau mỗi lệnh giao dịch thành công để tận hưởng cảm giác chiến thắng.",
    },
    {
      info: "Ghi chép lại nhật kí giao dịch, đúc kết lại kinh nghiệm sau mỗi lệnh giao dịch để không mắc phải sai lầm cho những lần sau.",
    },
    {
      info: "Nhanh chóng quên đi quá khứ giao dịch, chỉ giữ lại cho mình bài học, và setup một cuộc chơi mới."
    },
    {
      info: "Liên tục học tập, backtest, đúc kết kinh nghiệm, hoàn thiện bản thân và giữ sự kỉ luật ở mức cao nhất."
    }
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
