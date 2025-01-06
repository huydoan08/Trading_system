import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  "Khi mà đám đông chán nản thì lúc đó cá mập âm thầm gom hàng.",
  "Khi mà đám đông còn hoài nghi thì cá mập sẽ đẩy giá và đẩy giá từ từ trong sự nghi ngờ, nhưng sẽ có lúc đẩy giá rất mạnh khiến cho cá con bối rối không kịp trở tay.",
  "Khi mà đám đông tham gia vào mua nhiều thì cá mập sẽ âm thầm chốt lời, âm thầm bán và giữ giá không để cho giá rơi, nhưng tuy nhiên sẽ để lại dấu vết thể hiện ở lực mua suy yếu.",
  "Sau khi đã bán đủ số lượng thì cá mập sẽ đạp giá xuống rất nhanh để cho đám đông sợ hãi và bán tháo, và quét hết lệnh giao dịch của trader.",
  "Sau một cú đạp giá rất mạnh và đạt được mục đích, thì cá mập sẽ dụ hàng để cho cá con bay vào mua, sau đó sẽ đạp tiếp 1-2 nhịp nữa cho cá con sợ, khi đó sẽ tiếp tục đẩy giá trong sự nghi ngờ.",
  "=> Nguyên tắc là đám đông luôn là nhóm mất tiền, nhưng nếu hiểu thật sâu được và làm đúng systems thì sẽ lọt vào trong nhóm 1% những trader giỏi nhất và đi được dài hạn cùng với cả thị trường.",
];

const PricingAnalysis = () => {
  return (
    <Box>
      <Box
        padding={8}
        display="flex"
        alignItems="start"
        justifyContent="start"
        flexDirection="column"
        minHeight="100vh"
      >
        <Title>I. CÁCH MÀ CÁ MẬP LÀM GIÁ THAO TÚNG THỊ TRƯỜNG</Title>
        <List>
          {list.map((it, idx) => {
            return (
              <ListItem key={idx}>
                <ItemLists item={it} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default PricingAnalysis;
