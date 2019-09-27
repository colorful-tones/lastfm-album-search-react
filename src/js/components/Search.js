import React, { useState } from "react";

const Search = ({ search, refreshPage }) => {
	const [searchValue, setSearchValue] = useState("");

	const handleSearchInputChanges = e => {
		setSearchValue(e.target.value);
	};

	const resetInputField = () => {
		setSearchValue("");
	};

	const callSearchFunction = e => {
		e.preventDefault();
		search(searchValue);
		resetInputField();
	};

	return (
		<form className="search-form">
			<input
				className="search-form__input"
				onChange={handleSearchInputChanges}
				placeholder="Enter your favorite band..."
				type="text"
				value={searchValue}
			/>
			<input
				className="search-form__submit"
				onClick={callSearchFunction}
				type="submit"
				value="SEARCH"
			/>
		</form>
	);
};

export default Search;
