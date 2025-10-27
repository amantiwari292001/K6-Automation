import {check} from 'k6';

export function dataCheck(res){
    return check(res, {
        '200 status': (res) => res.status == 200
    });
}

