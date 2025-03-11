'use client';

import ErrorFallback from '@/components/ErrorFallback';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return <ErrorFallback error={error} reset={reset} />;
};

export default Error;
