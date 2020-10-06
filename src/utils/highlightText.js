export default function(text, regions) {
  if (!regions) return text;

  let content = "";
  let regionIndex = 0;

  regions.forEach(([start, end]) => {
    content +=
      text.substring(regionIndex, start) +
      '<span class="highlight">' +
      text.substring(start, end) +
      "</span>";
    regionIndex = end;
  });
  content += text.substring(regionIndex);
  return content;
}
