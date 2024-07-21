import prisma from "@/lib/db";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = yup.number().required().validateSync(params.id);
  const token = await getToken({ req });
  const userId = Number(token?.sub);

  try {
    const data = await prisma.hospitalJob.findMany({
      where: {
        id,
      },
      include: {
        hospital: true,
        availableShifts: {
          include: {
            ...(!!userId && {
              userShiftCandidacy: {
                where: {
                  userId,
                },
                select: {
                  id: true,
                  shift: true,
                },
              },
            }),
          },
        },
      },
    });

    return Response.json({ data });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Erro ao buscar lista de vagas dos hospitais!",
        err,
      },
      {
        status: 500,
      }
    );
  }
}
