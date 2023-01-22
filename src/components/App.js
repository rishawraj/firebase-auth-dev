import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Homepage from "./Homepage";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  // const { currentUser } = useAuth();
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />

              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              <Route
                path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />

              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
