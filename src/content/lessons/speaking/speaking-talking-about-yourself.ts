import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-talking-about-yourself",
  title: "Talking about yourself",
  summary:
    "Answer personal questions about your home, work, studies and free time with full, natural answers for IELTS Speaking Part 1 and the TOEFL interview.",
  skill: "speaking",
  level: "B1",
  order: 2,
  minutes: 15,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
    { exam: "toeic", task: "Speaking – Respond to questions" },
  ],
  objectives: [
    "Extend short answers with a reason and an example",
    "Use the right tense to talk about habits, experiences and the past",
    "Answer personal questions for 20–45 seconds without long pauses",
  ],
  warmUp: [
    "How would you describe yourself in three words?",
    "What do you usually do on a Saturday morning?",
  ],
  learn: [
    {
      type: "text",
      title: "What the examiner wants",
      body: "In IELTS Speaking Part 1, the examiner asks short questions about familiar topics: your home, your work or studies, your free time, food, the weather and so on. In the TOEFL interview, a recorded interviewer asks you questions and you have about 45 seconds for each answer, with no preparation time.\n\nIn both tests, a one-word or one-sentence answer is too short. But a long, memorised speech is also a problem: examiners notice it, and it often doesn't answer the question. Aim for a **natural, complete answer**: about 20–30 seconds in IELTS Part 1 and up to 45 seconds in the TOEFL interview.",
    },
    {
      type: "text",
      title: "The A-R-E method",
      body: "Build each answer in three steps:\n\n1. **Answer** the question directly. *Yes, I do.* / *I'm a student.*\n2. **Reason**: say why. *…because it helps me relax.*\n3. **Example or Extra detail**: give a real example, compare past and present, or add a feeling. *For example, last weekend I…*\n\nFor longer TOEFL answers, you can add a fourth step: a short concluding sentence that returns to the question.",
    },
    {
      type: "example",
      title: "A weak answer and a strong answer",
      items: [
        "Q: Do you like cooking?",
        "Weak: Yes, I like it.",
        "Strong: **Yes, I do**, especially on weekends. **It's relaxing** after a busy week, **and** I like trying new recipes. **For example**, last Sunday I made a Thai curry for the first time, and it was actually pretty good!",
      ],
    },
    {
      type: "table",
      title: "Useful language for personal answers",
      headers: ["Purpose", "Phrases"],
      rows: [
        ["Habits (present simple)", "I usually… / I tend to… / Most evenings I…"],
        ["Experience up to now (present perfect)", "I've lived here for ten years. / I've never been to…"],
        ["Past habits (used to)", "When I was younger, I used to… but now I…"],
        ["Preferences", "I'm really into… / I'm not a big fan of… / I'd rather… than…"],
        ["Being honest", "To be honest,… / Actually,… / I have to say…"],
        ["Future plans and wishes", "I'm planning to… / I'd love to… one day"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "order",
        mode: "lines",
        title: "Quick check: build an A-R-E answer",
        instructions: "Question: “What do you like doing in your free time?” Put the answer in a natural order.",
        items: [
          "Mostly, I like going swimming.",
          "The main reason is that it helps me forget about work, and it keeps me fit.",
          "For example, last Friday I had a really stressful day, but after an hour in the pool I felt completely calm.",
          "So swimming is definitely my favourite way to relax.",
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: IELTS Speaking Part 1",
      transcript:
        "Examiner: Let's talk about where you live. Do you live in a house or an apartment?\nCandidate: I live in an apartment, on the sixth floor of quite a new building. It's not very big, but it's bright and it has a small balcony, so I can sit outside in the evenings. I share it with my older sister, and we get on really well, so it feels like home.\nExaminer: Do you work or are you a student?\nCandidate: I'm a student at the moment. I'm in my second year of a nursing degree. It's hard work, to be honest, because we have lectures in the morning and hospital placements in the afternoon. But I've always wanted to help people, so I really enjoy it.\nExaminer: What did you like doing in your free time when you were a child?\nCandidate: I used to spend hours drawing. My grandmother gave me a big box of coloured pencils, and I drew everything: animals, houses, my friends. I don't draw much now because I'm so busy with my studies, but I'd love to start again one day.",
      cast: { Examiner: "female", Candidate: "male" },
    },
    {
      type: "text",
      title: "How a strong candidate does it",
      body: "- Each answer starts with a **direct answer** (*I live in an apartment*, *I'm a student*), so the examiner knows the question has been answered.\n- Then the candidate adds a **reason or detail** (*it's bright and it has a small balcony*; *I've always wanted to help people*).\n- The candidate uses the **right tense** for each question: present simple for now, present perfect for *I've always wanted*, *used to* for childhood habits.\n- Every answer is about 20 seconds. That's the right length for Part 1: long enough to show your English, short enough to sound natural.\n- The candidate uses natural phrases like *to be honest* and *I'd love to… one day*, not memorised sentences.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Match the question to the best answer",
        instructions: "Match each question to the answer that fits it best. There is one extra answer that you do not need.",
        left: [
          "Do you work or are you a student?",
          "What's your hometown like?",
          "Do you like cooking?",
          "Have you ever lived in another country?",
          "What did you do last weekend?",
        ],
        right: [
          "It's a fairly small town by a river. It's quiet, but there's a lovely market every Sunday.",
          "I visited my cousins in the countryside. We went for a long walk and had a barbecue.",
          "I'm going to stay at home and watch a few films, I think.",
          "I work, actually. I'm a sales assistant in a sports shop, so I'm on my feet all day.",
          "Not really, to be honest. I'm not very patient, so I usually make something quick, like pasta.",
          "No, I haven't, but I'd love to spend a year in Canada and improve my English.",
        ],
        answer: [3, 0, 4, 5, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Complete the answers",
        instructions: "Complete each sentence with a word or phrase from the box. Use each one once.",
        text: "1. I {{0}} in this city since 2015, so it really feels like home.\n2. When I was a child, I {{1}} play football every weekend, but now I don't have time.\n3. On weekdays I {{2}} get up at seven and take the bus to work.\n4. I enjoy cooking, {{3}} Italian food, because it's quick and simple.\n5. I've never been to Japan, but I {{4}} go there one day.\n6. {{5}}, I'm not a big fan of social media.\n7. I prefer studying in the morning {{6}} my mind is fresher then.\n8. There's lots to do in my town. {{7}}, there's a big park with a lake.",
        answers: [
          ["have lived", "'ve lived"],
          ["used to"],
          ["usually"],
          ["especially"],
          ["would love to", "'d love to"],
          ["To be honest"],
          ["because"],
          ["For example"],
        ],
        wordBank: ["have lived", "used to", "usually", "especially", "would love to", "To be honest", "because", "For example"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Speaking Part 1",
        instructions: "Answer without preparing, as in the real test. Use A-R-E: answer, reason, example or extra detail.",
        prompt: "Let's talk about where you live. Do you like the area where you live? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Yes, I like it a lot, mainly because it's so peaceful. I live in a quiet neighbourhood on the edge of the city, but the centre is only twenty minutes away by bus. The best thing is the park at the end of my street. I go running there most mornings, and in summer people have picnics there. The only problem is that there aren't many shops nearby.",
        targetPhrases: ["I like it", "because", "The best thing is", "most mornings", "The only problem is"],
        checklist: [
          "I answered the question directly in my first sentence.",
          "I gave at least one reason.",
          "I added an example or extra detail.",
          "I used present simple for things I usually do.",
          "I spoke for 20–30 seconds without a long pause.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEFL Take an Interview",
        instructions: "Imagine a researcher is interviewing you for a study about daily life. Answer with no preparation time. You have 45 seconds.",
        prompt: "Tell me about a typical weekday for you. What do you usually do, and which part of the day do you enjoy most?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "On a typical weekday, I get up at about half past six and have a quick breakfast. Then I take the train to work. I work in the office of a small travel company, so I spend most of the day answering emails and talking to customers. In the evening, I usually cook dinner or meet a friend. The part of the day I enjoy most is actually the train journey in the morning, because it's the only time I have just for myself. I listen to podcasts or just look out of the window. So even though it's early, it's a calm start to the day.",
        targetPhrases: ["On a typical weekday", "Then", "I usually", "The part of the day I enjoy most is", "because", "So"],
        checklist: [
          "I answered both parts of the question: my routine and my favourite part.",
          "I used sequencing words (then, after that, in the evening).",
          "I explained why I enjoy that part of the day.",
          "I finished with a short concluding sentence.",
          "I kept talking for most of the 45 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Part 1 lasts about 4–5 minutes. The examiner may stop you to move on; this is normal and does not lower your score. If you don't understand a question, you can say *Sorry, could you repeat the question?*",
    },
    {
      exam: "toefl",
      body: "In Take an Interview there is no preparation time, so start with a direct answer straight away. Then add a reason and an example, and use any time left for a short conclusion. Silence at the end wastes time you could use to show your English.",
    },
    {
      exam: "toeic",
      body: "In TOEIC Respond to questions, you answer three questions on an everyday topic with almost no preparation time and 15 or 30 seconds for each answer. The same A-R-E idea works: answer first, then add a reason. For a 15-second answer, one reason is enough.",
    },
  ],
  vocabulary: [
    { word: "hometown", meaning: "the town or city where you were born or grew up", example: "My hometown is a small fishing village.", topic: "everyday" },
    { word: "neighbourhood", meaning: "the area of a town where you live", example: "It's a friendly neighbourhood with lots of cafés.", topic: "everyday" },
    { word: "on the edge of", meaning: "at the outside part of a place", example: "We live on the edge of the city, near the fields.", topic: "everyday" },
    { word: "degree", meaning: "a course of study at a university", example: "She's doing a degree in nursing.", topic: "education" },
    { word: "routine", meaning: "the things you usually do every day, in the same order", example: "My morning routine starts with a cup of tea.", topic: "everyday" },
    { word: "be into something", meaning: "to like something a lot (informal)", example: "I'm really into rock climbing at the moment.", topic: "everyday" },
    { word: "not a big fan of", meaning: "not liking something very much", example: "I'm not a big fan of spicy food.", topic: "everyday" },
    { word: "tend to", meaning: "to usually do something", example: "I tend to go to bed quite late.", topic: "everyday" },
    { word: "on my feet", meaning: "standing up, for example at work", example: "I'm a waiter, so I'm on my feet all day.", topic: "work" },
    { word: "fresh", meaning: "(of your mind) rested and able to think clearly", example: "My mind feels fresh in the morning.", topic: "health" },
  ],
  keyPoints: [
    "Give full answers: about 20–30 seconds in IELTS Part 1 and up to 45 seconds in the TOEFL interview.",
    "Use A-R-E: Answer, Reason, Example or Extra detail.",
    "Choose the tense that fits the question: present simple, present perfect, used to, or would love to.",
    "Sound natural, not memorised. Honest, simple answers with real details work best.",
  ],
};

export default lesson;
