import mongoose, { Schema } from "mongoose";

interface IExample {
    title: string;
    count: number;
}

const schema = new Schema<IExample>(
    {
        title: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model<IExample>("Example", schema);
