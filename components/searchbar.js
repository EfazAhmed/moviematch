import react, { useEffect, useState } from "react";
import SearchOption from "./searchoption";
import { DebounceInput } from 'react-debounce-input'

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [options, setOptions] = useState([]);
    const [focused, setFocused] = useState(false);

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const fetchMovies = async () => {
        const response = await fetch(`/api/movies?q=${query.toLowerCase()}`);
        const json = await response.json();
        const data = json['data'];
        setOptions(data);
    };

    useEffect(() => {
        if (!query) {
            setOptions([]);
            return;
        }
        fetchMovies();
    }, [query])

    useEffect(() => {
        setOptions([]);
    }, [])

    return (
        <>
            <div className="search-container">
                <DebounceInput
                    placeholder="Enter movie here"
                    minLength={1}
                    debounceTimeout={500}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                <br />
                <div className="search-options-container">
                    {options.length > 0 ?
                        <>
                            {options.map((option, i) => (
                                <>
                                    <SearchOption option={option} />
                                </>
                            ))}


                        </> :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}

export default SearchBar;