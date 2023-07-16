export type Offer = {
  id: string;
  title: string;
  creatorId: string;
  description: string;
  questions: string[];
  jobType: string[];
  technologiesIds: string[];
  createdAt: Date;
  updatedAt: Date;
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
