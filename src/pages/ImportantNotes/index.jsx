import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import ItemLists from "../../components/ItemLists";

// Những lưu ý quan trọng
export default function ImporttantNotes() {
  const data = [
    "Chúng ta phải thừa nhận rằng thị trường này là một thị trường làm giá và chúng ta chỉ follow theo dựa vào những dấu hiệu.",
    "Những dấu hiệu thì luôn luôn chỉ mang tính xác suất, không chắc chắn một điều gì cả, đó là sự vô thường của thị trường.",
    "Việc quan trọng nhất là phải có kĩ năng xử lý (systems + trực giác) và phản ứng kịp thời tại những thời điểm quan trọng, chứ không phải chỉ tập trung vào việc đi dự đoán giá.",
    "Khi mà người khác thua lỗ lớn, cháy tài khoản thì mình chỉ thiệt hại nhỏ thì đó là một thành công.",
    "Phải đặt mục tiêu thận trọng nên hàng đầu, nếu không thôi chỉ 1 lần sai thì sẽ không có cơ hội để làm lại.",
    "Khi mà đám đông bên ngoài bị thanh lý lệnh và cháy tài khoản, sợ hãi mất niềm tin thì đó là lúc cơ hội thực sự đến với bạn.",
    "Khi mà đám đông đang rất lạc quan, rất chủ quan thì lúc đó mình nên biết sợ hãi mà rút lui.",
    "Đứng ngoài chờ đợi khi cơ hội chưa thực sự rõ ràng cũng đã là thành công.",
    "Hãy làm những thứ đơn giản trước và làm cho thật giỏi, tinh hoa của sự phức tạp chính là sự đơn giản.",
    "Trong đầu tư phải có khả năng đưa ra quyết định độc lập, phải tin tưởng vào bản thân, và sẵn sàng chịu trách nhiệm với các quyết định của chính bản thân mình.",
    "Trong giao dịch và đầu tư mà vẫn còn nhìn vào mấy cây nến tăng giảm, nhìn vào khung H1, nhìn vào số tiền trong tài khoản nhảy múa, nhìn vào những biến động ngắn hạn của thị trường và để cho cảm xúc chi phối vào thì cuộc đời sẽ còn mãi mãi khổ.",
    "Nếu mà muốn thắng thì đừng sợ thua, muốn ăn sóng dài thì phải chấp nhận bỏ qua sóng ngắn, cái gì nó cũng có cái giá của nó.",
    "Bản lĩnh thật sự của một trader thể hiện ở việc không để cho thị trường thao túng, chiến thắng được bản ngã của bản thân, tâm phải thật tĩnh lặng như mặt hồ, và có chiều sâu học tập.",
    "Điều mà một trader thành công cần phải làm được đó là duy trì lợi nhuận ổn định trong một thời gian dài.",
    "Nên tập trung kĩ năng vào đánh 1 chiều sóng tăng, chỉ short khi mà cơ hội thực sự rất rất ngon thì mới vào.",
    "Stoploss của người ta là điểm vào lệnh của mình, thì đó là cái key quan trọng để rèn luyện sự kiên nhẫn.",
    "Khi mà kiếm được tiền rồi thì phải khắc vào trong đầu của mình đó là phải giữ được tiền thật chắc đừng để tiền rơi."
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
        {data.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              <ItemLists item={item} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
