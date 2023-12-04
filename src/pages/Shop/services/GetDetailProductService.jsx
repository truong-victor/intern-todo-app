import { BaseService } from "../../../@core/services/BaseService";
class GetDetailProductService extends BaseService {}

export const getDetailProductService = new GetDetailProductService(
  "api/v1/public/product"
);
