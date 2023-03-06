import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Loading from "../components/loading";
import MainPage from "./pages/Main";
// import MbtiResult from "../pages/mbtiResult";
// import MbtiSelect from "../pages/mbtiSelect";
// import QuizResult from "../pages/quizResult";
// import QuizSelect from "../pages/quizSelect";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/portfolio" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
