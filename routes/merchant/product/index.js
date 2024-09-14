const productctrl = require('@controller/productctrl')

exports.GET = [ productctrl.listproducttctrl ];
exports.POST = [ productctrl.newproductctrl ];
