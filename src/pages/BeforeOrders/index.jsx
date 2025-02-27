import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Các tiêu chí trước khi vào một lệnh giao dịch
const criteria = [
  "Các mẫu hình đúng tiêu chuẩn, mẫu hình đẹp.",
  "Các khung thời gian phải đồng thuận.",
  "Chờ xác nhận sóng hồi, để tối ưu điểm vào lệnh đẹp",
  "Chờ dấu hiệu xác nhận Price Action",
  "Không cố tình đoán đỉnh và đoán đáy.",
  "Xác định trendline khi giá phá vỡ xu hướng trước đó.",
  "Mức rủi ro, mức thưởng và xác suất.",
  "Dùng fibo để xác định hiệu lực con sóng còn mạnh không.",
  "Tối ưu điểm vào lệnh đẹp ở khung thời gian nhỏ.",
  "Tính toán cho thật kĩ mức rủi ro cho phép.",
  "Phải có chiến lược rõ ràng trước khi vào lệnh.",
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
