import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from './Banner'
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGNALS"
       fetchUrl={request.fetchNetflixOriginals}
       isLargeRow={true}
        />
      <Row title="Tranding Now" fetchUrl={request.fetchTranding} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovice} />
      <Row title="Documentres" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
