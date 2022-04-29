import { useState, useEffect } from "react";

export const useCopyClipboard = (interval = 2000) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyClipboard = (value) => {
    setIsCopied(true);
    navigator.clipboard.writeText(value);
  };

  useEffect(() => {
    let pid;

    if (isCopied && interval) {
      pid = setTimeout(() => {
        setIsCopied(false);
      }, interval);
    }

    return () => {
      clearTimeout(pid);
    };
  }, [isCopied, interval]);

  return [isCopied, copyClipboard];
};
