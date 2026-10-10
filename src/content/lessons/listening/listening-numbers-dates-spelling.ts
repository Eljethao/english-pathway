import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-numbers-dates-spelling",
  title: "Numbers, dates, spelling and addresses",
  summary:
    "Catch the small details that cost easy marks: similar-sounding numbers, dates, prices, phone numbers, spelled names, postcodes and email addresses.",
  skill: "listening",
  level: "B1",
  order: 2,
  minutes: 15,
  exams: [{ exam: "ielts", task: "Listening Part 1" }],
  objectives: [
    "Hear the difference between similar numbers, such as fifteen and fifty",
    "Write down dates, times, prices and phone numbers correctly",
    "Write a word correctly when a speaker spells it letter by letter",
    "Understand postcodes and email addresses",
  ],
  warmUp: [
    "How do you say your phone number in English? Do you say “zero” or “oh”?",
    "Which English letters do you find hard to tell apart when you hear them?",
  ],
  learn: [
    {
      type: "text",
      title: "Numbers that sound similar",
      body: "Numbers like **thirteen** and **thirty** sound very similar. Listen for two things:\n\n- **Stress.** Teen numbers are stressed at the end: thir*TEEN*. Numbers ending in -ty are stressed at the start: *THIR*ty.\n- **The last sound.** Teen numbers end with a clear “n” sound. In -ty numbers, the end is short and light.\n\nBe careful: when a teen number comes just before a noun, the stress can move to the start (“*FIF*teen *MIN*utes”). Then the clear “n” at the end is your best clue.\n\nIf you are not sure, think about what makes sense. A bus ticket probably doesn't cost £50, but £15 is possible.",
    },
    {
      type: "table",
      title: "Teen or -ty?",
      headers: ["Stress at the end", "Stress at the start"],
      rows: [
        ["thirTEEN (13)", "THIRty (30)"],
        ["fourTEEN (14)", "FORty (40)"],
        ["fifTEEN (15)", "FIFty (50)"],
        ["sixTEEN (16)", "SIXty (60)"],
        ["sevenTEEN (17)", "SEVenty (70)"],
        ["eighTEEN (18)", "EIGHty (80)"],
        ["nineTEEN (19)", "NINEty (90)"],
      ],
    },
    {
      type: "text",
      title: "Phone numbers, prices and times",
      body: "- **Phone numbers** are said one digit at a time, often in groups. 0 is often said as “oh”. Two of the same digit can be “double”: “double five” = 55.\n- **Prices** often drop the word *pounds* or *dollars*: “twelve fifty” = £12.50, “nineteen ninety-nine” = £19.99.\n- **Times**: “quarter past three” = 3.15, “twenty to six” = 5.40, “half past seven” = 7.30, “ten forty” = 10.40.",
    },
    {
      type: "example",
      title: "Dates and years",
      items: [
        "“**the third of May**” or “**May the third**” → 3 May / May 3",
        "“**the twenty-first**” → 21st",
        "“**nineteen ninety-eight**” → 1998",
        "“**two thousand and nine**” → 2009",
        "“**twenty twenty-five**” → 2025",
      ],
    },
    {
      type: "table",
      title: "Letters people often confuse",
      headers: ["Letters", "How to tell them apart"],
      rows: [
        ["A, E, I", "A sounds like “day”, E sounds like “see”, I sounds like “my”"],
        ["G, J", "G sounds like “gee” (rhymes with see), J sounds like “jay” (rhymes with day)"],
        ["B, P, V", "Listen carefully to the first sound. Check which spelling makes a real name or word"],
        ["M, N", "Very close. Ask yourself which spelling looks like a real name or word"],
        ["Q, U, W", "Q sounds like “queue”, U sounds like “you”, W is “double U”"],
      ],
    },
    {
      type: "text",
      title: "Spelling, addresses and emails",
      body: "- “**Double L**” means LL, so “B, E, double L” = BELL.\n- In email addresses, “**at**” = @, “**dot**” = . and “**underscore**” = _.\n- UK **postcodes** mix letters and numbers, such as LS6 2BT. Write every letter and number in the order you hear it.\n- Names that are spelled out usually begin with a capital letter, but the exam does not usually check capitals.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "If the speaker spells a word, you must spell it exactly right to get the mark. Write numbers as digits (14, not fourteen). It is quicker, and you can't make a spelling mistake.",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model conversation: joining a library",
      voice: "uk",
      cast: { Librarian: "female" },
      transcript:
        "Librarian: So, I just need a few details for your library card. What's your surname?\nMan: It's Okafor. That's O, K, A, F, O, R.\nLibrarian: Thank you. And your date of birth?\nMan: The fourteenth of August, nineteen ninety-six.\nLibrarian: Did you say the fourth?\nMan: No, the fourteenth. One, four.\nLibrarian: Got it. And a phone number?\nMan: Oh seven seven double oh, nine double oh, double six two.\nLibrarian: And your address?\nMan: Flat three, twenty-seven Mill Lane. The postcode is L, S, six, two, B, T.\nLibrarian: Lovely. The card normally costs two pounds fifty, but it's free for students.\nMan: Oh good. I'm a student at the college.",
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "A strong listener writes each detail as soon as they hear it, and changes it if the speaker corrects it.\n\n- **Surname:** spelled letter by letter → **Okafor**\n- **Date of birth:** the librarian checks “the fourth?” and the man corrects her → **14 August 1996**\n- **Phone:** “oh” = 0 and “double” means two of the same digit, so “double oh” = 00 and “double six” = 66 → **07700 900662**\n- **Address:** **Flat 3, 27 Mill Lane**, postcode **LS6 2BT**\n- **Price:** £2.50 is mentioned, but he is a student, so his card is **free**\n\nNotice the trap with the price: a careless listener writes £2.50 because it is the only price they hear.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice audio 1: which number?",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Number one. The train to Oxford leaves from platform fifteen.\n\nNumber two. Tickets for the concert cost thirty pounds each.\n\nNumber three. The museum is closed until the seventeenth of June.\n\nNumber four. Please arrive by quarter to nine.\n\nNumber five. This jacket is now reduced to nineteen ninety-nine.\n\nNumber six. Our new office is at forty-eight King Street.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Which number did you hear?",
        instructions: "Listen to six short sentences. Choose the number, date, time or price you hear.",
        questions: [
          {
            prompt: "1. The train leaves from platform …",
            options: ["50", "16", "15", "5"],
            answer: 2,
            explanation: "“fifTEEN”: the stress is at the end, so it is a teen number.",
          },
          {
            prompt: "2. Concert tickets cost …",
            options: ["£13", "£30", "£33", "£3.30"],
            answer: 1,
            explanation: "“THIRty pounds”: the stress is at the start.",
          },
          {
            prompt: "3. The museum is closed until …",
            options: ["7 June", "17 July", "27 June", "17 June"],
            answer: 3,
            explanation: "“the seventeenth of June”.",
          },
          {
            prompt: "4. Please arrive by …",
            options: ["9.15", "8.45", "9.45", "8.15"],
            answer: 1,
            explanation: "“Quarter to nine” means fifteen minutes before nine, so 8.45.",
          },
          {
            prompt: "5. The jacket now costs …",
            options: ["£90.99", "£9.99", "£19.99", "£90"],
            answer: 2,
            explanation: "“Nineteen ninety-nine” is a price without the word pounds: £19.99.",
          },
          {
            prompt: "6. The office is at … King Street.",
            options: ["48", "14", "84", "40"],
            answer: 0,
            explanation: "“forty-eight” = 48. *Forty* is a -ty number (FORty), so it is not 14.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2: booking a course",
      voice: "uk",
      cast: { Receptionist: "male" },
      transcript:
        "Receptionist: Good morning, Greenfield Language School.\nWoman: Hi, I'd like to sign up for the evening Spanish course.\nReceptionist: Sure. Can I have your full name?\nWoman: Yes, it's Claire Whitmore.\nReceptionist: How do you spell your surname?\nWoman: W, H, I, T, M, O, R, E.\nReceptionist: Thanks. And your email address?\nWoman: It's claire dot W eighty-four at mailbox dot com. Claire is C, L, A, I, R, E.\nReceptionist: Lovely. The course starts on the ninth of October.\nWoman: Is that a Tuesday?\nReceptionist: No, it's a Thursday. Classes run from six fifteen until eight.\nWoman: And how much is it?\nReceptionist: It's one hundred and sixty pounds for ten weeks, or one hundred and forty-five if you pay before the end of this month.\nWoman: I'll pay now, then.\nReceptionist: Great. And a contact number?\nWoman: Oh one six one, four nine six, oh double three seven.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Form completion",
        instructions: "Listen and complete the form. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Greenfield Language School: enrolment form\n\nCourse: evening {{0}}\nSurname: {{1}}\nEmail: {{2}}\nStart date: {{3}}\nDay of the week: {{4}}\nTime: 6.15 to {{5}}\nPrice if paid this month: £{{6}}\nPhone: {{7}}",
        answers: [
          ["Spanish"],
          ["Whitmore"],
          ["claire.w84@mailbox.com"],
          ["9 October", "9th October", "October 9", "October 9th", "9 Oct", "9th Oct", "Oct 9", "Oct 9th", "ninth October"],
          ["Thursday", "Thursdays"],
          ["8", "8.00", "8:00", "eight", "8 pm", "8pm", "8.00 pm", "8:00 pm", "20:00", "20.00"],
          ["145", "145.00"],
          ["0161 496 0337", "01614960337", "0161 4960337", "0161-496-0337"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 3: spelling",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Number one. My surname is spelled H, A, Y, W, A, R, D.\n\nNumber two. The hotel is on Beaumont Road. That's B, E, A, U, M, O, N, T.\n\nNumber three. The postcode is E, H, three, nine, G, J.\n\nNumber four. My email is j dot quinn at fastmail dot com. Quinn is Q, U, I, double N.\n\nNumber five. The village is called Pevensey. That's P, E, V, E, N, S, E, Y.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Which spelling is correct?",
        instructions: "Listen to the speaker spelling five words. Choose the spelling you hear.",
        questions: [
          {
            prompt: "1. The surname is …",
            options: ["Haywood", "Hayward", "Heyward", "Haywart"],
            answer: 1,
            explanation: "H, A, Y, W, A, R, D. The second letter is A (like “day”), not E.",
          },
          {
            prompt: "2. The hotel is on …",
            options: ["Bowmont Road", "Beaumount Road", "Beaumont Road", "Beumont Road"],
            answer: 2,
            explanation: "B, E, A, U, M, O, N, T. There is no second U.",
          },
          {
            prompt: "3. The postcode is …",
            options: ["EH3 9GJ", "EH3 9JG", "AH3 9GJ", "EH9 3GJ"],
            answer: 0,
            explanation: "E, H, three, nine, G, J. Remember: G sounds like “gee”, J sounds like “jay”.",
          },
          {
            prompt: "4. The email address is …",
            options: ["j.quin@fastmail.com", "j.quinn@fastmail.com", "jquinn@fastmail.com", "j.quinn@fastmail.co"],
            answer: 1,
            explanation: "“j dot quinn” has a dot after the j, and “double N” means NN.",
          },
          {
            prompt: "5. The village is called …",
            options: ["Bevensey", "Pevensay", "Pevenzey", "Pevensey"],
            answer: 3,
            explanation: "P, E, V, E, N, S, E, Y.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 4: a phone message",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Hi, this is Martin from Parkside Dental Clinic. I'm calling about your appointment with Doctor Ellis. That's E, double L, I, S. Your appointment was on Monday the fifth, but she's away that week, so we've moved it to Thursday the fifteenth. Sorry, I mean Wednesday the fourteenth. The time is the same, ten forty.\n\nThe appointment costs forty pounds, because it includes an X-ray. If the new day isn't convenient, please call us on oh two oh, seven nine four six, oh eight one two. And just a reminder, we've moved to a new building. We're now at ninety Hill Street, opposite the cinema. See you then.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Note completion",
        instructions: "Listen to the phone message and complete the notes. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Dentist appointment\n\nWith: Dr {{0}}\nNew date: Wednesday the {{1}}\nTime: {{2}}\nCost: £{{3}}\nClinic phone: {{4}}\nNew address: {{5}} Hill Street",
        answers: [
          ["Ellis"],
          ["14th", "14", "fourteenth"],
          ["10.40", "10:40", "10.40 am", "10:40 am", "10.40am", "10:40am", "10.40 a.m.", "10:40 a.m."],
          ["40", "40.00", "forty"],
          ["020 7946 0812", "02079460812", "020 79460812", "0207 946 0812", "020-7946-0812"],
          ["90", "ninety"],
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Check the word limit. “ONE WORD AND/OR A NUMBER” means “9 October” is fine for a date. Don't repeat words that are already on the form, such as the £ sign or the word “Street”.",
    },
    {
      exam: "ielts",
      body: "Part 1 often includes a correction (“Sorry, I mean the fourteenth”). Don't stop listening as soon as you have written an answer. Be ready to cross it out and write the new one.",
    },
    {
      exam: "toeic",
      body: "TOEIC Listening is multiple choice, so you don't write answers, but Part 3 and Part 4 questions often ask about times, dates and prices. Listen for changes such as “it's been moved to …” or “it's now …”.",
    },
    {
      exam: "toefl",
      body: "In Announcement and Conversation tasks, details like dates, deadlines and room numbers are often important. Keep track of them while you listen, especially when something changes.",
    },
  ],
  vocabulary: [
    { word: "surname", meaning: "your family name", example: "Could you spell your surname for me, please?", topic: "everyday" },
    { word: "date of birth", meaning: "the day, month and year you were born", example: "Please write your date of birth at the top of the form.", topic: "everyday" },
    { word: "postcode", meaning: "a group of letters and numbers at the end of an address in the UK (zip code in the US)", example: "What's the postcode of the hotel?", topic: "everyday" },
    { word: "sign up for", meaning: "to agree to join a course, club or activity", example: "I've signed up for an evening Spanish course.", topic: "education" },
    { word: "enrolment", meaning: "the process of officially joining a school, college or course", example: "Enrolment for the summer courses closes on Friday.", topic: "education" },
    { word: "appointment", meaning: "a fixed time to see someone, for example a doctor or dentist", example: "I've got a dentist's appointment at ten forty.", topic: "health" },
    { word: "reduced", meaning: "made cheaper than before", example: "The jacket is reduced to £19.99.", topic: "business" },
    { word: "convenient", meaning: "suitable for you and easy to fit into your plans", example: "Is Wednesday morning convenient for you?", topic: "everyday" },
    { word: "reminder", meaning: "a message that helps you remember something", example: "The clinic sent me a reminder by text.", topic: "everyday" },
    { word: "contact number", meaning: "a phone number where someone can call you", example: "Can I have a contact number in case we need to change the time?", topic: "everyday" },
  ],
  keyPoints: [
    "Teen numbers are stressed at the end (fifTEEN); -ty numbers are stressed at the start (FIFty).",
    "Phone numbers are read one digit at a time. “Oh” means 0 and “double” means two of the same digit.",
    "When a word is spelled, write every letter. Be careful with A/E/I, G/J and double letters.",
    "Speakers often correct themselves. Always write the final information.",
  ],
};

export default lesson;
