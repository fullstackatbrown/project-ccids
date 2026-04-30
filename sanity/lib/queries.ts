import { client } from "./client";

// ---------- Members ----------
export const membersQuery = `*[_type == "member"] | order(order asc) {
  _id,
  name,
  role,
  title,
  photo,
  href,
  email,
  order
}`;

export async function getMembers() {
  return client.fetch(membersQuery);
}

// ---------- Seminars ----------
export const seminarsQuery = `*[_type == "seminar"] | order(date desc) {
  _id,
  title,
  speaker,
  speakerAffiliation,
  date,
  dateLabel,
  description,
  recordingUrl,
  slidesUrl
}`;

export async function getSeminars() {
  return client.fetch(seminarsQuery);
}

// ---------- Page Copy ----------
export const pageCopyQuery = `*[_type == "pageCopy" && pageId == $pageId] | order(order asc) {
  _id,
  pageId,
  section,
  heading,
  body,
  order
}`;

export async function getPageCopy(pageId: string) {
  return client.fetch(pageCopyQuery, { pageId });
}
