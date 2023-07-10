export type Offer = {
  id: string;
  title: string;
  creatorId: string;
  createdAt: Date;
  updatedAt: Date;
  jobType: string | null;
  technologiesIds: string[];
};

export type Technologie = {
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
