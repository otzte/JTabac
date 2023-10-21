import { useEffect } from "react";
import "./App.css";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { Donor } from "./pages/Donor/Donor";
import { Restaurant } from "./pages/Restaurant/Restaurant";
import { Receiver } from "./pages/Receiver/Receiver";
import { Register } from "./pages/Register/Register";
import { Landing } from "./pages/Landing";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRecoilState } from "recoil";
import { loginState, productsState } from "./state";
import { fetchProducts } from "./dataFetcher";
import { W1S1Donor } from "./pages/w1/W1S1Donor";
import { W1S2Organizer } from "./pages/w1/W1S2Organizer";
import { W1S3Receiver } from "./pages/w1/W1S3Receiver";
import { W1S4Organizer } from "./pages/w1/W1S4Organizer";
import { W3S1Donor } from "./pages/w3/W3S1Donor";
import { W3S3Receiver } from "./pages/w3/W3S3Receiver";
import { W3S4Organizer } from "./pages/w3/W3S4Organizer";
import { W3S5Receiver } from "./pages/w3/W3S5Receiver";
import { W4S1Donor } from "./pages/w4/W4S1Donor";
import { Overview } from "./pages/Overview";

function App() {
  const [_, setProducts] = useRecoilState(productsState);
  const [login, setLogin] = useRecoilState(loginState);

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
              <MenuItem as={Link} to="/landing-old">
                Home
              </MenuItem>
              <MenuItem as={Link} to="/register-old">
                Register
              </MenuItem>
              <MenuItem as={Link} to="/restaurant-old">
                Restaurant
              </MenuItem>
              <MenuItem as={Link} to="/donor-old">
                Donor
              </MenuItem>
              <MenuItem as={Link} to="/receiver-old">
                Receiver
              </MenuItem>
            </MenuList>
          </Menu>
          {login.username && (
            <Button onClick={() => setLogin({} as any)}>Logout</Button>
          )}
        </Box>
        <Routes>
          <Route path="/landing-old" element={<Landing />} />
          <Route path="/register-old" element={<Register />} />
          <Route path="/restaurant-old" element={<Restaurant />} />
          <Route path="/donor-old" element={<Donor />} />
          <Route path="/receiver-old" element={<Receiver />} />
          <Route path="/w1s1" element={<W1S1Donor />} />
          <Route path="/w1s2" element={<W1S2Organizer />} />
          <Route path="/w1s3" element={<W1S3Receiver />} />
          <Route path="/w1s4" element={<W1S4Organizer />} />
          <Route path="/w3s1" element={<W3S1Donor />} />
          <Route path="/w3s3" element={<W3S3Receiver />} />
          <Route path="/w3s4" element={<W3S4Organizer />} />
          <Route path="/w3s5" element={<W3S5Receiver />} />
          <Route path="/w4s1" element={<W4S1Donor />} />
          <Route path="/" element={<Landing />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
