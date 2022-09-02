import "./App.css";
import MainLayout from "./components/Layout";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <MainContent></MainContent>
      </MainLayout>
    </div>
  );
}

export default App;
