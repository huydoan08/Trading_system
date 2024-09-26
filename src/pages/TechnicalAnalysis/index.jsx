import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Header from "../../components/Header";
import Title from "../../components/Title";

const timeFrames = [
  {
    label:
      "Khung thời gian phản ánh nhóm người tham gia vào thị trường là những nhóm người nào.",
  },
  {
    label:
      "Xu hướng ở khung thời gian nhỏ sẽ kéo theo xu hướng ở khung thời gian lớn hơn.",
  },
  {
    label:
      "Khi ở khung nhỏ sideway thì có thể giao dịch ở khung thời gian lớn hơn nếu có xu hướng rõ rệt.",
  },
];

const analysisLists = [
  "Hỗ trợ, kháng cự là vùng giá mà khi giá chạm vào ⇒ giá sẽ CÓ KHẢ NĂNG quay đầu.",
  "Hỗ trợ, kháng cự chỉ là một vùng tham khảo, có độ tin cậy cao khi đã test lại, và gần như chắc chắn khi đã hình thành cấu trúc sóng tại đó.",
  "Cần quan sát cẩn thận vùng hỗ trợ và kháng cự tại khung tuần và khi tới đó nên thoát ra trước rồi vào khung bé quan sát tiếp.",
  "Đo Fibo ở khung W thấy vẫn chưa phá qua fibo 0.5 khả năng 60% sẽ vẫn còn sóng hồi tại khung tuần, có thể bắt đáy khung tuần.",
  "80% hình thái sẽ là sideway ⇒ thời gian đứng ngoài chờ đợi sẽ là 80%.",
  "Tại vùng hỗ trợ kháng cự mà thấy có dấu hiệu phá qua thì cần đảo ngược vị thế chứ không cố gồng lệnh, không cố chấp.",
];

const TechnicalAnalysis = () => {
  return (
    <Box>
      <Box sx={{ padding: 4 }}>
        <Header>PHÂN TÍCH KĨ THUẬT </Header>
        <Title>I. PHÂN TÍCH VỀ ĐA KHUNG THỜI GIAN</Title>
        <List>
          {timeFrames.map((it, idx) => {
            return (
              <ListItem
                key={idx}
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    marginRight: "30px",
                    flexShrink: 0,
                    mt: "20px",
                  }}
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "30px",
                    fontWeight: "700",
                  }}
                  primary={it.label}
                />
              </ListItem>
            );
          })}
        </List>

        <div>
          <Typography
            variant="h5"
            gutterBottom
            fontSize={"30px"}
            fontWeight={700}
          >
            II. PHÂN TÍCH VỀ HỖ TRỢ, KHÁNG CỰ CHUYÊN SÂU
          </Typography>
          <List>
            {analysisLists.map((it, idx) => {
              return (
                <ListItem
                  key={idx}
                  sx={{ display: "flex", alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "black",
                      borderRadius: "50%",
                      marginRight: "30px",
                      flexShrink: 0,
                      mt: "20px",
                    }}
                  />
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                    primary={it}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Box>
    </Box>
  );
};

export default TechnicalAnalysis;
