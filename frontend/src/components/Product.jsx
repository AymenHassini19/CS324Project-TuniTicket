import {Link} from 'react-router-dom';
import Rating from './ui/rating.jsx';

const Product = ({product}) => {
    return (
        <div
            className="my-3 p-3 rounded-lg bg-white shadow-md transition-transform duration-200 hover:transform hover:translate-y-[-5px] hover:shadow-lg">
            <Link to={`/event/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg transition-opacity duration-300 hover:opacity-90"
                />
            </Link>

            <div className="p-4">
                <Link to={`/event/${product.id}`}
                      className="no-underline text-gray-800 transition-colors duration-300 hover:text-red-500">
                    <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                </Link>

                <div className="my-2">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </div>

                <h3 className="text-xl font-bold text-gray-800">TND {product.price}</h3>
            </div>
        </div>
    );
};

export default Product;