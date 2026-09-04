export function whatsappHref(e164, text = "") {
  const number = String(e164).replace(/\D/g, "");
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function openWhatsApp(e164, text = "") {
  const popup = window.open(whatsappHref(e164, text), "_blank", "noopener,noreferrer");
  return Boolean(popup);
}
