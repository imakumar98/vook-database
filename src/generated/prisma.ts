import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateCartProduct {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderProduct {
  count: Int!
}

type AggregatePostalCode {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProductCategory {
  count: Int!
}

type AggregateProductType {
  count: Int!
}

type AggregatePublisher {
  count: Int!
}

type AggregateTag {
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

type CartProduct implements Node {
  id: ID!
  quantity: Int!
  product: Product!
  user: User!
}

"""
A connection to a list of items.
"""
type CartProductConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CartProductEdge]!
  aggregate: AggregateCartProduct!
}

input CartProductCreateInput {
  quantity: Int
  product: ProductCreateOneInput!
  user: UserCreateOneWithoutCartInput!
}

input CartProductCreateManyWithoutUserInput {
  create: [CartProductCreateWithoutUserInput!]
  connect: [CartProductWhereUniqueInput!]
}

input CartProductCreateWithoutUserInput {
  quantity: Int
  product: ProductCreateOneInput!
}

"""
An edge in a connection.
"""
type CartProductEdge {
  """
  The item at the end of the edge.
  """
  node: CartProduct!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CartProductOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CartProductPreviousValues {
  id: ID!
  quantity: Int!
}

input CartProductScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartProductScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartProductScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CartProductScalarWhereInput!]
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
}

type CartProductSubscriptionPayload {
  mutation: MutationType!
  node: CartProduct
  updatedFields: [String!]
  previousValues: CartProductPreviousValues
}

input CartProductSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartProductSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartProductSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CartProductSubscriptionWhereInput!]
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
  node: CartProductWhereInput
}

input CartProductUpdateInput {
  quantity: Int
  product: ProductUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutCartInput
}

input CartProductUpdateManyDataInput {
  quantity: Int
}

input CartProductUpdateManyMutationInput {
  quantity: Int
}

input CartProductUpdateManyWithoutUserInput {
  create: [CartProductCreateWithoutUserInput!]
  connect: [CartProductWhereUniqueInput!]
  set: [CartProductWhereUniqueInput!]
  disconnect: [CartProductWhereUniqueInput!]
  delete: [CartProductWhereUniqueInput!]
  update: [CartProductUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [CartProductUpdateManyWithWhereNestedInput!]
  deleteMany: [CartProductScalarWhereInput!]
  upsert: [CartProductUpsertWithWhereUniqueWithoutUserInput!]
}

input CartProductUpdateManyWithWhereNestedInput {
  where: CartProductScalarWhereInput!
  data: CartProductUpdateManyDataInput!
}

input CartProductUpdateWithoutUserDataInput {
  quantity: Int
  product: ProductUpdateOneRequiredInput
}

input CartProductUpdateWithWhereUniqueWithoutUserInput {
  where: CartProductWhereUniqueInput!
  data: CartProductUpdateWithoutUserDataInput!
}

input CartProductUpsertWithWhereUniqueWithoutUserInput {
  where: CartProductWhereUniqueInput!
  update: CartProductUpdateWithoutUserDataInput!
  create: CartProductCreateWithoutUserInput!
}

input CartProductWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartProductWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartProductWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CartProductWhereInput!]
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
  product: ProductWhereInput
  user: UserWhereInput
}

input CartProductWhereUniqueInput {
  id: ID
}

scalar DateTime

type Image implements Node {
  id: ID!
  src: String!
  product: Product!
}

"""
A connection to a list of items.
"""
type ImageConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  src: String!
  product: ProductCreateOneWithoutImagesInput!
}

input ImageCreateManyWithoutProductInput {
  create: [ImageCreateWithoutProductInput!]
  connect: [ImageWhereUniqueInput!]
}

input ImageCreateWithoutProductInput {
  src: String!
}

"""
An edge in a connection.
"""
type ImageEdge {
  """
  The item at the end of the edge.
  """
  node: Image!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  src_ASC
  src_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ImagePreviousValues {
  id: ID!
  src: String!
}

input ImageScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ImageScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ImageScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ImageScalarWhereInput!]
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
  src: String
  """
  All values that are not equal to given value.
  """
  src_not: String
  """
  All values that are contained in given list.
  """
  src_in: [String!]
  """
  All values that are not contained in given list.
  """
  src_not_in: [String!]
  """
  All values less than the given value.
  """
  src_lt: String
  """
  All values less than or equal the given value.
  """
  src_lte: String
  """
  All values greater than the given value.
  """
  src_gt: String
  """
  All values greater than or equal the given value.
  """
  src_gte: String
  """
  All values containing the given string.
  """
  src_contains: String
  """
  All values not containing the given string.
  """
  src_not_contains: String
  """
  All values starting with the given string.
  """
  src_starts_with: String
  """
  All values not starting with the given string.
  """
  src_not_starts_with: String
  """
  All values ending with the given string.
  """
  src_ends_with: String
  """
  All values not ending with the given string.
  """
  src_not_ends_with: String
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ImageSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ImageSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ImageSubscriptionWhereInput!]
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
  node: ImageWhereInput
}

input ImageUpdateInput {
  src: String
  product: ProductUpdateOneRequiredWithoutImagesInput
}

input ImageUpdateManyDataInput {
  src: String
}

input ImageUpdateManyMutationInput {
  src: String
}

input ImageUpdateManyWithoutProductInput {
  create: [ImageCreateWithoutProductInput!]
  connect: [ImageWhereUniqueInput!]
  set: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  delete: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutProductInput!]
  updateMany: [ImageUpdateManyWithWhereNestedInput!]
  deleteMany: [ImageScalarWhereInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutProductInput!]
}

input ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput!
  data: ImageUpdateManyDataInput!
}

input ImageUpdateWithoutProductDataInput {
  src: String
}

input ImageUpdateWithWhereUniqueWithoutProductInput {
  where: ImageWhereUniqueInput!
  data: ImageUpdateWithoutProductDataInput!
}

input ImageUpsertWithWhereUniqueWithoutProductInput {
  where: ImageWhereUniqueInput!
  update: ImageUpdateWithoutProductDataInput!
  create: ImageCreateWithoutProductInput!
}

input ImageWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ImageWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ImageWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ImageWhereInput!]
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
  src: String
  """
  All values that are not equal to given value.
  """
  src_not: String
  """
  All values that are contained in given list.
  """
  src_in: [String!]
  """
  All values that are not contained in given list.
  """
  src_not_in: [String!]
  """
  All values less than the given value.
  """
  src_lt: String
  """
  All values less than or equal the given value.
  """
  src_lte: String
  """
  All values greater than the given value.
  """
  src_gt: String
  """
  All values greater than or equal the given value.
  """
  src_gte: String
  """
  All values containing the given string.
  """
  src_contains: String
  """
  All values not containing the given string.
  """
  src_not_contains: String
  """
  All values starting with the given string.
  """
  src_starts_with: String
  """
  All values not starting with the given string.
  """
  src_not_starts_with: String
  """
  All values ending with the given string.
  """
  src_ends_with: String
  """
  All values not ending with the given string.
  """
  src_not_ends_with: String
  product: ProductWhereInput
}

input ImageWhereUniqueInput {
  id: ID
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

type Order implements Node {
  id: ID!
  isVookBalanceUsed: Boolean
  addressSetToDefault: Boolean
  couponCode: String
  streetAddress: String
  phone: String
  email: String
  city: String
  state: String
  postalCode: String
  orderId: Int!
  products(where: OrderProductWhereInput, orderBy: OrderProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderProduct!]
  subTotal: Float
  total: Float
  status: String!
  user: User!
  orderDateTime: DateTime
}

"""
A connection to a list of items.
"""
type OrderConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  isVookBalanceUsed: Boolean
  addressSetToDefault: Boolean
  couponCode: String
  streetAddress: String
  phone: String
  email: String
  city: String
  state: String
  postalCode: String
  orderId: Int!
  subTotal: Float
  total: Float
  status: String!
  orderDateTime: DateTime
  products: OrderProductCreateManyInput
  user: UserCreateOneInput!
}

"""
An edge in a connection.
"""
type OrderEdge {
  """
  The item at the end of the edge.
  """
  node: Order!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  isVookBalanceUsed_ASC
  isVookBalanceUsed_DESC
  addressSetToDefault_ASC
  addressSetToDefault_DESC
  couponCode_ASC
  couponCode_DESC
  streetAddress_ASC
  streetAddress_DESC
  phone_ASC
  phone_DESC
  email_ASC
  email_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  postalCode_ASC
  postalCode_DESC
  orderId_ASC
  orderId_DESC
  subTotal_ASC
  subTotal_DESC
  total_ASC
  total_DESC
  status_ASC
  status_DESC
  orderDateTime_ASC
  orderDateTime_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrderPreviousValues {
  id: ID!
  isVookBalanceUsed: Boolean
  addressSetToDefault: Boolean
  couponCode: String
  streetAddress: String
  phone: String
  email: String
  city: String
  state: String
  postalCode: String
  orderId: Int!
  subTotal: Float
  total: Float
  status: String!
  orderDateTime: DateTime
}

type OrderProduct implements Node {
  id: ID!
  title: String!
  author: String!
  publisher: String!
  image: String!
  price: Float
  quantity: Int!
  user: User
}

"""
A connection to a list of items.
"""
type OrderProductConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [OrderProductEdge]!
  aggregate: AggregateOrderProduct!
}

input OrderProductCreateInput {
  title: String!
  author: String!
  publisher: String!
  image: String!
  price: Float
  quantity: Int
  user: UserCreateOneInput
}

input OrderProductCreateManyInput {
  create: [OrderProductCreateInput!]
  connect: [OrderProductWhereUniqueInput!]
}

"""
An edge in a connection.
"""
type OrderProductEdge {
  """
  The item at the end of the edge.
  """
  node: OrderProduct!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum OrderProductOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  publisher_ASC
  publisher_DESC
  image_ASC
  image_DESC
  price_ASC
  price_DESC
  quantity_ASC
  quantity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrderProductPreviousValues {
  id: ID!
  title: String!
  author: String!
  publisher: String!
  image: String!
  price: Float
  quantity: Int!
}

input OrderProductScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OrderProductScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OrderProductScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OrderProductScalarWhereInput!]
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
  image: String
  """
  All values that are not equal to given value.
  """
  image_not: String
  """
  All values that are contained in given list.
  """
  image_in: [String!]
  """
  All values that are not contained in given list.
  """
  image_not_in: [String!]
  """
  All values less than the given value.
  """
  image_lt: String
  """
  All values less than or equal the given value.
  """
  image_lte: String
  """
  All values greater than the given value.
  """
  image_gt: String
  """
  All values greater than or equal the given value.
  """
  image_gte: String
  """
  All values containing the given string.
  """
  image_contains: String
  """
  All values not containing the given string.
  """
  image_not_contains: String
  """
  All values starting with the given string.
  """
  image_starts_with: String
  """
  All values not starting with the given string.
  """
  image_not_starts_with: String
  """
  All values ending with the given string.
  """
  image_ends_with: String
  """
  All values not ending with the given string.
  """
  image_not_ends_with: String
  price: Float
  """
  All values that are not equal to given value.
  """
  price_not: Float
  """
  All values that are contained in given list.
  """
  price_in: [Float!]
  """
  All values that are not contained in given list.
  """
  price_not_in: [Float!]
  """
  All values less than the given value.
  """
  price_lt: Float
  """
  All values less than or equal the given value.
  """
  price_lte: Float
  """
  All values greater than the given value.
  """
  price_gt: Float
  """
  All values greater than or equal the given value.
  """
  price_gte: Float
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
}

type OrderProductSubscriptionPayload {
  mutation: MutationType!
  node: OrderProduct
  updatedFields: [String!]
  previousValues: OrderProductPreviousValues
}

input OrderProductSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OrderProductSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OrderProductSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OrderProductSubscriptionWhereInput!]
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
  node: OrderProductWhereInput
}

input OrderProductUpdateDataInput {
  title: String
  author: String
  publisher: String
  image: String
  price: Float
  quantity: Int
  user: UserUpdateOneInput
}

input OrderProductUpdateInput {
  title: String
  author: String
  publisher: String
  image: String
  price: Float
  quantity: Int
  user: UserUpdateOneInput
}

input OrderProductUpdateManyDataInput {
  title: String
  author: String
  publisher: String
  image: String
  price: Float
  quantity: Int
}

input OrderProductUpdateManyInput {
  create: [OrderProductCreateInput!]
  connect: [OrderProductWhereUniqueInput!]
  set: [OrderProductWhereUniqueInput!]
  disconnect: [OrderProductWhereUniqueInput!]
  delete: [OrderProductWhereUniqueInput!]
  update: [OrderProductUpdateWithWhereUniqueNestedInput!]
  updateMany: [OrderProductUpdateManyWithWhereNestedInput!]
  deleteMany: [OrderProductScalarWhereInput!]
  upsert: [OrderProductUpsertWithWhereUniqueNestedInput!]
}

input OrderProductUpdateManyMutationInput {
  title: String
  author: String
  publisher: String
  image: String
  price: Float
  quantity: Int
}

input OrderProductUpdateManyWithWhereNestedInput {
  where: OrderProductScalarWhereInput!
  data: OrderProductUpdateManyDataInput!
}

input OrderProductUpdateWithWhereUniqueNestedInput {
  where: OrderProductWhereUniqueInput!
  data: OrderProductUpdateDataInput!
}

input OrderProductUpsertWithWhereUniqueNestedInput {
  where: OrderProductWhereUniqueInput!
  update: OrderProductUpdateDataInput!
  create: OrderProductCreateInput!
}

input OrderProductWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OrderProductWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OrderProductWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OrderProductWhereInput!]
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
  image: String
  """
  All values that are not equal to given value.
  """
  image_not: String
  """
  All values that are contained in given list.
  """
  image_in: [String!]
  """
  All values that are not contained in given list.
  """
  image_not_in: [String!]
  """
  All values less than the given value.
  """
  image_lt: String
  """
  All values less than or equal the given value.
  """
  image_lte: String
  """
  All values greater than the given value.
  """
  image_gt: String
  """
  All values greater than or equal the given value.
  """
  image_gte: String
  """
  All values containing the given string.
  """
  image_contains: String
  """
  All values not containing the given string.
  """
  image_not_contains: String
  """
  All values starting with the given string.
  """
  image_starts_with: String
  """
  All values not starting with the given string.
  """
  image_not_starts_with: String
  """
  All values ending with the given string.
  """
  image_ends_with: String
  """
  All values not ending with the given string.
  """
  image_not_ends_with: String
  price: Float
  """
  All values that are not equal to given value.
  """
  price_not: Float
  """
  All values that are contained in given list.
  """
  price_in: [Float!]
  """
  All values that are not contained in given list.
  """
  price_not_in: [Float!]
  """
  All values less than the given value.
  """
  price_lt: Float
  """
  All values less than or equal the given value.
  """
  price_lte: Float
  """
  All values greater than the given value.
  """
  price_gt: Float
  """
  All values greater than or equal the given value.
  """
  price_gte: Float
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
  user: UserWhereInput
}

input OrderProductWhereUniqueInput {
  id: ID
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OrderSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OrderSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OrderSubscriptionWhereInput!]
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
  node: OrderWhereInput
}

input OrderUpdateInput {
  isVookBalanceUsed: Boolean
  addressSetToDefault: Boolean
  couponCode: String
  streetAddress: String
  phone: String
  email: String
  city: String
  state: String
  postalCode: String
  orderId: Int
  subTotal: Float
  total: Float
  status: String
  orderDateTime: DateTime
  products: OrderProductUpdateManyInput
  user: UserUpdateOneRequiredInput
}

input OrderUpdateManyMutationInput {
  isVookBalanceUsed: Boolean
  addressSetToDefault: Boolean
  couponCode: String
  streetAddress: String
  phone: String
  email: String
  city: String
  state: String
  postalCode: String
  orderId: Int
  subTotal: Float
  total: Float
  status: String
  orderDateTime: DateTime
}

input OrderWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OrderWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OrderWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OrderWhereInput!]
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
  isVookBalanceUsed: Boolean
  """
  All values that are not equal to given value.
  """
  isVookBalanceUsed_not: Boolean
  addressSetToDefault: Boolean
  """
  All values that are not equal to given value.
  """
  addressSetToDefault_not: Boolean
  couponCode: String
  """
  All values that are not equal to given value.
  """
  couponCode_not: String
  """
  All values that are contained in given list.
  """
  couponCode_in: [String!]
  """
  All values that are not contained in given list.
  """
  couponCode_not_in: [String!]
  """
  All values less than the given value.
  """
  couponCode_lt: String
  """
  All values less than or equal the given value.
  """
  couponCode_lte: String
  """
  All values greater than the given value.
  """
  couponCode_gt: String
  """
  All values greater than or equal the given value.
  """
  couponCode_gte: String
  """
  All values containing the given string.
  """
  couponCode_contains: String
  """
  All values not containing the given string.
  """
  couponCode_not_contains: String
  """
  All values starting with the given string.
  """
  couponCode_starts_with: String
  """
  All values not starting with the given string.
  """
  couponCode_not_starts_with: String
  """
  All values ending with the given string.
  """
  couponCode_ends_with: String
  """
  All values not ending with the given string.
  """
  couponCode_not_ends_with: String
  streetAddress: String
  """
  All values that are not equal to given value.
  """
  streetAddress_not: String
  """
  All values that are contained in given list.
  """
  streetAddress_in: [String!]
  """
  All values that are not contained in given list.
  """
  streetAddress_not_in: [String!]
  """
  All values less than the given value.
  """
  streetAddress_lt: String
  """
  All values less than or equal the given value.
  """
  streetAddress_lte: String
  """
  All values greater than the given value.
  """
  streetAddress_gt: String
  """
  All values greater than or equal the given value.
  """
  streetAddress_gte: String
  """
  All values containing the given string.
  """
  streetAddress_contains: String
  """
  All values not containing the given string.
  """
  streetAddress_not_contains: String
  """
  All values starting with the given string.
  """
  streetAddress_starts_with: String
  """
  All values not starting with the given string.
  """
  streetAddress_not_starts_with: String
  """
  All values ending with the given string.
  """
  streetAddress_ends_with: String
  """
  All values not ending with the given string.
  """
  streetAddress_not_ends_with: String
  phone: String
  """
  All values that are not equal to given value.
  """
  phone_not: String
  """
  All values that are contained in given list.
  """
  phone_in: [String!]
  """
  All values that are not contained in given list.
  """
  phone_not_in: [String!]
  """
  All values less than the given value.
  """
  phone_lt: String
  """
  All values less than or equal the given value.
  """
  phone_lte: String
  """
  All values greater than the given value.
  """
  phone_gt: String
  """
  All values greater than or equal the given value.
  """
  phone_gte: String
  """
  All values containing the given string.
  """
  phone_contains: String
  """
  All values not containing the given string.
  """
  phone_not_contains: String
  """
  All values starting with the given string.
  """
  phone_starts_with: String
  """
  All values not starting with the given string.
  """
  phone_not_starts_with: String
  """
  All values ending with the given string.
  """
  phone_ends_with: String
  """
  All values not ending with the given string.
  """
  phone_not_ends_with: String
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
  city: String
  """
  All values that are not equal to given value.
  """
  city_not: String
  """
  All values that are contained in given list.
  """
  city_in: [String!]
  """
  All values that are not contained in given list.
  """
  city_not_in: [String!]
  """
  All values less than the given value.
  """
  city_lt: String
  """
  All values less than or equal the given value.
  """
  city_lte: String
  """
  All values greater than the given value.
  """
  city_gt: String
  """
  All values greater than or equal the given value.
  """
  city_gte: String
  """
  All values containing the given string.
  """
  city_contains: String
  """
  All values not containing the given string.
  """
  city_not_contains: String
  """
  All values starting with the given string.
  """
  city_starts_with: String
  """
  All values not starting with the given string.
  """
  city_not_starts_with: String
  """
  All values ending with the given string.
  """
  city_ends_with: String
  """
  All values not ending with the given string.
  """
  city_not_ends_with: String
  state: String
  """
  All values that are not equal to given value.
  """
  state_not: String
  """
  All values that are contained in given list.
  """
  state_in: [String!]
  """
  All values that are not contained in given list.
  """
  state_not_in: [String!]
  """
  All values less than the given value.
  """
  state_lt: String
  """
  All values less than or equal the given value.
  """
  state_lte: String
  """
  All values greater than the given value.
  """
  state_gt: String
  """
  All values greater than or equal the given value.
  """
  state_gte: String
  """
  All values containing the given string.
  """
  state_contains: String
  """
  All values not containing the given string.
  """
  state_not_contains: String
  """
  All values starting with the given string.
  """
  state_starts_with: String
  """
  All values not starting with the given string.
  """
  state_not_starts_with: String
  """
  All values ending with the given string.
  """
  state_ends_with: String
  """
  All values not ending with the given string.
  """
  state_not_ends_with: String
  postalCode: String
  """
  All values that are not equal to given value.
  """
  postalCode_not: String
  """
  All values that are contained in given list.
  """
  postalCode_in: [String!]
  """
  All values that are not contained in given list.
  """
  postalCode_not_in: [String!]
  """
  All values less than the given value.
  """
  postalCode_lt: String
  """
  All values less than or equal the given value.
  """
  postalCode_lte: String
  """
  All values greater than the given value.
  """
  postalCode_gt: String
  """
  All values greater than or equal the given value.
  """
  postalCode_gte: String
  """
  All values containing the given string.
  """
  postalCode_contains: String
  """
  All values not containing the given string.
  """
  postalCode_not_contains: String
  """
  All values starting with the given string.
  """
  postalCode_starts_with: String
  """
  All values not starting with the given string.
  """
  postalCode_not_starts_with: String
  """
  All values ending with the given string.
  """
  postalCode_ends_with: String
  """
  All values not ending with the given string.
  """
  postalCode_not_ends_with: String
  orderId: Int
  """
  All values that are not equal to given value.
  """
  orderId_not: Int
  """
  All values that are contained in given list.
  """
  orderId_in: [Int!]
  """
  All values that are not contained in given list.
  """
  orderId_not_in: [Int!]
  """
  All values less than the given value.
  """
  orderId_lt: Int
  """
  All values less than or equal the given value.
  """
  orderId_lte: Int
  """
  All values greater than the given value.
  """
  orderId_gt: Int
  """
  All values greater than or equal the given value.
  """
  orderId_gte: Int
  subTotal: Float
  """
  All values that are not equal to given value.
  """
  subTotal_not: Float
  """
  All values that are contained in given list.
  """
  subTotal_in: [Float!]
  """
  All values that are not contained in given list.
  """
  subTotal_not_in: [Float!]
  """
  All values less than the given value.
  """
  subTotal_lt: Float
  """
  All values less than or equal the given value.
  """
  subTotal_lte: Float
  """
  All values greater than the given value.
  """
  subTotal_gt: Float
  """
  All values greater than or equal the given value.
  """
  subTotal_gte: Float
  total: Float
  """
  All values that are not equal to given value.
  """
  total_not: Float
  """
  All values that are contained in given list.
  """
  total_in: [Float!]
  """
  All values that are not contained in given list.
  """
  total_not_in: [Float!]
  """
  All values less than the given value.
  """
  total_lt: Float
  """
  All values less than or equal the given value.
  """
  total_lte: Float
  """
  All values greater than the given value.
  """
  total_gt: Float
  """
  All values greater than or equal the given value.
  """
  total_gte: Float
  status: String
  """
  All values that are not equal to given value.
  """
  status_not: String
  """
  All values that are contained in given list.
  """
  status_in: [String!]
  """
  All values that are not contained in given list.
  """
  status_not_in: [String!]
  """
  All values less than the given value.
  """
  status_lt: String
  """
  All values less than or equal the given value.
  """
  status_lte: String
  """
  All values greater than the given value.
  """
  status_gt: String
  """
  All values greater than or equal the given value.
  """
  status_gte: String
  """
  All values containing the given string.
  """
  status_contains: String
  """
  All values not containing the given string.
  """
  status_not_contains: String
  """
  All values starting with the given string.
  """
  status_starts_with: String
  """
  All values not starting with the given string.
  """
  status_not_starts_with: String
  """
  All values ending with the given string.
  """
  status_ends_with: String
  """
  All values not ending with the given string.
  """
  status_not_ends_with: String
  orderDateTime: DateTime
  """
  All values that are not equal to given value.
  """
  orderDateTime_not: DateTime
  """
  All values that are contained in given list.
  """
  orderDateTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  orderDateTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  orderDateTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  orderDateTime_lte: DateTime
  """
  All values greater than the given value.
  """
  orderDateTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  orderDateTime_gte: DateTime
  products_every: OrderProductWhereInput
  products_some: OrderProductWhereInput
  products_none: OrderProductWhereInput
  user: UserWhereInput
}

input OrderWhereUniqueInput {
  id: ID
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

type PostalCode implements Node {
  id: ID!
  code: String!
}

"""
A connection to a list of items.
"""
type PostalCodeConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [PostalCodeEdge]!
  aggregate: AggregatePostalCode!
}

input PostalCodeCreateInput {
  code: String!
}

"""
An edge in a connection.
"""
type PostalCodeEdge {
  """
  The item at the end of the edge.
  """
  node: PostalCode!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum PostalCodeOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostalCodePreviousValues {
  id: ID!
  code: String!
}

type PostalCodeSubscriptionPayload {
  mutation: MutationType!
  node: PostalCode
  updatedFields: [String!]
  previousValues: PostalCodePreviousValues
}

input PostalCodeSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PostalCodeSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PostalCodeSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PostalCodeSubscriptionWhereInput!]
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
  node: PostalCodeWhereInput
}

input PostalCodeUpdateInput {
  code: String
}

input PostalCodeUpdateManyMutationInput {
  code: String
}

input PostalCodeWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PostalCodeWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PostalCodeWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PostalCodeWhereInput!]
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
  code: String
  """
  All values that are not equal to given value.
  """
  code_not: String
  """
  All values that are contained in given list.
  """
  code_in: [String!]
  """
  All values that are not contained in given list.
  """
  code_not_in: [String!]
  """
  All values less than the given value.
  """
  code_lt: String
  """
  All values less than or equal the given value.
  """
  code_lte: String
  """
  All values greater than the given value.
  """
  code_gt: String
  """
  All values greater than or equal the given value.
  """
  code_gte: String
  """
  All values containing the given string.
  """
  code_contains: String
  """
  All values not containing the given string.
  """
  code_not_contains: String
  """
  All values starting with the given string.
  """
  code_starts_with: String
  """
  All values not starting with the given string.
  """
  code_not_starts_with: String
  """
  All values ending with the given string.
  """
  code_ends_with: String
  """
  All values not ending with the given string.
  """
  code_not_ends_with: String
}

input PostalCodeWhereUniqueInput {
  id: ID
  code: String
}

type Product implements Node {
  id: ID!
  sku: Int
  title: String!
  author: String!
  publisher: Publisher!
  category: ProductCategory!
  subject: String!
  type: ProductType!
  edition: Int!
  active: Boolean
  quantity: Int!
  detail: String!
  description: String
  mrp: Float!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image!]
  slug: String!
}

type ProductCategory implements Node {
  id: ID!
  name: String!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  types(where: ProductTypeWhereInput, orderBy: ProductTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductType!]
  image: String
  description: String
}

"""
A connection to a list of items.
"""
type ProductCategoryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ProductCategoryEdge]!
  aggregate: AggregateProductCategory!
}

input ProductCategoryCreateInput {
  name: String!
  image: String
  description: String
  products: ProductCreateManyWithoutCategoryInput
  types: ProductTypeCreateManyWithoutCategoryInput
}

input ProductCategoryCreateOneWithoutProductsInput {
  create: ProductCategoryCreateWithoutProductsInput
  connect: ProductCategoryWhereUniqueInput
}

input ProductCategoryCreateOneWithoutTypesInput {
  create: ProductCategoryCreateWithoutTypesInput
  connect: ProductCategoryWhereUniqueInput
}

input ProductCategoryCreateWithoutProductsInput {
  name: String!
  image: String
  description: String
  types: ProductTypeCreateManyWithoutCategoryInput
}

input ProductCategoryCreateWithoutTypesInput {
  name: String!
  image: String
  description: String
  products: ProductCreateManyWithoutCategoryInput
}

"""
An edge in a connection.
"""
type ProductCategoryEdge {
  """
  The item at the end of the edge.
  """
  node: ProductCategory!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ProductCategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  image_ASC
  image_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductCategoryPreviousValues {
  id: ID!
  name: String!
  image: String
  description: String
}

type ProductCategorySubscriptionPayload {
  mutation: MutationType!
  node: ProductCategory
  updatedFields: [String!]
  previousValues: ProductCategoryPreviousValues
}

input ProductCategorySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductCategorySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductCategorySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductCategorySubscriptionWhereInput!]
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
  node: ProductCategoryWhereInput
}

input ProductCategoryUpdateInput {
  name: String
  image: String
  description: String
  products: ProductUpdateManyWithoutCategoryInput
  types: ProductTypeUpdateManyWithoutCategoryInput
}

input ProductCategoryUpdateManyMutationInput {
  name: String
  image: String
  description: String
}

input ProductCategoryUpdateOneRequiredWithoutProductsInput {
  create: ProductCategoryCreateWithoutProductsInput
  connect: ProductCategoryWhereUniqueInput
  update: ProductCategoryUpdateWithoutProductsDataInput
  upsert: ProductCategoryUpsertWithoutProductsInput
}

input ProductCategoryUpdateOneRequiredWithoutTypesInput {
  create: ProductCategoryCreateWithoutTypesInput
  connect: ProductCategoryWhereUniqueInput
  update: ProductCategoryUpdateWithoutTypesDataInput
  upsert: ProductCategoryUpsertWithoutTypesInput
}

input ProductCategoryUpdateWithoutProductsDataInput {
  name: String
  image: String
  description: String
  types: ProductTypeUpdateManyWithoutCategoryInput
}

input ProductCategoryUpdateWithoutTypesDataInput {
  name: String
  image: String
  description: String
  products: ProductUpdateManyWithoutCategoryInput
}

input ProductCategoryUpsertWithoutProductsInput {
  update: ProductCategoryUpdateWithoutProductsDataInput!
  create: ProductCategoryCreateWithoutProductsInput!
}

input ProductCategoryUpsertWithoutTypesInput {
  update: ProductCategoryUpdateWithoutTypesDataInput!
  create: ProductCategoryCreateWithoutTypesInput!
}

input ProductCategoryWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductCategoryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductCategoryWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductCategoryWhereInput!]
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
  image: String
  """
  All values that are not equal to given value.
  """
  image_not: String
  """
  All values that are contained in given list.
  """
  image_in: [String!]
  """
  All values that are not contained in given list.
  """
  image_not_in: [String!]
  """
  All values less than the given value.
  """
  image_lt: String
  """
  All values less than or equal the given value.
  """
  image_lte: String
  """
  All values greater than the given value.
  """
  image_gt: String
  """
  All values greater than or equal the given value.
  """
  image_gte: String
  """
  All values containing the given string.
  """
  image_contains: String
  """
  All values not containing the given string.
  """
  image_not_contains: String
  """
  All values starting with the given string.
  """
  image_starts_with: String
  """
  All values not starting with the given string.
  """
  image_not_starts_with: String
  """
  All values ending with the given string.
  """
  image_ends_with: String
  """
  All values not ending with the given string.
  """
  image_not_ends_with: String
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
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  types_every: ProductTypeWhereInput
  types_some: ProductTypeWhereInput
  types_none: ProductTypeWhereInput
}

input ProductCategoryWhereUniqueInput {
  id: ID
  name: String
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
  sku: Int
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean
  quantity: Int!
  detail: String!
  description: String
  mrp: Float!
  slug: String!
  publisher: PublisherCreateOneWithoutProductsInput!
  category: ProductCategoryCreateOneWithoutProductsInput!
  type: ProductTypeCreateOneWithoutProductsInput!
  tags: TagCreateManyWithoutProductInput
  images: ImageCreateManyWithoutProductInput
}

