import React from 'react';
import SideBar from '../components/Sidebar/SideBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from '../utils/routes';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from './Dashboard';
import Header from '../components/Sidebar/Header';

function Layout({isLoggedIn}) {

  return (
        isLoggedIn && 
      <>
        <SideBar>
            <Header />
            <Routes>
            {routes.map(({path, component}) => (
                <Route path={path} key={path}
                element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                    {component()}
                    </PrivateRoute>
                } 
                />
            ))}
            {/* <Route path="/master" element={<Master/>} />
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
            <Route path="*" element={<> not found</>} /> */}
            </Routes>
        </SideBar>
      </>
  )
}

export default Layout