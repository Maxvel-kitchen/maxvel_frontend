function Api() {
  const baseUrl = "http://92.63.106.189/api";
  function makePromise(url, method, body) {
    return fetch(`${baseUrl}${url}`, {
      method: `${method}`,
      headers: { "Content-Type": "application/json" },
      body: body,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export default Api;
