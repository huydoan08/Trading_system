import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
  {
    label:
      "Thiếu sự kiên nhẫn, nóng vội muốn tham gia sớm => Cần kiên nhẫn chờ đợi cơ hội đẹp thực sự xuất hiện để có xác suất chiến thắng cao.",
  },
  {
    label:
      "Nguyên nhân chính khiến cho tâm lý bị ảnh hưởng và đưa ra quyết định dựa vào cảm xúc là do theo biến động của thị trường quá nhiều => Cần hạn chế theo dõi lệnh giao dịch kiên nhẫn chờ đợi thị trường làm việc.",
  },
  {
    label:
      "Suy nghĩ thị trường tài chính là nơi dễ kiếm tiền, tư duy muốn làm giàu nhanh, tư duy tất tay vào 1 lệnh giao dịch => Để có thể kiếm được tiền một cách ổn định, lâu dài, bền vững thì cần phải tập trung vào việc phát triển bản thân, nâng cao kĩ năng giao dịch.",
  },
  {
    label:
      "Trao đổi, tranh luận với người nào đó không cùng bộ ngôn ngữ tư duy => Rất khó để có thể nói cho một ai đó hiểu khi mà họ không có cùng mindset, chưa có trải nghiệm, tốt hơn hết là hãy tập trung vào bản thân và chỉ đi chia sẻ cho ai đó họ thực sự cần nó.",
  },
  {
    label:
      "Cảm xúc tiếc nuối, buồn chán, khó chịu, cay cú khi bị chạm Stoploss => Những gì đã mất thì không thể lấy lại được, Stoploss là một điều không thể tránh khỏi trong giao dịch,điều quan trọng hơn là sau mỗi lần giao dịch thành công hay thất bại thì có rút ra được cho mình điều gì đó hay không.",
  },
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
        <Header>
          PHÂN TÍCH TÂM LÝ VÀ HÀNH VI SAI DẪN ĐẾN KẾT QUẢ KHÔNG ĐƯỢC TỐT
        </Header>
        <Title>I. PHÂN TÍCH NGUYÊN NHÂN VÀ GIẢI PHÁP</Title>
        <List>
          {timeFrames.map((it, idx) => {
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
