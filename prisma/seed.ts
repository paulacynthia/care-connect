const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {

  const hospitals = await prisma.hospital.createMany({
    data: [
      { name: "Hospital das Clínicas", location: "São Paulo, SP", score: 4.5 },
      {
        name: "Hospital Santa Catarina",
        location: "Rio de Janeiro, RJ",
        score: 4.0,
      },
      { name: "Hospital São Paulo", location: "São Paulo, SP", score: 4.5 },
      {
        name: "Hospital Municipal de Recife",
        location: "Recife, PE",
        score: 4.3,
      },
      {
        name: "Hospital das Forças Armadas",
        location: "Brasília, DF",
        score: 4.7,
      },
      {
        name: "Hospital de Clínicas de Porto Alegre",
        location: "Porto Alegre, RS",
        score: 4.1,
      },
      {
        name: "Hospital Geral de Curitiba",
        location: "Curitiba, PR",
        score: 4.4,
      },
      {
        name: "Hospital Universitário de Brasília",
        location: "Brasília, DF",
        score: 4.6,
      },
    ],
  });
  console.log("Hospitais criados", hospitals);

  const hospitalJobs = await prisma.hospitalJob.createMany({
    data: [
      // Vagas para Hospital das Clínicas
      {
        expertise: "Enfermeiro",
        title: "Enfermeiro - UTI",
        description: "Vaga para Enfermeiro na UTI",
        payment: 50,
        requirements: "Experiência em UTI",
        benefits: "Vale Transporte, Vale Refeição",
        hospitalId: 1,
      },
      // Vagas para Hospital Santa Catarina
      {
        expertise: "Técnico de Enfermagem",
        title: "Técnico de Enfermagem - Pediatria",
        description: "Vaga para Técnico de Enfermagem na Pediatria",
        payment: 35,
        requirements: "Experiência em Pediatria",
        benefits: "Vale Transporte, Seguro de Vida",
        hospitalId: 2,
      },
      // Vagas para Hospital São Paulo
      {
        expertise: "Auxiliar de Enfermagem",
        title: "Auxiliar de Enfermagem - Clínica Médica",
        description: "Vaga para Auxiliar de Enfermagem na Clínica Médica",
        payment: 25,
        requirements: "Curso de Auxiliar de Enfermagem",
        benefits: "Vale Transporte",
        hospitalId: 3,
      },
      // Vagas para Hospital Municipal de Recife
      {
        expertise: "Enfermeiro",
        title: "Enfermeiro - Emergência",
        description: "Vaga para Enfermeiro na Emergência",
        payment: 45,
        requirements: "Experiência em Emergência",
        benefits: "Vale Transporte, Plano de Saúde",
        hospitalId: 4,
      },
      // Vagas para Hospital das Forças Armadas
      {
        expertise: "Técnico de Enfermagem",
        title: "Técnico de Enfermagem - Centro Cirúrgico",
        description: "Vaga para Técnico de Enfermagem no Centro Cirúrgico",
        payment: 40,
        requirements: "Experiência em Centro Cirúrgico",
        benefits: "Vale Transporte, Refeição no Local",
        hospitalId: 5,
      },
      // Vagas para Hospital de Clínicas de Porto Alegre
      {
        expertise: "Auxiliar de Enfermagem",
        title: "Auxiliar de Enfermagem - Maternidade",
        description: "Vaga para Auxiliar de Enfermagem na Maternidade",
        payment: 30,
        requirements: "Experiência em Maternidade",
        benefits: "Vale Transporte, Vale Refeição",
        hospitalId: 6,
      },
      // Vagas para Hospital Geral de Curitiba
      {
        expertise: "Enfermeiro",
        title: "Enfermeiro - Pediatria",
        description: "Vaga para Enfermeiro na Pediatria",
        payment: 48,
        requirements: "Experiência em Pediatria",
        benefits: "Vale Transporte, Plano de Saúde",
        hospitalId: 7,
      },
      // Vagas para Hospital Universitário de Brasília
      {
        expertise: "Enfermeiro",
        title: "Enfermeiro - Oncologia",
        description: "Vaga para Enfermeiro na Oncologia",
        payment: 55,
        requirements: "Experiência em Oncologia",
        benefits: "Vale Transporte, Vale Refeição",
        hospitalId: 8,
      },
    ],
  });
  console.log("Vagas criadas", hospitalJobs);

  const shifts = await prisma.shift.createMany({
    data: [
      // Turnos para a vaga no Hospital das Clínicas
      { shift: "Manhã", initialHour: 7, finishHour: 13, hospitalJobId: 1 },
      { shift: "Tarde", initialHour: 13, finishHour: 19, hospitalJobId: 1 },
      { shift: "Noite", initialHour: 19, finishHour: 7, hospitalJobId: 1 },

      // Turnos para a vaga no Hospital Santa Catarina
      { shift: "Manhã", initialHour: 7, finishHour: 13, hospitalJobId: 2 },
      { shift: "Noite", initialHour: 19, finishHour: 7, hospitalJobId: 2 },

      // Turnos para a vaga no Hospital São Paulo
      {
        shift: "Tarde",
        initialHour: 13,
        finishHour: 19,
        hospitalJobId: 3,
      },

      // Turnos para a vaga no Hospital Municipal de Recife
      {
        shift: "Manhã",
        initialHour: 6,
        finishHour: 12,
        hospitalJobId: 4,
      },
      {
        shift: "Tarde",
        initialHour: 12,
        finishHour: 18,
        hospitalJobId: 4,
      },
      {
        shift: "Noite",
        initialHour: 18,
        finishHour: 6,
        hospitalJobId: 4,
      },

      // Turnos para a vaga no Hospital das Forças Armadas
      {
        shift: "Manhã",
        initialHour: 7,
        finishHour: 13,
        hospitalJobId: 5,
      },
      {
        shift: "Noite",
        initialHour: 19,
        finishHour: 7,
        hospitalJobId: 5,
      },

      // Turnos para a vaga no Hospital de Clínicas de Porto Alegre
      {
        shift: "Manhã",
        initialHour: 8,
        finishHour: 14,
        hospitalJobId: 6,
      },
      {
        shift: "Tarde",
        initialHour: 14,
        finishHour: 20,
        hospitalJobId: 6,
      },

      // Turnos para a vaga no Hospital Geral de Curitiba
      {
        shift: "Manhã",
        initialHour: 7,
        finishHour: 13,
        hospitalJobId: 7,
      },
      {
        shift: "Tarde",
        initialHour: 13,
        finishHour: 19,
        hospitalJobId: 7,
      },

      // Turnos para a vaga no Hospital Universitário de Brasília
      {
        shift: "Manhã",
        initialHour: 6,
        finishHour: 12,
        hospitalJobId: 8,
      },
      {
        shift: "Tarde",
        initialHour: 12,
        finishHour: 18,
        hospitalJobId: 8,
      },
      {
        shift: "Noite",
        initialHour: 18,
        finishHour: 6,
        hospitalJobId: 8,
      },
    ],
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
