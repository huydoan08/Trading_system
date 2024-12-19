import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Các tiêu chí trước khi vào một lệnh giao dịch
const criteria = [
  {
    info: "Có dấu hiệu hội tụ hoặc phân kì của RSI.",
  },
  {
    info: "Có sự xác nhận đảo chiều của Price Action.",
  },
  {
    info: "Có xác nhận sóng hồi ở khung thời gian nhỏ hơn.",
  },
  {
    info:
      "Không cố tình đi đoán đỉnh, đoán đáy, chỉ follow theo xu hướng chính và quan sát các dấu hiệu ở khung thời gian giao dịch.",
  },
  {
    info: "Dấu hiệu ở khung thời gian lớn sẽ có độ chính xác khá cao.",
  },
  {
    info:
      "Danh mục đầu tư chỉ nên tập trung vào BTC, ETH, BNB ,SOL, LINK, SUI, XRP, XR.",
  },
  {
    info:
      "Đối với các đồng meme coin thì chỉ nên tận dụng Spot để lướt sóng ngắn.",
  },
  {
    info: "Đối với trade lướt ngắn thì chỉ vào lệnh với số tiền xác định mất là không quá 1000$."
  }
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
              <ItemLists item={it.info} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
