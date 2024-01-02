"use client"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Separator } from "../ui/separator"

export const Social = () => {
    return (
        <div className="w-full space-y-5">
            <div className="relative">

                <div className="absolute inset-0 flex items-center">
                    <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-3 text-muted-foreground">Ou continue com</span>
                </div>


            </div>

            <div className="flex gap-x-2">                    
                <Button
                    size={"lg"}
                    className="w-full"
                    variant={"outline"}
                    onClick={() => {
                        console.log("Google Account")
                    }}
                    >
                    <FcGoogle className="w-5 h-5" />
                </Button>

                <Button
                    size={"lg"}
                    className="w-full"
                    variant={"outline"}
                    onClick={() => {
                        console.log("Github Account")
                    }}
                    >
                    <FaGithub className="w-5 h-5" />
                </Button>
            </div>

        </div>
    )
}