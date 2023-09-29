import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransaksiPage from "./Pages/TransaksiPage/TransaksiPage";
import FoodPage from "./Pages/FoodPage/FoodPage";
import TambahkanMenu from "./Components/TambahkanMenu/TambahkanMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TransaksiPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/tambahkanmenu" element={<TambahkanMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
