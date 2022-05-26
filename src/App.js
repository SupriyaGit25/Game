import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPuzzle from './pages/AddPuzzle';
import AddQuiz from './pages/AddQuiz';
import Archieve from './pages/Archieve';
import Dashboard from './pages/Dashboard';
import Donation from './pages/Donation';
import FundingProjects from './pages/FundingProjects';
import Host from './pages/Host';
import Master from './pages/Master';
import AllGames from './pages/AllGames';
import Puzzle from './pages/Puzzle';
import PuzzleBank from './pages/PuzzleBank';
import PuzzleCompleted from './pages/PuzzleCompleted';
import Quiz from './pages/Quiz';
import QuizBank from './pages/QuizBank';
import QuizCompleted from './pages/QuizCompleted';
import Rewards from './pages/Rewards';
import Setting from './pages/Setting';
import Subscription from './pages/Subscription';
import User from './pages/User';
import SideBar from "./components/Sidebar/SideBar";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/master" element={<Master/>} />
          <Route path="/host" element={<Host/>} />
          <Route path="/master/user" element={<User />} />
          <Route path="/allgames" element={<AllGames />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/puzzle/addpuzzle" element={<AddPuzzle />} />
          <Route path="/puzzle/puzzlebank" element={<PuzzleBank />} />
          <Route path="/puzzle/puzzlecompleted" element={<PuzzleCompleted />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/addquiz" element={<AddQuiz />} />
          <Route path="/quiz/quizbank" element={<QuizBank />} />
          <Route path="/quiz/quizcompleted" element={<QuizCompleted />} />
          <Route path="/quiz/archieve" element={<Archieve/>} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/fundingprojects" element={<FundingProjects />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
