function login(username, password) {
  // Kiểm tra username rỗng
  if (!username || username.trim() === "") {
    return false;
  }
//Bổ sung ghi chú 
  // Kiểm tra tài khoản bị khóa
  if (username === "locked_user") {
    throw new Error("Account is locked");
  }

  // Kiểm tra tài khoản và mật khẩu chính xác
  if (username === "admin" && password === "9999") {
    return true;
  }

  // Các trường hợp sai mật khẩu hoặc ký tự đặc biệt không hợp lệ
  return false;
}

module.exports = { login };
