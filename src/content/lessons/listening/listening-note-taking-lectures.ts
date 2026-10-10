import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-note-taking-lectures",
  title: "Note-taking for talks and lectures",
  summary:
    "Take fast, clear notes on a talk using key words, abbreviations and a simple structure, then use them to answer note-completion and multiple-choice questions.",
  skill: "listening",
  level: "B2",
  order: 4,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Listening Part 4" },
    { exam: "toefl", task: "Listening – Academic Talk" },
  ],
  objectives: [
    "Write down only the key words that carry meaning (nouns, numbers, verbs of change)",
    "Use common abbreviations and symbols to write faster",
    "Organise notes around the main points of a talk: topic, causes, effects, examples, solutions",
    "Complete lecture notes in IELTS Part 4 and answer TOEFL Academic Talk questions from your notes",
  ],
  warmUp: [
    "When you take notes in class or at work, do you try to write everything, or only the important words? What happens when the speaker talks fast?",
    "Which symbols or short forms do you already use in your notes (for example, a plus sign or an arrow)?",
  ],
  learn: [
    {
      type: "text",
      title: "Why you cannot write everything",
      body: "In a talk, people often speak at around 150 words a minute, but most of us can write only 20 to 30. So good notes are not a copy of the talk. They are a **map of the meaning**.\n\nIn IELTS Listening Part 4 you hear one speaker give a talk on an academic subject with **no break in the middle**, and you complete a set of notes. In TOEFL Academic Talk you hear a short lecture, and then answer questions you cannot see in advance, so your notes are your memory.\n\nThe good news: lectures are organised. Speakers usually introduce a topic, then give causes, examples, effects or solutions. If you know the structure, you know where to put each note.",
    },
    {
      type: "text",
      title: "Five rules for fast notes",
      body: "1. **Key words only.** Write nouns, numbers, names and verbs of change (rise, fall, cause). Leave out *the*, *is*, *very* and most adjectives.\n2. **Abbreviate.** Use symbols for common ideas and shorten long words you hear often (*govt*, *info*, *approx*).\n3. **Use space.** Start a new line for each new point. Indent examples under the main idea.\n4. **Number lists.** When the speaker says “there are three reasons”, write 1, 2, 3 and leave space for each.\n5. **Tidy up immediately.** After the talk, spend 30 seconds turning symbols into words while you still remember them.",
    },
    {
      type: "table",
      title: "Useful symbols and abbreviations",
      headers: ["Write", "Meaning"],
      rows: [
        ["→", "leads to, causes, results in"],
        ["↑ / ↓", "increase, rise / decrease, fall"],
        ["=", "is, means, is the same as"],
        ["≠", "is not, is different from"],
        ["≈ or approx.", "about, approximately"],
        ["e.g.", "for example"],
        ["b/c", "because"],
        ["w/ and w/o", "with and without"],
        ["esp.", "especially"],
        ["vs", "compared with, against"],
      ],
    },
    {
      type: "example",
      title: "From speech to notes",
      items: [
        "You hear: “Over the last twenty years, the number of people cycling to work has more than doubled.” → Notes: **cycling to work ↑ x2+, last 20 yrs**",
        "You hear: “The main reason for this, especially in cities, is the high cost of parking.” → Notes: **main reason: parking cost, esp. cities**",
        "You hear: “This has led to fewer cars in the centre, for example in the old town.” → Notes: **→ fewer cars in centre (e.g. old town)**",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: note-taking symbols",
        instructions: "Match each symbol or abbreviation to its meaning. There is one meaning you do not need.",
        left: ["→", "↓", "≈", "b/c", "esp.", "w/o", "vs"],
        right: [
          "approximately",
          "because",
          "leads to",
          "without",
          "compared with",
          "decrease",
          "especially",
          "therefore",
        ],
        answer: [2, 5, 0, 1, 6, 3, 4],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model lecture: the urban heat island",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Today I want to look at something called the urban heat island effect. Put simply, this means that cities are noticeably warmer than the countryside around them. On a calm summer night, the centre of a large city can be five degrees or more warmer than nearby farmland.\n\nSo why does this happen? There are three main causes. The first is the materials we build with. Concrete, brick and asphalt absorb heat during the day and release it slowly at night, so the city never really cools down. The second cause is the lack of plants. In the countryside, trees and fields lose water through their leaves, and this has a cooling effect, a bit like sweating. The third cause is heat from human activity: cars, air conditioners and factories all add warmth to the air.\n\nWhy does this matter? Mainly because of health. During heatwaves, hospitals in hot city centres see far more patients, especially elderly people.\n\nSo what can be done? Some cities are painting roofs white, because light colours reflect sunlight instead of absorbing it. Others are planting trees along streets, or creating green roofs, which are roofs covered in grass and small plants. Some studies have found that a green roof can make the rooms below it two or three degrees cooler in summer.",
    },
    {
      type: "text",
      title: "A strong learner's notes",
      body: "**Urban heat island (UHI)**\n\n- = city warmer than countryside\n- 5°+ warmer (calm summer night)\n\n**Causes (3)**\n\n1. materials: concrete, brick, asphalt absorb heat → release at night\n2. few plants → less cooling (water from leaves ≈ sweating)\n3. human activity: cars, air con, factories\n\n**Why matters:** health, heatwaves → ↑ hospital patients, esp. elderly\n\n**Solutions**\n\n- white roofs (reflect sun)\n- street trees\n- green roofs → rooms below 2–3° cooler (summer)",
    },
    {
      type: "text",
      title: "What the learner did well",
      body: "- **Heard the structure early.** “There are three main causes” told the learner to write 1, 2, 3 and leave space.\n- **Used the speaker's questions as headings.** “Why does this matter?” and “What can be done?” became *Why matters* and *Solutions*.\n- **Kept numbers with their meaning.** “5°+ warmer (calm summer night)” is more useful than just “5”.\n- **Left out what was not needed.** Phrases like “put simply” and “so the city never really cools down” add nothing new, so they are not in the notes.\n- **Used symbols**: =, →, ↑, ≈ and *esp.* save a lot of time.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice 1: the shipping container",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Good afternoon. In today's session on the history of trade, we're looking at an invention that most people never think about, but which changed the world economy: the shipping container.\n\nBefore the nineteen-fifties, loading a ship was slow and expensive. Goods were packed in sacks, barrels and wooden boxes of all shapes and sizes, and teams of dock workers had to carry them on board one by one. A large ship could spend a week or more in port just being loaded and unloaded. Theft was also a serious problem, because so many people handled the goods.\n\nThe breakthrough came in nineteen fifty-six, when an American businessman called Malcolm McLean sent the first successful container ship from New Jersey to Texas. His idea was simple: put the goods in a standard metal box that could be lifted straight from a lorry onto a ship by a crane, without ever being opened.\n\nThe effects were dramatic. First, cost. Loading costs fell by more than ninety per cent. Second, speed. A ship that once took a week to unload could now be turned around in less than a day. And third, security. Because containers were sealed, far fewer goods went missing.\n\nHowever, there were losers as well as winners. Thousands of dock workers lost their jobs, and many old ports, which were too small for the new ships, went into decline. Today, the busiest ports are huge, highly automated places, often a long way from the old city centres.\n\nIn our next session, we'll look at how containers made modern global supply chains possible.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the lecture notes",
        instructions: "Listen to the lecture and complete the notes. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "The shipping container\n\nBefore the 1950s\n- loading a large ship could take a {{0}} or more\n- {{1}} was a serious problem because many people handled the goods\n\n1956: first successful container ship, New Jersey to {{2}}\n- idea: a standard metal box moved from lorry to ship by a {{3}}\n\nEffects\n- loading costs fell by more than {{4}} %\n- unloading time: less than a {{5}}\n- better {{6}}, because containers were sealed\n\nNegative effects\n- thousands of dock workers lost jobs\n- many old ports were too {{7}} for the new ships",
        answers: [
          ["week"],
          ["theft"],
          ["Texas"],
          ["crane"],
          ["90", "ninety", "90%", "90 %"],
          ["day"],
          ["security"],
          ["small"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 2: sleep and memory",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Let's talk about sleep, and specifically about why students who stay up all night before an exam often do worse than students who get a good night's rest.\n\nFor a long time, scientists thought the brain was more or less switched off during sleep. We now know that's not true. While you sleep, your brain is busy sorting through the day's experiences. It replays new information and moves the important parts into long-term memory. Researchers call this process consolidation.\n\nA common type of experiment shows this clearly. Two groups of volunteers learn a list of words in the evening. One group sleeps normally, and the other group stays awake all night. The next day, the group that slept remembers significantly more words. What's interesting is that, in several studies, the group that missed sleep never fully catches up, even after they've had a few nights of normal sleep. In other words, the chance to store that information was lost.\n\nSo what does this mean for you? Simply put, sleep is part of studying, not a break from it. If you review your notes in the evening and then go to bed, you give your brain the chance to do its job. Cutting sleep to study for longer is usually a bad trade.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Answer from your notes",
        instructions: "Take notes while you listen. Then answer the questions. Try not to look at the transcript.",
        questions: [
          {
            prompt: "What is the talk mainly about?",
            options: [
              "How much sleep students need each night",
              "How sleep helps the brain store new information",
              "Why students find it hard to sleep before exams",
              "Different methods of reviewing notes",
            ],
            answer: 1,
            explanation: "The whole talk explains consolidation: during sleep the brain “moves the important parts into long-term memory”.",
          },
          {
            prompt: "What did scientists believe in the past?",
            options: [
              "The brain was mostly inactive during sleep",
              "Sleep was harmful to memory",
              "Dreams helped people learn",
              "Long-term memory formed only in the morning",
            ],
            answer: 0,
            explanation: "“For a long time, scientists thought the brain was more or less switched off during sleep.”",
          },
          {
            prompt: "Why does the professor describe the word-list experiment?",
            options: [
              "To show that word lists are a poor way to study",
              "To explain how researchers choose volunteers",
              "To give evidence that sleep improves memory",
              "To compare morning and evening learning",
            ],
            answer: 2,
            explanation: "The experiment shows that “the group that slept remembers significantly more words”.",
          },
          {
            prompt: "What does the professor say about the volunteers who stayed awake?",
            options: [
              "They remembered more words at first",
              "They still remembered less after a few nights of normal sleep",
              "They caught up after one good night's sleep",
              "They were tested again a week later",
            ],
            answer: 1,
            explanation: "“The group that missed sleep never fully catches up, even after they've had a few nights of normal sleep.”",
          },
          {
            prompt: "What does the professor advise students to do?",
            options: [
              "Study late at night when it is quiet",
              "Take short naps during the day",
              "Review notes in the evening and then sleep",
              "Stop studying the day before an exam",
            ],
            answer: 2,
            explanation: "“If you review your notes in the evening and then go to bed, you give your brain the chance to do its job.”",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 4 the notes on the question paper already show you the structure of the lecture. Before you listen, read the headings and predict the type of word for each gap (a noun? a number? a plural?). Check the word limit: if it says ONE WORD ONLY, “a crane” is wrong, “crane” is right.",
    },
    {
      exam: "ielts",
      body: "The answer words in Part 4 are usually the exact words the speaker uses, but the words around the gap are often paraphrased. Listen for the meaning of the sentence, then write the speaker's word.",
    },
    {
      exam: "toefl",
      body: "In Academic Talk you cannot see the questions while you listen. Questions usually ask about the main idea, important details, why the speaker mentions something, and what the speaker implies. Write the main idea at the top of your notes, and mark every example with “e.g.” so you can answer “Why does the professor mention…?” questions.",
    },
  ],
  vocabulary: [
    { word: "absorb", meaning: "to take in heat, liquid or energy", example: "Dark roofs absorb more heat than white ones.", topic: "science" },
    { word: "release", meaning: "to let something go out or escape", example: "Concrete releases heat slowly at night.", topic: "science" },
    { word: "heatwave", meaning: "a period of unusually hot weather", example: "Hospitals are busier during a heatwave.", topic: "environment" },
    { word: "breakthrough", meaning: "an important discovery or development", example: "The container was a breakthrough in global trade.", topic: "business" },
    { word: "dramatic", meaning: "sudden and very large (about a change)", example: "There was a dramatic fall in loading costs.", topic: "academic" },
    { word: "go into decline", meaning: "to become weaker, smaller or less successful", example: "Many old ports went into decline after the 1960s.", topic: "business" },
    { word: "automated", meaning: "done by machines or computers, not people", example: "Modern ports are highly automated.", topic: "technology" },
    { word: "supply chain", meaning: "the series of companies and steps that move a product from maker to customer", example: "A delay at one port can affect the whole supply chain.", topic: "business" },
    { word: "consolidation", meaning: "the process of making something stronger or more permanent; in memory, storing it long-term", example: "Sleep plays an important part in memory consolidation.", topic: "science" },
    { word: "long-term memory", meaning: "the part of memory that keeps information for a long time", example: "Sleep helps move new words into long-term memory.", topic: "science" },
    { word: "abbreviation", meaning: "a short form of a word or phrase", example: "“Govt” is a common abbreviation for “government”.", topic: "academic" },
  ],
  keyPoints: [
    "Notes are a map of the meaning, not a copy of the talk: write key words, numbers and names.",
    "Symbols and abbreviations (→, ↑, ↓, =, e.g., b/c) save time. Tidy them up straight after listening.",
    "Listen for structure signals such as “there are three main causes” and leave space for each point.",
    "Keep numbers together with what they describe.",
    "In IELTS Part 4, check the word limit and spell the speaker's exact word.",
  ],
};

export default lesson;
