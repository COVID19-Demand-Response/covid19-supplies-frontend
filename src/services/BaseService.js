import React from "react";

export class BaseService {
  static applicationContext = React.createContext({});

  static getAppContext() {
    return this.applicationContext._currentValue;
  }

  static getUserContext() {
    return this.applicationContext._currentValue.userContext;
  }

  static getBaseUrl() {
      return "http://localhost:3000";
  }
}