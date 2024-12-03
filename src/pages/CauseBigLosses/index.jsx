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
  "Cái ngu số 7: Giao dịch future coin lowcap."
];

const CauseBigLosses = () => {
  return (
    <Box>
      <Box
        paddingLeft={8}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
      >
        <Title>I. NHỮNG SAI LẦM NGHIÊM TRỌNG DẪN ĐẾN VIỆC GIAO DỊCH BỊ THUA LỖ LỚN, CHÁY TÀI KHOẢN</Title>
        <Box>
          <List>
            {list.map((item, idx) => {
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

export default CauseBigLosses;
