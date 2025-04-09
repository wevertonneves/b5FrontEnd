import ProfileCard from "./components/ProfileCard";
import Gallery from "./components/Gallery";
import './styles/styles.css';

function App() {
  return (
    <div>
     <div className="fullscreenPage">
        <ProfileCard
          photoUrl="1.png"
          name="Weverton Neves"
          description="ESTUDANDO TADS 5º BIMESTRE"
        />
      </div>
      <Gallery />
    </div>
  );
}

export default App;
