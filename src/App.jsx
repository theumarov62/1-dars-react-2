import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="AppContainer">
        <Header />
        <Main className="MainContent"></Main>
        <Footer />
      </div>
    </>
  );
}

export default App;
