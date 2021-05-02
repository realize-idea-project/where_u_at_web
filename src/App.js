import logo from './logo.svg';
import './App.css';

function App() {
  const handlerClick = () => {
    fetch('http://whereuat-env.eba-qzqmst7s.ap-northeast-2.elasticbeanstalk.com',{
      method: 'GET',
      mode: 'cors',
    }).then(res => {
      console.log('res', res)
      alert(`hi ${res.status}`);
    });
  };

  return (
    <div className="App">
      hi
      <button onClick={handlerClick}>api call</button>
    </div>
  );
}

export default App;
