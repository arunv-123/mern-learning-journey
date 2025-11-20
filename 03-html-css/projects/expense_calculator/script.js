/* ============================================================
  Full script.js — Navbar scroll + Login + Calculator +
  Expense Form (populated selects) + Ledger (add/edit/delete) +
  Filters + CSV Export + LocalStorage
  ============================================================ */

/* ---------------------------
   SECTION IDs (attach IDs so we can scroll)
---------------------------- */
document.querySelector(".banner").id = "dashboard-section";
document.querySelector(".timeline").closest(".card").id = "timeline-section";
document.querySelector(".right-col .card").id = "filters-section";
const calcCard = document.querySelector(".insights-grid .card:nth-child(2)");
if (calcCard) calcCard.id = "calculator-section";

/* ---------------------------
   Populate category & payment options (form + filters)
   You can edit these arrays to add/remove options.
---------------------------- */
const CATEGORY_OPTIONS = [
  "Uncategorized",
  "Food & Drink",
  "Transport",
  "Groceries",
  "Bills",
  "Entertainment",
  "Health",
  "Education",
  "Shopping",
  "Travel",
  "Income"
];

const PAYMENT_OPTIONS = [
  "Cash",
  "Credit Card",
  "Debit Card",
  "UPI",
  "Netbanking",
  "Wallet",
  "Other"
];

// Helper to create option element
function makeOption(value, label) {
  const opt = document.createElement("option");
  opt.value = value;
  opt.textContent = label;
  return opt;
}

// Find the form card and filter card precisely
const formCard = document.getElementById("expense-form")?.closest(".card");
const filtersCard = document.getElementById("filters-section");

// Form selects (inside the form card)
let formCategorySelect = null;
let formPaymentSelect = null;
if (formCard) {
  const selects = formCard.querySelectorAll("select");
  // In your markup the first select in the card is Category, second is Payment
  formCategorySelect = selects[0] || null;
  formPaymentSelect = selects[1] || null;
}

// Filter selects (right-col)
let filterCategorySelect = null;
let filterPaymentSelect = null;
if (filtersCard) {
  const selects = filtersCard.querySelectorAll("select");
  // In your markup the first select in the filter card is Category, second is Payment
  filterCategorySelect = selects[0] || null;
  filterPaymentSelect = selects[1] || null;
}

// Populate selects (if they exist)
function populateSelects() {
  if (formCategorySelect) {
    formCategorySelect.innerHTML = "";
    formCategorySelect.appendChild(makeOption("", "Select category"));
    CATEGORY_OPTIONS.forEach(c => formCategorySelect.appendChild(makeOption(c, c)));
  }
  if (formPaymentSelect) {
    formPaymentSelect.innerHTML = "";
    formPaymentSelect.appendChild(makeOption("", "Choose method"));
    PAYMENT_OPTIONS.forEach(p => formPaymentSelect.appendChild(makeOption(p, p)));
  }
  if (filterCategorySelect) {
    filterCategorySelect.innerHTML = "";
    filterCategorySelect.appendChild(makeOption("All Categories", "All Categories"));
    CATEGORY_OPTIONS.forEach(c => filterCategorySelect.appendChild(makeOption(c, c)));
  }
  if (filterPaymentSelect) {
    filterPaymentSelect.innerHTML = "";
    filterPaymentSelect.appendChild(makeOption("All", "All"));
    PAYMENT_OPTIONS.forEach(p => filterPaymentSelect.appendChild(makeOption(p, p)));
  }
}

populateSelects();

/* ============================================================
   NAVBAR SMOOTH SCROLL
   ============================================================ */
const navbarLinks = document.querySelectorAll(".navlinks a");

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  // offset if needed for sticky topbar (adjust 16 if your topbar overlaps)
  const yOffset = -12;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

if (navbarLinks && navbarLinks.length >= 4) {
  navbarLinks[0].addEventListener("click", e => { e.preventDefault(); scrollToSection("dashboard-section"); });
  navbarLinks[1].addEventListener("click", e => { e.preventDefault(); scrollToSection("filters-section"); });
  navbarLinks[2].addEventListener("click", e => { e.preventDefault(); scrollToSection("timeline-section"); });
  navbarLinks[3].addEventListener("click", e => { e.preventDefault(); scrollToSection("calculator-section"); });
}

/* ============================================================
   LOGIN / LOGOUT (click GUEST to login popup)
   ============================================================ */
