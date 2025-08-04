import { useState, useCallback } from 'react';

export function useCharacterCounter(maxLength: number) {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const updateText = useCallback((newText: string) => {
    if (newText.length <= maxLength) {
      setText(newText);
      setCount(newText.length);
    }
  }, [maxLength]);

  const reset = useCallback(() => {
    setText('');
    setCount(0);
  }, []);

  return {
    text,
    count,
    remaining: maxLength - count,
    updateText,
    reset,
    isAtLimit: count >= maxLength,
  };
}
