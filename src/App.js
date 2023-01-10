import React from "react";
import "./App.css";
import Bannner from "./Bannner";
import requests from "./requests";
import Row from "./Row";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Bannner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated " fetchUrl={requests.fetchTopRateMovies} />
      <Row title="Christ Xmas" fetchUrl={requests.fetchChristmassMovies} />
      <Row title="Romance " fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row
        title="Documentaries Movies "
        fetchUrl={requests.fetchDocumentaryMovies}
      />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
