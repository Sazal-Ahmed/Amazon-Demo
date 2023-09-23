import { NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <section className="flex justify-between shadow-md px-10 py-6 mb-4">
                <div><h1 className=" font-bold text-xl text-red-600">Amazon</h1></div>
                <nav>
                    <ul className="flex gap-5 font-medium">
                        <NavLink to="/" className={({isActive, isPending}) => isPending ? 'pending' : isActive? 'underline' :''}
                        >Home</NavLink>
                        <NavLink to="/products" className={({isActive, isPending}) => isPending ? 'pending' : isActive? 'underline' :''}
                        >Products</NavLink>
                        <NavLink to="/dashboard" className={({isActive, isPending}) => isPending ? 'pending' : isActive? 'underline' :''}
                        >Dashboard</NavLink>
                        
                    </ul>
                </nav>

            </section>
        </div>
    );
};

export default Header;