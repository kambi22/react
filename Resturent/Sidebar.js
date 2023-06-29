import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faUser, faHome, faRightFromBracket, faList, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import "./Navlink.css"
import { Dropdown } from 'react-bootstrap';


function Sidebar() {

  return (

    <div className='MainSidebar'>
      <div className="Sidebar">
        <ul>
          <li className='home'><a href=""><Link to="/" ><i><FontAwesomeIcon icon={faHome} /></i>Home</Link></a></li>
          <hr className='line' />
          <li><a href=""><Link to="/list" ><i><FontAwesomeIcon icon={faList} ></FontAwesomeIcon></i>List</Link></a></li>
          <li><Link to="/create" ><i><FontAwesomeIcon icon={faCalendarPlus}></FontAwesomeIcon></i>Create</Link></li>
          <hr className='line' />
        </ul>

        <div className="Maindrop ">

          <Dropdown title='dropup' >

            <Dropdown.Toggle  ><i><FontAwesomeIcon icon={faUser} fontSize="20px" /></i> Profile</Dropdown.Toggle>
            <Dropdown.Menu title='topStart' placement='topStart' style={{marginRight: 10}} >
              <Dropdown.Item>
                <Link to="/profile" ><i><FontAwesomeIcon icon={faUser} fontSize="20px" /></i>Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/logout" ><i><FontAwesomeIcon icon={faRightFromBracket} fontSize="20px" /></i>Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>


      </div>
    </div>


  );
}

export default Sidebar;