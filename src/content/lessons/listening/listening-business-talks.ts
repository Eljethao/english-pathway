import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-business-talks",
  title: "Business talks: ads, reports and meetings",
  summary:
    "Understand short business talks such as advertisements, news reports and meeting excerpts, and answer TOEIC Part 4 questions about the purpose, the speaker and audience, key details and what happens next.",
  skill: "listening",
  level: "B2",
  order: 9,
  minutes: 25,
  exams: [{ exam: "toeic", task: "Listening Part 4 – Talks" }],
  objectives: [
    "Identify the purpose of a talk and the speaker or audience from the first few sentences",
    "Recognise the typical structure of advertisements, business news reports and meeting excerpts",
    "Catch requests and next steps near the end of a talk",
    "Answer TOEIC Part 4 questions on purpose, speaker, detail and next action",
  ],
  warmUp: [
    "Think of an advertisement you heard recently. What was it selling, and what did it ask you to do at the end?",
    "When a manager speaks at the end of a meeting, what kind of information do they usually give?",
  ],
  learn: [
    {
      type: "text",
      title: "How TOEIC Part 4 works",
      body: "In TOEIC Listening Part 4 you hear short talks by **one speaker**, such as announcements, voicemail messages, presentations, advertisements, news reports and excerpts from meetings. Each talk has three questions, and you can read the questions before the talk begins.\n\nBecause there is only one speaker, you cannot wait for a second person to react. Instead, you use the **structure of the talk**. Most business talks are organised in a predictable way:\n\n1. **Beginning**: who is speaking, to whom, and why (*Good morning, everyone…*, *In business news today…*, *Are you tired of…?*)\n2. **Middle**: the details: the problem, the product, the change, the reasons\n3. **End**: what listeners should do, or what will happen next (*Please…*, *Call us today…*, *Next, we'll…*)\n\nThe three questions usually follow the same order: one about the beginning, one about a detail, and one about the end.",
    },
    {
      type: "table",
      title: "Question types and where to listen",
      headers: ["Question", "Where to listen", "Useful clues"],
      rows: [
        ["What is the purpose of the talk? / What is being advertised?", "the first one or two sentences", "*I'm calling to…*, *I want to tell you about…*, *Introducing…*"],
        ["Who most likely is the speaker? / Who are the listeners?", "the opening, and topic words throughout", "*Welcome, new staff…*, *As your branch manager…*, words like *patients*, *guests*, *shoppers*"],
        ["What does the speaker say about…?", "the middle", "numbers, reasons, changes: listen for paraphrase"],
        ["Why does the speaker say “…”?", "the sentences just before and after the quotation", "think about the speaker's intention, not the literal words"],
        ["What are listeners asked to do? / What will happen next?", "the last two or three sentences", "*Please…*, *Make sure you…*, *I'd like you to…*, *After the break, we'll…*"],
      ],
    },
    {
      type: "example",
      title: "Three kinds of business talk",
      items: [
        "**Advertisement**: a question or problem → the product and its benefits → a special offer → how to buy or get in touch",
        "**News report**: the main news in one sentence → reasons and figures → reactions or problems → what happens next",
        "**Meeting excerpt**: the topic or result → a problem or change → the plan → a task or deadline for the listeners",
      ],
    },
    {
      type: "audio",
      title: "Quick check audio: five openings",
      voice: "us",
      cast: { Narrator: "female" },
      transcript:
        "Narrator: Opening one.\nGrant: Are your office printers costing you more than they should? At PrintSmart, we rent high-quality printers to small businesses for one low monthly fee, and repairs are always included.\nNarrator: Opening two.\nInes: Good morning, everyone, and thanks for coming in early. Before we open the doors to customers today, I want to go over some changes to our returns policy.\nNarrator: Opening three.\nGrant: In business news this hour, the supermarket chain FreshWay has announced that it will close twelve of its smaller stores by the end of the year.\nNarrator: Opening four.\nInes: Welcome to the Halden Glassworks. Before we start the tour, please put on the safety glasses you were given at the entrance, and stay behind the yellow line at all times.\nNarrator: Opening five.\nGrant: OK, let's get started. The main item on today's agenda is the delay to the new website, so I've asked Paolo from the design team to explain what happened.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: the first few seconds",
        instructions: "Listen to five openings of business talks. Choose the best answer for each one.",
        questions: [
          {
            prompt: "Opening 1: What is being advertised?",
            options: ["A printer repair course", "A printer rental service", "An office cleaning company", "A shop selling used printers"],
            answer: 1,
            explanation: "“We rent high-quality printers to small businesses for one low monthly fee.” Repairs are included, but they are not the product.",
          },
          {
            prompt: "Opening 2: Who most likely are the listeners?",
            options: ["Shop employees", "Customers returning goods", "New managers at a training course", "Delivery drivers"],
            answer: 0,
            explanation: "The speaker talks to people who arrive “before we open the doors to customers”, so they work in the shop. The returns policy is a distractor that points to customers.",
          },
          {
            prompt: "Opening 3: What is the main purpose of the report?",
            options: ["To advertise a supermarket", "To report a company's decision", "To describe a new store opening", "To explain changes to food prices"],
            answer: 1,
            explanation: "FreshWay “has announced that it will close twelve of its smaller stores”. That is a business decision.",
          },
          {
            prompt: "Opening 4: Where is the talk most likely taking place?",
            options: ["At a shop selling glasses", "At an eye clinic", "At a factory", "At a museum entrance desk"],
            answer: 2,
            explanation: "A “glassworks” is a factory where glass is made, and the safety glasses and the yellow line suggest a working site. “Safety glasses” is a word match for the shop and clinic options.",
          },
          {
            prompt: "Opening 5: What is the main topic of the meeting?",
            options: ["Hiring a new designer", "A delay to a project", "Changes to the meeting schedule", "The cost of a website"],
            answer: 1,
            explanation: "“The main item on today's agenda is the delay to the new website.”",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "Before you listen",
      body: "Read the three questions. Decide where in the talk each answer will probably come.\n\n1. What is being advertised? → *beginning*\n2. What does the speaker say new customers receive? → *middle: listen for “new customers” or a paraphrase*\n3. What are listeners encouraged to do? → *end*",
    },
    {
      type: "audio",
      title: "Model talk: a radio advertisement",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Is your team spending more time in meetings than actually getting work done? Then it's time to try TaskBridge, the project management app designed for small and medium-sized businesses. With TaskBridge, everyone can see who is doing what, and when it's due, on a single screen. No more long email chains, and no more missed deadlines.\n\nTaskBridge works on computers, tablets and phones, and it connects easily with the calendar and email tools you already use. And because we know that changing systems can be stressful, every new customer gets a free one-hour online training session with one of our experts.\n\nRight now, we're offering a special deal. Sign up before the end of March and pay half price for your first three months. To start your free trial, just visit taskbridge dot com and click Get Started. TaskBridge: less talking, more doing.",
    },
    {
      type: "text",
      title: "How a strong listener answers",
      body: "1. **Software for organising projects.** The opening question (*more time in meetings than… getting work done?*) sets up a problem, and the next sentence names the product: *a project management app*. An option such as “a meeting room booking service” would be a word match on *meetings*.\n2. **A free training session.** The speaker says *every new customer gets a free one-hour online training session*. The trap is *three months*: they are **half price**, not free.\n3. **Visit a website to start a trial.** The last instructions are *visit taskbridge dot com and click Get Started*. Advertisements almost always end with a call to action: call, visit, sign up or come in.\n\nThe strong listener used the **structure** of the advertisement: problem, product, benefits, offer, action. Knowing that structure tells you when each answer will arrive.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Talk 1: a business news report",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "And now the business news. The electric bike maker Voltra announced this morning that it will open a new factory just outside the town of Marston next spring. The company, which currently builds all of its bikes overseas, says the move will cut delivery times for European customers from around six weeks to under ten days. The factory is expected to create about four hundred jobs, most of them in assembly and testing.\n\nVoltra's chief executive, Helen Okoro, said the decision was driven mainly by demand. Sales of the company's bikes doubled last year, and customers had complained about long waits for their orders.\n\nNot everyone is pleased, however. Some local residents are worried about extra traffic on the narrow roads near the site. The company says it will pay for a new access road before production begins.\n\nVoltra will hold a public meeting about the plans at Marston Town Hall next Thursday evening. We'll have more on that story in our seven o'clock bulletin. Now, here's Tom with the weather.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Talk 1 (TOEIC Part 4: news report)",
        instructions: "Read the questions first. Then listen and choose the best answer.",
        questions: [
          {
            prompt: "What is the report mainly about?",
            options: ["A company's plan to build a factory", "A fall in sales of electric bikes", "A new road in Marston", "A company moving its head office overseas"],
            answer: 0,
            explanation: "The first sentence gives the main news: Voltra “will open a new factory just outside the town of Marston”.",
          },
          {
            prompt: "According to the report, why did Voltra make its decision?",
            options: [
              "To lower its building costs",
              "Because demand for its bikes has risen sharply",
              "Because the local council asked it to",
              "To reduce traffic near its offices",
            ],
            answer: 1,
            explanation: "“The decision was driven mainly by demand. Sales… doubled last year.” “Risen sharply” paraphrases “doubled”.",
          },
          {
            prompt: "What will happen next Thursday?",
            options: ["Production will begin.", "A new road will open.", "A public meeting will take place.", "The company will announce its sales figures."],
            answer: 2,
            explanation: "“Voltra will hold a public meeting about the plans at Marston Town Hall next Thursday evening.” The road will be built before production begins, with no date given.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Talk 2: the end of a team meeting",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Thanks, everyone. Before we finish, I want to share the results of last month's customer survey, because they affect all of us in the support team. The good news is that customers are very happy with how friendly and knowledgeable you are. Our scores for staff knowledge were the highest they've ever been.\n\nThe bad news is waiting times. On average, customers waited eleven minutes before they could speak to someone on the phone, and many of them simply gave up and hung up.\n\nSo we're making two changes. First, starting next Monday, we're adding a live chat option to our website, so customers with simple questions won't need to call. Second, we're changing the shift pattern so that more of you are available between twelve and two, which is our busiest time of day.\n\nI know some of you have concerns about the new shifts, and that's completely understandable. So I'd like each of you to look at the draft rota I've emailed you and tell me by Wednesday if there's a day that won't work for you. Rachel from human resources will also be here on Thursday afternoon to answer any questions.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Talk 2 (TOEIC Part 4: meeting excerpt)",
        instructions: "Read the questions first. Then listen and choose the best answer.",
        questions: [
          {
            prompt: "Who most likely are the listeners?",
            options: ["Website designers", "Customer service staff", "Human resources officers", "Market researchers"],
            answer: 1,
            explanation: "The speaker talks to “all of us in the support team”, who answer customers' phone calls. Rachel from human resources is a different person who will visit later.",
          },
          {
            prompt: "What problem does the speaker mention?",
            options: [
              "Customers have to wait too long on the phone.",
              "Staff do not know enough about the products.",
              "The website is often unavailable.",
              "Too few customers completed the survey.",
            ],
            answer: 0,
            explanation: "“The bad news is waiting times… eleven minutes.” Staff knowledge is the good news, so option B is the opposite of what the speaker says.",
          },
          {
            prompt: "What are the listeners asked to do by Wednesday?",
            options: ["Fill in a customer survey", "Try out the new live chat", "Meet someone from human resources", "Respond about a proposed work schedule"],
            answer: 3,
            explanation: "“Look at the draft rota… and tell me by Wednesday if there's a day that won't work for you.” A rota is a work schedule. The meeting with Rachel is on Thursday.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Talk 3: an advertisement for a workspace",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Working from home sounded great at first, didn't it? But if your kitchen table has turned into your office, and the noise from next door is driving you mad, come and see what Harbour Desk can offer.\n\nHarbour Desk is a modern co-working space right next to Central Station, with fast internet, quiet zones, meeting rooms you can book by the hour, and free coffee all day. Choose a flexible pass for ten days a month, or a fixed desk that's yours whenever you need it. Membership also includes regular networking evenings, where you can meet other freelancers and small business owners.\n\nStill not sure? Well, seeing is believing. This Saturday we're holding an open day from ten until four, with guided tours every hour. And if you mention this advertisement when you book your tour, you'll get your first week of membership absolutely free.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Talk 3 (TOEIC Part 4: advertisement)",
        instructions: "Read the questions first. Then listen and choose the best answer.",
        questions: [
          {
            prompt: "Who is the advertisement mainly aimed at?",
            options: ["People who work from home", "Station staff", "Owners of cafés", "People looking for a new flat"],
            answer: 0,
            explanation: "The opening describes people whose “kitchen table has turned into your office”, so the target audience is home workers.",
          },
          {
            prompt: "Why does the speaker say, “seeing is believing”?",
            options: [
              "To suggest that online photos can be misleading",
              "To encourage listeners to visit the space in person",
              "To explain that the building is easy to find",
              "To describe the view from the meeting rooms",
            ],
            answer: 1,
            explanation: "It comes just before the open day with guided tours. The speaker means: come and see it for yourself, and you will be convinced.",
          },
          {
            prompt: "What can listeners receive if they mention the advertisement?",
            options: ["Free coffee", "A discount on a fixed desk", "A free week of membership", "A free ticket to a networking evening"],
            answer: 2,
            explanation: "“If you mention this advertisement when you book your tour, you'll get your first week of membership absolutely free.” Free coffee is part of every membership.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Talk endings: what happens next?",
      voice: "us",
      cast: { Narrator: "male" },
      transcript:
        "Narrator: Ending one.\nDiane: So that's everything you need to know about the new expenses system. Now, if you open the laptops in front of you, we'll try submitting a sample claim together.\nNarrator: Ending two.\nMarcus: Thank you all for your patience while we sorted out the problem with the lifts. Lunch is now being served in the room next door, and the afternoon session will start at two.\nNarrator: Ending three.\nRuth: I'll stop there, because I can see we're running out of time. Please take one of the feedback forms by the door, fill it in, and leave it in the box on your way out.\nNarrator: Ending four.\nVictor: Before we begin the factory tour, there's a short safety video. Please take a seat facing the screen, and it'll start in a moment.\nNarrator: Ending five.\nAna: And with that, it's my pleasure to hand over to our guest speaker, the author of the best-selling book Smarter Selling, Joel Price.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "match",
        title: "Next actions",
        instructions: "Listen to the endings of five talks. What will the listeners do next? Choose the correct option for each ending. There are two options you do not need.",
        left: ["Ending 1", "Ending 2", "Ending 3", "Ending 4", "Ending 5"],
        right: [
          "listen to a guest speaker",
          "complete a questionnaire",
          "go on a tour of the factory",
          "practise using a new system",
          "watch a safety film",
          "buy a book",
          "have a meal",
        ],
        answer: [3, 6, 1, 4, 0],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "In Part 4, read the three questions before the talk starts. Questions about the purpose, the speaker or the listeners are usually answered in the first few sentences, so be ready from the very first word.",
    },
    {
      exam: "toeic",
      body: "Questions like “What are listeners asked to do?” or “What will happen next?” are usually answered near the end of the talk. Listen for *please*, *I'd like you to*, *make sure* and *next*. Be careful with tasks that someone else will do, or that happen later than the question asks.",
    },
    {
      exam: "toeic",
      body: "For “Why does the speaker say…?” questions, don't choose an option just because it matches the literal meaning of the words. Think about what the speaker wants the listeners to understand or do at that moment in the talk.",
    },
  ],
  vocabulary: [
    { word: "sign up", meaning: "to agree to join a service, course or plan", example: "Sign up before the end of March to get the discount.", topic: "business" },
    { word: "free trial", meaning: "a period when you can use a product without paying, to see if you like it", example: "Start your free trial on our website.", topic: "business" },
    { word: "assembly", meaning: "the process of putting the parts of a product together", example: "Most of the new jobs will be in assembly.", topic: "work" },
    { word: "demand", meaning: "how much people want to buy a product or service", example: "Strong demand led the company to build a new factory.", topic: "business" },
    { word: "chief executive", meaning: "the person with the highest position in a company", example: "The chief executive announced the plan this morning.", topic: "business" },
    { word: "bulletin", meaning: "a short news programme on radio or television", example: "We'll have more in our seven o'clock bulletin.", topic: "society" },
    { word: "shift", meaning: "a period of work at a particular time of day", example: "More staff will work the midday shift.", topic: "work" },
    { word: "rota", meaning: "(British English) a list showing who works when; also called a schedule", example: "Please check the draft rota and reply by Wednesday.", topic: "work" },
    { word: "co-working space", meaning: "a shared office where people from different companies rent desks", example: "She rents a desk in a co-working space near the station.", topic: "work" },
    { word: "networking", meaning: "meeting people who might be useful to you in your work", example: "Membership includes networking evenings.", topic: "business" },
    { word: "freelancer", meaning: "a person who works for several companies and is not employed by one", example: "Many freelancers use co-working spaces.", topic: "work" },
    { word: "call to action", meaning: "the part of an advert that tells people what to do next", example: "Every advertisement ends with a call to action.", topic: "business" },
  ],
  keyPoints: [
    "TOEIC Part 4 talks have one speaker and three questions, which usually follow the beginning, middle and end of the talk.",
    "The purpose, the speaker and the audience are normally clear from the first one or two sentences.",
    "Advertisements move from problem to product, offer and action; news reports from main news to reasons, reactions and next steps.",
    "Requests and next steps come near the end: listen for “please”, “I'd like you to” and “next”.",
    "Watch for word matches and for actions that someone else will do or that happen at a different time.",
  ],
};

export default lesson;
