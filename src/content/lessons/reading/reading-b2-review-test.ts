import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-b2-review-test",
  title: "B2 reading review test",
  summary:
    "A 40-minute review test for the B2 reading course: two IELTS-style passages, TOEFL everyday and academic texts, and a TOEIC double passage, with 46 questions and full explanations.",
  skill: "reading",
  level: "B2",
  order: 12,
  minutes: 40,
  exams: [
    { exam: "ielts", task: "Reading – Matching headings" },
    { exam: "ielts", task: "Reading – True/False/Not Given" },
    { exam: "ielts", task: "Reading – Summary completion" },
    { exam: "ielts", task: "Reading – Matching features" },
    { exam: "ielts", task: "Reading – Multiple choice" },
    { exam: "ielts", task: "Reading – Note, table and flow-chart completion" },
    { exam: "toefl", task: "Reading – Read in Daily Life" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
  ],
  objectives: [
    "Complete 46 questions in mixed IELTS, TOEFL and TOEIC formats under timed conditions",
    "Apply the strategies from the B2 course: identifying False and Not Given, matching, completion with word limits, multiple choice, paraphrase and cross-referencing",
    "Use your results to decide which B2 lessons to review",
  ],
  warmUp: [
    "Which B2 reading lesson was the most useful for you, and which question type still feels difficult?",
    "How will you divide 40 minutes between two long passages and two sets of short texts?",
  ],
  learn: [
    {
      type: "text",
      title: "How this test works",
      body: "This review test covers the whole B2 reading course. It has **four sections** and **46 questions**, and you have **40 minutes**.\n\n- Sections 1 and 2 are IELTS-style passages of about 400 words.\n- Section 3 has two TOEFL Read in Daily Life texts and one Read an Academic Passage text of about 200 words.\n- Section 4 is a TOEIC Part 7 double passage.\n\nStart the timer on each passage when you begin it, and move on when it ends. Answer every question: a blank answer can never score, so make your best guess if time is short. Check your answers only when you have finished all four sections.",
    },
    {
      type: "table",
      title: "Your time plan",
      headers: ["Section", "Questions", "Time", "Question types"],
      rows: [
        ["1. How new words get into the dictionary", "1–17", "14 minutes", "Matching headings, True/False/Not Given, summary completion"],
        ["2. The homework debate", "18–31", "13 minutes", "Matching features, multiple choice, note completion"],
        ["3. TOEFL texts", "32–41", "7 minutes", "Read in Daily Life, Read an Academic Passage"],
        ["4. TOEIC double passage", "42–46", "6 minutes", "Part 7 multiple passages"],
      ],
    },
    {
      type: "table",
      title: "After the test: what your score suggests",
      headers: ["Score (out of 46)", "What it suggests", "Next step"],
      rows: [
        ["40–46", "Secure B2 reading; ready to start C1", "Move on to the C1 reading course"],
        ["32–39", "Solid B2 with one or two weak areas", "Review the lesson for the question type where you lost most marks"],
        ["23–31", "Developing B2", "Repeat the B2 lessons on True/False/Not Given, paraphrase and completion tasks"],
        ["0–22", "Core B2 skills need more practice", "Work through the B2 course again, starting with lessons 1–4, and review B1 skimming and scanning"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "This score guide is only approximate. Real exam scores are calculated from complete tests, and each exam converts raw scores in its own way.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Warm-up extract: the town library",
      paragraphs: [
        "The town's first public library opened in 1903 in two rooms above the post office. It was paid for by a local businessman, and borrowing books was free from the start, although readers had to pay a small fee to use the reading room in the evenings. By the 1920s the collection had outgrown the building, and a new library was built on the market square.",
      ],
    },
    {
      type: "text",
      title: "Four reminders before you start",
      body: "**False or Not Given?** *Statement: Readers paid to borrow books.* The extract says borrowing “was free from the start”, so it contradicts the statement → **False**. *Statement: It was the first public library in the region.* The extract only talks about the town → **Not Given**.\n\n**Count the words.** *The first library was above the ______.* With NO MORE THAN TWO WORDS, the answer is **post office**. With ONE WORD ONLY, this gap would not be possible, so always read the limit before you answer.\n\n**Recognise the paraphrase.** *Why did the library move?* The extract says “the collection had outgrown the building”, which an option might express as *There was no longer enough space for the books*.\n\n**Name the trap.** An option saying *Readers paid a fee to borrow books in the evening* copies words from the text but joins two different facts: it is the **opposite** of what the text says about borrowing.\n\nNow start Section 1 and its timer.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Section 1: How new words get into the dictionary",
      labelled: true,
      timerMinutes: 14,
      paragraphs: [
        "Every year, the major English dictionaries announce lists of new entries, and every year the announcement causes a small storm. Some readers are delighted to see a familiar piece of slang recognised; others complain that the dictionary is lowering its standards by including words that, in their view, are not “real English”. Both reactions rest on the same misunderstanding of what modern dictionaries are for.",
        "Most dictionary makers today see their job as describing the language as it is actually used, not deciding how it ought to be used. A word is added not because the editors like it, but because there is enough evidence that many people use it, with a stable meaning, over a period of time. A word that is popular for a few months and then disappears is unlikely to be included, however much attention it received.",
        "Collecting that evidence used to be slow, manual work. For generations, volunteers read books and newspapers and copied interesting examples onto paper slips, which were then sorted by hand. Today, lexicographers, the people who write dictionaries, rely mainly on corpora: enormous electronic collections of written and spoken texts, often containing billions of words. By searching a corpus, an editor can see in seconds how often a word appears, in what kinds of texts, and which other words it usually combines with.",
        "Even with this technology, human judgement is still required. Lexicographers must decide whether a new use is a separate meaning or just a variation of an existing one, and how to write a definition that is short, accurate and easy to understand. They also have to decide when a word has become established. There is no fixed rule: some editors look for evidence across several years and several types of source, while a word that spreads very widely in a short time may be added sooner.",
        "Removing words is a different matter. Printed dictionaries had limited space, so rarely used words were sometimes dropped to make room for new ones. Online dictionaries, which have no such limits, usually keep old words but mark them as dated or rare, because readers may still meet them in older texts. In this sense, a modern dictionary is less a list of approved words than a record of the language's past as well as its present.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Questions 1–5: Matching headings",
        instructions: "Choose the correct heading for each paragraph from the list of headings. There are more headings than paragraphs.",
        left: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"],
        right: [
          "From paper slips to computer searches",
          "Why printed dictionaries are disappearing",
          "Two opposite reactions to the same news",
          "What happens to words that fall out of use",
          "Recording the language rather than judging it",
          "The most popular new words of recent years",
          "Where technology is not enough",
        ],
        answer: [2, 4, 0, 6, 3],
        labels: "roman",
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "tfng",
        title: "Questions 6–12: True / False / Not Given",
        instructions: "Do the following statements agree with the information in the passage?",
        statements: [
          {
            text: "Some readers believe that certain new dictionary entries are not proper English.",
            answer: "T",
            explanation: "Paragraph A: some readers complain about words that “are not ‘real English’”.",
          },
          {
            text: "Most modern dictionary makers aim to tell people how words should be used.",
            answer: "F",
            explanation: "Paragraph B: their job is “describing the language as it is actually used, not deciding how it ought to be used”.",
          },
          {
            text: "A word that receives a lot of media attention will always be added to the dictionary.",
            answer: "F",
            explanation: "Paragraph B: a short-lived word “is unlikely to be included, however much attention it received”.",
          },
          {
            text: "The paper-slip method was first used in the nineteenth century.",
            answer: "NG",
            explanation: "Paragraph C says the method was used “for generations” but gives no date.",
          },
          {
            text: "A corpus can show which words often appear together with a particular word.",
            answer: "T",
            explanation: "Paragraph C: an editor can see “which other words it usually combines with”.",
          },
          {
            text: "All lexicographers use the same rule to decide when a word is established.",
            answer: "F",
            explanation: "Paragraph D: “There is no fixed rule”, and different editors use different evidence.",
          },
          {
            text: "Online dictionaries usually delete words that are rarely used.",
            answer: "F",
            explanation: "Paragraph E: online dictionaries “usually keep old words but mark them as dated or rare”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Questions 13–17: Summary completion",
        instructions: "Complete the summary. Write ONE WORD ONLY from the passage for each answer.",
        text: "Today, the people who write dictionaries, known as {{0}}, use huge electronic collections of texts called {{1}}. These show how often a word appears and which words it combines with. However, people must still use their {{2}}, for example to decide whether a word has become {{3}}. In online dictionaries, old words are not removed but are labelled as dated or {{4}}.",
        answers: [["lexicographers"], ["corpora"], ["judgement", "judgment"], ["established"], ["rare"]],
      },
    },
    {
      type: "passage",
      title: "Section 2: The homework debate",
      labelled: true,
      timerMinutes: 13,
      paragraphs: [
        "Few school practices are as familiar, or as disputed, as homework. Parents argue about it, teachers set it in very different amounts, and some schools have recently abolished it for younger pupils altogether. Researchers, too, disagree about its value, partly because “homework” covers everything from ten minutes of spelling practice to a project that takes a whole weekend.",
        "The educational psychologist Dr Ana Ferreira has spent several years reviewing studies of homework and achievement. Her conclusion is that the link between the two depends strongly on age. For teenagers, she finds a clear connection between moderate amounts of homework and better results, but for children in their first years of primary school the connection is weak or absent. She warns, however, that even for older students the benefits stop growing after a certain point: students who spend very long hours on homework do not, on average, do better than those who spend a moderate amount.",
        "Martin Osei, a secondary school head teacher, believes the debate focuses too much on quantity. In his school, teachers were asked to set fewer tasks but to explain the purpose of each one and to give feedback on all of them. He says that students now complete their homework more reliably, although he admits that he has no data yet to show whether their exam results have improved.",
        "For the sociologist Professor Lena Brandt, the most important question is fairness. Homework, she argues, assumes that every child has a quiet place to work, access to the internet and an adult who can help. Children from poorer homes are less likely to have these advantages, so homework may widen the gap between them and their classmates. She proposes that schools run supervised homework clubs after lessons, where all pupils have the same support.",
        "Not everyone accepts this solution. The education writer Paul Ridley questions whether homework clubs would solve the problem, pointing out that the pupils who most need them are often the least likely to attend. He also defends homework for a different reason: in his view, it teaches young people to organise their time and work independently, skills that matter at university and at work but are rarely measured in tests.",
        "Ferreira agrees with Ridley that these skills are valuable, but she doubts that long assignments are the best way to develop them. Short, regular tasks, she suggests, are more likely to build good habits than occasional large projects that students leave until the last minute.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "match",
        title: "Questions 18–24: Matching features",
        instructions: "Match each statement with the correct person, A–D. NB You may use any letter more than once.",
        left: [
          "The amount of homework matters less than how it is designed and followed up.",
          "Homework may increase inequality between pupils.",
          "Spending more and more time on homework does not keep improving results.",
          "Homework develops abilities that exams do not usually test.",
          "A suggested solution may not reach the pupils it is intended for.",
          "There is not yet any evidence that a change has improved academic results.",
          "Frequent small tasks are better for developing good habits.",
        ],
        right: ["Ana Ferreira", "Martin Osei", "Lena Brandt", "Paul Ridley"],
        answer: [1, 2, 0, 3, 3, 1, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Questions 25–27: Multiple choice",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "According to paragraph A, one reason why researchers disagree about homework is that",
            options: [
              "many schools have stopped setting it.",
              "the word covers very different kinds of task.",
              "parents and teachers refuse to discuss it.",
              "there have been very few studies of it.",
            ],
            answer: 1,
            explanation: "Researchers disagree “partly because ‘homework’ covers everything from ten minutes of spelling practice to a project that takes a whole weekend”.",
          },
          {
            prompt: "What does Ferreira say about homework for children in their first years of primary school?",
            options: [
              "It should be banned completely.",
              "It is more useful for them than for teenagers.",
              "It has little or no connection with their achievement.",
              "It is usually set in very large amounts.",
            ],
            answer: 2,
            explanation: "Paragraph B: for young primary children “the connection is weak or absent”. She does not recommend a ban (A), and B is the opposite.",
          },
          {
            prompt: "What is the writer's main purpose in the passage?",
            options: [
              "to persuade schools to stop setting homework",
              "to present different expert views on the value of homework",
              "to explain how to organise a homework club",
              "to show that homework improves exam results",
            ],
            answer: 1,
            explanation: "The passage reports four people's views without the writer taking a side. D is too extreme: the evidence depends on age and amount.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "gap",
        title: "Questions 28–31: Note completion",
        instructions: "Complete the notes. Write ONE WORD ONLY from the passage for each answer.",
        text: "Brandt's argument\n- homework assumes all children have a quiet place to work, the internet and an adult to {{0}}\n- her proposal: supervised homework {{1}} after lessons\n\nOsei's school\n- fewer tasks; teachers explain the {{2}} of each one\n- students now complete homework more {{3}}",
        answers: [["help"], ["clubs"], ["purpose"], ["reliably"]],
      },
    },
    {
      type: "passage",
      title: "Section 3, Text 1: Notice – Student ID cards",
      timerMinutes: 7,
      paragraphs: [
        "Lost your student ID card?",
        "Replacement cards can be collected from the Card Office (Room 112, Hanley Building) between 10 a.m. and 4 p.m., Monday to Thursday. Please bring a photo ID, such as a passport or driving licence.",
        "The first replacement costs $15; any further replacements cost $25. If your card was stolen, show a police report and the replacement will be free.",
        "Cards are usually printed while you wait, but at the start of each semester this may take up to two days.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex7",
        kind: "mcq",
        title: "Questions 32–34: Read in Daily Life",
        instructions: "Answer the questions about the notice.",
        questions: [
          {
            prompt: "What must students bring to get a replacement card?",
            options: ["a police report", "a document with their photo", "their old card", "$25 in cash"],
            answer: 1,
            explanation: "“Please bring a photo ID, such as a passport or driving licence.” A police report is needed only if the card was stolen.",
          },
          {
            prompt: "When might a student have to wait longer for a new card?",
            options: ["on Fridays", "after 4 p.m.", "at the beginning of a semester", "if the card was stolen"],
            answer: 2,
            explanation: "“At the start of each semester this may take up to two days.” The office is closed on Fridays and after 4 p.m., so A and B are not about waiting longer.",
          },
          {
            prompt: "A student's card was stolen, and she brings a police report. How much will she pay?",
            options: ["nothing", "$15", "$25", "$40"],
            answer: 0,
            explanation: "“If your card was stolen, show a police report and the replacement will be free.”",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Section 3, Text 2: Text messages",
      paragraphs: [
        "Sam: Are you going to the careers fair tomorrow?",
        "Nina: Planning to, but I've got a lab until 2. Doesn't the fair finish at 3?",
        "Sam: It did, but they've extended it to 5 because so many companies signed up.",
        "Nina: Great, then I'll head over straight after my lab. Can you save me a map of the stands?",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex8",
        kind: "mcq",
        title: "Questions 35–36: Read in Daily Life",
        instructions: "Answer the questions about the text messages.",
        questions: [
          {
            prompt: "Why will the careers fair finish later than planned?",
            options: [
              "More companies than expected registered for it.",
              "Many students have labs in the afternoon.",
              "It started late in the morning.",
              "Sam asked the organisers to extend it.",
            ],
            answer: 0,
            explanation: "“They've extended it to 5 because so many companies signed up.” *Signed up* = *registered*.",
          },
          {
            prompt: "What will Nina probably do tomorrow afternoon?",
            options: [
              "miss the fair because of her lab",
              "go to the fair after 2 p.m.",
              "meet Sam at 5 p.m.",
              "print a map of the stands for Sam",
            ],
            answer: 1,
            explanation: "Her lab ends at 2, and she will “head over straight after”. Sam will save a map for her, not the other way round.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Section 3, Text 3: Why leaves change colour",
      paragraphs: [
        "Each autumn, the leaves of many trees turn from green to yellow, orange or red before they fall. The green colour of a leaf comes from chlorophyll, the pigment that captures sunlight for photosynthesis. Leaves also contain yellow and orange pigments called carotenoids, but during spring and summer these are hidden by the much larger amount of chlorophyll.",
        "As the days shorten in autumn, trees stop producing new chlorophyll and begin to break down what remains, so that valuable nutrients such as nitrogen can be moved into the branches and stored for the following year. As the green fades, the carotenoids, which were there all along, become visible.",
        "Red colours have a different origin. They come from pigments called anthocyanins, which many trees actually produce in autumn rather than in summer. Since making new pigments costs energy, scientists have asked why a tree would do this just before losing its leaves. One widely discussed explanation is that anthocyanins act like a sunscreen, protecting the leaf from light damage while the tree recovers its nutrients.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex9",
        kind: "mcq",
        title: "Questions 37–41: Read an Academic Passage",
        instructions: "Answer the 5 questions about the passage.",
        questions: [
          {
            prompt: "According to paragraph 1, why can the yellow and orange pigments not be seen in summer?",
            options: [
              "They are hidden by a much larger amount of chlorophyll.",
              "They are produced only in autumn.",
              "They are destroyed by strong sunlight.",
              "They are stored in the branches.",
            ],
            answer: 0,
            explanation: "Detail: carotenoids “are hidden by the much larger amount of chlorophyll”. B describes anthocyanins, not carotenoids.",
          },
          {
            prompt: "The word “valuable” in paragraph 2 is closest in meaning to",
            options: ["important", "visible", "harmful", "rare"],
            answer: 0,
            explanation: "Vocabulary: the nutrients are worth saving for the following year, so they are important to the tree.",
          },
          {
            prompt: "What can be inferred about carotenoids?",
            options: [
              "They are not newly made in autumn.",
              "They protect leaves from light damage.",
              "They contain large amounts of nitrogen.",
              "They are found only in red leaves.",
            ],
            answer: 0,
            explanation: "Inference: they “were there all along” and simply “become visible” when chlorophyll fades. The sunscreen idea (B) is about anthocyanins.",
          },
          {
            prompt: "How does paragraph 3 relate to paragraph 2?",
            options: [
              "It explains a colour that has a different cause from the colours in paragraph 2.",
              "It gives evidence that the process in paragraph 2 does not happen.",
              "It describes the same process in more detail.",
              "It gives an example of a tree that keeps its leaves.",
            ],
            answer: 0,
            explanation: "Connection: “Red colours have a different origin.” Paragraph 2 explains yellow and orange; paragraph 3 explains red.",
          },
          {
            prompt: "Why does the writer mention a sunscreen?",
            options: [
              "to describe a possible reason why trees produce red pigments",
              "to show that leaves need protection in summer",
              "to compare trees with people who spend time outdoors",
              "to explain why chlorophyll breaks down",
            ],
            answer: 0,
            explanation: "Purpose: the sunscreen comparison illustrates one “widely discussed explanation” for why trees make anthocyanins in autumn.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Section 4, Text 1: Memo",
      timerMinutes: 6,
      paragraphs: [
        "To: All staff, Hartwell Insurance · From: Facilities Department · Date: 2 October · Subject: Office move",
        "The Customer Service and Marketing teams will move from the third floor to the newly renovated fifth floor over the weekend of 18–19 October. Staff in these teams should pack their personal items in the boxes provided by 5 p.m. on Friday, 17 October, and label each box with their name and new desk number.",
        "IT staff will disconnect and reconnect all computers, so please do not unplug any equipment yourself. Your team manager will send you your new desk number by 10 October.",
        "The fifth floor will open at 8 a.m. on Monday, 20 October. The third floor will then be closed for renovation until the end of November.",
      ],
    },
    {
      type: "passage",
      title: "Section 4, Text 2: Email",
      paragraphs: [
        "From: Grace Morales · To: Facilities Department · Date: 13 October · Subject: Office move",
        "Hello,",
        "I'm in the Marketing team. Our manager is on leave until 20 October, and I still haven't received my new desk number. Could you send it to me directly?",
        "Also, I'll be working from home on Friday the 17th. Would it be possible for me to pack my things on Thursday afternoon instead?",
        "Many thanks,",
        "Grace",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex10",
        kind: "mcq",
        title: "Questions 42–46: TOEIC Part 7 double passage",
        instructions: "Use the memo and the email. Choose the best answer.",
        questions: [
          {
            prompt: "What is the purpose of the memo?",
            options: [
              "to give staff instructions for an office move",
              "to announce new jobs in the Marketing team",
              "to ask staff to choose their new desks",
              "to explain a delay in renovation work",
            ],
            answer: 0,
            explanation: "The memo explains when the teams will move and what staff must do (pack, label, not unplug equipment).",
          },
          {
            prompt: "What are staff told NOT to do?",
            options: [
              "pack their personal items",
              "disconnect their own computers",
              "work on the fifth floor before Monday",
              "contact their team manager",
            ],
            answer: 1,
            explanation: "“Please do not unplug any equipment yourself.” *Unplug* is paraphrased as *disconnect*.",
          },
          {
            prompt: "Why has Ms Morales probably not received her desk number?",
            options: [
              "The Facilities Department has lost it.",
              "The person who should send it is away.",
              "Desk numbers will be given out on 20 October.",
              "She is not one of the staff who are moving.",
            ],
            answer: 1,
            explanation: "Cross-reference: the memo says team managers will send desk numbers; her email says her manager is on leave until 20 October.",
          },
          {
            prompt: "What is suggested about Ms Morales's plan to pack on Thursday?",
            options: [
              "It would be too late for the deadline.",
              "It would meet the packing deadline.",
              "It is not allowed by the memo.",
              "It would require help from IT staff.",
            ],
            answer: 1,
            explanation: "Cross-reference: boxes must be packed “by 5 p.m. on Friday, 17 October”, so Thursday afternoon is before the deadline.",
          },
          {
            prompt: "What will happen to the third floor after 20 October?",
            options: [
              "It will be used by the Marketing team.",
              "It will be closed while it is renovated.",
              "It will open at 8 a.m.",
              "It will be rented to another company.",
            ],
            answer: 1,
            explanation: "“The third floor will then be closed for renovation until the end of November.” C describes the fifth floor.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In a full IELTS Reading test you have 60 minutes for 40 questions and three passages. Use the same habit as in this test: keep to a time plan, and if one question takes too long, guess, mark it and come back later.",
    },
    {
      exam: "toefl",
      body: "TOEFL Reading is adaptive, so careful answers in the first part of the section matter. Short texts still need careful reading: check conditions, exceptions and changes before you choose.",
    },
    {
      exam: "toeic",
      body: "In TOEIC double and triple passages, answer the single-text questions first, then the cross-reference questions. Look for the bridge between texts: a name, a date, a room or a condition.",
    },
  ],
  vocabulary: [
    { word: "entry", meaning: "a word and its definition in a dictionary", example: "The dictionary added five hundred new entries this year.", topic: "education" },
    { word: "slang", meaning: "very informal words, often used by a particular group", example: "Teenagers often use slang that their parents don't understand.", topic: "society" },
    { word: "corpus", meaning: "a large collection of written or spoken texts used for language research (plural: corpora)", example: "The editors searched the corpus for examples of the word.", topic: "academic" },
    { word: "established", meaning: "accepted and used for a long time", example: "The word is now an established part of the language.", topic: "academic" },
    { word: "disputed", meaning: "argued about; not agreed by everyone", example: "The value of homework is widely disputed.", topic: "education" },
    { word: "abolish", meaning: "to officially end a law, system or practice", example: "Some schools have abolished homework for young children.", topic: "education" },
    { word: "moderate", meaning: "neither too much nor too little", example: "A moderate amount of homework seems to help teenagers.", topic: "education" },
    { word: "inequality", meaning: "an unfair situation in which some people have more opportunities than others", example: "Homework may increase inequality between pupils.", topic: "society" },
    { word: "renovate", meaning: "to repair and improve an old building", example: "The fifth floor has been renovated.", topic: "work" },
    { word: "on leave", meaning: "officially away from work for a period", example: "Our manager is on leave until Monday.", topic: "work" },
  ],
  keyPoints: [
    "Keep to a time plan for each section and move on when the time is up.",
    "False contradicts the text; Not Given means the text does not say.",
    "In completion tasks, copy words exactly and check the word limit.",
    "Correct options paraphrase the text; copied words with a changed meaning are traps.",
    "In multiple passages, find the bridge between texts and check for later changes.",
  ],
};

export default lesson;
