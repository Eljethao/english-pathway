/**
 * Decorative photos from Pexels (free to use under the Pexels license: https://www.pexels.com/license/).
 * Images are loaded from the Pexels CDN; see src/lib/image-loader.ts.
 */
export interface Photo {
  id: number;
  alt: string;
  /** Pexels page, for credits. */
  page: string;
  /** CSS object-position for cropping. */
  position?: string;
  portrait?: boolean;
}

const p = (id: number, slug: string, alt: string, extra: Partial<Photo> = {}): Photo => ({
  id,
  alt,
  page: `https://www.pexels.com/photo/${slug}-${id}/`,
  ...extra,
});

export const PHOTOS = {
  hero: p(9159640, "female-student-smiling-while-using-a-laptop", "A smiling student studying on her laptop", { portrait: true, position: "50% 30%" }),
  listening: p(7120933, "woman-with-white-headphones-working-on-her-laptop", "A woman wearing headphones studying on a laptop", { portrait: true, position: "50% 25%" }),
  reading: p(9572630, "college-students-reading-a-book-inside-the-library", "Two students reading books in a library"),
  writing: p(5710680, "a-person-s-hand-writing-on-a-notebook", "A hand writing notes in a notebook next to a laptop"),
  speaking: p(6953933, "smiling-woman-recording-voice-podcast-in-microphone", "A smiling woman speaking into a microphone", { portrait: true, position: "50% 30%" }),
  ielts: p(6683580, "a-high-angle-shot-of-students-taking-exam-inside-the-classroom", "Students taking a written exam in a classroom", { position: "50% 45%" }),
  toefl: p(7973039, "university-students-walking-together", "University students walking together on campus"),
  toeic: p(3862127, "people-in-a-business-meeting", "Colleagues working together in an office meeting", { position: "50% 40%" }),
  practice: p(5563414, "close-up-photo-of-analog-clocks", "A close-up of an analog stopwatch", { portrait: true }),
  vocabulary: p(13752245, "close-up-shot-of-open-book", "An open dictionary"),
  grammar: p(7654166, "close-up-shot-of-a-person-writing-on-a-notebook", "A person writing in a spiral notebook"),
  placement: p(8472882, "a-happy-young-woman-taking-an-online-class-while-sitting-on-the-floor", "A young woman taking an online class at home", { portrait: true, position: "50% 60%" }),
  lessons: p(16420457, "a-group-of-students-sitting-in-a-library-and-studying", "A group of students studying together in a library"),
  community: p(6684534, "a-group-of-students-working-together", "A group of smiling students working together"),
  conversation: p(7964140, "two-people-sitting-and-talking-at-a-cafe", "Two people having a conversation at a cafe", { portrait: true }),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;

export function photoSrc(photo: Photo) {
  return `https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.jpeg`;
}
