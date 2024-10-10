import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
  "Bản chất của cuộc chơi vẫn là khi mà đám đông ai cũng bay vào...thì chắc chắn vùng giá đó sẽ phải có điều chỉnh.",
  "Quy tắc vẫn là đám đông vẫn luôn thua, khi mà đám đông nghĩ về một kịch bản nào đó...thì thị trường sẽ đi ngược lại với kịch bản đó."
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
        <Header>PHÂN TÍCH BÀI TOÁN MÀ CÁ MẬP LÀM GIÁ </Header>
        <Title>I. PHÂN TÍCH BÀI TOÁN MÀ CÁ MẬP LÀM GIÁ</Title>
        <List>
          {timeFrames.map((it, idx) => {
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
