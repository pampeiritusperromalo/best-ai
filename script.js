const recommendations = [
  {
    id: "programar",
    title: "Programar i crear apps",
    icon: "💻",
    tags: ["codi", "web", "apps", "debug"],
    keywords: ["programar", "programmar", "programació", "programacio", "codi", "coding", "web", "app", "javascript", "python", "errors", "debug", "vscode", "projecte"],
    best: {
      name: "Cursor",
      type: "De pagament, amb modalitat gratuïta",
      url: "https://www.cursor.com/pricing",
      note: "L'editor de codi més complet per treball professional: entén el projecte, pot editar múltiples fitxers i integra models potents dins el flux de treball."
    },
    free: {
      name: "Codeium / Windsurf",
      url: "https://windsurf.com/pricing",
      note: "La millor alternativa gratuïta per autocompletat ràpid i xat dins l'editor per ús individual."
    },
    alternatives: ["GitHub Copilot", "Replit AI", "Lovable", "ChatGPT"],
    when: "Tria Cursor si estàs construint projectes reals. Tria Codeium/Windsurf si vols començar sense pagar.",
    warning: "Si només estàs aprenent conceptes bàsics, ChatGPT o Replit poden ser més senzills al principi."
  },
  {
    id: "estudi-fonts",
    title: "Estudiar, aprendre i organitzar coneixement",
    icon: "📚",
    tags: ["coneixement", "PDF", "documents", "aprenentatge"],
    keywords: ["estudiar", "aprendre", "coneixement", "apunts", "pdf", "llibre", "llibres", "documents corporatius", "empresa", "classe", "examen", "fonts pròpies", "notebook", "resumir pdf", "xatejar pdf", "organitzar"],
    best: {
      name: "Google NotebookLM",
      type: "Gratuïta",
      url: "https://notebooklm.google/",
      note: "La millor opció per convertir documents, PDFs, llibres, enllaços o materials corporatius en una base de coneixement consultable."
    },
    free: {
      name: "ChatGPT Free o Claude Free",
      url: "https://openai.com/chatgpt/pricing/",
      note: "Per aprendre des de zero, fer esquemes, planificar feina o entendre conceptes, les versions gratuïtes ja poden ser suficients si el volum és baix."
    },
    alternatives: ["ChatGPT Plus", "Claude Pro", "ChatPDF", "Humata AI", "Knowunity"],
    when: "NotebookLM per coneixement propi; ChatGPT Plus o Claude Pro si vols aprendre conceptes generals amb models més potents.",
    warning: "Si busques informació nova d'internet, complementa'l amb Perplexity."
  },
  {
    id: "estudi-zero",
    title: "Aprendre des de zero o repassar conceptes",
    icon: "🧠",
    tags: ["aprendre", "tutor", "explicacions", "flashcards"],
    keywords: ["aprendre", "des de zero", "explica", "explicar", "flashcards", "memòria", "memoria", "deures", "exercicis", "estudiants", "tutor", "knowunity"],
    best: {
      name: "ChatGPT o Claude",
      type: "Freemium",
      url: "https://openai.com/chatgpt/pricing/",
      note: "Són els més flexibles per demanar explicacions adaptades, esquemes, exemples i preguntes tipus examen."
    },
    free: {
      name: "Knowunity",
      url: "https://knowunity.com/",
      note: "Interessant per estudiants perquè combina apunts, quizzes, flashcards i una experiència més guiada."
    },
    alternatives: ["Khanmigo", "Gemini", "NotebookLM", "Quizlet"],
    when: "Tria ChatGPT/Claude per entendre conceptes; tria Knowunity si vols una app més enfocada a estudiants.",
    warning: "Per estudiar de veritat, fes que la IA et pregunti i no només et doni resums."
  },
  {
    id: "recerca",
    title: "Buscar informació amb fonts fiables",
    icon: "🔍",
    tags: ["recerca", "fonts", "cites", "acadèmic"],
    keywords: ["buscar", "fonts", "fiables", "cites", "recerca", "investigar", "acadèmic", "academic", "paper", "articles", "bibliografia", "consensus", "perplexity"],
    best: {
      name: "Consensus",
      type: "Freemium acadèmica",
      url: "https://consensus.app/",
      note: "Ideal per preguntes acadèmiques perquè se centra en literatura científica i ajuda a veure què diuen els estudis."
    },
    free: {
      name: "Perplexity",
      url: "https://www.perplexity.ai/pricing",
      note: "La millor opció general per substituir cerques tradicionals quan vols una resposta directa amb fonts verificables."
    },
    alternatives: ["Elicit", "Google Scholar", "NotebookLM", "ChatGPT amb web"],
    when: "Consensus per evidència científica; Perplexity per recerca general i actualitat.",
    warning: "No copiïs cites sense obrir la font original i comprovar que diu el que la IA afirma."
  },
  {
    id: "presentacions",
    title: "Disseny gràfic i presentacions",
    icon: "📊",
    tags: ["disseny", "slides", "PowerPoint", "Canva"],
    keywords: ["disseny", "disseny gràfic", "presentació", "presentacio", "diapositives", "slides", "powerpoint", "ppt", "pitch", "canva", "gamma", "slidesgo", "magic studio"],
    best: {
      name: "Canva Magic Studio",
      type: "Freemium",
      url: "https://www.canva.com/pricing/",
      note: "La millor opció general per disseny gràfic i presentacions: Magic Studio combina plantilles, text, imatges, edició i exportació."
    },
    free: {
      name: "Slidesgo",
      url: "https://slidesgo.io/pricing",
      note: "Bona opció gratuïta/freemium per generar presentacions ràpides i descarregar-les en format editable."
    },
    alternatives: ["Gamma", "Slidesgo", "Beautiful.ai", "Tome", "Microsoft Copilot"],
    when: "Canva si vols disseny i control visual. Gamma o Slidesgo si vols una presentació generada molt ràpidament.",
    warning: "Les presentacions generades per IA solen necessitar revisió de contingut i estructura."
  },
  {
    id: "imatge",
    title: "Crear imatges, anuncis o visuals",
    icon: "🎨",
    tags: ["imatge", "disseny", "anuncis", "logos"],
    keywords: ["imatge", "imatges", "foto", "visual", "anunci", "poster", "cartell", "logo", "disseny", "midjourney", "firefly", "ideogram"],
    best: {
      name: "Midjourney",
      type: "De pagament",
      url: "https://docs.midjourney.com/docs/plans",
      note: "Segueix sent una de les opcions més fortes per qualitat visual, estil i resultats publicitaris o artístics."
    },
    free: {
      name: "Adobe Firefly o Canva",
      url: "https://www.adobe.com/products/firefly/pricing.html",
      note: "Bona alternativa per començar amb crèdits gratuïts, edició generativa i ús més orientat a disseny."
    },
    alternatives: ["Leonardo AI", "Ideogram", "ChatGPT imatges", "Canva Dream Lab"],
    when: "Midjourney per impacte visual; Ideogram si necessites text dins la imatge; Firefly si ja uses Adobe.",
    warning: "Per logos finals de marca, usa la IA com a esborrany i revisa drets, llegibilitat i vectorització."
  },
  {
    id: "video",
    title: "Crear o editar vídeo amb IA",
    icon: "🎬",
    tags: ["vídeo", "TikTok", "Reels", "clips"],
    keywords: ["vídeo", "video", "tiktok", "reel", "reels", "youtube", "clip", "b-roll", "shorts", "subtítols", "subtitols", "runway", "capcut", "opus", "sora"],
    best: {
      name: "Runway",
      type: "De pagament / freemium",
      url: "https://runwayml.com/pricing",
      note: "La recomanació principal actual per generar i editar vídeo amb IA amb un acabat més cinematogràfic i professional."
    },
    free: {
      name: "CapCut AI o Opus Clip",
      url: "https://www.capcut.com/",
      note: "CapCut és ideal per edició social i subtítols; Opus Clip retalla vídeos llargs en shorts/reels automàticament."
    },
    alternatives: ["Luma Dream Machine", "Pika", "Opus Clip", "Descript", "Sora (no estable com a producte actual)"],
    when: "Runway per generació visual; CapCut/Opus Clip per màrqueting, shorts, reels i reutilitzar vídeos llargs.",
    warning: "Sora no és una recomanació principal actual: OpenAI indica que l'app/web es va discontinuar el 26/04/2026 i l'API té discontinuació anunciada."
  },
  {
    id: "veu",
    title: "Veu en off, doblatge i narració",
    icon: "🎙️",
    tags: ["veu", "audio", "doblatge", "podcast"],
    keywords: ["veu", "voice", "audio", "àudio", "doblatge", "narració", "narracio", "podcast", "locució", "locucio", "elevenlabs"],
    best: {
      name: "ElevenLabs",
      type: "Freemium",
      url: "https://elevenlabs.io/pricing",
      note: "Una de les opcions més fortes per veus realistes, doblatge i narració professional."
    },
    free: {
      name: "ElevenLabs Free",
      url: "https://elevenlabs.io/pricing",
      note: "Serveix per proves curtes. Per vídeos finals o ús freqüent normalment convé un pla de pagament."
    },
    alternatives: ["PlayHT", "Murf", "Descript", "Microsoft Copilot Studio voice"],
    when: "Per veus naturals en anuncis, vídeos, podcasts o contingut educatiu.",
    warning: "No clonïs veus de persones sense permís explícit."
  },
  {
    id: "musica",
    title: "Crear música, cançons o jingles",
    icon: "🎵",
    tags: ["música", "cançons", "jingles", "beats"],
    keywords: ["música", "musica", "cançó", "canco", "jingle", "beat", "banda sonora", "suno", "udio"],
    best: {
      name: "Suno",
      type: "Freemium",
      url: "https://suno.com/pricing",
      note: "La millor opció general per generar cançons completes amb lletra, veus i producció musical a partir d'una descripció."
    },
    free: {
      name: "Udio",
      url: "https://www.udio.com/",
      note: "Alternativa freemium forta, amb molt bona qualitat d'àudio i control sobre estructura i estil."
    },
    alternatives: ["Udio", "Soundraw", "AIVA", "ElevenLabs Music"],
    when: "Per cançons ràpides, idees creatives, sintonies i música per contingut.",
    warning: "Si és per ús comercial, comprova els drets del pla que uses."
  },
  {
    id: "automatitzacio",
    title: "Automatitzar tasques i connectar apps",
    icon: "⚙️",
    tags: ["automatització", "workflows", "apps", "CRM"],
    keywords: ["automatitzar", "automatització", "workflow", "zapier", "make", "n8n", "gmail", "sheets", "crm", "formulari", "api", "webhook"],
    best: {
      name: "Zapier AI",
      type: "Freemium amb pagament útil",
      url: "https://zapier.com/pricing",
      note: "Molt còmode si vols connectar apps sense programar i tenir automatitzacions fiables."
    },
    free: {
      name: "n8n self-host",
      url: "https://n8n.io/pricing/",
      note: "La millor opció gratuïta potent si tens coneixements tècnics i pots allotjar-la tu."
    },
    alternatives: ["Make", "Microsoft Power Automate", "Bardeen", "ChatGPT agents"],
    when: "Zapier/Make per facilitat; n8n per control i cost baix.",
    warning: "Automatitza primer processos simples i revisa permisos de dades."
  },
  {
    id: "oficina",
    title: "Documents, correu, Excel i oficina",
    icon: "🗂️",
    tags: ["Office", "Excel", "correu", "documents"],
    keywords: ["excel", "word", "powerpoint", "outlook", "office", "microsoft", "gmail", "docs", "sheets", "correu", "informe", "document"],
    best: {
      name: "Microsoft Copilot",
      type: "Freemium / Microsoft 365",
      url: "https://www.microsoft.com/microsoft-copilot",
      note: "La millor opció si treballes amb Word, Excel, PowerPoint, Outlook i Teams."
    },
    free: {
      name: "Gemini + Google Workspace",
      url: "https://gemini.google/plans/",
      note: "Bona alternativa si uses Gmail, Drive, Docs i Sheets, amb opcions gratuïtes i plans de pagament."
    },
    alternatives: ["ChatGPT", "Notion AI", "Claude", "Canva Docs"],
    when: "Copilot per entorns Microsoft; Gemini per entorns Google.",
    warning: "Revisa sempre fórmules, xifres i correus importants abans d'enviar."
  },
  {
    id: "dades",
    title: "Analitzar dades, taules i gràfics",
    icon: "📈",
    tags: ["dades", "CSV", "Excel", "gràfics"],
    keywords: ["dades", "analitzar", "csv", "taules", "gràfics", "grafics", "estadística", "estadistica", "excel", "dashboard"],
    best: {
      name: "ChatGPT",
      type: "Freemium",
      url: "https://openai.com/chatgpt/pricing/",
      note: "Molt pràctic per pujar fitxers, demanar anàlisi, resumir taules i crear gràfics o explicacions."
    },
    free: {
      name: "Google Sheets + Gemini",
      url: "https://gemini.google/plans/",
      note: "Bona opció si ja treballes amb fulls de càlcul i necessites ajuda integrada."
    },
    alternatives: ["Microsoft Copilot", "Julius AI", "Claude", "DataLab"],
    when: "ChatGPT per anàlisi flexible; Copilot/Gemini si el fitxer ja viu dins Office o Google.",
    warning: "No pugis dades sensibles sense revisar privacitat i permisos."
  },
  {
    id: "idiomes",
    title: "Idiomes, traducció i pràctica oral",
    icon: "🌍",
    tags: ["idiomes", "traducció", "parlar", "aprendre"],
    keywords: ["idioma", "idiomes", "traduir", "traducció", "angles", "anglès", "francès", "alemany", "parlar", "pronunciació", "duolingo"],
    best: {
      name: "ChatGPT Voice o Gemini",
      type: "Freemium",
      url: "https://openai.com/chatgpt/pricing/",
      note: "Molt útil per practicar conversa, corregir frases, simular situacions i explicar gramàtica."
    },
    free: {
      name: "Duolingo",
      url: "https://www.duolingo.com/",
      note: "Bona opció gratuïta per hàbit diari i vocabulari bàsic."
    },
    alternatives: ["DeepL", "Elsa Speak", "Memrise", "Claude"],
    when: "ChatGPT per pràctica lliure; DeepL per traducció acurada; Duolingo per constància.",
    warning: "Per pronúncia, combina text amb veu real o eines especialitzades."
  },
  {
    id: "productivitat",
    title: "Notes, organització i productivitat",
    icon: "🧩",
    tags: ["notes", "organització", "tasques", "wiki"],
    keywords: ["notes", "organitzar", "productivitat", "tasques", "wiki", "notion", "agenda", "resums", "projectes"],
    best: {
      name: "Notion AI",
      type: "De pagament sobre Notion",
      url: "https://www.notion.com/pricing",
      note: "Ideal si ja tens notes, projectes i documentació dins Notion."
    },
    free: {
      name: "ChatGPT Free + Notion Free",
      url: "https://www.notion.com/pricing",
      note: "Combinació senzilla per generar estructures, resums i plans sense pagar d'entrada."
    },
    alternatives: ["Mem", "NotebookLM", "Microsoft Loop", "Obsidian + plugins"],
    when: "Per convertir notes disperses en sistemes d'estudi, feina o projectes.",
    warning: "No deixis que la IA organitzi sense criteris: defineix categories i objectius."
  }
];

