import { Logo, LoginForm } from "components";

export const Login = () => {
    return (
        <main className="h-screen w-screen bg-[url('/images/login/background.jpg')] bg-no-repeat bg-cover flex justify-center items-center flex-col">
            <Logo className="w-80" />
            <LoginForm />
        </main>
    );
};
