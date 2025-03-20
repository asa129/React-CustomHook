import './App.css'
import { UserCard } from './components/UserCard'
import { useAllUsers } from './hooks/useAllUsers';

function App() {
  const { getUsers, userProfiles, loading, error} = useAllUsers();

  const onClickFetchUser = () => {
    getUsers();
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
