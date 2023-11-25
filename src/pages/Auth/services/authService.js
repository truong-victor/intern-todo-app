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
}





export const authService = new AuthService();
