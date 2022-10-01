import { Props } from "./types";

export const Input = ({ label, id, className, ...props }: Props) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className="text-white text-sm font-bold" htmlFor={id}>
                    {label}
                </label>
            )}

            <input
                id={id}
                {...props}
                className={`px-4 rounded-md text-md border-2 bg-transparent text-white hover:border-primary focus:border-white focus:outline-none focus:ring ring-opacity-80 ring-primary ${className}`}
            />
        </div>
    );
};
