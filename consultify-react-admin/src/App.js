import { ToastContainer } from "react-toastify";
import RoutesPage from "./routes/Routes";
import Loader from "./components/Loader";
function App() {
  return (
    <div className="App">
      <ToastContainer limit={1} />
      <Loader />
      <RoutesPage />
    </div>
  );
}
export default App;
