const UserModel = require("../../model/UserModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { create } = require("../../model/BusinessUnitModel");

 // Our register logic starts here
exports.registerUser = async function (req, res, next) {
  try {
   // Get user input
    const { FirstName, LastName, Email, Password,UserName,Phone, Gender,} = req.body;

    // Validate user input
    if (!(Email && Password && FirstName && LastName)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await UserModel.findOne({ Email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(Password, 10);

    // Create user in our database
    const user = await UserModel.create({
      UserName,  
      Email: Email, // sanitize: convert email to lowercase
      Password:encryptedPassword,
      IsActive:true,
      FirstName,
      LastName,
      Gender,   
      Phone,
     
    });

   // let TOKEN_KEY = config.TOKEN_KEY;
    // Create token
    const token = jwt.sign(
      { Id: user.Id, Email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);



  } 
  catch (error) {
   console.log("Catch Error " + error);
    return res.status(404).json({
        status: "Error",
        error
    });
  }
};

exports.loginUser = async function (req, res, next) {
    // try {
        const { Email, Password } = req.body;

        // Validate user input
        if (!(Email && Password)) {
          return res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await UserModel.findOne({ Email });
        
        if (user && (await bcrypt.compare(Password, user.Password))) {
          // Create token
          const token = jwt.sign(
            { Id: user.Id, Email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
    
          // save user token
          user.token = token;
    
          // user
           return res.status(200).json(user);
        //    res.status(200).json({
        //     status: "Success",
        //     user
        // });
        }
       return res.status(400).send("Invalid Credentials");
      // } catch (error) {
      //   console.log(error);
      //   return res.status(404).json({
      //       status: "Error",
      //       error
      //   });

      // }
  };

  // admin apis

  // BusinessUnit table
  

