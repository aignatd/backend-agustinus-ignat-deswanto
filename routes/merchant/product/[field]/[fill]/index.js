const productctrl = require('@controller/productctrl')

exports.GET = [ productctrl.getproductctrl ];
exports.DELETE = [ productctrl.delproductctrl ];
exports.PATCH = [ productctrl.patchproductctrl ];
