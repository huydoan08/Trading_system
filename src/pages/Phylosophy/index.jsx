import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
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
      "Giống như cuộc sống, trading cũng bị chi phối bởi quy luật NHÂN- QUẢ, gieo sự tham lam => ắt sẽ gặt sự thua lỗ lớn, cháy tài khoản, lo lắng, bất an, gieo sự kỉ luật(quy tắc vào lệnh + quản lý vốn chặt) => Có được lợi nhuận đều đặn.",
  },
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
        <Header>TRADING NÓ GẮN LIỀN VỚI CUỘC SỐNG</Header>
        <Title>I.CÔNG VIỆC TRADING CÓ Ý NGHĨA GÌ </Title>
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
