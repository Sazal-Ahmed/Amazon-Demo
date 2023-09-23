/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {

    const { id, title, images, price, stock } = product;
    return (
        <div>
            <div className="w-full h-96 max-w-sm bg-white border border-gray-200 rounded-lg ">
                <img src={images[0]} alt="" className="p-6 rounded-lg h-52 w-full" />
                <div>
                <h5 className="text-2xl font-bold text-center">{title}</h5>
                </div>
                <div className=" flex justify-center gap-4 mt-4">
                    
                    <p className="text-lg font-semibold">Price: ${price}</p>
                    <p className="text-lg font-semibold">Stock: {stock}</p>
                </div>
                <div className="justify-center items-center flex mt-5">
                   <Link to={`/products/${id}`}> <button className="btn bg-green-500 px-4 py-3 rounded-lg">View Details</button></Link>
                </div>
            </div>


        </div>
    );
};

export default ProductCard;