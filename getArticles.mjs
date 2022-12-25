import fs from "node:fs/promises";
import path from "path";
import glob from "glob";
import matter from "gray-matter";
import removeMd from "remove-markdown";

const articles = glob.sync("./docs/articles/*.md");

const data = (
  await Promise.all(
    articles.map(async (article) => {
      const file = matter.read(article, {
        excerpt: true,
        excerpt_separator: "<!-- more -->",
      });

      const { data, excerpt, path } = file;
      const contents = removeMd(excerpt, { useImgAltText: false })
        .trim()
        .split(/\r\n|\n|\r/);

      return {
        ...data,
        Updated: data.Updated.toISOString().split("T")[0],
        path: path.replace("./docs/", "").replace(/\.md$/, ".html"),
        excerpt: contents
          .slice(1)
          .join("")
          .replace(/\s{2,}/g, "")
          .trim()
          .replace(/{{*?(.*?)}}/g, ""),
      };
    })
  )
).reverse();

await fs.writeFile("./data.json", JSON.stringify(data), "utf-8");

const items = data.map((item) => {
  return {
    text: item.title,
    link: path.join("/", item.path),
  };
});

await fs.writeFile("./items.json", JSON.stringify(items), "utf-8");
