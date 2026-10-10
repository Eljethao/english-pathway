import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-recovering-under-pressure",
  title: "Buying time and recovering",
  summary:
    "Think aloud about content instead of filling silence, upgrade or restart a sentence that is going wrong, correct slips without breaking your flow, and get back on track when you lose the thread: the kind of hesitation and self-correction the IELTS descriptors accept at bands 7 and 8.",
  skill: "speaking",
  level: "C1",
  order: 11,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 2" },
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
  ],
  objectives: [
    "Understand what the public IELTS descriptors say about hesitation, self-correction and reformulation",
    "Buy time by thinking aloud about the content of the question, not by searching for words in silence",
    "Reformulate, correct and restart briefly, without apologising or losing coherence",
    "Recover from losing your thread or running out of ideas in a long turn",
  ],
  warmUp: [
    "Think about the last time you got stuck while speaking English. What exactly happened, and what did you do next?",
  ],
  learn: [
    {
      type: "text",
      title: "What the descriptors actually say",
      body: "Many candidates believe that any pause or correction costs marks. The public IELTS descriptors for **Fluency and Coherence** say something more precise:\n\n- **Band 7:** “Some hesitation, repetition and/or self-correction may occur, often mid-sentence and indicate problems with accessing appropriate language. However, these will not affect coherence.”\n- **Band 8:** “Hesitation may occasionally be used to find words or grammar, but most will be content related.”\n- **Band 9:** “Any hesitation that occurs is used only to prepare the content of the next utterance and not to find words or grammar.”\n\nSo even at band 9, people hesitate. The difference is **why**: strong speakers pause to decide *what* to say, not *how* to say it. And at band 7, self-correction is acceptable as long as the listener can still follow.\n\nCompare the **Grammatical Range and Accuracy** descriptor at band 5: complex structures “nearly always contain errors and may lead to the need for reformulation”. Constant restarting is a sign of a lower band; a rare, quick and smooth repair is not. In *Fluency: fillers and discourse markers* you learned short thinking phrases, and in *When you don't know the word* you learned to paraphrase. This lesson is about recovering at C1 level, when the pressure is high and the answer is long.",
    },
    {
      type: "table",
      title: "Six recovery moves",
      headers: ["Situation", "What to do", "Useful language"],
      rows: [
        ["You need a few seconds to think", "Think aloud about the content: narrow the question or name the angle you'll take", "That's a tricky one, because… / It depends what you mean by… / There are a couple of ways of looking at this. / Off the top of my head, I'd say…"],
        ["The word you chose isn't quite right", "Upgrade it straight away", "…, or rather, … / well, not X exactly, more Y / …, or more precisely, …"],
        ["Your sentence is going wrong", "Abandon it and restart cleanly", "Let me put that another way. / What I'm trying to say is… / To put it more simply, …"],
        ["You make a slip that matters", "Correct it quickly, with no apology", "He go… he went… / in 2019, sorry, 2018 / prices rise, not raise"],
        ["You lose your thread", "Find your place and link back to the question", "Where was I? Oh yes… / Anyway, to come back to your question… / What I was getting at is…"],
        ["You change your mind", "Qualify your position openly", "Actually, on second thoughts… / Thinking about it, I'd qualify that slightly."],
      ],
    },
    {
      type: "text",
      title: "Rules that keep recovery natural",
      body: "- **A time-buyer must lead somewhere.** *That's a tricky one, because it depends on the kind of decision* buys two seconds and starts your answer. *That's a very interesting question, let me think, hmm* buys the same time and says nothing.\n- **One per answer.** A long memorised opener at the start of every answer sounds rehearsed. Vary them, and keep them short.\n- **Correct only what matters.** Fix slips that change the meaning (a wrong date, *rise/raise*) or that are very noticeable (*he go*). Let tiny slips go: stopping for every article interrupts your fluency more than the slip itself.\n- **No apologies, no comments on your English.** *Sorry, my English is bad* draws attention to the problem and wastes time. A quick *sorry* before a correction is fine; a speech about it is not.\n- **Stress the correction, keep your voice up.** In “it was in May, sorry, in **June**”, the corrected word carries the stress. Don't drop your voice or volume, or you'll sound as if you are giving up.\n- **Going blank in Part 2?** Look at the cue card again. Add a new angle: when, where, who else was there, how you felt, what you'd do differently. *To cut a long story short…* and *Looking back…* are natural ways to move on.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "What is the speaker doing?",
        instructions: "Match each phrase to what the speaker is doing. There is one extra description you don't need.",
        left: [
          "It depends what you mean by “success”.",
          "…a cheap, or rather, an affordable flat…",
          "Where was I? Oh yes, the second reason…",
          "Actually, on second thoughts, I'd say it's more about habit.",
          "Let me put that another way.",
          "I've never really thought about it in those terms, but…",
        ],
        right: [
          "starting to answer while admitting the angle is new to them",
          "replacing a word with a more precise one",
          "restarting a sentence that has become confusing",
          "asking the examiner to repeat the question",
          "narrowing the question before answering it",
          "changing their position after reflecting",
          "finding their place after losing the thread",
        ],
        answer: [4, 1, 6, 5, 2, 0],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answer: Part 3 on the topic of “Skills and success”",
      voice: "uk",
      cast: { Examiner: "female", Candidate: "male" },
      transcript:
        "Examiner: Is it more important for young people to be good at many things or to be excellent at one thing?\nCandidate: Hmm, that's a tricky one, because I think the answer changes with age. For a teenager, I'd say breadth matters more. You don't know yet what you're good at, so trying lots of things, or rather, being allowed to try lots of things without too much pressure, is how you find out. Later on, it shifts. Employers tend to pay for depth. The people who get, sorry, who tend to get the most interesting jobs usually know one field inside out. Having said that, some of the most successful people I know combine the two. My cousin, for example, is a doctor who also writes code, and she says it was that unusual combination, more than her medical training, that got her onto a research team. Anyway, to come back to your question, I'd say be broad first and specialise later, but never completely stop being curious about other things.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "- **Content-related hesitation:** *Hmm, that's a tricky one, because I think the answer changes with age.* The pause is about *what* to say, and the reason that follows is already the structure of the answer.\n- **Upgrading a word:** *trying lots of things, or rather, being allowed to try lots of things*. The second version is more precise, and the listener hears the speaker thinking carefully, not struggling.\n- **A quick repair:** *The people who get, sorry, who tend to get…*. The speaker notices an over-general claim and hedges it (*tend to*) straight away, then carries on.\n- **An example that runs a little long:** the cousin anecdote takes the answer away from the question, so the speaker uses *Anyway, to come back to your question* to land the conclusion.\n- **No apologies, no silence:** every recovery is under two seconds, and none of them affects coherence. That is the line the band 7 descriptor draws: self-correction may occur, but it does not affect coherence.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Choose the best recovery",
        instructions: "Each situation happens in the middle of a speaking test. Choose the most effective response.",
        questions: [
          {
            prompt: "Part 3. The examiner asks, “Should museums be free for everyone?” You have no opinion ready. How should you start?",
            options: [
              "“Um… um… museums… um…”",
              "“I don't really know anything about museums, sorry.”",
              "“That's a tricky one. I suppose it depends on who ends up paying for them, because…”",
              "“That's a very interesting question. That's a really interesting question.”",
            ],
            answer: 2,
            explanation: "This opener buys time by thinking aloud about the content, and the “because” turns it into the start of a real answer.",
          },
          {
            prompt: "Halfway through a sentence you say, “Last year my brother has went to…”. What is the best thing to do?",
            options: [
              "Stop, apologise for your grammar and start the whole answer again.",
              "Correct it quickly, “…my brother went to…”, and carry on.",
              "Ignore it and add more past participles to show range.",
            ],
            answer: 1,
            explanation: "A quick self-correction of a noticeable slip, with no apology, shows control. Restarting the whole answer costs fluency.",
          },
          {
            prompt: "Part 2. After 70 seconds you've covered every point on the cue card and your mind goes blank. What should you do?",
            options: [
              "Say “That's all” and wait for the examiner.",
              "Repeat your first point in the same words.",
              "Look at the card again and add a new angle, for example: “Looking back, what I'd do differently is…”.",
            ],
            answer: 2,
            explanation: "The examiner expects you to speak for up to two minutes. Reflecting, adding feelings or saying what you'd change gives you new, relevant content.",
          },
          {
            prompt: "Part 3. Your sentence has collapsed: “The thing that people who live in cities, what they, the most…”. What is the best recovery?",
            options: [
              "“Let me put that another way: what city dwellers need most is…”",
              "Keep adding words until the sentence finishes somehow.",
              "Stop talking and wait for the next question.",
            ],
            answer: 0,
            explanation: "Abandoning the broken sentence and restarting with a simpler structure keeps the answer coherent.",
          },
          {
            prompt: "TOEFL Take an Interview. Ten seconds into your answer, you realise your opening sentence was unclear. What is the best response?",
            options: [
              "Ask the interviewer to repeat the question.",
              "Say “What I mean is…”, restate your point in one clear sentence, then add your reason and example.",
              "Spend the rest of the time explaining why your first sentence was unclear.",
            ],
            answer: 1,
            explanation: "The interviewer is a recording, so you can't ask or restart. A one-sentence reformulation fixes the problem and leaves time for support.",
          },
          {
            prompt: "Which statement matches the public IELTS Fluency and Coherence descriptors?",
            options: [
              "Any self-correction means a score below band 7.",
              "At band 9, candidates never hesitate.",
              "At band 7, some hesitation, repetition or self-correction may occur, but it does not affect coherence.",
            ],
            answer: 2,
            explanation: "Band 7 allows some hesitation and self-correction. Even band 9 includes hesitation, but only to prepare content.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "shadow",
        voice: "uk",
        title: "Shadow smooth recoveries",
        instructions:
          "Listen and repeat. Keep the recovery phrase quick and light, then stress the corrected or new information. Your voice should stay up and confident through each repair.",
        sentences: [
          "That's a tricky one, because it depends what we mean by success.",
          "It was in the spring of twenty nineteen, sorry, twenty eighteen.",
          "Most people who move to the city, or rather, most young people, end up renting.",
          "Let me put that another way: the problem isn't the cost, it's the time.",
          "Where was I? Oh yes, the second reason is trust.",
          "Actually, on second thoughts, I'd say it's more about habit than money.",
          "Anyway, to come back to your question, I think schools could do much more.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Part 2: keep going under pressure",
        instructions:
          "You have one minute to prepare and up to two minutes to speak. In your notes, add one extra idea at the bottom for when you run out: a reflection or what you'd do differently. If you make a slip, correct it quickly and keep going.",
        prompt: "Describe a time when you had much less time than you expected to finish an important task.",
        cueCard: [
          "what the task was",
          "why you had less time than expected",
          "how you managed to finish it",
          "and explain how you felt about it afterwards",
        ],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "I'd like to talk about the time I had to pack up my entire flat in less than a day, which was, well, a lesson in organisation, or rather, in what happens when you haven't got any.\n\nIt was a couple of years ago, when I was renting a small flat near the university. My contract was due to end on a Sunday, and I'd arranged to hand the keys back that evening. But on the Friday night, the landlord rang to ask whether I could be out by six o'clock on Saturday, because the new tenants had a baby and had nowhere else to stay. I could have argued, I suppose, but it didn't seem fair, so I agreed.\n\nSo how did I manage? The honest answer is: with a lot of help. I rang two friends, who came round first thing on Saturday, and we divided the job up. One of them packed the kitchen, the other did the books, and I dealt with, sorry, I tried to deal with the clothes and the paperwork, which took far longer than I'd expected. My brother turned up at lunchtime with his van, and we did three trips to my parents' house. To cut a long story short, by quarter to six the flat was empty and reasonably clean, and I handed the keys over with fifteen minutes to spare.\n\nLooking back, I felt exhausted but quite proud, and hugely grateful to my friends. What I learned, I think, is that being in a hurry wasn't really the problem. The problem was trying to do everything myself.",
        targetPhrases: ["or rather", "I could have argued, I suppose", "sorry, I tried to", "to cut a long story short", "looking back", "what I learned, I think, is"],
        checklist: [
          "I covered all four points on the cue card.",
          "I spoke for close to two minutes and used my extra idea when I needed it.",
          "Any corrections I made were quick, with no apology and no restart.",
          "I used past tenses accurately, including the past perfect and could have.",
          "When I paused, it was to decide what to say next, not to search for basic words.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "IELTS Part 3: think aloud, then qualify",
        instructions:
          "No preparation, as in Part 3. Start with a content-related time-buyer that leads straight into your answer. Use at least one reformulation (or rather, let me put that another way) and, if it fits, qualify your view near the end. Aim for 45–60 seconds.",
        prompt: "Topic: Pressure. Do you think people generally make better or worse decisions when they are under pressure?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "That's a tricky one, because I think it depends on the kind of decision. For simple, practical things, pressure can actually help. It forces you to focus, and you don't waste time going round in circles. Firefighters, or, well, not just firefighters, people who work in emergencies generally, are trained to act fast, and they're usually right. But for complex decisions, like whether to accept a job or buy a flat, I'd say pressure makes people worse. They tend to grab, or rather, settle for the first option that seems acceptable instead of comparing the alternatives. Actually, thinking about it, I'd qualify that slightly. Even with big decisions, a deadline can be useful if it's realistic, because otherwise some people never decide at all. So the problem isn't pressure itself. It's pressure without enough time to think properly.",
        targetPhrases: ["that's a tricky one, because", "or, well, not just", "or rather", "actually, thinking about it", "I'd qualify that slightly"],
        checklist: [
          "My opening phrase led straight into the content of my answer.",
          "I used at least one reformulation, and it made my point more precise.",
          "I qualified or adjusted my view openly instead of contradicting myself.",
          "No recovery took longer than about two seconds.",
          "My answer still had a clear conclusion.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "speak",
        title: "TOEFL Take an Interview: recover without restarting",
        instructions:
          "No preparation, as in the TOEFL interview. Start straight away. If a word or sentence goes wrong, use one quick repair (or rather, What I mean is…) and keep going: you can't ask the interviewer for help or start again. Stop at 45 seconds.",
        prompt:
          "Interviewer: Tell me about a time when you had to answer a difficult question without any time to prepare, for example in a class, a meeting or an interview. How did you handle it?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "That happened in a job interview last year. They asked me about managing a budget, which I'd never actually done. At first I panicked, or rather, I froze for a second, and then I started a long, confused answer about my studies. So I stopped and said, “What I mean is, I haven't managed a budget myself, but I've tracked my team's spending every month.” That short, honest answer went down much better. What I learned is that under pressure, it's better to give a clear answer first and add an example than to try to sound impressive.",
        targetPhrases: ["or rather", "what I mean is", "what I learned is"],
        checklist: [
          "I started answering straight away, with no long introduction.",
          "I used at least one quick repair (or rather…, What I mean is…) without apologising.",
          "I explained what I did and what I learned, not just what happened.",
          "I finished within 45 seconds and never restarted the whole answer.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "The band 8 Fluency and Coherence descriptor says that most hesitation “will be content related”. Practise turning thinking time into content: *It depends on…*, *There are a couple of ways of looking at this…*. A pause before a well-chosen idea sounds very different from a pause in the middle of a phrase.",
    },
    {
      exam: "ielts",
      body: "In Part 2 you speak for up to two minutes, and the examiner will stop you when the time is up. Write one spare idea at the bottom of your notes (a reflection, or what you'd do differently). If you go blank, look down and use it instead of stopping early.",
    },
    {
      exam: "toefl",
      body: "In **Take an Interview** there is no preparation time and the interviewer is a recording, so you can't ask for help or start again. If an answer goes wrong, use one short reformulation (*What I mean is…*) and move on to your reason and example. Every second spent apologising is a second without content.",
    },
  ],
  vocabulary: [
    { word: "buy time", meaning: "to delay a little in order to think or prepare", example: "She repeated the question to buy time.", topic: "everyday" },
    { word: "think aloud", meaning: "to say your thoughts as you have them", example: "It's fine to think aloud in Part 3 if you are discussing the content.", topic: "education" },
    { word: "reformulate", meaning: "to say something again in a different, clearer way", example: "He reformulated his question so the class could follow.", topic: "academic" },
    { word: "self-correction", meaning: "noticing and correcting your own mistake", example: "A quick self-correction shows good control.", topic: "education" },
    { word: "lose your thread", meaning: "to forget what you were saying in the middle of saying it", example: "I lost my thread halfway through the story.", topic: "everyday" },
    { word: "go blank", meaning: "to suddenly be unable to remember or think of anything", example: "My mind went blank when the interviewer asked about my weaknesses.", topic: "everyday" },
    { word: "on second thoughts", meaning: "used when you change your opinion after thinking again", example: "On second thoughts, let's take the train.", topic: "everyday" },
    { word: "to cut a long story short", meaning: "used to move quickly to the end of a story", example: "To cut a long story short, we missed the flight.", topic: "everyday" },
    { word: "settle for", meaning: "to accept something that is less than you wanted", example: "We had to settle for a smaller flat.", topic: "everyday" },
    { word: "go round in circles", meaning: "to keep discussing something without making progress", example: "The meeting went round in circles for an hour.", topic: "work" },
    { word: "know something inside out", meaning: "to know something extremely well", example: "She knows the tax system inside out.", topic: "work" },
    { word: "qualify (a statement)", meaning: "to add something that makes a statement less general", example: "I'd like to qualify what I said earlier.", topic: "academic" },
  ],
  keyPoints: [
    "The IELTS descriptors accept hesitation and self-correction at band 7 as long as coherence is not affected; at bands 8 and 9, hesitation is mainly or only about content.",
    "Buy time by thinking aloud about the content (It depends what you mean by…), and make the time-buyer lead straight into your answer.",
    "Upgrade a word (or rather), restart a broken sentence (Let me put that another way) and correct only slips that matter, quickly and without apology.",
    "When you lose the thread, find your place and link back to the question; when you change your mind, qualify your view openly.",
    "In Part 2, keep a spare idea in your notes; in TOEFL, you can't restart, so reformulate once and move on.",
  ],
};

export default lesson;
