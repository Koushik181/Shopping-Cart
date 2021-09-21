'use strict';

let x1=[];

for(var x=0;x<2;x++){
    x1.push(function(){return x;});
}
console.log(x1[0]());

var marks = [10,40,50,30,20];

var mLessThan30 = marks.filter(function(item,index){
    return item<30;
});



console.log(mLessThan30);
var person = [[
    {
      "_id": "613059bcb8b6e61b7b6f76f8",
      "index": 0,
      "guid": "51180ea0-aa1b-45c8-b15c-f7bdbab1e845",
      "isActive": true,
      "balance": "$1,648.17",
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "eyeColor": "blue",
      "name": "Yesenia Wyatt",
      "gender": "female",
      "company": "EARGO",
      "email": "yeseniawyatt@eargo.com",
      "phone": "+1 (931) 581-3203",
      "address": "357 Nautilus Avenue, Highland, Connecticut, 8607",
      "about": "Lorem reprehenderit eiusmod minim cillum commodo consequat eu id. In minim reprehenderit in consectetur occaecat deserunt pariatur consectetur eiusmod amet. Culpa laborum consequat tempor sint qui nisi officia sint. Reprehenderit excepteur cupidatat anim dolore enim irure eu cupidatat laboris deserunt quis. Commodo consequat elit id ipsum labore.\r\n",
      "registered": "2017-08-25T05:01:11 -00:00",
      "latitude": 74.585431,
      "longitude": -132.761979,
      "tags": [
        "ea",
        "dolore",
        "sunt",
        "aliqua",
        "culpa",
        "minim",
        "aute"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Rhea Floyd"
        },
        {
          "id": 1,
          "name": "Julia Kirk"
        },
        {
          "id": 2,
          "name": "Rojas Puckett"
        }
      ],
      "greeting": "Hello, Yesenia Wyatt! You have 1 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "613059bc60dbe7d8b384a255",
      "index": 1,
      "guid": "45b3ffe2-7490-4ec1-b5c4-3164670ff58e",
      "isActive": true,
      "balance": "$3,606.06",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": "Jacobson Cox",
      "gender": "male",
      "company": "LUXURIA",
      "email": "jacobsoncox@luxuria.com",
      "phone": "+1 (860) 482-2828",
      "address": "190 Lenox Road, Glendale, Oregon, 6505",
      "about": "Nostrud eu aute excepteur sunt nostrud. Duis eu ex commodo aute reprehenderit est do occaecat do sit minim enim aliqua. Adipisicing tempor ea reprehenderit duis consequat do ullamco.\r\n",
      "registered": "2019-08-12T03:02:39 -00:00",
      "latitude": 36.535783,
      "longitude": 21.146301,
      "tags": [
        "magna",
        "et",
        "adipisicing",
        "incididunt",
        "magna",
        "cupidatat",
        "dolor"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Malinda Hays"
        },
        {
          "id": 1,
          "name": "Cash Bowen"
        },
        {
          "id": 2,
          "name": "Josephine Pratt"
        }
      ],
      "greeting": "Hello, Jacobson Cox! You have 4 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "613059bcc10d8f1e92436b57",
      "index": 2,
      "guid": "5452e517-7771-4fb0-b809-e4178d6a8a5c",
      "isActive": true,
      "balance": "$1,647.99",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "blue",
      "name": "Gibbs Larsen",
      "gender": "male",
      "company": "FUTURITY",
      "email": "gibbslarsen@futurity.com",
      "phone": "+1 (871) 424-2053",
      "address": "328 Perry Terrace, Newry, Illinois, 8717",
      "about": "Ex adipisicing sit qui ea. Est laboris pariatur elit aliquip non. Ipsum anim est eu occaecat labore occaecat dolor. Pariatur consequat anim cupidatat eu officia minim ex irure aute aute laboris aliquip. Aliquip eiusmod minim fugiat ad nisi laborum sit ea occaecat ex adipisicing.\r\n",
      "registered": "2018-11-28T09:14:08 -00:00",
      "latitude": 56.603456,
      "longitude": -127.448045,
      "tags": [
        "voluptate",
        "reprehenderit",
        "proident",
        "irure",
        "id",
        "ad",
        "consequat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Kenya Hendrix"
        },
        {
          "id": 1,
          "name": "Reeves Mclean"
        },
        {
          "id": 2,
          "name": "Caroline Harrington"
        }
      ],
      "greeting": "Hello, Gibbs Larsen! You have 6 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "613059bcf2e77c3904687762",
      "index": 3,
      "guid": "3b3f28e5-f0e2-4884-b816-bc6e9e6058f9",
      "isActive": false,
      "balance": "$2,470.78",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "brown",
      "name": "Marianne Mcintosh",
      "gender": "female",
      "company": "BEADZZA",
      "email": "mariannemcintosh@beadzza.com",
      "phone": "+1 (956) 435-2931",
      "address": "131 Bancroft Place, Veguita, Palau, 2701",
      "about": "Cupidatat ex non exercitation et proident non dolor id officia laboris tempor aute voluptate. Laborum aliqua reprehenderit fugiat excepteur laborum. Eu voluptate tempor ea duis. Voluptate laborum excepteur id ipsum laborum deserunt ea. Veniam laborum consequat velit et id in voluptate culpa incididunt eiusmod nostrud.\r\n",
      "registered": "2019-10-03T06:59:06 -00:00",
      "latitude": 86.685596,
      "longitude": -151.525233,
      "tags": [
        "adipisicing",
        "duis",
        "laborum",
        "ipsum",
        "laborum",
        "dolor",
        "occaecat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Aileen Tate"
        },
        {
          "id": 1,
          "name": "Benjamin Jenkins"
        },
        {
          "id": 2,
          "name": "Trudy Johnston"
        }
      ],
      "greeting": "Hello, Marianne Mcintosh! You have 6 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "613059bc1b6fff0dc3c95f0b",
      "index": 4,
      "guid": "2d38710e-cf5a-4d83-bf35-fd4069125f83",
      "isActive": false,
      "balance": "$3,541.66",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "eyeColor": "brown",
      "name": "Frieda Mathis",
      "gender": "female",
      "company": "ARTIQ",
      "email": "friedamathis@artiq.com",
      "phone": "+1 (925) 482-2106",
      "address": "115 Rewe Street, Chloride, Maine, 8874",
      "about": "Mollit dolor tempor do anim consequat incididunt proident voluptate officia do amet voluptate. Ut non pariatur esse mollit dolor ullamco elit nostrud enim. Pariatur irure Lorem anim enim proident nisi qui culpa aute. Incididunt adipisicing id fugiat ullamco reprehenderit fugiat sunt velit fugiat dolore ut. Culpa anim proident excepteur irure. Minim ullamco amet reprehenderit veniam.\r\n",
      "registered": "2015-01-17T02:30:53 -00:00",
      "latitude": 54.972519,
      "longitude": -73.238312,
      "tags": [
        "sunt",
        "proident",
        "non",
        "adipisicing",
        "exercitation",
        "officia",
        "incididunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Mcmillan Levy"
        },
        {
          "id": 1,
          "name": "Letitia Reeves"
        },
        {
          "id": 2,
          "name": "Harriet Waller"
        }
      ],
      "greeting": "Hello, Frieda Mathis! You have 9 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "613059bcb689093876b4598a",
      "index": 5,
      "guid": "84f85bbe-c2ba-476d-b2f4-989bb02b4ff3",
      "isActive": true,
      "balance": "$1,302.08",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "green",
      "name": "Helena Cain",
      "gender": "female",
      "company": "SIGNITY",
      "email": "helenacain@signity.com",
      "phone": "+1 (889) 430-3197",
      "address": "632 Richmond Street, Tooleville, Missouri, 7548",
      "about": "Tempor amet aliquip aliquip pariatur nostrud exercitation duis cillum consequat consectetur. Consectetur ea minim ex anim sint nisi mollit fugiat et. Labore id in ex eu mollit nulla laborum. Adipisicing laborum consequat elit minim irure quis. Labore laborum tempor anim aute ut aliquip veniam. Ut occaecat veniam labore do sit esse dolore. Ea nulla labore consequat reprehenderit et aliquip esse est nostrud.\r\n",
      "registered": "2018-06-22T11:43:49 -00:00",
      "latitude": -83.082002,
      "longitude": -161.743575,
      "tags": [
        "nostrud",
        "eiusmod",
        "labore",
        "incididunt",
        "reprehenderit",
        "proident",
        "velit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Terrie Conrad"
        },
        {
          "id": 1,
          "name": "Bowen Sellers"
        },
        {
          "id": 2,
          "name": "Sylvia Kelley"
        }
      ],
      "greeting": "Hello, Helena Cain! You have 6 unread messages.",
      "favoriteFruit": "banana"
    }
  ]]


  var ans = person.map((item,index)=>{

        return {name:item.name,age:item.age,gender:item.gender,phone:item.phone};
  });

  console.log(ans);

  var fil = person.filter((item,index)=>{
      return item.favoriteFruit=='Strawberry'
  });

  

  console.log(fil);
