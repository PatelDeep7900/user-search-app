import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserTypeList from './pages/UserTypeList'
import UserDetailPage from './pages/UserDetailPage'


function App() {

  return (
  <Routes>
    <Route path='/users' element={ <UserTypeList/>}/>
    <Route path='/users/:id' element={<UserDetailPage/>}/>
  </Routes>
  )
}

export default App
