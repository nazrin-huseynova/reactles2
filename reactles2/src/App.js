import "./App.css";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const navStyles = {
  backgroundColor: "#111",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const ulStyles = {
  listStyle: "none",
  display: "flex",
  gap: "25px",
  margin: 0,
  padding: 0
};

const linkStyles = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px"
};

function App(props) {
  return (
<div className="App" style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}>
      <Nav {...props}
        navStyles={navStyles} 
        ulStyles={ulStyles} 
        linkStyles={linkStyles} />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
