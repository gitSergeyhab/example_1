export interface ExampleSubData {
  name: string;
  description: string;
  value: number;
}
export interface ExampleData {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  isFree: boolean;
  price: number;
  subData: ExampleSubData[];
  pointId: number;
  pointName: string;
}

export interface ExampleDataAdd {
  name: string;
  description: string;
  isActive: boolean;
  isFree: boolean;
  price: number;
  subData: ExampleSubData[];
  pointId: number;
}

export interface ExampleDataEdit {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  isFree: boolean;
  price: number;
  subData: ExampleSubData[];
  pointId: number;
}
export interface Point {
  id: number;
  name: string;
  pointSubData: ExampleSubData[];
}
