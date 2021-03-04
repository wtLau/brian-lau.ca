// export default async function Fetcher(...args) {
//   const res = await fetch(...args);

//   return res.json();
// }


export default async function Fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}