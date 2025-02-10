import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  "Quá khứ là thứ đã xảy ra - chúng ta không thể nào thay đổi được, tương lai là điều mà ta hướng đến - nhưng khó có thể lường trước được, luôn luôn tập trung vào khoảnh khắc hiện tại.",
  "Giảm bớt sự kì vọng và biết đủ thì mọi thứ sẽ rất nhẹ nhàng, hạnh phúc là hệ quả tất yếu.",
  "Trong cuộc sống và trong trading đều chịu sự chi phối của quy luật nhân quả.",
  "Tương lai phía trước và sự nghiệp trading luôn luôn có đầy rẫy những khó khăn, những mất mát, những cám dỗ đang chờ đón phía trước, bản thân phải luôn có sự chuẩn bị tốt nhất để đối mặt với chúng.",
  "Ai trong cuộc đời cũng sẽ phải mắc những sai lầm, nhưng đừng để lặp lại những sai lầm ngớ ngẩn đó thêm một lần nào nữa.",
  "Hãy học cách xem nhẹ được và mất, sống một cuộc sống đơn giản nhưng chất lượng.",
  "Quan sát mọi thứ xunh quanh, quan sát người khác xem có rút ra được bài học gì không."
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
