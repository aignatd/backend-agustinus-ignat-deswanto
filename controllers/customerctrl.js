const mdlTransCustomer = require('@models/transcustomermdl');
const mdlItemCustomer = require('@models/transitemmdl');

let newtransactionctrl = async (req, res) => {
	try {
		console.log("---------- New Transaction ----------");
		console.log('Body ->', req.body)

		const resCustomer = await mdlTransCustomer.create({ ...req.body.customer });
		console.log("Customer result ->", resCustomer);

		if (!resCustomer) {
			res.status(400).json(
				{
					code: 2000,
					msg: "Transaction data not saved",
					data : result
				});

        return;
    }

    let allItem = []

    for (const idx in req.body.items)  {
      let item = req.body.items[idx];
      item.transaction_id = resCustomer.transaction_id;
      console.log(`Item ${idx} ->`, item);
      allItem.push(item);
    }

		console.log('All item ->', allItem)

    const resItem = await mdlItemCustomer.bulkCreate(allItem);
		console.log("Item result ->", resItem);

		if (!resItem || resItem.length === 0)
      res.status(400).json(
				{
					code: 2001,
					msg: "Item data not saved"
				});
    else
      res.status(200).json(
        {
          code: 0,
          msg: "Item data saved"
        });
	} catch (err) {
		console.log(err.toString());
		res.status(500).json({
			code: 3000,
			msg: err
		});
	}
};

let listtransctrl = async (req, res, next) => {
	try {
		console.log("---------- Get Transaction List ----------");
		const result = await mdlTransCustomer.findAll();
		console.log("Result ->", result);

		if (result.length >= 1)
			res.status(200).json(
				{
					code: 0,
					msg: "Transaction data found",
					data: result
				});
		else
			res.status(404).json(
				{
					code: 2002,
					msg: "Transaction data not found",
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

let gettransctrl = async (req, res, next) => {
	try {
		console.log("---------- Get Transaction Data ----------");
		console.log('Param 1 ->', req.params.field)
		console.log('Param 2 ->', req.params.fill)

		var jsonObj = {};
		jsonObj[req.params.field] = req.params.fill;

		const result = await mdlTransCustomer.findAll({ where: jsonObj });
		console.log("Result ->", result);

		if (result) {
			res.status(200).json(
				{
					code: 0,
					msg: "Transaction data found",
					data: result
				});
		}
		else
			res.status(404).json(
				{
					code: 2003,
					msg: "Transaction data not found",
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

let listitemctrl = async (req, res, next) => {
	try {
		console.log("---------- Get Transaction Item List ----------");
		const result = await mdlItemCustomer.findAll();
		console.log("Result ->", result);

		if (result.length >= 1)
			res.status(200).json(
				{
					code: 0,
					msg: "Item data found",
					data: result
				});
		else
			res.status(404).json(
				{
					code: 2004,
					msg: "Item data not found",
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

let getitemctrl = async (req, res, next) => {
	try {
		console.log("---------- Get Transaction Data ----------");
		console.log('Param 1 ->', req.params.field)
		console.log('Param 2 ->', req.params.fill)

		var jsonObj = {};
		jsonObj[req.params.field] = req.params.fill;

		const result = await mdlItemCustomer.findAll({ where: jsonObj });
		console.log("Result ->", result);

		if (result) {
			res.status(200).json(
				{
					code: 0,
					msg: "Item data found",
					data: result
				});
		}
		else
			res.status(404).json(
				{
					code: 2005,
					msg: "Item data not found",
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

module.exports = {
	newtransactionctrl, listtransctrl, gettransctrl, listitemctrl, getitemctrl
}
