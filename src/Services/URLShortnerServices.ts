import URLRepo from "@/repositories/URLRepo";
import shortId from "shortid";



export default class URLShortnerServices {
    private urlRepo;
    constructor() {
        this.urlRepo = new URLRepo();
    }
    async shortenURL(url: string): Promise<string | null> {
       let resultURL =  await this.urlRepo.getURLbyURL(url);
       if(resultURL){
           return resultURL.shortUrl;
       }
        let shortUrl = shortId();
        resultURL = await this.urlRepo.getURLbyShortURL(shortUrl);
        while(resultURL){
            shortUrl = shortId();
            resultURL = await this.urlRepo.getURLbyShortURL(shortUrl);
        }
        await this.urlRepo.createURL(url , shortUrl);
        return shortUrl;
    }

    async getAllURLs() {
        return await this.urlRepo.getAllURLs();
    }

    async getURLbyShortURL(shortUrl: string) {
        return await this.urlRepo.getURLbyShortURL(shortUrl);
    }
}
