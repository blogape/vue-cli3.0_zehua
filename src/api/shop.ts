import request from '../config/request';
// const api = '/api/account/';

export class Shop {

  static getShopList() {
    return request({
      url: 'http://192.168.1.205:1741/api/lottery/getallandishotlottery?enumvalue=&isAll=false'
    });
  }
} 
