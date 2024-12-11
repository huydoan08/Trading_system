import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  {
    label:
      "Không kỷ luật tuyệt đối, chưa nghiêm túc đến tận cùng trong việc tuân thủ hệ thống giao dịch => Hệ thống giao dịch là hệ thống những nguyên tắc mà một nhà giao dịch cần phải 'kỷ luật tuân thủ' để mà có thể có được kết quả tốt.",
  },
  {
    label:
      "Thiếu sự kiên nhẫn trong việc chờ đợi cơ hội đẹp thực sự xuất hiện => Cần kiên nhẫn chờ đợi cơ hội đẹp thực sự xuất hiện để có xác suất chiến thắng cao, một lệnh giao dịch cần phải đáp ứng đủ các hầu hết các tiêu chí.",
  },
  {
    label: "Giao dịch buy sell, long shot loạn xạ không theo một chiến lược cụ thể => Cần có cho mình một chiến lược cụ thể trong từng giai đoạn của thị trường và follow theo nó một cách nhất quán."
  },
  {
    label:
      "Đóng lệnh trực tiếp bằng tay trong khi lệnh đó đang được chạy => Đó là một hành động rất vô minh, để cho cảm xúc dẫn dắt và chi phối, có thể là lần đó may mắn đúng, nhưng về dài hạn thì hành động đó sẽ không mang lại kết quả tốt được.",
  },
  {
    label:
      "Theo dõi biến động của giá cả thường xuyên => Khi đã setup lệnh xong xuôi thì việc cần làm rất đơn giản là kiên nhẫn chờ đợi để thị trường làm việc và quan sát các dấu hiệu để quản lý lệnh thật tốt.",
  },
  {
    label:
      "Theo dõi quá nhiều đồng coin khác nhau => Khi mà không có sự kiên định và sự kỉ luật tuyệt đối thì sẽ bị rơi vào cạm bẫy của thị trường và sẽ rơi vào vòng luân hồi không thể nào thoát ra được.",
  },
  {
    label:
      "Tất tay vào một lệnh giao dịch => Để có thể kiếm được tiền một cách ổn định, bền vững trong dài hạn thì cần phải biết cách phân bổ vốn sao cho phù hợp.",
  },
  {
    label:
      "Để cho cảm xúc tiêu cực (tiếc nuối, tuyệt vọng, sợ hãi) chi phối khi mà lệnh giao dịch chạm điểm cắt lỗ=> Stoploss là điều không thể tránh khỏi được trong giao dịch, điều mà một trader giỏi cần phải làm được đó làm quản lý vốn hợp lý và quản trị rủi ro cho thật tốt, luôn sẵn sàng cho mọi kịch bản của thị trường.",
  },
  {
    label: "Nghe theo lời của các KOL trên mạng và giao dịch một cách mù quáng => Việc của mình đơn giản đó là làm theo hệ thống, như vậy là đủ."
  },
  {
    label:
      "Trao đổi và tranh luận với những người mà họ đang không có cùng quan điểm về chiến lược trong giao dịch và đầu tư => Rất khó để có thể nói cho một ai đó họ hiểu khi mà không có chung một góc nhìn hoặc là họ chưa có đủ trải nghiệm, tốt nhất là nên tập trung vào việc phát triển chính bản thân mình và trao giá trị cho ai đó họ thật sự cần nó.",
  },
  {
    label:
      "Vi phạm các quy tắc trong hệ thống trong khi những quy tắc đã phải trả giá rất nhiều để có thể đúc kết được => Trading là cuộc chiến về sự kiên nhẫn, sự kỉ luật và chỉ những người thực sự xứng đáng mới có thể là chiến thắng, nếu như mà không làm được những điều này thì tốt nhất là nên rời khỏi cuộc chơi càng sớm càng tốt.",
  },
  {
    label:
      "Tập trung quá nhiều vào tiền, quá quan trọng những con số lãi lỗ đang được biến động liên tục trong tài khoản => Trading không chỉ là bộ môn về tài chính, mà nó còn là nơi tuyệt vời để rèn luyện phát triển bản thân, cũng như về tính cách, thái độ, tư duy, sự kỉ luật.",
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
