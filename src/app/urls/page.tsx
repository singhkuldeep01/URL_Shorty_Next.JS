import Link from "next/link";

async function fetchUrls(): Promise<{ _id: string; url: string; shortUrl: string }[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/urls`);
    if (!response.ok) {
        throw new Error('Failed to fetch URLs');
    }
    return response.json();
}

export default async function UrlList() {
    let urls: { _id: string; url: string; shortUrl: string }[] | undefined;
    try {
        urls = await fetchUrls();
    } catch (error) {
        console.error(error);
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full text-center">
                    <h1 className="text-3xl font-semibold text-red-600">Error</h1>
                    <p className="text-md text-gray-600 mt-2">Failed to load URLs</p>
                    <Link href="/" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go To Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="p-8 bg-white rounded-lg shadow-md max-w-3xl w-full">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">All Short URLs</h1>
                <div className="text-center mb-6">
                    <Link href="/" className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">Go To Home</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-gray-700">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="py-3 px-4">Original URL</th>
                                <th className="py-3 px-4">Short URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {urls && urls.map((url) => (
                                <tr key={url._id} className="border-b hover:bg-gray-100">
                                    <td className="py-3 px-4">{url.url}</td>
                                    <td className="py-3 px-4">
                                        <a
                                            href={`${url.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            {`${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}