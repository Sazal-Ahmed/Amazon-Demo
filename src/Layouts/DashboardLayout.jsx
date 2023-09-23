import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex">
            <div className="w-[20%] border-2  h-screen">
                <ul className="text-center">
                    <li className="bg-rose-400 mb-3 p-2 md:p-4"><Link to='/dashboard'>Dashboard</Link></li>
                    <li className="bg-rose-400 mb-3 p-4"><Link to='/dashboard/profile'>Profile</Link></li>
                    <li className="bg-rose-400 p-4"><Link to='/dashboard/editprofile'>Edit Profile</Link></li>
                </ul>
            </div>

            <div className="w-[80%] text-center">
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashboardLayout;