import "./App.css";
import ControlArea from "./assets/components/controlArea";
import Navbar from "./assets/components/Navbar";
import { useState } from "react";
import SearchedMusic from "./assets/components/SearchedMusic";
function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <>
      <Navbar onSearch={handleSearch} />
      {searchQuery && <SearchedMusic query={searchQuery} />}
      <ControlArea />
    </>
  );
}

export default App;
