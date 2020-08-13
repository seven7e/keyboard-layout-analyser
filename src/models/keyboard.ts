export interface KeyModel {
  label: string;
  width: number;
}

export type KeyRowModel = Array<KeyModel>;

export type KeyboardModel = Array<KeyRowModel>;
