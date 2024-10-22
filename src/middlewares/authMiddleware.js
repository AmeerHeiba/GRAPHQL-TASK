const jwt = require("jsonwebtoken");

const authMiddleware = ({ req }) => {
  const token = req.headers.authorization || "";

  if (!token) {
    return { user: null };
  }

  try {
    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );
    return { user: decoded };
  } catch (error) {
    console.error("Invalid token:", error);
    return { user: null };
  }
};

module.exports = authMiddleware;
