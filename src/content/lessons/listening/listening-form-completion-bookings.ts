import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-form-completion-bookings",
  title: "Booking calls: form completion",
  summary:
    "Complete booking and enquiry forms while you listen: follow the caller's questions down the form, recognise the same idea in different words and keep to the word limit.",
  skill: "listening",
  level: "B1",
  order: 5,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 1" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
  ],
  objectives: [
    "Use the headings on a form to follow a booking or enquiry call",
    "Recognise when a speaker asks about a form heading in different words",
    "Write answers that keep to the word limit and don't repeat words on the form",
    "Answer questions about the purpose and next steps of a booking call",
  ],
  warmUp: [
    "What information do you usually give when you book a hotel room, a course or a table?",
    "Have you ever made a mistake on a form? What happened?",
  ],
  learn: [
    {
      type: "text",
      title: "How form completion works",
      body: "In IELTS Listening Part 1 you often hear someone book something or ask for information, for example a room, a course or a tour. You complete a form or notes while you listen.\n\nThe form helps you a lot:\n\n- The answers come **in the same order** as the form.\n- The **headings** (Name, Date, Price …) tell you what kind of answer you need.\n- The **words around each gap** tell you if you need a number, a noun or a name.\n- The **instruction** gives the word limit, for example ONE WORD AND/OR A NUMBER.\n\nIn a booking call, the person taking the booking usually asks questions in the same order as the form. Each new question tells you to move to the next gap.",
    },
    {
      type: "text",
      title: "The speaker uses different words",
      body: "The heading on the form and the words you hear are often different. You need to recognise the same idea in new words. Don't wait for the exact heading. Listen for the question that matches it.",
    },
    {
      type: "example",
      title: "Form heading → what you might hear",
      items: [
        "**Arrival time** → “What time do you think you'll get here?”",
        "**Room type** → “Would you like a single or a double?”",
        "**Payment method** → “How would you like to pay?”",
        "**Special requirements** → “Is there anything else we should know, for example about food?”",
        "**How you heard about us** → “How did you find out about us?”",
      ],
    },
    {
      type: "table",
      title: "Keep to the word limit",
      headers: ["Instruction", "Correct", "Wrong"],
      rows: [
        ["ONE WORD ONLY", "lake", "the lake (two words)"],
        ["ONE WORD AND/OR A NUMBER", "12 August", "the twelfth of August (too many words)"],
        ["NO MORE THAN TWO WORDS", "water bottle", "a water bottle (three words)"],
        ["NO MORE THAN TWO WORDS AND/OR A NUMBER", "8 weeks", "for 8 weeks in total (four words and a number)"],
      ],
    },
    {
      type: "text",
      title: "Three easy ways to lose marks",
      body: "1. **Too many words.** If the answer breaks the word limit, it is wrong, even if the meaning is right. Leave out words like *a* and *the* when the gap doesn't need them.\n2. **Repeating the form.** If the form says *£ …* or *… Road*, don't write the £ sign or the word *Road* again.\n3. **Wrong spelling or form.** A spelled name must be exact. Check plurals too: if the speaker says *towels*, *towel* is not correct.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: which answer fits?",
        instructions: "Read the instruction, the form and what the speaker says. Choose the answer you should write.",
        questions: [
          {
            prompt: "ONE WORD ONLY. Form: “Bring: a ______ for the swimming pool.” You hear: “Please bring a swimming cap. They're required in the pool.”",
            options: ["swimming cap", "cap", "a cap", "caps"],
            answer: 1,
            explanation: "“cap” is one word and fits the gap. “swimming cap” and “a cap” are two words, and “caps” is plural, but the form says “a ______”.",
          },
          {
            prompt: "NO MORE THAN TWO WORDS AND/OR A NUMBER. Form: “Address: ______ Road.” You hear: “It's forty-two Station Road.”",
            options: ["42 Station Road", "42 Station", "Station", "forty-two Station Road"],
            answer: 1,
            explanation: "The word “Road” is already on the form, so you write only “42 Station”. Without the number, the address is not complete.",
          },
          {
            prompt: "ONE WORD AND/OR A NUMBER. Form: “Cost per night: £______.” You hear: “It's sixty-five pounds a night, and breakfast is twelve pounds extra.”",
            options: ["77", "12", "65", "65 a night"],
            answer: 2,
            explanation: "The cost per night is £65. Breakfast is a separate cost, so don't add it. “65 a night” breaks the word limit and repeats the form.",
          },
          {
            prompt: "NO MORE THAN TWO WORDS. Form: “Request: a room on the ______ floor.” You hear: “Could we have a room on the ground floor? My father finds stairs difficult.”",
            options: ["ground floor", "first", "ground", "the ground"],
            answer: 2,
            explanation: "The words “the” and “floor” are already on the form, so the answer is “ground”.",
          },
        ],
      },
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In IELTS Listening you hear each recording once, and the answers come in the same order as the recording. Before Part 1 starts, read the whole form and underline the word limit. If you miss a gap, leave it and listen for the next heading, so you don't lose the next answer too.",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model call: hiring bikes",
      voice: "uk",
      transcript:
        "Tom: Good morning, Coastline Bike Hire. Tom speaking.\nNadia: Hi. I'd like to book some bikes for Saturday, please. My name's Nadia Brennan. That's B, R, E, double N, A, N.\nTom: Thanks, Nadia. How many bikes do you need?\nNadia: Three adult bikes and one for my son. He's nine.\nTom: So three adult bikes and one child's bike. Would you like them for a full day or a half day?\nNadia: A half day, please. We'd like to start at nine.\nTom: Fine. A half day is eighteen pounds for each adult bike and ten for the child's bike.\nNadia: Do we need to bring helmets?\nTom: No, helmets are included. But please bring a water bottle, because there are no shops on the route.\nNadia: Great. Where do we collect the bikes?\nTom: From our shop next to the harbour, not the one in town.",
    },
    {
      type: "table",
      title: "The form and the answers",
      headers: ["Form", "Answer", "Why"],
      rows: [
        ["Name: Nadia ______", "Brennan", "Spelled letter by letter: “double N” = NN"],
        ["Bikes: 3 adult and 1 ______", "child's", "Tom repeats it: “one child's bike”"],
        ["Hire period: ______ day", "half", "“a full day or a half day?” Nadia chooses half"],
        ["Start time: ______", "9.00", "“We'd like to start at nine”"],
        ["Price per adult bike: £______", "18", "£10 is for the child's bike"],
        ["Bring: a ______", "water bottle", "Helmets are mentioned, but they are included"],
        ["Collect from: shop next to the ______", "harbour", "“not the one in town”"],
      ],
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "Before the call, a strong listener reads the form and thinks: *a surname, a type of bike, a time, a price, an object, a place*.\n\nDuring the call, Tom's questions move the listener down the form. “How many bikes?” → the bikes line. “A full day or a half day?” → hire period. Notice that the form says *Hire period*, but Tom never says these words.\n\nThere are three traps. The price for the child's bike (£10) is close to the adult price. Helmets are mentioned in the “Bring” part, but Nadia doesn't need to bring them. And there are two shops, but “not the one in town” tells you the answer is the harbour.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice audio 1: which heading?",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Question one. Do you think you'll be with us before six?\n\nQuestion two. Will that be cash or card?\n\nQuestion three. Do any of you have allergies we should know about?\n\nQuestion four. Who can we contact if something goes wrong while you're here?\n\nQuestion five. Would you prefer one large bed or two separate beds?\n\nQuestion six. Did a friend recommend us, or did you see us online?",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Match the question to the form heading",
        instructions: "Listen to six questions from booking calls. Match each question with the form heading it is asking about. There are two extra headings.",
        left: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6"],
        right: [
          "Room type",
          "Number of guests",
          "Payment method",
          "How you heard about us",
          "Arrival time",
          "Emergency contact",
          "Departure date",
          "Special requirements",
        ],
        answer: [4, 2, 7, 5, 0, 3],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2: booking a campsite",
      voice: "uk",
      cast: { Receptionist: "female", Caller: "male" },
      transcript:
        "Receptionist: Hello, Pine Valley Campsite.\nCaller: Hi. I'd like to book a place for a tent, from the twelfth to the fifteenth of August.\nReceptionist: Let me check. Yes, that's fine. How many people?\nCaller: Two adults. Oh, and our dog. Is that OK?\nReceptionist: Yes, dogs are welcome, but they must stay on a lead. Would you like a place near the lake or near the shower block?\nCaller: Near the lake, please.\nReceptionist: Those are a bit more expensive. It's twenty-four pounds a night, not twenty.\nCaller: That's fine. My surname is Kowalski. K, O, W, A, L, S, K, I.\nReceptionist: Thanks. Will you come by car?\nCaller: No, by bike, actually.\nReceptionist: Then you can keep your bikes in the shed next to reception. And please arrive after two o'clock.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Form completion: campsite booking",
        instructions: "Listen and complete the form. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Pine Valley Campsite: booking form\n\nDates: 12 to {{0}} August\nPeople: 2 adults\nPet: one {{1}}\nLocation of tent: near the {{2}}\nPrice per night: £{{3}}\nSurname: {{4}}\nTravelling by: {{5}}\nBikes kept in the {{6}} next to reception\nArrive after: {{7}}",
        answers: [
          ["15", "15th", "fifteenth"],
          ["dog"],
          ["lake"],
          ["24", "24.00", "twenty-four"],
          ["Kowalski"],
          ["bike", "bicycle", "bikes", "bicycles"],
          ["shed"],
          ["2", "2.00", "2:00", "2 pm", "2pm", "2.00 pm", "2:00 pm", "2 p.m.", "14:00", "14.00", "two", "two o'clock", "2 o'clock"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 3: a course enquiry",
      voice: "uk",
      cast: { Assistant: "male", Caller: "female" },
      transcript:
        "Assistant: Hello, Westbridge Community Centre.\nCaller: Hi. I'm calling about the photography course for beginners. Is there still space?\nAssistant: Yes, there are two places left in the Thursday evening class. The Monday class is full.\nCaller: Thursday is great. What time does it start?\nAssistant: At seven fifteen. The course lasts eight weeks.\nCaller: Do I need my own camera?\nAssistant: For the first few weeks, a phone camera is fine. Later, you can borrow a camera from us.\nCaller: Perfect. How much is it?\nAssistant: It's ninety-five pounds, or seventy-five for students.\nCaller: I'm not a student, unfortunately.\nAssistant: That's OK. How should we contact you?\nCaller: By email, please. Texts don't always reach me.\nAssistant: Fine. Oh, and the class meets in the Garden Room, on the first floor.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Note completion: photography course",
        instructions: "Listen and complete the notes. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        text: "Photography course\n\nLevel: for {{0}}\nDay: {{1}} evening\nStart time: {{2}}\nLength of course: {{3}}\nWhat to use at first: a {{4}}\nPrice for this caller: £{{5}}\nContact by: {{6}}\nRoom: the {{7}} Room",
        answers: [
          ["beginners"],
          ["Thursday", "Thursdays"],
          ["7.15", "7:15", "7.15 pm", "7:15 pm", "7.15pm", "7:15pm", "7.15 p.m.", "7:15 p.m.", "19:15", "19.15", "seven fifteen", "quarter past seven"],
          ["8 weeks", "eight weeks"],
          ["phone camera", "phone"],
          ["95", "95.00", "ninety-five"],
          ["email", "e-mail"],
          ["Garden"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 4: booking a meeting room",
      voice: "us",
      transcript:
        "Lena: Grandview Hotel events team, this is Lena.\nDaniel: Hi Lena, this is Daniel Park from Brightway Software. I'd like to book a meeting room for a training day on March twentieth.\nLena: Certainly. How many people will there be?\nDaniel: About thirty.\nLena: Then I'd suggest the Oak Room. It holds up to forty people. The Maple Room is cheaper, but it only holds twenty.\nDaniel: The Oak Room, then. We'll also need lunch for everyone.\nLena: No problem. I'll email you our lunch menu this afternoon, so you can choose.\nDaniel: Thanks. And is there parking for people who drive?\nLena: Yes, it's free for event guests. They just need to give their car's registration number at reception.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "TOEIC-style questions",
        instructions: "Listen to the conversation. Choose the best answer to each question. (In the real TOEIC test there are three questions for each conversation.)",
        questions: [
          {
            prompt: "Why is Daniel calling?",
            options: [
              "To book a room for a training event",
              "To complain about a hotel room",
              "To ask about a job at the hotel",
              "To change the date of a meeting",
            ],
            answer: 0,
            explanation: "Daniel says, “I'd like to book a meeting room for a training day.”",
          },
          {
            prompt: "Why does Lena suggest the Oak Room?",
            options: [
              "It is the cheapest room.",
              "It is big enough for the group.",
              "It is next to the restaurant.",
              "It is free on March twentieth.",
            ],
            answer: 1,
            explanation: "There will be about thirty people, and the Oak Room “holds up to forty”. The Maple Room is cheaper but too small.",
          },
          {
            prompt: "What will Lena do this afternoon?",
            options: [
              "Call Daniel's manager",
              "Prepare the projector",
              "Send a menu by email",
              "Reserve parking spaces",
            ],
            answer: 2,
            explanation: "Lena says, “I'll email you our lunch menu this afternoon.”",
          },
          {
            prompt: "What do drivers need to do?",
            options: [
              "Pay for parking at reception",
              "Park on the street",
              "Arrive before nine o'clock",
              "Give their registration number",
            ],
            answer: 3,
            explanation: "Parking is free, but guests “need to give their car's registration number at reception”.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Part 1 is a conversation between two people in an everyday situation, often with form or note completion. Use the headings as a map: when the speaker asks about the next heading, move on, even if you missed the last answer.",
    },
    {
      exam: "ielts",
      body: "Check every answer against the word limit. “NO MORE THAN TWO WORDS AND/OR A NUMBER” means a three-word answer is wrong even if the meaning is right. Don't copy words that are already printed, such as £, “Road” or “Room”.",
    },
    {
      exam: "toeic",
      body: "In Part 3, each conversation has three questions. In booking calls, they often ask why someone is calling, what the other person suggests, and what will happen next. Read the questions before the conversation starts, and listen for offers like “I'll email you …” near the end.",
    },
  ],
  vocabulary: [
    { word: "enquiry", meaning: "a question to get information (inquiry in US English)", example: "I'm calling with an enquiry about your evening courses.", topic: "everyday" },
    { word: "hire", meaning: "to pay to use something for a short time (rent in US English)", example: "We hired bikes for the afternoon.", topic: "travel" },
    { word: "included", meaning: "part of the price, so you don't pay extra", example: "Breakfast is included in the room price.", topic: "travel" },
    { word: "beginner", meaning: "a person who is starting to learn something", example: "This class is for complete beginners.", topic: "education" },
    { word: "space", meaning: "a free place on a course, in a class or at an event", example: "Is there still space on the Saturday course?", topic: "education" },
    { word: "on a lead", meaning: "held by a long strap or rope (on a leash in US English), used for dogs", example: "Dogs must be kept on a lead near the lake.", topic: "everyday" },
    { word: "shower block", meaning: "a building with showers and toilets at a campsite", example: "Our tent was near the shower block.", topic: "travel" },
    { word: "special requirements", meaning: "things a guest needs, for example a type of food or easy access", example: "Please tell us about any special requirements, such as allergies.", topic: "travel" },
    { word: "payment method", meaning: "the way you pay, for example by card or in cash", example: "What's your preferred payment method?", topic: "business" },
    { word: "registration number", meaning: "the letters and numbers on a car's number plate", example: "Please give your registration number at reception.", topic: "everyday" },
  ],
  keyPoints: [
    "Read the whole form before you listen. The headings and the words around each gap tell you what kind of answer you need.",
    "Answers come in the same order as the form. Each new question from the speaker moves you to the next gap.",
    "The speaker often uses different words from the heading, so listen for the matching question.",
    "Keep to the word limit, and don't repeat words or symbols that are already on the form.",
  ],
};

export default lesson;
