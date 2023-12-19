export const getApi = async (token) => {
    try {
      const response = await fetch("https://nguyencongclone.onrender.com/api/v1/user/me", {
        method: "GET",
        headers: {
          "X-access-token" : token,
        }
      });
      const result = await response.json();
      if (!result.success) {
        throw result;
      }
      console.log(result)
      return result;
    } catch (err) {
      throw { message: err?.msg, status: err?.status };
    }
  };