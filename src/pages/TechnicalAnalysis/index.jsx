import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const RSI = [
  "RSI bó hẹp lại ( RSI tạo đáy sau bằng hoặc cao hơn đáy trước) và cắt lên trên đường TBN thì xác suất cao sẽ đảo chiều từ giảm sang tăng.",
  "Nếu RSI chưa vượt quá vùng 30 thì đợi cho RSI cắt lên đường TBN là đã có thể vào lệnh",
  "Nếu RSI vượt quá vùng 30 thì đợi cho RSI cắt lên đường TBC mới có thể vào lệnh được",
  "Nếu RSI trước đó vượt ra khỏi vùng 80 thì có khả năng cao giá sẽ hồi nhẹ và tiếp tục tăng.",
  "Nếu RSI vượt quá vùng 20 thì cần kiên nhẫn chờ đợi retest và tạo đáy RSI sau cao hơn đáy cũ.",
];
const timeFrames = [
  "Khung thời gian phản ánh nhóm người tham gia vào thị trường là những nhóm người nào.",
  "Xu hướng ở khung thời gian nhỏ sẽ kéo theo xu hướng ở khung thời gian lớn hơn.",
  "Khi ở khung nhỏ sideway thì có thể giao dịch ở khung thời gian lớn hơn nếu có xu hướng rõ rệt.",
];

const analysisLists = [
  "Hỗ trợ hay kháng cự là một vùng cản nơi mà tâm lý đám đông đang đặt niềm tin ở đó => Tức là rất nhiều lệnh chờ đang được setup ở đó.",
  "Tại vùng hỗ trợ kháng cự mà thấy có dấu hiệu phá qua, sau đó retest lại nhưng vẫn vượt ra khỏi vùng đó thì chứng tỏ đó không còn là một vùng cản nữa.",
  "Thị trường hiện nay còn có cả margin future thế cho nên là nhóm MM sẽ vẽ ra các vùng kháng cự hỗ trợ CỨNG rồi sau đó dẫn dụ cho người chơi đặt Stoploss dưới vùng đó rất nhiều và nó quét qua."
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
