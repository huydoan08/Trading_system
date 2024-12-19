import { Box } from "@mui/material";

const list = [
  {
    info: "- Đối với tôi thì danh mục đầu tư dài hạn thì chỉ có duy nhất là Bitcoin và khung thời gian giao dịch tốt nhất là khung 1W, cá nhân tôi cũng đã may mắn có một chút xíu trải nghiệm với đầu tư trong thị trường chứng khoán, đầu tư chứng chỉ quỹ nhưng mà sau này tôi nhận thấy rằng những danh mục đó tôi không thực sự có đủ hiểu biết nên sau này tôi chỉ tập trung duy nhất vào thị trường cypto mà thôi. Trải qua một số nhịp tăng giảm của thị trường thì tôi nhận thấy rằng bất kì một đồng Altcoin nào đều có thể bị thay thế nhưng duy nhất chỉ có Bitcoin là vẫn mãi mãi đứng ở vị trí top một nên nó chắc chắn là một tài sản để đầu tư dài hạn được.",
  },
  {
    info: "- Đối với trading thì tôi sẽ làm theo hệ thống giao dịch này một cách nhất quán vì tôi biết là nó sẽ giúp tôi kiếm được lợi nhuận trong dài hạn bất kể là thị trường có đi như thế nào, sẽ có lúc có thiệt hại nhưng tôi sẽ luôn cố gắng khống chế thiệt hại ở mức cho phép.",
  },
  {
    info: "- Tôi luôn luôn nhắc nhở bản thân là phải tu tập giới-định-tuệ, hoàn thiện bản thân tốt hơn mỗi ngày.",
  },
  {
    info: "- Đối với tôi thì tôi lựa chọn đi một mình, tôi thích đưa ra quyết định độc lập và tôi cũng sẵn sàng chịu trách với quyết định của mình, chính vì vậy nên tôi không có tham gia vào bất kì một hội nhóm nào cả, và tôi cũng không để cho bất kì ai quyết định thay giúp tôi cả.",
  },
  {
    info: "- Tôi luôn luôn quan sát xung quanh để đúc kết kinh nghiệm cho bản thân mình, cũng như học tập từ những sai lầm của người khác, và tôi cũng không cố chấp khi mà quyết định của mình sai, khi mà tôi nhận ra mình sai thì ngay lập tức tôi sẽ có những phản ứng kịp thời và rút ra cho mình những bài học kinh nghiệm từ những sai lầm đó. "
  },
  {
    info: "- Tôi luôn luôn cố gắng loại bỏ những suy nghĩ tiêu cực ra khỏi não bộ, hạn chế tiếp xúc với những người có ảnh hưởng tiêu cực tới tôi, và tôi cũng không suy nghĩ quá tích cực và kì vọng quá về một điều gì đó sẽ xảy ra, với tôi thì tôi sẽ tư duy đúng đắn, tập trung vào hiện tại, vì với tôi thì điều gì đến thì sớm hay muộn rồi nó cũng sẽ đến."
  }
];
const Blogs = () => {
  return (
    <Box
      paddingLeft={8}
      paddingRight={8}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"start"}
      alignItems={"start"}
    >
      {list.map((it, idx) => (
        <Box key={idx}>{it.info}</Box>
      ))}
    </Box>
  );
};

export default Blogs;
