import { useLoaderData } from "react-router-dom";


const Product = () => {
    const product = useLoaderData();
    
    const {title, images, price, stock } = product;

    return (
        <div className="justify-center items-center flex h-screen">
            <div className="w-full h-96 max-w-sm  border border-gray-200 rounded-lg bg-rose-300">
                <img src={images[0]} alt="" className="p-6 rounded-lg h-52 w-full bg-rose-300" />
                <div>
                <h5 className="text-2xl font-bold text-center">{title}</h5>
                </div>
                <div className=" flex justify-center gap-4 mt-4">
                    
                    <p className="text-lg font-semibold">Price: ${price}</p>
                    <p className="text-lg font-semibold">Stock: {stock}</p>
                </div>
                <div className="justify-center items-center flex mt-5">
                 <button className="btn bg-green-500 px-4 py-3 rounded-lg">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;