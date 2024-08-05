import prisma from "./client";

async function main() {
  const incomeExpGroup = await prisma.expenseGroup.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Income",
    },
  });

  const everydayExpensesExpGroup = await prisma.expenseGroup.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Everyday Expenses",
    },
  });

  const monthlyBillsExpGroup = await prisma.expenseGroup.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "Monthly Bills",
    },
  });

  const givingExpGroup = await prisma.expenseGroup.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: "Giving",
    },
  });

  const transportExpGroup = await prisma.expenseGroup.upsert({
    where: { id: 5 },
    update: {},
    create: {
      name: "Transport",
    },
  });

  const rainyDayFundsExpGroup = await prisma.expenseGroup.upsert({
    where: { id: 6 },
    update: {},
    create: {
      name: "Rainy Day Funds",
    },
  });

  const holidayExpGroup = await prisma.expenseGroup.upsert({
    where: { id: 7 },
    update: {},
    create: {
      name: "Holiday",
    },
  });

  const savingExpGroup = await prisma.expenseGroup.upsert({
    where: { id: 8 },
    update: {},
    create: {
      name: "Saving",
    },
  });

  const miscExpensesExpGroup = await prisma.expenseGroup.upsert({
    where: { id: 9 },
    update: {},
    create: {
      name: "Misc Expenses",
    },
  });

  const internalTransfersExpGroup = await prisma.expenseGroup.upsert({
    where: { id: 10 },
    update: {},
    create: {
      name: "Internal Transfers",
    },
  });

  // Categories

  const salary = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Salary",
      isActive: true,
      expenseGroupId: incomeExpGroup.id,
    },
  });

  const interest = await prisma.category.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "Interest",
      isActive: true,
      expenseGroupId: incomeExpGroup.id,
    },
  });

  const rentalIncome = await prisma.category.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: "Rental Income",
      isActive: true,
      expenseGroupId: incomeExpGroup.id,
    },
  });

  const otherIncome = await prisma.category.upsert({
    where: { id: 5 },
    update: {},
    create: {
      name: "Other",
      isActive: true,
      expenseGroupId: incomeExpGroup.id,
    },
  });

  const mortgageOrRent = await prisma.category.upsert({
    where: { id: 6 },
    update: {},
    create: {
      name: "Mortgage/Rent",
      isActive: true,
      expenseGroupId: monthlyBillsExpGroup.id,
    },
  });

  const phone = await prisma.category.upsert({
    where: { id: 7 },
    update: {},
    create: {
      name: "Phone",
      isActive: true,
      expenseGroupId: monthlyBillsExpGroup.id,
    },
  });

  const utilityBills = await prisma.category.upsert({
    where: { id: 8 },
    update: {},
    create: {
      name: "Utility Bills",
      isActive: true,
      expenseGroupId: monthlyBillsExpGroup.id,
    },
  });

  const internet = await prisma.category.upsert({
    where: { id: 9 },
    update: {},
    create: {
      name: "Internet",
      isActive: true,
      expenseGroupId: monthlyBillsExpGroup.id,
    },
  });

  const carInsurance = await prisma.category.upsert({
    where: { id: 10 },
    update: {},
    create: {
      name: "Car Insurance",
      isActive: true,
      expenseGroupId: monthlyBillsExpGroup.id,
    },
  });

  const healthInsurance = await prisma.category.upsert({
    where: { id: 11 },
    update: {},
    create: {
      name: "Health Insurance",
      isActive: true,
      expenseGroupId: monthlyBillsExpGroup.id,
    },
  });

  const streamingServices = await prisma.category.upsert({
    where: { id: 12 },
    update: {},
    create: {
      name: "Streaming Services",
      isActive: true,
      expenseGroupId: monthlyBillsExpGroup.id,
    },
  });

  const nonStreamingSubs = await prisma.category.upsert({
    where: { id: 13 },
    update: {},
    create: {
      name: "Non-StreamingSubscriptions",
      isActive: true,
      expenseGroupId: monthlyBillsExpGroup.id,
    },
  });

  const lifeInsurance = await prisma.category.upsert({
    where: { id: 14 },
    update: {},
    create: {
      name: "Life Insurance",
      isActive: true,
      expenseGroupId: monthlyBillsExpGroup.id,
    },
  });

  const gym = await prisma.category.upsert({
    where: { id: 15 },
    update: {},
    create: {
      name: "Gym Membership",
      isActive: true,
      expenseGroupId: monthlyBillsExpGroup.id,
    },
  });

  const groceries = await prisma.category.upsert({
    where: { id: 16 },
    update: {},
    create: {
      name: "Groceries",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const dating = await prisma.category.upsert({
    where: { id: 16 },
    update: {},
    create: {
      name: "Dating",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const cachWidthrawal = await prisma.category.upsert({
    where: { id: 17 },
    update: {},
    create: {
      name: "Cash Withdrawal",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const publicTransport = await prisma.category.upsert({
    where: { id: 18 },
    update: {},
    create: {
      name: "Public Transport",
      isActive: true,
      expenseGroupId: transportExpGroup.id,
    },
  });

  const taxi = await prisma.category.upsert({
    where: { id: 19 },
    update: {},
    create: {
      name: "Taxi",
      isActive: true,
      expenseGroupId: transportExpGroup.id,
    },
  });

  const fuel = await prisma.category.upsert({
    where: { id: 20 },
    update: {},
    create: {
      name: "Fuel/Petrol",
      isActive: true,
      expenseGroupId: transportExpGroup.id,
    },
  });

  const restaurants = await prisma.category.upsert({
    where: { id: 21 },
    update: {},
    create: {
      name: "Restaurants",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const takeaway = await prisma.category.upsert({
    where: { id: 22 },
    update: {},
    create: {
      name: "Takeaway",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const workFood = await prisma.category.upsert({
    where: { id: 23 },
    update: {},
    create: {
      name: "Work Lunch/Snacks",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const personalCare = await prisma.category.upsert({
    where: { id: 24 },
    update: {},
    create: {
      name: "Personal Care e.g. Haircuts",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const medical = await prisma.category.upsert({
    where: { id: 25 },
    update: {},
    create: {
      name: "Medical",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const clothing = await prisma.category.upsert({
    where: { id: 26 },
    update: {},
    create: {
      name: "Clothing",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const householdGoods = await prisma.category.upsert({
    where: { id: 27 },
    update: {},
    create: {
      name: "Household Goods",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const hobbies = await prisma.category.upsert({
    where: { id: 28 },
    update: {},
    create: {
      name: "Hobbies",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const fun = await prisma.category.upsert({
    where: { id: 29 },
    update: {},
    create: {
      name: "Fun Money",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const social = await prisma.category.upsert({
    where: { id: 30 },
    update: {},
    create: {
      name: "Socialising/Events",
      isActive: true,
      expenseGroupId: everydayExpensesExpGroup.id,
    },
  });

  const emergency = await prisma.category.upsert({
    where: { id: 31 },
    update: {},
    create: {
      name: "Emergency Fund",
      isActive: true,
      expenseGroupId: rainyDayFundsExpGroup.id,
    },
  });

  const carRepairs = await prisma.category.upsert({
    where: { id: 32 },
    update: {},
    create: {
      name: "Car Repairs",
      isActive: true,
      expenseGroupId: rainyDayFundsExpGroup.id,
    },
  });

  const home = await prisma.category.upsert({
    where: { id: 33 },
    update: {},
    create: {
      name: "Home Maintenance",
      isActive: true,
      expenseGroupId: rainyDayFundsExpGroup.id,
    },
  });

  const birthday = await prisma.category.upsert({
    where: { id: 34 },
    update: {},
    create: {
      name: "Birthdays/Gifts",
      isActive: true,
      expenseGroupId: rainyDayFundsExpGroup.id,
    },
  });

  const christmasn = await prisma.category.upsert({
    where: { id: 35 },
    update: {},
    create: {
      name: "Christmas",
      isActive: true,
      expenseGroupId: rainyDayFundsExpGroup.id,
    },
  });

  const carReplacement = await prisma.category.upsert({
    where: { id: 36 },
    update: {},
    create: {
      name: "Car Replacement",
      isActive: true,
      expenseGroupId: rainyDayFundsExpGroup.id,
    },
  });

  const hotels = await prisma.category.upsert({
    where: { id: 37 },
    update: {},
    create: {
      name: "Hotels/Accomodation",
      isActive: true,
      expenseGroupId: holidayExpGroup.id,
    },
  });

  const activities = await prisma.category.upsert({
    where: { id: 38 },
    update: {},
    create: {
      name: "Activities",
      isActive: true,
      expenseGroupId: holidayExpGroup.id,
    },
  });

  const flights = await prisma.category.upsert({
    where: { id: 39 },
    update: {},
    create: {
      name: "Flights/Travel",
      isActive: true,
      expenseGroupId: holidayExpGroup.id,
    },
  });

  const forex = await prisma.category.upsert({
    where: { id: 40 },
    update: {},
    create: {
      name: "Foreign Exchange",
      isActive: true,
      expenseGroupId: holidayExpGroup.id,
    },
  });

  const stocks = await prisma.category.upsert({
    where: { id: 41 },
    update: {},
    create: {
      name: "Stocks and Shares Investments",
      isActive: true,
      expenseGroupId: savingExpGroup.id,
    },
  });

  const discretionaryInvements = await prisma.category.upsert({
    where: { id: 42 },
    update: {},
    create: {
      name: "Discretionary Investments",
      isActive: true,
      expenseGroupId: savingExpGroup.id,
    },
  });

  const cash = await prisma.category.upsert({
    where: { id: 43 },
    update: {},
    create: {
      name: "Cash Savings",
      isActive: true,
      expenseGroupId: savingExpGroup.id,
    },
  });

  const bonds = await prisma.category.upsert({
    where: { id: 44 },
    update: {},
    create: {
      name: "Bonds",
      isActive: true,
      expenseGroupId: savingExpGroup.id,
    },
  });

  const misc = await prisma.category.upsert({
    where: { id: 45 },
    update: {},
    create: {
      name: "Tax Payment",
      isActive: true,
      expenseGroupId: miscExpensesExpGroup.id,
    },
  });

  const education = await prisma.category.upsert({
    where: { id: 46 },
    update: {},
    create: {
      name: "Education/Training",
      isActive: true,
      expenseGroupId: miscExpensesExpGroup.id,
    },
  });

  const business = await prisma.category.upsert({
    where: { id: 47 },
    update: {},
    create: {
      name: "Business Expenditure",
      isActive: true,
      expenseGroupId: miscExpensesExpGroup.id,
    },
  });

  const studentLoan = await prisma.category.upsert({
    where: { id: 48 },
    update: {},
    create: {
      name: "Student Loan",
      isActive: true,
      expenseGroupId: miscExpensesExpGroup.id,
    },
  });

  const credit = await prisma.category.upsert({
    where: { id: 49 },
    update: {},
    create: {
      name: "Credit Card",
      isActive: true,
      expenseGroupId: miscExpensesExpGroup.id,
    },
  });

  const internalTransfers = await prisma.category.upsert({
    where: { id: 50 },
    update: {},
    create: {
      name: "Internal Transfers",
      isActive: true,
      expenseGroupId: internalTransfersExpGroup.id,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
