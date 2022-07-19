import { useSelector } from 'react-redux'
import { UserDataContainer } from '../components/UserDataContainer'
import { Loading } from '../components/Loading'

export const UserData = () => {

  const { userNameList } = useSelector(store => store.userData)




  return (
    <>
      {
        userNameList.length > 0 ?
          <>
            <UserDataContainer userNameList={userNameList} />
          </>
          :
          <>
            <Loading />
          </>
      }


    </>
  )
}