import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./utils/routes";
import Layout from "./pages/Layout";

function App() {
  const isLoggedIn = true;
  console.log(routes)
  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn}>
      </Layout>
    </Router>
  );
}

export default App;
