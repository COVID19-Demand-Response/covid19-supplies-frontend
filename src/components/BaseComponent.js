import React from "react";
import { BaseService } from "../services/BaseService";
import { Subject } from "rxjs";

export class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
    this.state._appContext = BaseService.getAppContext();
  }

  componentDidMount() {
  }

}
