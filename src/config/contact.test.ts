import { describe, expect, it } from "vitest";
import { contact, getContactLinks, getProjectUrl } from "./contact";

describe("contact rules", () => {
  it("shows only Instagram with the initial configuration", () => {
    expect(getContactLinks()).toEqual([{ id: "instagram", label: "Instagram", href: "https://instagram.com/dapur.marketing" }]);
  });
  it("falls back to Instagram when WhatsApp is empty", () => {
    expect(getProjectUrl()).toBe("https://instagram.com/dapur.marketing");
  });
  it("prioritizes WhatsApp and prefixes the number automatically", () => {
    const config = { ...contact, whatsapp: "6281234567890" };
    expect(getProjectUrl(config)).toBe("https://wa.me/6281234567890");
    expect(getContactLinks(config).find((item) => item.id === "whatsapp")?.href).toBe("https://wa.me/6281234567890");
  });
  it("prefixes populated email with mailto", () => {
    expect(getContactLinks({ ...contact, email: "hello@example.com" }).find((item) => item.id === "email")?.href).toBe("mailto:hello@example.com");
  });
  it("includes TikTok only when configured", () => {
    expect(getContactLinks({ ...contact, tiktok: "https://tiktok.com/@dapur.marketing" }).find((item) => item.id === "tiktok")?.href).toBe("https://tiktok.com/@dapur.marketing");
  });
});