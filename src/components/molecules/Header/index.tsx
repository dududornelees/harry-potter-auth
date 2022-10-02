import { Logo, Button } from "components";
import { useDispatch } from "react-redux";
import { handleLogout } from "store/slices/authSlice";

export const Header = () => {
    const dispatch = useDispatch();

    return (
        <header className="bg-black/[.25]">
            <div className="container mx-auto flex justify-between items-center md: px-4">
                <div className="hidden lg:block w-24" />

                <Logo className="w-32 lg:w-36" />

                <Button
                    className="w-20 lg:w-24 h-8 bg-secondary hover:bg-secondaryDark"
                    onClick={() => dispatch(handleLogout())}
                >
                    Sair
                </Button>
            </div>
        </header>
    );
};
