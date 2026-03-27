// ============================================================
//  Sales Pipeline Tracker — app.js
//  Plain JavaScript, no frameworks.
//  Data is saved to localStorage so it persists between visits.
// ============================================================

const STORAGE_KEY = "sales_pipeline_deals";

// ---- State ----
let deals = loadDeals();
let activeFilter = "all";

// ---- DOM references ----
const dealForm      = document.getElementById("deal-form");
const nameInput     = document.getElementById("deal-name");
const valueInput    = document.getElementById("deal-value");
const stageSelect   = document.getElementById("deal-stage");
const notesInput    = document.getElementById("deal-notes");
const formError     = document.getElementById("form-error");
const dealsList     = document.getElementById("deals-list");
const emptyState    = document.getElementById("empty-state");
const filterButtons = document.querySelectorAll(".filter-btn");

// Summary card elements
const totalValueEl  = document.getElementById("total-value");
const totalDealsEl  = document.getElementById("total-deals");
const closedWonEl   = document.getElementById("closed-won");
const winRateEl     = document.getElementById("win-rate");

// ---- Initialise ----
render();

// ---- Event Listeners ----

dealForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name  = nameInput.value.trim();
  const value = parseFloat(valueInput.value);

  if (!name || isNaN(value) || value < 0) {
    formError.classList.remove("hidden");
    return;
  }

  formError.classList.add("hidden");

  const newDeal = {
    id:    Date.now(),           // simple unique id
    name:  name,
    value: value,
    stage: stageSelect.value,
    notes: notesInput.value.trim(),
  };

  deals.push(newDeal);
  saveDeals();
  render();

  // Clear form
  dealForm.reset();
  nameInput.focus();
});

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    activeFilter = btn.dataset.filter;
    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    renderDealsList();
  });
});

// ---- Render functions ----

function render() {
  renderSummary();
  renderDealsList();
}

function renderSummary() {
  const activeDeals = deals.filter(function (d) {
    return d.stage !== "Closed Lost";
  });

  const closedWon = deals.filter(function (d) {
    return d.stage === "Closed Won";
  });
  const closedLost = deals.filter(function (d) {
    return d.stage === "Closed Lost";
  });

  const totalPipeline = activeDeals.reduce(function (sum, d) {
    return sum + d.value;
  }, 0);

  const closedTotal = closedWon.length + closedLost.length;
  const winRate = closedTotal > 0
    ? Math.round((closedWon.length / closedTotal) * 100)
    : null;

  totalValueEl.textContent = formatCurrency(totalPipeline);
  totalDealsEl.textContent = activeDeals.length;
  closedWonEl.textContent  = closedWon.length;
  winRateEl.textContent    = winRate !== null ? winRate + "%" : "—";
}

function renderDealsList() {
  const filtered = activeFilter === "all"
    ? deals
    : deals.filter(function (d) { return d.stage === activeFilter; });

  // Remove old deal cards (but keep the empty-state element)
  const existingCards = dealsList.querySelectorAll(".deal-card");
  existingCards.forEach(function (card) { card.remove(); });

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  // Render newest deals first
  const sorted = filtered.slice().reverse();
  sorted.forEach(function (deal) {
    const card = buildDealCard(deal);
    dealsList.appendChild(card);
  });
}

function buildDealCard(deal) {
  const card = document.createElement("div");
  card.className = "deal-card";
  card.dataset.id = deal.id;

  // Stage badge
  const badgeClass = "badge-" + deal.stage.replace(/\s+/g, "-");
  const badge = document.createElement("span");
  badge.className = "deal-badge " + badgeClass;
  badge.textContent = deal.stage;

  // Info section
  const info = document.createElement("div");
  info.className = "deal-info";

  const nameEl = document.createElement("div");
  nameEl.className = "deal-name";
  nameEl.textContent = deal.name;

  info.appendChild(nameEl);

  if (deal.notes) {
    const notesEl = document.createElement("div");
    notesEl.className = "deal-notes";
    notesEl.textContent = deal.notes;
    info.appendChild(notesEl);
  }

  // Value
  const valueEl = document.createElement("div");
  valueEl.className = "deal-value-display";
  valueEl.textContent = formatCurrency(deal.value);

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.className = "btn-remove";
  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("aria-label", "Remove deal: " + deal.name);
  removeBtn.addEventListener("click", function () {
    removeDeal(deal.id);
  });

  card.appendChild(badge);
  card.appendChild(info);
  card.appendChild(valueEl);
  card.appendChild(removeBtn);

  return card;
}

// ---- Data operations ----

function removeDeal(id) {
  deals = deals.filter(function (d) { return d.id !== id; });
  saveDeals();
  render();
}

function saveDeals() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deals));
  } catch (e) {
    // localStorage unavailable (e.g., private browsing with strict settings)
    console.warn("Could not save to localStorage:", e);
  }
}

function loadDeals() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

// ---- Utility ----

function formatCurrency(amount) {
  return "$" + amount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
