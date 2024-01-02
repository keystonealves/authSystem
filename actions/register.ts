"use server"

import * as z from "zod"

import { RegisterSchema } from "@/schemas"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: 'Ocorreu um erro ao criar o cadastro. Verifique os dados e tente novamente.'
        }
    }

    return {
        success: 'Conta criada com sucesso!'
    }
}