import mongoose , {Document , Model , Schema} from "mongoose";
 
const urlSchema = new Schema({
    url: {
        type: String,
        required: true,
        unique: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    }
} , { timestamps: true });
export interface Iurl extends Document { 
    url: string;
    shortUrl: string;
}

const Url:Model<Iurl> = mongoose.models.Url || mongoose.model<Iurl>("Url" , urlSchema);

export default Url;