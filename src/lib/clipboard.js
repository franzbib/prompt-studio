export function copyText(text, setCopied) {
  if (!navigator?.clipboard) {
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    if (!setCopied) {
      return;
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }).catch(() => {});
}
