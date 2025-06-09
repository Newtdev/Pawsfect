import Clipboard from '@react-native-clipboard/clipboard';
import useClipboard from '../hooks/useClipboard';

jest.mock('@react-native-clipboard/clipboard', () => ({
  setString: jest.fn(),
  getString: jest.fn(),
}));

describe('useClipboard', () => {
  const {copyToClipboard, getClipboardContent, getOTPFromClipboard} =
    useClipboard();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('copyToClipboard', () => {
    it('calls Clipboard.setString with the provided text', () => {
      copyToClipboard('test text');
      expect(Clipboard.setString).toHaveBeenCalledWith('test text');
    });
  });

  describe('getClipboardContent', () => {
    it('returns the clipboard content', async () => {
      (Clipboard.getString as jest.Mock).mockResolvedValue('clipboard content');
      const content = await getClipboardContent();
      expect(content).toBe('clipboard content');
      expect(Clipboard.getString).toHaveBeenCalled();
    });
  });

  describe('getOTPFromClipboard', () => {
    it('returns the 5-digit OTP if present in clipboard content', async () => {
      (Clipboard.getString as jest.Mock).mockResolvedValue(
        'Your OTP is 12345.',
      );
      const otp = await getOTPFromClipboard();
      expect(otp).toBe('12345');
    });

    it('returns null if no 5-digit OTP is present', async () => {
      (Clipboard.getString as jest.Mock).mockResolvedValue('No OTP here!');
      const otp = await getOTPFromClipboard();
      expect(otp).toBeNull();
    });

    it('returns null if clipboard content is empty', async () => {
      (Clipboard.getString as jest.Mock).mockResolvedValue('');
      const otp = await getOTPFromClipboard();
      expect(otp).toBeNull();
    });

    it('returns the first 5-digit OTP if multiple are present', async () => {
      (Clipboard.getString as jest.Mock).mockResolvedValue(
        'First: 12345, Second: 67890',
      );
      const otp = await getOTPFromClipboard();
      expect(otp).toBe('12345');
    });
  });
});
