const express = require("express");
const  cloudinary = require( 'cloudinary').v2;
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const bookingController = require("./../controllers/bookingController");


const router = express.Router();

          
cloudinary.config({ 
  cloud_name: 'dltk6m7c5', 
  api_key: '693261271788558', 
  api_secret: 'pQNNM5UC2ftuc5C5-Zi_dBjhLJ8' 
});

router.get("/verified", bookingController.createBookingCheckout, (req, res) => {
  // res.sendFile(path.join(__dirname))
  res.render("emailVerified");
});

router.get("/natour-stats",userController.getNatourStats);
router.get("/user-Stats",userController.getUserStats);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch("/updateMyPassword", authController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);
router.patch("/updateMe" ,userController.updateMe);
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



module.exports = router;

