const translations = {
	en: {
		title: 'Eolymp Account Tracker',
		searchPlaceholder: 'Enter Eolymp username',
		searchButton: 'Search',
		footerMadeBy: 'Made by Azer Aslanov',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'Dark theme',
		themeButtonDark: 'Light theme',
		languageLabel: 'Language',
	},
	az: {
		title: 'Eolymp Hesab İzləyicisi',
		searchPlaceholder: 'Eolymp istifadəçi adını yazın',
		searchButton: 'Axtar',
		footerMadeBy: 'Azer Aslanov tərəfindən',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'Tünd mövzu',
		themeButtonDark: 'Açıq mövzu',
		languageLabel: 'Dil',
	},
	tr: {
		title: 'Eolymp Hesap Takipçisi',
		searchPlaceholder: 'Eolymp kullanıcı adını girin',
		searchButton: 'Ara',
		footerMadeBy: 'Azer Aslanov tarafından',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'Koyu tema',
		themeButtonDark: 'Açık tema',
		languageLabel: 'Dil',
	},
	ru: {
		title: 'Трекер аккаунта Eolymp',
		searchPlaceholder: 'Введите имя пользователя Eolymp',
		searchButton: 'Поиск',
		footerMadeBy: 'Сделано Azer Aslanov',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'Тёмная тема',
		themeButtonDark: 'Светлая тема',
		languageLabel: 'Язык',
	},
	es: {
		title: 'Rastreador de cuentas de Eolymp',
		searchPlaceholder: 'Escribe el usuario de Eolymp',
		searchButton: 'Buscar',
		footerMadeBy: 'Hecho por Azer Aslanov',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'Tema oscuro',
		themeButtonDark: 'Tema claro',
		languageLabel: 'Idioma',
	},
	fr: {
		title: 'Suivi de compte Eolymp',
		searchPlaceholder: 'Entrez le nom d’utilisateur Eolymp',
		searchButton: 'Rechercher',
		footerMadeBy: 'Créé par Azer Aslanov',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'Thème sombre',
		themeButtonDark: 'Thème clair',
		languageLabel: 'Langue',
	},
	de: {
		title: 'Eolymp-Konto-Tracker',
		searchPlaceholder: 'Eolymp-Benutzernamen eingeben',
		searchButton: 'Suchen',
		footerMadeBy: 'Erstellt von Azer Aslanov',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'Dunkles Design',
		themeButtonDark: 'Helles Design',
		languageLabel: 'Sprache',
	},
	it: {
		title: 'Tracker account Eolymp',
		searchPlaceholder: 'Inserisci il nome utente Eolymp',
		searchButton: 'Cerca',
		footerMadeBy: 'Creato da Azer Aslanov',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'Tema scuro',
		themeButtonDark: 'Tema chiaro',
		languageLabel: 'Lingua',
	},
	pt: {
		title: 'Rastreador de conta Eolymp',
		searchPlaceholder: 'Digite o nome de usuário do Eolymp',
		searchButton: 'Buscar',
		footerMadeBy: 'Feito por Azer Aslanov',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'Tema escuro',
		themeButtonDark: 'Tema claro',
		languageLabel: 'Idioma',
	},
	ar: {
		title: 'متتبع حساب Eolymp',
		searchPlaceholder: 'أدخل اسم مستخدم Eolymp',
		searchButton: 'بحث',
		footerMadeBy: 'بواسطة Azer Aslanov',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'الوضع الداكن',
		themeButtonDark: 'الوضع الفاتح',
		languageLabel: 'اللغة',
	},
	ja: {
		title: 'Eolymp アカウントトラッカー',
		searchPlaceholder: 'Eolymp のユーザー名を入力',
		searchButton: '検索',
		footerMadeBy: 'Azer Aslanov 作',
		githubLabel: 'GitHub',
		instagramLabel: 'Instagram',
		themeButtonLight: 'ダークテーマ',
		themeButtonDark: 'ライトテーマ',
		languageLabel: '言語',
	},
};

const htmlElement = document.documentElement;
const bodyElement = document.body;
const languageSelect = document.querySelector('.language-select');
const themeSwitchCheckbox = document.querySelector('.theme-switch__checkbox');
const translatableNodes = document.querySelectorAll('[data-i18n]');
const placeholderNodes = document.querySelectorAll('[data-i18n-placeholder]');

function setThemeToggleLabel(themeName) {
	const isDark = themeName === 'dark';
	if (themeSwitchCheckbox) {
		themeSwitchCheckbox.setAttribute('aria-label', isDark ? currentTranslation.themeButtonDark : currentTranslation.themeButtonLight);
		themeSwitchCheckbox.checked = isDark;
	}
}

function applyLanguage(languageCode) {
	const translation = translations[languageCode] || translations.en;

	htmlElement.lang = languageCode;
	htmlElement.dir = languageCode === 'ar' ? 'rtl' : 'ltr';

	translatableNodes.forEach((node) => {
		const key = node.dataset.i18n;
		if (translation[key]) {
			node.textContent = translation[key];
		}
	});

	placeholderNodes.forEach((node) => {
		const key = node.dataset.i18nPlaceholder;
		if (translation[key]) {
			node.setAttribute('placeholder', translation[key]);
		}
	});

	document.title = translation.title;
	setThemeToggleLabel(bodyElement.dataset.theme || 'light');
}

