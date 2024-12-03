import { Box, List, ListItem } from "@mui/material";
import ItemLists from "../../components/ItemLists";
import Title from "../../components/Title";

// Những sai lầm nghiêm trọng dẫn đến việc giao dịch bị thua lỗ lớn, cháy tài khoản.
const list = [
  "Cái ngu số 1: Giao dịch mà không có đặt Stoploss.",
  "Cái ngu số 2: Có đặt Stoploss nhưng sau đó kéo dài Stoploss ra xa.",
  "Cái ngu số 3: Vào lệnh giao dịch với khối lượng quá lớn.",
  "Cái ngu số 4: DCA làm cho khối lượng giao dịch lớn dần lên.",
  "Cái ngu số 5: Giao dịch ở khung thời gian nhỏ dẫn đến bị quét Stoploss nhiều lần.",
  "Cái ngu số 6: Giao dịch loạn xạ, không có phương pháp rõ ràng.",
  "Cái ngu số 7: Giao dịch future coin lowcap.",
];

// Cách khắc phục những sai lầm đó và tuân thủ quy tắc một cách tuyệt đối để có thể đi dài hạn với thị trường, có lợi nhuận một cách ổn định, bền vững.
const list2 = [
  "Luôn luôn tuân thủ Stoploss trong giao dịch.",
  "Đặt Stoploss hợp lý và tính toán kĩ rủi ro trước khi vào lệnh.",
  "Không DCA trong giao dịch.",
  "Giao dịch ở khung H4 trở lên.",
  "Khi đã vào lệnh xong thì hãy để cho thị trường làm việc, chỉ kiểm tra lệnh giao dịch duy nhất ONE TIME PER DAY at 8 a.m.",
  "Chỉ giao dịch một lệnh  duy nhất tại một thời điểm và trong suốt quá trình đó.",
];

const Section = ({ title, list }) => (
  <Box>
    <Title>{title}</Title>
    <List>
      {list.map((item, idx) => (
        <ListItem key={idx}>
          <ItemLists item={item} />
        </ListItem>
      ))}
    </List>
  </Box>
);
const CauseBigLosses = () => {
  return (
    <Box>
      <Box
        marginTop={8}
        paddingLeft={8}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
      >
        <Section
          title="I. NHỮNG SAI LẦM NGHIÊM TRỌNG DẪN ĐẾN VIỆC GIAO DỊCH BỊ THUA LỖ LỚN, CHÁY TÀI KHOẢN"
          list={list}
        />
        <Section title="II. CÁCH KHẮC PHỤC NHỮNG SAI LẦM ĐÓ" list={list2} />
      </Box>
    </Box>
  );
};

export default CauseBigLosses;
