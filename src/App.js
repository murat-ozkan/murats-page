import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((item) => (
        <Main {...item} />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
