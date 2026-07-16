/* ================================================================
   TAPFOLIO — CLIENT DATA
   ================================================================
   This is the ONLY file you should ever need to touch per client.
   index.html reads this object and renders the entire page from it.

   Workflow:
   1. Duplicate the Master Template folder, rename it to the client.
   2. Edit the values below (colors, profile, links, vCard info).
   3. Save. Open index.html — done. No build step, ever.
   ================================================================ */

const clientData = {

  // --------------------------------------------------------------
  // THEME — drives every color on the page (buttons, borders,
  // shadows, marquee, background dot-grid, "Save Contact" button)
  // --------------------------------------------------------------
  theme: {
    bgColor: "#FFFFFF",      // page background
    accentColor: "#50FA7B",  // fluorescent green (soft) — used on the "Save Contact" button + marquee
    fontColor: "#0A0A0A"     // text, borders, and hard shadows (the "ink" color)
  },

  // --------------------------------------------------------------
  // PROFILE
  // --------------------------------------------------------------
  profile: {
    avatar: "profile.jpeg",
    name: "Ruben Raj A/L Ragupathy",
    title: "Student",
    bio: "Your average IT student?",
    location: ""
  },

  // --------------------------------------------------------------
  // MARQUEE — the scrolling ticker at the very top of the page
  // --------------------------------------------------------------
  marquee: "TAPFOLIO • NETWORK WITHOUT BOUNDARIES",

  // --------------------------------------------------------------
  // LINKS — rendered top to bottom, in this order.
  // "icon" must match a Lucide icon name from lucide.dev/icons
  // --------------------------------------------------------------
  links: [
    { platform: "Instagram", url: "https://www.instagram.com/rubenraj2007?igsh=MnU2a3hjamIyaDA3", icon: "instagram" },
    { platform: "TikTok", url: "https://www.tiktok.com/@rubenraj2007?_r=1&_t=ZS-984RjGb5xsV", icon: "tiktok" },
    { platform: "WhatsApp", url: "https://wa.me/qr/WNNPT336AEF6A1", icon: "message-circle" },
    { platform: "GitHub", url: "https://github.com/rubenraj2007", icon: "github" }
  ],

  // --------------------------------------------------------------
  // VCARD — powers the "Save Contact" button. On click, the engine
  // generates a real .vcf file in the browser (no server needed)
  // and triggers a download using this phone/email + the profile
  // name/title above.
  //
  // Values are Base64-encoded to deter automated scrapers.
  // The render engine decodes them at runtime with atob().
  // --------------------------------------------------------------
  vcard: {
    phone_b64: "MDExMTI5OTgzNDA=",           // Base64
    email_b64: "cnViZW5yYWoyMDA3QGdtYWlsLmNvbQ==" // Base64
  }

};