const userBox = document.querySelector(".user");
const signedLabel = document.querySelector(".signed");
const avatarBox = document.querySelector(".avatar");
const logoutBtn = document.querySelector(".btn-logout");

function updateUserUI() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  if (!user) {
    signedLabel.textContent = "GUEST";
    avatarBox.textContent = "?";
    if (logoutBtn) logoutBtn.style.display = "none";
  } else {
    signedLabel.textContent = "SIGNED IN";
    avatarBox.textContent = user.email ? user.email.charAt(0).toUpperCase() : "U";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  }
}

updateUserUI();

function showLoginPopup() {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,0.45)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "99999";

  overlay.innerHTML = `
    <div style="width:340px;background:#fff;padding:20px;border-radius:12px;font-family:Poppins;">
      <h3 style="margin:0 0 12px 0">Login</h3>
      <label style="font-weight:600">Email</label>
      <input id="js_login_email" type="email" style="width:100%;padding:10px;margin:6px 0 10px 0;border-radius:8px;border:1px solid #ddd" />
      <label style="font-weight:600">Password</label>
      <input id="js_login_pass" type="password" style="width:100%;padding:10px;margin:6px 0 16px 0;border-radius:8px;border:1px solid #ddd" />
      <button id="js_login_submit" style="width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(180deg,#d32f2f,#b71c1c);color:#fff;font-weight:700;cursor:pointer">Login</button>
      <button id="js_login_cancel" style="width:100%;padding:10px;margin-top:10px;border-radius:10px;border:1px solid #ddd;background:#fff;cursor:pointer">Cancel</button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.getElementById("js_login_cancel").onclick = () => overlay.remove();

  document.getElementById("js_login_submit").onclick = () => {
    const email = document.getElementById("js_login_email").value.trim();
    const pass = document.getElementById("js_login_pass").value.trim();
    if (!email || !pass) {
      alert("Enter both email and password.");
      return;
    }
    // Simple front-end "auth" — store user in localStorage
    localStorage.setItem("user", JSON.stringify({ email }));
    updateUserUI();
    overlay.remove();
  };
}

if (userBox) {
  userBox.addEventListener("click", () => {
    if (!localStorage.getItem("user")) showLoginPopup();
  });
}
if (logoutBtn) {
  logoutBtn.addEventListener("click", e => {
    e.stopPropagation();
    localStorage.removeItem("user");
    updateUserUI();
  });
}

/* ============================================================
   CALCULATOR
   ============================================================ */
const calcDisplay = document.querySelector(".calc-display");
const calcButtons = document.querySelectorAll(".calc-btn, .calc-eq");

let calcExp = "";
let lastPressed = "";

function updateCalcDisplay(value) {
  if (calcDisplay) calcDisplay.textContent = value;
}

if (calcButtons.length && calcDisplay) {
  calcButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.textContent;

      if (key === "AC") {
        calcExp = "";
        updateCalcDisplay("0");
        lastPressed = "";
        return;
      }

      if (key === "DEL") {
        calcExp = calcExp.slice(0, -1);
        updateCalcDisplay(calcExp || "0");
        lastPressed = calcExp.slice(-1) || "";
        return;
      }

      if (key === "=") {
        if (!calcExp) return;
        try {
          const safe = calcExp.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
          const result = eval(safe); // small frontend calculator — ok here
          calcExp = String(result);
          updateCalcDisplay(calcExp);
        } catch {
          updateCalcDisplay("Error");
          calcExp = "";
        }
        lastPressed = "";
        return;
      }

      const operators = ["+", "−", "×", "÷", "%"];
      if (operators.includes(key) && operators.includes(lastPressed)) {
        // prevent duplicate operators
        return;
      }

      calcExp += key;
      updateCalcDisplay(calcExp);
      lastPressed = key;
    });
  });
}

/* ============================================================
   EXPENSES (Form + Ledger + Filters + CSV + LocalStorage)
   ============================================================ */

/* --- DOM references (robust selectors using the card contexts) --- */
const formCardEl = document.getElementById("expense-form")?.closest(".card");
const formDesc = formCardEl?.querySelector('input[placeholder="e.g. Coffee with client"]');
const formAmount = formCardEl?.querySelector('input[type="number"]');
const formDate = formCardEl?.querySelector('input[type="date"]');
const formCategory = formCardEl?.querySelectorAll("select")[0];
const formPayment = formCardEl?.querySelectorAll("select")[1];
const formNotes = formCardEl?.querySelector("textarea");
const addExpenseBtn = formCardEl?.querySelector(".btn-primary");
const resetFormBtn = formCardEl?.querySelector(".btn-secondary");

const ledgerTableBody = document.querySelector(".timeline tbody");

// Stats (three .stat .value nodes from top of page)
const statValues = document.querySelectorAll(".stat .value");
const statTotal = statValues[0];
const statAvg = statValues[1];
const statLargest = statValues[2];

// Filters in right-col (we already identified filterCategorySelect earlier)
const searchInput = document.querySelector('input[placeholder="Search description or notes"]');
const filterFrom = document.querySelectorAll(".filter-grid input[type='date']")[0];
const filterTo = document.querySelectorAll(".filter-grid input[type='date']")[1];
const filterCat = filterCategorySelect || document.querySelectorAll(".filter-grid select")[0];
const filterPay = filterPaymentSelect || document.querySelectorAll(".filter-grid select")[1];
const clearFilterBtn = document.querySelector(".clear-btn");

// banner buttons
const exportButton = document.querySelector(".banner-actions button:nth-child(1)");
const clearAllButton = document.querySelector(".banner-actions button:nth-child(2)");

/* --- data store --- */
let expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
let editingId = null; // if not null, we are editing that expense id

/* --- utility helpers --- */
function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function formatMoney(n) {
  return "$" + Number(n || 0).toFixed(2);
}

/* --- render ledger rows --- */
function renderLedger() {
  const list = applyFilters();
  if (!ledgerTableBody) return;
  ledgerTableBody.innerHTML = "";

  if (!list.length) {
    ledgerTableBody.innerHTML = `<tr><td colspan="7" class="empty">No expenses match your filters.</td></tr>`;
    updateStats([]);
    return;
  }

  list.forEach((exp, idx) => {
    const tr = document.createElement("tr");

    // add action buttons (edit/delete)
    const actionBtns = `
      <button class="js-edit" data-id="${exp.id}" title="Edit" style="margin-right:8px;padding:6px;border-radius:8px;border:1px solid #eee;background:#fff;cursor:pointer">Edit</button>
      <button class="js-delete" data-id="${exp.id}" title="Delete" style="padding:6px;border-radius:8px;border:1px solid rgba(211,47,47,0.12);background:#fff;color:var(--rose-600);cursor:pointer">Delete</button>
    `;

    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${escapeHtml(exp.desc)}</td>
      <td>${escapeHtml(exp.category || "-")}</td>
      <td>${escapeHtml(exp.payment || "-")}</td>
      <td>${formatMoney(exp.amount)}</td>
      <td>${exp.date}</td>
      <td>${escapeHtml(exp.notes || "-")}<div style="margin-top:6px">${actionBtns}</div></td>
    `;
    ledgerTableBody.appendChild(tr);
  });

  // attach listeners for edit/delete
  ledgerTableBody.querySelectorAll(".js-edit").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      startEditExpense(id);
    });
  });
  ledgerTableBody.querySelectorAll(".js-delete").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      if (!confirm("Delete this expense?")) return;
      expenses = expenses.filter(e => e.id !== id);
      saveExpenses();
      renderLedger();
    });
  });

  updateStats(list);
}

