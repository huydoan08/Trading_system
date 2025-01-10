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
      info: "Chỉ giao dịch dựa vào các dấu hiệu của lực mua lực bán chứ không nhìn vào giá."
    },
    {
      info: "Quản lý lệnh giao dịch theo cấu trúc sóng H4 dời SL về những vùng giá quan trọng nếu như lực mua tham gia mạnh.",
    },
    {
      info: "Không để cảm xúc chi phối vào và chốt lời non, tuy nhiên có thể đặt lệnh TP để chốt lời từng phần."
    },
    {
      info: "Khi thấy có dấu hiệu bất ổn thì nên nhanh chóng thoát lệnh.",
    },
    {
      info: "Bình tĩnh quan sát các dấu hiệu của thị trường và cảm nhận bằng trực giác để có thể đưa ra quyết định đúng.",
    },
    {
      info: "Không để cảm xúc tham lam, sợ hãi chi phối vào các quyết định, mà chỉ đưa ra quyết định dựa vào các dấu hiệu."
    },
    {
      info: "Chỉ giao dịch theo xu hướng chính của khung 1W, 1M.",
    },
    {
      info: "Không quá kì vọng, không đoán, không ảo tưởng, không nghe theo KOL nào cả, chỉ tập trung vào hệ thống giao dịch, và nâng cao kĩ năng của bản thân."
    },
    {
      info: "Cắt out ra ngoài 1 phần lợi nhuận sau mỗi lệnh giao dịch thành công để tận hưởng cảm giác chiến thắng.",
    },
    {
      info: "Ghi chép lại nhật kí giao dịch, đúc kết lại kinh nghiệm sau mỗi lệnh giao dịch để không mắc phải sai lầm cho những lần sau.",
    },
    {
      info: "Nhanh chóng quên đi quá khứ giao dịch, chỉ giữ lại cho mình bài học, và setup một cuộc chơi mới."
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
