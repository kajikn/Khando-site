import fs from "fs/promises";
import path from "path";

type Issue = {
  issue: number;
  title?: string;
  pdf: string;
  cover: string;
};

async function getIssues(): Promise<Issue[]> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "magazine",
    "issues.json"
  );
  const json = await fs.readFile(filePath, "utf-8");
  return JSON.parse(json);
}

export default async function MagazinePage() {
  const issues = await getIssues();

  return (
    <main style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 34, marginBottom: 12 }}>
        Խաչկավանք-Խանդո հանդես
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {issues.map((it) => (
          <a
            key={it.issue}
            href={it.pdf}
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              overflow: "hidden",
              textDecoration: "none",
              color: "inherit",
            }}
          >
              <img
                                    
                    alt={it.title}
                    style={{
                      width: "100%",
                      height: 320,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
/>
            <div style={{ padding: 10, fontWeight: 600 }}>
              {it.title}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
