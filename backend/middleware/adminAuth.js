import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized, login again",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Invalid admin token",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

export default adminAuth;
