import "./App.css";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { NoAccounts } from "@mui/icons-material";
import Layout from "./components/Layout";
import Home from "./pages/Home";

interface routeType {
  path: string;
  component: React.ComponentType;
  id: number;
}

const pages: routeType[] = [
  {
    path: "/",
    component: Home,
    id: 1,
  },
];

function App() {
  const [authenticated, setAuthenticated] = useState(true);
  return (
    <div>
      <Router>
        {!authenticated ? (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        ) : (
          <Layout>
            <Routes>
              {pages.map((page) => (
                <Route
                  path={page.path}
                  Component={page.component}
                  key={page.id}
                />
              ))}
            </Routes>
          </Layout>
        )}
        {/* <Routes>
          <Route path="/login" element={<Login />} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
