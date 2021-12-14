
import { Fragment } from 'react';

import AvailableGoods from './AvailableGoods';
import GoodsSummary from './GoodsSummary';

const Goods = () => {
  return <Fragment>
    <GoodsSummary />
    <AvailableGoods />
  </Fragment>
};

export default Goods;