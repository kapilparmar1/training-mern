const input = [
    {
      name: 'John',
      yearOfBirth: 1988,
      placeOfBirth: 'New York',
    },
    {
      name: 'Nancy',
      yearOfBirth: 1963,
      placeOfBirth: 'New York',
    },
    {
      name: 'John',
      yearOfBirth: 1980,
      placeOfBirth: 'Toronto',
    },
  ];

  const groupBy = (array, callback) => array.reduce(
    (accumulator, currentValue) => {
      const key = callback(currentValue);
      
      if(accumulator[key]) {
        accumulator[key].push(currentValue);
      } else {
        accumulator[key] = [currentValue];
      }

      return accumulator;
    },
    {},
  );

  console.log(groupBy(input, t => t.name));