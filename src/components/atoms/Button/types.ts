export type Props = {
    className?: string;
    type?: "button" | "reset" | "submit" | undefined;
    onClick?: React.MouseEventHandler;
    children: React.ReactNode;
};