const tools = [
  ["Cursor", "Codi", "Editor AI tipus VS Code per projectes complets.", "https://www.cursor.com/pricing"],
  ["Codeium / Windsurf", "Codi", "Autocompletat i editor AI amb pla gratuït.", "https://windsurf.com/pricing"],
  ["GitHub Copilot", "Codi", "Assistent de codi integrat a GitHub i IDEs.", "https://github.com/features/copilot/plans"],
  ["NotebookLM", "Estudi", "Xat i guies basades en els teus documents.", "https://notebooklm.google/"],
  ["Knowunity", "Estudi", "Apunts, quizzes, flashcards i IA per estudiants.", "https://knowunity.com/"],
  ["ChatPDF", "PDF", "Xat ràpid amb PDFs.", "https://www.chatpdf.com/"],
  ["Humata AI", "PDF", "Anàlisi i preguntes sobre documents llargs.", "https://www.humata.ai/pricing"],
  ["ChatGPT", "General", "Assistent flexible per text, dades, codi i aprenentatge.", "https://openai.com/chatgpt/pricing/"],
  ["Claude", "Text", "Molt bo per documents llargs, redacció i raonament.", "https://www.anthropic.com/pricing"],
  ["Gemini", "Google", "IA general amb integració a Google.", "https://gemini.google/plans/"],
  ["Khanmigo", "Tutor", "Tutor educatiu de Khan Academy.", "https://support.khanacademy.org/hc/en-us/articles/25921448458893-What-features-are-available-in-the-Learner-Parent-and-Teacher-Khanmigo-subscription-plans"],
  ["Consensus", "Recerca", "Cerca respostes en literatura científica.", "https://consensus.app/"],
  ["Perplexity", "Recerca", "Cerca web amb cites i fonts.", "https://www.perplexity.ai/pricing"],
  ["Elicit", "Acadèmic", "Ajuda a trobar i comparar papers.", "https://elicit.com/"],
  ["Canva", "Disseny", "Presentacions, posts i materials visuals.", "https://www.canva.com/pricing/"],
  ["Gamma", "Presentacions", "Genera decks i documents visuals ràpidament.", "https://gamma.app/pricing"],
  ["Slidesgo", "Presentacions", "Generador i plantilles PPT/Google Slides.", "https://slidesgo.io/pricing"],
  ["Midjourney", "Imatge", "Imatges creatives d'alta qualitat.", "https://docs.midjourney.com/docs/plans"],
  ["Adobe Firefly", "Imatge", "Generació i edició d'imatges per fluxos Adobe.", "https://www.adobe.com/products/firefly/pricing.html"],
  ["Ideogram", "Imatge", "Bo per visuals amb text integrat.", "https://ideogram.ai/pricing"],
  ["Runway", "Vídeo", "Generació i edició creativa de vídeo.", "https://runwayml.com/pricing"],
  ["CapCut", "Vídeo", "Editor social amb subtítols i plantilles.", "https://www.capcut.com/"],
  ["Opus Clip", "Vídeo", "Retalla vídeos llargs en clips curts per xarxes.", "https://www.opus.pro/es-es/agent/pricing"],
  ["Luma Dream Machine", "Vídeo", "Text/imatge a vídeo amb moviment cinematogràfic.", "https://lumalabs.ai/dream-machine"],
  ["ElevenLabs", "Veu", "Veu realista, doblatge i narració.", "https://elevenlabs.io/pricing"],
  ["Suno", "Música", "Cançons i jingles amb IA.", "https://suno.com/pricing"],
  ["Udio", "Música", "Generació musical amb control d'estil i estructura.", "https://www.udio.com/"],
  ["Zapier", "Automatització", "Connecta apps sense programar.", "https://zapier.com/pricing"],
  ["Make", "Automatització", "Workflows visuals entre apps.", "https://www.make.com/en/pricing"],
  ["n8n", "Automatització", "Automatització self-host potent.", "https://n8n.io/pricing/"],
  ["Microsoft Copilot", "Oficina", "IA per Office, Excel, Word i PowerPoint.", "https://www.microsoft.com/microsoft-copilot"],
  ["Notion AI", "Productivitat", "Notes, wiki i documents dins Notion.", "https://www.notion.com/pricing"],
  ["DeepL", "Idiomes", "Traducció acurada.", "https://www.deepl.com/"]
];

