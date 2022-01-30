export const useCopyClipboard = () => {
  const copyClipboard = (value) => {
    navigator.clipboard.writeText(value);
  };

  return [copyClipboard];
};
