import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const SignInPage = () => {
    const { data: sessionData } = useSession();
    

    useEffect(() => {
        if (!sessionData) void signIn("google");
        if (sessionData) window.close();
    }, [sessionData]);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                left: 0,
                top: 0,
                background: "white",
            }}
        ></div>
    );
};

export default SignInPage;