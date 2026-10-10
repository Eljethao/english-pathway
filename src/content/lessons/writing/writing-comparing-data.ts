import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-comparing-data",
  title: "Comparing data and approximating",
  summary:
    "Make precise comparisons in IELTS Academic Task 1 with modified comparatives, superlatives, multiples and fractions, and round figures naturally with phrases such as just under a third and well over half.",
  skill: "writing",
  level: "B2",
  order: 6,
  minutes: 35,
  exams: [{ exam: "ielts", task: "Writing Task 1 (Academic)" }],
  objectives: [
    "Show the size of a difference with modified comparatives and superlatives (marginally higher, by far the largest, the second highest)",
    "Express multiples and fractions accurately (three times as much as, half as many as, two thirds of)",
    "Approximate figures naturally (just over, nearly, roughly, well under) without changing the pattern",
    "Avoid common accuracy errors: fewer/less, number/amount, percent/percentage points",
  ],
  warmUp: [
    "Compare two cities, shops or phones you know. Which is bigger, cheaper or more popular, and by how much?",
    "If 48 out of every 100 students walk to school, how could you say this without using the number 48?",
  ],
  learn: [
    {
      type: "text",
      title: "Why comparisons matter",
      body: "Every Academic Task 1 prompt ends with the same instruction: *make comparisons where relevant*. A report that describes each category on its own (*Ardmoor used 300 kWh. Belvane used 480 kWh. Corrin used 290 kWh.*) may be accurate, but it does not compare anything. Strong reports link figures together: Belvane used **far more** electricity in summer **than** any other city.\n\nStrong reports also round figures sensibly, so that the reader sees the pattern instead of a list of numbers. Earlier in this course you met basic comparisons such as *by far the most popular* and *twice as many … as*. This lesson adds precision: modifiers, multiples, approximation and the most common accuracy errors.",
    },
    {
      type: "table",
      title: "Showing the size of a difference",
      headers: ["Size of difference", "Example"],
      rows: [
        ["Very small", "Prices in May were **marginally / slightly higher than** in April."],
        ["Large", "Women spent **considerably / significantly / far more** time on housework **than** men."],
        ["Very large (superlative)", "Rice was **by far the most important** export."],
        ["Rank", "The north was **the second most populous** region, **after** the capital."],
        ["Equal or almost equal", "Boys read **almost as many** books **as** girls. / The two figures were **virtually identical**."],
        ["Much smaller", "Tablets were **not nearly as popular as** laptops."],
      ],
    },
    {
      type: "table",
      title: "Multiples and fractions",
      headers: ["Structure", "Example"],
      rows: [
        ["twice / three times **as** + adjective **as**", "Car journeys were **three times as common as** bus journeys."],
        ["twice / three times **as many** (countable) / **as much** (uncountable) **as**", "Factory A produced **twice as much** steel **as** Factory B."],
        ["**half as** many / much **as**", "Men spent **half as much** time on cooking **as** women."],
        ["**double / triple** + the + noun", "The number of visitors was **double the figure** for 2010."],
        ["verbs: **double, triple, halve**", "Sales **doubled** between 2015 and 2020, while costs **halved**."],
        ["fraction + **of**", "Cycling accounted for **a third of** all journeys."],
      ],
    },
    {
      type: "text",
      title: "Approximating: when and how",
      body: "Exact figures matter, but a report full of exact numbers is hard to read. Approximation helps the reader see the pattern: *just under a quarter* is easier to picture than *24%*. You can give both together: *just under a quarter (24%)*.\n\nApproximation must still be **accurate**. 24% is *just under* a quarter, not *just over*. 61% is *well over half*, not *nearly half*. And never round in a way that changes the pattern: 45% is not *the majority*.",
    },
    {
      type: "table",
      title: "Approximation language",
      headers: ["Phrase", "Use it when the figure is…", "Example"],
      rows: [
        ["just over / slightly more than", "a little above a round number or fraction", "51% → just over half"],
        ["just under / nearly / almost / slightly less than", "a little below a round number or fraction", "24% → just under a quarter; 48% → nearly half"],
        ["well over / well above", "clearly above", "63% → well over half"],
        ["well under / well below", "clearly below", "38% → well under half"],
        ["about / around / roughly / approximately", "close, above or below", "32% → roughly a third; 1.98 million → about 2 million"],
        ["the vast majority / a small minority", "close to 100% / a small percentage", "92% → the vast majority; 7% → a small minority"],
      ],
    },
    {
      type: "text",
      title: "Accuracy traps",
      body: "- **fewer** + plural countable nouns (*fewer cars, fewer people*); **less** + uncountable nouns (*less electricity, less time*).\n- **the number of** + countable nouns (*the number of visitors*); **the amount of** + uncountable nouns (*the amount of water*); **the proportion of** or **the percentage of** + a group (*the proportion of households*).\n- **percent vs percentage points**: a rise from 20% to 30% is an increase of **10 percentage points**, but it is a **50% increase**, because 10 is half of 20.\n- **that of / those of**: avoid repeating a noun. The summer figure in Belvane was higher than **that of** any other city. / Prices in the north were higher than **those in** the south.\n- **respectively**: gives two figures in the same order as two nouns. Men and women spent 12 and 18 hours **respectively** on housework.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Comparisons do not need a separate paragraph. Build them into your detail sentences with *than*, *compared with*, *while* and *whereas*: *Women spent 18 hours a week on housework, compared with 12 hours for men.*",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: approximate the figure",
        instructions: "Match each figure with the most accurate phrase. There is one extra phrase.",
        left: ["24%", "51%", "65%", "8%", "33%", "77%"],
        right: [
          "roughly a third",
          "just over three quarters",
          "just under a quarter",
          "nearly half",
          "almost two thirds",
          "just over half",
          "fewer than one in ten",
        ],
        answer: [2, 5, 4, 6, 0, 1],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*The bar chart below shows the average amount of electricity used per household per month in five cities in summer and in winter.*\n\n*Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.*",
    },
    {
      type: "chart",
      chart: {
        kind: "bar",
        title: "Average monthly electricity use per household in five cities, summer and winter",
        unit: "kWh",
        categories: ["Ardmoor", "Belvane", "Corrin", "Dunmere", "Elsford"],
        series: [
          { name: "Summer", values: [300, 480, 290, 150, 260] },
          { name: "Winter", values: [610, 320, 590, 455, 265] },
        ],
      },
    },
    {
      type: "passage",
      title: "Model answer",
      paragraphs: [
        "The bar chart compares how much electricity an average household in five cities used per month in summer and in winter.",
        "Overall, electricity use was higher in winter than in summer in four of the five cities, and in three of them the difference was very large. Belvane was the only exception, as its households used more electricity in summer than in winter.",
        "In winter, Ardmoor and Corrin had the highest figures, at 610 and 590 kWh respectively, which was roughly twice their summer consumption. The seasonal gap was even wider in Dunmere. Its households used 455 kWh in winter, about three times as much as in summer, when the figure was the lowest on the chart at just 150 kWh.",
        "Belvane followed the opposite pattern. Its summer figure of 480 kWh was by far the highest for that season, while its winter use fell to 320 kWh, two thirds of the summer level. In Elsford, by contrast, there was almost no seasonal difference: consumption was 260 kWh in summer and 265 kWh in winter, which was the lowest winter figure of the five cities.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Overview**: it compares the two seasons across all the cities and names the exception (Belvane). There are no figures.\n- **Multiples**: *roughly twice*, *about three times as much as*, *two thirds of*. Each one is accurate: 610 ÷ 300 is just over 2, and 455 ÷ 150 is just over 3.\n- **Superlatives and rank**: *the highest figures*, *by far the highest for that season*, *the lowest on the chart*.\n- **respectively** gives two figures in one sentence instead of two separate sentences.\n- **Comparison linkers**: *while*, *by contrast*, *the opposite pattern*, *the only exception*.\n- **Grouping**: paragraph 3 covers the cities with a big winter increase; paragraph 4 covers the two cities that behave differently.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Choose the accurate sentence",
        questions: [
          {
            prompt: "Which sentence is correct?",
            options: [
              "There were less cars on the road in 2020.",
              "There were fewer cars on the road in 2020.",
              "There were fewer traffic on the road in 2020.",
              "There was fewer car on the road in 2020.",
            ],
            answer: 1,
            explanation: "*Cars* is a plural countable noun, so it takes *fewer*. *Traffic* is uncountable and would need *less*.",
          },
          {
            prompt: "Unemployment rose from 4% to 6%. Which description is accurate?",
            options: [
              "Unemployment rose by 2%.",
              "Unemployment tripled.",
              "Unemployment rose by 2 percentage points.",
              "Unemployment rose by 50 percentage points.",
            ],
            answer: 2,
            explanation: "The difference between 4% and 6% is 2 percentage points. In relative terms that is a 50% increase, so *rose by 2%* is inaccurate.",
          },
          {
            prompt: "Factory A produced 300 tonnes of steel and Factory B produced 100 tonnes. Which sentence is correct?",
            options: [
              "Factory A produced three times as much steel as Factory B.",
              "Factory A produced three times as many steel as Factory B.",
              "Factory A produced three times more steel that Factory B.",
              "Factory B produced a third as much steel than Factory A.",
            ],
            answer: 0,
            explanation: "*Steel* is uncountable, so use *as much … as*. The structure is *as … as*, never *as … than*, and the comparative takes *than*, not *that*.",
          },
          {
            prompt: "Which sentence uses *respectively* correctly?",
            options: [
              "Tea accounted for 30% respectively and coffee for 45%.",
              "Respectively, tea and coffee were both popular.",
              "Tea and coffee accounted for 30% and 45% of sales respectively.",
              "Tea and coffee respectively were sold.",
            ],
            answer: 2,
            explanation: "*Respectively* comes after two figures and matches them, in order, to the two nouns: tea 30%, coffee 45%.",
          },
          {
            prompt: "A loaf of bread cost €2.00 in Town X and €1.95 in Town Y. Which sentence is accurate?",
            options: [
              "Bread in Town X was considerably more expensive than in Town Y.",
              "Bread in Town X was twice as expensive as in Town Y.",
              "Prices in Town X were higher than that in Town Y.",
              "Bread in Town X was marginally more expensive than in Town Y.",
            ],
            answer: 3,
            explanation: "A difference of 5 cents is very small, so *marginally* (or *slightly*) fits. *Prices* is plural, so it needs *those in*, not *that in*.",
          },
          {
            prompt: "Which phrase is correct?",
            options: [
              "the number of water used by households",
              "the amount of water used by households",
              "the amount of households that used water",
              "the number of waters used by households",
            ],
            answer: 1,
            explanation: "*Water* is uncountable, so use *the amount of*. Use *the number of* with countable nouns such as *households*.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Complete the comparisons",
        instructions: "Complete each sentence with the correct word or phrase from the box. Check the figures carefully. There are two extra words.",
        text: "1. In 2024, 120 students studied French and 40 studied German, so three times as {{0}} students chose French.\n2. City A received 600 mm of rain and City B received 300 mm, so City B received {{1}} as much rain as City A.\n3. Car sales rose from 2 million to 4 million, which means that they {{2}} over the period.\n4. Westfield was the busiest of the four airports, and Lakeside, with 9 million passengers, was the second {{3}}.\n5. Rent and food made up 40% and 25% of household spending {{4}}.\n6. 48% of adults owned a bicycle, which is {{5}} half.\n7. The museum had 1,000 visitors in 2019 but only 700 in 2020, so it had 30% {{6}} visitors in 2020 than in 2019.\n8. The average household used 300 kWh in summer and 600 kWh in winter, so it used {{7}} electricity in summer than in winter.",
        answers: [
          ["many"],
          ["half"],
          ["doubled"],
          ["busiest"],
          ["respectively"],
          ["nearly", "almost", "just under", "slightly under", "slightly less than", "a little under", "a little less than", "roughly", "about", "around", "approximately", "close to", "just below", "slightly below", "a little below", "just less than", "not quite"],
          ["fewer"],
          ["less"],
        ],
        wordBank: ["many", "much", "half", "doubled", "tripled", "busiest", "respectively", "nearly", "fewer", "less"],
      },
    },
    {
      type: "chart",
      chart: {
        kind: "bar",
        title: "Main source of news for adults in Carnford, by age group, 2025",
        unit: "%",
        categories: ["18–29", "30–44", "45–59", "60+"],
        series: [
          { name: "Social media", values: [52, 31, 15, 6] },
          { name: "Television", values: [12, 24, 41, 58] },
          { name: "News websites and apps", values: [30, 38, 33, 16] },
          { name: "Print newspapers", values: [6, 7, 11, 20] },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Check the comparisons before you write",
        instructions: "Look at the bar chart about news sources in Carnford. In each age group, the four figures add up to 100%.",
        questions: [
          {
            prompt: "Which comparison is accurate?",
            options: [
              "Television was the main source of news for the majority of people aged 45–59.",
              "People aged 30–44 relied on print newspapers more than any other group.",
              "Among 18- to 29-year-olds, social media was more than four times as popular as television.",
              "News websites and apps were the most popular source in every age group.",
            ],
            answer: 2,
            explanation: "52% is more than four times 12%. Television was 41% for the 45–59 group, which is not a majority; the over-60s used print newspapers most (20%); and websites led only in the 30–44 group.",
          },
          {
            prompt: "Which approximation is accurate for the 60+ group?",
            options: [
              "Nearly three fifths relied mainly on television.",
              "Just under half relied mainly on television.",
              "Roughly a third relied mainly on print newspapers.",
              "The vast majority relied mainly on news websites and apps.",
            ],
            answer: 0,
            explanation: "58% is close to, and just below, 60% (three fifths). Print newspapers were 20% (a fifth), and websites only 16%.",
          },
          {
            prompt: "Which sentence about news websites and apps is accurate?",
            options: [
              "Their share was the same in every age group.",
              "They were the least popular source among 18- to 29-year-olds.",
              "They were less popular among 45- to 59-year-olds than among people aged 60 and over.",
              "They were the main source for the largest proportion of 30- to 44-year-olds, at 38%.",
            ],
            answer: 3,
            explanation: "In the 30–44 group, 38% is higher than social media (31%), television (24%) and print (7%).",
          },
          {
            prompt: "Which is the best overview?",
            options: [
              "Overall, 52% of 18- to 29-year-olds used social media, and 58% of over-60s watched television.",
              "Overall, younger adults relied mainly on social media and news websites, whereas television, and to a lesser extent print newspapers, became more important with age.",
              "Overall, older people do not understand social media.",
              "Overall, all age groups preferred television.",
            ],
            answer: 1,
            explanation: "An overview summarises the main patterns without detailed figures. The third option is an opinion, and the fourth is wrong.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Writing Task 1: news sources in Carnford",
        prompt:
          "The bar chart above shows the main source of news for adults in four age groups in the town of Carnford in 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task achievement: my overview presents the main patterns across the age groups clearly, with no detailed figures.",
          "Task achievement: I selected key figures (the highest and lowest values and the biggest differences) and made comparisons, instead of describing each bar separately.",
          "Task achievement: every figure, multiple and approximation I used matches the chart.",
          "Coherence and cohesion: I grouped the sources logically (for example, those that fall with age and those that rise with age) and linked my comparisons with whereas, compared with and by contrast.",
          "Lexical resource: I used a range of comparison and approximation language (more than four times, nearly three fifths, by far, the second most popular).",
          "Grammatical range and accuracy: I used comparatives, superlatives and respectively correctly, and chose fewer/less and number/proportion accurately.",
          "Length: I wrote at least 150 words in about 20 minutes.",
        ],
        modelAnswer:
          "The bar chart compares the main sources of news for adults in four age groups in Carnford in 2025.\n\nOverall, younger adults relied mainly on social media and news websites, whereas television, and to a lesser extent print newspapers, became more important with age. News websites and apps were fairly popular in every group except the oldest.\n\nSocial media was by far the most common source among 18- to 29-year-olds, at just over half (52%), more than four times the figure for television (12%). However, its share fell sharply with age, to 31% among 30- to 44-year-olds and only 6% among people aged 60 and over. News websites and apps were the main source for 38% of the 30–44 group, the highest of any source in that group, and for around a third of 18- to 29-year-olds and 45- to 59-year-olds (30% and 33% respectively). For the oldest group, however, the figure was just 16%.\n\nTelevision, on the other hand, became steadily more popular with age. Only 12% of the youngest adults relied on it, compared with 41% of 45- to 59-year-olds and nearly three fifths (58%) of the over-60s, which was the highest figure on the chart. Print newspapers were the least common source in the three younger groups, at between 6% and 11%, but their share rose to a fifth among people aged 60 and over, slightly more than the share for news websites.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "The Task 1 instructions always ask you to *make comparisons where relevant*. A report that describes each category separately, with no comparisons, does not fully answer the task, however accurate the numbers are.",
    },
    {
      exam: "ielts",
      body: "Approximate, but do not distort. *Just under a quarter (24%)* and *roughly 600 kWh* are fine. Calling 45% *the majority* or 24% *just over a quarter* is an inaccuracy, not an approximation.",
    },
    {
      exam: "ielts",
      body: "Vary the way you present numbers: an exact figure (*610 kWh*), a fraction (*two thirds*), a multiple (*three times as much as*) or a rank (*the second highest*). This shows range without making your report harder to follow.",
    },
  ],
  vocabulary: [
    { word: "marginally", meaning: "by a very small amount", example: "Prices in Town X were marginally higher than in Town Y.", topic: "academic" },
    { word: "significantly", meaning: "by a large or important amount", example: "Winter consumption was significantly higher in Ardmoor.", topic: "academic" },
    { word: "respectively", meaning: "in the same order as the things you have just mentioned", example: "Rent and food made up 40% and 25% of spending respectively.", topic: "academic" },
    { word: "approximately", meaning: "close to an exact number, but not exactly", example: "Approximately two thirds of households owned a car.", topic: "academic" },
    { word: "the vast majority", meaning: "almost all of a group", example: "The vast majority of students passed the test.", topic: "society" },
    { word: "minority", meaning: "a smaller part of a group, less than half", example: "Only a small minority of adults read print newspapers.", topic: "society" },
    { word: "exceed", meaning: "to be greater than a particular number or amount", example: "In winter, consumption exceeded 600 kWh in Ardmoor.", topic: "academic" },
    { word: "consumption", meaning: "the amount of energy, food or another resource that is used", example: "Electricity consumption doubled in winter.", topic: "environment" },
    { word: "seasonal", meaning: "happening at or depending on a particular time of year", example: "There was a large seasonal difference in Dunmere.", topic: "environment" },
    { word: "virtually", meaning: "almost completely", example: "The summer and winter figures in Elsford were virtually identical.", topic: "academic" },
    { word: "whereas", meaning: "used to compare two facts and show that they are different", example: "Young people preferred social media, whereas older people watched television.", topic: "academic" },
    { word: "rely on", meaning: "to depend on someone or something", example: "Most people over 60 relied on television for news.", topic: "technology" },
  ],
  keyPoints: [
    "Every Task 1 report must compare: link figures with than, as … as, compared with, whereas and the second highest.",
    "Show the size of a difference with modifiers: marginally, slightly, considerably, far, by far.",
    "Use multiples and fractions accurately: three times as much as, half as many as, two thirds of.",
    "Approximate naturally (just under a quarter, well over half) without changing the pattern.",
    "Check fewer/less, number/amount and percent/percentage points before you finish.",
  ],
};

export default lesson;
