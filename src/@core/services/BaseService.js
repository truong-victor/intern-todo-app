import queryString from "query-string";

export class BaseService {
  BASE_URL =
    process.env.NODE_ENV === "development"
      ? "https://nguyencongclone.onrender.com"
      : "";
  BASE_ENDPOINT = "";
  constructor(endpoint) {
    this.BASE_ENDPOINT = endpoint ?? "";
  }

  getToken = () => {
    const token = sessionStorage.getItem("beep");
    return token ?? "";
  };

  responseInterceptor = (result, status) => {
    if (status === 403 || status === 401) {
      //user not auth
      window.location.assign("/404");
    }

    if (!result.success) {
      throw { message: result?.message ?? "API error", data: result };
    }
    return result;
  };

  request = {
    get: async (endpoint, headers, config, data) => {
      const isData = data ? { body: JSON.stringify(data) } : {};
      try {
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "x-access-token": this.getToken(),
            ...headers,
          },
          ...isData,
          ...config,
        });
        const result = await response.json();

        return this.responseInterceptor(result, response?.status);
      } catch (error) {
        throw { message: "Network error", error };
      }
    },

    post: async (endpoint, data, config) => {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "x-access-token": this.getToken(),
            ...config,
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        return this.responseInterceptor(result, response?.status);
      } catch (error) {
        throw { message: "Network error", error };
      }
    },

    put: async (endpoint, data, config) => {
      try {
        const response = await fetch(endpoint, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            "x-access-token": this.getToken(),
            ...config,
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        return this.responseInterceptor(result, response?.status);
      } catch (error) {
        throw { message: "Network error", error };
      }
    },

    patch: async (endpoint, data, config) => {
      try {
        const response = await fetch(endpoint, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            "x-access-token": this.getToken(),
            ...config,
          },
          body: JSON.stringify(data),
        });
        return this.responseInterceptor(result, response?.status);
      } catch (error) {
        throw { message: "Network error", error };
      }
    },

    delete: async (endpoint, config, data) => {
      try {
        const response = await fetch(endpoint, {
          method: "DELETE",
          headers: {
            "x-access-token": this.getToken(),
            ...config,
          },
        });
        const result = await response.json();
        return this.responseInterceptor(result, response?.status);
      } catch (error) {
        throw { message: "Network error", error };
      }
    },
  };

  search = async ({ params, header }) => {
    const convertParams = queryString.stringify(
      params ?? { page: 1, pageSize: 10 }
    );
    const endpoint = `${this.BASE_URL}/${this.BASE_ENDPOINT}/search?${convertParams}`;
    return this.request.get(endpoint, header);
  };

  find = async (id, config) => {
    const endpoint = `${this.BASE_URL}/${this.BASE_ENDPOINT}/${id}`;
    return this.request.get(endpoint, {}, config);
  };

  remove = async (id, config) => {
    const endpoint = `${this.BASE_URL}/${this.BASE_ENDPOINT}/${id}`;
    return this.request.delete(endpoint, config);
  };

  save = async (data, config) => {
    const endpoint = `${this.BASE_URL}/${this.BASE_ENDPOINT}`;
    if (data?.id) {
      return this.request.put(endpoint, data, config);
    }
    return this.request.post(endpoint, data, config);
  };

  update = async (data, config) => {
    const endpoint = `${this.BASE_URL}/${this.BASE_ENDPOINT}`;
    return this.request.patch(endpoint, data, config);
  };
}
