import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

// Phân tích tâm lý và hành vi của đám đông
const list = [
  "Đám đông sẽ tham lam mua vào khi mà thấy người khác dễ dàng kiếm được lợi nhuận.",
  "Đám đông sẽ sợ hãi rời đi khi mà thị trường có sự điều chỉnh giảm mạnh.",
  "Quy tắc trong game là đám đông luôn thua.",
  "Khi mà nhìn xunh quanh ai ai cũng kiếm được tiền thì coi chừng chính mình sẽ là người mất tiền đấy nhé."
];

const CrowdPsychology = () => {
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

export default CrowdPsychology;
