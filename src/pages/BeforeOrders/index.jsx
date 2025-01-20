import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Các tiêu chí trước khi vào một lệnh giao dịch
const criteria = [
  "Có chiến lược giao dịch phù hợp tùy thuộc vào từng giai đoạn của thị trường, và luôn chuẩn bị sẵn trước các kịch bản có thể xảy ra.",
  "Kiên nhẫn quan sát các dấu hiệu của thị trường trên đồ thị giá và RSI.",
  "Chỉ vào lệnh khi các tín hiệu đã đủ mạnh.",
  "Chỉ giao dịch BTC thôi nếu muốn giữ được tiền.",
  "Không cố tình đi đoán đỉnh và đoán đáy.",
  "Tính toán thật kĩ khoản cắt lỗ cho mỗi lệnh giao dịch."
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
