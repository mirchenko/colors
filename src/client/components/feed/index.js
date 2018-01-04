import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, deleteProduct } from '../../actions/products';
import { Loader } from "../../elements";
import Content from './content';
import Pagination from './pagination';

const mapStateToProps = state => ({ products: state.products });

@connect(mapStateToProps, { fetchProducts, deleteProduct })
export default class Feed extends Component {

  componentDidMount() {
    this.props.fetchProducts({ page: 0, size: 25 });
  }

  changePage = val => {
    this.props.fetchProducts({ page: val, size: 25 });
  };

  render() {
    const { products: { isFetching, data, page }, deleteProduct } = this.props;
    return (
      <div className="container">
        {
          isFetching
            ? <Loader/>
            : [
              <Content key="content" data={data} deleteProduct={deleteProduct}/>,
              <Pagination key="pagination" page={page} changePage={this.changePage}/>
            ]
        }
      </div>
    );
  }
}