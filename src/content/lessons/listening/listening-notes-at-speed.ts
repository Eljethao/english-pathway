import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-notes-at-speed",
  title: "Note-taking at speed",
  summary:
    "Take useful notes from fast, dense lectures: decide in real time what to keep and what to drop, compress whole sentences into a few symbols without losing the relationships and qualifications, and answer from your notes in IELTS Part 4 and TOEFL Academic Talks.",
  skill: "listening",
  level: "C1",
  order: 9,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 4" },
    { exam: "toefl", task: "Listening – Academic Talk" },
  ],
  objectives: [
    "Decide in real time what is worth writing and what can be left out",
    "Compress a spoken sentence into a short note that keeps its cause, contrast, condition and degree of certainty",
    "Lay out notes so that the structure of the talk is visible at a glance",
    "Keep going after a missed point and answer questions accurately from your own notes",
  ],
  warmUp: [
    "When you take notes in a lecture, do you usually write too much or too little? How can you tell?",
    "Look at some notes you made a while ago. Could you still explain them to someone else? Why, or why not?",
  ],
  learn: [
    {
      type: "text",
      title: "At C1, the problem is choosing, not writing",
      body: "In the B2 course you learnt the basics: key words only, symbols such as → and ↑, numbered lists and space on the page. At C1 the talks are faster and denser, so the real bottleneck is **decision-making**. For every sentence you hear, you have about a second to decide: *write it, compress it, or let it go?*\n\nThree questions make that decision quicker:\n\n1. **Is it new?** Rephrasings (*in other words…*), repetitions and the run-up to a point (*Now, this is something I find fascinating…*) add nothing. Let them go.\n2. **Is it structure?** A list (*three ways of responding*), a contrast or a new section. Write the frame first, then fill it.\n3. **Is it likely to be tested?** Claims, numbers with what they measure, causes and effects, terms the lecturer defines, and the lecturer's own evaluation.\n\nOne more habit separates C1 note-takers from B2 ones: **lag by one idea**. Lecturers usually set up a point before they make it, so listen to the end of the idea, then write it in your own short form while the next idea is being set up.",
    },
    {
      type: "table",
      title: "Keep or drop?",
      headers: ["Keep (write something)", "Drop (or a one-word tag)"],
      rows: [
        ["The claim or main point", "The run-up to it: *What's interesting here is that…*"],
        ["Numbers, with what they measure and when", "Rephrasings: *put another way…*, *in other words…*"],
        ["Relationships: cause (→), contrast (≠), condition (if)", "Long examples: keep a one-word tag (*e.g. menus*)"],
        ["Qualifiers: *some*, *may*, *usually*, *in cities*", "Digressions and jokes"],
        ["The lecturer's evaluation: + / − / ?", "Articles, auxiliaries, most adjectives"],
        ["New terms the lecturer defines", "Anything you already have on the page"],
      ],
    },
    {
      type: "example",
      title: "From speech to notes",
      items: [
        "“What's interesting is that, contrary to what most people assume, for many families the price of healthy food matters more than the distance to the shop.” → **many: price > distance (≠ common view)**",
        "“This may well hold in large cities, but in rural areas the evidence is much weaker.” → **cities ✓ / rural ? (weak evid.)**",
        "“Because the shop closed, people had to drive further, and that in turn meant fewer trips and less fresh food.” → **shop closed → longer trips → fewer trips → less fresh food**",
        "“Some councils have responded by offering vouchers; others, by running mobile markets.” → **responses: vouchers / mobile mkts**",
      ],
    },
    {
      type: "text",
      title: "A personal shorthand",
      body: "Standard symbols (→ ↑ ↓ ≈ ≠ ∴ = therefore, w/ = with, w/o = without, b/c = because) are only the start. Fast note-takers also:\n\n- **drop vowels** in long words they hear often: *dvlpmt*, *govt*, *envt*\n- **shorten repeated terms** after the first mention: *food deserts* → *FDs*\n- **use + − ?** in the margin for the speaker's attitude\n- **use the page**: indent examples under the point they support, and leave a gap with a ? when you miss something, then keep going.\n\nThe rule is consistency: your shorthand must mean the same thing every time, or you will not be able to read it after the talk.",
    },
    {
      type: "tip",
      exam: "toefl",
      body: "In an Academic Talk you see the questions only after you have listened, and they cover main ideas, details, organisation and inference. Put the main idea on the first line of your notes, write the purpose next to each example (*e.g. → shows X*), and mark any opinion the professor gives.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: which is the best note?",
        instructions: "Read what the lecturer says. Choose the note that is short AND keeps the meaning.",
        questions: [
          {
            prompt: "“Contrary to what most people assume, the number of managed honeybee hives worldwide has actually gone up over the past few decades. It's wild bees that are in trouble.”",
            options: [
              "bees ↓ worldwide",
              "managed hives ↑ worldwide; wild bees ↓ (≠ common view)",
              "Contrary to what most people assume, the number of hives has gone up",
              "wild bees ↑; managed hives ↓",
            ],
            answer: 1,
            explanation: "This note keeps both groups, both directions and the contrast with the common view. The first note is the common view the lecturer rejects, the third is too long and loses the wild bees, and the fourth reverses the directions.",
          },
          {
            prompt: "“The drug appeared to reduce symptoms in younger patients, although the researchers stress that the sample was very small.”",
            options: [
              "drug cures symptoms",
              "drug ↓ symptoms",
              "drug ↓ symptoms (younger pts), small sample: ?",
              "younger pts: sample ↓ symptoms",
            ],
            answer: 2,
            explanation: "The group (younger patients) and the qualification (small sample) are both likely to be tested. *Cures* is far stronger than *appeared to reduce*, and the second note loses both limits.",
          },
          {
            prompt: "“The second reason, and this is the one I'd put the most weight on, is cost.”",
            options: [
              "2. weight",
              "2. cost (most important +)",
              "reasons: cost, weight",
              "cost = 2nd most important",
            ],
            answer: 1,
            explanation: "*Put the most weight on* means the lecturer thinks it is the most important reason. The first and third notes take *weight* literally, and the last confuses its place in the list with its importance.",
          },
          {
            prompt: "“If the temperature goes above about forty degrees, the enzyme stops working, which is why the reaction slows down in hot conditions.”",
            options: [
              "temp > ≈40° → enzyme stops → reaction slows",
              "40° → reaction speeds up",
              "enzyme stops → temp ↑",
              "hot: reaction slow",
            ],
            answer: 0,
            explanation: "The best note keeps the condition (above about 40°) and the chain in the right order. The third note reverses cause and effect, and the last loses the explanation.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model lecture extract: food deserts",
      voice: "uk",
      transcript:
        "Today's topic is what researchers call food deserts. If you've ever lived somewhere where the nearest shop sells crisps, fizzy drinks and very little else, and the nearest supermarket is a bus ride away, you'll already know the idea. A food desert is simply an area where it's hard to buy fresh, affordable, healthy food.\n\nFor a long time, the problem was treated as one of distance: how far people live from a large supermarket. But a growing number of researchers now see it differently, as a question of access in a wider sense, which includes price, transport and the time people have to shop and cook. Food deserts are usually found in low-income urban neighbourhoods, though not always. Many rural areas qualify too, simply because the distances are so great.\n\nThere are, broadly, three ways of responding. The first is to open a new supermarket in the area. This sounds like the obvious answer, but on its own it rarely works as well as expected: some studies have found that residents' diets changed surprisingly little. The second is to bring the food to the people, for example with mobile markets, or with vouchers that can only be spent on fruit and vegetables. And the third, which some cities have tried, is to improve transport, for instance with a bus route that links housing estates directly to existing shops.\n\nI'd add one note of caution, though. Most maps of food deserts measure how far people live from a shop, not what they actually buy or can afford. So these maps can reveal the problem, but they can also hide it. Next time, we'll look at whether online grocery delivery is changing the picture.",
      cast: { narrator: "female" },
    },
    {
      type: "text",
      title: "A strong learner's notes",
      body: "**Food deserts (FDs)** = area where fresh, affordable, healthy food hard to buy\n\n- trad. = distance problem → now wider “access” (price, transport, time)\n- usually low-income urban, not always (rural: long distances)\n\n**3 responses**\n\n1. new supermarket → rarely works alone: diets changed little (some studies)\n2. bring food to ppl: mobile markets / fruit & veg vouchers\n3. transport (some cities): bus routes → existing shops\n\n**Caution (lect.)**\n\n- maps = distance to shop ≠ what ppl buy / can afford\n- ∴ reveal problem BUT can hide it\n\nNext: online grocery delivery",
    },
    {
      type: "text",
      title: "What the learner did",
      body: "- **Dropped the run-up.** The image of a shop that sells crisps and fizzy drinks was a way of introducing the idea. Only the definition was written down.\n- **Abbreviated a repeated term.** *Food deserts* became *FDs* after the first mention.\n- **Kept the change of view.** *trad. = distance problem → now wider “access”* records a contrast between past and present that a question could easily test.\n- **Kept the qualifier.** *usually low-income urban, not always (rural)*. An option saying food deserts are found *only* in cities would be wrong.\n- **Built the frame first.** On hearing *three ways of responding*, the learner wrote 1, 2, 3 and then filled in each line.\n- **Recorded the lecturer's caution.** The final point is the lecturer's own evaluation, so it gets a heading.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice 1: the psychology of waiting",
      voice: "uk",
      transcript:
        "Good morning. Today I want to look at something we all do, often several times a day, and rarely think about: waiting in a queue. My focus isn't on how long we wait, which is really a question for engineers and mathematicians, but on how long the wait feels, which turns out to be a rather different thing.\n\nLet's start with the most robust finding, which is that unoccupied time feels longer than occupied time. Ten minutes spent doing nothing seems to drag far more than ten minutes spent reading or filling in a form. This is why restaurants hand you a menu while you wait for a table, and why some doctors' surgeries ask you to complete a questionnaire before your appointment. The task may be useful, but its main effect is psychological.\n\nThe second principle is that uncertain waits feel longer than known waits. If you're told the next train is in eight minutes, you can relax. If you've no idea when it'll come, every minute is stressful. That's the logic behind the countdown displays you now see at many bus stops. Interestingly, organisations often overestimate the waiting time they announce, so that customers are pleasantly surprised when they're served early.\n\nThird, and this is the one I find most revealing, unfair waits feel longer than fair ones. Nothing irritates people in a queue more than someone pushing in, or the sense that the line next to them is moving faster. This is one reason why many banks and post offices have replaced several separate queues with a single line that feeds all the counters. On average, people don't actually wait less in a single line. What changes is that everyone is served in the order they arrived, so the wait feels fairer.\n\nNow, I want to stress that these principles don't work in isolation. Take the airport baggage hall. Passengers who walk for several minutes to reach the belt and then wait briefly tend to complain less than passengers who reach the belt straight away and then stand there for longer, even when the total time is the same. Here, occupied time and uncertain time are working together.\n\nSo what are the implications for design? Firstly, managers should think about the experience of waiting, not just the number of minutes. Secondly, information is cheap and highly effective. And finally, perceived fairness matters, sometimes more than speed.\n\nNext week we'll look at the same ideas online, where the queue is a spinning wheel on a screen.",
      cast: { narrator: "male" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Note completion (IELTS Part 4)",
        instructions: "Take your own notes as you listen. Then complete the notes below. Write ONE WORD ONLY for each answer.",
        text: "The psychology of waiting\n\nFocus: not how long a wait is, but how long it {{0}}\n\n1. Unoccupied time feels longer than occupied time\n- restaurants give customers a {{1}}\n- surgeries: patients complete a {{2}}\n\n2. Uncertain waits feel longer than known waits\n- e.g. {{3}} displays at bus stops\n- organisations often {{4}} the wait they announce\n\n3. {{5}} waits feel longer than fair ones\n- one line replaces several separate {{6}}\n- average wait is the same, but people are served in the order they {{7}}\n\nPrinciples combined: the airport {{8}} hall\n\nImplications\n- think about the experience, not just the minutes\n- information is cheap and effective\n- perceived {{9}} may matter more than speed",
        answers: [
          ["feels"],
          ["menu"],
          ["questionnaire"],
          ["countdown", "count-down"],
          ["overestimate", "over-estimate"],
          ["unfair"],
          ["queues"],
          ["arrived"],
          ["baggage"],
          ["fairness"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        title: "Rebuild the outline from your notes",
        instructions: "Use your notes to put the parts of the lecture in the order the lecturer presents them.",
        mode: "lines",
        items: [
          "The focus: how long a wait feels, not how long it is",
          "Occupied and unoccupied time",
          "Known and uncertain waits",
          "Fair and unfair waits",
          "Two principles working together: the baggage hall",
          "Implications for managers",
          "Preview: waiting online",
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 2: why do zebras have stripes?",
      voice: "us",
      transcript:
        "Today I want to look at a question that has puzzled biologists since Darwin's time: why do zebras have stripes? Over the years, researchers have proposed several explanations, and they aren't necessarily mutually exclusive.\n\nThe oldest idea is camouflage. Perhaps the stripes help zebras blend into tall grass, or make it harder for a lion to pick out one animal from a running herd. The trouble is that lions hunt mostly at dusk and at night, when, according to some studies, they probably can't see the stripes clearly until they're already quite close.\n\nA second idea is temperature. Black stripes absorb more heat than white ones, so in theory this could create tiny air currents that cool the skin. But when researchers have tried to measure this effect, the results have been mixed at best.\n\nThe explanation with the strongest support at the moment involves biting flies. In one experiment in Britain, horses were dressed in black-and-white striped coats. Flies approached them about as often as horses in plain coats, but far fewer actually landed. Video showed that the flies failed to slow down properly as they came close to the stripes. That matters, because these flies can spread serious diseases, and a zebra's short coat gives it little protection.\n\nSo the current view is that stripes may serve more than one purpose, but keeping flies away is probably the most important.",
      cast: { narrator: "female" },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "TOEFL-style Academic Talk: answer from your notes",
        instructions: "Listen once and take notes. Then answer from your notes, without playing the talk again.",
        questions: [
          {
            prompt: "What is the talk mainly about?",
            options: [
              "How lions hunt zebras at night",
              "Competing explanations for zebra stripes and the evidence for each",
              "Why horses suffer more from biting flies than zebras do",
              "How zebras control their body temperature",
            ],
            answer: 1,
            explanation: "The professor asks why zebras have stripes, then evaluates three explanations in turn: camouflage, temperature and biting flies.",
          },
          {
            prompt: "According to the professor, what is the problem with the camouflage explanation?",
            options: [
              "Zebras rarely live in areas with tall grass.",
              "Zebras do not usually run in herds.",
              "Lions may not see the stripes clearly at the times they usually hunt.",
              "Lions find their prey mainly by smell.",
            ],
            answer: 2,
            explanation: "“Lions hunt mostly at dusk and at night, when… they probably can't see the stripes clearly until they're already quite close.”",
          },
          {
            prompt: "Why does the professor mention horses wearing striped coats?",
            options: [
              "To give evidence that stripes affect whether flies land",
              "To show that horses are related to zebras",
              "To explain how striped coats keep animals cool",
              "To suggest a way of protecting farm animals from lions",
            ],
            answer: 0,
            explanation: "In the experiment, “far fewer” flies landed on the striped coats: evidence for the biting-fly explanation.",
          },
          {
            prompt: "What can be inferred about the professor's view of the temperature explanation?",
            options: [
              "The professor thinks it has been proved wrong.",
              "The professor finds it less convincing than the fly explanation.",
              "The professor thinks it has the strongest support.",
              "The professor thinks it explains why zebras have short coats.",
            ],
            answer: 1,
            explanation: "The results are “mixed at best”, while the fly explanation has “the strongest support at the moment”. The professor does not say it has been proved wrong.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Check your notes: which note is accurate?",
        instructions: "Here are notes that different learners took on the zebra talk. For each point, choose the note that records it accurately.",
        questions: [
          {
            prompt: "The explanations in general",
            options: [
              "3 explanations; prof. rejects 2",
              "3 explanations; more than one may be true",
              "1 explanation only = flies",
            ],
            answer: 1,
            explanation: "“They aren't necessarily mutually exclusive”, and the conclusion is that stripes “may serve more than one purpose”. The professor raises problems with two explanations but does not reject them.",
          },
          {
            prompt: "Camouflage",
            options: [
              "lions hunt by day → stripes very visible",
              "camouflage = proven",
              "lions hunt mostly dusk / night → prob. can't see stripes till close",
            ],
            answer: 2,
            explanation: "This note keeps the time of hunting and the hedge (*probably*). The second note turns a doubtful idea into a proven one.",
          },
          {
            prompt: "Temperature",
            options: [
              "black stripes absorb more heat → maybe cooling air currents; results mixed",
              "white stripes absorb more heat → zebras warmer",
              "cooling effect measured and proven",
            ],
            answer: 0,
            explanation: "“Black stripes absorb more heat… in theory this could create tiny air currents… the results have been mixed at best.” *In theory* and *mixed* are kept as *maybe* and *mixed*.",
          },
          {
            prompt: "The experiment with horses",
            options: [
              "striped coats: flies approached less often",
              "striped coats: flies approached as often but landed less (didn't slow down)",
              "striped coats: more flies landed",
            ],
            answer: 1,
            explanation: "Flies “approached them about as often… but far fewer actually landed”, because they “failed to slow down properly”. The first note confuses approaching with landing.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 4 the notes on the page are already a skeleton of the lecture, so you do not need full notes of your own. Use your speed-writing for the moments around each gap: if you are not sure of an answer, jot down the word you heard in the margin and decide later, rather than stopping and losing the next answer.",
    },
    {
      exam: "ielts",
      body: "Answers in Part 4 rarely come in the first words of a point. Lecturers set up an idea (*Let's start with the most robust finding…*) and then give the key word. Lag one idea behind: hear the end of the point, then write.",
    },
    {
      exam: "toefl",
      body: "Academic Talks are short, so you can afford fuller notes than in a long lecture, but keep them organised: main idea at the top, a numbered list for explanations, and the purpose of each example. Inference questions often depend on a qualifier such as *may*, *probably* or *at best*, so keep those words in your notes.",
    },
  ],
  vocabulary: [
    { word: "shorthand", meaning: "a quick way of writing that uses short forms and symbols", example: "Experienced note-takers develop their own shorthand for words they hear often.", topic: "education" },
    { word: "at a glance", meaning: "immediately, with only a quick look", example: "Good notes show the structure of a talk at a glance.", topic: "everyday" },
    { word: "jot down", meaning: "to write something quickly in a few words", example: "Jot down the word you heard and check it later.", topic: "education" },
    { word: "food desert", meaning: "an area where it is hard to buy fresh, affordable, healthy food", example: "The estate became a food desert when its only supermarket closed.", topic: "society" },
    { word: "qualify (as)", meaning: "to have the features needed to be called or counted as something", example: "Many rural areas qualify as food deserts because the distances are so great.", topic: "academic" },
    { word: "robust", meaning: "(of a finding or evidence) strong and reliable", example: "The most robust finding is that occupied time feels shorter.", topic: "academic" },
    { word: "drag", meaning: "(of time) to pass very slowly", example: "Ten minutes with nothing to do can really drag.", topic: "everyday" },
    { word: "in isolation", meaning: "separately, without being affected by other things", example: "These principles rarely work in isolation.", topic: "academic" },
    { word: "perceived", meaning: "as it seems to people, which may differ from the facts", example: "Perceived fairness can matter more than the actual waiting time.", topic: "academic" },
    { word: "mutually exclusive", meaning: "unable to be true or exist at the same time", example: "The explanations are not mutually exclusive: several may be true.", topic: "academic" },
    { word: "camouflage", meaning: "colours or patterns that help an animal hide by blending into its surroundings", example: "The stripes were once thought to work as camouflage in tall grass.", topic: "science" },
    { word: "mixed (results)", meaning: "partly supporting and partly not supporting an idea", example: "Studies of the cooling effect have produced mixed results.", topic: "academic" },
  ],
  keyPoints: [
    "At C1 speed, the hard part is deciding: keep what is new, structural or likely to be tested, and let rephrasings and run-ups go.",
    "Compress meaning, not words, and keep the relationships (→, ≠, if) and the qualifiers (*usually*, *may*, *some*).",
    "Build the frame first: when you hear a list or a new section, write the heading and numbers, then fill them in.",
    "Lag one idea behind the speaker, and if you miss something, leave a ? and keep going.",
    "Check your notes against the talk afterwards: most wrong answers come from notes that reversed a direction or lost a hedge.",
  ],
};

export default lesson;
