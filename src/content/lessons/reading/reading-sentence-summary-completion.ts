import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-sentence-summary-completion",
  title: "Sentence and summary completion",
  summary:
    "Learn how to predict the missing word, respect the word limit and find the right part of the passage for IELTS sentence and summary completion questions.",
  skill: "reading",
  level: "B2",
  order: 3,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Reading – Sentence completion" },
    { exam: "ielts", task: "Reading – Summary completion" },
  ],
  objectives: [
    "Predict the type of word that fits a gap (noun, verb, adjective or number)",
    "Follow word limits such as NO MORE THAN TWO WORDS exactly",
    "Find the answer in the passage when the question uses paraphrase",
    "Choose words from a list that fit both the meaning and the grammar of a summary",
  ],
  warmUp: [
    "How do you usually revise for a test: a little every day, or a lot the night before? Which works better for you?",
    "Think of three words that mean the same as 'remember' or 'forget'.",
  ],
  learn: [
    {
      type: "text",
      title: "Two kinds of completion task",
      body: "In **sentence completion**, you read sentences based on the passage and fill each gap with words **copied from the passage**. The questions follow the order of the passage.\n\nIn **summary completion**, you complete a short summary of one part of the passage. There are two versions:\n\n- **Words from the passage**: you copy words exactly, like sentence completion.\n- **Words from a box**: you choose from a list. The words in the list are often **synonyms**, not the exact words in the passage.\n\nIn both tasks the sentences around the gaps are **paraphrased**. You will rarely find the same words in the passage, so look for the same *meaning*.",
    },
    {
      type: "text",
      title: "A five-step method",
      body: "1. Read the instructions and circle the **word limit**, for example *NO MORE THAN TWO WORDS AND/OR A NUMBER*.\n2. Read the sentence and **predict** the kind of word you need: a noun (singular or plural?), a verb, an adjective or a number.\n3. Choose **key words** that are easy to scan for, such as names, dates and unusual words.\n4. Find the part of the passage with the same meaning and read it carefully.\n5. Copy the word(s) **exactly**, then read the whole sentence again. It must be grammatically correct and make sense.",
    },
    {
      type: "table",
      title: "Predicting the gap",
      headers: ["Sentence with a gap", "What to look for", "Why"],
      rows: [
        ["Many students prefer to study in a single long ______.", "a singular noun", "after the adjective *long* and the article *a*"],
        ["The new method was tested on more than ______ volunteers.", "a number", "after *more than*, before a plural noun"],
        ["Researchers found that the drug helps patients ______ faster.", "a verb (base form)", "after *helps patients*"],
        ["The results were surprisingly ______.", "an adjective", "after *were* and the adverb *surprisingly*"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "A hyphenated word such as *well-known* counts as **one word**. A number written as figures (*25*) counts as a number, not a word. If you write more words than the limit allows, the answer is marked wrong, even if it contains the right word.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Bees in the city",
      labelled: true,
      paragraphs: [
        "When people think of honeybees, they usually imagine farms and flower-filled countryside. Yet over the past twenty years, a growing number of hives have appeared on the roofs of offices, hotels and apartment blocks in large cities. Urban beekeeping, once an unusual hobby, has become something of a fashion, and in some cities the number of hives has more than doubled within a few years.",
        "Part of the appeal is that cities can be surprisingly good places for bees. Parks, private gardens and the trees that line many streets provide a wide variety of flowers, and because these plants bloom at different times, food is available for much of the year. In addition, city bees come into contact with fewer of the pesticides that are commonly sprayed on farmland.",
        "Beekeepers also point to the educational value of their hives. Several schools now keep bees on their grounds, and teachers report that pupils who help to care for the insects become more interested in biology and the natural world. Some companies even offer hive visits to their staff as a way of reducing stress. The honey itself is often sold locally, and its flavour reflects the particular mix of trees and flowers in each neighbourhood.",
        "However, not everyone is convinced that the trend is helping nature. Ecologists point out that honeybees are only one of hundreds of bee species, and most of the others live alone rather than in large colonies. When too many hives are placed in a small area, the honeybees may collect so much nectar and pollen that wild bees struggle to find enough food. In Paris, for example, researchers found that wild bees and other pollinators visited flowers less often in parts of the city where hives were densely packed. The problem is simple arithmetic: if the number of hives rises much faster than the number of flowers, there is less food for every colony.",
        "For this reason, many experts now argue that the best way to support bees in cities is not to add more hives but to plant more flowers. Green roofs, strips of wildflowers along roads and 'bee hotels' (small wooden boxes with holes where solitary bees can lay their eggs) benefit a much wider range of insects. As one researcher put it, 'If you want to help bees, start with a garden, not a hive.'",
      ],
    },
    {
      type: "text",
      title: "How a strong reader answers",
      body: "**Sentence:** Compared with bees on farms, city bees are exposed to fewer ______. (ONE WORD ONLY)\n\nPrediction: a plural noun, something harmful. Key words: *city bees*, *farms*. Paragraph B says city bees “come into contact with fewer of the **pesticides** that are commonly sprayed on farmland”. *Exposed to* = *come into contact with*. → **pesticides** (plural, spelled correctly).\n\n**Sentence:** In Paris, wild pollinators were seen on flowers less ______ where there were many hives. (ONE WORD ONLY)\n\nPrediction: an adverb that follows *less*. Paragraph D: “visited flowers less often in parts of the city where hives were densely packed”. *Were seen on* = *visited*, *many hives* = *hives were densely packed*. → **often**. Writing *less often* would repeat *less*, break the one-word limit and make the sentence wrong.\n\n**Summary with a box:** Experts say cities should focus on growing more ______ rather than keeping more bees. Box: *hives / plants / honey*.\n\nParagraph E: “not to add more hives but to plant more flowers”. The box does not contain *flowers*, but **plants** has the same meaning and fits the grammar. *Hives* is a trap: it appears in the same sentence but means the opposite.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Learning that lasts: the science of spaced practice",
      labelled: true,
      paragraphs: [
        "In the 1880s, the German psychologist Hermann Ebbinghaus carried out a series of unusual experiments on himself. He memorised long lists of nonsense syllables, meaningless combinations of letters such as 'WID' and 'ZOF', and then tested how many he could remember after different periods of time. He chose nonsense syllables deliberately: real words would have been connected to memories he already had, which would have made the results harder to interpret.",
        "His findings were striking. He measured his memory by how much time he saved when he relearned a list. By this measure, much of what he learned was forgotten within the first hour, and by the following day a large proportion of each list had gone. After that, however, the rate of forgetting slowed considerably. When the results are drawn on a graph, they form a steep downward line that gradually becomes flatter, a pattern now known as the 'forgetting curve'.",
        "Ebbinghaus also noticed something more encouraging. Each time he relearned a list, it took him less time than before, and the material stayed in his memory for longer. He also found that repetitions spread over several days worked better than the same number of repetitions crowded into one sitting. This finding is the basis of what psychologists today call the spacing effect: information that is reviewed several times, with gaps between the reviews, is remembered far better than information studied in one long session.",
        "Despite more than a century of supporting evidence, many students still prefer to 'cram', or study intensively just before an exam. Cramming can be effective in the short term, which is exactly why it remains so popular: a student who revises all night may well pass a test the next morning. The problem is that the knowledge rarely survives for more than a few days. In surveys, students often say that cramming feels more productive, because the material seems familiar while they are reading it. Researchers call this an 'illusion of fluency': recognising information is much easier than recalling it without help.",
        "So how should learners organise their time? Most experts recommend a first review within a day of learning something new, followed by further reviews at gradually increasing intervals, perhaps after three days, then a week, then a month. Testing yourself is more useful than simply rereading your notes, since the effort of pulling information out of memory appears to strengthen it. Many language learners now use flashcard apps that plan these reviews automatically, showing difficult cards more often and easy cards less frequently.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "gap",
        title: "Sentence completion",
        instructions:
          "Read “Learning that lasts”. Complete the sentences. Write NO MORE THAN TWO WORDS from the passage for each answer.",
        text: "1. Ebbinghaus avoided real words because they would be linked to his existing {{0}}.\n2. Ebbinghaus forgot information most quickly during the first {{1}} after learning it.\n3. The pattern his results make on a graph is called the {{2}}.\n4. Remembering material better when reviews are separated by gaps is known as the {{3}}.\n5. Cramming may seem productive because the material feels {{4}} during reading.\n6. Pulling information out of memory, rather than rereading, seems to {{5}} it.",
        answers: [
          ["memories"],
          ["hour"],
          ["forgetting curve", "'forgetting curve'"],
          ["spacing effect"],
          ["familiar"],
          ["strengthen"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Summary completion (word box)",
        instructions:
          "Complete the summary of paragraphs D and E using words from the box. Some words in the box are synonyms of words in the passage, so match the meaning. There are more words than gaps, and you can use each word only once.",
        text: "Many students cram before exams because it can bring {{0}} success. However, what they learn is usually lost after a few {{1}}. Cramming creates an {{2}} of fluency: students can recognise information but find it hard to {{3}} it without support. A better approach is to review material at intervals that become gradually {{4}}, and to {{5}} yourself instead of rereading. Flashcard apps can {{6}} this process by deciding when each card should appear.",
        answers: [["immediate"], ["days"], ["illusion"], ["retrieve"], ["longer"], ["test"], ["automate"]],
        wordBank: ["immediate", "lasting", "days", "weeks", "illusion", "retrieve", "recognise", "longer", "shorter", "test", "automate", "delay"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Check the rules",
        instructions: "Choose the best answer. Use the passage “Learning that lasts” where needed.",
        questions: [
          {
            prompt:
              "Instructions: ONE WORD ONLY. Sentence: “Ebbinghaus tested himself using lists of ______ syllables.” Which answer is correct?",
            options: ["nonsense", "nonsense syllables", "meaningless nonsense", "WID"],
            answer: 0,
            explanation:
              "Paragraph A: “nonsense syllables”. The word *syllables* is already in the sentence, so only *nonsense* fits the gap and the one-word limit.",
          },
          {
            prompt: "Sentence: “Cramming can be ______ for a test the next day.” What type of word do you need?",
            options: ["a noun", "an adjective", "a verb", "a number"],
            answer: 1,
            explanation: "After *can be* we need an adjective. Paragraph D gives *effective*.",
          },
          {
            prompt:
              "Instructions: NO MORE THAN TWO WORDS. Sentence: “Experts suggest reviewing new material within one ______ of learning it.” Which answer is correct?",
            options: ["a day", "day", "one day", "week"],
            answer: 1,
            explanation:
              "Paragraph E says “within a day”. The sentence already has *one*, so *a day* or *one day* would make it ungrammatical (“within one a day”).",
          },
          {
            prompt: "In a summary completion task with a word box, the words in the box are usually…",
            options: [
              "copied exactly from the passage",
              "synonyms or paraphrases of ideas in the passage",
              "always nouns",
              "listed in the same order as the gaps",
            ],
            answer: 1,
            explanation: "The box usually contains paraphrases, so you must match meaning, not spelling.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "match",
        title: "Matching sentence endings",
        instructions:
          "Use the model passage “Bees in the city”. Match each sentence beginning with the correct ending. There are two extra endings you do not need.",
        left: [
          "City parks and street trees",
          "Pupils who look after school hives",
          "Placing too many hives in one area",
          "Green roofs and strips of wildflowers",
        ],
        right: [
          "produce more honey than countryside hives.",
          "can leave wild bees without enough food.",
          "offer flowers that bloom at different times of the year.",
          "are sprayed with large amounts of pesticide.",
          "help a wider range of insect species.",
          "often become more curious about biology.",
        ],
        answer: [2, 5, 1, 4],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Spelling counts. Copy words letter by letter from the passage, and check whether the gap needs a singular or plural noun. *pesticide* and *pesticides* are not the same answer.",
    },
    {
      exam: "ielts",
      body: "In summary completion, the summary may cover only one or two paragraphs. Find where the first gap's idea appears, and the rest of the answers will usually be close by.",
    },
    {
      exam: "toeic",
      body: "TOEIC Part 6 (Text Completion) also asks you to complete gaps in a short text. The same habit of predicting the word type and checking that the whole sentence makes sense will help you there.",
    },
  ],
  vocabulary: [
    { word: "paraphrase", meaning: "to say the same idea using different words", example: "The question paraphrases the passage, so look for the same meaning.", topic: "academic" },
    { word: "word limit", meaning: "the maximum number of words you can write", example: "The word limit is ONE WORD ONLY, so 'less often' is too long here.", topic: "education" },
    { word: "deliberately", meaning: "on purpose, not by accident", example: "He deliberately chose meaningless syllables.", topic: "everyday" },
    { word: "proportion", meaning: "a part of a whole, often compared to the total", example: "Only a small proportion of students revise every day.", topic: "academic" },
    { word: "cram", meaning: "to study a lot in a short time just before an exam", example: "I crammed all night and forgot everything a week later.", topic: "education" },
    { word: "intensively", meaning: "with a lot of effort in a short period", example: "She studied intensively for the final two weeks.", topic: "education" },
    { word: "interval", meaning: "a period of time between two events", example: "Review new words at increasing intervals.", topic: "academic" },
    { word: "retrieve", meaning: "to get information back, for example from memory", example: "Testing yourself helps you retrieve facts more easily.", topic: "science" },
    { word: "pesticide", meaning: "a chemical used to kill insects that damage crops", example: "Farmers spray pesticides on their fields.", topic: "environment" },
    { word: "solitary", meaning: "living or being alone", example: "Most bee species are solitary and do not live in hives.", topic: "science" },
  ],
  keyPoints: [
    "Read the word limit first and never go over it.",
    "Predict the word type before you read the passage: noun, verb, adjective or number.",
    "The questions paraphrase the passage, so search for meaning, not identical words.",
    "Copy words exactly and check the finished sentence is grammatical.",
    "With a word box, expect synonyms and watch for words that appear nearby but mean something different.",
  ],
};

export default lesson;
