export default function exampleResponse() {
  const logEntries = {
    data: [
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        type: 'meal',
        attributes: {
          time: 123345534,
          description: 'Yogurt with strawberries',
          amount: 100,
          unit: 'percentage'
        }
      },
      {
        id: '550e8400-e29b-41d4-a716-446655441234',
        type: 'nap',
        attributes: {
          time: 1234,
          duration: 2472243
        }
      }
    ]
  };
  return logEntries;
}
