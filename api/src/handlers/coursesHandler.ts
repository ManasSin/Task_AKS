import { Request, Response } from "express";

enum EnrollmentStatus {
  Open = "open",
  Closed = "closed",
  InProgress = "in Progress",
}

const fakeCourseData = [
  {
    id: 1,
    title: "Data Science with Python",
    details:
      "Learn how to use Python for data analysis and machine learning. This course covers data preprocessing, visualization, statistical analysis, and modeling. Students will learn how to use Python libraries like NumPy, Pandas, and Matplotlib to work with data. They will also learn how to use scikit-learn for machine learning tasks. The course covers topics such as linear regression, decision trees, and clustering.",
    price: 100,
    autherName: "John Smith",
    duration: 10,
    publishedAt: new Date().toLocaleString().slice(0, -3),
    enrollmentStatus: EnrollmentStatus.Open,
    schedule: "Mon, Wed, Fri",
    location: "Online",
    prerequisites: "Basic Python knowledge",
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    details:
      "Learn how to build websites from frontend to backend using HTML, CSS, JavaScript, and a backend language like Node.js. This course covers the basics of web development, including HTML and CSS for creating the user interface, JavaScript for interactivity, and Node.js for server-side programming. Students will build a dynamic web application using Express.js, connect to a database, and implement user authentication. The course also covers topics such as RESTful APIs and deployment.",
    price: 200,
    autherName: "Jane Doe",
    duration: 20,
    publishedAt: new Date().toLocaleString().slice(0, -3),
    enrollmentStatus: EnrollmentStatus.Open,
    schedule: "Tue, Thu",
    location: "Online",
    prerequisites: "Basic programming knowledge",
  },
  {
    id: 3,
    title: "Cybersecurity Fundamentals",
    details:
      "Learn the basics of protecting computer systems from hackers and unauthorized access. This course covers the fundamentals of cybersecurity, including threat modeling, risk assessment, and vulnerability management. Students will learn how to use cryptography, secure coding practices, and network security protocols. The course covers topics such as encryption, firewalls, and penetration testing.",
    price: 300,
    autherName: "Bob Johnson",
    duration: 30,
    publishedAt: new Date().toLocaleString().slice(0, -3),
    enrollmentStatus: EnrollmentStatus.Open,
    schedule: "Mon, Wed",
    location: "Online",
    prerequisites: "None",
  },
  {
    id: 4,
    title: "Artificial Intelligence for Business",
    details:
      "Learn how to leverage Artificial Intelligence (AI) to improve business processes and make data-driven decisions. This course covers the basics of AI, including machine learning, natural language processing, and computer vision. Students will learn how to use Python libraries like TensorFlow and Keras to build AI models. They will also learn how to implement AI solutions in real-world scenarios, such as customer service chatbots and fraud detection. The course covers topics such as supervised and unsupervised learning, deep learning, and reinforcement learning.",
    price: 400,
    autherName: "Alice Smith",
    duration: 40,
    publishedAt: new Date().toLocaleString().slice(0, -3),
    enrollmentStatus: EnrollmentStatus.Open,
    schedule: "Tue, Thu",
    location: "Online",
    prerequisites: "Basic programming knowledge",
  },
];

export function getCourses(req: Request, res: Response) {
  return res.status(200).send(fakeCourseData);
}

export function getCourseById(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);

    // console.log(id);

    const course = fakeCourseData.find((course) =>
      course.id === id ? { ...course } : undefined
    );
    if (course === undefined) {
      res.status(403).send({ message: "Course not found" });
    }
    return res.status(200).send(course);
  } catch (error) {
    res.status(403).send(error);
  }
}
