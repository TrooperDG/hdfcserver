export function generateMockTransactions(count = 100) {
  const states = ["Pending", "Success", "Failed"];
  const events = [
    "OTP",
    "Login",
    "KYC",
    "Payment",
    "Verification",
    "ProfileUpdate",
  ];
  const reasons = [
    "Awaiting approval",
    "Network error",
    "Invalid credentials",
    "Timeout occurred",
    "User cancelled",
    "Could not open link",
    "Service unavailable",
  ];
  const sources = [
    "PaymentService",
    "AuthService",
    "OtpService",
    "GatewayService",
    "UserService",
  ];
  const devices = ["Web", "Android", "iOS"];

  const transactions = [];

  for (let i = 0; i < count; i++) {
    const state = states[Math.floor(Math.random() * states.length)];

    transactions.push({
      transactionId: `TX${1000 + i}`,
      state,
      timestamp: new Date(
        Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 7),
      ).toISOString(),
      event: events[Math.floor(Math.random() * events.length)],
      reason: reasons[Math.floor(Math.random() * reasons.length)],
      source: sources[Math.floor(Math.random() * sources.length)],

      retryCount: Math.floor(Math.random() * 4),
      device: devices[Math.floor(Math.random() * devices.length)],
      // ipAddress: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(
      //   Math.random() * 255,
      // )}`,
    });
  }

  return {
    success: true,
    responseData: {
      pageCount: "10",
      stages: transactions,
    },
  };
}
