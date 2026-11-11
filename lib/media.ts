import fs from "fs";
import path from "path";

export type PublicImage = {
  src: string;
  width: number;
  height: number;
};

function readSize(buf: Buffer): { width: number; height: number } | null {
  if (
    buf.length > 24 &&
    buf.toString("ascii", 0, 4) === "RIFF" &&
    buf.toString("ascii", 8, 12) === "WEBP"
  ) {
    const format = buf.toString("ascii", 12, 16);
    if (format === "VP8X") {
      return {
        width: 1 + buf.readUIntLE(24, 3),
        height: 1 + buf.readUIntLE(27, 3),
      };
    }
    if (format === "VP8 " && buf.length > 30) {
      return {
        width: buf.readUInt16LE(26) & 0x3fff,
        height: buf.readUInt16LE(28) & 0x3fff,
      };
    }
  }

  if (buf.length > 24 && buf[0] === 0x89 && buf[1] === 0x50) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length - 8) {
      if (buf[i] !== 0xff) {
        i += 1;
        continue;
      }
      const marker = buf[i + 1];
      if (marker === 0xd8 || marker === 0xd9) {
        i += 2;
        continue;
      }
      const len = buf.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xc3) {
        return {
          height: buf.readUInt16BE(i + 5),
          width: buf.readUInt16BE(i + 7),
        };
      }
      i += 2 + len;
    }
  }

  return null;
}

function find(relativePaths: string[]): PublicImage | null {
  for (const rel of relativePaths) {
    const abs = path.join(process.cwd(), "public", rel);
    if (!fs.existsSync(abs)) continue;
    const size = readSize(fs.readFileSync(abs));
    return {
      src: `/${rel}`,
      width: size?.width ?? 297,
      height: size?.height ?? 388,
    };
  }
  return null;
}

export function resolveTreePhoto() {
  return find([
    "photos/sam-tree.jpg",
    "photos/sam-tree.jpeg",
    "photos/sam-tree.png",
    "photos/sam-tree.webp",
  ]);
}

export function resolveHeadshot() {
  return find([
    "candidate/headshot.jpg",
    "candidate/headshot.jpeg",
    "candidate/headshot.png",
    "candidate/headshot.webp",
  ]);
}
