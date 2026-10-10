import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-argument-structure",
  title: "Argument structure: claims and evidence",
  summary:
    "Map an argumentative text: find the writer's main claim, the evidence offered for it, the opposing views the writer reports, and the concessions, rebuttals and qualifications that shape the final position.",
  skill: "reading",
  level: "C1",
  order: 7,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Reading – Multiple choice" },
    { exam: "ielts", task: "Reading – Matching sentence endings" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
  ],
  objectives: [
    "Identify the main claim of an argumentative text and the reasons that support it",
    "Recognise counter-arguments, concessions, rebuttals and qualifications from their signals",
    "Judge how strongly different kinds of evidence support a claim",
    "Use an argument map to answer questions on function, purpose and sentence endings",
  ],
  warmUp: [
    "Think of an argument you heard recently, for or against something. What was the main claim, and what evidence was given?",
    "Is a personal story ever good evidence for a general claim? When might it be weak?",
  ],
  learn: [
    {
      type: "text",
      title: "The moves in an argument",
      body: "Most argumentative texts in IELTS Academic and TOEFL are built from the same small set of **moves**. Recognising them lets you see the shape of a passage quickly and tells you which sentences carry the writer's own position.\n\n- **Main claim**: the position the writer wants you to accept, often stated in the introduction or held back until the end.\n- **Reasons and evidence**: why the claim should be accepted: data, studies, examples, expert views.\n- **Counter-argument**: an opposing view, usually attributed to others (*critics argue…*).\n- **Concession**: the writer admits that part of the opposing view is true (*admittedly…*).\n- **Rebuttal**: the writer's answer to the opposing view (*yet…, but this overlooks…*).\n- **Qualification**: a limit on the writer's own claim (*in most cases, at least in large cities*).\n\nA writer who concedes and qualifies is not being weak or confused. At C1 level, this is how careful arguments are built, and exam questions target exactly these moves.",
    },
    {
      type: "table",
      title: "Signals for each move",
      headers: ["Move", "Typical signals"],
      rows: [
        ["Main claim", "I would argue that, the central point is, the priority should be, it is clear that, should, must"],
        ["Evidence", "for example, studies have found, evaluations show, according to, data from… suggest, in one case"],
        ["Counter-argument", "critics argue, supporters claim, it might be objected that, a common objection is"],
        ["Concession", "admittedly, it is true that, granted, to be fair, this is not to deny that, both objections have force"],
        ["Rebuttal", "yet, but, however, even so, this overlooks, the difficulty is that"],
        ["Qualification", "in most cases, at least in the short term, with some exceptions, this is not to say that… never"],
      ],
    },
    {
      type: "table",
      title: "How strong is the evidence?",
      headers: ["Type of evidence", "Question a careful reader asks"],
      rows: [
        ["Statistics", "Measured how, and compared with what?"],
        ["Research studies", "How large? Have the results been repeated?"],
        ["A single example or case", "Is it typical, or the one case that suits the writer?"],
        ["Expert opinion", "An expert in this field? Do other experts agree?"],
        ["Analogy or comparison", "Are the two situations really alike?"],
      ],
    },
    {
      type: "tip",
      exam: "toefl",
      body: "Purpose questions in Read an Academic Passage can use the vocabulary of argument in their options: *to provide evidence for…*, *to challenge a view…*, *to concede a limitation…*, *to qualify an earlier claim…*. Learn these verbs so you can match each option to a move in the text.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Name the move",
        instructions:
          "These six sentences come from one short argument about charging for plastic bags. Match each sentence to the move it makes. Use each move once.",
        left: [
          "It is true that any flat charge takes a larger share of a small budget.",
          "Charging customers for plastic bags is one of the most cost-effective environmental policies a government can adopt.",
          "Such charges work best, however, when cheap reusable bags are easy to buy.",
          "Opponents argue that the charge falls most heavily on low-income households.",
          "In one country, the number of single-use bags handed out by large shops fell by more than three-quarters within a few years of a small charge being introduced.",
          "Yet the charge is easily avoided: a single reusable bag removes the cost entirely.",
        ],
        right: ["main claim", "evidence", "counter-argument", "concession", "rebuttal", "qualification"],
        answer: [3, 0, 5, 2, 1, 4],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "Should public transport be free?",
      labelled: true,
      paragraphs: [
        "In 2020, Luxembourg became the first country to make buses, trams and trains free to use throughout the country, and a number of cities, from Tallinn in Estonia to Dunkirk in France, had already abolished fares for at least some passengers. The idea has an obvious appeal. Free travel promises cleaner air, emptier roads and help for households struggling with the cost of living, all through a single, easily understood policy. Unsurprisingly, campaigners in many other cities are now urging their local governments to follow.",
        "Supporters of free fares make a case that deserves to be taken seriously. Fares, they point out, cover only part of the cost of running most public transport systems, and collecting them is itself expensive: ticket machines, gates and inspectors all cost money. Remove fares, they argue, and passengers will flood in, drivers will leave their cars at home and the city as a whole will benefit. Some go further still, presenting free travel as a basic public service, like a street or a public library, rather than something that should be bought by the journey.",
        "The difficulty is that the evidence on the last of these points is disappointing. Evaluations of fare-free schemes have repeatedly found that passenger numbers do rise, sometimes sharply, but that many of the new passengers are people who previously walked or cycled rather than people who previously drove. For a policy justified largely on environmental grounds, this is a serious weakness: replacing a short walk with a bus ride does nothing for air quality and little for public health. Drivers, it appears, are influenced far more by journey times, reliability and the cost of parking than by the price of a ticket. In some cities that have abolished fares, the buses are fuller but the roads are almost as busy as before.",
        "It is true that free fares help people on low incomes, for whom even a modest fare can be a real burden, and this is perhaps the strongest argument in their favour. But abolishing fares for everyone is an expensive way of achieving this aim, since much of the benefit goes to passengers who could easily afford to pay. Reduced or free travel for people on low incomes, for students and for older people would deliver most of the social benefit at a fraction of the cost. Many cities already offer discounts of this kind, and extending them is far simpler than abandoning fares altogether.",
        "Moreover, the money lost from fares has to come from somewhere, and in practice it often comes from the budget that would otherwise pay for better services. A city that spends its transport budget replacing fare income cannot spend the same money on more frequent buses, new routes or faster trams, which are precisely the improvements that persuade drivers to switch. In this sense, free fares can work against the very goal they are meant to achieve.",
        "This is not to say that fare-free travel never makes sense. In small towns, where fares cover only a small share of running costs and ticket collection is relatively expensive, abolishing them may cost little and simplify the service. For large cities, however, the priority should be a service good enough to compete with the car. Passengers, after all, rarely complain that the bus was too expensive to catch; far more often, they complain that it never came.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader maps the argument",
      body: "A strong reader notes the **move** each paragraph makes, not just its topic:\n\n- **A**: background; the appeal of the idea (no position yet)\n- **B**: **counter-argument**, presented fairly (*Supporters… make a case that deserves to be taken seriously*)\n- **C**: **rebuttal + evidence** (*The difficulty is that…*; evaluations of schemes): new passengers are mostly walkers and cyclists, not drivers\n- **D**: **concession** (*It is true that…* help for low incomes) + **rebuttal** (*But…* an expensive way to do it) + an alternative\n- **E**: a further **reason** (*Moreover…*): lost fare income reduces money for better services\n- **F**: **qualification** (*This is not to say that… never*: small towns) + **main claim** (*the priority should be…*)\n\n**The main claim** appears only in paragraph F: in large cities, money should go into a better service rather than free fares. Everything else either supports it or deals with the other side.\n\n**Weighing the evidence.** The strongest support is in C: evaluations of several schemes, not a single case. The last sentence of F is different: it is a memorable observation about what passengers complain about, not research evidence. If a question asks how the writer **supports** the claim that free fares do little to reduce driving, the answer is the evaluations in C, not the comment in F.\n\n**A typical trap.** “The writer believes free fares do not help people on low incomes.” → No. In D, the writer **concedes** that they do help; the objection is to their cost.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Putting a price on nature",
      labelled: true,
      paragraphs: [
        "In the 1990s, New York City faced an expensive decision. Much of the water supplied to its millions of residents came from reservoirs in the Catskill Mountains, well over a hundred kilometres to the north, and was naturally filtered as it passed through the forests and soils of the surrounding land. As farming and building in the area increased, however, the quality of the water was put at risk, and the city faced the prospect of building a filtration plant at a cost of several billion dollars. Instead, it chose to spend a much smaller sum protecting the land around its reservoirs: buying property, paying farmers to change their practices and upgrading local sewage systems. The forests, in effect, were hired to do the work of the plant.",
        "For many economists, the story illustrates a simple principle. Forests, wetlands, coral reefs and the insects that pollinate crops provide services of enormous economic value, but because nobody pays for them directly, that value is invisible in ordinary decision-making. A wetland that absorbs floodwater appears on no balance sheet; a mangrove forest that shields a coastline from storms is worth nothing to the developer who wants to clear it for a hotel. If these services were given a price, the argument runs, governments and businesses would have a reason to protect them, and destroying nature would no longer look like a free lunch.",
        "Critics raise two kinds of objection. The first is practical. Calculating the value of a wetland or a species involves so many assumptions that the resulting figures can vary enormously from one study to the next, and a number that could plausibly be ten times larger or smaller offers little guidance. The second objection is more fundamental. To put a price on something, critics argue, is to suggest that it can be exchanged for anything of equal value: that a forest worth a certain amount may be destroyed if the timber or the land is worth more. Some things, they insist, should be protected because they are irreplaceable, not because they are profitable.",
        "Both objections have force, and I do not think either can be dismissed. Valuations are often uncertain, and the language of prices does sit uneasily with the sense that nature matters for its own sake. Yet the alternative to putting a price on nature is not to keep it priceless. Every time a road is built through a forest or a wetland is drained, a decision has been made about value; it is simply that the value of what is lost has been set, implicitly, at zero. A rough estimate, openly debated, seems to me preferable to an invisible assumption that is almost certainly wrong.",
        "The economic argument does, however, carry a real danger, and the New York case itself reveals it. The forests were protected because protecting them was cheaper than building a filtration plant. Had filtration technology become dramatically cheaper, the same logic would have favoured building the plant and allowing development of the land. An argument for protection that rests entirely on cost is only as secure as the figures on which it depends, and those figures can change. Nature that is protected only because it pays may be abandoned as soon as it no longer does.",
        "The sensible conclusion is to treat valuation as a tool rather than a verdict. Prices can reveal costs that would otherwise be ignored, and they can persuade decision-makers who respond to no other kind of argument. But they should sit alongside, not replace, legal protection and the plain recognition that some losses cannot be made good at any price. The forests above New York were valuable because they cleaned the city's water. They would have been worth protecting even if they had not.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        labels: "roman",
        title: "What does each paragraph do?",
        instructions:
          "Match each paragraph of “Putting a price on nature” to the move it makes in the argument. There are two extra options you do not need.",
        left: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E", "Paragraph F"],
        right: [
          "accepts some criticisms but argues that valuation is still the better option",
          "illustrates the issue with a real case",
          "identifies a risk in relying only on economic arguments",
          "explains how markets set prices for natural services",
          "sets out practical and moral objections to valuation",
          "explains why some economists favour putting a price on nature",
          "recommends a limited role for valuation",
          "predicts that new technology will make nature less valuable",
        ],
        answer: [1, 5, 4, 0, 2, 6],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Questions on the argument",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "Why does the writer describe New York's water supply in paragraph A?",
            options: [
              "to argue that cities should never build filtration plants",
              "to give an example of a decision in which the economic value of nature led to its protection",
              "to criticise the city for allowing farming near its reservoirs",
              "to explain how filtration plants clean water",
            ],
            answer: 1,
            explanation:
              "The city protected the forests because this was cheaper than a plant: “The forests, in effect, were hired to do the work of the plant.” Paragraph B then calls this an illustration of “a simple principle”.",
          },
          {
            prompt: "According to paragraph C, what is the critics' “more fundamental” objection?",
            options: [
              "Valuing nature is too expensive.",
              "A price implies that nature can be traded for something of equal value.",
              "Economists disagree about which species matter most.",
              "The prices of timber and land change too quickly.",
            ],
            answer: 1,
            explanation:
              "“To put a price on something… is to suggest that it can be exchanged for anything of equal value.” The variable figures are the first, practical objection.",
          },
          {
            prompt: "What does the writer mean by saying that the value of what is lost “has been set, implicitly, at zero” (paragraph D)?",
            options: [
              "Nature has no real economic value.",
              "Decision-makers who ignore nature are in effect treating it as worthless.",
              "Most valuations of nature produce very small figures.",
              "Governments have officially declared some forests worthless.",
            ],
            answer: 1,
            explanation:
              "*Implicitly* means without saying so. When a forest is destroyed without any valuation, its loss is treated as costing nothing. This is the writer's rebuttal to the critics.",
          },
          {
            prompt: "What is the writer's main purpose in paragraph E?",
            options: [
              "to argue that New York made the wrong decision",
              "to predict that filtration will soon become cheaper",
              "to show that a purely economic case for protection could collapse if costs changed",
              "to explain why the Catskill forests became more valuable",
            ],
            answer: 2,
            explanation:
              "*Had filtration technology become dramatically cheaper…* is hypothetical, not a prediction. The point is that protection based only on cost “is only as secure as the figures on which it depends”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "match",
        title: "Matching sentence endings",
        instructions:
          "Complete each sentence with the correct ending. There are more endings than sentences.",
        left: [
          "1. The water in New York's reservoirs was originally of good quality because",
          "2. According to some economists, nature is often destroyed because",
          "3. Critics say that valuations offer little guidance because",
          "4. The writer prefers a rough estimate of value because",
          "5. Protection based only on cost is insecure because",
        ],
        right: [
          "the figures it depends on can change.",
          "filtration plants are cheaper to run than forests.",
          "it was filtered naturally as it passed through forests and soils.",
          "the alternative is to treat what is lost as worthless.",
          "nature should be protected only when it is profitable.",
          "the services it provides are not paid for directly.",
          "the figures can vary greatly from one study to another.",
        ],
        answer: [2, 5, 6, 3, 0],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In multiple-choice questions about an argument, wrong options often state a **counter-argument** that the writer reports and then rejects. Before you choose, check whose view each option expresses and whether the writer accepts it.",
    },
    {
      exam: "ielts",
      body: "In Matching sentence endings, the sentence beginnings follow the order of the passage. Each ending must fit the beginning both grammatically and in meaning, and some endings are distractors that use words from the passage but join ideas in the wrong way.",
    },
    {
      exam: "toefl",
      body: "When a question asks how a sentence relates to the one before it, name the move first: does it give evidence, introduce an opposing view, concede, rebut or qualify? Then choose the option that describes that move.",
    },
  ],
  vocabulary: [
    { word: "abolish", meaning: "to officially end a law, system or practice", example: "Several cities have abolished fares on their buses.", topic: "society" },
    { word: "counter-argument", meaning: "an argument against another argument or claim", example: "A good essay deals fairly with the main counter-argument.", topic: "academic" },
    { word: "rebuttal", meaning: "a reply that tries to show an argument is wrong", example: "The writer's rebuttal relies on evaluations of several schemes.", topic: "academic" },
    { word: "qualify (a claim)", meaning: "to limit a statement so that it is less general", example: "She qualified her claim by restricting it to large cities.", topic: "academic" },
    { word: "evaluation", meaning: "a careful study of how well something works", example: "Evaluations of fare-free schemes show mixed results.", topic: "academic" },
    { word: "valuation", meaning: "an estimate of how much something is worth in money", example: "Valuations of wetlands can vary enormously.", topic: "environment" },
    { word: "implicitly", meaning: "in a way that is suggested but not stated directly", example: "Ignoring the forest implicitly values it at zero.", topic: "academic" },
    { word: "irreplaceable", meaning: "impossible to replace if lost or damaged", example: "Critics argue that some habitats are irreplaceable.", topic: "environment" },
    { word: "plausibly", meaning: "in a way that seems reasonable or likely to be true", example: "The figure could plausibly be ten times larger.", topic: "academic" },
    { word: "have force", meaning: "(of an argument) to be strong and worth taking seriously", example: "Both objections have force.", topic: "academic" },
    { word: "sit uneasily with", meaning: "to not fit comfortably with an idea or principle", example: "The language of prices sits uneasily with the idea that nature matters for its own sake.", topic: "academic" },
  ],
  keyPoints: [
    "Map the moves, not just the topics: claim, evidence, counter-argument, concession, rebuttal, qualification.",
    "The writer's main claim may come at the end; reported views in the middle are often not the writer's own.",
    "A concession is still the writer's view, and a qualification limits it; both are common sources of exam questions.",
    "Weigh the evidence: several studies outweigh a single example, and a memorable comment is not research.",
  ],
};

export default lesson;
