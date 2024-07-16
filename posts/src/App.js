import { Provider } from "react-redux";
import "./App.css";
import Data from "./components/Data";
import store from "./redux/store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit";
import BookListing from "./views/BookListing";
// import Login from "./auth/Login";
// import SignupForm from "./auth/Signup";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} /> */}
          {/* <Route path="/" element={<Data />} /> */}
          <Route path="/list" element={<BookListing/>}/>
          {/* <Route path="/edit/:id" element={<Edit />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
