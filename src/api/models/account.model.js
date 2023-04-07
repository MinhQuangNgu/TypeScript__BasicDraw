const mongoose = require("mongoose");
const schema = mongoose.Schema;

const accountSchema = new schema(
	{
		name: {
			type: String,
			default: "",
			required: true,
		},
		password: {
			type: String,
			default: "",
			required: true,
		},
		email: {
			type: String,
			default: "",
			required: true,
		},
		avatar: {
			type: String,
			default:
				"https://res.cloudinary.com/sttruyen/image/upload/v1679824074/oabahznlsy5dvjn11mka.jpg",
		},
		images: {
			type: [
				{
					type: mongoose.Types.ObjectId,
					ref: "images",
				},
			],
			default: [],
		},
	},
	{
		timestamps: true,
	}
);

accountSchema.index({ name: "text" });
const accountModel = mongoose.model("accounts", accountSchema);
accountModel.createIndexes({ name: "text" });
module.exports = accountModel;
