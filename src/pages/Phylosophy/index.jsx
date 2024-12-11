import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  {
    label:
      "Chánh kiến: Là việc biết cách nhìn nhận và hiểu đúng bản chất của sự vật và sự việc. Điều này giúp chúng ta nhìn thấu sự thật và thoát khỏi sự mê muội.",
  },
  {
    label:
      "Chánh tư duy: Là tư duy đúng đắn. Chánh tư duy giúp loại bỏ tham lam, sân hận, và si mê.",
  },
  {
    label:
      "Chánh ngữ: Là việc nói năng đúng mực, chân thật, lời nói đúng đắn giúp cải thiện các mối quan hệ xã hội và làm cho cuộc sống hài hòa hơn, từ đó tâm tuệ sẽ được an lạc.",
  },
  {
    label:
      "Chánh nghiệp: Là việc tránh đi các hành động tổn hại đến người khác. Chánh nghiệp giúp bảo vệ bản thân và duy trì cuộc sống an toàn, thanh tịnh.",
  },
  {
    label:
      "Chánh tinh tấn: Là sự cố gắng, kiên trì, nỗ lực không ngừng nghỉ, tu tập để đạt tới giác ngộ, đó là quá trình liên tục của việc 'lao động - tổng kết - sửa sai'.",
  },
  {
    label:
      "Chánh niệm: Là luôn luôn tỉnh thức, có ý thức trong mọi hành động, cảm giác và suy nghĩ. Chánh niệm giúp con người sống trọn vẹn với thực tại, thoát khỏi sự vọng tưởng và mê lầm.",
  },
  {
    label:
      "Chánh định: Là việc tập trung tinh thần vào một thứ tại một thời điểm để đạt tới sự bình an nội tâm và phát triển trí tuệ sâu xa, lúc đó Tâm và Tuệ định lại ở mức tối cao, không còn vô minh, không có lo lắng.",
  },
  {
    label:
      "Trading đòi hỏi sự kiên nhẫn trong việc chờ đợi cơ hội tốt và kỷ luật trong việc tuân thủ hệ thống, các nguyên tắc giao dịch đã đề ra.",
  },
  {
    label:
      "Quá khứ là thứ đã qua, không thay đổi được, tương lai là thứ sẽ đến, không lường trước được, hãy tập trung vào khoảnh khắc hiện tại.",
  },
  {
    label:
      "Việc một lệnh giao dịch có thành công hay là thất bại chúng ta cũng không thể biết được, cũng không thể biết được liệu một tuần, một tháng sau chúng ta có lợi nhuận hay không, bởi ta không biết được thị trường sẽ chạy như thế nào, nên không đặt kì vọng vào chúng, bởi nếu kết quả không như mong đợi, ta thường buồn bực, khó chịu, tức tối, dẫn tới những hệ quả khó lường(tương lai).",
  },
  {
    label:
      "Biết đủ thường sẽ an vui, khi mà hệ thống đã đo lường rồi thì cứ làm theo hệ thống một cách nhất quán, thành quả ắt sẽ tới.",
  },
  {
    label:
      "Giống như cuộc sống, Trading cũng bị chi phối bởi quy luật NHÂN- QUẢ. Gieo sự tham lam thì ắt sẽ gặt sự thua lỗ lớn, cháy tài khoản, lo lắng, bất an. Gieo sự kỉ luật (quy tắc vào lệnh + quản lý vốn chặt) => Có được lợi nhuận đều đặn. Gieo sự kiên trì, chăm chỉ => Gặt sự thành thạo PP.",
  },
  {
    label:
      "Con đường trading và đầu tư là một hành trình dài học tập cả đời và luôn đầy rẫy những khó khăn mất mát đang đón chờ phía trước, nhưng cái gì cũng có cái giá phải trả cả thôi, muốn cuộc sống an nhàn không áp lực thì chỉ có đi làm thuê cho người khác cả đời, nhưng muốn cuộc sống tự do thì phải khởi nghiệp và đầu tư.",
  },
  {
    label: "Trong đầu tư thì tốt nhất là hãy cứ yên lặng mà làm."
  }
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
        <Title>I. CHÁNH ĐẠO TRONG TRADING </Title>
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

export default Phylosophy;
