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
    label: "Không cố tình đi đoán đỉnh, đoán đáy, chỉ follow theo xu hướng chính và quan sát các dấu hiệu ở khung thời gian giao dịch.",
  },
  {
    label: "Dấu hiệu ở khung thời gian lớn sẽ có độ chính xác khá cao.",
  },
  {
    label: "Danh mục đầu tư chỉ nên tập trung vào BTC, ETH, SOL, BNB, LINK, SUI, XRP.",
  },
  {
    label:
      "Đối với các đồng meme coin thì chỉ nên tận dụng Spot để lướt sóng ngắn.",
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
