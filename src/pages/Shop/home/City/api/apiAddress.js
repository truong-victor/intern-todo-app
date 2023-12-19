export async function getCities(){
    const endpoint = "https://vapi.vnappmob.com/api/province";
    try {
        const response = await fetch(endpoint);
        const result = await response.json();
        return result;
      } catch (error) {
        throw { message: "Network error", error };
      }
}

export async function getDistricts(province_id){
    const endpoint = `https://vapi.vnappmob.com/api/province/district/${province_id}`;
   try {
        const response = await fetch(endpoint);
        const result = await response.json();
        return result;
      } catch (error) {
        throw { message: "Network error", error };
      }
}