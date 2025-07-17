// Put language constants here to use in your display.
// JSX for entire pages, specifically the Landing page, Glossary page, and the
// About page, are in the respective files themselves
// (e.g. jsx/App/LandingPage.jsx).
export const ENGLISH = "en";
export const ESPANOL = "es";
export const FRANCAIS = "fr";
export const BRAZILIAN_PORTUGUESE = "pt-br";

// Put default language here.
export const DEFAULT_LOCALE = BRAZILIAN_PORTUGUESE;

// Below, write the text that goes in various parts of the website for each
// language.

// NavBar text (header).
export const navBarTitleText = {
  [ENGLISH]: "LingView: ELAN and FLEx Web Display",
  [ESPANOL]: "LingView: Pantella Web ELAN y FLEx",
  [FRANCAIS]: "LingView: Affichage Web ELAN et FLEx",
  [BRAZILIAN_PORTUGUESE]: "LingView: Reprodução Web de ELAN e FLEx"
};

export const navBarSearchText = {
  [ENGLISH]: "Search",
  [ESPANOL]: "Buscar",
  [FRANCAIS]: "Chercher",
  [BRAZILIAN_PORTUGUESE]: "Buscar"
};

export const navBarAboutText = {
  [ENGLISH]: "About",
  [ESPANOL]: "Acerca del corpus",
  [FRANCAIS]: "À propos du corpus",
  [BRAZILIAN_PORTUGUESE]: "Sobre"
};

export const navBarGlossaryText = {
  [ENGLISH]: "Glossary",
  [ESPANOL]: "Glosario",
  [FRANCAIS]: "Glossaire",
  [BRAZILIAN_PORTUGUESE]: "Glossário"
};

export const navBarIndexText = {
  [ENGLISH]: "Index of Texts",
  [ESPANOL]: "Índice de textos",
  [FRANCAIS]: "Index des Textes",
  [BRAZILIAN_PORTUGUESE]: "Índice de Textos"
};

// Search page text
export const searchPagePromptText = {
  [ENGLISH]: "Search database:",
  [ESPANOL]: "Buscar en la base de datos:",
  [FRANCAIS]: "Rechercher dans la base de données:",
  [BRAZILIAN_PORTUGUESE]: "Buscar na base de dados:"
};

export const searchPageNextButtonText = {
  [ENGLISH]: "Next page",
  [ESPANOL]: "Página siguiente",
  [FRANCAIS]: "Page suivante",
  [BRAZILIAN_PORTUGUESE]: "Próxima página"
};

export const searchPagePrevButtonText = {
  [ENGLISH]: "Previous page",
  [ESPANOL]: "Página anterior",
  [FRANCAIS]: "Page précédente",
  [BRAZILIAN_PORTUGUESE]: "Página anterior"
};

// Story index columns text.
export const indexPageTitleHeaderText = {
  [ENGLISH]: "Title",
  [ESPANOL]: "Título",
  [FRANCAIS]: "Titre",
  [BRAZILIAN_PORTUGUESE]: "Título"
};

export const indexPageAuthorHeaderText = {
  [ENGLISH]: "Author",
  [ESPANOL]: "Autor",
  [FRANCAIS]: "Auteur",
  [BRAZILIAN_PORTUGUESE]: "Autor"
};

export const indexPageMediaHeaderText = {
  [ENGLISH]: "Media",
  [ESPANOL]: "Medios",
  [FRANCAIS]: "Médias",
  [BRAZILIAN_PORTUGUESE]: "Mídia"
};

// Use if a story isn't found.
export const notFoundPageText = {
  [ENGLISH]: "Story not found. Perhaps you mistyped the URL?",
  [ESPANOL]: "Historia no encontrada. ¿Quizás escribiste mal la URL?",
  [FRANCAIS]: "Histoire introuvable. Peut-être avez-vous mal saisi l'URL?",
  [BRAZILIAN_PORTUGUESE]: "História não encontrada. Talvez você tenha digitado a URL incorretamente?"
};

// Use when a story is loading.
export const loadingPageText = {
  [ENGLISH]: "Loading...",
  [ESPANOL]: "Cargando...",
  [FRANCAIS]: "Chargement...",
  [BRAZILIAN_PORTUGUESE]: "Carregando..."
};

// Story controls and metadata.
export const showVideoButtonText = {
  [ENGLISH]: "Show video",
  [ESPANOL]: "Mostrar video",
  [FRANCAIS]: "Montrer la vidéo",
  [BRAZILIAN_PORTUGUESE]: "Mostrar vídeo"
};

export const showOrHideTiersButtonText = {
  [ENGLISH]: "Show/hide tiers",
  [ESPANOL]: "Mostrar/ocultar niveles",
  [FRANCAIS]: "Afficher/masquer les niveaux",
  [BRAZILIAN_PORTUGUESE]: "Mostrar/ocultar camadas"
};

export const metadataAuthorText = {
  [ENGLISH]: "Author",
  [ESPANOL]: "Autor",
  [FRANCAIS]: "Auteur",
  [BRAZILIAN_PORTUGUESE]: "Autor"
};

export const metadataDateText = {
  [ENGLISH]: "Date",
  [ESPANOL]: "Fecha",
  [FRANCAIS]: "Date",
  [BRAZILIAN_PORTUGUESE]: "Data"
};

export const metadataDescriptionText = {
  [ENGLISH]: "Description",
  [ESPANOL]: "Descripción",
  [FRANCAIS]: "Description",
  [BRAZILIAN_PORTUGUESE]: "Descrição"
};

