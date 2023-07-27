import "./App.css";
import Footer from "./bottomFooter/Footer";
import Header from "./components/header/Header";
import "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./contact/Contact";

function App() {
  return (
    <>
      <Header></Header>

      <main className="main">
        <Home></Home>
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
