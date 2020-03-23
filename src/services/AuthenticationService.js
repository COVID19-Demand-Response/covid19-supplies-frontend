import { BaseService } from "./BaseService";
import { RestService } from "./RestService";
import { Subject } from 'rxjs';

export class AuthenticationService extends BaseService {
  
  static login(loginInfo) {
    let responseSubject = new Subject();
    RestService.post("users/login", loginInfo).subscribe(resp => {
      AuthenticationService.getAppContext().userContext = resp;
      responseSubject.next(resp);
    });

    return responseSubject;
} 

  static logout() {
      
  }
}