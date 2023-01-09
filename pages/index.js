import react from "react";
import SearchBar from "../components/searchbar";

const Home = ({ data }) => {
  return (
    <main className="main-container">
      <div className="logo-container">
        <h1 className="logo">MovieMatch</h1>
      </div>
      <SearchBar />
      <div className="footer-container">
        <p>© 2023 MovieMatch. All Rights Reserved.</p>
      </div>
    </main>
  )
}



export default Home;
