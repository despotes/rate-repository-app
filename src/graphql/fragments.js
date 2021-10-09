import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFieldsFragment on Repository {
    id
    fullName
    description
    stargazersCount
    forksCount
    language
    reviewCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
  }
`;
