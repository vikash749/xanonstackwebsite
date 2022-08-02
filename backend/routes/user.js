const express=require('express')
const router=express.Router()

const { getUserById, getUser,updateUser,getAllUsers,userPurchaseList }=require("../controllers/user")
const{isSignedIn,isAuthenticate,isAdmin}=require("../controllers/auth")

router.param("userId",getUserById)

router.get("/user/:userId",isSignedIn,isAuthenticate,getUser)
router.put("/user/:userId",isSignedIn,isAuthenticate,updateUser)

router.get("/orders/user/:userId",isSignedIn,isAuthenticate,userPurchaseList)

router.get("/users",getAllUsers);

module.exports=router;