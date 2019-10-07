export class Utils {

 /**
  * 设置localStrong
  * @param  name 设置localStrong参数名称 
  * @param  content 设置localStrong参数内容
  */
  static setStore(name,content) {
    if (!name) return;
    if (typeof content !== 'string') {
      // tslint:disable-next-line:no-parameter-reassignment
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name,content);
  }

  /**
   * 获取 localStorage的值
   * @param name localStrong的key
   */
  static getStore(name: string) {
    if (!name) return undefined;
    return window.localStorage.getItem(name);
  }

  /**
   * 删除 localStrorage 
   * @param name localStrong的key
   */
  static removeStore(name: string) {
    if (!name) return;
    return window.localStorage.removeItem(name);
  }


}
