// @ts-ignore
enum EnrollmentStatus {
  Open = "open",
  Closed = "closed",
  InProgress = "in Progress",
}

export type Course = {
  id: number;
  title: string;
  details: string;
  price: number;
  autherName: string;
  duration: number;
  publishedAt: string;
  enrollmentStatus: string;
  schedule: string;
  location: string;
  prerequisites: string;
};
