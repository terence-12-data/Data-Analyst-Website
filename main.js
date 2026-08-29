const TOOLS=[
  {num:'01',name:'Pareto Chart',diff:'Beginner',dc:'bg2',use:'Identify top revenue-generating products using the 80/20 rule',time:'60 mins',status:'Published',sc:'bg2',cats:['excel','visualization','business'],tags:['Excel','Visualization','Business'],top:true,linkedinUrl:''},
  {num:'02',name:'Box Plot Analysis',diff:'Intermediate',dc:'by',use:'Detect outliers in sales data and understand distribution',time:'90 mins',status:'Published',sc:'bg2',cats:['excel','statistics','visualization'],tags:['Excel','Statistics'],linkedinUrl:''},
  {num:'03',name:'Waterfall Chart',diff:'Beginner',dc:'bg2',use:'Visualize profit & loss breakdown month by month',time:'45 mins',status:'Published',sc:'bg2',cats:['excel','visualization','finance'],tags:['Excel','Finance','Visualization'],linkedinUrl:''},
  {num:'04',name:'ABC Analysis',diff:'Intermediate',dc:'by',use:'Classify inventory by revenue contribution (A, B, C categories)',time:'75 mins',status:'Published',sc:'bg2',cats:['excel','business','finance'],tags:['Excel','Business','Finance'],linkedinUrl:''},
  {num:'05',name:'Linear Regression',diff:'Advanced',dc:'bv',use:'Predict future sales based on historical trends',time:'120 mins',status:'Published',sc:'bg2',cats:['excel','statistics','business'],tags:['Excel','Statistics','Business'],linkedinUrl:''},
  {num:'06',name:'Power BI KPI Dashboard',diff:'Intermediate',dc:'by',use:'Build an executive-level KPI monitoring dashboard',time:'150 mins',status:'Published',sc:'bg2',cats:['powerbi','visualization','business'],tags:['Power BI','Visualization'],linkedinUrl:''},
  {num:'07',name:'Cohort Analysis',diff:'Advanced',dc:'bv',use:'Track customer retention over time by acquisition cohort',time:'180 mins',status:'Coming Soon',sc:'bgr2',cats:['excel','statistics','business'],tags:['Excel','Business','Statistics'],linkedinUrl:''},
  {num:'08',name:'Control Charts (SPC)',diff:'Advanced',dc:'bv',use:'Monitor manufacturing process quality and detect variations',time:'120 mins',status:'Coming Soon',sc:'bgr2',cats:['excel','statistics'],tags:['Excel','Statistics'],linkedinUrl:''},
  {num:'09',name:'Power BI DAX Mastery',diff:'Advanced',dc:'bv',use:'Write complex DAX measures for business intelligence reporting',time:'200 mins',status:'Coming Soon',sc:'bgr2',cats:['powerbi','business'],tags:['Power BI','Business'],linkedinUrl:''},
  {num:'10',name:'Histogram & Frequency Distribution',diff:'Beginner',dc:'bg2',use:'Visualize how data is distributed across ranges and spot skewness at a glance',time:'45 mins',status:'Published',sc:'bg2',cats:['excel','statistics','visualization'],tags:['Excel','Statistics','Visualization'],top:true,linkedinUrl:''},
  {num:'11',name:'Scatter Plot & Trendline',diff:'Beginner',dc:'bg2',use:'Explore the relationship between two variables and spot correlation patterns',time:'40 mins',status:'Published',sc:'bg2',cats:['excel','statistics','visualization'],tags:['Excel','Statistics','Visualization'],top:true,linkedinUrl:''}
];

const RESOURCES=[
  {name:'Excel Templates',desc:'Ready-to-use Excel workbooks for common business analyses',icon:'table-2',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'12 files',link:'free-resources.html?cat=excel-templates'},
  {name:'Practice Datasets',desc:'Clean datasets from real-world scenarios for hands-on practice',icon:'database',color:'#2563EB',bg:'rgba(37,99,235,.1)',count:'8 datasets',link:'free-resources.html?cat=practice-datasets'},
  {name:'Cheat Sheets',desc:'Quick-reference cards for Excel functions, DAX, and statistics',icon:'file-text',color:'#8B5CF6',bg:'rgba(139,92,246,.1)',count:'3 sheets',link:'free-resources.html?cat=cheat-sheets'},
  {name:'Business Case Studies',desc:'Step-by-step walkthroughs of real analytics business problems',icon:'briefcase',color:'#F59E0B',bg:'rgba(245,158,11,.1)',count:'5 cases',link:'free-resources.html?cat=case-studies'},
  {name:'Dashboard Themes',desc:'Professionally designed Power BI and Excel color themes',icon:'palette',color:'#EC4899',bg:'rgba(236,72,153,.1)',count:'4 themes',link:'free-resources.html?cat=dashboard-themes'},
  {name:'Icon Packs',desc:'Analytics and business icon sets for your dashboards',icon:'shapes',color:'#06B6D4',bg:'rgba(6,182,212,.1)',count:'200+ icons',link:'free-resources.html?cat=icon-packs'}
];


// ============================================================
// MARKETPLACE
// ============================================================

