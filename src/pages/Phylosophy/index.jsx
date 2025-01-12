import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  "Chỉ tập trung vào chính bản thân mình, không làm theo bất kì ai cả, và cũng không có nghĩa vụ phải đi giúp đỡ bất kì ai cả.",
  "Trading đòi hỏi sự kiên nhẫn trong việc chờ đợi cơ hội tốt và kỷ luật trong việc tuân thủ hệ thống, các nguyên tắc giao dịch đã đề ra.",
  "Quá khứ là thứ đã qua, không thay đổi được, tương lai là thứ sẽ đến, không lường trước được, hãy tập trung vào khoảnh khắc hiện tại.",
  "Giảm bớt sự kì vọng và biết đủ thì mọi thứ sẽ rất nhẹ nhàng, hạnh phúc là hệ quả tất yếu.",
  "Trong cuộc sống và trong trading đều chịu sự chi phối của quy luật nhân quả.",
  "Tương lai phía trước và sự nghiệp trading luôn luôn có đầy rẫy những khó khăn, những mất mát, những cám dỗ đang chờ đón phía trước, bản thân phải luôn có sự chuẩn bị tốt nhất để đối mặt với chúng.",
  "Ai trong cuộc đời cũng sẽ phải mắc những sai lầm, nhưng đừng để lặp lại những sai lầm đó."
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
