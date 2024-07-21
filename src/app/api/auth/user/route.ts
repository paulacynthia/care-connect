import prisma from "@/lib/db";
import { hash } from "bcrypt";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

interface User {
  name: string;
  email: string;
  password: string;
}

const createUserSchema = yup.object<User>({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email({ message: "Endereço de e-mail inválido." })
    .min(1, { message: "O endereço de e-mail é obrigatório." })
    .max(255, {
      message: "O endereço de e-mail deve ter no máximo 255 caracteres.",
    }),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

const updateUserSchema = yup.object({
  email: yup
    .string()
    .email({ message: "Endereço de e-mail inválido." })
    .min(1, { message: "O endereço de e-mail é obrigatório." })
    .max(255, {
      message: "O endereço de e-mail deve ter no máximo 255 caracteres.",
    }),
});

export async function GET() {
  try {
    const data = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return Response.json({ message: "Hello World, Care Connect!", data });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Erro ao buscar lista de usuários!",
        err,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  const body: User = await request.json();

  try {
    const token = getToken({
      req: request,
    });

    await createUserSchema.validate(body);
    const { name, email, password } = body;

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return Response.json({ message: "Usuário criado com sucesso!", user });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return NextResponse.json(
        {
          message: "Erro de validação!",
          errors: err.errors,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Erro ao criar usuário!",
        err,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();

  try {
    await updateUserSchema.validate(body);
    const { name, email } = body;

    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        name,
        email,
      },
    });

    return Response.json({ message: "Usuário atualizado com sucesso!", user });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return NextResponse.json(
        {
          message: "Erro de validação!",
          errors: err.errors,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Erro ao atualizar usuário!",
        err,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });

    return Response.json({ message: "Usuário deletado com sucesso!", user });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Erro ao deletar usuário!",
        err,
      },
      {
        status: 500,
      }
    );
  }
}
