import React, { Component } from 'react'
import ProductList from './ProductList'

export default class Week1 extends Component {
    state = {
       products: [
           {
               id: '1',
               title: 'IPHONE X',
               price: '800$',
               quantity: '10',
           },
           {
               id: '2',
               title: 'IPhone XS',
               price: '600$',
               quantity: '10',
           },
           {
               id: '3',
               title: 'IPhone Xr',
               price: '900$',
               quantity: '5',
           }
       ],
    };

    removeProduct = id => {
        const { products } = this.state;
        this.setState({
            products: products.filter(product => product.id !== id)
        })
    };

    addProduct = newProduct => {
        const { products } = this.state;
        this.setState({
            products: [
                ...products,
                {
                    id: Math.random().toString(8),
                    ...newProduct
                }
            ]
        })
    };

    editProduct = updatedProduct => {
        const { products } = this.state;
        this.setState({
            products: products.map(product => product.id === updatedProduct.id ? updatedProduct : product)
        })
    };

    render() {
        return (
            <div>
                    <ProductList
                        onAddProduct={this.addProduct}
                        onEditProduct={this.editProduct}
                        onRemoveProduct={this.removeProduct}
                        products={this.state.products}
                    />
            </div>
        )
    }
}
