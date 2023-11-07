const register = async (data) => {
  try {
    const response = await fetch("url", {
      method: "POST",
      body: JSON.stringify(data),
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
