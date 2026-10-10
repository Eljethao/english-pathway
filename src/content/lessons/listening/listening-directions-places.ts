import type { Lesson } from "@/lib/types";

const MAP_ALT =
  "Street plan of Hillford town centre. North is at the top. Two roads run from west to east: Station Road at the top and High Street in the middle. Two roads run from south to north: Mill Road on the left and Park Lane on the right. There are traffic lights where Mill Road crosses High Street, and a roundabout where Park Lane crosses High Street. The start point, marked “You are here (facing north)”, is at the bottom of Mill Road. Walking north up Mill Road from the start, building B is the first building on the left and building A is the first building on the right. Further up, just before the traffic lights, the Bank is on the left and the Cinema is on the right. North of High Street, building C is on the north-west corner of Mill Road and High Street, opposite the Bank, and building D is on the north-east corner, opposite the Cinema. Building E is next to D, further east along the north side of High Street. Building F is on the south side of High Street, next to the Cinema and opposite E. East of the roundabout, building G is on the north side of High Street, and the Park fills the area on the south side. The Church is on Park Lane, north of G, near Station Road. At the north end of Mill Road, building H is on the east corner where Mill Road meets Station Road. The Train station is on the other side of Station Road, opposite H.";

const lesson: Lesson = {
  slug: "listening-directions-places",
  title: "Following directions in town",
  summary:
    "Follow spoken directions around a town: understand direction phrases and prepositions of place, use landmarks to keep your place, and find buildings on a simple street plan.",
  skill: "listening",
  level: "B1",
  order: 6,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 2" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
    { exam: "toeic", task: "Listening Part 4 – Talks" },
  ],
  objectives: [
    "Understand common direction phrases such as “take the second turning on the left”",
    "Understand prepositions of place such as opposite, between and on the corner",
    "Follow a route on a street plan by listening for actions and landmarks",
  ],
  warmUp: [
    "How do you usually find your way in a new town: a map app, signs or asking people?",
    "Think of a building near your home. How would you tell a visitor to get there?",
  ],
  learn: [
    {
      type: "text",
      title: "Directions are a list of actions",
      body: "Spoken directions are a list of actions in order. Each action usually has two parts:\n\n1. **What to do**: go, turn, cross, go past, keep going.\n2. **Where**: at the traffic lights, into High Street, until you reach the bridge.\n\nThe speaker also uses **landmarks**: places that are easy to see, like a bank, a church or a bridge. Landmarks tell you when to do the next action. Follow the route with your finger on the map as you listen.",
    },
    {
      type: "table",
      title: "Direction phrases",
      headers: ["You hear …", "It means …"],
      rows: [
        ["Go straight on. / Go straight ahead.", "Keep walking in the same direction."],
        ["Turn left into Park Lane.", "Turn left and walk along Park Lane."],
        ["Take the second turning on the right.", "Don't turn at the first road on the right. Turn at the next one."],
        ["Go past the church.", "Walk beside the church and keep going."],
        ["Cross the road. / Cross over.", "Go to the other side of the road."],
        ["Keep going until you reach / get to the bridge.", "Don't stop or turn before the bridge."],
        ["At the roundabout, go straight over.", "Don't turn. Continue across to the other side."],
        ["at the end of the road", "where the road stops"],
      ],
    },
    {
      type: "table",
      title: "Where is it? Prepositions of place",
      headers: ["You hear …", "Picture it"],
      rows: [
        ["The bank is **next to** the café.", "side by side"],
        ["The bank is **opposite** the café. (US: **across from**)", "on the other side of the road, facing it"],
        ["The bank is **between** the café and the hotel.", "café, bank, hotel in a line"],
        ["It's **on the corner of** Mill Road and High Street.", "where the two streets meet"],
        ["It's **in front of** / **behind** the museum.", "on the side facing the street / at the back"],
        ["It's **on your left** / **on your right**.", "from the direction you are walking"],
      ],
    },
    {
      type: "text",
      title: "Listen for the checking and the changes",
      body: "In conversations, the person asking for directions often repeats them to check: “So I turn left at the bank?” Listen to the reply. If it is “No, *right* at the bank”, change your route.\n\nSpeakers also give extra help at the end: “It's opposite the station. You can't miss it.” This last landmark is often the best way to check your answer.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: what does it mean?",
        instructions: "Choose the correct meaning.",
        questions: [
          {
            prompt: "“Take the second turning on the left.”",
            options: [
              "Turn left at the first road, then left again.",
              "Go past the first road on the left and turn into the next one.",
              "Turn left after two minutes.",
              "Turn left at the second set of traffic lights.",
            ],
            answer: 1,
            explanation: "“The second turning” is the second road you reach on that side, so you go past the first one.",
          },
          {
            prompt: "“The café is opposite the bank.”",
            options: [
              "The café is inside the bank.",
              "The café is next to the bank, on the same side of the road.",
              "The café is on the other side of the road, facing the bank.",
              "The café is behind the bank.",
            ],
            answer: 2,
            explanation: "Opposite means on the other side of the road, facing it. In US English you also hear “across from”.",
          },
          {
            prompt: "“At the roundabout, go straight over.”",
            options: [
              "Continue in the same direction.",
              "Turn round and go back.",
              "Turn right at the roundabout.",
              "Stop at the roundabout.",
            ],
            answer: 0,
            explanation: "“Straight over” means you don't turn: you cross the roundabout and continue in the same direction.",
          },
          {
            prompt: "“The shop is between the bakery and the bank.”",
            options: [
              "bakery, bank, shop",
              "shop, bakery, bank",
              "bank, shop, bakery",
              "bank, bakery, shop",
            ],
            answer: 2,
            explanation: "The shop is in the middle. “bank, shop, bakery” is the only order with the shop between the other two.",
          },
        ],
      },
    },
    {
      type: "tip",
      exam: "ielts",
      body: "IELTS Listening Part 2 is one speaker talking about an everyday topic, such as local facilities, and it often includes map or plan labelling. Before the audio starts, find the start point and the direction you are facing, and read the names of the places that are already on the map.",
    },
  ],
  model: [
    {
      type: "image",
      src: "/images/listening-directions-places-town.svg",
      alt: MAP_ALT,
      caption: "Hillford town centre. You start at the bottom of Mill Road, facing north. Use this plan for the model and Practice 1.",
    },
    {
      type: "audio",
      title: "Model conversation: finding the post office",
      voice: "uk",
      cast: { Visitor: "male", Assistant: "female" },
      transcript:
        "Visitor: Excuse me, is there a post office near here?\nAssistant: Yes. Go straight up Mill Road, past the cinema, to the traffic lights.\nVisitor: Do I turn at the traffic lights?\nAssistant: No, go straight on, across High Street, and keep going to the end of Mill Road. The post office is on the corner, on your right.\nVisitor: So it's on the right, at the end of the road.\nAssistant: That's it. It's opposite the train station. You can't miss it.",
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "A strong listener puts a finger on “You are here” and moves it with each action.\n\n1. “Go straight up Mill Road, past the cinema” → walk north. The cinema is on the right.\n2. “Do I turn at the traffic lights?” “No, go straight on, across High Street” → don't turn.\n3. “keep going to the end of Mill Road … on the corner, on your right” → the building at the top of Mill Road on the right is **H**.\n4. Check with the last landmark: “opposite the train station”. H is opposite the station, so the answer is **H**.\n\nNotice the trap: D is also “on the corner, on your right”, but it is on the corner of High Street, not at the end of Mill Road. The visitor's question about turning helps you, because the answer is no.",
    },
  ],
  practice: [
    {
      type: "image",
      src: "/images/listening-directions-places-town.svg",
      alt: MAP_ALT,
      caption: "Hillford town centre. You start at the bottom of Mill Road, facing north.",
    },
    {
      type: "audio",
      title: "Practice audio 1: an information point",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Welcome to Hillford. You're at the information point at the bottom of Mill Road, so let me tell you how to find a few useful places.\n\nFirst, the pharmacy. Just walk up Mill Road. It's the first building on your right, before you get to the cinema.\n\nIf you need the library, walk up to the traffic lights and turn left into High Street. The library is on the corner, on your right, opposite the bank.\n\nFor the bookshop, turn right at the traffic lights instead. Go past the first building on your left. The bookshop is the second one.\n\nThe supermarket is on High Street too. Turn right at the traffic lights, walk past the cinema, and it's the next building on your right.\n\nFinally, the Grand Hotel. Turn right at the traffic lights and keep going until you reach the roundabout. Go straight over it. The hotel is on the corner on your left, opposite the park.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Label the street plan",
        instructions: "Look at the Hillford street plan. Listen and match each place with the correct letter, A–H, on the plan. There are three extra letters.",
        left: ["Pharmacy", "Library", "Bookshop", "Supermarket", "Grand Hotel"],
        right: ["Building A", "Building B", "Building C", "Building D", "Building E", "Building F", "Building G", "Building H"],
        answer: [0, 2, 4, 5, 6],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2: directions on the phone",
      voice: "uk",
      cast: { Sam: "male" },
      transcript:
        "Maya: Hi Sam. Are you at the bus station?\nSam: Yes, I've just arrived. How do I get to your office?\nMaya: It's easy. Go out of the main exit and turn left. Walk along the river until you reach a bridge. Don't cross the bridge. Turn right there, into Queen Street.\nSam: Right into Queen Street. OK.\nMaya: Go past a big car park, and take the second turning on the left. That's Hope Street. Our building is about halfway along, between a bakery and a gym.\nSam: Which floor are you on?\nMaya: The third. Use the side entrance, because the front door is locked on Saturdays.\nSam: Great. How long will it take to walk?\nMaya: About ten minutes.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Note completion: how to get to the office",
        instructions: "Listen to the phone call and complete Sam's notes. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        text: "Directions to Maya's office\n\nLeave the bus station by the main exit and turn {{0}}.\nWalk along the {{1}} until you reach a bridge.\nDon't cross. Turn right into {{2}} Street.\nGo past a big {{3}}.\nTake the {{4}} turning on the left (Hope Street).\nThe building is between a bakery and a {{5}}.\nFloor: {{6}}\nOn Saturdays, use the {{7}} entrance.\nWalking time: about {{8}} minutes",
        answers: [
          ["left"],
          ["river"],
          ["Queen"],
          ["car park", "carpark"],
          ["second", "2nd"],
          ["gym"],
          ["third", "3rd", "3", "third floor", "3rd floor"],
          ["side"],
          ["10", "ten"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 3: welcome to the museum",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Good morning, and welcome to the Hartley Science Museum. Before you start, here's some information about the building. The cloakroom is on your right as you come in, next to the gift shop. You can leave coats and large bags there for free. The main exhibition is on the ground floor, straight ahead. If you'd like to see the space gallery, take the elevator to the second floor. It's at the end of the hallway. Please note that the stairs near the café are closed today for cleaning, so use the elevator or the stairs by the main entrance. The café is in the basement, opposite the restrooms. And if you get lost, just look for a member of staff in a green jacket. Enjoy your visit!",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "TOEIC-style talk",
        instructions: "Listen to the talk. Choose the best answer to each question.",
        questions: [
          {
            prompt: "Who are the listeners?",
            options: ["Museum staff", "Museum visitors", "Café workers", "Science students on a course"],
            answer: 1,
            explanation: "The speaker says “welcome to the Hartley Science Museum” and “Enjoy your visit!”, so the listeners are visitors.",
          },
          {
            prompt: "Where is the cloakroom?",
            options: [
              "Next to the gift shop",
              "Opposite the café",
              "On the second floor",
              "In the basement",
            ],
            answer: 0,
            explanation: "“The cloakroom is on your right as you come in, next to the gift shop.”",
          },
          {
            prompt: "Where is the space gallery?",
            options: [
              "Straight ahead on the ground floor",
              "Next to the main entrance",
              "At the end of a hallway on the second floor",
              "Opposite the restrooms",
            ],
            answer: 2,
            explanation: "“Take the elevator to the second floor. It's at the end of the hallway.” The ground floor has the main exhibition.",
          },
          {
            prompt: "Why are some stairs closed today?",
            options: ["They are being cleaned.", "They are being repaired.", "There is a private event.", "They are only for staff."],
            answer: 0,
            explanation: "“The stairs near the café are closed today for cleaning.”",
          },
          {
            prompt: "What should listeners do if they get lost?",
            options: [
              "Go back to the main entrance",
              "Call the information desk",
              "Look at a map in the café",
              "Find a staff member in a green jacket",
            ],
            answer: 3,
            explanation: "“If you get lost, just look for a member of staff in a green jacket.”",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "dictation",
        title: "Dictation: directions",
        instructions: "Listen to each sentence and type exactly what you hear.",
        voice: "uk",
        sentences: [
          "Take the second turning on the left.",
          "Go straight on until you reach the traffic lights.",
          "The bank is on the corner, opposite the cinema.",
          "Cross the road and go past the church.",
          "It's between the bakery and the post office.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In map and plan labelling, the answers come in the same order as the recording, and the speaker usually moves around the map in a logical way. If you lose your place, listen for the next landmark that is already printed on the map, such as “the bank” or “the roundabout”, and start again from there.",
    },
    {
      exam: "toeic",
      body: "In Part 3 and Part 4, questions often ask where something is or where the listeners should go. The correct option usually uses different words from the audio, for example “next to the gift shop” or “at the end of a hallway”. Some Part 3 questions also come with a graphic, so if you see a simple plan, look at it before the audio starts.",
    },
  ],
  vocabulary: [
    { word: "turning", meaning: "a road that goes off another road (UK English)", example: "Take the first turning on the right.", topic: "travel" },
    { word: "traffic lights", meaning: "red, yellow and green lights that control traffic at a junction", example: "Turn left at the traffic lights.", topic: "travel" },
    { word: "roundabout", meaning: "a round place where several roads meet and cars drive around in a circle", example: "Go straight over the roundabout.", topic: "travel" },
    { word: "opposite", meaning: "on the other side of the road or room, facing something", example: "The library is opposite the bank.", topic: "everyday" },
    { word: "landmark", meaning: "a building or place that is easy to see and helps you know where you are", example: "The church is a useful landmark.", topic: "travel" },
    { word: "on the corner", meaning: "at the place where two streets meet", example: "There's a café on the corner of Mill Road.", topic: "everyday" },
    { word: "halfway along", meaning: "in the middle of a street, between the two ends", example: "Our building is halfway along Hope Street.", topic: "everyday" },
    { word: "cloakroom", meaning: "a room where you can leave coats and bags in a public building", example: "You can leave your bag in the cloakroom.", topic: "everyday" },
    { word: "basement", meaning: "the floor of a building that is below the ground", example: "The café is in the basement.", topic: "everyday" },
    { word: "lift", meaning: "a machine that carries people between floors (elevator in US English)", example: "Take the lift to the second floor.", topic: "everyday" },
  ],
  keyPoints: [
    "Directions are a list of actions in order: what to do and where to do it.",
    "Landmarks such as a bank, a church or the traffic lights tell you when to do the next action.",
    "Learn the key prepositions: next to, opposite, between, on the corner of, in front of, behind.",
    "Left and right depend on the direction you are walking, so follow the route with your finger on the map.",
    "Use the last landmark (“It's opposite the station”) to check your answer.",
  ],
};

export default lesson;
