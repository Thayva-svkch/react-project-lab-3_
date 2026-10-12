import { useState } from "react";
import Counter from "./components/counter";
import TodoList from "./components/TodoList";
import SearchBar from "./components/searchbar";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("all");

  return (
    <div className="wrap">
      <h1>My Todo List:</h1>

      <div className="panel">
        <div className="panel-label">ຈຸດກວດທີ່ 1</div>
        <SearchBar searchText={searchText} onChnage={setSearchText} />
        <FilterButtons value={filter} onChange={setFilter} />
         {/* <p>{searchText}</p>
        <p>{filter}</p> */}
      </div>

     
      <TodoList searchText={searchText} filter={filter} />
    </div>
  );
}

export default App;
