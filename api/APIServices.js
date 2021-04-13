import { get, post, put, del, patch } from ".";

class APIServices {
  url;
  name;
  data = [];
  success = false;

  constructor(url, name) {
    this.url = url;
    this.name = name;
  }
  getURL(id) {
    return !!id ? `/${this.url}/${id}` : `/${this.url}`;
  }

  async get() {
    await get({ url: this.url })
      .then((response) => {
        if (response.data?.result) {
          this.data = response.data;
          this.success = true;
        } else {
          return Promise.reject(response.data);
        }
      })
      .catch((e) => {});
    return { data: this.data, success: this.success };
  }

  async post(formData) {
    await post({ url: this.url, data: formData })
      .then((response) => {
        if (response.data?.result) {
          this.data = response.data;
          this.success = true;
        } else {
          this.data = response?.data;
        }
      })
      .catch((e) => {
        this.data = e.response?.data?.message;
      });
    return { data: this.data, success: this.success };
  }

  async put(id, formData) {
    await put({ url: this.getURL(id), data: formData })
      .then((response) => {
        if (response.data?.result) {
          this.data = response.data;
          this.success = true;
        } else {
          return Promise.reject(response.data);
        }
      })
      .catch((e) => {});
    return { data: this.data, success: this.success };
  }

  async patch(id, formData) {
    await patch({ url: this.getURL(id), data: formData })
      .then((response) => {
        if (response.data?.result) {
          this.success = true;
          this.data = response.data;
        } else {
          return Promise.reject(response.data);
        }
      })
      .catch((e) => {});
    return { data: this.data, success: this.success };
  }

  async delete(id) {
    await del(this.getURL(id))
      .then((response) => {
        if (response.data?.result) {
          this.success = true;
          this.data = response.data;
        } else {
          return Promise.reject(response.data);
        }
      })
      .catch((e) => {});
    return { data: this.data, success: this.success };
  }
}

export default APIServices;
