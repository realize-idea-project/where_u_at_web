import './App.css';

function App() {
  const handlerClick = () => {
    fetch('http://whereuat-env.eba-qzqmst7s.ap-northeast-2.elasticbeanstalk.com',{
      method: 'GET',
      mode: 'cors',
    }).then(res => {
      alert(`hi ${res.status}`);
      return res.json();
    }).then(data => {console.log(data)})
  };

  return (
    <div className="App">
      hi
      <button onClick={handlerClick}>api call</button>
    </div>
  );
}

export default App;
