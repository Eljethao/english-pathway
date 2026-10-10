import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-true-false-not-given",
  title: "True / False / Not Given",
  summary:
    "Learn the difference between False and Not Given, and use a step-by-step method to answer IELTS identification questions accurately.",
  skill: "reading",
  level: "B2",
  order: 1,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Reading – True/False/Not Given" },
    { exam: "ielts", task: "Reading – Yes/No/Not Given" },
  ],
  objectives: [
    "Explain the difference between False and Not Given",
    "Find the part of the passage that matches each statement",
    "Notice qualifying words such as all, some, only, usually and never",
    "Use the same method for Yes / No / Not Given questions about the writer's views",
  ],
  warmUp: [
    "Have you ever changed your mind about something after reading the details carefully? What happened?",
    "What is the difference between saying 'Most people like coffee' and 'Everyone likes coffee'?",
  ],
  learn: [
    {
      type: "text",
      title: "What the three answers mean",
      body: "In this task you compare a statement with the information in the passage. You are **not** asked what is true in real life, only what the passage says.\n\n- **True**: the passage says the same thing, usually in different words.\n- **False**: the passage **contradicts** the statement. It says the opposite, or something that cannot be true at the same time.\n- **Not Given**: the passage does not say. There is no information to confirm or contradict the statement.\n\nThe most common mistake is choosing False when the answer is Not Given. Ask yourself: *Does the passage contradict this, or is it simply silent?*",
    },
    {
      type: "example",
      title: "One sentence, three statements",
      items: [
        "Passage: “The museum, which opened in 1998, attracts around 200,000 visitors a year, most of them from overseas.”",
        "Statement: The museum opened in the late 1990s. → **True** (1998 is in the late 1990s)",
        "Statement: Most visitors to the museum are local people. → **False** (the passage says most are from overseas)",
        "Statement: The museum is free to enter. → **Not Given** (ticket prices are not mentioned)",
      ],
    },
    {
      type: "text",
      title: "A four-step method",
      body: "1. Read the statement and underline the **key words**, especially names, numbers and dates that are easy to scan for.\n2. Circle any **qualifiers**: all, some, most, only, always, often, never, the first, more than. These small words often decide the answer.\n3. Scan the passage for the key words or their synonyms, then read that part **carefully**.\n4. Compare meaning, not words. If the passage uses a different qualifier, ask whether it really **contradicts** the statement. *Not every scheme* contradicts *all schemes* → False. But *many* does not tell you whether it is *most* → Not Given.\n\nThe questions follow the order of the passage, so answer 3 is usually after answer 2.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Statements about facts use True / False / Not Given. Statements about the writer's opinions or claims use **Yes / No / Not Given**. The method is exactly the same, and you will practise both in this lesson.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "The return of the city bicycle",
      labelled: true,
      paragraphs: [
        "In the 1950s, bicycles were a common sight in many European cities. As car ownership grew over the following decades, however, cycling declined sharply. By the 1980s, planners in several countries were designing roads almost entirely around motor traffic, and the cyclists who remained often had to share busy streets with cars and lorries.",
        "The situation began to change in the early 2000s. Rising fuel prices, concerns about air quality and a growing interest in exercise encouraged city governments to look again at the humble bicycle. Copenhagen and Amsterdam, which had never fully abandoned cycling, became models for other cities to follow, and planners from abroad began visiting them to study their wide cycle paths and separate traffic lights for bikes.",
        "One of the most visible changes has been the spread of public bike-sharing schemes. Users unlock a bicycle with a card or a phone app, ride it across the city and leave it at another docking station. Copenhagen had tried a simple coin-operated scheme as early as 1995, but the idea really took off after Paris launched a much larger system, with thousands of bicycles, in 2007. Within a decade, hundreds of cities around the world had introduced their own versions.",
        "Not every scheme has been a success. Some cities underestimated the cost of repairing and redistributing bicycles, and in some places large numbers of bikes were stolen or damaged in the first few years. Elsewhere, bikes were rarely used because there were too few safe cycle lanes. Many transport researchers now argue that a sharing scheme works best when it is introduced together with protected lanes and lower speed limits for cars.",
        "More recently, electric bikes have added a new chapter to the story. Because they make hills and longer journeys much easier, they appeal to older riders and to commuters who do not want to arrive at work hot and tired. Several sharing schemes now offer e-bikes alongside ordinary ones, although they cost more to buy and their batteries need regular charging. Whether they will persuade large numbers of drivers to leave their cars at home remains to be seen.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader answers",
      body: "**Statement:** Cycling became less popular in European cities after the 1950s.\n\nKey words: *less popular*, *after the 1950s*. Paragraph A says “as car ownership grew… cycling declined sharply”. *Declined* = *became less popular*. → **True**\n\n**Statement:** Paris was the first city in the world to introduce a bike-sharing scheme.\n\nQualifier: *the first*. Paragraph C says Copenhagen had tried a scheme “**as early as 1995**”, twelve years before Paris launched its system in 2007. So Paris cannot have been the first. The passage contradicts the statement → **False**. (Be careful: if the passage only said Paris launched “one of the first” schemes, that would not prove it was *not* the first, and the answer could be Not Given.)\n\n**Statement:** The Paris scheme is now the largest in the world.\n\nParagraph C says the Paris system was “much larger” than Copenhagen's, but it never compares it with schemes around the world today. → **Not Given**",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "tfng",
        title: "Practice 1",
        instructions: "Use the passage “The return of the city bicycle” above. Do the statements agree with the information in the passage?",
        statements: [
          {
            text: "By the 1980s, some city planners focused mainly on the needs of cars.",
            answer: "T",
            explanation: "Paragraph A: planners were designing roads “almost entirely around motor traffic”.",
          },
          {
            text: "Fuel prices were one reason that cities became interested in cycling again.",
            answer: "T",
            explanation: "Paragraph B lists “rising fuel prices” as one of the reasons.",
          },
          {
            text: "At one time, Copenhagen gave up on cycling entirely.",
            answer: "F",
            explanation: "Paragraph B says Copenhagen and Amsterdam “had never fully abandoned cycling”.",
          },
          {
            text: "Bike-sharing users in Paris usually pay by phone.",
            answer: "NG",
            explanation: "Paragraph C says users unlock bikes with a card or a phone app, but it says nothing about how Paris users pay.",
          },
          {
            text: "All bike-sharing schemes have been popular with the public.",
            answer: "F",
            explanation: "Paragraph D: “Not every scheme has been a success”, and in some cities “bikes were rarely used”. The qualifier *all* makes this false.",
          },
          {
            text: "Some researchers think lower speed limits for cars can help a bike-sharing scheme succeed.",
            answer: "T",
            explanation: "Paragraph D: researchers argue that schemes work best with “protected lanes and lower speed limits for cars”.",
          },
          {
            text: "Electric bikes are cheaper for sharing schemes to buy than ordinary bikes.",
            answer: "F",
            explanation: "Paragraph E says e-bikes “cost more to buy”.",
          },
          {
            text: "The batteries of shared e-bikes are charged at the docking stations.",
            answer: "NG",
            explanation: "Paragraph E says the batteries “need regular charging”, but not where or how this is done. Do not be tricked by familiar words such as *docking station*.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Working from home: who benefits?",
      paragraphs: [
        "Since 2020, the number of employees who work from home for at least part of the week has risen dramatically. Supporters argue that remote work saves time, because people no longer spend hours commuting, and that it allows parents to organise their days more flexibly. These benefits are real. Anyone who has spent ninety minutes a day on a crowded train will understand why few people are keen to return to that routine five days a week. For many parents, too, being at home when the children come back from school can decide whether they stay in a job or leave it.",
        "The evidence on productivity, however, is more mixed than either side usually admits. A number of studies have found that people complete routine tasks faster at home, where there are fewer interruptions. Other research suggests that creative work, which often depends on informal conversations with colleagues, may suffer when teams rarely meet in person. It would therefore be a mistake to claim that home working is always more efficient, or that it is always less so: much depends on the kind of work involved.",
        "One group that is too often forgotten in this debate is new employees. People in their first jobs learn a great deal simply by listening to experienced colleagues on the phone or by asking quick questions across a desk, and their small mistakes are noticed and corrected sooner when a more senior colleague is sitting nearby. That kind of learning is far harder to arrange on a video call, and organisations that ignore it may find that their future managers are less well prepared.",
        "Many companies have chosen a hybrid model, in which staff spend two or three days a week in the office. Managers say this arrangement keeps some of the benefits of both approaches, although it has created a new problem: offices that are crowded on Tuesdays and Wednesdays but almost empty on Fridays. Hybrid working can be a sensible compromise, but only if team members agree to come in on the same days. Otherwise, people travel to the office only to spend the day on video calls with colleagues who stayed at home.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "tfng",
        variant: "ynng",
        title: "Practice 2: the writer's views",
        instructions:
          "Read “Working from home: who benefits?”. This passage gives the writer's views, so the task is Yes / No / Not Given. Do the following statements agree with the views of the writer?",
        statements: [
          {
            text: "The time that remote workers save on commuting is a genuine advantage.",
            answer: "T",
            explanation: "Paragraph 1: after describing the time saved and the flexibility, the writer says “These benefits are real.”",
          },
          {
            text: "Working from home always makes employees more productive.",
            answer: "F",
            explanation: "Paragraph 2: the writer says it would be “a mistake to claim that home working is always more efficient”.",
          },
          {
            text: "Employers should pay remote workers less than office workers.",
            answer: "NG",
            explanation: "The writer never discusses pay, so we cannot know their view.",
          },
          {
            text: "New employees can miss useful learning opportunities if they work mainly from home.",
            answer: "T",
            explanation: "Paragraph 3: learning from experienced colleagues is “far harder to arrange on a video call”.",
          },
          {
            text: "Companies that allow remote work find it easier to attract new staff.",
            answer: "NG",
            explanation: "Paragraph 3 is about how new employees learn, not about recruiting them. The writer gives no view on this.",
          },
          {
            text: "Hybrid working succeeds even when colleagues choose different days to be in the office.",
            answer: "F",
            explanation: "Paragraph 4: hybrid working is sensible “only if team members agree to come in on the same days”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Check your understanding",
        questions: [
          {
            prompt: "The passage says: “Many visitors arrive by train.” Statement: “Most visitors arrive by train.” What is the best answer?",
            options: ["True", "False", "Not Given"],
            answer: 2,
            explanation: "“Many” does not tell us whether it is more than half, so we cannot confirm or contradict “most”.",
          },
          {
            prompt: "Which word in a statement should make you check the passage especially carefully?",
            options: ["the", "only", "city", "people"],
            answer: 1,
            explanation: "Qualifiers like *only*, *all* and *never* change the meaning and often decide the answer.",
          },
          {
            prompt: "You cannot find any information about the statement in the passage. What should you answer?",
            options: ["True", "False", "Not Given"],
            answer: 2,
            explanation: "If the passage neither confirms nor contradicts the statement, the answer is Not Given, even if the statement is true in real life.",
          },
          {
            prompt: "When does IELTS use Yes / No / Not Given instead of True / False / Not Given?",
            options: [
              "When the statements are about the writer's views or claims",
              "When the passage is very long",
              "When the statements contain numbers and dates",
            ],
            answer: 0,
            explanation: "True / False / Not Given checks factual information; Yes / No / Not Given checks whether a statement agrees with the writer's views or claims.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Never use your own knowledge. If the passage does not say it, the answer is Not Given, even if the statement is true in real life.",
    },
    {
      exam: "ielts",
      body: "Use the answer words the instructions give. If the question asks for YES / NO / NOT GIVEN, an answer of TRUE or FALSE will not get the mark.",
    },
    {
      exam: "toefl",
      body: "TOEFL does not use this question type, but the same skill of comparing a sentence with the text carefully helps with factual questions in Read an Academic Passage.",
    },
  ],
  vocabulary: [
    { word: "contradict", meaning: "to say the opposite of something", example: "The second report contradicts the first one.", topic: "academic" },
    { word: "qualifier", meaning: "a word that limits or changes the meaning of a statement (all, some, only…)", example: "Watch out for qualifiers like 'usually' and 'never'.", topic: "academic" },
    { word: "decline", meaning: "to become smaller or less", example: "Cycling declined as car ownership grew.", topic: "academic" },
    { word: "abandon", meaning: "to stop doing or using something completely", example: "The city never abandoned its cycle lanes.", topic: "everyday" },
    { word: "scheme", meaning: "an official plan or system (British English)", example: "The bike-sharing scheme has 500 stations.", topic: "society" },
    { word: "underestimate", meaning: "to think something is smaller or easier than it really is", example: "They underestimated the cost of repairs.", topic: "business" },
    { word: "commute", meaning: "to travel regularly between home and work", example: "She commutes for an hour every morning.", topic: "work" },
    { word: "productivity", meaning: "how much work someone produces in a period of time", example: "Remote work can increase productivity for routine tasks.", topic: "work" },
    { word: "hybrid", meaning: "a mix of two different things", example: "Our company uses a hybrid model of office and home working.", topic: "work" },
    { word: "evidence", meaning: "facts or information that show whether something is true", example: "The evidence on productivity is mixed.", topic: "academic" },
  ],
  keyPoints: [
    "True = the passage agrees; False = the passage says the opposite; Not Given = the passage does not say.",
    "Compare meaning, not individual words. Watch qualifiers like all, some, only and the first.",
    "Questions follow the order of the passage.",
    "Never use your own knowledge of the topic.",
    "Yes / No / Not Given works the same way, but you compare the statement with the writer's views.",
  ],
};

export default lesson;
