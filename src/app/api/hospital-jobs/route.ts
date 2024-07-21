import prisma from "@/lib/db";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface params {
  q: string;
  minimumPayment: number;
  minimumScore: number;
  initialHour: number;
  finishHour: number;
  orderBy: string;
  orderType: "" | "asc" | "desc";
}

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req });
    const userId = Number(token?.sub);

    const { searchParams } = req.nextUrl;
    const query = searchParams.get("q") || "";

    const wherePayment = searchParams.get("minimumPayment") && {
      payment: {
        gte: Number(searchParams.get("minimumPayment")),
      },
    };

    const whereScore = searchParams.get("minimumScore") && {
      hospital: {
        score: {
          gte: Number(searchParams.get("minimumScore")),
        },
      },
    };

    const whereInitialHour = searchParams.get("initialHour") && {
      initialHour: {
        gte: Number(searchParams.get("initialHour")),
      },
    };

    const whereFinishHour = searchParams.get("finishHour") && {
      finishHour: {
        lte: Number(searchParams.get("finishHour")),
      },
    };

    const orderByParam = searchParams.get("orderBy") || "";
    const orderBy = searchParams.get("orderBy") && {
      [orderByParam]: searchParams.get("orderType") || "desc",
    };

    const dbWhere = {
      ...wherePayment,
      ...whereScore,
      ...whereInitialHour,
      ...whereFinishHour,
    };

    const data = await prisma.hospitalJob.findMany({
      where: {
        ...(query && {
          OR: [
            {
              title: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              hospital: {
                name: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              hospital: {
                location: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
          ],
        }),
        ...dbWhere,
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
      orderBy: {
        ...orderBy,
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
