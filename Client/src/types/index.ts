export type TContainerProps = {
  children: React.ReactNode;
}

export type TModalProps = {
  ariaDescribedBy: string;
  open: boolean;
  close: () => void;
  title: string;
  modalContent: React.ReactElement;
}