const MARKET=[
  {
    type:'dashboard',
    cat:'football',
    name:'FIFA Goals Dashboard',
    badge:'⚽ Football',
    badgeClass:'bg2',
    img:'assets/images/fifa_dashboard.jpg',
    desc:'A comprehensive football analytics dashboard built in Power BI. Explore global goal statistics, top scorers, and goal trends across major leagues from 2018–2023.',
    features:[
      'Interactive world map with goal counts',
      'Top scorers & assists leaderboard',
      'Goal trend line chart (2018–2023)',
      'League-wise breakdown',
      'Drill-through filters included'
    ],
    price:'599',
    buyUrl:'https://rebellotter.gumroad.com/l/worldcup2026-dashboard',
    previewCta:'FIFA Goals Dashboard preview'
  },

  {
    type:'dashboard',
    cat:'cricket',
    name:'IPL 2024 Dashboard',
    badge:'🏏 Cricket',
    badgeClass:'bo',
    img:'assets/images/ipl_dashboard.jpg',
    desc:'A deep-dive IPL 2024 season analytics dashboard. Covers batting, bowling, match results, and team performance across all 70 matches of the season.',
    features:[
      'Top run scorers & strike rates',
      'Team win percentage donut chart',
      'Batsman performance scatter plot',
      'Match-level drill-through',
      'Full season stats coverage'
    ],
    price:'599',
    buyUrl:'https://rebellotter.gumroad.com/l/IPLSixesAnalyticsDashboardPowerBI',
    previewCta:'IPL 2024 Dashboard preview'
  }
];


// ============================================================
// FREE RESOURCES (separate page — free-resources.html)
// ============================================================

const FREE_RESOURCES=[
  {cat:'excel-templates',name:'Employee Timesheet',desc:'Track daily hours, breaks, and overtime for your team in one clean sheet.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Employee-Timesheet.xlsx'},
  {cat:'excel-templates',name:'Event & Wedding Budget Planner',desc:'Plan and track every expense for weddings or big events, category by category.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Event-Wedding-Budget-Planner.xlsx'},
  {cat:'excel-templates',name:'Health & Medication Tracker',desc:'Log medications, dosages, and schedules so nothing gets missed.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Health-Medication-Tracker.xlsx'},
  {cat:'excel-templates',name:'Invoice Generator',desc:'Create professional invoices with automatic totals and tax calculations.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Invoice-Generator.xlsx'},
  {cat:'excel-templates',name:'Job Application Tracker',desc:'Track every application, interview stage, and follow-up in one place.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Job-Application-Tracker.xlsx'},
  {cat:'excel-templates',name:'Loan / EMI Calculator',desc:'Calculate monthly EMIs and see a full amortization breakdown instantly.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Loan-EMI-Calculator.xlsx'},
  {cat:'excel-templates',name:'Meal Planner & Grocery List',desc:'Plan weekly meals and auto-generate your grocery list.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Meal-Planner-Grocery-List.xlsx'},
  {cat:'excel-templates',name:'Monthly Budget Planner',desc:'Track income, expenses, and savings goals month by month.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Monthly-Budget-Planner.xlsx'},
  {cat:'excel-templates',name:'Monthly Habit Tracker',desc:'Build and track daily habits with a simple monthly grid.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Monthly-Habit-Tracker.xlsx'},
  {cat:'excel-templates',name:'Net Worth & Investment Tracker',desc:'Track assets, liabilities, and investments to monitor your net worth over time.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Net-Worth-Investment-Tracker.xlsx'},
  {cat:'excel-templates',name:'Student Grade Tracker',desc:'Track assignments, grades, and GPA across subjects and semesters.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Student-Grade-Tracker.xlsx'},
  {cat:'excel-templates',name:'Subscription Tracker',desc:'Keep tabs on every recurring subscription and what it\'s costing you.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Subscription-Tracker.xlsx'},
  {cat:'excel-templates',name:'Task Manager & To-Do List',desc:'A simple prioritized to-do list with due dates and status tracking.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Task-Manager-ToDo-List.xlsx'},
  {cat:'excel-templates',name:'Travel & Trip Planner',desc:'Plan itineraries, budgets, and packing lists for your next trip.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Travel-Trip-Planner.xlsx'},
  {cat:'excel-templates',name:'Vehicle Maintenance Log',desc:'Log services, repairs, and mileage to stay on top of vehicle upkeep.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Vehicle-Maintenance-Log.xlsx'},
  {cat:'excel-templates',name:'Workout & Fitness Tracker',desc:'Log workouts, sets, reps, and progress toward your fitness goals.',icon:'file-spreadsheet',color:'#10B981',bg:'rgba(16,185,129,.1)',count:'XLSX',downloadUrl:'assets/excel-templates/Workout-Fitness-Tracker.xlsx'},

  {
    cat:'practice-datasets',
    name:'Practice Datasets',
    desc:'Clean datasets from real-world scenarios for hands-on practice',
    icon:'database',
    color:'#2563EB',
    bg:'rgba(37,99,235,.1)',
    count:'8 datasets'
  },

  {
    cat:'cheat-sheets',
    name:'Excel Functions Cheat Sheet',
    desc:'The 15 functions that cover 90% of everyday spreadsheet work — SUM, IF, VLOOKUP, INDEX+MATCH and more, with plain-English examples.',
    icon:'file-text',
    color:'#10B981',
    bg:'rgba(16,185,129,.1)',
    count:'2 pages · PDF',
    diff:'Beginner',
    diffClass:'bg2',
    downloadUrl:'assets/pdfs/excel-functions-cheatsheet-beginner.pdf'
  },

  {
    cat:'cheat-sheets',
    name:'DAX & Power Query Cheat Sheet',
    desc:'The bridge from Excel into Power BI — Power Query transformations plus core DAX functions like CALCULATE, SUMX, and time intelligence.',
    icon:'file-text',
    color:'#F59E0B',
    bg:'rgba(245,158,11,.1)',
    count:'2 pages · PDF',
    diff:'Intermediate',
    diffClass:'by',
    downloadUrl:'assets/pdfs/dax-powerquery-cheatsheet-intermediate.pdf'
  },

  {
    cat:'cheat-sheets',
    name:'Statistical Analysis Cheat Sheet',
    desc:'The statistics concepts analysts actually need — correlation vs. causation, hypothesis testing, choosing the right test, and common traps.',
    icon:'file-text',
    color:'#8B5CF6',
    bg:'rgba(139,92,246,.1)',
    count:'3 pages · PDF',
    diff:'Advanced',
    diffClass:'bv',
    downloadUrl:'assets/pdfs/statistics-cheatsheet-advanced.pdf'
  },

  {
    cat:'case-studies',
    name:'Business Case Studies',
    desc:'Step-by-step walkthroughs of real analytics business problems',
    icon:'briefcase',
    color:'#F59E0B',
    bg:'rgba(245,158,11,.1)',
    count:'5 cases'
  },

  {
    cat:'dashboard-themes',
    name:'Dashboard Themes',
    desc:'Professionally designed Power BI and Excel color themes',
    icon:'palette',
    color:'#EC4899',
    bg:'rgba(236,72,153,.1)',
    count:'4 themes'
  },

  {
    cat:'icon-packs',
    name:'Icon Packs',
    desc:'Analytics and business icon sets for your dashboards',
    icon:'shapes',
    color:'#06B6D4',
    bg:'rgba(6,182,212,.1)',
    count:'200+ icons',
    downloadUrl:'assets/svg/icon-pack.zip'
}
];


