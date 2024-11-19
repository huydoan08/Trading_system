import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const criteria = [
  {
    label:
      "Có dấu hiệu hội tụ hoặc phân kì của RSI.",
  },
  {
    label: "Có xác nhận tín hiệu Price Action. (Nến đảo chiều)",
  },
  {
    label:
    "Có xác nhận sóng hồi ở khung thời gian nhỏ hơn để Tối Ưu Điểm Vào Lệnh Đẹp. (Phải đợi có sự điều chỉnh, không tham gia sớm)",
  },
  {
    label:
      "Khung thời gian giao dịch nên Đồng Thuận với khung thời gian lớn hơn.",
  },
  {
    label: "Không cố tình đi đoán đỉnh, đoán đáy → Chỉ follow theo xu hướng.",
  },
  {
    label: "Dấu hiệu ở khung thời gian lớn có độ chính xác sẽ khá là cao.",
  },
  {
    label: "Ưu tiên vào lệnh với BTC, ETH với Altcoin thì chỉ vào lệnh với volumn nhỏ.",
  },
  {
    label: "Trước khi quyết định vào lệnh cần có sự suy xét kĩ càng, khi đã vào lệnh thì có nghĩa là chấp nhận mất SL cho lệnh đó.",
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
