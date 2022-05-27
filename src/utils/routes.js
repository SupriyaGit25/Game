import Dashboard from "../pages/Dashboard";
import User from "../pages/User/User";
import AddUser from "../pages/User/AddUser";
import Host from "../pages/Host";
import AllGames from '../pages/AllGames';
import AddPuzzle from "../pages/AddPuzzle";
import PuzzleBank from "../pages/PuzzleBank";
import PuzzleCompleted from "../pages/PuzzleCompleted";
import AddQuiz from "../pages/AddQuiz";
import Archieve from "../pages/Archieve";
import QuizCompleted from "../pages/QuizCompleted";
import QuizBank from "../pages/QuizBank";
import Subscription from "../pages/Subscription";
import Rewards from "../pages/Rewards";
import Donation from "../pages/Donation";
import FundingProjects from "../pages/FundingProjects";
import Setting from "../pages/Setting";
import NotFound from "../pages/NotFound";

const routes = [
    {
        path : '/',
        component: () => <Dashboard />
    },
    {
        path : '/master/host',
        component: () => <Host />
    },
    {
        path : '/master/user',
        component: () => <User />
    },
    {
        path : '/master/user/adduser',
        component: () => <AddUser />
    },
    {
        path : '/master/user/allgames',
        component: () => <AllGames />
    },
    {
        path : '/puzzle/addpuzzle',
        component: () => <AddPuzzle />
    },
    {
        path : '/puzzle/puzzlebank',
        component: () => <PuzzleBank />
    },
    {
        path : '/puzzle/puzzlecompleted',
        component: () => <PuzzleCompleted />
    },
    {
        path : '/quiz/addquiz',
        component: () => <AddQuiz />
    },
    {
        path : '/quiz/quizbank',
        component: () => <QuizBank />
    },
    {
        path : '/quiz/quizcompleted',
        component: () => <QuizCompleted />
    },
    {
        path : '/quiz/archieve',
        component: () => <Archieve />
    },
    {
        path : '/subscription',
        component: () => <Subscription />
    },
    {
        path : '/rewards',
        component: () => <Rewards />
    },
    {
        path : '/fundingprojects',
        component: () => <FundingProjects />
    },
    {
        path : '/donation',
        component: () => <Donation />
    },
    {
        path : '/setting',
        component: () => <Setting />
    },
    {
        path : '*',
        component: () => <NotFound/>
    },
]

export default routes;