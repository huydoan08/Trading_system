import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  "Nôn nóng muốn vào lệnh ngay khi mà dấu hiệu chưa rõ ràng, tỉ lệ RR không cao.",
  "Ngay sau khi bị quét SL thì tâm sân nổi lên và muốn vào lệnh mới ngay lập tức.",
  "Không xác định trước điểm TP hoặc có nhưng đặt TP quá xa không hợp lý, đó là tâm tham.",
  "Đóng lệnh trực tiếp bằng tay trong khi lệnh đó đang được chạy, nếu sợ quét SL thì mãi mãi sẽ là con rối trong thị trường này.",
  "Theo dõi thị trường quá nhiều, đó là việc làm vô thức nhưng vô tình sẽ làm hại mình.",
  "Giao dịch Altcoin.",
  "Vào lệnh với khối lượng quá lớn, cách tốt nhất là cứ đi vol thật đều.",
  "Để cho cảm xúc, bản ngã bên trong lấn áp và đưa ra hành động vô minh.",
  "Quá bận tâm vào số tiền lãi lỗ trong tài khoản, vì các con số đó chả nói lên điều gì cả mà quan trọng đó là kiếm lợi nhuận ổn định trong dài hạn.",
];

const PersonalFeelingsAnalysis = () => {
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
        <Title>I. SAI LẦM ĐÃ GẶP PHẢI TRONG QUÁ KHỨ</Title>
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

export default PersonalFeelingsAnalysis;
