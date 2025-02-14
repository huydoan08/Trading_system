import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const RSI = [
  "Nếu có RSI của vùng gần nhất trước đó vượt ra khỏi vùng 80 thì chứng tỏ lực mua đang áp đảo hoàn toàn lực bán, giá có thể tiếp tục tăng.",
  "Nếu có RSI của vùng gần nhất trước đó vượt xuống dưới vùng 20 thì chứng tỏ lực bán đang áp đảo hoàn toàn lực mua, giá có thể tiếp tục giảm.",
  "Nếu như giá thì tăng mà RSI chưa vượt ra khỏi vùng 80 và sau đó có dấu hiệu bó hẹp lại thì chứng tỏ lực mua đã có sự suy yếu.",
  "Nếu RSI chưa vượt ra khỏi vùng 20 và sau đó có dấu hiệu bó hẹp lại thì chứng tỏ lực bán đã bắt đầu suy yếu, khi mà có xác nhận RSI cắt lên trên 2 đường TB thì có khả năng lực mua đã tham gia vào rồi."
];
const timeFrames = [
  "Khung thời gian phản ánh nhóm người tham gia vào thị trường là những nhóm người nào.",
  "Việc quan sát đa khung thời gian giúp chúng ta có cái nhìn về bức tranh tổng thể của thị trường một cách rõ ràng nhất.",
  "Khung thời gian càng lớn thì sẽ cho độ chính xác về xu hướng của thị trường càng cao.",
  "Xu hướng ở khung thời gian nhỏ sẽ kéo theo xu hướng ở khung thời gian lớn hơn.",
  "Trade ngắn hạn thì nên tập trung vào khung H4, còn đầu tư thì nên kết hợp theo khung 1D và 1W.",
  "Nếu khung thời gian giao dịch mà sideway thì nên kiên nhẫn chờ đợi, không nên vào giao dịch."
];

const analysisLists = [
  "Hỗ trợ hay kháng cự là một vùng cản nơi mà tâm lý đám đông đang đặt niềm tin ở đó.",
  "Nếu một vùng hỗ trợ mà giá liên tục test đi test lại nhiều lần thì đó không còn là hỗ trợ cứng nữa.",
  "Nếu giá thủng qua 1 vùng hỗ trợ sau đó rút râu nến lên luôn và ko có phá qua được, thì khả năng cao là giá sẽ hồi lên và đợi test lại tiếp.",
  "Nếu giá thủng qua 1 vùng hỗ trợ và không hề rút râu, sau đó test lại mà vẫn bị thủng thì hỗ trợ đó sẽ trở thành 1 vùng kháng cự mới",
  "Thị trường hiện nay còn có cả margin future thế cho nên là nhóm MM sẽ vẽ ra các vùng kháng cự hỗ trợ CỨNG rồi sau đó dẫn dụ cho người chơi đặt Stoploss dưới vùng đó rất nhiều và nó quét qua.",
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
