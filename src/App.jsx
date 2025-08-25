import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Unibox from "./components/Unibox";
import CalltoAction from "./components/CalltoAction";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./context/AuthContext";
import "./App.css";

const FilesPage = () => (
  <h2 className="text-center mt-10">Welcome to Files Dashboard</h2>
);

const App = () => (
  <Router>
    <AuthProvider>
      <NavBar />
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Unibox />
              <Testimonials />
              <CalltoAction />
              <Footer />
            </>
          }
        />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected route */}
        <Route
          path="/files"
          element={
            <PrivateRoute>
              <FilesPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;
