import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hakkimizda from "./pages/Hakkimizda";
import Anasayfa from "./pages/Anasayfa";
import Avukat from "./pages/Avukat";
import Hastane from "./pages/Hastane";
import Kuafor from "./pages/Kuafor";
import Randevularim from "./pages/Randevular";
import { ToastContainer } from "react-toastify";
import { PostContextProvider } from "./context/PostContext";
import { GetContextProvider } from "./context/GetContext";

function App() {
  return (
    <PostContextProvider>
      <GetContextProvider>
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Anasayfa />}></Route>
            <Route path="/hakkimizda" element={<Hakkimizda />}></Route>
            <Route path="/randevu/avukat" element={<Avukat />}></Route>
            <Route path="/randevu/hastane" element={<Hastane />}></Route>
            <Route path="/randevu/kuafor" element={<Kuafor />}></Route>
            <Route path="/randevularim" element={<Randevularim />}></Route>
          </Routes>
        </Router>
      </GetContextProvider>
    </PostContextProvider>
  );
}
export default App;
