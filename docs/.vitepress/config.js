export default {
  title: "Impl Planter",
  description: "My plants log",
  themeConfig: {
    logo: "/logo.svg",
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "Guide",
        items: require("../../items.json"),
      },
    ],
  },
};
