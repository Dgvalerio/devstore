import { NextPage } from 'next';

const Search: NextPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <h1>Hello World!</h1>;
};

export default Search;
