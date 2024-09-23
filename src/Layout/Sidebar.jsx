import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Collapse,
} from "@mui/material";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SsidChartIcon from '@mui/icons-material/SsidChart';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';

const Sidebar = () => {
  const [open, setOpen] = useState({});
  const toggleMenu = (menu) => {
    setOpen((prevState) => ({ ...prevState, [menu]: !prevState[menu] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 300,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 300, boxSizing: "border-box" },
      }}
    >
      <div>
        <Typography
          variant="h6"
          style={{
            padding: 16,
            fontWeight: "bold",
            textAlign: "center",
            color: "#000",
          }}
        >
          TRADING SYSTEMS
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/trading-system">
          <ListItemIcon>
            <SettingsSystemDaydreamIcon />
          </ListItemIcon>
          <ListItemText primary="TRANG CHỦ" sx={{color: "#000"}}/>
        </ListItem>
      </List>
      <Divider />
      <ListItem button onClick={() => toggleMenu("certificates")}>
        <ListItemIcon>
          <HistoryEduIcon />
        </ListItemIcon>
        <ListItemText primary="NHẬT KÍ GIAO DỊCH" sx={{color: "#000"}}/>
        {open["certificates"] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open["certificates"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button component={Link} to="/big-win-trades" sx={{ pl: 4, color: "#000" }}>
            <ListItemText primary="Lệnh thắng lớn" />
          </ListItem>
          <ListItem button component={Link} to="/early-profit" sx={{ pl: 4, color: "#000" }}>
            <ListItemText primary="Lệnh chốt lời non" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/big-loss-trades"
            sx={{ pl: 4, color: "#000" }}
          >
            <ListItemText primary="Lệnh thua lỗ lớn" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/missed-opportunity"
            sx={{ pl: 4, color: "#000" }}
          >
            <ListItemText primary="Bỏ lỡ cơ hội tốt" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />
      <List>
        <ListItem button component={Link} to="/important-trades">
          <ListItemIcon>
            <WarningIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000" }} primary="LƯU Ý QUAN TRỌNG" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/criteria">
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000" }} primary="TIÊU CHÍ TRƯỚC KHI VÀO LỆNH" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/after-placing-order">
          <ListItemIcon>
            <SsidChartIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000" }} primary="QUẢN LÝ SAU KHI VÀO LỆNH" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/technical-analysis">
          <ListItemIcon>
            <CandlestickChartIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#000" }} primary="PHÂN TÍCH KĨ THUẬT" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
