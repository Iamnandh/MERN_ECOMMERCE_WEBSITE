const products = require('../models/productmodel');


//get product api ...

exports.getproducts = async (req, res, next) => {

    const query = req.query.keyword ?{name: {$regex: req.query.keyword, $options: 'i'}} : {};
    try {
        const Products = await products.find(query);
    
        res.json({
            success: true,
            products: Products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};
// get single product api.../api/product/:id

exports.getsingleproduct = async (req, res, next) => {
try {
     const prod = await products.findById(req.params.id);
    res.json({
        success: true,
        prod   });
} catch (error) {
      res.status(404).json({
        success: false, 
         message: 'ombikuchu id podra bunda'});
}
   
};
