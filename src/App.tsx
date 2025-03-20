import './App.css'
import { UserCard } from './components/UserCard'
import { User } from "./types/user";

function App() {
  const user: User = {
    name: 'あああ',
    username: 'あ',
    email: 'aaa.gmail.com',
  }

  return (
    <>
      <UserCard user={user} />
    </>
  )
}

export default App
