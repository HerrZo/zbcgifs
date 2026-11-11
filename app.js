const FALLBACK_DATA = {
  curriculum: {
    biologie: {
      label: "Biologie",
      note: "LehrplanPLUS Bayern Gymnasium (Natur und Technik 5/6 sowie Biologie 8 bis 13)",
      grades: [
        {
          code: "NUT5",
          title: "Jahrgangsstufe 5 (Natur und Technik)",
          items: [
            { id: "NT5 LB 1.1", name: "Arbeitsmethoden (Naturwissenschaftliches Arbeiten)" },
            { id: "NT5 LB 1.2", name: "Themenbereiche und Konzepte" },
            { id: "NT5 LB 2.1", name: "Erkenntnisse gewinnen, kommunizieren, bewerten" },
            { id: "NT5 LB 2.2", name: "Biologie: Die Wissenschaft von den Lebewesen" },
            { id: "NT5 LB 2.3", name: "Der Mensch als Lebewesen" },
            { id: "NT5 LB 2.4", name: "Samenpflanzen als Lebewesen" },
            { id: "NT5 LB 2.5", name: "Ökosystem Grünland" }
          ]
        },
        {
          code: "NUT6",
          title: "Jahrgangsstufe 6 (Natur und Technik)",
          items: [
            { id: "NT6 LB 1.1", name: "Erkenntnisse gewinnen, kommunizieren, bewerten" },
            { id: "NT6 LB 1.2", name: "Samenpflanzen als Lebewesen" },
            { id: "NT6 LB 1.3", name: "Biodiversität bei Wirbeltieren: Variabilität und Angepasstheit" },
            { id: "NT6 LB 1.4", name: "Verwandtschaft der Wirbeltiere und Evolution" }
          ]
        },
        {
          code: "BIO8",
          title: "Jahrgangsstufe 8",
          items: [
            { id: "B8 LB 1", name: "Erkenntnisse gewinnen, kommunizieren, bewerten" },
            { id: "B8 LB 2", name: "Informationsaufnahme, -verarbeitung und Reaktion beim Menschen" },
            { id: "B8 LB 3", name: "Fortpflanzung und Individualentwicklung des Menschen" }
          ]
        },
        {
          code: "BIO9",
          title: "Jahrgangsstufe 9",
          items: [
            { id: "B9 LB 1", name: "Erkenntnisse gewinnen, kommunizieren, bewerten" },
            { id: "B9 LB 2", name: "Mikroorganismen in der Biotechnologie" },
            { id: "B9 LB 3", name: "Genetik und Gentechnik" },
            { id: "B9 LB 4", name: "Evolution" }
          ]
        },
        {
          code: "BIO10",
          title: "Jahrgangsstufe 10",
          items: [
            { id: "B10 LB 1", name: "Erkenntnisse gewinnen, kommunizieren, bewerten" },
            { id: "B10 LB 2", name: "Ökosystem Mensch" },
            { id: "B10 LB 3", name: "Stoff- und Energieumwandlung im Menschen" },
            { id: "B10 LB 4", name: "Vergangenheit und Zukunft des Menschen" }
          ]
        },
        {
          code: "BIO12",
          title: "Jahrgangsstufe 12",
          items: [
            { id: "B12 LB 1", name: "Erkenntnisse gewinnen, kommunizieren, bewerten" },
            { id: "B12 LB 2", name: "Genetik und Gentechnik" },
            { id: "B12 LB 3", name: "Evolution" },
            { id: "B12 LB 4", name: "Verhaltensökologie: Evolution und Angepasstheit von Verhalten" }
          ]
        },
        {
          code: "BIO13",
          title: "Jahrgangsstufe 13",
          items: [
            { id: "B13 LB 1", name: "Erkenntnisse gewinnen, kommunizieren, bewerten" },
            { id: "B13 LB 2", name: "Neuronale Informationsverarbeitung" },
            { id: "B13 LB 3", name: "Stoffwechselphysiologie (Enzymatik, Fotosynthese, Dissimilation)" },
            { id: "B13 LB 4", name: "Ökosysteme und ihre Dynamik" }
          ]
        }
      ]
    },
    chemie: {
      label: "Chemie",
      note: "Dargestellt nach dem LehrplanPLUS für das sprachliche und wirtschaftswissenschaftliche Gymnasium (SG/WSG)",
      grades: [
        {
          code: "CHEM9",
          title: "Jahrgangsstufe 9 (SG/WSG)",
          items: [
            { id: "C9 LB 1", name: "Wie Chemiker denken und arbeiten" },
            { id: "C9 LB 2", name: "Stoffe und ihre Eigenschaften: Vom Stoff zum Teilchenmodell" },
            { id: "C9 LB 3", name: "Chemische Reaktion: Vom Teilchenmodell zum Daltonschen Atommodell" },
            { id: "C9 LB 4", name: "Chemische Verbindungen: Vom Dalton-Modell zum Kern-Hülle-Modell" },
            { id: "C9 LB 5", name: "Atombau und gekürztes Periodensystem" },
            { id: "C9 LB 6", name: "Donator-Akzeptor-Konzept: Elektronenübergänge und Ionenbildung" }
          ]
        },
        {
          code: "CHEM10",
          title: "Jahrgangsstufe 10 (SG/WSG)",
          items: [
            { id: "C10 LB 1", name: "Wie Chemiker denken und arbeiten" },
            { id: "C10 LB 2", name: "Moleküle: Orbitalmodell und Elektronenpaarabstoßungsmodell" },
            { id: "C10 LB 3", name: "Wechselwirkungskonzept: Anziehung zwischen Teilchen" },
            { id: "C10 LB 4", name: "Donator-Akzeptor-Konzept bei Protonenübergängen (Säure-Base)" },
            { id: "C10 LB 5", name: "Donator-Akzeptor-Konzept bei Redoxreaktionen in wässriger Lösung" }
          ]
        },
        {
          code: "CHEM12",
          title: "Jahrgangsstufe 12",
          items: [
            { id: "C12 LB 1", name: "Wie Chemikerinnen und Chemiker denken und arbeiten" },
            { id: "C12 LB 2", name: "Atombau und Periodensystem" },
            { id: "C12 LB 3", name: "Analytik" },
            { id: "C12 LB 4", name: "Chemische Bindung" },
            { id: "C12 LB 5", name: "Kohlenwasserstoffe: Energieträger und Reaktionspartner" },
            { id: "C12 LB 6", name: "Reaktionsgeschwindigkeit: Ermittlung und Deutung auf Teilchenebene" }
          ]
        },
        {
          code: "CHEM13",
          title: "Jahrgangsstufe 13",
          items: [
            { id: "C13 LB 1", name: "Wie Chemikerinnen und Chemiker denken und arbeiten" },
            { id: "C13 LB 2", name: "Farbigkeit und Farbstoffe" },
            { id: "C13 LB 3", name: "Säure-Base-Gleichgewichte: Quantitative Analytik und Anwendung" },
            { id: "C13 LB 4", name: "Natürliche und synthetische Makromoleküle" },
            { id: "C13 LB 5", name: "Chemie und Nachhaltigkeit" }
          ]
        }
      ]
    }
  },
  gifs: [
    {
      id: "elektronegativitaet-tauziehen",
      title: "Elektronegativität als Tauziehen: H₂ und HCl",
      file: "./gifs/elektronegativitaet-tauziehen.gif",
      categories: ["C10 LB 3", "C12 LB 4"],
      tags: ["Elektronegativität", "Polare Atombindung", "Wasserstoff", "Chlorwasserstoff"],
      hiddenTags: [
        "Tauziehen", "H2", "HCl", "Chlor", "Bindungselektronen", "Elektronenpaarbindung",
        "unpolare Bindung", "Pauling", "Strichmännchen", "Anziehungskraft", "Kovalente Bindung", "CHEM10", "CHEM12"
      ],
      createdAt: "2026-11-10"
    },
    {
      id: "wassermolekuel-partialladungen",
      title: "Partialladungen am Wassermolekül",
      file: "./gifs/wassermolekuel-partialladungen.gif",
      categories: ["C10 LB 2", "C10 LB 3", "C12 LB 4", "B10 LB 3"],
      tags: ["Wassermolekül", "Partialladung", "Dipolmolekül", "Elektronegativität"],
      hiddenTags: [
        "H2O", "Wasser", "Sauerstoff", "Wasserstoff", "delta plus", "delta minus",
        "δ+", "δ-", "polare Elektronenpaarbindung", "Bindungspolarität", "freie Elektronenpaare", "Dipol", "CHEM10", "CHEM12", "BIO10"
      ],
      createdAt: "2026-11-10"
    }
  ]
};

