// import * as Clipboard from '@react-native-clipboard/clipboard';

/**
 * Custom React hook for interacting with the system clipboard.
 *
 * @returns An object containing utility functions for clipboard operations:
 * - `copyToClipboard`: Copies a given string to the clipboard.
 * - `getClipboardContent`: Asynchronously retrieves the current clipboard content as a string.
 * - `getOTPFromClipboard`: Asynchronously extracts a 5-digit OTP code from the clipboard content, if present.
 *
 * @example
 * const { copyToClipboard, getClipboardContent, getOTPFromClipboard } = useClipboard();
 * copyToClipboard("Hello, world!");
 * const content = await getClipboardContent();
 * const otp = await getOTPFromClipboard();
 */
export default function useClipboard() {
  // Copies the provided text to the clipboard and updates the local state.
  const copyToClipboard = (text: string) => {
    // Clipboard.default.setString(text);
  };

  const getClipboardContent = async () => {
    // const contentInClipboard = await Clipboard.default.getString();
    // return contentInClipboard;
  };
  /**
   * The regular expression used to extract a 5-digit OTP from the clipboard content.
   * It is assumed that the opt will be a 5 digit number
   */
  const getOTPFromClipboard = async () => {
    const content = await getClipboardContent();

    // if (content) {
    //   const otpRegex = /\b\d{5}\b/;
    //   const match = otpRegex.exec(content);
    //   return match ? match[0] : null;
    // }
    return null;
  };

  return {copyToClipboard, getClipboardContent, getOTPFromClipboard};
}
