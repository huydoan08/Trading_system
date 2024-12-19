import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import ItemLists from "../../components/ItemLists";

// Những lưu ý quan trọng
export default function ImporttantNotes() {
  const data = [
    {
      info: "Chúng ta phải thừa nhận rằng thị trường này là một thị trường làm giá và chúng ta chỉ follow theo dựa vào những dấu hiệu.",
    },
    {
      info: "Những dấu hiệu thì luôn luôn chỉ mang tính xác suất, không chắc chắn một điều gì cả, đó là sự vô thường của thị trường.",
    },
    {
      info: "Việc quan trọng nhất là phải có kĩ năng xử lý và phản ứng kịp thời tại những thời điểm quan trọng, chứ không phải chỉ tập trung vào việc đi dự đoán giá.",
    },
    {
      info: "Khi mà người khác thua lỗ lớn, cháy tài khoản thì mình chỉ thiệt hại nhỏ thì đó là một thành công.",
    },
    {
      info: "Khi mà đám đông bên ngoài bị thanh lý lệnh và cháy tài khoản, sợ hãi mất niềm tin thì đó là lúc cơ hội thực sự đến với bạn.",
    },
    {
      info: "Khi mà đám đông đang rất lạc quan, rất chủ quan thì lúc đó mình nên biết sợ hãi mà rút lui.",
    },
    {
      info: "Đứng ngoài chờ đợi khi cơ hội chưa thực sự rõ ràng cũng đã là thành công.",
    },
    {
      info: "Hãy làm những thứ đơn giản trước và làm cho thật giỏi, tinh hoa của sự phức tạp chính là sự đơn giản.",
    },
    {
      info: "Trong đầu tư phải có khả năng đưa ra quyết định độc lập, phải tin tưởng, và sẵn sàng chịu trách nhiệm với các quyết định của chính bản thân mình."
    }
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
