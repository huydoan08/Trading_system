import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import ItemLists from "../../components/ItemLists";

export default function ImporttantNotes() {
  const data = [
    {
      info: "Mọi thông tin ở đây chỉ mang tính tham khảo, không chắc chắn một điều gì cả vì kịch bản luôn thay đổi để phù hợp với thị trường.",
    },
    {
      info: "Chúng ta phải thừa nhận rằng thị trường này là một thị trường làm giá, và chúng ta chỉ follow theo dựa vào những dấu hiệu.",
    },
    {
      info: "Những dấu hiệu thì luôn có tính xác suất, không chắc chắn một điều gì cả.",
    },
    {
      info: "Việc quan trọng nhất là KĨ NĂNG XỬ LÝ chứ không phải là dự đoán giá",
    },
    {
      info: "Bạn phải xây dựng cho mình một HỆ THỐNG GIAO DỊCH và BẠN LÀM THEO HỆ THỐNG ĐÓ",
    },
    {
      info: "Cần một thời gian dài mới có thể hiểu được, mới có thể thành thạo được một cái NGHỀ",
    },
    {
      info: "Kiên nhẫn và thành thục phương pháp, bạn sẽ nhận được phần thưởng xứng đáng",
    },
    {
      info: "Đứng ngoài chờ đợi khi cơ hội chưa thực sự rõ ràng cũng đã là thành công.",
    },
    {
      info: "Kĩ năng cần thời gian mới có thể thật sự thành thạo, cơ hội có rất nhiều và khi kĩ năng đã tốt thì cơ hội đến là tiền sẽ về.",
    },
  ];
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="start"
      flexDirection="column"
      margin="0 auto"
      minHeight="100vh"
      textAlign="center"
      padding={8}
    >
      <Header> LƯU Ý QUAN TRỌNG</Header>
      <List>
        {data.map((it, idx) => {
          return (
            <ListItem
              key={idx}
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              <ItemLists item={it?.info} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
