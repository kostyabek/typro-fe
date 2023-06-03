import { useState } from 'react';

type CopyMethod = (text: string) => Promise<void>;
type CopyResult = null | { state: 'success' } | { state: 'error'; message: string };

export const useCopyToClipboard = (): readonly [CopyMethod, CopyResult] => {
  const [result, setResult] = useState<
    null | { state: 'success' } | { state: 'error'; message: string }
  >(null);

  const copy = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setResult({ state: 'success' });
    } catch (error: any) {
      setResult({ state: 'error', message: error.message });
      throw error;
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 2000);
    }
  };

  return [copy, result] as const;
};
