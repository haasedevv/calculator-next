import { ReactNode } from '@/@types';
import Calculator from '../index';

export type CalculatorButtonProps = {
  id: string;
  event: () => void;
} & ReactNode;

export type CalculatorKeyboardButton = {
  event: (key?: string) => void;
  name?: string;
  keyboardKey: string;
  content?: string | JSX.Element;
};

export type CalculatorKeyboardProps = { buttonsList: Array<CalculatorKeyboardButton> };

export type DisplayViewProps = {
  expression: string;
  result: string;
};

export type CalculatorDisplayProps = {
  displayView: DisplayViewProps;
  historic: string[];
};
