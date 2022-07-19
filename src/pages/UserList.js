import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { singleuserdata } from "../reducer/user"
import { useParams } from 'react-router-dom'
import { SingleUserDetail } from "../components/SingleUserDetail"
import { Loading } from "./Loading"


export const UserList = () => {
  const { singleUserData } = useSelector(store => store.userData)
  const dispatch = useDispatch()
  const { id } = useParams()


  useEffect(() => {
    dispatch(singleuserdata(id))
  }, [])



  return (
    <>
      {
        singleUserData ? <>
          <SingleUserDetail singleUserData={singleUserData} />
        </> :
          <>
            <Loading/>
          </>
      }
    </>
  )
}