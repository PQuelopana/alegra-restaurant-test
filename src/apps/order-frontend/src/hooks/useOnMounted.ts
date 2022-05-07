import { useEffect } from 'react';

const useOnMounted = (callBack: Function) => {
  useEffect(() => {
    callBack()
  }, [])
}

export default useOnMounted
