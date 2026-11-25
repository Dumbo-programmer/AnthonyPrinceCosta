/* domains */
(function () {
  'use strict';

const mathDomains = (window.SiteData && window.SiteData.domains) || [];

const domainMatrixGrid = document.getElementById('domain-matrix-grid');
const domainCountLabel = document.getElementById('domain-count-label');
const filterBtns = document.querySelectorAll('.domain-filter-btn');

// Inspector DOM Elements
const inspBadge = document.getElementById('insp-badge');
const inspFocusTag = document.getElementById('insp-focus-tag');
const inspTitle = document.getElementById('insp-title');
const inspSubtitle = document.getElementById('insp-subtitle');
const inspTheoremName = document.getElementById('insp-theorem-name');
const inspFormula = document.getElementById('insp-formula');
const inspTopics = document.getElementById('insp-topics');
const inspIntuition = document.getElementById('insp-intuition');
const inspStepIndicator = document.getElementById('insp-step-indicator');
const prevDomainBtn = document.getElementById('prev-domain-btn');
const nextDomainBtn = document.getElementById('next-domain-btn');

let currentFilter = 'all';
let selectedDomainId = 1;

function updateInspector(domainId) {
  const domain = mathDomains.find(d => d.id === domainId) || mathDomains[0];
  selectedDomainId = domain.id;

  inspBadge.textContent = `${domain.code} · ${domain.branch.toUpperCase()}`;
  inspBadge.className = domain.branch === 'Pure'
    ? 'font-mono text-xs font-semibold px-2.5 py-1 rounded bg-coral text-indigoAbyss'
    : 'font-mono text-xs font-semibold px-2.5 py-1 rounded bg-gold text-indigoAbyss';

  inspFocusTag.textContent = domain.category.toUpperCase();
  inspTitle.textContent = domain.title;
  inspSubtitle.textContent = domain.subtitle;
  inspTheoremName.textContent = domain.theoremName;
  inspFormula.textContent = domain.formula;
  inspTopics.innerHTML = domain.topics
    .map(t => `<li class="flex items-start gap-2"><span class="text-coral font-mono mt-0.5">▸</span><span>${t}</span></li>`)
    .join('');
  inspIntuition.textContent = domain.intuition;
  inspStepIndicator.textContent = `${domain.num} / 06`;

  // Highlight active card in matrix
  document.querySelectorAll('.domain-node').forEach(btn => {
    const id = parseInt(btn.getAttribute('data-id'), 10);
    if (id === selectedDomainId) {
      btn.classList.add('border-gold', 'bg-cobalt/45');
      btn.classList.remove('border-cobalt/80', 'bg-indigoAbyss/80');
    } else {
      btn.classList.remove('border-gold', 'bg-cobalt/45');
      btn.classList.add('border-cobalt/80', 'bg-indigoAbyss/80');
    }
  });
}

function renderDomainMatrix() {
  const filtered = currentFilter === 'all'
    ? mathDomains
    : mathDomains.filter(d => d.branch === currentFilter);

  domainCountLabel.textContent = `Showing ${filtered.length} Domain${filtered.length > 1 ? 's' : ''}`;

  domainMatrixGrid.innerHTML = filtered.map(domain => {
    const isSelected = domain.id === selectedDomainId;
    const borderClass = isSelected ? 'border-gold bg-cobalt/45' : 'border-cobalt/80 bg-indigoAbyss/80';
    const codeColor = domain.branch === 'Pure' ? 'text-coral' : 'text-gold';

    return `
      <button type="button" data-id="${domain.id}" class="domain-node text-left p-4 rounded-xl border ${borderClass} hover:border-gold/80 transition-all group flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between font-mono text-[10px] mb-2">
            <span class="${codeColor} font-semibold">${domain.code} · ${domain.branch.toUpperCase()}</span>
            <span class="font-serif italic text-xl text-gold/80 group-hover:text-coral transition-colors">${domain.symbol}</span>
          </div>
          <div class="font-serif text-xl font-bold text-ivory group-hover:text-gold transition-colors leading-snug">
            ${domain.title}
          </div>
          <div class="text-xs text-slateSoft/70 mt-1 leading-relaxed">
            ${domain.subtitle}
          </div>
        </div>
        <div class="mt-3 pt-2.5 border-t border-cobalt/40 font-mono text-[10px] text-slateSoft/55 group-hover:text-gold/90 flex items-center justify-between">
          <span>${domain.category}</span>
          <span class="inline-flex items-center gap-1">Inspect <svg class="icon icon-sm" aria-hidden="true" focusable="false"><use href="#i-arrow-right"></use></svg></span>
        </div>
      </button>
    `;
  }).join('');

  document.querySelectorAll('.domain-node').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      updateInspector(id);
    });
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.getAttribute('data-filter');
    filterBtns.forEach(b => {
      b.classList.remove('active', 'bg-coral', 'text-indigoAbyss', 'font-semibold');
      b.classList.add('text-slateSoft');
    });
    btn.classList.add('active', 'bg-coral', 'text-indigoAbyss', 'font-semibold');
    btn.classList.remove('text-slateSoft');

    renderDomainMatrix();

    const visible = currentFilter === 'all'
      ? mathDomains
      : mathDomains.filter(d => d.branch === currentFilter);
    if (visible.length > 0 && !visible.some(d => d.id === selectedDomainId)) {
      updateInspector(visible[0].id);
    }
  });
});

if (prevDomainBtn) {
  prevDomainBtn.addEventListener('click', () => {
    const prevId = selectedDomainId > 1 ? selectedDomainId - 1 : 6;
    if (currentFilter !== 'all') {
      currentFilter = 'all';
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-coral', 'text-indigoAbyss', 'font-semibold');
        b.classList.add('text-slateSoft');
        if (b.getAttribute('data-filter') === 'all') {
          b.classList.add('active', 'bg-coral', 'text-indigoAbyss', 'font-semibold');
          b.classList.remove('text-slateSoft');
        }
      });
      renderDomainMatrix();
    }
    updateInspector(prevId);
  });
}

if (nextDomainBtn) {
  nextDomainBtn.addEventListener('click', () => {
    const nextId = selectedDomainId < 6 ? selectedDomainId + 1 : 1;
    if (currentFilter !== 'all') {
      currentFilter = 'all';
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-coral', 'text-indigoAbyss', 'font-semibold');
        b.classList.add('text-slateSoft');
        if (b.getAttribute('data-filter') === 'all') {
          b.classList.add('active', 'bg-coral', 'text-indigoAbyss', 'font-semibold');
          b.classList.remove('text-slateSoft');
        }
      });
      renderDomainMatrix();
    }
    updateInspector(nextId);
  });
}

renderDomainMatrix();
updateInspector(1);
})();
