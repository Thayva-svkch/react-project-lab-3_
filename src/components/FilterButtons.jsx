const OPTIONS = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" }
];

function FilterButtons({value, onChange}) {

  return (
    <div className="filter-row">

        {OPTIONS.map((item) => (
            <button 

            className={"filter-btn" + (value === item.key ? " active" : "")}
            key={item.key} 
            onClick={() => onChange(item.key)}>
                {item.label}

            </button>
        ))}

    </div>
  );
}
export default FilterButtons;
