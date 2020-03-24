import { BaseService } from "./BaseService";
import { RestService } from "./RestService";
import { Subject } from 'rxjs';

export class InventoryService extends BaseService {
  
  static createInventory(inventory) {
    let responseSubject = new Subject();
    RestService.put("inventory/add", inventory).subscribe(resp => {
      responseSubject.next(resp);
    });

    return responseSubject;
  } 

  static updateInventory(inventory) {
    let responseSubject = new Subject();
    RestService.post("inventory/update", inventory).subscribe(resp => {
      responseSubject.next(resp);
    });

    return responseSubject;
  }

  static deleteInventory(inventoryId) {
    let responseSubject = new Subject();
    RestService.post("inventory/delete", inventoryId).subscribe(resp => {
      responseSubject.next(resp);
    });

    return responseSubject;
  }

  static viewInventory(inventoryId) {
    let responseSubject = new Subject();
    RestService.get("inventory/view", inventoryId).subscribe(resp => {
      responseSubject.next(resp);
    });

    return responseSubject;
  }
}