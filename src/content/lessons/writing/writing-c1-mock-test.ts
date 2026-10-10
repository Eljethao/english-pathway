import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-c1-mock-test",
  title: "C1 writing mock test",
  summary:
    "A full 60-minute IELTS Academic writing mock at C1 level: a Task 1 bar chart report and a Task 2 essay on short-term rental rules, with planning checks, band 8 model answers and self-assessment rubrics based on the public IELTS band descriptors.",
  skill: "writing",
  level: "C1",
  order: 12,
  minutes: 60,
  exams: [
    { exam: "ielts", task: "Mock test" },
    { exam: "ielts", task: "Writing Task 1 (Academic)" },
    { exam: "ielts", task: "Writing Task 2" },
  ],
  objectives: [
    "Complete IELTS Academic Writing Task 1 and Task 2 under full test conditions in 60 minutes",
    "Select, group and compare the key features of a bar chart with complete accuracy",
    "Write a nuanced, well-developed Task 2 essay that evaluates a development and maintains a clear position",
    "Assess your writing against band 7 and band 8 features of the four public criteria",
  ],
  warmUp: [
    "Have you ever stayed in a private home booked through a website instead of a hotel? What effect might this kind of tourism have on a neighbourhood?",
  ],
  learn: [
    {
      type: "text",
      title: "How this mock test works",
      body: "This is a complete IELTS Academic Writing test: **two tasks in 60 minutes**, with no extra time.\n\n- **Task 1** (about 20 minutes, at least 150 words): a bar chart.\n- **Task 2** (about 40 minutes, at least 250 words): an essay evaluating a development. Task 2 counts twice as much as Task 1.\n\nEach task begins with a short planning check, which is part of that task's time. Use a single 60-minute timer, work without a dictionary, and do not look at the model answers until both tasks are finished. Then assess each answer against the rubric, criterion by criterion, and compare it with the model.",
    },
    {
      type: "table",
      title: "Your time plan",
      headers: ["Stage", "Time"],
      rows: [
        ["Task 1: planning check, overview and grouping", "3–4 minutes"],
        ["Task 1: write", "13–14 minutes"],
        ["Task 1: check figures and accuracy", "2–3 minutes"],
        ["Task 2: planning check, position and paragraph plan", "5–6 minutes"],
        ["Task 2: write", "29–30 minutes"],
        ["Task 2: check", "4–5 minutes"],
      ],
    },
    {
      type: "table",
      title: "Band 7 and band 8: what the public descriptors emphasise",
      headers: ["Criterion", "Band 7 (in summary)", "Band 8 (in summary)"],
      rows: [
        ["Task Achievement / Task Response", "Covers the requirements of the task; a clear overview with main trends or differences identified (Task 1); a clear and developed position, with main ideas extended and supported, though there may be some over-generalisation or a lack of focus in the support (Task 2)", "Covers all requirements appropriately and sufficiently; key features skilfully selected and clearly illustrated (Task 1); a clear and well-developed position, with ideas that are relevant, well extended and supported (Task 2); only occasional omissions or lapses"],
        ["Coherence and Cohesion", "Logical organisation and a clear progression throughout; a range of cohesive devices, including reference and substitution, used flexibly but with some inaccuracies or over- or under-use; paragraphing generally effective", "The message can be followed with ease; logical sequencing; cohesion well managed, with only occasional lapses; paragraphing used sufficiently and appropriately"],
        ["Lexical Resource", "Enough range for some flexibility and precision; some less common or idiomatic items; awareness of style and collocation, though inappropriacies occur; only a few spelling or word-formation errors", "A wide range used fluently and flexibly to convey precise meanings; skilful use of uncommon or idiomatic items, despite occasional inaccuracies in word choice and collocation; occasional spelling or word-formation errors with minimal impact"],
        ["Grammatical Range and Accuracy", "A variety of complex structures used with some flexibility and accuracy; grammar and punctuation generally well controlled, with frequent error-free sentences; a few errors that do not impede communication", "A wide range of structures used flexibly and accurately; the majority of sentences error-free and punctuation well managed; only occasional, non-systematic errors"],
      ],
    },
  ],
  model: [
    {
      type: "text",
      title: "Reminders at band 7+ level",
      body: "1. **Task 1 overview**: identify the two or three most significant features, such as a reversal in rank or the only category that grew, rather than restating every change.\n2. **Group, don't list**: organise the detail paragraphs around comparisons, not one category per sentence in chart order.\n3. **Precision with figures**: use *percentage points* for differences between percentages, and check every number against the chart.\n4. **Task 2 position**: for *positive or negative*, a qualified answer is fine, but it must be clear in the introduction, the body and the conclusion.\n5. **Development**: one well-explained argument with its mechanism and consequence is worth more than three asserted ones.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "Task 1 (about 20 minutes)",
      body: "*The chart below shows the percentage of household spending that went on six categories in Calvria in 2004 and 2024.*\n\n*Summarise the information by selecting and reporting the main features, and make comparisons where relevant.*\n\n*Write at least 150 words.*",
    },
    {
      type: "chart",
      chart: {
        kind: "bar",
        title: "Share of household spending by category in Calvria, 2004 and 2024",
        unit: "%",
        categories: ["Housing", "Food", "Transport", "Leisure", "Health", "Other"],
        series: [
          { name: "2004", values: [22, 28, 15, 12, 5, 18] },
          { name: "2024", values: [34, 19, 14, 10, 9, 14] },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Task 1 planning check",
        instructions: "Use the chart above. These questions are part of your 20 minutes for Task 1.",
        questions: [
          {
            prompt: "Which overview identifies the most significant features?",
            options: [
              "Housing rose from 22% to 34%, food fell from 28% to 19%, and transport fell from 15% to 14%.",
              "Housing replaced food as the largest area of spending, and health was the only other category to grow, while the shares of the remaining categories fell.",
              "Household spending in Calvria changed a great deal between 2004 and 2024.",
              "Calvrians spent more on housing in 2024 because house prices increased.",
            ],
            answer: 1,
            explanation: "It picks out the reversal in rank and the only other category that grew, without detailed figures. A is detail, C is too vague, and D gives a reason not shown in the chart.",
          },
          {
            prompt: "Which statement is accurate?",
            options: [
              "The share spent on housing rose by 12 percentage points.",
              "The share spent on housing rose by 12%.",
              "Spending on health tripled.",
              "Leisure was the smallest category in 2024.",
            ],
            answer: 0,
            explanation: "22% to 34% is a rise of 12 percentage points (a relative increase of about 55%, so *12%* is wrong). Health rose from 5% to 9% (almost doubled), and health, not leisure, was the smallest category in both years.",
          },
          {
            prompt: "Why is it important to describe these figures as shares, not amounts?",
            options: [
              "Because the chart shows percentages of total spending, so a falling share does not necessarily mean households spent less money.",
              "Because IELTS does not allow you to use numbers in Task 1.",
              "Because the percentages are all estimates.",
              "It is not important: shares and amounts mean the same thing.",
            ],
            answer: 0,
            explanation: "If total spending rose, households might have spent more on food in 2024 even though food's share fell. Writing *spent less on food* would claim something the chart does not show.",
          },
          {
            prompt: "Which way of grouping the detail paragraphs is most effective?",
            options: [
              "Paragraph 1: housing and food (the two largest, which swapped places); paragraph 2: the other four categories.",
              "One paragraph for 2004 listing all six figures, and one for 2024 listing all six figures.",
              "One sentence for each category in the order shown in the chart, with no paragraphs.",
              "Paragraph 1: the reasons for the changes; paragraph 2: predictions for 2044.",
            ],
            answer: 0,
            explanation: "Grouping by significance allows direct comparison. Year-by-year lists make comparison hard, and reasons and predictions are not shown in the chart.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "write",
        title: "Writing Task 1: household spending in Calvria",
        instructions: "Write your report now. Move on to Task 2 at the 20-minute mark.",
        prompt:
          "The chart above shows the percentage of household spending that went on six categories in Calvria in 2004 and 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task Achievement: my overview identifies the most significant features (housing overtaking food; health the only other category to rise; the others falling) without detailed figures.",
          "Task Achievement: I selected and highlighted key features skilfully, every figure matches the chart, and I described shares (percentages, percentage points), not amounts of money.",
          "Task Achievement: I included no reasons, predictions or opinions that the chart does not show.",
          "Coherence and Cohesion: my detail paragraphs are grouped by comparison, not by year or chart order, and cohesion is smooth (while, whereas, these positions, the remaining categories).",
          "Lexical Resource: I used precise, varied language for proportions and change (accounted for, a share of, overtook, almost doubled, were reversed) with natural collocations.",
          "Grammatical Range and Accuracy: I used a wide range of structures (relative and participle clauses, passives, comparatives) and the majority of my sentences are error-free.",
          "Length: I wrote at least 150 words in about 20 minutes.",
        ],
        modelAnswer:
          "The bar chart compares the proportion of household spending that went on six categories in Calvria in 2004 and 2024.\n\nOverall, the most notable change was the rise of housing, which overtook food to become by far the largest area of spending. Health was the only other category whose share increased, while the proportions spent on food and, to a lesser extent, on the remaining categories declined.\n\nIn 2004, food accounted for the largest share of household budgets, at 28%, followed by housing at 22%. Over the next two decades, however, these positions were reversed: the share devoted to housing rose by 12 percentage points to just over a third of the total (34%), whereas the figure for food fell to 19%.\n\nOf the other four categories, health was the only one to grow, almost doubling from 5% to 9%, although it remained the smallest category in both years. Transport was virtually unchanged, at 15% and 14% respectively, while leisure fell slightly from 12% to 10%. The share classified as other spending also decreased, from 18% to 14%.",
      },
    },
    {
      type: "text",
      title: "Task 2 (about 40 minutes)",
      body: "*In some cities, the authorities have introduced rules that limit how many homes in a neighbourhood can be rented out to tourists through short-term rental websites.*\n\n*Is this a positive or negative development?*\n\n*Give reasons for your answer and include any relevant examples from your own knowledge or experience.*\n\n*Write at least 250 words.*",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Task 2 planning check",
        instructions: "These questions are part of your 40 minutes for Task 2.",
        questions: [
          {
            prompt: "What does this question require?",
            options: [
              "An evaluation of the rules as positive, negative or mainly one or the other, with a position that is clear throughout",
              "A description of how short-term rental websites work",
              "A discussion of two opposing views with no personal opinion",
              "A list of solutions to problems caused by tourism",
            ],
            answer: 0,
            explanation: "*Is this a positive or negative development?* asks for your evaluation. You can acknowledge both sides, but your overall judgement must be clear.",
          },
          {
            prompt: "Which thesis is best for a band 8 essay?",
            options: [
              "There are both positive and negative sides to this development.",
              "Tourism is a very important industry in many cities around the world.",
              "Although these rules impose real costs on some homeowners and visitors, I regard them as a largely positive development, because they protect housing for residents and preserve the character of popular neighbourhoods.",
              "These rules are completely negative because tourists should be free to stay wherever they want.",
            ],
            answer: 2,
            explanation: "It gives a clear, qualified judgement and previews two reasons, while acknowledging the costs. A has no position, B is off-question, and D is an unsupported extreme.",
          },
          {
            prompt: "Which body paragraph topic sentence is most likely to lead to a well-developed argument?",
            options: [
              "Tourism has many effects on cities.",
              "The strongest argument for such limits concerns housing supply.",
              "Many people use rental websites.",
              "Hotels are expensive.",
            ],
            answer: 1,
            explanation: "It states a specific, arguable point that can be developed with a mechanism (owners switch to tourist lets) and a consequence (fewer homes, higher rents).",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Writing Task 2: short-term rental rules",
        instructions: "Write your essay now. Keep the last 4–5 minutes for checking.",
        prompt:
          "In some cities, the authorities have introduced rules that limit how many homes in a neighbourhood can be rented out to tourists through short-term rental websites.\n\nIs this a positive or negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
        minWords: 250,
        minutes: 40,
        rubric: [
          "Task Response: I gave a clear evaluation (positive, negative or a qualified judgement) that is maintained in the introduction, every body paragraph and the conclusion.",
          "Task Response: my main ideas are well developed, with the mechanism and consequences explained and supported by relevant examples; I acknowledged the other side without losing my position.",
          "Coherence and Cohesion: each paragraph has one clear central idea, the argument progresses logically, and cohesion is managed through reference and summary nouns as well as linking words.",
          "Lexical Resource: I used a wide range of precise vocabulary and collocations (housing supply, financial incentive, long-term tenants, erode the character of) with very few errors.",
          "Grammatical Range and Accuracy: I used a wide range of structures (concessive clauses, conditionals, relative and participle clauses, cleft or fronted structures) and the majority of my sentences are error-free.",
          "Length: I wrote at least 250 words in about 40 minutes.",
        ],
        modelAnswer:
          "Short-term rental websites have transformed tourism in recent years, allowing travellers to stay in private homes rather than hotels. In response, a number of cities have begun to restrict how many properties in a neighbourhood can be let to tourists. Although these rules impose real costs on some homeowners and visitors, I regard them as a largely positive development, because they protect housing for residents and preserve the character of the neighbourhoods that attract tourists in the first place.\n\nThe strongest argument for such limits concerns housing supply. Every flat that is rented to a succession of tourists is a flat that is no longer available to a local household, and in popular districts the financial incentive to switch is considerable, since tourist bookings often earn far more than a conventional tenancy. When many owners make the same calculation, the supply of long-term housing shrinks and rents rise, pushing teachers, nurses and young workers out of the very areas where they work. A cap on tourist lets addresses this directly by returning a share of properties to the ordinary rental market.\n\nLimits also benefit neighbourhoods in less tangible ways. A street on which a large proportion of homes are occupied by visitors staying only a few nights tends to lose the shops, schools and community ties that sustain residential life, while gaining noise and a constant turnover of strangers. Paradoxically, this erodes the very authenticity that drew tourists there, so regulation can be seen as protecting the tourist economy as well as residents.\n\nAdmittedly, the rules have drawbacks. Some homeowners depend on occasional rental income, and travellers, particularly families, lose a cheaper alternative to hotels. However, these concerns can largely be met by distinguishing between residents who occasionally let a room or their own home, which the rules can continue to allow, and investors who operate entire buildings as unlicensed hotels.\n\nIn conclusion, while restrictions on short-term rentals reduce choice for some owners and visitors, they help to keep homes available and neighbourhoods liveable. Provided that they target commercial operators rather than occasional hosts, I believe they are a welcome development.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Spend the full 40 minutes on Task 2, because it counts twice as much as Task 1. If Task 1 is running over, finish your current sentence, make sure the overview is there, and move on.",
    },
    {
      exam: "ielts",
      body: "In Task 1, include an overview of the main trends or differences and do not give reasons that are not shown. With percentage data, distinguish carefully between *percentage points* (34% − 22% = 12 points) and *per cent* (a relative change).",
    },
    {
      exam: "ielts",
      body: "At band 7 and above, examiners look for range used with control. Use complex structures where they express your meaning precisely, and in your final check look for the errors you know you make under pressure, such as article use or subject–verb agreement in long sentences.",
    },
  ],
  vocabulary: [
    { word: "account for", meaning: "to form a particular part or proportion of something", example: "Food accounted for 28% of household spending.", topic: "academic" },
    { word: "percentage point", meaning: "the unit for the difference between two percentages", example: "Housing's share rose by 12 percentage points.", topic: "academic" },
    { word: "overtake", meaning: "to become larger or more important than something else", example: "Housing overtook food as the largest category.", topic: "academic" },
    { word: "be reversed", meaning: "to change to the opposite position or order", example: "By 2024 the two positions had been reversed.", topic: "academic" },
    { word: "housing supply", meaning: "the number of homes available to live in", example: "Tourist lets can reduce the housing supply in city centres.", topic: "society" },
    { word: "financial incentive", meaning: "a money-related reason that encourages people to do something", example: "Owners have a strong financial incentive to rent to tourists.", topic: "business" },
    { word: "tenancy", meaning: "an agreement to rent a property for a period of time", example: "A long-term tenancy gives families stability.", topic: "society" },
    { word: "intangible / less tangible", meaning: "difficult to measure or describe precisely", example: "The benefits to community life are less tangible but real.", level: "C1", topic: "society" },
    { word: "erode", meaning: "to gradually weaken or destroy something", example: "Mass tourism can erode a neighbourhood's character.", level: "C1", topic: "society" },
    { word: "authenticity", meaning: "the quality of being real or genuine", example: "Visitors are drawn by the authenticity of local life.", level: "C1", topic: "travel" },
    { word: "liveable", meaning: "pleasant and suitable for people to live in", example: "Regulation helps to keep neighbourhoods liveable.", topic: "society" },
  ],
  keyPoints: [
    "Full IELTS Academic Writing: two tasks in 60 minutes; Task 2 counts twice as much as Task 1.",
    "Task 1 at band 7+: a clear overview of the most significant features, detail grouped by comparison, and every figure accurate.",
    "With percentage data, describe shares and percentage-point changes, not amounts of money.",
    "Task 2 at band 7+: a clear, possibly qualified position maintained throughout, with each main idea developed through mechanism, consequence and example.",
    "Assess your answers against all four criteria, and compare them with the band 8 models to find your next step.",
  ],
};

export default lesson;
