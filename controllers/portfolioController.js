const Portfloio = require("../models/portfolioModels");
const path=require("path");

const getPortfolio = async(req,res)=>{
    try{
       //const allBlog = await Blog.find();
       //console.log(allBlog);
       res.render("portfolio_view");
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const addPortfolio= async(req,res)=>{
  
    try{
        //const { name, email, message } = req.body;
        //console.log({ name, email, message });
        // Save file details to MongoDB
        //const newFile = new Portfloio({name: name, email:email, message:message});
        //await newFile.save();
        const _portf = await Portfloio.create(req.body);
        //console.log("huiii");
        res.redirect("/myPortfolio");
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

const download = async(req,res)=>{
    try{
        const filePath = path.join(__dirname, '../public/uploads/Harshitha - cv.pdf'); // Change this to your file path
        const fileName = 'Harshitha - cv.pdf'; // Change this to your file name

    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).send('Internal Server Error');
      }
    });
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

module.exports = {
    getPortfolio,
    addPortfolio,
    download,
};