import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-b2-mock-test",
  title: "B2 speaking mock test",
  summary:
    "A complete, timed IELTS Speaking mock at B2 level (Part 1, a Part 2 cue card and a Part 3 discussion), plus a TOEFL interview question and a TOEIC opinion task, with model answers and band-descriptor self-checks.",
  skill: "speaking",
  level: "B2",
  order: 12,
  minutes: 40,
  exams: [
    { exam: "ielts", task: "Mock test" },
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "ielts", task: "Speaking Part 2" },
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
    { exam: "toeic", task: "Speaking – Express an opinion" },
  ],
  objectives: [
    "Complete a full IELTS Speaking test under real timing, changing your answer style for each part",
    "Speak for close to two minutes on a cue card, covering every point in a logical order",
    "Develop Part 3, TOEFL and TOEIC answers with a clear position, a reason and an example",
    "Rate your recordings against the public IELTS band descriptors for bands 6 and 7",
  ],
  warmUp: [
    "Think of the B2 lessons you have done. Which skill has improved most: fluency, vocabulary, grammar or pronunciation?",
  ],
  learn: [
    {
      type: "text",
      title: "How to use this mock test",
      body: "This mock brings together the whole B2 speaking course. Do it **in one sitting**, in a quiet room, and record every answer.\n\n- Don't pause the timer or restart an answer. In the exam you can't.\n- Only make written notes in IELTS Part 2, where you get paper and a pencil. For the other tasks, plan in your head.\n- Don't read any model answer until you have finished the whole test.\n\nWhen you have finished, listen to your recordings with the band descriptor table in the Model section. Then compare your answers with the models. The models show one strong way to answer at this level, not the only way.",
    },
    {
      type: "table",
      title: "What's in this mock test",
      headers: ["Section", "Tasks", "Preparation", "Speaking time"],
      rows: [
        ["IELTS Part 1: Introduction and interview", "5 questions: your studies or work, and the weather", "None", "About 20–30 seconds each"],
        ["IELTS Part 2: Long turn", "1 cue card", "1 minute (notes allowed)", "Up to 2 minutes"],
        ["IELTS Part 3: Discussion", "4 questions linked to the Part 2 topic", "None", "About 45–60 seconds each"],
        ["TOEFL: Take an Interview", "1 interview question", "None", "45 seconds"],
        ["TOEIC: Express an opinion", "1 opinion question", "45 seconds", "60 seconds"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Before you start: know the format",
        questions: [
          {
            prompt: "What can you do during the one minute of preparation in IELTS Part 2?",
            options: [
              "Nothing. You must plan silently, without writing.",
              "Write key words for each point on the cue card.",
              "Write your full talk so that you can read it aloud.",
              "Ask the examiner for a different topic.",
            ],
            answer: 1,
            explanation: "You get paper and a pencil. Key words are best: there is no time for full sentences, and reading aloud would not sound natural.",
          },
          {
            prompt: "How are IELTS Part 3 questions different from Part 1 questions?",
            options: [
              "They are more abstract, about people and society, so answers should be longer and developed.",
              "They are about familiar topics such as your home and hobbies, so one short sentence is enough.",
              "They are the same kind of question as Part 2, but you answer without a cue card.",
            ],
            answer: 0,
            explanation: "In Part 3 you explain, compare, speculate and justify opinions on wider issues linked to the Part 2 topic.",
          },
          {
            prompt: "The examiner stops you in Part 1 before you have finished your answer. What does this mean?",
            options: [
              "Your answer was wrong, so the examiner moved on.",
              "You spoke too slowly, so you must repeat the answer faster.",
              "Nothing bad: the examiner is keeping to time and moving on.",
            ],
            answer: 2,
            explanation: "The examiner has to fit the questions into the time, so being interrupted is normal.",
          },
          {
            prompt: "How much time do you have in TOEFL Take an Interview?",
            options: [
              "No preparation and 45 seconds for each answer",
              "15 seconds to prepare and 45 seconds to speak",
              "45 seconds to prepare and 60 seconds to speak",
            ],
            answer: 0,
            explanation: "You answer each of the four interview questions straight away, with 45 seconds for each.",
          },
          {
            prompt: "How much time do you have in TOEIC Express an opinion?",
            options: [
              "No preparation and 30 seconds to speak",
              "45 seconds to prepare and 60 seconds to speak",
              "1 minute to prepare and 2 minutes to speak",
            ],
            answer: 1,
            explanation: "You have 45 seconds to plan your opinion and reasons, then 60 seconds to speak.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "table",
      title: "Rate yourself: band 6 and band 7 in the public IELTS descriptors",
      headers: ["Criterion", "Band 6 (key sentences)", "Band 7 (key sentences)", "Listen for this in your recording"],
      rows: [
        [
          "Fluency and Coherence",
          "“Able to keep going and demonstrates a willingness to produce long turns.” “Uses a range of spoken discourse markers, connectives and cohesive features though not always appropriately.”",
          "“Able to keep going and readily produce long turns without noticeable effort.” “Flexible use of spoken discourse markers, connectives and cohesive features.”",
          "Did you fill the time in Parts 2 and 3? Were your linkers varied and used correctly, or did you repeat “and”, “so” and “also”?",
        ],
        [
          "Lexical Resource",
          "“Resource sufficient to discuss topics at length.” “Generally able to paraphrase successfully.”",
          "“Some ability to use less common and idiomatic items and an awareness of style and collocation is evident though inappropriacies occur.” “Effective use of paraphrase as required.”",
          "Did you use topic words and natural collocations, not just good, bad and thing? When a word was missing, did you explain it smoothly?",
        ],
        [
          "Grammatical Range and Accuracy",
          "“Produces a mix of short and complex sentence forms and a variety of structures with limited flexibility.”",
          "“A range of structures flexibly used. Error-free sentences are frequent.”",
          "Did you use past tenses in Part 2, conditionals and comparisons in Part 3? How many of your long sentences were error-free?",
        ],
        [
          "Pronunciation",
          "“Uses a range of phonological features, but control is variable.” “Can generally be understood throughout without much effort.”",
          "“Displays all the positive features of band 6, and some, but not all, of the positive features of band 8.”",
          "Were word stress and sentence stress clear in long words and long turns? Did you pause between chunks, not in the middle of them?",
        ],
      ],
    },
    {
      type: "text",
      title: "How a strong B2 candidate approaches the test",
      body: "IELTS says that band 5 is on the border between B1 and B2 and that the C1 threshold falls between 6.5 and 7. So at the end of a B2 course, band 6 is a realistic target, and band 7 features are what to aim for next.\n\n- **Part 1:** a direct answer, one or two details or reasons, then stop. Natural phrases such as *to be honest* or *it depends* help, but don't overuse them.\n- **Part 2:** key words for each bullet in the minute of preparation. Follow the bullets in order, tell the story in past tenses, and keep the *explain* point for the end, so you never run out of things to say.\n- **Part 3:** move from *I* to *people* and *society*. Give a clear position, a reason and a general example, and add the other side (*That said…*).\n- **TOEFL and TOEIC:** opinion in the first sentence, one well-developed reason with a specific example, and a one-line conclusion before the time ends.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "IELTS Speaking Part 1: Introduction and interview",
      body: "In the real test, Part 1 lasts 4–5 minutes; this mock uses five questions. The examiner will ask you about your studies or work, and then about the weather. There is no preparation time. Answer directly and add a reason, a detail or an example. Aim for about **20–30 seconds** per answer.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "speak",
        title: "Part 1, question 1",
        prompt: "Let's talk about what you do. Do you work or are you a student?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "I'm a student at the moment. I'm in my second year of a business degree at a large university in my home city. It's fairly demanding, especially around exam time, but I really enjoy it, mainly because the course is very practical. We do a lot of group projects with real local companies, so it never feels like we're just learning theory from books.",
        targetPhrases: ["at the moment", "fairly demanding", "mainly because", "it never feels like"],
        checklist: [
          "I answered the question in my first sentence.",
          "I added details (what, where) and a reason.",
          "I used a natural mix of tenses and stopped after about 30 seconds.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "speak",
        title: "Part 1, question 2",
        prompt: "What's the most difficult part of your studies or your job?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Probably managing my time. In the same week I might have two deadlines, a group meeting and shifts at my part-time job, so it's easy to fall behind. Last term I left one essay until the night before, and I promised myself I'd never do that again. Now I plan the whole week on Sunday evening, and it's honestly made a big difference to my stress levels.",
        targetPhrases: ["probably", "fall behind", "I promised myself", "made a big difference"],
        checklist: [
          "I gave a clear answer straight away.",
          "I supported it with a specific example from my life.",
          "I used past and present tenses correctly to compare then and now.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "Part 1, question 3",
        prompt: "Let's move on to the weather. What's the weather usually like where you live?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "It's pretty mild most of the year, to be honest, with no real extremes. The summers are warm but not too hot, and the winters are cool and quite wet rather than freezing. The main problem is that it's very changeable. You can have bright sunshine in the morning and heavy rain by lunchtime, so most people carry an umbrella everywhere they go, just in case.",
        targetPhrases: ["pretty mild", "rather than", "changeable", "just in case"],
        checklist: [
          "I used weather vocabulary beyond hot, cold and nice.",
          "I compared seasons or times of day.",
          "My answer had a clear structure: general picture, then a detail.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "Part 1, question 4",
        prompt: "Does the weather affect your mood?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Yes, quite a lot, actually. When it's sunny, I feel much more energetic and I'm more likely to go out and see people. But after a week of grey skies and rain, I tend to feel a bit flat, my motivation drops, and I just want to stay in and watch series. I think a lot of people are the same, especially in the middle of winter.",
        targetPhrases: ["quite a lot, actually", "more likely to", "tend to", "feel a bit flat"],
        checklist: [
          "I answered yes or no and then explained.",
          "I contrasted two situations (sunny days and grey days).",
          "I used at least one natural expression such as tend to or more likely to.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "speak",
        title: "Part 1, question 5",
        prompt: "Was there a kind of weather you especially enjoyed when you were a child?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Definitely snow, because we didn't get it very often. I remember one winter when it snowed so heavily that the schools closed for two days. My brother and I spent the whole time outside building a snowman and having snowball fights with the neighbours' kids. We'd come in soaking wet and frozen, but we didn't care at all. It's still one of my favourite memories.",
        targetPhrases: ["definitely", "so heavily that", "we'd come in", "we didn't care at all"],
        checklist: [
          "I used past tenses to tell a short memory.",
          "I used so… that or would for past habits.",
          "I kept it short and personal, about 20–30 seconds.",
        ],
      },
    },
    {
      type: "text",
      title: "IELTS Speaking Part 2: Long turn (3–4 minutes)",
      body: "Read the cue card. You have **one minute** to prepare and you can make notes. Then speak for **up to two minutes**. The examiner will stop you when the time is up.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex7",
        kind: "speak",
        title: "Part 2: cue card",
        prompt: "Describe a time when you helped someone.",
        cueCard: [
          "who you helped",
          "what the situation was",
          "how you helped them",
          "and explain how you felt about helping this person",
        ],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "I'd like to talk about a time last winter when I helped an elderly neighbour of mine, Mr Peters, who lives on the ground floor of my building. He's in his eighties and lives on his own, but he's very independent. He still does his own shopping and goes for a walk every single day.\n\nAnyway, one night in January we had really heavy snow, which is quite unusual where I live, and by the next morning the pavements were completely covered in ice. I was just leaving for university when I saw him standing at the main door with his shopping bag, looking nervously at the street. He told me he'd run out of his heart medicine and needed to get to the pharmacy, which is about fifteen minutes away on foot. It was obvious that it wasn't safe for him to go out, so I offered to go instead. He gave me his prescription, I went to the pharmacy, and on the way back I picked up some bread and milk for him as well.\n\nIn the end, I did his shopping for about a week, until the ice melted. It honestly didn't take much time, maybe twenty minutes a day, and he insisted on making me a cup of tea every time I came back.\n\nAs for how I felt, I was really glad I'd been there at the right moment, because if he'd slipped and fallen, it could have been very serious. And it actually changed our relationship. Before that, we only said hello in the corridor, but now we have a proper chat whenever we meet, and I've learned a lot about the history of the neighbourhood from him.",
        targetPhrases: ["I'd like to talk about", "anyway", "he'd run out of", "I offered to", "in the end", "as for how I felt", "if he'd slipped and fallen"],
        checklist: [
          "I covered all four points on the cue card, in order.",
          "I spoke for close to two minutes without long pauses.",
          "I used past tenses accurately, including the past perfect (he'd run out of…).",
          "I used linkers to move through the story (anyway, in the end, as for…).",
          "I finished with my feelings and a reflection, not just the events.",
        ],
      },
    },
    {
      type: "text",
      title: "IELTS Speaking Part 3: Discussion (4–5 minutes)",
      body: "The examiner will now ask you some more general questions about **helping other people**. There is no preparation time. Give a clear position, explain it, and support it with a general example. Aim for about **45–60 seconds** per answer.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex8",
        kind: "speak",
        title: "Part 3, question 1",
        prompt: "Why do some people find it difficult to ask for help?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I think the main reason is pride. A lot of people, especially men and older people, see asking for help as a sign of weakness. They feel they should be able to cope on their own, so they'd rather struggle than admit they have a problem. Another reason is that people don't want to be a burden. For example, many parents won't ask their adult children for help because they know their children are already busy with work and their own families. And sometimes people simply don't know who to ask, particularly if they've just moved to a new city and haven't built up a network yet. In that situation, even asking a neighbour for a small favour can feel awkward. So it's partly about personality and partly about circumstances.",
        targetPhrases: ["the main reason is", "a sign of weakness", "they'd rather", "a burden", "partly about"],
        checklist: [
          "I gave a clear main reason in my first sentence.",
          "I added at least one more reason, linked with a phrase like another reason is.",
          "I gave a general example about people, not only about me.",
          "I summed up at the end.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex9",
        kind: "speak",
        title: "Part 3, question 2",
        prompt: "Do you think people help their neighbours less than they did in the past?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "On the whole, I'd say yes, at least in big cities. In my grandparents' time, people often lived in the same street for their whole lives, so everyone knew each other, and helping a neighbour was just normal. These days people move house much more often, and many of them work long hours, so they hardly ever see their neighbours, let alone get to know them. That said, I don't think people are less kind than before. When there's a real emergency, like a flood or a storm, neighbours still help each other a lot. And in some places, online neighbourhood groups have made it easier to ask for small favours, like borrowing a ladder or finding someone to feed the cat while you're away. So it's changed, but it hasn't disappeared.",
        targetPhrases: ["on the whole", "in my grandparents' time", "these days", "that said", "it's changed, but"],
        checklist: [
          "I compared the past and the present clearly.",
          "I gave reasons for the change.",
          "I showed the other side with that said or however.",
          "I ended with a balanced conclusion.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex10",
        kind: "speak",
        title: "Part 3, question 3",
        prompt: "Who should be mainly responsible for looking after elderly people: their families or the government?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I think it should be shared, but if I had to choose, I'd say families should take the main role, at least for everyday support. Elderly people usually want to be with people they know and trust, and a visit from a son or a granddaughter means much more to them than a visit from a stranger. However, families can't do everything. Some old people need medical care that relatives simply can't provide, and some people don't have any family nearby. That's where the government has to step in, with things like home nurses and good care homes. And of course, people who look after a parent full-time need some support too. So ideally, families provide the company and the day-to-day help, and the state provides the professional care.",
        targetPhrases: ["if I had to choose", "take the main role", "however", "step in", "ideally"],
        checklist: [
          "I gave a clear position, even though the question has two sides.",
          "I explained the limits of my position (families can't do everything).",
          "I used a conditional (if I had to choose, I'd say…).",
          "I finished by bringing both sides together.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex11",
        kind: "speak",
        title: "Part 3, question 4",
        prompt: "Has technology made it easier or harder to help people in need?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "Mostly easier, I think. For one thing, it's much simpler to give money now than it used to be. If there's a disaster somewhere in the world, you can donate to a charity on your phone in about a minute. Social media also helps people find out about problems in their own area, for example a family whose house has burned down, and people can organise help very quickly. I've seen this happen in my own town more than once. On the other hand, technology can make helping feel a bit distant. Clicking a button isn't the same as actually spending time with someone who's lonely, and some people might feel they've done enough just by sharing a post. So technology is a great tool, but it can't replace real, face-to-face help.",
        targetPhrases: ["for one thing", "for example", "on the other hand", "isn't the same as", "can't replace"],
        checklist: [
          "I answered the question (easier or harder) in my first sentence.",
          "I gave at least two developed points with examples.",
          "I looked at the other side.",
          "My conclusion answered the question again in different words.",
        ],
      },
    },
    {
      type: "text",
      title: "TOEFL Speaking: Take an Interview",
      body: "An interviewer is asking students how they learn practical skills. There is **no preparation time**. Start answering straight away and speak for **45 seconds**.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex12",
        kind: "speak",
        title: "TOEFL interview question",
        prompt:
          "Interviewer: Thanks for joining our study on how people learn practical skills. Have you ever learned to do something by watching online videos? How well did it work for you?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "Yes, quite a few times, and it usually works well. The best example is when the chain came off my bike last spring. I had no idea how to fix it, so I found a short video, paused it after every step and copied exactly what the person was doing. It took me about twenty minutes, but I managed it, and I saved the cost of a repair shop. The big advantage is that you can watch the difficult part again and again. That said, it only works for simple jobs. For anything complicated, I think you still need a real person to show you.",
        targetPhrases: ["the best example is", "I had no idea how to", "I managed it", "the big advantage is", "that said"],
        checklist: [
          "I answered both parts of the question.",
          "I gave one specific example in the past tense.",
          "I evaluated how well it worked, including a limitation.",
          "I finished within 45 seconds.",
        ],
      },
    },
    {
      type: "text",
      title: "TOEIC Speaking: Express an opinion",
      body: "You will have **45 seconds** to prepare and **60 seconds** to speak. Give your opinion and support it with reasons and examples.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex13",
        kind: "speak",
        title: "TOEIC opinion question",
        prompt:
          "Do you agree or disagree with the following statement? “Team meetings are more productive when people meet in person rather than online.” Use specific reasons and examples to support your answer.",
        prepSeconds: 45,
        speakSeconds: 60,
        modelAnswer:
          "I agree with this statement, although online meetings definitely have their place. The main reason is that people communicate better face to face. In a room, you can see everyone's reactions, so it's easier to tell when someone is confused or disagrees. Online, half the team often has their cameras off, and people are tempted to check their emails at the same time. For example, at my last job we had our weekly planning meeting on video for several months, and it always ran over time because people kept talking at once or losing their connection. When we moved it back to the office, it was shorter and we made decisions much faster. So, for meetings where a team needs to solve problems together, I think meeting in person is more productive.",
        targetPhrases: ["I agree with this statement, although", "the main reason is", "for example", "so, for meetings where"],
        checklist: [
          "I said clearly whether I agree or disagree in my first sentence.",
          "I gave a main reason and explained it.",
          "I supported it with a specific example from experience.",
          "I briefly mentioned the other side.",
          "I finished with a conclusion before the 60 seconds ran out.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "The whole IELTS Speaking test lasts 11–14 minutes. In Part 2 the examiner may ask one or two short follow-up questions after your talk. Answer them briefly and naturally: they are not a second long turn.",
    },
    {
      exam: "toefl",
      body: "In **Take an Interview**, early questions are about your experience and later questions ask for opinions on wider issues. When the question has two parts, as in this mock, answer both: what happened, and how well it worked.",
    },
    {
      exam: "toeic",
      body: "In **Express an opinion**, use the 45 seconds of preparation to choose your side, one main reason and one example. A clear, well-supported answer that finishes on time is better than a long list of reasons that gets cut off.",
    },
  ],
  vocabulary: [
    { word: "demanding", meaning: "needing a lot of time, effort or attention", example: "Nursing is a demanding job.", topic: "work" },
    { word: "fall behind", meaning: "to fail to do work as quickly as you should", example: "I was ill for a week and fell behind with my reading.", topic: "education" },
    { word: "changeable", meaning: "(of weather) likely to change often", example: "Bring a jacket: the weather is very changeable here.", topic: "environment" },
    { word: "run out of", meaning: "to use all of something so that none is left", example: "We've run out of milk.", topic: "everyday" },
    { word: "prescription", meaning: "a doctor's written instruction for medicine", example: "You need a prescription for these tablets.", topic: "health" },
    { word: "insist on", meaning: "to say firmly that you will do something, even if others say no", example: "She insisted on paying for lunch.", topic: "everyday" },
    { word: "a sign of weakness", meaning: "something that shows a person is not strong", example: "Asking for advice is not a sign of weakness.", topic: "society" },
    { word: "a burden", meaning: "a person or thing that causes extra work or worry for others", example: "He didn't want to be a burden to his children.", topic: "society" },
    { word: "step in", meaning: "to become involved to help solve a problem", example: "The council stepped in to keep the library open.", topic: "society" },
    { word: "donate", meaning: "to give money or goods to help people", example: "Thousands of people donated to the flood appeal.", topic: "society" },
    { word: "productive", meaning: "achieving a lot in a period of time", example: "Short meetings are often more productive.", topic: "business" },
  ],
  keyPoints: [
    "Take the mock in one sitting, under real timing, and record every answer.",
    "Part 1: short, direct and personal. Part 2: notes on every bullet and close to two minutes. Part 3: a clear position, a reason, a general example and the other side.",
    "TOEFL interview answers start straight away; TOEIC opinion answers use the 45 seconds to plan a side, a reason and an example.",
    "Rate yourself with the exact band 6 and band 7 descriptors, one criterion at a time, before you read the models.",
  ],
};

export default lesson;
