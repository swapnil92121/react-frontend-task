import { useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { UserData } from './pages/UserData'
import { UserList } from './pages/UserList'
import { useDispatch } from 'react-redux'
import { userList } from './reducer/user'


export const App = () => {
 

 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(userList())
 }, [])


 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route path='/' element={<UserData/>} />
     <Route path='/user/data/:id' element={<UserList/>}/>
    </Routes>
   </BrowserRouter>
  </>
 )
}