import classes from './AvailableGoods.module.css'
import Card from '../UI/Card';
import GoodItem from './GoodItem/GoodItem';
import { useState, useEffect } from 'react';



const AvailableGoods = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchGoods = async () => {
      const response = await fetch('https://react-http-516cc-default-rtdb.firebaseio.com/goods.json');

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const responseData = await response.json();
      console.log(responseData)

      const loadedGoods = [];

      for (const key in responseData) {
        loadedGoods.push({
          id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
      };
      console.log(loadedGoods);
      setGoods(loadedGoods);
      setIsLoading(false);
    }
    fetchGoods().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    })
  });

  if (httpError) {
    return (
      <section className={classes.GoodsError}>
        {httpError}
      </section>
    )
  }
 

  const goodsList = goods.map((good) =>  (
    <GoodItem 
      id={good.id}
      key={good.id} 
      name={good.name} 
      description={good.description} 
      price={good.price}
      />
  ));

  return (
    <section className={classes.goods}>
      <Card>
        <ul>{!isLoading && goodsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableGoods;