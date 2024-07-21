import prisma from "@/lib/db";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

const applyCandidaciesSchema = yup.object({
  shiftIds: yup.array().of(yup.number()).required(),
});
interface ApplyCandidacies
  extends yup.InferType<typeof applyCandidaciesSchema> {
  shiftIds: number[];
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const body: ApplyCandidacies = await request.json();
    await applyCandidaciesSchema.validate(body);
    const token = await getToken({
      req: request,
    });
    const userId = Number(token?.sub);
    console.log(userId);
    console.log(params.id);
    console.log(body.shiftIds);

    const currentCandidacies = await prisma.userShiftCandidacy.findMany({
      where: {
        userId,
        shift: {
          is: {
            hospitalJobId: params.id,
          },
        },
      },
      select: {
        id: true,
        shiftId: true,
      },
    });

    console.log("currentCandidacies", currentCandidacies);

    // 1 2 5
    // 1 3 4 5
    // 2
    const createData = body.shiftIds
      .filter((s) => !currentCandidacies.some((c) => c.shiftId === s))
      .map((shiftId) => ({
        userId,
        shiftId,
      }));
    const removeData = currentCandidacies
      .filter((c) => !body.shiftIds.includes(c.shiftId))
      .map((c) => c.id);

    if (createData) {
      await prisma.userShiftCandidacy.createMany({
        data: createData,
      });
    }
    if (removeData) {
      await prisma.userShiftCandidacy.deleteMany({
        where: {
          id: {
            in: removeData,
          },
        },
      });
    }

    return Response.json({
      message: "Candidatura efeituada com sucesso!",
      data: {},
    });
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
        message: "Erro na cadidatura!",
        err,
      },
      {
        status: 500,
      }
    );
  }
}