function applyTheme(themeName) {
	const isDark = themeName === 'dark';
	bodyElement.dataset.theme = themeName;
	setThemeToggleLabel(themeName);
	localStorage.setItem('welcome-theme', themeName);
}

const savedLanguage = localStorage.getItem('welcome-language') || 'en';
const savedTheme = localStorage.getItem('welcome-theme') || 'light';

let currentTranslation = translations[savedLanguage] || translations.en;
if (languageSelect) languageSelect.value = translations[savedLanguage] ? savedLanguage : 'en';

applyLanguage(languageSelect ? languageSelect.value : savedLanguage);
applyTheme(savedTheme);

if (languageSelect) {
	languageSelect.addEventListener('change', () => {
		currentTranslation = translations[languageSelect.value] || translations.en;
		applyLanguage(languageSelect.value);
		applyTheme(bodyElement.dataset.theme || 'light');
		localStorage.setItem('welcome-language', languageSelect.value);
	});
}

if (themeSwitchCheckbox) {
	themeSwitchCheckbox.addEventListener('change', () => {
		applyTheme(themeSwitchCheckbox.checked ? 'dark' : 'light');
	});
}

// --- Simple offline-friendly search + results rendering ---
// Prefer header search if present
const searchInput = document.querySelector('.site-header .search input') || document.querySelector('.search input');
const searchButton = document.querySelector('.site-header .search button') || document.querySelector('.search button');
let resultsContainer = document.getElementById('results');
if (!resultsContainer) {
	const main = document.querySelector('main.site-main') || document.querySelector('main');
	if (main) {
		resultsContainer = document.createElement('div');
		resultsContainer.id = 'results';
		resultsContainer.className = 'results';
		resultsContainer.setAttribute('aria-live', 'polite');
		main.appendChild(resultsContainer);
	}
}

// Sample data used when there's no API available (works with file:// previews)
const sampleProfiles = [
	{
		username: 'azer_ui',
		fullName: 'Azer Aslanov',
		avatar: 'https://eolympusercontent.com/images/7fk5pdpbbt1m5bel5288k755nk.png',
		solved: 342,
		rank: 'Expert',
		profileUrl: 'https://www.e-olymp.com/en/users/azer_ui'
	},
	{
		username: 'student123',
		fullName: 'Student OneTwoThree',
		avatar: '',
		solved: 27,
		rank: 'Beginner',
		profileUrl: 'https://www.e-olymp.com/en/users/student123'
	}
];

function performSearch(query) {
	// Simulate network latency and return approximate matches from sampleProfiles
	return new Promise((resolve) => {
		setTimeout(() => {
			if (!query || query.trim().length === 0) {
				resolve([]);
				return;
			}
			const q = query.toLowerCase().trim();
			const matches = sampleProfiles.filter(p => p.username.toLowerCase().includes(q) || (p.fullName || '').toLowerCase().includes(q));
			resolve(matches);
		}, 420);
	});
}

function clearResults() {
	resultsContainer.innerHTML = '';
}

function renderNoResults(query) {
	resultsContainer.innerHTML = `<div class="profile-card"><div class="profile-meta"><div class="name">No results</div><div class="details">No profiles matched "${escapeHtml(query)}".</div></div></div>`;
}

function escapeHtml(s) {
	return String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c]));
}

function renderResults(profiles) {
	clearResults();
	if (!profiles || profiles.length === 0) return;
	const fragment = document.createDocumentFragment();
	profiles.forEach(p => {
		const card = document.createElement('div');
		card.className = 'profile-card';

		const avatar = document.createElement('img');
		avatar.className = 'profile-avatar';
		avatar.alt = p.fullName || p.username;
		avatar.src = p.avatar || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="68" height="68"><rect width="100%" height="100%" fill="%23e9eef8"/></svg>';

		const meta = document.createElement('div');
		meta.className = 'profile-meta';
		const name = document.createElement('div');
		name.className = 'name';
		name.textContent = p.fullName || p.username;
		const details = document.createElement('div');
		details.className = 'details';
		details.textContent = `${p.username} • ${p.rank} • ${p.solved} solved`;

		meta.appendChild(name);
		meta.appendChild(details);

		const actions = document.createElement('div');
		actions.className = 'profile-actions';
		const view = document.createElement('a');
		view.href = p.profileUrl || '#';
		view.target = '_blank';
		view.rel = 'noopener noreferrer';
		view.textContent = currentTranslation && currentTranslation.searchButton ? 'View' : 'View';

		actions.appendChild(view);

		card.appendChild(avatar);
		card.appendChild(meta);
		card.appendChild(actions);

		fragment.appendChild(card);
	});
	resultsContainer.appendChild(fragment);
}

async function handleSearch() {
	const q = searchInput.value || '';
	clearResults();
	resultsContainer.innerHTML = `<div class="profile-card"><div class="profile-meta"><div class="name">Searching…</div></div></div>`;
	const results = await performSearch(q);
	clearResults();
	if (!results || results.length === 0) {
		renderNoResults(q);
		return;
	}
	renderResults(results);
}

if (searchButton) searchButton.addEventListener('click', handleSearch);
if (searchInput) searchInput.addEventListener('keydown', (ev) => {
	if (ev.key === 'Enter') handleSearch();
});

// Internationalize static strings inside results if language changes
if (languageSelect) {
	languageSelect.addEventListener('change', () => {
		// re-run a search if there's a query to refresh labels
		if (searchInput && searchInput.value && searchInput.value.trim().length > 0) {
			handleSearch();
		}
	});
}
