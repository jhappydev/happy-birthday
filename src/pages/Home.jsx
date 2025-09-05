import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <p>똑똑👀</p>
      <button onClick={() => navigate('/happy-birthday/about')}>1.🎁</button>
      <button onClick={() => navigate('/happy-birthday/present')}>2. 🎈</button>
      <button onClick={() => navigate('/happy-birthday/letter')}>3. 💌</button>
    </div>
  );
}

export default Home;