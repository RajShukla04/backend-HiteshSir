const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
// const asyncHandler = (fn) => async (req, res, next) => {
//   // higher order function
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
