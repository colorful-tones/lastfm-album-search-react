import React, { useReducer, useEffect } from "react";
import Header from "./Header";
import Artist from "./Artist";
import Search from "./Search";
import { config } from "../../../config/config";

const API_KEY = config["API_KEY"];
const DEFAULT_ARTIST = 'beck';
const RESULT_LIMIT = 30;
const RESULT_PAGE = 1;
const API_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&limit=${RESULT_LIMIT}&format=json&api_key=${API_KEY}`;

const initialState = {
	loading: false,
	artists: [],
	errorMessage: null
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SEARCH_REQUEST":
			return {
				...state,
				loading: true,
				errorMessage: null
			};
		case "SEARCH_SUCCESS":
			return {
				...state,
				loading: false,
				artists: action.payload
			};
		case "SEARCH_FAILURE":
			return {
				...state,
				loading: false,
				errorMessage: action.error
			};
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetch(`${API_URL}&page=${RESULT_PAGE}&artist=${DEFAULT_ARTIST}`)
			.then(response => response.json())
			.then(jsonResponse => {
				const artists = jsonResponse.similarartists[Object.keys(jsonResponse.similarartists)[0]];
				dispatch({
					type: "SEARCH_SUCCESS",
					payload: artists
				});
			});
	}, []);

	const search = searchValue => {
		dispatch({
			type: "SEARCH_REQUEST"
		});

		fetch(`${API_URL}&page=${RESULT_PAGE}&artist=${searchValue}`)
			.then(response => response.json())
			.then(jsonResponse => {
				if (!jsonResponse.error) {
					const artists = jsonResponse.similarartists[Object.keys(jsonResponse.similarartists)[0]];
					dispatch({
						type: "SEARCH_SUCCESS",
						payload: artists
					});
				} else {
					dispatch({
						type: "SEARCH_FAILURE",
						error: jsonResponse.error
					});
				}
			});
	};

	let { artists, errorMessage, loading } = state;
	console.log( state );

	return (
		<div className="app">
			<Header text="Search for similar artists on Last.fm" />
			<Search search={search} />
			<h2 className="intro">Results:</h2>
			<div className="artists">
				{loading && !errorMessage && artists.length > 0 ? (
					<div className="loader"></div>
				) : errorMessage ? (
					<div className="feedback feedback--error" errorcode={errorMessage}>No results found for that artist. Please try again.</div>
				) : (
					artists.map((artist, index) => (
						<Artist
							key={`${index}-${artist.name}`}
							artist={artist}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default App;
