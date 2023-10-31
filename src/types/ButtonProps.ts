export interface ButtonProps {
  color?: "primary" | "secondary" | "danger" | "warning";
  onClick: () => void;
  children: string;
}