const sources = [
  ["Cursor", "https://www.cursor.com/pricing"],
  ["Windsurf", "https://docs.windsurf.com/windsurf/accounts/usage"],
  ["NotebookLM", "https://notebooklm.google/"],
  ["Knowunity", "https://knowunity.com/"],
  ["Consensus", "https://consensus.app/"],
  ["Perplexity", "https://www.perplexity.ai/pricing"],
  ["Khanmigo", "https://support.khanacademy.org/hc/en-us/articles/25921448458893-What-features-are-available-in-the-Learner-Parent-and-Teacher-Khanmigo-subscription-plans"],
  ["Slidesgo", "https://slidesgo.io/pricing"],
  ["Gamma", "https://help.gamma.app/en/articles/8077107-upgrading-your-gamma-subscription"],
  ["Midjourney", "https://docs.midjourney.com/docs/plans"],
  ["Runway", "https://runwayml.com/pricing"],
  ["OpenAI Sora discontinuation", "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation"],
  ["Opus Clip", "https://www.opus.pro/es-es/agent/pricing"],
  ["ElevenLabs", "https://elevenlabs.io/pricing"],
  ["Suno", "https://suno.com/pricing"],
  ["Udio", "https://www.udio.com/"],
  ["Zapier", "https://zapier.com/pricing"]
];

