import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Các tiêu chí trước khi vào một lệnh giao dịch
const criteria = [
  {
    info: "Có chiến lược giao dịch phù hợp tùy vào từng giai đoạn của thị trường."
  },
  {
    info: "Kiên nhẫn chờ đợi các dấu hiệu đã đáp ứng tiêu chí vào lệnh của chiến lược đã đề ra trước đó.",
  },
  {
    info: "Có dấu hiệu tích lũy của RSI khung H4 thể hiện ở RSI tạo đáy sau cao dần.",
  },
  {
    info: "Có dấu hiệu lực bán suy yếu của RSI khung H4 thể hiện ở RSI đã đi 1 quãng khá xa, đã bó hẹp lại và chưa có vượt ra ngoài vùng 20.",
  },
  {
    info: "RSI khung D1 có sự bó hẹp lại và đi gần hết hành trình của sự điều chỉnh thì đó là một cơ hội lớn.",
  },
  {
    info: "Trước đó có RSI khung H4, D1 vượt ra khỏi vùng 80 thì khả năng rất cao sẽ có một nhịp sóng hồi."
  },
  {
    info: "Đặt 1, 2 lệnh kích hoạt chờ mua để trong trường hợp mà có cú quét SL của người khác thì mình vào bắt"
  },
  {
    info: "Không tham gia mua toàn bộ số vốn tại 1 thời điểm mua, mà cần tiếp tục quan sát để đưa ra quyết định tiếp theo."
  },
  {
    info: "Điểm Stoploss của người khác là điểm Entry của mình."
  },
  {
    info: "Chỉ giao dịch BTC và theo xu hướng chính vậy là đủ."
  },
  {
    info: "Tính toán thật kĩ trước khoản rủi ro có thể chấp nhận được."
  },
  {
    info: "Khi mà lực rơi đang mạnh thì không vội vào bắt đáy, cứ kiên nhẫn chờ đợi cho đến khi lực bán suy yếu thì mình rải vốn vào mua dần."
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
