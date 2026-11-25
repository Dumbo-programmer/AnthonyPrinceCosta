/* gallery */
(function () {
  'use strict';

const galleryItems = (window.SiteData && window.SiteData.gallery) || [];

const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('gallery-lightbox');
const lightboxFig = document.getElementById('lightbox-fig');
const lightboxCat = document.getElementById('lightbox-cat');
const lightboxMedia = document.getElementById('lightbox-media');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let activeLightboxId = 1;

function openLightbox(itemId) {
  const item = galleryItems.find(g => g.id === itemId) || galleryItems[0];
  if (!item) return;
  activeLightboxId = item.id;

  lightboxFig.textContent = item.fig;
  lightboxCat.textContent = item.categoryLabel.toUpperCase();
  lightboxTitle.textContent = item.title;
  lightboxDesc.textContent = item.caption;

  lightboxMedia.innerHTML = `<img src="${item.src}" alt="${item.alt}" width="${item.width}" height="${item.height}" decoding="async" class="max-h-[58vh] w-auto object-contain rounded-lg my-4 border border-gold/40" />`;

  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

function renderGallery() {
  if (!galleryGrid) return;

  galleryGrid.innerHTML = galleryItems.map(item => {
    return `
      <button type="button" data-gallery-id="${item.id}" class="gallery-card academic-card rounded-xl overflow-hidden text-left border-cobalt hover:border-gold/80 transition-all group flex flex-col justify-between">
        <div>
          <div class="relative aspect-[3/2] w-full bg-indigoAbyss overflow-hidden border-b border-cobalt/60">
            <img src="${item.src}" alt="${item.alt}" width="${item.width}" height="${item.height}" loading="lazy" decoding="async" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            <span class="absolute top-3 left-3 font-mono text-[10px] font-semibold px-2.5 py-1 rounded bg-indigoAbyss/90 border border-cobalt text-gold">
              ${item.fig}
            </span>
          </div>
          <div class="p-5 space-y-2">
            <div class="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
              <span class="text-gold font-semibold">${item.categoryLabel}</span>
              <span class="text-slateSoft/60 group-hover:text-gold transition-colors">Inspect ↗</span>
            </div>
            <h3 class="font-serif text-xl sm:text-2xl font-bold text-ivory group-hover:text-gold transition-colors leading-snug">
              ${item.title}
            </h3>
            <p class="text-xs text-slateSoft/75 leading-relaxed line-clamp-2">
              ${item.caption}
            </p>
          </div>
        </div>
        <div class="px-5 py-3 border-t border-cobalt/40 font-mono text-[10px] text-slateSoft/60">
          ${item.subtitle}
        </div>
      </button>
    `;
  }).join('');

  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-gallery-id'), 10);
      openLightbox(id);
    });
  });
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
if (lightboxPrev) {
  lightboxPrev.addEventListener('click', () => {
    const prevId = activeLightboxId > 1 ? activeLightboxId - 1 : galleryItems.length;
    openLightbox(prevId);
  });
}
if (lightboxNext) {
  lightboxNext.addEventListener('click', () => {
    const nextId = activeLightboxId < galleryItems.length ? activeLightboxId + 1 : 1;
    openLightbox(nextId);
  });
}
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
    closeLightbox();
  }
});

renderGallery();
})();