const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");
const resultStack = document.querySelector("#resultStack");
const categoryTabs = document.querySelector("#categoryTabs");
const toolGrid = document.querySelector("#toolGrid");
const sourceLinks = document.querySelector("#sourceLinks");
const toolCount = document.querySelector("#toolCount");
const matchCount = document.querySelector("#matchCount");
const resultsTitle = document.querySelector("#resultsTitle");
const confidence = document.querySelector("#confidence");
const catalogStatus = document.querySelector("#catalogStatus");

let activeCategory = "tot";
let currentQuery = "";

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function scoreRecommendation(item, query) {
  const clean = normalize(query);
  if (!clean) return item.id === "programar" || item.id.includes("estudi") || item.id === "recerca" || item.id === "presentacions" ? 20 : 8;

  let score = 0;
  const stopwords = new Set(["amb", "per", "que", "què", "com", "una", "uns", "les", "els", "del", "dels", "des", "off"]);
  const haystack = normalize(`${item.title} ${item.tags.join(" ")} ${item.keywords.join(" ")} ${item.best.name} ${item.free.name} ${item.alternatives.join(" ")}`);
  const hayWords = new Set(haystack.split(/[^a-z0-9]+/).filter(Boolean));
  const words = clean.split(/[^a-z0-9]+/).filter((word) => word.length > 2 && !stopwords.has(word));

  words.forEach((word) => {
    if (hayWords.has(word) || (word.length > 6 && haystack.includes(word))) score += word.length > 6 ? 16 : 10;
  });

  item.keywords.forEach((keyword) => {
    if (clean.includes(normalize(keyword))) score += 18;
  });

  if (normalize(item.best.name).includes(clean) || normalize(item.free.name).includes(clean)) score += 40;
  return score;
}