function renderMarket(f='all',s=''){

  const g=document.getElementById('market-grid');

  if(!g)return;

  const fl=MARKET.filter(m=>{

    const mf=f==='all'||m.cat===f;

    const ms=
      !s||
      m.name.toLowerCase().includes(s.toLowerCase())||
      m.desc.toLowerCase().includes(s.toLowerCase());

    return mf&&ms;

  });

  if(!fl.length){

    g.innerHTML=`
      <div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text3)">
        <p style="font-size:2rem;margin-bottom:12px">🔍</p>
        <p>No products found.</p>
      </div>
    `;

    return;
  }

  g.innerHTML=fl.map(m=>`
    <div class="dc">

      <div class="dp">
        <img src="${m.img}" alt="${m.name}" loading="lazy" />
        <div class="dpo"></div>

        <div class="dpb">
          <span class="bdg ${m.badgeClass}">${m.badge}</span>
        </div>
      </div>

      <div class="db">

        <h3 class="dn">${m.name}</h3>

        <p class="dd">${m.desc}</p>

        <div class="dff">
          ${m.features.map(ft=>
            `<div class="df">
              <i data-lucide="check"></i> ${ft}
            </div>`
          ).join('')}
        </div>

        <div class="dft">

          <div class="dpr">
            <span class="cur">₹</span>${m.price}
          </div>

          <div class="das">

            <button class="btn bg bsm" data-cta="${m.previewCta}">
              <i data-lucide="eye"></i> Preview
            </button>

            <a href="${m.buyUrl}" target="_blank" rel="noopener" class="btn bp bsm">
              <i data-lucide="shopping-cart"></i> Buy Now
            </a>

          </div>

        </div>

      </div>

    </div>
  `).join('');

  lucide.createIcons();
  obsv();
}


// ============================================================
// FREE RESOURCES PAGE RENDERING
// ============================================================

function renderFreeResources(f='all',s=''){

  const g=document.getElementById('free-grid');

  if(!g)return;

  const fl=FREE_RESOURCES.filter(m=>{
    const mf=f==='all'||m.cat===f;
    const ms=
      !s||
      m.name.toLowerCase().includes(s.toLowerCase())||
      m.desc.toLowerCase().includes(s.toLowerCase());

    return mf&&ms;
  });

  if(!fl.length){
    g.innerHTML=`
      <div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text3)">
        <p style="font-size:2rem;margin-bottom:12px">🔍</p>
        <p>No resources found.</p>
      </div>
    `;
    return;
  }

  g.innerHTML=fl.map(m=>{

    const diffBadge=m.diff
      ?`<span class="bdg ${m.diffClass}" style="margin-bottom:8px;">${m.diff}</span>`
      :'';

    const actionBtn=m.downloadUrl

      ?`<a href="${m.downloadUrl}" download class="btn bp bsm">
          <i data-lucide="download"></i> Download
        </a>`

      :`<button class="btn bp bsm" data-cta="${m.name}">
          <i data-lucide="download"></i> Download
        </button>`;

    return `
      <div class="rc">

        <div class="ri" style="background:${m.bg}">
          <i data-lucide="${m.icon}" style="color:${m.color};width:22px;height:22px"></i>
        </div>

        <div>
          ${diffBadge}
          <div class="rn">${m.name}</div>
          <div class="rd">${m.desc}</div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:auto">

          <div class="rm">
            <i data-lucide="file" style="width:13px;height:13px;color:var(--text3)"></i>
            ${m.count}
          </div>

          ${actionBtn}

        </div>

      </div>
    `;

  }).join('');

  lucide.createIcons();
  obsv();
}


// ============================================================
// SERVICES / BLOG / TESTIMONIALS / SKILLS
// ============================================================

const SERVICES=[
  {name:'Dashboard Development',desc:'End-to-end Power BI and Excel dashboards tailored to your KPIs and business questions.',icon:'layout-dashboard'},
  {name:'Power BI Reports',desc:'Interactive reports with drill-throughs, bookmarks, and mobile-friendly layouts.',icon:'bar-chart-2'},
  {name:'Excel Automation',desc:'VBA macros, Power Query, and formula-driven workbooks to eliminate manual reporting.',icon:'zap'},
  {name:'Data Cleaning & ETL',desc:'Transform messy raw data into clean, analysis-ready datasets using Power Query.',icon:'filter'},
  {name:'Business Analytics',desc:'KPI definition, metric tracking, and insight generation for data-driven decisions.',icon:'trending-up'},
  {name:'Data Consultation',desc:'Strategy sessions to identify analytics opportunities and tools for your team.',icon:'message-circle'}
];

