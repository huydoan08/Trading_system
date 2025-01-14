import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  "Chỉ tập trung vào chính bản thân mình, không tin và làm theo bất kì ai cả, không cần chứng minh điều gì hay đi chia sẻ cho bất kì ai cả.",
  "Trading cần có chiến lược cụ thể và kiên nhẫn chờ đợi cơ hội tốt thực sự xuất hiện, tuân thủ Stoploss tuyệt đối và kiên nhẫn chờ đợi thị trường làm việc.",
  "Quá khứ là thứ đã qua, không thay đổi được, tương lai là thứ sẽ đến, không lường trước được, hãy tập trung vào khoảnh khắc hiện tại.",
  "Giảm bớt sự kì vọng và biết đủ thì mọi thứ sẽ rất nhẹ nhàng, hạnh phúc là hệ quả tất yếu.",
  "Trong cuộc sống và trong trading đều chịu sự chi phối của quy luật nhân quả.",
  "Tương lai phía trước và sự nghiệp trading luôn luôn có đầy rẫy những khó khăn, những mất mát, những cám dỗ đang chờ đón phía trước, bản thân phải luôn có sự chuẩn bị tốt nhất để đối mặt với chúng.",
  "Ai trong cuộc đời cũng sẽ phải mắc những sai lầm, nhưng đừng để lặp lại những sai lầm đó.",
  "Hãy học cách xem nhẹ được và mất, sống một cuộc sống đơn giản nhưng chất lượng.",
  "Quan sát xunh quanh, soi người khác xem có học được gì từ họ hay không."
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
        <Title>CON ĐƯỜNG CỦA SỰ GIÁC NGỘ ( GIỚI-ĐỊNH-TUỆ ) </Title>
        <List>
          {list.map((it, idx) => {
            return (
              <ListItem key={idx}>
                <ItemLists item={it} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Phylosophy;
