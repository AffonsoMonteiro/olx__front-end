import Cookies from 'js-cookie'

export function isLogged() {
    let token = Cookies.get('token')
    return (token) ? true : false
}

export function doLogin(token, remenberPassword = false) {
    if(remenberPassword) {
        Cookies.set('token', token, { expires: 999 })
    } else {
        Cookies.set('token', token)
    }
}