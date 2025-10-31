import fs from "fs";
import { execSync } from "child_process";

const profileRepo = "imhefizh/imhefizh";
const token = process.env.GITHUB_TOKEN;
const repoName = process.env.REPO_NAME.split("/")[1];
const date = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const logLine = `_New commit on ${repoName} at ${date}_`;

execSync(`git clone https://github.com/${profileRepo}.git`);
process.chdir(profileRepo.split("/")[1]);

const readme = fs.readFileSync("README.md", "utf-8");

const updated = readme.replace(
  /(<!--LOG-AREA-->)([\s\S]*?)(<!--END-LOG-->)/,
  (_, start, _content, end) => {
    const logs = _content
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith("<!--"))
      .slice(0, 4);

    const newLogs = [`- ${logLine}`, ...logs].join("\n");
    return `${start}\n${newLogs}\n${end}`;
  }
);

fs.writeFileSync("README.md", updated);

execSync(`git config user.name "github-actions[bot]"`);
execSync(
  `git config user.email "github-actions[bot]@users.noreply.github.com"`
);

const diff = execSync("git status --porcelain").toString().trim();

if (diff) {
  execSync(`git add README.md`);
  execSync(`git commit -m "Auto update from ${repoName}"`);
  execSync(
    `git push https://x-access-token:${token}@github.com/${profileRepo}.git HEAD:main`
  );
  console.log("Profile README updated successfully!");
} else {
  console.log("No changes detected. Nothing to commit.");
}
