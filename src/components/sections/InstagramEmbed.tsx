import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramEmbedProps {
  url: string;
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;

      script.onload = () => {
        window.instgrm?.Embeds.process();
      };

      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        margin: 0,
        maxWidth: "540px",
        minWidth: "326px",
        width: "100%",
      }}
    />
  );
}