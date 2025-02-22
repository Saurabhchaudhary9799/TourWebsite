const User = require("./../models/userModal");
const multer = require("multer");
const  cloudinary = require( 'cloudinary').v2
const sharp = require("sharp");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");
const Booking = require("../models/bookingModel");
const Tour = require("../models/tourModel");

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/users');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   }
// });
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single("photo");

// exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
//   if (!req.file) return next();

//   req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

//   await sharp(req.file.buffer)
//     .resize(500, 500)
//     .toFormat('jpeg')
//     .jpeg({ quality: 90 })
//     .toFile(`Client/public/img/users/${req.file.filename}`);

//   next();
// });

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, "name", "email","photo");
  let photo;
  console.log(filteredBody);
  if (req.files) photo = req.files.photo;

  
  const result = await cloudinary.uploader.upload(photo.tempFilePath);

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, {...filteredBody,photo:result.url}, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getUserBookings = catchAsync(async (req, res, next) => {
  console.log(req.user.id);
  const loggedUser = await User.findOne({ name: req.user.name }).populate(
    "bookings"
  );

  if (!loggedUser) {
    return next(new Error("No user found with that name"));
  }

  const userResponse = {
    bookings: loggedUser.bookings.map((booking) => ({
      // Assuming bookings have properties you want like id, date etc.
      id: booking._id,
      tour: booking.tour,
      // date: booking.date
    })),
  };

  res.status(200).json({
    status: "success",
    user: userResponse,
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined! Please use /signup instead",
  });
};

exports.getUserStats = catchAsync(async (req, res, next) => {
  const result = await User.aggregate([{ $count: "totalUsers" }]);
  res.status(200).json({ result });
});

exports.getNatourStats = catchAsync(async (req, res, next) => {
  const totalUsers = await User.countDocuments();
  const totalTours = await Tour.countDocuments();
  const totalBookings = await Booking.countDocuments();
  const result = await Booking.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$price" },
      },
    },
  ]);
  res.status(200).json({
    totalUsers,
    totalTours,
    totalBookings,
    result,
  });
});

exports.getUser = factory.getOne(User, { path: "bookings" });
exports.getAllUsers = factory.getAll(User, {
  path: "bookings",
  select: "tour",
});

// Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
