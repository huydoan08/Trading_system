import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
  {
    label:
      "Muốn tham gia sớm vì sợ mất vị thế đẹp, nhưng chính sự thiếu kiên nhẫn đó là nguyên nhân chính dẫn tới bị mất tiền.",
  },
  {
    label:
      "Khi thị trường điều chỉnh ở khung nhỏ thì sợ hãi, cần nhớ rằng là bản chất đường đi của giá là theo mô hình sóng Eliot.",
  },
  {
    label:
      "Khi thị trường đi đúng dự phóng, kiếm được chút lợi nhuận sẽ sinh ra tâm lý chủ quan, nên nhớ rằng lúc này là lúc dễ sơ hở và mắc sai lầm nhất.",
  },
  {
    label:
      "Khi thị trường đi đúng dự phóng, có một chút lợi nhuận thường sẽ muốn chốt non, nên nhớ rằng phải hi sinh cái lợi nhỏ thì mới có được khoản lợi nhuận lớn.",
  },
];


const PersonalFeelingsAnalysis = () => {
  return (
    <Box>
      <Box sx={{ padding: 4 }}>
        <Header>PHÂN TÍCH CẢM XÚC VÀ TÂM LÝ CỦA CHÍNH BẢN THÂN</Header>
        <Title>I. PHÂN TÍCH CẢM XÚC VÀ TÂM LÝ CỦA CHÍNH BẢN THÂN</Title>
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

export default PersonalFeelingsAnalysis;
