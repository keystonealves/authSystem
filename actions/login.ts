"use server"

import * as z from "zod"

import { LoginSchema } from "@/schemas"

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: 'Ocorreu um erro ao realizar o login. Verifique os dados e tente novamente.'
        }
    }

    return {
        success: 'Login realizado com sucesso!'
    }
}