import removeMarkdown from "remove-markdown";
import readingTime from "reading-time";

export const getPreviewText = (text = "", length = 243) => {
  const actualText = removeMarkdown(text);
  return actualText.length > length
    ? `${actualText.substring(0, length).trim()}...`
    : actualText;
};

export const getReadingTimeInMinutes = (text = "") =>
  Math.ceil(readingTime(removeMarkdown(text)).minutes);
