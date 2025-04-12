export function encodeBase64Url(obj: any): string {
  return encodeURIComponent(
    btoa(JSON.stringify(obj)).replace(/=+$/, "")
  );
}

export function decodeBase64Url(str: string): any | null {
  try {
    const padded = str + "=".repeat((4 - (str.length % 4)) % 4);
    const json = atob(decodeURIComponent(padded));
    return JSON.parse(json);
  } catch {
    return null;
  }
}
