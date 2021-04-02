/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      first_name
      last_name
      is_active
      primary_phone
      secondary_phone
      email
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      first_name
      last_name
      is_active
      primary_phone
      secondary_phone
      email
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      first_name
      last_name
      is_active
      primary_phone
      secondary_phone
      email
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      name
      is_active
      customer_phone
      customer_url
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Contacts {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      is_active
      customer_phone
      customer_url
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Contacts {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      is_active
      customer_phone
      customer_url
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Contacts {
        nextToken
        startedAt
      }
    }
  }
`;
export const createKey = /* GraphQL */ `
  mutation CreateKey(
    $input: CreateKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    createKey(input: $input, condition: $condition) {
      id
      key
      softwareID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateKey = /* GraphQL */ `
  mutation UpdateKey(
    $input: UpdateKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    updateKey(input: $input, condition: $condition) {
      id
      key
      softwareID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteKey = /* GraphQL */ `
  mutation DeleteKey(
    $input: DeleteKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    deleteKey(input: $input, condition: $condition) {
      id
      key
      softwareID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSoftware = /* GraphQL */ `
  mutation CreateSoftware(
    $input: CreateSoftwareInput!
    $condition: ModelSoftwareConditionInput
  ) {
    createSoftware(input: $input, condition: $condition) {
      id
      title
      initial_purchase_date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Keys {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateSoftware = /* GraphQL */ `
  mutation UpdateSoftware(
    $input: UpdateSoftwareInput!
    $condition: ModelSoftwareConditionInput
  ) {
    updateSoftware(input: $input, condition: $condition) {
      id
      title
      initial_purchase_date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Keys {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteSoftware = /* GraphQL */ `
  mutation DeleteSoftware(
    $input: DeleteSoftwareInput!
    $condition: ModelSoftwareConditionInput
  ) {
    deleteSoftware(input: $input, condition: $condition) {
      id
      title
      initial_purchase_date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Keys {
        nextToken
        startedAt
      }
    }
  }
`;
