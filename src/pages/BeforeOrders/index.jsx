import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Các tiêu chí trước khi vào một lệnh giao dịch
const criteria = [
  {
    info: "Có tín hiệu xác nhận của RSI.",
  },
  {
    info: "Có sự xác nhận kill Long/Shot tại khung H1, H4.",
  },
  {
    info: "Khi mà giá quay về test tại các vùng hỗ trợ hoặc kháng cự quan trọng.",
  },
  {
    info: "Stoploss cho mỗi một lệnh giao dịch nên cố gắng khống chế ở mức dưới 1000$.",
  },
  {
    info: "Tính toán trước rủi ro, mức thưởng và xác suất chiến thắng đối với lệnh giao dịch đó.",
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
              <ItemLists item={it.info} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
