import { useEffect, useState } from "react";
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
  IconButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRecoilState } from "recoil";
import { productsState } from "./state";
import { fetchProducts } from "./dataFetcher";

function App() {
  const [_, setProducts] = useRecoilState(productsState);

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await fetchProducts());
    };

    fetchData();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <HashRouter>
        <Box position={"absolute"} right={5} top={0}>
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
    </div>
  );
}

export default App;
