// utils/protectedRoute.js
import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Service from "../utils/Service";

const protectedRoute = (WrappedComponent) => {
    const Wrapper = (props) => {
        const router = useRouter();
        const pathname = usePathname();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const token = localStorage.getItem("token");
            if (!token) {
                setLoading(false);
                router.push("/");
            } else {
                Service.getCurrentUser()
                    .then((response) => {
                        // Token is valid
                        setLoading(false);
                        // Get the allowed pages
                        const allowedPages = ["/profile", "/case-management", "/user-management", "/add-criminal", "/criminal-management", "/police-management", "/complaint", "/crime-report", "/first-information-report", "/settings", "/news"];
                        if (allowedPages.includes(pathname)) {
                        } else {
                            router.push("/dashboard");
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                    });
            }
        }, []);

        if (loading) {
            return <div><div
                className="inline-block h-12 w-12 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div></div>;
        }


        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

export default protectedRoute;
