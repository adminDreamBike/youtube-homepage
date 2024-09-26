import { VideoList } from "@/components/VideoList/VideoList";

export default function Home() {
  const URL_VIDEOS = "https://www.googleapis.com/youtube/v3/videos";

  return (
    <div className=" pb-20 gap-16 p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <VideoList url={URL_VIDEOS} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
