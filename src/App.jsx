import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute.jsx";
import { refreshUser } from "./redux/auth/operations";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing); // Select isRefreshing state

  // Dispatch refreshUser action on component mount
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Router>
      <Layout>
        {isRefreshing ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={RegistrationPage} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={LoginPage} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={ContactsPage} />}
            />
          </Routes>
        )}
      </Layout>
    </Router>
  );
};

export default App;
