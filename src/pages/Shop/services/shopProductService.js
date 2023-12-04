import { BaseService } from "../../../@core/services/BaseService";

class ShopProductService extends BaseService {}

export const shopProductService = new ShopProductService('api/v1/public/product');
