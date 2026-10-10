import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-tables-pie-charts",
  title: "Describing tables and pie charts",
  summary:
    "Select and group the key figures in a table, describe pie charts with fractions and proportion language, and write a complete IELTS Academic Task 1 report on either type.",
  skill: "writing",
  level: "B2",
  order: 5,
  minutes: 35,
  exams: [{ exam: "ielts", task: "Writing Task 1 (Academic)" }],
  objectives: [
    "Find the main features of a table by looking for the highest and lowest values, patterns and exceptions",
    "Group table data into two logical detail paragraphs instead of listing every number",
    "Describe the parts of a pie chart with fractions and verbs such as account for, make up and represent",
    "Compare two pie charts from different years and write a clear overview of the changes in share",
  ],
  warmUp: [
    "If you drew a pie chart of a typical weekday, which activity would take up the biggest slice? Which would be the smallest?",
    "When you see a table full of numbers, how do you decide which ones are important?",
  ],
  learn: [
    {
      type: "text",
      title: "Tables: find the story yourself",
      body: "A line graph shows a trend at a glance. A table does not: it is just rows and columns of numbers, so **you** have to find the main features. Many candidates simply turn the table into sentences, row by row. The result is a long list of figures with no overview, which is exactly what examiners do not want to see.\n\nBefore you write, spend two or three minutes on these steps:\n\n1. Read the title, the units (%, thousands, hours) and the time period.\n2. In each column, mark the **highest** and **lowest** value.\n3. Look for **patterns**: which rows rise or fall together? Which categories are always near the top?\n4. Find the **exception**: a row or column that behaves differently is often worth a sentence in your overview.\n5. If there is a **total** row or column, use it. It often gives you part of your overview.\n\nThen group your detail paragraphs by pattern (for example, *activities that increase with age* and *activities that decrease with age*) instead of describing the rows in the order they appear.",
    },
    {
      type: "table",
      title: "Choosing how to group a table",
      headers: ["The table shows…", "A good way to group the details", "Example"],
      rows: [
        [
          "Several categories over several years",
          "Categories with a similar trend together",
          "Paragraph 1: the three devices that became more common. Paragraph 2: the device that declined and the one that hardly changed.",
        ],
        [
          "Several groups in one year (age groups, regions, companies)",
          "By pattern, or the highest groups and then the lowest",
          "Paragraph 1: activities that increase with age. Paragraph 2: activities that decrease with age.",
        ],
        [
          "Two or three measures for each category (price, sales, profit)",
          "By measure, one column at a time",
          "Paragraph 1: prices. Paragraph 2: sales and profit.",
        ],
      ],
    },
    {
      type: "text",
      title: "Pie charts: parts of a whole",
      body: "A pie chart shows how **one total (100%) is divided** into parts. The key features are usually:\n\n- the **largest** and **smallest** parts\n- parts that are **similar** in size, or one part that is much bigger than all the others\n- with two pie charts from different years, the **biggest changes in share**\n\nTwo pie charts from different years are really a *change* task: use past tenses and the language of change (*the share of waste sent to landfill fell from 60% to 20%*). Two pie charts for different places or groups in the same year are a *comparison* task (*rent made up a larger share of spending in the city than in the countryside*).\n\nThe chart tool in this course draws only lines and bars, so pie chart data is shown here as a table and a bar chart. In the exam you would see the same figures as slices of a circle.",
    },
    {
      type: "table",
      title: "Proportion language",
      headers: ["Percentage", "Fraction or phrase", "Example sentence"],
      rows: [
        ["50%", "half", "Food accounted for **half** of all spending."],
        ["25% / 75%", "a quarter / three quarters", "Cars made up **three quarters** of all vehicles."],
        ["33% / 67%", "a third / two thirds", "Online sales represented **a third** of the total."],
        ["20% / 60%", "a fifth, one in five / three fifths", "**One in five** households used gas heating."],
        ["10%", "a tenth / one in ten", "Transport took up **a tenth** of the budget."],
        ["more than 50%", "the majority / more than half", "**The majority** of household waste was buried."],
        ["a very small percentage", "a small minority / a tiny fraction", "Only **a small minority** of people cycled to work."],
      ],
    },
    {
      type: "example",
      title: "Verbs and phrases for parts of a whole",
      items: [
        "Recycling **accounted for** 40% of household waste in 2025.",
        "Students **made up** a quarter of the library's users.",
        "Rent **represented** the largest share of household spending, at 35%.",
        "**The largest share** of the budget went on housing, **followed by** food and transport.",
        "Weak: *The chart shows 40% is recycling.* → Better: Recycling **accounted for** 40% **of household waste**. (Always say what the percentage refers to.)",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Do not describe the slices in the order they appear in the key. Start with the most important part (usually the largest, or the one that changed most), and always say what each percentage refers to: *40% of household waste*, not just *40%*.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: proportion verbs and phrases",
        instructions: "Match each beginning with the correct ending. There is one extra ending.",
        left: [
          "Recycling accounted",
          "Students made",
          "Housing represented",
          "One in",
          "The majority",
          "Rent was the largest item of spending,",
        ],
        right: [
          "five households used gas heating.",
          "followed by food and transport.",
          "for 40% of all household waste.",
          "of 30% from the total.",
          "of household waste was sent to landfill.",
          "up a quarter of the library's users.",
          "the largest share of spending, at 35%.",
        ],
        answer: [2, 5, 6, 0, 4, 1],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*The table below shows the average number of hours per week that people in four age groups in the country of Pellmark spent on five leisure activities in 2024.*\n\n*Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.*",
    },
    {
      type: "table",
      title: "Average hours per week spent on leisure activities, by age group, Pellmark, 2024",
      headers: ["Activity", "16–24", "25–44", "45–64", "65+"],
      rows: [
        ["Watching TV", "8", "10", "14", "22"],
        ["Social media", "14", "9", "5", "2"],
        ["Meeting friends", "9", "6", "6", "7"],
        ["Sport and exercise", "6", "4", "3", "3"],
        ["Reading", "2", "3", "5", "8"],
        ["Total", "39", "32", "33", "42"],
      ],
    },
    {
      type: "passage",
      title: "Model answer (229 words)",
      paragraphs: [
        "The table compares how many hours a week people in four age groups in Pellmark spent on five different leisure activities in 2024.",
        "Overall, people aged 65 and over spent the most time on these activities, while those aged 25 to 44 spent the least. Watching television and reading were more popular among older people, whereas the opposite was true of social media and sport.",
        "Television took up more time than any other activity in every age group except the youngest. People aged 16 to 24 watched it for 8 hours a week, but this figure rose with each age group and reached 22 hours among the over-65s, the highest figure for any single activity. Reading followed a similar pattern on a smaller scale, increasing from just 2 hours for the youngest group to 8 hours for the oldest.",
        "By contrast, 16- to 24-year-olds spent 14 hours a week on social media, more than on any other activity, compared with only 2 hours among people aged 65 and over. Time spent on sport also fell with age, from 6 hours in the youngest group to 3 hours in both of the older groups. Meeting friends was the only activity with no clear pattern: it fell from 9 hours among the youngest group to 6 hours in the two middle groups, before rising slightly to 7 hours among the over-65s.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Preparation**: before writing, the writer marked the highest and lowest figure in each row and noticed two opposite patterns: some activities rise with age and others fall.\n- **Overview**: it uses the **Total** row (which groups spent the most and the least time on these activities) and the two patterns. There are no detailed figures.\n- **Grouping**: paragraph 3 covers the activities that increase with age (TV and reading). Paragraph 4 covers those that decrease (social media and sport), plus the exception (meeting friends). The rows are **not** described in the order of the table.\n- **Selection**: not every number is mentioned. The writer gives the figures for the youngest and oldest groups, plus the highest figure for a single activity (22 hours).\n- **Comparison language**: *more time than any other activity, the highest number in the table, followed a similar pattern, by contrast, compared with, the only activity that…*",
    },
  ],
  practice: [
    {
      type: "table",
      title: "Percentage of households owning selected devices in Ostravia, 2010–2022",
      headers: ["Device", "2010 (%)", "2016 (%)", "2022 (%)"],
      rows: [
        ["Laptop", "55", "68", "74"],
        ["Desktop computer", "70", "52", "30"],
        ["Tablet", "10", "42", "48"],
        ["Games console", "38", "40", "41"],
        ["Smart speaker", "1", "8", "35"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Find the key features in a table",
        instructions: "Look at the table about device ownership in Ostravia and answer the questions.",
        questions: [
          {
            prompt: "Which is the best overview for this table?",
            options: [
              "Overall, laptop ownership rose from 55% in 2010 to 68% in 2016 and then to 74% in 2022.",
              "Overall, the desktop computer was the only device that became less common, and the laptop replaced it as the most widely owned device. Tablets and smart speakers grew the fastest.",
              "Overall, people bought laptops instead of desktops because laptops are easier to carry.",
              "Overall, all five devices became more popular between 2010 and 2022.",
            ],
            answer: 1,
            explanation: "The first option gives details about one device only, the third gives a reason that is not in the table, and the fourth is wrong: desktop ownership fell.",
          },
          {
            prompt: "Which is the most logical way to group the details into two paragraphs?",
            options: [
              "Paragraph 1: the first two rows of the table. Paragraph 2: the last three rows.",
              "Paragraph 1: the devices you own yourself. Paragraph 2: the devices you do not own.",
              "Paragraph 1: laptops, tablets and smart speakers (strong growth). Paragraph 2: desktop computers (a large fall) and games consoles (almost no change).",
              "Paragraph 1: 2010 and 2016. Paragraph 2: nothing, because 2022 is not important.",
            ],
            answer: 2,
            explanation: "Grouping by pattern lets you compare similar devices and makes the report easy to follow.",
          },
          {
            prompt: "Which sentence is accurate?",
            options: [
              "Smart speaker ownership rose more between 2016 and 2022 than between 2010 and 2016.",
              "Tablet ownership grew steadily over the whole period.",
              "In 2016, desktop computers were still more common than laptops.",
              "Games consoles were owned by fewer households in 2022 than in 2010.",
            ],
            answer: 0,
            explanation: "Smart speakers rose by 27 percentage points (8% to 35%) in the second period, compared with 7 points (1% to 8%) in the first. Tablet growth was rapid and then slow, laptops overtook desktops by 2016, and console ownership rose slightly.",
          },
          {
            prompt: "Which detail is the LEAST important to include in your report?",
            options: [
              "Desktop ownership fell from 70% to 30%.",
              "Smart speaker ownership rose from 1% to 35%.",
              "In 2022, 74% of households owned a laptop, the highest figure for that year.",
              "Games console ownership rose by one percentage point between 2016 and 2022.",
            ],
            answer: 3,
            explanation: "Such a small change is better summarised in one phrase: console ownership remained stable at around 40%.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Describe the table",
        instructions: "Complete this description of the Ostravia table with words from the box. There are three extra words.",
        text: "In 2010, desktop computers were the most widely owned device: 70% of households {{0}} one. Over the next twelve years, however, this figure fell steadily to 30%, which was the {{1}} figure in the table for 2022. Laptops, by contrast, became the most common device. Ownership rose from 55% to 74%, so almost three {{2}} of households had a laptop by the end of the period.\n\nTablets and smart speakers saw the {{3}} growth. Only one in {{4}} households owned a tablet in 2010, but this proportion had risen to 48% by 2022. Smart speakers were almost unknown in 2010, but by 2022 they were found in just over a {{5}} of homes. Games console ownership remained {{6}} at around 40% throughout the period.",
        answers: [
          ["had", "owned"],
          ["lowest"],
          ["quarters"],
          ["fastest", "biggest", "largest", "greatest", "strongest", "sharpest", "most rapid", "most", "highest"],
          ["ten", "10"],
          ["third"],
          ["stable", "steady", "constant", "level", "flat", "unchanged"],
        ],
        wordBank: ["had", "lowest", "quarters", "fastest", "ten", "third", "stable", "highest", "fifth", "slowest"],
      },
    },
    {
      type: "text",
      title: "Pie charts: waste disposal in Hartfield",
      body: "*The two pie charts show how household waste was disposed of in the city of Hartfield in 2005 and 2025.*\n\nIn the exam you would see two pie charts, one for each year. Here the same figures are shown as a table and a bar chart. Each year adds up to 100%.",
    },
    {
      type: "table",
      title: "How household waste was disposed of in Hartfield (% of all household waste)",
      headers: ["Method", "2005", "2025"],
      rows: [
        ["Landfill", "60", "20"],
        ["Recycling", "15", "40"],
        ["Incineration", "15", "20"],
        ["Composting", "5", "15"],
        ["Other", "5", "5"],
        ["Total", "100", "100"],
      ],
    },
    {
      type: "chart",
      chart: {
        kind: "bar",
        title: "How household waste was disposed of in Hartfield, 2005 and 2025",
        unit: "%",
        categories: ["Landfill", "Recycling", "Incineration", "Composting", "Other"],
        series: [
          { name: "2005", values: [60, 15, 15, 5, 5] },
          { name: "2025", values: [20, 40, 20, 15, 5] },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Plan your pie chart report",
        instructions: "Look at the Hartfield data and answer the questions.",
        questions: [
          {
            prompt: "Which is the best overview?",
            options: [
              "Overall, landfill accounted for 60% of waste in 2005 and 20% in 2025.",
              "Overall, the city should recycle even more of its waste in the future.",
              "Overall, every method of disposal became more common over the period.",
              "Overall, Hartfield moved away from landfill: it was by far the main method in 2005, but by 2025 recycling had become the most common method.",
            ],
            answer: 3,
            explanation: "The first option is a detail about one method, the second is an opinion, and the third is wrong because landfill fell and the share of other methods stayed the same.",
          },
          {
            prompt: "Which sentence describes the 2005 data correctly?",
            options: [
              "Recycling and composting together made up a quarter of the total.",
              "Landfill made up three fifths of all household waste.",
              "Incineration accounted for a third of the total.",
              "Recycling made up the majority of household waste.",
            ],
            answer: 1,
            explanation: "60% is three fifths. Recycling and composting together were 20% (a fifth), and incineration was 15%.",
          },
          {
            prompt: "Which change is described correctly?",
            options: [
              "The share of composting doubled.",
              "The share of incineration remained unchanged.",
              "The share of recycling rose by 25 percentage points.",
              "The share of landfill fell by 40%.",
            ],
            answer: 2,
            explanation: "Recycling rose from 15% to 40%, a difference of 25 percentage points. Composting tripled (5% to 15%), incineration rose slightly, and landfill fell by 40 percentage points, which is a fall of two thirds, not 40%.",
          },
          {
            prompt: "Which sentence should NOT appear in your report?",
            options: [
              "The figure for other methods remained at 5% in both years.",
              "Landfill fell because people became more aware of environmental problems.",
              "Recycling became the most common method in 2025.",
              "Composting tripled, from 5% to 15%.",
            ],
            answer: 1,
            explanation: "The charts do not give reasons. Task 1 reports describe the data only.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Writing Task 1: the Hartfield pie charts",
        prompt:
          "The two pie charts (shown above as a table and a bar chart) show how household waste was disposed of in the city of Hartfield in 2005 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task achievement: my introduction paraphrases the task, and my overview presents the main features clearly (the main method in each year and the biggest changes).",
          "Task achievement: I compared the two years for the key methods and supported each point with accurate percentages.",
          "Task achievement: I did not give reasons, opinions or any information that is not in the charts.",
          "Coherence and cohesion: I grouped the data logically (for example, 2005 then 2025) and used linkers such as while, on the other hand and as a result.",
          "Lexical resource: I used proportion language accurately (accounted for, made up, three fifths, a fifth, the largest share) and did not repeat the same verb.",
          "Grammatical range and accuracy: I used the past simple and the past perfect (by 2025, … had dropped) correctly, with few errors.",
          "Length: I wrote at least 150 words in about 20 minutes.",
        ],
        modelAnswer:
          "The two pie charts compare the methods that were used to dispose of household waste in Hartfield in 2005 and 2025.\n\nOverall, there was a major shift away from landfill over the twenty-year period. In 2005, most rubbish was buried, whereas by 2025 recycling had become the most common method, and over half of all waste was either recycled or composted.\n\nIn 2005, landfill accounted for 60% of household waste, which was four times the share of either recycling or incineration, at 15% each. Composting and other methods made up only 5% each.\n\nBy 2025, the proportion of waste sent to landfill had dropped to just 20%, one third of its 2005 level. Recycling, on the other hand, rose from 15% to 40%, and composting tripled to 15%. As a result, these two methods together made up 55% of the total. Incineration grew slightly to a fifth of all waste, while the figure for other methods remained unchanged at 5%.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Before you write about a table, take two minutes to mark the highest and lowest figure in each column and to look for one exception. These are usually your key features, and they give you the material for your overview.",
    },
    {
      exam: "ielts",
      body: "Pie charts show **shares**, not amounts. If the share of landfill falls from 60% to 20%, you know that a smaller *proportion* of waste was buried, but you do not know whether the *amount* fell, because the total may have changed. Write *the proportion of…* or *the share of…*, not *less waste was buried*.",
    },
    {
      exam: "ielts",
      body: "Use a fraction only when it is accurate: 25% is *a quarter*, but 23% is not. For figures that are close to a fraction, add a word such as *nearly* or *just under* (*just under a quarter*).",
    },
  ],
  vocabulary: [
    { word: "make up", meaning: "to form a particular part of a total", example: "Students made up a quarter of the library's users.", topic: "academic" },
    { word: "represent", meaning: "to be equal to a particular amount or part of something", example: "Rent represented 35% of household spending.", topic: "academic" },
    { word: "share", meaning: "the part of a total that belongs to one group or category", example: "Recycling's share of household waste rose to 40%.", topic: "academic" },
    { word: "the remainder", meaning: "the part that is left after the rest has been mentioned", example: "Landfill took 60% of the waste, and the remainder was recycled, burned, composted or disposed of in other ways.", topic: "academic" },
    { word: "dispose of", meaning: "to get rid of something you no longer want", example: "The city disposes of most of its rubbish in landfill sites.", topic: "environment" },
    { word: "landfill", meaning: "a place where waste is buried under the ground", example: "The share of rubbish sent to landfill fell sharply.", topic: "environment" },
    { word: "incineration", meaning: "the burning of waste, sometimes to produce energy", example: "Incineration accounted for a fifth of household waste in 2025.", topic: "environment" },
    { word: "compost", meaning: "to turn food and garden waste into material that helps plants grow", example: "More families now compost their vegetable peelings.", topic: "environment" },
    { word: "leisure", meaning: "free time when you are not working or studying", example: "People over 65 had the most leisure time each week.", topic: "everyday" },
    { word: "household", meaning: "all the people who live together in one home", example: "Almost half of all households owned a tablet.", topic: "society" },
    { word: "time-consuming", meaning: "taking a lot of time", example: "Watching TV was the most time-consuming activity for older people.", topic: "everyday" },
    { word: "exception", meaning: "something that does not follow the usual pattern", example: "Most activities changed with age, with one exception: meeting friends.", topic: "academic" },
  ],
  keyPoints: [
    "Tables have no visual shape: mark the highest and lowest values, look for patterns and exceptions, and use any total row in your overview.",
    "Group table data by pattern, not in the order of the rows, and select key figures instead of listing them all.",
    "Pie charts show shares of 100%: describe the largest and smallest parts and, with two charts, the biggest changes in share.",
    "Use proportion language accurately (accounted for, made up, a quarter, one in five, the majority) and say what each percentage refers to.",
    "Never explain reasons that are not shown in the data.",
  ],
};

export default lesson;
