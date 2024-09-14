const mdlProduct = require('@models/productmdl');

let listproducttctrl = async (req, res, next) => {
	try {
		console.log("---------- Get Product List ----------");
		const result = await mdlProduct.findAll();
		console.log("Result ->", result.length);

		if (result.length >= 1)
			res.status(200).json(
				{
					code: 0,
					msg: "Product data found",
					data: result
				});
		else
			res.status(404).json(
				{
					code: 1000,
					msg: "Product data not found",
					data: []
				});
	} catch (err) {
		console.log(err.toString());
		res.status(500).json({
			code: 3000,
			msg: err
		});
	}
};

let getproductctrl = async (req, res, next) => {
	try {
		console.log("---------- Get Product Data ----------");
		console.log('Param 1 ->', req.params.field)
		console.log('Param 2 ->', req.params.fill)

		var jsonObj = {};
		jsonObj[req.params.field] = req.params.fill;

		const result = await mdlProduct.findOne({ where: jsonObj });
		console.log("Result ->", result);

		if (result) {
			res.status(200).json(
				{
					code: 0,
					msg: "Product data found",
					data: [result]
				});
		}
		else
			res.status(404).json(
				{
					code: 1001,
					msg: "Product data not found",
					data: []
				});
	} catch (err) {
		console.log(err.toString());
		res.status(500).json({
			code: 3000,
			msg: err
		});
	}
};

let delproductctrl = async (req, res, next) => {
	try {
		console.log("---------- Delete Product ----------");
		console.log('Param 1 ->', req.params.field)
		console.log('Param 2 ->', req.params.fill)

		var jsonObj = {};
		jsonObj[req.params.field] = req.params.fill;

		const result = await mdlProduct.destroy({ where: jsonObj });
		console.log("Result ->", result);

		if (result == null || result == 0)
			res.status(404).json(
				{
					code: 1002,
					msg: "Product data not found"
				});
		else {
			res.status(200).json(
				{
					code: 0,
					msg: "Product data deleted"
				});
		}
	} catch (err) {
		console.log(err.toString());
		res.status(500).json({
			code: 3000,
			msg: err
		});
	}
};

let patchproductctrl = async (req, res, next) => {
	try {
		console.log("---------- Update Product ----------");
		console.log('Body ->', req.body)
		console.log('Param 1 ->', req.params.field)
		console.log('Param 2 ->', req.params.fill)

		var jsonObj = {};
		jsonObj[req.params.field] = req.params.fill;

		const [result] = await mdlProduct.update(
			{ ...req.body },
			{ where: jsonObj }
		)

		console.log("Result ->", result);

		if (result == 0)
			res.status(404).json(
				{
					code: 1003,
					msg: "Product data not updated"
				});
		else
			res.status(200).json(
			{
				code: 0,
				msg: "Product data updated"
			});
} catch (err) {
		console.log(err.toString());
		res.status(500).json({
			code: 3000,
			msg: err
		});
	}
};

let newproductctrl = async (req, res) => {
	try {
		console.log("---------- New Product ----------");
		console.log('Body ->', req.body)

		const result = await mdlProduct.create({ ...req.body });
		console.log("Result ->", result);

		if (result)
			res.status(200).json(
				{
					code: 0,
					msg : "New product saved"
				});
		else
			res.status(400).json(
				{
					code: 1004,
					msg: "Product not saved"
				});
	} catch (err) {
		console.log(err.toString());
		res.status(500).json({
			code: 3000,
			msg: err
		});
	}
};

module.exports = {
	listproducttctrl, getproductctrl, delproductctrl, patchproductctrl, newproductctrl
}
