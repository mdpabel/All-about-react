function auth(username, password) {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      if (username === "test@test.com" && password === "test@test.com") {
        resolved("Hello " + username);
      } else {
        rejected(new Error("Invalid username or password"));
      }
    }, 2000);
  });
}
export default auth;
