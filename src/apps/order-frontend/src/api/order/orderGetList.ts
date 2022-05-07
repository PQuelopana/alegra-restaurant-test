import axios from 'axios'
import { urlApiOrder } from './index';

const orderGetList = async (): Promise<any[]> => {
  const response = await axios.get(urlApiOrder)

  return response.data
}

export default orderGetList
