const workflowMessages = {
  onboarding: "Start with a client intake checklist, define responsibilities, and lock down communication channels in week one.",
  dispatch: "Set daily check-in slots, assign escalation rules, and use one shared status board for dispatch, billing, and support.",
  reporting: "Close each week with KPI snapshots, exceptions log updates, and owner review so decisions stay data-driven."
};

const milestoneMessages = {
  "30": "Core process map documented and owner approvals captured.",
  "60": "Team handoffs standardized and weekly performance tracking running.",
  "90": "Workflow audits complete and improvement plan launched for next quarter."
};

const answersInventory = [
  {
    id: "start-ab-trucking",
    topic: "start-business",
    question: "What do I need to start and run a trucking company in Alberta?",
    answer: "Set up both the business and the carrier operation. Confirm your business structure, insurance, operating registrations, safety setup, and recordkeeping from day one.",
    conditions: ["province", "operating status"],
    related: ["sole-vs-corp", "nccr-deadline"],
    updatedAt: "2026-08-30",
    featured: true
  },
  {
    id: "sole-vs-corp",
    topic: "start-business",
    question: "Do I need to incorporate as an owner-operator?",
    answer: "Not always. You can operate as a sole proprietor or corporation. The right choice depends on liability, tax planning, and how you plan to scale.",
    conditions: ["operating status", "filing period"],
    related: ["t1-or-t2", "start-ab-trucking"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "usdot-mc-needed",
    topic: "registrations",
    question: "Do Canadian carriers need both USDOT and MC authority for U.S. loads?",
    answer: "For many for-hire cross-border operations, yes. A USDOT number identifies the carrier, while MC authority defines whether the operation is authorized for regulated freight.",
    conditions: ["jurisdiction", "type of operation"],
    related: ["authority-pending", "ucr-what"],
    updatedAt: "2026-08-30",
    featured: true
  },
  {
    id: "authority-pending",
    topic: "registrations",
    question: "Can I haul freight while FMCSA authority is still pending?",
    answer: "Usually no for regulated for-hire freight. A pending application or assigned MC number is not the same as active authority.",
    conditions: ["jurisdiction", "type of operation", "current government requirements"],
    related: ["usdot-mc-needed"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "ucr-what",
    topic: "registrations",
    question: "What is UCR and does a Canadian carrier need it?",
    answer: "UCR is an annual U.S. registration for carriers in interstate or international commerce. If your operation is subject to UCR, renew each year.",
    conditions: ["jurisdiction", "type of operation"],
    related: ["usdot-mc-needed"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "nccr-deadline",
    topic: "compliance",
    question: "When is an Alberta New Carrier Compliance Review due?",
    answer: "For carriers in Alberta's Pre-Entry Program, the NCCR is typically required within 9 to 12 months after SFC issuance and before the first anniversary.",
    conditions: ["province", "operating status", "current government requirements"],
    related: ["nccr-missed", "start-ab-trucking"],
    updatedAt: "2026-08-30",
    featured: true
  },
  {
    id: "nccr-missed",
    topic: "compliance",
    question: "What happens if I miss the NCCR deadline?",
    answer: "Your Safety Fitness Certificate can be suspended, and NSC-regulated vehicles cannot legally operate until requirements are completed.",
    conditions: ["province", "operating status"],
    related: ["nccr-deadline"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "facility-audit-records",
    topic: "audits",
    question: "What records are usually reviewed in a facility audit?",
    answer: "Audits commonly review safety and maintenance programs, driver files, HOS records, inspections, vehicle maintenance, insurance, and carrier profile records.",
    conditions: ["province", "type of operation", "filing period"],
    related: ["audit-corrections"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "audit-corrections",
    topic: "audits",
    question: "Do audit deficiencies need to be corrected?",
    answer: "Yes. Carriers are expected to correct identified deficiencies and maintain compliant records and controls going forward.",
    conditions: ["province", "current government requirements"],
    related: ["facility-audit-records"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "bookkeeping-behind",
    topic: "bookkeeping",
    question: "My bookkeeping is behind. Where do we start?",
    answer: "Start with what you have. We identify the last completed period, reconcile accounts, flag missing records, and move forward in sequence.",
    conditions: ["filing period"],
    related: ["missing-receipts", "bookkeeping-records"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "missing-receipts",
    topic: "bookkeeping",
    question: "Can bookkeeping start if receipts are missing?",
    answer: "Yes, in many cases. Statements show that spending occurred, but CRA expense claims still need support, so missing documents should be replaced where possible.",
    conditions: ["jurisdiction", "filing period"],
    related: ["bookkeeping-behind"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "bookkeeping-records",
    topic: "bookkeeping",
    question: "Which records should trucking companies keep for bookkeeping?",
    answer: "Keep settlement statements, invoices, fuel and repair receipts, statements, loan or lease records, and other documents behind each business transaction.",
    conditions: ["type of operation", "filing period"],
    related: ["ifta-records", "bookkeeping-behind"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "t1-or-t2",
    topic: "income-tax",
    question: "What income tax return does an owner-operator file?",
    answer: "It depends on business structure: sole proprietors typically report on a T1 with T2125, while corporations file a T2 and owners still file personal T1 returns.",
    conditions: ["operating status", "filing period"],
    related: ["sole-vs-corp", "corp-no-income"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "corp-no-income",
    topic: "income-tax",
    question: "Does a corporation file a tax return even with no revenue?",
    answer: "Generally yes. A resident corporation usually still files its annual T2 return even if inactive or at a loss.",
    conditions: ["operating status", "filing period", "jurisdiction"],
    related: ["t1-or-t2", "at1-alberta"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "at1-alberta",
    topic: "income-tax",
    question: "Does an Alberta corporation also file an AT1 return?",
    answer: "Often yes if it has a permanent establishment in Alberta, with limited exemptions in specific cases.",
    conditions: ["province", "operating status", "current government requirements"],
    related: ["corp-no-income"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "ifta-needed",
    topic: "ifta",
    question: "Who needs IFTA registration?",
    answer: "IFTA generally applies when a qualifying commercial vehicle operates in Alberta and at least one other IFTA jurisdiction.",
    conditions: ["vehicle weight", "jurisdiction", "type of operation"],
    related: ["ifta-no-travel", "ifta-trip-permit"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "ifta-no-travel",
    topic: "ifta",
    question: "Do I still file IFTA if my truck did not travel this quarter?",
    answer: "Yes, if your IFTA account is active. A quarterly return is still required even with no distance.",
    conditions: ["filing period", "jurisdiction", "operating status"],
    related: ["ifta-needed"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "ifta-records",
    topic: "ifta",
    question: "What records do I need for IFTA reporting?",
    answer: "Keep distance records and fuel invoices that show where miles were driven and where fuel was purchased.",
    conditions: ["filing period", "jurisdiction"],
    related: ["bookkeeping-records"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "ifta-trip-permit",
    topic: "ifta",
    question: "Can occasional out-of-province travel use trip permits instead of IFTA?",
    answer: "Sometimes yes. For infrequent travel, fuel tax trip permits may be an alternative to maintaining a full IFTA account.",
    conditions: ["jurisdiction", "type of operation", "vehicle weight"],
    related: ["ifta-needed"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "cross-border-first-load",
    topic: "us-operations",
    question: "What should be ready before my first U.S. load?",
    answer: "Confirm active U.S. registrations and authority, plus customs setup for both directions: SCAC and ACE for U.S.-bound loads, CBSA carrier code and ACI/eManifest for Canada-bound loads.",
    conditions: ["jurisdiction", "type of operation", "current government requirements"],
    related: ["usdot-mc-needed", "scac-vs-cbsa"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "scac-vs-cbsa",
    topic: "us-operations",
    question: "What is the difference between SCAC and a CBSA carrier code?",
    answer: "SCAC identifies the carrier in U.S. systems. A CBSA carrier code identifies the carrier in Canadian customs systems.",
    conditions: ["jurisdiction"],
    related: ["cross-border-first-load", "paps-pars"],
    updatedAt: "2026-08-30",
    featured: false
  },
  {
    id: "paps-pars",
    topic: "us-operations",
    question: "What is the difference between PAPS and PARS?",
    answer: "PAPS is generally used for Canada-to-U.S. commercial entries and starts with SCAC. PARS is used for U.S.-to-Canada entries and starts with the CBSA carrier code.",
    conditions: ["jurisdiction", "type of operation"],
    related: ["scac-vs-cbsa"],
    updatedAt: "2026-08-30",
    featured: false
  }
];

function initWorkflowPlanner() {
  const output = document.getElementById("workflow-output");
  const buttons = document.querySelectorAll("[data-workflow-phase]");

  if (!output || buttons.length === 0) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const phase = button.getAttribute("data-workflow-phase");
      const message = workflowMessages[phase] || "";

      buttons.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");
      output.textContent = message;
    });
  });
}

function initMilestones() {
  const output = document.getElementById("milestone-output");
  const buttons = document.querySelectorAll("[data-milestone]");

  if (!output || buttons.length === 0) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.getAttribute("data-milestone");
      output.textContent = milestoneMessages[key] || "";

      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
    });
  });
}

function initComplianceTracker() {
  const progress = document.getElementById("compliance-progress");
  const checks = document.querySelectorAll("#compliance-list input[type='checkbox']");

  if (!progress || checks.length === 0) {
    return;
  }

  const storageKey = "flowfreight-compliance-checks";
  const saved = localStorage.getItem(storageKey);
  const state = saved ? JSON.parse(saved) : {};

  checks.forEach((check) => {
    const id = check.getAttribute("data-checklist-item");
    check.checked = Boolean(state[id]);

    check.addEventListener("change", () => {
      state[id] = check.checked;
      localStorage.setItem(storageKey, JSON.stringify(state));
      updateProgress();
    });
  });

  function updateProgress() {
    const done = Array.from(checks).filter((check) => check.checked).length;
    progress.textContent = `${done} of ${checks.length} complete`;
  }

  updateProgress();
}

function initEstimator() {
  const form = document.getElementById("bookkeeping-estimator");
  const output = document.getElementById("estimator-output");

  if (!form || !output) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const txCount = Number(document.getElementById("tx-count")?.value || 0);
    const accountCount = Number(document.getElementById("account-count")?.value || 0);
    const payroll = document.getElementById("payroll-active")?.value;

    let hours = txCount / 75 + accountCount * 0.8;
    if (payroll === "yes") {
      hours += 2.5;
    }

    const rounded = Math.max(1, hours).toFixed(1);
    output.textContent = `Estimated monthly effort: ${rounded} hours.`;
  });
}

function initThemeToggle() {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const logoImages = document.querySelectorAll("img[data-logo-light][data-logo-dark]");
  const storageKey = "flowfreight-theme";

  if (!toggle) {
    return;
  }

  const savedTheme = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  function updateLogoSources(theme) {
    logoImages.forEach((image) => {
      const lightSrc = image.getAttribute("data-logo-light");
      const darkSrc = image.getAttribute("data-logo-dark");
      const nextSrc = theme === "dark" ? darkSrc : lightSrc;

      if (!nextSrc) {
        return;
      }

      image.onerror = () => {
        if (image.src.endsWith(encodeURI(lightSrc || ""))) {
          return;
        }
        if (lightSrc) {
          image.src = lightSrc;
        }
      };

      image.src = nextSrc;
    });
  }

  function applyTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem(storageKey, nextTheme);

    const switchingToDark = nextTheme === "dark";
    toggle.textContent = switchingToDark ? "Light Mode" : "Dark Mode";
    toggle.setAttribute("aria-pressed", String(switchingToDark));
    toggle.setAttribute("aria-label", switchingToDark ? "Switch to light mode" : "Switch to dark mode");

    updateLogoSources(nextTheme);
  }

  toggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  applyTheme(initialTheme);
}

function initScrollReveal() {
  const sections = document.querySelectorAll("main.page-content > section:not(.hero)");

  if (sections.length === 0) {
    return;
  }

  sections.forEach((section) => {
    section.classList.add("reveal-on-scroll");
  });

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    sections.forEach((section) => {
      section.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

function initMenuToggle() {
  const menuToggle = document.querySelector(".menu-toggle");
  const themePopup = document.querySelector(".theme-popup");

  if (!menuToggle || !themePopup) {
    return;
  }

  function setMenuState(isOpen) {
    themePopup.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = themePopup.classList.contains("is-open");
    setMenuState(!isOpen);
  });

  themePopup.querySelectorAll("button, a").forEach((item) => {
    item.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }
    if (!themePopup.contains(target) && !menuToggle.contains(target)) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
}

function initAnswersPage() {
  const page = document.querySelector(".answers-page");
  if (!page) {
    return;
  }

  const searchInput = document.getElementById("answers-search");
  const topicButtons = document.querySelectorAll(".answer-topic-btn");
  const featuredContainer = document.getElementById("answers-featured");
  const recentContainer = document.getElementById("answers-recent");
  const resultsContainer = document.getElementById("answers-results");
  const summary = document.getElementById("answers-results-summary");
  const seeAllButton = document.getElementById("answers-see-all");

  if (!searchInput || !featuredContainer || !recentContainer || !resultsContainer || !summary || !seeAllButton) {
    return;
  }

  const byId = Object.fromEntries(answersInventory.map((item) => [item.id, item]));
  const selectedTopic = new URLSearchParams(window.location.search).get("topic");
  let activeTopic = selectedTopic === "us-operations" ? "us-operations" : "all";
  let showAll = false;

  function renderCard(item) {
    const relatedLinks = item.related
      .map((id) => byId[id])
      .filter(Boolean)
      .map((relatedItem) => `<button type="button" class="answer-related-link" data-related-id="${relatedItem.id}">${relatedItem.question}</button>`)
      .join("");

    const conditionLine = item.conditions.length > 0
      ? `<p class="answer-conditions"><strong>Check first:</strong> ${item.conditions.join(", ")}.</p>`
      : "";

    return `
      <article class="card answer-card" data-answer-id="${item.id}">
        <p class="answer-topic">${item.topic.replace("-", " ").replace("us operations", "u.s. operations")}</p>
        <h3>${item.question}</h3>
        <p>${item.answer}</p>
        ${conditionLine}
        ${relatedLinks ? `<p class="answer-related"><strong>Related answers:</strong> ${relatedLinks}</p>` : ""}
      </article>
    `;
  }

  function filteredInventory() {
    const query = searchInput.value.trim().toLowerCase();
    return answersInventory.filter((item) => {
      const topicMatch = activeTopic === "all" ? item.topic !== "us-operations" : item.topic === activeTopic;
      if (!topicMatch) {
        return false;
      }
      if (!query) {
        return true;
      }
      const haystack = `${item.question} ${item.answer} ${item.topic} ${item.conditions.join(" ")}`.toLowerCase();
      return haystack.includes(query);
    });
  }

  function renderFeatured() {
    const items = answersInventory
      .filter((item) => item.featured && (activeTopic === "all" ? item.topic !== "us-operations" : item.topic === activeTopic))
      .slice(0, 3);
    featuredContainer.innerHTML = items.map(renderCard).join("");
  }

  function renderRecent() {
    const items = [...answersInventory]
      .filter((item) => activeTopic === "all" ? item.topic !== "us-operations" : item.topic === activeTopic)
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.question.localeCompare(b.question))
      .slice(0, 4);
    recentContainer.innerHTML = items.map(renderCard).join("");
  }

  function renderResults() {
    const filtered = filteredInventory();
    const visible = showAll ? filtered : filtered.slice(0, 6);

    if (visible.length === 0) {
      resultsContainer.innerHTML = "<p>No answers matched. Try changing topic or search terms.</p>";
      summary.textContent = "No matching answers.";
      seeAllButton.hidden = true;
      return;
    }

    resultsContainer.innerHTML = visible.map(renderCard).join("");
    summary.textContent = `Showing ${visible.length} of ${filtered.length} answers.`;

    if (filtered.length <= 6) {
      seeAllButton.hidden = true;
      return;
    }

    seeAllButton.hidden = false;
    seeAllButton.textContent = showAll ? "Show Fewer Answers" : "Show More Answers";
  }

  function updateTopicState(nextTopic) {
    activeTopic = nextTopic;
    showAll = false;
    topicButtons.forEach((button) => {
      const isActive = button.getAttribute("data-topic") === nextTopic;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    renderFeatured();
    renderRecent();
    renderResults();
  }

  searchInput.addEventListener("input", () => {
    showAll = false;
    renderResults();
  });

  topicButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const topic = button.getAttribute("data-topic") || "all";
      updateTopicState(topic);
    });
  });

  seeAllButton.addEventListener("click", () => {
    showAll = !showAll;
    renderResults();
  });

  page.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains("answer-related-link")) {
      return;
    }
    const relatedId = target.getAttribute("data-related-id");
    const relatedItem = relatedId ? byId[relatedId] : null;
    if (!relatedItem) {
      return;
    }
    const topicButton = Array.from(topicButtons).find((button) => button.getAttribute("data-topic") === relatedItem.topic);
    if (topicButton) {
      updateTopicState(relatedItem.topic);
    }
    searchInput.value = relatedItem.question;
    showAll = true;
    renderResults();
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  renderFeatured();
  renderRecent();
  renderResults();
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMenuToggle();
  initScrollReveal();
  initAnswersPage();
  initWorkflowPlanner();
  initMilestones();
  initComplianceTracker();
  initEstimator();
});
