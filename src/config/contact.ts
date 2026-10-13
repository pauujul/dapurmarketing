// Isi tautan lengkap Instagram/TikTok. Kosongkan ("") untuk menyembunyikan kontak.
// WhatsApp: isi nomor dengan kode negara, tanpa + atau spasi, contoh 628xxxxxxxxxx.
// Email: isi alamat email saja, tanpa awalan mailto:.
// Semua ajakan proyek otomatis menuju WhatsApp; jika kosong, menuju Instagram.
export const contact = {
  instagram: "https://instagram.com/dapur.marketing",
  whatsapp: "",
  email: "",
  tiktok: "",
};

export type ContactConfig = typeof contact;
export function getProjectUrl(config: ContactConfig = contact) {
  return config.whatsapp.trim() ? `https://wa.me/${config.whatsapp.trim()}` : config.instagram;
}
export function getContactLinks(config: ContactConfig = contact) {
  return [
    { id: "instagram", label: "Instagram", href: config.instagram.trim() },
    { id: "whatsapp", label: "WhatsApp", href: config.whatsapp.trim() ? `https://wa.me/${config.whatsapp.trim()}` : "" },
    { id: "email", label: "Email", href: config.email.trim() ? `mailto:${config.email.trim()}` : "" },
    { id: "tiktok", label: "TikTok", href: config.tiktok.trim() },
  ].filter((item) => Boolean(item.href));
}