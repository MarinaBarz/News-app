import parseRSS from "@/utils/parserRSS";
import { normalizeFromRSS } from "@/utils/normalizeFeeds";
import { CORS_PROXY } from "@/constants/index";

export async function Feeds({ url, ...opt }) {
  const res = await fetch(CORS_PROXY + url);
  const str = await res.text();
  const items = parseRSS(str, "item");
  return normalizeFromRSS(items, { ...opt });
}
