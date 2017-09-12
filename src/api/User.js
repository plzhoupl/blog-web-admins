/**
 * Created by chenshengyu on 2017/9/11.
 */


export default class Demo {
  static isLogin () {
    return this.loadUser() !== null && this.loadUser() !== undefined
  }

  static saveUser (user) {
    let storage = window.localStorage
    storage.setItem('user', JSON.stringify(user))
  }

  static loadUser () {
    let user = window.localStorage.getItem('user')
    if (user === undefined || user === null) {
      return null
    }
    return JSON.parse(user)
  }

  static checkLogin () {
    if (!this.isLogin) {
      this.toLogin();
    }

  }

  static relogin () {
    this.logout()
    this.toLogin()
  }

  static logout () {
    window.localStorage.removeItem('user')
  }

  static toLogin () {
    window.router.push({name: 'login'})
  }
}
