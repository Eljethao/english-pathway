import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-matching-headings",
  title: "Matching headings",
  summary:
    "Learn to identify the main idea of each paragraph, avoid word-matching traps and use elimination to beat the distractor headings in IELTS Matching headings.",
  skill: "reading",
  level: "B2",
  order: 2,
  minutes: 20,
  exams: [{ exam: "ielts", task: "Reading – Matching headings" }],
  objectives: [
    "Summarise the main idea of a paragraph in a few words",
    "Choose the heading that covers the whole paragraph, not just one detail",
    "Recognise distractor headings that repeat words from the text",
    "Use elimination to complete the task efficiently",
  ],
  warmUp: [
    "Think of a news headline you read recently. How much did it tell you about the article?",
    "What is the difference between the *topic* of a paragraph and its *main idea*?",
  ],
  learn: [
    {
      type: "text",
      title: "How the task works",
      body: "In IELTS Matching headings, you get a list of headings (numbered i, ii, iii… in the exam) and a passage divided into lettered paragraphs. You choose the best heading for each paragraph. There are always **more headings than paragraphs**, so some headings are distractors that you will not use.\n\nA heading summarises the **main idea of the whole paragraph**. It is not a single detail, and it is more than just the topic.",
    },
    {
      type: "example",
      title: "Topic, detail or main idea?",
      items: [
        "Paragraph: “Coffee arrived in Europe in the 1600s. At first, some people called it dangerous, a few rulers tried to ban it, and doctors warned that it caused illness. Within a century, however, coffee houses had opened in every major city.”",
        "**Coffee in Europe** → topic only: too general, it says nothing about the point of the paragraph",
        "**Doctors' warnings about coffee** → detail only: true, but it describes just one part of one sentence",
        "**From early suspicion to wide acceptance** → main idea: it covers the whole paragraph",
      ],
    },
    {
      type: "text",
      title: "A five-step method",
      body: "1. Read all the headings first. Underline the key idea in each one and notice headings that look similar.\n2. Skim one paragraph. Read the first two sentences and the last sentence carefully. The main idea is often at the start, but it may come after a turning word such as *however*, *yet* or *but*.\n3. Say the main idea to yourself in four or five words **before** you look at the headings.\n4. Choose the heading that matches your summary, then check that it fits the **whole** paragraph.\n5. Do the easiest paragraphs first, cross out headings you have used, and leave the hardest paragraph until the end, when fewer headings remain.",
    },
    {
      type: "text",
      title: "Three common traps",
      body: "- **Word matching**: a heading repeats a word from the paragraph (for example *honey* or *cost*), but the paragraph is not really about that. Match ideas, not words.\n- **Too narrow**: the heading describes one example or one sentence, not the whole paragraph.\n- **Wrong direction**: the heading has the right topic but the wrong idea, for example *Benefits of…* when the paragraph is about problems, or *Causes of…* when it is about effects.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "The list of headings is not in the same order as the passage, so check every remaining heading each time. If the instructions give an example (e.g. Paragraph A: iv), cross that heading out first; it will not be used again.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "The rise of urban beekeeping",
      labelled: true,
      paragraphs: [
        "In the last fifteen years, beehives have appeared in some unexpected places: on hotel roofs in London, on apartment balconies in Paris and on top of office blocks in New York. What was once seen as a countryside activity has become a popular hobby for city dwellers, and in some cities the number of registered hives has more than tripled. Beekeeping clubs report long waiting lists for their beginners' courses, and shops now sell compact hives designed to fit on a small terrace.",
        "Part of the attraction is the honey itself. Because cities contain a wide range of flowering plants in parks, gardens and along roadsides, urban honey often has a more complex flavour than honey from farmland, where bees may visit only one crop. Some restaurants now advertise honey from their own rooftops on the menu, and customers are willing to pay a premium for it. Jars labelled with the name of a particular neighbourhood have become popular gifts, much like local wine.",
        "However, many beekeepers say that their main motivation is not honey but concern for the environment. They have read reports about falling bee numbers and want to do something practical to help. Keeping a hive, they argue, also teaches city people about the seasons and about where their food comes from. For many, it is a way of feeling connected to nature without leaving the city.",
        "Yet some scientists warn that this enthusiasm may be doing more harm than good. Honeybees are only one of thousands of bee species, and it is wild bees, not honeybees, that are in real danger. When too many hives are placed in one area, honeybees compete with wild bees for the same limited supply of flowers, and they can also spread disease. A study in one European capital found that wild bee numbers were lowest in the districts with the most hives. Some ecologists compare adding hives to a city to adding more cows to a field that already has too little grass.",
        "As a result, a number of cities have started to change their approach. Instead of encouraging more hives, they are asking residents to plant wildflowers, leave parts of their gardens uncut and put up “bee hotels” for solitary wild species. The message is changing from “keep bees” to “feed bees”.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader matches the headings",
      body: "**Headings**\n\n- i A hobby moves to the city\n- ii A product with a distinctive taste\n- iii Concern for nature as the real motive\n- iv An unexpected threat to wild species\n- v A new message from city authorities\n- vi The cost of starting a hive\n- vii How bees make honey\n\n**Paragraph A.** My summary: *beekeeping has spread to cities*. → **i**\n\n**Paragraph B.** It is about urban honey: its flavour and the high price people pay. → **ii**. Careful: *pay a premium* might pull you towards vi, but vi is about the cost of *starting a hive*, which the passage never discusses.\n\n**Paragraph C.** The trap is the word *honey* in the first sentence. Read on: “their main motivation is **not** honey but concern for the environment.” → **iii**\n\n**Paragraph D.** *Yet* signals a change of direction, from benefits to problems: hives compete with wild bees and spread disease. → **iv**\n\n**Paragraph E.** *As a result* links back to D; cities now promote flowers instead of more hives. → **v**\n\nHeadings vi and vii are distractors. vii uses the familiar words *bees* and *honey*, but no paragraph explains how honey is made.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Why teenagers struggle to wake up",
      labelled: true,
      timerMinutes: 7,
      paragraphs: [
        "Parents around the world know the scene: a teenager who cannot get out of bed in the morning, yawns through breakfast and then stays awake until well after midnight. For years, this behaviour was blamed on laziness or too much time in front of a screen. Research over the past three decades, however, suggests that the real explanation lies largely in biology, and that teenagers are not simply choosing to stay up late.",
        "During adolescence, the body's internal clock shifts. The hormone melatonin, which makes us feel sleepy, is released later in the evening than it is in younger children or adults, often by as much as two hours. As a result, a typical sixteen-year-old simply does not feel tired at ten o'clock, even if he or she has been up since early morning. This change usually begins around puberty and does not reverse until the early twenties.",
        "The problem is that school timetables rarely take this into account. In many countries, lessons start at eight o'clock or earlier, which means that teenagers must get up when their bodies are, in effect, still in the middle of the night. Since most of them need between eight and ten hours of sleep, many end up sleeping only six or seven hours on school nights. Lying in at the weekend helps a little, but it cannot fully make up for a week of lost sleep, and it can shift the body clock even later.",
        "The consequences of this regular sleep loss go well beyond feeling tired. Studies have linked it to poorer concentration and memory, lower exam results and a higher risk of anxiety and depression. Sleepy teenage drivers are also more likely to be involved in road accidents, particularly in the early morning. Some researchers have even compared the effect of serious sleep loss on reaction times to the effect of drinking alcohol.",
        "Some schools have responded by moving the start of the day later. When one city moved the start of its high schools from 7.50 to 8.45, a study found that students slept about half an hour longer, felt less sleepy in class and earned slightly higher grades; at one school, attendance also improved. Critics point out that later starts can cause difficulties for parents' work schedules and for after-school sports, but supporters argue that these practical problems can be solved.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        labels: "roman",
        title: "Practice 1: choose the headings",
        instructions: "Choose the correct heading for each paragraph of “Why teenagers struggle to wake up”. There are more headings than paragraphs.",
        left: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"],
        right: [
          "More than just tiredness",
          "Teenagers and road safety",
          "A change in the body's timing",
          "Experiments with a later start",
          "How much screen time teenagers really have",
          "An old explanation is challenged",
          "How adults can sleep better",
          "Why early lessons are a poor fit for teenagers",
        ],
        answer: [5, 2, 7, 0, 3],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Spot the trap",
        instructions: "These questions are about “Why teenagers struggle to wake up” and the headings in Practice 1.",
        questions: [
          {
            prompt: "A student chose “How much screen time teenagers really have” for paragraph A. Why is this wrong?",
            options: [
              "Screen time is mentioned only as an old explanation; the main idea is that biology is the real cause.",
              "Screen time is not mentioned anywhere in paragraph A.",
              "Paragraph A is about adults, not teenagers.",
            ],
            answer: 0,
            explanation: "This is a word-matching trap. The paragraph mentions screens, but the turning word *however* introduces the main idea: research points to biology.",
          },
          {
            prompt: "Why is “Teenagers and road safety” not the best heading for paragraph D?",
            options: [
              "It is too narrow: road accidents are only one of several effects in the paragraph.",
              "Road accidents are not mentioned in paragraph D.",
              "It describes paragraph E better.",
            ],
            answer: 0,
            explanation: "Paragraph D lists many effects: concentration, memory, exam results, mental health and accidents. A good heading must cover all of them.",
          },
          {
            prompt: "Paragraph C begins “The problem is that…”. What does this tell you?",
            options: [
              "The paragraph will describe a problem, so a heading about a solution is unlikely to fit.",
              "The paragraph will repeat the information in paragraph B.",
              "The paragraph is the writer's conclusion.",
            ],
            answer: 0,
            explanation: "Opening phrases like *The problem is…*, *As a result…* or *However…* show the direction of the paragraph and help you avoid “wrong direction” headings.",
          },
          {
            prompt: "Where is the main idea of paragraph E?",
            options: [
              "In the first sentence",
              "In the times 7.50 and 8.45",
              "In the critics' opinion about sports",
            ],
            answer: 0,
            explanation: "The first sentence (schools moving the start of the day later) is the topic sentence. The times and the critics' views are supporting details.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "The return of the night train",
      labelled: true,
      timerMinutes: 7,
      paragraphs: [
        "In the 1990s and early 2000s, overnight trains across Europe seemed to be disappearing. One route after another was cancelled as budget airlines offered flights between major cities for less than the price of a restaurant meal, and new high-speed lines made many daytime rail journeys much shorter. By the mid-2010s, some national rail companies had stopped running their own sleeper services altogether, arguing that they were unprofitable.",
        "Over the past decade, though, the trend has reversed. New overnight routes have been launched between a number of European capitals, and some services that had been cut have been brought back. On the most popular routes, tickets for private sleeping compartments now sell out weeks in advance, particularly in summer. Some operators are now ordering new sleeper carriages simply to keep up with the number of passengers who want to travel overnight.",
        "The main driver of this revival is concern about climate change. A journey by train produces only a fraction of the carbon emissions of the same journey by air, and a growing number of travellers, especially younger ones, say they are willing to spend more time travelling in order to reduce their environmental impact. Some companies have even introduced policies requiring staff to go by train for shorter business trips. For these travellers, a slower journey is a price worth paying for a lower carbon footprint.",
        "Night trains also offer practical advantages that travellers increasingly appreciate. Passengers board in one city centre in the evening and arrive in another the next morning, saving both the cost of a hotel and the time spent getting to and from airports. Unlike on a plane, there are no strict limits on liquids or luggage, and passengers can move around freely during the journey.",
        "Nevertheless, operators face serious obstacles. Sleeper carriages are expensive to build and can make only one journey per night, so they earn far less than daytime trains. Trains that cross borders must also deal with different electrical systems, safety rules and track charges in each country, which pushes ticket prices up. As a result, a sleeper ticket can cost several times more than a flight on the same route. Unless governments provide more support, critics warn, the revival may remain limited to a small number of profitable routes.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        labels: "roman",
        title: "Practice 2: choose the headings",
        instructions: "Choose the correct heading for each paragraph of “The return of the night train”. There are two headings that you do not need.",
        left: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"],
        right: [
          "Convenience compared with flying",
          "The comfort of modern sleeping compartments",
          "A decline caused by cheaper and faster alternatives",
          "Barriers to further growth",
          "Airlines respond to competition from rail",
          "A recent recovery in demand",
          "Green concerns drive renewed interest",
        ],
        answer: [2, 5, 6, 0, 3],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "If a passage has Matching headings, do that task first. Skimming every paragraph for the headings gives you a map of the passage, which makes the other questions faster.",
    },
    {
      exam: "ielts",
      body: "On the paper test, write only the Roman numeral (i, ii, iii…) on the answer sheet, not the words of the heading. Some headings may look correct for two paragraphs; give each one to the paragraph it fits best and keep going.",
    },
    {
      exam: "toefl",
      body: "TOEFL has no headings task, but Read an Academic Passage includes questions on the writer's purpose and on how the ideas are connected. The same skill helps: summarise what each whole paragraph does, not one detail.",
    },
  ],
  vocabulary: [
    { word: "distractor", meaning: "a wrong option designed to look like the correct answer", example: "Two of the headings are distractors.", topic: "academic" },
    { word: "adolescence", meaning: "the period of life between being a child and being an adult", example: "Sleep patterns change during adolescence.", topic: "health" },
    { word: "consequence", meaning: "a result of an action or situation, often a bad one", example: "Lack of sleep can have serious consequences.", topic: "academic" },
    { word: "attendance", meaning: "how often people go to a place such as school, or how many people are present", example: "Attendance improved after the change.", topic: "education" },
    { word: "revival", meaning: "a time when something becomes popular or successful again", example: "There has been a revival of interest in night trains.", topic: "society" },
    { word: "obstacle", meaning: "something that makes it difficult to do or achieve something", example: "Cost is the biggest obstacle to the project.", topic: "business" },
    { word: "unprofitable", meaning: "not making enough money to be worth doing", example: "The route was closed because it was unprofitable.", topic: "business" },
    { word: "emissions", meaning: "gases released into the air, especially by vehicles or factories", example: "Trains produce lower carbon emissions than planes.", topic: "environment" },
    { word: "enthusiasm", meaning: "a strong feeling of interest and excitement", example: "Her enthusiasm for the project was obvious.", topic: "everyday" },
    { word: "pay a premium", meaning: "to pay more than the usual price for something", example: "Customers will pay a premium for local honey.", topic: "business" },
    { word: "motivation", meaning: "the reason why someone does something", example: "Money was not his main motivation.", topic: "work" },
    { word: "in effect", meaning: "used to say what the real situation is, even if it seems different", example: "The new rule is, in effect, a ban on cars.", topic: "academic" },
  ],
  keyPoints: [
    "A heading summarises the main idea of the whole paragraph, not one detail and not just the topic.",
    "Summarise each paragraph in your own words before you look at the headings.",
    "Watch for turning words like however, yet and but: the main idea often comes after them.",
    "Avoid the three traps: word matching, headings that are too narrow, and headings with the right topic but the wrong idea.",
    "Do the easiest paragraphs first and cross out headings as you use them.",
  ],
};

export default lesson;
