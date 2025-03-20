import axios from 'axios';
import './App.css'
import { UserCard } from './components/UserCard'
import { UserProfile } from "./types/userProfile";
import { User } from "./types/api/user";
import { useState } from 'react';

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}（${user.username}）`,
          email: user.email,
          address: `${user.address.street}${user.address.street}${user.address.city}`,
        }));
        setUserProfiles(data);
      }
    ).catch(() => {setError(true)}).finally(() => setLoading(false));
  }

  return (
    <>
      {loading ? <p>ローディング中</p> :
      userProfiles.map((user) => (
        <UserCard key={user.id} user={user} />
      ))
      }
      {error && <p>エラーよ</p>}
      <button onClick={onClickFetchUser}>ユーザーとるよ</button>
    </>
  )
}

export default App
