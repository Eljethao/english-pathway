import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-practice-test",
  title: "Full reading practice test",
  summary:
    "A 45-minute mock reading test with three academic passages and 29 questions in mixed IELTS formats, with full answer explanations and a review plan.",
  skill: "reading",
  level: "C1",
  order: 4,
  minutes: 45,
  exams: [
    { exam: "ielts", task: "Mock test" },
    { exam: "ielts", task: "Reading – True/False/Not Given" },
    { exam: "ielts", task: "Reading – Matching headings" },
    { exam: "ielts", task: "Reading – Yes/No/Not Given" },
    { exam: "ielts", task: "Reading – Summary completion" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Complete three academic passages and 29 questions under timed conditions",
    "Apply the strategies from earlier lessons across mixed question types",
    "Review mistakes by type to decide what to practise next",
  ],
  warmUp: [
    "Which reading question type do you find hardest at the moment, and why?",
    "What is your time plan for three passages in 45 minutes?",
  ],
  learn: [
    {
      type: "text",
      title: "How this test works",
      body: "This mock test has **three passages** and **29 questions**. That is about three-quarters of the 40 questions in a full IELTS Academic Reading test, so you have **45 minutes** instead of 60.\n\n- The passages get harder, as they usually do in the real test.\n- Each passage has a timer. Start it when you begin the passage, and move on when it ends, even if you have not finished.\n- Answer every question. There is no penalty for wrong answers.\n- Do not use a dictionary and do not check the answers until you have finished all three passages.",
    },
    {
      type: "table",
      title: "Your time plan",
      headers: ["Passage", "Questions", "Time", "Question types"],
      rows: [
        ["1. A short history of the pencil", "1–10", "13 minutes", "True/False/Not Given, sentence completion"],
        ["2. Can a language be brought back?", "11–19", "15 minutes", "Matching headings, multiple choice"],
        ["3. In defence of boredom", "20–29", "17 minutes", "Yes/No/Not Given, multiple choice, summary completion"],
      ],
    },
    {
      type: "table",
      title: "After the test: what your score suggests",
      headers: ["Score (out of 29)", "What it suggests", "Next step"],
      rows: [
        ["25–29", "Strong C1 reading under time pressure", "Keep practising full tests; focus on any single question type you missed"],
        ["19–24", "Upper B2 to C1, with some weak areas", "Review the lesson for the question type where you lost most marks"],
        ["13–18", "Around B2", "Repeat the B2 lessons on True/False/Not Given, headings and completion"],
        ["0–12", "Timing or core reading skills need work", "Practise the time management lesson and the B1–B2 skimming and scanning lessons"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "This guide is only approximate. Real IELTS band scores are calculated from 40 questions and vary slightly between test versions.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Warm-up extract: the first postage stamps",
      paragraphs: [
        "Before 1840, letters in Britain were usually paid for by the person who received them, and the price depended on the distance travelled and the number of sheets. The system was slow and expensive, and many people refused to accept letters they could not afford. The reform introduced in 1840 changed this: senders paid a single low price in advance, regardless of distance, and proved it with an adhesive stamp. Within a few decades, similar systems had been adopted in many other countries.",
      ],
    },
    {
      type: "text",
      title: "Three traps to avoid in the test",
      body: "**True/False/Not Given trap.** *Statement: Before 1840, sending a letter abroad was especially expensive.* The extract says prices depended on distance but says nothing about letters abroad. → **Not Given**, not True. Do not complete the writer's idea with your own logic.\n\n**Matching headings trap.** A heading like *The spread of the idea to other countries* matches only the last sentence. A heading must describe the **whole** paragraph; *A simpler way to pay for post* fits better.\n\n**Completion trap.** *Senders paid one low price, whatever the ______.* (ONE WORD) The extract says *regardless of distance*. → **distance**. Do not write *the distance*: the article is already in the sentence.\n\nKeep these three traps in mind, then start Passage 1 and its timer.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Passage 1: A short history of the pencil",
      labelled: true,
      timerMinutes: 13,
      paragraphs: [
        "Few objects are as ordinary as the pencil, and few have a more surprising history. Although we still talk about pencil 'lead', the core of a pencil has never contained the metal of that name. It is made of graphite, a soft, dark form of carbon, usually mixed with clay. The confusion dates back to the sixteenth century, when the people who first came across graphite mistook it for a type of lead ore and named it accordingly. Even the word 'pencil' has changed its meaning: it originally referred to a fine artist's brush and comes from a Latin word meaning 'little tail'.",
        "The most famous early source of graphite was a deposit discovered in the sixteenth century at Borrowdale, in the north-west of England. According to local tradition, shepherds used the substance to mark their sheep. Borrowdale graphite was unusually pure and solid, which meant that it could be sawn into thin sticks and used for writing without any further processing. It soon became so valuable that the mines were guarded, and in the eighteenth century the British Parliament made stealing graphite a serious crime.",
        "The earliest pencils were simply sticks of graphite wrapped in string or sheepskin to keep the user's fingers clean. The practice of enclosing the graphite in wood developed later. Wood made pencils stronger and more comfortable to hold, and cedar, which is soft and easy to sharpen, eventually became the preferred material. By the eighteenth century pencil-making was an established craft, particularly in and around the German city of Nuremberg. German makers, however, had no access to pure graphite and had to mix graphite powder with other substances, such as sulphur, which produced pencils of a lower quality than those made from English graphite.",
        "The decisive breakthrough came in France in the 1790s. At war with Britain, France could no longer import graphite from Borrowdale, and the government asked Nicolas-Jacques Conté, a scientist and inventor, to find an alternative. Conté's solution was to mix powdered graphite with clay, shape the mixture into rods and heat them in a kiln. By changing the proportion of clay, he could control the hardness of the result: more clay produced a harder, lighter line, while more graphite produced a softer, darker one. His method, patented in 1795, remains the basis of pencil manufacture today.",
        "Other improvements followed during the nineteenth century. Machines for cutting and grooving wood made mass production possible, and the price of pencils fell sharply, so that they became affordable for ordinary schoolchildren. Manufacturers also began to paint pencils in bright colours, partly so that customers could recognise their brand at a glance. In 1858 an American, Hymen Lipman, patented a pencil with an eraser attached to one end, a design that remains far more common in North America than in Europe, where pencils are often sold without one.",
        "Despite the arrival of the ballpoint pen and, later, the computer, the pencil has proved remarkably durable. Billions are still produced every year. Artists value the range of tones that different grades provide, carpenters and engineers appreciate a mark that can easily be removed, and field scientists rely on the fact that, unlike ink, pencil marks do not run when paper gets wet. And many writers, from students to novelists, simply find that it is easier to think with a pencil in their hand.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "tfng",
        title: "Questions 1–5",
        instructions: "Do the following statements agree with the information in Passage 1? Choose True, False or Not Given.",
        statements: [
          {
            text: "1. The name 'lead' came from a mistake about what graphite was.",
            answer: "T",
            explanation: "Paragraph A: people “mistook it for a type of lead ore and named it accordingly”.",
          },
          {
            text: "2. Borrowdale shepherds were the first people to use graphite for writing.",
            answer: "NG",
            explanation: "Paragraph B says shepherds used it to mark sheep, but nothing about who first used it for writing.",
          },
          {
            text: "3. Borrowdale graphite had to be processed before it could be used for writing.",
            answer: "F",
            explanation: "Paragraph B: it could be used “without any further processing”.",
          },
          {
            text: "4. Conté's pencils were at first more expensive than German pencils.",
            answer: "NG",
            explanation: "Paragraph D describes Conté's method but gives no information about prices.",
          },
          {
            text: "5. Adding more clay to Conté's mixture produced a darker line.",
            answer: "F",
            explanation: "Paragraph D: “more clay produced a harder, lighter line”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Questions 6–10",
        instructions: "Complete the sentences. Write NO MORE THAN TWO WORDS from Passage 1 for each answer.",
        text: "6. In the eighteenth century, stealing graphite became a serious {{0}} in Britain.\n7. The earliest pencils were covered with string or {{1}} to protect the user's fingers.\n8. Conté heated his rods of graphite and clay in a {{2}}.\n9. Machines for cutting and grooving wood led to the {{3}} of pencils.\n10. Field scientists use pencils because the marks do not {{4}} on wet paper.",
        answers: [["crime"], ["sheepskin"], ["kiln"], ["mass production"], ["run"]],
      },
    },
    {
      type: "passage",
      title: "Passage 2: Can a language be brought back?",
      labelled: true,
      timerMinutes: 15,
      paragraphs: [
        "Of the roughly 7,000 languages spoken in the world today, linguists estimate that around 40 per cent are endangered, meaning that they are no longer being passed reliably from parents to children. Many have only a few hundred speakers, most of them elderly. When the last fluent speaker of such a language dies, an entire system of grammar, vocabulary and oral tradition may disappear, often before it has been fully recorded. Linguists sometimes compare the situation to the extinction of plant and animal species, although they admit that the comparison has its limits.",
        "Languages rarely disappear because their speakers simply choose a 'better' one. The causes are usually social and economic. Speakers of a minority language may move to cities in search of work, where a dominant language is needed for employment and education. In many countries, governments once actively discouraged or even punished the use of minority languages in schools, and the sense of shame this created could last for generations. Parents who had been punished for speaking their first language as children were often reluctant to pass it on to their own children.",
        "Yet language loss is not always permanent. The most frequently cited example of revival is Hebrew. For centuries it was used mainly in religious and scholarly writing rather than in everyday conversation. In the late nineteenth and early twentieth centuries, a movement to adopt it as a spoken language of daily life gained momentum, and it is now the native language of millions of people. Linguists point out, however, that the circumstances were unusual: Hebrew had a large written literature, and its revival was closely linked to the creation of a new state.",
        "Other revival movements have focused on the youngest speakers. In New Zealand in the early 1980s, Māori communities established 'language nests', pre-school centres in which young children are cared for entirely in Māori, often by fluent older speakers. The idea spread to Hawaii and elsewhere, and in several places it was followed by schools teaching the full curriculum in the minority language. In some communities, parents have begun learning the language alongside their children so that it can also be spoken at home. Such programmes have produced a new generation of speakers, although many children still use the dominant language outside the classroom.",
        "Technology has added new tools. Modern recording equipment allows linguists to document languages in far greater detail than before, and communities themselves have produced dictionaries, apps and social media content in their languages. Some revival projects have even made use of old wax-cylinder recordings and handwritten notes made by researchers a century ago. Recording a language, however, is not the same as keeping it alive. A language survives only if people use it to talk to one another about ordinary things.",
        "This is why many linguists now emphasise status and opportunity. When a minority language is used in government, broadcasting and business, young people are more likely to see it as useful rather than old-fashioned. Road signs, official forms and television channels in the language all send the message that it belongs to the present, not only to the past. In Wales, for instance, laws giving Welsh equal status with English in public life, together with schools that teach in Welsh, have helped to slow a long decline in the number of speakers. Revival is slow, expensive and never guaranteed; but the evidence suggests it is far from hopeless.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        labels: "roman",
        title: "Questions 11–16",
        instructions:
          "Passage 2 has six paragraphs, A–F. Choose the correct heading for each paragraph. There are more headings than paragraphs.",
        left: ["11. Paragraph A", "12. Paragraph B", "13. Paragraph C", "14. Paragraph D", "15. Paragraph E", "16. Paragraph F"],
        right: [
          "How linguists classify language families",
          "Starting with the very young",
          "The scale of the threat",
          "Why prestige and practical use matter",
          "Pressures that push speakers away from their language",
          "The world's oldest written languages",
          "Useful tools with clear limits",
          "A famous success under special conditions",
          "Government bans that are still in force",
        ],
        answer: [2, 4, 7, 1, 6, 3],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Questions 17–19",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "17. According to paragraph B, why did some parents not pass on their language?",
            options: [
              "They believed another language was more beautiful.",
              "They had been punished for speaking it when they were children.",
              "There were no teachers of the language in their area.",
              "Their children refused to learn it.",
            ],
            answer: 1,
            explanation: "Paragraph B: “Parents who had been punished for speaking their first language as children were often reluctant to pass it on.”",
          },
          {
            prompt: "18. What does the writer suggest about the revival of Hebrew?",
            options: [
              "It was achieved mainly through modern technology.",
              "It may be difficult for other languages to repeat.",
              "It happened without any written records.",
              "It has reduced the number of other languages spoken.",
            ],
            answer: 1,
            explanation: "Paragraph C: “the circumstances were unusual”, with a large written literature and links to a new state, so other languages may not have the same advantages.",
          },
          {
            prompt: "19. What point does the writer make about recordings in paragraph E?",
            options: [
              "They are too expensive for most communities.",
              "They are less detailed than older notes.",
              "They cannot by themselves keep a language alive.",
              "They have replaced the need for fluent speakers.",
            ],
            answer: 2,
            explanation: "Paragraph E: “Recording a language… is not the same as keeping it alive.”",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Passage 3: In defence of boredom",
      labelled: true,
      timerMinutes: 17,
      paragraphs: [
        "Boredom has a poor reputation. It is associated with idleness, restlessness and, in children, with bad behaviour; few people would list 'being bored' among the experiences they hope to have. Modern technology has made it easier than ever to avoid. Waiting rooms now have television screens, and even some petrol pumps play advertisements. A smartphone offers an endless supply of distraction, and studies of phone use suggest that many people reach for their devices within seconds of having nothing to do: in a queue, on a train or during a pause in conversation. Boredom, it seems, has become something to be eliminated as quickly as possible.",
        "I want to suggest that this is a mistake. Boredom is unpleasant, certainly, but so are hunger and pain, and we do not conclude from this that they serve no purpose. Psychologists increasingly describe boredom as a signal: a message from the mind that our current activity is failing to engage us and that we should look for something more meaningful. Like any signal, it can be ignored or misread, but suppressing it entirely may leave us less able to recognise when our lives need to change.",
        "There is also some evidence that boredom can encourage creative thinking. In one frequently cited experiment, participants who first completed a deliberately dull task, copying numbers from a telephone directory, went on to produce more ideas in a creativity test than those who had not. The researchers suggested that a mind with nothing to occupy it begins to wander, and that this wandering can lead to unexpected connections. The findings should not be overstated: the study was small, and later attempts to repeat similar experiments have produced mixed results. But the idea that an under-stimulated mind turns inward is consistent with research on daydreaming, which has been linked to planning and problem-solving.",
        "What is more troubling is how poorly many of us tolerate even brief periods without stimulation. In a widely discussed study published in 2014, participants were asked to sit alone in a plain room for up to fifteen minutes with nothing to do but think. Beforehand they had been given a mild electric shock, and many had said they would pay money to avoid experiencing it again. Yet when left alone with the option of shocking themselves, a substantial proportion chose to do so, apparently preferring physical discomfort to the company of their own thoughts.",
        "None of this means that we should seek out boredom for its own sake, or that a child complaining of having nothing to do should simply be left alone indefinitely. Chronic boredom, the kind experienced by people trapped in monotonous jobs or isolated by illness, is associated with poor mental health and should not be romanticised. My argument is a narrower one. The occasional, ordinary boredom of a slow afternoon or a long journey is not a problem to be solved but an opportunity, and our habit of filling every empty moment may be costing us more than we realise.",
        "In practice, this might mean resisting the urge to check a phone while waiting for a bus, or allowing children some unstructured time rather than filling every hour with organised activities. These are small changes, and their benefits are difficult to measure. But if boredom is indeed a signal, it seems unwise to keep switching it off before we have heard what it is trying to tell us.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "tfng",
        variant: "ynng",
        title: "Questions 20–23",
        instructions:
          "Do the following statements agree with the claims of the writer in Passage 3? Choose Yes, No or Not Given.",
        statements: [
          {
            text: "20. The fact that boredom is unpleasant shows that it has no useful purpose.",
            answer: "F",
            explanation: "No. Paragraph B: hunger and pain are also unpleasant, “and we do not conclude from this that they serve no purpose”.",
          },
          {
            text: "21. The results of the telephone-directory experiment should be treated with some caution.",
            answer: "T",
            explanation: "Yes. Paragraph C: “The findings should not be overstated: the study was small… mixed results.”",
          },
          {
            text: "22. Long-term boredom can be harmful and should not be presented as something positive.",
            answer: "T",
            explanation: "Yes. Paragraph E: chronic boredom “is associated with poor mental health and should not be romanticised”.",
          },
          {
            text: "23. Children should take part in no more than two organised activities a week.",
            answer: "NG",
            explanation: "Paragraph F suggests some unstructured time for children, but the writer gives no number of activities.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "mcq",
        title: "Questions 24–25",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "24. Why does the writer mention the 2014 study in paragraph D?",
            options: [
              "to show that electric shocks can improve concentration",
              "to show how difficult many people find being alone with their thoughts",
              "to prove that boredom is more harmful for men than for women",
              "to criticise the methods used by the researchers",
            ],
            answer: 1,
            explanation: "The paragraph begins “What is more troubling is how poorly many of us tolerate even brief periods without stimulation”, and the study illustrates this claim.",
          },
          {
            prompt: "25. What is the writer's main argument in Passage 3?",
            options: [
              "Smartphones should be banned in public places.",
              "All forms of boredom are good for mental health.",
              "Occasional, ordinary boredom can be valuable and should not always be avoided.",
              "Boredom is the main cause of creativity.",
            ],
            answer: 2,
            explanation: "Paragraph E: “My argument is a narrower one. The occasional, ordinary boredom… is not a problem to be solved but an opportunity.” Option B is too strong: the writer says chronic boredom is harmful.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex7",
        kind: "gap",
        title: "Questions 26–29",
        instructions:
          "Complete the summary of paragraphs B and C using words from the box. There are more words than gaps.",
        text: "Psychologists increasingly see boredom as a kind of {{0}} that our current activity is not engaging us. In one experiment, people who did a {{1}} task before a creativity test produced more ideas than other participants. One explanation is that a mind without stimulation starts to {{2}}, which can lead to unexpected connections. However, the writer notes that the study was {{3}} and that later results have been mixed.",
        answers: [["warning"], ["boring"], ["wander"], ["small"]],
        wordBank: ["warning", "reward", "boring", "difficult", "wander", "focus", "rest", "small", "recent", "reliable"],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "When you review this test, sort your mistakes by question type, not by passage. Three wrong answers in Yes/No/Not Given tell you more than 'I found Passage 3 difficult'.",
    },
    {
      exam: "ielts",
      body: "Note whether each mistake was a **reading** problem (you misunderstood the text) or a **timing** problem (you guessed because time ran out). They need different practice.",
    },
    {
      exam: "toefl",
      body: "Passages 2 and 3 are similar in style to TOEFL Read an Academic Passage, although real TOEFL passages are much shorter (about 200 words with 5 questions). The multiple-choice questions on the writer's purpose and main argument practise the same skills.",
    },
    {
      exam: "toeic",
      body: "TOEIC Part 7 texts are shorter and more practical, but the skills tested here, scanning for details and recognising paraphrase, are exactly what Part 7 questions require.",
    },
  ],
  vocabulary: [
    { word: "deposit", meaning: "a layer of a mineral or other substance found in the ground", example: "A deposit of pure graphite was found at Borrowdale.", topic: "science" },
    { word: "breakthrough", meaning: "an important discovery or development", example: "Conté's method was the decisive breakthrough.", topic: "science" },
    { word: "durable", meaning: "lasting for a long time", example: "The pencil has proved remarkably durable.", topic: "everyday" },
    { word: "endangered", meaning: "at risk of disappearing completely", example: "Around 40 per cent of languages are endangered.", topic: "society" },
    { word: "revival", meaning: "the process of bringing something back into use or popularity", example: "The revival of Hebrew is often cited as a success.", topic: "society" },
    { word: "reluctant", meaning: "not willing to do something", example: "Parents were reluctant to pass on the language.", topic: "everyday" },
    { word: "gain momentum", meaning: "to become stronger and develop more quickly", example: "The campaign gained momentum after the election.", topic: "society" },
    { word: "idleness", meaning: "the state of not working or doing anything useful", example: "Boredom is often confused with idleness.", topic: "everyday" },
    { word: "overstate", meaning: "to make something seem more important or certain than it is", example: "The findings of one small study should not be overstated.", topic: "academic" },
    { word: "romanticise", meaning: "to make something seem better or more attractive than it really is", example: "We should not romanticise hard physical work.", topic: "society" },
    { word: "monotonous", meaning: "boring because it never changes", example: "He left his monotonous job on the production line.", topic: "work" },
  ],
  keyPoints: [
    "Use a fixed time plan for each passage and move on when the timer ends.",
    "Answer every question: a guess can score, a blank cannot.",
    "Review mistakes by question type and by cause (reading or timing).",
    "Return to the lesson for any question type where you lost two or more marks.",
  ],
};

export default lesson;
