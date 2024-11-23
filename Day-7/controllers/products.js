const getAllProducts=async(req,res)=>{
    res.status(200).json('{I am getAllProducts}');
};

const getAllProductsTesting=async(req,res)=>{
    res.status(200).json('{I am getAllProductsTesting}');
};


module.exports={getAllProducts,getAllProductsTesting};