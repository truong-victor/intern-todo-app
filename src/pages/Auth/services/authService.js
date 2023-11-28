import { BaseService } from "../../../@core/services/BaseService";

class AuthService extends BaseService {
  register = (data) => {
    const endpoint = `${this.BASE_URL}/api/v1/user/register`;
    return this.request.post(endpoint, data);
  };

  login = (data) => {
    const endpoint = `${this.BASE_URL}/api/v1/user/login`;
    return this.request.post(endpoint, data);
  };

  providerApi = async (token) => {
    const endpoint1 = "https://nguyencongclone.onrender.com/api/v1/user/me";
    try {
      const response = await fetch(endpoint1, {
        method: "GET",
        headers: {
          "X-access-token": token, 
        },
      });
      const result = await response.json();
      console.log(result.data); // In ra nội dung response
      
      if (!result.success) {
        throw result;
      }

      return result; 
    } catch (err) {
      console.error(err); // In ra lỗi nếu có
      throw { message: err?.msg, status: err?.status };
    }
  }; 

  getProducts = async (token, page = 1, pageSize = 10) => {
    const endpoint = `https://nguyencongclone.onrender.com/api/v1/admin/products?page=${page}&pageSize=${pageSize}`;
    try {
      const response = await this.request.get(endpoint, { 'x-access-token': token });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  

}  

export const authService = new AuthService();
