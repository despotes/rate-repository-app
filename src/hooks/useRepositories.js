import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

// eslint-disable-next-line no-unused-vars
const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);
    // Replace the IP address part with your own IP address!
    const response = await fetch('http://10.3.6.12:5000/api/repositories');

    const json = await response.json();

    console.log(json);

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

const useRepositoriesGQL = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data?.repositories, loading, error };
};

export default useRepositoriesGQL;
