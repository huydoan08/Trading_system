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
    "Có xác nhận sóng hồi ở khung thời gian nhỏ hơn để Tối Ưu Đpiểm Vào Lệnh Đẹp. (Phải đợi có sự điều chỉnh, không tham gia sớm)",
  },
  {
    label:
      "Khung thời gian giao dịch nên Đồng Thuận với khung thời gian lớn hơn.",
  },
  {
    label: "Không cố tình đi đoán đỉnh, đoán đáy → Chỉ follow theo xu hướng.",
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
