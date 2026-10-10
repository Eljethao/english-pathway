import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-paraphrase-synonyms",
  title: "Recognising paraphrase in reading",
  summary:
    "Learn the six main ways exam questions paraphrase a text, so that you can match questions to the right sentence and spot answers that only look the same.",
  skill: "reading",
  level: "B2",
  order: 11,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Reading – Short-answer questions" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Recognise six common types of paraphrase: synonyms, word form, active and passive, general and specific, negatives, and cause and effect",
    "Match the words of a question to a different wording in the passage",
    "Tell the difference between a true paraphrase and a sentence that only shares some words",
    "Answer IELTS short-answer questions with words from the passage",
  ],
  warmUp: [
    "How many ways can you say “The price went up a lot”? Try to think of three.",
    "Why do you think exam questions rarely use the same words as the text?",
  ],
  learn: [
    {
      type: "text",
      title: "Why paraphrase is the key reading skill",
      body: "Almost every reading task, in every exam, tests whether you can recognise the **same meaning in different words**. The question says *the number of visitors fell*; the passage says *attendance declined*. If you only look for the same words, you will often miss the answer, or choose an option that copies words but changes the meaning.\n\nIn earlier lessons you met paraphrase inside each task: True/False/Not Given, matching headings, multiple choice. This lesson focuses on the paraphrase itself, so that you can use it in every task type.",
    },
    {
      type: "table",
      title: "Six ways to say the same thing",
      headers: ["Type", "In the passage", "In the question"],
      rows: [
        ["Synonym", "prices **rose sharply**", "prices **increased dramatically**"],
        ["Word form", "the **expansion** of the airport", "the airport was **expanded**"],
        ["Active ↔ passive", "**researchers measured** the noise", "the noise **was measured by** scientists"],
        ["General ↔ specific", "cars, buses and trains", "**transport** / **vehicles**"],
        ["Negative ↔ positive", "it is **not uncommon**", "it happens **quite often**"],
        ["Cause ↔ effect", "the festival was cancelled **because of** the rain", "the rain **led to** the cancellation of the festival"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "A real paraphrase keeps **all** of the meaning: the same people, the same direction of change, the same degree of certainty. *Scientists suggest* is not the same as *scientists have proved*, and *most* is not the same as *all*.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Find the synonym",
        instructions: "Match each phrase from a passage with the phrase that has the same meaning. There are two extra options.",
        left: [
          "rose sharply",
          "a large proportion of",
          "is not uncommon",
          "was abandoned",
          "residents",
          "to deteriorate",
          "approximately",
          "prior to",
        ],
        right: [
          "roughly",
          "to get worse",
          "fell quickly",
          "was given up",
          "increased dramatically",
          "before",
          "local people",
          "a high percentage of",
          "after",
          "happens fairly often",
        ],
        answer: [4, 7, 9, 3, 6, 1, 0, 5],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Same meaning or not?",
        instructions: "Choose the sentence that has the same meaning as the original. The wrong options share words with the original but change the meaning.",
        questions: [
          {
            prompt: "Original: “The museum attracted fewer visitors than expected in its first year.”",
            options: [
              "In its first year, the number of visitors to the museum was lower than predicted.",
              "The museum expected to attract fewer visitors in its first year.",
              "In its first year, the museum had almost no visitors.",
              "The museum attracted more visitors in its first year than in later years.",
            ],
            answer: 0,
            explanation: "*Fewer visitors than expected* = *lower than predicted*. B changes who expected what, C is too extreme, and D compares different years.",
          },
          {
            prompt: "Original: “Unless the bridge is repaired, it will have to be closed.”",
            options: [
              "The bridge will be closed while it is repaired.",
              "If the bridge is not repaired, it will be closed.",
              "The bridge has already been closed and repaired.",
              "The bridge will be repaired after it closes.",
            ],
            answer: 1,
            explanation: "*Unless* = *if… not*. The other options change the condition into a sequence of events.",
          },
          {
            prompt: "Original: “Heavy rain led to the cancellation of the festival.”",
            options: [
              "The festival was cancelled because of heavy rain.",
              "The festival was cancelled, so it rained heavily.",
              "Heavy rain was expected, but the festival went ahead.",
              "The festival caused problems in the heavy rain.",
            ],
            answer: 0,
            explanation: "Cause ↔ effect paraphrase: *led to* = *because of*, with the cause and result in the same roles. B reverses the cause and the effect.",
          },
          {
            prompt: "Original: “It is not unusual for students to change their course in the first year.”",
            options: [
              "Students rarely change their course in the first year.",
              "Changing course in the first year is fairly common.",
              "All students change their course in the first year.",
              "Students cannot change their course after the first year.",
            ],
            answer: 1,
            explanation: "*Not unusual* (two negatives) = *fairly common*. A is the opposite, C is too extreme, and D is not in the original.",
          },
          {
            prompt: "Original: “The new drug was tested on a small group of patients, all of whom were over sixty.”",
            options: [
              "The drug was tested on patients of all ages.",
              "Most of the patients in the trial were over sixty.",
              "A small number of patients, every one of them older than sixty, took part in tests of the drug.",
              "The drug was designed for people over sixty.",
            ],
            answer: 2,
            explanation: "*All of whom were over sixty* = *every one of them older than sixty*. B changes *all* to *most*, and D gives a purpose that the original does not mention.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "Masters of disguise",
      labelled: true,
      paragraphs: [
        "Few animals can match the octopus as a master of disguise. Within a fraction of a second, an octopus resting on the sea floor can change its colour, its pattern and even the texture of its skin, until it is almost impossible to see against the rocks or coral behind it. This ability helps it to avoid predators such as fish and seals, and also to approach its own prey without being noticed.",
        "The colour changes are produced by thousands of tiny elastic sacs in the skin called chromatophores, each filled with red, yellow, brown or black pigment. Every sac is surrounded by small muscles that are controlled directly by the nervous system. When the muscles contract, they stretch the sac open, spreading its pigment over a wider area; when they relax, the sac shrinks back to a dot that is barely visible. Because the system is controlled by nerves rather than by hormones, which act more slowly, the changes can happen almost instantly.",
        "Below the chromatophores lie other layers of cells that reflect light. Some produce shimmering blues and greens, while others reflect whatever light falls on them, allowing the animal to appear white in bright light or to take on the colour of its surroundings.",
        "What has long puzzled scientists is that most octopuses appear to be colour-blind. Their eyes contain only one type of light-sensitive pigment, which in humans would mean seeing the world in shades of grey. How, then, can they match the colours around them so precisely? Several explanations have been proposed. One is that they do not need to see colour at all, because matching brightness and pattern is enough to fool most predators. Another is based on the discovery of light-sensitive proteins in the skin of some species. Experiments have shown that the skin itself can react to light, and some researchers suggest that it may help the animal to sense the colours around it. Neither idea has yet been confirmed, and it is possible that the answer involves both.",
        "Whatever the mechanism, the octopus's skin has attracted the interest of engineers, who hope that it may one day inspire materials that change colour to suit their surroundings.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader matches question and text",
      body: "**Short-answer question:** Which part of the body controls the muscles around the pigment sacs? (NO MORE THAN THREE WORDS)\n\nThe question is **active** (*which part… controls*); the passage is **passive**: “muscles that are **controlled directly by the nervous system**”. *Pigment sacs* is a general paraphrase of *chromatophores*. → **the nervous system**\n\n**Multiple choice:** Why can an octopus change colour so quickly?\nCorrect option: *Because the process depends on nerves, not hormones.*\nPassage: “Because the system is controlled by **nerves rather than by hormones**, which act more slowly, the changes can happen **almost instantly**.” *So quickly* = *almost instantly*; *depends on* = *is controlled by*; *not* = *rather than*.\n\n**Statement:** Scientists have proved that octopus skin helps the animal to sense colour.\nThe words look the same (*sense colour* = *sense the colours*), but the degree of certainty does not. The passage says some researchers “**suggest** that it **may** help the animal to sense the colours around it” and “Neither idea has yet been **confirmed**”. → **False**. This is the most important lesson about paraphrase: matching words are not enough. Check that the **whole meaning** matches.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Tiny forests in big cities",
      labelled: true,
      timerMinutes: 9,
      paragraphs: [
        "In recent years, small patches of dense woodland, some no bigger than a tennis court, have begun to appear in parks, school grounds and even beside motorways in cities across Europe and Asia. Known as tiny forests or micro-forests, they are usually planted using a method developed in the 1970s by the Japanese botanist Akira Miyawaki.",
        "The method differs sharply from conventional tree planting. Instead of spacing young trees several metres apart, volunteers plant three to five saplings in every square metre, using a wide mix of native species: trees and shrubs that grow naturally in the area. The soil is first improved with compost and other organic material, and the ground is then covered with a thick layer of straw to keep in moisture. Because the young trees compete for light, they grow upwards quickly, and after two or three years the forest is expected to look after itself without further watering or weeding.",
        "Supporters make impressive claims for the approach. They say that the forests grow far faster than ordinary plantations, attract a wide variety of insects and birds, and help to cool the streets around them in hot weather. For many communities, the social benefits matter just as much: planting days bring together residents who might otherwise never meet, and schools use the sites as outdoor classrooms.",
        "Not all scientists are convinced. Some point out that many of the claims about growth rates come from the organisations that promote the method, rather than from independent research. Others note that planting so many trees so close together means that a large proportion of them die within the first few years, which raises the cost of each tree that survives. There is also concern that a single small forest, however dense, cannot replace the benefits of large areas of mature woodland.",
        "Researchers who have studied the sites generally agree on one point: the success of a tiny forest depends heavily on the people who look after it in its early years. Where volunteers continue to water and weed during dry periods, most sites do well; where interest fades after the planting day, the results are far less impressive. For this reason, some programmes now offer training and small grants to local groups who agree to care for a site for at least three years.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Practice 1: IELTS short-answer questions",
        instructions:
          "Answer the questions. Write NO MORE THAN THREE WORDS from the passage for each answer. The questions paraphrase the passage, so look for the meaning, not the same words.",
        text: "1. Who created the planting technique used for tiny forests? {{0}}\n2. What kind of species do volunteers plant? {{1}}\n3. What is spread over the ground to stop it drying out? {{2}}\n4. What do the young trees have to fight each other for? {{3}}\n5. Apart from insects, which animals do supporters say the forests bring in? {{4}}\n6. How do schools make use of the sites? As {{5}}\n7. How long must local groups promise to look after a site to receive support? {{6}}",
        answers: [
          ["Akira Miyawaki", "Miyawaki", "Japanese botanist", "the Japanese botanist"],
          ["native species", "native"],
          ["straw"],
          ["light"],
          ["birds"],
          ["outdoor classrooms"],
          ["three years", "3 years", "at least three years", "at least 3 years"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Practice 2: paraphrased options",
        instructions: "Use “Tiny forests in big cities”. Each correct option paraphrases the passage. Choose the best answer.",
        questions: [
          {
            prompt: "Which criticism of tiny forests is mentioned in paragraph D?",
            options: [
              "Many of the young trees do not survive.",
              "The forests take too long to become established.",
              "Volunteers rarely attend planting days.",
              "Native species are difficult to obtain.",
            ],
            answer: 0,
            explanation: "“A large proportion of them die within the first few years” = *many of the young trees do not survive*. B is the opposite of what supporters claim, and C and D are not in the text.",
          },
          {
            prompt: "Which TWO benefits do supporters mention in paragraph C? Choose TWO answers.",
            options: [
              "lowering temperatures in nearby streets",
              "creating jobs for local people",
              "helping neighbours to get to know each other",
              "reducing the risk of flooding",
              "providing wood for local industry",
            ],
            answer: [0, 2],
            explanation: "“Help to cool the streets around them” = *lowering temperatures in nearby streets*; “bring together residents who might otherwise never meet” = *helping neighbours to get to know each other*.",
          },
          {
            prompt: "Which sentence best paraphrases the main finding in paragraph E?",
            options: [
              "Tiny forests succeed only when they are planted in dry areas.",
              "Continued care from local people is what makes a site succeed.",
              "Most tiny forests fail after the first planting day.",
              "Training for volunteers is more important than watering.",
            ],
            answer: 1,
            explanation: "“The success of a tiny forest depends heavily on the people who look after it in its early years.” C is too extreme: results are weaker only “where interest fades”.",
          },
          {
            prompt: "What do some scientists say about the claims about growth rates?",
            options: [
              "They have been confirmed by independent studies.",
              "They mostly come from groups that promote the method.",
              "They are based on research carried out in the 1970s.",
              "They apply only to forests beside motorways.",
            ],
            answer: 1,
            explanation: "“Many of the claims about growth rates come from the organisations that promote the method, rather than from independent research.” A is the opposite.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "gap",
        title: "Practice 3: find the word in the passage",
        instructions: "Find ONE word in “Tiny forests in big cities” that has the same meaning as each definition. The paragraph is given in brackets.",
        text: "1. usual or traditional (B): {{0}}\n2. young trees (B): {{1}}\n3. water that is present in the soil or air (B): {{2}}\n4. not connected with or controlled by others (D): {{3}}\n5. fully grown or developed (D): {{4}}\n6. slowly becomes weaker and disappears (E): {{5}}",
        answers: [["conventional"], ["saplings"], ["moisture"], ["independent"], ["mature"], ["fades"]],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In short-answer questions, the answers come from the passage and must keep to the word limit (for example NO MORE THAN THREE WORDS). The questions usually follow the order of the passage and use different words from it, so scan for synonyms of the key words, not the key words themselves.",
    },
    {
      exam: "toefl",
      body: "In Read an Academic Passage, the correct option almost always paraphrases the text. If an option repeats a long phrase word for word, check it very carefully: it may change the cause, the degree of certainty or the person.",
    },
    {
      exam: "toeic",
      body: "TOEIC Part 7 often asks which word is closest in meaning to a word in the text. Choose the meaning that fits the sentence, not the most common meaning of the word: *qualify for free delivery* means *be eligible*, not *be trained*.",
    },
  ],
  vocabulary: [
    { word: "paraphrase", meaning: "to express the same meaning using different words", example: "The question paraphrases the second sentence of the paragraph.", topic: "academic" },
    { word: "synonym", meaning: "a word with the same or nearly the same meaning as another word", example: "“Rapid” is a synonym of “fast”.", topic: "academic" },
    { word: "pigment", meaning: "a substance that gives something its colour", example: "Each sac is filled with red or yellow pigment.", topic: "science" },
    { word: "contract", meaning: "(of a muscle) to become tighter and shorter", example: "When the muscles contract, the sac opens.", topic: "science" },
    { word: "detect", meaning: "to notice or discover something that is not easy to see, hear or feel", example: "Some animals can detect light through their skin.", topic: "science" },
    { word: "conventional", meaning: "usual, traditional, following the normal way of doing things", example: "Conventional tree planting leaves space between the trees.", topic: "environment" },
    { word: "sapling", meaning: "a young tree", example: "Volunteers planted over a thousand saplings.", topic: "environment" },
    { word: "native", meaning: "(of plants and animals) living naturally in a place, not brought from elsewhere", example: "The forest uses only native species.", topic: "environment" },
    { word: "proportion", meaning: "a part of a total amount or number", example: "A large proportion of the trees died.", topic: "academic" },
    { word: "convinced", meaning: "completely sure that something is true", example: "Not all scientists are convinced by the claims.", topic: "academic" },
    { word: "mature", meaning: "fully grown or developed", example: "Mature woodland supports a huge range of wildlife.", topic: "environment" },
  ],
  keyPoints: [
    "Questions rarely repeat the words of the text; look for the same meaning in different words.",
    "Six common paraphrases: synonym, word form, active ↔ passive, general ↔ specific, negative ↔ positive, cause ↔ effect.",
    "A true paraphrase keeps all the meaning: the same person, direction of change and degree of certainty.",
    "Options that copy words from the text but change one detail are common traps.",
    "In IELTS short-answer questions, copy the answer from the passage and keep to the word limit.",
  ],
};

export default lesson;
