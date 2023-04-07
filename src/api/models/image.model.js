const mongoose = require("mongoose");
const schema = mongoose.Schema;

const imageSchema = new schema(
	{
		url: {
			type: String,
		},
		user: {
			type: mongoose.Types.ObjectId,
			ref: "accounts",
		},
		reviewers: {
			type: Number,
			default: 0,
		},
		stars: {
			type: Number,
			default: 0,
		},
		top_five_comments: [
			{
				type: mongoose.Types.ObjectId,
				ref: "comments",
			},
		],
	},
	{
		timestamps: true,
	}
);
imageSchema.index({ user: 1 });
const imageModel = mongoose.model("images", imageSchema);
imageModel.createIndexes({ user: 1 });
module.exports = imageModel;
