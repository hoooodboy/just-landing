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
        {/* <Route path="/mbti/select" element={<MbtiSelect></MbtiSelect>}></Route>
        <Route path="/mbti/result" element={<MbtiResult></MbtiResult>}></Route>
        <Route path="/loading" element={<Loading></Loading>}></Route>
        <Route path="/quiz/select" element={<QuizSelect></QuizSelect>}></Route>
        <Route path="/quiz/result" element={<QuizResult></QuizResult>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
