const express=require('express');
const router=express.Router();
const {getAllProducts,getAllProductsTesting}=require('./controllers/products');

Router.route('/').get(getAllProducts);
Router.route('/testing').get(getAllProductsTesting);


module.exports=router;