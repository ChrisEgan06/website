/**
 * Hobbies page
 * Photo and video gallery from the hobbies folder
 */

const mediaFiles = [
  "squeezesummit.JPG",
  "squeeze.JPG",
  "approach.JPG",
  "peanut.JPG",
  "moon.JPG",
  "tryod_send.mov",
  "waterfall.JPG",
  "pad.JPG",
  "evilblubs.JPG",
  "del.JPG",
  "beach.jpg",
  "bb.mov",
  "tanamy.JPG",
  "billsblubs.jpg",
  "back.jpg",
  "beach2.JPG",
];

const isVideo = (filename: string) => {
  const videoExtensions = [".MOV", ".mp4", ".webm", ".ogg"];
  return videoExtensions.some((ext) =>
    filename.toLowerCase().endsWith(ext.toLowerCase())
  );
};

function Hobbies() {
  return (
    <main className="min-h-screen py-12 text-slate-100 page-fade">
      <div className="site-container">
        <header className="mb-14 border-b border-white/10 pb-8">
          <h1 className="wallpoet-font mt-3 text-4xl text-white sm:text-5xl">
            Hobbies
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 text-justify">
            Things I enjoy outside of engineering.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mediaFiles.map((filename, index) => (
            <div
              key={index}
              className="overflow-hidden rounded border border-white/10 bg-white/[0.025] transition-transform duration-300 hover:scale-[1.02]"
            >
              {isVideo(filename) ? (
                <video
                  src={`/hobbies/${filename}`}
                  className="aspect-square w-full object-cover"
                  autoPlay
                  muted
                  loop
                />
              ) : (
                <img
                  src={`/hobbies/${filename}`}
                  alt="Hobby photo"
                  className="aspect-square w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Hobbies;
