import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import Sidebar from "./Sidebar";

const CustomLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        data-testid="sidebar"
        ModalProps={{ keepMounted: true }}
      >
        <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      </Drawer>
      <Box id="main">
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '280px' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomLayout;
