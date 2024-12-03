import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Các tiêu chí trước khi vào một lệnh giao dịch
const criteria = [
  {
    label: "Có dấu hiệu hội tụ hoặc phân kì của RSI.",
  },
  {
    label: "Có sự xác nhận đảo chiều của Price Action.",
  },
  {
    label: "Có xác nhận sóng hồi ở khung thời gian nhỏ hơn.",
  },
  {
    label:
      "Chỉ giao dịch theo xu hướng của khung thời gian lớn.",
  },
  {
    label: "Không cố tình đi đoán đỉnh, đoán đáy.",
  },
  {
    label: "Dấu hiệu ở khung thời gian lớn sẽ có độ chính xác khá cao.",
  },
  {
    label: "Chỉ nên giao dịch BTC và một số coin topcap.",
  },
  {
    label:
      "Trước khi đưa ra một quyết định giao dịch cần suy xét kĩ lưỡng, thẩm định kĩ càng.",
  },
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
              <ItemLists item={it.label} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