/* Escaping helper for display safety */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
}

/* --- stats update --- */
function updateStats(list) {
  if (!list || list.length === 0) {
    if (statTotal) statTotal.textContent = "$0.00";
    if (statAvg) statAvg.textContent = "$0.00";
    if (statLargest) statLargest.textContent = "$0.00";
    return;
  }
  const total = list.reduce((s, e) => s + Number(e.amount || 0), 0);
  const avg = total / list.length;
  const largest = Math.max(...list.map(e => Number(e.amount || 0)));
  if (statTotal) statTotal.textContent = formatMoney(total);
  if (statAvg) statAvg.textContent = formatMoney(avg);
  if (statLargest) statLargest.textContent = formatMoney(largest);
}

/* --- apply filters --- */
function applyFilters() {
  let out = [...expenses];
  const s = (searchInput?.value || "").toLowerCase();
  const from = filterFrom?.value;
  const to = filterTo?.value;
  const cat = filterCat?.value;
  const pay = filterPay?.value;

  if (s) out = out.filter(e => (e.desc || "").toLowerCase().includes(s) || (e.notes || "").toLowerCase().includes(s));
  if (from) out = out.filter(e => e.date >= from);
  if (to) out = out.filter(e => e.date <= to);
  if (cat && cat !== "All Categories") out = out.filter(e => e.category === cat);
  if (pay && pay !== "All") out = out.filter(e => e.payment === pay);

  out.sort((a, b) => new Date(b.date) - new Date(a.date));
  return out;
}

