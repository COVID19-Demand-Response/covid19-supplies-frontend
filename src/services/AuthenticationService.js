import { BaseService } from "./BaseService";
import { RestService } from "./RestService";
import { Subject } from 'rxjs';
import axios from "axios";

export class AuthenticationService extends BaseService {
  
  static login(loginInfo) {
    let responseSubject = new Subject();
    RestService.post("users/login", loginInfo).subscribe(resp => {
      AuthenticationService.getAppContext().token = resp.token;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + resp.token;
      responseSubject.next(resp);
    });

    return responseSubject;
  } 

  static logout() {
    AuthenticationService.getAppContext().token = {};
    axios.defaults.headers.common['Authorization'] = null;
  }
}