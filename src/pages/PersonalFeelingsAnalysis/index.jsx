import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const timeFrames = [
  {
    label:
      "Thiếu sự kiên nhẫn, nóng vội muốn tham gia sớm vì sợ mất đi vị thế đẹp => Bài học rút ra là chỉ làm theo systems, khi cơ hội đẹp thực sự xuất hiện thì khi ấy mới quyết đoán xuống tiền.",
  },
  {
    label:
      "Khi đã vào lệnh xong xuôi rồi, thị trường bắt đầu đi ngược lại dự phóng thì sinh ra tâm lý nghi ngờ và sợ hãi => Bài học rút ra là khi đã vào 1 lệnh giao dịch thì hãy xác định là mất tiền cho Stoploss đó, thị trường có đi ngược lại thì cũng vẫn happy.",
  },
  {
    label:
      "Khi đã vào lệnh xong xuôi rồi, thị trường bắt đầu đi ngược lại dự phóng thì nhồi thêm lệnh, cố chấp cho rằng mình đúng, rồi là đóng lệnh bằng tay khi thị trường đi ngược lại dự phóng=> Bài học rút ra là khi đã vào 1 lệnh giao dịch thì hãy xác định là mất tiền cho Stoploss đó tuyệt đối không đóng lệnh bằng tay, và không DCA âm.",
  },
  {
    label:
      "Khi đã vào lệnh xong xuôi rồi, thị trường đi đúng dự phóng kiếm được chút lợi nhuận thì muốn chốt lời ngay vì sợ là thị trường đi ngược lại dự phóng thì mình sẽ mất khoản lời đó => Bài học rút ra là khi đã vào lệnh xong thì hãy cứ để cho thị trường nó làm việc, chấp nhận mất khoản lời nhỏ để có được khoản lời lớn hơn, chỉ đóng lệnh khi và chỉ khi chạm Stoploss.",
  },
  {
    label:
      "Khi thị trường đi đúng dự phóng thì chủ quan và cho rằng là mình đúng, sau đó nhồi thêm lệnh, sau đó thị trường quay ngược lại và sinh ra tâm lý sợ hãi => Bải học rút ra là khi đã vào lệnh rồi thì không làm gì nữa cả, kiên nhẫn chờ đợi để cho thị trường làm việc.",
  },
  {
    label:
      "Giao dịch Future Altcoin dẫn đến thua lỗ rất nhiều trong thời gian ngắn => Bài học rút ra là tuyệt đối không giao dịch Future Altcoin vì nó là cái game khó, vô cùng rủi ro, không nên tham gia vì rất khó để kiếm được tiền từ game này, trong quá khứ tôi đã mất khá nhiều tiền từ chơi game này.",
  },
  {
    label:
      "Có suy nghĩ All IN và tất tay vào 1 lệnh giao dịch => Bài học rút ra là không nên làm như vậy, vì có thể lần này mình đúng và kiếm được rất nhiều tiền, nhưng chắc chắn trong tương lai mình sẽ còn tiếp tục làm như vậy và sẽ đến một thời điểm mình sai và sẽ phải trả cái giá cực kì đắt và không còn cơ hội để làm lại, cuộc sống sẽ vô cùng khó khăn, bản thân tôi đã trải qua nên tôi rất hiểu.",
  },
  {
    label:
      "Mua và nắm giữ Altcoin => Bài học rút ra là Altcoin là 1 thứ rất khó để có thể kiếm được tiền, cần thời gian để thực sự hiểu về nó và sẽ phân bổ một số vốn nhỏ vào nó thôi, và hãy xác định luôn là phân bổ vào Altcoin là có thể mất luôn.",
  },
  {
    label:
      "Cố chấp cho là mình đã giỏi và quyết định của mình là đúng => Thật sự là để có thể đi được đường dài với thị trường thì hãy luôn tư duy mình đang đứng ở đáy, luôn luôn học tập, trải nghiệm, sửa sai, không mắc phải sai lầm đó nữa, và cũng không cần phải đi giải thích cho bất kì ai, hay tranh luận với bất kì ai, vì để có thể hiểu được thì cần phải trải qua, rút ra bài học và sửa sai, khi ấy mới có thể ngộ ra được.",
  },
  {
    label:
      "Tâm lý muốn kiếm tiền nhanh, làm giàu nhanh => Bài học rút ra là khi mà vào thị trường này mà chỉ tập trung vào tiền thì sẽ mất rất nhiều tiền, thay vào đó hãy bắt đầu từ số tiền nhỏ, đi chậm mà chắc, làm sao để có thể trở thành một nhà giao dịch giỏi, khi ấy tiền sẽ tự về.",
  },
  {
    label:
      "Khi mà kinh tế chưa ổn và chưa có nhiều trải nghiệm mà muốn kiếm tiền nhanh và luôn => Bài học rút ra là khi mà kinh tế chưa ổn thì hãy làm sao cho kinh tế thực sự ổn trước cái đã thì khi ấy giao dịch mới thực sự thoải mái, ít bị cảm xúc xen vào, rồi là cần phải có trải nghiệm thì mới thực sự có cái nhìn đúng về bản chất của thị trường này, giao dịch hay đầu tư làm sao mà phải cảm thấy thực sự thoải mái và bình an thì khi ấy mới có cuộc sống tốt và kết quả tốt được.",
  },
  {
    label:
      "Đi chia sẻ những gì mình đang làm với người khác => Bài học rút ra là không nên làm như vậy những gì mình đang làm tốt nhất là hãy để một mình mình biết thì khi ấy mình sẽ cảm thấy an toàn.",
  },
  {
    label:
      "Dành thời gian quá nhiều vào việc theo dõi thị trường => Bài học rút ra là không nên dành thời gian quá nhiều mà hãy chỉ dảnh thời gian cho nó khoảng 1 đến 2 lần một ngày mỗi lần chỉ 5 - 10 phút và sau đó là dành thời gian cho những công việc khác, vì như vậy cuộc sống và công việc sẽ không bị giao dịch làm ảnh hưởng.",
  },
  {
    label:
      "Tâm lý tiếc nuối số tiền đã mất và cay cú muốn lấy lại => Bài học rút ra là những gì đã mất thì không thể lấy lại được, đó là những gì phải đánh đổi để có thể có được trải nghiệm và rút ra được bài học, những bài học này phải giá trị hơn những gì đã mất vì nó sẽ giúp cho mình có thể lấy lại gấp nhiều nhiều lần chỗ đó trong tương lai.",
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
        <Title>I. PHÂN TÍCH CẢM XÚC VÀ TÂM LÝ TRONG GIAO DỊCH</Title>
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
