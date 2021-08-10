const data = require('../shared/product-data');
module.exports = async function (context, req) {
    try {
        const products = data.getProducts();
        context.exports.status(200).json(products);
    } catch (error) {
        context.exports.status(500).send(error);
    }
};