const BLOGS=[
  {cat:'Carousel',date:'Jul 2025',title:'The Pareto Principle Explained for Business Analysts',desc:'How to use the 80/20 rule to prioritize focus and maximize business impact.',icon:'bar-chart'},
  {cat:'Dashboard',date:'Jun 2025',title:'How I Built the FIFA Goals Dashboard in Power BI',desc:'A behind-the-scenes look at the data model, DAX measures, and design decisions.',icon:'layout-dashboard'},
  {cat:'Tutorial',date:'May 2025',title:'Power Query vs VBA: When to Use Which',desc:'A practical guide to choosing the right data transformation tool for your Excel workflow.',icon:'code'}
];

const TESTS=[
  {q:"Terence's Pareto Chart carousel was the clearest explanation I've ever seen. Applied it to my sales data the same day!",n:'Priya S.',r:'Sales Analyst, Mumbai',i:'P'},
  {q:'The FIFA Dashboard is absolutely stunning. Great work on the data model and the visual design. Worth every rupee.',n:'Rahul M.',r:'Data Enthusiast, Bangalore',i:'R'},
  {q:'Finally someone explaining analytics for real business problems, not just theory. The toolbox is exactly what I needed.',n:'Anjali K.',r:'Business Analyst, Delhi',i:'A'}
];

const SKILLS=[
  {n:'Microsoft Excel',p:92},
  {n:'Power BI & DAX',p:85},
  {n:'Data Visualization',p:88},
  {n:'Business Analytics',p:80},
  {n:'Statistical Analysis',p:72}
];

const CMDS=[
  {l:"The Analyst's Toolbox",d:'Browse all analytical tools',i:'package-open',h:'toolbox.html'},
  {l:'Marketplace',d:'Paid dashboards',i:'store',h:'marketplace.html'},
  {l:'Dashboards',d:'FIFA, IPL & more',i:'layout-dashboard',h:'#dashboards'},
  {l:'Free Resources',d:'Templates, datasets, cheat sheets',i:'download',h:'free-resources.html'},
  {l:'About Terence',d:'Background & skills',i:'user',h:'#about'},
  {l:'Work With Me',d:'Services & collaboration',i:'briefcase',h:'#work-with-me'},
  {l:'Contact',d:'Get in touch',i:'mail',h:'#contact'},
  {l:'Support',d:'Buy me a coffee',i:'heart',h:'#sup'},
  {l:'Pareto Chart',d:'Tool #01 · Excel · Beginner',i:'bar-chart',h:'toolbox.html'},
  {l:'FIFA Goals Dashboard',d:'₹599 · Power BI',i:'layout-dashboard',h:'marketplace.html'},
  {l:'IPL 2024 Dashboard',d:'₹599 · Power BI',i:'layout-dashboard',h:'marketplace.html'},
  {l:'Learning Roadmap',d:'Beginner to Analytics Expert',i:'map',h:'#learning-path'},
  {l:'LinkedIn',d:'Follow on LinkedIn',i:'linkedin',h:'https://linkedin.com/in/terencerebello'}
];

const RA=[
  {title:'IPL 2024 Dashboard',meta:'Power BI · Added Jul 2025',icon:'layout-dashboard',color:'#F97316',bg:'rgba(249,115,22,.1)'},
  {title:'Cohort Analysis Template',meta:'Excel · Added Jun 2025',icon:'table-2',color:'#10B981',bg:'rgba(16,185,129,.1)'},
  {title:'Power Query Cheat Sheet',meta:'PDF · Added May 2025',icon:'file-text',color:'#8B5CF6',bg:'rgba(139,92,246,.1)'}
];

const MD=[
  {title:'Pareto Chart Excel File',meta:'2,400+ downloads · Excel',icon:'download',color:'#2563EB',bg:'rgba(37,99,235,.1)'},
  {title:'FIFA Goals Dashboard',meta:'800+ downloads · Power BI',icon:'download',color:'#F59E0B',bg:'rgba(245,158,11,.1)'},
  {title:'Practice Datasets Pack',meta:'600+ downloads · CSV',icon:'database',color:'#10B981',bg:'rgba(16,185,129,.1)'}
];


function toolCardHtml(t){
  const carouselBtn=t.linkedinUrl
    ?`<a href="${t.linkedinUrl}" target="_blank" rel="noopener" class="btn bp bsm">
        <i data-lucide="book-open"></i> Read Carousel
      </a>`
    :`<button class="btn bp bsm" data-cta="${t.name} carousel">
        <i data-lucide="book-open"></i> Read Carousel
      </button>`;

  return `
    <article class="tc2 fi3" id="t${t.num}">

      <div class="tch">
        <div>
          <div class="tnum">Tool #${t.num}</div>
          <h3 class="tnm">${t.name}</h3>
        </div>

        <span class="bdg ${t.sc}">${t.status}</span>
      </div>

      <div class="tm">

        <div class="tmr">
          <span class="tml">Difficulty</span>
          <span class="bdg ${t.dc}">${t.diff}</span>
        </div>

        <div class="tmr">
          <span class="tml">Use Case</span>
          <span class="tmv">${t.use}</span>
        </div>

        <div class="tmr">
          <span class="tml">Time</span>
          <span class="tmv">${t.time}</span>
        </div>

        <div class="tmr">
          <span class="tml">Tags</span>
          <span style="display:flex;gap:4px;flex-wrap:wrap">
            ${t.tags.map(tg=>`<span class="tag">${tg}</span>`).join('')}
          </span>
        </div>

      </div>

      <div class="tca">
        ${carouselBtn}
      </div>

    </article>
  `;
}

