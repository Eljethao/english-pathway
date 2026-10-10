import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-editing-common-errors",
  title: "Editing to band 7+: common errors",
  summary:
    "Find and fix common grammar and word errors that can hold advanced writers below band 7, and use a fast three-pass editing routine in the final minutes of any writing test.",
  skill: "writing",
  level: "C1",
  order: 4,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "toefl", task: "Writing – Academic Discussion" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Recognise ten common error types that can keep essays below band 7",
    "Correct errors in agreement, articles, uncountable nouns, word form and sentence boundaries",
    "Edit a whole paragraph systematically with a three-pass routine",
  ],
  warmUp: [
    "Which mistakes do teachers most often correct in your writing? Do you make them because you don't know the rule, or because you write quickly?",
    "How much time do you usually leave to check your work in a writing exam?",
  ],
  learn: [
    {
      type: "text",
      title: "Why editing matters at band 7+",
      body: "In the public IELTS band descriptors, at band 7 grammar and punctuation are *generally well controlled* and *error-free sentences are frequent*, while at band 8 *the majority of sentences are error-free*. Many C1 writers already know the rules; their errors often appear because they write quickly under pressure, so a few minutes of focused checking can make a real difference to the score.\n\nThe key is to check **systematically**. Rereading your essay “for mistakes” usually means reading for meaning, and your eyes slide over the errors. Instead, look for one type of error at a time.",
    },
    {
      type: "table",
      title: "Ten errors to hunt for",
      headers: ["Error type", "Wrong", "Right"],
      rows: [
        ["Subject–verb agreement", "The number of cars have increased.", "The number of cars has increased."],
        ["Uncountable nouns", "Many researches show… / an advice", "Much research shows… / a piece of advice"],
        ["Articles", "The technology is changing the society.", "Technology is changing society."],
        ["Word form", "It has a benefit effect.", "It has a beneficial effect."],
        ["Comma splice", "Prices rose, people bought less.", "Prices rose, so people bought less. / Prices rose; people bought less."],
        ["Sentence fragment", "Many people choose it. Because it is cheap.", "Many people choose it because it is cheap."],
        ["Preposition or collocation", "It has an effect to health. / We discussed about it.", "It has an effect on health. / We discussed it."],
        ["Tense consistency", "Since 2010, the price rose every year.", "Since 2010, the price has risen every year."],
        ["Parallel structure", "Cycling is cheap, healthy and it helps the environment.", "Cycling is cheap, healthy and good for the environment."],
        ["Dangling modifier", "Walking to school, the rain started.", "While I was walking to school, it started to rain."],
      ],
    },
    {
      type: "text",
      title: "A three-pass editing routine",
      body: "Use this routine in the last 3–5 minutes of an essay, or the last minute of a short task.\n\n1. **Verbs**: check every verb. Does it agree with its subject? Is the tense right? Is the form after *can, should, will* the base form? Is a passive needed?\n2. **Nouns**: check plurals, uncountable nouns (*research, evidence, information, advice, equipment*) and articles.\n3. **Sentence boundaries**: does every sentence have a main clause? Are any two full sentences joined only by a comma? Does any sentence start with *Which* or *Because* and stop without a main clause?\n\nThen add your **personal top three**: the errors your teachers correct again and again. Look for those specifically.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Leave 3–4 minutes at the end of Task 2 for editing. In the paper test, cross out neatly with one line; in the computer test, you can edit freely. Do not start rewriting whole paragraphs at the end: fix errors, don't redraft.",
    },
  ],
  model: [
    {
      type: "text",
      title: "A paragraph before editing (about band 6)",
      body: "Nowadays, the technology play an important role in the education. Many researches shows that students who uses tablets in class is more motivated. However, there are also some disadvantage. For example, students can easily distract by games and social media, this reduce their concentration. In addition, some parents worries that their children spends too much time in front of screens. Which may damage their eyesight.",
    },
    {
      type: "passage",
      title: "The same paragraph after editing",
      paragraphs: [
        "Nowadays, technology plays an important role in education. A growing body of research shows that students who use tablets in class are more motivated. However, there are also some disadvantages. For example, students can easily be distracted by games and social media, which reduces their concentration. In addition, some parents worry that their children spend too much time in front of screens, which may damage their eyesight.",
      ],
    },
    {
      type: "text",
      title: "What changed and why",
      body: "**Pass 1: verbs**\n\n- *technology play* → *plays* (singular subject)\n- *students who uses… is* → *use… are* (plural subject)\n- *can easily distract* → *can easily be distracted* (passive: games distract the students)\n- *this reduce* → *which reduces*; *parents worries* → *worry*; *children spends* → *spend*\n\n**Pass 2: nouns**\n\n- *the technology*, *the education* → no article (general meaning)\n- *Many researches shows* → *A growing body of research shows* (*research* is uncountable)\n- *some disadvantage* → *some disadvantages*\n\n**Pass 3: sentence boundaries**\n\n- *…social media, this reduce…* was a comma splice → *, which reduces*\n- *Which may damage their eyesight.* was a fragment → joined to the previous sentence\n\nAbout a dozen small changes, the same ideas, and a much more accurate paragraph.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "gap",
        title: "Correct the form",
        instructions: "Write the correct form of the word in brackets. Think about agreement, uncountable nouns, tense and word form.",
        text: "1. The number of people living alone {{0}} (rise) steadily since the 1990s.\n2. A large amount of {{1}} (evidence) suggests that sleep affects memory.\n3. Each of the proposals {{2}} (have) both advantages and disadvantages.\n4. The government has introduced several new {{3}} (policy) to reduce emissions.\n5. Recycling has a {{4}} (benefit) effect on the environment.\n6. Most experts agree that the {{5}} (economy) cost of the project is too high.\n7. If the council had acted earlier, the flooding {{6}} (can) have been prevented.\n8. Neither the manager nor her assistants {{7}} (be) informed about the change last week.",
        answers: [
          ["has risen", "has been rising"],
          ["evidence"],
          ["has"],
          ["policies"],
          ["beneficial"],
          ["economic"],
          ["could"],
          ["were", "had been"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Spot the error",
        questions: [
          {
            prompt: "Which sentence is correct?",
            options: [
              "Prices rose sharply, many families had to cut their spending.",
              "Prices rose sharply, so many families had to cut their spending.",
              "Prices rose sharply. Which meant many families had to cut their spending.",
              "Prices rose sharply, therefore many families had to cut their spending.",
            ],
            answer: 1,
            explanation: "The first and last options are comma splices (*therefore* is an adverb, not a conjunction). The third contains a fragment beginning with *Which*.",
          },
          {
            prompt: "What is wrong with “Having finished the report, the computer crashed.”?",
            options: [
              "The tense is inconsistent",
              "The participle clause has no logical subject: the computer did not finish the report",
              "“Report” should be plural",
              "Nothing; it is correct",
            ],
            answer: 1,
            explanation: "This is a dangling modifier: the sentence suggests that the computer finished the report. Correct: *Just after I had finished the report, the computer crashed.*",
          },
          {
            prompt: "Which sentence uses articles correctly?",
            options: [
              "The unemployment is a serious problem in the many countries.",
              "Unemployment is serious problem in many countries.",
              "An unemployment is a serious problem in many countries.",
              "Unemployment is a serious problem in many countries.",
            ],
            answer: 3,
            explanation: "*Unemployment* is uncountable and general (no article), and *problem* is a singular countable noun, so it needs *a*.",
          },
          {
            prompt: "Which sentence has correct parallel structure?",
            options: [
              "Cycling is cheap, healthy and environmentally friendly.",
              "Cycling is cheap, healthy and it is good for the environment.",
              "Cycling is cheap, being healthy and good for the environment.",
              "Cycling is cheap, health and environment friendly.",
            ],
            answer: 0,
            explanation: "All three items in the list are adjectives.",
          },
          {
            prompt: "Which sentence is most appropriate in style for an academic essay?",
            options: [
              "Kids these days spend loads of time on their phones.",
              "Kids spend tons of time on phones and stuff.",
              "Children now spend a considerable amount of time on their phones.",
              "Children are gonna spend more time on phones.",
            ],
            answer: 2,
            explanation: "*Kids*, *loads of*, *tons of*, *stuff* and *gonna* are too informal for an essay.",
          },
          {
            prompt: "“The study found that students who exercise regularly performs better in exams.” What is the error?",
            options: [
              "An article is missing",
              "Subject–verb agreement: “performs” should be “perform”",
              "Word form: “regularly” should be “regular”",
              "Preposition: “in exams” should be “on exams”",
            ],
            answer: 1,
            explanation: "The subject of *perform* is *students* (plural). The relative clause *who exercise regularly* between them makes the error easy to miss.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Name the error",
        instructions: "Match each incorrect sentence to its error type. One error type is not used.",
        left: [
          "She is very interested on politics.",
          "Many informations are available online.",
          "The economy grew quickly. Because of strong exports.",
          "It was a success decision for the company.",
          "Since 2015, the city built three new hospitals.",
          "The data was collected, the results were analysed.",
        ],
        right: ["Comma splice", "Word form", "Wrong preposition", "Tense", "Sentence fragment", "Uncountable noun", "Article"],
        answer: [2, 5, 4, 1, 3, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Edit a flawed paragraph",
        instructions: "Use the three-pass routine: verbs, nouns, then sentence boundaries. Then compare your version with the model answer.",
        prompt:
          "This paragraph is part of a response to a TOEFL Academic Discussion question about whether cities should invest more in public parks. It contains 14 errors. Rewrite the whole paragraph with every error corrected. Keep the writer's ideas and order.\n\nI agree with Priya that cities should invest more in public parks, but I think she don't consider the cost of maintenance. In my hometown, the council build a beautiful park five years ago. At first, it was very popular, many families went there every weekends. However, the council did not have enough money for take care of it. Nowadays the grass is dead, the playground equipments are broken and the most of people avoid going there. Which is a waste of public money. In my opinion, before a city create a new park, it should makes a long-term plan for its maintenance. It could also asking local businesses to sponsor it, this would share the cost. Otherwise, the park will became a problem instead of a benefit for community.",
        minWords: 120,
        minutes: 12,
        rubric: [
          "Grammatical range and accuracy: I fixed every verb error: agreement, past tense and the base form after modal verbs (should, could, will).",
          "Grammatical range and accuracy: I fixed both comma splices and the fragment, using a conjunction, a relative clause or a full stop.",
          "Grammatical range and accuracy: I corrected the noun errors: uncountable nouns, the noun after every, and most of people.",
          "Grammatical range and accuracy: I corrected the infinitive error (money for take care → money to take care) and added the missing article (for the community).",
          "Task response: I kept the writer's original ideas and their order.",
          "Coherence and cohesion: The corrected paragraph reads smoothly, with clear links between sentences.",
          "I found at least 12 of the 14 errors.",
        ],
        modelAnswer:
          "I agree with Priya that cities should invest more in public parks, but I think she doesn't consider the cost of maintenance. In my hometown, the council built a beautiful park five years ago. At first, it was very popular, and many families went there every weekend. However, the council did not have enough money to take care of it. Nowadays the grass is dead, the playground equipment is broken and most people avoid going there, which is a waste of public money. In my opinion, before a city creates a new park, it should make a long-term plan for its maintenance. It could also ask local businesses to sponsor it, which would share the cost. Otherwise, the park will become a problem instead of a benefit for the community.\n\nCorrections: don't → doesn't (or does not); build → built; comma splice → and many families; every weekends → every weekend; for take care → to take care; equipments are → equipment is; the most of people → most people; fragment Which… → joined with , which; a city create → creates; should makes → make; could also asking → ask; comma splice , this would → , which would; will became → become; for community → for the community.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Grammatical range and accuracy and lexical resource together make up half of your Writing score. Small, repeated errors in articles and agreement can keep an otherwise strong essay at band 6.5, so build checking time into your 40 minutes.",
    },
    {
      exam: "toefl",
      body: "In Academic Discussion you have only about 10 minutes, so save the last minute to reread your post for agreement errors and missing articles. A few small errors are acceptable; errors that make your meaning unclear are much more costly.",
    },
    {
      exam: "toeic",
      body: "TOEIC Writing raters assess grammar, vocabulary and organisation. In the 30-minute opinion essay, leave 3 minutes to check for your personal top three errors.",
    },
  ],
  vocabulary: [
    { word: "proofread", meaning: "to read a text carefully to find and correct mistakes", example: "Always proofread your essay before the time runs out.", topic: "academic" },
    { word: "comma splice", meaning: "an error where two full sentences are joined only by a comma", example: "“It rained, we stayed inside” is a comma splice.", topic: "academic" },
    { word: "sentence fragment", meaning: "an incomplete sentence with no main clause", example: "“Because it was cheap.” is a sentence fragment.", topic: "academic" },
    { word: "subject–verb agreement", meaning: "using a verb form that matches its subject (singular or plural)", example: "Check subject–verb agreement after long noun phrases.", topic: "academic" },
    { word: "uncountable noun", meaning: "a noun that has no plural form and cannot be used with a/an", example: "“Research” and “equipment” are uncountable nouns.", topic: "academic" },
    { word: "parallel structure", meaning: "using the same grammatical form for items in a list", example: "Parallel structure makes long sentences easier to read.", topic: "academic" },
    { word: "dangling modifier", meaning: "a phrase that does not logically describe the subject of the sentence", example: "Fix dangling modifiers by naming who did the action.", topic: "academic" },
    { word: "consistency", meaning: "the quality of always being the same, without changes", example: "Tense consistency is important when you describe the past.", topic: "academic" },
    { word: "maintenance", meaning: "the work of keeping something in good condition", example: "The park was closed because of poor maintenance.", topic: "society" },
    { word: "sponsor", meaning: "to pay for something, often in exchange for advertising", example: "A local bank sponsors the summer festival.", topic: "business" },
  ],
  keyPoints: [
    "Band 7+ needs frequent error-free sentences, so editing time is part of the task, not an extra.",
    "Check one error type at a time: verbs, then nouns, then sentence boundaries.",
    "Watch uncountable nouns (research, evidence, information, advice, equipment) and articles with general nouns.",
    "Fix comma splices and fragments with a conjunction, a relative clause or a full stop.",
    "Know your personal top three errors and search for them in every essay.",
  ],
};

export default lesson;
