import type { PracticeSet } from "@/lib/types";

/*
 * Timed practice sets: one per exam and skill (12 in total).
 * All passages, scripts, questions and model answers are original and written at about B2 level.
 * They copy the task types and timing of the real exams, not any official test material.
 */

/* ------------------------------------------------------------------ IELTS */

const ieltsListening: PracticeSet = {
  id: "ielts-listening-1",
  exam: "ielts",
  skill: "listening",
  title: "IELTS Listening practice: Parts 1, 2 and 4",
  description:
    "Three recordings in the style of IELTS Listening: a phone call with form completion, a talk with multiple choice and matching, and a short lecture with note completion. Play each recording once only, as in the real test.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "How to do this practice",
      body: "There are three recordings and 15 questions. In the real test you hear each recording **once**, so try not to replay it.\n\n- Read the questions for each part before you press play.\n- Answers come in the same order as the recording.\n- Check the word limit. Spelling counts.",
    },
    {
      type: "text",
      title: "Part 1: Questions 1–5",
      body: "You will hear a woman calling a kayak club about a beginners' course.",
    },
    {
      type: "audio",
      title: "Part 1: Booking a kayak course",
      voice: "uk",
      cast: { Receptionist: "male" },
      transcript:
        "Receptionist: Good morning, Harbourside Kayak Club. How can I help you?\nWoman: Hi. I'm calling about the beginners' course I saw on your website.\nReceptionist: Of course. It's a six-week course for people who have never paddled before. Can I take a few details first?\nWoman: Sure.\nReceptionist: What's your name, please?\nWoman: Sophie Marston.\nReceptionist: Could you spell your surname for me?\nWoman: Yes, it's M, A, R, S, T, O, N.\nReceptionist: Thank you. Now, we have two courses this summer. One starts on the fourth of June and the other on the eighteenth.\nWoman: I'm away for the first week of June, so the later one, please.\nReceptionist: The eighteenth, then. The sessions used to be on Thursday evenings, but this year they've moved to Wednesdays, from six thirty to eight.\nWoman: Wednesday is fine. And how much does the course cost?\nReceptionist: Last year it was one hundred and ten pounds, but we've reduced it to ninety-five pounds this year. That includes all the equipment.\nWoman: So I don't need to bring anything?\nReceptionist: We provide the kayak, the paddle and a life jacket. You just need to bring a towel and a water bottle. Please leave your phone in the changing room, though.\nWoman: OK. And where should I go on the first evening?\nReceptionist: Come to the boathouse. It's the blue building next to the car park.\nWoman: Great. Thanks very much.",
    },
    {
      type: "exercise",
      exercise: {
        id: "q1-5",
        kind: "gap",
        title: "Questions 1–5",
        instructions: "Complete the form. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        text: "HARBOURSIDE KAYAK CLUB: Beginners' course\n\nName: Sophie {{0}}\nCourse starts: {{1}} June\nDay: {{2}} evenings, 6.30 to 8 pm\nCost: £{{3}}\nBring: a towel and a {{4}}",
        answers: [
          ["Marston"],
          ["18", "18th", "eighteenth", "the 18th", "the eighteenth"],
          ["Wednesday", "Wednesdays"],
          ["95", "£95", "95.00", "ninety-five", "ninety five"],
          ["water bottle"],
        ],
      },
    },
    {
      type: "text",
      title: "Part 2: Questions 6–10",
      body: "You will hear a volunteer coordinator welcoming new volunteers to a community garden.",
    },
    {
      type: "audio",
      title: "Part 2: Welcome to Millbrook Community Garden",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Good morning, everyone, and welcome to Millbrook Community Garden. My name's Marcus, and I coordinate the volunteers here. Before you start, I'd like to give you a quick overview of how the garden works.\n\nThe garden opened eight years ago on land that used to be a car park. We now have about a hundred and twenty volunteers on our list, so numbers aren't really a problem. What we're short of is people who can commit to a regular weekly slot, because the plants need care every few days, especially in summer. Money is less of a worry these days, too, thanks to a grant from the city council.\n\nNow, let me tell you about the different areas. The vegetable beds are near the main gate. Volunteers there do most of the planting and weeding, and it's the best place to start if you've never done any gardening before.\n\nNext to the vegetable beds is the greenhouse. We grow seedlings there in early spring, and this year we're also trying out a new automatic watering system, so please don't change any of the settings.\n\nBehind the greenhouse you'll find the orchard. The fruit trees don't need much attention for most of the year, but in September we need lots of extra hands for picking.\n\nFinally, there's the pond. Because it's quite deep in places, the pond area is closed unless a trained member of staff is with you.\n\nRight, are there any questions before we go outside?",
    },
    {
      type: "exercise",
      exercise: {
        id: "q6",
        kind: "mcq",
        title: "Question 6",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "What does Marcus say the garden is short of?",
            options: ["volunteers in general", "money from the council", "volunteers who can come every week"],
            answer: 2,
            explanation:
              "He says numbers “aren't really a problem” and money is “less of a worry”. What they are short of is “people who can commit to a regular weekly slot”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "q7-10",
        kind: "match",
        title: "Questions 7–10",
        instructions:
          "What does Marcus say about each area of the garden? Choose FOUR answers from the list. There are two extra options you do not need.",
        left: ["Vegetable beds", "Greenhouse", "Orchard", "Pond"],
        right: [
          "has recently been made bigger",
          "can only be visited with a member of staff",
          "is suitable for people with no experience",
          "is closed during the winter",
          "needs the most help at one time of year",
          "is being used to test new equipment",
        ],
        answer: [2, 5, 4, 1],
      },
    },
    {
      type: "text",
      title: "Part 4: Questions 11–15",
      body: "You will hear part of a lecture about temperatures in cities.",
    },
    {
      type: "audio",
      title: "Part 4: The urban heat island effect",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Today I'd like to look at a problem that affects almost every large city: the urban heat island effect. Put simply, cities are often several degrees warmer than the countryside around them, and the difference is usually greatest at night rather than during the day.\n\nWhy does this happen? The first reason is the materials we build with. Concrete and asphalt absorb heat from the sun during the day and then release it slowly after dark, which keeps the air warm. The second reason is the lack of vegetation. Trees and other plants release water through their leaves, and this cools the air around them. In a city centre, there are simply fewer plants to do this. A third factor is the heat produced by traffic and by air-conditioning units.\n\nSo what can cities do? One of the cheapest solutions is to paint roofs white or another light colour, so that they reflect sunlight instead of absorbing it. A second option is the green roof, which is a roof covered with plants. Green roofs cost more to install, but they have an extra benefit: they hold rainwater, which helps to reduce flooding after heavy storms. Finally, planting trees along streets is probably the most effective long-term measure, although it can take fifteen to twenty years before a young tree provides much shade.",
    },
    {
      type: "exercise",
      exercise: {
        id: "q11-15",
        kind: "gap",
        title: "Questions 11–15",
        instructions: "Complete the notes. Write ONE WORD ONLY for each answer.",
        text: "The urban heat island effect\n\nCauses\n- Cities are warmer than the countryside, especially at {{0}}.\n- Concrete and asphalt release heat {{1}} after dark.\n- Plants cool the air by releasing {{2}} through their leaves.\n\nSolutions\n- Light-coloured roofs {{3}} sunlight.\n- Green roofs are expensive but also help to reduce {{4}}.\n- Street trees may take 15 to 20 years to give much shade.",
        answers: [["night"], ["slowly"], ["water"], ["reflect"], ["flooding", "floods"]],
      },
    },
  ],
};

