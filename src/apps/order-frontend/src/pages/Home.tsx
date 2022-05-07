import { FC } from 'react';
import Button from '../components/ui/Button/Button'
import OrderList from '../components/OrderList/OrderList'
import orderCreate from '../api/order/orderCreate';
import './Home.css'

export const Home: FC = () => {
  const handleClickGenerateOrder = () => {
    orderCreate()
  }

  return (
    <div className='home'>
      <div className="generate-orden">
        <Button onClick={handleClickGenerateOrder}>Generar Orden</Button>
      </div>

      <OrderList />

      <div className="food-warehouse">

      </div>

      <div className="order-history">

      </div>

      <div className="plate-list">

      </div>
    </div>
  )
}