input ProductCreateManyWithoutCategoryInput {
  create: [ProductCreateWithoutCategoryInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutPublisherInput {
  create: [ProductCreateWithoutPublisherInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutTypeInput {
  create: [ProductCreateWithoutTypeInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutImagesInput {
  create: ProductCreateWithoutImagesInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutTagsInput {
  create: ProductCreateWithoutTagsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutCategoryInput {
  sku: Int
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean
  quantity: Int!
  detail: String!
  description: String
  mrp: Float!
  slug: String!
  publisher: PublisherCreateOneWithoutProductsInput!
  type: ProductTypeCreateOneWithoutProductsInput!
  tags: TagCreateManyWithoutProductInput
  images: ImageCreateManyWithoutProductInput
}

input ProductCreateWithoutImagesInput {
  sku: Int
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean
  quantity: Int!
  detail: String!
  description: String
  mrp: Float!
  slug: String!
  publisher: PublisherCreateOneWithoutProductsInput!
  category: ProductCategoryCreateOneWithoutProductsInput!
  type: ProductTypeCreateOneWithoutProductsInput!
  tags: TagCreateManyWithoutProductInput
}

input ProductCreateWithoutPublisherInput {
  sku: Int
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean
  quantity: Int!
  detail: String!
  description: String
  mrp: Float!
  slug: String!
  category: ProductCategoryCreateOneWithoutProductsInput!
  type: ProductTypeCreateOneWithoutProductsInput!
  tags: TagCreateManyWithoutProductInput
  images: ImageCreateManyWithoutProductInput
}

input ProductCreateWithoutTagsInput {
  sku: Int
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean
  quantity: Int!
  detail: String!
  description: String
  mrp: Float!
  slug: String!
  publisher: PublisherCreateOneWithoutProductsInput!
  category: ProductCategoryCreateOneWithoutProductsInput!
  type: ProductTypeCreateOneWithoutProductsInput!
  images: ImageCreateManyWithoutProductInput
}

input ProductCreateWithoutTypeInput {
  sku: Int
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean
  quantity: Int!
  detail: String!
  description: String
  mrp: Float!
  slug: String!
  publisher: PublisherCreateOneWithoutProductsInput!
  category: ProductCategoryCreateOneWithoutProductsInput!
  tags: TagCreateManyWithoutProductInput
  images: ImageCreateManyWithoutProductInput
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
  sku_ASC
  sku_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  subject_ASC
  subject_DESC
  edition_ASC
  edition_DESC
  active_ASC
  active_DESC
  quantity_ASC
  quantity_DESC
  detail_ASC
  detail_DESC
  description_ASC
  description_DESC
  mrp_ASC
  mrp_DESC
  slug_ASC
  slug_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductPreviousValues {
  id: ID!
  sku: Int
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean
  quantity: Int!
  detail: String!
  description: String
  mrp: Float!
  slug: String!
}

input ProductScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductScalarWhereInput!]
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
  sku: Int
  """
  All values that are not equal to given value.
  """
  sku_not: Int
  """
  All values that are contained in given list.
  """
  sku_in: [Int!]
  """
  All values that are not contained in given list.
  """
  sku_not_in: [Int!]
  """
  All values less than the given value.
  """
  sku_lt: Int
  """
  All values less than or equal the given value.
  """
  sku_lte: Int
  """
  All values greater than the given value.
  """
  sku_gt: Int
  """
  All values greater than or equal the given value.
  """
  sku_gte: Int
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
  edition: Int
  """
  All values that are not equal to given value.
  """
  edition_not: Int
  """
  All values that are contained in given list.
  """
  edition_in: [Int!]
  """
  All values that are not contained in given list.
  """
  edition_not_in: [Int!]
  """
  All values less than the given value.
  """
  edition_lt: Int
  """
  All values less than or equal the given value.
  """
  edition_lte: Int
  """
  All values greater than the given value.
  """
  edition_gt: Int
  """
  All values greater than or equal the given value.
  """
  edition_gte: Int
  active: Boolean
  """
  All values that are not equal to given value.
  """
  active_not: Boolean
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
  mrp: Float
  """
  All values that are not equal to given value.
  """
  mrp_not: Float
  """
  All values that are contained in given list.
  """
  mrp_in: [Float!]
  """
  All values that are not contained in given list.
  """
  mrp_not_in: [Float!]
  """
  All values less than the given value.
  """
  mrp_lt: Float
  """
  All values less than or equal the given value.
  """
  mrp_lte: Float
  """
  All values greater than the given value.
  """
  mrp_gt: Float
  """
  All values greater than or equal the given value.
  """
  mrp_gte: Float
  slug: String
  """
  All values that are not equal to given value.
  """
  slug_not: String
  """
  All values that are contained in given list.
  """
  slug_in: [String!]
  """
  All values that are not contained in given list.
  """
  slug_not_in: [String!]
  """
  All values less than the given value.
  """
  slug_lt: String
  """
  All values less than or equal the given value.
  """
  slug_lte: String
  """
  All values greater than the given value.
  """
  slug_gt: String
  """
  All values greater than or equal the given value.
  """
  slug_gte: String
  """
  All values containing the given string.
  """
  slug_contains: String
  """
  All values not containing the given string.
  """
  slug_not_contains: String
  """
  All values starting with the given string.
  """
  slug_starts_with: String
  """
  All values not starting with the given string.
  """
  slug_not_starts_with: String
  """
  All values ending with the given string.
  """
  slug_ends_with: String
  """
  All values not ending with the given string.
  """
  slug_not_ends_with: String
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

type ProductType implements Node {
  id: ID!
  name: String!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  category: ProductCategory!
  publishers(where: PublisherWhereInput, orderBy: PublisherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Publisher!]
}

"""
A connection to a list of items.
"""
type ProductTypeConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ProductTypeEdge]!
  aggregate: AggregateProductType!
}

input ProductTypeCreateInput {
  name: String!
  products: ProductCreateManyWithoutTypeInput
  category: ProductCategoryCreateOneWithoutTypesInput!
  publishers: PublisherCreateManyWithoutTypeInput
}

input ProductTypeCreateManyWithoutCategoryInput {
  create: [ProductTypeCreateWithoutCategoryInput!]
  connect: [ProductTypeWhereUniqueInput!]
}

input ProductTypeCreateOneWithoutProductsInput {
  create: ProductTypeCreateWithoutProductsInput
  connect: ProductTypeWhereUniqueInput
}

input ProductTypeCreateOneWithoutPublishersInput {
  create: ProductTypeCreateWithoutPublishersInput
  connect: ProductTypeWhereUniqueInput
}

input ProductTypeCreateWithoutCategoryInput {
  name: String!
  products: ProductCreateManyWithoutTypeInput
  publishers: PublisherCreateManyWithoutTypeInput
}

input ProductTypeCreateWithoutProductsInput {
  name: String!
  category: ProductCategoryCreateOneWithoutTypesInput!
  publishers: PublisherCreateManyWithoutTypeInput
}

input ProductTypeCreateWithoutPublishersInput {
  name: String!
  products: ProductCreateManyWithoutTypeInput
  category: ProductCategoryCreateOneWithoutTypesInput!
}

"""
An edge in a connection.
"""
type ProductTypeEdge {
  """
  The item at the end of the edge.
  """
  node: ProductType!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ProductTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductTypePreviousValues {
  id: ID!
  name: String!
}

input ProductTypeScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductTypeScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductTypeScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductTypeScalarWhereInput!]
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
}

type ProductTypeSubscriptionPayload {
  mutation: MutationType!
  node: ProductType
  updatedFields: [String!]
  previousValues: ProductTypePreviousValues
}

input ProductTypeSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductTypeSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductTypeSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductTypeSubscriptionWhereInput!]
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
  node: ProductTypeWhereInput
}

input ProductTypeUpdateInput {
  name: String
  products: ProductUpdateManyWithoutTypeInput
  category: ProductCategoryUpdateOneRequiredWithoutTypesInput
  publishers: PublisherUpdateManyWithoutTypeInput
}

input ProductTypeUpdateManyDataInput {
  name: String
}

input ProductTypeUpdateManyMutationInput {
  name: String
}

input ProductTypeUpdateManyWithoutCategoryInput {
  create: [ProductTypeCreateWithoutCategoryInput!]
  connect: [ProductTypeWhereUniqueInput!]
  set: [ProductTypeWhereUniqueInput!]
  disconnect: [ProductTypeWhereUniqueInput!]
  delete: [ProductTypeWhereUniqueInput!]
  update: [ProductTypeUpdateWithWhereUniqueWithoutCategoryInput!]
  updateMany: [ProductTypeUpdateManyWithWhereNestedInput!]
  deleteMany: [ProductTypeScalarWhereInput!]
  upsert: [ProductTypeUpsertWithWhereUniqueWithoutCategoryInput!]
}

input ProductTypeUpdateManyWithWhereNestedInput {
  where: ProductTypeScalarWhereInput!
  data: ProductTypeUpdateManyDataInput!
}

input ProductTypeUpdateOneRequiredWithoutProductsInput {
  create: ProductTypeCreateWithoutProductsInput
  connect: ProductTypeWhereUniqueInput
  update: ProductTypeUpdateWithoutProductsDataInput
  upsert: ProductTypeUpsertWithoutProductsInput
}

input ProductTypeUpdateOneRequiredWithoutPublishersInput {
  create: ProductTypeCreateWithoutPublishersInput
  connect: ProductTypeWhereUniqueInput
  update: ProductTypeUpdateWithoutPublishersDataInput
  upsert: ProductTypeUpsertWithoutPublishersInput
}

input ProductTypeUpdateWithoutCategoryDataInput {
  name: String
  products: ProductUpdateManyWithoutTypeInput
  publishers: PublisherUpdateManyWithoutTypeInput
}

input ProductTypeUpdateWithoutProductsDataInput {
  name: String
  category: ProductCategoryUpdateOneRequiredWithoutTypesInput
  publishers: PublisherUpdateManyWithoutTypeInput
}

input ProductTypeUpdateWithoutPublishersDataInput {
  name: String
  products: ProductUpdateManyWithoutTypeInput
  category: ProductCategoryUpdateOneRequiredWithoutTypesInput
}

input ProductTypeUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProductTypeWhereUniqueInput!
  data: ProductTypeUpdateWithoutCategoryDataInput!
}

input ProductTypeUpsertWithoutProductsInput {
  update: ProductTypeUpdateWithoutProductsDataInput!
  create: ProductTypeCreateWithoutProductsInput!
}

input ProductTypeUpsertWithoutPublishersInput {
  update: ProductTypeUpdateWithoutPublishersDataInput!
  create: ProductTypeCreateWithoutPublishersInput!
}

input ProductTypeUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProductTypeWhereUniqueInput!
  update: ProductTypeUpdateWithoutCategoryDataInput!
  create: ProductTypeCreateWithoutCategoryInput!
}

input ProductTypeWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductTypeWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductTypeWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductTypeWhereInput!]
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
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  category: ProductCategoryWhereInput
  publishers_every: PublisherWhereInput
  publishers_some: PublisherWhereInput
  publishers_none: PublisherWhereInput
}

input ProductTypeWhereUniqueInput {
  id: ID
  name: String
}

input ProductUpdateDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  detail: String
  description: String
  mrp: Float
  slug: String
  publisher: PublisherUpdateOneRequiredWithoutProductsInput
  category: ProductCategoryUpdateOneRequiredWithoutProductsInput
  type: ProductTypeUpdateOneRequiredWithoutProductsInput
  tags: TagUpdateManyWithoutProductInput
  images: ImageUpdateManyWithoutProductInput
}

input ProductUpdateInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  detail: String
  description: String
  mrp: Float
  slug: String
  publisher: PublisherUpdateOneRequiredWithoutProductsInput
  category: ProductCategoryUpdateOneRequiredWithoutProductsInput
  type: ProductTypeUpdateOneRequiredWithoutProductsInput
  tags: TagUpdateManyWithoutProductInput
  images: ImageUpdateManyWithoutProductInput
}

input ProductUpdateManyDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  detail: String
  description: String
  mrp: Float
  slug: String
}

input ProductUpdateManyMutationInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  detail: String
  description: String
  mrp: Float
  slug: String
}

input ProductUpdateManyWithoutCategoryInput {
  create: [ProductCreateWithoutCategoryInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutCategoryInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
  deleteMany: [ProductScalarWhereInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutCategoryInput!]
}

input ProductUpdateManyWithoutPublisherInput {
  create: [ProductCreateWithoutPublisherInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutPublisherInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
  deleteMany: [ProductScalarWhereInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutPublisherInput!]
}

input ProductUpdateManyWithoutTypeInput {
  create: [ProductCreateWithoutTypeInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutTypeInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
  deleteMany: [ProductScalarWhereInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutTypeInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateOneRequiredInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
  update: ProductUpdateDataInput
  upsert: ProductUpsertNestedInput
}

input ProductUpdateOneRequiredWithoutImagesInput {
  create: ProductCreateWithoutImagesInput
  connect: ProductWhereUniqueInput
  update: ProductUpdateWithoutImagesDataInput
  upsert: ProductUpsertWithoutImagesInput
}

input ProductUpdateOneRequiredWithoutTagsInput {
  create: ProductCreateWithoutTagsInput
  connect: ProductWhereUniqueInput
  update: ProductUpdateWithoutTagsDataInput
  upsert: ProductUpsertWithoutTagsInput
}

input ProductUpdateWithoutCategoryDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  detail: String
  description: String
  mrp: Float
  slug: String
  publisher: PublisherUpdateOneRequiredWithoutProductsInput
  type: ProductTypeUpdateOneRequiredWithoutProductsInput
  tags: TagUpdateManyWithoutProductInput
  images: ImageUpdateManyWithoutProductInput
}

input ProductUpdateWithoutImagesDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  detail: String
  description: String
  mrp: Float
  slug: String
  publisher: PublisherUpdateOneRequiredWithoutProductsInput
  category: ProductCategoryUpdateOneRequiredWithoutProductsInput
  type: ProductTypeUpdateOneRequiredWithoutProductsInput
  tags: TagUpdateManyWithoutProductInput
}

input ProductUpdateWithoutPublisherDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  detail: String
  description: String
  mrp: Float
  slug: String
  category: ProductCategoryUpdateOneRequiredWithoutProductsInput
  type: ProductTypeUpdateOneRequiredWithoutProductsInput
  tags: TagUpdateManyWithoutProductInput
  images: ImageUpdateManyWithoutProductInput
}

input ProductUpdateWithoutTagsDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  detail: String
  description: String
  mrp: Float
  slug: String
  publisher: PublisherUpdateOneRequiredWithoutProductsInput
  category: ProductCategoryUpdateOneRequiredWithoutProductsInput
  type: ProductTypeUpdateOneRequiredWithoutProductsInput
  images: ImageUpdateManyWithoutProductInput
}

input ProductUpdateWithoutTypeDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  detail: String
  description: String
  mrp: Float
  slug: String
  publisher: PublisherUpdateOneRequiredWithoutProductsInput
  category: ProductCategoryUpdateOneRequiredWithoutProductsInput
  tags: TagUpdateManyWithoutProductInput
  images: ImageUpdateManyWithoutProductInput
}

input ProductUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutCategoryDataInput!
}

input ProductUpdateWithWhereUniqueWithoutPublisherInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutPublisherDataInput!
}

input ProductUpdateWithWhereUniqueWithoutTypeInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutTypeDataInput!
}

input ProductUpsertNestedInput {
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductUpsertWithoutImagesInput {
  update: ProductUpdateWithoutImagesDataInput!
  create: ProductCreateWithoutImagesInput!
}

input ProductUpsertWithoutTagsInput {
  update: ProductUpdateWithoutTagsDataInput!
  create: ProductCreateWithoutTagsInput!
}

input ProductUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutCategoryDataInput!
  create: ProductCreateWithoutCategoryInput!
}

input ProductUpsertWithWhereUniqueWithoutPublisherInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutPublisherDataInput!
  create: ProductCreateWithoutPublisherInput!
}

input ProductUpsertWithWhereUniqueWithoutTypeInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutTypeDataInput!
  create: ProductCreateWithoutTypeInput!
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
  sku: Int
  """
  All values that are not equal to given value.
  """
  sku_not: Int
  """
  All values that are contained in given list.
  """
  sku_in: [Int!]
  """
  All values that are not contained in given list.
  """
  sku_not_in: [Int!]
  """
  All values less than the given value.
  """
  sku_lt: Int
  """
  All values less than or equal the given value.
  """
  sku_lte: Int
  """
  All values greater than the given value.
  """
  sku_gt: Int
  """
  All values greater than or equal the given value.
  """
  sku_gte: Int
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
  edition: Int
  """
  All values that are not equal to given value.
  """
  edition_not: Int
  """
  All values that are contained in given list.
  """
  edition_in: [Int!]
  """
  All values that are not contained in given list.
  """
  edition_not_in: [Int!]
  """
  All values less than the given value.
  """
  edition_lt: Int
  """
  All values less than or equal the given value.
  """
  edition_lte: Int
  """
  All values greater than the given value.
  """
  edition_gt: Int
  """
  All values greater than or equal the given value.
  """
  edition_gte: Int
  active: Boolean
  """
  All values that are not equal to given value.
  """
  active_not: Boolean
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
  mrp: Float
  """
  All values that are not equal to given value.
  """
  mrp_not: Float
  """
  All values that are contained in given list.
  """
  mrp_in: [Float!]
  """
  All values that are not contained in given list.
  """
  mrp_not_in: [Float!]
  """
  All values less than the given value.
  """
  mrp_lt: Float
  """
  All values less than or equal the given value.
  """
  mrp_lte: Float
  """
  All values greater than the given value.
  """
  mrp_gt: Float
  """
  All values greater than or equal the given value.
  """
  mrp_gte: Float
  slug: String
  """
  All values that are not equal to given value.
  """
  slug_not: String
  """
  All values that are contained in given list.
  """
  slug_in: [String!]
  """
  All values that are not contained in given list.
  """
  slug_not_in: [String!]
  """
  All values less than the given value.
  """
  slug_lt: String
  """
  All values less than or equal the given value.
  """
  slug_lte: String
  """
  All values greater than the given value.
  """
  slug_gt: String
  """
  All values greater than or equal the given value.
  """
  slug_gte: String
  """
  All values containing the given string.
  """
  slug_contains: String
  """
  All values not containing the given string.
  """
  slug_not_contains: String
  """
  All values starting with the given string.
  """
  slug_starts_with: String
  """
  All values not starting with the given string.
  """
  slug_not_starts_with: String
  """
  All values ending with the given string.
  """
  slug_ends_with: String
  """
  All values not ending with the given string.
  """
  slug_not_ends_with: String
  publisher: PublisherWhereInput
  category: ProductCategoryWhereInput
  type: ProductTypeWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  images_every: ImageWhereInput
  images_some: ImageWhereInput
  images_none: ImageWhereInput
}

input ProductWhereUniqueInput {
  id: ID
  slug: String
}

type Publisher implements Node {
  id: ID!
  name: String!
  discount: Int!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  type: ProductType!
}

"""
A connection to a list of items.
"""
type PublisherConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [PublisherEdge]!
  aggregate: AggregatePublisher!
}

input PublisherCreateInput {
  name: String!
  discount: Int!
  products: ProductCreateManyWithoutPublisherInput
  type: ProductTypeCreateOneWithoutPublishersInput!
}

input PublisherCreateManyWithoutTypeInput {
  create: [PublisherCreateWithoutTypeInput!]
  connect: [PublisherWhereUniqueInput!]
}

input PublisherCreateOneWithoutProductsInput {
  create: PublisherCreateWithoutProductsInput
  connect: PublisherWhereUniqueInput
}

input PublisherCreateWithoutProductsInput {
  name: String!
  discount: Int!
  type: ProductTypeCreateOneWithoutPublishersInput!
}

input PublisherCreateWithoutTypeInput {
  name: String!
  discount: Int!
  products: ProductCreateManyWithoutPublisherInput
}

"""
An edge in a connection.
"""
type PublisherEdge {
  """
  The item at the end of the edge.
  """
  node: Publisher!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum PublisherOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  discount_ASC
  discount_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PublisherPreviousValues {
  id: ID!
  name: String!
  discount: Int!
}

input PublisherScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PublisherScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PublisherScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PublisherScalarWhereInput!]
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

type PublisherSubscriptionPayload {
  mutation: MutationType!
  node: Publisher
  updatedFields: [String!]
  previousValues: PublisherPreviousValues
}

input PublisherSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PublisherSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PublisherSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PublisherSubscriptionWhereInput!]
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
  node: PublisherWhereInput
}

input PublisherUpdateInput {
  name: String
  discount: Int
  products: ProductUpdateManyWithoutPublisherInput
  type: ProductTypeUpdateOneRequiredWithoutPublishersInput
}

input PublisherUpdateManyDataInput {
  name: String
  discount: Int
}

input PublisherUpdateManyMutationInput {
  name: String
  discount: Int
}

input PublisherUpdateManyWithoutTypeInput {
  create: [PublisherCreateWithoutTypeInput!]
  connect: [PublisherWhereUniqueInput!]
  set: [PublisherWhereUniqueInput!]
  disconnect: [PublisherWhereUniqueInput!]
  delete: [PublisherWhereUniqueInput!]
  update: [PublisherUpdateWithWhereUniqueWithoutTypeInput!]
  updateMany: [PublisherUpdateManyWithWhereNestedInput!]
  deleteMany: [PublisherScalarWhereInput!]
  upsert: [PublisherUpsertWithWhereUniqueWithoutTypeInput!]
}

input PublisherUpdateManyWithWhereNestedInput {
  where: PublisherScalarWhereInput!
  data: PublisherUpdateManyDataInput!
}

input PublisherUpdateOneRequiredWithoutProductsInput {
  create: PublisherCreateWithoutProductsInput
  connect: PublisherWhereUniqueInput
  update: PublisherUpdateWithoutProductsDataInput
  upsert: PublisherUpsertWithoutProductsInput
}

input PublisherUpdateWithoutProductsDataInput {
  name: String
  discount: Int
  type: ProductTypeUpdateOneRequiredWithoutPublishersInput
}

input PublisherUpdateWithoutTypeDataInput {
  name: String
  discount: Int
  products: ProductUpdateManyWithoutPublisherInput
}

input PublisherUpdateWithWhereUniqueWithoutTypeInput {
  where: PublisherWhereUniqueInput!
  data: PublisherUpdateWithoutTypeDataInput!
}

input PublisherUpsertWithoutProductsInput {
  update: PublisherUpdateWithoutProductsDataInput!
  create: PublisherCreateWithoutProductsInput!
}

input PublisherUpsertWithWhereUniqueWithoutTypeInput {
  where: PublisherWhereUniqueInput!
  update: PublisherUpdateWithoutTypeDataInput!
  create: PublisherCreateWithoutTypeInput!
}

input PublisherWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PublisherWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PublisherWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PublisherWhereInput!]
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
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  type: ProductTypeWhereInput
}

input PublisherWhereUniqueInput {
  id: ID
  name: String
}

type Tag implements Node {
  id: ID!
  text: String!
  product: Product!
}

"""
A connection to a list of items.
"""
type TagConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  text: String!
  product: ProductCreateOneWithoutTagsInput!
}

input TagCreateManyWithoutProductInput {
  create: [TagCreateWithoutProductInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutProductInput {
  text: String!
}

"""
An edge in a connection.
"""
type TagEdge {
  """
  The item at the end of the edge.
  """
  node: Tag!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TagPreviousValues {
  id: ID!
  text: String!
}

input TagScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TagScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TagScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TagScalarWhereInput!]
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
  text: String
  """
  All values that are not equal to given value.
  """
  text_not: String
  """
  All values that are contained in given list.
  """
  text_in: [String!]
  """
  All values that are not contained in given list.
  """
  text_not_in: [String!]
  """
  All values less than the given value.
  """
  text_lt: String
  """
  All values less than or equal the given value.
  """
  text_lte: String
  """
  All values greater than the given value.
  """
  text_gt: String
  """
  All values greater than or equal the given value.
  """
  text_gte: String
  """
  All values containing the given string.
  """
  text_contains: String
  """
  All values not containing the given string.
  """
  text_not_contains: String
  """
  All values starting with the given string.
  """
  text_starts_with: String
  """
  All values not starting with the given string.
  """
  text_not_starts_with: String
  """
  All values ending with the given string.
  """
  text_ends_with: String
  """
  All values not ending with the given string.
  """
  text_not_ends_with: String
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TagSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TagSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TagSubscriptionWhereInput!]
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
  node: TagWhereInput
}