function renderTools(f='all',s=''){

  const g=document.getElementById('tg');

  if(!g)return;

  const fl=TOOLS.filter(t=>{
    const mf=f==='all'||t.cats.includes(f);
    const ms=
      !s||
      t.name.toLowerCase().includes(s.toLowerCase())||
      t.use.toLowerCase().includes(s.toLowerCase())||
      t.tags.some(tg=>tg.toLowerCase().includes(s.toLowerCase()));

    return mf&&ms;
  });

  if(!fl.length){
    g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text3)"><p style="font-size:2rem;margin-bottom:12px">🔍</p><p>No tools found.</p></div>';
    return;
  }

  g.innerHTML=fl.map(toolCardHtml).join('');

  lucide.createIcons();
  obsv();
}

function renderToolsPreview(){

  const g=document.getElementById('tg-preview');

  if(!g)return;

  const top=TOOLS.filter(t=>t.top);

  g.innerHTML=top.map(toolCardHtml).join('');

  lucide.createIcons();
  obsv();
}


function renderResources(){

  const g=document.getElementById('rg');

  if(!g)return;

  g.innerHTML=RESOURCES.map((r,i)=>`

    <div class="rc fi3" id="res${i}">

      <div class="ri" style="background:${r.bg}">
        <i data-lucide="${r.icon}" style="color:${r.color};width:22px;height:22px"></i>
      </div>

      <div>
        <div class="rn">${r.name}</div>
        <div class="rd">${r.desc}</div>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:auto">

        <div class="rm">
          <i data-lucide="file" style="width:13px;height:13px;color:var(--text3)"></i>
          ${r.count}
        </div>

        ${
          r.link
          ? `<a href="${r.link}" class="btn bp bsm">
              <i data-lucide="arrow-right"></i> View All
            </a>`
          : `<button class="btn bp bsm" data-cta="${r.name}">
              <i data-lucide="download"></i> Download
            </button>`
        }

      </div>

    </div>

  `).join('');

  lucide.createIcons();
}


function renderServices(){

  const g=document.getElementById('svg2');

  if(!g)return;

  g.innerHTML=SERVICES.map((s,i)=>`
    <div class="svc fi3" id="sv${i}">
      <div class="svi"><i data-lucide="${s.icon}"></i></div>
      <h3 class="svn">${s.name}</h3>
      <p class="svd">${s.desc}</p>
    </div>
  `).join('');

  lucide.createIcons();
}


function renderBlog(){

  const g=document.getElementById('blg');

  if(!g)return;

  g.innerHTML=BLOGS.map((b,i)=>`
    <article class="blc fi3" id="bl${i}">
      <div class="bli"><i data-lucide="${b.icon}"></i></div>
      <div class="blb">
        <div class="blm">${b.cat} · ${b.date}</div>
        <h3 class="blt">${b.title}</h3>
        <p class="bld">${b.desc}</p>
      </div>
    </article>
  `).join('');

  lucide.createIcons();
}


