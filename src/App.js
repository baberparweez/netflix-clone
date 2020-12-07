import React from "react";

import Head from "./Head.js";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requests from "./requests";

// Stylesheet to import all style partials
import "./Styles.scss";

function App() {
    return (
        <div className="app">
            <Head />
            <Nav />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceovies} />
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
        </div>
    );
}

export default App;
