import SlideShow from "./SlideShow";

const App = () => {
  const styles = {
    width: "400px",
    height: "300px",
    minHeight: "300px",
  };

 

  return (
    <div>
      <SlideShow>
        <img
          style={styles}
          src="https://www.espncricinfo.com/db/PICTURES/CMS/301300/301313.6.jpg"
          alt=""
        />
        <img
          style={styles}
          src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/4838402_BD%20cricket%20captains.jpg"
          alt=""
        />
        <img
          style={styles}
          src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/SMtocjazZNjeWI3LEEnZ3BoD7dL3RXfblGJyxACG.jpeg"
          alt=""
        />
      </SlideShow>
    </div>
  );
};

export default App;