function renderTests(){

  const g=document.getElementById('tst');

  if(!g)return;

  g.innerHTML=TESTS.map((t,i)=>`
    <div class="tstc fi3" id="ts${i}">
      <div class="tsts">${'<i data-lucide="star"></i>'.repeat(5)}</div>
      <p class="tstq">"${t.q}"</p>

      <div class="tsta">
        <div class="tav">${t.i}</div>

        <div>
          <div class="tan">${t.n}</div>
          <div class="tar">${t.r}</div>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}


function renderSkills(){

  const g=document.getElementById('sk');

  if(!g)return;

  g.innerHTML=SKILLS.map((s,i)=>`
    <div class="ski" id="s${i}">

      <div class="skh">
        <span>${s.n}</span>
        <span style="color:var(--accent)">${s.p}%</span>
      </div>

      <div class="skt">
        <div class="skf" data-w="${s.p}"></div>
      </div>

    </div>
  `).join('');
}


function animSkills(){

  document.querySelectorAll('.skf').forEach(b=>{
    setTimeout(()=>{
      b.style.width=b.dataset.w+'%';
    },300);
  });

}


function renderMini(){

  const rag=document.getElementById('rag');
  const mdg=document.getElementById('mdg');

  if(rag){

    rag.innerHTML=RA.map((r,i)=>`
      <div class="mc" id="ra${i}">
        <div class="mci" style="background:${r.bg}">
          <i data-lucide="${r.icon}" style="color:${r.color};width:20px;height:20px"></i>
        </div>

        <div>
          <div class="mct">${r.title}</div>
          <div class="mcm">${r.meta}</div>
        </div>
      </div>
    `).join('');
  }

  if(mdg){

    mdg.innerHTML=MD.map((r,i)=>`
      <div class="mc" id="md${i}">
        <div class="mci" style="background:${r.bg}">
          <i data-lucide="${r.icon}" style="color:${r.color};width:20px;height:20px"></i>
        </div>

        <div>
          <div class="mct">${r.title}</div>
          <div class="mcm">${r.meta}</div>
        </div>
      </div>
    `).join('');
  }

  lucide.createIcons();
}


function renderCmd(items){

  const r=document.getElementById('cr');

  if(!r)return;

  if(!items.length){

    r.innerHTML='<div style="padding:24px;text-align:center;color:var(--text3)">No results found.</div>';

    return;
  }

  r.innerHTML=items.map((it,i)=>`
    <div class="ci" data-h="${it.h}" id="ci${i}">

      <div class="cii">
        <i data-lucide="${it.i}"></i>
      </div>

      <div>
        <div class="cil">${it.l}</div>
        <div class="cid">${it.d}</div>
      </div>

    </div>
  `).join('');

  lucide.createIcons();

  r.querySelectorAll('.ci').forEach(el=>{
    el.addEventListener('click',()=>{
      goTo(el.dataset.h);
    });
  });

}


function goTo(h){

  closeCmd();

  if(h.startsWith('#')){

    const t=document.querySelector(h);

    if(t){
      t.scrollIntoView({behavior:'smooth'});
    }else{
      window.location.href='index.html'+h;
    }

  }else if(h.startsWith('http')){

    window.open(h,'_blank','noopener');

  }else{

    window.location.href=h;

  }

}


let cai=-1;


function openCmd(){

  const co=document.getElementById('co');
  const ci=document.getElementById('ci');

  if(!co||!ci)return;

  co.classList.add('open');
  ci.value='';
  ci.focus();

  renderCmd(CMDS);

  cai=-1;
}


function closeCmd(){

  const co=document.getElementById('co');

  if(co)co.classList.remove('open');

}


// ============================================================
// FILTERS
// ============================================================

function initFilters(){

  const ftsEl=document.getElementById('fts');

  if(ftsEl){

    ftsEl.addEventListener('click',e=>{

      const b=e.target.closest('.ftb');

      if(!b)return;

      document.querySelectorAll('#fts .ftb').forEach(x=>{
        x.classList.remove('act');
        x.setAttribute('aria-selected','false');
      });

      b.classList.add('act');
      b.setAttribute('aria-selected','true');

      const ts=document.getElementById('ts');

      renderTools(
        b.dataset.f,
        ts ? ts.value : ''
      );

    });

  }


  const tsEl=document.getElementById('ts');

  if(tsEl){

    tsEl.addEventListener('input',e=>{

      const f=
        document.querySelector('#fts .ftb.act')?.dataset.f||'all';

      renderTools(f,e.target.value);

    });

  }

}


// ============================================================
// MARKETPLACE FILTERS
// ============================================================

function initMarketplace(){

  const mftsEl=document.getElementById('mfts');
  const mtsEl=document.getElementById('mts');
  const marketGrid=document.getElementById('market-grid');

  if(!marketGrid)return;


  // CATEGORY FILTERS

  if(mftsEl){

    mftsEl.addEventListener('click',e=>{

      const b=e.target.closest('.ftb');

      if(!b)return;

      document.querySelectorAll('#mfts .ftb').forEach(x=>{
        x.classList.remove('act');
        x.setAttribute('aria-selected','false');
      });

      b.classList.add('act');
      b.setAttribute('aria-selected','true');

      renderMarket(
        b.dataset.f || 'all',
        mtsEl ? mtsEl.value : ''
      );

    });

  }


  // SEARCH

  if(mtsEl){

    mtsEl.addEventListener('input',e=>{

      const f=
        document.querySelector('#mfts .ftb.act')?.dataset.f||'all';

      renderMarket(
        f,
        e.target.value
      );

    });

  }


  // INITIAL MARKETPLACE LOAD
  // This is the important fix.

  const urlCat=
    new URLSearchParams(window.location.search).get('cat');

  if(urlCat){

    const pill=
      document.querySelector(
        `#mfts .ftb[data-f="${urlCat}"]`
      );

    if(pill){

      document.querySelectorAll('#mfts .ftb').forEach(x=>{
        x.classList.remove('act');
        x.setAttribute('aria-selected','false');
      });

      pill.classList.add('act');
      pill.setAttribute('aria-selected','true');

      renderMarket(
        urlCat,
        mtsEl ? mtsEl.value : ''
      );

    }else{

      renderMarket(
        'all',
        mtsEl ? mtsEl.value : ''
      );

    }

  }else{

    // DEFAULT: SHOW ALL PRODUCTS
    renderMarket(
      'all',
      mtsEl ? mtsEl.value : ''
    );

  }

}


// ============================================================
// FREE RESOURCES FILTERS
// ============================================================

function initFreeResources(){

  const rftsEl=document.getElementById('rfts');
  const rtsEl=document.getElementById('rts');
  const freeGrid=document.getElementById('free-grid');

  if(!freeGrid)return;


  // CATEGORY FILTERS

  if(rftsEl){

    rftsEl.addEventListener('click',e=>{

      const b=e.target.closest('.ftb');

      if(!b)return;

      document.querySelectorAll('#rfts .ftb').forEach(x=>{
        x.classList.remove('act');
        x.setAttribute('aria-selected','false');
      });

      b.classList.add('act');
      b.setAttribute('aria-selected','true');

      renderFreeResources(
        b.dataset.f || 'all',
        rtsEl ? rtsEl.value : ''
      );

    });

  }


  // SEARCH

  if(rtsEl){

    rtsEl.addEventListener('input',e=>{

      const f=
        document.querySelector('#rfts .ftb.act')?.dataset.f||'all';

      renderFreeResources(
        f,
        e.target.value
      );

    });

  }


  // INITIAL LOAD (supports ?cat= deep links)

  const urlCat=
    new URLSearchParams(window.location.search).get('cat');

  if(urlCat){

    const pill=
      document.querySelector(
        `#rfts .ftb[data-f="${urlCat}"]`
      );

    if(pill){

      document.querySelectorAll('#rfts .ftb').forEach(x=>{
        x.classList.remove('act');
        x.setAttribute('aria-selected','false');
      });

      pill.classList.add('act');
      pill.setAttribute('aria-selected','true');

      renderFreeResources(
        urlCat,
        rtsEl ? rtsEl.value : ''
      );

    }else{

      renderFreeResources(
        'all',
        rtsEl ? rtsEl.value : ''
      );

    }

  }else{

    renderFreeResources(
      'all',
      rtsEl ? rtsEl.value : ''
    );

  }

}


