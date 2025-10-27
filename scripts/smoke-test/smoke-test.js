import { url } from '../../data/url.js';
import { smokeTest } from '../../type/type.js';
import { dataCheck } from '../../check/check.js';
import { productsRequest } from '../../request/request.js';

export const options = smokeTest;
export default function(){
    let res = productsRequest(url.allProducts+'/1'); //It retuns json body
    dataCheck(res);
}