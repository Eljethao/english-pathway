import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-b2-review-test",
  title: "B2 listening review test",
  summary:
    "A mixed mock test that reviews the whole B2 listening course: IELTS Parts 1–4, TOEIC Part 3 with a graphic, a TOEIC Part 4 talk and a TOEFL Academic Talk, with 39 questions, British and American voices, and full explanations.",
  skill: "listening",
  level: "B2",
  order: 12,
  minutes: 40,
  exams: [
    { exam: "ielts", task: "Mock test" },
    { exam: "ielts", task: "Listening Part 1" },
    { exam: "ielts", task: "Listening Part 2" },
    { exam: "ielts", task: "Listening Part 3" },
    { exam: "ielts", task: "Listening Part 4" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
    { exam: "toeic", task: "Listening Part 4 – Talks" },
    { exam: "toefl", task: "Listening – Academic Talk" },
  ],
  objectives: [
    "Complete a mixed listening test under exam-like conditions, hearing each recording once",
    "Apply the course strategies: prediction, word limits, distractors, speaker matching, graphics, talk structure and main ideas",
    "Follow both British and American voices at natural speed",
    "Use your results to find the lessons you need to review",
  ],
  warmUp: [
    "Which strategy from this course has helped you most so far? Which question type do you still find hardest?",
    "What will you do in this test if you miss an answer in the middle of a recording?",
  ],
  learn: [
    {
      type: "text",
      title: "How this review test works",
      body: "This test reviews everything in the B2 listening course. It has seven sections and **39 questions**, and it takes about 40 minutes. The first four sections follow IELTS Listening Parts 1 to 4. The last three practise TOEIC Parts 3 and 4 and the TOEFL Academic Talk.\n\nTo get a realistic result:\n\n1. Play each recording **once only**.\n2. Before each recording, take **30 seconds** to read the questions, predict the answers and check the word limit.\n3. Don't open the transcript until you have checked your answers.\n4. Spell carefully and obey the word limits.\n5. If you miss an answer, keep going: use the next question to find your place.",
    },
    {
      type: "table",
      title: "Test overview",
      headers: ["Section", "Format", "Voice", "Questions"],
      rows: [
        ["1", "IELTS Part 1: joining a tennis club (form completion)", "British", "1–9"],
        ["2", "IELTS Part 2: a new river bus service (multiple choice)", "British", "10–14"],
        ["3", "IELTS Part 3: planning an energy-saving proposal (who says it?)", "British", "15–21"],
        ["4", "IELTS Part 4: the psychology of waiting (note completion)", "American", "22–29"],
        ["5", "TOEIC Part 3: a shipping problem (with a graphic)", "American", "30–32"],
        ["6", "TOEIC Part 4: a sales update (talk)", "British", "33–35"],
        ["7", "TOEFL Academic Talk: night-time migration", "American", "36–39"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Answers in every section come in the same order as the recording. If you realise you have missed one, leave it, find your place with the next question, and come back at the end to make a sensible guess. There is no penalty for a wrong answer.",
    },
  ],
  model: [
    {
      type: "text",
      title: "Example: before you start",
      body: "Here is a quick warm-up item. Read the form line, check the word limit and predict the answer.\n\nDelivery day: ______ (ONE WORD ONLY)\n\nPrediction: a day of the week. Expect a change of plan.",
    },
    {
      type: "audio",
      title: "Example recording",
      voice: "uk",
      cast: { Assistant: "male", Customer: "female" },
      transcript:
        "Assistant: So your new sofa is booked for delivery on Thursday.\nCustomer: Thursday? Oh, I'm at work all day then. Is there any chance of Saturday?\nAssistant: Saturdays are fully booked this month, I'm afraid, but I could do Friday morning.\nCustomer: Friday's perfect. I'm working from home that day.\nAssistant: Great, Friday it is.",
    },
    {
      type: "text",
      title: "How a strong listener answers",
      body: "**Friday.** Thursday is the original plan, and Saturday is suggested and rejected (*fully booked*). The assistant's final words, *Friday it is*, confirm the answer. *Friday morning* would break the ONE WORD ONLY limit.\n\nThis one item uses three course strategies: **prediction** (a day), **distractors** (wait for the final decision) and **word limits**. Use the same habits all the way through the test.",
    },
  ],
  practice: [
    {
      type: "text",
      title: "Section 1: Questions 1–9",
      body: "You will hear a phone call between Kirsty, a receptionist at a tennis club, and Arjun, who wants to join. Read the form first. Then listen and complete it.",
    },
    {
      type: "audio",
      title: "Section 1: joining a tennis club",
      voice: "uk",
      transcript:
        "Kirsty: Good afternoon, Oakfield Tennis Club, Kirsty speaking.\nArjun: Hi, I'd like to join the club, please. I've just moved to the area.\nKirsty: Lovely. I can take some details over the phone. What's your name?\nArjun: Arjun Malhotra. The surname is M, A, L, H, O, T, R, A.\nKirsty: Thank you. And what kind of membership are you interested in? We have full membership, which lets you play at any time, and off-peak, which is weekdays before five and all day at weekends.\nArjun: I was going to go for full membership, but actually I work from home, so off-peak would suit me better.\nKirsty: Good choice. Full membership is two hundred and sixty pounds a year, but off-peak is only one hundred and eighty.\nArjun: Great. I'd also like to join some group lessons. Are there any in the evenings?\nKirsty: Yes, on Mondays and Tuesdays. The Monday group is full, I'm afraid, but there's space on Tuesdays.\nArjun: Tuesday's fine.\nKirsty: And how would you describe your level? We have beginner, intermediate and advanced groups.\nArjun: I played a lot at university, but that was years ago, so I'm definitely not advanced any more. Intermediate, I'd say.\nKirsty: OK. When you come in, please bring a passport photo, because we need one for your membership card.\nArjun: Will do. I haven't got my own racket yet, by the way.\nKirsty: That's no problem. You can hire one for three pounds a session, and balls are provided free.\nArjun: And when could I start?\nKirsty: There's no group lesson on the seventh of July, because of a tournament, so your first session would be on the fourteenth.\nArjun: Perfect.\nKirsty: And just for our records, how did you hear about us?\nArjun: I've seen your sign near the station, but it was actually a colleague who recommended you. Apparently the coaching is excellent.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "gap",
        title: "Questions 1–9: form completion",
        instructions: "Complete the form. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Oakfield Tennis Club: new member\n\n1. Surname: {{0}}\n2. Type of membership: {{1}}\n3. Cost per year: £{{2}}\n4. Group lessons on: {{3}} evenings\n5. Level: {{4}}\n6. Bring a {{5}} photo for the membership card\n7. Racket hire: £{{6}} per session\n8. First session: {{7}} July\n9. Heard about the club from a {{8}}",
        answers: [
          ["Malhotra"],
          ["off-peak"],
          ["180", "180.00"],
          ["Tuesday"],
          ["intermediate"],
          ["passport"],
          ["3", "three", "3.00"],
          ["14", "14th", "fourteenth", "the 14th", "the fourteenth"],
          ["colleague"],
        ],
      },
    },
    {
      type: "text",
      title: "Section 2: Questions 10–14",
      body: "You will hear Paul Grady from the city transport office talking on local radio about a new river bus service.",
    },
    {
      type: "audio",
      title: "Section 2: the new river bus",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Good morning, and thanks for having me on the programme. I'm Paul Grady from the city transport office, and I'm here to talk about the new river bus service, which starts on the first of May.\n\nMany people assume the service is mainly for tourists, and of course we hope visitors will use it. But the real reason we introduced it is the traffic on the city's bridges. At rush hour they're simply full, while the river is like an empty road running right through the middle of the city.\n\nThere are six boats, and they're the same size as the old ferries that used to cross the river here. What's new is that they're fully electric, so they're very quiet, and there are no fumes for passengers on the open deck. They're not especially fast, though. The trip from one end of the route to the other takes about forty minutes, which is roughly the same as the bus.\n\nAs for tickets, you can't pay with cash on board. You can use the same travel card you use on the city buses, and the fare is the same too. Bikes are allowed on all the boats, except during the morning and evening rush hours.\n\nMy advice for the first few weeks is to allow extra time. We're expecting a lot of curious passengers, and if a boat is full, you'll have to wait twenty minutes for the next one.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Questions 10–14: multiple choice",
        instructions: "Choose the correct letter, A, B or C.",
        questions: [
          {
            prompt: "10. What is the main reason for the new service?",
            options: ["to attract more tourists", "to reduce traffic on the bridges", "to replace the old ferries"],
            answer: 1,
            explanation: "“Many people assume the service is mainly for tourists… But the real reason… is the traffic on the city's bridges.” A is someone else's assumption.",
          },
          {
            prompt: "11. What is different about the new boats?",
            options: ["They are larger than the old ferries.", "They are quicker than the buses.", "They do not produce fumes."],
            answer: 2,
            explanation: "They are “fully electric… there are no fumes”. They are the same size as the old ferries and take about as long as the bus.",
          },
          {
            prompt: "12. What does the speaker say about tickets?",
            options: ["Passengers can pay the crew in cash.", "The fare is the same as on city buses.", "Travel cards are not accepted."],
            answer: 1,
            explanation: "“You can use the same travel card you use on the city buses, and the fare is the same too.” Cash is not accepted on board.",
          },
          {
            prompt: "13. What is the rule about bikes?",
            options: ["They can be taken on board at any time.", "They are not allowed at the busiest times.", "They need a separate ticket."],
            answer: 1,
            explanation: "Bikes are allowed “except during the morning and evening rush hours”, which are the busiest times.",
          },
          {
            prompt: "14. What does the speaker advise passengers to do?",
            options: ["travel early in the morning", "allow extra time for journeys", "book a seat in advance"],
            answer: 1,
            explanation: "“My advice for the first few weeks is to allow extra time,” because full boats may mean a twenty-minute wait.",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Section 3: Questions 15–21",
      body: "You will hear two students, Zara and Leo, choosing ideas for a proposal to reduce energy use in their student halls.",
    },
    {
      type: "audio",
      title: "Section 3: an energy-saving proposal",
      voice: "uk",
      transcript:
        "Leo: So, Zara, we need to choose which ideas to include in our proposal for cutting energy use in the halls.\nZara: Right, Leo. Let's start with putting meters in every kitchen, so people can see how much electricity they're using.\nLeo: I think that's essential. If people can't see what they're using, they've got no reason to change.\nZara: Absolutely. That's the first thing I'd do as well.\nLeo: What about a competition between the different halls? The hall that saves the most energy wins a prize.\nZara: Hmm, I'm not convinced. These things are exciting for a couple of weeks, and then everyone forgets about them.\nLeo: Maybe, but I still think it would get people talking about energy, and that's a start.\nZara: OK. Next, motion sensors for the corridor lights.\nLeo: They're expensive to install, though, aren't they?\nZara: At first, yes. But the savings on electricity would cover the cost within a couple of years. I've checked the figures.\nLeo: Really? I didn't realise it was that quick. In that case, I agree they'd soon pay for themselves.\nZara: Then there's the idea of turning the heating down by one degree.\nLeo: I'm against that. Some of the older buildings are already cold in winter.\nZara: Well, one degree isn't much. But I do think we'd get a lot of complaints, so maybe it's not worth the trouble.\nLeo: And finally, asking every student to sign a pledge to save energy.\nZara: Honestly, I think it's a waste of time. Signing a piece of paper doesn't change anyone's habits.\nLeo: I agree with you there. People would sign it and forget it.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Questions 15–21: who says it?",
        instructions: "Who expresses each opinion? Choose A if only Zara says it, B if only Leo says it, or C if they both agree. You may use any letter more than once.",
        left: [
          "15. Meters would give people a reason to change their behaviour.",
          "16. Students would soon lose interest in a competition.",
          "17. A competition would encourage discussion about energy.",
          "18. Motion sensors would soon pay for themselves.",
          "19. Some buildings are already too cold.",
          "20. Lowering the heating would lead to many complaints.",
          "21. A pledge would not change how students behave.",
        ],
        right: ["Zara", "Leo", "both Zara and Leo"],
        answer: [2, 0, 1, 2, 1, 0, 2],
      },
    },
    {
      type: "text",
      title: "Section 4: Questions 22–29",
      body: "You will hear part of a lecture about the psychology of waiting. The headings show the main points of the lecture.",
    },
    {
      type: "audio",
      title: "Section 4: the psychology of waiting",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Today we're looking at the psychology of waiting. We all spend a surprising amount of time waiting, in shops, at airports, on the phone, and researchers have found that how long a wait feels can matter as much as how long it actually is.\n\nThe first principle is that empty time feels longer than busy time. People who have nothing to do while they wait tend to overestimate how long they've been waiting. That's one reason some buildings place mirrors next to the elevators, and why many waiting rooms provide magazines or screens.\n\nThe second principle concerns uncertainty. A wait with no end in sight feels much longer than one where you know how long it will take. This is why displays that count down the minutes until the next train are so popular, even though they don't make the train arrive any sooner.\n\nThird, unexplained waits feel longer than explained ones. If a pilot announces that the plane is waiting for a gate to become free, passengers are generally more patient than if they're told nothing at all.\n\nFinally, there's fairness. Customers get far more annoyed when someone who arrived after them is served first. For this reason, many banks and post offices have replaced several separate lines with one single line that feeds all the counters. On average, the wait isn't any shorter, but it feels fairer, because people are served in the order they arrived.\n\nSo what does this mean for businesses? Simply reducing waiting times is often expensive. Changing how a wait feels can be much cheaper, and sometimes just as effective.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Questions 22–29: note completion",
        instructions: "Complete the notes. Write ONE WORD ONLY for each answer.",
        text: "The psychology of waiting\n\nMain idea: how long a wait {{0}} can matter as much as its real length\n\n1. Empty time\n- people with nothing to do {{1}} how long they have waited\n- e.g. {{2}} placed next to elevators\n\n2. Uncertainty\n- displays that count down the {{3}} are popular\n\n3. Explanations\n- passengers are more {{4}} when they are told the reason for a delay\n\n4. Fairness\n- customers are annoyed if a later arrival is {{5}} first\n- one single line: the wait is not shorter, but it feels {{6}}\n\nConclusion: changing how a wait feels can be {{7}} than reducing it",
        answers: [
          ["feels"],
          ["overestimate"],
          ["mirrors"],
          ["minutes"],
          ["patient"],
          ["served"],
          ["fairer"],
          ["cheaper"],
        ],
      },
    },
    {
      type: "text",
      title: "Section 5: Questions 30–32",
      body: "You will hear a conversation between two colleagues, Erin and Tomás, at an online shop. Look at the price list before you listen.",
    },
    {
      type: "table",
      title: "Shipping options",
      headers: ["Shipping option", "Delivery time", "Price"],
      rows: [
        ["Standard", "5 working days", "$8"],
        ["Express", "2 working days", "$18"],
        ["Overnight", "next working day", "$30"],
        ["Same-day courier", "same day (local addresses only)", "$45"],
      ],
    },
    {
      type: "audio",
      title: "Section 5: a damaged order",
      voice: "us",
      cast: { Tomás: "male" },
      transcript:
        "Erin: Tomás, do you have a minute? A customer in Denver just called. The coffee machine we sent last week arrived with a cracked water tank.\nTomás: Oh no. Do they want a refund?\nErin: No, they just want a new tank. They're hosting a big family event on Saturday and need the machine working by then, so the tank has to arrive within three days.\nTomás: OK. The same-day courier is out, since that's for local deliveries only. What about overnight?\nErin: We could, but there's no need to pay that much. Let's go with the cheapest option that still gets there in time.\nTomás: Fair enough. I'll pack the tank this morning. Should we send anything else?\nErin: Let's put in a voucher for ten per cent off their next order, to say sorry. And could you also email the warehouse? I want them to check the rest of that batch for cracks before anything else goes out.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Questions 30–32: TOEIC Part 3 with a graphic",
        instructions: "Choose the best answer.",
        questions: [
          {
            prompt: "30. What problem does Erin report?",
            options: ["An order was sent to the wrong address.", "A product arrived damaged.", "A customer was charged twice.", "A delivery is late."],
            answer: 1,
            explanation: "“The coffee machine… arrived with a cracked water tank.”",
          },
          {
            prompt: "31. Look at the graphic. How much will the company pay for shipping?",
            options: ["$8", "$18", "$30", "$45"],
            answer: 1,
            explanation: "The tank must arrive “within three days”, and they choose “the cheapest option that still gets there in time”. Standard (5 days) is too slow, the courier is for local addresses only, and overnight costs more than needed. Express (2 days) costs $18.",
          },
          {
            prompt: "32. What does Erin ask Tomás to do?",
            options: ["Give the customer a refund", "Call the customer back", "Contact the warehouse", "Order a new coffee machine"],
            answer: 2,
            explanation: "“Could you also email the warehouse?” The customer does not want a refund, and Tomás has already offered to pack the tank.",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Section 6: Questions 33–35",
      body: "You will hear a talk at the start of a business meeting.",
    },
    {
      type: "audio",
      title: "Section 6: a sales update",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Good morning, everyone. I'll keep this brief, because the regional managers are joining us at ten. As you've probably seen in the figures I sent round, our online sales grew by twelve per cent this quarter, but sales in our shops fell slightly. The main reason seems to be the roadworks outside our two biggest branches, which have made them difficult to reach since February. The council has told us the work should be finished by the end of next month, so we expect shop sales to recover over the summer.\n\nIn the meantime, we're going to try something new. From next week, customers who order online will be able to collect their items from any of our shops, free of charge. We hope this will bring more people through our doors.\n\nFor this to work, staff in every branch need to understand the collection system. So I'd like each of you to book your team onto one of the training sessions on the intranet before Friday.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex6",
        kind: "mcq",
        title: "Questions 33–35: TOEIC Part 4 talk",
        instructions: "Choose the best answer.",
        questions: [
          {
            prompt: "33. What is the speaker mainly discussing?",
            options: ["Plans to open new branches", "Recent sales results and a new service", "The results of a customer survey", "Changes to the company website"],
            answer: 1,
            explanation: "The talk reports the quarter's sales figures and then introduces free collection from shops.",
          },
          {
            prompt: "34. According to the speaker, why did sales in the shops fall?",
            options: ["Prices were increased.", "Two branches were closed.", "Roadworks made some shops hard to reach.", "More customers bought online."],
            answer: 2,
            explanation: "“The main reason seems to be the roadworks outside our two biggest branches.” Online sales grew, but the speaker does not give this as the reason.",
          },
          {
            prompt: "35. What are the listeners asked to do?",
            options: ["Arrange training for their staff", "Send sales figures to the regional managers", "Contact the council", "Collect online orders from the shops"],
            answer: 0,
            explanation: "“I'd like each of you to book your team onto one of the training sessions… before Friday.”",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Section 7: Questions 36–39",
      body: "You will hear a short talk in a biology class. Take notes, then answer the questions. In the TOEFL test you may not see the questions until the talk ends.",
    },
    {
      type: "audio",
      title: "Section 7: why songbirds migrate at night",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Many people are surprised to learn that a large number of songbirds, small birds like warblers and thrushes, migrate at night. On a spring night, thousands of them may be passing overhead, completely unseen. So why travel in the dark?\n\nResearchers have suggested several advantages. First, the air at night is usually cooler and calmer. Flying is hard work, and a small bird flying through hot, rough air during the day would lose more water and burn more energy.\n\nSecond, flying at night leaves the daytime free for feeding. A songbird can't really eat while it's flying, so it lands at dawn, spends the day refuelling on insects or berries, and sets off again after dark.\n\nThird, there are fewer predators. Hawks and falcons, which hunt by sight, are mostly active during the day.\n\nAnd how do the birds find their way? Experiments with birds in planetariums suggest that many species can use the pattern of the stars to keep a steady direction.\n\nNight travel has its own dangers, though. Bright city lights can confuse migrating birds, which is why some cities now encourage tall buildings to switch off unnecessary lights during migration season.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex7",
        kind: "mcq",
        title: "Questions 36–39: TOEFL Academic Talk",
        instructions: "Choose the best answer.",
        questions: [
          {
            prompt: "36. What is the talk mainly about?",
            options: [
              "How songbirds find food during the winter",
              "Why many songbirds migrate at night",
              "How city lights affect all kinds of wildlife",
              "Which birds are the fastest fliers",
            ],
            answer: 1,
            explanation: "The professor asks “So why travel in the dark?” and the whole talk answers that question. City lights are one detail near the end.",
          },
          {
            prompt: "37. According to the professor, what do migrating songbirds do during the day?",
            options: ["They fly at high altitude.", "They feed to build up energy.", "They hide from bright lights.", "They follow the sun."],
            answer: 1,
            explanation: "A songbird “spends the day refuelling on insects or berries”.",
          },
          {
            prompt: "38. Why does the professor mention planetariums?",
            options: [
              "To describe evidence that birds use the stars to navigate",
              "To suggest a place where students can watch birds",
              "To explain why birds avoid cities",
              "To compare birds with human travellers",
            ],
            answer: 0,
            explanation: "Experiments in planetariums “suggest that many species can use the pattern of the stars”. The detail is evidence for how birds find their way.",
          },
          {
            prompt: "39. What can be inferred about hawks and falcons?",
            options: [
              "They also migrate at night.",
              "They find it harder to hunt small birds in the dark.",
              "They are attracted by city lights.",
              "They eat mainly insects and berries.",
            ],
            answer: 1,
            explanation: "They “hunt by sight” and are “mostly active during the day”, so a bird flying at night is safer from them. The professor implies this but does not say it directly.",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Check your score",
      body: "Add up your correct answers out of 39.\n\n- **33–39**: an excellent B2 result. You are ready for the C1 course.\n- **25–32**: a solid B2 result. Review the sections where you lost the most marks.\n- **Below 25**: go back to the lessons below for the sections you found hardest, then try this test again in a week.\n\nWhere to review:\n\n- Section 1 (form completion): *Predicting answers before you listen* and *Sentence completion and word limits*\n- Section 2 (multiple choice): *Beating multiple-choice distractors*\n- Section 3 (who says it?): *Matching speakers and opinions*\n- Section 4 (note completion): *Note-taking for talks and lectures* and *Academic talks: main idea and details*\n- Section 5 (graphic): *Conversations with graphics*\n- Section 6 (talk): *Business talks: ads, reports and meetings*\n- Section 7 (academic talk): *Academic talks: main idea and details*\n- Missed words with a British or American voice: *Different accents and speeds*",
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "IELTS Listening has 40 questions in four parts, and you hear each recording once. Use the reading time before each part to predict answers and check the word limit, and remember that answers come in the same order as the recording.",
    },
    {
      exam: "toeic",
      body: "In Parts 3 and 4, read the three questions, and any graphic, before each conversation or talk. Answer as soon as you hear the information, then move straight on, because the next set starts quickly.",
    },
    {
      exam: "toefl",
      body: "In Listen to an Academic Talk you hear a short talk followed by four questions on the main idea, details, organisation and inference. Note the main idea first, then the examples and what each one shows.",
    },
  ],
  vocabulary: [
    { word: "off-peak", meaning: "at times when fewer people use a service, and it is usually cheaper", example: "Off-peak membership is cheaper than full membership.", topic: "everyday" },
    { word: "recommend", meaning: "to say that someone or something is good and worth trying", example: "A colleague recommended the tennis club.", topic: "everyday" },
    { word: "fumes", meaning: "smoke or gas that smells strong and can be harmful", example: "The electric boats produce no fumes.", topic: "environment" },
    { word: "rush hour", meaning: "the busy time when most people travel to or from work", example: "Bikes aren't allowed during the rush hour.", topic: "travel" },
    { word: "pledge", meaning: "a serious promise, often a written one", example: "Students were asked to sign a pledge to save energy.", topic: "society" },
    { word: "motion sensor", meaning: "a device that notices movement and switches something on", example: "Motion sensors turn the lights on when someone walks past.", topic: "technology" },
    { word: "overestimate", meaning: "to think that something is bigger or longer than it really is", example: "Bored people overestimate how long they have waited.", topic: "science" },
    { word: "voucher", meaning: "a piece of paper or code that gives you money off something", example: "We'll include a voucher for ten per cent off.", topic: "business" },
    { word: "batch", meaning: "a group of things produced at the same time", example: "Please check the rest of the batch for cracks.", topic: "business" },
    { word: "roadworks", meaning: "repairs being done to a road, which often cause delays", example: "Roadworks made the shops difficult to reach.", topic: "travel" },
    { word: "intranet", meaning: "a private computer network used inside a company", example: "Book a training session on the intranet.", topic: "technology" },
    { word: "predator", meaning: "an animal that hunts and kills other animals for food", example: "Hawks are predators that hunt by sight.", topic: "science" },
  ],
  keyPoints: [
    "Predict the type of answer and check the word limit before every recording.",
    "Wait for the final decision: first ideas, corrections and rejected options are distractors.",
    "In speaker-matching tasks, a view is shared only when the other speaker clearly agrees.",
    "With graphics, listen for the information in a different column from the options.",
    "In talks, the main idea comes first and requests come last; every detail has a job.",
  ],
};

export default lesson;
