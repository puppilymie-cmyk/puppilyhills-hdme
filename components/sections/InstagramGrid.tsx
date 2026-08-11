import Image from "next/image";
import { instagramPosts } from "@/content/instagram";

export function InstagramGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
      {instagramPosts.map((post) => (
        <a
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group relative block aspect-square overflow-hidden bg-ivory"
        >
          <Image
            src={post.image}
            alt={post.caption}
            fill
            sizes="(min-width: 1024px) 16vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      ))}
    </div>
  );
}
