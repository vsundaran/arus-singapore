import React from "react";

export const useCopyToClipboard = (): [boolean, (text: string) => void] => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return [copied, handleCopy];
};
