import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Các tiêu chí trước khi vào một lệnh giao dịch
const criteria = [
  "Luôn luôn có chiến lược ngắn hạn và dài hạn.",
  "Kiên nhẫn chờ đợi thị trường xác nhận đảo chiều xu hướng rồi mới vào lệnh.",
  "Chỉ giao dịch theo xu hướng đã lên kế hoạch trước đó",
  "Không giao dịch Buy/Sell loạn xạ.",
  "Bình tĩnh và tập trung quan sát các dấu hiệu của thị trường trên đồ thị (hỗ trợ, kháng cự, price Action, mẫu hình đẹp) và công cụ chỉ báo RSI.",
  "Không cố tình đi đoán đỉnh và đoán đáy.",
  "Chỉ tập trung duy nhất vào chart của BTC.",
  "Khống chế lệnh giao dịch với Volumn giao dịch không vượt quá 3000$.",
  "Tuân thủ Stoploss tuyệt đối trong giao dịch ngắn hạn.",
  
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
