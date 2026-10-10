import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-asking-clarifying",
  title: "Asking for help and clarifying",
  summary:
    "Ask someone to repeat, explain or slow down, and check that you have understood, politely and naturally, in the IELTS Speaking test and in everyday conversations.",
  skill: "speaking",
  level: "B1",
  order: 8,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Listening – Listen and Choose a Response" },
  ],
  objectives: [
    "Ask politely for repetition: Sorry, could you say that again?",
    "Ask what a word means, and check that you have understood",
    "Know what usually happens when you ask the IELTS examiner to repeat or rephrase a question",
    "Choose the best reply when you don't fully understand something",
  ],
  warmUp: [
    "What do you say in your own language when you don't hear what someone said?",
    "Has a misunderstanding ever caused a problem for you? What happened?",
  ],
  learn: [
    {
      type: "text",
      title: "Why this matters",
      body: "Not understanding something is normal, even for native speakers. What matters is what you do next. Saying nothing, or answering a different question, causes more problems than asking.\n\nIn IELTS Speaking you talk to a real examiner, so you can ask. Asking the examiner to repeat a question is allowed, and a single polite request is not marked down. A short, polite request also shows that you can manage a conversation in English.\n\nIn TOEFL and TOEIC Speaking you answer a recording, so you can't ask. But the same phrases appear in listening tasks, and you will need them every day outside the exam.",
    },
    {
      type: "table",
      title: "What to say",
      headers: ["You want to…", "Say", "Avoid"],
      rows: [
        ["hear it again", "Sorry, could you repeat the question, please? / Sorry, I didn't catch that. / Could you say that again, please?", "What? / Again! / Repeat."],
        ["know what a word means", "Sorry, what does “commute” mean? / What do you mean by “commute”?", "I don't know this word. (and then stop)"],
        ["check you understood", "Do you mean…? / So you're asking about…, is that right? / Sorry, did you say fifteen or fifty?", "Guessing and hoping you are right"],
        ["ask someone to slow down or spell", "Could you speak a bit more slowly, please? / Could you spell that, please?", "Slowly! / Too fast."],
        ["show you understand now", "Oh, I see. / Right, that makes sense. / OK, got it, thanks.", "Silence"],
      ],
    },
    {
      type: "text",
      title: "What the IELTS examiner can and can't do",
      body: "- **Part 1**: the examiner can repeat a question, but normally uses the same words and does not explain it in other words. If you still aren't sure, say what you think it means and answer: *If you mean my journey to work, it takes about twenty minutes.*\n- **Part 3**: the examiner can rephrase a question, that is, say it again in different words. Here you can ask *Sorry, what do you mean by…?*\n- In every part, keep the request short and polite, then give a full answer. Asking once is fine; asking on every question doesn't sound natural.",
    },
    {
      type: "text",
      title: "Sound polite: your voice matters",
      body: "A flat *Repeat* sounds rude, even with *please*. Start with *Sorry* and let your voice go up and down naturally:\n\n- *Could you say that again, please?* ↗ (a yes/no question usually rises)\n- *Did you say fifteen* ↗ *or fifty?* ↘ (rise on the first choice, fall on the last)\n- *Fifteen?* ↗ (one word with a rising voice is a quick, friendly check)",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check",
        questions: [
          {
            prompt: "You didn't hear the examiner's question. What is the best thing to say?",
            options: ["What?", "Sorry, could you repeat the question, please?", "I don't understand English questions."],
            answer: 1,
            explanation: "It is short and polite. “What?” sounds rude, and the third option gives no way forward.",
          },
          {
            prompt: "IELTS Part 1. You hear the question again, but you still aren't sure what “commute” means. What is the best thing to do?",
            options: [
              "Ask the examiner to explain the word in other words.",
              "Say nothing and wait for the next question.",
              "Say what you think it means and answer: “If you mean my journey to work, it takes about twenty minutes.”",
            ],
            answer: 2,
            explanation: "In Part 1 the examiner normally just repeats the question and does not explain it. Showing what you think it means and answering is the best way to keep going.",
          },
          {
            prompt: "Which question checks a number?",
            options: ["Sorry, did you say thirteen or thirty?", "Sorry, what does thirteen mean?", "Could you spell thirteen, please?"],
            answer: 0,
            explanation: "Numbers like thirteen and thirty sound similar, so a choice question (A or B?) is the best way to check.",
          },
          {
            prompt: "IELTS Part 3. You don't fully understand a question. What can you do?",
            options: [
              "Ask what the examiner means. In Part 3, they can say the question in different words.",
              "Answer a different question that you prepared before the test.",
              "Ask the examiner to answer the question first.",
            ],
            answer: 0,
            explanation: "In Part 3 the examiner can rephrase questions, so asking “Sorry, what do you mean by…?” is fine.",
          },
          {
            prompt: "Which request sounds the most polite?",
            options: ["Speak slowly.", "Could you speak a bit more slowly, please?", "You talk too fast."],
            answer: 1,
            explanation: "A question with could, a bit and please sounds polite. The other two sound like orders or complaints.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      voice: "uk",
      cast: { Examiner: "male", Candidate: "female" },
      title: "Model: asking politely in IELTS Parts 1 and 3",
      transcript:
        "Examiner: Let's talk about travel. How do you usually commute to work or college?\nCandidate: Sorry, could you repeat the question, please?\nExaminer: How do you usually commute to work or college?\nCandidate: Ah, so how I travel to college? I usually take the metro. It's only four stops, so it takes about fifteen minutes, and I can read on the way.\nExaminer: Now let's talk about transport in cities. Do you think governments should invest more in public transport?\nCandidate: Sorry, what do you mean by invest here? Do you mean spend more money?\nExaminer: Yes. Should governments spend more money on buses and trains, for example?\nCandidate: Oh, I see. Yes, I think they should, because good public transport helps everyone. For example, in my city a new tram line opened last year, and now the roads are much less busy. So I think it's money well spent.",
    },
    {
      type: "text",
      title: "How a strong candidate does it",
      body: "- **Part 1**: the candidate didn't hear the question clearly, so she asks once, politely: *Sorry, could you repeat the question, please?*\n- The examiner repeats **the same words**. She isn't 100% sure about *commute*, so she **checks in her own words** (*Ah, so how I travel to college?*) and then answers. This keeps the conversation moving.\n- **Part 3**: she asks about one word, *invest*, and gives her own guess: *Do you mean spend more money?* The examiner rephrases the question.\n- After *Oh, I see*, she gives a full answer with an opinion, a reason and an example. The request takes a few seconds; the answer is the important part.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "respond",
        title: "Choose the best reply",
        instructions: "Listen to each sentence. You can't see it, as in TOEFL Listen and Choose a Response. Choose the best reply. Sometimes the best reply is a question that checks or clarifies.",
        items: [
          {
            audio: "Just so you know, the meeting has moved to room three-twelve.",
            options: [
              "Sorry, could you spell that, please?",
              "Yes, I moved there last year.",
              "Sorry, did you say three-twelve or three-twenty?",
              "Sorry, what does “meeting” mean?",
            ],
            answer: 2,
            explanation: "Room numbers are easy to mishear, so checking with a choice question is the most useful reply.",
          },
          {
            audio: "Could you send me the report by close of business on Friday?",
            options: [
              "Yes, the business closes at six.",
              "Sorry, do you mean by the end of the working day on Friday?",
              "Could you spell “report”, please?",
              "No, I sent it to the business last week.",
            ],
            answer: 1,
            explanation: "“Close of business” is an unusual phrase, so checking its meaning is the best reply. The other options repeat words (business) but don't answer the request.",
          },
          {
            audio: "The printers on this floor take cards only now.",
            options: [
              "So I can't pay with coins any more, is that right?",
              "Sorry, which floor is the café on?",
              "Yes, I printed a card for her birthday.",
              "Only on this floor, thanks.",
            ],
            answer: 0,
            explanation: "The reply checks the meaning of “cards only” in the speaker's situation: no coins.",
          },
          {
            audio: "When you arrive, please ask for Mr Ferreira-Lund at reception.",
            options: [
              "Did you say Monday or Tuesday?",
              "Yes, I arrived at reception.",
              "Sorry, what does “arrive” mean?",
              "Sorry, could you spell his name for me, please?",
            ],
            answer: 3,
            explanation: "The name is long and unusual, so asking for the spelling is the most useful reply. No day was mentioned.",
          },
          {
            audio: "Are you coming to the thing on Saturday?",
            options: [
              "Yes, I came on Saturday.",
              "Sorry, which thing do you mean? Jo's party?",
              "Could you spell “Saturday”, please?",
              "No, I don't have that thing.",
            ],
            answer: 1,
            explanation: "“The thing” is not clear, so the best reply asks which event the speaker means and offers a guess.",
          },
          {
            audio: "OK, so go left at the lights, past the bank, take the second right, and it's the third door after the bakery.",
            options: [
              "Yes, the bakery sells great bread.",
              "I'm sorry, I don't have a car.",
              "Sorry, could you say that again a bit more slowly?",
              "Sorry, could you spell “bank”, please?",
            ],
            answer: 2,
            explanation: "The directions are long and have many steps, so asking the speaker to repeat them more slowly is the best reply.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Match the situation to the phrase",
        instructions: "Choose the best phrase for each situation. There is one extra phrase that you do not need.",
        left: [
          "A door banged and you didn't hear the question.",
          "You don't know one word in the question.",
          "You aren't sure if you heard fifteen or fifty.",
          "The speaker is talking too fast, and you want them to change their speed.",
          "You need to write down a street name.",
          "You think you understand the directions, but you want to check.",
        ],
        right: [
          "Could you spell that for me, please?",
          "Repeat. I don't understand.",
          "Sorry, I didn't catch that. Could you say it again?",
          "So you mean the building opposite the station, is that right?",
          "Sorry, was that fifteen or fifty?",
          "Could you speak a bit more slowly, please?",
          "Sorry, what does “renovate” mean?",
        ],
        answer: [2, 6, 4, 5, 0, 3],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "shadow",
        voice: "uk",
        title: "Listen and repeat: polite requests",
        instructions: "Listen and repeat. Start softly with Sorry, and copy the rising and falling voice so you sound friendly, not rude.",
        sentences: [
          "Sorry, could you repeat the question, please?",
          "Sorry, I didn't catch that.",
          "What do you mean by flexible hours?",
          "Sorry, did you say fifteen or fifty?",
          "So you mean the train, not the bus?",
          "Could you speak a bit more slowly, please?",
          "Oh, I see. Thanks, that makes sense now.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "IELTS Speaking Part 3: check, then answer",
        instructions: "Read the short exchange. The examiner has just explained the question. Start with a short check (Oh, I see. So…), then give your opinion, a reason and an example. You have 45 seconds.",
        prompt: "**Examiner:** Do you think people in your country have a good work-life balance?\n\n**You:** Sorry, what do you mean by work-life balance?\n\n**Examiner:** I mean having enough time for both your job and your private life: your family, your friends and your free time.\n\nNow answer the question.",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "Oh, I see, thank you. So, enough time for work and for family. Well, I don't think most people in my country have a good balance at the moment. The main reason is that many people work very long hours, and they also spend a lot of time travelling to work. For example, my father leaves home at seven and gets back at about eight in the evening, so he only really sees us at weekends. But I think it's slowly getting better, because more companies now let people work from home one or two days a week.",
        targetPhrases: ["Oh, I see", "So,", "I don't think", "The main reason is that", "For example", "But I think"],
        checklist: [
          "I started with a short, natural check (Oh, I see. So…).",
          "The check was short; most of my time was the answer.",
          "I gave my opinion, a reason and an example.",
          "My voice sounded polite and friendly, not flat.",
          "I spoke for about 45 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Asking the examiner to repeat a question is allowed, and asking once is not a problem. In Part 1 the examiner normally just repeats the question in the same words; in Part 3 the examiner can say it in different words. Ask once, politely, and then give a full answer.",
    },
    {
      exam: "ielts",
      body: "If you realise in the middle of an answer that you may have misunderstood the question, it's fine to stop and check: *Sorry, did you mean…?* That is much better than finishing a long answer to the wrong question.",
    },
    {
      exam: "toefl",
      body: "In Listen and Choose a Response, the sentence is not shown on screen, so listen for the speaker's purpose, not just repeated words. A reply that asks for clarification can be the right answer if it fits the situation, so don't reject an option just because it is a question.",
    },
  ],
  vocabulary: [
    { word: "catch", meaning: "to hear or understand something (often in the negative: I didn't catch that)", example: "Sorry, I didn't catch your name.", topic: "everyday" },
    { word: "repeat", meaning: "to say something again", example: "Could you repeat the last part, please?", topic: "everyday" },
    { word: "rephrase", meaning: "to say something again in different words", example: "In Part 3 the examiner can rephrase the question.", topic: "education" },
    { word: "clarify", meaning: "to make something clearer or easier to understand", example: "Could you clarify what you mean by “soon”?", topic: "work" },
    { word: "misunderstand", meaning: "to understand something in the wrong way", example: "I misunderstood the question and talked about the wrong thing.", topic: "everyday" },
    { word: "make sense", meaning: "to be clear and easy to understand", example: "Oh, I see. That makes sense now.", topic: "everyday" },
    { word: "spell", meaning: "to say or write the letters of a word in the right order", example: "Could you spell your surname, please?", topic: "everyday" },
    { word: "I see", meaning: "said to show that you understand now", example: "Oh, I see. So the class starts at nine, not ten.", topic: "everyday" },
    { word: "polite", meaning: "showing good manners and respect for other people", example: "It's polite to say “sorry” before you ask someone to repeat something.", topic: "society" },
    { word: "invest", meaning: "to spend money on something to make it better or to get more back later", example: "The city plans to invest in new bike lanes.", topic: "business" },
    { word: "work-life balance", meaning: "having enough time for both your job and your private life", example: "A shorter working week could improve work-life balance.", topic: "work" },
  ],
  keyPoints: [
    "Asking for help is normal; answering the wrong question is worse than asking.",
    "To hear it again: Sorry, could you repeat that? For meaning: What do you mean by…? To check: Do you mean…? / Did you say A or B?",
    "In IELTS Part 1 the examiner normally just repeats the question; in Part 3 the examiner can rephrase it.",
    "Start with Sorry and use a friendly rising voice so you sound polite.",
    "Keep the request short, then give a full answer.",
  ],
};

export default lesson;
