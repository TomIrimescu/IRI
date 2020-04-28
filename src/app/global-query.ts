import gql from 'graphql-tag';

export const queryProducts = gql`
  query products {
    products {
      name
      category
      description
      price
      id
    }
  }
`;

export const queryProduct = gql`
  query product($id: ID!) {
    product(id: $id) {
      name
      category
      description
      price
      id
    }
  }
`;

export const createProduct = gql`
  mutation createProduct(
    $name: String!
    $category: String!
    $description: String!
    $price: Number!
  ) {
    createProduct(
      input: {
        name: $name
        category: $category
        description: $description
        price: $price
      }
    ) {
      name
      category
      description
      price
      id
    }
  }
`;

export const updateProduct = gql`
  mutation updateProduct(
    $id: ID!
    $name: String!
    $category: String!
    $description: String!
    $price: String!
  ) {
    updateProduct(
        id: $id
        input: {
          name: $name
          category: $category
          description: $description
          price: $price
        }
    ) {
      id
      name
      category
      description
      price
    }
  }
`;

export const deleteProduct = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
