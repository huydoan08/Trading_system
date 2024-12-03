import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Phân tích tâm lý và hành vi của đám đông
const list = [
  "Đám đông là nhóm người sẽ bay vào fomo khi mà thị trường bước giai giai đoạn tăng trưởng mạnh.",
  "Đám đông là nhóm người sẽ sợ hãi, chán nản rời khỏi thị trường khi mà giai đoạn thanh lọc và tích lũy trong một thời gian rất là dài.",
  "Khi mà đám đông tham gia vào fomo quá nhiều thì khả năng cao tại vùng giá đó sẽ có sự điều chỉnh, nguyên tắc đám đông là nhóm sẽ mất tiền.",
  "Khi mà đám đông chán nản rời bỏ thị trường thì lúc đó cá mập sẽ âm thầm gom hàng lại."
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
