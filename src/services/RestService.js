import axios from "axios";
import { from } from "rxjs";
import { BaseService } from './BaseService';

export class RestService extends BaseService {
  
  static get(url, options) {
    if (!options || !options.absolute) {
      url = this.getBaseUrl() + "/" + url;
    }
    return from(
      axios.get(url).then(res => {
        return res.data;
      }).catch(err => {
        return err;
      })
    );
  }

  static put(url, options) {
    if (!options || !options.absolute) {
      url = this.getBaseUrl() + "/" + url;
    }
    return from(
      axios.put(url, options).then(res => {
        return res.data;
      }).catch(err => {
        return err;
      })
    );
  }

  static post(url, options) {
    if (!options || !options.absolute) {
      url = this.getBaseUrl() + "/" + url;
    }
    return from(
      axios.post(url, options).then(res => {
        return res.data;
      }).catch(err => {
        return err;
      })
    );
  }

  static add(url, options) {
    if (!options || !options.absolute) {
      url = this.getBaseUrl() + "/" + url;
    }
    return from(
      axios.put(url, options).then(res => {
        return res.data;
      }).catch(err => {
        return err;
      })
    );
  }

  static update(url, options) {
    if (!options || !options.absolute) {
      url = this.getBaseUrl() + "/" + url;
    }
    return from(
      axios.post(url, options).then(res => {
        return res.data;
      }).catch(err => {
        return err;
      })
    );
  }

  static delete(url, options) {
    if (!options || !options.absolute) {
      url = this.getBaseUrl() + "/" + url;
    }
    return from(
      axios.delete(url, { data: options }).then(res => {
        return res.data;
      }).catch(err => {
        return err;
      })
    );
  }
}

export default RestService;
