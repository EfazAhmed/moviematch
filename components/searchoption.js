import react, { useState } from "react";

const SearchOption = ({ option }) => {

    const [selectIcon, setSelectIcon] = useState("");

    const handleClick = () => {
        alert(option.title);
        console.log(document.activeElement)
    }

    const handleMouseEnter = () => {
        setSelectIcon("🍿");
    }

    const handleMouseLeave = () => {
        setSelectIcon("");
    }

    return (
        <div className="search-option-container" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p>{option.title}</p>
            <p className="search-option-select-icon">{selectIcon}</p>
        </div>
    )
}

export default SearchOption;