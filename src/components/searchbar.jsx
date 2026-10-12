// import { useState } from "react";
//     const [searchText , onChnage] = useState("");

function searchbar({ searchText, onChnage }) {


  return (
    <div className="search-row">
      <span className="icon">🔍</span>
        <input 
            type="text"
            placeholder="ຄົ້ນຫາວຽກ... / search..."
            value={searchText}
            onChange={(e) => onChnage(e.target.value)}
        />

        {/* <p>{searchText}</p> */}
    </div>
  );
}
export default searchbar;
