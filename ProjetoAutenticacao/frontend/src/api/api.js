class Api {
  constructor() {
    this.baseURL = "http://localhost:3005";
  }

  async post(url, data) {
    const res = await fetch(`${this.baseURL}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    return result;
  }

  async get(url) {
    const res = await fetch(`${this.baseURL}/${url}`);
    return res.json();
  }
}

export default new Api();
