import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import axios from 'axios';
import Card from './components/Card';

function App() { 


  const [username, setUsername] = useState("tayfunerbilen");
  const [user, setUser] = useState({});

  const getProfile = async () => {
    try {
      console.log("get profile çalışıyor");
      const response = await axios.get(`https://api.github.com/users/${username}`)
      setUser(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProfile()
  }, []);

  const handleOnChange = (e) => {
    setUsername(e.target.value);

  }

  const handleKey = (e) => {
    if (e.keyCode === 13) {
      getProfile()
    }
  }

  return (
      <div className={`w-[50%] mx-auto container pt-40`}>
        <div className='flex justify-between'>
          <h1 className='text-4xl'>devfinder</h1>
        </div>
        <Input onChange={handleOnChange} onKeyDown={handleKey} />
        <Card user={user} />

      </div>
  );
}

export default App;
