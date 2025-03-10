import connectDB from "@/config/db";

export default function Home() {
  connectDB();
  return (
   <>
      <h1> URL Shorty</h1>
   </>
  );
}
