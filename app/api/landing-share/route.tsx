import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export async function GET() {
  const photograph = await readFile(join(process.cwd(), "public/images/ad87b67c49d2f8de.jpg"));
  const photographUrl = `data:image/jpeg;base64,${photograph.toString("base64")}`;

  return new ImageResponse(
    <div style={{ display: "flex", position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#161814", color: "#f6f2e9", fontFamily: "Arial, sans-serif" }}>
      {/* ImageResponse renders the share asset with a native image element. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photographUrl} alt="" style={{ position: "absolute", left: 490, top: 0, width: 710, height: 630, objectFit: "cover", objectPosition: "58% center" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", background: "linear-gradient(90deg, #161814 0%, #161814 27%, rgba(22,24,20,.75) 48%, rgba(22,24,20,.03) 100%), linear-gradient(0deg, rgba(22,24,20,.5), transparent 38%)" }} />
      <div style={{ position: "absolute", left: 0, top: 0, width: 18, height: 630, background: "#ff643f", display: "flex" }} />
      <div style={{ position: "absolute", left: 70, top: 58, right: 60, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, fontWeight: 800, letterSpacing: 5 }}>
        <span>CREOLE FITNESS</span><span style={{ color: "#ddf269", fontSize: 16, letterSpacing: 4 }}>DALLAS, TX</span>
      </div>
      <div style={{ position: "absolute", left: 67, top: 170, display: "flex", flexDirection: "column", fontWeight: 900, fontSize: 115, lineHeight: .88, letterSpacing: -8 }}>
        <span>FEELS</span><span>GOOD</span><span style={{ color: "#ddf269" }}>FITNESS.</span>
      </div>
      <div style={{ position: "absolute", left: 72, bottom: 57, display: "flex", alignItems: "center", gap: 18, fontSize: 20, fontWeight: 700, letterSpacing: 2 }}>
        <div style={{ display: "flex", width: 47, height: 3, background: "#ff643f" }} />
        A STRONGER WAY TO SHOW UP.
      </div>
      <div style={{ position: "absolute", right: 47, bottom: 44, display: "flex", border: "2px solid #ddf269", padding: "11px 16px", color: "#ddf269", fontSize: 14, fontWeight: 800, letterSpacing: 3 }}>01 / 04</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
