import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
  {
    label: "Trading đòi hỏi sự kiên nhẫn trong việc chờ đợi cơ hội tốt và kỷ luật trong việc tuân thủ chiến lược giao dịch đã đề ra. Tương tự, trong cuộc sống, sự kiên nhẫn và kỷ luật là cần thiết để đạt được các mục tiêu dài hạn, dù là trong công việc, học tập, hay phát triển bản thân.",
  },
];

const Phylosophy = () => {
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
        <Header>Ý NGHĨA CỦA TRADING VÀ CUỘC ĐỜI</Header>
        <Title>I.CÔNG VIỆC TRADING CÓ Ý NGHĨA GÌ </Title>
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

export default Phylosophy;
