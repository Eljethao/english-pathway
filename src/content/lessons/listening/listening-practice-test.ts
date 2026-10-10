import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-practice-test",
  title: "Full listening practice test",
  summary:
    "A complete four-part listening mock test with 40 questions, ten in each part: a form-completion phone call, a radio talk, an academic discussion and a lecture, with full answer explanations.",
  skill: "listening",
  level: "C1",
  order: 4,
  minutes: 45,
  exams: [
    { exam: "ielts", task: "Mock test" },
    { exam: "ielts", task: "Listening Part 1" },
    { exam: "ielts", task: "Listening Part 2" },
    { exam: "ielts", task: "Listening Part 3" },
    { exam: "ielts", task: "Listening Part 4" },
    { exam: "toefl", task: "Listening – Conversation" },
    { exam: "toefl", task: "Listening – Academic Talk" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
    { exam: "toeic", task: "Listening Part 4 – Talks" },
  ],
  objectives: [
    "Complete a full four-part listening test under exam-like conditions",
    "Apply prediction, note-taking, signposting and paraphrase skills across different task types",
    "Identify your weakest part and question type from your results",
  ],
  warmUp: [
    "Which part of a listening test do you usually find hardest: everyday conversations, talks, discussions or lectures? Why?",
    "What do you do when you miss an answer in the middle of a recording?",
  ],
  learn: [
    {
      type: "text",
      title: "How this test works",
      body: "This mock test follows the structure of IELTS Listening: four parts with ten questions each (40 in total), which become more difficult, with the questions in the same order as the audio. The conversation and lecture parts also train the skills you need for TOEFL Conversation and Academic Talk, and TOEIC Parts 3 and 4.\n\nTo get a realistic result:\n\n1. Play each recording **once only**, at normal speed.\n2. Before each recording, spend **30 seconds** reading the questions and predicting the answers.\n3. Do not open the transcript until you have checked your answers.\n4. Write answers exactly as instructed. Spelling counts, and so does the word limit.\n5. Work through all four parts in one sitting. The whole test takes about 40 minutes.",
    },
    {
      type: "table",
      title: "Test overview",
      headers: ["Part", "Situation", "Speakers", "Questions"],
      rows: [
        ["Part 1", "Registering for a volunteer weekend", "Two people, phone call", "1–10: form completion"],
        ["Part 2", "Food festival information", "One speaker, radio talk", "11–16: multiple choice; 17–20: matching"],
        ["Part 3", "Discussing a research project", "Two students and a tutor", "21–25: multiple choice; 26–30: matching"],
        ["Part 4", "Lecture on soundscape ecology", "One speaker, lecture", "31–40: note completion"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In the real test, Parts 1 to 3 have a short break in the middle where you can read ahead, but Part 4 has no break. Use every pause to read the next questions, not to worry about the last ones.",
    },
  ],
  model: [
    {
      type: "text",
      title: "Example: predicting and avoiding the first answer",
      body: "Before you listen, look at these two form lines and predict what kind of answer you need.\n\n- Arrival time: ______ (a time, probably in the evening)\n- Number of people: ______ (a number)\n\nNow listen to the example.",
    },
    {
      type: "audio",
      title: "Example recording",
      voice: "uk",
      transcript:
        "Woman: So, what time do you expect to arrive at the hotel?\nMan: We were planning to get there at six, but our train's been changed, so it'll be more like seven.\nWoman: Seven o'clock, then. And how many of you will there be?\nMan: Four adults. Oh, and my sister's bringing her son now, so that makes five of us.",
    },
    {
      type: "text",
      title: "How a strong listener answers",
      body: "**Arrival time: 7 (seven o'clock).** Six is mentioned first, but *but* introduces a change. The receptionist then confirms the new time. This “first answer, then correction” pattern is the most common trap in Part 1.\n\n**Number of people: 5.** “Four adults” sounds like the answer, but the speaker adds one more person. Wait for the end of the turn before you write.\n\nUse the same habits throughout this test: predict the answer type, listen for corrections, and keep moving if you miss something.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "Part 1: Questions 1–10",
      body: "You will hear a man phoning a conservation charity to register as a volunteer. First, read the form. Then listen and complete it.",
    },
    {
      type: "audio",
      title: "Part 1: registering as a volunteer",
      voice: "uk",
      transcript:
        "Woman: Good morning, Greenway Conservation Trust, Emma speaking.\nMan: Oh, hello. I'd like to sign up for one of your conservation weekends, please.\nWoman: Lovely. I'll just take a few details. Could I have your full name?\nMan: Yes, it's Daniel Okafor.\nWoman: Could you spell your surname for me?\nMan: Sure. O, K, A, F, O, R.\nWoman: Thank you. And what's the best number to contact you on?\nMan: My mobile. It's oh seven seven oh oh, nine oh oh, three seven two.\nWoman: Let me read that back. Oh seven seven oh oh, nine oh oh, three seven two.\nMan: That's right.\nWoman: And how did you hear about us?\nMan: I've seen your posters around town, but it was actually a colleague who told me about the weekends. She volunteered with you last year and said it was great.\nWoman: Good to hear. Now, we've got three weekends left this autumn: the fourteenth of October, the twenty-first, and the fourth of November.\nMan: The fourteenth was what I had in mind, but actually I've just remembered I'm away that weekend. So the twenty-first, please.\nWoman: No problem. That weekend we'll be working at Marsh Lane Nature Reserve. That's M, A, R, S, H, Marsh.\nMan: And what will we be doing?\nWoman: Originally we'd planned to plant hedges, but that's been moved to the spring. So the main job now is repairing the boardwalk. That's the wooden path that goes across the wetland. Part of it was damaged in last winter's storms.\nMan: Sounds good. Do I need to bring any equipment?\nWoman: No, we provide all the tools, and gloves too. But you'll need waterproof boots, because it gets very muddy, and please bring your own lunch. We supply hot drinks.\nMan: OK. And how do I get there? I don't have a car.\nWoman: There's a minibus from the railway station on Saturday morning. It used to leave at nine, but this year it's leaving at eight thirty, so please don't be late.\nMan: Eight thirty. Got it.\nWoman: And finally, the weekend itself is free, but we do ask all volunteers to become members of the Trust. It's twelve pounds a year, or six pounds for students.\nMan: I'm afraid I'm not a student any more, so twelve pounds, then.\nWoman: Lovely. I'll email you the membership form this afternoon.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "gap",
        title: "Questions 1–10: form completion",
        instructions: "Complete the form. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Greenway Conservation Trust: volunteer registration\n\nName: Daniel (1) {{0}}\nMobile number: (2) {{1}}\nHeard about the weekends from: a (3) {{2}}\nDate of weekend: (4) {{3}} October\nLocation: (5) {{4}} Lane Nature Reserve\nMain task: repairing the (6) {{5}}\nThe Trust provides: tools and (7) {{6}}\nVolunteers must bring: waterproof (8) {{7}} and their own lunch\nMinibus leaves the station at: (9) {{8}} on Saturday\nAnnual membership fee: (10) £{{9}}",
        answers: [
          ["Okafor"],
          ["07700 900372", "07700900372"],
          ["colleague"],
          ["21", "21st", "twenty-first", "twenty first"],
          ["Marsh"],
          ["boardwalk", "board walk"],
          ["gloves"],
          ["boots"],
          ["8.30", "8:30", "8.30 am", "8:30 am", "8.30am", "8:30am", "8.30 a.m.", "8:30 a.m.", "eight thirty"],
          ["12", "twelve", "12.00"],
        ],
      },
    },
    {
      type: "text",
      title: "Part 2: Questions 11–20",
      body: "You will hear the organiser of a food festival talking on local radio. First, read the questions.",
    },
    {
      type: "audio",
      title: "Part 2: the Northgate Food Festival",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Good morning, and thanks for having me on the programme. As many of your listeners will know, the Northgate Food Festival returns to Victoria Park this weekend. It's still a two-day event, as it has been since it started, but this year it's bigger than ever, with over a hundred and twenty stallholders. That's about thirty more than last year.\n\nOne change people have been asking about is the entry charge. In previous years, it cost five pounds to get in. This year, thanks to a generous sponsor, entry is completely free. Some of the cookery demonstrations do need to be booked in advance, and those cost three pounds each, but you can wander round the rest of the festival without paying a penny.\n\nNow, getting there. Parking near the park is always difficult, so this year we're running a shuttle bus from the railway station every fifteen minutes. If you're cycling, there'll be a supervised bike park at the north gate, but please bring your own lock.\n\nWe're also trying hard to reduce our impact on the environment. There will be no single-use cups anywhere on site. Instead, you'll pay a one pound deposit for a reusable cup, which you get back when you return it. And all of our stallholders have agreed to serve food on compostable plates. We did look into providing free water refill stations, but sadly we couldn't get permission from the park authorities this year.\n\nOne more practical point. Most stalls take cards, but some of the smaller producers can only accept cash, and there's no cash machine in the park itself, so it's a good idea to have some with you.\n\nThe festival is divided into four zones. The Riverside zone is where you'll find street food from around the world, everything from Korean pancakes to Brazilian barbecue. It gets very busy at lunchtime, so come early if you want to avoid the queues.\n\nThe Orchard zone is our family area. Children can join in hands-on baking sessions there, and there's no need to book. Just turn up.\n\nThe Market Hall is the place for local producers: cheese, bread, honey and so on. It's indoors, and it's the only part of the festival that stays open until nine o'clock on Saturday evening. Everywhere else closes at six.\n\nAnd finally, the Bandstand zone. That's where our guest chefs will be giving their demonstrations throughout the day, so if you've booked a place, that's where you need to go.\n\nWe're really looking forward to seeing everyone there.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Questions 11–16: multiple choice",
        instructions: "Choose the correct answer. For Questions 14–15, choose TWO answers.",
        questions: [
          {
            prompt: "11. What does the speaker say about this year's festival?",
            options: [
              "It will last longer than in previous years.",
              "It is being held in a new location.",
              "The number of traders has gone up.",
            ],
            answer: 2,
            explanation: "“Over a hundred and twenty stallholders. That's about thirty more than last year.” It is “still a two-day event”, and it “returns to Victoria Park”, so the other options are wrong.",
          },
          {
            prompt: "12. What is different about entry to the festival this year?",
            options: [
              "It is free for all visitors.",
              "It costs three pounds.",
              "Tickets must be booked in advance.",
            ],
            answer: 0,
            explanation: "“This year, thanks to a generous sponsor, entry is completely free.” Three pounds is the price of a cookery demonstration, and only demonstrations need booking.",
          },
          {
            prompt: "13. What does the speaker say about transport?",
            options: [
              "A bus will run regularly from the railway station.",
              "Free car parking is available near the park.",
              "Bikes and locks can be hired at the north gate.",
            ],
            answer: 0,
            explanation: "“We're running a shuttle bus from the railway station every fifteen minutes.” Parking is described as difficult, and cyclists must bring their own lock.",
          },
          {
            prompt: "14–15. Which TWO environmental measures will the festival use this year?",
            options: [
              "reusable cups with a deposit",
              "compostable plates",
              "free water refill stations",
              "recycling bins at every stall",
              "a ban on plastic bags",
            ],
            answer: [0, 1],
            explanation: "Reusable cups (one pound deposit) and compostable plates are both confirmed. Water refill stations were considered but rejected: “we couldn't get permission”. Recycling bins and plastic bags are not mentioned.",
          },
          {
            prompt: "16. What does the speaker advise visitors to do?",
            options: [
              "Pay by card wherever possible.",
              "Use the cash machine at the park entrance.",
              "Bring some notes and coins with them.",
            ],
            answer: 2,
            explanation: "Some small producers “can only accept cash, and there's no cash machine in the park itself, so it's a good idea to have some with you”. Most stalls take cards, but card payment is not what the speaker recommends.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Questions 17–20: matching",
        instructions: "What does the speaker say about each zone of the festival? Choose the correct feature for each zone. There are two features you do not need.",
        left: ["17. Riverside", "18. Orchard", "19. Market Hall", "20. Bandstand"],
        right: [
          "free samples of local products",
          "hands-on activities for children",
          "cooking demonstrations by chefs",
          "food from many different countries",
          "reduced prices in the morning",
          "later opening on Saturday",
        ],
        answer: [3, 1, 5, 2],
      },
    },
    {
      type: "text",
      title: "Part 3: Questions 21–30",
      body: "You will hear two students, Hannah and Leo, talking to their tutor about a research project on community gardens. First, read the questions.",
    },
    {
      type: "audio",
      title: "Part 3: a project on community gardens",
      voice: "uk",
      cast: { Tutor: "male" },
      transcript:
        "Tutor: So, how's the project on community gardens coming along?\nHannah: Pretty well, I think. We've finished the interviews, and we've had about sixty questionnaires back.\nTutor: Sixty? That's more than I expected.\nLeo: It was Hannah's idea to hand them out at the gardens' open day rather than relying on the online version we tried first. Hardly anyone filled that one in.\nTutor: Good thinking. And what's emerging from the data?\nHannah: The headline finding is that people who garden regularly say they feel much less isolated. We'd expected that to be strongest among younger people living on their own, but actually it came through most strongly from people who'd recently retired.\nLeo: Although, to be honest, I'm not sure we can say the gardening is what causes it. People who already have a good social life might just be more likely to join a garden in the first place.\nTutor: That's an important point, Leo. You don't need to collect any more data to deal with it, but you should definitely address it in your discussion section. Did anything surprise you?\nLeo: The physical health side, actually. We assumed people would talk about exercise, but hardly anyone did. They talked much more about food, about eating more vegetables.\nHannah: Which makes sense when you think about it. If you've grown something yourself, you're going to eat it.\nTutor: Interesting. Now, I've had a look at your literature review. The Cooper article is a good choice. It's recent and very relevant. But I'd be careful with the government report you've cited. It's useful for background, but it's ten years old now, and some of the figures have changed considerably.\nHannah: Should we take it out?\nTutor: No, keep it, but make it clear that it's historical context. The Martinez study, on the other hand, isn't really about community gardens at all. It's about private gardens, so I'd drop that one completely.\nLeo: OK. What about the interviews? Should we include the full transcripts in the main text?\nTutor: Put the full transcripts in an appendix. In the main text, just choose two or three short quotations that really illustrate your points.\nHannah: And the charts of the questionnaire results? We've got six of them at the moment.\nTutor: The charts themselves are fine, but the labels need to be much clearer. At the moment I can't always tell what the numbers on the axes refer to.\nHannah: Right. And the deadline's still the twelfth?\nTutor: It is, but I'd like to see a draft of your results section by Friday, so I can give you some feedback.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Questions 21–25: multiple choice",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "21. Why did the students receive so many questionnaires?",
            options: [
              "They gave them out in person at an event.",
              "They sent them to people online.",
              "They offered participants a small reward.",
            ],
            answer: 0,
            explanation: "They handed them out “at the gardens' open day”. The online version is a distractor: “Hardly anyone filled that one in.”",
          },
          {
            prompt: "22. According to Hannah, which group reported the biggest drop in feelings of isolation?",
            options: [
              "younger people who live alone",
              "people who had recently stopped working",
              "parents with young children",
            ],
            answer: 1,
            explanation: "“It came through most strongly from people who'd recently retired.” The students had expected younger people living on their own to benefit most, but that is not what they found.",
          },
          {
            prompt: "23. What concern does Leo have about their main finding?",
            options: [
              "Too few retired people took part.",
              "Gardening may not be the cause of reduced isolation.",
              "Participants may not have answered honestly.",
            ],
            answer: 1,
            explanation: "“I'm not sure we can say the gardening is what causes it. People who already have a good social life might just be more likely to join.”",
          },
          {
            prompt: "24. What does the tutor advise the students to do about Leo's concern?",
            options: [
              "Collect more data before they finish.",
              "Discuss the issue in their written report.",
              "Ask participants about it in follow-up interviews.",
            ],
            answer: 1,
            explanation: "“You should definitely address it in your discussion section.” The tutor says they “don't need to collect any more data”.",
          },
          {
            prompt: "25. What surprised the students about the physical health results?",
            options: [
              "Most participants said they had lost weight.",
              "Participants rarely mentioned exercise.",
              "Participants mainly grew vegetables to sell.",
            ],
            answer: 1,
            explanation: "“We assumed people would talk about exercise, but hardly anyone did.” They talked about eating more vegetables, not selling them.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "match",
        title: "Questions 26–30: matching",
        instructions: "What does the tutor say about each of the following? Choose the correct comment for each one. There are two comments you do not need.",
        left: ["26. the Cooper article", "27. the government report", "28. the Martinez study", "29. the interview transcripts", "30. the charts"],
        right: [
          "It should be removed.",
          "It should be moved to an appendix.",
          "It is recent and relevant.",
          "It should only be used as historical background.",
          "It needs to be quoted more fully.",
          "It should be replaced with a newer edition.",
          "It needs to be made easier to understand.",
        ],
        answer: [2, 3, 0, 1, 6],
      },
    },
    {
      type: "text",
      title: "Part 4: Questions 31–40",
      body: "You will hear part of a lecture about soundscape ecology. First, read the notes. There is no break in this part.",
    },
    {
      type: "audio",
      title: "Part 4: soundscape ecology",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Good morning. Today I'm going to introduce a relatively young field called soundscape ecology, which studies ecosystems by listening to them. I'll outline its basic ideas, describe how the research is actually done, and then look at some of the challenges it faces.\n\nLet's start with the basic idea. Every environment has a soundscape, which researchers usually divide into three parts. First, there's the biophony: the sounds made by living organisms, such as birds, insects and frogs. Second, the geophony: non-biological natural sounds like wind, rain and running water. And third, the anthrophony, which is the noise produced by humans, from traffic to aircraft.\n\nOne of the central ideas in the field is what's known as the acoustic niche hypothesis. The suggestion is that, in a healthy ecosystem, different species have evolved to call at different frequencies, or at different times of day, so that they don't drown each other out. It's rather like an orchestra, where each instrument has its own part to play. If gaps start to appear in that range of sound, it may be an early warning that species are disappearing.\n\nSo how is the research done? Mostly with automated recorders. These are small, weatherproof devices that can be strapped to a tree and left for months at a time, recording at set intervals. The great advantage is that they're cheap, and they don't disturb the animals, unlike a team of researchers tramping through a forest. The disadvantage is the sheer quantity of data. A single recorder can produce thousands of hours of audio, far more than any human could listen to.\n\nThis is where computing comes in. Researchers increasingly rely on software that converts the recordings into images called spectrograms, which show sound as a kind of picture, and then on machine learning to pick out the calls of individual species. In some projects, this approach has detected species that researchers believed had already disappeared from an area.\n\nThere are, however, real challenges. The most obvious one is the anthrophony itself. Road noise can mask quieter calls, which makes it hard to tell whether a species is genuinely absent or simply can't be heard. There's also evidence that some birds in cities now sing at a higher pitch than birds of the same species in the countryside, presumably to be heard above the low rumble of traffic. That's fascinating in itself, but it does complicate comparisons between sites.\n\nFinally, there's the question of interpretation. A quiet forest isn't necessarily an unhealthy one. Soundscapes change with the seasons, and even with the weather, so researchers need long-term recordings before they can draw any firm conclusions. Next week, we'll look at how these methods are being used to monitor coral reefs, which, perhaps surprisingly, are extremely noisy places.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "gap",
        title: "Questions 31–40: note completion",
        instructions: "Complete the notes. Write ONE WORD ONLY for each answer.",
        text: "Soundscape ecology\n\nThree parts of a soundscape\n- biophony: sounds of living things, e.g. birds, insects, (31) {{0}}\n- geophony: e.g. wind, rain, running (32) {{1}}\n- anthrophony: noise from humans, e.g. traffic, aircraft\n\nAcoustic niche hypothesis\n- species call at different frequencies or times of day\n- compared to an (33) {{2}}\n- gaps in the sound may warn that species are (34) {{3}}\n\nMethods\n- automated recorders: can be left in place for (35) {{4}} at a time\n- advantages: cheap, and do not (36) {{5}} animals\n- disadvantage: the huge (37) {{6}} of data\n- computers turn recordings into images called (38) {{7}}\n\nChallenges\n- road noise can (39) {{8}} quieter calls\n- some city birds sing at a higher (40) {{9}}\n- long-term recordings needed: soundscapes change with seasons and weather",
        answers: [
          ["frogs"],
          ["water"],
          ["orchestra"],
          ["disappearing"],
          ["months"],
          ["disturb"],
          ["quantity"],
          ["spectrograms"],
          ["mask"],
          ["pitch"],
        ],
      },
    },
    {
      type: "text",
      title: "Check your score",
      body: "Count your correct answers out of 40. This practice test has not been trialled like a real exam, so treat these ranges as a rough guide, not an IELTS band score.\n\n- **35–40**: excellent, a strong C1 performance. Keep practising at natural speed.\n- **27–34**: good, around B2+ to C1. Look at which part caused most mistakes and revisit that lesson.\n- **19–26**: solid B2. Review the lessons on predicting answers, distractors and note-taking.\n- **0–18**: work through the B2 listening lessons before trying another full test.\n\nThen open each transcript and find the exact words that gave each answer you missed. Ask yourself: *Did I miss it because of vocabulary, speed, a distractor, or because I lost my place?*",
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "On the paper-based test you get 10 minutes at the end to transfer your answers; on the computer-delivered test you get only 2 minutes to check. Either way, check spelling, singular or plural, and the word limit. “Boot” is wrong if the speaker said “boots”.",
    },
    {
      exam: "ielts",
      body: "Part 1 often includes corrections and changes of mind (“it used to leave at nine, but…”). Part 3 often includes an idea that is suggested and then rejected. Wait for the final version before you write.",
    },
    {
      exam: "toefl",
      body: "TOEFL Conversations and Academic Talks are heard once, and you see the questions only afterwards. Practise Parts 3 and 4 of this test by covering the questions, taking notes while you listen, and then answering from your notes.",
    },
    {
      exam: "toeic",
      body: "TOEIC Parts 3 and 4 use shorter recordings with three questions each, but the skills are the same: read the questions first, listen for paraphrases, and answer in order. Parts 1 and 2 of this test are good practice for conversations and talks about everyday and work situations.",
    },
  ],
  vocabulary: [
    { word: "boardwalk", meaning: "a path made of wooden boards, often across wet or sandy ground", example: "Volunteers repaired the boardwalk across the marsh.", topic: "environment" },
    { word: "wetland", meaning: "an area of land that is usually wet, such as a marsh", example: "Many birds live in the wetland all year.", topic: "environment" },
    { word: "stallholder", meaning: "a person who sells things from a stall at a market or festival", example: "Over a hundred stallholders will be at the festival.", topic: "business" },
    { word: "deposit", meaning: "money you pay that is returned to you later", example: "You get your one-pound deposit back when you return the cup.", topic: "everyday" },
    { word: "compostable", meaning: "able to break down naturally into soil", example: "All food is served on compostable plates.", topic: "environment" },
    { word: "isolated", meaning: "alone, without much contact with other people", example: "Many recently retired people feel isolated.", topic: "society" },
    { word: "appendix", meaning: "an extra section at the end of a report or book", example: "Put the full interview transcripts in an appendix.", topic: "education" },
    { word: "literature review", meaning: "the part of a research project that summarises what has already been written on the topic", example: "Our literature review includes six recent studies.", topic: "education" },
    { word: "drown out", meaning: "to be so loud that another sound cannot be heard", example: "The traffic drowned out the birdsong.", topic: "environment" },
    { word: "mask", meaning: "to hide or cover something so it cannot be noticed", example: "Road noise can mask the calls of quieter species.", topic: "science" },
    { word: "pitch", meaning: "how high or low a sound is", example: "City birds sing at a higher pitch than country birds.", topic: "science" },
    { word: "draw conclusions", meaning: "to decide what is true after considering the evidence", example: "It is too early to draw any firm conclusions.", topic: "academic" },
  ],
  keyPoints: [
    "The four parts move from everyday conversation to academic lecture, and the questions always follow the order of the audio.",
    "Use preparation time to predict the type of answer and to notice likely distractors.",
    "Listen for corrections, rejected ideas and changes of mind before you write.",
    "In note and form completion, spell carefully and keep to the word limit.",
    "After the test, analyse every mistake: vocabulary, speed, distractor or lost place?",
  ],
};

export default lesson;
