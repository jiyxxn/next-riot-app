'use client';

import ErrorFallback from '@/components/ErrorFallback';

const GlobalError = ({ error }: { error: Error }) => {
  return <ErrorFallback error={error} />;
};

export default GlobalError;
