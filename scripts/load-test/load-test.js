import { url } from "../../data/url.js";
import { loadTest } from "../../type/type.js";
import { dataCheck } from "../../check/check.js";
import { productsRequest } from "../../request/request.js";

export const options = loadTest;
export default function(){
    let res = productsRequest(url.allProducts+'/1');
    dataCheck(res);
}