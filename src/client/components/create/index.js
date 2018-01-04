import React, { Component } from 'react';
import { Input, Checkbox, Button } from '../../elements';
import { connect } from 'react-redux';
import { createProduct } from "../../actions/products";
import productValidate from '../../../utils/validators/productValidator';

@connect(null, { createProduct })
export default class Create extends Component {
  state = {
    name: '',
    red: false,
    green: false,
    blue: false,
    isLoading: false,
    errors: {}
  };

  handleChange = e => {
    this.setState({ [ e.target.name ]: e.target.value });
  };

  handleCheck = name => {
    this.setState({ [ name ]: !this.state[ name ] });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ errors: {} });
    const color = [];
    const { name, red, green, blue } = this.state;
    if (red) color.push('red');
    if (green) color.push('green');
    if (blue) color.push('blue');

    const { isValid, errors } = productValidate({ name, color });

    if (!isValid) {
      this.setState({ errors });
    } else {
      this.setState({ isLoading: true, errors: {} });
      this.props.createProduct({ name, color })
        .then(res => {
          this.setState({ isLoading: false });
          this.props.history.push('/');
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { name, red, green, blue, errors, isLoading } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Input name="name" value={name} title="Name" placeholder="Name" onChange={this.handleChange}
                 error={errors.name}/>
          <div className="checkbox-group">
            <Checkbox name="red" value={red} title="Red" check={this.handleCheck}/>
            <Checkbox name="green" value={green} title="Green" check={this.handleCheck}/>
            <Checkbox name="blue" value={blue} title="Blue" check={this.handleCheck}/>
            {errors.color && <span className="error">Invalid color!</span>}
          </div>

          <Button type="primary" isFetching={isLoading} title="Save" className="margin-top-24"/>
        </form>
      </div>
    );
  }
}