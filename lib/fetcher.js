// export default async function Fetcher(...args) {
//   const res = await fetch(...args);

//   return res.json();
// }

export default async function fetcher(...args) {
  try {
    const response = await fetch(...args)

    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
    const data = await response.json()

    if (response.ok) {
      return data
    }

    // Errors
    const error = new Error()
    error.response = response
    error.data = data
    error.message = data.message
    throw error
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message }
    }
    throw error
  }
}
