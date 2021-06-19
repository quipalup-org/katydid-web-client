export default function exampleResponse() {
  const logEntries = {
    data: [
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        type: 'meal-log-entry',
        attributes: {
          time: 123345534,
          description: 'Yogurt with strawberries',
          amount: 100,
          unit: 'percentage'
        }
      },
      {
        id: '550e8400-e29b-41d4-a716-446655441234',
        type: 'nap-log-entry',
        attributes: {
          time: 1234,
          durationInSeconds: 2472243
        }
      }
    ]
  };
  return logEntries;
}
