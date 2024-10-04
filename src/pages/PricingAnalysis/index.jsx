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

const PricingAnalysis = () => {
  return (
    <Box>
      <Box sx={{ padding: 4 }}>
        <Header>PHÂN TÍCH BÀI TOÁN MÀ CÁ MẬP LÀM GIÁ </Header>
        <Title>I. PHÂN TÍCH BÀI TOÁN MÀ CÁ MẬP LÀM GIÁ</Title>
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

export default PricingAnalysis;
