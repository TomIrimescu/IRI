/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';

export const addUser = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      id
      name
    }
  }`;

export const Users = gql`
  query {
    users{
      id
      name
    }
  }`;

export const removeUser = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
      name
    }
  }`;

export const updateUser = gql`
  mutation updateUser($id: String!, $name: String!) {
    updateUser(id: $id, name: $name) {
      id
      name
    }
  }`;

export const updateProduct = gql`
mutation updateProduct(id: {$id: String!}, input: {$name: String!, $category: String!, $description: String!, $price: Number!}) {
  updateProduct(id: $id, name: $name, category: $category, description: $description, price: $price) {
    id
    name
    category
    description
    price
  }
}`;
