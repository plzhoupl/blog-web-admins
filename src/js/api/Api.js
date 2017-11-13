import User from '../User'
import Sha1 from '../utils/Sha1.js'

export default class Api {

  static domain () {
    // return 'www.zhoupeili.cn:8080/';
    return 'localhost:8080/admin'
  }

  static protocol () {
    return 'http'
  }

  static authHeaders (str, date) {
    let headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
    let sha = Sha1.hex_sha1(str)
    console.log(str)
    headers.timestamp = date
    headers.sign = sha
    let user = User.loadUser()
    if (user !== null) {
      headers.id = user.id
      headers.token = user.token
    }
    return headers
  }

  static url () {
    return this.protocol() + '://' + this.domain()
  }

  static request (method = 'GET', url = '', callback = null, data = {}, params = {}) {
    let time = new Date().getTime()
    axios.request({
      url: url,
      method: method,
      headers: this.authHeaders(method + url + time, time),
      data: data,
      params: params,
    }).then((response) => {
      console.log(response)
      if (callback instanceof Function) {
        callback(response)
      }
    }).catch((error) => {
      if (error.response && (error.response.status === 401)) {
        window.localStorage.removeItem('user')
        window.router.push({name: 'login'})
      }
      callback(error.response)
    })

  }

}

