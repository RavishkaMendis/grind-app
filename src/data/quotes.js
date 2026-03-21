// GRIND Quote Bank — curated for entrepreneurs, founders, builders
// Categories: grind, mindset, money, discipline, failure, vision

export const quotes = [
  // GRIND
  { text: "Nobody is coming to save you. Build the door yourself.", author: "Unknown", category: "grind", vibe: "raw" },
  { text: "The market doesn't care about your effort. It rewards results.", author: "Unknown", category: "grind", vibe: "raw" },
  { text: "You don't rise to the level of your goals. You fall to the level of your systems.", author: "James Clear", category: "grind", vibe: "tactical" },
  { text: "Every day you don't build, someone else is.", author: "Unknown", category: "grind", vibe: "raw" },
  { text: "Stop waiting for permission. The gatekeepers are waiting for someone like you to go first.", author: "Unknown", category: "grind", vibe: "raw" },
  { text: "The person who says it cannot be done should not interrupt the person doing it.", author: "Chinese Proverb", category: "grind", vibe: "classic" },

  // MINDSET
  { text: "You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential.", author: "David Goggins", category: "mindset", vibe: "hard" },
  { text: "Don't stop when you're tired. Stop when you're done.", author: "David Goggins", category: "mindset", vibe: "hard" },
  { text: "The most important conversation is the one you have with yourself.", author: "David Goggins", category: "mindset", vibe: "hard" },
  { text: "Be the hero of your own story.", author: "Joe Rogan", category: "mindset", vibe: "raw" },
  { text: "When something is important enough, you do it even if the odds are not in your favour.", author: "Elon Musk", category: "mindset", vibe: "vision" },
  { text: "I never dreamed about success. I worked for it.", author: "Estée Lauder", category: "mindset", vibe: "classic" },
  { text: "Comfort is the enemy dressed in a familiar face. Move anyway.", author: "Unknown", category: "mindset", vibe: "raw" },

  // MONEY & SUCCESS
  { text: "Ten thousand dollars a month isn't a dream. It's a Tuesday for the person who started two years ago.", author: "Unknown", category: "money", vibe: "raw" },
  { text: "The first step is to establish that something is possible. Then probability will occur.", author: "Elon Musk", category: "money", vibe: "vision" },
  { text: "Price is what you pay. Value is what you get.", author: "Warren Buffett", category: "money", vibe: "classic" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin", category: "money", vibe: "classic" },
  { text: "Rich people have small TVs and big libraries. Poor people have big TVs and small libraries.", author: "Zig Ziglar", category: "money", vibe: "raw" },

  // DISCIPLINE
  { text: "Motivation is crap. When you're driven, whatever is in front of you will get destroyed.", author: "David Goggins", category: "discipline", vibe: "hard" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.", author: "Aristotle", category: "discipline", vibe: "classic" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln", category: "discipline", vibe: "classic" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke", category: "discipline", vibe: "raw" },
  { text: "Your future self is watching what you do right now. Make them proud.", author: "Unknown", category: "discipline", vibe: "raw" },

  // FAILURE
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison", category: "failure", vibe: "classic" },
  { text: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford", category: "failure", vibe: "classic" },
  { text: "Your excuses are valid. They're also irrelevant.", author: "Unknown", category: "failure", vibe: "raw" },
  { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg", category: "failure", vibe: "vision" },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb", category: "failure", vibe: "classic" },

  // VISION
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", category: "vision", vibe: "classic" },
  { text: "If your dreams don't scare you, they're not big enough.", author: "Ellen Johnson Sirleaf", category: "vision", vibe: "raw" },
  { text: "Live your life like you're the hero in your movie.", author: "Joe Rogan", category: "vision", vibe: "raw" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", category: "vision", vibe: "classic" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "vision", vibe: "classic" },
];

export const categories = ["all", "grind", "mindset", "money", "discipline", "failure", "vision"];

export function getDailyQuote() {
  const today = new Date();
  const dayIndex = Math.floor(today.getTime() / 86400000);
  return quotes[dayIndex % quotes.length];
}

export function getRandomQuote(category = "all") {
  const pool = category === "all" ? quotes : quotes.filter(q => q.category === category);
  return pool[Math.floor(Math.random() * pool.length)];
}
