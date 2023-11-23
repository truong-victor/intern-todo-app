import { request } from "../../../../../@core/services/BaseService";
const {get} = {request}
const getProductListApi = 'http://localhost:8888/api/v1/admin/product?pageSize=3&page=1';
const getProductList = get(getProductListApi,)