// ============================================================
// THEME
// ============================================================

function setTheme(t){

  document.documentElement.setAttribute('data-theme',t);

  localStorage.setItem('av-t',t);

  const il=document.getElementById('il');
  const id=document.getElementById('id');

  if(il)il.style.display=t==='light'?'block':'none';
  if(id)id.style.display=t==='light'?'none':'block';

}


// ============================================================
// HAMBURGER
// ============================================================

function initHamburger(){

  const hb=document.getElementById('hb');
  const mm=document.getElementById('mm');

  if(!hb||!mm)return;

  hb.addEventListener('click',()=>{

    const o=mm.classList.toggle('open');

    hb.classList.toggle('open',o);

    hb.setAttribute('aria-expanded',o);

  });

  document.querySelectorAll('.ml').forEach(l=>{

    l.addEventListener('click',()=>{

      mm.classList.remove('open');
      hb.classList.remove('open');
      hb.setAttribute('aria-expanded','false');

    });

  });

}


// ============================================================
// COMMAND MENU
// ============================================================

function initCommandMenu(){

  const sb=document.getElementById('sb');
  const co=document.getElementById('co');
  const ci=document.getElementById('ci');

  if(!sb||!co||!ci)return;


  sb.addEventListener('click',openCmd);


  co.addEventListener('click',e=>{

    if(e.target===co)closeCmd();

  });


  ci.addEventListener('input',e=>{

    const q=e.target.value.toLowerCase();

    renderCmd(
      CMDS.filter(it=>
        it.l.toLowerCase().includes(q)||
        it.d.toLowerCase().includes(q)
      )
    );

    cai=-1;

  });


  document.addEventListener('keydown',e=>{

    if((e.ctrlKey||e.metaKey)&&e.key==='k'){

      e.preventDefault();

      co.classList.contains('open')
        ? closeCmd()
        : openCmd();

    }

    if(
      e.key==='Escape' &&
      co.classList.contains('open')
    ){

      closeCmd();

    }

    if(co.classList.contains('open')){

      const its=document.querySelectorAll('.ci');

      if(e.key==='ArrowDown'){

        e.preventDefault();

        cai=Math.min(
          cai+1,
          its.length-1
        );

        its.forEach((el,i)=>
          el.classList.toggle('act',i===cai)
        );

        its[cai]?.scrollIntoView({
          block:'nearest'
        });

      }


      if(e.key==='ArrowUp'){

        e.preventDefault();

        cai=Math.max(cai-1,0);

        its.forEach((el,i)=>
          el.classList.toggle('act',i===cai)
        );

        its[cai]?.scrollIntoView({
          block:'nearest'
        });

      }


      if(e.key==='Enter'&&cai>=0){

        goTo(
          its[cai].dataset.h
        );

      }

    }

  });

}


// ============================================================
// SCROLL
// ============================================================

function initScroll(){

  window.addEventListener('scroll',()=>{

    const st=document.documentElement.scrollTop;

    const dh=
      document.documentElement.scrollHeight-
      window.innerHeight;

    const pb=document.getElementById('pb');
    const nav=document.getElementById('nav');
    const btt=document.getElementById('btt');
    const ftb=document.getElementById('ftb');

    if(pb){
      pb.style.width=
        (dh>0 ? st/dh*100 : 0)+'%';
    }

    if(nav){
      nav.classList.toggle(
        'sc',
        window.scrollY>40
      );
    }

    const v=window.scrollY>400;

    if(btt)btt.classList.toggle('vis',v);
    if(ftb)ftb.classList.toggle('vis',v);

  },{passive:true});


  const btt=document.getElementById('btt');

  if(btt){

    btt.addEventListener(
      'click',
      ()=>window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    );

  }

}


// ============================================================
// INTERSECTION OBSERVER
// ============================================================

function obsv(){

  const io=new IntersectionObserver(
    es=>{
      es.forEach(e=>{

        if(e.isIntersecting){

          e.target.classList.add('vis');

          io.unobserve(e.target);

        }

      });
    },
    {
      threshold:.1,
      rootMargin:'0px 0px -60px 0px'
    }
  );

  document
    .querySelectorAll('.fi3:not(.vis)')
    .forEach(el=>io.observe(el));

}


// ============================================================
// QR MODAL
// ============================================================

function initQR(){

  const upiBtn=document.getElementById('upi-btn');
  const qrModal=document.getElementById('qr-modal');
  const qrClose=document.querySelector('.qr-close');

  if(upiBtn&&qrModal){

    upiBtn.addEventListener(
      'click',
      ()=>qrModal.classList.add('open')
    );

  }

  if(qrClose&&qrModal){

    qrClose.addEventListener(
      'click',
      ()=>qrModal.classList.remove('open')
    );

  }

  if(qrModal){

    qrModal.addEventListener('click',e=>{

      if(e.target.id==='qr-modal'){
        qrModal.classList.remove('open');
      }

    });

  }

}


// ============================================================
// COUNTERS
// ============================================================

