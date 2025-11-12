export const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err.stack || err.message);
  res.status(500).json({ error: "Something went wrong. Try again later." });
};
