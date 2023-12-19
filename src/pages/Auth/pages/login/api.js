export const loginApi = async (data) => {
    console.log(data)
      try {
        const response = await fetch("http://localhost:8888/api/v1/user/login", {
          method: "POST",
          body: JSON.stringify(data),
        
          headers: {
            "Content-Type" : "application/json",
          }
        });
        const result = await response.json();
        if (!result.success) {
          throw result;
        }
        return result;
      } catch (err) {
        throw { message: err?.msg, status: err?.status };
      }
    };