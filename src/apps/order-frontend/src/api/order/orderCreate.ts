import axios from 'axios'
import { v4 } from 'uuid'
import { urlApiOrder } from './index';

const orderCreate = (): void => {
  const id = v4()

  axios.post(urlApiOrder, { id })
    .then((res) => console.log(res.data))
    .catch((error) => {
      throw error
    })
}

export default orderCreate
