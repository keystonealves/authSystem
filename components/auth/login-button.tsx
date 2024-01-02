"use client"

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

export const LoginButton = ({
    children,
    mode = 'redirect',
    asChild
}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push('/auth/login');
        
        if (mode === 'modal') {
            console.log("Opening modal...");
        } else if (mode === 'redirect') {
            console.log("Redirecting...");
        }
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}