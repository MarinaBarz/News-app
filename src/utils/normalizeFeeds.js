import { v4 as uuidv4 } from "uuid";

export function normalizeFromRSS(items, opt) {
  return items.map(({ children }) => normalizeFeeds([...children], opt));
}

export function normalizeFeeds(array, options) {
  return array.reduce((result, item) => {
    const { tagName, textContent, attributes } = item;
    const content = item.hasAttributes()
      ? normalizeAttr([...attributes])
      : textContent;
    return {
      ...result,
      ...options,
      id: uuidv4(),
      [tagName]: content,
    };
  }, {});
}

export function normalizeAttr(attributes) {
  return attributes.reduce((acc, { name, value }) => {
    return {
      ...acc,
      [name]: value,
    };
  }, {});
}