function getFilteredRecommendations() {
  const filtered = activeCategory === "tot"
    ? recommendations
    : recommendations.filter((item) => item.id === activeCategory);

  return filtered
    .map((item) => ({ ...item, score: scoreRecommendation(item, currentQuery) }))
    .filter((item) => !currentQuery || item.score > 0 || activeCategory !== "tot")
    .sort((a, b) => b.score - a.score);
}

function renderCategories() {
  const categories = [{ id: "tot", title: "Tot" }, ...recommendations.map((item) => ({ id: item.id, title: item.title }))];
  categoryTabs.innerHTML = categories
    .map((category) => `
      <button class="category-tab" type="button" data-id="${category.id}" aria-selected="${category.id === activeCategory}">
        ${category.title}
      </button>
    `)
    .join("");

  categoryTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.id;
      currentQuery = activeCategory === "tot" ? currentQuery : recommendations.find((item) => item.id === activeCategory).title;
      searchInput.value = activeCategory === "tot" ? searchInput.value : currentQuery;
      renderAll();
    });
  });
}

function renderResults() {
  const items = getFilteredRecommendations();
  resultStack.innerHTML = "";
  matchCount.textContent = `${items.length} coincidències`;
  confidence.textContent = currentQuery ? "Cerca activa" : "Guia general";
  resultsTitle.textContent = currentQuery ? `Resultats per "${currentQuery}"` : "Les millors IAs per començar";

  if (!items.length) {
    resultStack.innerHTML = `
      <article class="empty-state">
        <span class="empty-state__icon">⌕</span>
        <h3>No he trobat cap categoria clara</h3>
        <p>Prova amb paraules com estudiar, programar, presentacions, PDFs, imatge, vídeo, veu, música, dades o automatitzar.</p>
      </article>
    `;
    return;
  }

  items.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "recommendation";
    article.innerHTML = `
      <div class="recommendation__top">
        <div class="tool-name">
          <span class="tool-logo">${item.icon}</span>
          <div>
            <h3>${item.title}</h3>
            <div class="badge-row">
              ${item.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}
              <span class="badge">#${index + 1}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="option-pair">
        <div class="mini-card mini-card--best">
          <strong>Millor opció</strong>
          <a href="${item.best.url}" target="_blank" rel="noreferrer">${item.best.name}</a>
          <small>${item.best.type}. ${item.best.note}</small>
        </div>
        <div class="mini-card">
          <strong>Opció gratis o econòmica</strong>
          <a href="${item.free.url}" target="_blank" rel="noreferrer">${item.free.name}</a>
          <small>${item.free.note}</small>
        </div>
      </div>

      <p>${item.when}</p>
      <div class="advice-row">
        <span>Alternatives: ${item.alternatives.join(", ")}</span>
        <span>${item.warning}</span>
      </div>
    `;
    resultStack.appendChild(article);
  });
}

