import { NavLink, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="w-96 mx-auto p-10 space-y-10">
      <div className="flex items-center space-x-5 text-gray-900 font-bold">
        <NavLink to="" className={({isActive})=>((isActive)?"bg-white text-red-700":"bg-white text-gray-900")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({isActive})=>((isActive)?"bg-white text-red-700":"bg-white text-gray-900")}>
          About
        </NavLink>
        <NavLink to="/products" className={({isActive})=>((isActive)?"bg-white text-red-700":"bg-white text-gray-900")}>
          Products
        </NavLink>
        <NavLink to="/login" className={({isActive})=>((isActive)?"bg-white text-red-700":"bg-white text-gray-900")}>
          Login
        </NavLink>
      </div>
      {/*use Outlet here*/}
      <Outlet />  {/*  show items element  */}
    </div>
  );
}

export default App;
