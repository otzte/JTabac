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
import { Navbar } from "./components/Navigation/Navbar";
import { components } from "../../schema/dist";

const dummyLocations = [
  {
    id: 8,
    user: 2,
    name: "Help Desk in Concert",
    street: "Rosenbergerstraße",
    houseNo: "4",
    zipCode: "60313",
    city: "Frankfurt am Main",
    lat: 50.11800137011279,
    lon: 8.68628118472959,
    type: "food",
    openingHoursText: "2pm to 11pm, monday closed",
    description: "One of the most popular indie rock band comes to Frankfurt.",
    offerTimeText: "18:00",
  },
  {
    id: 9,
    user: 3,
    name: "Ariston Restaurant",
    street: "Heiligkreuzgasse  ",
    houseNo: "29",
    zipCode: "60313 ",
    city: "Frankfurt am Main",
    lat: 50.11590537850756,
    lon: 8.689327058452697,
    type: "food",
    openingHoursText: "10:00",
    description:
      "Greek dishes like roasted lamb, moussaka & souvlaki served in a posh space with sidewalk tables.",
    offerTimeText: "11:30",
  },
  {
    id: 10,
    user: 3,
    name: "Medici",
    street: "Weißadlergasse",
    houseNo: "2",
    zipCode: "60311",
    city: "Frankfurt am Main",
    lat: 50.112308633647814,
    lon: 8.678666500421825,
    type: "Greek",
    openingHoursText: "11:30",
    description:
      "Fine dining restaurant with a terrace serving contemporary European cuisine & wine.",
    offerTimeText: "23:00",
  },
  {
    id: 11,
    user: 2,
    name: "Main Tower Restaurant & Lounge",
    street: "Neue Mainzer Str",
    houseNo: "52",
    zipCode: "60311",
    city: " Frankfurt am Main",
    lat: 50.112772635492945,
    lon: 8.672214814973145,
    type: "Fine Dining",
    openingHoursText: "10:30",
    description:
      "City views & international dishes in a glass-fronted lounge on the 53rd floor of an iconic tower.",
    offerTimeText: "19:00",
  },
  {
    id: 12,
    user: 4,
    name: "My Frankfurt",
    street: "Liebfrauenberg  ",
    houseNo: "37",
    zipCode: "60313",
    city: "Frankfurt am Main",
    lat: 50.112965279943495,
    lon: 8.681484529134309,
    type: "Restaurant",
    openingHoursText: "12:00",
    description: "https://www.restaurantmyfrankfurt.de/",
    offerTimeText: "18:00",
  },
  {
    id: 13,
    user: 1,
    name: " SEVEN SWANS",
    street: "Mainkai",
    houseNo: "4",
    zipCode: "60311",
    city: " Frankfurt am Main",
    lat: 50.11015809845974,
    lon: 8.68693477773833,
    type: "Restaurant",
    openingHoursText: "11:00",
    description: "Tasting menus featuring adventurous vegan dishes",
    offerTimeText: "14:00",
  },
  {
    id: 14,
    user: 1,
    name: "Ristorante Gallo Nero",
    street: "Kaiserhofstraße ",
    houseNo: "7",
    zipCode: "60313 ",
    city: "Frankfurt am Main",
    lat: 50.115662220874185,
    lon: 8.674789735573466,
    type: "Dining",
    openingHoursText: "12:00",
    description:
      "Traditional Italian dishes & a varied wine list at a classy restaurant with terrace tables.",
    offerTimeText: "13:00",
  },
];

const dummyProducts = [
  {
    id: 0,
    name: "Vegetarian meal",
    price: 10,
  },
  {
    id: 1,
    name: "Vegan meal",
    price: 12,
  },
  {
    id: 2,
    name: "Meal with meat",
    price: 15,
  },
  {
    id: 3,
    name: "Meal with meat Halal",
    price: 15,
  },
  {
    id: 4,
    name: "Dessert",
    price: 5,
  },
  {
    id: 5,
    name: "Cake",
    price: 4,
  },
  {
    id: 6,
    name: "Hot drink",
    price: 4,
  },
  {
    id: 7,
    name: "Cold Drink",
    price: 4,
  },
  {
    id: 8,
    name: "Cocktail",
    price: 12,
  },
  {
    id: 9,
    name: "Salad",
    price: 12,
  },
];

const dummyUsers: components["schemas"]["User"][] = [
  { id: 1, email: "donor", password: "123", type: "donor" },
  { id: 2, email: "receiver", password: "123", type: "receiver" },
  { id: 3, email: "organizer", password: "123", type: "organizer" },
];

function App() {
  const [_1, setProducts] = useRecoilState(productsState);
  const [_2, setUsers] = useRecoilState(usersState);
  const [_3, setOrders] = useRecoilState(ordersState);
  const [_4, setLocations] = useRecoilState(locationsState);

  useEffect(() => {
    const fetchData = async () => {
      /*
      const products = await fetchProducts();
      setProducts(products);
      */
      setProducts(dummyProducts);
      /*
      const locations = await fetchLocations();
      setLocations(locations);
      */
      setLocations(dummyLocations as any);
      /*
      const orders = await fetchOrders();
      setOrders(orders);
      */
      /*
      const users = await fetchUsers();
      setUsers(users);
      */
      setUsers(dummyUsers);
    };

    fetchData();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/landing-old" element={<Landing />} />
          <Route path="/register-old" element={<Register />} />
          <Route path="/restaurant-old" element={<Restaurant />} />
          <Route path="/donor-old" element={<Donor />} />
          <Route path="/receiver-old" element={<Receiver />} />
          <Route path="/w1s1" element={<W1S1Donor />} />
          <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
