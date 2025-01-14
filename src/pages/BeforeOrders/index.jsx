import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Các tiêu chí trước khi vào một lệnh giao dịch
const criteria = [
  "Có chiến lược giao dịch phù hợp tùy vào từng giai đoạn của thị trường.",
  "Kiên nhẫn quan sát các dấu hiệu của thị trường trên đồ thị giá và RSI.",
  "Chỉ vào lệnh khi đáp ứng được các tiêu chí của hệ thống giao dịch.",
  "Chỉ giao dịch BTC và theo xu hướng chính vậy là đủ.",
  "Mỗi một lệnh giao dịch sẽ có khối lượng cố định là 10,000$ và chia làm 3 lần mua theo tỉ lệ là 20 - 30 - 50.",
  "Không cố tình đi đoán đỉnh và đoán đáy.",
  "Hiểu thật sâu cách mà cá mập thao túng thị trường thì sẽ dám vào lệnh bắt đỉnh, bắt đáy ở ở những vùng giá rất đẹp, và né được các cạm bẫy."
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
