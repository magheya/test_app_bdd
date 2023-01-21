import { Products } from './Product';
import contents from './ProductContent';
import './Products.css';

function ProductCard() {
    return(
        <div>
          <h2 className='ProductSection'>Grab the best deal on Smartphones</h2>
           <div className='App'>
               {contents.map(contents => (
                   <Products 
                       key={contents.id}
                       image={contents.image}
                       name={contents.name}
                       price={contents.price}
                       totalSales={contents.totalSales}
                       //oldprice={contents.timeLeft}
                   />
               ))}
           </div>
        </div>
    )
}

export default ProductCard;