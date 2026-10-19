// Category emojis.
export const categoryIcons = {
  birthday: "🎂",
  anniversary: "💚",
  family: "🏡",
  work: "💼",
  holiday: "✈️",
  event: "⭐️",
  fun: "🎉",
  other: "📌",
};

// Category color names.
export const categoryColors = {
  birthday: "birthday",
  anniversary: "anniversary",
  family: "family",
  work: "work",
  holiday: "holiday",
  event: "event",
  fun: "fun",
  other: "other",
};

// Format the event date.
export function formatEventDate(dateString) {
  if (!dateString) {
    return {
      month: "",
      dayNumber: "",
      weekday: "",
    };
  }

  // Parse YYYY-MM-DD as a local date to avoid timezone shifts.
  const parts = dateString.split("-");

  const date =
    parts.length === 3
      ? new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]))
      : new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return {
      month: "",
      dayNumber: "",
      weekday: "",
    };
  }

  return {
    month: date.toLocaleDateString("en-US", { month: "short" }),
    dayNumber: date.toLocaleDateString("en-US", { day: "2-digit" }),
    weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
  };
}

// Shorten event notes to three words, with at most five characters per word.
export function formatEventNotes(notes) {
  if (!notes || !notes.trim()) {
    return "No additional details";
  }

  const words = notes.trim().split(/\s+/);
  const displayedWords = words.slice(0, 3);
  const formattedNotes = displayedWords
    .map((word) => word.slice(0, 5))
    .join(" ");
  const isTruncated =
    words.length > displayedWords.length ||
    displayedWords.some((word) => word.length > 5);

  return isTruncated ? `${formattedNotes}...` : formattedNotes;
}
