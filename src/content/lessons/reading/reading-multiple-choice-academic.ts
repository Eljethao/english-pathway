import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-multiple-choice-academic",
  title: "Multiple choice in academic texts",
  summary:
    "Answer multiple-choice questions on academic texts by finding the evidence first and naming the trap in each wrong option, for IELTS Multiple choice and TOEFL Read an Academic Passage.",
  skill: "reading",
  level: "B2",
  order: 7,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Reading – Multiple choice" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
  ],
  objectives: [
    "Recognise the main kinds of academic multiple-choice question: detail, vocabulary, inference, connection, purpose and main idea",
    "Find and read the evidence before looking closely at the options",
    "Reject wrong options by naming their trap: too extreme, opposite, true but not the answer, or not in the text",
    "Answer \"Choose TWO\" questions and questions about the whole passage",
  ],
  warmUp: [
    "When you do a multiple-choice question, do you read the options first or the text first? Why?",
    "Have you ever chosen an option because it used the same words as the text, and then found it was wrong?",
  ],
  learn: [
    {
      type: "text",
      title: "Multiple choice in two exams",
      body: "**IELTS Reading – Multiple choice.** You usually choose the best answer from four options (A–D). Some questions ask you to choose TWO answers from five options, or THREE from a longer list. Most questions test details in one part of the passage and follow the order of the passage. A final question may ask about the whole text, for example its main purpose or the best title.\n\n**TOEFL Read an Academic Passage.** You read a short academic text of about 200 words and answer 5 questions. The questions test facts, vocabulary, inference, the connection between ideas and the writer's purpose. Because the text is short, every sentence matters.\n\nIn the B1 course you learned to read the question stem carefully and remove wrong options. At B2 the texts are denser, and the wrong options are more convincing. The key skill is to explain **why** each wrong option is wrong.",
    },
    {
      type: "table",
      title: "Six common question types",
      headers: ["Type", "Typical stem", "What to do"],
      rows: [
        ["Detail", "According to paragraph 2, why…?", "Scan for the key words, then read two or three sentences carefully."],
        ["Vocabulary", "The word *X* is closest in meaning to…", "Replace the word with each option and check that the sentence still makes sense."],
        ["Inference", "What can be inferred about…?", "The answer is not written directly, but it must follow logically from the text. Do not add your own knowledge."],
        ["Connection", "How does paragraph 3 relate to paragraph 2?", "Ask: does it give an example, a cause, a result, a contrast or a disadvantage?"],
        ["Purpose", "Why does the writer mention…?", "Read the sentence before and after. Ask what point the example supports."],
        ["Main idea", "What is the main purpose of the passage? / Which is the best title?", "Choose the option that covers the whole text, not just one paragraph."],
      ],
    },
    {
      type: "text",
      title: "A five-step method",
      body: "1. Read the **stem** (the question) and underline its key words. Do not read the options in detail yet.\n2. Find the part of the text the stem refers to. In IELTS, questions usually follow the order of the passage.\n3. Read that part carefully and form your **own answer** in a few words.\n4. Now read the options. Choose the one that matches your answer in meaning, usually with different words.\n5. Check the other options and name the trap in each one. If you cannot say why an option is wrong, read the evidence again.",
    },
    {
      type: "table",
      title: "Four traps in wrong options",
      headers: ["Trap", "What it looks like", "Example"],
      rows: [
        ["Too extreme", "The text says *some*, *often* or *may*; the option says *all*, *always* or *will*.", "Text: attendance has fallen. Option: students have stopped attending altogether."],
        ["Opposite", "The option uses words from the text but reverses the meaning.", "Text: recordings help students revise before exams. Option: students use them to avoid revising."],
        ["True, but not the answer", "The option is correct according to the text, but it does not answer this question.", "The question asks about students; the option is about lecturers."],
        ["Not in the text", "The option sounds reasonable, but the text never says it.", "Option: students would prefer shorter lectures."],
      ],
    },
    {
      type: "passage",
      title: "Mini text: recorded lectures",
      paragraphs: [
        "Many universities now record their lectures and put them online. Students generally welcome this, saying that recordings help them to review difficult points before exams. However, some lecturers report that attendance has fallen, particularly in the later weeks of the term, and a few have stopped recording their classes as a result.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Name the trap",
        instructions:
          "Question: “According to the text, how have students responded to recorded lectures?” The correct answer is “They have mostly been positive about them.” Why is each of these other options wrong?",
        questions: [
          {
            prompt: "Option: “They have stopped going to lectures altogether.”",
            options: ["Too extreme", "Opposite", "True, but not the answer", "Not in the text"],
            answer: 0,
            explanation: "The text says attendance “has fallen”, not that students have stopped going altogether. The option goes much further than the text.",
          },
          {
            prompt: "Option: “They use the recordings to avoid revising before exams.”",
            options: ["Too extreme", "Opposite", "True, but not the answer", "Not in the text"],
            answer: 1,
            explanation: "The text says recordings help students “review difficult points before exams”. The option reverses this meaning while using similar words.",
          },
          {
            prompt: "Option: “Some lecturers no longer record their classes.”",
            options: ["Too extreme", "Opposite", "True, but not the answer", "Not in the text"],
            answer: 2,
            explanation: "This is true (“a few have stopped recording their classes”), but it is about lecturers. The question asks how students have responded.",
          },
          {
            prompt: "Option: “They would prefer lectures to be shorter.”",
            options: ["Too extreme", "Opposite", "True, but not the answer", "Not in the text"],
            answer: 3,
            explanation: "The length of lectures is never mentioned. The option sounds reasonable, but there is no evidence for it.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "Artificial light and the night-time world",
      labelled: true,
      paragraphs: [
        "For most of history, the night was dark. Apart from the moon, the stars and the occasional fire, living things experienced long hours of darkness for much of the year, and many species evolved to rely on it. Today, in large parts of the world, the night sky is never truly black. Street lamps, illuminated advertising and lit buildings create a glow that can be seen from many kilometres away, and ecologists have begun to ask what this artificial light is doing to the animals and plants that share our towns and countryside.",
        "Insects are among the most obviously affected. Anyone who has left a window open on a summer evening knows that moths are drawn to lamps, but the consequences are more serious than a few unwanted visitors. An insect that circles a street light all night is not feeding or breeding, and many are eaten by predators or simply die of exhaustion. Researchers have long suspected that light contributes to the decline in insect numbers reported in many countries, although they stress that it is only one factor among several, alongside habitat loss and the use of pesticides.",
        "For some animals, light at night is confusing rather than attractive. Sea turtles hatch on beaches at night and find the sea by moving towards the brightest horizon, which under natural conditions is the moonlit water. Where hotels and roads line the coast, young turtles may crawl inland instead, towards the lights. Similarly, birds that migrate at night can become disoriented by brightly lit towers and circle them until they are exhausted or collide with the glass.",
        "The effects are not limited to animals. Trees growing next to street lamps have been observed to keep their leaves later into the autumn than trees of the same species in darker places, apparently because the extra light makes them behave as if the days were still long. Whether this harms the trees is not yet clear.",
        "The encouraging news is that, unlike many forms of pollution, light pollution can be reduced almost immediately. Shielding lamps so that they point downwards, switching off lights in empty buildings and choosing lights with a warmer colour, which appears to attract fewer insects, can all make a difference. Some coastal towns now dim their seafront lighting during the turtle nesting season. The difficulty is less technical than social: many people associate bright lights with safety, and persuading them that darker streets need not be more dangerous may prove harder than changing the lamps themselves.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader answers",
      body: "**Question:** According to paragraph B, what do researchers say about artificial light and the fall in insect numbers?\nA It is the main cause.\nB It is one of several causes.\nC There is no clear connection.\nD It mainly affects moths.\n\nKey words in the stem: *researchers*, *insect numbers*. The last sentence of paragraph B says light “contributes to the decline… although… it is only one factor among several”. My own answer: *one cause among others*. → **B**\n\nNaming the traps: A is **too extreme** (the text says *one factor*, not *the main* one). C is the **opposite**: researchers suspect a connection. D uses a word from the paragraph (*moths*), but the text never says light mainly affects moths: **not in the text**.\n\n**Question:** What is the writer's main point in paragraph E?\nA Light pollution is impossible to reduce.\nB The technology for reducing light pollution is not yet available.\nC Changing people's attitudes may be the biggest challenge.\nD Coastal towns have solved the problem of light pollution.\n\nThe paragraph lists easy technical solutions, then ends: “The difficulty is less technical than social… persuading them… may prove harder than changing the lamps.” → **C**. A and B are **opposite** (the paragraph says light pollution can be reduced “almost immediately”). D is **too extreme**: *some* towns dim their lights during one season; nothing is *solved*.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Your turn",
        instructions: "Use the passage “Artificial light and the night-time world”. Choose the correct answer.",
        questions: [
          {
            prompt: "Why does the writer mention leaving a window open on a summer evening (paragraph B)?",
            options: [
              "to show that insects' attraction to light is a familiar experience",
              "to warn readers about insects entering their homes",
              "to explain how moths find their food",
              "to suggest that insects prefer warm rooms",
            ],
            answer: 0,
            explanation: "This is a purpose question. “Anyone who… knows that moths are drawn to lamps” starts from an everyday experience, and then the writer moves to the more serious consequences. B, C and D are not in the text.",
          },
          {
            prompt: "According to paragraph C, how do young sea turtles normally find the sea?",
            options: [
              "by following the sound of the waves",
              "by moving towards the brightest part of the horizon",
              "by following older turtles",
              "by moving away from roads and hotels",
            ],
            answer: 1,
            explanation: "They find the sea “by moving towards the brightest horizon, which under natural conditions is the moonlit water”. D is a trap: roads and hotels are where the problem happens, not how turtles normally navigate.",
          },
          {
            prompt: "What does the writer say about trees growing next to street lamps?",
            options: [
              "They lose their leaves earlier than other trees.",
              "They are clearly damaged by the light.",
              "They keep their leaves for longer than trees in darker places.",
              "They grow faster than other trees of the same species.",
            ],
            answer: 2,
            explanation: "Paragraph D: they “keep their leaves later into the autumn”. A is the opposite. B is too extreme: “Whether this harms the trees is not yet clear.” D is not in the text.",
          },
          {
            prompt: "Which TWO ways of reducing light pollution does the writer mention? Choose TWO answers.",
            options: [
              "using lamps that point downwards",
              "replacing street lamps with solar-powered lights",
              "turning off lights in buildings that no one is using",
              "choosing lights with a cooler, bluer colour",
              "making street lamps brighter so that people feel safe",
            ],
            answer: [0, 2],
            explanation: "Paragraph E: “Shielding lamps so that they point downwards” and “switching off lights in empty buildings”. D is the opposite (the text says a warmer colour). B is not in the text, and E describes people's attitude, not a solution.",
          },
        ],
      },
    },
  ],
  practice: [
    {
      type: "passage",
      title: "The return of repair",
      labelled: true,
      timerMinutes: 9,
      paragraphs: [
        "Not long ago, a broken toaster or a phone with a cracked screen was usually thrown away. Repairs often cost almost as much as a new product, spare parts were hard to find, and many devices were glued or sealed in ways that made them almost impossible to open. Throwing things away was not simply a wasteful habit; for many consumers it was the only sensible choice.",
        "Over the past fifteen years or so, however, repair has made a surprising comeback. One sign is the growth of repair cafés: free community events where volunteers with practical skills help visitors fix clothes, bicycles, lamps and small electrical items. The first was held in the Netherlands in 2009, and the idea has since spread to thousands of locations around the world. Organisers say the events are as much about sharing knowledge as about mending objects, since visitors are encouraged to watch and help rather than simply hand over a broken item.",
        "Governments have also become involved. In several countries and regions, new rules require manufacturers to make spare parts and repair information available for a number of years after a product is sold, at least for certain categories of goods such as washing machines and refrigerators. Supporters call this the “right to repair”. Manufacturers have often resisted such rules, arguing that untrained people could injure themselves or damage products, and that sealed designs help to keep devices thin and water-resistant.",
        "The environmental case for repair is strong. Making a new laptop or phone requires mining, manufacturing and transport, and most of the carbon emissions linked to such a device are produced before it is ever switched on. Keeping an existing device in use for a few more years is therefore usually better for the environment than replacing it with a more energy-efficient model, although this is not true of every product. An old refrigerator, for example, may use so much electricity that replacing it is the greener choice.",
        "Whether the repair movement will change the habits of the majority remains uncertain. Repair still takes time, and many people enjoy owning the latest model. Yet the movement may already have achieved something important: it has made “Can this be fixed?” a normal question to ask before buying something new.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Practice 1: IELTS multiple choice",
        instructions: "Read “The return of repair”. Choose the correct answer. Question 5 asks for TWO answers.",
        questions: [
          {
            prompt: "In paragraph A, the writer suggests that people used to throw away broken goods mainly because",
            options: [
              "they did not care about waste.",
              "repairing them was rarely practical or good value.",
              "new products were much better designed.",
              "shops refused to repair them.",
            ],
            answer: 1,
            explanation: "Repairs cost “almost as much as a new product”, parts were hard to find and devices were hard to open, so throwing things away was “the only sensible choice”. A is the opposite of “not simply a wasteful habit”.",
          },
          {
            prompt: "According to paragraph B, the organisers of repair cafés believe that the events",
            options: [
              "should charge visitors a small fee.",
              "are mainly intended for people with practical skills.",
              "help people to learn as well as to fix things.",
              "started in many countries at the same time.",
            ],
            answer: 2,
            explanation: "The events are “as much about sharing knowledge as about mending objects”. A contradicts “free”; B confuses visitors with volunteers; D contradicts “the first was held in the Netherlands”.",
          },
          {
            prompt: "What reason do manufacturers give for opposing right-to-repair rules?",
            options: [
              "Storing spare parts is too expensive.",
              "Repairs by untrained people could be unsafe.",
              "Customers prefer to buy new products.",
              "The rules cover too many kinds of product.",
            ],
            answer: 1,
            explanation: "Paragraph C: “untrained people could injure themselves or damage products”. The other options sound reasonable but are not in the text.",
          },
          {
            prompt: "What does the writer say about replacing a device with a more energy-efficient model?",
            options: [
              "It is always better for the environment.",
              "It is never better for the environment.",
              "It is usually less green than keeping the old device, but there are exceptions.",
              "It reduces the amount of mining needed.",
            ],
            answer: 2,
            explanation: "Keeping a device is “usually better… although this is not true of every product”, and the old refrigerator is an exception. A and B are too extreme; D is the opposite, because new devices require mining.",
          },
          {
            prompt: "According to paragraph E, which TWO things may stop most people from changing their habits? Choose TWO answers.",
            options: [
              "Repairing things still takes time.",
              "Many people like to own the newest model.",
              "Repair cafés exist in only a few countries.",
              "Spare parts are still too expensive.",
              "Manufacturers have stopped making spare parts.",
            ],
            answer: [0, 1],
            explanation: "“Repair still takes time, and many people enjoy owning the latest model.” C is the opposite (paragraph B says repair cafés have spread to thousands of locations), and D and E are not in the text.",
          },
          {
            prompt: "Which is the best title for the passage?",
            options: [
              "Why repair is always the greenest choice",
              "The growing interest in fixing things",
              "How to repair your own electronic devices",
              "Manufacturers win the battle over repair",
            ],
            answer: 1,
            explanation: "The passage describes repair's “surprising comeback” through repair cafés, new rules and environmental arguments. A is too extreme (paragraph D gives an exception), C is not the topic, and D is not in the text.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "TOEFL-style passage 1: How desert plants save water",
      timerMinutes: 4,
      paragraphs: [
        "Plants need carbon dioxide for photosynthesis, and they take it in through tiny openings in their leaves called stomata. The problem is that whenever the stomata are open, water escapes as vapour. For most plants this is a manageable cost, but in a hot desert, opening the stomata during the day could cause a plant to lose more water than it can replace.",
        "Many cacti and other desert plants solve this problem with an unusual timetable. They open their stomata at night, when the air is cooler and more humid, and store the carbon dioxide they absorb in the form of an acid. During the day the stomata stay closed, and the stored carbon dioxide is released inside the leaf so that photosynthesis can continue in sunlight. This strategy, known as CAM, greatly reduces water loss.",
        "The arrangement has a price, however. Because a plant can store only a limited amount of carbon dioxide overnight, CAM plants usually grow much more slowly than plants in wetter environments. In the desert, this is a sensible trade: survival matters more than speed.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Practice 2: TOEFL Read an Academic Passage",
        instructions: "Read the passage about desert plants and answer the 5 questions.",
        questions: [
          {
            prompt: "According to paragraph 1, why is opening the stomata during the day a problem for desert plants?",
            options: [
              "They could lose more water than they can replace.",
              "Too much carbon dioxide would enter the leaves.",
              "Strong sunlight would damage the openings.",
              "The stored acid would escape from the leaves.",
            ],
            answer: 0,
            explanation: "Detail: in a hot desert, opening the stomata during the day “could cause a plant to lose more water than it can replace”.",
          },
          {
            prompt: "The word “manageable” in paragraph 1 is closest in meaning to",
            options: ["possible to deal with", "dangerous", "unexpected", "possible to avoid"],
            answer: 0,
            explanation: "Vocabulary: for most plants, losing some water is a cost they can cope with. The contrast with the desert (“but… more water than it can replace”) confirms this.",
          },
          {
            prompt: "What can be inferred about most plants that live in wetter environments?",
            options: [
              "They usually open their stomata during the day.",
              "They store more acid than cacti do.",
              "They grow more slowly than CAM plants.",
              "They lose less water than CAM plants.",
            ],
            answer: 0,
            explanation: "Inference: for most plants water loss is “a manageable cost”, and the night-time timetable of desert plants is called “unusual”. So most other plants must open their stomata in the day. C and D are the opposite of the text.",
          },
          {
            prompt: "How does paragraph 3 relate to paragraph 2?",
            options: [
              "It describes a disadvantage of the strategy explained in paragraph 2.",
              "It gives a second example of the strategy in paragraph 2.",
              "It offers a different explanation for the facts in paragraph 2.",
              "It questions whether the strategy in paragraph 2 really works.",
            ],
            answer: 0,
            explanation: "Connection: “The arrangement has a price, however” introduces a cost, slow growth. The writer still calls the strategy “a sensible trade”, so D is wrong.",
          },
          {
            prompt: "What is the main purpose of the passage?",
            options: [
              "to explain how some plants reduce water loss and what this costs them",
              "to compare cacti with other kinds of desert plant",
              "to argue that CAM plants should be grown in wetter regions",
              "to describe how carbon dioxide is turned into acid",
            ],
            answer: 0,
            explanation: "Purpose: the passage presents the problem, the CAM solution and its price. D is only one detail, and B and C are not in the text.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "TOEFL-style passage 2: The origins of standard time",
      timerMinutes: 4,
      paragraphs: [
        "Until the nineteenth century, most towns kept their own local time, based on the position of the sun. When the sun was highest in the sky, it was noon, so a town a short distance to the west was a few minutes behind its neighbour. For people who rarely travelled far, these small differences hardly mattered.",
        "The arrival of the railways changed this. A train could now pass through many towns in a single journey, and a timetable that used dozens of local times was confusing for passengers and dangerous for railway staff, who needed to know exactly when trains would meet on a single track. Railway companies therefore began to adopt one standard time for their whole network, usually the time of a major city.",
        "At first, many towns kept their local time for everyday life while the station clock showed railway time, and some public clocks were even built with two minute hands. Gradually, however, the convenience of a shared time won, and governments made standard time official. The modern system of time zones, in which large regions share one time, grew directly from this practical problem.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Practice 3: TOEFL Read an Academic Passage",
        instructions: "Read the passage about standard time and answer the 5 questions.",
        questions: [
          {
            prompt: "According to paragraph 1, why did neighbouring towns have different times?",
            options: [
              "Each town's time depended on the position of the sun.",
              "Each town chose the time of the nearest city.",
              "Town clocks were not very accurate.",
              "Railway companies set different times for each town.",
            ],
            answer: 0,
            explanation: "Detail: local time was “based on the position of the sun”, so a town to the west was a few minutes behind. D is a later development, and B and C are not in the text.",
          },
          {
            prompt: "The word “adopt” in paragraph 2 is closest in meaning to",
            options: ["start to use", "refuse", "invent", "compare"],
            answer: 0,
            explanation: "Vocabulary: the railway companies began to use one standard time across their network.",
          },
          {
            prompt: "What can be inferred from paragraph 1 about local time?",
            options: [
              "It caused few problems before long-distance travel became common.",
              "It was decided by national governments.",
              "Towns to the east were behind their neighbours.",
              "It was more accurate than railway time.",
            ],
            answer: 0,
            explanation: "Inference: “For people who rarely travelled far, these small differences hardly mattered.” C is the opposite: towns to the west were behind, so towns to the east were ahead.",
          },
          {
            prompt: "Why does the writer mention public clocks with two minute hands?",
            options: [
              "to show that local time and railway time were used side by side for a period",
              "to show that public clocks were very expensive to build",
              "to suggest that railway time was less accurate than local time",
              "to prove that towns never accepted railway time",
            ],
            answer: 0,
            explanation: "Purpose: the clocks illustrate the previous idea, that towns kept local time while the station showed railway time. D is the opposite: “Gradually… the convenience of a shared time won.”",
          },
          {
            prompt: "Which sentence best expresses the main idea of the passage?",
            options: [
              "The needs of the railways led to the use of standard time.",
              "Local time was more natural than standard time.",
              "Railway travel was dangerous in the nineteenth century.",
              "Governments created time zones before the railways existed.",
            ],
            answer: 0,
            explanation: "Main idea: the passage explains how railway timetables caused a problem that standard time, and later time zones, solved. C is one detail, and D is the opposite of the text.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Read the instructions carefully. If a question says *Choose TWO letters*, you must give two answers, and the two answers can come from different parts of the passage. A final question about the best title or the writer's purpose is about the whole text, so answer it last.",
    },
    {
      exam: "ielts",
      body: "An option that repeats several exact words from the passage is not automatically right. The correct option usually paraphrases the text, while traps often copy its words and change the meaning.",
    },
    {
      exam: "toefl",
      body: "Read an Academic Passage has about 200 words and 5 questions on facts, vocabulary, inference, the connection between ideas and the writer's purpose. For vocabulary questions, put each option into the sentence: the right one keeps the meaning of the whole sentence, not just the word.",
    },
  ],
  vocabulary: [
    { word: "distractor", meaning: "a wrong option in a multiple-choice question that is designed to look correct", example: "The second option was a distractor: it used the right words but the wrong meaning.", topic: "education" },
    { word: "infer", meaning: "to reach a conclusion from information that is not stated directly", example: "From her tone, I inferred that she was unhappy with the plan.", topic: "academic" },
    { word: "illuminated", meaning: "lit up, especially with electric light", example: "The illuminated signs could be seen from the motorway.", topic: "environment" },
    { word: "disoriented", meaning: "confused about where you are or which direction to go", example: "The birds became disoriented by the bright lights of the tower.", topic: "environment" },
    { word: "habitat", meaning: "the natural home of an animal or plant", example: "Habitat loss is a major threat to many insects.", topic: "environment" },
    { word: "comeback", meaning: "a return to popularity or success after a period of decline", example: "Vinyl records have made a comeback in recent years.", topic: "society" },
    { word: "resist", meaning: "to try to stop a change from happening", example: "Some companies resisted the new rules.", topic: "business" },
    { word: "emissions", meaning: "gases such as carbon dioxide that are sent into the air", example: "Most of a phone's emissions come from making it.", topic: "environment" },
    { word: "humid", meaning: "containing a lot of water in the air", example: "The air is more humid at night than during the day.", topic: "science" },
    { word: "adopt", meaning: "to start to use a particular method or system", example: "The company adopted a new timetable last year.", topic: "work" },
    { word: "trade-off", meaning: "a balance between two things, where you accept less of one to get more of the other", example: "There is a trade-off between speed and accuracy.", topic: "academic" },
  ],
  keyPoints: [
    "Read the stem, find the evidence and form your own answer before you study the options.",
    "Name the trap in each wrong option: too extreme, opposite, true but not the answer, or not in the text.",
    "The correct option usually paraphrases the text; copied words are often a trap.",
    "IELTS questions usually follow the passage order; a title or purpose question covers the whole text.",
    "TOEFL Read an Academic Passage: about 200 words, 5 questions on facts, vocabulary, inference, connections and purpose.",
  ],
};

export default lesson;
