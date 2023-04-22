function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }





  class Triangle {
    constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
    }
    
    get perimeter() {
    return this.a + this.b + this.c;
    }
    
    get area() {
    const p = this.perimeter / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return parseFloat(s.toFixed(3));
    }
    }
    
    function getTriangle(a, b, c) {
        try {
       return new Triangle(a, b, c);
        } catch (error) {
          return {
            get area() {
        return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
        },
        };
        }
    }


// class Triangle {
//     _firstSideLength;
//     _secondSideLength;
//     _thirdSideLength;
  
//     constructor(firstSideLength, secondSideLength, thirdSideLength) {
//       const first = +firstSideLength;
//       const second = +secondSideLength;
//       const third = +thirdSideLength;
//       let errorMessage = '';
//       if (isNaN(first)) {
//         errorMessage += 'Первая сторона не число.';
//       }
//       if (isNaN(second)) {
//         if (errorMessage.length === 0) {
//           errorMessage += 'Вторая сторона не число.';
//         } else {
//           errorMessage += '\nВторая сторона не число.';
//         }
//       }
//       if (isNaN(third)) {
//         if (errorMessage.length === 0) {
//           errorMessage += 'Третья сторона не число.';
//         } else {
//           errorMessage += '\nТретья сторона не число.';
//         }
//       }
//       if (errorMessage.length !== 0) {
//         throw new TypeError(errorMessage);
//       }
//       if (
//         (first + second) <= third ||
//         (first + third) <= second ||
//         (second + third) <= first
//       ) {
//         throw new TypeError('Треугольник с такими сторонами не существует');
//       }
  
//       this._firstSideLength = first;
//       this._secondSideLength = second;
//       this._thirdSideLength = third;
//     }
    
  
//     get area() {
//       const semiPerimeter = this.perimeter / 2;
//       return Math.round(1000 * Math.sqrt(
//           semiPerimeter *
//           (semiPerimeter - this.firstSideLength) *
//           (semiPerimeter - this.secondSideLength) *
//           (semiPerimeter - this.thirdSideLength),
//       )) / 1000;
//     }
  
//     get perimeter() {
//       return this._firstSideLength +
//         this._secondSideLength +
//         this._thirdSideLength;
//     }
  
//     get firstSideLength() {
//       return this._firstSideLength;
//     }
  
//     get secondSideLength() {
//       return this._secondSideLength;
//     }
  
//     get thirdSideLength() {
//       return this._thirdSideLength;
//     }
//   }
  
//   function getTriangle(firstSideLength, secondSideLength, thirdSideLength) {
//     try {
//       return new Triangle(firstSideLength, secondSideLength, thirdSideLength);
//     } catch ( error ) {
//       return {
//         get area() {
//           return 'Ошибка! Треугольник не существует';
//         },
//         get perimeter() {
//           return 'Ошибка! Треугольник не существует';
//         },
//       };
//     }
//   }