function renderToolGrid() {
  const clean = normalize(currentQuery);
  const visible = tools.filter(([name, category, description]) => {
    if (!clean) return true;
    return normalize(`${name} ${category} ${description}`).includes(clean) ||
      recommendations.some((item) => item.id === activeCategory && normalize(`${item.best.name} ${item.free.name} ${item.alternatives.join(" ")}`).includes(normalize(name)));
  });

  catalogStatus.textContent = `${visible.length} eines`;
  toolGrid.innerHTML = visible
    .map(([name, category, description, url]) => `
      <article class="tool-card">
        <div class="tool-card__head">
          <div class="tool-name">
            <span class="tool-logo">${name.slice(0, 2).toUpperCase()}</span>
            <strong>${name}</strong>
          </div>
          <span class="badge">${category}</span>
        </div>
        <p>${description}</p>
        <a href="${url}" target="_blank" rel="noreferrer">Veure font</a>
      </article>
    `)
    .join("");
}

function renderSources() {
  sourceLinks.innerHTML = sources
    .map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)
    .join("");
}

function renderAll() {
  renderCategories();
  renderResults();
  renderToolGrid();
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  currentQuery = searchInput.value.trim();
  activeCategory = "tot";
  renderAll();
});

searchInput.addEventListener("input", () => {
  currentQuery = searchInput.value.trim();
  activeCategory = "tot";
  renderAll();
});

document.querySelectorAll(".prompt-chip").forEach((button) => {
  button.addEventListener("click", () => {
    currentQuery = button.dataset.query;
    activeCategory = "tot";
    searchInput.value = currentQuery;
    renderAll();
  });
});

document.querySelector("#clearSearch").addEventListener("click", () => {
  currentQuery = "";
  activeCategory = "tot";
  searchInput.value = "";
  renderAll();
});

toolCount.textContent = `${tools.length} eines comparades`;
renderSources();
renderAll();
