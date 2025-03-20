import './App.css'
import { UserCard } from './components/UserCard'
import { UserProfile } from "./types/userProfile";

const user: UserProfile = {
  name: 'あああ',
  email: 'aaa.gmail.com',
  address: 'あ',
}

function App() {

  return (
    <>
      <UserCard user={user} />
    </>
  )
}

export default App
