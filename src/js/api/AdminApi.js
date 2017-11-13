/**
 * Created by chenshengyu on 2017/9/11.
 */

import Api from './Api'

export default class AdminApi extends Api {

  static login (params, callback = null) {
    super.request('PUT', this.uri() + '/login', callback, null, params)
  }

  static loadAdmins (callback = null) {
    super.request('GET', this.uri(), callback)

  }

  static changeExport (id, params, callback = null) {
    super.request('PUT', this.uri() + '/' + id + '/export', callback, null, params)
  }

  static sendEmail (params, callback = null) {
    super.request('POST', this.uri() + '/code', callback, null, params)
  }
  static register (params, callback = null) {
    super.request('POST', this.uri() + '/register', callback, null, params)
  }
  static uri () {
    return super.url()
  }
}
