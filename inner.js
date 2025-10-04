

const responses = {
  sad: [
    "I’m sorry you feel this way 💙. Remember, tough times don’t last, but you do!",
    "It’s okay to feel sad. You are stronger than you think 🌟.",
    "Sometimes crying helps. Don’t hold it in 💧.",
    "You matter. Please don’t forget that 💜.",
    "Even the darkest night will end and the sun will rise ☀."
  ],
  stress: [
    "Take a deep breath 🌿. Want to try a relaxation exercise?",
    "Stress is temporary, your strength is permanent 💪.",
    "Close your eyes and count to 10 slowly ✨.",
    "Would you like me to guide you through a breathing exercise? 🌬",
    "Remember to pause, hydrate, and give yourself a break 🕊."
  ],
  anxious: [
    "Anxiety can feel heavy, but you’re not alone 💙.",
    "Let’s ground ourselves: Name 3 things you see, 2 you hear, and 1 you can touch 🌍.",
    "You’re safe right now. Focus on the present moment 🕊.",
    "Want me to play calming music for you? 🎵",
    "Your heartbeat might be fast, but it will calm down soon 💓.",
    "Overthinking happens, let’s slow down together 🌸."
  ],
  depression: [
    "I hear you 💙. Feeling hopeless is tough, but you’re not alone.",
    "Your life matters, and you bring value even when you don’t feel it 💡.",
    "It’s okay to rest, you don’t have to be productive all the time 🛌.",
    "You are worthy of love, care, and happiness 💜.",
    "Even small steps count, today you’re already brave 🌈."
  ],
  mental: [
    "Having trouble focusing? Try breaking tasks into small steps 📝.",
    "Struggling with sleep? A calming bedtime routine can help 🌙.",
    "Lack of motivation? Start with something very small, just 2 minutes ⚡.",
    "Overthinking? Let’s try grounding: touch something near you, notice its texture 🖐.",
    "Mental health is like physical health — it needs care every day ❤."
  ],
  general: [
    "I hear you 💡. Stay strong, you’re not alone!",
    "Thank you for sharing with me 💙.",
    "Your feelings are valid 🌸.",
    "I’m here for you anytime 🤝.",
    "Keep going, your best days are ahead 🌈."
  ]
};

function sendMessage() {
  let input = document.getElementById("user-input").value.toLowerCase();
  let chatBox = document.getElementById("chat-box");

  if (input.trim() === "") return;

  
  let userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = "You: " + input;
  chatBox.appendChild(userMsg);

  
  let botMsg = document.createElement("div");
  botMsg.className = "bot-msg";

  let category = "general";

  if (input.includes("sad") || input.includes("upset") || input.includes("lonely")) {
    category = "sad";
  } else if (input.includes("stress") || input.includes("tired") || input.includes("pressure")) {
    category = "stress";
  } else if (input.includes("anxious") || input.includes("anxiety") || input.includes("nervous") || input.includes("panic") || input.includes("heartbeat")) {
    category = "anxious";
  } else if (input.includes("hopeless") || input.includes("worthless") || input.includes("empty") || input.includes("depressed")) {
    category = "depression";
  } else if (input.includes("mental") || input.includes("focus") || input.includes("motivation") || input.includes("sleep") || input.includes("overthinking")) {
    category = "mental";
  }


  let options = responses[category];
  let reply = options[Math.floor(Math.random() * options.length)];

  botMsg.textContent = "Bot: " + reply;
  chatBox.appendChild(botMsg);

  chatBox.scrollTop = chatBox.scrollHeight;
  document.getElementById("user-input").value = "";
}


function showExercise(type) {
  if (type === "breathing") {
    alert("Breathing Exercise:\nInhale... Hold... Exhale... Repeat 5 times 🌬");
  } else if (type === "music") {
    let music = document.getElementById("calmMusic");
    music.play(); // 🎵 plays music file
    alert("Playing soothing music 🎵");
  } else if (type === "journaling") {
    alert("Journaling Prompt: Write 3 things you’re grateful for today ✍");
  }
}

function connectCounselor() {
  alert("Connecting you to a counselor... (Here you can integrate live chat/Zoom API)");

}
