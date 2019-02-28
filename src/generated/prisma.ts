import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateBook {
  count: Int!
}

type AggregateCartBook {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderBook {
  count: Int!
}

type AggregatePostalCode {
  count: Int!
}

type AggregatePublisher {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateType {
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

type Book implements Node {
  id: ID!
  sku: Int!
  title: String!
  author: String!
  publisher: Publisher!
  category: Category!
  type: Type!
  subject: String!
  edition: Int!
  active: Boolean!
  quantity: Int!
  mrp: Int!
  detail: String!
  description: String
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image!]
  slug: String!
  dateTime: DateTime
}

"""
A connection to a list of items.
"""
type BookConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [BookEdge]!
  aggregate: AggregateBook!
}

input BookCreateInput {
  sku: Int!
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean!
  quantity: Int!
  mrp: Int!
  detail: String!
  description: String
  slug: String!
  dateTime: DateTime
  publisher: PublisherCreateOneWithoutBooksInput!
  category: CategoryCreateOneWithoutBooksInput!
  type: TypeCreateOneWithoutBooksInput!
  tags: TagCreateManyWithoutBookInput
  images: ImageCreateManyWithoutBookInput
}

input BookCreateManyWithoutCategoryInput {
  create: [BookCreateWithoutCategoryInput!]
  connect: [BookWhereUniqueInput!]
}

input BookCreateManyWithoutPublisherInput {
  create: [BookCreateWithoutPublisherInput!]
  connect: [BookWhereUniqueInput!]
}

input BookCreateManyWithoutTypeInput {
  create: [BookCreateWithoutTypeInput!]
  connect: [BookWhereUniqueInput!]
}

input BookCreateOneInput {
  create: BookCreateInput
  connect: BookWhereUniqueInput
}

input BookCreateOneWithoutImagesInput {
  create: BookCreateWithoutImagesInput
  connect: BookWhereUniqueInput
}

input BookCreateOneWithoutTagsInput {
  create: BookCreateWithoutTagsInput
  connect: BookWhereUniqueInput
}

input BookCreateWithoutCategoryInput {
  sku: Int!
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean!
  quantity: Int!
  mrp: Int!
  detail: String!
  description: String
  slug: String!
  dateTime: DateTime
  publisher: PublisherCreateOneWithoutBooksInput!
  type: TypeCreateOneWithoutBooksInput!
  tags: TagCreateManyWithoutBookInput
  images: ImageCreateManyWithoutBookInput
}

input BookCreateWithoutImagesInput {
  sku: Int!
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean!
  quantity: Int!
  mrp: Int!
  detail: String!
  description: String
  slug: String!
  dateTime: DateTime
  publisher: PublisherCreateOneWithoutBooksInput!
  category: CategoryCreateOneWithoutBooksInput!
  type: TypeCreateOneWithoutBooksInput!
  tags: TagCreateManyWithoutBookInput
}

input BookCreateWithoutPublisherInput {
  sku: Int!
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean!
  quantity: Int!
  mrp: Int!
  detail: String!
  description: String
  slug: String!
  dateTime: DateTime
  category: CategoryCreateOneWithoutBooksInput!
  type: TypeCreateOneWithoutBooksInput!
  tags: TagCreateManyWithoutBookInput
  images: ImageCreateManyWithoutBookInput
}

input BookCreateWithoutTagsInput {
  sku: Int!
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean!
  quantity: Int!
  mrp: Int!
  detail: String!
  description: String
  slug: String!
  dateTime: DateTime
  publisher: PublisherCreateOneWithoutBooksInput!
  category: CategoryCreateOneWithoutBooksInput!
  type: TypeCreateOneWithoutBooksInput!
  images: ImageCreateManyWithoutBookInput
}

input BookCreateWithoutTypeInput {
  sku: Int!
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean!
  quantity: Int!
  mrp: Int!
  detail: String!
  description: String
  slug: String!
  dateTime: DateTime
  publisher: PublisherCreateOneWithoutBooksInput!
  category: CategoryCreateOneWithoutBooksInput!
  tags: TagCreateManyWithoutBookInput
  images: ImageCreateManyWithoutBookInput
}

"""
An edge in a connection.
"""
type BookEdge {
  """
  The item at the end of the edge.
  """
  node: Book!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum BookOrderByInput {
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
  mrp_ASC
  mrp_DESC
  detail_ASC
  detail_DESC
  description_ASC
  description_DESC
  slug_ASC
  slug_DESC
  dateTime_ASC
  dateTime_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BookPreviousValues {
  id: ID!
  sku: Int!
  title: String!
  author: String!
  subject: String!
  edition: Int!
  active: Boolean!
  quantity: Int!
  mrp: Int!
  detail: String!
  description: String
  slug: String!
  dateTime: DateTime
}

input BookScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BookScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BookScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BookScalarWhereInput!]
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
  dateTime: DateTime
  """
  All values that are not equal to given value.
  """
  dateTime_not: DateTime
  """
  All values that are contained in given list.
  """
  dateTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  dateTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  dateTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  dateTime_lte: DateTime
  """
  All values greater than the given value.
  """
  dateTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  dateTime_gte: DateTime
}

type BookSubscriptionPayload {
  mutation: MutationType!
  node: Book
  updatedFields: [String!]
  previousValues: BookPreviousValues
}

input BookSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BookSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BookSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BookSubscriptionWhereInput!]
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
  node: BookWhereInput
}

input BookUpdateDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description: String
  slug: String
  dateTime: DateTime
  publisher: PublisherUpdateOneRequiredWithoutBooksInput
  category: CategoryUpdateOneRequiredWithoutBooksInput
  type: TypeUpdateOneRequiredWithoutBooksInput
  tags: TagUpdateManyWithoutBookInput
  images: ImageUpdateManyWithoutBookInput
}

input BookUpdateInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description: String
  slug: String
  dateTime: DateTime
  publisher: PublisherUpdateOneRequiredWithoutBooksInput
  category: CategoryUpdateOneRequiredWithoutBooksInput
  type: TypeUpdateOneRequiredWithoutBooksInput
  tags: TagUpdateManyWithoutBookInput
  images: ImageUpdateManyWithoutBookInput
}

input BookUpdateManyDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description: String
  slug: String
  dateTime: DateTime
}

input BookUpdateManyMutationInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description: String
  slug: String
  dateTime: DateTime
}

input BookUpdateManyWithoutCategoryInput {
  create: [BookCreateWithoutCategoryInput!]
  connect: [BookWhereUniqueInput!]
  set: [BookWhereUniqueInput!]
  disconnect: [BookWhereUniqueInput!]
  delete: [BookWhereUniqueInput!]
  update: [BookUpdateWithWhereUniqueWithoutCategoryInput!]
  updateMany: [BookUpdateManyWithWhereNestedInput!]
  deleteMany: [BookScalarWhereInput!]
  upsert: [BookUpsertWithWhereUniqueWithoutCategoryInput!]
}

input BookUpdateManyWithoutPublisherInput {
  create: [BookCreateWithoutPublisherInput!]
  connect: [BookWhereUniqueInput!]
  set: [BookWhereUniqueInput!]
  disconnect: [BookWhereUniqueInput!]
  delete: [BookWhereUniqueInput!]
  update: [BookUpdateWithWhereUniqueWithoutPublisherInput!]
  updateMany: [BookUpdateManyWithWhereNestedInput!]
  deleteMany: [BookScalarWhereInput!]
  upsert: [BookUpsertWithWhereUniqueWithoutPublisherInput!]
}

input BookUpdateManyWithoutTypeInput {
  create: [BookCreateWithoutTypeInput!]
  connect: [BookWhereUniqueInput!]
  set: [BookWhereUniqueInput!]
  disconnect: [BookWhereUniqueInput!]
  delete: [BookWhereUniqueInput!]
  update: [BookUpdateWithWhereUniqueWithoutTypeInput!]
  updateMany: [BookUpdateManyWithWhereNestedInput!]
  deleteMany: [BookScalarWhereInput!]
  upsert: [BookUpsertWithWhereUniqueWithoutTypeInput!]
}

input BookUpdateManyWithWhereNestedInput {
  where: BookScalarWhereInput!
  data: BookUpdateManyDataInput!
}

input BookUpdateOneRequiredInput {
  create: BookCreateInput
  connect: BookWhereUniqueInput
  update: BookUpdateDataInput
  upsert: BookUpsertNestedInput
}

input BookUpdateOneRequiredWithoutImagesInput {
  create: BookCreateWithoutImagesInput
  connect: BookWhereUniqueInput
  update: BookUpdateWithoutImagesDataInput
  upsert: BookUpsertWithoutImagesInput
}

input BookUpdateOneRequiredWithoutTagsInput {
  create: BookCreateWithoutTagsInput
  connect: BookWhereUniqueInput
  update: BookUpdateWithoutTagsDataInput
  upsert: BookUpsertWithoutTagsInput
}

input BookUpdateWithoutCategoryDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description: String
  slug: String
  dateTime: DateTime
  publisher: PublisherUpdateOneRequiredWithoutBooksInput
  type: TypeUpdateOneRequiredWithoutBooksInput
  tags: TagUpdateManyWithoutBookInput
  images: ImageUpdateManyWithoutBookInput
}

input BookUpdateWithoutImagesDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description: String
  slug: String
  dateTime: DateTime
  publisher: PublisherUpdateOneRequiredWithoutBooksInput
  category: CategoryUpdateOneRequiredWithoutBooksInput
  type: TypeUpdateOneRequiredWithoutBooksInput
  tags: TagUpdateManyWithoutBookInput
}

input BookUpdateWithoutPublisherDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description: String
  slug: String
  dateTime: DateTime
  category: CategoryUpdateOneRequiredWithoutBooksInput
  type: TypeUpdateOneRequiredWithoutBooksInput
  tags: TagUpdateManyWithoutBookInput
  images: ImageUpdateManyWithoutBookInput
}

input BookUpdateWithoutTagsDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description: String
  slug: String
  dateTime: DateTime
  publisher: PublisherUpdateOneRequiredWithoutBooksInput
  category: CategoryUpdateOneRequiredWithoutBooksInput
  type: TypeUpdateOneRequiredWithoutBooksInput
  images: ImageUpdateManyWithoutBookInput
}

input BookUpdateWithoutTypeDataInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description: String
  slug: String
  dateTime: DateTime
  publisher: PublisherUpdateOneRequiredWithoutBooksInput
  category: CategoryUpdateOneRequiredWithoutBooksInput
  tags: TagUpdateManyWithoutBookInput
  images: ImageUpdateManyWithoutBookInput
}

input BookUpdateWithWhereUniqueWithoutCategoryInput {
  where: BookWhereUniqueInput!
  data: BookUpdateWithoutCategoryDataInput!
}

input BookUpdateWithWhereUniqueWithoutPublisherInput {
  where: BookWhereUniqueInput!
  data: BookUpdateWithoutPublisherDataInput!
}

input BookUpdateWithWhereUniqueWithoutTypeInput {
  where: BookWhereUniqueInput!
  data: BookUpdateWithoutTypeDataInput!
}

input BookUpsertNestedInput {
  update: BookUpdateDataInput!
  create: BookCreateInput!
}

input BookUpsertWithoutImagesInput {
  update: BookUpdateWithoutImagesDataInput!
  create: BookCreateWithoutImagesInput!
}

input BookUpsertWithoutTagsInput {
  update: BookUpdateWithoutTagsDataInput!
  create: BookCreateWithoutTagsInput!
}

input BookUpsertWithWhereUniqueWithoutCategoryInput {
  where: BookWhereUniqueInput!
  update: BookUpdateWithoutCategoryDataInput!
  create: BookCreateWithoutCategoryInput!
}

input BookUpsertWithWhereUniqueWithoutPublisherInput {
  where: BookWhereUniqueInput!
  update: BookUpdateWithoutPublisherDataInput!
  create: BookCreateWithoutPublisherInput!
}

input BookUpsertWithWhereUniqueWithoutTypeInput {
  where: BookWhereUniqueInput!
  update: BookUpdateWithoutTypeDataInput!
  create: BookCreateWithoutTypeInput!
}

input BookWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BookWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BookWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BookWhereInput!]
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
  dateTime: DateTime
  """
  All values that are not equal to given value.
  """
  dateTime_not: DateTime
  """
  All values that are contained in given list.
  """
  dateTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  dateTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  dateTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  dateTime_lte: DateTime
  """
  All values greater than the given value.
  """
  dateTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  dateTime_gte: DateTime
  publisher: PublisherWhereInput
  category: CategoryWhereInput
  type: TypeWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  images_every: ImageWhereInput
  images_some: ImageWhereInput
  images_none: ImageWhereInput
}

input BookWhereUniqueInput {
  id: ID
  slug: String
}

type CartBook implements Node {
  id: ID!
  quantity: Int!
  book: Book!
  user: User!
}

"""
A connection to a list of items.
"""
type CartBookConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CartBookEdge]!
  aggregate: AggregateCartBook!
}

input CartBookCreateInput {
  quantity: Int
  book: BookCreateOneInput!
  user: UserCreateOneWithoutCartInput!
}

input CartBookCreateManyWithoutUserInput {
  create: [CartBookCreateWithoutUserInput!]
  connect: [CartBookWhereUniqueInput!]
}

input CartBookCreateWithoutUserInput {
  quantity: Int
  book: BookCreateOneInput!
}

"""
An edge in a connection.
"""
type CartBookEdge {
  """
  The item at the end of the edge.
  """
  node: CartBook!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CartBookOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CartBookPreviousValues {
  id: ID!
  quantity: Int!
}

input CartBookScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartBookScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartBookScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CartBookScalarWhereInput!]
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

type CartBookSubscriptionPayload {
  mutation: MutationType!
  node: CartBook
  updatedFields: [String!]
  previousValues: CartBookPreviousValues
}

input CartBookSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartBookSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartBookSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CartBookSubscriptionWhereInput!]
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
  node: CartBookWhereInput
}

input CartBookUpdateInput {
  quantity: Int
  book: BookUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutCartInput
}

input CartBookUpdateManyDataInput {
  quantity: Int
}

input CartBookUpdateManyMutationInput {
  quantity: Int
}

input CartBookUpdateManyWithoutUserInput {
  create: [CartBookCreateWithoutUserInput!]
  connect: [CartBookWhereUniqueInput!]
  set: [CartBookWhereUniqueInput!]
  disconnect: [CartBookWhereUniqueInput!]
  delete: [CartBookWhereUniqueInput!]
  update: [CartBookUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [CartBookUpdateManyWithWhereNestedInput!]
  deleteMany: [CartBookScalarWhereInput!]
  upsert: [CartBookUpsertWithWhereUniqueWithoutUserInput!]
}

input CartBookUpdateManyWithWhereNestedInput {
  where: CartBookScalarWhereInput!
  data: CartBookUpdateManyDataInput!
}

input CartBookUpdateWithoutUserDataInput {
  quantity: Int
  book: BookUpdateOneRequiredInput
}

input CartBookUpdateWithWhereUniqueWithoutUserInput {
  where: CartBookWhereUniqueInput!
  data: CartBookUpdateWithoutUserDataInput!
}

input CartBookUpsertWithWhereUniqueWithoutUserInput {
  where: CartBookWhereUniqueInput!
  update: CartBookUpdateWithoutUserDataInput!
  create: CartBookCreateWithoutUserInput!
}

input CartBookWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartBookWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartBookWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CartBookWhereInput!]
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
  book: BookWhereInput
  user: UserWhereInput
}

input CartBookWhereUniqueInput {
  id: ID
}

type Category implements Node {
  id: ID!
  name: String!
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book!]
  types(where: TypeWhereInput, orderBy: TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Type!]
  image: String
  description: String
}

"""
A connection to a list of items.
"""
type CategoryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String!
  image: String
  description: String
  books: BookCreateManyWithoutCategoryInput
  types: TypeCreateManyWithoutCategoryInput
}

input CategoryCreateOneWithoutBooksInput {
  create: CategoryCreateWithoutBooksInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateOneWithoutTypesInput {
  create: CategoryCreateWithoutTypesInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateWithoutBooksInput {
  name: String!
  image: String
  description: String
  types: TypeCreateManyWithoutCategoryInput
}

input CategoryCreateWithoutTypesInput {
  name: String!
  image: String
  description: String
  books: BookCreateManyWithoutCategoryInput
}

"""
An edge in a connection.
"""
type CategoryEdge {
  """
  The item at the end of the edge.
  """
  node: Category!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CategoryOrderByInput {
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

type CategoryPreviousValues {
  id: ID!
  name: String!
  image: String
  description: String
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CategorySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CategorySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CategorySubscriptionWhereInput!]
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
  node: CategoryWhereInput
}

input CategoryUpdateInput {
  name: String
  image: String
  description: String
  books: BookUpdateManyWithoutCategoryInput
  types: TypeUpdateManyWithoutCategoryInput
}

input CategoryUpdateManyMutationInput {
  name: String
  image: String
  description: String
}

input CategoryUpdateOneRequiredWithoutBooksInput {
  create: CategoryCreateWithoutBooksInput
  connect: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutBooksDataInput
  upsert: CategoryUpsertWithoutBooksInput
}

input CategoryUpdateOneRequiredWithoutTypesInput {
  create: CategoryCreateWithoutTypesInput
  connect: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutTypesDataInput
  upsert: CategoryUpsertWithoutTypesInput
}

input CategoryUpdateWithoutBooksDataInput {
  name: String
  image: String
  description: String
  types: TypeUpdateManyWithoutCategoryInput
}

input CategoryUpdateWithoutTypesDataInput {
  name: String
  image: String
  description: String
  books: BookUpdateManyWithoutCategoryInput
}

input CategoryUpsertWithoutBooksInput {
  update: CategoryUpdateWithoutBooksDataInput!
  create: CategoryCreateWithoutBooksInput!
}

input CategoryUpsertWithoutTypesInput {
  update: CategoryUpdateWithoutTypesDataInput!
  create: CategoryCreateWithoutTypesInput!
}

input CategoryWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CategoryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CategoryWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CategoryWhereInput!]
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
  books_every: BookWhereInput
  books_some: BookWhereInput
  books_none: BookWhereInput
  types_every: TypeWhereInput
  types_some: TypeWhereInput
  types_none: TypeWhereInput
}

input CategoryWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

type Image implements Node {
  id: ID!
  src: String!
  book: Book!
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
  book: BookCreateOneWithoutImagesInput!
}

input ImageCreateManyWithoutBookInput {
  create: [ImageCreateWithoutBookInput!]
  connect: [ImageWhereUniqueInput!]
}

input ImageCreateWithoutBookInput {
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
  book: BookUpdateOneRequiredWithoutImagesInput
}

input ImageUpdateManyDataInput {
  src: String
}

input ImageUpdateManyMutationInput {
  src: String
}

input ImageUpdateManyWithoutBookInput {
  create: [ImageCreateWithoutBookInput!]
  connect: [ImageWhereUniqueInput!]
  set: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  delete: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutBookInput!]
  updateMany: [ImageUpdateManyWithWhereNestedInput!]
  deleteMany: [ImageScalarWhereInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutBookInput!]
}

input ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput!
  data: ImageUpdateManyDataInput!
}

input ImageUpdateWithoutBookDataInput {
  src: String
}

input ImageUpdateWithWhereUniqueWithoutBookInput {
  where: ImageWhereUniqueInput!
  data: ImageUpdateWithoutBookDataInput!
}

input ImageUpsertWithWhereUniqueWithoutBookInput {
  where: ImageWhereUniqueInput!
  update: ImageUpdateWithoutBookDataInput!
  create: ImageCreateWithoutBookInput!
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
  book: BookWhereInput
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
  books(where: OrderBookWhereInput, orderBy: OrderBookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderBook!]
  subTotal: Float
  total: Float
  status: String!
  user: User!
  orderDateTime: DateTime
}

type OrderBook implements Node {
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
type OrderBookConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [OrderBookEdge]!
  aggregate: AggregateOrderBook!
}

input OrderBookCreateInput {
  title: String!
  author: String!
  publisher: String!
  image: String!
  price: Float
  quantity: Int
  user: UserCreateOneInput
}

input OrderBookCreateManyInput {
  create: [OrderBookCreateInput!]
  connect: [OrderBookWhereUniqueInput!]
}

"""
An edge in a connection.
"""
type OrderBookEdge {
  """
  The item at the end of the edge.
  """
  node: OrderBook!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum OrderBookOrderByInput {
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

type OrderBookPreviousValues {
  id: ID!
  title: String!
  author: String!
  publisher: String!
  image: String!
  price: Float
  quantity: Int!
}

input OrderBookScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OrderBookScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OrderBookScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OrderBookScalarWhereInput!]
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

type OrderBookSubscriptionPayload {
  mutation: MutationType!
  node: OrderBook
  updatedFields: [String!]
  previousValues: OrderBookPreviousValues
}

input OrderBookSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OrderBookSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OrderBookSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OrderBookSubscriptionWhereInput!]
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
  node: OrderBookWhereInput
}

input OrderBookUpdateDataInput {
  title: String
  author: String
  publisher: String
  image: String
  price: Float
  quantity: Int
  user: UserUpdateOneInput
}

input OrderBookUpdateInput {
  title: String
  author: String
  publisher: String
  image: String
  price: Float
  quantity: Int
  user: UserUpdateOneInput
}

input OrderBookUpdateManyDataInput {
  title: String
  author: String
  publisher: String
  image: String
  price: Float
  quantity: Int
}

input OrderBookUpdateManyInput {
  create: [OrderBookCreateInput!]
  connect: [OrderBookWhereUniqueInput!]
  set: [OrderBookWhereUniqueInput!]
  disconnect: [OrderBookWhereUniqueInput!]
  delete: [OrderBookWhereUniqueInput!]
  update: [OrderBookUpdateWithWhereUniqueNestedInput!]
  updateMany: [OrderBookUpdateManyWithWhereNestedInput!]
  deleteMany: [OrderBookScalarWhereInput!]
  upsert: [OrderBookUpsertWithWhereUniqueNestedInput!]
}

input OrderBookUpdateManyMutationInput {
  title: String
  author: String
  publisher: String
  image: String
  price: Float
  quantity: Int
}

input OrderBookUpdateManyWithWhereNestedInput {
  where: OrderBookScalarWhereInput!
  data: OrderBookUpdateManyDataInput!
}

input OrderBookUpdateWithWhereUniqueNestedInput {
  where: OrderBookWhereUniqueInput!
  data: OrderBookUpdateDataInput!
}

input OrderBookUpsertWithWhereUniqueNestedInput {
  where: OrderBookWhereUniqueInput!
  update: OrderBookUpdateDataInput!
  create: OrderBookCreateInput!
}

input OrderBookWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OrderBookWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OrderBookWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OrderBookWhereInput!]
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

input OrderBookWhereUniqueInput {
  id: ID
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
  books: OrderBookCreateManyInput
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
  books: OrderBookUpdateManyInput
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
  books_every: OrderBookWhereInput
  books_some: OrderBookWhereInput
  books_none: OrderBookWhereInput
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

type Publisher implements Node {
  id: ID!
  name: String!
  discount: Int!
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book!]
  type: Type!
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
  books: BookCreateManyWithoutPublisherInput
  type: TypeCreateOneWithoutPublishersInput!
}

input PublisherCreateManyWithoutTypeInput {
  create: [PublisherCreateWithoutTypeInput!]
  connect: [PublisherWhereUniqueInput!]
}

input PublisherCreateOneWithoutBooksInput {
  create: PublisherCreateWithoutBooksInput
  connect: PublisherWhereUniqueInput
}

input PublisherCreateWithoutBooksInput {
  name: String!
  discount: Int!
  type: TypeCreateOneWithoutPublishersInput!
}

