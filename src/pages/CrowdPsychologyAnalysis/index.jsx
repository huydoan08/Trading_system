import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Phân tích tâm lý và hành vi của đám đông
const list = [
  "Đám đông sẽ tham lam khi mà nhìn thấy cơ hội rõ ràng, khi đó là lúc mà tôi biết đủ và thoát lệnh, con sóng đó có thể tăng tiếp nhưng tôi ý thức được con sóng đó không thuộc về mình.",
  "Đám đông sẽ sợ hãi khi mà Market Maker thao túng đạp giá xuống, khi đó đám đông sẽ sợ hãi và bán ra cũng như lệnh future bị thanh lý khá nhiều, khi đó là cơ hội để tôi cân nhắc vào lệnh.",
];

const CrowdPsychologyAnalysis = () => {
  return (
    <Box
      padding={8}
      display="flex"
      alignItems="center"
      justifyContent="start"
      flexDirection="column"
      minHeight="100vh"
    >
      <Box textAlign={"left"}>
        <Title>I. PHÂN TÍCH TÂM LÝ VÀ HÀNH VI CỦA ĐÁM ĐÔNG</Title>
        <List>
          {list.map((item, idx) => {
            return (
              <ListItem key={idx}>
                <ItemLists item={item} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default CrowdPsychologyAnalysis;
