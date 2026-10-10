import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-chunking-pausing",
  title: "Chunking, pausing and stress for meaning",
  summary:
    "Group words into meaningful chunks, pause where the meaning needs it and move the main stress to show contrast, so long answers stay easy to follow: the control of rhythm and stress that the IELTS pronunciation descriptors describe from band 6 upwards.",
  skill: "speaking",
  level: "C1",
  order: 9,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toeic", task: "Speaking – Read a text aloud" },
    { exam: "toefl", task: "Speaking – Listen and Repeat" },
  ],
  objectives: [
    "Divide long sentences into thought groups (chunks) and pause at the boundaries the meaning requires",
    "Put the main stress of each chunk on new or contrasting information, and de-stress information that has already been mentioned",
    "Use contrastive and emphatic stress (including on auxiliaries: they do read) to correct, contrast or contradict",
    "Read a short announcement aloud with clear chunking for the TOEIC Read a text aloud task",
  ],
  warmUp: [
    "Read these two sentences aloud. Where do you pause, and how does the meaning change? “The students who passed the test celebrated.” / “The students, who passed the test, celebrated.”",
  ],
  learn: [
    {
      type: "text",
      title: "What the descriptors say",
      body: "The public IELTS band descriptors for **Pronunciation** say this about rhythm and stress:\n\n- **Band 6:** “Chunking is generally appropriate, but rhythm may be affected by a lack of stress-timing and/or a rapid speech rate.” Also: “Some effective use of intonation and stress, but this is not sustained.”\n- **Band 8:** “Can sustain appropriate rhythm. Flexible use of stress and intonation across long utterances, despite occasional lapses.”\n- **Band 7** has no wording of its own. It is defined as “all the positive features of band 6, and some, but not all, of the positive features of band 8”.\n\nSo moving up from band 6 is not mainly about individual sounds. It is about **keeping** chunking, rhythm and stress under control across **long** turns, which is exactly where Part 2 and Part 3 put pressure on you.\n\nIn the B2 course you practised focus words, intonation patterns and connected speech in single sentences. This lesson is about long utterances: how to group words so that a 60-second answer stays easy to follow.\n\n**Notation in this lesson:** | marks a chunk boundary (a short pause or a clear break in pitch) and **bold** marks the main stress. This is a study tool only; you won't see it in an exam.",
    },
    {
      type: "text",
      title: "Chunking: thought groups and pauses",
      body: "A **chunk** (or thought group) is a group of words that belong together in meaning, spoken as one unit with one main stress. Inside a chunk, words are linked smoothly. Between chunks there is a slight pause or a reset in pitch.\n\nNatural chunk boundaries come:\n\n- **after a long subject:** *The main problem with most city centres | is the cost of housing.*\n- **around an aside or a non-defining clause:** *My brother, | who's a nurse, | works nights.*\n- **after an introductory phrase or discourse marker:** *To be fair, | it's a difficult job.*\n- **between clauses:** *If prices keep rising, | people will move out.*\n- **between items in a list.**\n\nDon't break a tight unit: not *the cost | of housing*, not *public | transport*, not *look | after*. Pausing at the right places makes you sound *more* fluent, not less. Running everything together at speed sounds like one very long word; pausing every two words sounds hesitant.",
    },
    {
      type: "table",
      title: "Chunking can change the meaning",
      headers: ["Chunked like this", "Meaning"],
      rows: [
        ["The students who failed the test | will retake it in May.", "Only the students who failed will retake it."],
        ["The students, | who failed the test, | will retake it in May.", "All the students failed, and all of them will retake it."],
        ["He said | the manager was late.", "He is speaking; the manager was late."],
        ["He, | said the manager, | was late.", "The manager is speaking; he (another person) was late."],
      ],
    },
    {
      type: "text",
      title: "Stress for meaning: given, new and contrast",
      body: "Each chunk has one main stress, usually on the **last new content word**. At C1, three habits make the biggest difference:\n\n- **De-stress what's already given.** A: *Do you enjoy living in the city?* B: *I **love** living in the city.* (*city* has already been said, so the stress moves to *love*.)\n- **Contrastive stress across chunks.** *It's not the **price** that bothers people, | it's the **hassle**.* The two contrasted words carry the stress; everything else stays lower.\n- **Emphatic auxiliaries.** Stressing *do, does, did, is, have* or *can* contradicts or confirms: *People say teenagers don't read, | but they **do** read, | just not on paper.*\n\nUsed sparingly, a short pause **before** a key word adds emphasis: *And the answer, | quite simply, | is **time**.* Used in every sentence, it sounds theatrical.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Where do the chunks go?",
        questions: [
          {
            prompt: "Which chunking is most natural? “The biggest problem with public transport in my city is that it stops running at midnight.”",
            options: [
              "The biggest problem | with public | transport in my city is | that it stops | running at midnight.",
              "The biggest problem with public transport in my city | is that it stops running at midnight.",
              "The | biggest | problem | with | public | transport | in | my | city | is…",
              "The biggest problem with public transport in my city is that it stops running at | midnight.",
            ],
            answer: 1,
            explanation: "The natural boundary comes after the long subject. A breaks *public | transport*, C pauses after every word, and D separates *at* from *midnight*.",
          },
          {
            prompt: "Which sentence breaks a chunk in the WRONG place?",
            options: [
              "If prices keep rising, | people will move out.",
              "To be fair, | it's a difficult job.",
              "We need to look | after older people better.",
              "My neighbour, | who's a teacher, | agrees.",
            ],
            answer: 2,
            explanation: "*Look after* is a phrasal verb and must stay in one chunk. The other boundaries come after a clause, an introductory phrase and around a non-defining clause.",
          },
          {
            prompt: "“My sister, | who lives in Canada, | is a doctor.” What do the pauses around “who lives in Canada” tell the listener?",
            options: [
              "The speaker has several sisters and means the one in Canada.",
              "The speaker has one sister and is adding extra information about her.",
              "The speaker isn't sure where the sister lives.",
              "The sister is about to move to Canada.",
            ],
            answer: 1,
            explanation: "Pauses on both sides mark a non-defining clause: extra information. Without them (“My sister who lives in Canada is a doctor”), the clause identifies which sister, suggesting there is more than one.",
          },
          {
            prompt: "“He, | said the manager, | was late.” Who was late?",
            options: ["The manager", "The person referred to as “he”", "Both of them", "It's impossible to tell"],
            answer: 1,
            explanation: "The pauses turn *said the manager* into a reporting aside: the manager is speaking, and *he* was late. Without the pauses (“He said the manager was late”), the manager was late.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answer: Part 3 on the topic of “Learning languages”",
      voice: "uk",
      cast: { Examiner: "male", Candidate: "female" },
      transcript:
        "Examiner: Why do some people seem to find it easier to learn languages than others?\nCandidate: Well, I don't think it's mainly about talent, although that's what most people assume. In my experience, the people who learn fastest aren't necessarily the cleverest. They're the ones who aren't afraid of making mistakes. If you're willing to sound a bit silly, you'll speak more, and the more you speak, the faster you improve. Exposure matters too, of course. A child who grows up hearing two languages at home has a huge head start. But for adults, I'd say it's less about ability and more about habits. Someone who studies for fifteen minutes every day will usually overtake someone who studies for three hours once a week. So it isn't that some people can learn languages and others can't. It's that some people practise in a way that actually works.",
    },
    {
      type: "example",
      title: "The same answer, marked for chunks and stress",
      items: [
        "Well, | I don't think it's mainly about **talent**, | although that's what most people **assume**.",
        "In my **experience**, | the people who learn **fastest** | aren't necessarily the **cleverest**.",
        "If you're willing to sound a bit **silly**, | you'll speak **more**, | and the **more** you speak, | the **faster** you improve.",
        "A child who grows up hearing two languages at **home** | has a huge **head** start.",
        "But for **adults**, | I'd say it's less about **ability** | and more about **habits**.",
        "So it isn't that some people **can** learn languages | and others **can't**.",
      ],
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "The recording is computer-generated, so its pauses and stresses may not match the marked version exactly. Use the marked version as your guide and read it aloud yourself.\n\n- **Boundaries after introductions and long subjects:** *Well, |*, *In my experience, |*, *the people who learn fastest |*. The listener always knows where the subject ends and the comment begins.\n- **Defining clauses stay inside the chunk:** *A child who grows up hearing two languages at home* is one unit, because the clause tells us *which* child.\n- **Contrast pairs:** *fastest / cleverest*, *ability / habits*, *can / can't*. The contrasted words carry the stress, and the listener hears the argument in the rhythm.\n- **Given information is de-stressed:** in *the **more** you speak*, the word *speak* has just been used, so the stress moves to *more*.\n- **Compound nouns:** *a **head** start* is stressed on the first part, like most compound nouns (*a **bus** stop*, *a **phone** call*).\n- **Steady pace:** the stressed syllables come at fairly regular intervals, the unstressed words between them are reduced rather than rushed, and the long sentences keep the same calm pace as the short ones.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Which word carries the main stress?",
        instructions: "Read each mini-dialogue and decide which word in B's reply carries the main stress. The answer depends on what is new or contrasting, not on the recording.",
        questions: [
          {
            prompt: "A: “Did you say the meeting starts at ten?” B: “No, it finishes at ten.” Which word should B stress most?",
            options: ["it", "finishes", "at", "ten"],
            answer: 1,
            explanation: "*Ten* has already been said (given information). The new, contrasting idea is *finishes* (versus *starts*), so it carries the main stress.",
          },
          {
            prompt: "A: “Is your brother older than you?” B: “No, I'm older than him.” Which word should B stress most?",
            options: ["No", "I'm", "older", "him"],
            answer: 1,
            explanation: "*Older* is given. The contrast is about *who* is older, so the stress moves to *I'm*.",
          },
          {
            prompt: "A: “I hear you've stopped eating meat.” B: “I've stopped eating red meat. I still eat chicken.” Which word in “I've stopped eating red meat” should B stress most?",
            options: ["stopped", "eating", "red", "meat"],
            answer: 2,
            explanation: "*Meat* is given; B is correcting A by narrowing it down, so the contrasting word *red* carries the stress.",
          },
          {
            prompt: "A speaker wants to contradict the claim “Young people don't care about politics.” Which version uses stress correctly?",
            options: [
              "Young **people** care about politics.",
              "Young people **do** care about politics.",
              "**Young** people care about politics.",
              "Young people care about **politics**.",
            ],
            answer: 1,
            explanation: "An emphatic, stressed *do* contradicts the negative claim. Stressing *young* would contrast young people with older people instead.",
          },
        ],
      },
    },
    {
      type: "example",
      title: "Marked versions for the shadowing exercise",
      items: [
        "1. It's not the **price** | that puts people off, | it's the **hassle**.",
        "2. My **grandmother**, | who's nearly **ninety**, | still walks to the **market** | every **morning**.",
        "3. If the government had invested in the **railways** | twenty years **ago**, | we wouldn't be having this conversation **now**.",
        "4. People say teenagers don't **read**, | but they **do** read, | just not the way their **parents** did.",
        "5. The question isn't whether we can afford to **act**, | it's whether we can afford **not** to.",
        "6. What most people **underestimate**, | in my view, | is how **long** it takes | to build a **habit**.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "shadow",
        title: "Shadow long sentences in chunks",
        instructions:
          "Follow the marked versions above, not the computer voice: pause at each | and stress the **bold** word. Listen first, then record each sentence and check that you paused between chunks, not inside them.",
        voice: "uk",
        sentences: [
          "It's not the price that puts people off, it's the hassle.",
          "My grandmother, who's nearly ninety, still walks to the market every morning.",
          "If the government had invested in the railways twenty years ago, we wouldn't be having this conversation now.",
          "People say teenagers don't read, but they do read, just not the way their parents did.",
          "The question isn't whether we can afford to act, it's whether we can afford not to.",
          "What most people underestimate, in my view, is how long it takes to build a habit.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "TOEIC Read a text aloud",
        instructions:
          "You have 45 seconds to prepare and 45 seconds to read. In your preparation time, decide where the chunk boundaries are and which words carry new information: times, places and changes. Notice the contrast between *the information desk* and *the session rooms*.",
        prompt:
          "Read the text aloud.\n\nWelcome to the Harbourside Conference Centre. Before today's sessions begin, please note a few changes to the programme. The opening talk, originally scheduled for the main hall, will now take place in Room Four, on the second floor. Lunch will be served from twelve thirty until one thirty in the garden restaurant, weather permitting. If you've registered for an afternoon workshop, please collect your materials from the information desk, not from the session rooms. Finally, the closing reception has been moved forward by half an hour, to five o'clock.",
        prepSeconds: 45,
        speakSeconds: 45,
        modelAnswer:
          "Welcome to the Harbourside Conference Centre. Before today's sessions begin, please note a few changes to the programme. The opening talk, originally scheduled for the main hall, will now take place in Room Four, on the second floor. Lunch will be served from twelve thirty until one thirty in the garden restaurant, weather permitting. If you've registered for an afternoon workshop, please collect your materials from the information desk, not from the session rooms. Finally, the closing reception has been moved forward by half an hour, to five o'clock.",
        targetPhrases: ["originally scheduled for the main hall", "weather permitting", "not from the session rooms"],
        checklist: [
          "I paused at chunk boundaries (around “originally scheduled for the main hall”, before “weather permitting”), not in the middle of phrases.",
          "I stressed the new information in each chunk: places, times and changes.",
          "I gave contrastive stress to “information desk” and “session rooms”.",
          "I read the times clearly and didn't rush them.",
          "I finished the whole text within 45 seconds at a steady pace.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "IELTS Part 3: sustain rhythm across a long answer",
        instructions:
          "No preparation, as in Part 3. Focus on delivery: chunk after introductory phrases and long subjects, and stress the words you contrast. Aim for 45–60 seconds. Then listen to your recording only for chunking and stress.",
        prompt: "Topic: Technology. Do you think people rely too much on their phones for directions and information?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "To some extent, yes, although I don't think it's the phones themselves that are the problem. It's how we use them. Take directions. My parents' generation learnt the layout of a city by getting lost in it, whereas most people my age just follow the blue dot, and if the battery dies, we're stuck. So in that sense, we have lost a skill. But I'd argue we haven't lost the ability to remember things. We've just changed what we choose to remember. Nobody memorises phone numbers any more, but we probably remember other things instead. The real risk, I think, is that we stop questioning what the screen tells us. If an app says a restaurant is the best in town, people tend to believe it, and that's where a bit more independent thinking would help.",
        targetPhrases: ["to some extent", "in that sense", "I'd argue", "the real risk"],
        checklist: [
          "I paused after introductory phrases (To some extent, | Take directions, |) and after long subjects.",
          "I didn't break tight units such as phrasal verbs or adjective + noun.",
          "I stressed contrasted words (the phones themselves / how we use them; lost / changed).",
          "I de-stressed words I had already used.",
          "My pace stayed steady to the end of the answer, without rushing.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Pronunciation is judged across the whole test, and the band 8 descriptor refers to stress and intonation “across long utterances”. Record a full Part 2 answer and listen to it once *only* for chunking: are your pauses at the boundaries, or in the middle of phrases? Is the stress on the new information, or on every word?",
    },
    {
      exam: "toeic",
      body: "ETS lists pronunciation, and intonation and stress, as the criteria for **Read a text aloud** (45 seconds to prepare, 45 seconds to read). Use the preparation time to read the text silently and decide where the chunks are, especially around extra information between commas, and which words carry new information: names, numbers, times and changes.",
    },
    {
      exam: "toefl",
      body: "In **Listen and Repeat** you hear each sentence once, and the sentences get longer. Remembering a sentence as three or four chunks of meaning, rather than a string of separate words, makes it much easier to repeat it accurately and with the same rhythm.",
    },
  ],
  vocabulary: [
    { word: "chunk", meaning: "a group of words spoken together as one unit of meaning", example: "Say the long subject as one chunk, then pause.", topic: "education" },
    { word: "thought group", meaning: "another name for a chunk: words that express one idea and are spoken together", example: "Each thought group usually has one main stress.", topic: "education" },
    { word: "contrastive stress", meaning: "extra stress on a word to show it contrasts with another", example: "Contrastive stress on “red” shows you mean red meat, not all meat.", topic: "education" },
    { word: "aside", meaning: "an extra comment added in the middle of a sentence", example: "He paused slightly before and after the aside.", topic: "academic" },
    { word: "a head start", meaning: "an advantage that helps you be more successful than others", example: "Children who are read to at home have a head start at school.", topic: "education" },
    { word: "overtake", meaning: "to become more successful or advanced than someone who was ahead", example: "By the end of the year she had overtaken the rest of the class.", topic: "education" },
    { word: "weather permitting", meaning: "if the weather is good enough", example: "We'll have lunch outside, weather permitting.", topic: "everyday" },
    { word: "move forward", meaning: "to change an event to an earlier time", example: "The meeting has been moved forward to Tuesday.", topic: "business" },
    { word: "hassle", meaning: "something annoying that takes time or effort", example: "Renewing my passport was a real hassle.", topic: "everyday" },
    { word: "underestimate", meaning: "to think something is smaller, easier or less important than it really is", example: "People often underestimate how long a move will take.", topic: "everyday" },
  ],
  keyPoints: [
    "Speak in chunks of related words, each with one main stress, and pause at chunk boundaries, not inside them.",
    "Natural boundaries: after a long subject, around asides and non-defining clauses, after introductory phrases, between clauses and list items.",
    "Put the main stress on new or contrasting information and de-stress what has already been said.",
    "Stress an auxiliary (do, did, is, can) to contradict or confirm: they do read.",
    "Band 6 describes chunking that is generally appropriate; band 8 describes rhythm, stress and intonation sustained across long utterances. Practise with full answers, not just single sentences.",
  ],
};

export default lesson;
