const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const hospitals = await prisma.hospital.createMany({
    data: [
      {
        id: 1,
        name: "Hospital das Clínicas",
        location: "São Paulo, SP",
        score: 4.5,
      },
      {
        id: 2,
        name: "Hospital Santa Catarina",
        location: "Rio de Janeiro, RJ",
        score: 4.0,
      },
      {
        id: 3,
        name: "Hospital São Paulo",
        location: "São Paulo, SP",
        score: 4.5,
      },
      {
        id: 4,
        name: "Hospital Municipal de Recife",
        location: "Recife, PE",
        score: 4.3,
      },
      {
        id: 5,
        name: "Hospital das Forças Armadas",
        location: "Brasília, DF",
        score: 4.7,
      },
      {
        id: 6,
        name: "Hospital de Clínicas de Porto Alegre",
        location: "Porto Alegre, RS",
        score: 4.1,
      },
      {
        id: 7,
        name: "Hospital Geral de Curitiba",
        location: "Curitiba, PR",
        score: 4.4,
      },
      {
        id: 8,
        name: "Hospital Universitário de Brasília",
        location: "Brasília, DF",
        score: 4.6,
      },
    ],
    skipDuplicates: true,
  });
  console.log("Hospitais criados", hospitals);

  const hospitalJobs = await prisma.hospitalJob.createMany({
    data: [
      {
        id: 1,
        expertise: "Enfermeiro",
        title: "Enfermeiro - UTI",
        description: "Vaga para Enfermeiro na UTI",
        payment: 50,
        requirements: "Experiência em UTI",
        benefits: "Vale Transporte, Vale Refeição",
        hospitalId: 1,
      },
      {
        id: 2,
        expertise: "Técnico de Enfermagem",
        title: "Técnico de Enfermagem - Pediatria",
        description: "Vaga para Técnico de Enfermagem na Pediatria",
        payment: 35,
        requirements: "Experiência em Pediatria",
        benefits: "Vale Transporte, Seguro de Vida",
        hospitalId: 2,
      },
      {
        id: 3,
        expertise: "Auxiliar de Enfermagem",
        title: "Auxiliar de Enfermagem - Clínica Médica",
        description: "Vaga para Auxiliar de Enfermagem na Clínica Médica",
        payment: 25,
        requirements: "Curso de Auxiliar de Enfermagem",
        benefits: "Vale Transporte",
        hospitalId: 3,
      },
      {
        id: 4,
        expertise: "Enfermeiro",
        title: "Enfermeiro - Emergência",
        description: "Vaga para Enfermeiro na Emergência",
        payment: 45,
        requirements: "Experiência em Emergência",
        benefits: "Vale Transporte, Plano de Saúde",
        hospitalId: 4,
      },
      {
        id: 5,
        expertise: "Técnico de Enfermagem",
        title: "Técnico de Enfermagem - Centro Cirúrgico",
        description: "Vaga para Técnico de Enfermagem no Centro Cirúrgico",
        payment: 40,
        requirements: "Experiência em Centro Cirúrgico",
        benefits: "Vale Transporte, Refeição no Local",
        hospitalId: 5,
      },
      {
        id: 6,
        expertise: "Auxiliar de Enfermagem",
        title: "Auxiliar de Enfermagem - Maternidade",
        description: "Vaga para Auxiliar de Enfermagem na Maternidade",
        payment: 30,
        requirements: "Experiência em Maternidade",
        benefits: "Vale Transporte, Vale Refeição",
        hospitalId: 6,
      },
      {
        id: 7,
        expertise: "Enfermeiro",
        title: "Enfermeiro - Pediatria",
        description: "Vaga para Enfermeiro na Pediatria",
        payment: 48,
        requirements: "Experiência em Pediatria",
        benefits: "Vale Transporte, Plano de Saúde",
        hospitalId: 7,
      },
      {
        id: 8,
        expertise: "Enfermeiro",
        title: "Enfermeiro - Oncologia",
        description: "Vaga para Enfermeiro na Oncologia",
        payment: 55,
        requirements: "Experiência em Oncologia",
        benefits: "Vale Transporte, Vale Refeição",
        hospitalId: 8,
      },
    ],
    skipDuplicates: true,
  });
  console.log("Vagas criadas", hospitalJobs);

  const shifts = await prisma.shift.createMany({
    data: [
      {
        id: 1,
        shift: "Manhã",
        initialHour: 7,
        finishHour: 13,
        hospitalJobId: 1,
      },
      {
        id: 2,
        shift: "Tarde",
        initialHour: 13,
        finishHour: 19,
        hospitalJobId: 1,
      },
      {
        id: 3,
        shift: "Noite",
        initialHour: 19,
        finishHour: 7,
        hospitalJobId: 1,
      },

      {
        id: 4,
        shift: "Manhã",
        initialHour: 7,
        finishHour: 13,
        hospitalJobId: 2,
      },
      {
        id: 5,
        shift: "Noite",
        initialHour: 19,
        finishHour: 7,
        hospitalJobId: 2,
      },

      {
        id: 6,
        shift: "Tarde",
        initialHour: 13,
        finishHour: 19,
        hospitalJobId: 3,
      },

      {
        id: 7,
        shift: "Manhã",
        initialHour: 6,
        finishHour: 12,
        hospitalJobId: 4,
      },
      {
        id: 8,
        shift: "Tarde",
        initialHour: 12,
        finishHour: 18,
        hospitalJobId: 4,
      },
      {
        id: 9,
        shift: "Noite",
        initialHour: 18,
        finishHour: 6,
        hospitalJobId: 4,
      },

      {
        id: 10,
        shift: "Manhã",
        initialHour: 7,
        finishHour: 13,
        hospitalJobId: 5,
      },
      {
        id: 11,
        shift: "Noite",
        initialHour: 19,
        finishHour: 7,
        hospitalJobId: 5,
      },

      {
        id: 12,
        shift: "Manhã",
        initialHour: 8,
        finishHour: 14,
        hospitalJobId: 6,
      },
      {
        id: 13,
        shift: "Tarde",
        initialHour: 14,
        finishHour: 20,
        hospitalJobId: 6,
      },

      {
        id: 14,
        shift: "Manhã",
        initialHour: 7,
        finishHour: 13,
        hospitalJobId: 7,
      },
      {
        id: 15,
        shift: "Tarde",
        initialHour: 13,
        finishHour: 19,
        hospitalJobId: 7,
      },

      {
        id: 16,
        shift: "Manhã",
        initialHour: 6,
        finishHour: 12,
        hospitalJobId: 8,
      },
      {
        id: 17,
        shift: "Tarde",
        initialHour: 12,
        finishHour: 18,
        hospitalJobId: 8,
      },
      {
        id: 18,
        shift: "Noite",
        initialHour: 18,
        finishHour: 6,
        hospitalJobId: 8,
      },
    ],
    skipDuplicates: true,
  });
  console.log("Turnos criados", shifts);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
