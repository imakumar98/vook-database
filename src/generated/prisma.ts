import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

enum Permission {
  ADMIN
  USER
  BOOKCREATE
  BOOKUPDATE
  BOOKDELETE
  PERMISSIONUPDATE
}

type Product implements Node {
  id: ID!
  title: String!
  author: String!
  publisher: String!
  className: String!
  subject: String!
  category: String!
  edition: String!
  quantity: Int!
  detail: String!
  description: String
  mrp: Int!
  discount: Int!
  tags: [String!]!
}

"""
A connection to a list of items.
"""
type ProductConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  title: String!
  author: String!
  publisher: String!
  className: String!
  subject: String!
  category: String!
  edition: String!
  quantity: Int!
  detail: String!
  description: String
  mrp: Int!
  discount: Int!
  tags: ProductCreatetagsInput
}

input ProductCreatetagsInput {
  set: [String!]
}

"""
An edge in a connection.
"""
type ProductEdge {
  """
  The item at the end of the edge.
  """
  node: Product!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  publisher_ASC
  publisher_DESC
  className_ASC
  className_DESC
  subject_ASC
  subject_DESC
  category_ASC
  category_DESC
  edition_ASC
  edition_DESC
  quantity_ASC
  quantity_DESC
  detail_ASC
  detail_DESC
  description_ASC
  description_DESC
  mrp_ASC
  mrp_DESC
  discount_ASC
  discount_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductPreviousValues {
  id: ID!
  title: String!
  author: String!
  publisher: String!
  className: String!
  subject: String!
  category: String!
  edition: String!
  quantity: Int!
  detail: String!
  description: String
  mrp: Int!
  discount: Int!
  tags: [String!]!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateInput {
  title: String
  author: String
  publisher: String
  className: String
  subject: String
  category: String
  edition: String
  quantity: Int
  detail: String
  description: String
  mrp: Int
  discount: Int
  tags: ProductUpdatetagsInput
}

input ProductUpdateManyMutationInput {
  title: String
  author: String
  publisher: String
  className: String
  subject: String
  category: String
  edition: String
  quantity: Int
  detail: String
  description: String
  mrp: Int
  discount: Int
  tags: ProductUpdatetagsInput
}

input ProductUpdatetagsInput {
  set: [String!]
}

input ProductWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  title: String
  """
  All values that are not equal to given value.
  """
  title_not: String
  """
  All values that are contained in given list.
  """
  title_in: [String!]
  """
  All values that are not contained in given list.
  """
  title_not_in: [String!]
  """
  All values less than the given value.
  """
  title_lt: String
  """
  All values less than or equal the given value.
  """
  title_lte: String
  """
  All values greater than the given value.
  """
  title_gt: String
  """
  All values greater than or equal the given value.
  """
  title_gte: String
  """
  All values containing the given string.
  """
  title_contains: String
  """
  All values not containing the given string.
  """
  title_not_contains: String
  """
  All values starting with the given string.
  """
  title_starts_with: String
  """
  All values not starting with the given string.
  """
  title_not_starts_with: String
  """
  All values ending with the given string.
  """
  title_ends_with: String
  """
  All values not ending with the given string.
  """
  title_not_ends_with: String
  author: String
  """
  All values that are not equal to given value.
  """
  author_not: String
  """
  All values that are contained in given list.
  """
  author_in: [String!]
  """
  All values that are not contained in given list.
  """
  author_not_in: [String!]
  """
  All values less than the given value.
  """
  author_lt: String
  """
  All values less than or equal the given value.
  """
  author_lte: String
  """
  All values greater than the given value.
  """
  author_gt: String
  """
  All values greater than or equal the given value.
  """
  author_gte: String
  """
  All values containing the given string.
  """
  author_contains: String
  """
  All values not containing the given string.
  """
  author_not_contains: String
  """
  All values starting with the given string.
  """
  author_starts_with: String
  """
  All values not starting with the given string.
  """
  author_not_starts_with: String
  """
  All values ending with the given string.
  """
  author_ends_with: String
  """
  All values not ending with the given string.
  """
  author_not_ends_with: String
  publisher: String
  """
  All values that are not equal to given value.
  """
  publisher_not: String
  """
  All values that are contained in given list.
  """
  publisher_in: [String!]
  """
  All values that are not contained in given list.
  """
  publisher_not_in: [String!]
  """
  All values less than the given value.
  """
  publisher_lt: String
  """
  All values less than or equal the given value.
  """
  publisher_lte: String
  """
  All values greater than the given value.
  """
  publisher_gt: String
  """
  All values greater than or equal the given value.
  """
  publisher_gte: String
  """
  All values containing the given string.
  """
  publisher_contains: String
  """
  All values not containing the given string.
  """
  publisher_not_contains: String
  """
  All values starting with the given string.
  """
  publisher_starts_with: String
  """
  All values not starting with the given string.
  """
  publisher_not_starts_with: String
  """
  All values ending with the given string.
  """
  publisher_ends_with: String
  """
  All values not ending with the given string.
  """
  publisher_not_ends_with: String
  className: String
  """
  All values that are not equal to given value.
  """
  className_not: String
  """
  All values that are contained in given list.
  """
  className_in: [String!]
  """
  All values that are not contained in given list.
  """
  className_not_in: [String!]
  """
  All values less than the given value.
  """
  className_lt: String
  """
  All values less than or equal the given value.
  """
  className_lte: String
  """
  All values greater than the given value.
  """
  className_gt: String
  """
  All values greater than or equal the given value.
  """
  className_gte: String
  """
  All values containing the given string.
  """
  className_contains: String
  """
  All values not containing the given string.
  """
  className_not_contains: String
  """
  All values starting with the given string.
  """
  className_starts_with: String
  """
  All values not starting with the given string.
  """
  className_not_starts_with: String
  """
  All values ending with the given string.
  """
  className_ends_with: String
  """
  All values not ending with the given string.
  """
  className_not_ends_with: String
  subject: String
  """
  All values that are not equal to given value.
  """
  subject_not: String
  """
  All values that are contained in given list.
  """
  subject_in: [String!]
  """
  All values that are not contained in given list.
  """
  subject_not_in: [String!]
  """
  All values less than the given value.
  """
  subject_lt: String
  """
  All values less than or equal the given value.
  """
  subject_lte: String
  """
  All values greater than the given value.
  """
  subject_gt: String
  """
  All values greater than or equal the given value.
  """
  subject_gte: String
  """
  All values containing the given string.
  """
  subject_contains: String
  """
  All values not containing the given string.
  """
  subject_not_contains: String
  """
  All values starting with the given string.
  """
  subject_starts_with: String
  """
  All values not starting with the given string.
  """
  subject_not_starts_with: String
  """
  All values ending with the given string.
  """
  subject_ends_with: String
  """
  All values not ending with the given string.
  """
  subject_not_ends_with: String
  category: String
  """
  All values that are not equal to given value.
  """
  category_not: String
  """
  All values that are contained in given list.
  """
  category_in: [String!]
  """
  All values that are not contained in given list.
  """
  category_not_in: [String!]
  """
  All values less than the given value.
  """
  category_lt: String
  """
  All values less than or equal the given value.
  """
  category_lte: String
  """
  All values greater than the given value.
  """
  category_gt: String
  """
  All values greater than or equal the given value.
  """
  category_gte: String
  """
  All values containing the given string.
  """
  category_contains: String
  """
  All values not containing the given string.
  """
  category_not_contains: String
  """
  All values starting with the given string.
  """
  category_starts_with: String
  """
  All values not starting with the given string.
  """
  category_not_starts_with: String
  """
  All values ending with the given string.
  """
  category_ends_with: String
  """
  All values not ending with the given string.
  """
  category_not_ends_with: String
  edition: String
  """
  All values that are not equal to given value.
  """
  edition_not: String
  """
  All values that are contained in given list.
  """
  edition_in: [String!]
  """
  All values that are not contained in given list.
  """
  edition_not_in: [String!]
  """
  All values less than the given value.
  """
  edition_lt: String
  """
  All values less than or equal the given value.
  """
  edition_lte: String
  """
  All values greater than the given value.
  """
  edition_gt: String
  """
  All values greater than or equal the given value.
  """
  edition_gte: String
  """
  All values containing the given string.
  """
  edition_contains: String
  """
  All values not containing the given string.
  """
  edition_not_contains: String
  """
  All values starting with the given string.
  """
  edition_starts_with: String
  """
  All values not starting with the given string.
  """
  edition_not_starts_with: String
  """
  All values ending with the given string.
  """
  edition_ends_with: String
  """
  All values not ending with the given string.
  """
  edition_not_ends_with: String
  quantity: Int
  """
  All values that are not equal to given value.
  """
  quantity_not: Int
  """
  All values that are contained in given list.
  """
  quantity_in: [Int!]
  """
  All values that are not contained in given list.
  """
  quantity_not_in: [Int!]
  """
  All values less than the given value.
  """
  quantity_lt: Int
  """
  All values less than or equal the given value.
  """
  quantity_lte: Int
  """
  All values greater than the given value.
  """
  quantity_gt: Int
  """
  All values greater than or equal the given value.
  """
  quantity_gte: Int
  detail: String
  """
  All values that are not equal to given value.
  """
  detail_not: String
  """
  All values that are contained in given list.
  """
  detail_in: [String!]
  """
  All values that are not contained in given list.
  """
  detail_not_in: [String!]
  """
  All values less than the given value.
  """
  detail_lt: String
  """
  All values less than or equal the given value.
  """
  detail_lte: String
  """
  All values greater than the given value.
  """
  detail_gt: String
  """
  All values greater than or equal the given value.
  """
  detail_gte: String
  """
  All values containing the given string.
  """
  detail_contains: String
  """
  All values not containing the given string.
  """
  detail_not_contains: String
  """
  All values starting with the given string.
  """
  detail_starts_with: String
  """
  All values not starting with the given string.
  """
  detail_not_starts_with: String
  """
  All values ending with the given string.
  """
  detail_ends_with: String
  """
  All values not ending with the given string.
  """
  detail_not_ends_with: String
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  mrp: Int
  """
  All values that are not equal to given value.
  """
  mrp_not: Int
  """
  All values that are contained in given list.
  """
  mrp_in: [Int!]
  """
  All values that are not contained in given list.
  """
  mrp_not_in: [Int!]
  """
  All values less than the given value.
  """
  mrp_lt: Int
  """
  All values less than or equal the given value.
  """
  mrp_lte: Int
  """
  All values greater than the given value.
  """
  mrp_gt: Int
  """
  All values greater than or equal the given value.
  """
  mrp_gte: Int
  discount: Int
  """
  All values that are not equal to given value.
  """
  discount_not: Int
  """
  All values that are contained in given list.
  """
  discount_in: [Int!]
  """
  All values that are not contained in given list.
  """
  discount_not_in: [Int!]
  """
  All values less than the given value.
  """
  discount_lt: Int
  """
  All values less than or equal the given value.
  """
  discount_lte: Int
  """
  All values greater than the given value.
  """
  discount_gt: Int
  """
  All values greater than or equal the given value.
  """
  discount_gte: Int
}

input ProductWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  number: String
  walletBalance: Int
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: [Permission!]!
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  number: String
  walletBalance: Int
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserCreatepermissionsInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  number_ASC
  number_DESC
  walletBalance_ASC
  walletBalance_DESC
  password_ASC
  password_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  number: String
  walletBalance: Int
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  number: String
  walletBalance: Int
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  number: String
  walletBalance: Int
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  number: String
  """
  All values that are not equal to given value.
  """
  number_not: String
  """
  All values that are contained in given list.
  """
  number_in: [String!]
  """
  All values that are not contained in given list.
  """
  number_not_in: [String!]
  """
  All values less than the given value.
  """
  number_lt: String
  """
  All values less than or equal the given value.
  """
  number_lte: String
  """
  All values greater than the given value.
  """
  number_gt: String
  """
  All values greater than or equal the given value.
  """
  number_gte: String
  """
  All values containing the given string.
  """
  number_contains: String
  """
  All values not containing the given string.
  """
  number_not_contains: String
  """
  All values starting with the given string.
  """
  number_starts_with: String
  """
  All values not starting with the given string.
  """
  number_not_starts_with: String
  """
  All values ending with the given string.
  """
  number_ends_with: String
  """
  All values not ending with the given string.
  """
  number_not_ends_with: String
  walletBalance: Int
  """
  All values that are not equal to given value.
  """
  walletBalance_not: Int
  """
  All values that are contained in given list.
  """
  walletBalance_in: [Int!]
  """
  All values that are not contained in given list.
  """
  walletBalance_not_in: [Int!]
  """
  All values less than the given value.
  """
  walletBalance_lt: Int
  """
  All values less than or equal the given value.
  """
  walletBalance_lte: Int
  """
  All values greater than the given value.
  """
  walletBalance_gt: Int
  """
  All values greater than or equal the given value.
  """
  walletBalance_gte: Int
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  resetToken: String
  """
  All values that are not equal to given value.
  """
  resetToken_not: String
  """
  All values that are contained in given list.
  """
  resetToken_in: [String!]
  """
  All values that are not contained in given list.
  """
  resetToken_not_in: [String!]
  """
  All values less than the given value.
  """
  resetToken_lt: String
  """
  All values less than or equal the given value.
  """
  resetToken_lte: String
  """
  All values greater than the given value.
  """
  resetToken_gt: String
  """
  All values greater than or equal the given value.
  """
  resetToken_gte: String
  """
  All values containing the given string.
  """
  resetToken_contains: String
  """
  All values not containing the given string.
  """
  resetToken_not_contains: String
  """
  All values starting with the given string.
  """
  resetToken_starts_with: String
  """
  All values not starting with the given string.
  """
  resetToken_not_starts_with: String
  """
  All values ending with the given string.
  """
  resetToken_ends_with: String
  """
  All values not ending with the given string.
  """
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  """
  All values that are not equal to given value.
  """
  resetTokenExpiry_not: Float
  """
  All values that are contained in given list.
  """
  resetTokenExpiry_in: [Float!]
  """
  All values that are not contained in given list.
  """
  resetTokenExpiry_not_in: [Float!]
  """
  All values less than the given value.
  """
  resetTokenExpiry_lt: Float
  """
  All values less than or equal the given value.
  """
  resetTokenExpiry_lte: Float
  """
  All values greater than the given value.
  """
  resetTokenExpiry_gt: Float
  """
  All values greater than or equal the given value.
  """
  resetTokenExpiry_gte: Float
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createProduct(data: ProductCreateInput!): Product!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  deleteUser(where: UserWhereUniqueInput!): User
  deleteProduct(where: ProductWhereUniqueInput!): Product
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  user(where: UserWhereUniqueInput!): User
  product(where: ProductWhereUniqueInput!): Product
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  """
  Fetches an object given its ID
  """
  node(
    """
    The ID of an object
    """
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
}
`

export type Permission = 
  'ADMIN' |
  'USER' |
  'BOOKCREATE' |
  'BOOKUPDATE' |
  'BOOKDELETE' |
  'PERMISSIONUPDATE'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'number_ASC' |
  'number_DESC' |
  'walletBalance_ASC' |
  'walletBalance_DESC' |
  'password_ASC' |
  'password_DESC' |
  'resetToken_ASC' |
  'resetToken_DESC' |
  'resetTokenExpiry_ASC' |
  'resetTokenExpiry_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProductOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'author_ASC' |
  'author_DESC' |
  'publisher_ASC' |
  'publisher_DESC' |
  'className_ASC' |
  'className_DESC' |
  'subject_ASC' |
  'subject_DESC' |
  'category_ASC' |
  'category_DESC' |
  'edition_ASC' |
  'edition_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'detail_ASC' |
  'detail_DESC' |
  'description_ASC' |
  'description_DESC' |
  'mrp_ASC' |
  'mrp_DESC' |
  'discount_ASC' |
  'discount_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserUpdateManyMutationInput {
  name?: String
  email?: String
  number?: String
  walletBalance?: Int
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
  permissions?: UserUpdatepermissionsInput
}

export interface UserCreateInput {
  name: String
  email: String
  number?: String
  walletBalance?: Int
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  permissions?: UserCreatepermissionsInput
}

export interface ProductUpdatetagsInput {
  set?: String[] | String
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  number?: String
  number_not?: String
  number_in?: String[] | String
  number_not_in?: String[] | String
  number_lt?: String
  number_lte?: String
  number_gt?: String
  number_gte?: String
  number_contains?: String
  number_not_contains?: String
  number_starts_with?: String
  number_not_starts_with?: String
  number_ends_with?: String
  number_not_ends_with?: String
  walletBalance?: Int
  walletBalance_not?: Int
  walletBalance_in?: Int[] | Int
  walletBalance_not_in?: Int[] | Int
  walletBalance_lt?: Int
  walletBalance_lte?: Int
  walletBalance_gt?: Int
  walletBalance_gte?: Int
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  resetToken?: String
  resetToken_not?: String
  resetToken_in?: String[] | String
  resetToken_not_in?: String[] | String
  resetToken_lt?: String
  resetToken_lte?: String
  resetToken_gt?: String
  resetToken_gte?: String
  resetToken_contains?: String
  resetToken_not_contains?: String
  resetToken_starts_with?: String
  resetToken_not_starts_with?: String
  resetToken_ends_with?: String
  resetToken_not_ends_with?: String
  resetTokenExpiry?: Float
  resetTokenExpiry_not?: Float
  resetTokenExpiry_in?: Float[] | Float
  resetTokenExpiry_not_in?: Float[] | Float
  resetTokenExpiry_lt?: Float
  resetTokenExpiry_lte?: Float
  resetTokenExpiry_gt?: Float
  resetTokenExpiry_gte?: Float
}

export interface ProductUpdateInput {
  title?: String
  author?: String
  publisher?: String
  className?: String
  subject?: String
  category?: String
  edition?: String
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Int
  discount?: Int
  tags?: ProductUpdatetagsInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  NOT?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  author?: String
  author_not?: String
  author_in?: String[] | String
  author_not_in?: String[] | String
  author_lt?: String
  author_lte?: String
  author_gt?: String
  author_gte?: String
  author_contains?: String
  author_not_contains?: String
  author_starts_with?: String
  author_not_starts_with?: String
  author_ends_with?: String
  author_not_ends_with?: String
  publisher?: String
  publisher_not?: String
  publisher_in?: String[] | String
  publisher_not_in?: String[] | String
  publisher_lt?: String
  publisher_lte?: String
  publisher_gt?: String
  publisher_gte?: String
  publisher_contains?: String
  publisher_not_contains?: String
  publisher_starts_with?: String
  publisher_not_starts_with?: String
  publisher_ends_with?: String
  publisher_not_ends_with?: String
  className?: String
  className_not?: String
  className_in?: String[] | String
  className_not_in?: String[] | String
  className_lt?: String
  className_lte?: String
  className_gt?: String
  className_gte?: String
  className_contains?: String
  className_not_contains?: String
  className_starts_with?: String
  className_not_starts_with?: String
  className_ends_with?: String
  className_not_ends_with?: String
  subject?: String
  subject_not?: String
  subject_in?: String[] | String
  subject_not_in?: String[] | String
  subject_lt?: String
  subject_lte?: String
  subject_gt?: String
  subject_gte?: String
  subject_contains?: String
  subject_not_contains?: String
  subject_starts_with?: String
  subject_not_starts_with?: String
  subject_ends_with?: String
  subject_not_ends_with?: String
  category?: String
  category_not?: String
  category_in?: String[] | String
  category_not_in?: String[] | String
  category_lt?: String
  category_lte?: String
  category_gt?: String
  category_gte?: String
  category_contains?: String
  category_not_contains?: String
  category_starts_with?: String
  category_not_starts_with?: String
  category_ends_with?: String
  category_not_ends_with?: String
  edition?: String
  edition_not?: String
  edition_in?: String[] | String
  edition_not_in?: String[] | String
  edition_lt?: String
  edition_lte?: String
  edition_gt?: String
  edition_gte?: String
  edition_contains?: String
  edition_not_contains?: String
  edition_starts_with?: String
  edition_not_starts_with?: String
  edition_ends_with?: String
  edition_not_ends_with?: String
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  detail?: String
  detail_not?: String
  detail_in?: String[] | String
  detail_not_in?: String[] | String
  detail_lt?: String
  detail_lte?: String
  detail_gt?: String
  detail_gte?: String
  detail_contains?: String
  detail_not_contains?: String
  detail_starts_with?: String
  detail_not_starts_with?: String
  detail_ends_with?: String
  detail_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  mrp?: Int
  mrp_not?: Int
  mrp_in?: Int[] | Int
  mrp_not_in?: Int[] | Int
  mrp_lt?: Int
  mrp_lte?: Int
  mrp_gt?: Int
  mrp_gte?: Int
  discount?: Int
  discount_not?: Int
  discount_in?: Int[] | Int
  discount_not_in?: Int[] | Int
  discount_lt?: Int
  discount_lte?: Int
  discount_gt?: Int
  discount_gte?: Int
}

export interface UserUpdatepermissionsInput {
  set?: Permission[] | Permission
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
}

export interface UserCreatepermissionsInput {
  set?: Permission[] | Permission
}

export interface ProductCreateInput {
  title: String
  author: String
  publisher: String
  className: String
  subject: String
  category: String
  edition: String
  quantity: Int
  detail: String
  description?: String
  mrp: Int
  discount: Int
  tags?: ProductCreatetagsInput
}

export interface ProductCreatetagsInput {
  set?: String[] | String
}

export interface UserUpdateInput {
  name?: String
  email?: String
  number?: String
  walletBalance?: Int
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
  permissions?: UserUpdatepermissionsInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface ProductUpdateManyMutationInput {
  title?: String
  author?: String
  publisher?: String
  className?: String
  subject?: String
  category?: String
  edition?: String
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Int
  discount?: Int
  tags?: ProductUpdatetagsInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface ProductPreviousValues {
  id: ID_Output
  title: String
  author: String
  publisher: String
  className: String
  subject: String
  category: String
  edition: String
  quantity: Int
  detail: String
  description?: String
  mrp: Int
  discount: Int
  tags: String[]
}

export interface AggregateProduct {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  number?: String
  walletBalance?: Int
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  permissions: Permission[]
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  number?: String
  walletBalance?: Int
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  permissions: Permission[]
}

export interface AggregateUser {
  count: Int
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface Product extends Node {
  id: ID_Output
  title: String
  author: String
  publisher: String
  className: String
  subject: String
  category: String
  edition: String
  quantity: Int
  detail: String
  description?: String
  mrp: Int
  discount: Int
  tags: String[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  products: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Product[]>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  product: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  productsConnection: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createProduct: (args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateProduct: (args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteProduct: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertProduct: (args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  updateManyUsers: (args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyProducts: (args: { data: ProductUpdateManyMutationInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyProducts: (args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  product: (args: { where?: ProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProductSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Product: (where: ProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'products', { where }, {}, '{ id }')
  }

  query: Query = {
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    products: (args, info): Promise<Product[]> => super.delegate('query', 'products', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    product: (args, info): Promise<Product | null> => super.delegate('query', 'product', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    productsConnection: (args, info): Promise<ProductConnection> => super.delegate('query', 'productsConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createProduct: (args, info): Promise<Product> => super.delegate('mutation', 'createProduct', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'updateProduct', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'deleteProduct', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertProduct: (args, info): Promise<Product> => super.delegate('mutation', 'upsertProduct', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyProducts', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyProducts', args, {}, info)
  }

  subscription: Subscription = {
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    product: (args, infoOrQuery): Promise<AsyncIterator<ProductSubscriptionPayload>> => super.delegateSubscription('product', args, {}, infoOrQuery)
  }
}