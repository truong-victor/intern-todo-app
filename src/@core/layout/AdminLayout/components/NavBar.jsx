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
      label: "Manage Product",
      link: "/admin/product",
    },
    {
      label: "Add Product",
      link: "/admin/product/new",
    },
  ];
  return (
    <Box
      component="aside"
      sx={{
        width: "17%",padding:'20px', color:'white',
        background: "rgb(33,75,230)",
        background:
          "linear-gradient(90deg, rgba(33,75,230,1) 0%, rgba(80,101,234,1) 100%)",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          // <ListSubheader
          //   component="div"
          //   id="nested-list-subheader"
          //   sx={{color: 'white',borderBottom: '1px solid grey',padding: '0 0 18px ',
          //     background: "rgb(33,75,230)",
          //     background:
          //       "linear-gradient(90deg, rgba(33,75,230,1) 0%, rgba(80,101,234,1) 100%)",
          //   }}
          // >
            <img className="w-1/2 mb-6 m-auto"  src="/public/images/1624106370.png" alt="" />
          // </ListSubheader>
        }
      > <hr className="text-[grey]" />
        {adminNav.map((item, index) => (
          <ListItemButton key={index} onClick={() => navigate(item.link)}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default NavBar;
