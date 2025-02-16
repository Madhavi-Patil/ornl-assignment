const {getDigits, uniqueItems, getUniqueSpecialties } = require('../src/tasks')

describe('Task# 1: Parse numberic values', () => {
    describe('[Extract all digits from given string] Posivite test cases', () => {
        
        test('input str has only digits', () => {
          expect(getDigits("2025")).toBe("2025");
        });

        test('input str has digits and chars', () => {
          expect(getDigits("2, 2")).toBe("22");
        });

        test('input with digits and special chars', () => {
          expect(getDigits("2@#$#$@%$@#$%/2")).toBe("22");
        });

    })

    describe('[Extract all digits from given string] Negative test cases', () => {
        
        test('input is an empty string', () => {
              expect(getDigits("")).toBe("");
          });
          
        test('input has digits and returned value is STRING', () =>{
          expect(typeof getDigits("123")).toBe("string");
        });

        test('input has 007 and expected result is Not 7', () => {
          expect(getDigits("jhsjhgfjsdhg0sjghfj0jhsdfgh7")).toBe("007");
        });

    });
})

describe('Task#2 : Remove duplicates from given list', () => {

    describe('[Extract unique items from given list] Positive test cases', () => {
        test('input is list of number with duplicate items', () => {
            expect(uniqueItems([1,2,3,1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
        });

        test('input is list of words with duplicate items', () => {
            expect(uniqueItems(['interview','code','test','sample','test'])).toStrictEqual(['interview','code','test','sample']);
        });
    });


    describe('[Extract unique items from given list] Negative test cases', () => {
      
      test('Check for Empty list', () => {
          expect(uniqueItems([])).toStrictEqual([]);
      });

      test('input is list of list with duplicate items', () => {
          expect(uniqueItems([[1,"interview"],[2,"code"],[3,"test"],[4,"sample"],[3,"test"]])).toStrictEqual([[1,"interview"],[2,"code"],[3,"test"],[4,"sample"]]);
      });
    });
});

describe('Task# 3: Get unique specialities', () => {

    describe('[Get Unique specialities]', () => {
      test('Test for Valid inputs', () => {
        expect(getUniqueSpecialties(["1-2","Prefix23","2test3","34---"],[[12,"interview"],[23,"code"],[4,"sample"]])).toStrictEqual([ 'interview', 'code' ]);
      });

      test('No match found', () => {
        expect(getUniqueSpecialties(["007", "1-21","Prefix231","2test31","341---"],[[7, "ShouldBeExcluded"],[12,"interview"],[23,"code"],[4,"sample"]])).toStrictEqual([]);
      });

      test('List of Ids is Empty ', () => {
        expect(getUniqueSpecialties([],[[12,"interview"],[23,"code"],[4,"sample"]])).toStrictEqual([]);
      });

      test('List of specialities is Empty ', () => {
        expect(getUniqueSpecialties(["1-21","Prefix231","2test31","341---"],[])).toStrictEqual([]);
      });

    });
});