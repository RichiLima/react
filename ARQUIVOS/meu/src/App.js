
import './App.css';

function App() {
  const name = `Richard`
  const newname = name.toUpperCase()
 

  function som(a, b) {
    return a+b
  }

  const url = "https://via.placeholder.com/150"


  return (
    <div className="App">
      <h1>Olá {newname}!!!</h1>
      <h2>Alterando o JSX</h2>
      <p>Meu primeiro app</p>
      <p>soma: {som(1, 5)}</p>
      <img src={url} alt='Minha imagem'/>
    </div>
  );
}

export default App;
