import { useEffect, useState } from 'react';
import classes from './AvailableGoods.module.css'
import Card from '../UI/Card';
import GoodItem from './GoodItem/GoodItem';



const AvailableGoods = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
		const fetchGoods = async () => {
			const response = await fetch(
				'https://react-http-516cc-default-rtdb.firebaseio.com/goods.json'
			);

			const responseData = await response.json();

			const loadedGoods = [];

			for (const key in responseData) {
				loadedGoods.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
      }
      
      setGoods(loadedGoods);
    }
    fetchGoods();
  }, []);
  
    const goodsList = goods.map((good) => (
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
        <ul>{goodsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableGoods;