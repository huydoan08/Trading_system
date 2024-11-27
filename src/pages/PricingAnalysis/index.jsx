import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
  "Gom hàng: Khi mà thị trường sideway ở vùng đáy trong một thời gian rất là dài, đám đông chán nản bán ra thì cá mập sẽ âm thầm gom hàng vào.",
  "Bơm thử: Khi mà cá mập đã gom hàng xong thì sẽ bắt đầu đẩy giá và sideway thêm để cho những người yếu tay bán ra nốt số coi cuối cùng",
  "Đẩy mạnh: Khi mà mọi thứ đã sẵn sàng thì cá mập sẽ đẩy giá nên rất là mạnh trong sự nghi ngờ của đám đông",
  "Tiếp tục đẩy: Khi này ai ai tham gia vào cũng có lợi nhuận, người người bàn tán về BTC, rất nhiều thông tin tích cực được tung ra, khi này thì cá mập sẽ âm thầm bán ra.",
  "Suy yếu: Khi mà dòng tiền bên ngoài đã yếu thì cá mập sẽ giữ giá để bán, khi mà đã bán đủ số lượng thì sẽ để cho thị trường rơi tự do."
];

const PricingAnalysis = () => {
  return (
    <Box>
      <Box
        padding={8}
        display="flex"
        alignItems="start"
        justifyContent="start"
        flexDirection="column"
        minHeight="100vh"
      >
        <Header>PHÂN TÍCH BÀI TOÁN MÀ CÁ MẬP LÀM GIÁ </Header>
        <Title>I. PHÂN TÍCH BÀI TOÁN MÀ CÁ MẬP LÀM GIÁ</Title>
        <List>
          {timeFrames.map((it, idx) => {
            return (
              <ListItem key={idx}>
                <ItemLists item={it} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default PricingAnalysis;
