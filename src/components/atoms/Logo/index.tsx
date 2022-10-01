import { Props } from "./types";

export const Logo = ({ ...props }: Props) => {
    return <img src="/images/logo_yellow.png" alt="Logo - Harry Potter" {...props} />;
};
