import { useNavigate } from 'react-router-dom'


export const UserDataContainer = ({userNameList}) => {

 const navigate = useNavigate()

 return (
  <>
   <div className="container">
    <table className="table" style={{ width: "70%" }} >
     <thead>
      <tr>
       <th scope="col">id</th>
       <th scope="col">Image</th>
       <th scope="col">Name</th>
      </tr>
     </thead>
     <tbody>
      {
       userNameList.map((val) => {
        return (
         <>
          <tr onClick={() => {
           navigate(`/user/data/${val.id}`)
          }} style={{ cursor: 'pointer' }}>
           <th scope="row">{val.id}</th>
           <th><img src={val.avatar} style={{ width: '30px' }} /></th>
           <td>{val.first_name} {val.last_name}</td>
          </tr>
         </>
        )
       })
      }
     </tbody>
    </table>
   </div>
  </>
 )
}