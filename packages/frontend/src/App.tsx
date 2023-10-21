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
import {
  locationsState,
  loginState,
  ordersState,
  productsState,
  usersState,
} from "./state";
import {
  fetchLocations,
  fetchOrders,
  fetchProducts,
  fetchUsers,
} from "./dataFetcher";
import { W1S1Donor } from "./pages/w1/W1S1Donor";
import { Overview } from "./pages/Overview";
import { RegisterUser } from "./pages/RegisterUser";

function App() {
  const [login, setLogin] = useRecoilState(loginState);
  const [_1, setProducts] = useRecoilState(productsState);
  const [_2, setUsers] = useRecoilState(usersState);
  const [_3, setOrders] = useRecoilState(ordersState);
  const [_4, setLocations] = useRecoilState(locationsState);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      setProducts(products);
      const locations = await fetchLocations();
      setLocations(locations);
      const orders = await fetchOrders();
      setOrders(orders);
      const users = await fetchUsers();
      setUsers(users);
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
          {login.id && (
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
          <Route path="/" element={<Landing />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
