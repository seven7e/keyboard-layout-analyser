export interface KeyModel {
  code: string;
  shift: string;
  label: string;
  width: number;
  effort: number;
  colour: string;
}

export type KeyRowModel = Array<KeyModel>;

export type KeyboardModel = Array<KeyRowModel>;
