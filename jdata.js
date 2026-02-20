export function generateMockJourneys(count = 20) {
  const journeyNames = [
    "Credit Journey",
    "Loan Onboarding",
    "KYC Verification",
    "Payment Setup",
    "User Authentication",
  ];

  const journeyStatuses = ["InProgress", "Completed", "Failed"];

  const journeys = [];

  for (let i = 0; i < count; i++) {
    journeys.push({
      journeyId: `JRN${1000 + i}`,
      journeyName:
        journeyNames[Math.floor(Math.random() * journeyNames.length)],
      journeyStatus:
        journeyStatuses[Math.floor(Math.random() * journeyStatuses.length)],
      journeyCreateTimeStamp: new Date(
        Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30),
      ).toISOString(),
    });
  }

  return {
    success: true,
    responseData: {
      pageCount: "10",
      journeyList: journeys,
    },
  };
}
