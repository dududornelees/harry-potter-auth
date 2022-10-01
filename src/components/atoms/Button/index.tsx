import { Props } from "./types";

export const Button = ({ children, className, ...props }: Props) => {
    return (
        <button
            className={`bg-primary hover:bg-primaryDark transition-all rounded-sm text-white ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