input PublisherCreateWithoutTypeInput {
  name: String!
  discount: Int!
  books: BookCreateManyWithoutPublisherInput
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
  books: BookUpdateManyWithoutPublisherInput
  type: TypeUpdateOneRequiredWithoutPublishersInput
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

input PublisherUpdateOneRequiredWithoutBooksInput {
  create: PublisherCreateWithoutBooksInput
  connect: PublisherWhereUniqueInput
  update: PublisherUpdateWithoutBooksDataInput
  upsert: PublisherUpsertWithoutBooksInput
}

input PublisherUpdateWithoutBooksDataInput {
  name: String
  discount: Int
  type: TypeUpdateOneRequiredWithoutPublishersInput
}

input PublisherUpdateWithoutTypeDataInput {
  name: String
  discount: Int
  books: BookUpdateManyWithoutPublisherInput
}

input PublisherUpdateWithWhereUniqueWithoutTypeInput {
  where: PublisherWhereUniqueInput!
  data: PublisherUpdateWithoutTypeDataInput!
}

input PublisherUpsertWithoutBooksInput {
  update: PublisherUpdateWithoutBooksDataInput!
  create: PublisherCreateWithoutBooksInput!
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
  books_every: BookWhereInput
  books_some: BookWhereInput
  books_none: BookWhereInput
  type: TypeWhereInput
}

input PublisherWhereUniqueInput {
  id: ID
  name: String
}

type Tag implements Node {
  id: ID!
  text: String!
  book: Book!
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
  book: BookCreateOneWithoutTagsInput!
}

input TagCreateManyWithoutBookInput {
  create: [TagCreateWithoutBookInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutBookInput {
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
  book: BookUpdateOneRequiredWithoutTagsInput
}

input TagUpdateManyDataInput {
  text: String
}

input TagUpdateManyMutationInput {
  text: String
}

input TagUpdateManyWithoutBookInput {
  create: [TagCreateWithoutBookInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  delete: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutBookInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
  deleteMany: [TagScalarWhereInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutBookInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithoutBookDataInput {
  text: String
}

input TagUpdateWithWhereUniqueWithoutBookInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutBookDataInput!
}

input TagUpsertWithWhereUniqueWithoutBookInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutBookDataInput!
  create: TagCreateWithoutBookInput!
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
  book: BookWhereInput
}

input TagWhereUniqueInput {
  id: ID
}

type Type implements Node {
  id: ID!
  name: String!
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book!]
  category: Category!
  publishers(where: PublisherWhereInput, orderBy: PublisherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Publisher!]
}

"""
A connection to a list of items.
"""
type TypeConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [TypeEdge]!
  aggregate: AggregateType!
}

input TypeCreateInput {
  name: String!
  books: BookCreateManyWithoutTypeInput
  category: CategoryCreateOneWithoutTypesInput!
  publishers: PublisherCreateManyWithoutTypeInput
}

input TypeCreateManyWithoutCategoryInput {
  create: [TypeCreateWithoutCategoryInput!]
  connect: [TypeWhereUniqueInput!]
}

input TypeCreateOneWithoutBooksInput {
  create: TypeCreateWithoutBooksInput
  connect: TypeWhereUniqueInput
}

input TypeCreateOneWithoutPublishersInput {
  create: TypeCreateWithoutPublishersInput
  connect: TypeWhereUniqueInput
}

input TypeCreateWithoutBooksInput {
  name: String!
  category: CategoryCreateOneWithoutTypesInput!
  publishers: PublisherCreateManyWithoutTypeInput
}

input TypeCreateWithoutCategoryInput {
  name: String!
  books: BookCreateManyWithoutTypeInput
  publishers: PublisherCreateManyWithoutTypeInput
}

input TypeCreateWithoutPublishersInput {
  name: String!
  books: BookCreateManyWithoutTypeInput
  category: CategoryCreateOneWithoutTypesInput!
}

"""
An edge in a connection.
"""
type TypeEdge {
  """
  The item at the end of the edge.
  """
  node: Type!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum TypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TypePreviousValues {
  id: ID!
  name: String!
}

input TypeScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TypeScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TypeScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TypeScalarWhereInput!]
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

type TypeSubscriptionPayload {
  mutation: MutationType!
  node: Type
  updatedFields: [String!]
  previousValues: TypePreviousValues
}

input TypeSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TypeSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TypeSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TypeSubscriptionWhereInput!]
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
  node: TypeWhereInput
}

input TypeUpdateInput {
  name: String
  books: BookUpdateManyWithoutTypeInput
  category: CategoryUpdateOneRequiredWithoutTypesInput
  publishers: PublisherUpdateManyWithoutTypeInput
}

input TypeUpdateManyDataInput {
  name: String
}

input TypeUpdateManyMutationInput {
  name: String
}

input TypeUpdateManyWithoutCategoryInput {
  create: [TypeCreateWithoutCategoryInput!]
  connect: [TypeWhereUniqueInput!]
  set: [TypeWhereUniqueInput!]
  disconnect: [TypeWhereUniqueInput!]
  delete: [TypeWhereUniqueInput!]
  update: [TypeUpdateWithWhereUniqueWithoutCategoryInput!]
  updateMany: [TypeUpdateManyWithWhereNestedInput!]
  deleteMany: [TypeScalarWhereInput!]
  upsert: [TypeUpsertWithWhereUniqueWithoutCategoryInput!]
}

input TypeUpdateManyWithWhereNestedInput {
  where: TypeScalarWhereInput!
  data: TypeUpdateManyDataInput!
}

input TypeUpdateOneRequiredWithoutBooksInput {
  create: TypeCreateWithoutBooksInput
  connect: TypeWhereUniqueInput
  update: TypeUpdateWithoutBooksDataInput
  upsert: TypeUpsertWithoutBooksInput
}

input TypeUpdateOneRequiredWithoutPublishersInput {
  create: TypeCreateWithoutPublishersInput
  connect: TypeWhereUniqueInput
  update: TypeUpdateWithoutPublishersDataInput
  upsert: TypeUpsertWithoutPublishersInput
}

input TypeUpdateWithoutBooksDataInput {
  name: String
  category: CategoryUpdateOneRequiredWithoutTypesInput
  publishers: PublisherUpdateManyWithoutTypeInput
}

input TypeUpdateWithoutCategoryDataInput {
  name: String
  books: BookUpdateManyWithoutTypeInput
  publishers: PublisherUpdateManyWithoutTypeInput
}

input TypeUpdateWithoutPublishersDataInput {
  name: String
  books: BookUpdateManyWithoutTypeInput
  category: CategoryUpdateOneRequiredWithoutTypesInput
}

input TypeUpdateWithWhereUniqueWithoutCategoryInput {
  where: TypeWhereUniqueInput!
  data: TypeUpdateWithoutCategoryDataInput!
}

input TypeUpsertWithoutBooksInput {
  update: TypeUpdateWithoutBooksDataInput!
  create: TypeCreateWithoutBooksInput!
}

input TypeUpsertWithoutPublishersInput {
  update: TypeUpdateWithoutPublishersDataInput!
  create: TypeCreateWithoutPublishersInput!
}

input TypeUpsertWithWhereUniqueWithoutCategoryInput {
  where: TypeWhereUniqueInput!
  update: TypeUpdateWithoutCategoryDataInput!
  create: TypeCreateWithoutCategoryInput!
}

input TypeWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TypeWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TypeWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TypeWhereInput!]
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
  books_every: BookWhereInput
  books_some: BookWhereInput
  books_none: BookWhereInput
  category: CategoryWhereInput
  publishers_every: PublisherWhereInput
  publishers_some: PublisherWhereInput
  publishers_none: PublisherWhereInput
}

