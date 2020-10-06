export function stripTags(htmlstr) {
  const div = document.createElement("div");
  div.innerHTML = htmlstr;
  return div.textContent;
}
