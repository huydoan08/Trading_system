import {
  Box,
  Typography,
  Divider,
  Checkbox,
  FormControlLabel,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const timeFrames = [
  {
    label:
      "Khung giao dịch lý tưởng sẽ là ở khung  H4 và phải đồng thuận với khung thời gian lớn hơn 1D và vào khung H1 để tìm điểm vào lệnh đẹp và quản lý lệnh dời lệnh theo fibo 0.5 M30",
  },
  {
    label:
      "Khung thời gian giao dịch nhỏ rất nhiễu loạn không có xu hướng rõ ràng, nếu khung thời càng lớn thì xu hướng càng rõ ràng nhưng lại có độ trễ hơn so với khung bé",
  },
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

const items = [
  "Hỗ trợ, kháng cự là vùng giá mà khi giá chạm vào ⇒ nó CÓ KHẢ NĂNG quay đầu",
  "Hỗ trợ, kháng cự chỉ là một vùng tham khảo, có độ tin cậy cao khi đã test lại, và gần như chắc chắn khi đã hình thành cấu trúc sóng tại đó.",
  "RSI khung W mà chạm vùng 30 là cơ hội gom hàng cực kì đẹp.",
  "Cần quan sát cẩn thận vùng hỗ trợ và kháng cự tại khung tuần và khi tới đó nên thoát ra trước rồi vào khung bé quan sát tiếp.",
  "Do Fibo ở khung W thấy vẫn chưa phá qua fibo 0.5 khả năng 60% sẽ vẫn còn sóng hồi tại khung tuần, có thể bắt đáy khung tuần.",
  "Sideway ở đỉnh càng lâu càng dễ rơi, sideway ở đáy càng lâu càng dễ tăng.",
  "80% hình thái sẽ là sideway ⇒ thời gian đứng ngoài chờ đợi sẽ là 80%.",
  "Tại vùng hỗ trợ kháng cự mà thấy có dấu hiệu phá qua thì cần đảo ngược vị thế chứ không cố gồng lệnh, không cố chấp.",
];

const TechnicalAnalysis = () => {
  return (
    <Container>
      <Box sx={{ padding: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          TRADING SYSTEMS
        </Typography>

        <Typography variant="h5" color="secondary" gutterBottom fontSize={"35px"}>
          TRADE WHAT YOU SEE 😊, NOT WHAT YOU THINK 🤔
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontStyle: "italic" }}
          color="success.main"
          fontSize={"25px"}
        >
          ( KIÊN NHẪN, QUYẾT ĐOÁN, KỈ LUẬT )
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="h6"
          gutterBottom
          fontSize={"30px"}
          fontWeight={700}
        >
          I. PHÂN TÍCH KĨ THUẬT VỀ ĐA KHUNG THỜI GIAN
        </Typography>

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
            II. PHÂN TÍCH KĨ THUẬT VỀ HỖ TRỢ, KHÁNG CỰ CHUYÊN SÂU
          </Typography>
          <List>
            {items.map((it, idx) => {
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
    </Container>
  );
};

export default TechnicalAnalysis;
