import prisma from "@/lib/db";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    const token = await getToken({ req });   
    const userId = Number(token?.sub);

    const data = await prisma.hospitalJob.findMany({
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

    console.log(data[0]);
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
