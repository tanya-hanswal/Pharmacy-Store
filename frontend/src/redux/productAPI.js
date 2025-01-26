/* eslint-disable no-async-promise-executor */
export function fetchProductsById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/medicine/" + id);
    const data = await response.json();
    resolve({ data });
  });
}
