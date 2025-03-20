import { Provider } from "./components/ui/provider";
import Card from "./components/LoginForm/LoginForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Router, Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
