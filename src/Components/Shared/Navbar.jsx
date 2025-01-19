
import { Dropdown, Space } from "antd";
import { HiBars4 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";


const Navbar = () => {
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
            <div><NavLink to={'/login'}>LogIn</NavLink></div>
          ),
         
         
        },
        {
          key: '3',
          label: (
            <div><NavLink to={'/register'}>Regiter</NavLink></div>
          ),
         
         
        },
        {
          key: '4',
          label: (
            <div><NavLink to={'/allProperties'}>All Property</NavLink></div>
          ),
         
         
        },
        {
          key: '5',
          label: (
            <div><NavLink to={'/dashboard'}>DashBoard</NavLink></div>
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
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
          <a className="btn">Button</a>
        </div>
      </div>
        </div>
    );
};

export default Navbar;