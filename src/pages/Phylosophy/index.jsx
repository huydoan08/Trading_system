import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
  {
    label:
      "Chánh kiến (Hiểu biết đúng đắn): Là việc nhìn nhận và hiểu đúng bản chất của thế giới và con người, hiểu rõ về Tứ Diệu Đế (khổ, nguyên nhân của khổ, sự diệt khổ và con đường diệt khổ). Điều này giúp chúng ta nhìn thấy sự thật và thoát khỏi sự mê muội.",
  },
  {
    label:
      "Chánh tư duy (Suy nghĩ đúng đắn): Là tư duy có lợi ích và không gây tổn hại đến người khác, thể hiện sự từ bi và không ích kỷ. Chánh tư duy giúp loại bỏ tham lam, sân hận, và si mê.",
  },
  {
    label:
      "Chánh ngữ (Lời nói đúng đắn): Là việc nói năng chân thật, không nói dối, không nói lời thô tục, không đâm thọc hoặc nói xấu người khác. Lời nói đúng đắn giúp cải thiện các mối quan hệ xã hội và làm cho cuộc sống hài hòa hơn.",
  },
  {
    label:
      "Chánh nghiệp (Hành động đúng đắn): Là việc tránh các hành động tổn hại đến người khác như sát sinh, trộm cắp, tà dâm. Chánh nghiệp giúp bảo vệ đạo đức cá nhân và duy trì cuộc sống thanh tịnh.",
  },
  {
    label:
      "Chánh mạng (Nghề nghiệp đúng đắn): Là việc kiếm sống bằng các nghề nghiệp lương thiện, không gây hại cho người khác và sinh linh. Chánh mạng giúp duy trì sự trong sạch và không gây nghiệp xấu.",
  },
  {
    label:
      "Chánh tinh tấn (Nỗ lực đúng đắn): Là sự cố gắng kiên trì để tránh xa điều xấu và phát triển điều tốt, như khích lệ những suy nghĩ và hành vi tích cực, nỗ lực tu tập để đạt tới giác ngộ, lao động - tổng kết - sửa sai...",
  },
  {
    label:
      "Chánh niệm (Ghi nhớ đúng đắn): Là luôn tỉnh thức, ý thức trong mọi hành động, cảm giác và suy nghĩ. Chánh niệm giúp con người sống trọn vẹn với thực tại, thoát khỏi sự vọng tưởng và mê lầm.",
  },
  {
    label:
      "Chánh định (Tập trung đúng đắn): Là việc tập trung tinh thần vào một thứ tại một thời điểm để đạt tới sự bình an nội tâm và phát triển trí tuệ sâu xa, lúc đó Tâm và Tuệ định lại ở mức tối cao, không còn vô minh, không có lo lắng...",
  },
  {
    label:
      "Trading đòi hỏi sự kiên nhẫn trong việc chờ đợi cơ hội tốt và kỷ luật trong việc tuân thủ chiến lược giao dịch đã đề ra. Tương tự, trong cuộc sống, sự kiên nhẫn và kỷ luật là cần thiết để đạt được các mục tiêu dài hạn, dù là trong công việc, học tập, hay phát triển bản thân.",
  },
  {
    label:
      "Quá khứ là thứ đã qua, không thay đổi được, tương lai là thứ sẽ đến, không lường trước được, hãy tập trung vào khoảnh khắc hiện tại.",
  },
  {
    label:
      "Chỉ có duy nhất 1 thứ chúng ta tập trung và kiểm soát được, đó là việc vào lệnh theo đúng bộ quy tắc đã được kiểm chứng, quản lý vốn thật chặt, đặt niềm tin vào công thức có lợi nhuận(đã kiểm chứng) đó.",
  },
  {
    label:
      "Việc 1 lệnh Win hay không chúng ta cũng không thể biết được, cũng không thể biết được liệu 1 tuần, 1 tháng sau chúng ta có lợi nhuận hay không, bởi ta không biết được thị trường sẽ chạy như thế nào, nên không đặt kì vọng vào chúng, bởi nếu kết quả không như mong đợi, ta thường buồn bực, khó chịu, tức tối, dẫn tới những hệ quả khó lường(tương lai).",
  },
  {
    label:
      "Biết đủ thường sẽ an vui, khi mà hệ thống đã đo lường rồi thì cứ làm theo hệ thống một cách nhất quán, thành quả ắt sẽ tới.",
  },
  {
    label:
      "Giống như cuộc sống, trading cũng bị chi phối bởi quy luật NHÂN- QUẢ. Gieo sự tham lam => ắt sẽ gặt sự thua lỗ lớn, cháy tài khoản, lo lắng, bất an. Gieo sự kỉ luật(quy tắc vào lệnh + quản lý vốn chặt) => Có được lợi nhuận đều đặn. Gieo sự kiên trì, chăm chỉ => Gặt sự thành thạo PP.",
  },
];

const Phylosophy = () => {
  return (
    <Box>
      <Header>BÁT CHÁNH ĐẠO TRONG TRADING</Header>
      <Box
        padding={8}
        display="flex"
        alignItems="start"
        justifyContent="start"
        flexDirection="column"
        minHeight="100vh"
      >
        <Title>I. ÁP DỤNG BÁT CHÁNH ĐẠO TRONG TRADING </Title>
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

export default Phylosophy;
