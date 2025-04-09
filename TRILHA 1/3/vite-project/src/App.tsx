import ProfileCard from "./components/ProfileCard";
import './styles/styles.css'; 

function App() {
  return (
    <div className="container">
      <ProfileCard
        photoUrl="1.png"
        name="Weverton Neves"
        description="ESTUDANDO TADS 5º BIMESTRE"
      />
    </div>
  );
}

export default App;
