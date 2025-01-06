import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";


const RSI = [
  "Khi xuất hiện các dấu hiệu lực mua giảm, lực bán tăng (dấu hiệu của sự phân kì). Giá có khả năng đảo chiều từ tăng thành giảm",
  "Khi xuất hiện các dấu hiệu lực bán giảm, lực mua tăng (dấu hiệu của sự hội tụ). Giá có khả năng đảo chiều từ giảm thành tăng",
  "Khi RSI vượt ra vùng 80 => lực mua mạnh. Có khả năng giá sẽ tiếp tục tăng",
  "Khi RSI xuống dưới vùng 20 => lực bán mạnh. Có khả năng giá sẽ tiếp tục rơi"
];
const timeFrames = [
  "Khung thời gian phản ánh nhóm người tham gia vào thị trường là những nhóm người nào.",
  "Xu hướng ở khung thời gian nhỏ sẽ kéo theo xu hướng ở khung thời gian lớn hơn.",
  "Khi ở khung nhỏ sideway thì có thể giao dịch ở khung thời gian lớn hơn nếu có xu hướng rõ rệt.",
];

const analysisLists = [
  "Hỗ trợ, kháng cự là vùng giá mà khi giá chạm vào ⇒ giá sẽ CÓ KHẢ NĂNG quay đầu.",
  "Hỗ trợ, kháng cự chỉ là một vùng tham khảo, có độ tin cậy cao khi đã test lại, và gần như chắc chắn khi đã hình thành cấu trúc sóng tại đó.",
  "Cần quan sát cẩn thận vùng hỗ trợ và kháng cự tại khung tuần và khi tới đó nên thoát ra trước rồi vào khung bé quan sát tiếp.",
  "80% hình thái sẽ là sideway ⇒ thời gian đứng ngoài chờ đợi sẽ là 80%.",
  "Tại vùng hỗ trợ kháng cự mà thấy có dấu hiệu phá qua thì cần đảo ngược vị thế chứ không cố gồng lệnh, không cố chấp.",
];


const TechnicalAnalysis = () => {
  return (
    <Box>
      <Box
        paddingLeft={8}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
      >
        <Header>PHÂN TÍCH KĨ THUẬT </Header>
        <Box>
          <Title>I. BỘ CÔNG CỤ CHỈ BÁO RSI</Title>
          <List>
            {RSI.map((it, idx) => {
              return (
                <ListItem key={idx}>
                  <ItemLists item={it} />
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box>
          <Title>II. PHÂN TÍCH VỀ ĐA KHUNG THỜI GIAN</Title>
          <List>
            {timeFrames.map((it, idx) => {
              return (
                <ListItem key={idx}>
                  <ItemLists item={it} />
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box>
          <Title> III. PHÂN TÍCH VỀ HỖ TRỢ, KHÁNG CỰ</Title>
          <List>
            {analysisLists.map((item, idx) => {
              return (
                <ListItem key={idx}>
                  <ItemLists item={item} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default TechnicalAnalysis;
