"use server"

import { db } from "@/lib/db"

import * as z from "zod"
import bcrypt from "bcryptjs"

import { RegisterSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: 'Ocorreu um erro ao criar o cadastro. Verifique os dados e tente novamente.'
        }
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {
            error: 'O email informado ja está em uso, tente outro.'
        }
    };

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    // TODO: Send email verification token to user

    return {
        success: 'Conta criada com sucesso!'
    }
}