/* PALINDROME */

export {}

const csv_prod_price : string = 
`NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

var arraymove = (arr, fromIndex, toIndex) => {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

var csvToObject = ar => {
  let prodObj = []
  let arr = ar.split('\n')
  let headers = arr[0].split(',')
  
  arraymove(headers,2,1)
  
  for (let i = 1; i < arr.length; i++) {
    let data = arr[i].split(',')
    arraymove(data,2,1)
    let obj = {}
    data.forEach((v,j) => {
      headers[j].trim() == 'PRICE' ? 
        obj[headers[j].trim().toLowerCase()] = 
          parseInt(data[j].trim()):
        obj[headers[j].trim().toLowerCase()] = data[j].trim()
    })
    prodObj.push(obj)
  }
  let byPrice = prodObj.slice(0)
  byPrice.sort((a,b) => a.price - b.price)
  byPrice.forEach((v,i) => v.price = 'Rp' + new Intl.NumberFormat('id').format(parseInt(v.price)).replace(/,/g,'.'))
  console.log(JSON.stringify(byPrice, undefined, 2))
}

console.log('Input : csvToObject(csv_prod_price)');
console.log('=============================');
console.log('Output : \\/');
csvToObject(csv_prod_price);

/** OUTPUT
  Input : csvToObject(csv_prod_price)
  =============================
  Output : \/
  [
    {
      "name": "Xiaomi Redmi 5A",
      "price": "Rp1.199.000",
      "category": "Smartphone"
    },
    {
      "name": "Samsung Galaxy J7",
      "price": "Rp3.549.000",
      "category": "Smartphone"
    },
    {
      "name": "Xiaomi Mi 6",
      "price": "Rp5.399.000",
      "category": "Smartphone"
    },
    {
      "name": "LG V30 Plus",
      "price": "Rp10.499.000",
      "category": "Smartphone"
    },
    {
      "name": "Macbook Air",
      "price": "Rp13.775.000",
      "category": "Laptop"
    },
    {
      "name": "DELL XPS 13",
      "price": "Rp26.799.000",
      "category": "Laptop"
    }
  ]
*/