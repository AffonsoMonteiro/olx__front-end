import Cookies from 'js-cookie'

export function isLogged() {
    let token = Cookies.get('token')
    return (token) ? true : false
}