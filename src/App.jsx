import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Navbar, Details, Footer, Sidepane } from "./components/index.js";
import UserContextProvider from "./contexts/UserContextProvider.jsx";
function App() {
  return (
    <>
      <UserContextProvider>
        <Sidepane />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}>
            Home
          </Route>
          <Route path="/details" element={<Details></Details>}>
            Add details
          </Route>
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