function initCounters(){

  const stats=document.getElementById('stats');

  if(!stats)return;

  const statsObs=new IntersectionObserver(
    es=>{
      es.forEach(e=>{

        if(e.isIntersecting){

          document
            .querySelectorAll('.sn[data-t]')
            .forEach(el=>{

              const tg=+el.dataset.t;
              const sf=el.dataset.s||'';
              const dur=1800;
              const st2=performance.now();

              function up(n){

                const p=Math.min(
                  (n-st2)/dur,
                  1
                );

                const e2=
                  1-Math.pow(1-p,3);

                el.innerHTML=
                  Math.round(e2*tg)
                  .toLocaleString()+
                  '<span class="su">'+
                  sf+
                  '</span>';

                if(p<1){
                  requestAnimationFrame(up);
                }

              }

              requestAnimationFrame(up);

            });

          statsObs.disconnect();

        }

      });
    },
    {threshold:.3}
  );

  statsObs.observe(stats);

}


// ============================================================
// SKILLS OBSERVER
// ============================================================

function initSkillsObserver(){

  const about=document.getElementById('about');

  if(!about)return;

  const skObs=new IntersectionObserver(
    es=>{
      es.forEach(e=>{

        if(e.isIntersecting){

          animSkills();
          skObs.disconnect();

        }

      });
    },
    {threshold:.2}
  );

  skObs.observe(about);

}


// ============================================================
// NEWSLETTER
// ============================================================

function hNL(e){

  e.preventDefault();

  const b=document.getElementById('nls');

  if(!b)return;

  b.innerHTML=
    '<i data-lucide="check"></i> Subscribed!';

  b.style.background='var(--green)';
  b.disabled=true;

  lucide.createIcons();

  setTimeout(()=>{

    b.innerHTML=
      '<i data-lucide="send"></i> Subscribe';

    b.style.background='';
    b.disabled=false;

    const nle=document.getElementById('nle');

    if(nle)nle.value='';

    lucide.createIcons();

  },3000);

}


// ============================================================
// FOOTER YEAR (auto-updates, never goes stale)
// ============================================================

function initFooterYear(){
  document.querySelectorAll('.fyear').forEach(el=>{
    el.textContent=new Date().getFullYear();
  });
}


// ============================================================
// TOAST
// ============================================================

function showToast(msg){

  const wrap=document.getElementById('toast-wrap');

  if(!wrap)return;

  const t=document.createElement('div');

  t.className='toast';

  t.innerHTML=
    `<i data-lucide="info"></i><span>${msg}</span>`;

  wrap.appendChild(t);

  lucide.createIcons();

  requestAnimationFrame(()=>
    t.classList.add('show')
  );

  setTimeout(()=>{

    t.classList.remove('show');

    setTimeout(
      ()=>t.remove(),
      250
    );

  },3200);

}


function initCTA(){

  document.addEventListener('click',e=>{

    const b=e.target.closest('[data-cta]');

    if(b){

      showToast(
        `"${b.dataset.cta}" is coming soon — check back shortly!`
      );

    }

  });

}


// ============================================================
// WEB3FORMS CONTACT FORM
// ============================================================

const WEB3FORMS_KEY =
  'bee79e6e-0b5b-49de-9a6b-613b4fbfd10f';


async function hCT(event){

  event.preventDefault();

  const button=document.getElementById('cts');
  const name=document.getElementById('cn');
  const email=document.getElementById('ce');
  const message=document.getElementById('cm');

  if(!button||!name||!email||!message)return;

  button.disabled=true;
  button.innerHTML='Sending...';

  try{

    const response=await fetch(
      'https://api.web3forms.com/submit',
      {
        method:'POST',

        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
        },

        body:JSON.stringify({

          access_key:WEB3FORMS_KEY,

          name:name.value,

          email:email.value,

          message:message.value,

          subject:'New Contact Form Message'

        })
      }
    );

    const result=await response.json();

    if(result.success){

      alert('Message sent successfully!');

      const form=document.getElementById('ctf');

      if(form)form.reset();

    }else{

      alert(
        'Something went wrong. Please try again.'
      );

    }

  }catch(error){

    console.error(error);

    alert(
      'Unable to send the message. Please try again.'
    );

  }

  button.disabled=false;

  button.innerHTML=
    '<i data-lucide="send"></i> Send Message';

  lucide.createIcons();

}


// ============================================================
// THEME INITIALIZATION
// ============================================================

function initTheme(){

  const tt=document.getElementById('tt');

  if(tt){

    tt.addEventListener(
      'click',
      ()=>{
        setTheme(
          document.documentElement
            .getAttribute('data-theme')==='dark'
            ?'light'
            :'dark'
        );
      }
    );

  }

  setTheme(
    localStorage.getItem('av-t')||'dark'
  );

}


// ============================================================
// MAIN INIT
// ============================================================

function init(){

  // Main page sections

  if(document.getElementById('tg')){
    renderTools();
  }

  if(document.getElementById('tg-preview')){
    renderToolsPreview();
  }

  if(document.getElementById('rg')){
    renderResources();
  }

  if(document.getElementById('svg2')){
    renderServices();
  }

  if(document.getElementById('blg')){
    renderBlog();
  }

  if(document.getElementById('tst')){
    renderTests();
  }

  if(document.getElementById('sk')){
    renderSkills();
  }

  if(document.getElementById('rag')){
    renderMini();
  }


  // Marketplace
  // IMPORTANT: This now initializes AFTER DOM is ready
  // and immediately renders ALL products.

  initMarketplace();


  // Free Resources page
  initFreeResources();


  // Other functionality

  initFilters();

  initCommandMenu();

  initTheme();

  initHamburger();

  initScroll();

  initQR();

  initCounters();

  initSkillsObserver();

  initCTA();

  initFooterYear();


  // Final icons + animations

  obsv();

  lucide.createIcons();

}


// ============================================================
// START
// ============================================================

if(document.readyState==='loading'){

  document.addEventListener(
    'DOMContentLoaded',
    init
  );

}else{

  init();

}