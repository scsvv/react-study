import React from 'react'
import { Table } from 'semantic-ui-react'
import Form from './Form'
import ProductRow from './ProductRow'


export default function ProductList({
    products,
    onRemoveProduct,
    onAddProduct,
    onEditProduct,
}) {
    return (
      <Table striped>
          <Table.Header>
              <Table.Row>
                  <Table.HeaderCell>Имя</Table.HeaderCell>
                  <Table.HeaderCell>Цена</Table.HeaderCell>
                  <Table.HeaderCell>Количество</Table.HeaderCell>
                  <Table.HeaderCell>Действие</Table.HeaderCell>
              </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              products.map(product => (
                <ProductRow
                  onRemoveProduct={onRemoveProduct}
                  onEditProduct={onEditProduct}
                  key={product.id}
                  product={product}
                />))
            }
              <Form onSubmit={onAddProduct} />
          </Table.Body>
      </Table>
    )
}
