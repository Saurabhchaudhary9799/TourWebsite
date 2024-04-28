const express = require("express");

const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const bookingController = require("./../controllers/bookingController");


const router = express.Router();

router.get("/verified", bookingController.createBookingCheckout, (req, res) => {
  // res.sendFile(path.join(__dirname))
  res.render("emailVerified");
});

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch("/updateMyPassword", authController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);
router.patch("/updateMe",userController.uploadUserPhoto,userController.resizeUserPhoto, userController.updateMe);
router.delete("/deleteMe", userController.deleteMe);
router.get("/bookings",userController.getUserBookings)
router.use(authController.restrictTo("admin"));

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.get("/stats", userController.getStatsNatours);

module.exports = router;

