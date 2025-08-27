import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import Dashboard from "./Dashboard";
import { useContext } from "react";
import "./App.css";

// This component decides where "/" should go
const RootRedirect = () => {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};

const App = () => (
  <Router>
    <AuthProvider>
      <NavBar />
      <Routes>
        {/* Root route decides based on login */}
        <Route path="/" element={<RootRedirect />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;
