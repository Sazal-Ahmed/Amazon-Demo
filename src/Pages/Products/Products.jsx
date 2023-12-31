import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const Products = () => {

const {products}= useLoaderData();
console.log(products);
    return (
        <div className="grid  md:grid-cols-3 gap-4">
            {
                products.map(product => <ProductCard product={product} key={product.id}></ProductCard>)
            }
        </div>
    );
};

export default Products;