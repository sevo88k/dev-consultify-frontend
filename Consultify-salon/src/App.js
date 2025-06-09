import { useEffect } from "react";
import RoutesPage from "./Routes/Routes";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { useDispatch } from "react-redux";
import { getSubscriptionById } from "./Redux/Actions/user/salon";
import useSessionTimeout from "./Hooks/useSessionTimeout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscriptionById(localStorage.getItem("userid")));
  }, []);

  const handleLogout = () => {
    // Clear user session data here, e.g., remove tokens from localStorage
    localStorage.clear();
    window.location.href = "/";

    // Redirect to login page
  };

  useSessionTimeout(2 * 60 * 60 * 1000, handleLogout); // 2 hours in milliseconds

  return (
    <ScrollToTop>
      <div className="App">
        <Toaster position="top-right" reverseOrder={false} />
        <RoutesPage />
      </div>
    </ScrollToTop>
  );
}

export default App;
