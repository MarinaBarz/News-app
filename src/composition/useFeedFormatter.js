import timeFromNow from "@/utils/timeFromNow";
import { stripTags } from "@/utils/stripTags.js";

export default function(item) {
  const { pubDate, description = false } = item;

  const date = timeFromNow(pubDate);
  const content = description ? stripTags(description) : false;

  return {
    content,
    date,
  };
}
