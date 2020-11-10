import React from 'react';

import useRouter from './hooks/useRouter';

import { PNotFound } from './components/pages/p-not-found';

const App = () => {
  const { match } = useRouter();

  return match || <PNotFound />;
};

export default App;
