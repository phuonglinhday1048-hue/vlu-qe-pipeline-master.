const { login } = require('./auth');

describe('Smoke Test - Login Feature', () => {
  test('should return true for correct admin credentials (admin/123)', () => {
    const result = login('admin', '123');
    expect(result).toBe(true);
  });
});
