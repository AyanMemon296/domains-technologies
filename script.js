/* --- Data Dictionary --- */
const projectData = {
    tabs: [
        { id: 'languages', label: 'Languages' },
        { id: 'web-dev', label: 'Web Development' },
        { id: 'mobile-dev', label: 'Mobile App Development' },
        { id: 'data-science', label: 'Data Science' },
        { id: 'ai-ml', label: 'AI / ML' },
        { id: 'tools', label: 'Tools' }
    ],
    items: {
        'languages': [
            { name: 'Python', icon: 'devicon-python-plain' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain' },
            { name: 'SQL', icon: 'devicon-sqldeveloper-plain' },
            { name: 'Dart', icon: 'devicon-dart-plain' },
            { name: 'Java', icon: 'devicon-java-plain' },
            { name: 'Kotlin', icon: 'devicon-kotlin-plain' },
            { name: 'Swift', icon: 'devicon-swift-plain' },
            { name: 'C', icon: 'devicon-c-original' },
            { name: 'C++', icon: 'devicon-cplusplus-plain' },
            { name: 'C#', icon: 'devicon-csharp-plain' },
            { name: 'PHP', icon: 'devicon-php-plain' },
            { name: 'Ruby', icon: 'devicon-ruby-plain' },
            { name: 'Go', icon: 'devicon-go-plain' },
            { name: 'Rust', icon: 'devicon-rust-plain' },
            { name: 'R', icon: 'devicon-r-plain' }
        ],
        'web-dev': [
            { name: 'HTML', icon: 'devicon-html5-plain' },
            { name: 'CSS', icon: 'devicon-css3-plain' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain' },
            { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
            { name: 'React', icon: 'devicon-react-original' },
            { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
            { name: 'Svelte', icon: 'devicon-svelte-plain' },
            { name: 'Angular', icon: 'devicon-angularjs-plain' },
            { name: 'Express.js', icon: 'devicon-express-original' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain' },
            { name: 'Next.js', icon: 'devicon-nextjs-plain' },
            { name: 'Nuxt.js', icon: 'devicon-nuxtjs-plain' },
            { name: 'NestJS', icon: 'devicon-nestjs-plain' },
            { name: 'Fastify', icon: 'devicon-fastify-plain' },
            { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
            { name: 'Flask', icon: 'devicon-flask-original' },
            { name: 'Django', icon: 'devicon-django-plain' },
            { name: 'REST APIs', icon: 'devicon-djangorest-plain' },
            { name: 'GraphQL', icon: 'devicon-graphql-plain' },
            { name: 'Swagger', icon: 'devicon-swagger-plain' },
            { name: 'Postman', icon: 'devicon-postman-plain' },
            { name: 'Insomnia', icon: 'devicon-insomnia-plain' },
            { name: 'GSAP', icon: 'si-greensock' },
            { name: 'Three.js', icon: 'devicon-threejs-original' },
            { name: 'SQLite', icon: 'devicon-sqlite-plain' },
            { name: 'MySQL', icon: 'devicon-mysql-plain' },
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
            { name: 'Supabase', icon: 'devicon-supabase-plain' },
            { name: 'Firebase Firestore', icon: 'devicon-firebase-plain' },
            { name: 'Redis', icon: 'devicon-redis-plain' },
            { name: 'GitHub Pages', icon: 'devicon-github-original' },
            { name: 'Cloudflare Pages', icon: 'devicon-cloudflare-plain' },
            { name: 'Vercel', icon: 'devicon-vercel-original' },
            { name: 'Netlify', icon: 'devicon-netlify-plain' }
        ],
        'mobile-dev': [
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain' },
            { name: 'Dart', icon: 'devicon-dart-plain' },
            { name: 'Java', icon: 'devicon-java-plain' },
            { name: 'Kotlin', icon: 'devicon-kotlin-plain' },
            { name: 'Swift', icon: 'devicon-swift-plain' },
            { name: 'Android Studio', icon: 'devicon-androidstudio-plain' },
            { name: 'Xcode', icon: 'devicon-xcode-plain' },
            { name: 'Flutter', icon: 'devicon-flutter-plain' },
            { name: 'React Native', icon: 'devicon-react-original' },
            { name: '.NET MAUI', icon: 'si-dotnet' },
            { name: 'NativeScript', icon: 'si-nativescript' },
            { name: 'Ionic', icon: 'devicon-ionic-original' },
            { name: 'Kotlin Multiplatform (KMP)', icon: 'devicon-kotlin-plain' },
            { name: 'Jetpack Compose', icon: 'devicon-jetpackcompose-plain' },
            { name: 'SwiftUI', icon: 'devicon-swift-plain' },
            { name: 'FlutterFlow', icon: 'devicon-flutter-plain' },
            { name: 'Expo', icon: 'devicon-expo-original' },
            { name: 'Play Store', icon: 'si-googleplay' },
            { name: 'App Store', icon: 'si-appstore' }
        ],
        'data-science': [
            { name: 'MS Excel', icon: 'lucide-file-spreadsheet' },
            { name: 'Kaggle', icon: 'devicon-kaggle-plain' },
            { name: 'Google Colab', icon: 'devicon-googlecolab-plain' },
            { name: 'Jupyter Notebooks', icon: 'devicon-jupyter-plain' },
            { name: 'Python', icon: 'devicon-python-plain' },
            { name: 'R', icon: 'devicon-r-plain' },
            { name: 'NumPy', icon: 'devicon-numpy-plain' },
            { name: 'SciPy', icon: 'si-scipy' },
            { name: 'Pandas', icon: 'devicon-pandas-plain' },
            { name: 'Matplotlib', icon: 'devicon-matplotlib-plain' },
            { name: 'Seaborn', icon: 'lucide-waves' },
            { name: 'Plotly', icon: 'devicon-plotly-plain' },
            { name: 'Tableau', icon: 'lucide-plus' },
            { name: 'Power BI', icon: 'lucide-chart-no-axes-column-increasing' },
            { name: 'Hadoop', icon: 'devicon-hadoop-plain' },
            { name: 'Hive', icon: 'si-apachehive' },
            { name: 'Apache Spark', icon: 'devicon-apachespark-original' },
            { name: 'Snowflake', icon: 'si-snowflake' },
            { name: 'Databricks', icon: 'si-databricks' }
        ],
        'ai-ml': [
            { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain' },
            { name: 'XGBoost', icon: 'lucide-arrow-big-up-dash' },
            { name: 'NLTK', icon: 'devicon-python-plain' },
            { name: 'spaCy', icon: 'si-spacy' },
            { name: 'OpenCV', icon: 'devicon-opencv-plain' },
            { name: 'Keras', icon: 'devicon-keras-plain' },
            { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
            { name: 'PyTorch', icon: 'devicon-pytorch-original' },
            { name: 'YOLO', icon: 'lucide-scan-eye' },
            { name: 'Transformers', icon: 'lucide-layers' },
            { name: 'Hugging Face', icon: 'si-huggingface' },
            { name: 'LLMs (Large Language Models)', icon: 'lucide-brain-circuit' },
            { name: 'SLMs (Small Language Models)', icon: 'lucide-microscope' },
            { name: 'LangChain', icon: 'si-langchain' },
            { name: 'LangGraph', icon: 'si-langgraph' },
            { name: 'MCP (Model Context Protocol)', icon: 'si-modelcontextprotocol' }
        ],
        'tools': [
            { name: 'Git', icon: 'devicon-git-plain' },
            { name: 'GitHub', icon: 'devicon-github-original' },
            { name: 'GitHub Copilot', icon: 'si-githubcopilot' },
            { name: 'VS Code', icon: 'devicon-vscode-plain' },
            { name: 'Visual Studio', icon: 'devicon-visualstudio-plain' },
            { name: 'Zed', icon: 'si-zedindustries' },
            { name: 'Antigravity', icon: 'lucide-rocket' },
            { name: 'Cursor', icon: 'si-cursor' },
            { name: 'Windsurf', icon: 'si-windsurf' },
            { name: 'Kiro', icon: 'lucide-ghost' },
            { name: 'ChatGPT', icon: 'lucide-bot' },
            { name: 'Gemini', icon: 'si-googlegemini' },
            { name: 'Claude', icon: 'si-claude' },
            { name: 'Qwen', icon: 'lucide-orbit' },
            { name: 'DeepSeek', icon: 'lucide-circle-dot' },
            { name: 'Grok', icon: 'lucide-circle-off' },
            { name: 'Manus', icon: 'lucide-hand' },
            { name: 'Perplexity', icon: 'si-perplexity' },
            { name: 'Lovable', icon: 'lucide-heart' },
            { name: 'Stitch', icon: 'lucide-flask-conical' },
            { name: 'Figma', icon: 'si-figma' },
            { name: 'Canva', icon: 'devicon-canva-original' },
            { name: 'Notion', icon: 'devicon-notion-plain' },
            { name: 'Docker', icon: 'devicon-docker-plain' },
            { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' }
        ]
    }
};

/* --- State --- */
let currentTheme = localStorage.getItem('theme') || 'light';
let activeTabId = 'languages';
let searchQuery = '';

/* --- DOM Elements --- */
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const navTabsContainer = document.getElementById('nav-tabs');
const techGrid = document.getElementById('tech-grid');
const searchInput = document.getElementById('search-input');
const noResults = document.getElementById('no-results');

/* --- Initialization --- */
function init() {
    initTheme();
    renderTabs();
    initEventListeners();
    
    // Initial Render
    switchTab(activeTabId, false);
    
    // Initialize Lucide icons
    lucide.createIcons();
}

/* --- Theme Logic --- */
function initTheme() {
    htmlElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    // Freshly select the icon element because it gets replaced by Lucide SVG
    // Replacing the parent's innerHTML with a fresh <i> tag to ensure Lucide swaps it
    themeToggleBtn.innerHTML = '';
    const newIcon = document.createElement('i');
    newIcon.id = 'theme-icon';
    
    if (currentTheme === 'light') {
        newIcon.setAttribute('data-lucide', 'sun');
    } else {
        newIcon.setAttribute('data-lucide', 'moon');
    }
    
    themeToggleBtn.appendChild(newIcon);
    
    // Re-render lucide icon
    lucide.createIcons();
}

/* --- Navigation Logic --- */
function renderTabs() {
    navTabsContainer.innerHTML = '';
    projectData.tabs.forEach((tab) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = `tab-btn ${tab.id === activeTabId ? 'active' : ''}`;
        btn.textContent = tab.label;
        btn.onclick = () => switchTab(tab.id);
        
        li.appendChild(btn);
        navTabsContainer.appendChild(li);
    });
}

function switchTab(tabId, animate = true) {
    if (activeTabId === tabId && animate) return; // Ignore if already active
    
    activeTabId = tabId;
    searchInput.value = ''; // Clear search on tab switch
    searchQuery = '';
    
    // Update Active Class
    const buttons = navTabsContainer.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        if (btn.textContent === projectData.tabs.find(t => t.id === tabId).label) {
            btn.classList.add('active');
            // Scroll to the active button a bit to keep it centered
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            btn.classList.remove('active');
        }
    });

    if (animate) {
        // GSAP animate out
        gsap.to('.tech-card', {
            opacity: 0,
            y: 10,
            duration: 0.2,
            stagger: 0.02,
            onComplete: () => renderCards(true)
        });
    } else {
        renderCards(true);
    }
}

/* --- Card Rendering Logic --- */
function renderCards(animateIn = false) {
    techGrid.innerHTML = '';
    
    const allItems = projectData.items[activeTabId];
    const filteredItems = allItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery)
    );

    if (filteredItems.length === 0) {
        techGrid.style.display = 'none';
        noResults.style.display = 'flex';
    } else {
        techGrid.style.display = 'grid';
        noResults.style.display = 'none';
        
        filteredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'tech-card';
            
            // Icon handling (Lucide vs Devicon vs Simple-Icons)
            let iconHTML = '';
            if (item.icon.startsWith('lucide-')) {
                const lucideIconName = item.icon.replace('lucide-', '');
                iconHTML = `<i data-lucide="${lucideIconName}"></i>`;
            } else if (item.icon.startsWith('si-')) {
                const slug = item.icon.replace('si-', '');
                iconHTML = `<img src="https://cdn.simpleicons.org/${slug}" alt="${item.name}" class="si-icon" onerror="this.onerror=null; this.src=''; this.outerHTML='<i data-lucide=\\'cpu\\'></i>'; lucide.createIcons();">`;
            } else {
                iconHTML = `<i class="${item.icon}"></i>`;
            }

            card.innerHTML = `
                <div class="card-icon">
                    ${iconHTML}
                </div>
                <h3>${item.name}</h3>
            `;
            
            techGrid.appendChild(card);
        });

        // Re-init lucide icons for newly added cards
        lucide.createIcons();

        if (animateIn) {
            gsap.fromTo('.tech-card', 
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.03, ease: 'power2.out' }
            );
        }
    }
}

/* --- Event Listeners --- */
function initEventListeners() {
    themeToggleBtn.addEventListener('click', toggleTheme);
    
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderCards(true); // Animate the filtered result
    });
}

// Boot up
document.addEventListener('DOMContentLoaded', init);
