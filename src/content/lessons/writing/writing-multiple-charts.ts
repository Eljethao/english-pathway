import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-multiple-charts",
  title: "Combining two charts or diagrams",
  summary:
    "Report on two visuals in one IELTS Academic Task 1 answer: select the key features of each, write an overview that covers both, and link the data accurately without inventing causes.",
  skill: "writing",
  level: "C1",
  order: 5,
  minutes: 35,
  exams: [{ exam: "ielts", task: "Writing Task 1 (Academic)" }],
  objectives: [
    "Work out how two visuals are related and choose a paragraph plan that fits",
    "Select the most significant features of each visual instead of listing every figure",
    "Write an overview that summarises both visuals in one or two sentences",
    "Link the visuals accurately, without claiming causes that the data do not show",
  ],
  warmUp: [
    "Imagine one chart shows how many people own electric cars and another shows how many charging points there are. What could you compare, and what could you NOT claim from the data alone?",
    "With only 20 minutes and two sets of data, how would you decide which numbers to leave out?",
  ],
  learn: [
    {
      type: "text",
      title: "Two visuals, one report",
      body: "Some IELTS Academic Task 1 questions give you two visuals: for example, a line graph and a table, two bar charts, or a chart and a diagram. The time (about 20 minutes) and the minimum length (150 words) stay the same, so the real challenge is **selection**. You cannot describe every figure in both visuals, and you should not try.\n\nThe public band descriptors for Task Achievement make this clear. At band 7, the response presents a *clear overview*, the data are *appropriately categorised* and the key features are *clearly highlighted*. At band 8, key features are *skilfully selected*. A report that mechanically recounts every number, with no clear overview, falls well below band 7, however accurate the numbers are.\n\nWith two visuals, the overview and the selection must cover **both**. A common reason for a lower score is a careful description of the first visual followed by two rushed sentences about the second.",
    },
    {
      type: "table",
      title: "What to select from each visual",
      headers: ["Look for", "Why it matters", "Example language"],
      rows: [
        ["The main trend or the biggest change", "It is usually the first thing a reader needs to know", "…rose more than twentyfold…"],
        ["The highest and lowest values, and any change in ranking", "It shows the overall pattern of a comparison", "…overtook… / remained by far the largest…"],
        ["Exceptions to the general pattern", "It shows that you have read the data, not just the title", "…was the only category that fell…"],
        ["Totals, proportions and multiples", "They turn raw numbers into meaningful comparisons", "…more than eightfold… / just over a third of…"],
        ["A point where the two visuals connect", "It lets you link the paragraphs without inventing a cause", "Over the same period… / Turning to the table…"],
      ],
    },
    {
      type: "text",
      title: "Choosing a paragraph plan",
      body: "Before you look at any individual figure, read both titles, the units and the time periods, and decide how the visuals are related.\n\n- **Different angles on one topic** (for example, the number of electric cars and the number of charging points): write one body paragraph per visual. This is the safest plan and suits most two-visual tasks.\n- **The same categories measured in two ways** (for example, five countries' spending on health in one chart and on education in another): organise by visual, or by groups of categories if a comparison across both visuals is the key feature.\n- **A trend plus a snapshot** (a line graph over twenty years and a table for the final year): describe the trend first, then the breakdown.\n\nIn every case, the overview contains one main point from **each** visual. Four paragraphs (introduction, overview, two body paragraphs) and about 170–230 words is realistic in 20 minutes.",
    },
    {
      type: "example",
      title: "Moving between visuals",
      items: [
        "**Turning to** the table, the total number of public charging points rose from 2,000 to 17,000.",
        "**The table provides a breakdown of** these figures **by** type of charger.",
        "**Over the same period**, the number of bank branches fell by about 45%.",
        "**As for** physical facilities, cash machines also became less common.",
        "**In contrast to** the steady rise shown in the line graph, the table shows a fall in every category.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Data can show that two things changed at the same time, but not that one caused the other. *More charging points were built, so more people bought electric cars* is a claim the visuals cannot support. Write *Over the same period…* or *At the same time…* and let the reader draw the conclusion. Task 1 asks you to report, not to explain.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: planning a two-visual report",
        questions: [
          {
            prompt: "A line graph shows the number of international students in a country from 2000 to 2020. A table shows the five subjects they most often studied in 2020. Which plan is most logical?",
            options: [
              "Introduction, overview, one body paragraph on the line graph, one on the table",
              "Introduction, one short paragraph for every year in the line graph, then one sentence on the table",
              "Introduction and one long paragraph listing every figure from both visuals in date order",
              "Introduction, a paragraph on the five subjects, then a paragraph explaining why student numbers grew",
            ],
            answer: 0,
            explanation: "This is a trend plus a snapshot, so the trend comes first and the breakdown second, after an overview of both. The other plans give the table too little attention, list every figure mechanically, or add reasons that the data do not show.",
          },
          {
            prompt: "A line graph shows the number of electric cars in a country; a table shows the number of public charging points by type. Which overview is best?",
            options: [
              "Overall, the number of electric cars rose dramatically, and the line graph covers the years 2016 to 2024.",
              "Overall, both types of electric car became far more common, and the charging network expanded considerably, with faster chargers making up a much larger share by the end of the period.",
              "Overall, battery electric cars rose from 12,000 to 260,000, hybrids from 30,000 to 110,000 and charging points from 2,000 to 17,000.",
              "Overall, more charging points were built, so more people bought electric cars.",
            ],
            answer: 1,
            explanation: "It summarises one main feature of each visual without detailed figures. The first ignores the table, the third is a list of figures rather than an overview, and the fourth claims a cause.",
          },
          {
            prompt: "A bar chart shows passenger numbers on a city's railway; a table shows the number of stations. Which sentence links the two visuals without claiming a cause the data do not show?",
            options: [
              "Because more stations were opened, passenger numbers increased.",
              "The new stations encouraged people to travel by train.",
              "Over the same period, the number of stations rose from 40 to 65.",
              "Passenger numbers increased as a result of the new stations.",
            ],
            answer: 2,
            explanation: "*Over the same period* connects the time frames and reports the data. The other three sentences all say that the new stations caused the increase, which the visuals cannot show.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*The line graph below shows the number of battery electric and plug-in hybrid cars registered in Calderia between 2016 and 2024. The table shows the number of public charging points in the country, by type, in 2016 and 2024.*\n\n*Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.*",
    },
    {
      type: "chart",
      chart: {
        kind: "line",
        title: "Electric cars registered in Calderia, 2016–2024",
        unit: "thousands",
        categories: ["2016", "2018", "2020", "2022", "2024"],
        series: [
          { name: "Battery electric", values: [12, 25, 60, 140, 260] },
          { name: "Plug-in hybrid", values: [30, 45, 70, 95, 110] },
        ],
      },
    },
    {
      type: "table",
      title: "Public charging points in Calderia, 2016 and 2024",
      headers: ["Type of charger", "2016", "2024"],
      rows: [
        ["Standard", "1,800", "9,500"],
        ["Fast", "200", "6,200"],
        ["Ultra-fast", "0", "1,300"],
        ["Total", "2,000", "17,000"],
      ],
    },
    {
      type: "passage",
      title: "Model answer (band 8 level)",
      paragraphs: [
        "The line graph illustrates how many battery electric and plug-in hybrid cars were registered in Calderia between 2016 and 2024, while the table compares the number of public charging points of three types at the beginning and end of that period.",
        "Overall, both kinds of electric car became far more common, and battery electric models overtook hybrids to become the dominant type. Over the same eight years, the charging network expanded more than eightfold, with fast and ultra-fast chargers making up a much larger share of the total by 2024.",
        "In 2016, plug-in hybrids outnumbered battery electric cars by 30,000 to 12,000. Growth in battery electric cars then accelerated: their number overtook that of hybrids at some point between 2020 and 2022 and reached 260,000 by 2024, more than twenty times the 2016 figure. Hybrids also grew, but far more modestly, rising more than threefold to 110,000.",
        "Turning to the table, the total number of public charging points rose from 2,000 to 17,000. Standard chargers remained the largest category, increasing from 1,800 to 9,500, but the most striking growth was in fast chargers, which increased more than thirtyfold, from 200 to 6,200. Ultra-fast points, which did not exist in 2016, numbered 1,300 by 2024. Fast and ultra-fast chargers together therefore accounted for about 44% of all points at the end of the period, compared with just 10% at the start.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Introduction**: one sentence covers both visuals, joined with *while*, and paraphrases the task (*shows the number of… registered* → *illustrates how many… were registered*).\n- **Overview**: one point from each visual (the change in ranking of the two car types; the eightfold expansion and changing mix of chargers), with no detailed figures.\n- **Selection**: from the line graph, only the start and end values and the crossover; the 2018 values are left out because they add nothing new. From the table, the total, the largest category, the fastest growth and the new category.\n- **Checked calculations**: 260 ÷ 12 ≈ 21.7 (*more than twenty times*); 110 ÷ 30 ≈ 3.7 (*more than threefold*); 17,000 ÷ 2,000 = 8.5 (*more than eightfold*); 6,200 ÷ 200 = 31 (*more than thirtyfold*); (6,200 + 1,300) ÷ 17,000 ≈ 44%.\n- **Honest about the data**: the graph shows only even years, so the writer says the lines crossed *at some point between 2020 and 2022*, not *in 2021*.\n- **Linking without causes**: *Over the same eight years* and *Turning to the table* connect the visuals. The writer never says that the charging points caused car ownership to rise, or the other way round.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "Practice task",
      body: "*The bar chart below shows the percentage of adults in four age groups who used mobile banking in Westmoor in 2015 and 2025. The table shows the number of bank branches and cash machines in the country in the same two years.*\n\n*Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.*\n\nStudy both visuals carefully. Exercises 2–4 prepare you to write the full report in exercise 5.",
    },
    {
      type: "chart",
      chart: {
        kind: "bar",
        title: "Adults using mobile banking in Westmoor, by age group, 2015 and 2025",
        unit: "%",
        categories: ["18–29", "30–44", "45–59", "60+"],
        series: [
          { name: "2015", values: [48, 35, 20, 6] },
          { name: "2025", values: [92, 85, 64, 38] },
        ],
      },
    },
    {
      type: "table",
      title: "Bank branches and cash machines in Westmoor, 2015 and 2025",
      headers: ["Facility", "2015", "2025"],
      rows: [
        ["Bank branches", "4,200", "2,300"],
        ["Cash machines", "61,000", "39,500"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Select the key features",
        instructions: "Use the Westmoor bar chart and table above.",
        questions: [
          {
            prompt: "Which TWO points belong in the overview?",
            options: [
              "Mobile banking became more common in every age group, but in both years the rate of use was lower in each older group.",
              "Among 18–29-year-olds, use rose from 48% to 92%.",
              "The number of both bank branches and cash machines fell considerably.",
              "Branches closed because more people were banking on their phones.",
              "In 2015, only 6% of people aged 60 and over used mobile banking.",
            ],
            answer: [0, 2],
            explanation: "The overview needs one main feature from each visual. The second and fifth options are details for the body paragraphs, and the fourth claims a cause that the data do not show.",
          },
          {
            prompt: "Which age group had the largest increase in percentage points?",
            options: ["18–29", "30–44", "45–59", "60+"],
            answer: 1,
            explanation: "85 − 35 = 50 percentage points. The 18–29 and 45–59 groups each rose by 44 points, and the 60+ group by 32.",
          },
          {
            prompt: "Which age group's rate increased by the largest proportion (the most times over)?",
            options: ["18–29", "30–44", "45–59", "60+"],
            answer: 3,
            explanation: "38 is more than six times 6. The other groups rose about 1.9 times (18–29), 2.4 times (30–44) and 3.2 times (45–59). The smallest rise in points can still be the largest rise in proportion.",
          },
          {
            prompt: "Which plan for the two body paragraphs is most logical?",
            options: [
              "Body 1: the bar chart, comparing the youngest and oldest groups and then the middle groups. Body 2: the table.",
              "Body 1: every age group in 2015. Body 2: every age group in 2025. The table is mentioned only in a final conclusion.",
              "Body 1: the table. Body 2: the 18–29 age group only.",
              "Body 1: the bar chart. Body 2: why bank branches closed.",
            ],
            answer: 0,
            explanation: "One paragraph per visual, with a logical grouping inside the first. The other plans hide the table in a conclusion, leave out three age groups, or add reasons that the data do not show.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "tfng",
        title: "Accurate, inaccurate or not shown?",
        instructions: "Decide whether each statement about the Westmoor data is accurate (T), inaccurate (F) or not shown by the visuals (NG). Only accurate statements belong in your report.",
        statements: [
          {
            text: "In 2015, fewer than half of adults aged 18–29 used mobile banking.",
            answer: "T",
            explanation: "The figure was 48%, which is just under half.",
          },
          {
            text: "The use of mobile banking more than doubled among 30–44-year-olds.",
            answer: "T",
            explanation: "It rose from 35% to 85%, about 2.4 times the 2015 figure.",
          },
          {
            text: "In 2025, more than two-thirds of people aged 45–59 used mobile banking.",
            answer: "F",
            explanation: "The figure was 64%. Two-thirds is about 67%, so 64% is slightly less than two-thirds.",
          },
          {
            text: "Bank branches closed because customers preferred to bank on their phones.",
            answer: "NG",
            explanation: "Both changes happened over the same decade, but neither visual gives any reason for the closures.",
          },
          {
            text: "The number of cash machines fell by 21,500.",
            answer: "T",
            explanation: "61,000 − 39,500 = 21,500.",
          },
          {
            text: "Bank branches declined at a slower rate than cash machines.",
            answer: "F",
            explanation: "Branches fell by about 45% (1,900 out of 4,200); cash machines fell by about 35% (21,500 out of 61,000). Branches declined faster.",
          },
          {
            text: "Most of the remaining bank branches are in large cities.",
            answer: "NG",
            explanation: "The table gives national totals only. There is no information about where the branches are.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Complete the body paragraphs",
        instructions: "Complete the two body paragraphs with ONE word or number in each gap. Check every figure against the chart and table.",
        text: "In 2015, slightly fewer than half of 18–29-year-olds banked on their phones, compared with only {{0}}% of people aged 60 and over. By 2025, the figure for the youngest group had almost {{1}}, reaching 92%. The 30–44 age group recorded the largest increase, of {{2}} percentage points, while the rate among the over-60s grew more than {{3}}, to 38%.\n\nAs for physical facilities, the number of bank branches fell from 4,200 to 2,300, a drop of about {{4}}%. Cash machines {{5}} less sharply, decreasing by just over a {{6}}, from 61,000 to 39,500.",
        answers: [
          ["6", "six"],
          ["doubled"],
          ["50", "fifty"],
          ["sixfold", "six-fold", "6-fold"],
          ["45", "forty-five", "forty five"],
          ["fell", "declined", "decreased", "dropped"],
          ["third"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: the full Task 1 report",
        instructions: "Spend 2–3 minutes deciding on one main feature for each visual, write for about 15 minutes, and use the last 2 minutes to check every figure.",
        prompt:
          "The bar chart shows the percentage of adults in four age groups who used mobile banking in Westmoor in 2015 and 2025. The table shows the number of bank branches and cash machines in the country in the same two years.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task achievement: My introduction paraphrases what both visuals show, including the place and the two years.",
          "Task achievement: My overview gives one main feature of the bar chart AND one of the table, with no detailed figures.",
          "Task achievement: I selected key features (the largest changes, the highest and lowest rates, the pattern by age) instead of listing every number, and every figure I gave is accurate.",
          "Task achievement: I did not give reasons or opinions that the visuals do not show, such as why branches closed.",
          "Coherence and cohesion: I wrote one body paragraph per visual and linked them with a phrase such as Turning to the table or Over the same period.",
          "Lexical resource: I varied my language of change and comparison (nearly doubled, more than sixfold, a fall of about 45%, percentage points).",
          "Grammatical range and accuracy: I used past tenses correctly, and my complex sentences (while…, compared with…, whose…) are accurate.",
          "I wrote at least 150 words in about 20 minutes.",
        ],
        modelAnswer:
          "The bar chart compares the proportion of adults in four age groups who used mobile banking in Westmoor in 2015 and 2025, while the table shows how many bank branches and cash machines the country had in those two years.\n\nOverall, mobile banking became more widespread in every age group, although in both years the rate of use was lower in each older group. Over the same decade, the number of physical banking facilities fell considerably, with branches disappearing at a faster rate than cash machines.\n\nIn 2015, almost half of 18–29-year-olds (48%) banked on their phones, compared with only 6% of people aged 60 and over. By 2025, the figure for the youngest group had nearly doubled to 92%. The largest rise in percentage points was among 30–44-year-olds, whose rate increased from 35% to 85%, while the proportion of 45–59-year-olds using the service more than tripled, from 20% to 64%. Although the over-60s remained the least likely to bank on their phones, their figure rose more than sixfold, to 38%.\n\nTurning to the table, the number of bank branches dropped from 4,200 to 2,300, a fall of about 45%. Cash machines also became less common, decreasing by just over a third, from 61,000 to 39,500.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "With two visuals, spend the first two or three minutes deciding how they are related and what the single most important feature of each is. Write those two features as your overview before you write any details.",
    },
    {
      exam: "ielts",
      body: "Check every calculation you include. *More than doubled*, *just over a third* and *more than sixfold* are powerful, but one wrong calculation weakens the accuracy of your report. Where a graph does not show an exact point, such as the year two lines cross, say *between 2020 and 2022*.",
    },
    {
      exam: "ielts",
      body: "Percentages and percentage points are different. A rise from 20% to 30% is an increase of 10 *percentage points*, but an increase of 50% *in the rate itself*. Choose the measure that makes your comparison clearest, and name it correctly.",
    },
  ],
  vocabulary: [
    { word: "breakdown", meaning: "a division of a total into its separate parts", example: "The table provides a breakdown of the figures by type of charger.", topic: "academic" },
    { word: "proportion", meaning: "a part of a total, often given as a percentage", example: "A growing proportion of older adults now bank online.", topic: "academic" },
    { word: "percentage point", meaning: "the unit used for the difference between two percentages", example: "The rate rose by 50 percentage points, from 35% to 85%.", topic: "academic" },
    { word: "-fold", meaning: "(added to a number) multiplied by that number", example: "The number of fast chargers increased more than thirtyfold.", topic: "academic" },
    { word: "overtake", meaning: "to become greater in number or amount than something else", example: "Battery electric cars overtook hybrids before 2022.", topic: "academic" },
    { word: "outnumber", meaning: "to be more in number than another group", example: "In 2016, hybrids outnumbered battery electric cars.", topic: "academic" },
    { word: "dominant", meaning: "the largest, strongest or most important", example: "Standard chargers remained the dominant type.", topic: "academic" },
    { word: "modestly", meaning: "to a small or limited degree", example: "Hybrid numbers grew far more modestly than battery electric numbers.", topic: "academic" },
    { word: "infrastructure", meaning: "the basic systems a country needs, such as roads, power supplies and charging networks", example: "The charging infrastructure expanded rapidly after 2020.", topic: "technology" },
    { word: "branch", meaning: "a local office or shop that is part of a larger organisation, such as a bank", example: "The bank closed forty branches last year.", topic: "business" },
    { word: "widespread", meaning: "happening or existing in many places or among many people", example: "Mobile banking became widespread among younger adults.", topic: "technology" },
  ],
  keyPoints: [
    "With two visuals, selection is the key skill: report main trends, extremes, exceptions and changes in ranking, not every figure.",
    "Write an overview that contains one main feature from each visual.",
    "Use one body paragraph per visual unless both visuals share the same categories.",
    "Link the visuals with Over the same period or Turning to the table; never claim a cause the data do not show.",
    "Check every calculation, and distinguish percentages from percentage points.",
  ],
};

export default lesson;
