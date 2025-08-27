// src/types.ts

export interface DescriptionChild {
  text: string;
}

export interface DescriptionBlock {
  type: string;
  children: DescriptionChild[];
}

export interface PhotoFormat {
  url: string;
  width: number;
  height: number;
}

export interface Photo {
  url: string;
  formats?: {
    thumbnail?: PhotoFormat;
    small?: PhotoFormat;
    medium?: PhotoFormat;
    large?: PhotoFormat;
  };
}

export interface Category {
  name: string;
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  description: DescriptionBlock[];
  photos?: Photo[];
  category?: Category;
}

export interface CategoryData {
  id: number;
  documentId: string;
  name: string;
  description?: DescriptionBlock[];
  products?: Product[];
}
