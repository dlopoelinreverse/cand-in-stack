export type Offer = {
  id: string;
  title: string;
  creatorId: string;
  description: string;
  questions: Prisma.JsonValue[] | QuestionType[];
  jobType: string[];
  technologiesIds: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type QuestionType = {
  id: string;
  content: string;
};

export type AnswerType = {
  id: string;
  questionId: string;
  questionContent: string;
  answer: string;
};

export type ApplyType = {
  id: string;
  candidateId: string;
  offerId: string;
  answers: Prisma.Json[] | AnswerType[];
  status: Prisma.Json | ApplyTypeStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type ApplyTypeStatus = {
  candidate: "sent" | "ongoing" | "rejected";
  enterprise: "unread" | "ongoing" | "rejected";
};

export type Technology = {
  id: string;
  name: string;
  isValid: boolean;
  addedBy: string;
  suggestedBy: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
};

export type Category = {
  id: string;
  name: string;
  isValid: boolean;
  addedBy: string;
  suggestedBy: string;
  createdAt: Date;
  updatedAt: Date;
};

export type LiteUserData = {
  id: string;
  name: string;
  image: string | null;
  email: string | null;
};
