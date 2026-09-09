const PROJECTS = [
  {
    id: "supermarket-retail",
    domain: "Retail & Marketing",
    domainFilter: "retail",
    title: "Supermarket Retail",
    tags: "Data Analysis | Excel | PostgreSQL | Tableau",
    stats: [
      { num: "40%", label: "top conversion efficiency (Spain)" },
      { num: "60/31/9", label: "engaged / active / at-risk split" },
      { num: "8", label: "countries analysed" }
    ],
    challenge: "Understand customer demographics and determine which marketing channels and product categories drive the highest engagement and sales for an online and in-store retailer.",
    process: [
      "Cleaned and standardised the dataset in Excel: fixed inconsistencies, handled missing values, corrected data types, and removed duplicates.",
      "Built aggregation queries in PostgreSQL to calculate spend by country and product, and conversion efficiency by marketing channel.",
      "Designed Tableau dashboards covering customer demographics, purchase behaviour, and engagement across regions."
    ],
    findings: [
      "Core customer segment is Gen X / Baby Boomers (45–65), Bachelor's-educated, moderate-to-high income.",
      "Germany (41.28%) and Spain (40.05%) lead on conversion efficiency, making them the most valuable markets for return-focused marketing.",
      "In-store purchasing still dominates over online across nearly every region — a signal of an older core customer base."
    ],
    images: [
      { src: "assets/img/retail-eda.png", alt: "Tableau dashboard showing customer demographics" },
      { src: "assets/img/retail-purchase-behaviour.png", alt: "Purchase behaviour dashboard by country" }
    ]
  },
  {
    id: "healthcare-operation",
    domain: "Healthcare Operations",
    domainFilter: "healthcare",
    title: "Healthcare Operation",
    tags: "Data Analysis | Python | Pandas | NumPy | Seaborn | Matplotlib | Plotly",
    stats: [
      { num: "91%", label: "appointment attendance rate" },
      { num: "817K+", label: "appointments analysed" },
      { num: "5", label: "highest-demand NHS regions" }
    ],
    challenge: "Assess NHS staff capacity, resource utilisation, and service demand across regions — has capacity kept pace with demand, and which services need it most?",
    process: [
      "Preprocessed appointment-level data in Python (Pandas, NumPy): removed duplicates, corrected types, encoded categories, aggregated by service type and region.",
      "Ran descriptive statistics and seasonal/weekday breakdowns using Seaborn, Matplotlib, and Plotly.",
      "Tracked monthly capacity utilisation against appointment volume through the COVID-19 disruption and recovery period."
    ],
    findings: [
      "General Practice shows the highest demand, though a large share of records are marked 'unmapped' — a data-quality issue worth flagging.",
      "Demand peaks in Autumn and Winter (allergy-related), and is heavily weighted toward Monday–Thursday.",
      "91% attendance vs. a 7% DNA benchmark suggests current staffing is broadly adequate — utilisation never reached 100%, even in the post-COVID rebound."
    ],
    images: [
      { src: "assets/img/healthcare-category.png", alt: "Appointments by national category and season" },
      { src: "assets/img/healthcare-seasonal.png", alt: "Appointments per season and service setting" },
      { src: "assets/img/healthcare-capacity.png", alt: "Monthly appointments and capacity utilisation" }
    ]
  },
  {
    id: "gaming-segmentation",
    domain: "Customer Segmentation",
    domainFilter: "segmentation",
    title: "Gaming Segmentation",
    tags: "Regression Analysis | Python | K-Means Clustering | R",
    stats: [
      { num: "84%", label: "variance explained (R²)" },
      { num: "k=5", label: "optimal customer segments" },
      { num: "3", label: "key predictors of loyalty" }
    ],
    challenge: "Turtle Game needed to understand how player feedback and spending behaviour shape brand perception and sales, and to segment customers for targeted marketing.",
    process: [
      "Built an OLS regression in R modelling loyalty points against age, remuneration, and spending score.",
      "Used a decision tree to profile high-earning vs. low-earning customer groups.",
      "Ran K-Means clustering at k=3, 5, and 7, validated with Elbow and Silhouette methods to choose the optimal segment count."
    ],
    findings: [
      "The regression model explains 84% of variance in loyalty points (R²=0.840); all predictors significant at p<0.001.",
      "Remuneration and spending score are the strongest drivers of loyalty; customers above 67 spending score and 74.2 remuneration are high earners worth rewarding.",
      "k=5 offers the best balance of interpretability and granularity, confirmed by the Silhouette score."
    ],
    images: [
      { src: "assets/img/gaming-decisiontree.png", alt: "Decision tree splitting customers by spending score and remuneration" },
      { src: "assets/img/gaming-kmeans.png", alt: "K-Means clustering at k=3, 5, and 7" },
      { src: "assets/img/gaming-elbow.png", alt: "Elbow and Silhouette validation charts" }
    ]
  },
  {
    id: "stock-market",
    domain: "Finance & Forecasting",
    domainFilter: "finance",
    title: "Stock Market Analysis",
    tags: "Time Series Forecasting | Python | ARIMA",
    stats: [
      { num: "84%", label: "9-month directional accuracy" },
      { num: "10yr", label: "of sentiment data analysed" },
      { num: "3", label: "stocks compared" }
    ],
    challenge: "Test whether social sentiment has any meaningful, usable relationship with stock price movement for Apple, Nvidia, and Google.",
    process: [
      "Sourced 10 years of sentiment data from Kaggle's 'S&P 500 Reddit Finance Posts' dataset.",
      "Analysed daily and lagged correlation between sentiment and returns, then compared yearly-normalised sentiment and price trends.",
      "Built classification (Up/Down) and regression models at 3-month and 9-month horizons to test forecasting power."
    ],
    findings: [
      "Daily and lagged sentiment correlate weakly with returns — sentiment reacts to price moves rather than predicting them.",
      "Sentiment correlates more strongly with volatility than with price direction, especially for Nvidia.",
      "Short-term (3-month) forecasts failed (55% accuracy, negative R²), but the 9-month classification model reached 84% accuracy (F1: 0.89) — sentiment carries more signal over longer horizons."
    ],
    images: [
      { src: "assets/img/stock-yearly-trend.png", alt: "Normalised yearly sentiment vs stock price by company" },
      { src: "assets/img/stock-sentiment-volatility.png", alt: "Yearly average sentiment vs yearly volatility" },
      { src: "assets/img/stock-prediction-3v9.png", alt: "3-month stock movement prediction results" }
    ]
  }
];
