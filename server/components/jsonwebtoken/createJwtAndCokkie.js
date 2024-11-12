const jwt = require("jsonwebtoken");
const ms = require("ms");

const createJwtAndCookie = (user, res, expiresIn = "10h") => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const payload = {
    id: user._id,
    username: user.username,
    role: user.role,
    status: user.status,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });

  const expiresInMs = ms(expiresIn);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: expiresInMs,
    sameSite: "Lax",
    path: "/",
  });

  console.log(`Token created for user: ${user.email}`);

  return token;
};

module.exports = createJwtAndCookie;
