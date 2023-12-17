import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useNavigate } from "react-router";
const NavBar = () => {
  const navigate = useNavigate();
  const adminNav = [
    {
      label: "Quản lý sản phẩm",
      link: "/admin/product",
    },
  ];
  return (
    <Box component="aside">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {adminNav.map((item) => (
          <ListItemButton onClick={() => navigate(item.link)}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default NavBar;
