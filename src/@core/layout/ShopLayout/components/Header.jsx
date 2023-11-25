import { Box } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="bg-blue-400 w-auto h-20">
        <div>
          <input type="text" className="w-96 m-6 rounded" />
          <button className="fa-solid fa-magnifying-glass">
     
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
