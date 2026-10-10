import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-academic-talk-main-idea",
  title: "Academic talks: main idea and details",
  summary:
    "Separate the main idea of a short academic talk from the examples, evidence and side comments that support it, and answer TOEFL Academic Talk questions and IELTS Part 4 notes with confidence.",
  skill: "listening",
  level: "B2",
  order: 10,
  minutes: 25,
  exams: [
    { exam: "toefl", task: "Listening – Academic Talk" },
    { exam: "ielts", task: "Listening Part 4" },
  ],
  objectives: [
    "Find the main idea of a talk, even when it comes after a story, a question or a surprising fact",
    "Recognise the job of a detail: example, evidence, contrast, definition or limitation",
    "Answer the four TOEFL Academic Talk question types: main idea, detail, organisation and inference",
    "Use the main points of an IELTS Part 4 lecture to follow the notes and place each detail correctly",
  ],
  warmUp: [
    "Think of a film you saw recently. Can you say what it was about in one sentence? Which scenes were details, not the main story?",
    "Why do teachers often start a lesson with a story or a question instead of the main point?",
  ],
  learn: [
    {
      type: "text",
      title: "Main idea or detail?",
      body: "The **main idea** of a talk is the one point that everything else supports. It answers the question *What is the speaker trying to teach me?* The **details** (examples, figures, stories, definitions) are there to explain or prove it.\n\nIn the TOEFL Listen to an Academic Talk task you hear a short talk by a professor or expert, about 100 to 250 words long, followed by four questions on main ideas, details, organisation and inference. In IELTS Listening Part 4 you hear a longer lecture and usually complete notes, a table, a flow-chart or sentences. In both tests, knowing the main idea tells you **where each detail belongs**.\n\nA common mistake is to choose the first thing you hear, or the most memorable example, as the main idea. Speakers often begin with a **hook**: a question, a story or a surprising fact that gets your attention. The main idea usually comes just **after** the hook, and it is often repeated at the end.",
    },
    {
      type: "table",
      title: "What is this detail doing?",
      headers: ["Job of the detail", "Signals you might hear", "Question you might see"],
      rows: [
        ["Example", "for instance, take… , a good example is, … by the way", "Why does the professor mention pineapples?"],
        ["Evidence", "studies show, in one famous case, we know this because", "What evidence does the speaker give?"],
        ["Contrast", "by contrast, unlike, whereas, the traditional view was", "How is X different from Y?"],
        ["Definition", "which we call, known as, in simple terms", "What is a desire path?"],
        ["Limitation", "however, there is a cost, of course, not every", "What problem does the speaker mention?"],
      ],
    },
    {
      type: "text",
      title: "Four kinds of question",
      body: "1. **Main idea**: *What is the talk mainly about?* The right option covers the **whole** talk. Options that describe only one example are too narrow; options that go beyond the talk are too broad.\n2. **Detail**: *According to the professor, why…?* The answer is stated, usually in different words.\n3. **Organisation or purpose**: *Why does the professor mention…?* or *How is the talk organised?* Think about the job of the detail, not its content.\n4. **Inference**: *What can be inferred about…?* or *What does the professor imply…?* The answer is not said directly, but it follows clearly from what is said. Don't choose an option that needs information the speaker never gave.",
    },
    {
      type: "audio",
      title: "Quick check audio: three openings",
      voice: "uk",
      transcript:
        "Narrator: Opening one.\nProfessor Hale: Imagine you're standing in a supermarket, choosing between twenty-four kinds of jam. Sounds great, doesn't it? Lots of choice. But today I want to argue that, beyond a certain point, more choice can actually make people less likely to buy anything at all.\nNarrator: Opening two.\nProfessor Osei: Last week we looked at how bridges carry the weight of traffic. Today we're moving on to one of the most common causes of bridge failure: water. In particular, I want to look at how fast-flowing rivers wear away the ground around a bridge's supports.\nNarrator: Opening three.\nProfessor Lund: Most of you have probably heard that Vikings wore helmets with horns on them. It's a great image, but there's no evidence for it at all. So today, rather than looking at myths, let's look at what archaeologists have actually found in Viking graves, and what those objects tell us about everyday life.",
      cast: { Narrator: "female", "Professor Hale": "male", "Professor Osei": "female", "Professor Lund": "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: hook or main idea?",
        instructions: "Listen to three openings of academic talks. Choose the best answer.",
        questions: [
          {
            prompt: "Opening 1: What will the talk mainly be about?",
            options: [
              "How supermarkets decide what to sell",
              "Why too much choice can stop people from buying",
              "Why people prefer some kinds of jam to others",
              "How to set the price of a new product",
            ],
            answer: 1,
            explanation: "The jam is a hook. The main idea comes after “today I want to argue that”: more choice can make people less likely to buy.",
          },
          {
            prompt: "Opening 2: What will the talk mainly be about?",
            options: [
              "How bridges carry the weight of traffic",
              "Why heavy lorries should not use old bridges",
              "How flowing water damages the ground around bridge supports",
              "How rivers change their course over time",
            ],
            answer: 2,
            explanation: "“Today… I want to look at how fast-flowing rivers wear away the ground around a bridge's supports.” Weight was last week's topic.",
          },
          {
            prompt: "Opening 2: Why does the professor mention last week's lecture?",
            options: [
              "To repeat the most important point from that lecture",
              "To show how the new topic follows on from the previous one",
              "To correct a mistake made last week",
              "To explain why the lecture is shorter than usual",
            ],
            answer: 1,
            explanation: "The professor links the old topic (weight) to the new one (water). This is an organisation question: it asks about the job of the sentence.",
          },
          {
            prompt: "Opening 3: What will the talk mainly be about?",
            options: [
              "The design of Viking helmets",
              "How myths about the Vikings began",
              "What objects in Viking graves reveal about daily life",
              "Where archaeologists usually find Viking graves",
            ],
            answer: 2,
            explanation: "The helmet story is a hook that the professor rejects. The main idea follows “So today… let's look at what archaeologists have actually found”.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model talk: how desert plants save water",
      voice: "us",
      transcript:
        "Today I want to explain how some desert plants manage to survive in places where water is extremely scarce. The answer, surprisingly, has to do with timing.\n\nAll plants need carbon dioxide from the air to make food, and they take it in through tiny openings on their leaves and stems, called stomata. The problem is that whenever these openings are open, water escapes. For a plant in a hot desert, opening them in the middle of the day would be like leaving a tap running.\n\nSo many cactus species have reversed the usual pattern. They keep their stomata closed during the heat of the day and open them at night, when the air is cooler and more humid, so far less water is lost. They store the carbon dioxide overnight in the form of an acid, and then use it the next day, when there is sunlight, to make sugars.\n\nPineapples use the same strategy, by the way, which is one reason they can grow in fairly dry regions.\n\nThere is a cost, though. This way of collecting carbon is slow, and that's one reason most cacti grow very slowly compared with plants in wetter places.",
      cast: { narrator: "female" },
    },
    {
      type: "text",
      title: "Four questions and how a strong listener answers them",
      body: "**1. What is the talk mainly about?** *How some desert plants reduce water loss by taking in carbon dioxide at night.* The main idea is stated in the first two sentences (*how some desert plants manage to survive… has to do with timing*) and explained in the third paragraph. An option such as “why pineapples grow in dry regions” is **too narrow**: it is only one example.\n\n**2. According to the professor, why is opening the stomata during the day a problem in the desert?** *Too much water would escape.* This is a detail, stated directly and then repeated with a comparison: *like leaving a tap running*.\n\n**3. Why does the professor mention pineapples?** *To give another example of a plant that uses the same strategy.* The signal *by the way* shows a side example. The question is about the **job** of the detail, not about pineapples themselves.\n\n**4. What can be inferred about plants in wetter places?** *They generally grow faster than cacti.* The professor never says this directly, but *cacti grow very slowly compared with plants in wetter places* means exactly that.\n\nNotice the shape of the talk: **problem** (water loss) → **solution** (open at night) → **example** (pineapples) → **limitation** (slow growth). Hearing that shape makes every question easier.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Talk 1: empty streets in early photographs",
      voice: "uk",
      transcript:
        "If you look at some of the very earliest photographs of city streets, from the late eighteen thirties, you'll notice something strange. The streets are empty. No carriages, no crowds, almost no people at all. Were the cities deserted? Not at all. These were busy streets. The explanation lies in how early cameras worked.\n\nThe first practical photographic processes needed a very long exposure. The plate inside the camera had to receive light for several minutes before an image formed. Anything that stayed still, like buildings and trees, was recorded clearly. But anything that moved, like a horse or a person walking, didn't stay in one place long enough to appear.\n\nIn one famous early picture of a Paris street, the only clearly visible figures are a man who had stopped to have his boots polished and the person polishing them. The customer stood still long enough to be recorded, while everyone around him simply vanished.\n\nLong exposures also help to explain why people in early portraits look so serious. Sitters had to hold exactly the same position for a long time, and studios sometimes used hidden metal stands to support their heads. Holding a natural smile for that long was almost impossible.\n\nOver the following decades, chemists developed far more sensitive materials, and exposure times fell to a few seconds or less. Only then could photographers begin to capture everyday life in motion.",
      cast: { narrator: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Talk 1 (TOEFL Academic Talk)",
        instructions: "Listen to the talk and take short notes. Then answer the four questions. Try not to look at the transcript.",
        questions: [
          {
            prompt: "What is the talk mainly about?",
            options: [
              "Why Paris streets were quiet in the 1830s",
              "How long exposure times affected what early photographs showed",
              "How portrait studios were run in the nineteenth century",
              "The chemists who invented photography",
            ],
            answer: 1,
            explanation: "The whole talk explains the effects of long exposures: empty streets, serious portraits, and the change when exposures became shorter. The Paris street is one example, and the streets were not really quiet.",
          },
          {
            prompt: "Why does the professor mention a man having his boots polished?",
            options: [
              "To show that people in Paris cared about their appearance",
              "To give an example of a person who stayed still long enough to be recorded",
              "To explain how photographers chose their subjects",
              "To suggest that the photograph was carefully planned",
            ],
            answer: 1,
            explanation: "“The customer stood still long enough to be recorded, while everyone around him simply vanished.” The detail is evidence for the main idea.",
          },
          {
            prompt: "According to the professor, why did some studios use hidden metal stands?",
            options: [
              "To hold the camera steady",
              "To help sitters keep their heads still",
              "To make the sitters look taller",
              "To hide the plate from the light",
            ],
            answer: 1,
            explanation: "Studios “used hidden metal stands to support their heads”, because sitters had to hold the same position for a long time.",
          },
          {
            prompt: "What does the professor imply about the serious faces in early portraits?",
            options: [
              "People in the past were generally unhappy.",
              "Photographers asked their sitters not to smile.",
              "They were at least partly the result of a technical limit.",
              "They were added later by the studios.",
            ],
            answer: 2,
            explanation: "The professor links the serious faces to long exposures: “Holding a natural smile for that long was almost impossible.” Nothing is said about people's mood or photographers' instructions.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Talk 2: desire paths",
      voice: "us",
      transcript:
        "Have you ever noticed a narrow strip of bare earth cutting across a park lawn, where hundreds of people have walked instead of following the paved path? Planners have a name for these: desire paths. Today I want to suggest that, rather than being a nuisance, desire paths are one of the most useful sources of information a designer can have.\n\nA desire path forms when the official route doesn't match where people actually want to go. Usually it's a shortcut. If a paved path makes a sharp turn around the edge of a lawn, people will cut the corner, and after a few weeks the grass wears away.\n\nThe traditional response has been to fight them, with fences, hedges or signs asking people to keep off the grass. But these measures rarely work for long. People climb over the fence, or they simply create a new path a little further along.\n\nSome designers now take the opposite approach. When a new campus or park opens, they plant grass everywhere at first and wait. After a few months, they look at where the grass has worn away, and only then do they build permanent paths along those lines.\n\nOf course, not every desire path should be paved. Some cross areas that are unsafe, or that need protecting, such as wildlife habitats. But even then, the path tells planners something important about where people need to go.",
      cast: { narrator: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Talk 2 (TOEFL Academic Talk)",
        instructions: "Listen to the talk and take short notes. Then answer the four questions.",
        questions: [
          {
            prompt: "What is the main idea of the talk?",
            options: [
              "Parks should have more fences to protect the grass.",
              "Desire paths show designers how people really want to move.",
              "Most people ignore signs in public places.",
              "New campuses should not have any paved paths.",
            ],
            answer: 1,
            explanation: "The professor's main claim is that desire paths are “one of the most useful sources of information a designer can have”. The rest of the talk supports it.",
          },
          {
            prompt: "According to the professor, why do desire paths usually form?",
            options: [
              "People want to avoid crowds on the paved path.",
              "The paved path is in poor condition.",
              "People take a shorter route than the official one.",
              "Animals wear away the grass first.",
            ],
            answer: 2,
            explanation: "“Usually it's a shortcut… people will cut the corner.”",
          },
          {
            prompt: "Why does the professor mention fences, hedges and signs?",
            options: [
              "To describe a common response that usually fails",
              "To recommend the best way to protect a lawn",
              "To explain how desire paths are measured",
              "To show how parks are designed today",
            ],
            answer: 0,
            explanation: "They are “the traditional response”, and “these measures rarely work for long”. The professor uses them as a contrast to the newer approach.",
          },
          {
            prompt: "What does the professor imply about desire paths through wildlife habitats?",
            options: [
              "They should be paved as soon as possible.",
              "They are usually created by animals, not people.",
              "They should not be paved, but they still show a need for a better route.",
              "They are not real desire paths.",
            ],
            answer: 2,
            explanation: "“Not every desire path should be paved… But even then, the path tells planners something important about where people need to go.”",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Talk 3: seed banks (IELTS Part 4 lecture)",
      voice: "uk",
      transcript:
        "Good morning. In today's lecture I'm going to look at seed banks, which are, in simple terms, libraries of seeds. My main argument is that they have become one of the most important forms of insurance we have for the future of food.\n\nLet's start with the problem they're designed to solve. Over the last century, farmers around the world have increasingly grown a small number of high-yielding crop varieties, and thousands of traditional varieties are no longer grown. When a variety disappears, its genes disappear with it. That matters, because some old varieties carried useful traits, for example resistance to a particular disease, or the ability to cope with drought.\n\nSo how does a seed bank work? First, seeds are collected, often from farmers. They're then cleaned and carefully dried, because seeds that contain too much water can be damaged when they're frozen. Next, they're sealed in airtight packets and stored at around minus eighteen degrees Celsius. In these conditions, the seeds of many crops can survive for decades.\n\nThe best-known example is the vault in Svalbard, a group of Norwegian islands in the Arctic, which opened in two thousand and eight. It's built deep inside a mountain, in permanently frozen ground, so even if the power failed, the seeds would stay cold. It acts as a back-up: other seed banks deposit copies of their seeds there, a bit like leaving a spare key with a neighbour. And that back-up has already been used. A research centre that had to leave Syria because of the war there later withdrew seeds to rebuild its collection.\n\nHowever, seed banks have limits. The seeds of many tropical fruit trees cannot survive drying, so they have to be kept in other ways, for instance as living plants.",
      cast: { narrator: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Note completion (IELTS Part 4)",
        instructions: "The headings show the main points of the lecture. Listen and complete the notes. Write ONE WORD ONLY for each answer.",
        text: "Seed banks\n\nMain argument: an important form of {{0}} for the future of food\n\nThe problem\n- farmers now grow fewer crop varieties\n- lost varieties may have had useful traits, e.g. resistance to a {{1}} or the ability to cope with {{2}}\n\nThe process\n- seeds collected, cleaned and {{3}}\n- stored in {{4}} packets at about -18°C\n\nThe Svalbard vault\n- built inside a {{5}} in frozen ground\n- acts as a {{6}} for other seed banks\n- seeds withdrawn by a research centre that had to leave {{7}}\n\nLimits\n- the seeds of many tropical fruit {{8}} cannot survive drying",
        answers: [
          ["insurance"],
          ["disease"],
          ["drought"],
          ["dried"],
          ["airtight"],
          ["mountain"],
          ["back-up", "backup"],
          ["Syria"],
          ["trees"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "match",
        title: "Which point does each detail support?",
        instructions: "Think about the seed bank lecture again. Match each detail to the main point it supports. There are two points you do not need.",
        left: [
          "resistance to a particular disease",
          "permanently frozen ground",
          "a spare key with a neighbour",
          "the research centre that left Syria",
          "tropical fruit trees",
        ],
        right: [
          "The vault stores copies of other collections.",
          "Not all seeds can be stored in a seed bank.",
          "Seed banks are very expensive to run.",
          "Lost crop varieties may contain valuable genes.",
          "The back-up system has already proved useful.",
          "Farmers prefer traditional crop varieties.",
          "The vault can keep seeds cold even without electricity.",
        ],
        answer: [3, 6, 0, 4, 1],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "In Listen to an Academic Talk, the talk is short (about 100 to 250 words) and is followed by four questions on the main idea, details, organisation and inference. You may not see the questions until the talk ends, so write the main idea at the top of your notes as soon as you hear it, and mark examples with *e.g.*",
    },
    {
      exam: "toefl",
      body: "For a main-idea question, check each option against the **whole** talk. An option that describes one example is too narrow; an option that adds something the professor never discussed is too broad. For inference questions, choose the option that follows clearly from what was said, not one that might be true in real life.",
    },
    {
      exam: "ielts",
      body: "Part 4 is a lecture by one speaker. The headings in the notes are usually the speaker's main points, in the same order as the talk. When you hear a new main point (*Let's start with the problem…*, *So how does it work?*), move your eyes to the next heading, even if you missed an answer.",
    },
  ],
  vocabulary: [
    { word: "main idea", meaning: "the most important point that a speaker or writer wants to make", example: "The main idea comes just after the opening story.", topic: "academic" },
    { word: "scarce", meaning: "available only in small amounts", example: "Water is scarce in the desert.", topic: "environment" },
    { word: "reverse", meaning: "to change something so that it is the opposite of before", example: "Cacti have reversed the usual pattern.", topic: "science" },
    { word: "exposure", meaning: "(in photography) the time that light is allowed to reach the film or plate", example: "Early cameras needed an exposure of several minutes.", topic: "technology" },
    { word: "capture", meaning: "to record something in a photograph, film or recording", example: "Faster materials allowed photographers to capture movement.", topic: "technology" },
    { word: "nuisance", meaning: "something that is annoying or causes problems", example: "Planners used to see desire paths as a nuisance.", topic: "society" },
    { word: "shortcut", meaning: "a quicker or shorter way to get somewhere", example: "Students took a shortcut across the lawn.", topic: "everyday" },
    { word: "habitat", meaning: "the natural home of a plant or animal", example: "The path crosses an important wildlife habitat.", topic: "environment" },
    { word: "trait", meaning: "a quality or characteristic, often one that is passed on genetically", example: "Some old varieties carry useful traits.", topic: "science" },
    { word: "drought", meaning: "a long period with little or no rain", example: "These plants can cope with drought.", topic: "environment" },
    { word: "airtight", meaning: "closed so that no air can get in or out", example: "Seeds are sealed in airtight packets.", topic: "science" },
    { word: "back-up", meaning: "a copy or extra supply kept in case the original is lost", example: "The vault is a back-up for seed banks around the world.", topic: "technology" },
  ],
  keyPoints: [
    "The main idea is the point the whole talk supports. It often comes just after a hook and is repeated at the end.",
    "Every detail has a job: example, evidence, contrast, definition or limitation. Questions often ask about the job, not the content.",
    "Main-idea options that describe one example are too narrow; options that go beyond the talk are too broad.",
    "Inference answers follow clearly from what is said; they do not need outside knowledge.",
    "In IELTS Part 4, the note headings are the main points: use them to keep your place.",
  ],
};

export default lesson;
