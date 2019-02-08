module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBook {
  count: Int!
}

type AggregateStudent {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Book {
  id: ID!
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
  tags: [String!]!
  image1: String
  image2: String
  image3: String
  image4: String
  image5: String
}

type BookConnection {
  pageInfo: PageInfo!
  edges: [BookEdge]!
  aggregate: AggregateBook!
}

input BookCreateInput {
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
  tags: BookCreatetagsInput
  image1: String
  image2: String
  image3: String
  image4: String
  image5: String
}

input BookCreatetagsInput {
  set: [String!]
}

type BookEdge {
  node: Book!
  cursor: String!
}

enum BookOrderByInput {
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
  image1_ASC
  image1_DESC
  image2_ASC
  image2_DESC
  image3_ASC
  image3_DESC
  image4_ASC
  image4_DESC
  image5_ASC
  image5_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookPreviousValues {
  id: ID!
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
  tags: [String!]!
  image1: String
  image2: String
  image3: String
  image4: String
  image5: String
}

type BookSubscriptionPayload {
  mutation: MutationType!
  node: Book
  updatedFields: [String!]
  previousValues: BookPreviousValues
}

input BookSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookWhereInput
  AND: [BookSubscriptionWhereInput!]
  OR: [BookSubscriptionWhereInput!]
  NOT: [BookSubscriptionWhereInput!]
}

input BookUpdateInput {
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
  tags: BookUpdatetagsInput
  image1: String
  image2: String
  image3: String
  image4: String
  image5: String
}

input BookUpdateManyMutationInput {
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
  tags: BookUpdatetagsInput
  image1: String
  image2: String
  image3: String
  image4: String
  image5: String
}

input BookUpdatetagsInput {
  set: [String!]
}

input BookWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  publisher: String
  publisher_not: String
  publisher_in: [String!]
  publisher_not_in: [String!]
  publisher_lt: String
  publisher_lte: String
  publisher_gt: String
  publisher_gte: String
  publisher_contains: String
  publisher_not_contains: String
  publisher_starts_with: String
  publisher_not_starts_with: String
  publisher_ends_with: String
  publisher_not_ends_with: String
  className: String
  className_not: String
  className_in: [String!]
  className_not_in: [String!]
  className_lt: String
  className_lte: String
  className_gt: String
  className_gte: String
  className_contains: String
  className_not_contains: String
  className_starts_with: String
  className_not_starts_with: String
  className_ends_with: String
  className_not_ends_with: String
  subject: String
  subject_not: String
  subject_in: [String!]
  subject_not_in: [String!]
  subject_lt: String
  subject_lte: String
  subject_gt: String
  subject_gte: String
  subject_contains: String
  subject_not_contains: String
  subject_starts_with: String
  subject_not_starts_with: String
  subject_ends_with: String
  subject_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  edition: String
  edition_not: String
  edition_in: [String!]
  edition_not_in: [String!]
  edition_lt: String
  edition_lte: String
  edition_gt: String
  edition_gte: String
  edition_contains: String
  edition_not_contains: String
  edition_starts_with: String
  edition_not_starts_with: String
  edition_ends_with: String
  edition_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  detail: String
  detail_not: String
  detail_in: [String!]
  detail_not_in: [String!]
  detail_lt: String
  detail_lte: String
  detail_gt: String
  detail_gte: String
  detail_contains: String
  detail_not_contains: String
  detail_starts_with: String
  detail_not_starts_with: String
  detail_ends_with: String
  detail_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  mrp: Int
  mrp_not: Int
  mrp_in: [Int!]
  mrp_not_in: [Int!]
  mrp_lt: Int
  mrp_lte: Int
  mrp_gt: Int
  mrp_gte: Int
  discount: Int
  discount_not: Int
  discount_in: [Int!]
  discount_not_in: [Int!]
  discount_lt: Int
  discount_lte: Int
  discount_gt: Int
  discount_gte: Int
  image1: String
  image1_not: String
  image1_in: [String!]
  image1_not_in: [String!]
  image1_lt: String
  image1_lte: String
  image1_gt: String
  image1_gte: String
  image1_contains: String
  image1_not_contains: String
  image1_starts_with: String
  image1_not_starts_with: String
  image1_ends_with: String
  image1_not_ends_with: String
  image2: String
  image2_not: String
  image2_in: [String!]
  image2_not_in: [String!]
  image2_lt: String
  image2_lte: String
  image2_gt: String
  image2_gte: String
  image2_contains: String
  image2_not_contains: String
  image2_starts_with: String
  image2_not_starts_with: String
  image2_ends_with: String
  image2_not_ends_with: String
  image3: String
  image3_not: String
  image3_in: [String!]
  image3_not_in: [String!]
  image3_lt: String
  image3_lte: String
  image3_gt: String
  image3_gte: String
  image3_contains: String
  image3_not_contains: String
  image3_starts_with: String
  image3_not_starts_with: String
  image3_ends_with: String
  image3_not_ends_with: String
  image4: String
  image4_not: String
  image4_in: [String!]
  image4_not_in: [String!]
  image4_lt: String
  image4_lte: String
  image4_gt: String
  image4_gte: String
  image4_contains: String
  image4_not_contains: String
  image4_starts_with: String
  image4_not_starts_with: String
  image4_ends_with: String
  image4_not_ends_with: String
  image5: String
  image5_not: String
  image5_in: [String!]
  image5_not_in: [String!]
  image5_lt: String
  image5_lte: String
  image5_gt: String
  image5_gte: String
  image5_contains: String
  image5_not_contains: String
  image5_starts_with: String
  image5_not_starts_with: String
  image5_ends_with: String
  image5_not_ends_with: String
  AND: [BookWhereInput!]
  OR: [BookWhereInput!]
  NOT: [BookWhereInput!]
}

input BookWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBook(data: BookCreateInput!): Book!
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  updateManyBooks(data: BookUpdateManyMutationInput!, where: BookWhereInput): BatchPayload!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
  deleteBook(where: BookWhereUniqueInput!): Book
  deleteManyBooks(where: BookWhereInput): BatchPayload!
  createStudent(data: StudentCreateInput!): Student!
  updateStudent(data: StudentUpdateInput!, where: StudentWhereUniqueInput!): Student
  updateManyStudents(data: StudentUpdateManyMutationInput!, where: StudentWhereInput): BatchPayload!
  upsertStudent(where: StudentWhereUniqueInput!, create: StudentCreateInput!, update: StudentUpdateInput!): Student!
  deleteStudent(where: StudentWhereUniqueInput!): Student
  deleteManyStudents(where: StudentWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
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

type Query {
  book(where: BookWhereUniqueInput!): Book
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book]!
  booksConnection(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookConnection!
  student(where: StudentWhereUniqueInput!): Student
  students(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Student]!
  studentsConnection(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudentConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Student {
  id: ID!
  name: String!
  email: String!
}

type StudentConnection {
  pageInfo: PageInfo!
  edges: [StudentEdge]!
  aggregate: AggregateStudent!
}

input StudentCreateInput {
  name: String!
  email: String!
}

type StudentEdge {
  node: Student!
  cursor: String!
}

enum StudentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StudentPreviousValues {
  id: ID!
  name: String!
  email: String!
}

type StudentSubscriptionPayload {
  mutation: MutationType!
  node: Student
  updatedFields: [String!]
  previousValues: StudentPreviousValues
}

input StudentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StudentWhereInput
  AND: [StudentSubscriptionWhereInput!]
  OR: [StudentSubscriptionWhereInput!]
  NOT: [StudentSubscriptionWhereInput!]
}

input StudentUpdateInput {
  name: String
  email: String
}

input StudentUpdateManyMutationInput {
  name: String
  email: String
}

input StudentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [StudentWhereInput!]
  OR: [StudentWhereInput!]
  NOT: [StudentWhereInput!]
}

input StudentWhereUniqueInput {
  id: ID
}

type Subscription {
  book(where: BookSubscriptionWhereInput): BookSubscriptionPayload
  student(where: StudentSubscriptionWhereInput): StudentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
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

type UserConnection {
  pageInfo: PageInfo!
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

type UserEdge {
  node: User!
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  walletBalance: Int
  walletBalance_not: Int
  walletBalance_in: [Int!]
  walletBalance_not_in: [Int!]
  walletBalance_lt: Int
  walletBalance_lte: Int
  walletBalance_gt: Int
  walletBalance_gte: Int
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  resetTokenExpiry_not: Float
  resetTokenExpiry_in: [Float!]
  resetTokenExpiry_not_in: [Float!]
  resetTokenExpiry_lt: Float
  resetTokenExpiry_lte: Float
  resetTokenExpiry_gt: Float
  resetTokenExpiry_gte: Float
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    