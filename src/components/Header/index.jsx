import { Box, Typography } from "@mui/material";

const Header = ({children, color="#000000"}) => {
  return (
    <Box sx={{ padding: 2, textAlign: "center" }}>
      <Typography
        variant="h6"
        fontWeight={700}
        color={color}
        sx={{
          fontSize: {
            xs: "30px",
            sm: "30px",
            md: "40px",
            lg: "50px",
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Header;
