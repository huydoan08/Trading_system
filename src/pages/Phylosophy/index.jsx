import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
  {
    label:
      "...",
  }
];

const Phylosophy = () => {
  return (
    <Box>
      <Box sx={{ padding: 4 }}>
        <Header>Ý NGHĨA CỦA TRADING VÀ CUỘC ĐỜI</Header>
        <Title>I.CÔNG VIỆC TRADING CÓ Ý NGHĨA GÌ </Title>
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

export default Phylosophy;