input TypeWhereUniqueInput {
  id: ID
  name: String
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
  cart(where: CartBookWhereInput, orderBy: CartBookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartBook!]
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
  cart: CartBookCreateManyWithoutUserInput
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
  cart: CartBookUpdateManyWithoutUserInput
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
  cart: CartBookUpdateManyWithoutUserInput
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
  cart_every: CartBookWhereInput
  cart_some: CartBookWhereInput
  cart_none: CartBookWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createCategory(data: CategoryCreateInput!): Category!
  createType(data: TypeCreateInput!): Type!
  createPublisher(data: PublisherCreateInput!): Publisher!
  createImage(data: ImageCreateInput!): Image!
  createTag(data: TagCreateInput!): Tag!
  createCartBook(data: CartBookCreateInput!): CartBook!
  createOrder(data: OrderCreateInput!): Order!
  createPostalCode(data: PostalCodeCreateInput!): PostalCode!
  createOrderBook(data: OrderBookCreateInput!): OrderBook!
  createBook(data: BookCreateInput!): Book!
  createUser(data: UserCreateInput!): User!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateType(data: TypeUpdateInput!, where: TypeWhereUniqueInput!): Type
  updatePublisher(data: PublisherUpdateInput!, where: PublisherWhereUniqueInput!): Publisher
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateCartBook(data: CartBookUpdateInput!, where: CartBookWhereUniqueInput!): CartBook
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updatePostalCode(data: PostalCodeUpdateInput!, where: PostalCodeWhereUniqueInput!): PostalCode
  updateOrderBook(data: OrderBookUpdateInput!, where: OrderBookWhereUniqueInput!): OrderBook
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteType(where: TypeWhereUniqueInput!): Type
  deletePublisher(where: PublisherWhereUniqueInput!): Publisher
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteCartBook(where: CartBookWhereUniqueInput!): CartBook
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deletePostalCode(where: PostalCodeWhereUniqueInput!): PostalCode
  deleteOrderBook(where: OrderBookWhereUniqueInput!): OrderBook
  deleteBook(where: BookWhereUniqueInput!): Book
  deleteUser(where: UserWhereUniqueInput!): User
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  upsertType(where: TypeWhereUniqueInput!, create: TypeCreateInput!, update: TypeUpdateInput!): Type!
  upsertPublisher(where: PublisherWhereUniqueInput!, create: PublisherCreateInput!, update: PublisherUpdateInput!): Publisher!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  upsertCartBook(where: CartBookWhereUniqueInput!, create: CartBookCreateInput!, update: CartBookUpdateInput!): CartBook!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  upsertPostalCode(where: PostalCodeWhereUniqueInput!, create: PostalCodeCreateInput!, update: PostalCodeUpdateInput!): PostalCode!
  upsertOrderBook(where: OrderBookWhereUniqueInput!, create: OrderBookCreateInput!, update: OrderBookUpdateInput!): OrderBook!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  updateManyTypes(data: TypeUpdateManyMutationInput!, where: TypeWhereInput): BatchPayload!
  updateManyPublishers(data: PublisherUpdateManyMutationInput!, where: PublisherWhereInput): BatchPayload!
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  updateManyCartBooks(data: CartBookUpdateManyMutationInput!, where: CartBookWhereInput): BatchPayload!
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  updateManyPostalCodes(data: PostalCodeUpdateManyMutationInput!, where: PostalCodeWhereInput): BatchPayload!
  updateManyOrderBooks(data: OrderBookUpdateManyMutationInput!, where: OrderBookWhereInput): BatchPayload!
  updateManyBooks(data: BookUpdateManyMutationInput!, where: BookWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  deleteManyTypes(where: TypeWhereInput): BatchPayload!
  deleteManyPublishers(where: PublisherWhereInput): BatchPayload!
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
  deleteManyCartBooks(where: CartBookWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  deleteManyPostalCodes(where: PostalCodeWhereInput): BatchPayload!
  deleteManyOrderBooks(where: OrderBookWhereInput): BatchPayload!
  deleteManyBooks(where: BookWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

type Query {
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  types(where: TypeWhereInput, orderBy: TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Type]!
  publishers(where: PublisherWhereInput, orderBy: PublisherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Publisher]!
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  cartBooks(where: CartBookWhereInput, orderBy: CartBookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartBook]!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  postalCodes(where: PostalCodeWhereInput, orderBy: PostalCodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostalCode]!
  orderBooks(where: OrderBookWhereInput, orderBy: OrderBookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderBook]!
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  category(where: CategoryWhereUniqueInput!): Category
  type(where: TypeWhereUniqueInput!): Type
  publisher(where: PublisherWhereUniqueInput!): Publisher
  image(where: ImageWhereUniqueInput!): Image
  tag(where: TagWhereUniqueInput!): Tag
  cartBook(where: CartBookWhereUniqueInput!): CartBook
  order(where: OrderWhereUniqueInput!): Order
  postalCode(where: PostalCodeWhereUniqueInput!): PostalCode
  orderBook(where: OrderBookWhereUniqueInput!): OrderBook
  book(where: BookWhereUniqueInput!): Book
  user(where: UserWhereUniqueInput!): User
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  typesConnection(where: TypeWhereInput, orderBy: TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TypeConnection!
  publishersConnection(where: PublisherWhereInput, orderBy: PublisherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PublisherConnection!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  cartBooksConnection(where: CartBookWhereInput, orderBy: CartBookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartBookConnection!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  postalCodesConnection(where: PostalCodeWhereInput, orderBy: PostalCodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostalCodeConnection!
  orderBooksConnection(where: OrderBookWhereInput, orderBy: OrderBookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderBookConnection!
  booksConnection(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
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
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  type(where: TypeSubscriptionWhereInput): TypeSubscriptionPayload
  publisher(where: PublisherSubscriptionWhereInput): PublisherSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  cartBook(where: CartBookSubscriptionWhereInput): CartBookSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  postalCode(where: PostalCodeSubscriptionWhereInput): PostalCodeSubscriptionPayload
  orderBook(where: OrderBookSubscriptionWhereInput): OrderBookSubscriptionPayload
  book(where: BookSubscriptionWhereInput): BookSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}
`

export type CartBookOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BookOrderByInput = 
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
  'mrp_ASC' |
  'mrp_DESC' |
  'detail_ASC' |
  'detail_DESC' |
  'description_ASC' |
  'description_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'dateTime_ASC' |
  'dateTime_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TypeOrderByInput = 
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

export type CategoryOrderByInput = 
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

export type OrderBookOrderByInput = 
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

export interface TypeUpdateWithoutPublishersDataInput {
  name?: String
  books?: BookUpdateManyWithoutTypeInput
  category?: CategoryUpdateOneRequiredWithoutTypesInput
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[] | CategoryWhereInput
  OR?: CategoryWhereInput[] | CategoryWhereInput
  NOT?: CategoryWhereInput[] | CategoryWhereInput
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
  books_every?: BookWhereInput
  books_some?: BookWhereInput
  books_none?: BookWhereInput
  types_every?: TypeWhereInput
  types_some?: TypeWhereInput
  types_none?: TypeWhereInput
}

export interface TypeCreateInput {
  name: String
  books?: BookCreateManyWithoutTypeInput
  category: CategoryCreateOneWithoutTypesInput
  publishers?: PublisherCreateManyWithoutTypeInput
}

export interface BookUpsertNestedInput {
  update: BookUpdateDataInput
  create: BookCreateInput
}

export interface PublisherCreateInput {
  name: String
  discount: Int
  books?: BookCreateManyWithoutPublisherInput
  type: TypeCreateOneWithoutPublishersInput
}

export interface TypeUpdateWithWhereUniqueWithoutCategoryInput {
  where: TypeWhereUniqueInput
  data: TypeUpdateWithoutCategoryDataInput
}

export interface ImageCreateInput {
  src: String
  book: BookCreateOneWithoutImagesInput
}

export interface OrderBookSubscriptionWhereInput {
  AND?: OrderBookSubscriptionWhereInput[] | OrderBookSubscriptionWhereInput
  OR?: OrderBookSubscriptionWhereInput[] | OrderBookSubscriptionWhereInput
  NOT?: OrderBookSubscriptionWhereInput[] | OrderBookSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderBookWhereInput
}

export interface BookCreateOneWithoutImagesInput {
  create?: BookCreateWithoutImagesInput
  connect?: BookWhereUniqueInput
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

export interface BookCreateWithoutImagesInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description?: String
  slug: String
  dateTime?: DateTime
  publisher: PublisherCreateOneWithoutBooksInput
  category: CategoryCreateOneWithoutBooksInput
  type: TypeCreateOneWithoutBooksInput
  tags?: TagCreateManyWithoutBookInput
}

export interface CartBookWhereInput {
  AND?: CartBookWhereInput[] | CartBookWhereInput
  OR?: CartBookWhereInput[] | CartBookWhereInput
  NOT?: CartBookWhereInput[] | CartBookWhereInput
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
  book?: BookWhereInput
  user?: UserWhereInput
}

export interface TagCreateInput {
  text: String
  book: BookCreateOneWithoutTagsInput
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

export interface BookCreateOneWithoutTagsInput {
  create?: BookCreateWithoutTagsInput
  connect?: BookWhereUniqueInput
}

export interface CartBookSubscriptionWhereInput {
  AND?: CartBookSubscriptionWhereInput[] | CartBookSubscriptionWhereInput
  OR?: CartBookSubscriptionWhereInput[] | CartBookSubscriptionWhereInput
  NOT?: CartBookSubscriptionWhereInput[] | CartBookSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CartBookWhereInput
}

export interface BookCreateWithoutTagsInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description?: String
  slug: String
  dateTime?: DateTime
  publisher: PublisherCreateOneWithoutBooksInput
  category: CategoryCreateOneWithoutBooksInput
  type: TypeCreateOneWithoutBooksInput
  images?: ImageCreateManyWithoutBookInput
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
  books_every?: BookWhereInput
  books_some?: BookWhereInput
  books_none?: BookWhereInput
  type?: TypeWhereInput
}

export interface CartBookCreateInput {
  quantity?: Int
  book: BookCreateOneInput
  user: UserCreateOneWithoutCartInput
}

export interface OrderBookWhereInput {
  AND?: OrderBookWhereInput[] | OrderBookWhereInput
  OR?: OrderBookWhereInput[] | OrderBookWhereInput
  NOT?: OrderBookWhereInput[] | OrderBookWhereInput
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

export interface BookCreateOneInput {
  create?: BookCreateInput
  connect?: BookWhereUniqueInput
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

export interface BookCreateInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description?: String
  slug: String
  dateTime?: DateTime
  publisher: PublisherCreateOneWithoutBooksInput
  category: CategoryCreateOneWithoutBooksInput
  type: TypeCreateOneWithoutBooksInput
  tags?: TagCreateManyWithoutBookInput
  images?: ImageCreateManyWithoutBookInput
}

export interface CategorySubscriptionWhereInput {
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  NOT?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CategoryWhereInput
}

export interface UserCreateOneWithoutCartInput {
  create?: UserCreateWithoutCartInput
  connect?: UserWhereUniqueInput
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

export interface BookWhereInput {
  AND?: BookWhereInput[] | BookWhereInput
  OR?: BookWhereInput[] | BookWhereInput
  NOT?: BookWhereInput[] | BookWhereInput
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
  mrp?: Int
  mrp_not?: Int
  mrp_in?: Int[] | Int
  mrp_not_in?: Int[] | Int
  mrp_lt?: Int
  mrp_lte?: Int
  mrp_gt?: Int
  mrp_gte?: Int
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
  dateTime?: DateTime
  dateTime_not?: DateTime
  dateTime_in?: DateTime[] | DateTime
  dateTime_not_in?: DateTime[] | DateTime
  dateTime_lt?: DateTime
  dateTime_lte?: DateTime
  dateTime_gt?: DateTime
  dateTime_gte?: DateTime
  publisher?: PublisherWhereInput
  category?: CategoryWhereInput
  type?: TypeWhereInput
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

export interface TypeWhereUniqueInput {
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
  books?: OrderBookCreateManyInput
  user: UserCreateOneInput
}

export interface ImageWhereUniqueInput {
  id?: ID_Input
}

export interface OrderBookCreateManyInput {
  create?: OrderBookCreateInput[] | OrderBookCreateInput
  connect?: OrderBookWhereUniqueInput[] | OrderBookWhereUniqueInput
}

export interface CartBookWhereUniqueInput {
  id?: ID_Input
}

export interface OrderBookCreateInput {
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

export interface BookWhereUniqueInput {
  id?: ID_Input
  slug?: String
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
  cart?: CartBookCreateManyWithoutUserInput
}

export interface OrderBookUpdateManyMutationInput {
  title?: String
  author?: String
  publisher?: String
  image?: String
  price?: Float
  quantity?: Int
}

export interface CartBookCreateManyWithoutUserInput {
  create?: CartBookCreateWithoutUserInput[] | CartBookCreateWithoutUserInput
  connect?: CartBookWhereUniqueInput[] | CartBookWhereUniqueInput
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

export interface CartBookCreateWithoutUserInput {
  quantity?: Int
  book: BookCreateOneInput
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

export interface CategoryUpdateInput {
  name?: String
  image?: String
  description?: String
  books?: BookUpdateManyWithoutCategoryInput
  types?: TypeUpdateManyWithoutCategoryInput
}

export interface CategoryUpdateManyMutationInput {
  name?: String
  image?: String
  description?: String
}

export interface BookUpdateManyWithoutCategoryInput {
  create?: BookCreateWithoutCategoryInput[] | BookCreateWithoutCategoryInput
  connect?: BookWhereUniqueInput[] | BookWhereUniqueInput
  set?: BookWhereUniqueInput[] | BookWhereUniqueInput
  disconnect?: BookWhereUniqueInput[] | BookWhereUniqueInput
  delete?: BookWhereUniqueInput[] | BookWhereUniqueInput
  update?: BookUpdateWithWhereUniqueWithoutCategoryInput[] | BookUpdateWithWhereUniqueWithoutCategoryInput
  updateMany?: BookUpdateManyWithWhereNestedInput[] | BookUpdateManyWithWhereNestedInput
  deleteMany?: BookScalarWhereInput[] | BookScalarWhereInput
  upsert?: BookUpsertWithWhereUniqueWithoutCategoryInput[] | BookUpsertWithWhereUniqueWithoutCategoryInput
}

export interface BookUpdateInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  mrp?: Int
  detail?: String
  description?: String
  slug?: String
  dateTime?: DateTime
  publisher?: PublisherUpdateOneRequiredWithoutBooksInput
  category?: CategoryUpdateOneRequiredWithoutBooksInput
  type?: TypeUpdateOneRequiredWithoutBooksInput
  tags?: TagUpdateManyWithoutBookInput
  images?: ImageUpdateManyWithoutBookInput
}

export interface BookUpdateWithWhereUniqueWithoutCategoryInput {
  where: BookWhereUniqueInput
  data: BookUpdateWithoutCategoryDataInput
}

export interface PostalCodeUpdateInput {
  code?: String
}

export interface BookUpdateWithoutCategoryDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  mrp?: Int
  detail?: String
  description?: String
  slug?: String
  dateTime?: DateTime
  publisher?: PublisherUpdateOneRequiredWithoutBooksInput
  type?: TypeUpdateOneRequiredWithoutBooksInput
  tags?: TagUpdateManyWithoutBookInput
  images?: ImageUpdateManyWithoutBookInput
}

export interface OrderBookUpsertWithWhereUniqueNestedInput {
  where: OrderBookWhereUniqueInput
  update: OrderBookUpdateDataInput
  create: OrderBookCreateInput
}

export interface PublisherUpdateOneRequiredWithoutBooksInput {
  create?: PublisherCreateWithoutBooksInput
  connect?: PublisherWhereUniqueInput
  update?: PublisherUpdateWithoutBooksDataInput
  upsert?: PublisherUpsertWithoutBooksInput
}

export interface OrderBookScalarWhereInput {
  AND?: OrderBookScalarWhereInput[] | OrderBookScalarWhereInput
  OR?: OrderBookScalarWhereInput[] | OrderBookScalarWhereInput
  NOT?: OrderBookScalarWhereInput[] | OrderBookScalarWhereInput
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

export interface PublisherUpdateWithoutBooksDataInput {
  name?: String
  discount?: Int
  type?: TypeUpdateOneRequiredWithoutPublishersInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface TypeUpdateOneRequiredWithoutPublishersInput {
  create?: TypeCreateWithoutPublishersInput
  connect?: TypeWhereUniqueInput
  update?: TypeUpdateWithoutPublishersDataInput
  upsert?: TypeUpsertWithoutPublishersInput
}

export interface CartBookUpdateManyDataInput {
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

export interface CartBookUpdateManyWithWhereNestedInput {
  where: CartBookScalarWhereInput
  data: CartBookUpdateManyDataInput
}

export interface BookUpdateManyWithoutTypeInput {
  create?: BookCreateWithoutTypeInput[] | BookCreateWithoutTypeInput
  connect?: BookWhereUniqueInput[] | BookWhereUniqueInput
  set?: BookWhereUniqueInput[] | BookWhereUniqueInput
  disconnect?: BookWhereUniqueInput[] | BookWhereUniqueInput
  delete?: BookWhereUniqueInput[] | BookWhereUniqueInput
  update?: BookUpdateWithWhereUniqueWithoutTypeInput[] | BookUpdateWithWhereUniqueWithoutTypeInput
  updateMany?: BookUpdateManyWithWhereNestedInput[] | BookUpdateManyWithWhereNestedInput
  deleteMany?: BookScalarWhereInput[] | BookScalarWhereInput
  upsert?: BookUpsertWithWhereUniqueWithoutTypeInput[] | BookUpsertWithWhereUniqueWithoutTypeInput
}

export interface CartBookUpdateWithWhereUniqueWithoutUserInput {
  where: CartBookWhereUniqueInput
  data: CartBookUpdateWithoutUserDataInput
}

export interface BookUpdateWithWhereUniqueWithoutTypeInput {
  where: BookWhereUniqueInput
  data: BookUpdateWithoutTypeDataInput
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
  cart?: CartBookUpdateManyWithoutUserInput
}

export interface BookUpdateWithoutTypeDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  mrp?: Int
  detail?: String
  description?: String
  slug?: String
  dateTime?: DateTime
  publisher?: PublisherUpdateOneRequiredWithoutBooksInput
  category?: CategoryUpdateOneRequiredWithoutBooksInput
  tags?: TagUpdateManyWithoutBookInput
  images?: ImageUpdateManyWithoutBookInput
}

export interface OrderBookUpdateDataInput {
  title?: String
  author?: String
  publisher?: String
  image?: String
  price?: Float
  quantity?: Int
  user?: UserUpdateOneInput
}

export interface CategoryUpdateOneRequiredWithoutBooksInput {
  create?: CategoryCreateWithoutBooksInput
  connect?: CategoryWhereUniqueInput
  update?: CategoryUpdateWithoutBooksDataInput
  upsert?: CategoryUpsertWithoutBooksInput
}

export interface OrderBookUpdateManyInput {
  create?: OrderBookCreateInput[] | OrderBookCreateInput
  connect?: OrderBookWhereUniqueInput[] | OrderBookWhereUniqueInput
  set?: OrderBookWhereUniqueInput[] | OrderBookWhereUniqueInput
  disconnect?: OrderBookWhereUniqueInput[] | OrderBookWhereUniqueInput
  delete?: OrderBookWhereUniqueInput[] | OrderBookWhereUniqueInput
  update?: OrderBookUpdateWithWhereUniqueNestedInput[] | OrderBookUpdateWithWhereUniqueNestedInput
  updateMany?: OrderBookUpdateManyWithWhereNestedInput[] | OrderBookUpdateManyWithWhereNestedInput
  deleteMany?: OrderBookScalarWhereInput[] | OrderBookScalarWhereInput
  upsert?: OrderBookUpsertWithWhereUniqueNestedInput[] | OrderBookUpsertWithWhereUniqueNestedInput
}

export interface CategoryUpdateWithoutBooksDataInput {
  name?: String
  image?: String
  description?: String
  types?: TypeUpdateManyWithoutCategoryInput
}

export interface UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput
  create: UserCreateWithoutCartInput
}

export interface TypeUpdateManyWithoutCategoryInput {
  create?: TypeCreateWithoutCategoryInput[] | TypeCreateWithoutCategoryInput
  connect?: TypeWhereUniqueInput[] | TypeWhereUniqueInput
  set?: TypeWhereUniqueInput[] | TypeWhereUniqueInput
  disconnect?: TypeWhereUniqueInput[] | TypeWhereUniqueInput
  delete?: TypeWhereUniqueInput[] | TypeWhereUniqueInput
  update?: TypeUpdateWithWhereUniqueWithoutCategoryInput[] | TypeUpdateWithWhereUniqueWithoutCategoryInput
  updateMany?: TypeUpdateManyWithWhereNestedInput[] | TypeUpdateManyWithWhereNestedInput
  deleteMany?: TypeScalarWhereInput[] | TypeScalarWhereInput
  upsert?: TypeUpsertWithWhereUniqueWithoutCategoryInput[] | TypeUpsertWithWhereUniqueWithoutCategoryInput
}

export interface CategoryCreateInput {
  name: String
  image?: String
  description?: String
  books?: BookCreateManyWithoutCategoryInput
  types?: TypeCreateManyWithoutCategoryInput
}

export interface UserUpdateOneRequiredWithoutCartInput {
  create?: UserCreateWithoutCartInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutCartDataInput
  upsert?: UserUpsertWithoutCartInput
}

export interface BookCreateWithoutCategoryInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description?: String
  slug: String
  dateTime?: DateTime
  publisher: PublisherCreateOneWithoutBooksInput
  type: TypeCreateOneWithoutBooksInput
  tags?: TagCreateManyWithoutBookInput
  images?: ImageCreateManyWithoutBookInput
}

export interface TypeUpdateWithoutCategoryDataInput {
  name?: String
  books?: BookUpdateManyWithoutTypeInput
  publishers?: PublisherUpdateManyWithoutTypeInput
}

export interface PublisherCreateWithoutBooksInput {
  name: String
  discount: Int
  type: TypeCreateOneWithoutPublishersInput
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

export interface TypeCreateWithoutPublishersInput {
  name: String
  books?: BookCreateManyWithoutTypeInput
  category: CategoryCreateOneWithoutTypesInput
}

export interface PublisherUpdateWithWhereUniqueWithoutTypeInput {
  where: PublisherWhereUniqueInput
  data: PublisherUpdateWithoutTypeDataInput
}

export interface BookCreateWithoutTypeInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description?: String
  slug: String
  dateTime?: DateTime
  publisher: PublisherCreateOneWithoutBooksInput
  category: CategoryCreateOneWithoutBooksInput
  tags?: TagCreateManyWithoutBookInput
  images?: ImageCreateManyWithoutBookInput
}

export interface PublisherUpdateWithoutTypeDataInput {
  name?: String
  discount?: Int
  books?: BookUpdateManyWithoutPublisherInput
}

export interface CategoryCreateWithoutBooksInput {
  name: String
  image?: String
  description?: String
  types?: TypeCreateManyWithoutCategoryInput
}

export interface BookUpdateManyWithoutPublisherInput {
  create?: BookCreateWithoutPublisherInput[] | BookCreateWithoutPublisherInput
  connect?: BookWhereUniqueInput[] | BookWhereUniqueInput
  set?: BookWhereUniqueInput[] | BookWhereUniqueInput
  disconnect?: BookWhereUniqueInput[] | BookWhereUniqueInput
  delete?: BookWhereUniqueInput[] | BookWhereUniqueInput
  update?: BookUpdateWithWhereUniqueWithoutPublisherInput[] | BookUpdateWithWhereUniqueWithoutPublisherInput
  updateMany?: BookUpdateManyWithWhereNestedInput[] | BookUpdateManyWithWhereNestedInput
  deleteMany?: BookScalarWhereInput[] | BookScalarWhereInput
  upsert?: BookUpsertWithWhereUniqueWithoutPublisherInput[] | BookUpsertWithWhereUniqueWithoutPublisherInput
}

export interface TypeCreateWithoutCategoryInput {
  name: String
  books?: BookCreateManyWithoutTypeInput
  publishers?: PublisherCreateManyWithoutTypeInput
}

export interface BookUpdateWithWhereUniqueWithoutPublisherInput {
  where: BookWhereUniqueInput
  data: BookUpdateWithoutPublisherDataInput
}

export interface PublisherCreateWithoutTypeInput {
  name: String
  discount: Int
  books?: BookCreateManyWithoutPublisherInput
}

export interface BookUpdateWithoutPublisherDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  mrp?: Int
  detail?: String
  description?: String
  slug?: String
  dateTime?: DateTime
  category?: CategoryUpdateOneRequiredWithoutBooksInput
  type?: TypeUpdateOneRequiredWithoutBooksInput
  tags?: TagUpdateManyWithoutBookInput
  images?: ImageUpdateManyWithoutBookInput
}

export interface BookCreateWithoutPublisherInput {
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description?: String
  slug: String
  dateTime?: DateTime
  category: CategoryCreateOneWithoutBooksInput
  type: TypeCreateOneWithoutBooksInput
  tags?: TagCreateManyWithoutBookInput
  images?: ImageCreateManyWithoutBookInput
}

export interface TypeUpdateOneRequiredWithoutBooksInput {
  create?: TypeCreateWithoutBooksInput
  connect?: TypeWhereUniqueInput
  update?: TypeUpdateWithoutBooksDataInput
  upsert?: TypeUpsertWithoutBooksInput
}

export interface TypeCreateWithoutBooksInput {
  name: String
  category: CategoryCreateOneWithoutTypesInput
  publishers?: PublisherCreateManyWithoutTypeInput
}

export interface TypeUpdateWithoutBooksDataInput {
  name?: String
  category?: CategoryUpdateOneRequiredWithoutTypesInput
  publishers?: PublisherUpdateManyWithoutTypeInput
}

export interface CategoryCreateWithoutTypesInput {
  name: String
  image?: String
  description?: String
  books?: BookCreateManyWithoutCategoryInput
}

export interface CategoryUpdateOneRequiredWithoutTypesInput {
  create?: CategoryCreateWithoutTypesInput
  connect?: CategoryWhereUniqueInput
  update?: CategoryUpdateWithoutTypesDataInput
  upsert?: CategoryUpsertWithoutTypesInput
}

export interface TagCreateWithoutBookInput {
  text: String
}

export interface CategoryUpdateWithoutTypesDataInput {
  name?: String
  image?: String
  description?: String
  books?: BookUpdateManyWithoutCategoryInput
}

export interface ImageCreateWithoutBookInput {
  src: String
}

export interface CategoryUpsertWithoutTypesInput {
  update: CategoryUpdateWithoutTypesDataInput
  create: CategoryCreateWithoutTypesInput
}

export interface BookSubscriptionWhereInput {
  AND?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput
  OR?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput
  NOT?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BookWhereInput
}

export interface TypeUpsertWithoutBooksInput {
  update: TypeUpdateWithoutBooksDataInput
  create: TypeCreateWithoutBooksInput
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
  book?: BookWhereInput
}

export interface TagUpdateManyWithoutBookInput {
  create?: TagCreateWithoutBookInput[] | TagCreateWithoutBookInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  set?: TagWhereUniqueInput[] | TagWhereUniqueInput
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput
  update?: TagUpdateWithWhereUniqueWithoutBookInput[] | TagUpdateWithWhereUniqueWithoutBookInput
  updateMany?: TagUpdateManyWithWhereNestedInput[] | TagUpdateManyWithWhereNestedInput
  deleteMany?: TagScalarWhereInput[] | TagScalarWhereInput
  upsert?: TagUpsertWithWhereUniqueWithoutBookInput[] | TagUpsertWithWhereUniqueWithoutBookInput
}

export interface TypeWhereInput {
  AND?: TypeWhereInput[] | TypeWhereInput
  OR?: TypeWhereInput[] | TypeWhereInput
  NOT?: TypeWhereInput[] | TypeWhereInput
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
  books_every?: BookWhereInput
  books_some?: BookWhereInput
  books_none?: BookWhereInput
  category?: CategoryWhereInput
  publishers_every?: PublisherWhereInput
  publishers_some?: PublisherWhereInput
  publishers_none?: PublisherWhereInput
}

export interface TagUpdateWithWhereUniqueWithoutBookInput {
  where: TagWhereUniqueInput
  data: TagUpdateWithoutBookDataInput
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
  books_every?: OrderBookWhereInput
  books_some?: OrderBookWhereInput
  books_none?: OrderBookWhereInput
  user?: UserWhereInput
}

export interface TagUpdateWithoutBookDataInput {
  text?: String
}

export interface TypeSubscriptionWhereInput {
  AND?: TypeSubscriptionWhereInput[] | TypeSubscriptionWhereInput
  OR?: TypeSubscriptionWhereInput[] | TypeSubscriptionWhereInput
  NOT?: TypeSubscriptionWhereInput[] | TypeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TypeWhereInput
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput
  data: TagUpdateManyDataInput
}

export interface BookUpdateManyMutationInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  mrp?: Int
  detail?: String
  description?: String
  slug?: String
  dateTime?: DateTime
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

export interface TagUpsertWithWhereUniqueWithoutBookInput {
  where: TagWhereUniqueInput
  update: TagUpdateWithoutBookDataInput
  create: TagCreateWithoutBookInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ImageUpdateManyWithoutBookInput {
  create?: ImageCreateWithoutBookInput[] | ImageCreateWithoutBookInput
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  set?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  disconnect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  delete?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  update?: ImageUpdateWithWhereUniqueWithoutBookInput[] | ImageUpdateWithWhereUniqueWithoutBookInput
  updateMany?: ImageUpdateManyWithWhereNestedInput[] | ImageUpdateManyWithWhereNestedInput
  deleteMany?: ImageScalarWhereInput[] | ImageScalarWhereInput
  upsert?: ImageUpsertWithWhereUniqueWithoutBookInput[] | ImageUpsertWithWhereUniqueWithoutBookInput
}

export interface CartBookUpdateManyMutationInput {
  quantity?: Int
}

export interface ImageUpdateWithWhereUniqueWithoutBookInput {
  where: ImageWhereUniqueInput
  data: ImageUpdateWithoutBookDataInput
}

export interface TypeUpdateManyMutationInput {
  name?: String
}

export interface ImageUpdateWithoutBookDataInput {
  src?: String
}

export interface OrderBookUpdateInput {
  title?: String
  author?: String
  publisher?: String
  image?: String
  price?: Float
  quantity?: Int
  user?: UserUpdateOneInput
}

export interface ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput
  data: ImageUpdateManyDataInput
}

export interface OrderBookUpdateManyDataInput {
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

export interface CartBookUpsertWithWhereUniqueWithoutUserInput {
  where: CartBookWhereUniqueInput
  update: CartBookUpdateWithoutUserDataInput
  create: CartBookCreateWithoutUserInput
}

export interface ImageUpdateManyDataInput {
  src?: String
}

export interface CartBookUpdateWithoutUserDataInput {
  quantity?: Int
  book?: BookUpdateOneRequiredInput
}

export interface ImageUpsertWithWhereUniqueWithoutBookInput {
  where: ImageWhereUniqueInput
  update: ImageUpdateWithoutBookDataInput
  create: ImageCreateWithoutBookInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface BookUpdateManyWithWhereNestedInput {
  where: BookScalarWhereInput
  data: BookUpdateManyDataInput
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
  books?: OrderBookUpdateManyInput
  user?: UserUpdateOneRequiredInput
}

export interface BookScalarWhereInput {
  AND?: BookScalarWhereInput[] | BookScalarWhereInput
  OR?: BookScalarWhereInput[] | BookScalarWhereInput
  NOT?: BookScalarWhereInput[] | BookScalarWhereInput
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
  mrp?: Int
  mrp_not?: Int
  mrp_in?: Int[] | Int
  mrp_not_in?: Int[] | Int
  mrp_lt?: Int
  mrp_lte?: Int
  mrp_gt?: Int
  mrp_gte?: Int
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
  dateTime?: DateTime
  dateTime_not?: DateTime
  dateTime_in?: DateTime[] | DateTime
  dateTime_not_in?: DateTime[] | DateTime
  dateTime_lt?: DateTime
  dateTime_lte?: DateTime
  dateTime_gt?: DateTime
  dateTime_gte?: DateTime
}

export interface BookCreateManyWithoutCategoryInput {
  create?: BookCreateWithoutCategoryInput[] | BookCreateWithoutCategoryInput
  connect?: BookWhereUniqueInput[] | BookWhereUniqueInput
}

export interface BookUpdateManyDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  mrp?: Int
  detail?: String
  description?: String
  slug?: String
  dateTime?: DateTime
}

export interface TypeCreateOneWithoutPublishersInput {
  create?: TypeCreateWithoutPublishersInput
  connect?: TypeWhereUniqueInput
}

export interface BookUpsertWithWhereUniqueWithoutPublisherInput {
  where: BookWhereUniqueInput
  update: BookUpdateWithoutPublisherDataInput
  create: BookCreateWithoutPublisherInput
}

export interface CategoryCreateOneWithoutBooksInput {
  create?: CategoryCreateWithoutBooksInput
  connect?: CategoryWhereUniqueInput
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

export interface TypeCreateOneWithoutBooksInput {
  create?: TypeCreateWithoutBooksInput
  connect?: TypeWhereUniqueInput
}

export interface PublisherUpdateManyDataInput {
  name?: String
  discount?: Int
}

export interface TagCreateManyWithoutBookInput {
  create?: TagCreateWithoutBookInput[] | TagCreateWithoutBookInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
}

export interface PublisherUpsertWithWhereUniqueWithoutTypeInput {
  where: PublisherWhereUniqueInput
  update: PublisherUpdateWithoutTypeDataInput
  create: PublisherCreateWithoutTypeInput
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

export interface TypeUpdateManyWithWhereNestedInput {
  where: TypeScalarWhereInput
  data: TypeUpdateManyDataInput
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
  cart_every?: CartBookWhereInput
  cart_some?: CartBookWhereInput
  cart_none?: CartBookWhereInput
}

export interface TypeScalarWhereInput {
  AND?: TypeScalarWhereInput[] | TypeScalarWhereInput
  OR?: TypeScalarWhereInput[] | TypeScalarWhereInput
  NOT?: TypeScalarWhereInput[] | TypeScalarWhereInput
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

export interface TypeUpdateManyDataInput {
  name?: String
}

export interface CategoryWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface TypeUpsertWithWhereUniqueWithoutCategoryInput {
  where: TypeWhereUniqueInput
  update: TypeUpdateWithoutCategoryDataInput
  create: TypeCreateWithoutCategoryInput
}

export interface OrderBookWhereUniqueInput {
  id?: ID_Input
}

export interface CategoryUpsertWithoutBooksInput {
  update: CategoryUpdateWithoutBooksDataInput
  create: CategoryCreateWithoutBooksInput
}

export interface ImageUpdateManyMutationInput {
  src?: String
}

export interface BookUpsertWithWhereUniqueWithoutTypeInput {
  where: BookWhereUniqueInput
  update: BookUpdateWithoutTypeDataInput
  create: BookCreateWithoutTypeInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface TypeUpsertWithoutPublishersInput {
  update: TypeUpdateWithoutPublishersDataInput
  create: TypeCreateWithoutPublishersInput
}

export interface CartBookScalarWhereInput {
  AND?: CartBookScalarWhereInput[] | CartBookScalarWhereInput
  OR?: CartBookScalarWhereInput[] | CartBookScalarWhereInput
  NOT?: CartBookScalarWhereInput[] | CartBookScalarWhereInput
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

export interface PublisherUpsertWithoutBooksInput {
  update: PublisherUpdateWithoutBooksDataInput
  create: PublisherCreateWithoutBooksInput
}

export interface OrderBookUpdateWithWhereUniqueNestedInput {
  where: OrderBookWhereUniqueInput
  data: OrderBookUpdateDataInput
}

export interface BookUpsertWithWhereUniqueWithoutCategoryInput {
  where: BookWhereUniqueInput
  update: BookUpdateWithoutCategoryDataInput
  create: BookCreateWithoutCategoryInput
}

export interface PublisherCreateOneWithoutBooksInput {
  create?: PublisherCreateWithoutBooksInput
  connect?: PublisherWhereUniqueInput
}

export interface TypeUpdateInput {
  name?: String
  books?: BookUpdateManyWithoutTypeInput
  category?: CategoryUpdateOneRequiredWithoutTypesInput
  publishers?: PublisherUpdateManyWithoutTypeInput
}

export interface TypeCreateManyWithoutCategoryInput {
  create?: TypeCreateWithoutCategoryInput[] | TypeCreateWithoutCategoryInput
  connect?: TypeWhereUniqueInput[] | TypeWhereUniqueInput
}

export interface PublisherUpdateInput {
  name?: String
  discount?: Int
  books?: BookUpdateManyWithoutPublisherInput
  type?: TypeUpdateOneRequiredWithoutPublishersInput
}

export interface CategoryCreateOneWithoutTypesInput {
  create?: CategoryCreateWithoutTypesInput
  connect?: CategoryWhereUniqueInput
}

export interface ImageUpdateInput {
  src?: String
  book?: BookUpdateOneRequiredWithoutImagesInput
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
  book?: BookWhereInput
}

export interface BookUpdateOneRequiredWithoutImagesInput {
  create?: BookCreateWithoutImagesInput
  connect?: BookWhereUniqueInput
  update?: BookUpdateWithoutImagesDataInput
  upsert?: BookUpsertWithoutImagesInput
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

export interface BookUpdateWithoutImagesDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  mrp?: Int
  detail?: String
  description?: String
  slug?: String
  dateTime?: DateTime
  publisher?: PublisherUpdateOneRequiredWithoutBooksInput
  category?: CategoryUpdateOneRequiredWithoutBooksInput
  type?: TypeUpdateOneRequiredWithoutBooksInput
  tags?: TagUpdateManyWithoutBookInput
}

export interface PostalCodeUpdateManyMutationInput {
  code?: String
}

export interface BookUpsertWithoutImagesInput {
  update: BookUpdateWithoutImagesDataInput
  create: BookCreateWithoutImagesInput
}

export interface OrderBookUpdateManyWithWhereNestedInput {
  where: OrderBookScalarWhereInput
  data: OrderBookUpdateManyDataInput
}

export interface TagUpdateInput {
  text?: String
  book?: BookUpdateOneRequiredWithoutTagsInput
}

export interface UserUpdatepermissionsInput {
  set?: Permission[] | Permission
}

export interface BookUpdateOneRequiredWithoutTagsInput {
  create?: BookCreateWithoutTagsInput
  connect?: BookWhereUniqueInput
  update?: BookUpdateWithoutTagsDataInput
  upsert?: BookUpsertWithoutTagsInput
}

export interface BookCreateManyWithoutPublisherInput {
  create?: BookCreateWithoutPublisherInput[] | BookCreateWithoutPublisherInput
  connect?: BookWhereUniqueInput[] | BookWhereUniqueInput
}

export interface BookUpdateWithoutTagsDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  mrp?: Int
  detail?: String
  description?: String
  slug?: String
  dateTime?: DateTime
  publisher?: PublisherUpdateOneRequiredWithoutBooksInput
  category?: CategoryUpdateOneRequiredWithoutBooksInput
  type?: TypeUpdateOneRequiredWithoutBooksInput
  images?: ImageUpdateManyWithoutBookInput
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

export interface BookUpdateDataInput {
  sku?: Int
  title?: String
  author?: String
  subject?: String
  edition?: Int
  active?: Boolean
  quantity?: Int
  mrp?: Int
  detail?: String
  description?: String
  slug?: String
  dateTime?: DateTime
  publisher?: PublisherUpdateOneRequiredWithoutBooksInput
  category?: CategoryUpdateOneRequiredWithoutBooksInput
  type?: TypeUpdateOneRequiredWithoutBooksInput
  tags?: TagUpdateManyWithoutBookInput
  images?: ImageUpdateManyWithoutBookInput
}

export interface BookUpdateOneRequiredInput {
  create?: BookCreateInput
  connect?: BookWhereUniqueInput
  update?: BookUpdateDataInput
  upsert?: BookUpsertNestedInput
}

export interface CartBookUpdateInput {
  quantity?: Int
  book?: BookUpdateOneRequiredInput
  user?: UserUpdateOneRequiredWithoutCartInput
}

export interface BookUpsertWithoutTagsInput {
  update: BookUpdateWithoutTagsDataInput
  create: BookCreateWithoutTagsInput
}

export interface TagWhereUniqueInput {
  id?: ID_Input
}

export interface ImageCreateManyWithoutBookInput {
  create?: ImageCreateWithoutBookInput[] | ImageCreateWithoutBookInput
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
}

export interface BookCreateManyWithoutTypeInput {
  create?: BookCreateWithoutTypeInput[] | BookCreateWithoutTypeInput
  connect?: BookWhereUniqueInput[] | BookWhereUniqueInput
}

export interface CartBookUpdateManyWithoutUserInput {
  create?: CartBookCreateWithoutUserInput[] | CartBookCreateWithoutUserInput
  connect?: CartBookWhereUniqueInput[] | CartBookWhereUniqueInput
  set?: CartBookWhereUniqueInput[] | CartBookWhereUniqueInput
  disconnect?: CartBookWhereUniqueInput[] | CartBookWhereUniqueInput
  delete?: CartBookWhereUniqueInput[] | CartBookWhereUniqueInput
  update?: CartBookUpdateWithWhereUniqueWithoutUserInput[] | CartBookUpdateWithWhereUniqueWithoutUserInput
  updateMany?: CartBookUpdateManyWithWhereNestedInput[] | CartBookUpdateManyWithWhereNestedInput
  deleteMany?: CartBookScalarWhereInput[] | CartBookScalarWhereInput
  upsert?: CartBookUpsertWithWhereUniqueWithoutUserInput[] | CartBookUpsertWithWhereUniqueWithoutUserInput
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
  cart?: CartBookUpdateManyWithoutUserInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
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

/*
 * A connection to a list of items.

 */
export interface CategoryConnection {
  pageInfo: PageInfo
  edges: CategoryEdge[]
  aggregate: AggregateCategory
}

export interface Book extends Node {
  id: ID_Output
  sku: Int
  title: String
  author: String
  publisher: Publisher
  category: Category
  type: Type
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description?: String
  tags?: Tag[]
  images?: Image[]
  slug: String
  dateTime?: DateTime
}

export interface PostalCode extends Node {
  id: ID_Output
  code: String
}

export interface Publisher extends Node {
  id: ID_Output
  name: String
  discount: Int
  books?: Book[]
  type: Type
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface OrderBook extends Node {
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
export interface BookEdge {
  node: Book
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface OrderBookPreviousValues {
  id: ID_Output
  title: String
  author: String
  publisher: String
  image: String
  price?: Float
  quantity: Int
}

export interface AggregateBook {
  count: Int
}

export interface AggregateOrderBook {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface BookConnection {
  pageInfo: PageInfo
  edges: BookEdge[]
  aggregate: AggregateBook
}

export interface AggregatePostalCode {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface OrderBookEdge {
  node: OrderBook
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

export interface CategorySubscriptionPayload {
  mutation: MutationType
  node?: Category
  updatedFields?: String[]
  previousValues?: CategoryPreviousValues
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node: Order
  cursor: String
}

export interface CategoryPreviousValues {
  id: ID_Output
  name: String
  image?: String
  description?: String
}

export interface AggregateCartBook {
  count: Int
}

export interface BookPreviousValues {
  id: ID_Output
  sku: Int
  title: String
  author: String
  subject: String
  edition: Int
  active: Boolean
  quantity: Int
  mrp: Int
  detail: String
  description?: String
  slug: String
  dateTime?: DateTime
}

/*
 * A connection to a list of items.

 */
export interface CartBookConnection {
  pageInfo: PageInfo
  edges: CartBookEdge[]
  aggregate: AggregateCartBook
}

export interface TypeSubscriptionPayload {
  mutation: MutationType
  node?: Type
  updatedFields?: String[]
  previousValues?: TypePreviousValues
}

/*
 * An edge in a connection.

 */
export interface TagEdge {
  node: Tag
  cursor: String
}

export interface TypePreviousValues {
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
  books?: OrderBook[]
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

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface BookSubscriptionPayload {
  mutation: MutationType
  node?: Book
  updatedFields?: String[]
  previousValues?: BookPreviousValues
}

export interface AggregateType {
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
export interface TypeConnection {
  pageInfo: PageInfo
  edges: TypeEdge[]
  aggregate: AggregateType
}

export interface ImagePreviousValues {
  id: ID_Output
  src: String
}

/*
 * An edge in a connection.

 */
export interface CategoryEdge {
  node: Category
  cursor: String
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
  cart?: CartBook[]
  streetAddress?: String
  city?: String
  state?: String
  postalCode?: String
}

export interface Type extends Node {
  id: ID_Output
  name: String
  books?: Book[]
  category: Category
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

export interface CartBook extends Node {
  id: ID_Output
  quantity: Int
  book: Book
  user: User
}

export interface AggregateTag {
  count: Int
}

export interface CartBookSubscriptionPayload {
  mutation: MutationType
  node?: CartBook
  updatedFields?: String[]
  previousValues?: CartBookPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ImageEdge {
  node: Image
  cursor: String
}

export interface CartBookPreviousValues {
  id: ID_Output
  quantity: Int
}

export interface BatchPayload {
  count: Long
}

export interface Category extends Node {
  id: ID_Output
  name: String
  books?: Book[]
  types?: Type[]
  image?: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface TypeEdge {
  node: Type
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
  book: Book
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

export interface OrderBookSubscriptionPayload {
  mutation: MutationType
  node?: OrderBook
  updatedFields?: String[]
  previousValues?: OrderBookPreviousValues
}

export interface Tag extends Node {
  id: ID_Output
  text: String
  book: Book
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

export interface AggregateCategory {
  count: Int
}

export interface AggregatePublisher {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface CartBookEdge {
  node: CartBook
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface OrderBookConnection {
  pageInfo: PageInfo
  edges: OrderBookEdge[]
  aggregate: AggregateOrderBook
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

export type DateTime = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  categories: (args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Category[]>
  types: (args: { where?: TypeWhereInput, orderBy?: TypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Type[]>
  publishers: (args: { where?: PublisherWhereInput, orderBy?: PublisherOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Publisher[]>
  images: (args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Image[]>
  tags: (args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Tag[]>
  cartBooks: (args: { where?: CartBookWhereInput, orderBy?: CartBookOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartBook[]>
  orders: (args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Order[]>
  postalCodes: (args: { where?: PostalCodeWhereInput, orderBy?: PostalCodeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PostalCode[]>
  orderBooks: (args: { where?: OrderBookWhereInput, orderBy?: OrderBookOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<OrderBook[]>
  books: (args: { where?: BookWhereInput, orderBy?: BookOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Book[]>
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  category: (args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Category | null>
  type: (args: { where: TypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Type | null>
  publisher: (args: { where: PublisherWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Publisher | null>
  image: (args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Image | null>
  tag: (args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Tag | null>
  cartBook: (args: { where: CartBookWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CartBook | null>
  order: (args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Order | null>
  postalCode: (args: { where: PostalCodeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<PostalCode | null>
  orderBook: (args: { where: OrderBookWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<OrderBook | null>
  book: (args: { where: BookWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Book | null>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  categoriesConnection: (args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CategoryConnection>
  typesConnection: (args: { where?: TypeWhereInput, orderBy?: TypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<TypeConnection>
  publishersConnection: (args: { where?: PublisherWhereInput, orderBy?: PublisherOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PublisherConnection>
  imagesConnection: (args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ImageConnection>
  tagsConnection: (args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<TagConnection>
  cartBooksConnection: (args: { where?: CartBookWhereInput, orderBy?: CartBookOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartBookConnection>
  ordersConnection: (args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<OrderConnection>
  postalCodesConnection: (args: { where?: PostalCodeWhereInput, orderBy?: PostalCodeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PostalCodeConnection>
  orderBooksConnection: (args: { where?: OrderBookWhereInput, orderBy?: OrderBookOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<OrderBookConnection>
  booksConnection: (args: { where?: BookWhereInput, orderBy?: BookOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<BookConnection>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createCategory: (args: { data: CategoryCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Category>
  createType: (args: { data: TypeCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Type>
  createPublisher: (args: { data: PublisherCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Publisher>
  createImage: (args: { data: ImageCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Image>
  createTag: (args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Tag>
  createCartBook: (args: { data: CartBookCreateInput }, info?: GraphQLResolveInfo | string) => Promise<CartBook>
  createOrder: (args: { data: OrderCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Order>
  createPostalCode: (args: { data: PostalCodeCreateInput }, info?: GraphQLResolveInfo | string) => Promise<PostalCode>
  createOrderBook: (args: { data: OrderBookCreateInput }, info?: GraphQLResolveInfo | string) => Promise<OrderBook>
  createBook: (args: { data: BookCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Book>
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updateCategory: (args: { data: CategoryUpdateInput, where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Category | null>
  updateType: (args: { data: TypeUpdateInput, where: TypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Type | null>
  updatePublisher: (args: { data: PublisherUpdateInput, where: PublisherWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Publisher | null>
  updateImage: (args: { data: ImageUpdateInput, where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Image | null>
  updateTag: (args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Tag | null>
  updateCartBook: (args: { data: CartBookUpdateInput, where: CartBookWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CartBook | null>
  updateOrder: (args: { data: OrderUpdateInput, where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Order | null>
  updatePostalCode: (args: { data: PostalCodeUpdateInput, where: PostalCodeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<PostalCode | null>
  updateOrderBook: (args: { data: OrderBookUpdateInput, where: OrderBookWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<OrderBook | null>
  updateBook: (args: { data: BookUpdateInput, where: BookWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Book | null>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteCategory: (args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Category | null>
  deleteType: (args: { where: TypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Type | null>
  deletePublisher: (args: { where: PublisherWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Publisher | null>
  deleteImage: (args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Image | null>
  deleteTag: (args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Tag | null>
  deleteCartBook: (args: { where: CartBookWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CartBook | null>
  deleteOrder: (args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Order | null>
  deletePostalCode: (args: { where: PostalCodeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<PostalCode | null>
  deleteOrderBook: (args: { where: OrderBookWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<OrderBook | null>
  deleteBook: (args: { where: BookWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Book | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  upsertCategory: (args: { where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Category>
  upsertType: (args: { where: TypeWhereUniqueInput, create: TypeCreateInput, update: TypeUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Type>
  upsertPublisher: (args: { where: PublisherWhereUniqueInput, create: PublisherCreateInput, update: PublisherUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Publisher>
  upsertImage: (args: { where: ImageWhereUniqueInput, create: ImageCreateInput, update: ImageUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Image>
  upsertTag: (args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Tag>
  upsertCartBook: (args: { where: CartBookWhereUniqueInput, create: CartBookCreateInput, update: CartBookUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<CartBook>
  upsertOrder: (args: { where: OrderWhereUniqueInput, create: OrderCreateInput, update: OrderUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Order>
  upsertPostalCode: (args: { where: PostalCodeWhereUniqueInput, create: PostalCodeCreateInput, update: PostalCodeUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<PostalCode>
  upsertOrderBook: (args: { where: OrderBookWhereUniqueInput, create: OrderBookCreateInput, update: OrderBookUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<OrderBook>
  upsertBook: (args: { where: BookWhereUniqueInput, create: BookCreateInput, update: BookUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Book>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updateManyCategories: (args: { data: CategoryUpdateManyMutationInput, where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyTypes: (args: { data: TypeUpdateManyMutationInput, where?: TypeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyPublishers: (args: { data: PublisherUpdateManyMutationInput, where?: PublisherWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyImages: (args: { data: ImageUpdateManyMutationInput, where?: ImageWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyTags: (args: { data: TagUpdateManyMutationInput, where?: TagWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCartBooks: (args: { data: CartBookUpdateManyMutationInput, where?: CartBookWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyOrders: (args: { data: OrderUpdateManyMutationInput, where?: OrderWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyPostalCodes: (args: { data: PostalCodeUpdateManyMutationInput, where?: PostalCodeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyOrderBooks: (args: { data: OrderBookUpdateManyMutationInput, where?: OrderBookWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyBooks: (args: { data: BookUpdateManyMutationInput, where?: BookWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyUsers: (args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCategories: (args: { where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyTypes: (args: { where?: TypeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPublishers: (args: { where?: PublisherWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyImages: (args: { where?: ImageWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyTags: (args: { where?: TagWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCartBooks: (args: { where?: CartBookWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyOrders: (args: { where?: OrderWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPostalCodes: (args: { where?: PostalCodeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyOrderBooks: (args: { where?: OrderBookWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyBooks: (args: { where?: BookWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  category: (args: { where?: CategorySubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CategorySubscriptionPayload>>
  type: (args: { where?: TypeSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<TypeSubscriptionPayload>>
  publisher: (args: { where?: PublisherSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PublisherSubscriptionPayload>>
  image: (args: { where?: ImageSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ImageSubscriptionPayload>>
  tag: (args: { where?: TagSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<TagSubscriptionPayload>>
  cartBook: (args: { where?: CartBookSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CartBookSubscriptionPayload>>
  order: (args: { where?: OrderSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<OrderSubscriptionPayload>>
  postalCode: (args: { where?: PostalCodeSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PostalCodeSubscriptionPayload>>
  orderBook: (args: { where?: OrderBookSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<OrderBookSubscriptionPayload>>
  book: (args: { where?: BookSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<BookSubscriptionPayload>>
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Category: (where: CategoryWhereInput): Promise<boolean> => super.existsDelegate('query', 'categories', { where }, {}, '{ id }'),
    Type: (where: TypeWhereInput): Promise<boolean> => super.existsDelegate('query', 'types', { where }, {}, '{ id }'),
    Publisher: (where: PublisherWhereInput): Promise<boolean> => super.existsDelegate('query', 'publishers', { where }, {}, '{ id }'),
    Image: (where: ImageWhereInput): Promise<boolean> => super.existsDelegate('query', 'images', { where }, {}, '{ id }'),
    Tag: (where: TagWhereInput): Promise<boolean> => super.existsDelegate('query', 'tags', { where }, {}, '{ id }'),
    CartBook: (where: CartBookWhereInput): Promise<boolean> => super.existsDelegate('query', 'cartBooks', { where }, {}, '{ id }'),
    Order: (where: OrderWhereInput): Promise<boolean> => super.existsDelegate('query', 'orders', { where }, {}, '{ id }'),
    PostalCode: (where: PostalCodeWhereInput): Promise<boolean> => super.existsDelegate('query', 'postalCodes', { where }, {}, '{ id }'),
    OrderBook: (where: OrderBookWhereInput): Promise<boolean> => super.existsDelegate('query', 'orderBooks', { where }, {}, '{ id }'),
    Book: (where: BookWhereInput): Promise<boolean> => super.existsDelegate('query', 'books', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }')
  }

  query: Query = {
    categories: (args, info): Promise<Category[]> => super.delegate('query', 'categories', args, {}, info),
    types: (args, info): Promise<Type[]> => super.delegate('query', 'types', args, {}, info),
    publishers: (args, info): Promise<Publisher[]> => super.delegate('query', 'publishers', args, {}, info),
    images: (args, info): Promise<Image[]> => super.delegate('query', 'images', args, {}, info),
    tags: (args, info): Promise<Tag[]> => super.delegate('query', 'tags', args, {}, info),
    cartBooks: (args, info): Promise<CartBook[]> => super.delegate('query', 'cartBooks', args, {}, info),
    orders: (args, info): Promise<Order[]> => super.delegate('query', 'orders', args, {}, info),
    postalCodes: (args, info): Promise<PostalCode[]> => super.delegate('query', 'postalCodes', args, {}, info),
    orderBooks: (args, info): Promise<OrderBook[]> => super.delegate('query', 'orderBooks', args, {}, info),
    books: (args, info): Promise<Book[]> => super.delegate('query', 'books', args, {}, info),
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    category: (args, info): Promise<Category | null> => super.delegate('query', 'category', args, {}, info),
    type: (args, info): Promise<Type | null> => super.delegate('query', 'type', args, {}, info),
    publisher: (args, info): Promise<Publisher | null> => super.delegate('query', 'publisher', args, {}, info),
    image: (args, info): Promise<Image | null> => super.delegate('query', 'image', args, {}, info),
    tag: (args, info): Promise<Tag | null> => super.delegate('query', 'tag', args, {}, info),
    cartBook: (args, info): Promise<CartBook | null> => super.delegate('query', 'cartBook', args, {}, info),
    order: (args, info): Promise<Order | null> => super.delegate('query', 'order', args, {}, info),
    postalCode: (args, info): Promise<PostalCode | null> => super.delegate('query', 'postalCode', args, {}, info),
    orderBook: (args, info): Promise<OrderBook | null> => super.delegate('query', 'orderBook', args, {}, info),
    book: (args, info): Promise<Book | null> => super.delegate('query', 'book', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    categoriesConnection: (args, info): Promise<CategoryConnection> => super.delegate('query', 'categoriesConnection', args, {}, info),
    typesConnection: (args, info): Promise<TypeConnection> => super.delegate('query', 'typesConnection', args, {}, info),
    publishersConnection: (args, info): Promise<PublisherConnection> => super.delegate('query', 'publishersConnection', args, {}, info),
    imagesConnection: (args, info): Promise<ImageConnection> => super.delegate('query', 'imagesConnection', args, {}, info),
    tagsConnection: (args, info): Promise<TagConnection> => super.delegate('query', 'tagsConnection', args, {}, info),
    cartBooksConnection: (args, info): Promise<CartBookConnection> => super.delegate('query', 'cartBooksConnection', args, {}, info),
    ordersConnection: (args, info): Promise<OrderConnection> => super.delegate('query', 'ordersConnection', args, {}, info),
    postalCodesConnection: (args, info): Promise<PostalCodeConnection> => super.delegate('query', 'postalCodesConnection', args, {}, info),
    orderBooksConnection: (args, info): Promise<OrderBookConnection> => super.delegate('query', 'orderBooksConnection', args, {}, info),
    booksConnection: (args, info): Promise<BookConnection> => super.delegate('query', 'booksConnection', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createCategory: (args, info): Promise<Category> => super.delegate('mutation', 'createCategory', args, {}, info),
    createType: (args, info): Promise<Type> => super.delegate('mutation', 'createType', args, {}, info),
    createPublisher: (args, info): Promise<Publisher> => super.delegate('mutation', 'createPublisher', args, {}, info),
    createImage: (args, info): Promise<Image> => super.delegate('mutation', 'createImage', args, {}, info),
    createTag: (args, info): Promise<Tag> => super.delegate('mutation', 'createTag', args, {}, info),
    createCartBook: (args, info): Promise<CartBook> => super.delegate('mutation', 'createCartBook', args, {}, info),
    createOrder: (args, info): Promise<Order> => super.delegate('mutation', 'createOrder', args, {}, info),
    createPostalCode: (args, info): Promise<PostalCode> => super.delegate('mutation', 'createPostalCode', args, {}, info),
    createOrderBook: (args, info): Promise<OrderBook> => super.delegate('mutation', 'createOrderBook', args, {}, info),
    createBook: (args, info): Promise<Book> => super.delegate('mutation', 'createBook', args, {}, info),
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    updateCategory: (args, info): Promise<Category | null> => super.delegate('mutation', 'updateCategory', args, {}, info),
    updateType: (args, info): Promise<Type | null> => super.delegate('mutation', 'updateType', args, {}, info),
    updatePublisher: (args, info): Promise<Publisher | null> => super.delegate('mutation', 'updatePublisher', args, {}, info),
    updateImage: (args, info): Promise<Image | null> => super.delegate('mutation', 'updateImage', args, {}, info),
    updateTag: (args, info): Promise<Tag | null> => super.delegate('mutation', 'updateTag', args, {}, info),
    updateCartBook: (args, info): Promise<CartBook | null> => super.delegate('mutation', 'updateCartBook', args, {}, info),
    updateOrder: (args, info): Promise<Order | null> => super.delegate('mutation', 'updateOrder', args, {}, info),
    updatePostalCode: (args, info): Promise<PostalCode | null> => super.delegate('mutation', 'updatePostalCode', args, {}, info),
    updateOrderBook: (args, info): Promise<OrderBook | null> => super.delegate('mutation', 'updateOrderBook', args, {}, info),
    updateBook: (args, info): Promise<Book | null> => super.delegate('mutation', 'updateBook', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    deleteCategory: (args, info): Promise<Category | null> => super.delegate('mutation', 'deleteCategory', args, {}, info),
    deleteType: (args, info): Promise<Type | null> => super.delegate('mutation', 'deleteType', args, {}, info),
    deletePublisher: (args, info): Promise<Publisher | null> => super.delegate('mutation', 'deletePublisher', args, {}, info),
    deleteImage: (args, info): Promise<Image | null> => super.delegate('mutation', 'deleteImage', args, {}, info),
    deleteTag: (args, info): Promise<Tag | null> => super.delegate('mutation', 'deleteTag', args, {}, info),
    deleteCartBook: (args, info): Promise<CartBook | null> => super.delegate('mutation', 'deleteCartBook', args, {}, info),
    deleteOrder: (args, info): Promise<Order | null> => super.delegate('mutation', 'deleteOrder', args, {}, info),
    deletePostalCode: (args, info): Promise<PostalCode | null> => super.delegate('mutation', 'deletePostalCode', args, {}, info),
    deleteOrderBook: (args, info): Promise<OrderBook | null> => super.delegate('mutation', 'deleteOrderBook', args, {}, info),
    deleteBook: (args, info): Promise<Book | null> => super.delegate('mutation', 'deleteBook', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    upsertCategory: (args, info): Promise<Category> => super.delegate('mutation', 'upsertCategory', args, {}, info),
    upsertType: (args, info): Promise<Type> => super.delegate('mutation', 'upsertType', args, {}, info),
    upsertPublisher: (args, info): Promise<Publisher> => super.delegate('mutation', 'upsertPublisher', args, {}, info),
    upsertImage: (args, info): Promise<Image> => super.delegate('mutation', 'upsertImage', args, {}, info),
    upsertTag: (args, info): Promise<Tag> => super.delegate('mutation', 'upsertTag', args, {}, info),
    upsertCartBook: (args, info): Promise<CartBook> => super.delegate('mutation', 'upsertCartBook', args, {}, info),
    upsertOrder: (args, info): Promise<Order> => super.delegate('mutation', 'upsertOrder', args, {}, info),
    upsertPostalCode: (args, info): Promise<PostalCode> => super.delegate('mutation', 'upsertPostalCode', args, {}, info),
    upsertOrderBook: (args, info): Promise<OrderBook> => super.delegate('mutation', 'upsertOrderBook', args, {}, info),
    upsertBook: (args, info): Promise<Book> => super.delegate('mutation', 'upsertBook', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    updateManyCategories: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCategories', args, {}, info),
    updateManyTypes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyTypes', args, {}, info),
    updateManyPublishers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPublishers', args, {}, info),
    updateManyImages: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyImages', args, {}, info),
    updateManyTags: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyTags', args, {}, info),
    updateManyCartBooks: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCartBooks', args, {}, info),
    updateManyOrders: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyOrders', args, {}, info),
    updateManyPostalCodes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPostalCodes', args, {}, info),
    updateManyOrderBooks: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyOrderBooks', args, {}, info),
    updateManyBooks: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyBooks', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    deleteManyCategories: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCategories', args, {}, info),
    deleteManyTypes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyTypes', args, {}, info),
    deleteManyPublishers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPublishers', args, {}, info),
    deleteManyImages: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyImages', args, {}, info),
    deleteManyTags: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyTags', args, {}, info),
    deleteManyCartBooks: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCartBooks', args, {}, info),
    deleteManyOrders: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyOrders', args, {}, info),
    deleteManyPostalCodes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPostalCodes', args, {}, info),
    deleteManyOrderBooks: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyOrderBooks', args, {}, info),
    deleteManyBooks: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyBooks', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info)
  }

  subscription: Subscription = {
    category: (args, infoOrQuery): Promise<AsyncIterator<CategorySubscriptionPayload>> => super.delegateSubscription('category', args, {}, infoOrQuery),
    type: (args, infoOrQuery): Promise<AsyncIterator<TypeSubscriptionPayload>> => super.delegateSubscription('type', args, {}, infoOrQuery),
    publisher: (args, infoOrQuery): Promise<AsyncIterator<PublisherSubscriptionPayload>> => super.delegateSubscription('publisher', args, {}, infoOrQuery),
    image: (args, infoOrQuery): Promise<AsyncIterator<ImageSubscriptionPayload>> => super.delegateSubscription('image', args, {}, infoOrQuery),
    tag: (args, infoOrQuery): Promise<AsyncIterator<TagSubscriptionPayload>> => super.delegateSubscription('tag', args, {}, infoOrQuery),
    cartBook: (args, infoOrQuery): Promise<AsyncIterator<CartBookSubscriptionPayload>> => super.delegateSubscription('cartBook', args, {}, infoOrQuery),
    order: (args, infoOrQuery): Promise<AsyncIterator<OrderSubscriptionPayload>> => super.delegateSubscription('order', args, {}, infoOrQuery),
    postalCode: (args, infoOrQuery): Promise<AsyncIterator<PostalCodeSubscriptionPayload>> => super.delegateSubscription('postalCode', args, {}, infoOrQuery),
    orderBook: (args, infoOrQuery): Promise<AsyncIterator<OrderBookSubscriptionPayload>> => super.delegateSubscription('orderBook', args, {}, infoOrQuery),
    book: (args, infoOrQuery): Promise<AsyncIterator<BookSubscriptionPayload>> => super.delegateSubscription('book', args, {}, infoOrQuery),
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery)
  }
}