(function initZBCGifs() {
  let appData = FALLBACK_DATA;
  const state = {
    query: "",
    category: "",
    subject: ""
  };

  const categoryMap = new Map();
  const seriesMap = new Map();

  const searchInput = document.getElementById("search-input");
  const resetBtn = document.getElementById("reset-btn");
  const gifGrid = document.getElementById("gif-grid");
  const emptyState = document.getElementById("empty-state");
  const emptyResetBtn = document.getElementById("empty-reset-btn");
  const resultCountEl = document.getElementById("result-count");
  const activeFilterContainer = document.getElementById("active-filter-container");
  const bioMenuContent = document.getElementById("bio-grades-grid");
  const chemMenuContent = document.getElementById("chem-grades-grid");
  const bioTrigger = document.getElementById("bio-trigger");
  const chemTrigger = document.getElementById("chem-trigger");
  const bioAllBtn = document.getElementById("bio-all-btn");
  const chemAllBtn = document.getElementById("chem-all-btn");
  const brandReset = document.getElementById("brand-reset");

  const lightboxDialog = document.getElementById("lightbox-dialog");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxDownload = document.getElementById("lightbox-download");

  function parseStepInfo(item) {
    const match = /^(.*?)\s*\((\d+)\)\s*$/.exec(item.title || "");
    if (item.series || match) {
      const baseName = item.series || (match ? match[1].trim() : item.title);
      const stepNum = item.step || (match ? parseInt(match[2], 10) : 1);
      return { baseName, stepNum };
    }
    return null;
  }

  function buildMaps() {
    categoryMap.clear();
    seriesMap.clear();

    ["biologie", "chemie"].forEach((subjKey) => {
      const subj = appData.curriculum[subjKey];
      if (!subj) return;
      subj.grades.forEach((grade) => {
        grade.items.forEach((it) => {
          categoryMap.set(it.id, {
            id: it.id,
            name: it.name,
            gradeCode: grade.code,
            subject: subjKey
          });
        });
      });
    });

    appData.gifs.forEach((gif) => {
      const info = parseStepInfo(gif);
      if (info) {
        if (!seriesMap.has(info.baseName)) {
          seriesMap.set(info.baseName, []);
        }
        seriesMap.get(info.baseName).push({
          gif,
          stepNum: info.stepNum
        });
      }
    });

    for (const [, list] of seriesMap.entries()) {
      list.sort((a, b) => a.stepNum - b.stepNum);
    }
  }

  function countGifsForCategory(catId) {
    return appData.gifs.filter((g) => (g.categories || []).includes(catId)).length;
  }

  function renderDropdowns() {
    const renderSubjectGrades = (subjKey, container) => {
      if (!container || !appData.curriculum[subjKey]) return;
      container.innerHTML = "";
      appData.curriculum[subjKey].grades.forEach((grade) => {
        const block = document.createElement("div");
        block.className = "grade-block";

        const heading = document.createElement("div");
        heading.className = "grade-heading";
        heading.innerHTML = `<span class="grade-code">${grade.code}</span><span>${grade.title}</span>`;
        block.appendChild(heading);

        const ul = document.createElement("ul");
        ul.className = "lb-list";

        grade.items.forEach((item) => {
          const count = countGifsForCategory(item.id);
          const li = document.createElement("li");
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "lb-btn" + (state.category === item.id ? " is-selected" : "");
          btn.innerHTML = `
            <span class="lb-label-wrap">
              <span class="lb-id">${item.id}:</span>
              <span class="lb-name">${item.name}</span>
            </span>
            <span class="lb-count ${count > 0 ? "has-items" : ""}">${count}</span>
          `;
          btn.addEventListener("click", () => {
            if (state.category === item.id) {
              state.category = "";
            } else {
              state.category = item.id;
              state.subject = "";
            }
            if (document.activeElement && typeof document.activeElement.blur === "function") {
              document.activeElement.blur();
            }
            syncUrlAndRender();
          });
          li.appendChild(btn);
          ul.appendChild(li);
        });

        block.appendChild(ul);
        container.appendChild(block);
      });
    };

    renderSubjectGrades("biologie", bioMenuContent);
    renderSubjectGrades("chemie", chemMenuContent);

    const activeCatMeta = state.category ? categoryMap.get(state.category) : null;
    const isBioActive = state.subject === "biologie" || (activeCatMeta && activeCatMeta.subject === "biologie");
    const isChemActive = state.subject === "chemie" || (activeCatMeta && activeCatMeta.subject === "chemie");

    if (bioTrigger) bioTrigger.setAttribute("data-active-subject", isBioActive ? "true" : "false");
    if (chemTrigger) chemTrigger.setAttribute("data-active-subject", isChemActive ? "true" : "false");
  }

  function normalizeText(str) {
    return (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/₂/g, "2")
      .replace(/₃/g, "3");
  }

  function matchesGif(gif) {
    if (state.category) {
      if (!(gif.categories || []).includes(state.category)) return false;
    }
    if (state.subject) {
      const belongsToSubject = (gif.categories || []).some((catId) => {
        const meta = categoryMap.get(catId);
        return meta && meta.subject === state.subject;
      });
      if (!belongsToSubject) return false;
    }
    const q = normalizeText(state.query.trim());
    if (!q) return true;

    const terms = q.split(/\s+/).filter(Boolean);
    const catStrings = (gif.categories || []).map((c) => {
      const m = categoryMap.get(c);
      return m ? `${c} ${m.name} ${m.gradeCode}` : c;
    });

    const haystack = normalizeText(
      [
        gif.title,
        ...(gif.tags || []),
        ...(gif.hiddenTags || []),
        ...catStrings
      ].join(" ")
    );

    return terms.every((t) => haystack.includes(t));
  }

  async function copyGifForPowerPoint(gif, btnEl) {
    const absUrl = new URL(gif.file, window.location.href).href;
    const originalLabel = btnEl.querySelector(".copy-label");
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        const htmlBlob = new Blob([`<img src="${absUrl}" alt="${gif.title}">`], { type: "text/html" });
        const textBlob = new Blob([absUrl], { type: "text/plain" });
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/html": htmlBlob,
            "text/plain": textBlob
          })
        ]);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(absUrl);
      }
      btnEl.setAttribute("data-copied", "true");
      if (originalLabel) originalLabel.textContent = "Für PowerPoint kopiert";
      setTimeout(() => {
        btnEl.removeAttribute("data-copied");
        if (originalLabel) originalLabel.textContent = "Für PowerPoint kopieren";
      }, 2000);
    } catch (_err) {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(absUrl);
      }
      btnEl.setAttribute("data-copied", "true");
      if (originalLabel) originalLabel.textContent = "Link kopiert";
      setTimeout(() => {
        btnEl.removeAttribute("data-copied");
        if (originalLabel) originalLabel.textContent = "Für PowerPoint kopieren";
      }, 2000);
    }
  }

  function downloadAllSteps(seriesList) {
    seriesList.forEach((entry, idx) => {
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = entry.gif.file;
        a.download = `${entry.gif.id}.gif`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }, idx * 280);
    });
  }

  function openLightbox(gif) {
    if (!lightboxDialog || typeof lightboxDialog.showModal !== "function") return;
    lightboxImg.src = gif.file;
    lightboxImg.alt = gif.title;
    lightboxTitle.textContent = gif.title;
    lightboxDownload.href = gif.file;
    lightboxDownload.setAttribute("download", `${gif.id}.gif`);
    lightboxDialog.showModal();
  }

  function renderCards() {
    if (!gifGrid) return;
    const filtered = appData.gifs.filter(matchesGif);
    if (resultCountEl) {
      resultCountEl.textContent = String(filtered.length);
    }

    if (activeFilterContainer) {
      activeFilterContainer.innerHTML = "";
      if (state.category) {
        const meta = categoryMap.get(state.category);
        const pill = document.createElement("span");
        pill.className = "active-filter-pill";
        pill.textContent = meta ? `${meta.id}: ${meta.name}` : state.category;
        activeFilterContainer.appendChild(pill);
      } else if (state.subject) {
        const pill = document.createElement("span");
        pill.className = "active-filter-pill";
        pill.textContent = state.subject === "biologie" ? "Fach: Biologie" : "Fach: Chemie (SG/WSG)";
        activeFilterContainer.appendChild(pill);
      }
    }

    const hasActiveFilter = Boolean(state.query.trim() || state.category || state.subject);
    if (resetBtn) {
      resetBtn.hidden = !hasActiveFilter;
    }

    if (filtered.length === 0) {
      gifGrid.hidden = true;
      if (emptyState) emptyState.hidden = false;
      return;
    }

    gifGrid.hidden = false;
    if (emptyState) emptyState.hidden = true;
    gifGrid.innerHTML = "";

    filtered.forEach((gif) => {
      const article = document.createElement("article");
      article.className = "gif-card";
      article.id = `card-${gif.id}`;

      const stageBtn = document.createElement("button");
      stageBtn.type = "button";
      stageBtn.className = "gif-stage-btn";
      stageBtn.setAttribute("aria-label", `${gif.title} vergrößern`);
      stageBtn.innerHTML = `<img class="gif-preview" src="${gif.file}" alt="${gif.title}" width="1280" height="720" loading="lazy">`;
      stageBtn.addEventListener("click", () => openLightbox(gif));
      article.appendChild(stageBtn);

      const body = document.createElement("div");
      body.className = "card-body";

      const headerRow = document.createElement("div");
      headerRow.className = "card-header-row";
      const h2 = document.createElement("h2");
      h2.className = "card-title";
      h2.textContent = gif.title;
      headerRow.appendChild(h2);
      body.appendChild(headerRow);

      const catRow = document.createElement("div");
      catRow.className = "categories-row";
      (gif.categories || []).forEach((catId) => {
        const meta = categoryMap.get(catId);
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "cat-chip";
        if (meta) {
          chip.setAttribute("data-subject", meta.subject);
          chip.title = `${meta.id}: ${meta.name}`;
        }
        chip.textContent = catId;
        chip.addEventListener("click", () => {
          state.category = state.category === catId ? "" : catId;
          state.subject = "";
          syncUrlAndRender();
        });
        catRow.appendChild(chip);
      });
      body.appendChild(catRow);

      const tagsRow = document.createElement("div");
      tagsRow.className = "tags-row";
      (gif.tags || []).slice(0, 5).forEach((tag) => {
        const tagBtn = document.createElement("button");
        tagBtn.type = "button";
        tagBtn.className = "tag-btn";
        tagBtn.textContent = `#${tag}`;
        tagBtn.addEventListener("click", () => {
          state.query = tag;
          if (searchInput) searchInput.value = tag;
          syncUrlAndRender();
        });
        tagsRow.appendChild(tagBtn);
      });
      body.appendChild(tagsRow);

      const stepInfo = parseStepInfo(gif);
      if (stepInfo && seriesMap.has(stepInfo.baseName)) {
        const stepsList = seriesMap.get(stepInfo.baseName);
        if (stepsList.length > 1) {
          const seriesBar = document.createElement("div");
          seriesBar.className = "series-bar";

          const stepsWrap = document.createElement("div");
          stepsWrap.className = "series-steps";
          const lbl = document.createElement("span");
          lbl.className = "series-label";
          lbl.textContent = "Prozessschritte:";
          stepsWrap.appendChild(lbl);

          stepsList.forEach((sEntry) => {
            const sp = document.createElement("button");
            sp.type = "button";
            sp.className = "step-pill" + (sEntry.gif.id === gif.id ? " is-current" : "");
            sp.textContent = `(${sEntry.stepNum})`;
            sp.title = sEntry.gif.title;
            sp.addEventListener("click", () => {
              const targetCard = document.getElementById(`card-${sEntry.gif.id}`);
              if (targetCard) {
                targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
              } else {
                state.query = stepInfo.baseName;
                state.category = "";
                state.subject = "";
                if (searchInput) searchInput.value = stepInfo.baseName;
                syncUrlAndRender();
              }
            });
            stepsWrap.appendChild(sp);
          });

          const allStepsBtn = document.createElement("button");
          allStepsBtn.type = "button";
          allStepsBtn.className = "btn-secondary";
          allStepsBtn.textContent = `Alle ${stepsList.length} Schritte speichern`;
          allStepsBtn.addEventListener("click", () => downloadAllSteps(stepsList));

          seriesBar.appendChild(stepsWrap);
          seriesBar.appendChild(allStepsBtn);
          body.appendChild(seriesBar);
        }
      }

      const actionsRow = document.createElement("div");
      actionsRow.className = "card-actions";

      const dlLink = document.createElement("a");
      dlLink.className = "btn-primary";
      dlLink.href = gif.file;
      dlLink.setAttribute("download", `${gif.id}.gif`);
      dlLink.innerHTML = `
        <svg class="btn-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M10 3v10m0 0l-3.5-3.5M10 13l3.5-3.5M4 16h12" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>GIF speichern</span>
      `;

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "btn-secondary";
      copyBtn.innerHTML = `
        <svg class="btn-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <rect x="7" y="7" width="9" height="9" rx="1.5"/>
          <path d="M13 7V5.5A1.5 1.5 0 0 0 11.5 4h-6A1.5 1.5 0 0 0 4 5.5v6A1.5 1.5 0 0 0 5.5 13H7" stroke-linecap="round"/>
        </svg>
        <span class="copy-label">Für PowerPoint kopieren</span>
      `;
      copyBtn.addEventListener("click", () => copyGifForPowerPoint(gif, copyBtn));

      actionsRow.appendChild(dlLink);
      actionsRow.appendChild(copyBtn);
      body.appendChild(actionsRow);

      article.appendChild(body);
      gifGrid.appendChild(article);
    });
  }

  function syncUrlAndRender() {
    const params = new URLSearchParams();
    if (state.query.trim()) params.set("q", state.query.trim());
    if (state.category) params.set("cat", state.category);
    if (state.subject) params.set("subj", state.subject);
    const qs = params.toString();
    const newUrl = window.location.pathname + (qs ? `?${qs}` : "");
    window.history.replaceState(null, "", newUrl);

    renderDropdowns();
    renderCards();
  }

  function readUrlState() {
    const params = new URLSearchParams(window.location.search);
    state.query = params.get("q") || "";
    state.category = params.get("cat") || "";
    state.subject = params.get("subj") || "";
    if (searchInput) searchInput.value = state.query;
  }

  function resetAllFilters() {
    state.query = "";
    state.category = "";
    state.subject = "";
    if (searchInput) searchInput.value = "";
    syncUrlAndRender();
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value;
      syncUrlAndRender();
    });
  }

  if (resetBtn) resetBtn.addEventListener("click", resetAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener("click", resetAllFilters);
  if (brandReset) {
    brandReset.addEventListener("click", (e) => {
      e.preventDefault();
      resetAllFilters();
    });
  }

  if (bioAllBtn) {
    bioAllBtn.addEventListener("click", () => {
      state.subject = state.subject === "biologie" ? "" : "biologie";
      state.category = "";
      syncUrlAndRender();
    });
  }

  if (chemAllBtn) {
    chemAllBtn.addEventListener("click", () => {
      state.subject = state.subject === "chemie" ? "" : "chemie";
      state.category = "";
      syncUrlAndRender();
    });
  }

  if (lightboxClose && lightboxDialog) {
    lightboxClose.addEventListener("click", () => lightboxDialog.close());
    lightboxDialog.addEventListener("click", (e) => {
      if (e.target === lightboxDialog) lightboxDialog.close();
    });
  }

  readUrlState();
  buildMaps();
  renderDropdowns();
  renderCards();

  fetch("./data/gifs.json")
    .then((res) => (res.ok ? res.json() : Promise.reject(new Error("Status " + res.status))))
    .then((json) => {
      if (json && Array.isArray(json.gifs)) {
        appData = json;
        buildMaps();
        renderDropdowns();
        renderCards();
      }
    })
    .catch(() => {
      // Fallback data already rendered
    });
})();
