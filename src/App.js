
import Home from "./components/Home";
import FarmState from "./context/FarmState";
function App() {
  return (
    <div>
      <FarmState>
        {/* <Navbar /> */}
        <Home />
      </FarmState>
    </div>
  );
}

export default App;
