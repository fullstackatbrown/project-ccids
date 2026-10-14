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
export const seminarsQuery = `*[_type == "seminar"] | order(order asc, date desc) {
  _id,
  title,
  speaker,
  speakerAffiliation,
  date,
  dateLabel,
  description,
  recordingUrl,
  slidesUrl,
  order
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

// ---------- Newsletters page ----------
export const highlightsQuery = `*[_type == "highlight"] | order(order asc) {
  _id,
  section,
  title,
  text,
  order
}`;

export const newslettersPageQuery = `*[_id == "newslettersPage"][0] {
  title
}`;

export async function getHighlights() {
  return client.fetch(highlightsQuery);
}

export async function getNewslettersPage() {
  return client.fetch(newslettersPageQuery);
}

// ---------- Publications page ----------
export const publicationsQuery = `*[_type == "publication"] | order(year desc, order asc) {
  _id,
  citation,
  year
}`;

export const publicationsPageQuery = `*[_id == "publicationsPage"][0] {
  title,
  intro
}`;

export async function getPublications() {
  return client.fetch(publicationsQuery);
}

export async function getPublicationsPage() {
  return client.fetch(publicationsPageQuery);
}