input TagUpdateInput {
  text: String
  product: ProductUpdateOneRequiredWithoutTagsInput
}

input TagUpdateManyDataInput {
  text: String
}

input TagUpdateManyMutationInput {
  text: String
}

input TagUpdateManyWithoutProductInput {
  create: [TagCreateWithoutProductInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  delete: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutProductInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
  deleteMany: [TagScalarWhereInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutProductInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithoutProductDataInput {
  text: String
}

input TagUpdateWithWhereUniqueWithoutProductInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutProductDataInput!
}

input TagUpsertWithWhereUniqueWithoutProductInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutProductDataInput!
  create: TagCreateWithoutProductInput!
}

input TagWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TagWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TagWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TagWhereInput!]
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
  text: String
  """
  All values that are not equal to given value.
  """
  text_not: String
  """
  All values that are contained in given list.
  """
  text_in: [String!]
  """
  All values that are not contained in given list.
  """
  text_not_in: [String!]
  """
  All values less than the given value.
  """
  text_lt: String
  """
  All values less than or equal the given value.
  """
  text_lte: String
  """
  All values greater than the given value.
  """
  text_gt: String
  """
  All values greater than or equal the given value.
  """
  text_gte: String
  """
  All values containing the given string.
  """
  text_contains: String
  """
  All values not containing the given string.
  """
  text_not_contains: String
  """
  All values starting with the given string.
  """
  text_starts_with: String
  """
  All values not starting with the given string.
  """
  text_not_starts_with: String
  """
  All values ending with the given string.
  """
  text_ends_with: String
  """
  All values not ending with the given string.
  """
  text_not_ends_with: String
  product: ProductWhereInput
}

