
import { Dropdown, Space } from "antd";
import { HiBars4 } from "react-icons/hi2";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Tooltip } from "react-tooltip";
import logo from '../../assets/image/logo.avif'
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, LogOut } = useAuth()
  const navigate=useNavigate()
  const handlelogOut=async()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You wnat LogOut!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout"
    }).then((result) => {
     
      if (result.isConfirmed) {
          LogOut().then(async()=>{
           await navigate('/')
            await  Swal.fire({

                 
                  text: "LogOut Successed",
                  icon: "success"

                });
               
          }).catch(error=>toast.error(error.message))
          
       
      }
    });
}
  const items = [
    {
      key: '1',
      label: (
        <div><NavLink to={'/'}>Home</NavLink></div>
      ),
    },
    {
      key: '2',
      label: (
       user&&(
        <div><NavLink to={'/dashboard'}>DashBoard</NavLink></div>
       )
      ),


    },
    {
      key: '3',
      label: (
        
        <div><NavLink to={'/allProperties'}>All Property</NavLink></div>
      ),


    },
    {
      key: '4',
      label: (
        !user&&(<div><NavLink to={'/login'}>LogIn</NavLink></div>)
        
      
      ),


    },
    


  ];

  return (
    <div className="flex justify-center">
      <div className="navbar bg-base-100 w-11/12 z-20 fixed top-0">
        <div className="navbar-start  ">
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div> */}
          <div className="lg:hidden">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <HiBars4 className="text-xl"></HiBars4>
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="flex items-center">
            <img className="w-20 h-20 hidden md:flex rounded-full" src={logo} alt="" />
            <div className="px-3 py-2  text-xl">Dream Nest Real Estate</div>
          </div>
        </div>
        <div className="navbar-center font-semibold hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul> */}
          {
            items.map((item) => (
              <div key={item.key} className="mx-2">
                {item.label}
              </div>
            ))
          }
        </div>
        <div className="navbar-end">
          {
            user ?
              <div className="flex items-center gap-2">
                <div className="dropdown dropdown-end">
                  <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img id="riyal" className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="userName" />
                    </div>
                  </div>
                  <Tooltip position='left' anchorSelect="#riyal">
                    <h3 className="text-center">{user?.displayName}</h3>
                    <p className="text-center">{user?.email}</p>
                  </Tooltip>
                  {/* <ul
        tabIndex="0"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
        {links2}
      </ul> */}
                </div>

                <div onClick={handlelogOut} className="btn font-bold text-lg bg-blue-300">Log Out</div></div>
              :
              <div><Link className="btn text-lg font-bold bg-blue-300" to='/register'>Sign Up</Link></div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;