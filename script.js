/* ── Fridge Magnet Collection – script.js ── */

(function () {
  'use strict';

  // ── Filter buttons ──────────────────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.magnet-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Update active state
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.dataset.filter;

      cards.forEach(function (card) {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ── Modal ───────────────────────────────────────────────────────────────────
  var modal      = document.getElementById('modal');
  var modalClose = document.getElementById('modal-close');
  var modalEmoji = document.getElementById('modal-emoji');
  var modalTitle = document.getElementById('modal-title');
  var modalDate  = document.getElementById('modal-date');
  var modalStory = document.getElementById('modal-story');

  function openModal(card) {
    modalEmoji.textContent = card.dataset.emoji;
    modalTitle.textContent = card.dataset.title;
    modalDate.textContent  = card.dataset.date;
    modalStory.textContent = card.dataset.story;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  // Open via click
  cards.forEach(function (card) {
    card.addEventListener('click', function () { openModal(card); });

    // Also allow keyboard: Enter or Space
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  // Close via button
  modalClose.addEventListener('click', closeModal);

  // Close via overlay click
  modal.addEventListener('click', function (e) {
    if (e.target === modal) { closeModal(); }
  });

  // Close via Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) { closeModal(); }
  });

}());
