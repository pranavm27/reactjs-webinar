import Cookies from 'universal-cookie';

export default class Auth {
  constructor() {
    let loginStatus = false
  }

  isAuthenticated() {
    const cookies = new Cookies();
    let authenticationCode = cookies.get('authToken');

    if (authenticationCode !== undefined) {
      return authenticationCode;
    } else {
      return false;
    }
  }

  logout() {
    const cookies = new Cookies();
    cookies.set('authToken', '');
    return true
  }
}
