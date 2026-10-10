import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-describing-charts",
  title: "Describing line and bar charts",
  summary:
    "Write a well-organised IELTS Academic Task 1 report: paraphrase the task, write a clear overview, and describe trends and comparisons with accurate language of change.",
  skill: "writing",
  level: "B2",
  order: 1,
  minutes: 35,
  exams: [{ exam: "ielts", task: "Writing Task 1 (Academic)" }],
  objectives: [
    "Organise a Task 1 report into an introduction, an overview and two detail paragraphs",
    "Write an overview that summarises the main trends without detailed figures",
    "Describe change accurately with verbs, nouns, adjectives and adverbs",
    "Compare figures in bar charts using comparative and proportion language",
  ],
  warmUp: [
    "Think of something in your life that has changed over the last five years, such as the time you spend online. Did it rise steadily, fall, or go up and down?",
    "When you look at a chart for the first time, what do you notice first?",
  ],
  learn: [
    {
      type: "text",
      title: "What the task asks you to do",
      body: "In IELTS Academic Writing Task 1, you have about **20 minutes** to write **at least 150 words** describing a chart, graph or table. You must report the **main features** and make **comparisons**. You should **not** give your opinion or guess the reasons for the changes.\n\nA clear four-paragraph structure works for almost every line or bar chart:\n\n1. **Introduction**: paraphrase the title (what, where, when) in one sentence.\n2. **Overview**: the two or three most important features, such as the main trends or the highest and lowest categories. No detailed numbers here.\n3. **Details 1**: one group of data, with key figures.\n4. **Details 2**: the other group of data, with key figures and comparisons.",
    },
    {
      type: "table",
      title: "The language of change",
      headers: ["Direction", "Verbs", "Nouns", "Adjectives / adverbs"],
      rows: [
        ["Up", "rise, increase, grow, climb", "a rise, an increase, growth", "sharp / sharply, significant / significantly, steady / steadily"],
        ["Down", "fall, drop, decline, decrease", "a fall, a drop, a decline", "dramatic / dramatically, slight / slightly, gradual / gradually"],
        ["No change", "remain stable, stay the same, level off", "a period of stability", "(not needed)"],
        ["Up and down", "fluctuate", "a fluctuation", "(not needed)"],
        ["Highest or lowest point", "peak at, reach a peak of, fall to a low of", "a peak, a low", "(not needed)"],
      ],
    },
    {
      type: "example",
      title: "Two ways to describe the same change",
      items: [
        "Verb + adverb: Car sales **rose sharply** from 2 million to 3.5 million.",
        "Adjective + noun: There was **a sharp rise** in car sales, from 2 million to 3.5 million.",
        "Prepositions: rose **from** 20% **to** 35% (start and end) / rose **by** 15 percentage points (the difference) / peaked **at** 40% (the value) / **in** 2010 / **between** 2010 and 2015",
      ],
    },
    {
      type: "text",
      title: "Comparing in bar charts",
      body: "Bar charts often compare categories (countries, age groups, types of transport) rather than show change over time. Useful structures:\n\n- *Cars were **by far the most popular** way to travel.*\n- *The figure for buses was **slightly lower than that for** trains.*\n- ***Twice as many** students walked to school **as** cycled.*\n- *Walking **accounted for** 12% of journeys in both years.*\n- *The proportion of cyclists **more than doubled**.*",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "The overview is the most important paragraph. Reports with **no clear overview** usually cannot score above Band 5 for Task Achievement, however accurate the numbers are. Write it straight after the introduction and start it with *Overall,…*",
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*The line graph below shows the number of visitors to three museums in the city of Westbridge between 2014 and 2024.*\n\n*Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.*",
    },
    {
      type: "chart",
      chart: {
        kind: "line",
        title: "Visitors to three museums in Westbridge, 2014–2024",
        unit: "thousands",
        categories: ["2014", "2016", "2018", "2020", "2022", "2024"],
        series: [
          { name: "Science Museum", values: [420, 450, 510, 180, 390, 560] },
          { name: "Art Gallery", values: [300, 310, 305, 120, 280, 300] },
          { name: "City History Museum", values: [250, 230, 200, 90, 170, 160] },
        ],
      },
    },
    {
      type: "passage",
      title: "Model answer (189 words)",
      paragraphs: [
        "The line graph compares the number of people who visited three museums in Westbridge over a ten-year period, from 2014 to 2024.",
        "Overall, the Science Museum was the most popular of the three throughout the period, and it was the only one that had more visitors at the end than at the start. All three museums experienced a dramatic fall in 2020, but the Science Museum recovered most strongly.",
        "In 2014, the Science Museum attracted 420,000 visitors. This figure rose steadily to 510,000 in 2018, before dropping sharply to just 180,000 in 2020. After that, numbers climbed rapidly, and by 2024 they had reached a peak of 560,000.",
        "The Art Gallery's visitor numbers remained stable at around 300,000 between 2014 and 2018. After a decline to 120,000 in 2020, they returned to their original level of 300,000 by 2024. By contrast, the City History Museum saw a gradual decrease, from 250,000 in 2014 to 200,000 in 2018. It then fell to a low of 90,000 in 2020 and, despite a partial recovery to 170,000 two years later, finished the period at only 160,000, the lowest figure of the three.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Introduction**: the task's words are paraphrased: *shows the number of visitors* → *compares the number of people who visited*; *between 2014 and 2024* → *over a ten-year period*.\n- **Overview**: two key features (the most popular museum and the shared fall in 2020), with **no detailed figures**.\n- **Grouping**: the Science Museum has its own paragraph because it behaves differently. The other two museums are grouped and compared with *By contrast*.\n- **Range of language**: *rose steadily, dropping sharply, climbed rapidly, reached a peak, remained stable, a decline, a gradual decrease, fell to a low of*.\n- **Tenses**: past simple for past data, and past perfect with *by 2024* (*had reached*).\n- **No reasons**: the writer does not guess why numbers fell in 2020. That information is not in the graph.",
    },
  ],
  practice: [
    {
      type: "chart",
      chart: {
        kind: "line",
        title: "Share of electricity produced from three sources in Norland, 2000–2020",
        unit: "%",
        categories: ["2000", "2005", "2010", "2015", "2020"],
        series: [
          { name: "Coal", values: [55, 52, 45, 30, 15] },
          { name: "Gas", values: [30, 33, 35, 38, 35] },
          { name: "Renewables", values: [15, 15, 20, 32, 50] },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "gap",
        title: "Describe the trends",
        instructions: "Look at the line graph about Norland. Complete the description with words from the box. There are two extra words.",
        text: "Between 2000 and 2020, the share of electricity produced from coal {{0}} dramatically, from 55% to just 15%. Coal dropped {{1}} 15 percentage points in the last five years alone. In contrast, renewables {{2}} sharply after 2010 and {{3}} a high of 50% in 2020, when they {{4}} for half of all electricity. Before that, the figure for renewables remained {{5}} at 15% between 2000 and 2005. Gas rose {{6}} from 30% to 38% between 2000 and 2015, and then {{7}} slightly to 35%.",
        answers: [
          ["fell", "dropped", "declined", "decreased", "went down"],
          ["by"],
          ["rose", "increased", "grew", "climbed", "went up", "jumped"],
          ["reached", "hit"],
          ["accounted"],
          ["stable", "constant", "steady", "unchanged", "the same", "level", "flat"],
          ["steadily", "gradually", "slowly"],
          ["fell", "dropped", "declined", "decreased", "dipped", "went down"],
        ],
        wordBank: ["fell", "dropped", "by", "rose", "reached", "accounted", "stable", "steadily", "sharply", "at"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Verb phrase or noun phrase?",
        instructions: "Match each verb phrase with the phrase that has the same meaning. There is one extra option.",
        left: ["rose sharply", "fell slightly", "fluctuated", "declined gradually", "remained stable", "peaked"],
        right: [
          "a gradual decline",
          "a dramatic drop",
          "a sharp rise",
          "reached a peak",
          "a slight fall",
          "a period of stability",
          "a series of fluctuations",
        ],
        answer: [2, 4, 6, 0, 5, 3],
      },
    },
    {
      type: "chart",
      chart: {
        kind: "bar",
        title: "How people travelled to work in Eastport, 2005 and 2025",
        unit: "%",
        categories: ["Car", "Bus", "Train", "Bicycle", "Walking"],
        series: [
          { name: "2005", values: [52, 18, 12, 6, 12] },
          { name: "2025", values: [38, 16, 20, 14, 12] },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Overview and accuracy",
        instructions: "Look at the bar chart about Eastport and answer the questions.",
        questions: [
          {
            prompt: "Which is the best overview for this chart?",
            options: [
              "In 2005, 52% of people drove to work, 18% took the bus and 12% took the train.",
              "Overall, the car remained the most common way to get to work, but its share fell, while train travel and cycling became considerably more popular.",
              "Overall, people stopped driving because of traffic jams and high petrol prices.",
              "Overall, all forms of transport became more popular.",
            ],
            answer: 1,
            explanation: "A is too detailed for an overview, C gives reasons that are not in the chart, and D is wrong (car and bus use fell).",
          },
          {
            prompt: "Which sentence is accurate?",
            options: [
              "The proportion of cyclists more than doubled.",
              "Bus use rose slightly.",
              "Walking was the least common way to travel in 2005.",
              "Train use fell by 8 percentage points.",
            ],
            answer: 0,
            explanation: "Cycling rose from 6% to 14%, which is more than double. Bus use fell, cycling (not walking) was the least common in 2005, and train use rose.",
          },
          {
            prompt: "Which comparison is correct?",
            options: [
              "In 2025, train use was twice as high as bicycle use.",
              "In 2025, the figure for trains was higher than that for buses.",
              "In 2005, more people cycled than walked.",
              "In both years, buses were more popular than cars.",
            ],
            answer: 1,
            explanation: "In 2025, trains had 20% and buses 16%.",
          },
          {
            prompt: "Which sentence should NOT appear in a Task 1 report?",
            options: [
              "The share of commuters who drove fell from 52% to 38%.",
              "Walking accounted for 12% of journeys in both years.",
              "I think the city should build more cycle lanes.",
              "Train use rose by eight percentage points.",
            ],
            answer: 2,
            explanation: "Task 1 reports describe the data. Personal opinions and recommendations do not belong.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Writing Task 1: the Eastport bar chart",
        prompt:
          "The bar chart above shows the percentage of people who used different types of transport to travel to work in the city of Eastport in 2005 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task achievement: my introduction paraphrases the task and does not copy it word for word.",
          "Task achievement: I wrote a clear overview of the main features (the most common type of transport and the biggest changes).",
          "Task achievement: I supported the main features with accurate figures and did not give opinions or reasons.",
          "Coherence and cohesion: I grouped similar data into two detail paragraphs and used linkers such as while, by contrast and on the other hand.",
          "Lexical resource: I used a range of language for change and comparison (fell, more than doubled, accounted for, the figure for…).",
          "Grammatical range and accuracy: I used past tenses correctly, plus some comparative structures, with few errors.",
        ],
        modelAnswer:
          "The bar chart compares the proportion of commuters in Eastport who used five different methods of transport to get to work in 2005 and 2025.\n\nOverall, the car was the most popular way to travel to work in both years, although its share fell considerably. Over the same period, train travel and cycling became much more common, while the figures for buses and walking changed very little.\n\nIn 2005, just over half of all commuters (52%) drove to work. By 2025, this figure had dropped to 38%, a fall of 14 percentage points. By contrast, the share of people who took the train rose from 12% to 20%, which made it the second most popular option in 2025.\n\nCycling saw the largest relative increase. Only 6% of workers cycled to work in 2005, but this proportion more than doubled to 14% twenty years later. Bus use, on the other hand, fell slightly from 18% to 16%, and walking accounted for 12% of journeys in both years.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Do not describe every number. Select the key figures: the highest and lowest values, the start and end points, and the biggest changes. A report that lists every figure in order shows that you cannot identify the main features.",
    },
    {
      exam: "ielts",
      body: "Spend about **20 minutes** on Task 1 and about 40 on Task 2. Task 2 is worth twice as many marks, so do not go over time trying to make Task 1 perfect.",
    },
    {
      exam: "ielts",
      body: "Check the time period. Use past tenses for past years, the present perfect for change up to now, and future forms such as *is expected to* or *is predicted to* for projections.",
    },
  ],
  vocabulary: [
    { word: "trend", meaning: "a general direction in which something is changing", example: "The graph shows an upward trend in online sales.", topic: "academic" },
    { word: "overview", meaning: "a short summary of the most important features", example: "Start your second paragraph with a clear overview.", topic: "academic" },
    { word: "fluctuate", meaning: "to go up and down many times", example: "Oil prices fluctuated throughout the year.", topic: "academic" },
    { word: "peak", meaning: "the highest point or value", example: "Visitor numbers reached a peak in August.", topic: "academic" },
    { word: "steadily", meaning: "slowly and regularly, without sudden changes", example: "The population grew steadily during the 1990s.", topic: "academic" },
    { word: "proportion", meaning: "a part of a whole, often given as a percentage", example: "A small proportion of students walked to school.", topic: "academic" },
    { word: "account for", meaning: "to form a particular amount or part of something", example: "Cars accounted for 38% of journeys to work.", topic: "academic" },
    { word: "considerably", meaning: "by a large amount", example: "Train use increased considerably after the new line opened.", topic: "academic" },
    { word: "by contrast", meaning: "used to show a clear difference between two things", example: "Car use fell. By contrast, cycling became more popular.", topic: "academic" },
    { word: "percentage point", meaning: "the difference between two percentages, e.g. 12% to 20% is 8 percentage points", example: "Unemployment rose by two percentage points.", topic: "academic" },
    { word: "commuter", meaning: "a person who travels regularly to and from work", example: "Most commuters in the city use public transport.", topic: "travel" },
  ],
  keyPoints: [
    "Use four paragraphs: introduction (paraphrase), overview, details 1, details 2.",
    "The overview summarises the main trends with no detailed figures and is essential for a good score.",
    "Describe change with a mix of verb + adverb (rose sharply) and adjective + noun (a sharp rise).",
    "Group data logically and compare it; select key figures instead of listing every number.",
    "Never give opinions or reasons that are not shown in the chart.",
  ],
};

export default lesson;
