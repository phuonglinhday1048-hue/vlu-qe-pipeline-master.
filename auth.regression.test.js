const { login } = require('./auth');

describe('Regression Tests - Login Edge Cases', () => {
  test('should return false for incorrect password (e.g., 1234)', () => {
    expect(login('admin', '1234')).toBe(false);
  });

  test('should return false when username is empty', () => {
    expect(login('', '123')).toBe(false);
  });

  test('should return false when password contains special characters', () => {
    expect(login('admin', '123@#$')).toBe(false);
  });

  test('should throw an error when account is locked', () => {
    expect(() => {
      login('locked_user', '123');
    }).toThrow('Account is locked');
  });
});
