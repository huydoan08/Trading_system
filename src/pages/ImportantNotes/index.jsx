import { Box, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import ItemLists from "../../components/ItemLists";

// Những lưu ý quan trọng
export default function ImporttantNotes() {
  const data = [
    "1. Chúng ta phải thừa nhận rằng thị trường này là một thị trường làm giá và chúng ta chỉ follow theo dựa vào những dấu hiệu.",
    "2. Những dấu hiệu thì luôn luôn chỉ mang tính xác suất, không chắc chắn một điều gì cả, đó là sự vô thường của thị trường.",
    "3. Việc quan trọng nhất là phải có kĩ năng xử lý (systems + trực giác) và phản ứng kịp thời tại những thời điểm quan trọng, chứ không phải chỉ tập trung vào việc đi dự đoán giá.",
    "4. Phải đặt mục tiêu thận trọng nên hàng đầu, nếu không thôi chỉ 1 lần sai thì sẽ không có cơ hội để làm lại.",
    "5. Khi mà đám đông bên ngoài bị thanh lý lệnh và cháy tài khoản, sợ hãi mất niềm tin thì đó là lúc cơ hội thực sự đến với bạn.",
    "6. Khi mà đám đông đang rất lạc quan, rất chủ quan thì lúc đó mình nên biết sợ hãi mà rút lui.",
    "7. Đứng ngoài chờ đợi khi cơ hội chưa thực sự rõ ràng cũng đã là thành công.",
    "8. Hãy làm những thứ đơn giản trước và làm cho thật giỏi, tinh hoa của sự phức tạp chính là sự đơn giản.",
    "9. Stoploss của người ta là điểm vào lệnh của mình, thì đó là cái key quan trọng để rèn luyện sự kiên nhẫn.",
    "10. Lập kế hoạch giao dịch. Giao dịch theo kế hoạch.",
    "11. Duy trì thói quen ghi ghép nhật kí giao dịch.",
    "12. Stoploss là thứ bắt buộc phải có.",
    "13. Không bao giờ huỷ stoploss sau khi đặt nó.",
    "14. Tránh nhảy ra nhảy vào thị trường quá thường xuyên.",
    "15. Hãy mong chờ và chấp nhận các thua lỗ một cách nhẹ nhàng. Vì sau lệnh thua lỗ này thì cơ hội thắng lớn đang đến rất gần.",
    "16. Nếu thị trường không làm điều bạn nghĩ nó sẽ làm thì hãy thoát ra.",
    "17. Đừng bao giờ đi đoán đỉnh, đoán đáy.",
    "18. Không bao giờ tự nguyện đi khuyên ai khác và không bao giờ khoe khoang chiến thắng của mình.",
    "19. Các sai lầm ngớ ngẩn nhất trong trading là đi đóng lệnh khi đang có lời, và gồng lệnh khi đang lỗ.",
    "20. Đứng ngoài thị trường cũng là một vị thế.",
    "21. Nếu bạn không biết mình là ai thì thị trường sẽ là nơi đắt giá để bạn tìm ra nó.",
    "21. Nếu bạn không biết ai đang mất tiền cho thị trường thì hãy coi chừng chính bạn sẽ là người bị mất tiền.",
    "22. Khi con tàu bắt đầu chìm, đừng cầu nguyện mà hãy nhảy ra!",
    "23. Thà để mất mặt chứ đừng để mất tiền.",
    "24. Luôn khắc ghi tận xương tuỷ một bộ nguyên tắc giao dịch mà đang hiệu quả với bạn.",
    "25. Một người sẽ trở thành thứ mà anh ta nghĩ về nó suốt ngày.",
    "26. Trong thị trường cypto không có khái niệm đỉnh, đáy mà chỉ có khái niệm là thời điểm và vị thế."
  ];
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="start"
      flexDirection="column"
      margin="0 auto"
      minHeight="100vh"
      textAlign="center"
      padding={8}
    >
      <Header> LƯU Ý QUAN TRỌNG vs NGUYÊN TẮC GIAO DỊCH</Header>
      <List>
        {data.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              <ItemLists item={item} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
