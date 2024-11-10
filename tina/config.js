import { defineConfig } from "tinacms";
import Brands from "./collections/brands";
import Features from "./collections/features";
import SectionTitles from "./collections/sectionTitles";
import Prices from "./collections/prices";
import About from "./collections/about";
import FeatureTab from "./collections/featureTab";
import Stats from "./collections/stats";
import Integrations from "./collections/integrations";
import Blogs from "./collections/blogs";
import Faq from "./collections/faq";
import Testominials from "./collections/testominials";
import SiteConfig from "./collections/siteConfig";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      SiteConfig,
      Brands,
      Features,
      SectionTitles,
      Prices,
      About,
      FeatureTab,
      Stats,
      Integrations,
      Blogs,
      Faq,
      Testominials,
    ],
  },
});
