import React from "react";

const Artist = ({ artist }) => {

	return (
		<a className="artist" href={artist.url}>{artist.name}</a>
	);
};

export default Artist;
