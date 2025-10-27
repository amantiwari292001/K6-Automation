import http from'k6/http';

export function productsRequest(url){
    return http.get(url);
}