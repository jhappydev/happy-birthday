import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <p>똑똑👀</p>
      <button onClick={() => navigate('/about')}>1.🎁</button>
      <button onClick={() => navigate('/present')}>2. 🎈</button>
      <button onClick={() => navigate('/letter')}>3. 💌</button>
    </div>
  );
}

export default Home;