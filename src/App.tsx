import { Provider } from "./components/ui/provider";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Provider>
      <Header />
      <Card></Card>
      <Footer/>
    </Provider>
  );
}

export default App;
