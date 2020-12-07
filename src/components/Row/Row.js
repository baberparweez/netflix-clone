import React, { useState, useEffect } from "react";
import axios from "../../axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs on a specific condition/variable
    useEffect(() => {
        // if [], run once when row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${
                            isLargeRow && "row__posterLarge"
                        }`}
                        src={`${base_url}${
                            isLargeRow
                                ? movie?.poster_path
                                : movie?.backdrop_path
                        }`}
                        alt={
                            movie?.title || movie?.name || movie?.original_name
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;