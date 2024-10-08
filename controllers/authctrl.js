const authclass = require('@classes/authclass');

let gettokenctrl = async (req, res) => {
	try {
		console.log("---------- Get Token ----------");

		const { username, password } = await new authclass(req).checkRequest();
		console.log("Username ->", username);

		if (username && password) {
			const { token, lastdatetime } = await new authclass(req).createToken(username, password);

			res.status(200).json(
				{
					code: 0,
					msg: "Token generated successfully",
					data: {
						"tokenExpiry": lastdatetime,
						"tokenData": token,
						"tokenType": "bearer"
						}		
				});
		}
		else
			res.status(401).json(
				{
					code: 4000,
					msg: "You are not authorized"
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
	gettokenctrl
}
