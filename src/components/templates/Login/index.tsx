import { Logo, LoginForm } from "components";

export const Login = () => {
    return (
        <div className="h-screen w-screen bg-[url('/images/login/background.jpg')] flex justify-center items-center flex-col">
            <Logo className="w-80" />
            <LoginForm />
        </div>
    );
};
