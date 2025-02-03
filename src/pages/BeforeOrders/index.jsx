import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Các tiêu chí trước khi vào một lệnh giao dịch
const criteria = [
  "Luôn có kịch bản cho giai đoạn sắp tới của thị trường.",
  "Kiên nhẫn quan sát các dấu hiệu của thị trường trên đồ thị giá và RSI.",
  "Không cố tình đi đoán đỉnh và đoán đáy.",
  "Chỉ nên giao dịch BTC",
  "Nên giao dịch ở khung thời gian H4 và vào khung M30 để quan sát và quản lý lệnh.",
  "Tính toán trước SL, TP, RR cho mỗi lệnh trước khi vào lệnh."
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