const ieltsReading: PracticeSet = {
  id: "ielts-reading-1",
  exam: "ielts",
  skill: "reading",
  title: "IELTS Reading practice: Bees in the city",
  description:
    "One passage with 14 questions in three common IELTS task types: matching headings, True/False/Not Given and summary completion. In the real test you have about 20 minutes for each passage.",
  minutes: 20,
  sections: [
    {
      type: "passage",
      title: "Bees in the city",
      labelled: true,
      timerMinutes: 20,
      paragraphs: [
        "Twenty years ago, few people would have expected to find beehives on the roofs of office blocks, hotels and libraries. Today, however, urban beekeeping has become a familiar sight in many large cities. Supporters see it as a simple way for city dwellers to reconnect with nature and to help pollinating insects, whose numbers have fallen in many parts of the world.",
        "The appeal of city beekeeping is partly practical. Urban areas are often surprisingly rich in flowers: parks, private gardens, roadside verges and balconies offer a wide variety of plants that bloom at different times of the year. In contrast, much modern farmland is planted with a single crop, which provides food for bees for only a few weeks. As a result, some beekeepers report that their city hives produce more honey than hives kept in the countryside.",
        "Businesses have been quick to see the benefits. A hive on the roof is an attractive symbol of environmental responsibility, and some companies now pay specialist firms to install and manage hives on their behalf. Employees may be invited to help with the honey harvest, and the honey itself is often given to clients as a gift.",
        "Not everyone is enthusiastic, however. Ecologists point out that the honeybee is only one of many bee species, and that it is not the species most in need of protection. Wild bees, most of which live alone rather than in colonies, depend on the same flowers as honeybees. When too many hives are placed in a small area, honeybees may take most of the available nectar and pollen, leaving less for wild species. In other words, a practice intended to help nature could, in some places, do the opposite.",
        "There are also concerns about the health of the bees themselves. Diseases spread more easily when colonies are kept close together, and new beekeepers may not recognise the early signs of infection. For this reason, beekeeping associations in several cities now recommend that beginners complete a training course and register their hives before they start.",
        "So what is the best way for city residents to help bees? Many experts argue that planting is more useful than keeping hives. Window boxes and gardens filled with a variety of flowering plants, including native species, provide food for both honeybees and wild bees. Leaving small areas of grass uncut and avoiding chemical pesticides can also make a significant difference. As one researcher put it, “If you want to help bees, start with flowers, not with a hive.”",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "q1-4",
        kind: "match",
        title: "Questions 1–4",
        instructions:
          "The passage has six paragraphs, A–F. Choose the correct heading for paragraphs B–E from the list of headings, i–vi. There are two extra headings you do not need.",
        labels: "roman",
        left: ["Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"],
        right: [
          "Companies see an advantage",
          "Bees competing for food",
          "Why towns can suit bees",
          "The risk of spreading infection",
          "The history of beekeeping in cities",
          "New laws that ban rooftop hives",
        ],
        answer: [2, 0, 1, 3],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "q5-10",
        kind: "tfng",
        title: "Questions 5–10",
        instructions: "Do the following statements agree with the information in the passage? Choose True, False or Not Given.",
        statements: [
          {
            text: "Urban beekeeping was already common twenty years ago.",
            answer: "F",
            explanation: "Paragraph A: twenty years ago “few people would have expected” to find hives in cities, but today it is “a familiar sight”.",
          },
          {
            text: "Farmland planted with one crop feeds bees for only a short period.",
            answer: "T",
            explanation: "Paragraph B: a single crop “provides food for bees for only a few weeks”.",
          },
          {
            text: "Honey from city hives tastes better than honey from country hives.",
            answer: "NG",
            explanation: "Paragraph B compares the amount of honey, not the taste.",
          },
          {
            text: "Some companies pay other businesses to look after their hives.",
            answer: "T",
            explanation: "Paragraph C: companies “pay specialist firms to install and manage hives on their behalf”.",
          },
          {
            text: "Most wild bees live in colonies.",
            answer: "F",
            explanation: "Paragraph D: wild bees, “most of which live alone rather than in colonies”.",
          },
          {
            text: "Beekeeping training courses in cities are usually free.",
            answer: "NG",
            explanation: "Paragraph E recommends training courses but says nothing about their cost.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "q11-14",
        kind: "gap",
        title: "Questions 11–14",
        instructions: "Complete the summary of paragraph F. Choose ONE WORD ONLY from the passage for each answer.",
        text: "Many experts believe that {{0}} is a better way to help bees than keeping hives. City residents can fill window boxes and gardens with different flowering plants, including {{1}} species. They can also leave small areas of grass {{2}} and avoid using chemical {{3}}.",
        answers: [["planting"], ["native"], ["uncut"], ["pesticides"]],
      },
    },
  ],
};

const ieltsWriting: PracticeSet = {
  id: "ielts-writing-1",
  exam: "ielts",
  skill: "writing",
  title: "IELTS Writing practice: Task 1 (Academic) and Task 2",
  description:
    "A full 60-minute IELTS Academic Writing test: describe a line graph in at least 150 words, then write an opinion essay of at least 250 words. General Training candidates write a letter for Task 1 instead.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Writing Task 1",
      body: "You should spend about **20 minutes** on this task.\n\nThe graph below shows the number of visitors to three museums in one city between 2015 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
    },
    {
      type: "chart",
      chart: {
        kind: "line",
        title: "Visitors to three city museums, 2015–2025",
        unit: "thousands",
        categories: ["2015", "2017", "2019", "2021", "2023", "2025"],
        series: [
          { name: "Science Museum", values: [420, 460, 510, 300, 480, 560] },
          { name: "History Museum", values: [380, 370, 350, 210, 290, 310] },
          { name: "Art Gallery", values: [150, 190, 260, 180, 330, 410] },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "task1",
        kind: "write",
        title: "Task 1",
        prompt:
          "The graph shows the number of visitors to three museums in one city between 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        minWords: 150,
        minutes: 20,
        rubric: [
          "Task achievement: I wrote a clear overview of the main trends (the most popular museum, the fastest growth, the fall in 2021).",
          "I chose key figures and compared them instead of listing every number.",
          "Coherence and cohesion: my paragraphs are logical (for example one per museum) and I used linking words accurately.",
          "Lexical resource: I used a range of trend vocabulary (rose steadily, fell sharply, recovered, overtook) correctly.",
          "Grammar: I used past tenses correctly and a mix of simple and complex sentences.",
          "I wrote at least 150 words and did not give opinions or reasons that the graph does not show.",
        ],
        modelAnswer:
          "The line graph shows how many people visited three museums in one city between 2015 and 2025, measured in thousands.\n\nOverall, the science museum attracted the most visitors throughout the period, while the art gallery grew the fastest. All three museums saw a sharp fall in 2021, but only the history museum failed to return to its earlier level.\n\nIn 2015, the science museum welcomed 420,000 visitors, and this figure rose steadily to 510,000 in 2019. After dropping to 300,000 in 2021, it recovered quickly and reached a peak of 560,000 in 2025.\n\nThe history museum started at a similar level, with 380,000 visitors, but its numbers declined gradually to 350,000 by 2019 and then fell to just 210,000 in 2021. Although attendance improved afterwards, it was still only 310,000 in 2025.\n\nThe art gallery was the least popular museum in 2015, with 150,000 visitors. However, its figures increased to 260,000 in 2019 and, after a temporary fall to 180,000, climbed to 410,000 by 2025, overtaking the history museum in 2023.",
      },
    },
    {
      type: "text",
      title: "Writing Task 2",
      body: "You should spend about **40 minutes** on this task. Task 2 is worth twice as much as Task 1.\n\nWrite about the following topic:\n\n*Some people think that governments should spend more money on public transport than on building new roads.*\n\n*To what extent do you agree or disagree?*\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    },
    {
      type: "exercise",
      exercise: {
        id: "task2",
        kind: "write",
        title: "Task 2",
        prompt:
          "Some people think that governments should spend more money on public transport than on building new roads. To what extent do you agree or disagree?",
        minWords: 250,
        minutes: 40,
        rubric: [
          "Task response: I gave a clear position in the introduction and kept the same position to the end.",
          "Each body paragraph has one main idea, supported with explanation and an example.",
          "I considered the other side of the argument and explained why my view is stronger.",
          "Coherence and cohesion: I used paragraphs and a range of linking words (as a result, by contrast, on the other hand) naturally.",
          "Lexical resource: I used topic vocabulary accurately (congestion, emissions, infrastructure) and avoided repeating the same words.",
          "Grammar: I used complex sentences (relative clauses, conditionals) with few errors, and wrote at least 250 words.",
        ],
        modelAnswer:
          "In many growing cities, traffic congestion is getting worse every year, and governments must decide how to spend limited transport budgets. I largely agree that public transport should receive more investment than new roads, although some road building is still necessary.\n\nThe main argument for public transport is that it uses space far more efficiently. A single bus can carry fifty people in the road space taken up by two or three cars, and an underground line can move huge numbers of passengers without using any road space at all. New roads, by contrast, often fill up with traffic within a few years, because better roads encourage more people to drive. As a result, money spent on roads may only reduce congestion for a short time.\n\nPublic transport also brings wider benefits. When more people travel by train or bus, air pollution and carbon emissions fall, which improves public health. Good public transport also helps people who cannot drive, such as teenagers, many elderly people and those who cannot afford a car, to reach jobs, schools and hospitals.\n\nOn the other hand, it would be unrealistic to stop building roads completely. In rural areas, where there are too few passengers to make frequent bus or train services possible, people depend on cars, and goods still need to be delivered by lorry. Roads are also used by buses, ambulances and cyclists.\n\nIn conclusion, I believe that governments should give priority to public transport, because it moves more people more cleanly and more fairly. However, a smaller share of the budget should still go to maintaining roads and building new ones where there is no practical alternative.",
      },
    },
  ],
};

const ieltsSpeaking: PracticeSet = {
  id: "ielts-speaking-1",
  exam: "ielts",
  skill: "speaking",
  title: "IELTS Speaking practice: Parts 1, 2 and 3",
  description:
    "A complete IELTS-style speaking test: two Part 1 questions about where you live, a Part 2 cue card with 1 minute to prepare and 2 minutes to speak, and two Part 3 discussion questions.",
  minutes: 14,
  sections: [
    {
      type: "text",
      title: "Part 1: Introduction and interview",
      body: "The examiner asks questions about familiar topics. Give a direct answer, then add a reason or an example. Aim for two to four sentences.",
    },
    {
      type: "exercise",
      exercise: {
        id: "part1-q1",
        kind: "speak",
        title: "Part 1, question 1",
        prompt: "Let's talk about where you live. Do you like the area where you live? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Yes, I do, mostly because it's really convenient. I live about ten minutes from the city centre, so I can walk to work, and there's a big park just across the road where I go running at the weekend. The only downside is that it can get quite noisy at night.",
        checklist: [
          "I answered the question directly in the first sentence.",
          "I gave at least one reason and one detail.",
          "I spoke for about 20–30 seconds without long pauses.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "part1-q2",
        kind: "speak",
        title: "Part 1, question 2",
        prompt: "How has your neighbourhood changed in recent years?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Quite a lot, actually. There used to be mainly small family shops, but these days several of them have become cafés. Compared with ten years ago, it's much livelier, but rents have gone up, so some of the older residents have moved away.",
        targetPhrases: ["used to", "has become", "these days", "compared with"],
        checklist: [
          "I used the present perfect or 'used to' to talk about change.",
          "I compared the past and the present.",
          "My answer was natural, not memorised.",
        ],
      },
    },
    {
      type: "text",
      title: "Part 2: Long turn",
      body: "Read the task card. You have **1 minute** to prepare and make notes, then speak for **up to 2 minutes**. Try to cover all the points and keep talking until the time ends.",
    },
    {
      type: "exercise",
      exercise: {
        id: "part2",
        kind: "speak",
        title: "Part 2: Cue card",
        prompt: "Describe a skill you learned outside school or university.",
        cueCard: [
          "what the skill is",
          "how and when you learned it",
          "who helped you learn it",
          "and explain why this skill is useful to you",
        ],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "I'd like to talk about learning to cook, which is something I never studied at school but which I now use every single day.\n\nI started learning about four years ago, when I moved out of my parents' house to go to university. Before that, my mum did almost all the cooking, and to be honest, I could barely boil an egg. For the first few weeks I lived on instant noodles and sandwiches, and I soon realised that this was expensive and pretty unhealthy.\n\nSo I decided to teach myself. At first I mainly used online videos. I'd choose a simple recipe, like a vegetable curry or a pasta dish, and follow it step by step, pausing the video every few seconds. Later on, my flatmate, who's a really good cook, started showing me some basic techniques, such as how to chop onions properly and how to tell when chicken is cooked. She was very patient, even when I burnt things, which happened quite often at the beginning!\n\nThe reason this skill is so useful is that it affects so many parts of my life. Firstly, I save a lot of money, because cooking at home costs far less than eating out. Secondly, I eat much more healthily now. And finally, cooking has become a way of relaxing after a long day and of spending time with friends, because we often take turns making dinner for each other. So, all in all, it's probably the most valuable thing I've ever learned outside a classroom.",
        targetPhrases: ["I'd like to talk about", "At first", "Later on", "The reason this skill is so useful is", "All in all"],
        checklist: [
          "I covered all four points on the card.",
          "I spoke for close to 2 minutes.",
          "I used past tenses accurately to tell the story.",
          "I used linking words to move between points (at first, later, firstly, finally).",
          "I explained why the skill is useful with real examples.",
        ],
      },
    },
    {
      type: "text",
      title: "Part 3: Discussion",
      body: "The examiner asks more general and abstract questions linked to the Part 2 topic. Give an opinion, explain it, and consider another point of view. Aim for 45–60 seconds.",
    },
    {
      type: "exercise",
      exercise: {
        id: "part3-q1",
        kind: "speak",
        title: "Part 3, question 1",
        prompt: "Why do some adults find it difficult to learn new skills?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I think there are a few reasons. The most obvious reason is time: once people have full-time jobs and families, it's hard to find even an hour a week for something new. But I'd say there's also a psychological factor. Adults are used to being competent, so being a beginner again can feel quite embarrassing, and some people would rather avoid that feeling altogether. Having said that, I don't think age itself is the main problem. Plenty of older people pick up instruments or languages successfully when they're genuinely motivated.",
        targetPhrases: ["The most obvious reason is", "I'd say", "Having said that", "genuinely"],
        checklist: [
          "I gave more than one reason.",
          "I developed each reason with an explanation.",
          "I showed a balanced view (having said that, on the other hand).",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "part3-q2",
        kind: "speak",
        title: "Part 3, question 2",
        prompt: "Do you think schools today teach enough practical skills, such as how to manage money? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "On the whole, I'd say they don't, at least not in my country. Schools tend to focus on exams in academic subjects, which is understandable, but it means many young people leave school without knowing how to make a budget or understand a bank loan. That can lead to serious problems later on. Ideally, I think schools should include short, practical courses in things like personal finance and basic cooking, perhaps in the last two years, when students are about to become independent. It wouldn't need to take much time away from other subjects.",
        targetPhrases: ["On the whole", "which is understandable", "Ideally", "That can lead to"],
        checklist: [
          "I gave a clear opinion at the start.",
          "I explained the consequences of the problem.",
          "I suggested a realistic solution.",
        ],
      },
    },
  ],
};

/* ------------------------------------------------------------------ TOEFL */

const toeflListening: PracticeSet = {
  id: "toefl-listening-1",
  exam: "toefl",
  skill: "listening",
  title: "TOEFL Listening practice: all four task types",
  description:
    "Practise each task in the new TOEFL iBT Listening section: Listen and Choose a Response, a campus conversation, a class announcement and an academic talk. 13 questions in total.",
  minutes: 12,
  sections: [
    {
      type: "text",
      title: "How to do this practice",
      body: "In the real test you hear each recording **once** and you can take notes. The questions are only shown after the audio, so listen for the main idea, key details and what the speakers will do next.",
    },
    {
      type: "exercise",
      exercise: {
        id: "respond",
        kind: "respond",
        title: "Listen and Choose a Response",
        instructions: "Listen to each question or statement. Choose the best response.",
        items: [
          {
            audio: "Do you know if the library is open late tonight?",
            options: [
              "I think it closes at ten on weekdays.",
              "Yes, I read that book last semester.",
              "It's on the second floor.",
              "No, I've never been there in the morning.",
            ],
            answer: 0,
            explanation: "The speaker asks about opening hours, and only the first reply gives a closing time.",
          },
          {
            audio: "Why don't we meet before class to go over the slides?",
            options: [
              "Because the slides were too long.",
              "Over there, next to the window.",
              "Good idea. How about eight thirty?",
              "The class was cancelled last week.",
            ],
            answer: 2,
            explanation: "“Why don't we…?” is a suggestion, not a real why-question, so the best reply accepts it.",
          },
          {
            audio: "I can't believe the bookstore has already sold out of the chemistry textbook.",
            options: [
              "Chemistry is my favourite subject too.",
              "You could check whether the library has a copy.",
              "Then I'll buy two of them.",
              "The bookstore opens at nine.",
            ],
            answer: 1,
            explanation: "The speaker has a problem (no textbook), and the reply offers a solution.",
          },
          {
            audio: "Who's leading the study group this week?",
            options: ["Every Thursday afternoon.", "In room two-oh-four.", "We're studying for the history exam.", "Priya offered to do it."],
            answer: 3,
            explanation: "A who-question needs a person.",
          },
          {
            audio: "You've already sent in your scholarship application, haven't you?",
            options: [
              "Not yet. I'm still waiting for one reference letter.",
              "Yes, please send it to me.",
              "The scholarship is for science students.",
              "I'll apply for a different job.",
            ],
            answer: 0,
            explanation: "The tag question checks a fact, and the reply says it has not happened yet and why.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Listen to a Conversation",
      voice: "us",
      cast: { Student: "female", Manager: "male" },
      transcript:
        "Student: Hi, I'm here about the part-time job at the campus café. I saw the sign in the window.\nManager: Oh, great. We need someone for the morning shift, from seven to eleven, three days a week.\nStudent: Hmm. I have classes on Monday and Wednesday mornings, so those days might be difficult.\nManager: What about the other days?\nStudent: On Tuesdays and Thursdays I'm free until two, and on Fridays I don't have any classes at all.\nManager: Well, one of our current staff can only work on Mondays and Wednesdays, so if you can do Tuesday, Thursday and Friday, that would work for us.\nStudent: That would be perfect. Do I need any experience?\nManager: Not really. Everyone does a two-hour training session before they start. Just fill in this form and bring it back with a copy of your class schedule.",
    },
    {
      type: "exercise",
      exercise: {
        id: "conversation",
        kind: "mcq",
        title: "Conversation questions",
        questions: [
          {
            prompt: "Why does the student go to the café?",
            options: ["To ask about a job", "To complain about the service", "To order breakfast", "To meet a friend who works there"],
            answer: 0,
            explanation: "The student says, “I'm here about the part-time job.”",
          },
          {
            prompt: "What will the student probably do next?",
            options: [
              "Attend a training session immediately",
              "Change the class schedule",
              "Complete a form and return it with her schedule",
              "Work on Monday and Wednesday mornings",
            ],
            answer: 2,
            explanation: "The manager asks her to “fill in this form and bring it back with a copy of your class schedule”.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Listen to an Announcement",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Good morning, everyone. Before we start, there's a change to next week's schedule. Because the science building will be closed on Tuesday for electrical repairs, our lab session will take place on Thursday instead, at the usual time. Please note that this week's lab reports are still due on Monday. If you can't come on Thursday because of another class, send me an email by Friday, and I'll find you a place in another group.",
    },
    {
      type: "exercise",
      exercise: {
        id: "announcement",
        kind: "mcq",
        title: "Announcement questions",
        questions: [
          {
            prompt: "What is the main purpose of the announcement?",
            options: [
              "To remind students about electrical safety",
              "To explain a change to the lab schedule",
              "To introduce a new lab assistant",
              "To extend the deadline for lab reports",
            ],
            answer: 1,
            explanation: "The professor explains that the lab moves from Tuesday to Thursday.",
          },
          {
            prompt: "What should students do if they cannot come on Thursday?",
            options: ["Attend the Tuesday session", "Submit their lab report early", "Email the professor by Friday", "Join another class on Monday"],
            answer: 2,
            explanation: "“Send me an email by Friday, and I'll find you a place in another group.” The deadline for reports does not change.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Listen to an Academic Talk",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Today I want to talk about something called the decoy effect. It's a pattern in the way people make choices, and businesses use it all the time, even though customers rarely notice.\n\nImagine a cinema that sells two sizes of popcorn: a small one for three dollars and a large one for seven dollars. Most customers choose the small one, because the large size seems expensive. Now the cinema adds a third option: a medium popcorn for six dollars fifty. Hardly anyone buys the medium size, but that doesn't matter. What happens is that sales of the large size go up, because next to the medium, the large suddenly looks like a bargain. The medium is the decoy. Its job isn't to be chosen. Its job is to change how we see the other options.\n\nWhy does this work? Well, people find it difficult to judge value on its own. We don't really know what popcorn should cost. So instead, we compare the options with each other, and we look for the choice that seems clearly better than something next to it.\n\nResearchers have found the same effect in many areas, from magazine subscriptions to job applications. So the next time you see three prices and one of them seems a bit strange, ask yourself whether it's there to be bought, or just to guide your decision.",
    },
    {
      type: "exercise",
      exercise: {
        id: "talk",
        kind: "mcq",
        title: "Academic talk questions",
        questions: [
          {
            prompt: "What is the talk mainly about?",
            options: [
              "How cinemas set the price of snacks",
              "How an extra option can influence people's choices",
              "Why customers prefer smaller portions",
              "How businesses reduce their costs",
            ],
            answer: 1,
            explanation: "The popcorn story is an example; the topic is the decoy effect, where an extra option changes our choice.",
          },
          {
            prompt: "According to the speaker, what happens after the medium size is introduced?",
            options: [
              "Most customers buy the medium size",
              "The price of the large size goes down",
              "More customers buy the large size",
              "Fewer people buy popcorn at all",
            ],
            answer: 2,
            explanation: "“Sales of the large size go up.” Hardly anyone buys the medium.",
          },
          {
            prompt: "Why does the decoy effect work, according to the speaker?",
            options: [
              "People compare options instead of judging value on its own",
              "People always choose the cheapest product",
              "Customers trust well-known brands",
              "Customers do not read prices carefully",
            ],
            answer: 0,
            explanation: "“People find it difficult to judge value on its own… so instead, we compare the options with each other.”",
          },
          {
            prompt: "What does the speaker suggest listeners do?",
            options: [
              "Avoid buying snacks at the cinema",
              "Always choose the middle option",
              "Compare prices in different shops",
              "Ask why an unusual option might be offered",
            ],
            answer: 3,
            explanation: "The speaker tells listeners to ask whether a strange price is “there to be bought, or just to guide your decision”.",
          },
        ],
      },
    },
  ],
};

const toeflReading: PracticeSet = {
  id: "toefl-reading-1",
  exam: "toefl",
  skill: "reading",
  title: "TOEFL Reading practice: all three task types",
  description:
    "Practise the three task types in the new TOEFL iBT Reading section: Complete the Words, Read in Daily Life and Read an Academic Passage. 15 questions in total.",
  minutes: 12,
  sections: [
    {
      type: "text",
      title: "Complete the Words",
      body: "In the real test, the first sentence is complete. After that, the second half of every second word is missing. Use the meaning **and** the grammar of the sentence to complete each word. (The real task has 10 incomplete words; this shorter version has 8.)",
    },
    {
      type: "exercise",
      exercise: {
        id: "ctw",
        kind: "gap",
        title: "Complete the Words",
        instructions: "Type the missing letters to complete each word. You may also type the whole word.",
        text: "Many desert plants can survive long periods without rain. Some st{{0}} water i{{1}} their th{{2}} stems, wh{{3}} others ha{{4}} very de{{5}} roots th{{6}} reach wa{{7}} far below the surface. Cacti are a well-known example of the first group: after a single storm, a large cactus can absorb enough water to last for months.",
        answers: [
          ["ore", "store"],
          ["n", "in"],
          ["ick", "thick", "orny", "thorny"],
          ["ile", "while", "ilst", "whilst", "ereas", "whereas"],
          ["ve", "have"],
          ["ep", "deep"],
          ["at", "that"],
          ["ter", "water"],
        ],
      },
    },
    {
      type: "passage",
      title: "Read in Daily Life: Notice",
      paragraphs: [
        "RIVERSIDE HALL: LAUNDRY ROOM CLOSURE",
        "From Monday 3 March, the laundry room in Riverside Hall will be closed for two weeks while new machines are installed. During this time, residents may use the laundry room in Oakwood Hall, a five-minute walk away. Please bring your student ID card, as the Oakwood door uses a card reader.",
        "The new machines will accept payment through the CampusWash phone app only, so we recommend downloading the app before the room reopens. Any money left on your old laundry card can be refunded at the Housing Office until 31 March.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "daily",
        kind: "mcq",
        title: "Read in Daily Life",
        questions: [
          {
            prompt: "Why will residents need their student ID cards?",
            options: [
              "To pay for the new machines",
              "To get a refund at the Housing Office",
              "To enter the laundry room in Oakwood Hall",
              "To download the CampusWash app",
            ],
            answer: 2,
            explanation: "“Please bring your student ID card, as the Oakwood door uses a card reader.”",
          },
          {
            prompt: "What can be inferred about the new machines?",
            options: [
              "They will not accept the old laundry cards",
              "They will be installed in Oakwood Hall",
              "They will be free for residents",
              "They will be ready on 3 March",
            ],
            answer: 0,
            explanation: "They accept payment “through the CampusWash phone app only”, and money on old cards will be refunded, so the old cards will no longer work.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Read an Academic Passage: Hiding in plain sight",
      paragraphs: [
        "Many animals, from sharks and penguins to deer, are darker on their backs than on their bellies. This pattern, known as countershading, is one of the most common forms of camouflage in nature.",
        "To understand how it works, think about how light falls on a solid object. When sunlight comes from above, the top of an object appears bright and the underside falls into shadow. This contrast between light and shade helps our eyes recognise the object as three-dimensional. Countershading reduces this contrast. Because the animal's back is dark and its belly is pale, the shadow on its lower body is partly cancelled out, and the animal appears flatter and harder to see.",
        "The general principle was first explained by the American painter Abbott Thayer in the 1890s. As an artist, Thayer was used to thinking about how painters create the illusion of depth with light and shade. He realised that animals might be using the same principle in reverse.",
        "In water, countershading can have a second advantage. A fish seen from above appears dark against the deep water below it, while the same fish seen from below appears pale against the bright surface.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "academic",
        kind: "mcq",
        title: "Read an Academic Passage",
        questions: [
          {
            prompt: "What is the passage mainly about?",
            options: [
              "How a common colour pattern helps animals avoid being seen",
              "Why some animals change colour in different seasons",
              "How painters create the illusion of depth",
              "Why sea animals are darker than land animals",
            ],
            answer: 0,
            explanation: "The whole passage explains countershading, a form of camouflage.",
          },
          {
            prompt: "According to paragraph 2, what helps us see an object as three-dimensional?",
            options: [
              "Its size compared with nearby objects",
              "The difference between its bright top and its shaded underside",
              "The colour of its surface",
              "The direction in which it is moving",
            ],
            answer: 1,
            explanation: "“This contrast between light and shade helps our eyes recognise the object as three-dimensional.”",
          },
          {
            prompt: "The phrase “cancelled out” in paragraph 2 is closest in meaning to",
            options: ["made stronger", "moved to a different place", "balanced so that it has less effect", "made easier to notice"],
            answer: 2,
            explanation: "The pale belly balances the shadow, so the shadow has less effect and the animal looks flatter.",
          },
          {
            prompt: "Why does the author mention that Thayer was a painter?",
            options: [
              "To show that scientists ignored his ideas",
              "To explain why he understood the role of light and shade",
              "To suggest that his paintings were famous",
              "To compare art and biology education",
            ],
            answer: 1,
            explanation: "As an artist he “was used to thinking about how painters create the illusion of depth with light and shade”.",
          },
          {
            prompt: "What can be inferred from paragraph 4 about countershading in fish?",
            options: [
              "It only helps fish that live near the surface",
              "It makes fish easier for predators to find",
              "It was discovered before countershading in land animals",
              "It can hide a fish from animals both above and below it",
            ],
            answer: 3,
            explanation: "A fish looks dark against the deep water when seen from above and pale against the bright surface when seen from below, so it is hidden from both directions.",
          },
        ],
      },
    },
  ],
};

const toeflWriting: PracticeSet = {
  id: "toefl-writing-1",
  exam: "toefl",
  skill: "writing",
  title: "TOEFL Writing practice: Email and Academic Discussion",
  description:
    "A short version of the new TOEFL iBT Writing section: three Build a Sentence items, then the two writing tasks, Write an Email (7 minutes) and Write for an Academic Discussion (10 minutes).",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Build a Sentence",
      body: "Put the words and phrases in order to make a grammatical reply to the first speaker. In the real test there are 10 of these items.",
    },
    {
      type: "exercise",
      exercise: {
        id: "build1",
        kind: "order",
        mode: "words",
        title: "Build a Sentence 1",
        instructions: "A: How was the career fair yesterday? Make B's reply.",
        items: ["The company", "I wanted", "to talk to", "wasn't", "there."],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "build2",
        kind: "order",
        mode: "words",
        title: "Build a Sentence 2",
        instructions: "A: I heard you're moving off campus next semester. Make B's reply.",
        items: ["Yes, but", "I still", "don't know", "how much", "the rent", "will be."],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "build3",
        kind: "order",
        mode: "words",
        title: "Build a Sentence 3",
        instructions: "A: What did the professor say about the final project? Make B's reply.",
        items: ["She", "wants", "us to", "submit it", "before the", "last class."],
      },
    },
    {
      type: "text",
      title: "Write an Email",
      body: "You have **7 minutes**. Write as much as you can in complete sentences. Aim for at least 80–100 words and cover all three points.",
    },
    {
      type: "exercise",
      exercise: {
        id: "email",
        kind: "write",
        title: "Write an Email",
        prompt:
          "You are taking an evening photography course at a community college. Last week, your instructor, Ms. Grant, announced that the final class trip, a visit to a nature reserve, will take place on a Saturday. You work every Saturday and cannot change your shift.\n\nWrite an email to Ms. Grant. In your email, do the following:\n- Tell her what you have enjoyed about the course so far.\n- Describe your problem with the class trip.\n- Suggest a possible solution.",
        minWords: 80,
        minutes: 7,
        rubric: [
          "I completed all three parts of the task (what I enjoyed, the problem, a solution).",
          "Each point has some detail or explanation, not just one short sentence.",
          "My tone is polite and suitable for an instructor (greeting, request, closing).",
          "I used a range of sentence structures, for example 'Would it be possible…?' and 'because…'.",
          "There are very few errors in grammar, spelling and punctuation.",
        ],
        modelAnswer:
          "Dear Ms. Grant,\n\nI hope you are well. I'm really enjoying the evening photography course. Your feedback on our weekly assignments has helped me a lot, especially with lighting, and I've already noticed a big difference in my photos.\n\nHowever, I have a problem with the final class trip to the nature reserve. I work at a supermarket every Saturday, and my manager has told me that I can't change my shift this month.\n\nWould it be possible for me to visit the reserve on my own on Sunday and complete the same photography tasks? Alternatively, I could do an extra assignment instead of the trip. I'm happy to follow whatever you think is best.\n\nThank you for your understanding.\n\nBest regards,\nDaniel Kim",
      },
    },
    {
      type: "text",
      title: "Write for an Academic Discussion",
      body: "You have **10 minutes**. Your professor is teaching a class on education. Read the professor's question and two students' posts. Then write a post that gives and supports your opinion. An effective response has at least 100 words.\n\n**Dr. Owens:** Many universities now record lectures and post them online so that students can watch them later. Some people believe this should be required for every course, while others think it changes the classroom experience in negative ways. What is your opinion? Should universities require all lectures to be recorded and posted online? Why or why not?\n\n**Maya:** I think every lecture should be recorded. Students get sick, and some have jobs that clash with class times. Recordings mean nobody misses important content, and you can rewatch difficult parts before an exam.\n\n**Leo:** I disagree. If every lecture is online, many students will stop coming to class. They'll miss the discussions and questions that happen in the room, and some professors may feel less comfortable sharing their ideas if they know they're being recorded.",
    },
    {
      type: "exercise",
      exercise: {
        id: "discussion",
        kind: "write",
        title: "Academic Discussion",
        prompt:
          "Should universities require all lectures to be recorded and posted online? Write a post that states and supports your opinion and contributes to the discussion in your own words.",
        minWords: 100,
        minutes: 10,
        rubric: [
          "My opinion is clear in the first one or two sentences.",
          "I gave at least one reason that is new, not just a repeat of Maya's or Leo's post.",
          "I supported my reason with an explanation or a personal example.",
          "I referred to a classmate's idea (agreeing or disagreeing) in a natural way.",
          "I used an academic but natural tone and a variety of grammar and vocabulary with few errors.",
        ],
        modelAnswer:
          "I understand Leo's concern about attendance, but I believe universities should record lectures and post them online. The main reason is that recordings make learning fairer. Many students today have part-time jobs or family responsibilities, and sometimes they simply cannot be on campus at a particular time. Without recordings, these students fall behind through no fault of their own. Recordings also help international students like me. When a professor speaks quickly or uses unfamiliar terms, I can pause the video, check a word and listen again, which helps me understand the material much more deeply. As for Leo's point that attendance would drop, I think this depends on the class. If lectures include discussions, group activities or short quizzes, students will still have good reasons to attend in person. In other words, recordings should support learning, not replace the classroom.",
      },
    },
  ],
};

const toeflSpeaking: PracticeSet = {
  id: "toefl-speaking-1",
  exam: "toefl",
  skill: "speaking",
  title: "TOEFL Speaking practice: Listen and Repeat and Take an Interview",
  description:
    "The complete new TOEFL iBT Speaking section: repeat seven sentences in a campus scenario, then answer four interview questions with 45 seconds for each answer and no preparation time.",
  minutes: 10,
  sections: [
    {
      type: "text",
      title: "Listen and Repeat",
      body: "You are a new assistant at the university sports centre. Listen to your supervisor and repeat **exactly** what you hear. The sentences get longer and more difficult. In the real test you hear each sentence once and have about 8–12 seconds to repeat it.",
    },
    {
      type: "exercise",
      exercise: {
        id: "repeat",
        kind: "shadow",
        title: "Listen and Repeat: the sports centre",
        instructions: "Listen to each sentence once, then record yourself repeating it. Compare your version with the original.",
        voice: "us",
        sentences: [
          "Welcome to the sports centre.",
          "Please show your student card at the front desk.",
          "The swimming pool is on the lower floor, next to the changing rooms.",
          "Towels can be borrowed for free, but they must be returned before you leave.",
          "If you'd like to join a fitness class, you'll need to book a place online.",
          "Classes that are cancelled because of low numbers are announced on our website the day before.",
          "Anyone who wants to use the climbing wall for the first time must complete a short safety course.",
        ],
      },
    },
    {
      type: "text",
      title: "Take an Interview",
      body: "You have agreed to take part in a university study about how students use technology for learning. A researcher will ask you four questions. There is **no preparation time**, and you have **45 seconds** for each answer. The first questions are about your experience; the later ones ask for your opinion.",
    },
    {
      type: "exercise",
      exercise: {
        id: "interview1",
        kind: "speak",
        title: "Interview question 1",
        prompt:
          "Thanks for joining us today. To begin, tell me about a website, app or online tool that has helped you learn something. What did you use it for?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "One tool that's really helped me is a flashcard app that I use for vocabulary. Last year I was preparing for a biology exam, and there were hundreds of technical terms to remember. The app shows you each card again just before you're likely to forget it, so I didn't waste time reviewing words I already knew. I used it for about fifteen minutes on the bus every morning, and by the exam I could remember almost every term. I still use it now for English vocabulary.",
        checklist: [
          "I named the tool and said what I used it for.",
          "I gave a specific example from my own experience.",
          "I kept talking for most of the 45 seconds.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "interview2",
        kind: "speak",
        title: "Interview question 2",
        prompt:
          "Some students prefer to study with printed books, while others prefer reading on screens. Which do you prefer, and why?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "For most subjects, I prefer printed books. When I read on paper, I find it easier to concentrate, and I can write notes in the margins and remember where on the page I saw something. On a screen, I'm always tempted to check messages, so I get distracted. That said, for quick searches or checking definitions, screens are much faster. So I usually read the main textbook on paper and use my laptop for extra research.",
        checklist: [
          "I stated my preference clearly at the start.",
          "I gave at least two reasons.",
          "I mentioned an advantage of the other option.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "interview3",
        kind: "speak",
        title: "Interview question 3",
        prompt:
          "Some people say that using phones in class distracts students more than it helps them. Do you agree? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "I partly agree. Phones can definitely be a distraction, especially when notifications keep appearing and students start checking social media in the middle of a lecture. However, I don't think banning them completely is the answer, because phones can also be useful learning tools. For example, students can look up an unfamiliar term or take a photo of a diagram on the board. I think the best approach is for teachers to set clear rules, like keeping phones face down unless they're needed for a class activity.",
        targetPhrases: ["I partly agree", "However", "For example", "I think the best approach is"],
        checklist: [
          "I gave a clear position (agree, disagree or partly agree).",
          "I supported it with a reason and an example.",
          "My speech had a natural pace with few long pauses.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "interview4",
        kind: "speak",
        title: "Interview question 4",
        prompt:
          "Finally, some universities are thinking about replacing some lectures with short online videos. Do you think this would be good for students? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "I think it could be a good idea, but only for some types of content. Short videos are great for explaining basic facts or step-by-step processes, because students can watch them at their own pace and replay difficult parts. On the other hand, lectures where students ask questions or discuss ideas are hard to replace. So, if universities do this, I'd suggest combining the two: students watch a short video before class, and then class time is used for discussion and problem-solving with the professor.",
        targetPhrases: ["It could be a good idea, but", "On the other hand", "I'd suggest"],
        checklist: [
          "I answered the question about students directly.",
          "I considered both advantages and disadvantages.",
          "I finished with a clear conclusion or suggestion.",
        ],
      },
    },
  ],
};

/* ------------------------------------------------------------------ TOEIC */

const toeicListening: PracticeSet = {
  id: "toeic-listening-1",
  exam: "toeic",
  skill: "listening",
  title: "TOEIC Listening practice: Parts 2, 3 and 4",
  description:
    "Workplace listening in TOEIC style: six question-response items, two conversations (one with a graphic) and a recorded telephone message. 15 questions. Part 1 (photographs) is practised in the lesson on describing pictures.",
  minutes: 12,
  sections: [
    {
      type: "text",
      title: "How to do this practice",
      body: "In the real TOEIC test you hear everything **once**. In Parts 3 and 4, read the questions before you listen so you know what information you need.",
    },
    {
      type: "exercise",
      exercise: {
        id: "part2",
        kind: "respond",
        title: "Part 2: Question-Response",
        instructions: "Listen to the question or statement. Choose the best response.",
        items: [
          {
            audio: "When is the new printer being delivered?",
            options: ["Sometime on Thursday morning.", "Yes, I printed it yesterday.", "In the supply room."],
            answer: 0,
            explanation: "A when-question needs a time. The second option repeats a similar word (printed).",
          },
          {
            audio: "Would you like me to book a meeting room for the interviews?",
            options: ["She was interviewed last week.", "That would be very helpful, thanks.", "The room is quite large."],
            answer: 1,
            explanation: "This is an offer, so the best reply accepts or refuses it.",
          },
          {
            audio: "Who's responsible for updating the client list?",
            options: ["It's updated every month.", "No, it's not on the list.", "I think Marco handles that."],
            answer: 2,
            explanation: "A who-question needs a person. The other options repeat words from the question.",
          },
          {
            audio: "Why was the shipment from the supplier late?",
            options: ["About two hundred boxes.", "Because of bad weather at the port.", "I'll ship it tomorrow."],
            answer: 1,
            explanation: "A why-question needs a reason.",
          },
          {
            audio: "You've met our new marketing director, haven't you?",
            options: ["Not yet, but I'm meeting her this afternoon.", "The meeting room is upstairs.", "Market prices are rising."],
            answer: 0,
            explanation: "The reply answers the tag question. The other options use similar-sounding words (meeting, market).",
          },
          {
            audio: "Should we order lunch for the team or eat out?",
            options: ["Yes, we should.", "At twelve thirty.", "Let's eat out. It's a nice day."],
            answer: 2,
            explanation: "This is a choice question, so 'yes' is not a possible answer. The best reply chooses one option.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Part 3: Conversation 1",
      voice: "us",
      transcript:
        "Woman: Hi, Kevin. Have you had a chance to look at the quotes from the catering companies for the June conference?\nMan: Yes, I went through them this morning. Bright Table is the cheapest, but they can't provide vegetarian meals for more than fifty people.\nWoman: That's a problem. We're expecting around eighty vegetarian guests.\nMan: Exactly. Green Plate is a little more expensive, but we've worked with them before, and the feedback was excellent.\nWoman: OK, let's go with Green Plate, then. Can you call them today to confirm the date?\nMan: Sure. I'll also ask whether they can send a sample menu by Friday, so we can show it to the director.",
    },
    {
      type: "exercise",
      exercise: {
        id: "conv1",
        kind: "mcq",
        title: "Part 3: Conversation 1",
        questions: [
          {
            prompt: "What are the speakers mainly discussing?",
            options: ["Planning a staff party", "Choosing a catering company", "Reducing the conference budget", "Writing a menu for a restaurant"],
            answer: 1,
          },
          {
            prompt: "What problem does Kevin mention about Bright Table?",
            options: [
              "It is too expensive.",
              "It is not available in June.",
              "It received poor feedback.",
              "It cannot provide enough vegetarian meals.",
            ],
            answer: 3,
            explanation: "Bright Table “can't provide vegetarian meals for more than fifty people”, but they expect about eighty.",
          },
          {
            prompt: "What will Kevin ask Green Plate to do?",
            options: ["Lower its price", "Send a sample menu", "Visit the office", "Call the director"],
            answer: 1,
            explanation: "“I'll also ask whether they can send a sample menu by Friday.”",
          },
        ],
      },
    },
    {
      type: "table",
      title: "Meeting rooms: Thursday",
      headers: ["Room", "Seats", "Available"],
      rows: [
        ["Room A", "6", "9:00–11:00"],
        ["Room B", "12", "10:00–12:00"],
        ["Room C", "12", "14:00–16:00"],
        ["Room D", "20", "All day"],
      ],
    },
    {
      type: "audio",
      title: "Part 3: Conversation 2 (with a graphic)",
      voice: "uk",
      transcript:
        "Man: Ana, I need to book a room for the training session with the new sales staff on Thursday.\nWoman: Sure, Sam. How many people are coming?\nMan: Ten, including the trainer.\nWoman: Then Room A is too small. Is the session in the morning?\nMan: It was, but the trainer's flight gets in late, so we've moved it to the afternoon.\nWoman: In that case, there's a room with twelve seats that's free from two to four. That should be perfect.\nMan: Great. I'll book it now and email everyone the new time.",
    },
    {
      type: "exercise",
      exercise: {
        id: "conv2",
        kind: "mcq",
        title: "Part 3: Conversation 2",
        questions: [
          {
            prompt: "Look at the graphic. Which room will Sam probably book?",
            options: ["Room A", "Room B", "Room C", "Room D"],
            answer: 2,
            explanation: "Ana suggests the room “with twelve seats that's free from two to four”. In the table, that is Room C. Room A is too small, and Room B is only free in the morning.",
          },
          {
            prompt: "Why has the training session been moved?",
            options: [
              "The trainer will arrive late.",
              "Room A is too small.",
              "The sales staff are busy in the morning.",
              "The trainer is ill.",
            ],
            answer: 0,
            explanation: "“The trainer's flight gets in late, so we've moved it to the afternoon.”",
          },
          {
            prompt: "What will Sam do next?",
            options: [
              "Call the trainer",
              "Change the number of participants",
              "Book a room and email the staff",
              "Meet the new sales staff",
            ],
            answer: 2,
            explanation: "“I'll book it now and email everyone the new time.”",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Part 4: Telephone message",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Hello, this message is for Grace Okafor. This is Daniel from Lakeside Dental Clinic, calling about your appointment on Tuesday the fourteenth at ten in the morning. Unfortunately, Doctor Reyes will be attending a conference that day, so she won't be available and we need to reschedule. We have openings on Wednesday the fifteenth at nine thirty, or on Friday the seventeenth at three in the afternoon. Please call us back on five five five, two eight one nine, to let us know which time suits you. Also, as this will be your first visit, please arrive fifteen minutes early to fill in a patient form. Thank you, and have a good day.",
    },
    {
      type: "exercise",
      exercise: {
        id: "talk",
        kind: "mcq",
        title: "Part 4: Talk",
        questions: [
          {
            prompt: "Why is the speaker calling?",
            options: ["To confirm a payment", "To advertise a new clinic", "To change an appointment", "To ask about a conference"],
            answer: 2,
          },
          {
            prompt: "Why is Doctor Reyes unavailable on Tuesday?",
            options: ["She is on holiday.", "She will be at a conference.", "The clinic is closed for repairs.", "She has too many patients."],
            answer: 1,
          },
          {
            prompt: "What does the speaker ask the listener to do?",
            options: ["Bring her insurance card", "Email the clinic", "Pay in advance", "Arrive early to fill in a form"],
            answer: 3,
            explanation: "“Please arrive fifteen minutes early to fill in a patient form.”",
          },
        ],
      },
    },
  ],
};

const toeicReading: PracticeSet = {
  id: "toeic-reading-1",
  exam: "toeic",
  skill: "reading",
  title: "TOEIC Reading practice: Parts 5, 6 and 7",
  description:
    "Business reading in TOEIC style: six incomplete sentences, a staff email with four gaps (including one sentence gap) and a booking confirmation with four comprehension questions. 14 questions.",
  minutes: 12,
  sections: [
    {
      type: "exercise",
      exercise: {
        id: "part5",
        kind: "mcq",
        title: "Part 5: Incomplete Sentences",
        instructions: "Choose the word or phrase that best completes each sentence.",
        questions: [
          {
            prompt: "All employees are asked to submit their travel expense reports _______ the end of the month.",
            options: ["by", "until", "since", "during"],
            answer: 0,
            explanation: "“By” gives a deadline. “Until” describes an action that continues up to a time.",
          },
          {
            prompt: "The new software has made it much _______ for staff to share files with clients.",
            options: ["easy", "easily", "easier", "easiest"],
            answer: 2,
            explanation: "“Much” before an adjective signals a comparative: much easier.",
          },
          {
            prompt: "Ms. Tanaka was _______ to head of the design department after ten years with the company.",
            options: ["promoting", "promoted", "promotion", "promotes"],
            answer: 1,
            explanation: "Passive voice: was + past participle (was promoted).",
          },
          {
            prompt: "_______ the heavy rain, the outdoor product launch went ahead as planned.",
            options: ["Although", "Because", "Despite", "However"],
            answer: 2,
            explanation: "“Despite” is followed by a noun phrase (the heavy rain). “Although” needs a clause with a verb.",
          },
          {
            prompt: "Customers who wish to return an item must present the original _______.",
            options: ["recipe", "reception", "receiver", "receipt"],
            answer: 3,
            explanation: "A receipt is the paper that proves you bought something.",
          },
          {
            prompt: "The marketing team will review the survey results carefully before _______ any changes to the campaign.",
            options: ["make", "making", "made", "makes"],
            answer: 1,
            explanation: "After a preposition such as “before”, use the -ing form.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Part 6: Email",
      paragraphs: [
        "To: All staff\nFrom: Facilities Department\nSubject: Car park resurfacing",
        "Please note that the staff car park will be closed from Monday 9 June to Friday 13 June while the surface is __(1)__.",
        "During this period, employees who normally drive to work are encouraged to use the public car park on Mill Street. __(2)__",
        "Please keep your parking receipts and submit them to the Finance Department __(3)__ the end of the month. We apologise for any inconvenience and appreciate your __(4)__.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "part6",
        kind: "mcq",
        title: "Part 6: Text Completion",
        instructions: "Choose the best answer for each gap in the email.",
        questions: [
          {
            prompt: "Gap (1)",
            options: ["repairing", "repaired", "repairs", "repairer"],
            answer: 1,
            explanation: "Passive: the surface is repaired (by workers).",
          },
          {
            prompt: "Gap (2)",
            options: [
              "The canteen will also be closed next week.",
              "Mill Street was built many years ago.",
              "The company will cover the cost of parking there.",
              "Thank you for attending the training session.",
            ],
            answer: 2,
            explanation: "The next paragraph asks staff to keep parking receipts for the Finance Department, so the company must be paying for the parking.",
          },
          {
            prompt: "Gap (3)",
            options: ["as soon as", "no later than", "in case of", "rather than"],
            answer: 1,
            explanation: "“No later than the end of the month” gives a deadline and is followed by a noun phrase.",
          },
          {
            prompt: "Gap (4)",
            options: ["patient", "patiently", "patience", "patients"],
            answer: 2,
            explanation: "After “your” we need a noun: your patience.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Part 7: Booking confirmation",
      paragraphs: [
        "To: Laura Bennett\nFrom: Hotel Marina Events Team\nSubject: Your booking: Annual Sales Meeting",
        "Dear Ms. Bennett,",
        "Thank you for choosing Hotel Marina for your company's annual sales meeting on 22 May. We are pleased to confirm the booking of the Harbour Room for 45 guests from 9:00 a.m. to 5:00 p.m., including a buffet lunch and two coffee breaks.",
        "As requested, the room will be set up with a projector and two microphones. Please note that our standard package does not include a video-conference system. If you need one, it can be added for an extra charge of £120.",
        "The final number of guests must be confirmed by 15 May. After this date, we can increase the number of guests if space allows, but we are unable to reduce the total cost.",
        "We look forward to welcoming you.\nKind regards,\nPaolo Ferri, Events Coordinator",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "part7",
        kind: "mcq",
        title: "Part 7: Reading Comprehension",
        questions: [
          {
            prompt: "What is the main purpose of the email?",
            options: [
              "To advertise a new conference room",
              "To confirm the details of an event booking",
              "To request payment for a past event",
              "To invite Ms. Bennett to a sales meeting",
            ],
            answer: 1,
            explanation: "“We are pleased to confirm the booking of the Harbour Room…”",
          },
          {
            prompt: "What does the booking NOT include?",
            options: ["A buffet lunch", "A projector", "Coffee breaks", "A video-conference system"],
            answer: 3,
            explanation: "The booking includes a buffet lunch, two coffee breaks and a projector, but “our standard package does not include a video-conference system”. It costs extra.",
          },
          {
            prompt: "By when must Ms. Bennett confirm the number of guests?",
            options: ["22 May", "The day before the meeting", "15 May", "The end of the month"],
            answer: 2,
          },
          {
            prompt: "What is suggested about changes made after 15 May?",
            options: [
              "The number of guests cannot be increased.",
              "The total price will not go down.",
              "The meeting will move to a different room.",
              "A fee of £120 will be charged.",
            ],
            answer: 1,
            explanation: "After 15 May the hotel “can increase the number of guests if space allows” but is “unable to reduce the total cost”.",
          },
        ],
      },
    },
  ],
};

const toeicWriting: PracticeSet = {
  id: "toeic-writing-1",
  exam: "toeic",
  skill: "writing",
  title: "TOEIC Writing practice: Email reply and opinion essay",
  description:
    "Two tasks from the TOEIC Writing test: respond to a written request in 10 minutes, then write an opinion essay in 30 minutes. (The picture-sentence task is practised in the lesson on describing pictures.)",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Respond to a written request",
      body: "You have **10 minutes**. Read the email and write a reply.\n\n**From:** Helen Brooks, Westfield Community Centre\n**To:** Local residents\n**Subject:** New evening classes\n\nDear residents,\n\nWe are planning to offer new evening classes this autumn and would like to hear from you. At the moment, all our classes run on weekdays from 6:00 to 7:30 p.m. Please tell us which subjects you would be interested in and share any other ideas you have.\n\nBest regards,\nHelen Brooks, Programme Manager",
    },
    {
      type: "exercise",
      exercise: {
        id: "email",
        kind: "write",
        title: "Reply to the email",
        prompt:
          "Respond to the email as a local resident. In your email, describe ONE class you would like to take, explain ONE problem with the current timetable, and make ONE suggestion.",
        minWords: 80,
        minutes: 10,
        rubric: [
          "I completed all three parts of the task: one class, one problem, one suggestion.",
          "I explained each point with a reason or detail.",
          "My email has a suitable greeting, clear paragraphs and a polite closing.",
          "My tone is polite and suitable for writing to an organisation.",
          "I used a variety of sentences with few grammar or spelling errors.",
        ],
        modelAnswer:
          "Dear Ms. Brooks,\n\nThank you for asking residents for their ideas. I would be very interested in a beginners' Spanish class, because I travel to Spain for work several times a year and would like to communicate better with my colleagues there.\n\nHowever, there is one problem with the current timetable. All the classes start at 6:00 p.m., which is too early for people like me who finish work at 6:00 and need time to get home.\n\nI would suggest starting some classes at 7:00 or 7:30 p.m. You could also offer a few classes on Saturday mornings for people who work late during the week.\n\nI look forward to seeing the new programme.\n\nBest regards,\nTom Becker",
      },
    },
    {
      type: "text",
      title: "Write an opinion essay",
      body: "You have **30 minutes**. Give reasons or examples to support your opinion. Typically, an effective essay has at least 300 words.\n\n*Some companies allow employees to choose their own working hours. Do you think this is a good idea? Why or why not?*",
    },
    {
      type: "exercise",
      exercise: {
        id: "essay",
        kind: "write",
        title: "Opinion essay",
        prompt:
          "Some companies allow employees to choose their own working hours. Do you think this is a good idea? Give reasons or examples to support your opinion.",
        minWords: 300,
        minutes: 30,
        rubric: [
          "My opinion is clear in the introduction and the conclusion.",
          "Each body paragraph gives one main reason with a specific example.",
          "I organised the essay clearly and used linking words (first, as a result, however, in conclusion).",
          "I mentioned a possible problem with my view and answered it.",
          "I used a range of vocabulary and grammar with few errors, and wrote at least 300 words.",
        ],
        modelAnswer:
          "In many industries, companies are beginning to give employees more control over when they work. Instead of requiring everyone to be in the office from nine to five, they allow staff to choose their own hours, as long as the work gets done. In my opinion, this is generally a good idea, for three main reasons.\n\nFirst, flexible hours can make employees more productive. People have different daily rhythms: some think most clearly early in the morning, while others do their best work in the afternoon or evening. When employees can plan their hours around these natural patterns, they are likely to concentrate better and make fewer mistakes. For example, my older sister, who works as a software developer, starts at seven o'clock so that she can finish complex tasks before her colleagues arrive and the office becomes noisy.\n\nSecond, flexible working helps employees balance their jobs with their personal lives. Parents can take their children to school, and people who are caring for elderly relatives can attend medical appointments without asking for a day off. As a result, staff feel less stressed and more loyal to their employer, which reduces the cost of hiring and training new workers.\n\nThird, flexible hours can benefit the company's customers. If some employees start early and others finish late, the company can answer phone calls and emails for a longer part of the day. This is especially useful for businesses that work with clients in different time zones.\n\nOf course, there are some challenges. Teams still need time together for meetings, and managers may find it harder to check on progress. However, these problems can be solved by setting a few core hours, such as ten until three, when everyone must be available.\n\nIn conclusion, I believe that allowing employees to choose their working hours is a positive change. With clear rules, it can make workers happier and businesses more efficient.",
      },
    },
  ],
};

const toeicSpeaking: PracticeSet = {
  id: "toeic-speaking-1",
  exam: "toeic",
  skill: "speaking",
  title: "TOEIC Speaking practice: read aloud, questions and opinion",
  description:
    "Six tasks from the TOEIC Speaking test: read an announcement aloud, answer three interview questions, answer a question using a schedule, and express an opinion. (Describing a picture is practised in its own lesson.)",
  minutes: 12,
  sections: [
    {
      type: "text",
      title: "Read a text aloud",
      body: "You have **45 seconds** to prepare and **45 seconds** to read the text aloud. Focus on clear pronunciation, natural pauses and rising/falling intonation in lists.",
    },
    {
      type: "exercise",
      exercise: {
        id: "read-aloud",
        kind: "speak",
        title: "Read a text aloud",
        prompt:
          "Welcome to Fairview Garden Centre's spring sale. This weekend only, all outdoor furniture, garden tools and flowering plants are twenty percent off. Our expert staff will also be offering free workshops on growing vegetables, caring for roses and designing small gardens. Workshops start every hour from ten o'clock, and no booking is required. Thank you for shopping with us.",
        prepSeconds: 45,
        speakSeconds: 45,
        modelAnswer:
          "Welcome to Fairview Garden Centre's spring sale. This weekend only, all outdoor furniture, garden tools and flowering plants are twenty percent off. Our expert staff will also be offering free workshops on growing vegetables, caring for roses and designing small gardens. Workshops start every hour from ten o'clock, and no booking is required. Thank you for shopping with us.",
        targetPhrases: ["furniture, (rise) garden tools, (rise) and flowering plants (fall)", "This weekend only (pause)", "no booking is required"],
        checklist: [
          "I read at a steady pace and finished within 45 seconds.",
          "I paused at commas and full stops, not in the middle of phrases.",
          "I used rising intonation on list items and falling intonation on the last one.",
          "I stressed key words such as 'weekend only', 'twenty percent' and 'free'.",
        ],
      },
    },
    {
      type: "text",
      title: "Respond to questions",
      body: "Imagine that a marketing company is doing research in your area. You have agreed to take part in a telephone interview about public libraries. You have **3 seconds** to prepare after each question, then **15 seconds** for questions 1 and 2 and **30 seconds** for question 3.",
    },
    {
      type: "exercise",
      exercise: {
        id: "questions1",
        kind: "speak",
        title: "Question 1",
        prompt: "How often do you visit a library, and what do you usually do there?",
        prepSeconds: 3,
        speakSeconds: 15,
        modelAnswer:
          "I go to the library about twice a month, usually on Saturday mornings. I mostly borrow novels, and sometimes I use the quiet study area.",
        checklist: ["I answered both parts of the question.", "I finished within 15 seconds."],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "questions2",
        kind: "speak",
        title: "Question 2",
        prompt: "How far is the nearest library from your home, and how do you get there?",
        prepSeconds: 3,
        speakSeconds: 15,
        modelAnswer: "The nearest library is about two kilometres from my home. I usually cycle there, and it takes around ten minutes.",
        checklist: ["I gave a distance or time and a way of travelling.", "I spoke in full sentences."],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "questions3",
        kind: "speak",
        title: "Question 3",
        prompt:
          "Do you think libraries should spend more money on digital resources, such as e-books, or on printed books? Why?",
        prepSeconds: 3,
        speakSeconds: 30,
        modelAnswer:
          "I think libraries should spend a bit more on digital resources. E-books don't need shelf space, and people can borrow them from home at any time, which is useful for busy workers. However, libraries shouldn't stop buying printed books, because many readers, especially children and older people, still prefer them.",
        targetPhrases: ["I think", "which is useful for", "However"],
        checklist: ["I gave a clear opinion.", "I supported it with at least one reason.", "I used most of the 30 seconds."],
      },
    },
    {
      type: "text",
      title: "Respond to questions using information provided",
      body: "Read the schedule. In the real test you have **45 seconds** to read it, then you answer questions from a caller. Here you answer one question in **30 seconds**.",
    },
    {
      type: "table",
      title: "Regional Retail Conference: Hillcrest Hotel, Saturday 12 April",
      headers: ["Time", "Session", "Speaker"],
      rows: [
        ["9:00–9:30", "Registration and coffee", "–"],
        ["9:30–10:30", "Keynote: The future of online shopping", "Laura Chen"],
        ["10:45–11:45", "Workshop: Training new sales staff", "Omar Haddad"],
        ["12:00–13:00", "Lunch", "–"],
        ["13:00–14:00", "Panel: Reducing packaging waste", "Three guest speakers"],
        ["14:15–15:15", "Workshop: Social media for small shops", "Laura Chen"],
        ["15:30", "Closing remarks", "Event director"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "schedule",
        kind: "speak",
        title: "Answer the caller",
        prompt:
          "Caller: Hi, I'm planning to attend the conference, but I can't arrive until after lunch. Could you tell me which sessions I can attend in the afternoon?",
        prepSeconds: 45,
        speakSeconds: 30,
        modelAnswer:
          "Of course. After lunch there are two sessions and the closing remarks. First, at one o'clock, there's a panel discussion on reducing packaging waste with three guest speakers. Then, at two fifteen, Laura Chen is leading a workshop on social media for small shops. Finally, the event director gives the closing remarks at three thirty.",
        checklist: [
          "I gave only the information the caller asked for (the afternoon).",
          "I said the times, topics and speakers correctly.",
          "I used sequencing words (first, then, finally).",
        ],
      },
    },
    {
      type: "text",
      title: "Express an opinion",
      body: "You have **45 seconds** to prepare and **60 seconds** to speak. Give your opinion and support it with reasons and examples.",
    },
    {
      type: "exercise",
      exercise: {
        id: "opinion",
        kind: "speak",
        title: "Express an opinion",
        prompt:
          "Some people prefer to work for a large company, while others prefer to work for a small company. Which do you prefer, and why? Give reasons or examples to support your opinion.",
        prepSeconds: 45,
        speakSeconds: 60,
        modelAnswer:
          "Personally, I'd prefer to work for a small company, for two main reasons. First, in a small company each employee usually has a wider range of responsibilities. Instead of doing the same narrow task every day, you might help with sales, customer service and planning, so you learn much faster. For example, a friend of mine joined a small design agency after graduating, and within a year she was meeting clients and managing her own projects. Second, small companies often have a friendlier atmosphere. You know everyone by name, and it's easier to talk directly to managers and share ideas. Of course, large companies may offer higher salaries and more job security, but for me, learning opportunities and a good working environment are more important, especially at the start of my career.",
        targetPhrases: ["Personally, I'd prefer", "for two main reasons", "For example", "Of course… but"],
        checklist: [
          "I stated my preference in the first sentence.",
          "I gave two reasons, each with a detail or example.",
          "I mentioned the other side briefly.",
          "I spoke for close to 60 seconds.",
        ],
      },
    },
  ],
};

export const PRACTICE_SETS: PracticeSet[] = [
  ieltsListening,
  ieltsReading,
  ieltsWriting,
  ieltsSpeaking,
  toeflListening,
  toeflReading,
  toeflWriting,
  toeflSpeaking,
  toeicListening,
  toeicReading,
  toeicWriting,
  toeicSpeaking,
];
