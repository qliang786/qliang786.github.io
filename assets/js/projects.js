function renderGrid(){
  const grid = document.getElementById('project-grid');
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card" data-domain="${p.domainFilter}" data-id="${p.id}" tabindex="0" role="button" aria-expanded="false">
      <div class="card-top"><span class="card-domain">${p.domain}</span></div>
      <div class="card-body">
        <h3 class="font-heading">${p.title}</h3>
        <div class="card-tags">${p.tags}</div>
        <div class="card-stats">
          ${p.stats.map(s => `
            <div>
              <div class="card-stat-num">${s.num}</div>
              <div class="card-stat-label">${s.label}</div>
            </div>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openDetail(card.dataset.id));
    card.addEventListener('keypress', e => { if(e.key === 'Enter') openDetail(card.dataset.id); });
  });
}

function openDetail(id){
  const p = PROJECTS.find(x => x.id === id);
  if(!p) return;

  document.querySelectorAll('.project-card').forEach(c => {
    c.classList.toggle('is-active', c.dataset.id === id);
  });

  const panel = document.getElementById('detail-panel');
  panel.innerHTML = `
    <button class="detail-close" id="detail-close">Close ✕</button>
    <h3 class="detail-title font-heading">${p.title}</h3>
    <div class="detail-tags">${p.tags}</div>

    <div class="detail-block">
      <h4>Business challenge</h4>
      <p>${p.challenge}</p>
    </div>

    <div class="detail-block">
      <h4>Process</h4>
      <ul>${p.process.map(step => `<li>${step}</li>`).join('')}</ul>
    </div>

    <div class="detail-block">
      <h4>Key findings</h4>
      <ul>${p.findings.map(f => `<li>${f}</li>`).join('')}</ul>
    </div>

    <div class="detail-block">
      <h4>Supporting visuals</h4>
      <div class="detail-images">
        ${p.images.map(img => `<img src="${img.src}" alt="${img.alt}" loading="lazy" />`).join('')}
      </div>
    </div>
  `;
  panel.classList.add('open');
  document.getElementById('detail-close').addEventListener('click', closeDetail);
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeDetail(){
  document.getElementById('detail-panel').classList.remove('open');
  document.querySelectorAll('.project-card').forEach(c => c.classList.remove('is-active'));
}

function setupFilters(){
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        const match = filter === 'all' || card.dataset.domain === filter;
        card.classList.toggle('is-hidden', !match);
      });
      closeDetail();
    });
  });
}

function openFromHash(){
  const id = window.location.hash.replace('#','');
  if(id && PROJECTS.some(p => p.id === id)) openDetail(id);
}

document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  setupFilters();
  openFromHash();
});
