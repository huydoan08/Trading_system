import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import ItemLists from "../../components/ItemLists";

const analysisLists = [
  "Cái ngu số 1: Không đặt Stop Loss.",
  "Cái ngu số 2: Có đặt Stop Loss nhưng sau đó kéo dài Stop loss ra dẫn đến việc cháy tài khoản.",
  "Cái ngu số 3: Vào Vol quá lớn, chưa chạm điểm stoploss thì đã cháy sạch tài khoản.",
  "Cái ngu số 4: Kết hợp 2 cái 'ngu' số 1 và số 2. Khi âm tài khoản lại không có Stop loss, dời Stop loss ra xa rồi còn nhồi lệnh âm và làm cho tài khoản cháy nhanh hơn.",
  "Cái ngu số 5: Giao dịch loạn xạ , không có phương pháp rõ ràng, thua nhiều dẫn đến cháy tài khoản",
  "Cái ngủ số 6: Giao dịch future Altcoin, Altcoin biến động rất mạnh nên rất khó để giao dịch future."
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
        <Header>NHỮNG NGUYÊN NHÂN DẪN ĐẾN VIỆC CHÁY TÀI KHOẢN TRONG TRADING</Header>
        <Box>
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

export default CauseBigLosses;
