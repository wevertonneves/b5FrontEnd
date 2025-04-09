
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <ProfileCard
        photoUrl="1.png"
        name="Weverton Neves"
        description="ESTUDANDO TADS 5º BIMESTRE"
      />
    </div>
  );
}

export default App;
