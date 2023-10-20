import { useState } from "react";
import "./App.css";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { Donor } from "./pages/Donor/Donor";
import { Restaurant } from "./pages/Restaurant/Restaurant";
import { Receiver } from "./pages/Receiver/Receiver";
import { Register } from "./pages/Register/Register";
import { Landing } from "./pages/Landing/Landing";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function App() {
  return (
    <HashRouter>
      <Box position={"absolute"} right={5} top={5}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem as={Link} to="/">
              Home
            </MenuItem>
            <MenuItem as={Link} to="/register">
              Register
            </MenuItem>
            <MenuItem as={Link} to="/restaurant">
              Restaurant
            </MenuItem>
            <MenuItem as={Link} to="/donor">
              Donor
            </MenuItem>
            <MenuItem as={Link} to="/receiver">
              Receiver
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/receiver" element={<Receiver />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
