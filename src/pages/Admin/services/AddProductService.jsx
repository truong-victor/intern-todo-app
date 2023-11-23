import { BaseService } from "../../../@core/services/BaseService";

class AddProductService extends BaseService {
  addProduct = (data) => {
    const endpoint = `http://localhost:8888/api/v1/admin/product`;
    return this.request.post(endpoint, data);
  };

  uploadImage = (data) => {
    const endpoint = `${this.BASE_URL}/api/v1/file`;
    return this.request.post(endpoint, data, {
      "Content-type": "multipart/form-data",
      accept: "*/*",
    });
  };
}

export const addProductService = new AddProductService();