/* --- form actions: add / edit --- */
function resetForm() {
  if (!formDesc) return;
  formDesc.value = "";
  formAmount.value = "";
  formDate.value = "";
  if (formCategory) formCategory.selectedIndex = 0;
  if (formPayment) formPayment.selectedIndex = 0;
  if (formNotes) formNotes.value = "";
  editingId = null;
  if (addExpenseBtn) addExpenseBtn.textContent = "+ Add Expense";
}

function startEditExpense(id) {
  const e = expenses.find(x => x.id === id);
  if (!e) return;
  editingId = id;
  if (formDesc) formDesc.value = e.desc;
  if (formAmount) formAmount.value = e.amount;
  if (formDate) formDate.value = e.date;
  if (formCategory) formCategory.value = e.category;
  if (formPayment) formPayment.value = e.payment;
  if (formNotes) formNotes.value = e.notes;
  if (addExpenseBtn) addExpenseBtn.textContent = "Save Changes";
  // scroll to form
  scrollToSection("dashboard-section");
  window.scrollBy(0, 120); // nudge to show form
}

/* attach add / save */
if (addExpenseBtn) {
  addExpenseBtn.addEventListener("click", () => {
    const desc = (formDesc?.value || "").trim();
    const amount = Number(formAmount?.value || 0);
    const date = formDate?.value || "";
    if (!desc || !amount || !date) {
      alert("Please enter Description, Amount and Date.");
      return;
    }
    if (editingId) {
      // update
      expenses = expenses.map(e => e.id === editingId ? { ...e, desc, amount, date, category: formCategory?.value, payment: formPayment?.value, notes: formNotes?.value } : e);
      editingId = null;
      addExpenseBtn.textContent = "+ Add Expense";
    } else {
      // add
      const newExp = { id: Date.now(), desc, amount, date, category: formCategory?.value, payment: formPayment?.value, notes: formNotes?.value };
      expenses.push(newExp);
    }
    saveExpenses();
    renderLedger();
    resetForm();
  });
}

/* reset form button */
if (resetFormBtn) {
  resetFormBtn.addEventListener("click", resetForm);
}

/* filters inputs */
[searchInput, filterFrom, filterTo, filterCat, filterPay].forEach(el => {
  if (!el) return;
  el.addEventListener("input", () => renderLedger());
});

/* clear filters */
if (clearFilterBtn) {
  clearFilterBtn.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (filterFrom) filterFrom.value = "";
    if (filterTo) filterTo.value = "";
    if (filterCat) filterCat.selectedIndex = 0;
    if (filterPay) filterPay.selectedIndex = 0;
    renderLedger();
  });
}

/* clear all button */
if (clearAllButton) {
  clearAllButton.addEventListener("click", () => {
    if (!confirm("Delete ALL expenses?")) return;
    expenses = [];
    saveExpenses();
    renderLedger();
  });
}

/* export CSV */
if (exportButton) {
  exportButton.addEventListener("click", () => {
    const list = applyFilters();
    if (!list.length) { alert("No data to export."); return; }
    let csv = "Description,Category,Payment,Amount,Date,Notes\n";
    list.forEach(e => {
      // escape commas / quotes lightly
      const fields = [e.desc, e.category, e.payment, e.amount, e.date, e.notes];
      const row = fields.map(f => `"${String(f||"").replace(/"/g,'""')}"`).join(",");
      csv += row + "\n";
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "expenses.csv";
    a.click();
  });
}

/* initial render */
renderLedger();
updateUserUI();

/* small safe guard: if selects were not present (unexpected markup), try to locate them again */
if (!formCategory || !formPayment) {
  // try alternate selection: first .card on left column
  const leftCard = document.querySelector(".left-col .card");
  if (leftCard) {
    const selects = leftCard.querySelectorAll("select");
    if (selects.length >= 2) {
      formCategory = selects[0];
      formPayment = selects[1];
      populateSelects();
    }
  }
}

/* =============================
   END of script.js
   ============================= */
