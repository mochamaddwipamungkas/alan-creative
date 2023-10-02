import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransaksiPage from "./Pages/TransaksiPage/TransaksiPage";
import FoodPage from "./Pages/FoodPage/FoodPage";
import TambahkanMenu from "./Components/TambahkanMenu/TambahkanMenu";
import PrintBillPage from "./Pages/PrintBillPage/PrintBillPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TransaksiPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/tambahkanmenu" element={<TambahkanMenu />} />
        <Route path="/printbill" element={<PrintBillPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
