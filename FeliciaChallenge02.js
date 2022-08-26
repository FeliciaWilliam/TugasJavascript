//Lim Felicia William
//Kelas FE JS 2
//Jawaban Challenge 2

//No. 1
function changeword(selectedText,changedText,text){
    var modifiedText = text.replace(selectedText,changedText);
    return modifiedText
}

console.log(" ");
console.log("No. 1");
str = "The quick brown fox jumps over the lazy dog.";
console.log("Original text :",str);
console.log("Edited text   :",changeword("lazy dog", "zany log",str));
console.log(" ");

//No. 2
function checkTypeNumber(givenNumber){
    return givenNumber % 2 === 0 ? 'Genap' : 'Ganjil'
}

console.log("No. 2");
console.log(checkTypeNumber(64));
console.log(checkTypeNumber(29));
console.log(checkTypeNumber(8));
console.log(checkTypeNumber(35));
console.log(checkTypeNumber(17));
console.log(" ");

//No. 3
function checkEmail(email){
  var mailformat = email.match (/^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.(com|co.id|id)$/g);
  if (mailformat)
  {
    return "VALID"
  }
  else{
    return "INVALID"
  }

}

console.log("No. 3");
console.log(checkEmail("feli735@gmail.com"));
console.log(checkEmail("@nina284.gmail.com"));
console.log(checkEmail("starrylila.gmail.com"));
console.log(checkEmail("starrylila@gmail.com"));
console.log(" ");

//No. 4
function isValidPassword(pw){
  var pwformat = pw.match ('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
  if (pwformat)
  {
    return true
  }
  else{
    return false
  }
}

console.log("No. 4");
console.log(isValidPassword("marisa*Kirisame2022"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("#Meong2021"));
console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("KochengOren"));
console.log(isValidPassword("8Sanae*"));
console.log(isValidPassword("Zakisukasirup"));
console.log(isValidPassword("8SanaeKochiya*"));
console.log(isValidPassword("#meong2021"));
console.log(isValidPassword("127894530"));
console.log(" ");

//No. 5
function getSplitName(name){
  var fullName = name || "";
  var result = {};

  if (fullName.length > 0) {
      var nameTokens = fullName.match(/[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g) || [];

      if(nameTokens.length > 3){
        return "ERROR: This function is only for names with 3 words.";
      }

      if (nameTokens.length == 3) {
          result.firstName = nameTokens.slice(0, 1).join(' ');
      } else {
          result.firstName = nameTokens.slice(0, 1).join(' ');
      }

      if (nameTokens.length > 2) {
          result.middleName = nameTokens.slice(-2, -1).join(' ');
          result.lastName = nameTokens.slice(-1).join(' ');
      } else {
          result.lastName = nameTokens.slice(-1).join(' ');
          result.middleName = null;
      }

      if (nameTokens.length == 1) {
        result.firstName = nameTokens.slice(0, 2).join(' ');
        result.middleName = null;
        result.lastName = null;
      }
  }

  return result;
}

console.log("No. 5");
console.log(getSplitName("Ida Bagus Geria"));
console.log(getSplitName("Agung Setiawan"));
console.log(getSplitName("Yusuf Sembiring"));
console.log(getSplitName("Alexander Taruna Simanjorang"));
console.log(getSplitName("Aurora Aurelia Sukma Darma"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Sukavati"));
console.log(" ");

//No. 6
function getAngkaTerbesarKedua(arr){
  let max = -Infinity, result = -Infinity;

  for (const value of arr) {
    const nr = Number(value)

    if (nr > max) {
      [result, max] = [max, nr] 
    } else if (nr < max && nr > result) {
      result = nr;
    }
  }

  return result;
}

console.log("No. 6");
dataArray  =[9,19,54,37,26,31,80];
dataArray2 =[1,7,13,92,64,85];
console.log(getAngkaTerbesarKedua(dataArray));
console.log(getAngkaTerbesarKedua(dataArray2));
console.log(" ");

//No. 7
const dataPenjualanPakAldi = [
  {
    namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan : 760000,
    kategori    : 'sepatu sport',
    totalTerjual: 90
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Black Brown High - Original',
    hargaSatuan : 960000,
    kategori    : 'sepatu sneaker',
    totalTerjual: 37
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Maroon High - Original',
    hargaSatuan : 360000,
    kategori    : 'sepatu sneaker',
    totalTerjual: 90
  },
  {
    namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original',
    hargaSatuan : 120000,
    kategori    : 'sepatu sneaker',
    totalTerjual: 90
  }
];

function hitungTotalPenjualan(dataPenjualan){ 
  let total = 0;

  for(let i=0; i<dataPenjualan.length; i++){
    if(typeof dataPenjualan[i].totalTerjual!="number"){
      return "ERROR";
    }
    else{
      total +=  dataPenjualan[i].totalTerjual;
    }
  }
  return total
}

console.log("No. 7");
console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
console.log(" ");

//No. 8
const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(info){
  let untung = 0;
  let jmlhModal = 0;
  let persenUntung = 0;
  let tampung = 0;
  let result = 0;
   
  for(let i=0; i<info.length; i++){
    if(typeof info[i].hargaBeli==="number"){
      untung += (info[i].hargaJual-info[i].hargaBeli)*info[i].totalTerjual;
    }
    if(typeof info[i].hargaBeli==="number"){
      jmlhModal +=  info[i].hargaBeli*(info[i].totalTerjual+info[i].sisaStok);
    }
    if(tampung<info[i].totalTerjual ){
      tampung = info[i].totalTerjual;
      result = info[i];
    }

    persenUntung = Math.round((untung/jmlhModal) * 100);
  }

  return {totalKeuntungan:"RP. " + untung.toLocaleString(), 
          totalModal:"RP. " + jmlhModal.toLocaleString(), 
          persentaseKeuntungan:persenUntung.toString()+" %", 
          produkBukuTerlaris:result.namaProduk, 
          penulisTerlaris:result.penulis
         };

}

console.log("No. 8");
console.log(getInfoPenjualan(dataPenjualanNovel));
console.log(" ");