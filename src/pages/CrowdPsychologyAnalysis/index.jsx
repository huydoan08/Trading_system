import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
  {
    label:
      "Khi mà đám đông bị mất niềm tin vào thị trường, đó là lúc mà cá mập sẽ gom hàng.",
  },
  {
    label:
      "Khi mà đám đông còn hoài nghi thì cá mập sẽ bắt đầu đẩy giá đi lên.",
  },
  {
    label:
      "Khi mà đám đông ai cũng bay vào thì lúc đó cá mập sẽ xả hàng.",
  },
];

const CrowdPsychologyAnalysis = () => {
  return (
    <Box>
      <Box sx={{ padding: 4 }}>
        <Header>PHÂN TÍCH TÂM LÝ ĐÁM ĐÔNG</Header>
        <Title>I. PHÂN TÍCH TÂM LÝ ĐÁM ĐÔNG</Title>
        <List>
          {timeFrames.map((it, idx) => {
            return (
              <ListItem
                key={idx}
              >
                <ItemLists item={it.label}/>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default CrowdPsychologyAnalysis;
