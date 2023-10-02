import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, //обезательний
    },
    text: {
      type: String,
      required: true,
      unique: true, //уникальный
    },
    tags: {
      type: Array,
      default: [],
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
    },
    imageUrl: String,
  },
  {
    timestamps: true, //дата создание
  },
);

export default mongoose.model('Post', PostSchema);
