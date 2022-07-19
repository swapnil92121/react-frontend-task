import { Link } from 'react-router-dom'



export const SingleUserDetail = ({ singleUserData }) => {



 return (
  <>
   <div className="container">
    <Link to={'/'} style={{ textDecoration: 'none' }}><button style={{ margin: '2%' }}>back</button></Link><br />
    <img src={singleUserData.avatar} style={{ width: '60px' }} />
    <h4><label>Name</label> : {singleUserData.first_name} {singleUserData.last_name}</h4>
    <h4><label>Email</label> : {singleUserData.email}</h4>
   </div>
  </>
 )
}