import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
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
      "Không cố tính ĐOÁN ĐỈNH, ĐOÁN ĐÁY → Chỉ FOLLOW theo xu hướng? Quản lý lệnh theo hiệu lực con sóng ở khung thời gian nhỏ hơn (khung M30, H1, H2, H4)",
  }
];

export default function BeforeEnterOrders() {
  return (
    <Box>
      <Box sx={{ padding: 4, marginTop: "-400px" }}>
        <Typography variant="h6" gutterBottom fontSize={"40px"} fontWeight={700}>
          I. CÁC TIÊU CHÍ TRƯỚC KHI VÀO LỆNH
        </Typography>
        {criteria.map((item, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox sx={{ pt: -1}} />}
            label={
              <Typography
                variant="body1"
                fontSize="26px"
                fontWeight="bold"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            }
            sx={{ color:"#000", marginBottom: 1, alignItems: "flex-start" }}
          />
        ))}
      </Box>
    </Box>
  );
}