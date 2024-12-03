import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  "Gom hàng: Khi mà thị trường sideway ở vùng đáy trong một thời gian rất là dài, đám đông chán nản bán ra thì cá mập sẽ âm thầm gom hàng vào.",
  "Bơm thử: Khi mà cá mập đã gom hàng xong thì sẽ bắt đầu đẩy giá một chút và sideway thêm để cho những người yếu tay bán ra nốt số coi cuối cùng.",
  "Đẩy mạnh: Khi mà mọi thứ đã sẵn sàng, gom đủ số lượng, thì cá mập sẽ đẩy giá nên rất là mạnh trong thời gian ngắn dưới sự nghi ngờ của đám đông.",
  "Bắt đầu phân phối: Khi này rất nhiều thông tin tích cực được tung ra, ai tham gia vào cũng kiếm được lợi nhuận ngay, lúc này giá sẽ vẫn tiếp tục tăng do sự đẩy giá của cá mập và fomo của đám đông, nhưng đây đã là vùng rất nguy hiểm rồi vì khi này thì cá mập sẽ âm thầm bán ra.",
  "Suy yếu: Khi mà dòng tiền bên ngoài đã yếu, cá mập đã bán đủ số lượng, thì sẽ để cho thị trường rơi tự do."
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
        <Title>I. CÁCH MÀ CÁ MẬP LÀM GIÁ THAO TÚNG THỊ TRƯỜNG</Title>
        <List>
          {list.map((it, idx) => {
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
