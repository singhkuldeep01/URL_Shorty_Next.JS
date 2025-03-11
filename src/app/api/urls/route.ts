import URLShortnerServices from "@/Services/URLShortnerServices";
import { NextResponse } from "next/server";
import { cache } from "react";

const fetchUrls = cache(async () => {
    const shortnerService = new URLShortnerServices();
    const urls = await shortnerService.getAllURLs();
    return NextResponse.json(urls , {status: 200});  
});

export async function GET() {
    return await fetchUrls();
}