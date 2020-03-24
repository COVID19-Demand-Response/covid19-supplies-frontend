import { BaseService } from "./BaseService";
import { RestService } from "./RestService";
import { Subject } from 'rxjs';

export class SupplyRequestService extends BaseService {

  static createSupplyRequest(supplyReqest) {
    let responseSubject = new Subject();
    RestService.put("supplyRequests/add", supplyReqest).subscribe(resp => {
      responseSubject.next(resp);
    });

    return responseSubject;
  } 

  static updateSupplyRequest(supplyReqest) {
    let responseSubject = new Subject();
    RestService.post("supplyRequests/update", supplyReqest).subscribe(resp => {
      responseSubject.next(resp);
    });

    return responseSubject;
  }

  static deleteSupplyRequest(supplyReqestId) {
    let responseSubject = new Subject();
    RestService.post("supplyRequests/delete", supplyReqestId).subscribe(resp => {
      responseSubject.next(resp);
    });

    return responseSubject;
  }

  static viewSupplyRequest(supplyReqestId) {
    let responseSubject = new Subject();
    RestService.get("supplyRequests/view", supplyReqestId).subscribe(resp => {
      responseSubject.next(resp);
    });

    return responseSubject;
  }

  static search(criteria) {
    let responseSubject = new Subject();
    RestService.post("supplyRequests/search", criteria).subscribe(resp => {
      responseSubject.next(resp);
    });

    return responseSubject;
  }
}