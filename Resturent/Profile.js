import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faUser, faHome, faRightFromBracket, faList, faCalendarPlus, faCircleUser, faPlus, faG, faSpaghettiMonsterFlying, faGear } from '@fortawesome/free-solid-svg-icons';
import "./Navlink.css"
import { Card, Dropdown } from 'react-bootstrap';


function Profile(props) {
 let name= localStorage.getItem('name')
 let email= localStorage.getItem('email')
 

  return (

    <div className='MainProfile'>
      <Card className='shadow w-100 h-100 procard'    >
        <Card.Header className='text-center pt-4 pb-4'><h5>Person 1</h5></Card.Header>
        <Card.Body>
          <Card.Text className='text-center text'><FontAwesomeIcon  icon={faCircleUser} fontSize='70px' /><br />
          <span style={{fontSize:'20px'}}>{name}</span><br />
          <span style={{fontSize:'15px'}}>{email}</span>
          
          </Card.Text>

          <div  className='profooter'>
            
             <span><FontAwesomeIcon className='proicon' icon={faPlus}></FontAwesomeIcon>Add</span><hr />
             <span><FontAwesomeIcon className='proicon' icon={faG}></FontAwesomeIcon>Manage goggle account</span><hr />
             <span><FontAwesomeIcon className='proicon' icon={faGear}></FontAwesomeIcon>Setting</span><hr />
             <span ><FontAwesomeIcon className='proicon' icon={faRightFromBracket}></FontAwesomeIcon><Link to='/logout'>Logout</Link></span>
              
            
          </div>
        </Card.Body>
      </Card>
        


      </div>
  


  );
}

export default Profile;