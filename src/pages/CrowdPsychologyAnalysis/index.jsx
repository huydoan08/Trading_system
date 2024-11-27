import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
  {
    label:
      "Đám đông là nhóm người sẽ bay vào fomo khi mà thị trường bước giai giai đoạn tăng trưởng mạnh ",
  },
  {
    label:
      "Đám đông là nhóm người sẽ sợ hãi, chán nản rời khỏi thị trường khi mà giai đoạn thanh lọc và tích lũy trong một thời gian rất là dài.",
  },
  {
    label: "Đám đông là nhóm người nhảy từ tài sản không tăng giá sang tài sản đang tăng giá mạnh vì sợ mất phần.",
  },
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
      <Header>PHÂN TÍCH TÂM LÝ ĐÁM ĐÔNG</Header>
      <Box textAlign={"left"}>
        <Title>I. PHÂN TÍCH TÂM LÝ ĐÁM ĐÔNG</Title>
        <List>
          {timeFrames.map((it, idx) => {
            return (
              <ListItem key={idx}>
                <ItemLists item={it.label} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default CrowdPsychologyAnalysis;
