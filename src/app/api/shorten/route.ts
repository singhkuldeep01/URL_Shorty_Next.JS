import URLShortnerServices from "@/Services/URLShortnerServices";
import { NextResponse } from "next/server";

export async function POST(req : Request) {
    const { url } = await req.json();
    const shortnerService = new URLShortnerServices();
    const shortUrl = await shortnerService.shortenURL(url);
    return NextResponse.json({ shortUrl } ,{status: 201});
}

export async function GET() {
    const shortnerService = new URLShortnerServices();
    const urls = await shortnerService.getAllURLs();
    return NextResponse.json(urls , {status: 200});   
}