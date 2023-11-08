const endpoint = "https://intern-next-api-65tp.vercel.app/api/auth/register";

export const registerApi = async (data) => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (!result.ok) {
      throw result;
    }
    return result;
  } catch (err) {
    throw { message: err?.msg, status: err?.status };
  }
};
