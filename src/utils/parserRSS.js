export default function(fragment, selector, mimeType = "text/xml") {
  const data = new DOMParser().parseFromString(fragment, mimeType);
  return Array.from(data.querySelectorAll(selector));
}
