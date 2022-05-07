const fetch = async (url: string, options?: RequestInit): Promise<any> => {
  const response = await fetch(url, options)

  return (await response.json())
}

export default fetch
