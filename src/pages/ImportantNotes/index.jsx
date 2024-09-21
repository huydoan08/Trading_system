import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function ImporttantNotes() {
  const data = [
    {
      info: "Mọi thông tin ở đây chỉ mang tính tham khảo, không chắc chắn một điều gì cả vì kịch bản luôn thay đổi để phù hợp với thị trường.",
    },
    {
      info: "Chúng ta phải thừa nhận rằng thị trường này là một thị trường làm giá, và chúng ta chỉ follow theo dựa vào những dấu hiệu.",
    },
    {
      info: "Những dấu hiệu thì luôn có tính xác suất, không chắc chắn một điều gì cả.",
    },
    {
      info: "Việc quan trọng nhất là KĨ NĂNG XỬ LÝ chứ không phải là dự đoán giá",
    },
    {
      info: "Bạn phải xây dựng cho mình một HỆ THỐNG GIAO DỊCH và BẠN LÀM THEO HỆ THỐNG ĐÓ",
    },
    {
      info: "Cần một thời gian dài mới có thể hiểu được, mới có thể thành thạo được một cái NGHỀ",
    },
    {
      info: "Kiên nhẫn và thành thục phương pháp, bạn sẽ nhận được phần thưởng xứng đáng",
    },
    {
      info: "Đứng ngoài chờ đợi khi cơ hội chưa thực sự rõ ràng cũng đã là thành công.",
    },
  ];
  return (
    <>
      <Container>
        <Box sx={{ padding: 4 }}>
          <Typography
            variant="h6"
            align="center"
            fontWeight="bold"
            gutterBottom
            fontSize={"50px"}
          >
            LƯU Ý QUAN TRỌNG
          </Typography>
          <List>
            {data.map((it, idx) => {
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
                      mt: "20px"
                    }}
                  />
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: "30px",
                      fontWeight: "700",
                    }}
                    primary={it?.info}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Container>
    </>
  );
}