input TagWhereUniqueInput {
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
  cart(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct!]
  streetAddress: String
  city: String
  state: String
  postalCode: String
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
  streetAddress: String
  city: String
  state: String
  postalCode: String
  permissions: UserCreatepermissionsInput
  cart: CartProductCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutCartInput {
  name: String!
  email: String!
  number: String
  walletBalance: Int
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  streetAddress: String
  city: String
  state: String
  postalCode: String
  permissions: UserCreatepermissionsInput
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
  streetAddress_ASC
  streetAddress_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  postalCode_ASC
  postalCode_DESC
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
  streetAddress: String
  city: String
  state: String
  postalCode: String
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

input UserUpdateDataInput {
  name: String
  email: String
  number: String
  walletBalance: Int
  password: String
  resetToken: String
  resetTokenExpiry: Float
  streetAddress: String
  city: String
  state: String
  postalCode: String
  permissions: UserUpdatepermissionsInput
  cart: CartProductUpdateManyWithoutUserInput
}

input UserUpdateInput {
  name: String
  email: String
  number: String
  walletBalance: Int
  password: String
  resetToken: String
  resetTokenExpiry: Float
  streetAddress: String
  city: String
  state: String
  postalCode: String
  permissions: UserUpdatepermissionsInput
  cart: CartProductUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  number: String
  walletBalance: Int
  password: String
  resetToken: String
  resetTokenExpiry: Float
  streetAddress: String
  city: String
  state: String
  postalCode: String
  permissions: UserUpdatepermissionsInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutCartDataInput {
  name: String
  email: String
  number: String
  walletBalance: Int
  password: String
  resetToken: String
  resetTokenExpiry: Float
  streetAddress: String
  city: String
  state: String
  postalCode: String
  permissions: UserUpdatepermissionsInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput!
  create: UserCreateWithoutCartInput!
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
  streetAddress: String
  """
  All values that are not equal to given value.
  """
  streetAddress_not: String
  """
  All values that are contained in given list.
  """
  streetAddress_in: [String!]
  """
  All values that are not contained in given list.
  """
  streetAddress_not_in: [String!]
  """
  All values less than the given value.
  """
  streetAddress_lt: String
  """
  All values less than or equal the given value.
  """
  streetAddress_lte: String
  """
  All values greater than the given value.
  """
  streetAddress_gt: String
  """
  All values greater than or equal the given value.
  """
  streetAddress_gte: String
  """
  All values containing the given string.
  """
  streetAddress_contains: String
  """
  All values not containing the given string.
  """
  streetAddress_not_contains: String
  """
  All values starting with the given string.
  """
  streetAddress_starts_with: String
  """
  All values not starting with the given string.
  """
  streetAddress_not_starts_with: String
  """
  All values ending with the given string.
  """
  streetAddress_ends_with: String
  """
  All values not ending with the given string.
  """
  streetAddress_not_ends_with: String
  city: String
  """
  All values that are not equal to given value.
  """
  city_not: String
  """
  All values that are contained in given list.
  """
  city_in: [String!]
  """
  All values that are not contained in given list.
  """
  city_not_in: [String!]
  """
  All values less than the given value.
  """
  city_lt: String
  """
  All values less than or equal the given value.
  """
  city_lte: String
  """
  All values greater than the given value.
  """
  city_gt: String
  """
  All values greater than or equal the given value.
  """
  city_gte: String
  """
  All values containing the given string.
  """
  city_contains: String
  """
  All values not containing the given string.
  """
  city_not_contains: String
  """
  All values starting with the given string.
  """
  city_starts_with: String
  """
  All values not starting with the given string.
  """
  city_not_starts_with: String
  """
  All values ending with the given string.
  """
  city_ends_with: String
  """
  All values not ending with the given string.
  """
  city_not_ends_with: String
  state: String
  """
  All values that are not equal to given value.
  """
  state_not: String
  """
  All values that are contained in given list.
  """
  state_in: [String!]
  """
  All values that are not contained in given list.
  """
  state_not_in: [String!]
  """
  All values less than the given value.
  """
  state_lt: String
  """
  All values less than or equal the given value.
  """
  state_lte: String
  """
  All values greater than the given value.
  """
  state_gt: String
  """
  All values greater than or equal the given value.
  """
  state_gte: String
  """
  All values containing the given string.
  """
  state_contains: String
  """
  All values not containing the given string.
  """
  state_not_contains: String
  """
  All values starting with the given string.
  """
  state_starts_with: String
  """
  All values not starting with the given string.
  """
  state_not_starts_with: String
  """
  All values ending with the given string.
  """
  state_ends_with: String
  """
  All values not ending with the given string.
  """
  state_not_ends_with: String
  postalCode: String
  """
  All values that are not equal to given value.
  """
  postalCode_not: String
  """
  All values that are contained in given list.
  """
  postalCode_in: [String!]
  """
  All values that are not contained in given list.
  """
  postalCode_not_in: [String!]
  """
  All values less than the given value.
  """
  postalCode_lt: String
  """
  All values less than or equal the given value.
  """
  postalCode_lte: String
  """
  All values greater than the given value.
  """
  postalCode_gt: String
  """
  All values greater than or equal the given value.
  """
  postalCode_gte: String
  """
  All values containing the given string.
  """
  postalCode_contains: String
  """
  All values not containing the given string.
  """
  postalCode_not_contains: String
  """
  All values starting with the given string.
  """
  postalCode_starts_with: String
  """
  All values not starting with the given string.
  """
  postalCode_not_starts_with: String
  """
  All values ending with the given string.
  """
  postalCode_ends_with: String
  """
  All values not ending with the given string.
  """
  postalCode_not_ends_with: String
  cart_every: CartProductWhereInput
  cart_some: CartProductWhereInput
  cart_none: CartProductWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createProductCategory(data: ProductCategoryCreateInput!): ProductCategory!
  createProductType(data: ProductTypeCreateInput!): ProductType!
  createPublisher(data: PublisherCreateInput!): Publisher!
  createImage(data: ImageCreateInput!): Image!
  createTag(data: TagCreateInput!): Tag!
  createCartProduct(data: CartProductCreateInput!): CartProduct!
  createOrder(data: OrderCreateInput!): Order!
  createPostalCode(data: PostalCodeCreateInput!): PostalCode!
  createUser(data: UserCreateInput!): User!
  createOrderProduct(data: OrderProductCreateInput!): OrderProduct!
  createProduct(data: ProductCreateInput!): Product!
  updateProductCategory(data: ProductCategoryUpdateInput!, where: ProductCategoryWhereUniqueInput!): ProductCategory
  updateProductType(data: ProductTypeUpdateInput!, where: ProductTypeWhereUniqueInput!): ProductType
  updatePublisher(data: PublisherUpdateInput!, where: PublisherWhereUniqueInput!): Publisher
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateCartProduct(data: CartProductUpdateInput!, where: CartProductWhereUniqueInput!): CartProduct
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updatePostalCode(data: PostalCodeUpdateInput!, where: PostalCodeWhereUniqueInput!): PostalCode
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateOrderProduct(data: OrderProductUpdateInput!, where: OrderProductWhereUniqueInput!): OrderProduct
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  deleteProductCategory(where: ProductCategoryWhereUniqueInput!): ProductCategory
  deleteProductType(where: ProductTypeWhereUniqueInput!): ProductType
  deletePublisher(where: PublisherWhereUniqueInput!): Publisher
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteCartProduct(where: CartProductWhereUniqueInput!): CartProduct
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deletePostalCode(where: PostalCodeWhereUniqueInput!): PostalCode
  deleteUser(where: UserWhereUniqueInput!): User
  deleteOrderProduct(where: OrderProductWhereUniqueInput!): OrderProduct
  deleteProduct(where: ProductWhereUniqueInput!): Product
  upsertProductCategory(where: ProductCategoryWhereUniqueInput!, create: ProductCategoryCreateInput!, update: ProductCategoryUpdateInput!): ProductCategory!
  upsertProductType(where: ProductTypeWhereUniqueInput!, create: ProductTypeCreateInput!, update: ProductTypeUpdateInput!): ProductType!
  upsertPublisher(where: PublisherWhereUniqueInput!, create: PublisherCreateInput!, update: PublisherUpdateInput!): Publisher!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  upsertCartProduct(where: CartProductWhereUniqueInput!, create: CartProductCreateInput!, update: CartProductUpdateInput!): CartProduct!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  upsertPostalCode(where: PostalCodeWhereUniqueInput!, create: PostalCodeCreateInput!, update: PostalCodeUpdateInput!): PostalCode!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertOrderProduct(where: OrderProductWhereUniqueInput!, create: OrderProductCreateInput!, update: OrderProductUpdateInput!): OrderProduct!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  updateManyProductCategories(data: ProductCategoryUpdateManyMutationInput!, where: ProductCategoryWhereInput): BatchPayload!
  updateManyProductTypes(data: ProductTypeUpdateManyMutationInput!, where: ProductTypeWhereInput): BatchPayload!
  updateManyPublishers(data: PublisherUpdateManyMutationInput!, where: PublisherWhereInput): BatchPayload!
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  updateManyCartProducts(data: CartProductUpdateManyMutationInput!, where: CartProductWhereInput): BatchPayload!
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  updateManyPostalCodes(data: PostalCodeUpdateManyMutationInput!, where: PostalCodeWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyOrderProducts(data: OrderProductUpdateManyMutationInput!, where: OrderProductWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  deleteManyProductCategories(where: ProductCategoryWhereInput): BatchPayload!
  deleteManyProductTypes(where: ProductTypeWhereInput): BatchPayload!
  deleteManyPublishers(where: PublisherWhereInput): BatchPayload!
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
  deleteManyCartProducts(where: CartProductWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  deleteManyPostalCodes(where: PostalCodeWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyOrderProducts(where: OrderProductWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
}

type Query {
  productCategories(where: ProductCategoryWhereInput, orderBy: ProductCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductCategory]!
  productTypes(where: ProductTypeWhereInput, orderBy: ProductTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductType]!
  publishers(where: PublisherWhereInput, orderBy: PublisherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Publisher]!
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  cartProducts(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct]!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  postalCodes(where: PostalCodeWhereInput, orderBy: PostalCodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostalCode]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  orderProducts(where: OrderProductWhereInput, orderBy: OrderProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderProduct]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productCategory(where: ProductCategoryWhereUniqueInput!): ProductCategory
  productType(where: ProductTypeWhereUniqueInput!): ProductType
  publisher(where: PublisherWhereUniqueInput!): Publisher
  image(where: ImageWhereUniqueInput!): Image
  tag(where: TagWhereUniqueInput!): Tag
  cartProduct(where: CartProductWhereUniqueInput!): CartProduct
  order(where: OrderWhereUniqueInput!): Order
  postalCode(where: PostalCodeWhereUniqueInput!): PostalCode
  user(where: UserWhereUniqueInput!): User
  orderProduct(where: OrderProductWhereUniqueInput!): OrderProduct
  product(where: ProductWhereUniqueInput!): Product
  productCategoriesConnection(where: ProductCategoryWhereInput, orderBy: ProductCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductCategoryConnection!
  productTypesConnection(where: ProductTypeWhereInput, orderBy: ProductTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductTypeConnection!
  publishersConnection(where: PublisherWhereInput, orderBy: PublisherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PublisherConnection!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  cartProductsConnection(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartProductConnection!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  postalCodesConnection(where: PostalCodeWhereInput, orderBy: PostalCodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostalCodeConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  orderProductsConnection(where: OrderProductWhereInput, orderBy: OrderProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderProductConnection!
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
  productCategory(where: ProductCategorySubscriptionWhereInput): ProductCategorySubscriptionPayload
  productType(where: ProductTypeSubscriptionWhereInput): ProductTypeSubscriptionPayload
  publisher(where: PublisherSubscriptionWhereInput): PublisherSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  cartProduct(where: CartProductSubscriptionWhereInput): CartProductSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  postalCode(where: PostalCodeSubscriptionWhereInput): PostalCodeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  orderProduct(where: OrderProductSubscriptionWhereInput): OrderProductSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
}
`

export type CartProductOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProductOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'sku_ASC' |
  'sku_DESC' |
  'title_ASC' |
  'title_DESC' |
  'author_ASC' |
  'author_DESC' |
  'subject_ASC' |
  'subject_DESC' |
  'edition_ASC' |
  'edition_DESC' |
  'active_ASC' |
  'active_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'detail_ASC' |
  'detail_DESC' |
  'description_ASC' |
  'description_DESC' |
  'mrp_ASC' |
  'mrp_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProductTypeOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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
  'streetAddress_ASC' |
  'streetAddress_DESC' |
  'city_ASC' |
  'city_DESC' |
  'state_ASC' |
  'state_DESC' |
  'postalCode_ASC' |
  'postalCode_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PublisherOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'discount_ASC' |
  'discount_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TagOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProductCategoryOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'image_ASC' |
  'image_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ImageOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'src_ASC' |
  'src_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PostalCodeOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'code_ASC' |
  'code_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export type Permission = 
  'ADMIN' |
  'USER' |
  'BOOKCREATE' |
  'BOOKUPDATE' |
  'BOOKDELETE' |
  'PERMISSIONUPDATE'

export type OrderOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'isVookBalanceUsed_ASC' |
  'isVookBalanceUsed_DESC' |
  'addressSetToDefault_ASC' |
  'addressSetToDefault_DESC' |
  'couponCode_ASC' |
  'couponCode_DESC' |
  'streetAddress_ASC' |
  'streetAddress_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'email_ASC' |
  'email_DESC' |
  'city_ASC' |
  'city_DESC' |
  'state_ASC' |
  'state_DESC' |
  'postalCode_ASC' |
  'postalCode_DESC' |
  'orderId_ASC' |
  'orderId_DESC' |
  'subTotal_ASC' |
  'subTotal_DESC' |
  'total_ASC' |
  'total_DESC' |
  'status_ASC' |
  'status_DESC' |
  'orderDateTime_ASC' |
  'orderDateTime_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OrderProductOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'author_ASC' |
  'author_DESC' |
  'publisher_ASC' |
  'publisher_DESC' |
  'image_ASC' |
  'image_DESC' |
  'price_ASC' |
  'price_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface ProductTypeUpdateWithoutPublishersDataInput {
  name?: String
  products?: ProductUpdateManyWithoutTypeInput
  category?: ProductCategoryUpdateOneRequiredWithoutTypesInput
}

export interface ProductCategoryWhereInput {
  AND?: ProductCategoryWhereInput[] | ProductCategoryWhereInput
  OR?: ProductCategoryWhereInput[] | ProductCategoryWhereInput
  NOT?: ProductCategoryWhereInput[] | ProductCategoryWhereInput
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
  image?: String
  image_not?: String
  image_in?: String[] | String
  image_not_in?: String[] | String
  image_lt?: String
  image_lte?: String
  image_gt?: String
  image_gte?: String
  image_contains?: String
  image_not_contains?: String
  image_starts_with?: String
  image_not_starts_with?: String
  image_ends_with?: String
  image_not_ends_with?: String
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
  products_every?: ProductWhereInput
  products_some?: ProductWhereInput
  products_none?: ProductWhereInput
  types_every?: ProductTypeWhereInput
  types_some?: ProductTypeWhereInput
  types_none?: ProductTypeWhereInput
}

export interface ProductTypeCreateInput {
  name: String
  products?: ProductCreateManyWithoutTypeInput
  category: ProductCategoryCreateOneWithoutTypesInput
  publishers?: PublisherCreateManyWithoutTypeInput
}

export interface ProductUpsertNestedInput {
  update: ProductUpdateDataInput
  create: ProductCreateInput
}

export interface PublisherCreateInput {
  name: String
  discount: Int
  products?: ProductCreateManyWithoutPublisherInput
  type: ProductTypeCreateOneWithoutPublishersInput
}

export interface ProductTypeUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProductTypeWhereUniqueInput
  data: ProductTypeUpdateWithoutCategoryDataInput
}

export interface ImageCreateInput {
  src: String
  product: ProductCreateOneWithoutImagesInput
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

export interface ProductCreateOneWithoutImagesInput {
  create?: ProductCreateWithoutImagesInput
  connect?: ProductWhereUniqueInput
}

export interface PostalCodeSubscriptionWhereInput {
  AND?: PostalCodeSubscriptionWhereInput[] | PostalCodeSubscriptionWhereInput
  OR?: PostalCodeSubscriptionWhereInput[] | PostalCodeSubscriptionWhereInput
  NOT?: PostalCodeSubscriptionWhereInput[] | PostalCodeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostalCodeWhereInput
}

export interface ProductCreateWithoutImagesInput {
  sku?: Int
  title: String
  author: String
  subject: String
  edition: Int
  active?: Boolean
  quantity: Int
  detail: String
  description?: String
  mrp: Float
  slug: String
  publisher: PublisherCreateOneWithoutProductsInput
  category: ProductCategoryCreateOneWithoutProductsInput
  type: ProductTypeCreateOneWithoutProductsInput
  tags?: TagCreateManyWithoutProductInput
}

export interface CartProductWhereInput {
  AND?: CartProductWhereInput[] | CartProductWhereInput
  OR?: CartProductWhereInput[] | CartProductWhereInput
  NOT?: CartProductWhereInput[] | CartProductWhereInput
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
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  product?: ProductWhereInput
  user?: UserWhereInput
}

export interface TagCreateInput {
  text: String
  product: ProductCreateOneWithoutTagsInput
}

export interface ProductTypeWhereInput {
  AND?: ProductTypeWhereInput[] | ProductTypeWhereInput
  OR?: ProductTypeWhereInput[] | ProductTypeWhereInput
  NOT?: ProductTypeWhereInput[] | ProductTypeWhereInput
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
  products_every?: ProductWhereInput
  products_some?: ProductWhereInput
  products_none?: ProductWhereInput
  category?: ProductCategoryWhereInput
  publishers_every?: PublisherWhereInput
  publishers_some?: PublisherWhereInput
  publishers_none?: PublisherWhereInput
}

export interface ProductCreateOneWithoutTagsInput {
  create?: ProductCreateWithoutTagsInput
  connect?: ProductWhereUniqueInput
}

export interface CartProductSubscriptionWhereInput {
  AND?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput
  OR?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput
  NOT?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CartProductWhereInput
}

export interface ProductCreateWithoutTagsInput {
  sku?: Int
  title: String
  author: String
  subject: String
  edition: Int
  active?: Boolean
  quantity: Int
  detail: String
  description?: String
  mrp: Float
  slug: String
  publisher: PublisherCreateOneWithoutProductsInput
  category: ProductCategoryCreateOneWithoutProductsInput
  type: ProductTypeCreateOneWithoutProductsInput
  images?: ImageCreateManyWithoutProductInput
}

export interface OrderWhereInput {
  AND?: OrderWhereInput[] | OrderWhereInput
  OR?: OrderWhereInput[] | OrderWhereInput
  NOT?: OrderWhereInput[] | OrderWhereInput
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
  isVookBalanceUsed?: Boolean
  isVookBalanceUsed_not?: Boolean
  addressSetToDefault?: Boolean
  addressSetToDefault_not?: Boolean
  couponCode?: String
  couponCode_not?: String
  couponCode_in?: String[] | String
  couponCode_not_in?: String[] | String
  couponCode_lt?: String
  couponCode_lte?: String
  couponCode_gt?: String
  couponCode_gte?: String
  couponCode_contains?: String
  couponCode_not_contains?: String
  couponCode_starts_with?: String
  couponCode_not_starts_with?: String
  couponCode_ends_with?: String
  couponCode_not_ends_with?: String
  streetAddress?: String
  streetAddress_not?: String
  streetAddress_in?: String[] | String
  streetAddress_not_in?: String[] | String
  streetAddress_lt?: String
  streetAddress_lte?: String
  streetAddress_gt?: String
  streetAddress_gte?: String
  streetAddress_contains?: String
  streetAddress_not_contains?: String
  streetAddress_starts_with?: String
  streetAddress_not_starts_with?: String
  streetAddress_ends_with?: String
  streetAddress_not_ends_with?: String
  phone?: String
  phone_not?: String
  phone_in?: String[] | String
  phone_not_in?: String[] | String
  phone_lt?: String
  phone_lte?: String
  phone_gt?: String
  phone_gte?: String
  phone_contains?: String
  phone_not_contains?: String
  phone_starts_with?: String
  phone_not_starts_with?: String
  phone_ends_with?: String
  phone_not_ends_with?: String
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
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  state?: String
  state_not?: String
  state_in?: String[] | String
  state_not_in?: String[] | String
  state_lt?: String
  state_lte?: String
  state_gt?: String
  state_gte?: String
  state_contains?: String
  state_not_contains?: String
  state_starts_with?: String
  state_not_starts_with?: String
  state_ends_with?: String
  state_not_ends_with?: String
  postalCode?: String
  postalCode_not?: String
  postalCode_in?: String[] | String
  postalCode_not_in?: String[] | String
  postalCode_lt?: String
  postalCode_lte?: String
  postalCode_gt?: String
  postalCode_gte?: String
  postalCode_contains?: String
  postalCode_not_contains?: String
  postalCode_starts_with?: String
  postalCode_not_starts_with?: String
  postalCode_ends_with?: String
  postalCode_not_ends_with?: String
  orderId?: Int
  orderId_not?: Int
  orderId_in?: Int[] | Int
  orderId_not_in?: Int[] | Int
  orderId_lt?: Int
  orderId_lte?: Int
  orderId_gt?: Int
  orderId_gte?: Int
  subTotal?: Float
  subTotal_not?: Float
  subTotal_in?: Float[] | Float
  subTotal_not_in?: Float[] | Float
  subTotal_lt?: Float
  subTotal_lte?: Float
  subTotal_gt?: Float
  subTotal_gte?: Float
  total?: Float
  total_not?: Float
  total_in?: Float[] | Float
  total_not_in?: Float[] | Float
  total_lt?: Float
  total_lte?: Float
  total_gt?: Float
  total_gte?: Float
  status?: String
  status_not?: String
  status_in?: String[] | String
  status_not_in?: String[] | String
  status_lt?: String
  status_lte?: String
  status_gt?: String
  status_gte?: String
  status_contains?: String
  status_not_contains?: String
  status_starts_with?: String
  status_not_starts_with?: String
  status_ends_with?: String
  status_not_ends_with?: String
  orderDateTime?: DateTime
  orderDateTime_not?: DateTime
  orderDateTime_in?: DateTime[] | DateTime
  orderDateTime_not_in?: DateTime[] | DateTime
  orderDateTime_lt?: DateTime
  orderDateTime_lte?: DateTime
  orderDateTime_gt?: DateTime
  orderDateTime_gte?: DateTime
  products_every?: OrderProductWhereInput
  products_some?: OrderProductWhereInput
  products_none?: OrderProductWhereInput
  user?: UserWhereInput
}

export interface CartProductCreateInput {
  quantity?: Int
  product: ProductCreateOneInput
  user: UserCreateOneWithoutCartInput
}

export interface OrderProductWhereInput {
  AND?: OrderProductWhereInput[] | OrderProductWhereInput
  OR?: OrderProductWhereInput[] | OrderProductWhereInput
  NOT?: OrderProductWhereInput[] | OrderProductWhereInput
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
  image?: String
  image_not?: String
  image_in?: String[] | String
  image_not_in?: String[] | String
  image_lt?: String
  image_lte?: String
  image_gt?: String
  image_gte?: String
  image_contains?: String
  image_not_contains?: String
  image_starts_with?: String
  image_not_starts_with?: String
  image_ends_with?: String
  image_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  user?: UserWhereInput
}

export interface ProductCreateOneInput {
  create?: ProductCreateInput
  connect?: ProductWhereUniqueInput
}

export interface PublisherSubscriptionWhereInput {
  AND?: PublisherSubscriptionWhereInput[] | PublisherSubscriptionWhereInput
  OR?: PublisherSubscriptionWhereInput[] | PublisherSubscriptionWhereInput
  NOT?: PublisherSubscriptionWhereInput[] | PublisherSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PublisherWhereInput
}

export interface ProductCreateInput {
  sku?: Int
  title: String
  author: String
  subject: String
  edition: Int
  active?: Boolean
  quantity: Int
  detail: String
  description?: String
  mrp: Float
  slug: String
  publisher: PublisherCreateOneWithoutProductsInput
  category: ProductCategoryCreateOneWithoutProductsInput
  type: ProductTypeCreateOneWithoutProductsInput
  tags?: TagCreateManyWithoutProductInput
  images?: ImageCreateManyWithoutProductInput
}

export interface ProductCategorySubscriptionWhereInput {
  AND?: ProductCategorySubscriptionWhereInput[] | ProductCategorySubscriptionWhereInput
  OR?: ProductCategorySubscriptionWhereInput[] | ProductCategorySubscriptionWhereInput
  NOT?: ProductCategorySubscriptionWhereInput[] | ProductCategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductCategoryWhereInput
}

export interface UserCreateOneWithoutCartInput {
  create?: UserCreateWithoutCartInput
  connect?: UserWhereUniqueInput
}

export interface ProductUpdateManyMutationInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Float
  slug?: String
}

export interface UserCreateWithoutCartInput {
  name: String
  email: String
  number?: String
  walletBalance?: Int
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  streetAddress?: String
  city?: String
  state?: String
  postalCode?: String
  permissions?: UserCreatepermissionsInput
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
  sku?: Int
  sku_not?: Int
  sku_in?: Int[] | Int
  sku_not_in?: Int[] | Int
  sku_lt?: Int
  sku_lte?: Int
  sku_gt?: Int
  sku_gte?: Int
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
  edition?: Int
  edition_not?: Int
  edition_in?: Int[] | Int
  edition_not_in?: Int[] | Int
  edition_lt?: Int
  edition_lte?: Int
  edition_gt?: Int
  edition_gte?: Int
  active?: Boolean
  active_not?: Boolean
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
  mrp?: Float
  mrp_not?: Float
  mrp_in?: Float[] | Float
  mrp_not_in?: Float[] | Float
  mrp_lt?: Float
  mrp_lte?: Float
  mrp_gt?: Float
  mrp_gte?: Float
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  publisher?: PublisherWhereInput
  category?: ProductCategoryWhereInput
  type?: ProductTypeWhereInput
  tags_every?: TagWhereInput
  tags_some?: TagWhereInput
  tags_none?: TagWhereInput
  images_every?: ImageWhereInput
  images_some?: ImageWhereInput
  images_none?: ImageWhereInput
}

export interface UserCreatepermissionsInput {
  set?: Permission[] | Permission
}

export interface ProductTypeWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface OrderCreateInput {
  isVookBalanceUsed?: Boolean
  addressSetToDefault?: Boolean
  couponCode?: String
  streetAddress?: String
  phone?: String
  email?: String
  city?: String
  state?: String
  postalCode?: String
  orderId: Int
  subTotal?: Float
  total?: Float
  status: String
  orderDateTime?: DateTime
  products?: OrderProductCreateManyInput
  user: UserCreateOneInput
}

export interface ImageWhereUniqueInput {
  id?: ID_Input
}

export interface OrderProductCreateManyInput {
  create?: OrderProductCreateInput[] | OrderProductCreateInput
  connect?: OrderProductWhereUniqueInput[] | OrderProductWhereUniqueInput
}

export interface CartProductWhereUniqueInput {
  id?: ID_Input
}

export interface OrderProductCreateInput {
  title: String
  author: String
  publisher: String
  image: String
  price?: Float
  quantity?: Int
  user?: UserCreateOneInput
}

export interface PostalCodeWhereUniqueInput {
  id?: ID_Input
  code?: String
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface OrderProductWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  name: String
  email: String
  number?: String
  walletBalance?: Int
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  streetAddress?: String
  city?: String
  state?: String
  postalCode?: String
  permissions?: UserCreatepermissionsInput
  cart?: CartProductCreateManyWithoutUserInput
}

export interface UserUpdateManyMutationInput {
  name?: String
  email?: String
  number?: String
  walletBalance?: Int
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
  streetAddress?: String
  city?: String
  state?: String
  postalCode?: String
  permissions?: UserUpdatepermissionsInput
}

export interface CartProductCreateManyWithoutUserInput {
  create?: CartProductCreateWithoutUserInput[] | CartProductCreateWithoutUserInput
  connect?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput
}

export interface OrderUpdateManyMutationInput {
  isVookBalanceUsed?: Boolean
  addressSetToDefault?: Boolean
  couponCode?: String
  streetAddress?: String
  phone?: String
  email?: String
  city?: String
  state?: String
  postalCode?: String
  orderId?: Int
  subTotal?: Float
  total?: Float
  status?: String
  orderDateTime?: DateTime
}

export interface CartProductCreateWithoutUserInput {
  quantity?: Int
  product: ProductCreateOneInput
}

export interface TagUpdateManyMutationInput {
  text?: String
}

export interface PostalCodeCreateInput {
  code: String
}

export interface PublisherUpdateManyMutationInput {
  name?: String
  discount?: Int
}

export interface ProductCategoryUpdateInput {
  name?: String
  image?: String
  description?: String
  products?: ProductUpdateManyWithoutCategoryInput
  types?: ProductTypeUpdateManyWithoutCategoryInput
}

export interface ProductCategoryUpdateManyMutationInput {
  name?: String
  image?: String
  description?: String
}

export interface ProductUpdateManyWithoutCategoryInput {
  create?: ProductCreateWithoutCategoryInput[] | ProductCreateWithoutCategoryInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  set?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutCategoryInput[] | ProductUpdateWithWhereUniqueWithoutCategoryInput
  updateMany?: ProductUpdateManyWithWhereNestedInput[] | ProductUpdateManyWithWhereNestedInput
  deleteMany?: ProductScalarWhereInput[] | ProductScalarWhereInput
  upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput[] | ProductUpsertWithWhereUniqueWithoutCategoryInput
}

export interface OrderProductUpdateInput {
  title?: String
  author?: String
  publisher?: String
  image?: String
  price?: Float
  quantity?: Int
  user?: UserUpdateOneInput
}

export interface ProductUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutCategoryDataInput
}

export interface PostalCodeUpdateInput {
  code?: String
}

export interface ProductUpdateWithoutCategoryDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Float
  slug?: String
  publisher?: PublisherUpdateOneRequiredWithoutProductsInput
  type?: ProductTypeUpdateOneRequiredWithoutProductsInput
  tags?: TagUpdateManyWithoutProductInput
  images?: ImageUpdateManyWithoutProductInput
}

export interface OrderProductUpsertWithWhereUniqueNestedInput {
  where: OrderProductWhereUniqueInput
  update: OrderProductUpdateDataInput
  create: OrderProductCreateInput
}

export interface PublisherUpdateOneRequiredWithoutProductsInput {
  create?: PublisherCreateWithoutProductsInput
  connect?: PublisherWhereUniqueInput
  update?: PublisherUpdateWithoutProductsDataInput
  upsert?: PublisherUpsertWithoutProductsInput
}

export interface OrderProductScalarWhereInput {
  AND?: OrderProductScalarWhereInput[] | OrderProductScalarWhereInput
  OR?: OrderProductScalarWhereInput[] | OrderProductScalarWhereInput
  NOT?: OrderProductScalarWhereInput[] | OrderProductScalarWhereInput
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
  image?: String
  image_not?: String
  image_in?: String[] | String
  image_not_in?: String[] | String
  image_lt?: String
  image_lte?: String
  image_gt?: String
  image_gte?: String
  image_contains?: String
  image_not_contains?: String
  image_starts_with?: String
  image_not_starts_with?: String
  image_ends_with?: String
  image_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
}

export interface PublisherUpdateWithoutProductsDataInput {
  name?: String
  discount?: Int
  type?: ProductTypeUpdateOneRequiredWithoutPublishersInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface ProductTypeUpdateOneRequiredWithoutPublishersInput {
  create?: ProductTypeCreateWithoutPublishersInput
  connect?: ProductTypeWhereUniqueInput
  update?: ProductTypeUpdateWithoutPublishersDataInput
  upsert?: ProductTypeUpsertWithoutPublishersInput
}

export interface CartProductUpdateManyDataInput {
  quantity?: Int
}

export interface UserUpdateWithoutCartDataInput {
  name?: String
  email?: String
  number?: String
  walletBalance?: Int
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
  streetAddress?: String
  city?: String
  state?: String
  postalCode?: String
  permissions?: UserUpdatepermissionsInput
}

export interface CartProductUpdateManyWithWhereNestedInput {
  where: CartProductScalarWhereInput
  data: CartProductUpdateManyDataInput
}

export interface ProductUpdateManyWithoutTypeInput {
  create?: ProductCreateWithoutTypeInput[] | ProductCreateWithoutTypeInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  set?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutTypeInput[] | ProductUpdateWithWhereUniqueWithoutTypeInput
  updateMany?: ProductUpdateManyWithWhereNestedInput[] | ProductUpdateManyWithWhereNestedInput
  deleteMany?: ProductScalarWhereInput[] | ProductScalarWhereInput
  upsert?: ProductUpsertWithWhereUniqueWithoutTypeInput[] | ProductUpsertWithWhereUniqueWithoutTypeInput
}

export interface CartProductUpdateWithWhereUniqueWithoutUserInput {
  where: CartProductWhereUniqueInput
  data: CartProductUpdateWithoutUserDataInput
}

export interface ProductUpdateWithWhereUniqueWithoutTypeInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutTypeDataInput
}

export interface UserUpdateDataInput {
  name?: String
  email?: String
  number?: String
  walletBalance?: Int
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
  streetAddress?: String
  city?: String
  state?: String
  postalCode?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartProductUpdateManyWithoutUserInput
}

export interface ProductUpdateWithoutTypeDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Float
  slug?: String
  publisher?: PublisherUpdateOneRequiredWithoutProductsInput
  category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
  tags?: TagUpdateManyWithoutProductInput
  images?: ImageUpdateManyWithoutProductInput
}

export interface OrderProductUpdateDataInput {
  title?: String
  author?: String
  publisher?: String
  image?: String
  price?: Float
  quantity?: Int
  user?: UserUpdateOneInput
}

export interface ProductCategoryUpdateOneRequiredWithoutProductsInput {
  create?: ProductCategoryCreateWithoutProductsInput
  connect?: ProductCategoryWhereUniqueInput
  update?: ProductCategoryUpdateWithoutProductsDataInput
  upsert?: ProductCategoryUpsertWithoutProductsInput
}

export interface OrderProductUpdateManyInput {
  create?: OrderProductCreateInput[] | OrderProductCreateInput
  connect?: OrderProductWhereUniqueInput[] | OrderProductWhereUniqueInput
  set?: OrderProductWhereUniqueInput[] | OrderProductWhereUniqueInput
  disconnect?: OrderProductWhereUniqueInput[] | OrderProductWhereUniqueInput
  delete?: OrderProductWhereUniqueInput[] | OrderProductWhereUniqueInput
  update?: OrderProductUpdateWithWhereUniqueNestedInput[] | OrderProductUpdateWithWhereUniqueNestedInput
  updateMany?: OrderProductUpdateManyWithWhereNestedInput[] | OrderProductUpdateManyWithWhereNestedInput
  deleteMany?: OrderProductScalarWhereInput[] | OrderProductScalarWhereInput
  upsert?: OrderProductUpsertWithWhereUniqueNestedInput[] | OrderProductUpsertWithWhereUniqueNestedInput
}

export interface ProductCategoryUpdateWithoutProductsDataInput {
  name?: String
  image?: String
  description?: String
  types?: ProductTypeUpdateManyWithoutCategoryInput
}

export interface UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput
  create: UserCreateWithoutCartInput
}

export interface ProductTypeUpdateManyWithoutCategoryInput {
  create?: ProductTypeCreateWithoutCategoryInput[] | ProductTypeCreateWithoutCategoryInput
  connect?: ProductTypeWhereUniqueInput[] | ProductTypeWhereUniqueInput
  set?: ProductTypeWhereUniqueInput[] | ProductTypeWhereUniqueInput
  disconnect?: ProductTypeWhereUniqueInput[] | ProductTypeWhereUniqueInput
  delete?: ProductTypeWhereUniqueInput[] | ProductTypeWhereUniqueInput
  update?: ProductTypeUpdateWithWhereUniqueWithoutCategoryInput[] | ProductTypeUpdateWithWhereUniqueWithoutCategoryInput
  updateMany?: ProductTypeUpdateManyWithWhereNestedInput[] | ProductTypeUpdateManyWithWhereNestedInput
  deleteMany?: ProductTypeScalarWhereInput[] | ProductTypeScalarWhereInput
  upsert?: ProductTypeUpsertWithWhereUniqueWithoutCategoryInput[] | ProductTypeUpsertWithWhereUniqueWithoutCategoryInput
}

export interface ProductCategoryCreateInput {
  name: String
  image?: String
  description?: String
  products?: ProductCreateManyWithoutCategoryInput
  types?: ProductTypeCreateManyWithoutCategoryInput
}

export interface UserUpdateOneRequiredWithoutCartInput {
  create?: UserCreateWithoutCartInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutCartDataInput
  upsert?: UserUpsertWithoutCartInput
}

export interface ProductCreateWithoutCategoryInput {
  sku?: Int
  title: String
  author: String
  subject: String
  edition: Int
  active?: Boolean
  quantity: Int
  detail: String
  description?: String
  mrp: Float
  slug: String
  publisher: PublisherCreateOneWithoutProductsInput
  type: ProductTypeCreateOneWithoutProductsInput
  tags?: TagCreateManyWithoutProductInput
  images?: ImageCreateManyWithoutProductInput
}

export interface ProductTypeUpdateWithoutCategoryDataInput {
  name?: String
  products?: ProductUpdateManyWithoutTypeInput
  publishers?: PublisherUpdateManyWithoutTypeInput
}

export interface PublisherCreateWithoutProductsInput {
  name: String
  discount: Int
  type: ProductTypeCreateOneWithoutPublishersInput
}

export interface PublisherUpdateManyWithoutTypeInput {
  create?: PublisherCreateWithoutTypeInput[] | PublisherCreateWithoutTypeInput
  connect?: PublisherWhereUniqueInput[] | PublisherWhereUniqueInput
  set?: PublisherWhereUniqueInput[] | PublisherWhereUniqueInput
  disconnect?: PublisherWhereUniqueInput[] | PublisherWhereUniqueInput
  delete?: PublisherWhereUniqueInput[] | PublisherWhereUniqueInput
  update?: PublisherUpdateWithWhereUniqueWithoutTypeInput[] | PublisherUpdateWithWhereUniqueWithoutTypeInput
  updateMany?: PublisherUpdateManyWithWhereNestedInput[] | PublisherUpdateManyWithWhereNestedInput
  deleteMany?: PublisherScalarWhereInput[] | PublisherScalarWhereInput
  upsert?: PublisherUpsertWithWhereUniqueWithoutTypeInput[] | PublisherUpsertWithWhereUniqueWithoutTypeInput
}

export interface ProductTypeCreateWithoutPublishersInput {
  name: String
  products?: ProductCreateManyWithoutTypeInput
  category: ProductCategoryCreateOneWithoutTypesInput
}

export interface PublisherUpdateWithWhereUniqueWithoutTypeInput {
  where: PublisherWhereUniqueInput
  data: PublisherUpdateWithoutTypeDataInput
}

export interface ProductCreateWithoutTypeInput {
  sku?: Int
  title: String
  author: String
  subject: String
  edition: Int
  active?: Boolean
  quantity: Int
  detail: String
  description?: String
  mrp: Float
  slug: String
  publisher: PublisherCreateOneWithoutProductsInput
  category: ProductCategoryCreateOneWithoutProductsInput
  tags?: TagCreateManyWithoutProductInput
  images?: ImageCreateManyWithoutProductInput
}

export interface PublisherUpdateWithoutTypeDataInput {
  name?: String
  discount?: Int
  products?: ProductUpdateManyWithoutPublisherInput
}

export interface ProductCategoryCreateWithoutProductsInput {
  name: String
  image?: String
  description?: String
  types?: ProductTypeCreateManyWithoutCategoryInput
}

export interface ProductUpdateManyWithoutPublisherInput {
  create?: ProductCreateWithoutPublisherInput[] | ProductCreateWithoutPublisherInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  set?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutPublisherInput[] | ProductUpdateWithWhereUniqueWithoutPublisherInput
  updateMany?: ProductUpdateManyWithWhereNestedInput[] | ProductUpdateManyWithWhereNestedInput
  deleteMany?: ProductScalarWhereInput[] | ProductScalarWhereInput
  upsert?: ProductUpsertWithWhereUniqueWithoutPublisherInput[] | ProductUpsertWithWhereUniqueWithoutPublisherInput
}

export interface ProductTypeCreateWithoutCategoryInput {
  name: String
  products?: ProductCreateManyWithoutTypeInput
  publishers?: PublisherCreateManyWithoutTypeInput
}

export interface ProductUpdateWithWhereUniqueWithoutPublisherInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutPublisherDataInput
}

export interface PublisherCreateWithoutTypeInput {
  name: String
  discount: Int
  products?: ProductCreateManyWithoutPublisherInput
}

export interface ProductUpdateWithoutPublisherDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Float
  slug?: String
  category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
  type?: ProductTypeUpdateOneRequiredWithoutProductsInput
  tags?: TagUpdateManyWithoutProductInput
  images?: ImageUpdateManyWithoutProductInput
}

export interface ProductCreateWithoutPublisherInput {
  sku?: Int
  title: String
  author: String
  subject: String
  edition: Int
  active?: Boolean
  quantity: Int
  detail: String
  description?: String
  mrp: Float
  slug: String
  category: ProductCategoryCreateOneWithoutProductsInput
  type: ProductTypeCreateOneWithoutProductsInput
  tags?: TagCreateManyWithoutProductInput
  images?: ImageCreateManyWithoutProductInput
}

export interface ProductTypeUpdateOneRequiredWithoutProductsInput {
  create?: ProductTypeCreateWithoutProductsInput
  connect?: ProductTypeWhereUniqueInput
  update?: ProductTypeUpdateWithoutProductsDataInput
  upsert?: ProductTypeUpsertWithoutProductsInput
}

export interface ProductTypeCreateWithoutProductsInput {
  name: String
  category: ProductCategoryCreateOneWithoutTypesInput
  publishers?: PublisherCreateManyWithoutTypeInput
}

export interface ProductTypeUpdateWithoutProductsDataInput {
  name?: String
  category?: ProductCategoryUpdateOneRequiredWithoutTypesInput
  publishers?: PublisherUpdateManyWithoutTypeInput
}

export interface ProductCategoryCreateWithoutTypesInput {
  name: String
  image?: String
  description?: String
  products?: ProductCreateManyWithoutCategoryInput
}

export interface ProductCategoryUpdateOneRequiredWithoutTypesInput {
  create?: ProductCategoryCreateWithoutTypesInput
  connect?: ProductCategoryWhereUniqueInput
  update?: ProductCategoryUpdateWithoutTypesDataInput
  upsert?: ProductCategoryUpsertWithoutTypesInput
}

export interface TagCreateWithoutProductInput {
  text: String
}

export interface ProductCategoryUpdateWithoutTypesDataInput {
  name?: String
  image?: String
  description?: String
  products?: ProductUpdateManyWithoutCategoryInput
}

export interface ImageCreateWithoutProductInput {
  src: String
}

export interface ProductCategoryUpsertWithoutTypesInput {
  update: ProductCategoryUpdateWithoutTypesDataInput
  create: ProductCategoryCreateWithoutTypesInput
}

export interface OrderProductSubscriptionWhereInput {
  AND?: OrderProductSubscriptionWhereInput[] | OrderProductSubscriptionWhereInput
  OR?: OrderProductSubscriptionWhereInput[] | OrderProductSubscriptionWhereInput
  NOT?: OrderProductSubscriptionWhereInput[] | OrderProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderProductWhereInput
}

export interface ProductTypeUpsertWithoutProductsInput {
  update: ProductTypeUpdateWithoutProductsDataInput
  create: ProductTypeCreateWithoutProductsInput
}

export interface TagWhereInput {
  AND?: TagWhereInput[] | TagWhereInput
  OR?: TagWhereInput[] | TagWhereInput
  NOT?: TagWhereInput[] | TagWhereInput
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
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  product?: ProductWhereInput
}

export interface TagUpdateManyWithoutProductInput {
  create?: TagCreateWithoutProductInput[] | TagCreateWithoutProductInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  set?: TagWhereUniqueInput[] | TagWhereUniqueInput
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput
  update?: TagUpdateWithWhereUniqueWithoutProductInput[] | TagUpdateWithWhereUniqueWithoutProductInput
  updateMany?: TagUpdateManyWithWhereNestedInput[] | TagUpdateManyWithWhereNestedInput
  deleteMany?: TagScalarWhereInput[] | TagScalarWhereInput
  upsert?: TagUpsertWithWhereUniqueWithoutProductInput[] | TagUpsertWithWhereUniqueWithoutProductInput
}

export interface OrderSubscriptionWhereInput {
  AND?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  OR?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  NOT?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderWhereInput
}

export interface TagUpdateWithWhereUniqueWithoutProductInput {
  where: TagWhereUniqueInput
  data: TagUpdateWithoutProductDataInput
}

export interface TagSubscriptionWhereInput {
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TagWhereInput
}

export interface TagUpdateWithoutProductDataInput {
  text?: String
}

export interface ProductTypeSubscriptionWhereInput {
  AND?: ProductTypeSubscriptionWhereInput[] | ProductTypeSubscriptionWhereInput
  OR?: ProductTypeSubscriptionWhereInput[] | ProductTypeSubscriptionWhereInput
  NOT?: ProductTypeSubscriptionWhereInput[] | ProductTypeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductTypeWhereInput
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput
  data: TagUpdateManyDataInput
}

export interface OrderProductUpdateManyMutationInput {
  title?: String
  author?: String
  publisher?: String
  image?: String
  price?: Float
  quantity?: Int
}

export interface TagScalarWhereInput {
  AND?: TagScalarWhereInput[] | TagScalarWhereInput
  OR?: TagScalarWhereInput[] | TagScalarWhereInput
  NOT?: TagScalarWhereInput[] | TagScalarWhereInput
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
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
}

export interface PublisherWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface TagUpdateManyDataInput {
  text?: String
}

export interface OrderWhereUniqueInput {
  id?: ID_Input
}

export interface TagUpsertWithWhereUniqueWithoutProductInput {
  where: TagWhereUniqueInput
  update: TagUpdateWithoutProductDataInput
  create: TagCreateWithoutProductInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
  slug?: String
}

export interface ImageUpdateManyWithoutProductInput {
  create?: ImageCreateWithoutProductInput[] | ImageCreateWithoutProductInput
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  set?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  disconnect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  delete?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  update?: ImageUpdateWithWhereUniqueWithoutProductInput[] | ImageUpdateWithWhereUniqueWithoutProductInput
  updateMany?: ImageUpdateManyWithWhereNestedInput[] | ImageUpdateManyWithWhereNestedInput
  deleteMany?: ImageScalarWhereInput[] | ImageScalarWhereInput
  upsert?: ImageUpsertWithWhereUniqueWithoutProductInput[] | ImageUpsertWithWhereUniqueWithoutProductInput
}

export interface CartProductUpdateManyMutationInput {
  quantity?: Int
}

export interface ImageUpdateWithWhereUniqueWithoutProductInput {
  where: ImageWhereUniqueInput
  data: ImageUpdateWithoutProductDataInput
}

export interface ProductTypeUpdateManyMutationInput {
  name?: String
}

export interface ImageUpdateWithoutProductDataInput {
  src?: String
}

export interface UserUpdateInput {
  name?: String
  email?: String
  number?: String
  walletBalance?: Int
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
  streetAddress?: String
  city?: String
  state?: String
  postalCode?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartProductUpdateManyWithoutUserInput
}

export interface ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput
  data: ImageUpdateManyDataInput
}

export interface OrderProductUpdateManyDataInput {
  title?: String
  author?: String
  publisher?: String
  image?: String
  price?: Float
  quantity?: Int
}

export interface ImageScalarWhereInput {
  AND?: ImageScalarWhereInput[] | ImageScalarWhereInput
  OR?: ImageScalarWhereInput[] | ImageScalarWhereInput
  NOT?: ImageScalarWhereInput[] | ImageScalarWhereInput
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
  src?: String
  src_not?: String
  src_in?: String[] | String
  src_not_in?: String[] | String
  src_lt?: String
  src_lte?: String
  src_gt?: String
  src_gte?: String
  src_contains?: String
  src_not_contains?: String
  src_starts_with?: String
  src_not_starts_with?: String
  src_ends_with?: String
  src_not_ends_with?: String
}

export interface CartProductUpsertWithWhereUniqueWithoutUserInput {
  where: CartProductWhereUniqueInput
  update: CartProductUpdateWithoutUserDataInput
  create: CartProductCreateWithoutUserInput
}

export interface ImageUpdateManyDataInput {
  src?: String
}

export interface CartProductUpdateWithoutUserDataInput {
  quantity?: Int
  product?: ProductUpdateOneRequiredInput
}

export interface ImageUpsertWithWhereUniqueWithoutProductInput {
  where: ImageWhereUniqueInput
  update: ImageUpdateWithoutProductDataInput
  create: ImageCreateWithoutProductInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput
  data: ProductUpdateManyDataInput
}

export interface OrderUpdateInput {
  isVookBalanceUsed?: Boolean
  addressSetToDefault?: Boolean
  couponCode?: String
  streetAddress?: String
  phone?: String
  email?: String
  city?: String
  state?: String
  postalCode?: String
  orderId?: Int
  subTotal?: Float
  total?: Float
  status?: String
  orderDateTime?: DateTime
  products?: OrderProductUpdateManyInput
  user?: UserUpdateOneRequiredInput
}

export interface ProductScalarWhereInput {
  AND?: ProductScalarWhereInput[] | ProductScalarWhereInput
  OR?: ProductScalarWhereInput[] | ProductScalarWhereInput
  NOT?: ProductScalarWhereInput[] | ProductScalarWhereInput
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
  sku?: Int
  sku_not?: Int
  sku_in?: Int[] | Int
  sku_not_in?: Int[] | Int
  sku_lt?: Int
  sku_lte?: Int
  sku_gt?: Int
  sku_gte?: Int
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
  edition?: Int
  edition_not?: Int
  edition_in?: Int[] | Int
  edition_not_in?: Int[] | Int
  edition_lt?: Int
  edition_lte?: Int
  edition_gt?: Int
  edition_gte?: Int
  active?: Boolean
  active_not?: Boolean
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
  mrp?: Float
  mrp_not?: Float
  mrp_in?: Float[] | Float
  mrp_not_in?: Float[] | Float
  mrp_lt?: Float
  mrp_lte?: Float
  mrp_gt?: Float
  mrp_gte?: Float
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
}

export interface ProductCreateManyWithoutCategoryInput {
  create?: ProductCreateWithoutCategoryInput[] | ProductCreateWithoutCategoryInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface ProductUpdateManyDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Float
  slug?: String
}

export interface ProductTypeCreateOneWithoutPublishersInput {
  create?: ProductTypeCreateWithoutPublishersInput
  connect?: ProductTypeWhereUniqueInput
}

export interface ProductUpsertWithWhereUniqueWithoutPublisherInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutPublisherDataInput
  create: ProductCreateWithoutPublisherInput
}

export interface ProductCategoryCreateOneWithoutProductsInput {
  create?: ProductCategoryCreateWithoutProductsInput
  connect?: ProductCategoryWhereUniqueInput
}

export interface PublisherUpdateManyWithWhereNestedInput {
  where: PublisherScalarWhereInput
  data: PublisherUpdateManyDataInput
}

export interface PublisherCreateManyWithoutTypeInput {
  create?: PublisherCreateWithoutTypeInput[] | PublisherCreateWithoutTypeInput
  connect?: PublisherWhereUniqueInput[] | PublisherWhereUniqueInput
}

export interface PublisherScalarWhereInput {
  AND?: PublisherScalarWhereInput[] | PublisherScalarWhereInput
  OR?: PublisherScalarWhereInput[] | PublisherScalarWhereInput
  NOT?: PublisherScalarWhereInput[] | PublisherScalarWhereInput
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
  discount?: Int
  discount_not?: Int
  discount_in?: Int[] | Int
  discount_not_in?: Int[] | Int
  discount_lt?: Int
  discount_lte?: Int
  discount_gt?: Int
  discount_gte?: Int
}

export interface ProductTypeCreateOneWithoutProductsInput {
  create?: ProductTypeCreateWithoutProductsInput
  connect?: ProductTypeWhereUniqueInput
}

export interface PublisherUpdateManyDataInput {
  name?: String
  discount?: Int
}

export interface TagCreateManyWithoutProductInput {
  create?: TagCreateWithoutProductInput[] | TagCreateWithoutProductInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
}

export interface PublisherUpsertWithWhereUniqueWithoutTypeInput {
  where: PublisherWhereUniqueInput
  update: PublisherUpdateWithoutTypeDataInput
  create: PublisherCreateWithoutTypeInput
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

export interface ProductTypeUpdateManyWithWhereNestedInput {
  where: ProductTypeScalarWhereInput
  data: ProductTypeUpdateManyDataInput
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
  streetAddress?: String
  streetAddress_not?: String
  streetAddress_in?: String[] | String
  streetAddress_not_in?: String[] | String
  streetAddress_lt?: String
  streetAddress_lte?: String
  streetAddress_gt?: String
  streetAddress_gte?: String
  streetAddress_contains?: String
  streetAddress_not_contains?: String
  streetAddress_starts_with?: String
  streetAddress_not_starts_with?: String
  streetAddress_ends_with?: String
  streetAddress_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  state?: String
  state_not?: String
  state_in?: String[] | String
  state_not_in?: String[] | String
  state_lt?: String
  state_lte?: String
  state_gt?: String
  state_gte?: String
  state_contains?: String
  state_not_contains?: String
  state_starts_with?: String
  state_not_starts_with?: String
  state_ends_with?: String
  state_not_ends_with?: String
  postalCode?: String
  postalCode_not?: String
  postalCode_in?: String[] | String
  postalCode_not_in?: String[] | String
  postalCode_lt?: String
  postalCode_lte?: String
  postalCode_gt?: String
  postalCode_gte?: String
  postalCode_contains?: String
  postalCode_not_contains?: String
  postalCode_starts_with?: String
  postalCode_not_starts_with?: String
  postalCode_ends_with?: String
  postalCode_not_ends_with?: String
  cart_every?: CartProductWhereInput
  cart_some?: CartProductWhereInput
  cart_none?: CartProductWhereInput
}

export interface ProductTypeScalarWhereInput {
  AND?: ProductTypeScalarWhereInput[] | ProductTypeScalarWhereInput
  OR?: ProductTypeScalarWhereInput[] | ProductTypeScalarWhereInput
  NOT?: ProductTypeScalarWhereInput[] | ProductTypeScalarWhereInput
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
}

export interface ImageSubscriptionWhereInput {
  AND?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  OR?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  NOT?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ImageWhereInput
}

export interface ProductTypeUpdateManyDataInput {
  name?: String
}

export interface ProductCategoryWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface ProductTypeUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProductTypeWhereUniqueInput
  update: ProductTypeUpdateWithoutCategoryDataInput
  create: ProductTypeCreateWithoutCategoryInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ProductCategoryUpsertWithoutProductsInput {
  update: ProductCategoryUpdateWithoutProductsDataInput
  create: ProductCategoryCreateWithoutProductsInput
}

export interface ImageUpdateManyMutationInput {
  src?: String
}

export interface ProductUpsertWithWhereUniqueWithoutTypeInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutTypeDataInput
  create: ProductCreateWithoutTypeInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface ProductTypeUpsertWithoutPublishersInput {
  update: ProductTypeUpdateWithoutPublishersDataInput
  create: ProductTypeCreateWithoutPublishersInput
}

export interface CartProductScalarWhereInput {
  AND?: CartProductScalarWhereInput[] | CartProductScalarWhereInput
  OR?: CartProductScalarWhereInput[] | CartProductScalarWhereInput
  NOT?: CartProductScalarWhereInput[] | CartProductScalarWhereInput
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
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
}

export interface PublisherUpsertWithoutProductsInput {
  update: PublisherUpdateWithoutProductsDataInput
  create: PublisherCreateWithoutProductsInput
}

export interface OrderProductUpdateWithWhereUniqueNestedInput {
  where: OrderProductWhereUniqueInput
  data: OrderProductUpdateDataInput
}

export interface ProductUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutCategoryDataInput
  create: ProductCreateWithoutCategoryInput
}

export interface PublisherCreateOneWithoutProductsInput {
  create?: PublisherCreateWithoutProductsInput
  connect?: PublisherWhereUniqueInput
}

export interface ProductTypeUpdateInput {
  name?: String
  products?: ProductUpdateManyWithoutTypeInput
  category?: ProductCategoryUpdateOneRequiredWithoutTypesInput
  publishers?: PublisherUpdateManyWithoutTypeInput
}

export interface ProductTypeCreateManyWithoutCategoryInput {
  create?: ProductTypeCreateWithoutCategoryInput[] | ProductTypeCreateWithoutCategoryInput
  connect?: ProductTypeWhereUniqueInput[] | ProductTypeWhereUniqueInput
}

export interface PublisherUpdateInput {
  name?: String
  discount?: Int
  products?: ProductUpdateManyWithoutPublisherInput
  type?: ProductTypeUpdateOneRequiredWithoutPublishersInput
}

export interface ProductCategoryCreateOneWithoutTypesInput {
  create?: ProductCategoryCreateWithoutTypesInput
  connect?: ProductCategoryWhereUniqueInput
}

export interface ImageUpdateInput {
  src?: String
  product?: ProductUpdateOneRequiredWithoutImagesInput
}

export interface ImageWhereInput {
  AND?: ImageWhereInput[] | ImageWhereInput
  OR?: ImageWhereInput[] | ImageWhereInput
  NOT?: ImageWhereInput[] | ImageWhereInput
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
  src?: String
  src_not?: String
  src_in?: String[] | String
  src_not_in?: String[] | String
  src_lt?: String
  src_lte?: String
  src_gt?: String
  src_gte?: String
  src_contains?: String
  src_not_contains?: String
  src_starts_with?: String
  src_not_starts_with?: String
  src_ends_with?: String
  src_not_ends_with?: String
  product?: ProductWhereInput
}

export interface ProductUpdateOneRequiredWithoutImagesInput {
  create?: ProductCreateWithoutImagesInput
  connect?: ProductWhereUniqueInput
  update?: ProductUpdateWithoutImagesDataInput
  upsert?: ProductUpsertWithoutImagesInput
}

export interface PostalCodeWhereInput {
  AND?: PostalCodeWhereInput[] | PostalCodeWhereInput
  OR?: PostalCodeWhereInput[] | PostalCodeWhereInput
  NOT?: PostalCodeWhereInput[] | PostalCodeWhereInput
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
  code?: String
  code_not?: String
  code_in?: String[] | String
  code_not_in?: String[] | String
  code_lt?: String
  code_lte?: String
  code_gt?: String
  code_gte?: String
  code_contains?: String
  code_not_contains?: String
  code_starts_with?: String
  code_not_starts_with?: String
  code_ends_with?: String
  code_not_ends_with?: String
}

export interface ProductUpdateWithoutImagesDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Float
  slug?: String
  publisher?: PublisherUpdateOneRequiredWithoutProductsInput
  category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
  type?: ProductTypeUpdateOneRequiredWithoutProductsInput
  tags?: TagUpdateManyWithoutProductInput
}

export interface PostalCodeUpdateManyMutationInput {
  code?: String
}

export interface ProductUpsertWithoutImagesInput {
  update: ProductUpdateWithoutImagesDataInput
  create: ProductCreateWithoutImagesInput
}

export interface OrderProductUpdateManyWithWhereNestedInput {
  where: OrderProductScalarWhereInput
  data: OrderProductUpdateManyDataInput
}

export interface TagUpdateInput {
  text?: String
  product?: ProductUpdateOneRequiredWithoutTagsInput
}

export interface UserUpdatepermissionsInput {
  set?: Permission[] | Permission
}

export interface ProductUpdateOneRequiredWithoutTagsInput {
  create?: ProductCreateWithoutTagsInput
  connect?: ProductWhereUniqueInput
  update?: ProductUpdateWithoutTagsDataInput
  upsert?: ProductUpsertWithoutTagsInput
}

export interface ProductCreateManyWithoutPublisherInput {
  create?: ProductCreateWithoutPublisherInput[] | ProductCreateWithoutPublisherInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface ProductUpdateWithoutTagsDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Float
  slug?: String
  publisher?: PublisherUpdateOneRequiredWithoutProductsInput
  category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
  type?: ProductTypeUpdateOneRequiredWithoutProductsInput
  images?: ImageUpdateManyWithoutProductInput
}

export interface PublisherWhereInput {
  AND?: PublisherWhereInput[] | PublisherWhereInput
  OR?: PublisherWhereInput[] | PublisherWhereInput
  NOT?: PublisherWhereInput[] | PublisherWhereInput
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
  discount?: Int
  discount_not?: Int
  discount_in?: Int[] | Int
  discount_not_in?: Int[] | Int
  discount_lt?: Int
  discount_lte?: Int
  discount_gt?: Int
  discount_gte?: Int
  products_every?: ProductWhereInput
  products_some?: ProductWhereInput
  products_none?: ProductWhereInput
  type?: ProductTypeWhereInput
}

export interface ProductUpdateDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Float
  slug?: String
  publisher?: PublisherUpdateOneRequiredWithoutProductsInput
  category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
  type?: ProductTypeUpdateOneRequiredWithoutProductsInput
  tags?: TagUpdateManyWithoutProductInput
  images?: ImageUpdateManyWithoutProductInput
}

export interface ProductUpdateOneRequiredInput {
  create?: ProductCreateInput
  connect?: ProductWhereUniqueInput
  update?: ProductUpdateDataInput
  upsert?: ProductUpsertNestedInput
}

export interface CartProductUpdateInput {
  quantity?: Int
  product?: ProductUpdateOneRequiredInput
  user?: UserUpdateOneRequiredWithoutCartInput
}

export interface ProductUpsertWithoutTagsInput {
  update: ProductUpdateWithoutTagsDataInput
  create: ProductCreateWithoutTagsInput
}

export interface TagWhereUniqueInput {
  id?: ID_Input
}

export interface ImageCreateManyWithoutProductInput {
  create?: ImageCreateWithoutProductInput[] | ImageCreateWithoutProductInput
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
}

export interface ProductCreateManyWithoutTypeInput {
  create?: ProductCreateWithoutTypeInput[] | ProductCreateWithoutTypeInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface CartProductUpdateManyWithoutUserInput {
  create?: CartProductCreateWithoutUserInput[] | CartProductCreateWithoutUserInput
  connect?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput
  set?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput
  disconnect?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput
  delete?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput
  update?: CartProductUpdateWithWhereUniqueWithoutUserInput[] | CartProductUpdateWithWhereUniqueWithoutUserInput
  updateMany?: CartProductUpdateManyWithWhereNestedInput[] | CartProductUpdateManyWithWhereNestedInput
  deleteMany?: CartProductScalarWhereInput[] | CartProductScalarWhereInput
  upsert?: CartProductUpsertWithWhereUniqueWithoutUserInput[] | CartProductUpsertWithWhereUniqueWithoutUserInput
}

export interface ProductUpdateInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  detail?: String
  description?: String
  mrp?: Float
  slug?: String
  publisher?: PublisherUpdateOneRequiredWithoutProductsInput
  category?: ProductCategoryUpdateOneRequiredWithoutProductsInput
  type?: ProductTypeUpdateOneRequiredWithoutProductsInput
  tags?: TagUpdateManyWithoutProductInput
  images?: ImageUpdateManyWithoutProductInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ProductPreviousValues {
  id: ID_Output
  sku?: Int
  title: String
  author: String
  subject: String
  edition: Int
  active?: Boolean
  quantity: Int
  detail: String
  description?: String
  mrp: Float
  slug: String
}

/*
 * A connection to a list of items.

 */
export interface ProductCategoryConnection {
  pageInfo: PageInfo
  edges: ProductCategoryEdge[]
  aggregate: AggregateProductCategory
}

export interface Product extends Node {
  id: ID_Output
  sku?: Int
  title: String
  author: String
  publisher: Publisher
  category: ProductCategory
  subject: String
  type: ProductType
  edition: Int
  active?: Boolean
  quantity: Int
  detail: String
  description?: String
  mrp: Float
  tags?: Tag[]
  images?: Image[]
  slug: String
}

export interface PostalCode extends Node {
  id: ID_Output
  code: String
}

export interface Publisher extends Node {
  id: ID_Output
  name: String
  discount: Int
  products?: Product[]
  type: ProductType
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

export interface OrderProduct extends Node {
  id: ID_Output
  title: String
  author: String
  publisher: String
  image: String
  price?: Float
  quantity: Int
  user?: User
}

/*
 * An edge in a connection.

 */
export interface OrderProductEdge {
  node: OrderProduct
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
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
  streetAddress?: String
  city?: String
  state?: String
  postalCode?: String
}

export interface AggregateOrderProduct {
  count: Int
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface OrderProductConnection {
  pageInfo: PageInfo
  edges: OrderProductEdge[]
  aggregate: AggregateOrderProduct
}

export interface AggregatePostalCode {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface PostalCodeConnection {
  pageInfo: PageInfo
  edges: PostalCodeEdge[]
  aggregate: AggregatePostalCode
}

export interface ProductCategorySubscriptionPayload {
  mutation: MutationType
  node?: ProductCategory
  updatedFields?: String[]
  previousValues?: ProductCategoryPreviousValues
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node: Order
  cursor: String
}

export interface ProductCategoryPreviousValues {
  id: ID_Output
  name: String
  image?: String
  description?: String
}

export interface AggregateCartProduct {
  count: Int
}

export interface OrderProductPreviousValues {
  id: ID_Output
  title: String
  author: String
  publisher: String
  image: String
  price?: Float
  quantity: Int
}

/*
 * A connection to a list of items.

 */
export interface CartProductConnection {
  pageInfo: PageInfo
  edges: CartProductEdge[]
  aggregate: AggregateCartProduct
}

export interface ProductTypeSubscriptionPayload {
  mutation: MutationType
  node?: ProductType
  updatedFields?: String[]
  previousValues?: ProductTypePreviousValues
}

/*
 * An edge in a connection.

 */
export interface TagEdge {
  node: Tag
  cursor: String
}

export interface ProductTypePreviousValues {
  id: ID_Output
  name: String
}

export interface AggregateImage {
  count: Int
}

export interface Order extends Node {
  id: ID_Output
  isVookBalanceUsed?: Boolean
  addressSetToDefault?: Boolean
  couponCode?: String
  streetAddress?: String
  phone?: String
  email?: String
  city?: String
  state?: String
  postalCode?: String
  orderId: Int
  products?: OrderProduct[]
  subTotal?: Float
  total?: Float
  status: String
  user: User
  orderDateTime?: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ImageConnection {
  pageInfo: PageInfo
  edges: ImageEdge[]
  aggregate: AggregateImage
}

export interface PublisherSubscriptionPayload {
  mutation: MutationType
  node?: Publisher
  updatedFields?: String[]
  previousValues?: PublisherPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PublisherEdge {
  node: Publisher
  cursor: String
}

export interface PublisherPreviousValues {
  id: ID_Output
  name: String
  discount: Int
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface OrderProductSubscriptionPayload {
  mutation: MutationType
  node?: OrderProduct
  updatedFields?: String[]
  previousValues?: OrderProductPreviousValues
}

export interface AggregateProductType {
  count: Int
}

export interface ImageSubscriptionPayload {
  mutation: MutationType
  node?: Image
  updatedFields?: String[]
  previousValues?: ImagePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ProductTypeConnection {
  pageInfo: PageInfo
  edges: ProductTypeEdge[]
  aggregate: AggregateProductType
}

export interface ImagePreviousValues {
  id: ID_Output
  src: String
}

/*
 * An edge in a connection.

 */
export interface ProductCategoryEdge {
  node: ProductCategory
  cursor: String
}

export interface ProductCategory extends Node {
  id: ID_Output
  name: String
  products?: Product[]
  types?: ProductType[]
  image?: String
  description?: String
}

export interface ProductType extends Node {
  id: ID_Output
  name: String
  products?: Product[]
  category: ProductCategory
  publishers?: Publisher[]
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag
  updatedFields?: String[]
  previousValues?: TagPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PostalCodeEdge {
  node: PostalCode
  cursor: String
}

export interface TagPreviousValues {
  id: ID_Output
  text: String
}

/*
 * A connection to a list of items.

 */
export interface OrderConnection {
  pageInfo: PageInfo
  edges: OrderEdge[]
  aggregate: AggregateOrder
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
  cart?: CartProduct[]
  streetAddress?: String
  city?: String
  state?: String
  postalCode?: String
}

export interface AggregateTag {
  count: Int
}

export interface CartProductSubscriptionPayload {
  mutation: MutationType
  node?: CartProduct
  updatedFields?: String[]
  previousValues?: CartProductPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ImageEdge {
  node: Image
  cursor: String
}

export interface CartProductPreviousValues {
  id: ID_Output
  quantity: Int
}

export interface BatchPayload {
  count: Long
}

export interface CartProduct extends Node {
  id: ID_Output
  quantity: Int
  product: Product
  user: User
}

/*
 * An edge in a connection.

 */
export interface ProductTypeEdge {
  node: ProductType
  cursor: String
}

export interface OrderSubscriptionPayload {
  mutation: MutationType
  node?: Order
  updatedFields?: String[]
  previousValues?: OrderPreviousValues
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

export interface OrderPreviousValues {
  id: ID_Output
  isVookBalanceUsed?: Boolean
  addressSetToDefault?: Boolean
  couponCode?: String
  streetAddress?: String
  phone?: String
  email?: String
  city?: String
  state?: String
  postalCode?: String
  orderId: Int
  subTotal?: Float
  total?: Float
  status: String
  orderDateTime?: DateTime
}

export interface AggregateOrder {
  count: Int
}

export interface Image extends Node {
  id: ID_Output
  src: String
  product: Product
}

/*
 * A connection to a list of items.

 */
export interface TagConnection {
  pageInfo: PageInfo
  edges: TagEdge[]
  aggregate: AggregateTag
}

/*
 * A connection to a list of items.

 */
export interface PublisherConnection {
  pageInfo: PageInfo
  edges: PublisherEdge[]
  aggregate: AggregatePublisher
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface Tag extends Node {
  id: ID_Output
  text: String
  product: Product
}

export interface PostalCodePreviousValues {
  id: ID_Output
  code: String
}

export interface PostalCodeSubscriptionPayload {
  mutation: MutationType
  node?: PostalCode
  updatedFields?: String[]
  previousValues?: PostalCodePreviousValues
}

export interface AggregateProductCategory {
  count: Int
}

export interface AggregatePublisher {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface CartProductEdge {
  node: CartProduct
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

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
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

export type DateTime = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  productCategories: (args: { where?: ProductCategoryWhereInput, orderBy?: ProductCategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductCategory[]>
  productTypes: (args: { where?: ProductTypeWhereInput, orderBy?: ProductTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductType[]>
  publishers: (args: { where?: PublisherWhereInput, orderBy?: PublisherOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Publisher[]>
  images: (args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Image[]>
  tags: (args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Tag[]>
  cartProducts: (args: { where?: CartProductWhereInput, orderBy?: CartProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartProduct[]>
  orders: (args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Order[]>
  postalCodes: (args: { where?: PostalCodeWhereInput, orderBy?: PostalCodeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PostalCode[]>
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  orderProducts: (args: { where?: OrderProductWhereInput, orderBy?: OrderProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<OrderProduct[]>
  products: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Product[]>
  productCategory: (args: { where: ProductCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ProductCategory | null>
  productType: (args: { where: ProductTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ProductType | null>
  publisher: (args: { where: PublisherWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Publisher | null>
  image: (args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Image | null>
  tag: (args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Tag | null>
  cartProduct: (args: { where: CartProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct | null>
  order: (args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Order | null>
  postalCode: (args: { where: PostalCodeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<PostalCode | null>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  orderProduct: (args: { where: OrderProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<OrderProduct | null>
  product: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  productCategoriesConnection: (args: { where?: ProductCategoryWhereInput, orderBy?: ProductCategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductCategoryConnection>
  productTypesConnection: (args: { where?: ProductTypeWhereInput, orderBy?: ProductTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductTypeConnection>
  publishersConnection: (args: { where?: PublisherWhereInput, orderBy?: PublisherOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PublisherConnection>
  imagesConnection: (args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ImageConnection>
  tagsConnection: (args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<TagConnection>
  cartProductsConnection: (args: { where?: CartProductWhereInput, orderBy?: CartProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartProductConnection>
  ordersConnection: (args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<OrderConnection>
  postalCodesConnection: (args: { where?: PostalCodeWhereInput, orderBy?: PostalCodeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PostalCodeConnection>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  orderProductsConnection: (args: { where?: OrderProductWhereInput, orderBy?: OrderProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<OrderProductConnection>
  productsConnection: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createProductCategory: (args: { data: ProductCategoryCreateInput }, info?: GraphQLResolveInfo | string) => Promise<ProductCategory>
  createProductType: (args: { data: ProductTypeCreateInput }, info?: GraphQLResolveInfo | string) => Promise<ProductType>
  createPublisher: (args: { data: PublisherCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Publisher>
  createImage: (args: { data: ImageCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Image>
  createTag: (args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Tag>
  createCartProduct: (args: { data: CartProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct>
  createOrder: (args: { data: OrderCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Order>
  createPostalCode: (args: { data: PostalCodeCreateInput }, info?: GraphQLResolveInfo | string) => Promise<PostalCode>
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createOrderProduct: (args: { data: OrderProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<OrderProduct>
  createProduct: (args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  updateProductCategory: (args: { data: ProductCategoryUpdateInput, where: ProductCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ProductCategory | null>
  updateProductType: (args: { data: ProductTypeUpdateInput, where: ProductTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ProductType | null>
  updatePublisher: (args: { data: PublisherUpdateInput, where: PublisherWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Publisher | null>
  updateImage: (args: { data: ImageUpdateInput, where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Image | null>
  updateTag: (args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Tag | null>
  updateCartProduct: (args: { data: CartProductUpdateInput, where: CartProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct | null>
  updateOrder: (args: { data: OrderUpdateInput, where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Order | null>
  updatePostalCode: (args: { data: PostalCodeUpdateInput, where: PostalCodeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<PostalCode | null>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateOrderProduct: (args: { data: OrderProductUpdateInput, where: OrderProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<OrderProduct | null>
  updateProduct: (args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  deleteProductCategory: (args: { where: ProductCategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ProductCategory | null>
  deleteProductType: (args: { where: ProductTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ProductType | null>
  deletePublisher: (args: { where: PublisherWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Publisher | null>
  deleteImage: (args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Image | null>
  deleteTag: (args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Tag | null>
  deleteCartProduct: (args: { where: CartProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct | null>
  deleteOrder: (args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Order | null>
  deletePostalCode: (args: { where: PostalCodeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<PostalCode | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteOrderProduct: (args: { where: OrderProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<OrderProduct | null>
  deleteProduct: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  upsertProductCategory: (args: { where: ProductCategoryWhereUniqueInput, create: ProductCategoryCreateInput, update: ProductCategoryUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<ProductCategory>
  upsertProductType: (args: { where: ProductTypeWhereUniqueInput, create: ProductTypeCreateInput, update: ProductTypeUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<ProductType>
  upsertPublisher: (args: { where: PublisherWhereUniqueInput, create: PublisherCreateInput, update: PublisherUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Publisher>
  upsertImage: (args: { where: ImageWhereUniqueInput, create: ImageCreateInput, update: ImageUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Image>
  upsertTag: (args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Tag>
  upsertCartProduct: (args: { where: CartProductWhereUniqueInput, create: CartProductCreateInput, update: CartProductUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct>
  upsertOrder: (args: { where: OrderWhereUniqueInput, create: OrderCreateInput, update: OrderUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Order>
  upsertPostalCode: (args: { where: PostalCodeWhereUniqueInput, create: PostalCodeCreateInput, update: PostalCodeUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<PostalCode>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertOrderProduct: (args: { where: OrderProductWhereUniqueInput, create: OrderProductCreateInput, update: OrderProductUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<OrderProduct>
  upsertProduct: (args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  updateManyProductCategories: (args: { data: ProductCategoryUpdateManyMutationInput, where?: ProductCategoryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyProductTypes: (args: { data: ProductTypeUpdateManyMutationInput, where?: ProductTypeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyPublishers: (args: { data: PublisherUpdateManyMutationInput, where?: PublisherWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyImages: (args: { data: ImageUpdateManyMutationInput, where?: ImageWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyTags: (args: { data: TagUpdateManyMutationInput, where?: TagWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCartProducts: (args: { data: CartProductUpdateManyMutationInput, where?: CartProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyOrders: (args: { data: OrderUpdateManyMutationInput, where?: OrderWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyPostalCodes: (args: { data: PostalCodeUpdateManyMutationInput, where?: PostalCodeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyUsers: (args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyOrderProducts: (args: { data: OrderProductUpdateManyMutationInput, where?: OrderProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyProducts: (args: { data: ProductUpdateManyMutationInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyProductCategories: (args: { where?: ProductCategoryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyProductTypes: (args: { where?: ProductTypeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPublishers: (args: { where?: PublisherWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyImages: (args: { where?: ImageWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyTags: (args: { where?: TagWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCartProducts: (args: { where?: CartProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyOrders: (args: { where?: OrderWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPostalCodes: (args: { where?: PostalCodeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyOrderProducts: (args: { where?: OrderProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyProducts: (args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  productCategory: (args: { where?: ProductCategorySubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProductCategorySubscriptionPayload>>
  productType: (args: { where?: ProductTypeSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProductTypeSubscriptionPayload>>
  publisher: (args: { where?: PublisherSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PublisherSubscriptionPayload>>
  image: (args: { where?: ImageSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ImageSubscriptionPayload>>
  tag: (args: { where?: TagSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<TagSubscriptionPayload>>
  cartProduct: (args: { where?: CartProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CartProductSubscriptionPayload>>
  order: (args: { where?: OrderSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<OrderSubscriptionPayload>>
  postalCode: (args: { where?: PostalCodeSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PostalCodeSubscriptionPayload>>
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  orderProduct: (args: { where?: OrderProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<OrderProductSubscriptionPayload>>
  product: (args: { where?: ProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProductSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    ProductCategory: (where: ProductCategoryWhereInput): Promise<boolean> => super.existsDelegate('query', 'productCategories', { where }, {}, '{ id }'),
    ProductType: (where: ProductTypeWhereInput): Promise<boolean> => super.existsDelegate('query', 'productTypes', { where }, {}, '{ id }'),
    Publisher: (where: PublisherWhereInput): Promise<boolean> => super.existsDelegate('query', 'publishers', { where }, {}, '{ id }'),
    Image: (where: ImageWhereInput): Promise<boolean> => super.existsDelegate('query', 'images', { where }, {}, '{ id }'),
    Tag: (where: TagWhereInput): Promise<boolean> => super.existsDelegate('query', 'tags', { where }, {}, '{ id }'),
    CartProduct: (where: CartProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'cartProducts', { where }, {}, '{ id }'),
    Order: (where: OrderWhereInput): Promise<boolean> => super.existsDelegate('query', 'orders', { where }, {}, '{ id }'),
    PostalCode: (where: PostalCodeWhereInput): Promise<boolean> => super.existsDelegate('query', 'postalCodes', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    OrderProduct: (where: OrderProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'orderProducts', { where }, {}, '{ id }'),
    Product: (where: ProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'products', { where }, {}, '{ id }')
  }

  query: Query = {
    productCategories: (args, info): Promise<ProductCategory[]> => super.delegate('query', 'productCategories', args, {}, info),
    productTypes: (args, info): Promise<ProductType[]> => super.delegate('query', 'productTypes', args, {}, info),
    publishers: (args, info): Promise<Publisher[]> => super.delegate('query', 'publishers', args, {}, info),
    images: (args, info): Promise<Image[]> => super.delegate('query', 'images', args, {}, info),
    tags: (args, info): Promise<Tag[]> => super.delegate('query', 'tags', args, {}, info),
    cartProducts: (args, info): Promise<CartProduct[]> => super.delegate('query', 'cartProducts', args, {}, info),
    orders: (args, info): Promise<Order[]> => super.delegate('query', 'orders', args, {}, info),
    postalCodes: (args, info): Promise<PostalCode[]> => super.delegate('query', 'postalCodes', args, {}, info),
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    orderProducts: (args, info): Promise<OrderProduct[]> => super.delegate('query', 'orderProducts', args, {}, info),
    products: (args, info): Promise<Product[]> => super.delegate('query', 'products', args, {}, info),
    productCategory: (args, info): Promise<ProductCategory | null> => super.delegate('query', 'productCategory', args, {}, info),
    productType: (args, info): Promise<ProductType | null> => super.delegate('query', 'productType', args, {}, info),
    publisher: (args, info): Promise<Publisher | null> => super.delegate('query', 'publisher', args, {}, info),
    image: (args, info): Promise<Image | null> => super.delegate('query', 'image', args, {}, info),
    tag: (args, info): Promise<Tag | null> => super.delegate('query', 'tag', args, {}, info),
    cartProduct: (args, info): Promise<CartProduct | null> => super.delegate('query', 'cartProduct', args, {}, info),
    order: (args, info): Promise<Order | null> => super.delegate('query', 'order', args, {}, info),
    postalCode: (args, info): Promise<PostalCode | null> => super.delegate('query', 'postalCode', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    orderProduct: (args, info): Promise<OrderProduct | null> => super.delegate('query', 'orderProduct', args, {}, info),
    product: (args, info): Promise<Product | null> => super.delegate('query', 'product', args, {}, info),
    productCategoriesConnection: (args, info): Promise<ProductCategoryConnection> => super.delegate('query', 'productCategoriesConnection', args, {}, info),
    productTypesConnection: (args, info): Promise<ProductTypeConnection> => super.delegate('query', 'productTypesConnection', args, {}, info),
    publishersConnection: (args, info): Promise<PublisherConnection> => super.delegate('query', 'publishersConnection', args, {}, info),
    imagesConnection: (args, info): Promise<ImageConnection> => super.delegate('query', 'imagesConnection', args, {}, info),
    tagsConnection: (args, info): Promise<TagConnection> => super.delegate('query', 'tagsConnection', args, {}, info),
    cartProductsConnection: (args, info): Promise<CartProductConnection> => super.delegate('query', 'cartProductsConnection', args, {}, info),
    ordersConnection: (args, info): Promise<OrderConnection> => super.delegate('query', 'ordersConnection', args, {}, info),
    postalCodesConnection: (args, info): Promise<PostalCodeConnection> => super.delegate('query', 'postalCodesConnection', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    orderProductsConnection: (args, info): Promise<OrderProductConnection> => super.delegate('query', 'orderProductsConnection', args, {}, info),
    productsConnection: (args, info): Promise<ProductConnection> => super.delegate('query', 'productsConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createProductCategory: (args, info): Promise<ProductCategory> => super.delegate('mutation', 'createProductCategory', args, {}, info),
    createProductType: (args, info): Promise<ProductType> => super.delegate('mutation', 'createProductType', args, {}, info),
    createPublisher: (args, info): Promise<Publisher> => super.delegate('mutation', 'createPublisher', args, {}, info),
    createImage: (args, info): Promise<Image> => super.delegate('mutation', 'createImage', args, {}, info),
    createTag: (args, info): Promise<Tag> => super.delegate('mutation', 'createTag', args, {}, info),
    createCartProduct: (args, info): Promise<CartProduct> => super.delegate('mutation', 'createCartProduct', args, {}, info),
    createOrder: (args, info): Promise<Order> => super.delegate('mutation', 'createOrder', args, {}, info),
    createPostalCode: (args, info): Promise<PostalCode> => super.delegate('mutation', 'createPostalCode', args, {}, info),
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createOrderProduct: (args, info): Promise<OrderProduct> => super.delegate('mutation', 'createOrderProduct', args, {}, info),
    createProduct: (args, info): Promise<Product> => super.delegate('mutation', 'createProduct', args, {}, info),
    updateProductCategory: (args, info): Promise<ProductCategory | null> => super.delegate('mutation', 'updateProductCategory', args, {}, info),
    updateProductType: (args, info): Promise<ProductType | null> => super.delegate('mutation', 'updateProductType', args, {}, info),
    updatePublisher: (args, info): Promise<Publisher | null> => super.delegate('mutation', 'updatePublisher', args, {}, info),
    updateImage: (args, info): Promise<Image | null> => super.delegate('mutation', 'updateImage', args, {}, info),
    updateTag: (args, info): Promise<Tag | null> => super.delegate('mutation', 'updateTag', args, {}, info),
    updateCartProduct: (args, info): Promise<CartProduct | null> => super.delegate('mutation', 'updateCartProduct', args, {}, info),
    updateOrder: (args, info): Promise<Order | null> => super.delegate('mutation', 'updateOrder', args, {}, info),
    updatePostalCode: (args, info): Promise<PostalCode | null> => super.delegate('mutation', 'updatePostalCode', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateOrderProduct: (args, info): Promise<OrderProduct | null> => super.delegate('mutation', 'updateOrderProduct', args, {}, info),
    updateProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'updateProduct', args, {}, info),
    deleteProductCategory: (args, info): Promise<ProductCategory | null> => super.delegate('mutation', 'deleteProductCategory', args, {}, info),
    deleteProductType: (args, info): Promise<ProductType | null> => super.delegate('mutation', 'deleteProductType', args, {}, info),
    deletePublisher: (args, info): Promise<Publisher | null> => super.delegate('mutation', 'deletePublisher', args, {}, info),
    deleteImage: (args, info): Promise<Image | null> => super.delegate('mutation', 'deleteImage', args, {}, info),
    deleteTag: (args, info): Promise<Tag | null> => super.delegate('mutation', 'deleteTag', args, {}, info),
    deleteCartProduct: (args, info): Promise<CartProduct | null> => super.delegate('mutation', 'deleteCartProduct', args, {}, info),
    deleteOrder: (args, info): Promise<Order | null> => super.delegate('mutation', 'deleteOrder', args, {}, info),
    deletePostalCode: (args, info): Promise<PostalCode | null> => super.delegate('mutation', 'deletePostalCode', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteOrderProduct: (args, info): Promise<OrderProduct | null> => super.delegate('mutation', 'deleteOrderProduct', args, {}, info),
    deleteProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'deleteProduct', args, {}, info),
    upsertProductCategory: (args, info): Promise<ProductCategory> => super.delegate('mutation', 'upsertProductCategory', args, {}, info),
    upsertProductType: (args, info): Promise<ProductType> => super.delegate('mutation', 'upsertProductType', args, {}, info),
    upsertPublisher: (args, info): Promise<Publisher> => super.delegate('mutation', 'upsertPublisher', args, {}, info),
    upsertImage: (args, info): Promise<Image> => super.delegate('mutation', 'upsertImage', args, {}, info),
    upsertTag: (args, info): Promise<Tag> => super.delegate('mutation', 'upsertTag', args, {}, info),
    upsertCartProduct: (args, info): Promise<CartProduct> => super.delegate('mutation', 'upsertCartProduct', args, {}, info),
    upsertOrder: (args, info): Promise<Order> => super.delegate('mutation', 'upsertOrder', args, {}, info),
    upsertPostalCode: (args, info): Promise<PostalCode> => super.delegate('mutation', 'upsertPostalCode', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertOrderProduct: (args, info): Promise<OrderProduct> => super.delegate('mutation', 'upsertOrderProduct', args, {}, info),
    upsertProduct: (args, info): Promise<Product> => super.delegate('mutation', 'upsertProduct', args, {}, info),
    updateManyProductCategories: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyProductCategories', args, {}, info),
    updateManyProductTypes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyProductTypes', args, {}, info),
    updateManyPublishers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPublishers', args, {}, info),
    updateManyImages: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyImages', args, {}, info),
    updateManyTags: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyTags', args, {}, info),
    updateManyCartProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCartProducts', args, {}, info),
    updateManyOrders: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyOrders', args, {}, info),
    updateManyPostalCodes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPostalCodes', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyOrderProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyOrderProducts', args, {}, info),
    updateManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyProducts', args, {}, info),
    deleteManyProductCategories: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyProductCategories', args, {}, info),
    deleteManyProductTypes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyProductTypes', args, {}, info),
    deleteManyPublishers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPublishers', args, {}, info),
    deleteManyImages: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyImages', args, {}, info),
    deleteManyTags: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyTags', args, {}, info),
    deleteManyCartProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCartProducts', args, {}, info),
    deleteManyOrders: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyOrders', args, {}, info),
    deleteManyPostalCodes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPostalCodes', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyOrderProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyOrderProducts', args, {}, info),
    deleteManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyProducts', args, {}, info)
  }

  subscription: Subscription = {
    productCategory: (args, infoOrQuery): Promise<AsyncIterator<ProductCategorySubscriptionPayload>> => super.delegateSubscription('productCategory', args, {}, infoOrQuery),
    productType: (args, infoOrQuery): Promise<AsyncIterator<ProductTypeSubscriptionPayload>> => super.delegateSubscription('productType', args, {}, infoOrQuery),
    publisher: (args, infoOrQuery): Promise<AsyncIterator<PublisherSubscriptionPayload>> => super.delegateSubscription('publisher', args, {}, infoOrQuery),
    image: (args, infoOrQuery): Promise<AsyncIterator<ImageSubscriptionPayload>> => super.delegateSubscription('image', args, {}, infoOrQuery),
    tag: (args, infoOrQuery): Promise<AsyncIterator<TagSubscriptionPayload>> => super.delegateSubscription('tag', args, {}, infoOrQuery),
    cartProduct: (args, infoOrQuery): Promise<AsyncIterator<CartProductSubscriptionPayload>> => super.delegateSubscription('cartProduct', args, {}, infoOrQuery),
    order: (args, infoOrQuery): Promise<AsyncIterator<OrderSubscriptionPayload>> => super.delegateSubscription('order', args, {}, infoOrQuery),
    postalCode: (args, infoOrQuery): Promise<AsyncIterator<PostalCodeSubscriptionPayload>> => super.delegateSubscription('postalCode', args, {}, infoOrQuery),
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    orderProduct: (args, infoOrQuery): Promise<AsyncIterator<OrderProductSubscriptionPayload>> => super.delegateSubscription('orderProduct', args, {}, infoOrQuery),
    product: (args, infoOrQuery): Promise<AsyncIterator<ProductSubscriptionPayload>> => super.delegateSubscription('product', args, {}, infoOrQuery)
  }
}