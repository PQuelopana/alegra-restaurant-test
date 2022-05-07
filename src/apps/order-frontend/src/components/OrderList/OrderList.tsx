import { FC, useRef, useState } from 'react';
import socketIOClient, { Socket } from 'socket.io-client'
import orderGetList from '../../api/order/orderGetList';
import useOnMounted from '../../hooks/useOnMounted';
import useOnUnmounted from '../../hooks/useOnUnmounted';


const OrderList: FC = () => {
  const socket = useRef<Socket>()
  const [orders, setOrders] = useState<any[]>([])
  
  const connectSocket = (): void => {
    socket.current = socketIOClient('http://127.0.0.1:5000', {
      transports: ['websocket']
    })
  }

  const getInitialOrders = async () => {
    const initialOrders = await orderGetList()

    setOrders(initialOrders)
  }

  const subscribeOnNewOrderCreated = () => {
    socket.current?.on('new-order-created', (order) => {
      setOrders((orders) => orders.concat(order))
    })
  }

  useOnMounted(() => {
    connectSocket()
    getInitialOrders()
    subscribeOnNewOrderCreated()
  })

  useOnUnmounted(() => {
    if (socket.current?.active) socket.current?.disconnect()
  })

  return (
    <div className='order-list'>
      <h2>
        OrderList
      </h2>

      <div>
        {
          orders.map((order: any) => (
            <div key={order.id}>
              <span>id - {order.id}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OrderList
