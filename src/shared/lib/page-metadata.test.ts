// @vitest-environment node
import { describe, expect, it } from "vitest";
import { OG_IMAGE } from "@/shared/config/site";
import { pageMetadata } from "./page-metadata";

describe("pageMetadata", () => {
  const meta = pageMetadata({ title: "Contact", description: "Get in touch.", path: "/contact" });

  it("sets the canonical URL", () => {
    expect(meta.alternates?.canonical).toBe("/contact");
  });

  it("gives social previews the full title, URL and share image", () => {
    expect(meta.openGraph).toMatchObject({ title: "Contact | Heramb Devbhankar", url: "/contact", images: [OG_IMAGE] });
    expect(meta.twitter).toMatchObject({ title: "Contact | Heramb Devbhankar", images: [OG_IMAGE.url] });
  });
});
