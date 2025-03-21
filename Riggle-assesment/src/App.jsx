import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import RecipesList from "./components/Recipes/RecipesList";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  return (
    <>
      <div className="app-container">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="main-content">
          <Sidebar />
          <div className="recipes-container">
            <RecipesList searchQuery={searchQuery} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