export const metadataGenreText = {
  [ENGLISH]: "Genre",
  [ESPANOL]: "Género",
  [FRANCAIS]: "Genre",
  [BRAZILIAN_PORTUGUESE]: "Gênero"
};

export const metadataGlosserText = {
  [ENGLISH]: "Glosser",
  [ESPANOL]: "Glosador",
  [FRANCAIS]: "Glosser",
  [BRAZILIAN_PORTUGUESE]: "Glossador"
};

export const metadataSourceText = {
  [ENGLISH]: "Source",
  [ESPANOL]: "Fuente",
  [FRANCAIS]: "Source",
  [BRAZILIAN_PORTUGUESE]: "Fonte"
};

export const metadataSpeakersText = {
  [ENGLISH]: "Speakers",
  [ESPANOL]: "Oradores",
  [FRANCAIS]: "Orateurs",
  [BRAZILIAN_PORTUGUESE]: "Falantes"
};

export const storySearchText = {
  [ENGLISH]: "Story",
  [ESPANOL]: "Historia",
  [FRANCAIS]: "Histoire",
  [BRAZILIAN_PORTUGUESE]: "História"
};

export const storySearchViewStoryText = {
  [ENGLISH]: "View story",
  [ESPANOL]: "Ver historia",
  [FRANCAIS]: "Voir l'histoire",
  [BRAZILIAN_PORTUGUESE]: "Ver história"
};

// Texts for LaTeX conversion UI

export const latexButtonText = {
  [ENGLISH]: "LaTeX",
  [ESPANOL]: "LaTeX",
  [FRANCAIS]: "LaTeX",
  [BRAZILIAN_PORTUGUESE]: "LaTeX"
};

export const latexSelectTiersPromptText = {
  [ENGLISH]: "Please select what tier to use for each line in the LaTeX gloss.",
  [ESPANOL]: "Seleccione qué nivel usar para cada línea en la glosa en LaTeX.",
  [FRANCAIS]: "Veuillez sélectionner le niveau à utiliser pour chaque ligne du gloss LaTeX.",
  [BRAZILIAN_PORTUGUESE]: "Selecione qual camada usar para cada linha na glosa em LaTeX."
};

export const latexSentenceTierName = {
  [ENGLISH]: "original sentence",
  [ESPANOL]: "frase original",
  [FRANCAIS]: "phrase originale",
  [BRAZILIAN_PORTUGUESE]: "frase original"
};

export const latexMorphemesTierName = {
  [ENGLISH]: "morphemes",
  [ESPANOL]: "morfemas",
  [FRANCAIS]: "morphèmes",
  [BRAZILIAN_PORTUGUESE]: "morfemas"
};

export const latexMorphemeTranslationsTierName = {
  [ENGLISH]: "morpheme glosses",
  [ESPANOL]: "glosas de morfemas",
  [FRANCAIS]: "gloses de morphèmes",
  [BRAZILIAN_PORTUGUESE]: "glosas de morfemas"
};

export const latexSentenceTranslationsTierName = {
  [ENGLISH]: "sentence translation",
  [ESPANOL]: "frase traducida",
  [FRANCAIS]: "phrase traduite",
  [BRAZILIAN_PORTUGUESE]: "tradução da frase"
};

// Text on the tier selection confirm button
export const tierSelectionConfirmButtonText = {
  [ENGLISH]: "Confirm",
  [ESPANOL]: "Confirmar",
  [FRANCAIS]: "Confirmer",
  [BRAZILIAN_PORTUGUESE]: "Confirmar"
};

// Text on the LaTeX formatter close button
export const latexCloseButtonText = {
  [ENGLISH]: "Close",
  [ESPANOL]: "Cerrar",
  [FRANCAIS]: "Fermer",
  [BRAZILIAN_PORTUGUESE]: "Fechar"
};

export const latexStoryTitleText = {
  [ENGLISH]: "Story title:",
  [ESPANOL]: "Título de la historia:",
  [FRANCAIS]: "Titre de l'histoire:",
  [BRAZILIAN_PORTUGUESE]: "Título da história:"
};

export const latexStoryIDText = {
  [ENGLISH]: "Story ID:",
  [ESPANOL]: "ID de historia:",
  [FRANCAIS]: "ID de l'histoire:",
  [BRAZILIAN_PORTUGUESE]: "ID da história:"
};

export const latexSentenceURLText = {
  [ENGLISH]: "Sentence URL:",
  [ESPANOL]: "URL de la frase:",
  [FRANCAIS]: "URL de la phrase:",
  [BRAZILIAN_PORTUGUESE]: "URL da frase:"
};

export const latexLibraryText = {
  [ENGLISH]: "Formatted for gb4e and gb4e-modified LaTeX packages:",
  [ESPANOL]: "Formateado para paquetes LaTeX gb4e y gb4e-modified:",
  [FRANCAIS]: "Formaté pour les packages LaTeX gb4e et gb4e-modified:",
  [BRAZILIAN_PORTUGUESE]: "Formatado para os pacotes LaTeX gb4e e gb4e-modified:"
};

export const footerText = {
  [ENGLISH]: "This website is powered by ",
  [ESPANOL]: "Este sitio web funciona con ",
  [FRANCAIS]: "Ce site Web est alimenté par ",
  [BRAZILIAN_PORTUGUESE]: "Este site é desenvolvido com "
};
