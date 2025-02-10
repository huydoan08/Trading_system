import { Box, List, ListItem } from "@mui/material";
import Title from "../../components/Title";
import ItemLists from "../../components/ItemLists";

const list = [
  "Ra vào lệnh theo cảm tính, hứng lên là vào lệnh, rồi theo dõi chart liên tục.",
  "Giao dịch Buy/Sell loạn xạ, có systems nhưng không nhất quán và kỷ luật làm theo.",
  "Đi tìm ngay một cơ hội mới khi mà lệnh đó chạm điểm chốt lời hay cắt lỗ.",
  "Đóng lệnh trực tiếp bằng tay trong khi lệnh đó chưa chạm điểm chốt lời hay cắt lỗ.",
  "Giao dịch Altcoin khi mà chưa có sự xác nhận điều chỉnh tăng của BTC ở khung thời gian lớn.",
  "Không có chiến lược quản lý vốn, khối lượng giao dịch khi thì to quá, khi thì bé quá.",
  "Chú tâm nhiều vào số tiền tăng giảm trong tài khoản.",
];

const PassMistake = () => {
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
  );
};

export default PassMistake;
