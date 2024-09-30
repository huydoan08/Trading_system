import { Typography } from "@mui/material";

export default function Title({ children }) {
  return (
    <Typography
      variant="h6"
      fontWeight={700}
      sx={{
        fontSize: {
          xs: "20px",
          sm: "20px",
          md: "30px",
          lg: "40px",
        },
      }}
    >
      {children}
    </Typography>
  );
}
