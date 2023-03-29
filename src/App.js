import './App.css';
import React, {useState, useEffect} from "react";
import List from './components/List';
import Details from './components/Details'

const listURL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users';
const dataURL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

function App() {

  const [list, setList] = useState([]);
  const [info , setInfo ] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    error: undefined
  })

  useEffect(() => {
    const update = async () => {
      setStatus({loading:true});
      console.log('Выполняется загрузка листа');
      try {
            const response = await fetch(`${listURL}.json`, {method: 'GET'});
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            const data = await response.json();
            setList(data);
            setStatus({loading: false});
            console.log('Загрузка листа завершена')
          } catch (e) {
            setStatus({loading: false, e});
            console.log(e);
          }
    };

    update();
  }, []);

  const reciveItem = data => {
    setInfo(data);
    console.log(data);
  }

  return (
    <div className='wrapper'>
      <div className='container'> 
        <List list={list} dataURL={dataURL} sendData={reciveItem}/>
        <Details info={info} />
      </div>
    </div>
  );
}

export default App;
