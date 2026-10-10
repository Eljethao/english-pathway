import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-evaluating-justifying",
  title: "Evaluating and justifying views",
  summary:
    "Go beyond listing pros and cons: judge complex issues against a clear criterion, concede the strongest opposing point and still reach a justified verdict in IELTS Part 3 and the TOEFL interview.",
  skill: "speaking",
  level: "C1",
  order: 5,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
  ],
  objectives: [
    "Evaluate an issue against an explicit criterion (fairness, cost, effectiveness, long-term impact) instead of listing pros and cons",
    "Concede a strong opposing point and counter it without sounding undecided",
    "Justify a verdict with precise linking language: on the grounds that, given that, provided that",
    "Answer “How far do you agree…?” and “Is it fair…?” questions with a calibrated degree of agreement",
  ],
  warmUp: [
    "Should museums and galleries be free to enter? Give one argument for each side, then decide which matters more and say why.",
    "What is the difference between saying “It has advantages and disadvantages” and saying “It's worth it, mainly because…”?",
  ],
  learn: [
    {
      type: "text",
      title: "From listing to evaluating",
      body: "In *Abstract discussion* you learned to weigh up both sides of a Part 3 question (*On the plus side… The downside is…*). At C1, evaluating means more than that: it means making a **judgement** and showing the **grounds** for it. Two candidates can list exactly the same advantages and disadvantages; the stronger one says which of them matters more, and why.\n\nEvaluative questions often look like this: *Is it fair that…? Is it right for…? How far do you agree…? Is… a good use of public money? Do the benefits outweigh the drawbacks?*\n\nThree moves make an evaluation convincing:\n\n1. **Name your criterion.** Say what you are judging by: fairness, cost, effectiveness, freedom, long-term impact. *If we judge it purely on cost… But in terms of fairness…*\n2. **Concede, then counter.** Accept the strongest point on the other side, then explain why it doesn't change your view. *Admittedly, … Even so, …*\n3. **Give a verdict with grounds or conditions.** *So on the whole I'd support it, on the grounds that… / provided that…*\n\nBalanced does not mean undecided. “There are good points on both sides, so it's hard to say” sits on the fence and gives the examiner very little to assess. A balanced answer still arrives somewhere.",
    },
    {
      type: "table",
      title: "Language for each move",
      headers: ["Move", "Useful language", "Example"],
      rows: [
        ["Calibrated agreement", "I agree up to a point / I'd go along with that to some extent / I wouldn't go as far as saying… / I'd draw the line at… / I couldn't agree more", "I'd go along with that up to a point, but I wouldn't go as far as saying it should be compulsory."],
        ["Naming the criterion", "If we judge it by… / In terms of… / From the point of view of… / What really matters here is…", "If we judge it by results rather than intentions, the scheme hasn't worked."],
        ["Conceding", "Admittedly, … / Granted, … / It's true that… / I take the point that… / There's something to be said for…", "Granted, free entry costs the taxpayer money."],
        ["Countering", "Even so, … / That doesn't necessarily mean… / The trouble with that argument is… / But that's outweighed by…", "Even so, the long-term benefits are far greater."],
        ["Justifying", "on the grounds that… / given that… / which is why… / The reason I say that is…", "I'd keep it, given that it's the only free space for teenagers in the area."],
        ["Verdict", "On the whole… / All things considered… / Ultimately, it comes down to… / For me, the deciding factor is…", "All things considered, it's a price worth paying."],
      ],
    },
    {
      type: "example",
      title: "Listing, fence-sitting and evaluating",
      items: [
        "Listing: “Tourist taxes have advantages and disadvantages. They raise money, but visitors don't like them.”",
        "Evaluating: “**If we judge it by** what the money is spent on, a tourist tax is perfectly fair. **Admittedly**, it adds a little to the cost of a holiday. **Even so**, visitors use the roads and the rubbish collection like everyone else, **which is why** I'd say it's **a price worth paying**.”",
        "Fence-sitting: “There are good points on both sides, so it's hard to say.”",
        "Balanced but decisive: “There are good points on both sides, but **for me the deciding factor is** safety, so I'd come down on the side of the ban.”",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "What is each phrase doing?",
        instructions: "Match each phrase to its job in an evaluation. There is one extra job.",
        left: [
          "Granted, …",
          "Even so, …",
          "If we judge it purely in terms of cost, …",
          "…on the grounds that…",
          "All things considered, …",
          "I'd go along with that up to a point.",
        ],
        right: [
          "introducing a final verdict",
          "accepting a point from the other side",
          "giving a specific example",
          "showing partial agreement",
          "naming the standard you are judging by",
          "giving the reason for your verdict",
          "limiting the importance of a point you have just accepted",
        ],
        answer: [1, 6, 4, 5, 0, 3],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answers: Part 3 on the topic of “Public money and fairness”",
      voice: "uk",
      cast: { Examiner: "male", Candidate: "female" },
      transcript:
        "Examiner: Some people think governments should stop funding the arts and spend the money on healthcare instead. How far do you agree?\nCandidate: I agree up to a point, but I wouldn't go as far as cutting arts funding altogether. If we judge it purely by urgency, then of course a hospital ward matters more than a theatre. Nobody would argue with that. But I don't think urgency is the only thing we should be judging by. Local museums and youth orchestras often give children from poorer families their only real contact with culture, and that has a value that's hard to measure. Admittedly, the sums involved can be large, particularly for big national institutions. Even so, arts budgets are usually a tiny fraction of what's spent on health, so cutting them wouldn't make much difference to waiting lists, whereas it could wipe out small organisations almost overnight. So, all things considered, I'd keep the funding, on the grounds that it's a small price for something that would be very hard to rebuild once it's gone.\nExaminer: Is it fair that some people who do essential jobs, such as care workers, are paid so little?\nCandidate: No, I don't think it is, and I'd say it's one of the clearest cases of the market getting things wrong. Granted, pay is partly about supply and demand. If a lot of people can do a job, wages tend to stay low. But if we judge pay by how much a job contributes to society, care work should be near the top, not the bottom. The trouble with leaving it to the market is that the people who rely on carers, elderly or disabled people, often have the least money to pay for them. So I think there's a strong case for the state stepping in, whether that's through better funding or a proper pay scale. Ultimately, it comes down to what we value, and at the moment our pay structures don't reflect it.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "**Answer 1 (How far do you agree?)**\n\n- **Calibrated position first:** “I agree up to a point, but I wouldn't go as far as…” The examiner knows exactly where the speaker stands before any reasons are given.\n- **Names and questions a criterion:** “If we judge it purely by urgency… But I don't think urgency is the only thing we should be judging by.” Then a second criterion appears: access to culture for poorer children.\n- **Concede and counter:** “Admittedly, the sums involved can be large… Even so, arts budgets are usually a tiny fraction…” The concession is a real point, and the counter explains why it doesn't change the verdict.\n- **Verdict with grounds:** “all things considered, I'd keep the funding, on the grounds that…”\n\n**Answer 2 (Is it fair?)**\n\n- **A direct answer:** “No, I don't think it is.” Evaluative questions deserve a clear first sentence.\n- **Concedes the economic argument:** “Granted, pay is partly about supply and demand.”\n- **Changes the criterion:** “But if we judge pay by how much a job contributes to society…” This is the heart of the evaluation.\n- **Ends on a principle:** “Ultimately, it comes down to what we value.”\n\nNotice what is missing: no “there are advantages and disadvantages”, no personal story and no fence-sitting. Both answers are balanced, and both reach a verdict.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Which answer evaluates best?",
        questions: [
          {
            prompt: "Examiner: “Is it a good idea for cities to charge drivers to enter the centre?” Which answer is balanced **and** decisive?",
            options: [
              "There are advantages and disadvantages. It reduces traffic but it costs money. So it depends.",
              "Yes, definitely. It's a brilliant idea, and anyone who disagrees just doesn't understand the problem.",
              "Broadly, yes. Admittedly, it hits people on low incomes who have to drive. Even so, if we judge it by its effect on air quality and journey times, the benefits are hard to argue with, especially if the money goes into buses.",
              "I don't have a car, so it doesn't really affect me, and I don't mind either way.",
            ],
            answer: 2,
            explanation: "Option C gives a position, concedes a real drawback, names the criterion (air quality and journey times), counters and adds a condition. A sits on the fence, B ignores the other side, and D is personal with no evaluation.",
          },
          {
            prompt: "The speaker thinks school uniforms are worth keeping. Which sentence uses a concession correctly?",
            options: [
              "Granted, uniforms can be expensive for some families. Even so, they take away the daily pressure to compete over clothes, which matters more.",
              "Granted, uniforms take away the daily pressure to compete over clothes. Even so, they are worth keeping.",
              "Uniforms can be expensive. Granted, they are worth keeping.",
              "Even so, uniforms can be expensive, granted they reduce pressure.",
            ],
            answer: 0,
            explanation: "*Granted* introduces a point from the **other** side (cost), and *Even so* explains why the speaker's view still stands. In B, both sentences support uniforms, so *Even so* makes no sense. C and D use the markers in the wrong places.",
          },
          {
            prompt: "Examiner: “How far do you agree that adults should be free to eat whatever they like, even if it's unhealthy?” Which opening shows partial agreement most precisely?",
            options: [
              "I couldn't agree more.",
              "I agree up to a point: adults should make their own choices, but I'd draw the line at advertising junk food to children.",
              "I totally disagree with everything about it.",
              "Yes and no, it's difficult.",
            ],
            answer: 1,
            explanation: "*Up to a point* plus *I'd draw the line at…* shows exactly where the speaker's agreement stops. A is total agreement, C is total disagreement, and D is vague.",
          },
          {
            prompt: "Which sentence names the criterion the speaker is judging by?",
            options: [
              "What really matters here is whether it works in the long term.",
              "All things considered, I'd support it.",
              "Admittedly, it's expensive.",
              "That's a tricky one.",
            ],
            answer: 0,
            explanation: "*What really matters here is…* tells the listener the standard being used (long-term effectiveness). B gives a verdict, C concedes, and D buys time.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Complete the evaluation",
        instructions: "Complete the Part 3 answer with words from the box. Each word is used once.",
        wordBank: ["point", "as", "Admittedly", "so", "by", "considered", "provided", "grounds"],
        text:
          "Question: Should zoos still exist in the twenty-first century?\n\nHonestly, I'd go along with the critics up to a {{0}}, but I wouldn't go as far {{1}} saying that all zoos should close. {{2}}, keeping large animals like elephants in small enclosures is very hard to justify. Even {{3}}, if we judge zoos {{4}} what they contribute to conservation, the better ones play a genuine role, for instance by breeding endangered species. So, all things {{5}}, I'd keep them, {{6}} that they meet far stricter standards, and I'd phase out the ones that don't, on the {{7}} that an animal's welfare should always come first.",
        answers: [
          ["point"],
          ["as"],
          ["admittedly", "granted"],
          ["so"],
          ["by", "on"],
          ["considered"],
          ["provided", "providing"],
          ["grounds", "basis"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Part 3: is it fair?",
        instructions:
          "No preparation, as in Part 3. Give a clear (possibly qualified) position, name a criterion, concede one point and counter it, then give a verdict with grounds or a condition. Aim for 45–60 seconds.",
        prompt: "Topic: Tourism. Some popular cities now limit the number of tourists who can visit each day. Is this a fair policy?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I'd say it's fair in principle, although a lot depends on how it's done. If we judge it from the residents' point of view, it's hard to argue against. In some historic centres, local people have been priced out of their own neighbourhoods, and the streets are so crowded that ordinary life becomes almost impossible. Admittedly, a cap could hurt small businesses that depend on visitors, and if you have to book months ahead, it favours wealthier, well-organised travellers. Even so, a place that's overrun eventually loses the very character that attracted people in the first place, so in the long run limits arguably protect tourism rather than damage it. So on the whole I'd support them, provided the booking system is simple and local people have a say in where the limits are set.",
        targetPhrases: ["if we judge it", "admittedly", "even so", "on the whole", "provided"],
        checklist: [
          "I gave a clear position in my first sentence, even if it was a qualified one.",
          "I named at least one criterion I was judging by (fairness, cost, the residents' point of view…).",
          "I conceded a strong point on the other side, then explained why it didn't change my view.",
          "I ended with a verdict and a reason or condition, not “it's hard to say”.",
          "I varied my linking language instead of repeating “but” and “so”.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEFL Take an Interview: a compact evaluation",
        instructions:
          "No preparation, as in the TOEFL interview. In 45 seconds, use a compact version: position, one concession, a counter and a verdict. Stop at 45 seconds.",
        prompt:
          "Interviewer: Some universities now require every student to do volunteer work in the local community before they graduate. Do you think this is a good requirement? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "Honestly, I like the idea behind it, but I don't think it should be a requirement. Volunteering clearly benefits students. They meet people outside the university and learn skills you can't get from a textbook. Admittedly, some students would never volunteer unless they had to. Even so, when something becomes compulsory, people often do the minimum just to tick a box, and that doesn't help the community very much. So I'd say universities should strongly encourage it instead, for example by giving course credit for it, on the grounds that people who choose to help usually do a much better job.",
        targetPhrases: ["admittedly", "even so", "on the grounds that"],
        checklist: [
          "I made my position clear in the first sentence.",
          "I conceded one point from the other side.",
          "I explained why that point didn't change my view.",
          "I gave a verdict with a reason and finished within 45 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Evaluative questions (*Is it fair…? How far do you agree…? Is it worth…?*) are a natural place to show range: concessions, conditions (*provided that…*) and reasons introduced by *given that* or *on the grounds that*. The band 7 descriptor for Fluency and Coherence refers to “flexible use of spoken discourse markers, connectives and cohesive features”, so vary your concession and contrast markers rather than repeating *but*.",
    },
    {
      exam: "ielts",
      body: "There is no “right” opinion in Part 3: the examiner assesses your language, not your views. A clear verdict that you justify gives the examiner far more to assess than a careful answer that never commits to anything.",
    },
    {
      exam: "toefl",
      body: "The later **Take an Interview** questions ask for your opinion on wider issues. With 45 seconds and no preparation, use a compact shape: position → one concession → counter → verdict. If time is short, drop the concession, but never drop the verdict.",
    },
  ],
  vocabulary: [
    { word: "on the grounds that", meaning: "for the reason that (used to justify a decision or view)", example: "The plan was rejected on the grounds that it was too expensive.", topic: "academic" },
    { word: "admittedly", meaning: "used to accept that something is true, before saying something that contrasts with it", example: "Admittedly, the course is expensive, but it's worth every penny.", topic: "academic" },
    { word: "granted", meaning: "used to accept a point from the other side of an argument", example: "Granted, the new road will save time. Even so, it will destroy the woods.", topic: "academic" },
    { word: "up to a point", meaning: "partly, but not completely", example: "I agree with you up to a point.", topic: "everyday" },
    { word: "draw the line at", meaning: "to refuse to accept something beyond a certain limit", example: "I don't mind working late, but I draw the line at weekends.", topic: "everyday" },
    { word: "the deciding factor", meaning: "the most important reason for a decision", example: "Price was the deciding factor in choosing the flat.", topic: "everyday" },
    { word: "a price worth paying", meaning: "a disadvantage that is acceptable because of the benefits", example: "A longer commute is a price worth paying for a bigger garden.", topic: "society" },
    { word: "sit on the fence", meaning: "to avoid taking a side in an argument", example: "You can't sit on the fence forever; you'll have to decide.", topic: "everyday" },
    { word: "priced out (of)", meaning: "unable to live or buy somewhere because it has become too expensive", example: "Young families are being priced out of the city centre.", topic: "society" },
    { word: "overrun", meaning: "filled with too many people or things", example: "In August, the old town is overrun with visitors.", topic: "travel" },
    { word: "phase out", meaning: "to stop using or doing something gradually", example: "The company is phasing out plastic packaging.", topic: "business" },
  ],
  keyPoints: [
    "Evaluating means judging, not just listing: say which side matters more and why.",
    "Name your criterion (cost, fairness, effectiveness, long-term impact) so the listener knows what you're judging by.",
    "Concede the strongest opposing point (Admittedly…, Granted…), then counter it (Even so…).",
    "Finish with a verdict and its grounds or conditions: on the grounds that…, provided that…",
    "Calibrate your agreement: up to a point, I wouldn't go as far as…, I'd draw the line at…",
  ],
};

export default lesson;
