const userCreateQ =  `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    _id
    firstName
    lastName
  }
}`

const userGetByIdQ = `query UserGetById($userId: ID!) {
  userGetById(userId: $userId) {
    firstName
    lastName
    _id
  }
}`

const userGetAllQ = `query UsersGetAll($amount: Int) {
usersGetAll(amount: $amount) {
_id
firstName
lastName
}
}`
const userUpdateQ = `mutation UserUpdateById($userInput: UserFields) {
    userUpdateById(userInput: $userInput) {
        _id
        firstName
        lastName
    }
}`
const userDeleteQ = `mutation UserDeleteById($userId: ID) {
  userDeleteById(userId: $userId)
}`

module.exports =  { userCreateQ, userGetByIdQ, userGetAllQ, userUpdateQ, userDeleteQ }