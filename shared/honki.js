/* Super Honki — thanh chuyển app + hộp sách của Minh Dokkai (dùng chung cho trang chủ, Super Goi, Super Bunpou) */
(function () {
  const me = document.currentScript && document.currentScript.src || "";
  const base = me.replace(/honki\.js.*$/, "");
  const root = base.replace(/shared\/$/, "");
  const PRODUCTS = [
    { img: base + "img/huyen-luc-thu.jpg", name: "Bộ sách Huyền Lục Thư", sub: "Học Kanji bằng Lục Thư cải tiến (3 cuốn)", url: "https://www.minhdokkai.com/s%C3%A1ch/huy%E1%BB%81n-l%E1%BB%A5c-th%C6%B0-3-cu%E1%BB%91n" },
    { img: base + "img/14-ngay.jpg", name: "14 NGÀY học hết từ vựng tiếng Nhật N5, N4", sub: "Sách của Minh Dokkai", url: "https://www.minhdokkai.com/s%C3%A1ch/14-ng%C3%A0y-h%E1%BB%8Dc-h%E1%BA%BFt-t%E1%BB%AB-v%E1%BB%B1ng-n5-n4" }
  ];
  window.HONKI = { products: PRODUCTS, root };

  const css = document.createElement("link"); css.rel = "stylesheet"; css.href = base + "honki.css"; document.head.appendChild(css);

  const page = document.body.dataset.honki;           // "home" | "goi" | "bunpou"
  if (page === "goi" || page === "bunpou") {
    const s = document.createElement("div"); s.className = "hk-strip";
    s.innerHTML = '<div class="hk-strip__in"><a class="hk-strip__brand" href="' + root + '" title="Về trang chủ Super Honki"><img src="' + base + 'logo-mark.svg" alt=""><span>Super Honki</span></a><span class="hk-strip__grow"></span>' +
      '<nav class="hk-strip__nav" aria-label="Các công cụ của Super Honki"><a href="' + root + 'goi/"' + (page === "goi" ? ' aria-current="true"' : "") + '>Super Goi</a><a href="' + root + 'bunpou/"' + (page === "bunpou" ? ' aria-current="true"' : "") + '>Super Bunpou</a><span class="hk-strip__soon" title="Sắp ra mắt">Super Kanji · sắp có</span></nav></div>';
    document.body.insertBefore(s, document.body.firstChild);
  }

  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const f = document.createElement("div"); f.className = "hk-fab";
  f.innerHTML = '<div class="hk-fab__panel" id="hk-panel" role="dialog" aria-label="Sản phẩm của Minh Dokkai"><div class="hk-fab__head"><span>Sách của Minh Dokkai</span><button class="hk-fab__x" type="button" aria-label="Đóng">×</button></div>' +
    PRODUCTS.map(p => '<a class="hk-prod" href="' + p.url + '" target="_blank" rel="noopener"><img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy"><span>' + esc(p.name) + '<small>Xem giới thiệu →</small></span></a>').join("") + '</div>' +
    '<button class="hk-fab__btn" type="button" aria-expanded="false" aria-controls="hk-panel"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5"/><path d="M9 8h6"/></svg>Sách của Minh Dokkai</button>';
  document.body.appendChild(f);
  const btn = f.querySelector(".hk-fab__btn"), toggle = open => { f.classList.toggle("is-open", open); btn.setAttribute("aria-expanded", open); };
  btn.onclick = () => toggle(!f.classList.contains("is-open"));
  f.querySelector(".hk-fab__x").onclick = () => toggle(false);
  document.addEventListener("keydown", e => { if (e.key === "Escape") toggle(false); });
})();
