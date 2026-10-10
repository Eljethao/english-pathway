import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-matching-features",
  title: "Matching features",
  summary:
    "Match statements to the people, theories or groups they belong to in IELTS Matching features, using names as anchors and reporting verbs to follow who says what.",
  skill: "reading",
  level: "B2",
  order: 6,
  minutes: 25,
  exams: [{ exam: "ielts", task: "Reading – Matching features" }],
  objectives: [
    "Use names and other features as anchors to find every part of the passage that mentions them",
    "Follow who says what when a passage reports several people's views",
    "Use reporting verbs such as argues, doubts, warns and concedes to understand each person's position",
    "Handle options that are used more than once or not at all",
  ],
  warmUp: [
    "Think of a topic people often disagree about, such as homework or social media. What might two different experts say about it?",
    "What is the difference between *She claims that…* and *She found that…*?",
  ],
  learn: [
    {
      type: "text",
      title: "How the task works",
      body: "In **Matching features**, you get a list of statements and a list of options, such as **people** (researchers, writers), **theories**, **places**, **groups** or **time periods**. You match each statement with the option it relates to, for example: *Match each statement with the correct person, A–D.*\n\n- The statements paraphrase what the passage says about each option.\n- Some options may not be used, and others may be used more than once. The instructions tell you when an option can be used more than once.\n- The statements are not necessarily in the same order as the passage.\n\nIn **Matching information** (lesson 5) you matched a detail to a **paragraph**. Here you match it to a **person, theory or group**, and the information about one person may be spread across several paragraphs.",
    },
    {
      type: "text",
      title: "The anchor method",
      body: "1. Scan the passage for **every** mention of each option and mark it. Names are your anchors because they are never paraphrased.\n2. Follow the person through the text. Someone introduced as *Dr Helen Marsh* may later be called *Marsh*, *she* or *the economist*.\n3. Read the statements and start with the ones that contain unusual content words: they are quickest to find.\n4. For each statement, read the sentences around the name and compare **meaning**. Check *who* is speaking: a passage often reports one person's view and then another person's reply.\n5. Before you choose, check that the person really **holds** this view or did this thing. Appearing in the same sentence is not enough.",
    },
    {
      type: "table",
      title: "Reporting verbs show each person's position",
      headers: ["Verbs", "What they tell you", "Example"],
      rows: [
        ["argues, claims, maintains, insists", "a view the person holds (not necessarily proven)", "Lopez **argues** that shops must offer experiences."],
        ["found, showed, discovered", "a research result", "Her team **found** that visits fell by a third."],
        ["doubts, questions, is sceptical of, rejects", "the person does NOT accept an idea", "Okafor **questions** whether rents are the real cause."],
        ["warns, cautions", "a possible danger or problem", "Berg **warns** that empty shops attract crime."],
        ["recommends, proposes, calls for", "a suggested action", "He **proposes** lower rents for new businesses."],
        ["concedes, admits, accepts", "agreement with a point, often one against the person's own view", "She **concedes** that online prices are lower."],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Who thinks what?",
        instructions: "Read each sentence and choose the answer that matches it.",
        questions: [
          {
            prompt: "“Professor Kim doubts that the new drug is effective.” What is Kim's view?",
            options: ["The drug probably does not work well.", "The drug works very well.", "The drug has not been tested yet."],
            answer: 0,
            explanation: "*Doubt that* means the person thinks something is probably not true.",
          },
          {
            prompt: "“Although Hughes concedes that the scheme is expensive, she maintains that it is worth the cost.” Which statement matches Hughes?",
            options: [
              "She thinks the scheme should be cancelled because of its cost.",
              "She accepts that the scheme is costly but still supports it.",
              "She believes the scheme is cheaper than people think.",
            ],
            answer: 1,
            explanation: "*Concedes* = accepts a point against her view; *maintains* = continues to hold her view.",
          },
          {
            prompt: "“Ahmed's study, which Rossi later criticised, found that sleep improved memory.” Who found that sleep improved memory?",
            options: ["Ahmed", "Rossi", "Both Ahmed and Rossi"],
            answer: 0,
            explanation: "The result belongs to Ahmed's study. Rossi only criticised it, so matching this finding to Rossi would be a trap.",
          },
          {
            prompt: "“Many people believe that cats are less loyal than dogs, but Dr Novak rejects this idea.” What does Novak think?",
            options: ["Cats are less loyal than dogs.", "It is not true that cats are less loyal than dogs.", "Dogs are more intelligent than cats."],
            answer: 1,
            explanation: "*Rejects this idea* means Novak does not accept the popular belief.",
          },
          {
            prompt: "“Chen warns that the policy could increase traffic, a concern that Brooks dismisses.” Which statement matches Brooks?",
            options: [
              "Brooks thinks the policy will increase traffic.",
              "Brooks does not take the traffic concern seriously.",
              "Brooks was the first to raise the traffic concern.",
            ],
            answer: 1,
            explanation: "*Dismisses* means Brooks does not think the concern is important. The warning belongs to Chen.",
          },
        ],
      },
    },
    {
      type: "tip",
      exam: "ielts",
      body: "If the instructions include *NB You may use any letter more than once*, one person may match two or three statements. Do not cross out an option after you have used it.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Can the high street survive?",
      labelled: true,
      paragraphs: [
        "Walk down the main shopping street of almost any medium-sized town and you are likely to see the same signs: empty shop units, “To let” boards and charity shops where department stores once stood. The rise of online shopping is the most obvious explanation, but experts disagree about how serious the decline is and what, if anything, should be done about it.",
        "For the urban economist Dr Helen Marsh, the figures speak for themselves. Her research into spending in thirty towns found that the share of non-food purchases made online had roughly doubled over ten years, while the number of people visiting town centres on weekdays had fallen steadily. Marsh argues that many high streets simply contain more shops than modern shoppers need, and that trying to fill every empty unit with another shop is a waste of public money.",
        "Tomás Reyes, who has run an independent bookshop for twenty years, sees things differently. He accepts that he cannot compete with online retailers on price, but he insists that people still value the advice and atmosphere that a good shop provides. His own sales, he says, have risen since he started hosting author talks and children's reading mornings. In his view, the shops that are closing are mostly large chains that offered nothing customers could not find on a website.",
        "The historian Professor Kwame Asante takes a longer view. Town centres, he points out, have always changed: markets were joined by covered arcades, and later by department stores. He sees the current crisis as part of this pattern rather than the end of the high street. He is also sceptical of the claim that online shopping alone is to blame, noting that many centres were already struggling when large out-of-town shopping parks began to open decades ago.",
        "Town planner Lisa Brandt agrees with Marsh that the number of shops is likely to fall further, but she draws a more hopeful conclusion. Empty shops, she suggests, could become homes, health centres, workspaces or places to learn, bringing people into the centre for reasons other than shopping. She warns, however, that this will not happen by itself: councils need the power to bring together buildings with different owners, and new uses must be planned so that streets stay lively in the evening as well as during the day.",
        "Reyes is unconvinced by the idea of a high street without shops. “People don't walk into town to visit a health centre and then stay for the afternoon,” he says. Marsh, by contrast, welcomes Brandt's proposals, which she believes would be a better use of public funds than attempts to attract new retailers.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader matches the features",
      body: "**People:** A Helen Marsh · B Tomás Reyes · C Kwame Asante · D Lisa Brandt\n\nFirst, mark every mention of each name. Marsh appears in paragraphs B, E and F; Reyes in C and F; Asante only in D; Brandt in E and F.\n\n**Statement:** Changes to town centres are nothing new.\n\nParagraph D: Asante “points out” that town centres “have always changed”. *Nothing new* = *have always changed*. → **C**\n\n**Statement:** Small shops can succeed by offering more than just products.\n\nParagraph C: Reyes says people value “advice and atmosphere”, and his sales rose after he started hosting events. → **B**\n\n**Statement:** Public money should not be spent on trying to attract more shops.\n\nThis view is spread across two paragraphs. In B, Marsh calls filling every empty unit with another shop “a waste of public money”; in F, she says Brandt's ideas would be “a better use of public funds than attempts to attract new retailers”. → **A**. Brandt is a trap: she proposes new uses for empty shops, but she never says how public money should be spent.\n\nOne more trap: in paragraph E, “Brandt agrees with Marsh that the number of shops is likely to fall” gives a view to **both** people. Read sentences like this very carefully.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Your turn",
        instructions:
          "Use the passage “Can the high street survive?”. Match each statement with the correct person, A–D. You may use any letter more than once.",
        left: [
          "Turning empty shops into other kinds of buildings will need careful planning.",
          "Online shopping is not the only cause of the problem.",
          "The shops that disappear are often ones with nothing special to offer.",
          "Fewer people now visit town centres during the working week.",
          "Services such as healthcare will not keep visitors in town for long.",
        ],
        right: ["Helen Marsh", "Tomás Reyes", "Kwame Asante", "Lisa Brandt"],
        answer: [3, 2, 1, 0, 1],
      },
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Why we put things off",
      labelled: true,
      timerMinutes: 10,
      paragraphs: [
        "Almost everyone procrastinates sometimes: the report started the night before it is due, the dentist's appointment that is never booked, the email that sits unanswered for weeks. For a long time, procrastination was treated as a simple problem of poor time management, to be solved with better diaries and to-do lists. Psychologists today are less sure. They have proposed several explanations, and each one points to a different kind of solution.",
        "The first, which we might call the **mood theory**, sees procrastination as a way of managing feelings rather than time. According to this view, when a task makes us feel anxious, bored or uncertain, putting it off brings immediate relief. The problem is that the relief is short-lived, and the guilt that follows often makes the task feel even more unpleasant the next time. Supporters of this theory argue that planning tools will not help much on their own; people also need to learn to tolerate uncomfortable feelings, for example by agreeing to work on a task for just five minutes.",
        "A second explanation comes from economics. The **reward theory** starts from the observation that people value rewards less the further away they are. The benefit of revising for an exam in three weeks' time feels distant and abstract, while the pleasure of watching a film tonight is immediate and concrete. Because the effort is needed now and the reward arrives later, delaying seems sensible at each moment, even though it is unwise overall. This theory suggests bringing rewards closer, for example by setting several small deadlines instead of one large one.",
        "A third approach, the **task theory**, shifts attention from the person to the work itself. Tasks that are vague, unstructured or have no clear first step are far more likely to be delayed than tasks that are clearly defined. “Write the essay” is easy to avoid; “write three sentences explaining the main argument” is much harder to put off. Researchers in this area recommend breaking large tasks into small, specific actions, and they point out that organisations can reduce delays by giving staff clearer instructions.",
        "Finally, the **perfectionism theory** holds that people delay tasks because they are afraid of producing work that is not good enough. If a task is never finished, it can never be judged. This explanation is popular with the public, and many procrastinators describe themselves as perfectionists. However, when researchers have measured both traits, the connection has generally turned out to be weaker than expected, which suggests that perfectionism may explain some people's delays but not most.",
        "Most psychologists now accept that these theories are not really competitors. A student who delays an essay may find it boring (mood), feel that the deadline is far away (reward) and not know where to begin (task), all at the same time. Understanding which factor matters most for a particular person and a particular task may be the first step to finally getting it done.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Practice 1: match the theories",
        instructions:
          "Look at the four theories in “Why we put things off”. Match each statement with the correct theory, A–D. NB You may use any letter more than once.",
        left: [
          "It explains delay as a way of avoiding being judged.",
          "It suggests replacing one distant deadline with several closer ones.",
          "It says that the way a task is described affects whether people start it.",
          "It claims that avoiding a task makes people feel better, but only briefly.",
          "It is based on the idea that future benefits seem less valuable than present ones.",
          "Research has supported it less strongly than many people expect.",
          "It suggests that employers could help to reduce the problem.",
          "It argues that planning tools alone are unlikely to solve the problem.",
        ],
        right: ["the mood theory", "the reward theory", "the task theory", "the perfectionism theory"],
        answer: [3, 1, 2, 0, 1, 3, 2, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Check the details",
        instructions: "Choose the correct answer. Use “Why we put things off”.",
        questions: [
          {
            prompt: "Statement 2 in Practice 1 is about deadlines. Why is the task theory NOT the answer, even though it also suggests breaking things into smaller parts?",
            options: [
              "The task theory divides the work into small actions; only the reward theory talks about dividing deadlines.",
              "The task theory is not mentioned in the passage.",
              "The task theory says deadlines are not important.",
              "The task theory is about feelings, not work.",
            ],
            answer: 0,
            explanation:
              "Paragraph D recommends “breaking large tasks into small, specific actions”. Paragraph C recommends “several small deadlines instead of one large one”. The statement is about deadlines, so it matches the reward theory.",
          },
          {
            prompt: "According to paragraph C, why does delaying seem sensible “at each moment”?",
            options: [
              "Because the effort is needed now but the benefit comes later.",
              "Because films are more enjoyable than revision.",
              "Because exams are usually three weeks away.",
              "Because people underestimate how long tasks will take.",
            ],
            answer: 0,
            explanation:
              "“Because the effort is needed now and the reward arrives later, delaying seems sensible at each moment.” Options B and C repeat details from the example, and option D is never mentioned.",
          },
          {
            prompt: "Which statement about perfectionism is supported by paragraph E?",
            options: [
              "Most people who procrastinate are perfectionists.",
              "Perfectionism explains why most people delay tasks.",
              "Many people who procrastinate see themselves as perfectionists.",
              "Perfectionists never finish their work.",
            ],
            answer: 2,
            explanation:
              "“Many procrastinators describe themselves as perfectionists.” Research found the link weaker than expected, so options A and B go further than the text, and D is too extreme.",
          },
          {
            prompt: "What is the writer's main point in the final paragraph?",
            options: [
              "One theory has now replaced the others.",
              "Several causes can act together in the same situation.",
              "Students procrastinate more than other people.",
              "The task theory is the most useful of the four.",
            ],
            answer: 1,
            explanation:
              "The theories “are not really competitors”: the student example shows boredom, a distant deadline and an unclear first step working “all at the same time”.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Who travels after midnight?",
      timerMinutes: 6,
      paragraphs: [
        "When a city transport authority began planning changes to its night bus network, it first asked a simple question: who actually travels between midnight and five in the morning? Over four weeks, researchers interviewed more than 3,000 passengers on buses and at the busiest stops, asking where they were going, why they were travelling at that hour and what would improve their journey. The answers were surprising, and they showed that four quite different groups depend on the service.",
        "The largest group were shift workers: cleaners, hospital staff, security guards and kitchen workers whose jobs begin or end at night. Many said they had no real alternative, since few could afford a taxi every day, and around a quarter said they would have to change jobs if their route were cut. Unlike other passengers, they travelled at the same times on every day of the week, usually between the edge of the city and the centre.",
        "Students made up the second group. Most were travelling home from libraries, part-time jobs or friends' homes, and they were the passengers most likely to say that they chose the bus instead of walking for reasons of safety. They were also the group most interested in being able to follow the bus's exact position on a phone app, so that they did not have to wait alone at a stop.",
        "The third group were people returning from evenings out at restaurants, concerts and bars. Their numbers rose sharply on Fridays and Saturdays and fell almost to nothing on Mondays and Tuesdays. Drivers said that this group was responsible for most complaints about noise, although passengers in the other groups rarely mentioned the problem.",
        "The smallest group were visitors to the city, many of them travelling to or from the airport with luggage. They were the least familiar with the network and the most likely to ask drivers for directions. Several suggested that timetables at stops should be displayed in more than one language.",
        "The authority has since decided to run more buses at weekends on routes that serve entertainment districts, while protecting, rather than reducing, the weekday routes that shift workers rely on.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "match",
        title: "Practice 2: match the groups",
        instructions:
          "Read “Who travels after midnight?”. Match each statement with the correct group of passengers, A–D. NB You may use any letter more than once.",
        left: [
          "Their travel times were the same on every day of the week.",
          "They were the most likely to give safety as a reason for taking the bus.",
          "They often asked drivers for help with directions.",
          "Some said a cut in their route could force them to find other work.",
          "They particularly wanted to see where the bus was on a phone app.",
          "Drivers linked them to most complaints about noise.",
          "Some of them suggested providing timetables in other languages.",
        ],
        right: ["shift workers", "students", "people returning from evenings out", "visitors to the city"],
        answer: [0, 1, 3, 0, 1, 2, 3],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Scan for the names first and mark every place they appear, including surnames on their own, pronouns and job titles. Information about one person is often spread across several paragraphs, and a later paragraph may add the view you need.",
    },
    {
      exam: "ielts",
      body: "When two people appear in the same sentence, decide carefully whose view it is. *X agrees with Y that…* gives the view to both people; *a concern that Y dismisses* means Y does **not** share it.",
    },
    {
      exam: "toefl",
      body: "Read an Academic Passage includes questions on facts and on the connection between ideas. When a short text reports more than one view, track who says what, as you did here, so that you do not choose an option that gives the right idea but the wrong person or theory.",
    },
  ],
  vocabulary: [
    { word: "sceptical", meaning: "having doubts that something is true or useful (US: skeptical)", example: "She is sceptical of claims that the policy will work.", topic: "academic" },
    { word: "concede", meaning: "to admit that something is true, often unwillingly", example: "He conceded that the plan was expensive.", topic: "academic" },
    { word: "dismiss", meaning: "to decide that an idea is not important or not worth considering", example: "The minister dismissed the concerns about cost.", topic: "society" },
    { word: "retailer", meaning: "a business that sells goods to the public", example: "Online retailers can often offer lower prices.", topic: "business" },
    { word: "council", meaning: "the group of elected people who make decisions for a town or area", example: "The council plans to turn the old cinema into flats.", topic: "society" },
    { word: "procrastinate", meaning: "to keep delaying something that you should do", example: "I always procrastinate when I have a long essay to write.", topic: "education" },
    { word: "short-lived", meaning: "lasting only a short time", example: "The relief of putting off a task is short-lived.", topic: "everyday" },
    { word: "vague", meaning: "not clear, detailed or exact", example: "The instructions were too vague to follow.", topic: "work" },
    { word: "trait", meaning: "a particular quality in someone's character", example: "Patience is a useful trait in a teacher.", topic: "society" },
    { word: "shift worker", meaning: "someone whose working hours change or include nights", example: "Many shift workers rely on the night bus.", topic: "work" },
    { word: "lively", meaning: "full of people, activity and energy", example: "The town centre is lively in the evenings.", topic: "everyday" },
  ],
  keyPoints: [
    "Matching features links statements to people, theories, groups or places, not to paragraphs.",
    "Names are anchors: mark every mention of each option, including surnames, pronouns and job titles.",
    "Reporting verbs show each person's position: argues, found, doubts, warns, concedes, dismisses.",
    "Check who really holds the view; appearing in the same sentence is not enough.",
    "Some options may be used more than once and some not at all; the instructions tell you.",
  ],
};

export default lesson;
