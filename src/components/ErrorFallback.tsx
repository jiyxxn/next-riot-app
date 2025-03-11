'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ERROR_MESSAGE } from '@/constants';

interface ErrorFallbackProps {
  error: Error;
  reset?: () => void;
}

/**
 * HTTP 오류 코드에 따라 사용자 친화적인 메시지로 변환
 */
const getErrorMessage = (message: string): string => {
  if (message.includes('403')) return ERROR_MESSAGE.ERROR_403;
  if (message.includes('404')) return ERROR_MESSAGE.ERROR_404;
  if (message.includes('500')) return ERROR_MESSAGE.ERROR_500;
  return ERROR_MESSAGE.DEFAULT;
};

const ErrorFallback = ({ error, reset }: ErrorFallbackProps) => {
  const router = useRouter();
  const friendlyMessage = getErrorMessage(error.message);

  useEffect(() => {
    console.error('에러 발생:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h2 className="text-2xl font-bold text-yellow-light">
        ⚠️ 오류가 발생했습니다.
      </h2>
      <p className="text-gray-600">{friendlyMessage}</p>
      <div className="mt-4 flex gap-3">
        {reset && (
          <button
            onClick={() => reset()}
            className="px-4 py-3 bg-blue-500 text-white rounded-md leading-none">
            다시 시도
          </button>
        )}
        <button
          onClick={() => router.push('/')}
          className="px-4 py-3 bg-gray-500 text-white rounded-md leading-none">
          홈으로 가기
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
