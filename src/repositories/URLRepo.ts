import Url , {Iurl} from "@/models/url";
import connectDB from "@/config/db";
class URLRepo {
    private urlModel;
    constructor() {
        connectDB();
        this.urlModel = Url;
    }

    async getURLbyID(id: string): Promise<Iurl | null> {
        return await this.urlModel.findById(id).lean();
    }

    async getURLbyShortURL(shortUrl: string): Promise<Iurl | null> {
        return await this.urlModel.findOne({ shortUrl }).lean();
    }

    async getURLbyURL(url: string): Promise<Iurl | null> {
        return await this.urlModel.findOne({ url }).lean();
    }

    async getAllURLs(): Promise<Iurl[] | null> {
        return await this.urlModel.find().lean();
    }

    async createURL(url: string, shortUrl: string): Promise<Iurl> {
        return await this.urlModel.create({ url, shortUrl });
    }

    async deleteURL(id: string): Promise<Iurl | null> {
        return await this.urlModel.findByIdAndDelete(id).lean();
    }
}


export default URLRepo;