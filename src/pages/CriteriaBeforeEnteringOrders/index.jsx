import {
  Box,
  Typography,
  Divider,
  Checkbox,
  FormControlLabel,
  Container,
} from "@mui/material";

const criteria = [
  {
    label:
      "Khung thời gian giao dịch phải ĐỒNG THUẬN ? (Khung thời gian giao dịch phải đồng thuận với khung thời gian lớn)",
  },
  {
    label:
      "Có xác nhận sóng hồi để TỐI ƯU ĐIỂM VÀO LỆNH ĐẸP và TÌM RA STOPLOSS ? (Phải đợi có sự điều chỉnh, không tham gia sớm)",
  },
  {
    label: "Có xác nhận tín hiệu Price Action ? (Nến đảo chiều)",
  },
  {
    label:
      "Không cố tính ĐOÁN ĐỈNH, ĐOÁN ĐÁY → Chỉ FOLLOW theo xu hướng? Quản lý lệnh theo hiệu lực con sóng ở khung thời gian nhỏ hơn (khung H1)",
  },
  {
    label:
      "Luôn luôn ghi nhớ trò chơi trading là trò chơi của xác suất. Mọi dự phóng đều chỉ mang tính xác suất và không có gì đảm bảo chắc chắn được điều gì... ",
  },
];

export default function Criteria() {
  return (
    <Box>
      <Box sx={{ padding: 4, marginTop: "-400px" }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          TRADING SYSTEMS
        </Typography>

        <Typography variant="h5" color="secondary" gutterBottom>
          TRADE WHAT YOU SEE 😊, NOT WHAT YOU THINK 🤔
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontStyle: "italic" }}
          color="success.main"
        >
          ( KIÊN NHẪN, QUYẾT ĐOÁN, KỈ LUẬT )
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom fontSize={"40px"} fontWeight={700}>
          I. CÁC TIÊU CHÍ TRƯỚC KHI VÀO LỆNH
        </Typography>
        {criteria.map((item, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
            label={
              <Typography
                variant="body1"
                fontSize={"26px"}
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            }
            sx={{ color: index % 2 === 0 ? "red" : "black", marginBottom: 1, alignItems: "flex-start" }}
          />
        ))}
      </Box>
    </Box>
  );
}
