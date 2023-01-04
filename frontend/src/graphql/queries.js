import { gql } from '@apollo/client';

export const GET_USERS_QUERY = gql
`
query user(
  $address: String!
) {
  user(address:$address){
    address
    name
    }
  }
`;

export const GET_QUESTION_QUERY = gql
`
query question(
  $address: String!
  $questionId: Int!
) {
  question(address:$address, questionId:$questionId){
    address
    questionId
    }
  }
`;

export const GET_ALL_QUESTION_OF_USER_QUERY = gql
`
query allQuestionOfUser(
  $address: String!
) {
  allQuestionOfUser(
    address:$address, 
){
    address
    questionId
    }
  }
`;

export const GET_ALL_QUESTION_DATA_QUERY = gql
`
query getAllQuestionData{
  getAllQuestionData{
    questionId
    name
    description
    example1
    example2
    code
    others
    answer
    }
  }
`;
