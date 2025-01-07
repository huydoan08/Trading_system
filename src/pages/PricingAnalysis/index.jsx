import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  "Cá mập là nhóm dẫn dắt thị trường để cho đám đông sẽ hành động theo kế hoạch của họ.",
  "Cá mập sẽ âm thầm gom hàng khi mà đám đông họ chán nản rời bỏ thị trường.",
  "Cá mập sẽ âm thầm bán ra khi mà đám đông đổ xô vào mua.",
  "Cá mập tạo ra nhiều Altcoin để dụ cho đám đông nhảy tới nhảy lui và cuối cùng là mất tiền.",
  "Cá mập cho người chơi giao dịch 2 chiều để họ bị loạn đao pháp dẫn tới bị tẩu hỏa nhập ma.",
  "Cá mập cho người chơi sử dụng đòn bẩy lớn để khi mà thị trường biến động mạnh thì số tiền rất khủng sẽ bị thanh lý.",
  "Cá mập họ có tham vọng lớn nên sẽ đẩy giá lên khá cao để kiếm lợi nhuận khủng, nhưng tuy nhiên trên hành trình đó thì cá cũng sẽ có những pha rũ hàng rất mạnh.",
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
        <Title>I. BÀI TOÁN LÀM GIÁ CỦA CÁ MẬP</Title>
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
