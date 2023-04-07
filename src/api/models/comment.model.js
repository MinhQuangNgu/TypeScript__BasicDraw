const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentSchema = new schema(
	{
		user: {
			type: mongoose.Types.ObjectId,
			ref: "accounts",
		},
		content: {
			type: String,
			default: "",
		},
		image: {
			type: mongoose.Types.ObjectId,
			ref: "images",
		},
		reply: {
			type: mongoose.Types.ObjectId,
			ref: "comments",
		},
		commentParent: {
			type: String,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);
commentSchema.index({ image: 1 });
const commentModel = mongoose.model("comments", commentSchema);
commentModel.createIndexes({ image: 1 });
