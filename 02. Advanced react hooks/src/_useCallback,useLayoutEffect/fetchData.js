export function fetchData(id) {
  return window
    .fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "GET",
    })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(
          new Error(`Id should be 0>1<=100, you entered ${id}`)
        );
      }
      return res.json();
    });
}
