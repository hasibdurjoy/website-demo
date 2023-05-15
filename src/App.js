import Footer from "./Components/Footer/Footer";
import HomePageOverview from "./Components/HomePage/HomePageOverview/HomePageOverview";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Navigation />
      <HomePageOverview />
      <Footer />
    </div>
  );
}

export default App;
