import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-practice-test-2",
  title: "Full listening practice test 2",
  summary:
    "A second complete four-part listening mock test with 40 questions: a phone call to a rowing club, a welcome talk at an outdoor centre, a three-way tutorial about a food-labelling study and a lecture on biomimicry, with full answer explanations.",
  skill: "listening",
  level: "C1",
  order: 12,
  minutes: 45,
  exams: [
    { exam: "ielts", task: "Mock test" },
    { exam: "ielts", task: "Listening Part 1" },
    { exam: "ielts", task: "Listening Part 2" },
    { exam: "ielts", task: "Listening Part 3" },
    { exam: "ielts", task: "Listening Part 4" },
    { exam: "toefl", task: "Listening – Academic Talk" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
    { exam: "toeic", task: "Listening Part 4 – Talks" },
  ],
  objectives: [
    "Complete a second full four-part listening test under exam-like conditions",
    "Apply the skills of this course: tracking three speakers, handling figures, fast note-taking, stance and academic vocabulary",
    "Compare your result with the first practice test and choose what to review next",
  ],
  warmUp: [
    "Since your first practice test, which listening skill do you feel has improved most? Which still worries you?",
    "What will you do differently in this test, for example in the 30 seconds before each part?",
  ],
  learn: [
    {
      type: "text",
      title: "How this test works",
      body: "Like the first practice test, this test follows the structure of IELTS Listening: four parts, ten questions each, 40 in total, getting harder as you go, with the questions in the same order as the audio. All the topics are new.\n\nThis time, the test also brings together the skills from the second half of the course:\n\n- **Part 1**: corrections and numbers, as in the lesson on statistics and trends\n- **Part 2**: a talk full of practical details, where some plans have changed\n- **Part 3**: three speakers, so you need to follow who agrees with whom\n- **Part 4**: a dense lecture with academic vocabulary, where fast notes help\n\nFor a realistic result:\n\n1. Play each recording **once only**, at normal speed.\n2. Spend about **30 seconds** reading the questions before each recording.\n3. Do not open a transcript until you have checked your answers.\n4. Keep to the word limits and check your spelling.\n5. Do all four parts in one sitting.",
    },
    {
      type: "table",
      title: "Test overview",
      headers: ["Part", "Situation", "Speakers", "Questions"],
      rows: [
        ["Part 1", "Joining a rowing club's beginners' course", "Two people, phone call", "1–10: form completion"],
        ["Part 2", "Welcome talk for summer staff at an outdoor centre", "One speaker", "11–15: multiple choice; 16–20: matching"],
        ["Part 3", "Discussing a study of calorie labels", "Two students and a tutor", "21–25: multiple choice; 26–30: matching"],
        ["Part 4", "Lecture on biomimicry", "One speaker", "31–40: note completion"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In matching tasks, read the box of options before you listen and shorten each one to a key idea (*shorten*, *by theme*, *add a chart*). The items come in the order of the recording, but the options do not, and some options are never used.",
    },
  ],
  model: [
    {
      type: "text",
      title: "Example: one item, three speakers",
      body: "Before Part 3, try this short example. The question is: *What do the students decide to do about their survey?*\n\n- A: send it out online\n- B: hand it out on paper\n- C: do both\n\nListen and decide before you read the walkthrough.",
    },
    {
      type: "audio",
      title: "Example recording",
      voice: "uk",
      transcript:
        "Tutor: So, how are you going to distribute the survey?\nAmira: I'd like to put it online. It's quicker, and we can reach more people.\nJoel: I'd rather hand out paper copies in the library. Online response rates are terrible.\nTutor: Could you do both, Joel?\nJoel: We could, but then we'd have two sets of data to combine.\nAmira: That's true. And to be honest, Joel's right about online response rates. Let's just go with paper.\nJoel: Great. I'll print them tomorrow.",
      cast: { Tutor: "female" },
    },
    {
      type: "text",
      title: "How a strong listener answers",
      body: "**Answer: B (paper).** All three options are mentioned, which is typical of Part 3. Online (A) is Amira's first idea, and doing both (C) is the tutor's suggestion. Joel objects to C, Amira then changes position (*Joel's right about online response rates*), and *Let's just go with paper* is the final decision.\n\nUse the same habits throughout the test: note who proposes each idea, wait for the final agreement, and move on as soon as a new item starts.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "Part 1: Questions 1–10",
      body: "You will hear a phone call between Nadia, who wants to learn to row, and Paul, who works at a rowing club. First, read the form. Then listen and complete it.",
    },
    {
      type: "audio",
      title: "Part 1: joining a rowing club",
      voice: "uk",
      transcript:
        "Paul: Good afternoon, Riverside Rowing Club, Paul speaking.\nNadia: Hi, Paul. My name's Nadia. I'm interested in learning to row. Is this the right number?\nPaul: It is. New members start with our beginners' course. Can I take a few details?\nNadia: Sure.\nPaul: What's your surname, Nadia?\nNadia: Lindqvist. That's L, I, N, D, Q, V, I, S, T.\nPaul: Thank you. And your date of birth? We need it for the insurance.\nNadia: The ninth of March, nineteen ninety-four.\nPaul: And the best number to contact you on?\nNadia: My mobile. It's oh seven seven oh oh, nine oh oh, four eight one.\nPaul: Oh seven seven oh oh, nine oh oh, four eight one. Have you done any rowing before?\nNadia: Only on a rowing machine at the gym. But I've done quite a lot of kayaking.\nPaul: That'll help with your balance. And can you swim? We ask everyone to be able to swim at least fifty metres.\nNadia: Yes, that's no problem.\nPaul: Good. Now, the next course starts on the sixth of May. Oh, sorry, I've just seen that one's full. The one after that starts on the twentieth of May.\nNadia: The twentieth is fine.\nPaul: It runs for six weeks, on Saturday mornings from eight until ten.\nNadia: Eight? That's early.\nPaul: The river's much quieter then. The course costs ninety-five pounds, and that includes your first month's membership. After that, it's thirty-two pounds a month.\nNadia: OK. What should I wear?\nPaul: Close-fitting sports clothes. Nothing loose, because it can get caught in the equipment. And bring a spare pair of socks, because your feet will almost certainly get wet.\nNadia: Is there anywhere to leave my things?\nPaul: There are lockers in the changing rooms, but you'll need to bring your own padlock.\nNadia: And where exactly is the club? I think I've seen a boathouse by the park.\nPaul: That one belongs to the university. We're on Mill Road, just past the bridge.\nNadia: Is there parking?\nPaul: Not at the club itself, I'm afraid. But the leisure centre next door lets our members park there for free on weekend mornings.\nNadia: Perfect. Thanks, Paul. I'll book online this evening.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "gap",
        title: "Questions 1–10: form completion",
        instructions: "Complete the form. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Riverside Rowing Club: beginners' course\n\nName: Nadia (1) {{0}}\nDate of birth: 9 March 1994\nMobile number: (2) {{1}}\nPrevious experience: (3) {{2}}\nSwimming: must be able to swim at least (4) {{3}} metres\nCourse start date: (5) {{4}} May\nTime: Saturdays, 8–10 am\nCourse fee: £(6) {{5}} (includes first month's membership)\nBring: a spare pair of (7) {{6}} and a (8) {{7}} for the locker\nClub address: (9) {{8}} Road\nParking: at the (10) {{9}} centre next door",
        answers: [
          ["Lindqvist"],
          ["07700 900481", "07700900481", "07700 900 481"],
          ["kayaking"],
          ["50", "fifty"],
          ["20", "20th", "twentieth"],
          ["95", "ninety-five", "ninety five"],
          ["socks"],
          ["padlock"],
          ["Mill"],
          ["leisure"],
        ],
      },
    },
    {
      type: "text",
      title: "Part 2: Questions 11–20",
      body: "You will hear Joanna Burke, the operations manager of an outdoor activity centre, welcoming new summer staff. First, read the questions.",
    },
    {
      type: "audio",
      title: "Part 2: welcome to Highfield Outdoor Centre",
      voice: "uk",
      transcript:
        "Good morning, everyone, and welcome to Highfield Outdoor Centre. My name's Joanna Burke, and I'm the operations manager. I'll start with some practical information about your first week, and then I'll tell you about the different parts of the site.\n\nFirst, your schedule. For the first three days, you won't be in charge of any groups. Instead, you'll be shadowing our experienced instructors, so you can see how sessions are run before you lead one yourselves. On Thursday there's a first-aid course. Some of you have told me your certificates are still valid, but I'm afraid it's compulsory for everyone, because it covers our own emergency procedures.\n\nMeals. Breakfast and dinner are served in the dining hall. At lunchtime, though, you'll be out on activities with your groups, so please collect a packed lunch from the kitchen by eight fifteen each morning.\n\nNow, phones. We don't ban them, but while you're supervising children, they must stay in your locker. Instead, every instructor carries a radio, and that's how you contact the office if there's a problem. The mobile signal across most of the site is very weak, so a phone is no use in an emergency anyway.\n\nYou'll each receive two T-shirts and a fleece. We had also ordered waterproof jackets for you, but the delivery has been delayed, so for this week, please wear your own.\n\nRight, the site itself. The Courtyard, just behind this building, is where everything starts. At nine o'clock every morning, groups meet their instructors there before setting off for the day's activities.\n\nDown the hill is the Lakeside, where we do kayaking and raft-building. Every single piece of equipment there, from paddles to life jackets, has to be signed out from the boat store and signed back in at the end of each session.\n\nThe Climbing Barn is one of the oldest buildings on the site. It has an indoor climbing wall, and when it's too wet or windy outside, that's where most sessions move to.\n\nThe Woodland Camp is where groups stay if they're spending a night under the trees. It's recently been doubled in size, with six new shelters, so we can now take two groups at once.\n\nAnd finally, the Old Stables. You won't be taking groups there at all. That's where all your training sessions this week will take place, including Thursday's first-aid course.\n\nRight, any questions before we go for a walk round?",
      cast: { narrator: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Questions 11–15: multiple choice",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "11. What will new staff do during their first three days?",
            options: [
              "lead small groups on simple activities",
              "watch experienced instructors at work",
              "complete their training in the office",
            ],
            answer: 1,
            explanation: "“You'll be shadowing our experienced instructors.” They “won't be in charge of any groups”.",
          },
          {
            prompt: "12. What does the speaker say about the first-aid course?",
            options: [
              "Staff with a valid certificate do not need to attend.",
              "Everyone must attend it.",
              "It will take place online.",
            ],
            answer: 1,
            explanation: "“It's compulsory for everyone, because it covers our own emergency procedures.”",
          },
          {
            prompt: "13. What must staff do about lunch?",
            options: [
              "eat it in the dining hall",
              "bring their own food",
              "collect it early in the morning",
            ],
            answer: 2,
            explanation: "“Please collect a packed lunch from the kitchen by eight fifteen each morning.” The dining hall is for breakfast and dinner.",
          },
          {
            prompt: "14. Why do instructors carry radios?",
            options: [
              "Mobile phones are not allowed on the site.",
              "Phones do not work well in most areas.",
              "Parents expect to be able to contact them.",
            ],
            answer: 1,
            explanation: "“The mobile signal across most of the site is very weak.” Phones are not banned: “We don't ban them.”",
          },
          {
            prompt: "15. What should staff do about waterproof jackets this week?",
            options: [
              "use their own",
              "collect them from the office",
              "share the ones in the store",
            ],
            answer: 0,
            explanation: "“The delivery has been delayed, so for this week, please wear your own.”",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Questions 16–20: matching",
        instructions: "What does the speaker say about each area of the centre? Choose the correct description for each area. There are two descriptions you do not need.",
        left: ["16. the Courtyard", "17. the Lakeside", "18. the Climbing Barn", "19. the Woodland Camp", "20. the Old Stables"],
        right: [
          "It has recently been made bigger.",
          "It is only open at weekends.",
          "Equipment must be signed out and back in.",
          "Groups gather here at the start of each day.",
          "Staff training takes place here.",
          "It is not suitable for wheelchair users.",
          "It is used when the weather is bad.",
        ],
        answer: [3, 2, 6, 0, 4],
      },
    },
    {
      type: "text",
      title: "Part 3: Questions 21–30",
      body: "You will hear two students, Ines and Callum, discussing a research project with their tutor, Dr Okoro. The project studied calorie labels in a university canteen. First, read the questions.",
    },
    {
      type: "audio",
      title: "Part 3: a study of calorie labels",
      voice: "uk",
      transcript:
        "Dr Okoro: So, Ines, Callum, you've got the data from the canteen. How did the calorie label study go?\nInes: Well, the canteen agreed to put calorie labels on all the main dishes for two weeks, and we compared what people chose with the two weeks before.\nCallum: And the headline result is that the average number of calories per meal went down, but only slightly. By about four per cent.\nDr Okoro: Four per cent. Were you disappointed, Callum?\nCallum: A bit. I'd expected something much bigger.\nInes: I wasn't, actually. Most of the studies we read found quite small effects. What surprised me was where the change came from. It wasn't people choosing salad instead of pasta. It was desserts. Far fewer people added one to their tray.\nDr Okoro: Interesting. Any idea why?\nCallum: My guess is that the dessert labels had the biggest numbers for the size of the portion. People saw five hundred calories next to a small slice of cake and thought twice.\nInes: That's a guess, though, Callum. We didn't actually ask anyone.\nDr Okoro: Ines is right to be cautious. You can include it as a possible explanation, but make it clear that it's speculation.\nCallum: Fair enough.\nDr Okoro: Now, one thing that worries me is the timing. When exactly did the labels go up?\nInes: In the first week of November.\nDr Okoro: And what was happening in the two weeks before that?\nCallum: Oh. That was reading week. Lots of students were away.\nDr Okoro: So the people eating in the canteen may not have been the same in the two periods.\nInes: We did think about that. The canteen gave us the till figures, and the number of meals sold was almost identical.\nDr Okoro: That's reassuring, but it doesn't tell you they were the same customers. Mention it as a limitation. Right, let's go through the report section by section. The introduction?\nCallum: It's quite long at the moment. About two pages on the history of food labelling.\nDr Okoro: Cut that right down. Half a page of background is plenty.\nInes: And the literature review? We've got eight studies, and we describe them one after another.\nDr Okoro: It's a good range of studies, but group them by theme, for example by type of food outlet, rather than going through them one by one.\nCallum: The methods section is basically finished.\nDr Okoro: It's clear, but there's nothing about the canteen itself. Add a short description of it: how many seats there are, what kinds of meals it serves, and so on.\nInes: What about the results? We've put all the till data into tables.\nDr Okoro: Tables are fine, but add one chart showing the change in desserts. It's your most striking result, so let the reader see it.\nCallum: And the discussion? We haven't started that yet.\nDr Okoro: Then I'd open it with the dessert finding, since it's the most unexpected thing you found, and deal with the limitations after that.\nInes: OK. That's really helpful. Thanks, Dr Okoro.",
      cast: { "Dr Okoro": "male" },
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
            prompt: "21. What was the main finding of the study?",
            options: [
              "Calories per meal fell by a small amount.",
              "Calories per meal stayed the same.",
              "Calories per meal fell much more than expected.",
            ],
            answer: 0,
            explanation: "“The average number of calories per meal went down, but only slightly. By about four per cent.” Callum had expected a much bigger change.",
          },
          {
            prompt: "22. Why was Ines not disappointed by the result?",
            options: [
              "Ines had expected people to ignore the labels.",
              "Earlier research had found similarly small effects.",
              "The canteen was pleased with the result.",
            ],
            answer: 1,
            explanation: "“Most of the studies we read found quite small effects.”",
          },
          {
            prompt: "23. What surprised Ines most?",
            options: [
              "More people chose salad than pasta.",
              "The labels affected main dishes more than desserts.",
              "Fewer people chose a dessert.",
            ],
            answer: 2,
            explanation: "“It wasn't people choosing salad instead of pasta. It was desserts. Far fewer people added one.”",
          },
          {
            prompt: "24. What does the tutor say about Callum's explanation for the change?",
            options: [
              "It should be removed from the report.",
              "It can be included if it is presented as speculation.",
              "It should be tested by interviewing customers.",
            ],
            answer: 1,
            explanation: "“You can include it as a possible explanation, but make it clear that it's speculation.” Ines and the tutor agree that it is only a guess.",
          },
          {
            prompt: "25. Why is the tutor concerned about the timing of the study?",
            options: [
              "The customers in the two periods may have been different.",
              "The canteen sold fewer meals in November.",
              "Two weeks is too short to show an effect.",
            ],
            answer: 0,
            explanation: "The comparison period was reading week, so “the people eating in the canteen may not have been the same”. The number of meals sold was “almost identical”.",
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
        instructions: "What does the tutor advise the students to do with each section of their report? Choose the correct advice for each section. There are two pieces of advice you do not need.",
        left: ["26. the introduction", "27. the literature review", "28. the methods section", "29. the results section", "30. the discussion"],
        right: [
          "start with the most unexpected finding",
          "move it to an appendix",
          "make it much shorter",
          "add a visual presentation of one result",
          "organise it by topic",
          "add more detail about the setting",
          "remove it completely",
        ],
        answer: [2, 4, 5, 3, 0],
      },
    },
    {
      type: "text",
      title: "Part 4: Questions 31–40",
      body: "You will hear part of a lecture about biomimicry. First, read the notes. There is no break in this part.",
    },
    {
      type: "audio",
      title: "Part 4: biomimicry",
      voice: "uk",
      transcript:
        "Good morning. Today's lecture is about biomimicry: the practice of solving human design problems by learning from nature. I'll begin with what the term means, then look at three well-known examples, and finish with some of the limitations of the approach.\n\nThe word itself combines the Greek words for life and imitation. But biomimicry isn't simply a matter of copying the shape of a plant or an animal. The idea is to understand the principle behind a natural solution, the reason it works, and then apply that principle to a human problem. Living things have been refined over millions of years of evolution, so in a sense they represent solutions that have already been tested.\n\nOur first example is one of the oldest. In the nineteen-forties, a Swiss engineer called George de Mestral came back from a walk and noticed burrs, the seed cases of a plant, stuck in his dog's fur. Under a microscope, he saw that each burr was covered in tiny hooks, which caught on anything with loops, such as hair or fabric. That observation eventually led to the hook-and-loop fastener we now know as Velcro.\n\nThe second example comes from transport. Japan's high-speed trains had a problem. When they entered a tunnel at speed, they pushed a wave of air ahead of them, which produced a loud bang as the train came out at the other end. One of the engineers, who was also a keen birdwatcher, noticed that the kingfisher dives into water with hardly a splash, thanks to its long, narrow beak. A new nose for the train, based on the shape of that beak, made the trains much quieter, and they also used less electricity.\n\nMy third example is a building. The Eastgate Centre in Harare, in Zimbabwe, was designed to stay cool without conventional air conditioning. The architect took inspiration from termite mounds, which were thought to keep a stable temperature by drawing air through a network of channels. The building uses a similar system of vents and chimneys, and it consumes much less energy than a conventional building of a similar size.\n\nNow, the limitations. The first is that nature's solutions don't always scale up. A structure that works at the size of an insect may behave quite differently at the size of an office block. Secondly, our understanding of the natural model may be incomplete. Ironically, more recent research suggests that termite mounds work rather differently from the way the architects assumed, although the building itself still performs well. And thirdly, there's the question of materials. Nature builds at normal temperatures, using water-based chemistry, whereas much of our manufacturing depends on high heat and toxic substances. So imitating the form of a natural object is one thing; imitating the way it was made is far harder.\n\nTo sum up, biomimicry can be a powerful source of ideas, but it works best when designers understand the principle, not just the appearance.",
      cast: { narrator: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "gap",
        title: "Questions 31–40: note completion",
        instructions: "Complete the notes. Write ONE WORD ONLY for each answer.",
        text: "Biomimicry\n\nDefinition\n- from the Greek words for life and (31) {{0}}\n- aim: understand the (32) {{1}} behind a natural solution, not just copy its shape\n- living things refined by millions of years of (33) {{2}}\n\nExample 1: Velcro\n- burrs stuck in a dog's (34) {{3}}\n- each burr covered in tiny (35) {{4}}\n\nExample 2: high-speed trains\n- problem: a loud (36) {{5}} when leaving a tunnel\n- new nose based on the beak of the (37) {{6}}\n- trains became quieter and used less (38) {{7}}\n\nExample 3: the Eastgate Centre, Harare\n- inspired by termite (39) {{8}}\n- vents and chimneys instead of air conditioning\n\nLimitations\n- solutions do not always scale up\n- understanding of the natural model may be incomplete\n- (40) {{9}}: nature builds at normal temperatures, without toxic substances",
        answers: [
          ["imitation"],
          ["principle"],
          ["evolution"],
          ["fur"],
          ["hooks"],
          ["bang"],
          ["kingfisher"],
          ["electricity"],
          ["mounds"],
          ["materials"],
        ],
      },
    },
    {
      type: "text",
      title: "Check your score",
      body: "Count your correct answers out of 40 and compare them with your score on the first practice test. This test has not been trialled like a real exam, so treat the ranges below as a rough guide, not an IELTS band score.\n\n- **35–40**: excellent, a strong C1 performance.\n- **27–34**: good, around B2+ to C1. Find the part where you lost most marks and revisit the lesson that practises that part.\n- **19–26**: solid B2. Review note-taking at speed, statistics and multi-speaker discussions.\n- **0–18**: work through the B2 listening lessons before trying another full test.\n\nThen look at each answer you missed in the transcript and decide why: *a correction I didn't wait for*, *the wrong speaker*, *the wrong figure*, *a word I didn't know*, or *I lost my place*. Your most common reason tells you which lesson to review.",
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Part 2 talks often mention plans that have changed (*We had also ordered waterproof jackets… but the delivery has been delayed*). The question usually tests the new arrangement, so do not choose an option just because you heard its words.",
    },
    {
      exam: "ielts",
      body: "In Part 3, a tutor's advice is often the answer to matching questions, and it usually comes after a student describes the current situation (*It's quite long at the moment*). Wait for the tutor's reaction before you choose.",
    },
    {
      exam: "toefl",
      body: "Part 4 of this test is longer than a TOEFL Academic Talk, but you can use it as practice: cover the notes, take your own notes while listening, and then check whether you could answer questions about the main idea, the purpose of each example and the lecturer's view of the limitations.",
    },
    {
      exam: "toeic",
      body: "Part 3 of this test is good practice for TOEIC conversations with three speakers, and Part 2 for TOEIC talks. In TOEIC you read the three questions for each conversation or talk before you listen, so practise reading questions quickly and predicting what you need to hear.",
    },
  ],
  vocabulary: [
    { word: "close-fitting", meaning: "(of clothes) fitting tightly to the body", example: "Wear close-fitting clothes so nothing gets caught in the equipment.", topic: "everyday" },
    { word: "shadow", meaning: "to follow and watch someone at work in order to learn their job", example: "New staff shadow experienced instructors for three days.", topic: "work" },
    { word: "compulsory", meaning: "required by a rule; you must do it", example: "The first-aid course is compulsory for everyone.", topic: "work" },
    { word: "sign out", meaning: "to record that you have taken something, such as equipment", example: "All paddles must be signed out from the boat store.", topic: "work" },
    { word: "speculation", meaning: "ideas or guesses about something without firm evidence", example: "The reason for the change is only speculation.", topic: "academic" },
    { word: "limitation", meaning: "a weakness that reduces how far results can be trusted", example: "Mention the timing as a limitation of the study.", topic: "academic" },
    { word: "striking", meaning: "very noticeable or unusual", example: "The fall in desserts was the most striking result.", topic: "academic" },
    { word: "refine", meaning: "to improve something by making small changes", example: "Living things have been refined by evolution.", topic: "science" },
    { word: "imitate", meaning: "to copy the way something looks, works or behaves", example: "Imitating a natural shape is easier than imitating how it was made.", topic: "science" },
    { word: "scale up", meaning: "to make something work at a larger size", example: "Solutions that work for insects don't always scale up.", topic: "science" },
    { word: "vent", meaning: "an opening that lets air in or out", example: "The building is cooled through vents and chimneys.", topic: "science" },
  ],
  keyPoints: [
    "The four parts move from everyday conversation to academic lecture, and the answers always follow the order of the recording.",
    "In Parts 1 and 2, wait for corrections and changed plans before you write.",
    "In Part 3, track each speaker and wait for the final decision or the tutor's advice.",
    "In Part 4, use the note headings to keep your place and spell academic words carefully.",
    "Compare your two practice tests to see which skill has improved and which lesson to review next.",
  ],
};

export default lesson;
