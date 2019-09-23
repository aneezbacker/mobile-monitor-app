import {Injectable} from '@angular/core';

/**
 * Helper class to make backend calls to server
 */
@Injectable({
    providedIn: 'root'
})
export class RestService {
    userInfo = {
        emailId: 'aneezbacker@gmail.com',
        phones: {
            imei1: {phoneName: 'name1', phoneType: 'master'},
            imei2: {phoneName: 'name2', phoneType: 'source'}
        }
    };


    constructor() {
    }

    // TODO: implement this
    getServerData(emailId): any {
        return this.userInfo;
    }

    // TODO: implement this
    saveServerData(emailId, userInfo) {
        this.userInfo = userInfo;
    }
}
