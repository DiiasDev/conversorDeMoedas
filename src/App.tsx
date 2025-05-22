import "./App.css";
import HomePage from "./pages/HomePage/homePage";
import Container from "./components/Container/container";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Container>
        <HomePage />
      </Container>

      <div className="bg-gray-100 min-h-screen">
        <Footer />
      </div>
    </>
  );
}

export default App;
