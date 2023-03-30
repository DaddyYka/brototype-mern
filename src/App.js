import {Route, Routes} from "react-router-dom";
import Announcements from "./Pages/Announcements";
import Arcade from "./Pages/Arcade";
import BroCamp from "./Pages/BroCamp";
import Career from "./Pages/Career";
import Community from "./Pages/Community";
import HomePage from "./Pages/HomePage";
import LearningClub from "./Pages/LearningClub";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Register";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/brocamp" element={<BroCamp/>} />
      <Route path="/learning" element={<LearningClub/>} />
      <Route path="/community" element={<Community/>} />
      <Route path="/arcade" element={<Arcade/>} />
      <Route path="/career" element={<Career/>} />
      <Route path="/announcements" element={<Announcements/>} />
      <Route path="*" element={<PageNotFound />} />
     </Routes>
    </>
  );
};

export default App;
