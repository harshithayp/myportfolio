const express = require("express");
const router = express.Router();
const { getPortfolio, addPortfolio, download } = require("../controllers/portfolioController");
//const  uploads = require('../controllers/blogController');

router.get("/",getPortfolio);
router.post("/addPortfolio",addPortfolio);
router.get("/download",download);


module.exports=router;