import { useEffect } from 'react';

const useOnUnmounted = (callBack: () => void) => {
  useEffect(() => callBack, [])
}

export default useOnUnmounted
