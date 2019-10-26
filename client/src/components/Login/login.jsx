import React, { Component } from 'react'
import { compose } from "redux";
import { graphql } from "@apollo/react-hoc";
import { LOGIN } from "graphqls/index";

export class Login extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                LOGIN
            </div>
        )
    }
}

export default compose(
    graphql(LOGIN, {
      options: props => ({
        
      })
    })
  )(Login);
  
