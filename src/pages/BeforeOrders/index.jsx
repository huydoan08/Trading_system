import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Các tiêu chí trước khi vào một lệnh giao dịch
const criteria = [
  "Chiến lược đó là chỉ có giao dịch Spot BTC, tùy từng giai đoạn mà có chiến lược ở khung thời gian sao cho phù hợp.",
  "Kiên nhẫn quan sát các dấu hiệu của thị trường trên đồ thị giá và RSI.",
  "Chỉ vào lệnh khi các tín hiệu đã đủ mạnh.",
  "Không cố tình đi đoán đỉnh và đoán đáy.",
  "Tính toán thật kĩ khoản cắt lỗ cho mỗi lệnh giao dịch.",
  "Tuyệt đối không DCA làm cho khối lượng giao dịch lớn dần lên."
];

export default function BeforeEnterOrders() {
  return (
    <Box
      padding={8}
      display="flex"
      alignItems="start"
      justifyContent="start"
      flexDirection="column"
      margin="0 auto"
      minHeight="100vh"
      textAlign="center"
    >
      <Title>I. CÁC TIÊU CHÍ TRƯỚC KHI VÀO LỆNH</Title>
      <List>
        {criteria.map((it, idx) => {
          return (
            <ListItem key={idx}>
              <ItemLists item={it} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
