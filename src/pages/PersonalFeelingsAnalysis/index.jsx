import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  {
    label:
      "Thiếu sự kiên nhẫn trong việc chờ đợi cơ hội đẹp thực sự xuất hiện => Cần kiên nhẫn chờ đợi cơ hội đẹp thực sự xuất hiện để có xác suất chiến thắng cao, một lệnh giao dịch cần phải đáp ứng đủ các hầu hết các tiêu chí.",
  },
  {
    label: "Không tuân thủ làm theo hệ thống một cách tuyệt đối => Hệ thống giao dịch là hệ thống những nguyên tắc mà một nhà giao dịch cần phải 'kỷ luật tuân thủ' để mà có thể có được kết quả tốt."
  },
  {
    label:
      "Theo dõi biến động của thị trường quá nhiều, theo dõi quá nhiều đồng coin => Khi đã vào lệnh xong thì việc cần làm là kiên nhẫn chờ đợi để thị trường làm việc.",
  },
  {
    label:
      "All-in tất tay vào 1 lệnh giao dịch => Để có thể kiếm được tiền một cách ổn định, bền vững trong dài hạn thì cần phải biết cách phân bổ vốn sao cho phù hợp.",
  },
  {
    label:
      "Cảm giác tiếc nuối, chản nản, mất bình tĩnh, cay cú khi mà lệnh giao dịch bị chạm stoploss => Những gì đã mất thì không thể lấy lại được, Stoploss là một phần của cuộc chơi, là một điều không thể tránh khỏi trong giao dịch, điều quan trọng hơn là sau mỗi lần giao dịch thành công hay thất bại thì có rút ra được cho mình điều gì đó hay không.",
  },
  {
    label:
      "Trao đổi, tranh luận với những người mà không có cùng tư duy giao dịch và đầu tư => Rất khó để có thể nói cho một ai đó họ hiểu, khi mà không có cùng mindset trong giao dịch và đầu tư, chưa có đủ trải nghiệm, tốt hơn hết là hãy tập trung vào bản thân và chỉ đi chia sẻ cho ai đó họ thực sự cần nó.",
  },
 
  {
    label: "Đóng lệnh bằng tay khi mà lệnh đang chạy => Đây là hành động hoàn toàn dựa vào cảm xúc, không nên làm như vậy vì giao dịch theo cảm xúc thì chắc chắn là sẽ không mang lại kết quả tốt."
  }
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
          {list.map((it, idx) => {
            return (
              <ListItem key={idx}>
                <ItemLists item={it.label} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default PersonalFeelingsAnalysis;
