/* LEAP YEAR DETECTOR */
export {}
let startYear = 2010;
let endYear = 2020;


var leapYearDetector = (s, e) => {
  let year;
  for (let i = 0; i <= e-s; i++ ) {
    year = s+i;

    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    {
      console.log(year+" = leap year");  
    }
  }
}

console.log('Input : leapYearDetector(startYear, endYear)');
console.log('=============================');
console.log('Output : \\/');
leapYearDetector(startYear, endYear);

/** OUTPUT
  Input : leapYearDetector(startYear, endYear)
  =============================
  Output : \/
  2012 = leap year
  2016 = leap year
  2020 = leap year
*/

