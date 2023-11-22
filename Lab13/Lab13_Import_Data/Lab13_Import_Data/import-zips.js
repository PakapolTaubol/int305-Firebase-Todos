var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


var db = getFirestore() ;

var zips = [{
  "city": "ADGER",
  "zip": "35006",
  "loc": {
    "y": 33.434277,
    "x": 87.167455
  },
  "pop": 3205,
  "state": "AL"
},{
  "city": "EMPIRE",
  "zip": "35063",
  "loc": {
    "y": 33.825589,
    "x": 87.016139
  },
  "pop": 2429,
  "state": "AL"
},{
  "city": "ARAB",
  "zip": "35016",
  "loc": {
    "y": 34.328339,
    "x": 86.489638
  },
  "pop": 13650,
  "state": "AL"
},{
  "city": "BLOUNTSVILLE",
  "zip": "35031",
  "loc": {
    "y": 34.092937,
    "x": 86.568628
  },
  "pop": 9058,
  "state": "AL"
},{
  "city": "ACMAR",
  "zip": "35004",
  "loc": {
    "y": 33.584132,
    "x": 86.51557
  },
  "pop": 6055,
  "state": "AL"
},{
  "city": "BRENT",
  "zip": "35034",
  "loc": {
    "y": 32.93567,
    "x": 87.211387
  },
  "pop": 3791,
  "state": "AL"
},{
  "city": "ADAMSVILLE",
  "zip": "35005",
  "loc": {
    "y": 33.588437,
    "x": 86.959727
  },
  "pop": 10616,
  "state": "AL"
},{
  "city": "CRANE HILL",
  "zip": "35053",
  "loc": {
    "y": 34.082117,
    "x": 87.048395
  },
  "pop": 2270,
  "state": "AL"
},{
  "city": "SPRINGVILLE",
  "zip": "35146",
  "loc": {
    "y": 33.738647,
    "x": 86.439407
  },
  "pop": 8723,
  "state": "AL"
},{
  "city": "PELL CITY",
  "zip": "35125",
  "loc": {
    "y": 33.597889,
    "x": 86.343151
  },
  "pop": 17981,
  "state": "AL"
},{
  "city": "TALLADEGA",
  "zip": "35160",
  "loc": {
    "y": 33.435445,
    "x": 86.113352
  },
  "pop": 29778,
  "state": "AL"
},{
  "city": "THORSBY",
  "zip": "35171",
  "loc": {
    "y": 32.923755,
    "x": 86.746724
  },
  "pop": 4131,
  "state": "AL"
},{
  "city": "UNION GROVE",
  "zip": "35175",
  "loc": {
    "y": 34.409345,
    "x": 86.462793
  },
  "pop": 4921,
  "state": "AL"
},{
  "city": "VINA",
  "zip": "35593",
  "loc": {
    "y": 34.37116,
    "x": 88.077422
  },
  "pop": 888,
  "state": "AL"
},{
  "city": "RED BAY",
  "zip": "35582",
  "loc": {
    "y": 34.451259,
    "x": 88.112914
  },
  "pop": 5159,
  "state": "AL"
},{
  "city": "EVA",
  "zip": "35621",
  "loc": {
    "y": 34.347778,
    "x": 86.704427
  },
  "pop": 3977,
  "state": "AL"
},{
  "city": "PARRISH",
  "zip": "35580",
  "loc": {
    "y": 33.721307,
    "x": 87.265773
  },
  "pop": 4775,
  "state": "AL"
},{
  "city": "ROGERSVILLE",
  "zip": "35652",
  "loc": {
    "y": 34.849544,
    "x": 87.323671
  },
  "pop": 6521,
  "state": "AL"
},{
  "city": "HUNTSVILLE",
  "zip": "35816",
  "loc": {
    "y": 34.738864,
    "x": 86.624948
  },
  "pop": 13736,
  "state": "AL"
},{
  "city": "ALBERTVILLE",
  "zip": "35950",
  "loc": {
    "y": 34.273859,
    "x": 86.206447
  },
  "pop": 21033,
  "state": "AL"
},{
  "city": "HIGDON",
  "zip": "35979",
  "loc": {
    "y": 34.873247,
    "x": 85.622507
  },
  "pop": 1324,
  "state": "AL"
},{
  "city": "STEELE",
  "zip": "35987",
  "loc": {
    "y": 33.941679,
    "x": 86.228929
  },
  "pop": 1830,
  "state": "AL"
},{
  "city": "BRANTLEY",
  "zip": "36009",
  "loc": {
    "y": 31.570963,
    "x": 86.274343
  },
  "pop": 2623,
  "state": "AL"
},{
  "city": "BILLINGSLEY",
  "zip": "36006",
  "loc": {
    "y": 32.610578,
    "x": 86.716301
  },
  "pop": 1869,
  "state": "AL"
},{
  "city": "VALLEY HEAD",
  "zip": "35989",
  "loc": {
    "y": 34.5697,
    "x": 85.627208
  },
  "pop": 1211,
  "state": "AL"
},{
  "city": "GEORGIANA",
  "zip": "36033",
  "loc": {
    "y": 31.628662,
    "x": 86.733965
  },
  "pop": 3672,
  "state": "AL"
},{
  "city": "MONTGOMERY",
  "zip": "36108",
  "loc": {
    "y": 32.341682,
    "x": 86.352904
  },
  "pop": 30780,
  "state": "AL"
},{
  "city": "RANBURNE",
  "zip": "36273",
  "loc": {
    "y": 33.561627,
    "x": 85.378604
  },
  "pop": 3696,
  "state": "AL"
},{
  "city": "MIDLAND CITY",
  "zip": "36350",
  "loc": {
    "y": 31.36716,
    "x": 85.513033
  },
  "pop": 4854,
  "state": "AL"
},{
  "city": "BEATRICE",
  "zip": "36425",
  "loc": {
    "y": 31.727324,
    "x": 87.171912
  },
  "pop": 1620,
  "state": "AL"
},{
  "city": "VREDENBURGH",
  "zip": "36481",
  "loc": {
    "y": 31.73443,
    "x": 87.416184
  },
  "pop": 2040,
  "state": "AL"
},{
  "city": "BAY MINETTE",
  "zip": "36507",
  "loc": {
    "y": 30.86354,
    "x": 87.76444
  },
  "pop": 17816,
  "state": "AL"
},{
  "city": "DAPHNE",
  "zip": "36526",
  "loc": {
    "y": 30.61972,
    "x": 87.889522
  },
  "pop": 14607,
  "state": "AL"
},{
  "city": "PERDIDO",
  "zip": "36562",
  "loc": {
    "y": 30.98058,
    "x": 87.628374
  },
  "pop": 986,
  "state": "AL"
},{
  "city": "STOCKTON",
  "zip": "36579",
  "loc": {
    "y": 31.01293,
    "x": 87.863323
  },
  "pop": 1214,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36603",
  "loc": {
    "y": 30.692141,
    "x": 88.05622
  },
  "pop": 12162,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36606",
  "loc": {
    "y": 30.672899,
    "x": 88.100909
  },
  "pop": 18247,
  "state": "AL"
},{
  "city": "SELMA",
  "zip": "36703",
  "loc": {
    "y": 32.415553,
    "x": 87.013546
  },
  "pop": 12931,
  "state": "AL"
},{
  "city": "CLEVELAND",
  "zip": "35049",
  "loc": {
    "y": 33.992106,
    "x": 86.559355
  },
  "pop": 2369,
  "state": "AL"
},{
  "city": "ALDEN",
  "zip": "35073",
  "loc": {
    "y": 33.63356,
    "x": 86.948221
  },
  "pop": 4429,
  "state": "AL"
},{
  "city": "SYLACAUGA",
  "zip": "35150",
  "loc": {
    "y": 33.171675,
    "x": 86.271257
  },
  "pop": 24424,
  "state": "AL"
},{
  "city": "IRONDALE",
  "zip": "35210",
  "loc": {
    "y": 33.532797,
    "x": 86.685697
  },
  "pop": 15047,
  "state": "AL"
},{
  "city": "BLUFF PARK",
  "zip": "35226",
  "loc": {
    "y": 33.403675,
    "x": 86.831257
  },
  "pop": 23992,
  "state": "AL"
},{
  "city": "CAHABA HEIGHTS",
  "zip": "35243",
  "loc": {
    "y": 33.446053,
    "x": 86.743676
  },
  "pop": 13091,
  "state": "AL"
},{
  "city": "TUSCALOOSA",
  "zip": "35401",
  "loc": {
    "y": 33.196891,
    "x": 87.562666
  },
  "pop": 42124,
  "state": "AL"
},{
  "city": "EUTAW",
  "zip": "35462",
  "loc": {
    "y": 32.888871,
    "x": 87.930297
  },
  "pop": 6586,
  "state": "AL"
},{
  "city": "GORDO",
  "zip": "35466",
  "loc": {
    "y": 33.346917,
    "x": 87.900504
  },
  "pop": 4333,
  "state": "AL"
},{
  "city": "HAMILTON",
  "zip": "35570",
  "loc": {
    "y": 34.153413,
    "x": 88.008521
  },
  "pop": 11184,
  "state": "AL"
},{
  "city": "BEAVERTON",
  "zip": "35544",
  "loc": {
    "y": 33.942877,
    "x": 88.01567
  },
  "pop": 1014,
  "state": "AL"
},{
  "city": "LEXINGTON",
  "zip": "35648",
  "loc": {
    "y": 34.955924,
    "x": 87.393519
  },
  "pop": 2241,
  "state": "AL"
},{
  "city": "RUSSELLVILLE",
  "zip": "35653",
  "loc": {
    "y": 34.506568,
    "x": 87.725726
  },
  "pop": 17767,
  "state": "AL"
},{
  "city": "FACKLER",
  "zip": "35746",
  "loc": {
    "y": 34.82589,
    "x": 85.984648
  },
  "pop": 396,
  "state": "AL"
},{
  "city": "HYTOP",
  "zip": "35768",
  "loc": {
    "y": 34.67227,
    "x": 86.051336
  },
  "pop": 16934,
  "state": "AL"
},{
  "city": "PRINCETON",
  "zip": "35766",
  "loc": {
    "y": 34.840217,
    "x": 86.250068
  },
  "pop": 273,
  "state": "AL"
},{
  "city": "BRYANT",
  "zip": "35958",
  "loc": {
    "y": 34.945026,
    "x": 85.632445
  },
  "pop": 1700,
  "state": "AL"
},{
  "city": "GROVEOAK",
  "zip": "35975",
  "loc": {
    "y": 34.435874,
    "x": 86.040023
  },
  "pop": 1098,
  "state": "AL"
},{
  "city": "BRUNDIDGE",
  "zip": "36010",
  "loc": {
    "y": 31.701324,
    "x": 85.817668
  },
  "pop": 4320,
  "state": "AL"
},{
  "city": "GLENWOOD",
  "zip": "36034",
  "loc": {
    "y": 31.664143,
    "x": 86.170972
  },
  "pop": 109,
  "state": "AL"
},{
  "city": "LAPINE",
  "zip": "36046",
  "loc": {
    "y": 31.985423,
    "x": 86.278534
  },
  "pop": 338,
  "state": "AL"
},{
  "city": "PEROTE",
  "zip": "36061",
  "loc": {
    "y": 32.003459,
    "x": 85.74773
  },
  "pop": 1792,
  "state": "AL"
},{
  "city": "MATHEWS",
  "zip": "36052",
  "loc": {
    "y": 32.128288,
    "x": 86.041262
  },
  "pop": 836,
  "state": "AL"
},{
  "city": "SHORTER",
  "zip": "36075",
  "loc": {
    "y": 32.383585,
    "x": 85.91616
  },
  "pop": 1876,
  "state": "AL"
},{
  "city": "MONTGOMERY",
  "zip": "36109",
  "loc": {
    "y": 32.383443,
    "x": 86.243394
  },
  "pop": 25282,
  "state": "AL"
},{
  "city": "DELTA",
  "zip": "36258",
  "loc": {
    "y": 33.457303,
    "x": 85.679279
  },
  "pop": 1405,
  "state": "AL"
},{
  "city": "FRUITHURST",
  "zip": "36262",
  "loc": {
    "y": 33.771732,
    "x": 85.43814
  },
  "pop": 1473,
  "state": "AL"
},{
  "city": "GRAHAM",
  "zip": "36263",
  "loc": {
    "y": 33.462976,
    "x": 85.334034
  },
  "pop": 374,
  "state": "AL"
},{
  "city": "ABBEVILLE",
  "zip": "36310",
  "loc": {
    "y": 31.575479,
    "x": 85.279044
  },
  "pop": 5416,
  "state": "AL"
},{
  "city": "ELBA",
  "zip": "36323",
  "loc": {
    "y": 31.41373,
    "x": 86.077728
  },
  "pop": 6662,
  "state": "AL"
},{
  "city": "GORDON",
  "zip": "36343",
  "loc": {
    "y": 31.10019,
    "x": 85.123412
  },
  "pop": 2017,
  "state": "AL"
},{
  "city": "PANSEY",
  "zip": "36370",
  "loc": {
    "y": 31.131778,
    "x": 85.238549
  },
  "pop": 595,
  "state": "AL"
},{
  "city": "COFFEE SPRINGS",
  "zip": "36318",
  "loc": {
    "y": 31.138758,
    "x": 85.918224
  },
  "pop": 750,
  "state": "AL"
},{
  "city": "EAST BREWTON",
  "zip": "36426",
  "loc": {
    "y": 31.118926,
    "x": 87.067325
  },
  "pop": 15479,
  "state": "AL"
},{
  "city": "BON SECOUR",
  "zip": "36511",
  "loc": {
    "y": 30.328883,
    "x": 87.721355
  },
  "pop": 2001,
  "state": "AL"
},{
  "city": "WHATLEY",
  "zip": "36482",
  "loc": {
    "y": 31.639453,
    "x": 87.656502
  },
  "pop": 790,
  "state": "AL"
},{
  "city": "COFFEEVILLE",
  "zip": "36524",
  "loc": {
    "y": 31.78428,
    "x": 88.071542
  },
  "pop": 1374,
  "state": "AL"
},{
  "city": "GRAND BAY",
  "zip": "36541",
  "loc": {
    "y": 30.498288,
    "x": 88.32825
  },
  "pop": 10344,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36619",
  "loc": {
    "y": 30.592803,
    "x": 88.194645
  },
  "pop": 12728,
  "state": "AL"
},{
  "city": "MONTEVALLO",
  "zip": "35115",
  "loc": {
    "y": 33.124765,
    "x": 86.862228
  },
  "pop": 11638,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35207",
  "loc": {
    "y": 33.559383,
    "x": 86.815344
  },
  "pop": 13901,
  "state": "AL"
},{
  "city": "HOMEWOOD",
  "zip": "35209",
  "loc": {
    "y": 33.469624,
    "x": 86.806738
  },
  "pop": 24973,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35217",
  "loc": {
    "y": 33.5887,
    "x": 86.764995
  },
  "pop": 17366,
  "state": "AL"
},{
  "city": "KNOXVILLE",
  "zip": "35469",
  "loc": {
    "y": 32.982423,
    "x": 87.791855
  },
  "pop": 373,
  "state": "AL"
},{
  "city": "HALEYVILLE",
  "zip": "35565",
  "loc": {
    "y": 34.231423,
    "x": 87.593811
  },
  "pop": 9141,
  "state": "AL"
},{
  "city": "WINFIELD",
  "zip": "35594",
  "loc": {
    "y": 33.930256,
    "x": 87.79716
  },
  "pop": 6750,
  "state": "AL"
},{
  "city": "PHIL CAMPBELL",
  "zip": "35581",
  "loc": {
    "y": 34.347018,
    "x": 87.715431
  },
  "pop": 5345,
  "state": "AL"
},{
  "city": "FLORENCE",
  "zip": "35633",
  "loc": {
    "y": 34.882471,
    "x": 87.739778
  },
  "pop": 16478,
  "state": "AL"
},{
  "city": "GRANT",
  "zip": "35747",
  "loc": {
    "y": 34.495902,
    "x": 86.259041
  },
  "pop": 8345,
  "state": "AL"
},{
  "city": "HAZEL GREEN",
  "zip": "35750",
  "loc": {
    "y": 34.949627,
    "x": 86.593484
  },
  "pop": 7751,
  "state": "AL"
},{
  "city": "TUSCUMBIA",
  "zip": "35674",
  "loc": {
    "y": 34.687432,
    "x": 87.683259
  },
  "pop": 17880,
  "state": "AL"
},{
  "city": "HOLLYWOOD",
  "zip": "35752",
  "loc": {
    "y": 34.730428,
    "x": 85.953173
  },
  "pop": 2038,
  "state": "AL"
},{
  "city": "DUTTON",
  "zip": "35744",
  "loc": {
    "y": 34.604558,
    "x": 85.906729
  },
  "pop": 2948,
  "state": "AL"
},{
  "city": "BRIDGEPORT",
  "zip": "35740",
  "loc": {
    "y": 34.944638,
    "x": 85.727681
  },
  "pop": 3988,
  "state": "AL"
},{
  "city": "MERIDIANVILLE",
  "zip": "35759",
  "loc": {
    "y": 34.861779,
    "x": 86.578879
  },
  "pop": 2597,
  "state": "AL"
},{
  "city": "RAINSVILLE",
  "zip": "35986",
  "loc": {
    "y": 34.498884,
    "x": 85.844605
  },
  "pop": 7498,
  "state": "AL"
},{
  "city": "HONORAVILLE",
  "zip": "36042",
  "loc": {
    "y": 31.878397,
    "x": 86.398064
  },
  "pop": 838,
  "state": "AL"
},{
  "city": "TUSKEGEE",
  "zip": "36083",
  "loc": {
    "y": 32.431623,
    "x": 85.68606
  },
  "pop": 10687,
  "state": "AL"
},{
  "city": "UNION SPRINGS",
  "zip": "36089",
  "loc": {
    "y": 32.166252,
    "x": 85.678746
  },
  "pop": 7555,
  "state": "AL"
},{
  "city": "ANNISTON",
  "zip": "36201",
  "loc": {
    "y": 33.653896,
    "x": 85.838152
  },
  "pop": 38370,
  "state": "AL"
},{
  "city": "MONTGOMERY",
  "zip": "36106",
  "loc": {
    "y": 32.354268,
    "x": 86.267278
  },
  "pop": 15744,
  "state": "AL"
},{
  "city": "ASHLAND",
  "zip": "36251",
  "loc": {
    "y": 33.247363,
    "x": 85.828976
  },
  "pop": 4518,
  "state": "AL"
},{
  "city": "EASTABOGA",
  "zip": "36260",
  "loc": {
    "y": 33.603132,
    "x": 85.96075
  },
  "pop": 3999,
  "state": "AL"
},{
  "city": "WEDOWEE",
  "zip": "36278",
  "loc": {
    "y": 33.301854,
    "x": 85.473737
  },
  "pop": 3101,
  "state": "AL"
},{
  "city": "HEFLIN",
  "zip": "36264",
  "loc": {
    "y": 33.611515,
    "x": 85.588471
  },
  "pop": 6577,
  "state": "AL"
},{
  "city": "MUSCADINE",
  "zip": "36269",
  "loc": {
    "y": 33.752913,
    "x": 85.378907
  },
  "pop": 265,
  "state": "AL"
},{
  "city": "ENTERPRISE",
  "zip": "36330",
  "loc": {
    "y": 31.340789,
    "x": 85.842111
  },
  "pop": 29102,
  "state": "AL"
},{
  "city": "MONROEVILLE",
  "zip": "36460",
  "loc": {
    "y": 31.51533,
    "x": 87.340993
  },
  "pop": 10492,
  "state": "AL"
},{
  "city": "WING",
  "zip": "36483",
  "loc": {
    "y": 31.148127,
    "x": 86.56119
  },
  "pop": 1583,
  "state": "AL"
},{
  "city": "FAIRHOPE",
  "zip": "36532",
  "loc": {
    "y": 30.50116,
    "x": 87.883546
  },
  "pop": 16331,
  "state": "AL"
},{
  "city": "MOUNT VERNON",
  "zip": "36560",
  "loc": {
    "y": 31.097375,
    "x": 88.035044
  },
  "pop": 5053,
  "state": "AL"
},{
  "city": "SARALAND",
  "zip": "36571",
  "loc": {
    "y": 30.833197,
    "x": 88.093387
  },
  "pop": 13151,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36612",
  "loc": {
    "y": 30.751844,
    "x": 88.11311
  },
  "pop": 6096,
  "state": "AL"
},{
  "city": "CULLMAN",
  "zip": "35055",
  "loc": {
    "y": 34.176146,
    "x": 86.829777
  },
  "pop": 31708,
  "state": "AL"
},{
  "city": "KIMBERLY",
  "zip": "35091",
  "loc": {
    "y": 33.768355,
    "x": 86.808417
  },
  "pop": 1045,
  "state": "AL"
},{
  "city": "HELENA",
  "zip": "35080",
  "loc": {
    "y": 33.316978,
    "x": 86.813786
  },
  "pop": 9938,
  "state": "AL"
},{
  "city": "HOLLY POND",
  "zip": "35083",
  "loc": {
    "y": 34.190085,
    "x": 86.617441
  },
  "pop": 3838,
  "state": "AL"
},{
  "city": "TRAFFORD",
  "zip": "35172",
  "loc": {
    "y": 33.819038,
    "x": 86.743414
  },
  "pop": 909,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35206",
  "loc": {
    "y": 33.567797,
    "x": 86.719854
  },
  "pop": 22050,
  "state": "AL"
},{
  "city": "QUINTON",
  "zip": "35130",
  "loc": {
    "y": 33.656065,
    "x": 87.10066
  },
  "pop": 2198,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35214",
  "loc": {
    "y": 33.555445,
    "x": 86.886989
  },
  "pop": 23293,
  "state": "AL"
},{
  "city": "ROCKFORD",
  "zip": "35136",
  "loc": {
    "y": 32.877957,
    "x": 86.240006
  },
  "pop": 1819,
  "state": "AL"
},{
  "city": "STEWART",
  "zip": "35441",
  "loc": {
    "y": 32.872354,
    "x": 87.708558
  },
  "pop": 1745,
  "state": "AL"
},{
  "city": "WEOGUFKA",
  "zip": "35183",
  "loc": {
    "y": 33.02381,
    "x": 86.304203
  },
  "pop": 1249,
  "state": "AL"
},{
  "city": "CYPRESS",
  "zip": "35474",
  "loc": {
    "y": 32.978853,
    "x": 87.615134
  },
  "pop": 2659,
  "state": "AL"
},{
  "city": "CENTER POINT",
  "zip": "35215",
  "loc": {
    "y": 33.635447,
    "x": 86.693197
  },
  "pop": 43862,
  "state": "AL"
},{
  "city": "ARLEY",
  "zip": "35541",
  "loc": {
    "y": 34.063234,
    "x": 87.182761
  },
  "pop": 2645,
  "state": "AL"
},{
  "city": "CORDOVA",
  "zip": "35550",
  "loc": {
    "y": 33.768033,
    "x": 87.18406
  },
  "pop": 5273,
  "state": "AL"
},{
  "city": "BEAR CREEK",
  "zip": "35543",
  "loc": {
    "y": 34.213469,
    "x": 87.686083
  },
  "pop": 3748,
  "state": "AL"
},{
  "city": "ELDRIDGE",
  "zip": "35554",
  "loc": {
    "y": 33.931546,
    "x": 87.619397
  },
  "pop": 421,
  "state": "AL"
},{
  "city": "OAKMAN",
  "zip": "35579",
  "loc": {
    "y": 33.700174,
    "x": 87.368574
  },
  "pop": 3700,
  "state": "AL"
},{
  "city": "GUIN",
  "zip": "35563",
  "loc": {
    "y": 33.967624,
    "x": 87.90238
  },
  "pop": 3948,
  "state": "AL"
},{
  "city": "FLORENCE",
  "zip": "35630",
  "loc": {
    "y": 34.830547,
    "x": 87.655985
  },
  "pop": 38725,
  "state": "AL"
},{
  "city": "RALPH",
  "zip": "35480",
  "loc": {
    "y": 33.062868,
    "x": 87.744984
  },
  "pop": 927,
  "state": "AL"
},{
  "city": "HARTSELLE",
  "zip": "35640",
  "loc": {
    "y": 34.448206,
    "x": 86.924235
  },
  "pop": 17963,
  "state": "AL"
},{
  "city": "TOWNLEY",
  "zip": "35587",
  "loc": {
    "y": 33.84702,
    "x": 87.437248
  },
  "pop": 1819,
  "state": "AL"
},{
  "city": "WOODVILLE",
  "zip": "35776",
  "loc": {
    "y": 34.668927,
    "x": 86.22961
  },
  "pop": 2222,
  "state": "AL"
},{
  "city": "DECATUR",
  "zip": "35601",
  "loc": {
    "y": 34.589599,
    "x": 86.98868
  },
  "pop": 36696,
  "state": "AL"
},{
  "city": "BOAZ",
  "zip": "35957",
  "loc": {
    "y": 34.173686,
    "x": 86.148003
  },
  "pop": 16955,
  "state": "AL"
},{
  "city": "LESTER",
  "zip": "35647",
  "loc": {
    "y": 34.918364,
    "x": 87.143396
  },
  "pop": 3108,
  "state": "AL"
},{
  "city": "MENTONE",
  "zip": "35984",
  "loc": {
    "y": 34.587236,
    "x": 85.577728
  },
  "pop": 2099,
  "state": "AL"
},{
  "city": "ARDMORE",
  "zip": "35739",
  "loc": {
    "y": 34.980447,
    "x": 86.834612
  },
  "pop": 1898,
  "state": "AL"
},{
  "city": "FORT DEPOSIT",
  "zip": "36032",
  "loc": {
    "y": 31.995979,
    "x": 86.576142
  },
  "pop": 2435,
  "state": "AL"
},{
  "city": "TONEY",
  "zip": "35773",
  "loc": {
    "y": 34.911644,
    "x": 86.699951
  },
  "pop": 5953,
  "state": "AL"
},{
  "city": "MAXWELL A F B",
  "zip": "36113",
  "loc": {
    "y": 32.388133,
    "x": 86.355848
  },
  "pop": 2788,
  "state": "AL"
},{
  "city": "STEVENSON",
  "zip": "35772",
  "loc": {
    "y": 34.876885,
    "x": 85.850803
  },
  "pop": 5210,
  "state": "AL"
},{
  "city": "MONTGOMERY",
  "zip": "36104",
  "loc": {
    "y": 32.373037,
    "x": 86.308129
  },
  "pop": 17086,
  "state": "AL"
},{
  "city": "SOUTHSIDE",
  "zip": "35901",
  "loc": {
    "y": 33.997248,
    "x": 86.010279
  },
  "pop": 44165,
  "state": "AL"
},{
  "city": "ASHFORD",
  "zip": "36312",
  "loc": {
    "y": 31.1888,
    "x": 85.253488
  },
  "pop": 5115,
  "state": "AL"
},{
  "city": "LENOX",
  "zip": "36454",
  "loc": {
    "y": 31.327261,
    "x": 87.19671
  },
  "pop": 515,
  "state": "AL"
},{
  "city": "SNEAD",
  "zip": "35952",
  "loc": {
    "y": 34.042916,
    "x": 86.350879
  },
  "pop": 9472,
  "state": "AL"
},{
  "city": "REPTON",
  "zip": "36475",
  "loc": {
    "y": 31.425569,
    "x": 87.172039
  },
  "pop": 1750,
  "state": "AL"
},{
  "city": "CECIL",
  "zip": "36013",
  "loc": {
    "y": 32.300891,
    "x": 86.011241
  },
  "pop": 407,
  "state": "AL"
},{
  "city": "CITRONELLE",
  "zip": "36522",
  "loc": {
    "y": 31.042533,
    "x": 88.254949
  },
  "pop": 7233,
  "state": "AL"
},{
  "city": "HAYNEVILLE",
  "zip": "36040",
  "loc": {
    "y": 32.195707,
    "x": 86.654994
  },
  "pop": 5010,
  "state": "AL"
},{
  "city": "DEER PARK",
  "zip": "36529",
  "loc": {
    "y": 31.184892,
    "x": 88.32731
  },
  "pop": 723,
  "state": "AL"
},{
  "city": "TROY",
  "zip": "36081",
  "loc": {
    "y": 31.794471,
    "x": 85.965493
  },
  "pop": 19358,
  "state": "AL"
},{
  "city": "ROBERTSDALE",
  "zip": "36567",
  "loc": {
    "y": 30.561608,
    "x": 87.637268
  },
  "pop": 3519,
  "state": "AL"
},{
  "city": "ALEXANDRIA",
  "zip": "36250",
  "loc": {
    "y": 33.780785,
    "x": 85.892447
  },
  "pop": 5776,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36695",
  "loc": {
    "y": 30.647431,
    "x": 88.229245
  },
  "pop": 21467,
  "state": "AL"
},{
  "city": "NEWELL",
  "zip": "36270",
  "loc": {
    "y": 33.440172,
    "x": 85.505925
  },
  "pop": 2407,
  "state": "AL"
},{
  "city": "JACKSONVILLE",
  "zip": "36265",
  "loc": {
    "y": 33.830966,
    "x": 85.77518
  },
  "pop": 16438,
  "state": "AL"
},{
  "city": "GENEVA",
  "zip": "36340",
  "loc": {
    "y": 31.041445,
    "x": 85.884748
  },
  "pop": 5471,
  "state": "AL"
},{
  "city": "SAMSON",
  "zip": "36477",
  "loc": {
    "y": 31.104918,
    "x": 86.067416
  },
  "pop": 4790,
  "state": "AL"
},{
  "city": "URIAH",
  "zip": "36480",
  "loc": {
    "y": 31.313467,
    "x": 87.570518
  },
  "pop": 1648,
  "state": "AL"
},{
  "city": "FOLEY",
  "zip": "36535",
  "loc": {
    "y": 30.400664,
    "x": 87.685737
  },
  "pop": 8520,
  "state": "AL"
},{
  "city": "LITTLE RIVER",
  "zip": "36550",
  "loc": {
    "y": 31.22459,
    "x": 87.754796
  },
  "pop": 649,
  "state": "AL"
},{
  "city": "BROOKLEY FIELD",
  "zip": "36615",
  "loc": {
    "y": 30.631199,
    "x": 88.068871
  },
  "pop": 864,
  "state": "AL"
},{
  "city": "TIBBIE",
  "zip": "36583",
  "loc": {
    "y": 31.373742,
    "x": 88.266828
  },
  "pop": 327,
  "state": "AL"
},{
  "city": "KELLYTON",
  "zip": "35089",
  "loc": {
    "y": 32.979068,
    "x": 86.048397
  },
  "pop": 1584,
  "state": "AL"
},{
  "city": "JOPPA",
  "zip": "35087",
  "loc": {
    "y": 34.283739,
    "x": 86.551939
  },
  "pop": 987,
  "state": "AL"
},{
  "city": "STERRETT",
  "zip": "35147",
  "loc": {
    "y": 33.446103,
    "x": 86.491732
  },
  "pop": 617,
  "state": "AL"
},{
  "city": "VANDIVER",
  "zip": "35176",
  "loc": {
    "y": 33.480704,
    "x": 86.501278
  },
  "pop": 1066,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35222",
  "loc": {
    "y": 33.521859,
    "x": 86.766579
  },
  "pop": 10035,
  "state": "AL"
},{
  "city": "CRESTLINE HEIGHT",
  "zip": "35213",
  "loc": {
    "y": 33.508195,
    "x": 86.742108
  },
  "pop": 13191,
  "state": "AL"
},{
  "city": "CENTER POINT",
  "zip": "35235",
  "loc": {
    "y": 33.618045,
    "x": 86.661051
  },
  "pop": 15873,
  "state": "AL"
},{
  "city": "HOLT",
  "zip": "35404",
  "loc": {
    "y": 33.210914,
    "x": 87.488079
  },
  "pop": 21997,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35218",
  "loc": {
    "y": 33.505972,
    "x": 86.892993
  },
  "pop": 12137,
  "state": "AL"
},{
  "city": "GAINESVILLE",
  "zip": "35464",
  "loc": {
    "y": 32.908364,
    "x": 88.271558
  },
  "pop": 1051,
  "state": "AL"
},{
  "city": "ADDISON",
  "zip": "35540",
  "loc": {
    "y": 34.205571,
    "x": 87.194766
  },
  "pop": 3263,
  "state": "AL"
},{
  "city": "DETROIT",
  "zip": "35552",
  "loc": {
    "y": 34.010874,
    "x": 88.16063
  },
  "pop": 938,
  "state": "AL"
},{
  "city": "MOULTON",
  "zip": "35650",
  "loc": {
    "y": 34.505836,
    "x": 87.222385
  },
  "pop": 17288,
  "state": "AL"
},{
  "city": "TANNER",
  "zip": "35671",
  "loc": {
    "y": 34.713037,
    "x": 86.989152
  },
  "pop": 2578,
  "state": "AL"
},{
  "city": "HOLLYTREE",
  "zip": "35751",
  "loc": {
    "y": 34.798979,
    "x": 86.233627
  },
  "pop": 260,
  "state": "AL"
},{
  "city": "SECTION",
  "zip": "35771",
  "loc": {
    "y": 34.543275,
    "x": 85.994002
  },
  "pop": 2590,
  "state": "AL"
},{
  "city": "HUNTSVILLE",
  "zip": "35811",
  "loc": {
    "y": 34.778949,
    "x": 86.543786
  },
  "pop": 19008,
  "state": "AL"
},{
  "city": "HUNTSVILLE",
  "zip": "35806",
  "loc": {
    "y": 34.744765,
    "x": 86.670411
  },
  "pop": 10121,
  "state": "AL"
},{
  "city": "AUTAUGAVILLE",
  "zip": "36003",
  "loc": {
    "y": 32.462462,
    "x": 86.714938
  },
  "pop": 2641,
  "state": "AL"
},{
  "city": "FORT DAVIS",
  "zip": "36031",
  "loc": {
    "y": 32.28945,
    "x": 85.700688
  },
  "pop": 891,
  "state": "AL"
},{
  "city": "GANTT",
  "zip": "36038",
  "loc": {
    "y": 31.416909,
    "x": 86.419836
  },
  "pop": 3298,
  "state": "AL"
},{
  "city": "PRATTVILLE",
  "zip": "36066",
  "loc": {
    "y": 32.478695,
    "x": 86.42997
  },
  "pop": 11059,
  "state": "AL"
},{
  "city": "FORT MC CLELLAN",
  "zip": "36205",
  "loc": {
    "y": 33.710168,
    "x": 85.801467
  },
  "pop": 4128,
  "state": "AL"
},{
  "city": "WELLINGTON",
  "zip": "36279",
  "loc": {
    "y": 33.863843,
    "x": 85.915325
  },
  "pop": 2137,
  "state": "AL"
},{
  "city": "SHORTERVILLE",
  "zip": "36373",
  "loc": {
    "y": 31.625627,
    "x": 85.14584
  },
  "pop": 2503,
  "state": "AL"
},{
  "city": "EVERGREEN",
  "zip": "36401",
  "loc": {
    "y": 31.458009,
    "x": 86.925771
  },
  "pop": 8556,
  "state": "AL"
},{
  "city": "FLOMATON",
  "zip": "36441",
  "loc": {
    "y": 31.040233,
    "x": 87.266365
  },
  "pop": 3585,
  "state": "AL"
},{
  "city": "PETERMAN",
  "zip": "36471",
  "loc": {
    "y": 31.589953,
    "x": 87.259984
  },
  "pop": 1826,
  "state": "AL"
},{
  "city": "ATMORE",
  "zip": "36502",
  "loc": {
    "y": 31.057245,
    "x": 87.487347
  },
  "pop": 15948,
  "state": "AL"
},{
  "city": "LOXLEY",
  "zip": "36551",
  "loc": {
    "y": 30.617964,
    "x": 87.75624
  },
  "pop": 2712,
  "state": "AL"
},{
  "city": "WAGARVILLE",
  "zip": "36585",
  "loc": {
    "y": 31.410205,
    "x": 88.070519
  },
  "pop": 1681,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36608",
  "loc": {
    "y": 30.69636,
    "x": 88.187784
  },
  "pop": 37600,
  "state": "AL"
},{
  "city": "CAMDEN",
  "zip": "36726",
  "loc": {
    "y": 32.004732,
    "x": 87.295049
  },
  "pop": 4948,
  "state": "AL"
},{
  "city": "HUEYTOWN",
  "zip": "35023",
  "loc": {
    "y": 33.414625,
    "x": 86.999607
  },
  "pop": 39677,
  "state": "AL"
},{
  "city": "COOSA PINES",
  "zip": "35044",
  "loc": {
    "y": 33.266928,
    "x": 86.337622
  },
  "pop": 7985,
  "state": "AL"
},{
  "city": "PLEASANT GROVE",
  "zip": "35127",
  "loc": {
    "y": 33.488336,
    "x": 86.976586
  },
  "pop": 8458,
  "state": "AL"
},{
  "city": "ODENVILLE",
  "zip": "35120",
  "loc": {
    "y": 33.675611,
    "x": 86.408952
  },
  "pop": 1123,
  "state": "AL"
},{
  "city": "INDIAN SPRINGS",
  "zip": "35124",
  "loc": {
    "y": 33.31046,
    "x": 86.806176
  },
  "pop": 7412,
  "state": "AL"
},{
  "city": "DECATUR",
  "zip": "35603",
  "loc": {
    "y": 34.548417,
    "x": 87.000389
  },
  "pop": 17861,
  "state": "AL"
},{
  "city": "DANVILLE",
  "zip": "35619",
  "loc": {
    "y": 34.452189,
    "x": 87.053187
  },
  "pop": 4614,
  "state": "AL"
},{
  "city": "TRINITY",
  "zip": "35673",
  "loc": {
    "y": 34.591771,
    "x": 87.09127
  },
  "pop": 1758,
  "state": "AL"
},{
  "city": "HUNTSVILLE",
  "zip": "35803",
  "loc": {
    "y": 34.620506,
    "x": 86.55096
  },
  "pop": 23380,
  "state": "AL"
},{
  "city": "ASHVILLE",
  "zip": "35953",
  "loc": {
    "y": 33.837366,
    "x": 86.255167
  },
  "pop": 5988,
  "state": "AL"
},{
  "city": "GAYLESVILLE",
  "zip": "35973",
  "loc": {
    "y": 34.357324,
    "x": 85.558893
  },
  "pop": 2291,
  "state": "AL"
},{
  "city": "CLAYTON",
  "zip": "36016",
  "loc": {
    "y": 31.887413,
    "x": 85.450932
  },
  "pop": 3106,
  "state": "AL"
},{
  "city": "ELMORE",
  "zip": "36025",
  "loc": {
    "y": 32.545378,
    "x": 86.316134
  },
  "pop": 3114,
  "state": "AL"
},{
  "city": "MILLBROOK",
  "zip": "36054",
  "loc": {
    "y": 32.499485,
    "x": 86.364125
  },
  "pop": 9049,
  "state": "AL"
},{
  "city": "TUSKEGEE INSTITU",
  "zip": "36088",
  "loc": {
    "y": 32.417699,
    "x": 85.714848
  },
  "pop": 6915,
  "state": "AL"
},{
  "city": "MONTGOMERY",
  "zip": "36111",
  "loc": {
    "y": 32.337363,
    "x": 86.271543
  },
  "pop": 11600,
  "state": "AL"
},{
  "city": "MONTGOMERY",
  "zip": "36116",
  "loc": {
    "y": 32.312943,
    "x": 86.242056
  },
  "pop": 32314,
  "state": "AL"
},{
  "city": "CRAGFORD",
  "zip": "36255",
  "loc": {
    "y": 33.217148,
    "x": 85.710797
  },
  "pop": 796,
  "state": "AL"
},{
  "city": "OHATCHEE",
  "zip": "36271",
  "loc": {
    "y": 33.778779,
    "x": 86.025357
  },
  "pop": 3369,
  "state": "AL"
},{
  "city": "WOODLAND",
  "zip": "36280",
  "loc": {
    "y": 33.355453,
    "x": 85.353768
  },
  "pop": 2291,
  "state": "AL"
},{
  "city": "NAPIER FIELD",
  "zip": "36303",
  "loc": {
    "y": 31.255239,
    "x": 85.412462
  },
  "pop": 32407,
  "state": "AL"
},{
  "city": "ARITON",
  "zip": "36311",
  "loc": {
    "y": 31.582996,
    "x": 85.707716
  },
  "pop": 1434,
  "state": "AL"
},{
  "city": "BLACK",
  "zip": "36314",
  "loc": {
    "y": 31.01318,
    "x": 85.745634
  },
  "pop": 183,
  "state": "AL"
},{
  "city": "HEADLAND",
  "zip": "36345",
  "loc": {
    "y": 31.353406,
    "x": 85.332277
  },
  "pop": 4595,
  "state": "AL"
},{
  "city": "SKIPPERVILLE",
  "zip": "36374",
  "loc": {
    "y": 31.551588,
    "x": 85.549578
  },
  "pop": 1048,
  "state": "AL"
},{
  "city": "RED LEVEL",
  "zip": "36474",
  "loc": {
    "y": 31.439931,
    "x": 86.61209
  },
  "pop": 2005,
  "state": "AL"
},{
  "city": "AXIS",
  "zip": "36505",
  "loc": {
    "y": 31.006817,
    "x": 88.04274
  },
  "pop": 140,
  "state": "AL"
},{
  "city": "DAUPHIN ISLAND",
  "zip": "36528",
  "loc": {
    "y": 30.252057,
    "x": 88.109644
  },
  "pop": 824,
  "state": "AL"
},{
  "city": "FRUITDALE",
  "zip": "36539",
  "loc": {
    "y": 31.348843,
    "x": 88.376597
  },
  "pop": 848,
  "state": "AL"
},{
  "city": "MAGNOLIA SPRINGS",
  "zip": "36555",
  "loc": {
    "y": 30.394497,
    "x": 87.785781
  },
  "pop": 1088,
  "state": "AL"
},{
  "city": "SILVERHILL",
  "zip": "36576",
  "loc": {
    "y": 30.522237,
    "x": 87.745676
  },
  "pop": 8001,
  "state": "AL"
},{
  "city": "FORT MORGAN",
  "zip": "36542",
  "loc": {
    "y": 30.268954,
    "x": 87.712795
  },
  "pop": 4930,
  "state": "AL"
},{
  "city": "CALERA",
  "zip": "35040",
  "loc": {
    "y": 33.1098,
    "x": 86.755987
  },
  "pop": 4675,
  "state": "AL"
},{
  "city": "NEW SITE",
  "zip": "35010",
  "loc": {
    "y": 32.941445,
    "x": 85.951086
  },
  "pop": 19942,
  "state": "AL"
},{
  "city": "GOODWATER",
  "zip": "35072",
  "loc": {
    "y": 33.074642,
    "x": 86.078149
  },
  "pop": 3813,
  "state": "AL"
},{
  "city": "MOUNT OLIVE",
  "zip": "35117",
  "loc": {
    "y": 33.67678,
    "x": 86.87171
  },
  "pop": 3841,
  "state": "AL"
},{
  "city": "SHELBY",
  "zip": "35143",
  "loc": {
    "y": 33.078483,
    "x": 86.553606
  },
  "pop": 1846,
  "state": "AL"
},{
  "city": "ONEONTA",
  "zip": "35121",
  "loc": {
    "y": 33.925858,
    "x": 86.474118
  },
  "pop": 8956,
  "state": "AL"
},{
  "city": "WILSONVILLE",
  "zip": "35186",
  "loc": {
    "y": 33.229255,
    "x": 86.529894
  },
  "pop": 5224,
  "state": "AL"
},{
  "city": "ECHOLA",
  "zip": "35457",
  "loc": {
    "y": 33.316559,
    "x": 87.807202
  },
  "pop": 223,
  "state": "AL"
},{
  "city": "EPES",
  "zip": "35460",
  "loc": {
    "y": 32.763371,
    "x": 88.161443
  },
  "pop": 1391,
  "state": "AL"
},{
  "city": "BANKSTON",
  "zip": "35542",
  "loc": {
    "y": 33.70083,
    "x": 87.68965
  },
  "pop": 651,
  "state": "AL"
},{
  "city": "HACKLEBURG",
  "zip": "35564",
  "loc": {
    "y": 34.267803,
    "x": 87.860762
  },
  "pop": 2828,
  "state": "AL"
},{
  "city": "SPRUCE PINE",
  "zip": "35585",
  "loc": {
    "y": 34.384796,
    "x": 87.712149
  },
  "pop": 465,
  "state": "AL"
},{
  "city": "NAUVOO",
  "zip": "35578",
  "loc": {
    "y": 33.929859,
    "x": 87.432449
  },
  "pop": 5004,
  "state": "AL"
},{
  "city": "SHEFFIELD",
  "zip": "35660",
  "loc": {
    "y": 34.757829,
    "x": 87.697057
  },
  "pop": 10685,
  "state": "AL"
},{
  "city": "GURLEY",
  "zip": "35748",
  "loc": {
    "y": 34.713964,
    "x": 86.394028
  },
  "pop": 4642,
  "state": "AL"
},{
  "city": "HARVEST",
  "zip": "35749",
  "loc": {
    "y": 34.82732,
    "x": 86.749929
  },
  "pop": 5701,
  "state": "AL"
},{
  "city": "HUNTSVILLE",
  "zip": "35808",
  "loc": {
    "y": 34.684525,
    "x": 86.653821
  },
  "pop": 4988,
  "state": "AL"
},{
  "city": "LEESBURG",
  "zip": "35983",
  "loc": {
    "y": 34.191083,
    "x": 85.77051
  },
  "pop": 3189,
  "state": "AL"
},{
  "city": "GOSHEN",
  "zip": "36035",
  "loc": {
    "y": 31.82497,
    "x": 86.104851
  },
  "pop": 2056,
  "state": "AL"
},{
  "city": "HIGHLAND HOME",
  "zip": "36041",
  "loc": {
    "y": 31.928292,
    "x": 86.297111
  },
  "pop": 3068,
  "state": "AL"
},{
  "city": "WEAVER",
  "zip": "36277",
  "loc": {
    "y": 33.756286,
    "x": 85.810666
  },
  "pop": 7453,
  "state": "AL"
},{
  "city": "NEW BROCKTON",
  "zip": "36351",
  "loc": {
    "y": 31.36898,
    "x": 85.940386
  },
  "pop": 1809,
  "state": "AL"
},{
  "city": "COTTONWOOD",
  "zip": "36320",
  "loc": {
    "y": 31.098934,
    "x": 85.375665
  },
  "pop": 8517,
  "state": "AL"
},{
  "city": "SLOCOMB",
  "zip": "36375",
  "loc": {
    "y": 31.095558,
    "x": 85.582954
  },
  "pop": 4504,
  "state": "AL"
},{
  "city": "FULTON",
  "zip": "36446",
  "loc": {
    "y": 31.790947,
    "x": 87.708065
  },
  "pop": 2163,
  "state": "AL"
},{
  "city": "SPANISH FORT",
  "zip": "36527",
  "loc": {
    "y": 30.695852,
    "x": 87.88668
  },
  "pop": 5486,
  "state": "AL"
},{
  "city": "JACKSON",
  "zip": "36545",
  "loc": {
    "y": 31.513098,
    "x": 87.867192
  },
  "pop": 9679,
  "state": "AL"
},{
  "city": "WILMER",
  "zip": "36587",
  "loc": {
    "y": 30.813745,
    "x": 88.333196
  },
  "pop": 5905,
  "state": "AL"
},{
  "city": "EIGHT MILE",
  "zip": "36613",
  "loc": {
    "y": 30.795074,
    "x": 88.182311
  },
  "pop": 13517,
  "state": "AL"
},{
  "city": "WALKER SPRINGS",
  "zip": "36586",
  "loc": {
    "y": 31.626166,
    "x": 87.835355
  },
  "pop": 1001,
  "state": "AL"
},{
  "city": "ALPINE",
  "zip": "35014",
  "loc": {
    "y": 33.331165,
    "x": 86.208934
  },
  "pop": 3062,
  "state": "AL"
},{
  "city": "BESSEMER",
  "zip": "35020",
  "loc": {
    "y": 33.409002,
    "x": 86.947547
  },
  "pop": 40549,
  "state": "AL"
},{
  "city": "DOLOMITE",
  "zip": "35061",
  "loc": {
    "y": 33.465424,
    "x": 86.956435
  },
  "pop": 1476,
  "state": "AL"
},{
  "city": "MAYLENE",
  "zip": "35114",
  "loc": {
    "y": 33.231694,
    "x": 86.872745
  },
  "pop": 3727,
  "state": "AL"
},{
  "city": "SYLVAN SPRINGS",
  "zip": "35118",
  "loc": {
    "y": 33.540696,
    "x": 87.043998
  },
  "pop": 3948,
  "state": "AL"
},{
  "city": "TRUSSVILLE",
  "zip": "35173",
  "loc": {
    "y": 33.633932,
    "x": 86.598068
  },
  "pop": 13367,
  "state": "AL"
},{
  "city": "WEST BLOCTON",
  "zip": "35184",
  "loc": {
    "y": 33.142431,
    "x": 87.13694
  },
  "pop": 5276,
  "state": "AL"
},{
  "city": "VINCENT",
  "zip": "35178",
  "loc": {
    "y": 33.401049,
    "x": 86.399425
  },
  "pop": 295,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35208",
  "loc": {
    "y": 33.497658,
    "x": 86.879884
  },
  "pop": 19328,
  "state": "AL"
},{
  "city": "TUSCALOOSA",
  "zip": "35406",
  "loc": {
    "y": 33.272174,
    "x": 87.536035
  },
  "pop": 12578,
  "state": "AL"
},{
  "city": "BROOKWOOD",
  "zip": "35444",
  "loc": {
    "y": 33.277523,
    "x": 87.309025
  },
  "pop": 2319,
  "state": "AL"
},{
  "city": "FOSTERS",
  "zip": "35463",
  "loc": {
    "y": 33.135859,
    "x": 87.735688
  },
  "pop": 2100,
  "state": "AL"
},{
  "city": "BRILLIANT",
  "zip": "35548",
  "loc": {
    "y": 34.037702,
    "x": 87.756315
  },
  "pop": 2515,
  "state": "AL"
},{
  "city": "COURTLAND",
  "zip": "35618",
  "loc": {
    "y": 34.671866,
    "x": 87.314255
  },
  "pop": 2733,
  "state": "AL"
},{
  "city": "NEW MARKET",
  "zip": "35761",
  "loc": {
    "y": 34.899991,
    "x": 86.448742
  },
  "pop": 5825,
  "state": "AL"
},{
  "city": "HUNTSVILLE",
  "zip": "35801",
  "loc": {
    "y": 34.726866,
    "x": 86.567318
  },
  "pop": 25513,
  "state": "AL"
},{
  "city": "VALHERMOSO SPRIN",
  "zip": "35775",
  "loc": {
    "y": 34.538145,
    "x": 86.678
  },
  "pop": 667,
  "state": "AL"
},{
  "city": "HOKES BLUFF",
  "zip": "35903",
  "loc": {
    "y": 33.997057,
    "x": 85.928724
  },
  "pop": 20057,
  "state": "AL"
},{
  "city": "FLAT ROCK",
  "zip": "35966",
  "loc": {
    "y": 34.807598,
    "x": 85.708372
  },
  "pop": 2141,
  "state": "AL"
},{
  "city": "HENAGAR",
  "zip": "35978",
  "loc": {
    "y": 34.618604,
    "x": 85.727381
  },
  "pop": 2973,
  "state": "AL"
},{
  "city": "IDER",
  "zip": "35981",
  "loc": {
    "y": 34.735059,
    "x": 85.641577
  },
  "pop": 5161,
  "state": "AL"
},{
  "city": "EQUALITY",
  "zip": "36026",
  "loc": {
    "y": 32.813908,
    "x": 86.105064
  },
  "pop": 1121,
  "state": "AL"
},{
  "city": "FOREST HOME",
  "zip": "36030",
  "loc": {
    "y": 31.85318,
    "x": 86.786377
  },
  "pop": 1528,
  "state": "AL"
},{
  "city": "MIDWAY",
  "zip": "36053",
  "loc": {
    "y": 32.09552,
    "x": 85.531523
  },
  "pop": 1873,
  "state": "AL"
},{
  "city": "DAVISTON",
  "zip": "36256",
  "loc": {
    "y": 33.033471,
    "x": 85.753831
  },
  "pop": 2334,
  "state": "AL"
},{
  "city": "MONTGOMERY",
  "zip": "36107",
  "loc": {
    "y": 32.380405,
    "x": 86.279885
  },
  "pop": 10345,
  "state": "AL"
},{
  "city": "NEWVILLE",
  "zip": "36353",
  "loc": {
    "y": 31.440295,
    "x": 85.328741
  },
  "pop": 1525,
  "state": "AL"
},{
  "city": "COY",
  "zip": "36435",
  "loc": {
    "y": 31.888851,
    "x": 87.392558
  },
  "pop": 1109,
  "state": "AL"
},{
  "city": "CHATOM",
  "zip": "36518",
  "loc": {
    "y": 31.487638,
    "x": 88.269887
  },
  "pop": 3094,
  "state": "AL"
},{
  "city": "CHUNCHULA",
  "zip": "36521",
  "loc": {
    "y": 30.991178,
    "x": 88.131126
  },
  "pop": 1322,
  "state": "AL"
},{
  "city": "LILLIAN",
  "zip": "36549",
  "loc": {
    "y": 30.39724,
    "x": 87.474452
  },
  "pop": 3833,
  "state": "AL"
},{
  "city": "SALITPA",
  "zip": "36570",
  "loc": {
    "y": 31.654667,
    "x": 87.959618
  },
  "pop": 896,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36607",
  "loc": {
    "y": 30.697486,
    "x": 88.1029
  },
  "pop": 8610,
  "state": "AL"
},{
  "city": "VINEGAR BEND",
  "zip": "36584",
  "loc": {
    "y": 31.25841,
    "x": 88.386466
  },
  "pop": 475,
  "state": "AL"
},{
  "city": "PRICHARD",
  "zip": "36610",
  "loc": {
    "y": 30.737846,
    "x": 88.083761
  },
  "pop": 24919,
  "state": "AL"
},{
  "city": "CHICKASAW",
  "zip": "36611",
  "loc": {
    "y": 30.766821,
    "x": 88.084973
  },
  "pop": 6660,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36693",
  "loc": {
    "y": 30.631076,
    "x": 88.158843
  },
  "pop": 17704,
  "state": "AL"
},{
  "city": "CAMPBELL",
  "zip": "36727",
  "loc": {
    "y": 31.963512,
    "x": 88.006072
  },
  "pop": 392,
  "state": "AL"
},{
  "city": "CATHERINE",
  "zip": "36728",
  "loc": {
    "y": 32.182,
    "x": 87.483623
  },
  "pop": 366,
  "state": "AL"
},{
  "city": "KEYSTONE",
  "zip": "35007",
  "loc": {
    "y": 33.236868,
    "x": 86.812861
  },
  "pop": 14218,
  "state": "AL"
},{
  "city": "COLUMBIANA",
  "zip": "35051",
  "loc": {
    "y": 33.176964,
    "x": 86.616145
  },
  "pop": 4486,
  "state": "AL"
},{
  "city": "LOGAN",
  "zip": "35098",
  "loc": {
    "y": 34.184079,
    "x": 87.038115
  },
  "pop": 2379,
  "state": "AL"
},{
  "city": "REMLAP",
  "zip": "35133",
  "loc": {
    "y": 33.846204,
    "x": 86.641662
  },
  "pop": 6013,
  "state": "AL"
},{
  "city": "WOODSTOCK",
  "zip": "35188",
  "loc": {
    "y": 33.169808,
    "x": 87.163469
  },
  "pop": 691,
  "state": "AL"
},{
  "city": "COKER",
  "zip": "35452",
  "loc": {
    "y": 33.252612,
    "x": 87.636528
  },
  "pop": 5747,
  "state": "AL"
},{
  "city": "ELROD",
  "zip": "35458",
  "loc": {
    "y": 33.343678,
    "x": 87.801429
  },
  "pop": 809,
  "state": "AL"
},{
  "city": "VERNON",
  "zip": "35592",
  "loc": {
    "y": 33.761285,
    "x": 88.097919
  },
  "pop": 4752,
  "state": "AL"
},{
  "city": "HUNTSVILLE",
  "zip": "35824",
  "loc": {
    "y": 34.658321,
    "x": 86.729486
  },
  "pop": 770,
  "state": "AL"
},{
  "city": "COLLINSVILLE",
  "zip": "35961",
  "loc": {
    "y": 34.267957,
    "x": 85.861969
  },
  "pop": 3245,
  "state": "AL"
},{
  "city": "HORTON",
  "zip": "35980",
  "loc": {
    "y": 34.190033,
    "x": 86.317318
  },
  "pop": 4195,
  "state": "AL"
},{
  "city": "PIKE ROAD",
  "zip": "36064",
  "loc": {
    "y": 32.335705,
    "x": 86.09589
  },
  "pop": 3398,
  "state": "AL"
},{
  "city": "PRATTVILLE",
  "zip": "36067",
  "loc": {
    "y": 32.471501,
    "x": 86.483072
  },
  "pop": 16536,
  "state": "AL"
},{
  "city": "LOUISVILLE",
  "zip": "36048",
  "loc": {
    "y": 31.794262,
    "x": 85.558062
  },
  "pop": 2279,
  "state": "AL"
},{
  "city": "OXFORD",
  "zip": "36203",
  "loc": {
    "y": 33.596829,
    "x": 85.83347
  },
  "pop": 12407,
  "state": "AL"
},{
  "city": "HARTFORD",
  "zip": "36344",
  "loc": {
    "y": 31.08598,
    "x": 85.719204
  },
  "pop": 4819,
  "state": "AL"
},{
  "city": "CASTLEBERRY",
  "zip": "36432",
  "loc": {
    "y": 31.326113,
    "x": 87.026754
  },
  "pop": 2881,
  "state": "AL"
},{
  "city": "DICKINSON",
  "zip": "36436",
  "loc": {
    "y": 31.717167,
    "x": 87.656929
  },
  "pop": 272,
  "state": "AL"
},{
  "city": "CREOLA",
  "zip": "36525",
  "loc": {
    "y": 30.901267,
    "x": 88.017414
  },
  "pop": 2569,
  "state": "AL"
},{
  "city": "MC INTOSH",
  "zip": "36553",
  "loc": {
    "y": 31.236108,
    "x": 88.051102
  },
  "pop": 4211,
  "state": "AL"
},{
  "city": "ORANGE BEACH",
  "zip": "36561",
  "loc": {
    "y": 30.290596,
    "x": 87.555888
  },
  "pop": 2549,
  "state": "AL"
},{
  "city": "SEMINOLE",
  "zip": "36574",
  "loc": {
    "y": 30.504806,
    "x": 87.465938
  },
  "pop": 606,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36602",
  "loc": {
    "y": 30.688828,
    "x": 88.045308
  },
  "pop": 1263,
  "state": "AL"
},{
  "city": "BRIERFIELD",
  "zip": "35035",
  "loc": {
    "y": 33.042747,
    "x": 86.951672
  },
  "pop": 1282,
  "state": "AL"
},{
  "city": "BREMEN",
  "zip": "35033",
  "loc": {
    "y": 33.973664,
    "x": 87.004281
  },
  "pop": 3448,
  "state": "AL"
},{
  "city": "CLANTON",
  "zip": "35045",
  "loc": {
    "y": 32.835532,
    "x": 86.642472
  },
  "pop": 13990,
  "state": "AL"
},{
  "city": "CROPWELL",
  "zip": "35054",
  "loc": {
    "y": 33.506448,
    "x": 86.280026
  },
  "pop": 4171,
  "state": "AL"
},{
  "city": "HAYDEN",
  "zip": "35079",
  "loc": {
    "y": 33.885806,
    "x": 86.81767
  },
  "pop": 6533,
  "state": "AL"
},{
  "city": "LEEDS",
  "zip": "35094",
  "loc": {
    "y": 33.528333,
    "x": 86.574824
  },
  "pop": 10421,
  "state": "AL"
},{
  "city": "LINCOLN",
  "zip": "35096",
  "loc": {
    "y": 33.605913,
    "x": 86.111152
  },
  "pop": 5033,
  "state": "AL"
},{
  "city": "SUMITON",
  "zip": "35148",
  "loc": {
    "y": 33.768005,
    "x": 87.044545
  },
  "pop": 3066,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35204",
  "loc": {
    "y": 33.51795,
    "x": 86.837198
  },
  "pop": 18193,
  "state": "AL"
},{
  "city": "MOUNTAIN BROOK",
  "zip": "35223",
  "loc": {
    "y": 33.488726,
    "x": 86.736584
  },
  "pop": 11117,
  "state": "AL"
},{
  "city": "HODGES",
  "zip": "35571",
  "loc": {
    "y": 34.341664,
    "x": 87.959023
  },
  "pop": 798,
  "state": "AL"
},{
  "city": "ANDERSON",
  "zip": "35610",
  "loc": {
    "y": 34.951777,
    "x": 87.272327
  },
  "pop": 2039,
  "state": "AL"
},{
  "city": "FALKVILLE",
  "zip": "35622",
  "loc": {
    "y": 34.347653,
    "x": 86.913086
  },
  "pop": 5392,
  "state": "AL"
},{
  "city": "HILLSBORO",
  "zip": "35643",
  "loc": {
    "y": 34.64763,
    "x": 87.180379
  },
  "pop": 1967,
  "state": "AL"
},{
  "city": "MUSCLE SHOALS",
  "zip": "35661",
  "loc": {
    "y": 34.756136,
    "x": 87.630443
  },
  "pop": 11777,
  "state": "AL"
},{
  "city": "PAINT ROCK",
  "zip": "35764",
  "loc": {
    "y": 34.667122,
    "x": 86.332562
  },
  "pop": 553,
  "state": "AL"
},{
  "city": "CEDAR BLUFF",
  "zip": "35959",
  "loc": {
    "y": 34.241662,
    "x": 85.602567
  },
  "pop": 3574,
  "state": "AL"
},{
  "city": "DAWSON",
  "zip": "35963",
  "loc": {
    "y": 34.356838,
    "x": 85.929161
  },
  "pop": 1531,
  "state": "AL"
},{
  "city": "CLIO",
  "zip": "36017",
  "loc": {
    "y": 31.68521,
    "x": 85.590419
  },
  "pop": 3178,
  "state": "AL"
},{
  "city": "DEATSVILLE",
  "zip": "36022",
  "loc": {
    "y": 32.613405,
    "x": 86.338211
  },
  "pop": 5913,
  "state": "AL"
},{
  "city": "ECLECTIC",
  "zip": "36024",
  "loc": {
    "y": 32.65419,
    "x": 86.031614
  },
  "pop": 6105,
  "state": "AL"
},{
  "city": "HARDAWAY",
  "zip": "36039",
  "loc": {
    "y": 32.312939,
    "x": 85.883837
  },
  "pop": 354,
  "state": "AL"
},{
  "city": "FRANKVILLE",
  "zip": "36538",
  "loc": {
    "y": 31.64684,
    "x": 88.133185
  },
  "pop": 472,
  "state": "AL"
},{
  "city": "GAINESTOWN",
  "zip": "36540",
  "loc": {
    "y": 31.425822,
    "x": 87.682176
  },
  "pop": 301,
  "state": "AL"
},{
  "city": "SAINT STEPHENS",
  "zip": "36569",
  "loc": {
    "y": 31.533028,
    "x": 88.052094
  },
  "pop": 688,
  "state": "AL"
},{
  "city": "THEODORE",
  "zip": "36582",
  "loc": {
    "y": 30.544374,
    "x": 88.180748
  },
  "pop": 20185,
  "state": "AL"
},{
  "city": "CENTREVILLE",
  "zip": "35042",
  "loc": {
    "y": 32.950324,
    "x": 87.11924
  },
  "pop": 4902,
  "state": "AL"
},{
  "city": "DORA",
  "zip": "35062",
  "loc": {
    "y": 33.734947,
    "x": 87.040148
  },
  "pop": 11017,
  "state": "AL"
},{
  "city": "FAIRFIELD",
  "zip": "35064",
  "loc": {
    "y": 33.473494,
    "x": 86.918262
  },
  "pop": 12106,
  "state": "AL"
},{
  "city": "COALBURG",
  "zip": "35068",
  "loc": {
    "y": 33.611283,
    "x": 86.813614
  },
  "pop": 5909,
  "state": "AL"
},{
  "city": "MORRIS",
  "zip": "35116",
  "loc": {
    "y": 33.739172,
    "x": 86.772551
  },
  "pop": 3622,
  "state": "AL"
},{
  "city": "RIVERSIDE",
  "zip": "35135",
  "loc": {
    "y": 33.608832,
    "x": 86.198341
  },
  "pop": 1004,
  "state": "AL"
},{
  "city": "WARRIOR",
  "zip": "35180",
  "loc": {
    "y": 33.852862,
    "x": 86.819849
  },
  "pop": 530,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35205",
  "loc": {
    "y": 33.495144,
    "x": 86.805937
  },
  "pop": 23024,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35211",
  "loc": {
    "y": 33.481565,
    "x": 86.85904
  },
  "pop": 35836,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35221",
  "loc": {
    "y": 33.452316,
    "x": 86.893493
  },
  "pop": 5850,
  "state": "AL"
},{
  "city": "SHOAL CREEK",
  "zip": "35242",
  "loc": {
    "y": 33.401559,
    "x": 86.705511
  },
  "pop": 16228,
  "state": "AL"
},{
  "city": "TUSCALOOSA",
  "zip": "35405",
  "loc": {
    "y": 33.161704,
    "x": 87.514435
  },
  "pop": 23663,
  "state": "AL"
},{
  "city": "BOLIGEE",
  "zip": "35443",
  "loc": {
    "y": 32.774646,
    "x": 88.026652
  },
  "pop": 1073,
  "state": "AL"
},{
  "city": "ETHELSVILLE",
  "zip": "35461",
  "loc": {
    "y": 33.386816,
    "x": 88.221987
  },
  "pop": 719,
  "state": "AL"
},{
  "city": "BERRY",
  "zip": "35546",
  "loc": {
    "y": 33.694485,
    "x": 87.622563
  },
  "pop": 4887,
  "state": "AL"
},{
  "city": "LANGSTON",
  "zip": "35755",
  "loc": {
    "y": 34.497831,
    "x": 86.10563
  },
  "pop": 1041,
  "state": "AL"
},{
  "city": "LACEYS SPRING",
  "zip": "35754",
  "loc": {
    "y": 34.499647,
    "x": 86.612869
  },
  "pop": 7040,
  "state": "AL"
},{
  "city": "HUNTSVILLE",
  "zip": "35810",
  "loc": {
    "y": 34.778378,
    "x": 86.609063
  },
  "pop": 32896,
  "state": "AL"
},{
  "city": "GADSDEN",
  "zip": "35904",
  "loc": {
    "y": 34.021694,
    "x": 86.049479
  },
  "pop": 7002,
  "state": "AL"
},{
  "city": "CENTRE",
  "zip": "35960",
  "loc": {
    "y": 34.111592,
    "x": 85.609229
  },
  "pop": 10294,
  "state": "AL"
},{
  "city": "GUNTERSVILLE",
  "zip": "35976",
  "loc": {
    "y": 34.32193,
    "x": 86.305463
  },
  "pop": 11234,
  "state": "AL"
},{
  "city": "FYFFE",
  "zip": "35971",
  "loc": {
    "y": 34.437284,
    "x": 85.928849
  },
  "pop": 3453,
  "state": "AL"
},{
  "city": "EUFAULA",
  "zip": "36004",
  "loc": {
    "y": 31.786701,
    "x": 85.239657
  },
  "pop": 2669,
  "state": "AL"
},{
  "city": "GREENVILLE",
  "zip": "36037",
  "loc": {
    "y": 31.810036,
    "x": 86.622919
  },
  "pop": 15476,
  "state": "AL"
},{
  "city": "TITUS",
  "zip": "36080",
  "loc": {
    "y": 32.690019,
    "x": 86.239334
  },
  "pop": 2683,
  "state": "AL"
},{
  "city": "VERBENA",
  "zip": "36091",
  "loc": {
    "y": 32.759565,
    "x": 86.543753
  },
  "pop": 3702,
  "state": "AL"
},{
  "city": "MILLERVILLE",
  "zip": "36267",
  "loc": {
    "y": 33.158959,
    "x": 85.969001
  },
  "pop": 863,
  "state": "AL"
},{
  "city": "PIEDMONT",
  "zip": "36272",
  "loc": {
    "y": 33.838946,
    "x": 85.645997
  },
  "pop": 12921,
  "state": "AL"
},{
  "city": "WADLEY",
  "zip": "36276",
  "loc": {
    "y": 33.149192,
    "x": 85.551344
  },
  "pop": 1949,
  "state": "AL"
},{
  "city": "LINEVILLE",
  "zip": "36266",
  "loc": {
    "y": 33.328613,
    "x": 85.734609
  },
  "pop": 4345,
  "state": "AL"
},{
  "city": "COLUMBIA",
  "zip": "36319",
  "loc": {
    "y": 31.335235,
    "x": 85.145488
  },
  "pop": 2934,
  "state": "AL"
},{
  "city": "BIGBEE",
  "zip": "36510",
  "loc": {
    "y": 31.589072,
    "x": 88.165294
  },
  "pop": 264,
  "state": "AL"
},{
  "city": "SUMMERDALE",
  "zip": "36580",
  "loc": {
    "y": 30.475225,
    "x": 87.699183
  },
  "pop": 881,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36605",
  "loc": {
    "y": 30.634117,
    "x": 88.084646
  },
  "pop": 31621,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36609",
  "loc": {
    "y": 30.660527,
    "x": 88.161806
  },
  "pop": 23687,
  "state": "AL"
},{
  "city": "ALBERTA",
  "zip": "36720",
  "loc": {
    "y": 32.144889,
    "x": 87.342503
  },
  "pop": 1340,
  "state": "AL"
},{
  "city": "CHELSEA",
  "zip": "35043",
  "loc": {
    "y": 33.371582,
    "x": 86.614132
  },
  "pop": 4781,
  "state": "AL"
},{
  "city": "HANCEVILLE",
  "zip": "35077",
  "loc": {
    "y": 34.051569,
    "x": 86.784844
  },
  "pop": 10186,
  "state": "AL"
},{
  "city": "MC CALLA",
  "zip": "35111",
  "loc": {
    "y": 33.284546,
    "x": 87.102379
  },
  "pop": 8147,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35203",
  "loc": {
    "y": 33.520994,
    "x": 86.806626
  },
  "pop": 4064,
  "state": "AL"
},{
  "city": "VINEMONT",
  "zip": "35179",
  "loc": {
    "y": 34.262121,
    "x": 86.912512
  },
  "pop": 8852,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35224",
  "loc": {
    "y": 33.519126,
    "x": 86.934193
  },
  "pop": 7894,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35234",
  "loc": {
    "y": 33.53775,
    "x": 86.80685
  },
  "pop": 10928,
  "state": "AL"
},{
  "city": "CARROLLTON",
  "zip": "35447",
  "loc": {
    "y": 33.248506,
    "x": 88.132122
  },
  "pop": 5007,
  "state": "AL"
},{
  "city": "CARBON HILL",
  "zip": "35549",
  "loc": {
    "y": 33.909252,
    "x": 87.540328
  },
  "pop": 3597,
  "state": "AL"
},{
  "city": "HOUSTON",
  "zip": "35572",
  "loc": {
    "y": 34.118042,
    "x": 87.26183
  },
  "pop": 429,
  "state": "AL"
},{
  "city": "SULLIGENT",
  "zip": "35586",
  "loc": {
    "y": 33.8549,
    "x": 88.150774
  },
  "pop": 4489,
  "state": "AL"
},{
  "city": "CHEROKEE",
  "zip": "35616",
  "loc": {
    "y": 34.744188,
    "x": 87.972445
  },
  "pop": 4811,
  "state": "AL"
},{
  "city": "TOWN CREEK",
  "zip": "35672",
  "loc": {
    "y": 34.649138,
    "x": 87.426195
  },
  "pop": 9049,
  "state": "AL"
},{
  "city": "ESTILLFORK",
  "zip": "35745",
  "loc": {
    "y": 34.913017,
    "x": 86.171571
  },
  "pop": 718,
  "state": "AL"
},{
  "city": "GLENCOE",
  "zip": "35905",
  "loc": {
    "y": 33.956787,
    "x": 85.927586
  },
  "pop": 4256,
  "state": "AL"
},{
  "city": "CROSSVILLE",
  "zip": "35962",
  "loc": {
    "y": 34.258784,
    "x": 86.030575
  },
  "pop": 4874,
  "state": "AL"
},{
  "city": "FORT PAYNE",
  "zip": "35967",
  "loc": {
    "y": 34.436792,
    "x": 85.712394
  },
  "pop": 15893,
  "state": "AL"
},{
  "city": "SYLVANIA",
  "zip": "35988",
  "loc": {
    "y": 34.558962,
    "x": 85.792128
  },
  "pop": 2318,
  "state": "AL"
},{
  "city": "EUFAULA",
  "zip": "36027",
  "loc": {
    "y": 31.905063,
    "x": 85.165605
  },
  "pop": 14189,
  "state": "AL"
},{
  "city": "MONTGOMERY",
  "zip": "36110",
  "loc": {
    "y": 32.421686,
    "x": 86.274997
  },
  "pop": 12551,
  "state": "AL"
},{
  "city": "MONTGOMERY",
  "zip": "36117",
  "loc": {
    "y": 32.373568,
    "x": 86.183299
  },
  "pop": 21623,
  "state": "AL"
},{
  "city": "FORT RUCKER",
  "zip": "36362",
  "loc": {
    "y": 31.348011,
    "x": 85.721374
  },
  "pop": 7607,
  "state": "AL"
},{
  "city": "FLORALA",
  "zip": "36442",
  "loc": {
    "y": 31.017194,
    "x": 86.338528
  },
  "pop": 3421,
  "state": "AL"
},{
  "city": "RANGE",
  "zip": "36473",
  "loc": {
    "y": 31.30169,
    "x": 87.319739
  },
  "pop": 208,
  "state": "AL"
},{
  "city": "GROVE HILL",
  "zip": "36451",
  "loc": {
    "y": 31.675502,
    "x": 87.763571
  },
  "pop": 4089,
  "state": "AL"
},{
  "city": "FRISCO CITY",
  "zip": "36445",
  "loc": {
    "y": 31.423478,
    "x": 87.381744
  },
  "pop": 6179,
  "state": "AL"
},{
  "city": "ELBERTA",
  "zip": "36530",
  "loc": {
    "y": 30.394239,
    "x": 87.58896
  },
  "pop": 2551,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36604",
  "loc": {
    "y": 30.681963,
    "x": 88.067804
  },
  "pop": 11498,
  "state": "AL"
},{
  "city": "MOBILE",
  "zip": "36618",
  "loc": {
    "y": 30.732178,
    "x": 88.175753
  },
  "pop": 14887,
  "state": "AL"
},{
  "city": "GARDENDALE",
  "zip": "35071",
  "loc": {
    "y": 33.71891,
    "x": 86.822481
  },
  "pop": 17968,
  "state": "AL"
},{
  "city": "HARPERSVILLE",
  "zip": "35078",
  "loc": {
    "y": 33.36746,
    "x": 86.429441
  },
  "pop": 4905,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35212",
  "loc": {
    "y": 33.540883,
    "x": 86.749524
  },
  "pop": 17865,
  "state": "AL"
},{
  "city": "ALICEVILLE",
  "zip": "35442",
  "loc": {
    "y": 33.122813,
    "x": 88.166689
  },
  "pop": 5196,
  "state": "AL"
},{
  "city": "BIRMINGHAM",
  "zip": "35233",
  "loc": {
    "y": 33.506161,
    "x": 86.800257
  },
  "pop": 842,
  "state": "AL"
},{
  "city": "VANCE",
  "zip": "35490",
  "loc": {
    "y": 33.17498,
    "x": 87.257362
  },
  "pop": 1234,
  "state": "AL"
},{
  "city": "COTTONDALE",
  "zip": "35453",
  "loc": {
    "y": 33.176667,
    "x": 87.387051
  },
  "pop": 4727,
  "state": "AL"
},{
  "city": "KENNEDY",
  "zip": "35574",
  "loc": {
    "y": 33.574964,
    "x": 88.05172
  },
  "pop": 3618,
  "state": "AL"
},{
  "city": "LYNN",
  "zip": "35575",
  "loc": {
    "y": 34.052984,
    "x": 87.539814
  },
  "pop": 1778,
  "state": "AL"
},{
  "city": "MILLPORT",
  "zip": "35576",
  "loc": {
    "y": 33.54013,
    "x": 88.200003
  },
  "pop": 2286,
  "state": "AL"
},{
  "city": "ELKMONT",
  "zip": "35620",
  "loc": {
    "y": 34.915241,
    "x": 86.910452
  },
  "pop": 8013,
  "state": "AL"
},{
  "city": "LEIGHTON",
  "zip": "35646",
  "loc": {
    "y": 34.710982,
    "x": 87.522133
  },
  "pop": 3046,
  "state": "AL"
},{
  "city": "SOMERVILLE",
  "zip": "35670",
  "loc": {
    "y": 34.499548,
    "x": 86.800931
  },
  "pop": 5184,
  "state": "AL"
},{
  "city": "BIG COVE",
  "zip": "35763",
  "loc": {
    "y": 34.612859,
    "x": 86.466577
  },
  "pop": 3156,
  "state": "AL"
},{
  "city": "GERALDINE",
  "zip": "35974",
  "loc": {
    "y": 34.343864,
    "x": 86.040393
  },
  "pop": 3291,
  "state": "AL"
},{
  "city": "LETOHATCHEE",
  "zip": "36047",
  "loc": {
    "y": 32.086199,
    "x": 86.488013
  },
  "pop": 2348,
  "state": "AL"
},{
  "city": "MARBURY",
  "zip": "36051",
  "loc": {
    "y": 32.639373,
    "x": 86.510138
  },
  "pop": 3573,
  "state": "AL"
},{
  "city": "LUVERNE",
  "zip": "36049",
  "loc": {
    "y": 31.70739,
    "x": 86.256601
  },
  "pop": 4274,
  "state": "AL"
},{
  "city": "GUNTER AFS",
  "zip": "36115",
  "loc": {
    "y": 32.406814,
    "x": 86.247327
  },
  "pop": 1348,
  "state": "AL"
},{
  "city": "ANNISTON",
  "zip": "36206",
  "loc": {
    "y": 33.719124,
    "x": 85.838904
  },
  "pop": 10915,
  "state": "AL"
},{
  "city": "MONTGOMERY",
  "zip": "36105",
  "loc": {
    "y": 32.32573,
    "x": 86.310449
  },
  "pop": 16486,
  "state": "AL"
},{
  "city": "ROCK MILLS",
  "zip": "36274",
  "loc": {
    "y": 33.156443,
    "x": 85.357854
  },
  "pop": 9430,
  "state": "AL"
},{
  "city": "CHANCELLOR",
  "zip": "36316",
  "loc": {
    "y": 31.173379,
    "x": 85.910897
  },
  "pop": 620,
  "state": "AL"
},{
  "city": "JACK",
  "zip": "36346",
  "loc": {
    "y": 31.552392,
    "x": 86.043083
  },
  "pop": 1517,
  "state": "AL"
},{
  "city": "CLOPTON",
  "zip": "36317",
  "loc": {
    "y": 31.602843,
    "x": 85.482308
  },
  "pop": 157,
  "state": "AL"
},{
  "city": "WEBB",
  "zip": "36376",
  "loc": {
    "y": 31.265618,
    "x": 85.254385
  },
  "pop": 1810,
  "state": "AL"
},{
  "city": "ALLEN",
  "zip": "36419",
  "loc": {
    "y": 31.624266,
    "x": 87.66746
  },
  "pop": 0,
  "state": "AL"
},{
  "city": "MC KENZIE",
  "zip": "36456",
  "loc": {
    "y": 31.54495,
    "x": 86.735615
  },
  "pop": 1222,
  "state": "AL"
},{
  "city": "KINSTON",
  "zip": "36453",
  "loc": {
    "y": 31.262118,
    "x": 86.069532
  },
  "pop": 3523,
  "state": "AL"
},{
  "city": "BAYOU LA BATRE",
  "zip": "36509",
  "loc": {
    "y": 30.407983,
    "x": 88.250697
  },
  "pop": 4901,
  "state": "AL"
},{
  "city": "CODEN",
  "zip": "36523",
  "loc": {
    "y": 30.418834,
    "x": 88.168276
  },
  "pop": 3897,
  "state": "AL"
},{
  "city": "SATSUMA",
  "zip": "36572",
  "loc": {
    "y": 30.851628,
    "x": 88.053312
  },
  "pop": 6197,
  "state": "AL"
},{
  "city": "SEMMES",
  "zip": "36575",
  "loc": {
    "y": 30.754408,
    "x": 88.266705
  },
  "pop": 9329,
  "state": "AL"
},{
  "city": "BAILEYTON",
  "zip": "35019",
  "loc": {
    "y": 34.268298,
    "x": 86.621299
  },
  "pop": 1781,
  "state": "AL"
},{
  "city": "JEMISON",
  "zip": "35085",
  "loc": {
    "y": 32.980539,
    "x": 86.718052
  },
  "pop": 7202,
  "state": "AL"
},{
  "city": "DIXIANA",
  "zip": "35126",
  "loc": {
    "y": 33.708131,
    "x": 86.656542
  },
  "pop": 17068,
  "state": "AL"
},{
  "city": "RAGLAND",
  "zip": "35131",
  "loc": {
    "y": 33.736677,
    "x": 86.1619
  },
  "pop": 2797,
  "state": "AL"
},{
  "city": "HOOVER",
  "zip": "35244",
  "loc": {
    "y": 33.371776,
    "x": 86.776381
  },
  "pop": 9758,
  "state": "AL"
},{
  "city": "DUNCANVILLE",
  "zip": "35456",
  "loc": {
    "y": 33.082815,
    "x": 87.494977
  },
  "pop": 5514,
  "state": "AL"
},{
  "city": "VESTAVIA HILLS",
  "zip": "35216",
  "loc": {
    "y": 33.41531,
    "x": 86.790425
  },
  "pop": 29224,
  "state": "AL"
},{
  "city": "COATOPA",
  "zip": "35470",
  "loc": {
    "y": 32.588509,
    "x": 88.173592
  },
  "pop": 6055,
  "state": "AL"
},{
  "city": "JASPER",
  "zip": "35501",
  "loc": {
    "y": 33.871672,
    "x": 87.249144
  },
  "pop": 30600,
  "state": "AL"
},{
  "city": "EMELLE",
  "zip": "35459",
  "loc": {
    "y": 32.754963,
    "x": 88.305747
  },
  "pop": 491,
  "state": "AL"
},{
  "city": "DOUBLE SPRINGS",
  "zip": "35553",
  "loc": {
    "y": 34.138682,
    "x": 87.397431
  },
  "pop": 4797,
  "state": "AL"
},{
  "city": "ATHENS",
  "zip": "35611",
  "loc": {
    "y": 34.803604,
    "x": 86.970733
  },
  "pop": 35441,
  "state": "AL"
},{
  "city": "WATERLOO",
  "zip": "35677",
  "loc": {
    "y": 34.93568,
    "x": 87.962412
  },
  "pop": 1899,
  "state": "AL"
},{
  "city": "TRIANA",
  "zip": "35758",
  "loc": {
    "y": 34.713409,
    "x": 86.750951
  },
  "pop": 24398,
  "state": "AL"
},{
  "city": "NEW HOPE",
  "zip": "35760",
  "loc": {
    "y": 34.549445,
    "x": 86.3961
  },
  "pop": 4075,
  "state": "AL"
},{
  "city": "BROWNSBORO",
  "zip": "35741",
  "loc": {
    "y": 34.716733,
    "x": 86.468703
  },
  "pop": 1793,
  "state": "AL"
},{
  "city": "PISGAH",
  "zip": "35765",
  "loc": {
    "y": 34.688601,
    "x": 85.803044
  },
  "pop": 3717,
  "state": "AL"
},{
  "city": "HUNTSVILLE",
  "zip": "35802",
  "loc": {
    "y": 34.667922,
    "x": 86.560347
  },
  "pop": 21069,
  "state": "AL"
},{
  "city": "HUNTSVILLE",
  "zip": "35805",
  "loc": {
    "y": 34.705943,
    "x": 86.616493
  },
  "pop": 24637,
  "state": "AL"
},{
  "city": "BANKS",
  "zip": "36005",
  "loc": {
    "y": 31.836792,
    "x": 85.799844
  },
  "pop": 1857,
  "state": "AL"
},{
  "city": "RAMER",
  "zip": "36069",
  "loc": {
    "y": 32.067745,
    "x": 86.246329
  },
  "pop": 1712,
  "state": "AL"
},{
  "city": "RUTLEDGE",
  "zip": "36071",
  "loc": {
    "y": 31.755867,
    "x": 86.348464
  },
  "pop": 1976,
  "state": "AL"
},{
  "city": "WETUMPKA",
  "zip": "36092",
  "loc": {
    "y": 32.54509,
    "x": 86.188039
  },
  "pop": 13725,
  "state": "AL"
},{
  "city": "MUNFORD",
  "zip": "36268",
  "loc": {
    "y": 33.540987,
    "x": 85.936322
  },
  "pop": 4998,
  "state": "AL"
},{
  "city": "TAYLOR",
  "zip": "36301",
  "loc": {
    "y": 31.202888,
    "x": 85.418036
  },
  "pop": 32689,
  "state": "AL"
},{
  "city": "NEWTON",
  "zip": "36352",
  "loc": {
    "y": 31.331064,
    "x": 85.599229
  },
  "pop": 1660,
  "state": "AL"
},{
  "city": "OZARK",
  "zip": "36360",
  "loc": {
    "y": 31.439069,
    "x": 85.643629
  },
  "pop": 19017,
  "state": "AL"
},{
  "city": "CARLTON",
  "zip": "36515",
  "loc": {
    "y": 31.322449,
    "x": 87.837793
  },
  "pop": 30,
  "state": "AL"
},{
  "city": "MILLRY",
  "zip": "36558",
  "loc": {
    "y": 31.626871,
    "x": 88.355872
  },
  "pop": 2825,
  "state": "AL"
},{
  "city": "BUHL",
  "zip": "35446",
  "loc": {
    "y": 33.249448,
    "x": 87.718886
  },
  "pop": 1662,
  "state": "AL"
},{
  "city": "MIDFIELD",
  "zip": "35228",
  "loc": {
    "y": 33.462446,
    "x": 86.914703
  },
  "pop": 9294,
  "state": "AL"
},{
  "city": "NORTHPORT",
  "zip": "35476",
  "loc": {
    "y": 33.283425,
    "x": 87.591441
  },
  "pop": 20114,
  "state": "AL"
},{
  "city": "REFORM",
  "zip": "35481",
  "loc": {
    "y": 33.395945,
    "x": 88.020277
  },
  "pop": 4062,
  "state": "AL"
},{
  "city": "FAYETTE",
  "zip": "35555",
  "loc": {
    "y": 33.697397,
    "x": 87.834647
  },
  "pop": 10776,
  "state": "AL"
},{
  "city": "KILLEN",
  "zip": "35645",
  "loc": {
    "y": 34.901632,
    "x": 87.508185
  },
  "pop": 11758,
  "state": "AL"
},{
  "city": "MOUNT HOPE",
  "zip": "35651",
  "loc": {
    "y": 34.462969,
    "x": 87.451453
  },
  "pop": 1821,
  "state": "AL"
},{
  "city": "TRENTON",
  "zip": "35774",
  "loc": {
    "y": 34.740065,
    "x": 86.291264
  },
  "pop": 381,
  "state": "AL"
},{
  "city": "ATTALLA",
  "zip": "35954",
  "loc": {
    "y": 34.029597,
    "x": 86.096717
  },
  "pop": 11904,
  "state": "AL"
},{
  "city": "GALLANT",
  "zip": "35972",
  "loc": {
    "y": 33.997586,
    "x": 86.234606
  },
  "pop": 337,
  "state": "AL"
},{
  "city": "DOZIER",
  "zip": "36028",
  "loc": {
    "y": 31.506614,
    "x": 86.366315
  },
  "pop": 741,
  "state": "AL"
},{
  "city": "FITZPATRICK",
  "zip": "36029",
  "loc": {
    "y": 32.151607,
    "x": 85.888329
  },
  "pop": 736,
  "state": "AL"
},{
  "city": "GRADY",
  "zip": "36036",
  "loc": {
    "y": 32.019397,
    "x": 86.129246
  },
  "pop": 1811,
  "state": "AL"
},{
  "city": "TALLASSEE",
  "zip": "36078",
  "loc": {
    "y": 32.550997,
    "x": 85.89781
  },
  "pop": 12046,
  "state": "AL"
},{
  "city": "HOPE HULL",
  "zip": "36043",
  "loc": {
    "y": 32.224256,
    "x": 86.393189
  },
  "pop": 2961,
  "state": "AL"
},{
  "city": "DALEVILLE",
  "zip": "36322",
  "loc": {
    "y": 31.281091,
    "x": 85.730473
  },
  "pop": 8885,
  "state": "AL"
},{
  "city": "MALVERN",
  "zip": "36349",
  "loc": {
    "y": 31.157528,
    "x": 85.522327
  },
  "pop": 1686,
  "state": "AL"
},{
  "city": "ANDALUSIA",
  "zip": "36420",
  "loc": {
    "y": 31.297142,
    "x": 86.490468
  },
  "pop": 16920,
  "state": "AL"
},{
  "city": "FRANKLIN",
  "zip": "36444",
  "loc": {
    "y": 31.723815,
    "x": 87.441237
  },
  "pop": 154,
  "state": "AL"
},{
  "city": "OPP",
  "zip": "36467",
  "loc": {
    "y": 31.279861,
    "x": 86.257105
  },
  "pop": 9901,
  "state": "AL"
},{
  "city": "LEROY",
  "zip": "36548",
  "loc": {
    "y": 31.491021,
    "x": 87.968672
  },
  "pop": 1086,
  "state": "AL"
},{
  "city": "IRVINGTON",
  "zip": "36544",
  "loc": {
    "y": 30.480241,
    "x": 88.239563
  },
  "pop": 6181,
  "state": "AL"
},{
  "city": "ARLINGTON",
  "zip": "36722",
  "loc": {
    "y": 32.066784,
    "x": 87.559691
  },
  "pop": 1098,
  "state": "AL"
},{
  "city": "UNIONTOWN",
  "zip": "36786",
  "loc": {
    "y": 32.446966,
    "x": 87.493398
  },
  "pop": 4173,
  "state": "AL"
},{
  "city": "SAFFORD",
  "zip": "36773",
  "loc": {
    "y": 32.300242,
    "x": 87.369345
  },
  "pop": 715,
  "state": "AL"
},{
  "city": "BENTON",
  "zip": "36785",
  "loc": {
    "y": 32.281924,
    "x": 86.859867
  },
  "pop": 1396,
  "state": "AL"
},{
  "city": "ANCHORAGE",
  "zip": "99507",
  "loc": {
    "y": 61.153543,
    "x": 149.828912
  },
  "pop": 20128,
  "state": "AK"
},{
  "city": "CHIGNIK",
  "zip": "99564",
  "loc": {
    "y": 56.301639,
    "x": 158.415696
  },
  "pop": 188,
  "state": "AK"
},{
  "city": "CLARKS POINT",
  "zip": "99569",
  "loc": {
    "y": 58.84921,
    "x": 158.451241
  },
  "pop": 68,
  "state": "AK"
},{
  "city": "NELSON LAGOON",
  "zip": "99571",
  "loc": {
    "y": 55.610952,
    "x": 161.942941
  },
  "pop": 475,
  "state": "AK"
},{
  "city": "KWETHLUK",
  "zip": "99621",
  "loc": {
    "y": 60.771814,
    "x": 161.38849
  },
  "pop": 558,
  "state": "AK"
},{
  "city": "NAKNEK",
  "zip": "99633",
  "loc": {
    "y": 58.885699,
    "x": 156.705405
  },
  "pop": 0,
  "state": "AK"
},{
  "city": "SALCHA",
  "zip": "99714",
  "loc": {
    "y": 64.50905,
    "x": 146.952974
  },
  "pop": 890,
  "state": "AK"
},{
  "city": "HUSLIA",
  "zip": "99746",
  "loc": {
    "y": 65.689918,
    "x": 156.291976
  },
  "pop": 207,
  "state": "AK"
},{
  "city": "GALENA",
  "zip": "99741",
  "loc": {
    "y": 64.760784,
    "x": 156.797701
  },
  "pop": 847,
  "state": "AK"
},{
  "city": "KALTAG",
  "zip": "99748",
  "loc": {
    "y": 64.330452,
    "x": 158.724251
  },
  "pop": 240,
  "state": "AK"
},{
  "city": "KIANA",
  "zip": "99749",
  "loc": {
    "y": 67.18026,
    "x": 158.152204
  },
  "pop": 349,
  "state": "AK"
},{
  "city": "RUBY",
  "zip": "99768",
  "loc": {
    "y": 64.720062,
    "x": 155.503872
  },
  "pop": 172,
  "state": "AK"
},{
  "city": "WALES",
  "zip": "99783",
  "loc": {
    "y": 65.688212,
    "x": 168.520521
  },
  "pop": 341,
  "state": "AK"
},{
  "city": "NUIQSUT",
  "zip": "99789",
  "loc": {
    "y": 70.192737,
    "x": 150.997119
  },
  "pop": 354,
  "state": "AK"
},{
  "city": "CHALKYITSIK",
  "zip": "99788",
  "loc": {
    "y": 66.719,
    "x": 143.638121
  },
  "pop": 99,
  "state": "AK"
},{
  "city": "PETERSBURG",
  "zip": "99833",
  "loc": {
    "y": 56.827134,
    "x": 133.160683
  },
  "pop": 4253,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85017",
  "loc": {
    "y": 33.515263,
    "x": 112.121232
  },
  "pop": 27741,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85032",
  "loc": {
    "y": 33.623807,
    "x": 112.004369
  },
  "pop": 53113,
  "state": "AZ"
},{
  "city": "MESA",
  "zip": "85208",
  "loc": {
    "y": 33.398416,
    "x": 111.651297
  },
  "pop": 22113,
  "state": "AZ"
},{
  "city": "CHANDLER",
  "zip": "85225",
  "loc": {
    "y": 33.310505,
    "x": 111.823881
  },
  "pop": 15678,
  "state": "AZ"
},{
  "city": "CHANDLER",
  "zip": "85249",
  "loc": {
    "y": 33.241384,
    "x": 111.774486
  },
  "pop": 3871,
  "state": "AZ"
},{
  "city": "SACATON",
  "zip": "85247",
  "loc": {
    "y": 33.097699,
    "x": 111.775162
  },
  "pop": 6792,
  "state": "AZ"
},{
  "city": "LITCHFIELD PARK",
  "zip": "85340",
  "loc": {
    "y": 33.494127,
    "x": 112.380497
  },
  "pop": 6349,
  "state": "AZ"
},{
  "city": "ROLL",
  "zip": "85347",
  "loc": {
    "y": 32.936635,
    "x": 113.564287
  },
  "pop": 959,
  "state": "AZ"
},{
  "city": "EMPIRE LANDING",
  "zip": "85344",
  "loc": {
    "y": 34.0254,
    "x": 114.266342
  },
  "pop": 11143,
  "state": "AZ"
},{
  "city": "PEORIA",
  "zip": "85345",
  "loc": {
    "y": 33.576135,
    "x": 112.234424
  },
  "pop": 37607,
  "state": "AZ"
},{
  "city": "HEREFORD",
  "zip": "85615",
  "loc": {
    "y": 31.403545,
    "x": 110.204728
  },
  "pop": 1762,
  "state": "AZ"
},{
  "city": "WILLCOX",
  "zip": "85643",
  "loc": {
    "y": 32.372977,
    "x": 109.863111
  },
  "pop": 7297,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85715",
  "loc": {
    "y": 32.269213,
    "x": 110.834837
  },
  "pop": 33197,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85749",
  "loc": {
    "y": 32.273285,
    "x": 110.765829
  },
  "pop": 14254,
  "state": "AZ"
},{
  "city": "NEWBERN",
  "zip": "36765",
  "loc": {
    "y": 32.551465,
    "x": 87.561472
  },
  "pop": 1131,
  "state": "AL"
},{
  "city": "SAND POINT",
  "zip": "99661",
  "loc": {
    "y": 55.319236,
    "x": 160.491435
  },
  "pop": 881,
  "state": "AK"
},{
  "city": "FORT WAINWRIGHT",
  "zip": "99703",
  "loc": {
    "y": 64.828303,
    "x": 147.655673
  },
  "pop": 6238,
  "state": "AK"
},{
  "city": "ALLAKAKET",
  "zip": "99720",
  "loc": {
    "y": 66.543197,
    "x": 152.712155
  },
  "pop": 170,
  "state": "AK"
},{
  "city": "ANAKTUVUK PASS",
  "zip": "99721",
  "loc": {
    "y": 68.11878,
    "x": 151.679005
  },
  "pop": 260,
  "state": "AK"
},{
  "city": "KOBUK",
  "zip": "99751",
  "loc": {
    "y": 66.912253,
    "x": 157.066864
  },
  "pop": 306,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85029",
  "loc": {
    "y": 33.596133,
    "x": 112.119913
  },
  "pop": 40764,
  "state": "AZ"
},{
  "city": "FOUNTAIN HILLS",
  "zip": "85268",
  "loc": {
    "y": 33.608489,
    "x": 111.723685
  },
  "pop": 10030,
  "state": "AZ"
},{
  "city": "MOBILE",
  "zip": "85239",
  "loc": {
    "y": 32.987379,
    "x": 112.075228
  },
  "pop": 5026,
  "state": "AZ"
},{
  "city": "GLENDALE",
  "zip": "85306",
  "loc": {
    "y": 33.623882,
    "x": 112.177563
  },
  "pop": 23493,
  "state": "AZ"
},{
  "city": "SUN CITY",
  "zip": "85351",
  "loc": {
    "y": 33.606104,
    "x": 112.279701
  },
  "pop": 31102,
  "state": "AZ"
},{
  "city": "YOUNGTOWN",
  "zip": "85363",
  "loc": {
    "y": 33.590751,
    "x": 112.301305
  },
  "pop": 2351,
  "state": "AZ"
},{
  "city": "WICKENBURG",
  "zip": "85390",
  "loc": {
    "y": 33.911282,
    "x": 112.738973
  },
  "pop": 7994,
  "state": "AZ"
},{
  "city": "SAINT DAVID",
  "zip": "85630",
  "loc": {
    "y": 31.897251,
    "x": 110.215377
  },
  "pop": 1928,
  "state": "AZ"
},{
  "city": "SAN MANUEL",
  "zip": "85631",
  "loc": {
    "y": 32.695831,
    "x": 110.656788
  },
  "pop": 6253,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85711",
  "loc": {
    "y": 32.212729,
    "x": 110.882892
  },
  "pop": 40024,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85718",
  "loc": {
    "y": 32.311154,
    "x": 110.917882
  },
  "pop": 22441,
  "state": "AZ"
},{
  "city": "KYKOTSMOVI VILLA",
  "zip": "86039",
  "loc": {
    "y": 35.579084,
    "x": 110.368805
  },
  "pop": 167,
  "state": "AZ"
},{
  "city": "CAMP VERDE",
  "zip": "86322",
  "loc": {
    "y": 34.569733,
    "x": 111.855131
  },
  "pop": 6250,
  "state": "AZ"
},{
  "city": "FAUNSDALE",
  "zip": "36738",
  "loc": {
    "y": 32.423259,
    "x": 87.618079
  },
  "pop": 831,
  "state": "AL"
},{
  "city": "MAGNOLIA",
  "zip": "36754",
  "loc": {
    "y": 32.141931,
    "x": 87.699815
  },
  "pop": 222,
  "state": "AL"
},{
  "city": "JONES",
  "zip": "36749",
  "loc": {
    "y": 32.608515,
    "x": 86.889266
  },
  "pop": 428,
  "state": "AL"
},{
  "city": "MARION",
  "zip": "36756",
  "loc": {
    "y": 32.646301,
    "x": 87.331437
  },
  "pop": 7284,
  "state": "AL"
},{
  "city": "RANDOLPH",
  "zip": "36792",
  "loc": {
    "y": 32.888834,
    "x": 86.90701
  },
  "pop": 434,
  "state": "AL"
},{
  "city": "OPELIKA",
  "zip": "36801",
  "loc": {
    "y": 32.627771,
    "x": 85.358629
  },
  "pop": 32808,
  "state": "AL"
},{
  "city": "AUBURN",
  "zip": "36830",
  "loc": {
    "y": 32.602043,
    "x": 85.489001
  },
  "pop": 38908,
  "state": "AL"
},{
  "city": "DADEVILLE",
  "zip": "36853",
  "loc": {
    "y": 32.82239,
    "x": 85.770395
  },
  "pop": 7620,
  "state": "AL"
},{
  "city": "JACKSONS GAP",
  "zip": "36861",
  "loc": {
    "y": 32.879698,
    "x": 85.848662
  },
  "pop": 2236,
  "state": "AL"
},{
  "city": "GILBERTOWN",
  "zip": "36908",
  "loc": {
    "y": 31.866602,
    "x": 88.326514
  },
  "pop": 1606,
  "state": "AL"
},{
  "city": "NIKOLAEVSK",
  "zip": "99556",
  "loc": {
    "y": 59.788818,
    "x": 151.732933
  },
  "pop": 1698,
  "state": "AK"
},{
  "city": "MARSHALL",
  "zip": "99585",
  "loc": {
    "y": 61.837087,
    "x": 161.7394
  },
  "pop": 530,
  "state": "AK"
},{
  "city": "CLEAR",
  "zip": "99704",
  "loc": {
    "y": 64.418121,
    "x": 149.139885
  },
  "pop": 440,
  "state": "AK"
},{
  "city": "SHISHMAREF",
  "zip": "99772",
  "loc": {
    "y": 66.230562,
    "x": 166.137276
  },
  "pop": 456,
  "state": "AK"
},{
  "city": "TANANA",
  "zip": "99777",
  "loc": {
    "y": 65.156483,
    "x": 152.103747
  },
  "pop": 345,
  "state": "AK"
},{
  "city": "BORDER",
  "zip": "99780",
  "loc": {
    "y": 63.435022,
    "x": 142.523046
  },
  "pop": 1805,
  "state": "AK"
},{
  "city": "HOONAH",
  "zip": "99829",
  "loc": {
    "y": 58.032237,
    "x": 135.558435
  },
  "pop": 1670,
  "state": "AK"
},{
  "city": "HYDER",
  "zip": "99923",
  "loc": {
    "y": 55.925867,
    "x": 130.124915
  },
  "pop": 116,
  "state": "AK"
},{
  "city": "DOUGLAS",
  "zip": "99824",
  "loc": {
    "y": 58.275597,
    "x": 134.395041
  },
  "pop": 1802,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85009",
  "loc": {
    "y": 33.456373,
    "x": 112.128368
  },
  "pop": 41512,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85007",
  "loc": {
    "y": 33.452298,
    "x": 112.089326
  },
  "pop": 13650,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85018",
  "loc": {
    "y": 33.495796,
    "x": 111.988259
  },
  "pop": 32926,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85034",
  "loc": {
    "y": 33.441251,
    "x": 112.042135
  },
  "pop": 9824,
  "state": "AZ"
},{
  "city": "SCOTTSDALE",
  "zip": "85260",
  "loc": {
    "y": 33.601323,
    "x": 111.88671
  },
  "pop": 17908,
  "state": "AZ"
},{
  "city": "TEMPE",
  "zip": "85282",
  "loc": {
    "y": 33.391669,
    "x": 111.924896
  },
  "pop": 47890,
  "state": "AZ"
},{
  "city": "AVONDALE",
  "zip": "85323",
  "loc": {
    "y": 33.432114,
    "x": 112.343754
  },
  "pop": 12321,
  "state": "AZ"
},{
  "city": "CAVE CREEK",
  "zip": "85331",
  "loc": {
    "y": 33.821896,
    "x": 112.015106
  },
  "pop": 13654,
  "state": "AZ"
},{
  "city": "CONGRESS",
  "zip": "85332",
  "loc": {
    "y": 34.176425,
    "x": 112.76801
  },
  "pop": 2314,
  "state": "AZ"
},{
  "city": "ELGIN",
  "zip": "85611",
  "loc": {
    "y": 31.66002,
    "x": 110.611403
  },
  "pop": 638,
  "state": "AZ"
},{
  "city": "ORACLE",
  "zip": "85623",
  "loc": {
    "y": 32.600506,
    "x": 110.796126
  },
  "pop": 3833,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85713",
  "loc": {
    "y": 32.194065,
    "x": 110.973896
  },
  "pop": 40625,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85747",
  "loc": {
    "y": 32.071142,
    "x": 110.667337
  },
  "pop": 2286,
  "state": "AZ"
},{
  "city": "BAGDAD",
  "zip": "86321",
  "loc": {
    "y": 34.578484,
    "x": 113.175535
  },
  "pop": 1596,
  "state": "AZ"
},{
  "city": "BURKVILLE",
  "zip": "36752",
  "loc": {
    "y": 32.300292,
    "x": 86.609868
  },
  "pop": 1478,
  "state": "AL"
},{
  "city": "MORVIN",
  "zip": "36762",
  "loc": {
    "y": 31.967305,
    "x": 87.972897
  },
  "pop": 24,
  "state": "AL"
},{
  "city": "AKIAK",
  "zip": "99552",
  "loc": {
    "y": 60.890632,
    "x": 161.199325
  },
  "pop": 285,
  "state": "AK"
},{
  "city": "ATMAUTLUAK",
  "zip": "99559",
  "loc": {
    "y": 60.832389,
    "x": 161.824053
  },
  "pop": 7188,
  "state": "AK"
},{
  "city": "CLAM GULCH",
  "zip": "99568",
  "loc": {
    "y": 60.201603,
    "x": 151.422628
  },
  "pop": 133,
  "state": "AK"
},{
  "city": "EMMONAK",
  "zip": "99581",
  "loc": {
    "y": 62.827404,
    "x": 164.131298
  },
  "pop": 0,
  "state": "AK"
},{
  "city": "KWIGILLINGOK",
  "zip": "99622",
  "loc": {
    "y": 59.881022,
    "x": 162.984938
  },
  "pop": 572,
  "state": "AK"
},{
  "city": "TULUKSAK",
  "zip": "99679",
  "loc": {
    "y": 61.108848,
    "x": 160.938924
  },
  "pop": 358,
  "state": "AK"
},{
  "city": "SOLDOTNA",
  "zip": "99669",
  "loc": {
    "y": 60.481778,
    "x": 151.13582
  },
  "pop": 9825,
  "state": "AK"
},{
  "city": "SLEETMUTE",
  "zip": "99668",
  "loc": {
    "y": 61.634555,
    "x": 157.118284
  },
  "pop": 0,
  "state": "AK"
},{
  "city": "TRAPPER CREEK",
  "zip": "99683",
  "loc": {
    "y": 61.441361,
    "x": 150.284455
  },
  "pop": 20,
  "state": "AK"
},{
  "city": "EIELSON AFB",
  "zip": "99702",
  "loc": {
    "y": 64.67352,
    "x": 147.08051
  },
  "pop": 5266,
  "state": "AK"
},{
  "city": "NORTH POLE",
  "zip": "99705",
  "loc": {
    "y": 64.78049,
    "x": 147.369353
  },
  "pop": 14672,
  "state": "AK"
},{
  "city": "ANDERSON",
  "zip": "99744",
  "loc": {
    "y": 64.300693,
    "x": 149.1718
  },
  "pop": 300,
  "state": "AK"
},{
  "city": "MANLEY HOT SPRIN",
  "zip": "99756",
  "loc": {
    "y": 65.02058,
    "x": 150.573267
  },
  "pop": 122,
  "state": "AK"
},{
  "city": "NENANA",
  "zip": "99760",
  "loc": {
    "y": 64.557656,
    "x": 149.086744
  },
  "pop": 393,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85015",
  "loc": {
    "y": 33.508164,
    "x": 112.101064
  },
  "pop": 32497,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85008",
  "loc": {
    "y": 33.466457,
    "x": 111.998381
  },
  "pop": 41733,
  "state": "AZ"
},{
  "city": "APACHE JUNCTION",
  "zip": "85220",
  "loc": {
    "y": 33.415211,
    "x": 111.571818
  },
  "pop": 19342,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85035",
  "loc": {
    "y": 33.472353,
    "x": 112.183177
  },
  "pop": 35384,
  "state": "AZ"
},{
  "city": "MESA",
  "zip": "85210",
  "loc": {
    "y": 33.38867,
    "x": 111.842757
  },
  "pop": 32467,
  "state": "AZ"
},{
  "city": "COOLIDGE",
  "zip": "85228",
  "loc": {
    "y": 32.957399,
    "x": 111.534378
  },
  "pop": 10698,
  "state": "AZ"
},{
  "city": "SCOTTSDALE",
  "zip": "85258",
  "loc": {
    "y": 33.564747,
    "x": 111.893067
  },
  "pop": 20867,
  "state": "AZ"
},{
  "city": "WINKELMAN",
  "zip": "85292",
  "loc": {
    "y": 33.00572,
    "x": 110.772682
  },
  "pop": 1977,
  "state": "AZ"
},{
  "city": "WELLTON",
  "zip": "85356",
  "loc": {
    "y": 32.749251,
    "x": 114.176616
  },
  "pop": 4778,
  "state": "AZ"
},{
  "city": "SAFFORD",
  "zip": "85546",
  "loc": {
    "y": 32.829491,
    "x": 109.626641
  },
  "pop": 2676,
  "state": "AZ"
},{
  "city": "SURPRISE",
  "zip": "85374",
  "loc": {
    "y": 33.630028,
    "x": 112.33143
  },
  "pop": 5042,
  "state": "AZ"
},{
  "city": "SONOITA",
  "zip": "85637",
  "loc": {
    "y": 31.866154,
    "x": 110.724418
  },
  "pop": 1399,
  "state": "AZ"
},{
  "city": "KEAMS CANYON",
  "zip": "86034",
  "loc": {
    "y": 35.808206,
    "x": 110.284461
  },
  "pop": 3240,
  "state": "AZ"
},{
  "city": "TONALEA",
  "zip": "86044",
  "loc": {
    "y": 35.934555,
    "x": 110.882042
  },
  "pop": 158,
  "state": "AZ"
},{
  "city": "CHINO VALLEY",
  "zip": "86323",
  "loc": {
    "y": 34.775739,
    "x": 112.473099
  },
  "pop": 7285,
  "state": "AZ"
},{
  "city": "DIXONS MILLS",
  "zip": "36736",
  "loc": {
    "y": 32.067209,
    "x": 87.745356
  },
  "pop": 2635,
  "state": "AL"
},{
  "city": "THOMASTON",
  "zip": "36783",
  "loc": {
    "y": 32.253776,
    "x": 87.597438
  },
  "pop": 1527,
  "state": "AL"
},{
  "city": "SARDIS",
  "zip": "36775",
  "loc": {
    "y": 32.284358,
    "x": 86.991959
  },
  "pop": 1683,
  "state": "AL"
},{
  "city": "FORT RICHARDSON",
  "zip": "99505",
  "loc": {
    "y": 61.275256,
    "x": 149.675454
  },
  "pop": 7979,
  "state": "AK"
},{
  "city": "HOLY CROSS",
  "zip": "99602",
  "loc": {
    "y": 62.192584,
    "x": 159.825092
  },
  "pop": 277,
  "state": "AK"
},{
  "city": "KALSKAG",
  "zip": "99607",
  "loc": {
    "y": 61.541006,
    "x": 160.3261
  },
  "pop": 172,
  "state": "AK"
},{
  "city": "KASILOF",
  "zip": "99610",
  "loc": {
    "y": 60.316365,
    "x": 151.28958
  },
  "pop": 963,
  "state": "AK"
},{
  "city": "RED DEVIL",
  "zip": "99656",
  "loc": {
    "y": 61.735389,
    "x": 157.195969
  },
  "pop": 159,
  "state": "AK"
},{
  "city": "TALKEETNA",
  "zip": "99676",
  "loc": {
    "y": 62.260516,
    "x": 150.110097
  },
  "pop": 1420,
  "state": "AK"
},{
  "city": "TYONEK",
  "zip": "99682",
  "loc": {
    "y": 61.117929,
    "x": 151.348495
  },
  "pop": 277,
  "state": "AK"
},{
  "city": "NIKOLAI",
  "zip": "99691",
  "loc": {
    "y": 63.001603,
    "x": 154.381247
  },
  "pop": 109,
  "state": "AK"
},{
  "city": "COLDFOOT",
  "zip": "99701",
  "loc": {
    "y": 64.840238,
    "x": 147.710431
  },
  "pop": 19316,
  "state": "AK"
},{
  "city": "WASILLA",
  "zip": "99687",
  "loc": {
    "y": 61.578032,
    "x": 149.533003
  },
  "pop": 14215,
  "state": "AK"
},{
  "city": "KOYUK",
  "zip": "99753",
  "loc": {
    "y": 64.931668,
    "x": 161.149957
  },
  "pop": 231,
  "state": "AK"
},{
  "city": "NULATO",
  "zip": "99765",
  "loc": {
    "y": 64.778024,
    "x": 157.991353
  },
  "pop": 492,
  "state": "AK"
},{
  "city": "DENALI NATIONAL",
  "zip": "99755",
  "loc": {
    "y": 63.516075,
    "x": 149.539532
  },
  "pop": 27,
  "state": "AK"
},{
  "city": "KLAWOCK",
  "zip": "99925",
  "loc": {
    "y": 55.552611,
    "x": 133.055503
  },
  "pop": 851,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85022",
  "loc": {
    "y": 33.631513,
    "x": 112.052008
  },
  "pop": 33573,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85044",
  "loc": {
    "y": 33.329124,
    "x": 111.9943
  },
  "pop": 32053,
  "state": "AZ"
},{
  "city": "SCOTTSDALE",
  "zip": "85255",
  "loc": {
    "y": 33.696801,
    "x": 111.889213
  },
  "pop": 2927,
  "state": "AZ"
},{
  "city": "TOLLESON",
  "zip": "85353",
  "loc": {
    "y": 33.434686,
    "x": 112.277444
  },
  "pop": 9485,
  "state": "AZ"
},{
  "city": "PERIDOT",
  "zip": "85542",
  "loc": {
    "y": 33.478874,
    "x": 110.37252
  },
  "pop": 4878,
  "state": "AZ"
},{
  "city": "CLIFTON",
  "zip": "85533",
  "loc": {
    "y": 33.132343,
    "x": 109.246199
  },
  "pop": 376,
  "state": "AZ"
},{
  "city": "THATCHER",
  "zip": "85552",
  "loc": {
    "y": 32.819902,
    "x": 109.730245
  },
  "pop": 15375,
  "state": "AZ"
},{
  "city": "NOGALES",
  "zip": "85621",
  "loc": {
    "y": 31.376969,
    "x": 110.943508
  },
  "pop": 25506,
  "state": "AZ"
},{
  "city": "VAIL",
  "zip": "85641",
  "loc": {
    "y": 32.035926,
    "x": 110.88375
  },
  "pop": 2843,
  "state": "AZ"
},{
  "city": "PENNINGTON",
  "zip": "36916",
  "loc": {
    "y": 32.226245,
    "x": 88.0931
  },
  "pop": 1459,
  "state": "AL"
},{
  "city": "DOUGLAS",
  "zip": "85607",
  "loc": {
    "y": 31.35111,
    "x": 109.544698
  },
  "pop": 17350,
  "state": "AZ"
},{
  "city": "ANCHORAGE",
  "zip": "99501",
  "loc": {
    "y": 61.211571,
    "x": 149.876077
  },
  "pop": 14436,
  "state": "AK"
},{
  "city": "TUCSON",
  "zip": "85712",
  "loc": {
    "y": 32.250043,
    "x": 110.886919
  },
  "pop": 28813,
  "state": "AZ"
},{
  "city": "ANCHORAGE",
  "zip": "99516",
  "loc": {
    "y": 61.10541,
    "x": 149.779998
  },
  "pop": 18356,
  "state": "AK"
},{
  "city": "TUCSON",
  "zip": "85730",
  "loc": {
    "y": 32.180951,
    "x": 110.81904
  },
  "pop": 33251,
  "state": "AZ"
},{
  "city": "ALEKNAGIK",
  "zip": "99555",
  "loc": {
    "y": 59.269688,
    "x": 158.619882
  },
  "pop": 185,
  "state": "AK"
},{
  "city": "SNOWFLAKE",
  "zip": "85937",
  "loc": {
    "y": 34.495859,
    "x": 110.080742
  },
  "pop": 6678,
  "state": "AZ"
},{
  "city": "COOPER LANDING",
  "zip": "99572",
  "loc": {
    "y": 60.476692,
    "x": 149.823514
  },
  "pop": 252,
  "state": "AK"
},{
  "city": "FREDONIA",
  "zip": "86022",
  "loc": {
    "y": 36.904397,
    "x": 112.497864
  },
  "pop": 1393,
  "state": "AZ"
},{
  "city": "CHENEGA BAY",
  "zip": "99574",
  "loc": {
    "y": 60.102558,
    "x": 147.943316
  },
  "pop": 96,
  "state": "AK"
},{
  "city": "SPRINGERVILLE",
  "zip": "85938",
  "loc": {
    "y": 34.119333,
    "x": 109.304066
  },
  "pop": 6560,
  "state": "AZ"
},{
  "city": "EEK",
  "zip": "99578",
  "loc": {
    "y": 60.215058,
    "x": 162.032341
  },
  "pop": 254,
  "state": "AK"
},{
  "city": "PRESCOTT VALLEY",
  "zip": "86314",
  "loc": {
    "y": 34.601934,
    "x": 112.326378
  },
  "pop": 11396,
  "state": "AZ"
},{
  "city": "SLANA",
  "zip": "99586",
  "loc": {
    "y": 62.654744,
    "x": 143.568393
  },
  "pop": 394,
  "state": "AK"
},{
  "city": "KAIBITO",
  "zip": "86053",
  "loc": {
    "y": 36.484798,
    "x": 111.136973
  },
  "pop": 6098,
  "state": "AZ"
},{
  "city": "GOODNEWS BAY",
  "zip": "99589",
  "loc": {
    "y": 59.085008,
    "x": 161.587146
  },
  "pop": 305,
  "state": "AK"
},{
  "city": "LEVELOCK",
  "zip": "99625",
  "loc": {
    "y": 59.371395,
    "x": 154.976815
  },
  "pop": 204,
  "state": "AK"
},{
  "city": "PERRYVILLE",
  "zip": "99648",
  "loc": {
    "y": 55.945289,
    "x": 159.259333
  },
  "pop": 143,
  "state": "AK"
},{
  "city": "QUINHAGAK",
  "zip": "99655",
  "loc": {
    "y": 59.738057,
    "x": 161.874938
  },
  "pop": 501,
  "state": "AK"
},{
  "city": "PORT ALSWORTH",
  "zip": "99653",
  "loc": {
    "y": 60.636416,
    "x": 154.433803
  },
  "pop": 7,
  "state": "AK"
},{
  "city": "STERLING",
  "zip": "99672",
  "loc": {
    "y": 60.520373,
    "x": 150.849792
  },
  "pop": 3814,
  "state": "AK"
},{
  "city": "HUGHES",
  "zip": "99745",
  "loc": {
    "y": 66.038246,
    "x": 154.26443
  },
  "pop": 64,
  "state": "AK"
},{
  "city": "NOATAK",
  "zip": "99761",
  "loc": {
    "y": 66.97553,
    "x": 160.509453
  },
  "pop": 395,
  "state": "AK"
},{
  "city": "GOLOVIN",
  "zip": "99762",
  "loc": {
    "y": 64.505775,
    "x": 165.310667
  },
  "pop": 3706,
  "state": "AK"
},{
  "city": "SELAWIK",
  "zip": "99770",
  "loc": {
    "y": 65.713537,
    "x": 158.534287
  },
  "pop": 0,
  "state": "AK"
},{
  "city": "BREVIG MISSION",
  "zip": "99785",
  "loc": {
    "y": 65.334187,
    "x": 166.478578
  },
  "pop": 198,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85019",
  "loc": {
    "y": 33.512284,
    "x": 112.141681
  },
  "pop": 21879,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85020",
  "loc": {
    "y": 33.562281,
    "x": 112.055888
  },
  "pop": 29043,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85039",
  "loc": {
    "y": 33.495362,
    "x": 112.288573
  },
  "pop": 7914,
  "state": "AZ"
},{
  "city": "ELEVEN MILE CORN",
  "zip": "85222",
  "loc": {
    "y": 32.892667,
    "x": 111.756093
  },
  "pop": 26134,
  "state": "AZ"
},{
  "city": "SCOTTSDALE",
  "zip": "85251",
  "loc": {
    "y": 33.493559,
    "x": 111.916697
  },
  "pop": 30869,
  "state": "AZ"
},{
  "city": "SCOTTSDALE",
  "zip": "85256",
  "loc": {
    "y": 33.485793,
    "x": 111.85333
  },
  "pop": 3367,
  "state": "AZ"
},{
  "city": "KEARNY",
  "zip": "85237",
  "loc": {
    "y": 33.059443,
    "x": 110.91227
  },
  "pop": 2736,
  "state": "AZ"
},{
  "city": "DATELAND",
  "zip": "85333",
  "loc": {
    "y": 32.867886,
    "x": 113.463126
  },
  "pop": 659,
  "state": "AZ"
},{
  "city": "COCHISE",
  "zip": "85606",
  "loc": {
    "y": 32.097891,
    "x": 109.92393
  },
  "pop": 290,
  "state": "AZ"
},{
  "city": "MAMMOTH",
  "zip": "85618",
  "loc": {
    "y": 32.723875,
    "x": 110.643961
  },
  "pop": 1876,
  "state": "AZ"
},{
  "city": "TOMBSTONE",
  "zip": "85638",
  "loc": {
    "y": 31.721598,
    "x": 110.058449
  },
  "pop": 1556,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85701",
  "loc": {
    "y": 32.213873,
    "x": 110.969445
  },
  "pop": 5191,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85708",
  "loc": {
    "y": 32.179989,
    "x": 110.869283
  },
  "pop": 6191,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85716",
  "loc": {
    "y": 32.246815,
    "x": 110.922176
  },
  "pop": 32258,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85736",
  "loc": {
    "y": 31.667909,
    "x": 111.317842
  },
  "pop": 1130,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85748",
  "loc": {
    "y": 32.214981,
    "x": 110.775765
  },
  "pop": 9675,
  "state": "AZ"
},{
  "city": "CONCHO",
  "zip": "85924",
  "loc": {
    "y": 34.445787,
    "x": 109.674096
  },
  "pop": 949,
  "state": "AZ"
},{
  "city": "FLAGSTAFF",
  "zip": "86004",
  "loc": {
    "y": 35.225736,
    "x": 111.574109
  },
  "pop": 26878,
  "state": "AZ"
},{
  "city": "PINE APPLE",
  "zip": "36768",
  "loc": {
    "y": 31.926522,
    "x": 87.004667
  },
  "pop": 1658,
  "state": "AL"
},{
  "city": "SALEM",
  "zip": "36874",
  "loc": {
    "y": 32.621157,
    "x": 85.183966
  },
  "pop": 2773,
  "state": "AL"
},{
  "city": "JACHIN",
  "zip": "36910",
  "loc": {
    "y": 32.244174,
    "x": 88.233356
  },
  "pop": 480,
  "state": "AL"
},{
  "city": "WAVERLY",
  "zip": "36879",
  "loc": {
    "y": 32.763167,
    "x": 85.514372
  },
  "pop": 1689,
  "state": "AL"
},{
  "city": "SMITHS",
  "zip": "36877",
  "loc": {
    "y": 32.520072,
    "x": 85.100027
  },
  "pop": 10605,
  "state": "AL"
},{
  "city": "ANCHORAGE",
  "zip": "99518",
  "loc": {
    "y": 61.154862,
    "x": 149.886571
  },
  "pop": 8116,
  "state": "AK"
},{
  "city": "FALSE PASS",
  "zip": "99583",
  "loc": {
    "y": 54.841028,
    "x": 163.436845
  },
  "pop": 68,
  "state": "AK"
},{
  "city": "GLENNALLEN",
  "zip": "99588",
  "loc": {
    "y": 62.103895,
    "x": 145.661684
  },
  "pop": 1024,
  "state": "AK"
},{
  "city": "AKHIOK",
  "zip": "99615",
  "loc": {
    "y": 57.781967,
    "x": 152.500169
  },
  "pop": 13309,
  "state": "AK"
},{
  "city": "RUSSIAN MISSION",
  "zip": "99657",
  "loc": {
    "y": 61.591302,
    "x": 161.558413
  },
  "pop": 0,
  "state": "AK"
},{
  "city": "LOWER KALSKAG",
  "zip": "99626",
  "loc": {
    "y": 61.51377,
    "x": 160.359966
  },
  "pop": 291,
  "state": "AK"
},{
  "city": "SOUTH NAKNEK",
  "zip": "99670",
  "loc": {
    "y": 58.736221,
    "x": 156.850289
  },
  "pop": 929,
  "state": "AK"
},{
  "city": "FAIRBANKS",
  "zip": "99709",
  "loc": {
    "y": 64.85437,
    "x": 147.846917
  },
  "pop": 23238,
  "state": "AK"
},{
  "city": "BEAVER",
  "zip": "99724",
  "loc": {
    "y": 66.33883,
    "x": 147.279803
  },
  "pop": 103,
  "state": "AK"
},{
  "city": "ELIM",
  "zip": "99739",
  "loc": {
    "y": 64.621662,
    "x": 162.260371
  },
  "pop": 264,
  "state": "AK"
},{
  "city": "CANTWELL",
  "zip": "99729",
  "loc": {
    "y": 63.395458,
    "x": 148.89735
  },
  "pop": 210,
  "state": "AK"
},{
  "city": "MINTO",
  "zip": "99758",
  "loc": {
    "y": 65.058399,
    "x": 149.691186
  },
  "pop": 228,
  "state": "AK"
},{
  "city": "SHUNGNAK",
  "zip": "99773",
  "loc": {
    "y": 66.958141,
    "x": 157.613496
  },
  "pop": 0,
  "state": "AK"
},{
  "city": "TELLER",
  "zip": "99778",
  "loc": {
    "y": 65.240164,
    "x": 166.3833
  },
  "pop": 260,
  "state": "AK"
},{
  "city": "WAINWRIGHT",
  "zip": "99782",
  "loc": {
    "y": 70.620064,
    "x": 160.012532
  },
  "pop": 492,
  "state": "AK"
},{
  "city": "SITKA",
  "zip": "99835",
  "loc": {
    "y": 57.051436,
    "x": 135.316569
  },
  "pop": 8638,
  "state": "AK"
},{
  "city": "SKAGWAY",
  "zip": "99840",
  "loc": {
    "y": 59.468471,
    "x": 135.301794
  },
  "pop": 692,
  "state": "AK"
},{
  "city": "AMBLER",
  "zip": "99786",
  "loc": {
    "y": 67.46951,
    "x": 156.455652
  },
  "pop": 8,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85004",
  "loc": {
    "y": 33.455708,
    "x": 112.068584
  },
  "pop": 4491,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85033",
  "loc": {
    "y": 33.494426,
    "x": 112.213185
  },
  "pop": 41367,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85041",
  "loc": {
    "y": 33.388882,
    "x": 112.095437
  },
  "pop": 29343,
  "state": "AZ"
},{
  "city": "HIGLEY",
  "zip": "85236",
  "loc": {
    "y": 33.302382,
    "x": 111.696926
  },
  "pop": 3583,
  "state": "AZ"
},{
  "city": "ARIZONA BOYS RAN",
  "zip": "85242",
  "loc": {
    "y": 33.238577,
    "x": 111.643596
  },
  "pop": 2569,
  "state": "AZ"
},{
  "city": "SCOTTSDALE",
  "zip": "85259",
  "loc": {
    "y": 33.587943,
    "x": 111.840438
  },
  "pop": 7802,
  "state": "AZ"
},{
  "city": "GLENDALE",
  "zip": "85304",
  "loc": {
    "y": 33.594289,
    "x": 112.174575
  },
  "pop": 26463,
  "state": "AZ"
},{
  "city": "GLENDALE",
  "zip": "85308",
  "loc": {
    "y": 33.653924,
    "x": 112.169391
  },
  "pop": 31532,
  "state": "AZ"
},{
  "city": "GILA BEND",
  "zip": "85337",
  "loc": {
    "y": 32.93059,
    "x": 112.746832
  },
  "pop": 2898,
  "state": "AZ"
},{
  "city": "PALO VERDE",
  "zip": "85343",
  "loc": {
    "y": 33.34848,
    "x": 112.646662
  },
  "pop": 669,
  "state": "AZ"
},{
  "city": "PAYSON",
  "zip": "85541",
  "loc": {
    "y": 34.219779,
    "x": 111.287774
  },
  "pop": 13456,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85746",
  "loc": {
    "y": 32.142244,
    "x": 111.050569
  },
  "pop": 34683,
  "state": "AZ"
},{
  "city": "LAKESIDE",
  "zip": "85929",
  "loc": {
    "y": 34.166224,
    "x": 109.986878
  },
  "pop": 5350,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85735",
  "loc": {
    "y": 32.057796,
    "x": 111.260758
  },
  "pop": 2987,
  "state": "AZ"
},{
  "city": "TUBA CITY",
  "zip": "86045",
  "loc": {
    "y": 36.103729,
    "x": 111.268566
  },
  "pop": 10514,
  "state": "AZ"
},{
  "city": "COLORADO CITY",
  "zip": "86021",
  "loc": {
    "y": 36.976266,
    "x": 112.952427
  },
  "pop": 3065,
  "state": "AZ"
},{
  "city": "SPROTT",
  "zip": "36779",
  "loc": {
    "y": 32.654376,
    "x": 87.141599
  },
  "pop": 1191,
  "state": "AL"
},{
  "city": "THOMASVILLE",
  "zip": "36784",
  "loc": {
    "y": 31.906728,
    "x": 87.759842
  },
  "pop": 6229,
  "state": "AL"
},{
  "city": "LAWLEY",
  "zip": "36793",
  "loc": {
    "y": 32.864558,
    "x": 86.956708
  },
  "pop": 337,
  "state": "AL"
},{
  "city": "NOTASULGA",
  "zip": "36866",
  "loc": {
    "y": 32.543727,
    "x": 85.68707
  },
  "pop": 3361,
  "state": "AL"
},{
  "city": "ANCHORAGE",
  "zip": "99502",
  "loc": {
    "y": 61.096163,
    "x": 150.093943
  },
  "pop": 15891,
  "state": "AK"
},{
  "city": "ANCHORAGE",
  "zip": "99517",
  "loc": {
    "y": 61.190136,
    "x": 149.936111
  },
  "pop": 15192,
  "state": "AK"
},{
  "city": "COPPER CENTER",
  "zip": "99573",
  "loc": {
    "y": 61.91581,
    "x": 144.97793
  },
  "pop": 1389,
  "state": "AK"
},{
  "city": "SAINT GEORGE ISL",
  "zip": "99591",
  "loc": {
    "y": 56.60324,
    "x": 169.547257
  },
  "pop": 138,
  "state": "AK"
},{
  "city": "KOKHANOK",
  "zip": "99606",
  "loc": {
    "y": 59.564836,
    "x": 155.462556
  },
  "pop": 362,
  "state": "AK"
},{
  "city": "HOOPER BAY",
  "zip": "99604",
  "loc": {
    "y": 61.537157,
    "x": 165.891045
  },
  "pop": 1443,
  "state": "AK"
},{
  "city": "KOTLIK",
  "zip": "99620",
  "loc": {
    "y": 63.029471,
    "x": 163.554153
  },
  "pop": 462,
  "state": "AK"
},{
  "city": "UNALAKLEET",
  "zip": "99684",
  "loc": {
    "y": 63.883478,
    "x": 160.788365
  },
  "pop": 716,
  "state": "AK"
},{
  "city": "CENTRAL",
  "zip": "99730",
  "loc": {
    "y": 65.468058,
    "x": 144.74886
  },
  "pop": 107,
  "state": "AK"
},{
  "city": "PRUDHOE BAY",
  "zip": "99734",
  "loc": {
    "y": 70.070057,
    "x": 148.559636
  },
  "pop": 153,
  "state": "AK"
},{
  "city": "WHITE MOUNTAIN",
  "zip": "99784",
  "loc": {
    "y": 64.702791,
    "x": 163.42185
  },
  "pop": 194,
  "state": "AK"
},{
  "city": "JUNEAU",
  "zip": "99801",
  "loc": {
    "y": 58.362767,
    "x": 134.529429
  },
  "pop": 24947,
  "state": "AK"
},{
  "city": "CRAIG",
  "zip": "99921",
  "loc": {
    "y": 55.47317,
    "x": 133.117081
  },
  "pop": 1398,
  "state": "AK"
},{
  "city": "METLAKATLA",
  "zip": "99926",
  "loc": {
    "y": 55.121491,
    "x": 131.579001
  },
  "pop": 1469,
  "state": "AK"
},{
  "city": "MESA",
  "zip": "85213",
  "loc": {
    "y": 33.436688,
    "x": 111.773114
  },
  "pop": 23500,
  "state": "AZ"
},{
  "city": "STANFIELD",
  "zip": "85272",
  "loc": {
    "y": 32.882321,
    "x": 111.965987
  },
  "pop": 644,
  "state": "AZ"
},{
  "city": "WHY",
  "zip": "85321",
  "loc": {
    "y": 32.373485,
    "x": 112.858681
  },
  "pop": 3288,
  "state": "AZ"
},{
  "city": "EL MIRAGE",
  "zip": "85335",
  "loc": {
    "y": 33.608153,
    "x": 112.324147
  },
  "pop": 5234,
  "state": "AZ"
},{
  "city": "YARNELL",
  "zip": "85362",
  "loc": {
    "y": 34.414076,
    "x": 112.62166
  },
  "pop": 455,
  "state": "AZ"
},{
  "city": "FRANKLIN",
  "zip": "85534",
  "loc": {
    "y": 32.793976,
    "x": 109.129575
  },
  "pop": 2395,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85706",
  "loc": {
    "y": 32.139172,
    "x": 110.945127
  },
  "pop": 52458,
  "state": "AZ"
},{
  "city": "AMADO",
  "zip": "85645",
  "loc": {
    "y": 31.643759,
    "x": 111.072233
  },
  "pop": 1157,
  "state": "AZ"
},{
  "city": "PINETOP",
  "zip": "85935",
  "loc": {
    "y": 34.117459,
    "x": 109.919668
  },
  "pop": 1938,
  "state": "AZ"
},{
  "city": "EAGAR",
  "zip": "85925",
  "loc": {
    "y": 33.954571,
    "x": 109.246933
  },
  "pop": 482,
  "state": "AZ"
},{
  "city": "FLAGSTAFF",
  "zip": "86001",
  "loc": {
    "y": 35.185911,
    "x": 111.661979
  },
  "pop": 30174,
  "state": "AZ"
},{
  "city": "WINSLOW",
  "zip": "86047",
  "loc": {
    "y": 35.16078,
    "x": 110.511382
  },
  "pop": 17429,
  "state": "AZ"
},{
  "city": "GALLION",
  "zip": "36742",
  "loc": {
    "y": 32.529771,
    "x": 87.698542
  },
  "pop": 599,
  "state": "AL"
},{
  "city": "DEMOPOLIS",
  "zip": "36732",
  "loc": {
    "y": 32.490792,
    "x": 87.839669
  },
  "pop": 9992,
  "state": "AL"
},{
  "city": "LOWER PEACH TREE",
  "zip": "36751",
  "loc": {
    "y": 31.850365,
    "x": 87.568224
  },
  "pop": 323,
  "state": "AL"
},{
  "city": "SEALE",
  "zip": "36875",
  "loc": {
    "y": 32.305339,
    "x": 85.167733
  },
  "pop": 1949,
  "state": "AL"
},{
  "city": "KIPNUK",
  "zip": "99614",
  "loc": {
    "y": 59.923204,
    "x": 164.101013
  },
  "pop": 470,
  "state": "AK"
},{
  "city": "MOUNTAIN VILLAGE",
  "zip": "99632",
  "loc": {
    "y": 62.158913,
    "x": 163.883822
  },
  "pop": 788,
  "state": "AK"
},{
  "city": "NINILCHIK",
  "zip": "99639",
  "loc": {
    "y": 60.010833,
    "x": 151.639604
  },
  "pop": 767,
  "state": "AK"
},{
  "city": "BUTTE",
  "zip": "99645",
  "loc": {
    "y": 61.613814,
    "x": 149.065323
  },
  "pop": 12358,
  "state": "AK"
},{
  "city": "SCAMMON BAY",
  "zip": "99662",
  "loc": {
    "y": 61.845019,
    "x": 165.581945
  },
  "pop": 343,
  "state": "AK"
},{
  "city": "MANOKOTAK",
  "zip": "99628",
  "loc": {
    "y": 59.009559,
    "x": 158.989699
  },
  "pop": 385,
  "state": "AK"
},{
  "city": "BETTLES FIELD",
  "zip": "99726",
  "loc": {
    "y": 67.100495,
    "x": 151.062414
  },
  "pop": 156,
  "state": "AK"
},{
  "city": "GAMBELL",
  "zip": "99742",
  "loc": {
    "y": 63.776555,
    "x": 171.701685
  },
  "pop": 525,
  "state": "AK"
},{
  "city": "POINT BAKER",
  "zip": "99927",
  "loc": {
    "y": 56.307858,
    "x": 133.376372
  },
  "pop": 426,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85013",
  "loc": {
    "y": 33.508493,
    "x": 112.082657
  },
  "pop": 18467,
  "state": "AZ"
},{
  "city": "NEW RIVER STAGE",
  "zip": "85027",
  "loc": {
    "y": 33.667157,
    "x": 112.102723
  },
  "pop": 24843,
  "state": "AZ"
},{
  "city": "CHANDLER",
  "zip": "85226",
  "loc": {
    "y": 33.30917,
    "x": 111.919827
  },
  "pop": 17639,
  "state": "AZ"
},{
  "city": "ELOY",
  "zip": "85231",
  "loc": {
    "y": 32.750929,
    "x": 111.583275
  },
  "pop": 10670,
  "state": "AZ"
},{
  "city": "TEMPE",
  "zip": "85281",
  "loc": {
    "y": 33.422675,
    "x": 111.926144
  },
  "pop": 49218,
  "state": "AZ"
},{
  "city": "LUKE AFB",
  "zip": "85307",
  "loc": {
    "y": 33.534879,
    "x": 112.326735
  },
  "pop": 4120,
  "state": "AZ"
},{
  "city": "ARLINGTON",
  "zip": "85322",
  "loc": {
    "y": 33.313317,
    "x": 112.789058
  },
  "pop": 329,
  "state": "AZ"
},{
  "city": "SOMERTON",
  "zip": "85350",
  "loc": {
    "y": 32.563398,
    "x": 114.7127
  },
  "pop": 15339,
  "state": "AZ"
},{
  "city": "SALOME",
  "zip": "85348",
  "loc": {
    "y": 33.748141,
    "x": 113.571459
  },
  "pop": 1279,
  "state": "AZ"
},{
  "city": "GLOBE",
  "zip": "85501",
  "loc": {
    "y": 33.402426,
    "x": 110.789247
  },
  "pop": 13240,
  "state": "AZ"
},{
  "city": "BYLAS",
  "zip": "85530",
  "loc": {
    "y": 33.126549,
    "x": 110.11702
  },
  "pop": 1371,
  "state": "AZ"
},{
  "city": "ELFRIDA",
  "zip": "85610",
  "loc": {
    "y": 31.713891,
    "x": 109.619277
  },
  "pop": 1655,
  "state": "AZ"
},{
  "city": "AMADO",
  "zip": "85640",
  "loc": {
    "y": 31.594194,
    "x": 111.039693
  },
  "pop": 813,
  "state": "AZ"
},{
  "city": "SIERRA VISTA",
  "zip": "85635",
  "loc": {
    "y": 31.536467,
    "x": 110.266565
  },
  "pop": 33700,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85741",
  "loc": {
    "y": 32.347215,
    "x": 111.041873
  },
  "pop": 36400,
  "state": "AZ"
},{
  "city": "HEBER",
  "zip": "85928",
  "loc": {
    "y": 34.4163,
    "x": 110.568647
  },
  "pop": 1856,
  "state": "AZ"
},{
  "city": "GREENEHAVEN",
  "zip": "86040",
  "loc": {
    "y": 36.896625,
    "x": 111.43847
  },
  "pop": 8428,
  "state": "AZ"
},{
  "city": "MARION JUNCTION",
  "zip": "36759",
  "loc": {
    "y": 32.426589,
    "x": 87.270181
  },
  "pop": 796,
  "state": "AL"
},{
  "city": "BUTLER",
  "zip": "36904",
  "loc": {
    "y": 32.082906,
    "x": 88.206391
  },
  "pop": 4957,
  "state": "AL"
},{
  "city": "ANCHORAGE",
  "zip": "99515",
  "loc": {
    "y": 61.119381,
    "x": 149.897401
  },
  "pop": 17094,
  "state": "AK"
},{
  "city": "CROOKED CREEK",
  "zip": "99575",
  "loc": {
    "y": 61.818072,
    "x": 158.002483
  },
  "pop": 1,
  "state": "AK"
},{
  "city": "IGIUGIG",
  "zip": "99613",
  "loc": {
    "y": 58.724264,
    "x": 156.641603
  },
  "pop": 480,
  "state": "AK"
},{
  "city": "NAPAKIAK",
  "zip": "99634",
  "loc": {
    "y": 60.663758,
    "x": 161.738144
  },
  "pop": 328,
  "state": "AK"
},{
  "city": "NIKOLSKI",
  "zip": "99638",
  "loc": {
    "y": 52.988337,
    "x": 168.788427
  },
  "pop": 42,
  "state": "AK"
},{
  "city": "NONDALTON",
  "zip": "99640",
  "loc": {
    "y": 60.030837,
    "x": 154.731675
  },
  "pop": 233,
  "state": "AK"
},{
  "city": "PLATINUM",
  "zip": "99651",
  "loc": {
    "y": 58.63364,
    "x": 162.043201
  },
  "pop": 4,
  "state": "AK"
},{
  "city": "STEBBINS",
  "zip": "99671",
  "loc": {
    "y": 63.478468,
    "x": 162.227355
  },
  "pop": 400,
  "state": "AK"
},{
  "city": "VALDEZ",
  "zip": "99686",
  "loc": {
    "y": 60.895044,
    "x": 146.195628
  },
  "pop": 7049,
  "state": "AK"
},{
  "city": "FORT YUKON",
  "zip": "99740",
  "loc": {
    "y": 66.520744,
    "x": 145.306439
  },
  "pop": 662,
  "state": "AK"
},{
  "city": "KIVALINA",
  "zip": "99750",
  "loc": {
    "y": 67.665859,
    "x": 163.733617
  },
  "pop": 689,
  "state": "AK"
},{
  "city": "POINT HOPE",
  "zip": "99766",
  "loc": {
    "y": 68.312058,
    "x": 166.72618
  },
  "pop": 640,
  "state": "AK"
},{
  "city": "RAMPART",
  "zip": "99767",
  "loc": {
    "y": 65.383627,
    "x": 150.011201
  },
  "pop": 68,
  "state": "AK"
},{
  "city": "KETCHIKAN",
  "zip": "99901",
  "loc": {
    "y": 55.372028,
    "x": 131.683175
  },
  "pop": 13886,
  "state": "AK"
},{
  "city": "HYDABURG",
  "zip": "99922",
  "loc": {
    "y": 55.137406,
    "x": 132.633175
  },
  "pop": 891,
  "state": "AK"
},{
  "city": "KETCHIKAN",
  "zip": "99950",
  "loc": {
    "y": 55.942471,
    "x": 133.18479
  },
  "pop": 422,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85023",
  "loc": {
    "y": 33.632383,
    "x": 112.111838
  },
  "pop": 54668,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85037",
  "loc": {
    "y": 33.491278,
    "x": 112.246763
  },
  "pop": 13924,
  "state": "AZ"
},{
  "city": "WILLIAMS AFB",
  "zip": "85240",
  "loc": {
    "y": 33.310289,
    "x": 111.668801
  },
  "pop": 2574,
  "state": "AZ"
},{
  "city": "SCOTTSDALE",
  "zip": "85250",
  "loc": {
    "y": 33.521767,
    "x": 111.904926
  },
  "pop": 16133,
  "state": "AZ"
},{
  "city": "PARADISE VALLEY",
  "zip": "85253",
  "loc": {
    "y": 33.549439,
    "x": 111.956546
  },
  "pop": 15289,
  "state": "AZ"
},{
  "city": "SCOTTSDALE",
  "zip": "85257",
  "loc": {
    "y": 33.46693,
    "x": 111.915129
  },
  "pop": 30182,
  "state": "AZ"
},{
  "city": "SCOTTSDALE",
  "zip": "85254",
  "loc": {
    "y": 33.616476,
    "x": 111.955422
  },
  "pop": 37414,
  "state": "AZ"
},{
  "city": "BUCKEYE",
  "zip": "85326",
  "loc": {
    "y": 33.38896,
    "x": 112.607728
  },
  "pop": 13086,
  "state": "AZ"
},{
  "city": "PEORIA",
  "zip": "85381",
  "loc": {
    "y": 33.604761,
    "x": 112.223723
  },
  "pop": 9624,
  "state": "AZ"
},{
  "city": "SUN CITY",
  "zip": "85373",
  "loc": {
    "y": 33.658756,
    "x": 112.321397
  },
  "pop": 25878,
  "state": "AZ"
},{
  "city": "SUN CITY WEST",
  "zip": "85375",
  "loc": {
    "y": 33.662576,
    "x": 112.255434
  },
  "pop": 5702,
  "state": "AZ"
},{
  "city": "PATAGONIA",
  "zip": "85624",
  "loc": {
    "y": 31.535317,
    "x": 110.696774
  },
  "pop": 1430,
  "state": "AZ"
},{
  "city": "PISINEMO",
  "zip": "85634",
  "loc": {
    "y": 32.031572,
    "x": 111.922207
  },
  "pop": 9003,
  "state": "AZ"
},{
  "city": "HUACHUCA CITY",
  "zip": "85616",
  "loc": {
    "y": 31.663896,
    "x": 110.333414
  },
  "pop": 3639,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85745",
  "loc": {
    "y": 32.243359,
    "x": 111.017907
  },
  "pop": 25143,
  "state": "AZ"
},{
  "city": "ALPINE",
  "zip": "85920",
  "loc": {
    "y": 33.827878,
    "x": 109.12829
  },
  "pop": 243,
  "state": "AZ"
},{
  "city": "HOLBROOK",
  "zip": "86025",
  "loc": {
    "y": 34.908451,
    "x": 110.143412
  },
  "pop": 5567,
  "state": "AZ"
},{
  "city": "KAYENTA",
  "zip": "86033",
  "loc": {
    "y": 36.688327,
    "x": 110.265229
  },
  "pop": 7549,
  "state": "AZ"
},{
  "city": "MORMON LAKE",
  "zip": "86038",
  "loc": {
    "y": 34.916896,
    "x": 111.454914
  },
  "pop": 55,
  "state": "AZ"
},{
  "city": "MAPLESVILLE",
  "zip": "36750",
  "loc": {
    "y": 32.804507,
    "x": 86.871704
  },
  "pop": 1995,
  "state": "AL"
},{
  "city": "ORRVILLE",
  "zip": "36767",
  "loc": {
    "y": 32.294859,
    "x": 87.221368
  },
  "pop": 2680,
  "state": "AL"
},{
  "city": "SWEET WATER",
  "zip": "36782",
  "loc": {
    "y": 32.077272,
    "x": 87.922755
  },
  "pop": 2444,
  "state": "AL"
},{
  "city": "CAMP HILL",
  "zip": "36850",
  "loc": {
    "y": 32.782749,
    "x": 85.64738
  },
  "pop": 2422,
  "state": "AL"
},{
  "city": "HATCHECHUBBEE",
  "zip": "36858",
  "loc": {
    "y": 32.284531,
    "x": 85.302882
  },
  "pop": 772,
  "state": "AL"
},{
  "city": "LANETT",
  "zip": "36863",
  "loc": {
    "y": 32.861609,
    "x": 85.21608
  },
  "pop": 12083,
  "state": "AL"
},{
  "city": "HURTSBORO",
  "zip": "36860",
  "loc": {
    "y": 32.245429,
    "x": 85.395903
  },
  "pop": 1727,
  "state": "AL"
},{
  "city": "CUBA",
  "zip": "36907",
  "loc": {
    "y": 32.410973,
    "x": 88.361083
  },
  "pop": 1184,
  "state": "AL"
},{
  "city": "TOXEY",
  "zip": "36921",
  "loc": {
    "y": 31.93153,
    "x": 88.31794
  },
  "pop": 1980,
  "state": "AL"
},{
  "city": "AKIACHAK",
  "zip": "99551",
  "loc": {
    "y": 60.891854,
    "x": 161.39233
  },
  "pop": 481,
  "state": "AK"
},{
  "city": "CHEFORNAK",
  "zip": "99561",
  "loc": {
    "y": 60.153746,
    "x": 164.210294
  },
  "pop": 320,
  "state": "AK"
},{
  "city": "PORT GRAHAM",
  "zip": "99603",
  "loc": {
    "y": 59.665495,
    "x": 151.462644
  },
  "pop": 8186,
  "state": "AK"
},{
  "city": "MOOSE PASS",
  "zip": "99631",
  "loc": {
    "y": 60.85852,
    "x": 149.255911
  },
  "pop": 1649,
  "state": "AK"
},{
  "city": "PILOT STATION",
  "zip": "99650",
  "loc": {
    "y": 61.946159,
    "x": 162.874716
  },
  "pop": 463,
  "state": "AK"
},{
  "city": "MEKORYUK",
  "zip": "99630",
  "loc": {
    "y": 60.365679,
    "x": 166.283583
  },
  "pop": 177,
  "state": "AK"
},{
  "city": "DUTCH HARBOR",
  "zip": "99692",
  "loc": {
    "y": 53.362757,
    "x": 167.510656
  },
  "pop": 3,
  "state": "AK"
},{
  "city": "FAIRBANKS",
  "zip": "99712",
  "loc": {
    "y": 64.910879,
    "x": 147.510479
  },
  "pop": 8141,
  "state": "AK"
},{
  "city": "NOORVIK",
  "zip": "99763",
  "loc": {
    "y": 66.836353,
    "x": 161.044132
  },
  "pop": 534,
  "state": "AK"
},{
  "city": "HAINES",
  "zip": "99827",
  "loc": {
    "y": 59.251886,
    "x": 135.542032
  },
  "pop": 2246,
  "state": "AK"
},{
  "city": "GUSTAVUS",
  "zip": "99826",
  "loc": {
    "y": 58.42835,
    "x": 135.761542
  },
  "pop": 258,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85016",
  "loc": {
    "y": 33.502117,
    "x": 112.030496
  },
  "pop": 29527,
  "state": "AZ"
},{
  "city": "MESA",
  "zip": "85204",
  "loc": {
    "y": 33.399168,
    "x": 111.789554
  },
  "pop": 55180,
  "state": "AZ"
},{
  "city": "GOLD CANYON",
  "zip": "85219",
  "loc": {
    "y": 33.360787,
    "x": 111.51331
  },
  "pop": 14112,
  "state": "AZ"
},{
  "city": "MESA",
  "zip": "85201",
  "loc": {
    "y": 33.43174,
    "x": 111.846931
  },
  "pop": 40017,
  "state": "AZ"
},{
  "city": "ROCK SPRINGS",
  "zip": "85324",
  "loc": {
    "y": 34.073197,
    "x": 112.130956
  },
  "pop": 1819,
  "state": "AZ"
},{
  "city": "TONOPAH",
  "zip": "85354",
  "loc": {
    "y": 33.422797,
    "x": 112.952785
  },
  "pop": 95,
  "state": "AZ"
},{
  "city": "YUMA PROVING GRO",
  "zip": "85365",
  "loc": {
    "y": 32.671352,
    "x": 114.548633
  },
  "pop": 28179,
  "state": "AZ"
},{
  "city": "BISBEE",
  "zip": "85603",
  "loc": {
    "y": 31.408557,
    "x": 109.911736
  },
  "pop": 8471,
  "state": "AZ"
},{
  "city": "MARBLE CANYON",
  "zip": "86036",
  "loc": {
    "y": 36.956943,
    "x": 111.558166
  },
  "pop": 564,
  "state": "AZ"
},{
  "city": "BOYS RANCH",
  "zip": "36761",
  "loc": {
    "y": 32.095387,
    "x": 86.92497
  },
  "pop": 1714,
  "state": "AL"
},{
  "city": "LAFAYETTE",
  "zip": "36862",
  "loc": {
    "y": 32.925237,
    "x": 85.442563
  },
  "pop": 7045,
  "state": "AL"
},{
  "city": "WARD",
  "zip": "36922",
  "loc": {
    "y": 32.334063,
    "x": 88.297114
  },
  "pop": 274,
  "state": "AL"
},{
  "city": "ANCHORAGE",
  "zip": "99504",
  "loc": {
    "y": 61.203696,
    "x": 149.74467
  },
  "pop": 32383,
  "state": "AK"
},{
  "city": "CHUATHBALUK",
  "zip": "99557",
  "loc": {
    "y": 61.691648,
    "x": 157.758502
  },
  "pop": 352,
  "state": "AK"
},{
  "city": "KOLIGANEK",
  "zip": "99576",
  "loc": {
    "y": 59.059279,
    "x": 158.973533
  },
  "pop": 2711,
  "state": "AK"
},{
  "city": "EKWOK",
  "zip": "99580",
  "loc": {
    "y": 59.362792,
    "x": 157.478211
  },
  "pop": 77,
  "state": "AK"
},{
  "city": "NEW STUYAHOK",
  "zip": "99636",
  "loc": {
    "y": 59.593533,
    "x": 157.297205
  },
  "pop": 586,
  "state": "AK"
},{
  "city": "PEDRO BAY",
  "zip": "99647",
  "loc": {
    "y": 59.92238,
    "x": 153.821856
  },
  "pop": 59,
  "state": "AK"
},{
  "city": "PILOT POINT",
  "zip": "99649",
  "loc": {
    "y": 57.595193,
    "x": 157.449272
  },
  "pop": 63,
  "state": "AK"
},{
  "city": "WASILLA",
  "zip": "99654",
  "loc": {
    "y": 61.592349,
    "x": 149.395875
  },
  "pop": 10404,
  "state": "AK"
},{
  "city": "SAINT MARYS",
  "zip": "99658",
  "loc": {
    "y": 62.054106,
    "x": 163.205263
  },
  "pop": 576,
  "state": "AK"
},{
  "city": "SEWARD",
  "zip": "99664",
  "loc": {
    "y": 60.132874,
    "x": 149.39849
  },
  "pop": 3937,
  "state": "AK"
},{
  "city": "BARROW",
  "zip": "99723",
  "loc": {
    "y": 71.234637,
    "x": 156.817409
  },
  "pop": 3696,
  "state": "AK"
},{
  "city": "KAKTOVIK",
  "zip": "99747",
  "loc": {
    "y": 70.042889,
    "x": 143.631329
  },
  "pop": 245,
  "state": "AK"
},{
  "city": "VENETIE",
  "zip": "99781",
  "loc": {
    "y": 67.010446,
    "x": 146.413723
  },
  "pop": 184,
  "state": "AK"
},{
  "city": "POINT LAY",
  "zip": "99759",
  "loc": {
    "y": 69.705626,
    "x": 162.906148
  },
  "pop": 139,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85028",
  "loc": {
    "y": 33.585115,
    "x": 112.008724
  },
  "pop": 22662,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85031",
  "loc": {
    "y": 33.493909,
    "x": 112.16963
  },
  "pop": 21088,
  "state": "AZ"
},{
  "city": "FORT MCDOWELL",
  "zip": "85264",
  "loc": {
    "y": 33.611807,
    "x": 111.68062
  },
  "pop": 619,
  "state": "AZ"
},{
  "city": "CIBOLA",
  "zip": "85328",
  "loc": {
    "y": 33.614886,
    "x": 114.512204
  },
  "pop": 1285,
  "state": "AZ"
},{
  "city": "GLENDALE",
  "zip": "85301",
  "loc": {
    "y": 33.531122,
    "x": 112.176703
  },
  "pop": 46331,
  "state": "AZ"
},{
  "city": "YUMA",
  "zip": "85364",
  "loc": {
    "y": 32.701507,
    "x": 114.642362
  },
  "pop": 57131,
  "state": "AZ"
},{
  "city": "EDEN",
  "zip": "85535",
  "loc": {
    "y": 33.028629,
    "x": 109.953682
  },
  "pop": 55,
  "state": "AZ"
},{
  "city": "ROOSEVELT",
  "zip": "85545",
  "loc": {
    "y": 33.635753,
    "x": 110.974884
  },
  "pop": 65,
  "state": "AZ"
},{
  "city": "SAWYERVILLE",
  "zip": "36776",
  "loc": {
    "y": 32.757796,
    "x": 87.740201
  },
  "pop": 1684,
  "state": "AL"
},{
  "city": "FIVE POINTS",
  "zip": "36855",
  "loc": {
    "y": 33.042408,
    "x": 85.324264
  },
  "pop": 2400,
  "state": "AL"
},{
  "city": "GREEN VALLEY",
  "zip": "85614",
  "loc": {
    "y": 31.854271,
    "x": 111.000253
  },
  "pop": 15530,
  "state": "AZ"
},{
  "city": "CUSSETA",
  "zip": "36852",
  "loc": {
    "y": 32.803194,
    "x": 85.215791
  },
  "pop": 4597,
  "state": "AL"
},{
  "city": "PORTAL",
  "zip": "85632",
  "loc": {
    "y": 32.208167,
    "x": 109.367152
  },
  "pop": 1485,
  "state": "AZ"
},{
  "city": "LISMAN",
  "zip": "36912",
  "loc": {
    "y": 32.217722,
    "x": 88.323419
  },
  "pop": 2313,
  "state": "AL"
},{
  "city": "TUCSON",
  "zip": "85710",
  "loc": {
    "y": 32.213813,
    "x": 110.824046
  },
  "pop": 52679,
  "state": "AZ"
},{
  "city": "SILAS",
  "zip": "36919",
  "loc": {
    "y": 31.766754,
    "x": 88.309149
  },
  "pop": 2600,
  "state": "AL"
},{
  "city": "WILLIAMS",
  "zip": "86046",
  "loc": {
    "y": 35.543398,
    "x": 112.17075
  },
  "pop": 6117,
  "state": "AZ"
},{
  "city": "ALAKANUK",
  "zip": "99554",
  "loc": {
    "y": 62.746967,
    "x": 164.60228
  },
  "pop": 1186,
  "state": "AK"
},{
  "city": "AKUTAN",
  "zip": "99553",
  "loc": {
    "y": 54.143012,
    "x": 165.785368
  },
  "pop": 589,
  "state": "AK"
},{
  "city": "ANVIK",
  "zip": "99558",
  "loc": {
    "y": 62.830913,
    "x": 160.130441
  },
  "pop": 296,
  "state": "AK"
},{
  "city": "EGEGIK",
  "zip": "99579",
  "loc": {
    "y": 58.206174,
    "x": 157.342202
  },
  "pop": 122,
  "state": "AK"
},{
  "city": "GRAYLING",
  "zip": "99590",
  "loc": {
    "y": 63.372013,
    "x": 159.404907
  },
  "pop": 0,
  "state": "AK"
},{
  "city": "DOT LAKE",
  "zip": "99737",
  "loc": {
    "y": 64.005426,
    "x": 145.613611
  },
  "pop": 4111,
  "state": "AK"
},{
  "city": "BUCKLAND",
  "zip": "99727",
  "loc": {
    "y": 65.981052,
    "x": 161.131676
  },
  "pop": 318,
  "state": "AK"
},{
  "city": "HEALY",
  "zip": "99743",
  "loc": {
    "y": 63.917123,
    "x": 149.011128
  },
  "pop": 1057,
  "state": "AK"
},{
  "city": "SAVOONGA",
  "zip": "99769",
  "loc": {
    "y": 63.679737,
    "x": 170.470908
  },
  "pop": 519,
  "state": "AK"
},{
  "city": "STEVENS VILLAGE",
  "zip": "99774",
  "loc": {
    "y": 65.995894,
    "x": 149.118286
  },
  "pop": 110,
  "state": "AK"
},{
  "city": "WRANGELL",
  "zip": "99929",
  "loc": {
    "y": 56.433524,
    "x": 132.352918
  },
  "pop": 2573,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85012",
  "loc": {
    "y": 33.509744,
    "x": 112.067816
  },
  "pop": 6141,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85014",
  "loc": {
    "y": 33.510263,
    "x": 112.05557
  },
  "pop": 22646,
  "state": "AZ"
},{
  "city": "MESA",
  "zip": "85206",
  "loc": {
    "y": 33.402603,
    "x": 111.724223
  },
  "pop": 21274,
  "state": "AZ"
},{
  "city": "GILBERT",
  "zip": "85234",
  "loc": {
    "y": 33.352746,
    "x": 111.780876
  },
  "pop": 32606,
  "state": "AZ"
},{
  "city": "SUN LAKES",
  "zip": "85248",
  "loc": {
    "y": 33.223056,
    "x": 111.866899
  },
  "pop": 9399,
  "state": "AZ"
},{
  "city": "FLORENCE",
  "zip": "85232",
  "loc": {
    "y": 32.996881,
    "x": 111.361234
  },
  "pop": 9888,
  "state": "AZ"
},{
  "city": "GLENDALE",
  "zip": "85303",
  "loc": {
    "y": 33.526215,
    "x": 112.214937
  },
  "pop": 16045,
  "state": "AZ"
},{
  "city": "LAVEEN",
  "zip": "85339",
  "loc": {
    "y": 33.343572,
    "x": 112.171618
  },
  "pop": 6187,
  "state": "AZ"
},{
  "city": "GOODYEAR",
  "zip": "85338",
  "loc": {
    "y": 33.436809,
    "x": 112.383385
  },
  "pop": 5819,
  "state": "AZ"
},{
  "city": "WITTMANN",
  "zip": "85361",
  "loc": {
    "y": 33.726425,
    "x": 112.446578
  },
  "pop": 789,
  "state": "AZ"
},{
  "city": "STRAWBERRY",
  "zip": "85544",
  "loc": {
    "y": 34.390915,
    "x": 111.473483
  },
  "pop": 1903,
  "state": "AZ"
},{
  "city": "SAN CARLOS",
  "zip": "85550",
  "loc": {
    "y": 33.310643,
    "x": 110.395323
  },
  "pop": 2307,
  "state": "AZ"
},{
  "city": "MC NEAL",
  "zip": "85617",
  "loc": {
    "y": 31.502969,
    "x": 109.630971
  },
  "pop": 3135,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85705",
  "loc": {
    "y": 32.269088,
    "x": 110.984536
  },
  "pop": 52751,
  "state": "AZ"
},{
  "city": "BLUE",
  "zip": "85922",
  "loc": {
    "y": 33.651245,
    "x": 109.06849
  },
  "pop": 14,
  "state": "AZ"
},{
  "city": "SHOW LOW",
  "zip": "85901",
  "loc": {
    "y": 34.060117,
    "x": 110.054633
  },
  "pop": 16493,
  "state": "AZ"
},{
  "city": "LEUPP",
  "zip": "86035",
  "loc": {
    "y": 35.336528,
    "x": 110.992651
  },
  "pop": 2396,
  "state": "AZ"
},{
  "city": "PRESCOTT",
  "zip": "86301",
  "loc": {
    "y": 34.629909,
    "x": 113.022459
  },
  "pop": 915,
  "state": "AZ"
},{
  "city": "SHONTO",
  "zip": "86054",
  "loc": {
    "y": 36.61594,
    "x": 110.647743
  },
  "pop": 2049,
  "state": "AZ"
},{
  "city": "SECOND MESA",
  "zip": "86043",
  "loc": {
    "y": 35.903782,
    "x": 110.6472
  },
  "pop": 1653,
  "state": "AZ"
},{
  "city": "PINE HILL",
  "zip": "36769",
  "loc": {
    "y": 31.973546,
    "x": 87.577086
  },
  "pop": 2623,
  "state": "AL"
},{
  "city": "PHENIX CITY",
  "zip": "36869",
  "loc": {
    "y": 32.470647,
    "x": 85.018118
  },
  "pop": 28320,
  "state": "AL"
},{
  "city": "PHENIX CITY",
  "zip": "36867",
  "loc": {
    "y": 32.407816,
    "x": 85.095082
  },
  "pop": 13632,
  "state": "AL"
},{
  "city": "98791",
  "zip": "98791",
  "loc": {
    "y": 51.938901,
    "x": 176.310048
  },
  "pop": 5345,
  "state": "AK"
},{
  "city": "ELMENDORF AFB",
  "zip": "99506",
  "loc": {
    "y": 61.251531,
    "x": 149.812667
  },
  "pop": 7907,
  "state": "AK"
},{
  "city": "KENAI",
  "zip": "99611",
  "loc": {
    "y": 60.614467,
    "x": 151.254556
  },
  "pop": 10508,
  "state": "AK"
},{
  "city": "SHAGELUK",
  "zip": "99665",
  "loc": {
    "y": 62.661092,
    "x": 159.52816
  },
  "pop": 139,
  "state": "AK"
},{
  "city": "TUNUNAK",
  "zip": "99681",
  "loc": {
    "y": 60.539322,
    "x": 165.097464
  },
  "pop": 889,
  "state": "AK"
},{
  "city": "WILLOW",
  "zip": "99688",
  "loc": {
    "y": 61.771511,
    "x": 150.188891
  },
  "pop": 1237,
  "state": "AK"
},{
  "city": "THORNE BAY",
  "zip": "99919",
  "loc": {
    "y": 55.66086,
    "x": 132.513815
  },
  "pop": 744,
  "state": "AK"
},{
  "city": "MESA",
  "zip": "85203",
  "loc": {
    "y": 33.436952,
    "x": 111.805697
  },
  "pop": 32853,
  "state": "AZ"
},{
  "city": "MESA",
  "zip": "85205",
  "loc": {
    "y": 33.43685,
    "x": 111.712939
  },
  "pop": 35676,
  "state": "AZ"
},{
  "city": "TEMPE",
  "zip": "85284",
  "loc": {
    "y": 33.336302,
    "x": 111.919696
  },
  "pop": 12320,
  "state": "AZ"
},{
  "city": "MORRISTOWN",
  "zip": "85342",
  "loc": {
    "y": 33.772993,
    "x": 112.548331
  },
  "pop": 2878,
  "state": "AZ"
},{
  "city": "PEORIA",
  "zip": "85382",
  "loc": {
    "y": 33.63083,
    "x": 112.207177
  },
  "pop": 1738,
  "state": "AZ"
},{
  "city": "PIMA",
  "zip": "85543",
  "loc": {
    "y": 32.909661,
    "x": 109.856009
  },
  "pop": 2881,
  "state": "AZ"
},{
  "city": "SAHUARITA",
  "zip": "85629",
  "loc": {
    "y": 31.945169,
    "x": 111.000154
  },
  "pop": 2973,
  "state": "AZ"
},{
  "city": "ORO VALLEY",
  "zip": "85737",
  "loc": {
    "y": 32.431679,
    "x": 110.954463
  },
  "pop": 14077,
  "state": "AZ"
},{
  "city": "SAINT JOHNS",
  "zip": "85936",
  "loc": {
    "y": 34.501008,
    "x": 109.379617
  },
  "pop": 3844,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85743",
  "loc": {
    "y": 32.33655,
    "x": 111.177071
  },
  "pop": 4507,
  "state": "AZ"
},{
  "city": "HOTEVILLA",
  "zip": "86030",
  "loc": {
    "y": 36.211141,
    "x": 110.566107
  },
  "pop": 271,
  "state": "AZ"
},{
  "city": "POLACCA",
  "zip": "86042",
  "loc": {
    "y": 35.811812,
    "x": 110.51114
  },
  "pop": 1723,
  "state": "AZ"
},{
  "city": "MOBILE",
  "zip": "36617",
  "loc": {
    "y": 30.714522,
    "x": 88.091796
  },
  "pop": 17882,
  "state": "AL"
},{
  "city": "SELMA",
  "zip": "36701",
  "loc": {
    "y": 32.419719,
    "x": 87.024527
  },
  "pop": 26569,
  "state": "AL"
},{
  "city": "PRAIRIE",
  "zip": "36771",
  "loc": {
    "y": 32.084762,
    "x": 87.448723
  },
  "pop": 112,
  "state": "AL"
},{
  "city": "VALLEY",
  "zip": "36854",
  "loc": {
    "y": 32.811349,
    "x": 85.174911
  },
  "pop": 9504,
  "state": "AL"
},{
  "city": "YORK",
  "zip": "36925",
  "loc": {
    "y": 32.472765,
    "x": 88.268304
  },
  "pop": 5728,
  "state": "AL"
},{
  "city": "ANCHORAGE",
  "zip": "99503",
  "loc": {
    "y": 61.189953,
    "x": 149.893844
  },
  "pop": 12534,
  "state": "AK"
},{
  "city": "ANCHORAGE",
  "zip": "99508",
  "loc": {
    "y": 61.205959,
    "x": 149.810085
  },
  "pop": 29857,
  "state": "AK"
},{
  "city": "CHEVAK",
  "zip": "99563",
  "loc": {
    "y": 61.583982,
    "x": 164.776457
  },
  "pop": 0,
  "state": "AK"
},{
  "city": "CHIGNIK LAGOON",
  "zip": "99565",
  "loc": {
    "y": 56.251277,
    "x": 158.673528
  },
  "pop": 186,
  "state": "AK"
},{
  "city": "EAGLE RIVER",
  "zip": "99577",
  "loc": {
    "y": 61.311357,
    "x": 149.508515
  },
  "pop": 18429,
  "state": "AK"
},{
  "city": "MC GRATH",
  "zip": "99627",
  "loc": {
    "y": 62.967153,
    "x": 155.585153
  },
  "pop": 618,
  "state": "AK"
},{
  "city": "YAKUTAT",
  "zip": "99689",
  "loc": {
    "y": 59.620211,
    "x": 139.778858
  },
  "pop": 705,
  "state": "AK"
},{
  "city": "ANGOON",
  "zip": "99820",
  "loc": {
    "y": 57.569832,
    "x": 134.371052
  },
  "pop": 1002,
  "state": "AK"
},{
  "city": "PHOENIX",
  "zip": "85006",
  "loc": {
    "y": 33.465016,
    "x": 112.047357
  },
  "pop": 26747,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85024",
  "loc": {
    "y": 33.661664,
    "x": 112.036956
  },
  "pop": 14090,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85021",
  "loc": {
    "y": 33.559965,
    "x": 112.092686
  },
  "pop": 31201,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85003",
  "loc": {
    "y": 33.451095,
    "x": 112.077428
  },
  "pop": 10633,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85051",
  "loc": {
    "y": 33.559113,
    "x": 112.133168
  },
  "pop": 35671,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85043",
  "loc": {
    "y": 33.449056,
    "x": 112.197245
  },
  "pop": 7054,
  "state": "AZ"
},{
  "city": "MESA",
  "zip": "85207",
  "loc": {
    "y": 33.432073,
    "x": 111.64256
  },
  "pop": 12547,
  "state": "AZ"
},{
  "city": "PHOENIX",
  "zip": "85040",
  "loc": {
    "y": 33.390475,
    "x": 112.03126
  },
  "pop": 47527,
  "state": "AZ"
},{
  "city": "SCOTTSDALE",
  "zip": "85262",
  "loc": {
    "y": 33.77524,
    "x": 111.779135
  },
  "pop": 1614,
  "state": "AZ"
},{
  "city": "SUPERIOR",
  "zip": "85273",
  "loc": {
    "y": 33.288716,
    "x": 111.09846
  },
  "pop": 3901,
  "state": "AZ"
},{
  "city": "TEMPE",
  "zip": "85283",
  "loc": {
    "y": 33.366524,
    "x": 111.93122
  },
  "pop": 38332,
  "state": "AZ"
},{
  "city": "GLENDALE",
  "zip": "85305",
  "loc": {
    "y": 33.529103,
    "x": 112.248232
  },
  "pop": 1424,
  "state": "AZ"
},{
  "city": "LUKE AFB",
  "zip": "85309",
  "loc": {
    "y": 33.539993,
    "x": 112.356186
  },
  "pop": 3601,
  "state": "AZ"
},{
  "city": "WADDELL",
  "zip": "85355",
  "loc": {
    "y": 33.567285,
    "x": 112.43869
  },
  "pop": 2125,
  "state": "AZ"
},{
  "city": "BENSON",
  "zip": "85602",
  "loc": {
    "y": 31.98826,
    "x": 110.294113
  },
  "pop": 6141,
  "state": "AZ"
},{
  "city": "FORT HUACHUCA",
  "zip": "85613",
  "loc": {
    "y": 31.558735,
    "x": 110.344131
  },
  "pop": 8710,
  "state": "AZ"
},{
  "city": "PEARCE",
  "zip": "85625",
  "loc": {
    "y": 31.966608,
    "x": 109.795032
  },
  "pop": 2421,
  "state": "AZ"
},{
  "city": "MARANA",
  "zip": "85653",
  "loc": {
    "y": 32.404749,
    "x": 111.273621
  },
  "pop": 7562,
  "state": "AZ"
},{
  "city": "ASH FORK",
  "zip": "86320",
  "loc": {
    "y": 35.214998,
    "x": 112.502681
  },
  "pop": 563,
  "state": "AZ"
},{
  "city": "GREENSBORO",
  "zip": "36744",
  "loc": {
    "y": 32.716721,
    "x": 87.590494
  },
  "pop": 7680,
  "state": "AL"
},{
  "city": "FORKLAND",
  "zip": "36740",
  "loc": {
    "y": 32.644661,
    "x": 87.881676
  },
  "pop": 2121,
  "state": "AL"
},{
  "city": "LINDEN",
  "zip": "36748",
  "loc": {
    "y": 32.305343,
    "x": 87.795358
  },
  "pop": 5438,
  "state": "AL"
},{
  "city": "PLANTERSVILLE",
  "zip": "36758",
  "loc": {
    "y": 32.617608,
    "x": 86.947531
  },
  "pop": 946,
  "state": "AL"
},{
  "city": "STANTON",
  "zip": "36790",
  "loc": {
    "y": 32.709631,
    "x": 86.886848
  },
  "pop": 916,
  "state": "AL"
},{
  "city": "PITTSVIEW",
  "zip": "36871",
  "loc": {
    "y": 32.173346,
    "x": 85.131248
  },
  "pop": 1525,
  "state": "AL"
},{
  "city": "NEEDHAM",
  "zip": "36915",
  "loc": {
    "y": 32.012165,
    "x": 88.345798
  },
  "pop": 618,
  "state": "AL"
},{
  "city": "PORT HEIDEN",
  "zip": "99549",
  "loc": {
    "y": 56.964333,
    "x": 158.566367
  },
  "pop": 119,
  "state": "AK"
},{
  "city": "CHUGIAK",
  "zip": "99567",
  "loc": {
    "y": 61.409802,
    "x": 149.453736
  },
  "pop": 6910,
  "state": "AK"
},{
  "city": "KING COVE",
  "zip": "99612",
  "loc": {
    "y": 55.062848,
    "x": 162.305561
  },
  "pop": 451,
  "state": "AK"
},{
  "city": "SAINT PAUL ISLAN",
  "zip": "99660",
  "loc": {
    "y": 57.178697,
    "x": 170.293408
  },
  "pop": 763,
  "state": "AK"
},{
  "city": "SAINT MICHAEL",
  "zip": "99659",
  "loc": {
    "y": 63.47759,
    "x": 162.109141
  },
  "pop": 295,
  "state": "AK"
},{
  "city": "ARCTIC VILLAGE",
  "zip": "99722",
  "loc": {
    "y": 68.077395,
    "x": 145.423115
  },
  "pop": 107,
  "state": "AK"
},{
  "city": "UNALASKA",
  "zip": "99685",
  "loc": {
    "y": 53.887114,
    "x": 166.519855
  },
  "pop": 3089,
  "state": "AK"
},{
  "city": "CIRCLE",
  "zip": "99733",
  "loc": {
    "y": 65.824542,
    "x": 144.08262
  },
  "pop": 73,
  "state": "AK"
},{
  "city": "DEERING",
  "zip": "99736",
  "loc": {
    "y": 66.062265,
    "x": 162.711951
  },
  "pop": 167,
  "state": "AK"
},{
  "city": "KOTZEBUE",
  "zip": "99752",
  "loc": {
    "y": 66.846459,
    "x": 162.126493
  },
  "pop": 3347,
  "state": "AK"
},{
  "city": "SHAKTOOLIK",
  "zip": "99771",
  "loc": {
    "y": 64.375498,
    "x": 161.174589
  },
  "pop": 183,
  "state": "AK"
},{
  "city": "LAKE MINCHUMINA",
  "zip": "99757",
  "loc": {
    "y": 63.903884,
    "x": 152.430081
  },
  "pop": 32,
  "state": "AK"
},{
  "city": "MESA",
  "zip": "85202",
  "loc": {
    "y": 33.385095,
    "x": 111.872429
  },
  "pop": 40729,
  "state": "AZ"
},{
  "city": "CHANDLER",
  "zip": "85224",
  "loc": {
    "y": 33.330091,
    "x": 111.863156
  },
  "pop": 54023,
  "state": "AZ"
},{
  "city": "GLENDALE",
  "zip": "85302",
  "loc": {
    "y": 33.567487,
    "x": 112.175289
  },
  "pop": 32094,
  "state": "AZ"
},{
  "city": "GLENDALE",
  "zip": "85310",
  "loc": {
    "y": 33.704726,
    "x": 112.164131
  },
  "pop": 5369,
  "state": "AZ"
},{
  "city": "MIAMI",
  "zip": "85539",
  "loc": {
    "y": 33.431928,
    "x": 110.881182
  },
  "pop": 4866,
  "state": "AZ"
},{
  "city": "MORENCI",
  "zip": "85540",
  "loc": {
    "y": 33.043593,
    "x": 109.311517
  },
  "pop": 5223,
  "state": "AZ"
},{
  "city": "CASAS ADOBES",
  "zip": "85704",
  "loc": {
    "y": 32.329175,
    "x": 110.984593
  },
  "pop": 24039,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85714",
  "loc": {
    "y": 32.170657,
    "x": 110.971891
  },
  "pop": 16488,
  "state": "AZ"
},{
  "city": "TUCSON",
  "zip": "85719",
  "loc": {
    "y": 32.247426,
    "x": 110.949142
  },
  "pop": 39019,
  "state": "AZ"
},{
  "city": "GROOM CREEK",
  "zip": "86303",
  "loc": {
    "y": 34.558577,
    "x": 112.473459
  },
  "pop": 36617,
  "state": "AZ"
},{
  "city": "PAULDEN",
  "zip": "86334",
  "loc": {
    "y": 35.03129,
    "x": 112.544105
  },
  "pop": 24,
  "state": "AZ"
},{
  "city": "DESERT HILLS",
  "zip": "86403",
  "loc": {
    "y": 34.492879,
    "x": 114.308083
  },
  "pop": 26718,
  "state": "AZ"
},{
  "city": "DEWEY",
  "zip": "86327",
  "loc": {
    "y": 34.536753,
    "x": 112.256665
  },
  "pop": 3965,
  "state": "AZ"
},{
  "city": "CLARKDALE",
  "zip": "86324",
  "loc": {
    "y": 34.747793,
    "x": 112.033417
  },
  "pop": 7574,
  "state": "AZ"
},{
  "city": "PEACH SPRINGS",
  "zip": "86434",
  "loc": {
    "y": 35.537795,
    "x": 113.420199
  },
  "pop": 798,
  "state": "AZ"
},{
  "city": "SUPAI",
  "zip": "86435",
  "loc": {
    "y": 36.224157,
    "x": 112.693212
  },
  "pop": 423,
  "state": "AZ"
},{
  "city": "HAMBURG",
  "zip": "71646",
  "loc": {
    "y": 33.2058,
    "x": 91.802265
  },
  "pop": 5422,
  "state": "AR"
},{
  "city": "READER",
  "zip": "71726",
  "loc": {
    "y": 33.700148,
    "x": 93.018716
  },
  "pop": 1416,
  "state": "AR"
},{
  "city": "DE QUEEN",
  "zip": "71832",
  "loc": {
    "y": 34.044206,
    "x": 94.338559
  },
  "pop": 7593,
  "state": "AR"
},{
  "city": "FULTON",
  "zip": "71838",
  "loc": {
    "y": 33.629876,
    "x": 93.808562
  },
  "pop": 925,
  "state": "AR"
},{
  "city": "CADDO GAP",
  "zip": "71935",
  "loc": {
    "y": 34.397579,
    "x": 93.586376
  },
  "pop": 2257,
  "state": "AR"
},{
  "city": "UMPIRE",
  "zip": "71971",
  "loc": {
    "y": 34.292129,
    "x": 94.031377
  },
  "pop": 647,
  "state": "AR"
},{
  "city": "CHOCTAW",
  "zip": "72028",
  "loc": {
    "y": 35.523528,
    "x": 92.426412
  },
  "pop": 1091,
  "state": "AR"
},{
  "city": "CLEVELAND",
  "zip": "72030",
  "loc": {
    "y": 35.358328,
    "x": 92.712821
  },
  "pop": 1244,
  "state": "AR"
},{
  "city": "GUY",
  "zip": "72061",
  "loc": {
    "y": 35.318487,
    "x": 92.331539
  },
  "pop": 1026,
  "state": "AR"
},{
  "city": "GREENBRIER",
  "zip": "72058",
  "loc": {
    "y": 35.229547,
    "x": 92.357792
  },
  "pop": 5532,
  "state": "AR"
},{
  "city": "PARON",
  "zip": "72122",
  "loc": {
    "y": 34.785289,
    "x": 92.748176
  },
  "pop": 484,
  "state": "AR"
},{
  "city": "GEORGETOWN",
  "zip": "72143",
  "loc": {
    "y": 35.253512,
    "x": 91.762931
  },
  "pop": 22586,
  "state": "AR"
},{
  "city": "LITTLE ROCK",
  "zip": "72201",
  "loc": {
    "y": 34.748342,
    "x": 92.281939
  },
  "pop": 539,
  "state": "AR"
},{
  "city": "MORO",
  "zip": "72368",
  "loc": {
    "y": 34.802953,
    "x": 91.006026
  },
  "pop": 1571,
  "state": "AR"
},{
  "city": "CARAWAY",
  "zip": "72419",
  "loc": {
    "y": 35.758951,
    "x": 90.335797
  },
  "pop": 2214,
  "state": "AR"
},{
  "city": "MARMADUKE",
  "zip": "72443",
  "loc": {
    "y": 36.195117,
    "x": 90.38368
  },
  "pop": 2082,
  "state": "AR"
},{
  "city": "ROSELAND",
  "zip": "72442",
  "loc": {
    "y": 35.874885,
    "x": 90.180252
  },
  "pop": 3855,
  "state": "AR"
},{
  "city": "POWHATAN",
  "zip": "72458",
  "loc": {
    "y": 36.080044,
    "x": 91.148214
  },
  "pop": 476,
  "state": "AR"
},{
  "city": "PLEASANT GROVE",
  "zip": "72567",
  "loc": {
    "y": 35.842349,
    "x": 91.931905
  },
  "pop": 772,
  "state": "AR"
},{
  "city": "OAK GROVE",
  "zip": "72660",
  "loc": {
    "y": 36.461347,
    "x": 93.432129
  },
  "pop": 956,
  "state": "AR"
},{
  "city": "WESTERN GROVE",
  "zip": "72685",
  "loc": {
    "y": 36.082994,
    "x": 92.971649
  },
  "pop": 933,
  "state": "AR"
},{
  "city": "COTTONWOOD",
  "zip": "86326",
  "loc": {
    "y": 34.705547,
    "x": 112.009099
  },
  "pop": 8530,
  "state": "AZ"
},{
  "city": "STAR CITY",
  "zip": "71667",
  "loc": {
    "y": 33.940528,
    "x": 91.865343
  },
  "pop": 5913,
  "state": "AR"
},{
  "city": "CARTHAGE",
  "zip": "71725",
  "loc": {
    "y": 34.063625,
    "x": 92.62623
  },
  "pop": 1255,
  "state": "AR"
},{
  "city": "BRADLEY",
  "zip": "71826",
  "loc": {
    "y": 33.106963,
    "x": 93.627496
  },
  "pop": 2623,
  "state": "AR"
},{
  "city": "SARATOGA",
  "zip": "71859",
  "loc": {
    "y": 33.759883,
    "x": 93.876723
  },
  "pop": 281,
  "state": "AR"
},{
  "city": "WINTHROP",
  "zip": "71866",
  "loc": {
    "y": 33.858321,
    "x": 94.395174
  },
  "pop": 950,
  "state": "AR"
},{
  "city": "MC CASKILL",
  "zip": "71847",
  "loc": {
    "y": 33.923042,
    "x": 93.626605
  },
  "pop": 658,
  "state": "AR"
},{
  "city": "AMITY",
  "zip": "71921",
  "loc": {
    "y": 34.259362,
    "x": 93.420551
  },
  "pop": 1569,
  "state": "AR"
},{
  "city": "NEWHOPE",
  "zip": "71959",
  "loc": {
    "y": 34.227347,
    "x": 93.890487
  },
  "pop": 400,
  "state": "AR"
},{
  "city": "ROYAL",
  "zip": "71968",
  "loc": {
    "y": 34.515049,
    "x": 93.289734
  },
  "pop": 1099,
  "state": "AR"
},{
  "city": "PEARCY",
  "zip": "71964",
  "loc": {
    "y": 34.435092,
    "x": 93.242015
  },
  "pop": 3215,
  "state": "AR"
},{
  "city": "BRADFORD",
  "zip": "72020",
  "loc": {
    "y": 35.427655,
    "x": 91.518973
  },
  "pop": 3546,
  "state": "AR"
},{
  "city": "GRIFFITHVILLE",
  "zip": "72060",
  "loc": {
    "y": 35.114383,
    "x": 91.624234
  },
  "pop": 582,
  "state": "AR"
},{
  "city": "PRATTSVILLE",
  "zip": "72129",
  "loc": {
    "y": 34.307865,
    "x": 92.513105
  },
  "pop": 860,
  "state": "AR"
},{
  "city": "THIDA",
  "zip": "72165",
  "loc": {
    "y": 35.553556,
    "x": 91.461823
  },
  "pop": 616,
  "state": "AR"
},{
  "city": "WEST MEMPHIS",
  "zip": "72301",
  "loc": {
    "y": 35.148442,
    "x": 90.17792
  },
  "pop": 28720,
  "state": "AR"
},{
  "city": "EARLE",
  "zip": "72331",
  "loc": {
    "y": 35.27989,
    "x": 90.450261
  },
  "pop": 5009,
  "state": "AR"
},{
  "city": "HICKORY RIDGE",
  "zip": "72347",
  "loc": {
    "y": 35.399457,
    "x": 90.982283
  },
  "pop": 754,
  "state": "AR"
},{
  "city": "MELLWOOD",
  "zip": "72367",
  "loc": {
    "y": 34.220032,
    "x": 91.008589
  },
  "pop": 61,
  "state": "AR"
},{
  "city": "ALICIA",
  "zip": "72410",
  "loc": {
    "y": 35.942327,
    "x": 91.081003
  },
  "pop": 725,
  "state": "AR"
},{
  "city": "BEECH GROVE",
  "zip": "72412",
  "loc": {
    "y": 36.183172,
    "x": 90.618084
  },
  "pop": 292,
  "state": "AR"
},{
  "city": "KNOBEL",
  "zip": "72435",
  "loc": {
    "y": 36.317647,
    "x": 90.599048
  },
  "pop": 518,
  "state": "AR"
},{
  "city": "SWIFTON",
  "zip": "72471",
  "loc": {
    "y": 35.827366,
    "x": 91.126358
  },
  "pop": 1172,
  "state": "AR"
},{
  "city": "HORSESHOE BEND",
  "zip": "72512",
  "loc": {
    "y": 36.202502,
    "x": 91.755334
  },
  "pop": 3088,
  "state": "AR"
},{
  "city": "BEXAR",
  "zip": "72515",
  "loc": {
    "y": 36.306103,
    "x": 91.985998
  },
  "pop": 325,
  "state": "AR"
},{
  "city": "VIOLET HILL",
  "zip": "72584",
  "loc": {
    "y": 36.162966,
    "x": 91.847064
  },
  "pop": 220,
  "state": "AR"
},{
  "city": "BULL SHOALS",
  "zip": "72619",
  "loc": {
    "y": 36.370958,
    "x": 92.593765
  },
  "pop": 1967,
  "state": "AR"
},{
  "city": "WITTS SPRINGS",
  "zip": "72686",
  "loc": {
    "y": 35.785514,
    "x": 92.815518
  },
  "pop": 546,
  "state": "AR"
},{
  "city": "CORNVILLE",
  "zip": "86325",
  "loc": {
    "y": 34.725593,
    "x": 111.908556
  },
  "pop": 2612,
  "state": "AZ"
},{
  "city": "MC NEIL",
  "zip": "71752",
  "loc": {
    "y": 33.36222,
    "x": 93.193006
  },
  "pop": 2020,
  "state": "AR"
},{
  "city": "FOREMAN",
  "zip": "71836",
  "loc": {
    "y": 33.71759,
    "x": 94.388108
  },
  "pop": 2740,
  "state": "AR"
},{
  "city": "FOUKE",
  "zip": "71837",
  "loc": {
    "y": 33.302476,
    "x": 93.900953
  },
  "pop": 5895,
  "state": "AR"
},{
  "city": "GARLAND CITY",
  "zip": "71839",
  "loc": {
    "y": 33.335161,
    "x": 93.731624
  },
  "pop": 666,
  "state": "AR"
},{
  "city": "COVE",
  "zip": "71937",
  "loc": {
    "y": 34.419159,
    "x": 94.39234
  },
  "pop": 1681,
  "state": "AR"
},{
  "city": "BONNERDALE",
  "zip": "71933",
  "loc": {
    "y": 34.349751,
    "x": 93.319415
  },
  "pop": 1037,
  "state": "AR"
},{
  "city": "BEE BRANCH",
  "zip": "72013",
  "loc": {
    "y": 35.423367,
    "x": 92.408523
  },
  "pop": 1344,
  "state": "AR"
},{
  "city": "BRINKLEY",
  "zip": "72021",
  "loc": {
    "y": 34.878124,
    "x": 91.188596
  },
  "pop": 6313,
  "state": "AR"
},{
  "city": "EDGEMONT",
  "zip": "72044",
  "loc": {
    "y": 35.623006,
    "x": 92.199471
  },
  "pop": 487,
  "state": "AR"
},{
  "city": "ENOLA",
  "zip": "72047",
  "loc": {
    "y": 35.208705,
    "x": 92.212328
  },
  "pop": 500,
  "state": "AR"
},{
  "city": "FOX",
  "zip": "72051",
  "loc": {
    "y": 35.768208,
    "x": 92.304266
  },
  "pop": 960,
  "state": "AR"
},{
  "city": "GARNER",
  "zip": "72052",
  "loc": {
    "y": 35.130305,
    "x": 91.742884
  },
  "pop": 618,
  "state": "AR"
},{
  "city": "HOLLY GROVE",
  "zip": "72069",
  "loc": {
    "y": 34.599294,
    "x": 91.184376
  },
  "pop": 1417,
  "state": "AR"
},{
  "city": "GREERS FERRY",
  "zip": "72067",
  "loc": {
    "y": 35.549812,
    "x": 92.182284
  },
  "pop": 1802,
  "state": "AR"
},{
  "city": "LITTLE ROCK",
  "zip": "72210",
  "loc": {
    "y": 34.707625,
    "x": 92.465981
  },
  "pop": 4426,
  "state": "AR"
},{
  "city": "EDMONDSON",
  "zip": "72332",
  "loc": {
    "y": 35.022309,
    "x": 90.328672
  },
  "pop": 2435,
  "state": "AR"
},{
  "city": "ELAINE",
  "zip": "72333",
  "loc": {
    "y": 34.308668,
    "x": 90.873485
  },
  "pop": 1366,
  "state": "AR"
},{
  "city": "BROOKLAND",
  "zip": "72417",
  "loc": {
    "y": 35.91647,
    "x": 90.576228
  },
  "pop": 1896,
  "state": "AR"
},{
  "city": "FISHER",
  "zip": "72429",
  "loc": {
    "y": 35.513956,
    "x": 90.955001
  },
  "pop": 907,
  "state": "AR"
},{
  "city": "STATE UNIVERSITY",
  "zip": "72467",
  "loc": {
    "y": 35.914894,
    "x": 90.454245
  },
  "pop": 544,
  "state": "AR"
},{
  "city": "TUCKERMAN",
  "zip": "72473",
  "loc": {
    "y": 35.730678,
    "x": 91.200347
  },
  "pop": 2564,
  "state": "AR"
},{
  "city": "SIDNEY",
  "zip": "72577",
  "loc": {
    "y": 35.991554,
    "x": 91.634593
  },
  "pop": 743,
  "state": "AR"
},{
  "city": "SALADO",
  "zip": "72575",
  "loc": {
    "y": 35.703493,
    "x": 91.597924
  },
  "pop": 818,
  "state": "AR"
},{
  "city": "TIMBO",
  "zip": "72657",
  "loc": {
    "y": 35.896338,
    "x": 92.252536
  },
  "pop": 596,
  "state": "AR"
},{
  "city": "KINGMAN",
  "zip": "86401",
  "loc": {
    "y": 35.258379,
    "x": 114.05689
  },
  "pop": 32002,
  "state": "AZ"
},{
  "city": "LUKACHUKAI",
  "zip": "86507",
  "loc": {
    "y": 36.418111,
    "x": 109.244614
  },
  "pop": 1665,
  "state": "AZ"
},{
  "city": "TSAILE",
  "zip": "86556",
  "loc": {
    "y": 36.307075,
    "x": 109.217627
  },
  "pop": 1593,
  "state": "AZ"
},{
  "city": "GOULD",
  "zip": "71643",
  "loc": {
    "y": 34.034503,
    "x": 91.576798
  },
  "pop": 3765,
  "state": "AR"
},{
  "city": "NORTH",
  "zip": "71635",
  "loc": {
    "y": 33.152369,
    "x": 91.959152
  },
  "pop": 14645,
  "state": "AR"
},{
  "city": "EUDORA",
  "zip": "71640",
  "loc": {
    "y": 33.12135,
    "x": 91.271552
  },
  "pop": 4860,
  "state": "AR"
},{
  "city": "EAST CAMDEN",
  "zip": "71701",
  "loc": {
    "y": 33.575866,
    "x": 92.833386
  },
  "pop": 22640,
  "state": "AR"
},{
  "city": "FORDYCE",
  "zip": "71742",
  "loc": {
    "y": 33.817648,
    "x": 92.422475
  },
  "pop": 6001,
  "state": "AR"
},{
  "city": "GURDON",
  "zip": "71743",
  "loc": {
    "y": 33.912493,
    "x": 93.141691
  },
  "pop": 4180,
  "state": "AR"
},{
  "city": "COLUMBUS",
  "zip": "71831",
  "loc": {
    "y": 33.745108,
    "x": 93.85588
  },
  "pop": 739,
  "state": "AR"
},{
  "city": "LANGLEY",
  "zip": "71952",
  "loc": {
    "y": 34.314035,
    "x": 93.850942
  },
  "pop": 215,
  "state": "AR"
},{
  "city": "BUCKVILLE",
  "zip": "71956",
  "loc": {
    "y": 34.577182,
    "x": 93.160041
  },
  "pop": 1857,
  "state": "AR"
},{
  "city": "ALEXANDER",
  "zip": "72002",
  "loc": {
    "y": 34.631266,
    "x": 92.472673
  },
  "pop": 7984,
  "state": "AR"
},{
  "city": "VANDERVOORT",
  "zip": "71972",
  "loc": {
    "y": 34.379535,
    "x": 94.369788
  },
  "pop": 323,
  "state": "AR"
},{
  "city": "DE VALLS BLUFF",
  "zip": "72041",
  "loc": {
    "y": 34.744704,
    "x": 91.498218
  },
  "pop": 1854,
  "state": "AR"
},{
  "city": "SCOTLAND",
  "zip": "72141",
  "loc": {
    "y": 35.507956,
    "x": 92.586652
  },
  "pop": 1276,
  "state": "AR"
},{
  "city": "WARD",
  "zip": "72176",
  "loc": {
    "y": 34.95316,
    "x": 91.900383
  },
  "pop": 3503,
  "state": "AR"
},{
  "city": "BASSETT",
  "zip": "72313",
  "loc": {
    "y": 35.513808,
    "x": 90.192155
  },
  "pop": 1147,
  "state": "AR"
},{
  "city": "GILMORE",
  "zip": "72339",
  "loc": {
    "y": 35.386408,
    "x": 90.264664
  },
  "pop": 1852,
  "state": "AR"
},{
  "city": "PALESTINE",
  "zip": "72372",
  "loc": {
    "y": 34.966346,
    "x": 90.904929
  },
  "pop": 1371,
  "state": "AR"
},{
  "city": "WILSON",
  "zip": "72395",
  "loc": {
    "y": 35.566004,
    "x": 90.042749
  },
  "pop": 1185,
  "state": "AR"
},{
  "city": "WYNNE",
  "zip": "72396",
  "loc": {
    "y": 35.233036,
    "x": 90.79303
  },
  "pop": 13908,
  "state": "AR"
},{
  "city": "GREENWAY",
  "zip": "72430",
  "loc": {
    "y": 36.334766,
    "x": 90.225257
  },
  "pop": 529,
  "state": "AR"
},{
  "city": "LYNN",
  "zip": "72440",
  "loc": {
    "y": 36.016639,
    "x": 91.254588
  },
  "pop": 1032,
  "state": "AR"
},{
  "city": "MINTURN",
  "zip": "72445",
  "loc": {
    "y": 35.976096,
    "x": 91.033704
  },
  "pop": 364,
  "state": "AR"
},{
  "city": "PAYNEWAY",
  "zip": "72472",
  "loc": {
    "y": 35.668914,
    "x": 90.518738
  },
  "pop": 8179,
  "state": "AR"
},{
  "city": "CAVE CITY",
  "zip": "72521",
  "loc": {
    "y": 35.951684,
    "x": 91.544432
  },
  "pop": 2111,
  "state": "AR"
},{
  "city": "DOLPH",
  "zip": "72528",
  "loc": {
    "y": 36.222878,
    "x": 92.11766
  },
  "pop": 348,
  "state": "AR"
},{
  "city": "GAMALIEL",
  "zip": "72537",
  "loc": {
    "y": 36.461794,
    "x": 92.228447
  },
  "pop": 301,
  "state": "AR"
},{
  "city": "MAMMOTH SPRING",
  "zip": "72554",
  "loc": {
    "y": 36.407648,
    "x": 91.575712
  },
  "pop": 4075,
  "state": "AR"
},{
  "city": "HARDY",
  "zip": "72542",
  "loc": {
    "y": 36.322746,
    "x": 91.411027
  },
  "pop": 2473,
  "state": "AR"
},{
  "city": "MARCELLA",
  "zip": "72555",
  "loc": {
    "y": 35.749654,
    "x": 91.941891
  },
  "pop": 535,
  "state": "AR"
},{
  "city": "ALPENA",
  "zip": "72611",
  "loc": {
    "y": 36.299768,
    "x": 93.2792
  },
  "pop": 780,
  "state": "AR"
},{
  "city": "MIDWAY",
  "zip": "72651",
  "loc": {
    "y": 36.290454,
    "x": 92.431398
  },
  "pop": 408,
  "state": "AR"
},{
  "city": "MARSHALL",
  "zip": "72650",
  "loc": {
    "y": 35.926697,
    "x": 92.640203
  },
  "pop": 2882,
  "state": "AR"
},{
  "city": "GASSVILLE",
  "zip": "72635",
  "loc": {
    "y": 36.317525,
    "x": 92.473637
  },
  "pop": 3568,
  "state": "AR"
},{
  "city": "BULLHEAD CITY",
  "zip": "86430",
  "loc": {
    "y": 35.014832,
    "x": 114.588816
  },
  "pop": 3196,
  "state": "AZ"
},{
  "city": "HUALAPAI",
  "zip": "86412",
  "loc": {
    "y": 35.540732,
    "x": 113.295324
  },
  "pop": 2,
  "state": "AZ"
},{
  "city": "MEADVIEW",
  "zip": "86444",
  "loc": {
    "y": 35.813733,
    "x": 114.327696
  },
  "pop": 118,
  "state": "AZ"
},{
  "city": "CHINLE",
  "zip": "86503",
  "loc": {
    "y": 36.130367,
    "x": 109.603693
  },
  "pop": 10679,
  "state": "AZ"
},{
  "city": "DOLLARWAY",
  "zip": "71602",
  "loc": {
    "y": 34.257001,
    "x": 92.089718
  },
  "pop": 15547,
  "state": "AR"
},{
  "city": "FOUNTAIN HILL",
  "zip": "71642",
  "loc": {
    "y": 33.342951,
    "x": 91.835627
  },
  "pop": 704,
  "state": "AR"
},{
  "city": "HAMPTON",
  "zip": "71744",
  "loc": {
    "y": 33.537613,
    "x": 92.52951
  },
  "pop": 3505,
  "state": "AR"
},{
  "city": "NASHVILLE",
  "zip": "71852",
  "loc": {
    "y": 33.957646,
    "x": 93.870709
  },
  "pop": 7625,
  "state": "AR"
},{
  "city": "ARKADELPHIA",
  "zip": "71923",
  "loc": {
    "y": 34.11525,
    "x": 93.068989
  },
  "pop": 14961,
  "state": "AR"
},{
  "city": "DONALDSON",
  "zip": "71941",
  "loc": {
    "y": 34.221221,
    "x": 92.909384
  },
  "pop": 748,
  "state": "AR"
},{
  "city": "ALMYRA",
  "zip": "72003",
  "loc": {
    "y": 34.41459,
    "x": 91.430992
  },
  "pop": 626,
  "state": "AR"
},{
  "city": "ETHEL",
  "zip": "72048",
  "loc": {
    "y": 34.243525,
    "x": 91.139839
  },
  "pop": 27,
  "state": "AR"
},{
  "city": "HUMPHREY",
  "zip": "72073",
  "loc": {
    "y": 34.403387,
    "x": 91.67896
  },
  "pop": 851,
  "state": "AR"
},{
  "city": "KEO",
  "zip": "72083",
  "loc": {
    "y": 34.604072,
    "x": 92.007844
  },
  "pop": 278,
  "state": "AR"
},{
  "city": "NEWPORT",
  "zip": "72112",
  "loc": {
    "y": 35.598823,
    "x": 91.257064
  },
  "pop": 13502,
  "state": "AR"
},{
  "city": "HICKORY PLAINS",
  "zip": "72066",
  "loc": {
    "y": 34.978642,
    "x": 91.750844
  },
  "pop": 522,
  "state": "AR"
},{
  "city": "TUCKER",
  "zip": "72168",
  "loc": {
    "y": 34.441442,
    "x": 91.916265
  },
  "pop": 2170,
  "state": "AR"
},{
  "city": "ROMANCE",
  "zip": "72136",
  "loc": {
    "y": 35.215462,
    "x": 92.06985
  },
  "pop": 576,
  "state": "AR"
},{
  "city": "COLT",
  "zip": "72326",
  "loc": {
    "y": 35.096062,
    "x": 90.787204
  },
  "pop": 3755,
  "state": "AR"
},{
  "city": "LEXA",
  "zip": "72355",
  "loc": {
    "y": 34.672694,
    "x": 90.78532
  },
  "pop": 903,
  "state": "AR"
},{
  "city": "MARKED TREE",
  "zip": "72365",
  "loc": {
    "y": 35.534933,
    "x": 90.419387
  },
  "pop": 5144,
  "state": "AR"
},{
  "city": "BAY",
  "zip": "72411",
  "loc": {
    "y": 35.74559,
    "x": 90.550658
  },
  "pop": 2527,
  "state": "AR"
},{
  "city": "DATTO",
  "zip": "72424",
  "loc": {
    "y": 36.389685,
    "x": 90.723117
  },
  "pop": 308,
  "state": "AR"
},{
  "city": "LAFE",
  "zip": "72436",
  "loc": {
    "y": 36.21547,
    "x": 90.506973
  },
  "pop": 1007,
  "state": "AR"
},{
  "city": "LAKE CITY",
  "zip": "72437",
  "loc": {
    "y": 35.81715,
    "x": 90.442327
  },
  "pop": 2056,
  "state": "AR"
},{
  "city": "CALAMINE",
  "zip": "72469",
  "loc": {
    "y": 35.972622,
    "x": 91.375398
  },
  "pop": 1078,
  "state": "AR"
},{
  "city": "SMITHVILLE",
  "zip": "72466",
  "loc": {
    "y": 36.090815,
    "x": 91.274456
  },
  "pop": 427,
  "state": "AR"
},{
  "city": "BROCKWELL",
  "zip": "72517",
  "loc": {
    "y": 36.135755,
    "x": 91.951308
  },
  "pop": 548,
  "state": "AR"
},{
  "city": "PINEVILLE",
  "zip": "72566",
  "loc": {
    "y": 36.167704,
    "x": 92.107299
  },
  "pop": 356,
  "state": "AR"
},{
  "city": "BYRON",
  "zip": "72576",
  "loc": {
    "y": 36.365401,
    "x": 91.836321
  },
  "pop": 2561,
  "state": "AR"
},{
  "city": "ALCO",
  "zip": "72610",
  "loc": {
    "y": 35.894511,
    "x": 92.380753
  },
  "pop": 172,
  "state": "AR"
},{
  "city": "BIG FLAT",
  "zip": "72617",
  "loc": {
    "y": 36.006824,
    "x": 92.391681
  },
  "pop": 244,
  "state": "AR"
},{
  "city": "COTTER",
  "zip": "72626",
  "loc": {
    "y": 36.280378,
    "x": 92.532787
  },
  "pop": 1044,
  "state": "AR"
},{
  "city": "TOPOCK",
  "zip": "86436",
  "loc": {
    "y": 34.778388,
    "x": 114.481666
  },
  "pop": 912,
  "state": "AZ"
},{
  "city": "KINGSLAND",
  "zip": "71652",
  "loc": {
    "y": 33.86002,
    "x": 92.301415
  },
  "pop": 993,
  "state": "AR"
},{
  "city": "MONTROSE",
  "zip": "71658",
  "loc": {
    "y": 33.307516,
    "x": 91.522776
  },
  "pop": 948,
  "state": "AR"
},{
  "city": "BANKS",
  "zip": "71631",
  "loc": {
    "y": 33.549665,
    "x": 92.260386
  },
  "pop": 514,
  "state": "AR"
},{
  "city": "BISMARCK",
  "zip": "71929",
  "loc": {
    "y": 34.311033,
    "x": 93.187236
  },
  "pop": 1291,
  "state": "AR"
},{
  "city": "BLEVINS",
  "zip": "71825",
  "loc": {
    "y": 33.875468,
    "x": 93.536035
  },
  "pop": 831,
  "state": "AR"
},{
  "city": "ADONA",
  "zip": "72001",
  "loc": {
    "y": 35.046956,
    "x": 92.903325
  },
  "pop": 494,
  "state": "AR"
},{
  "city": "PANGBURN",
  "zip": "72121",
  "loc": {
    "y": 35.421583,
    "x": 91.795971
  },
  "pop": 1996,
  "state": "AR"
},{
  "city": "MALVERN",
  "zip": "72104",
  "loc": {
    "y": 34.355715,
    "x": 92.829162
  },
  "pop": 20257,
  "state": "AR"
},{
  "city": "REDFIELD",
  "zip": "72132",
  "loc": {
    "y": 34.452647,
    "x": 92.17579
  },
  "pop": 1888,
  "state": "AR"
},{
  "city": "LITTLE ROCK",
  "zip": "72204",
  "loc": {
    "y": 34.726904,
    "x": 92.344041
  },
  "pop": 33104,
  "state": "AR"
},{
  "city": "ROSE BUD",
  "zip": "72137",
  "loc": {
    "y": 35.321447,
    "x": 92.061988
  },
  "pop": 891,
  "state": "AR"
},{
  "city": "LITTLE ROCK",
  "zip": "72207",
  "loc": {
    "y": 34.772121,
    "x": 92.356481
  },
  "pop": 25217,
  "state": "AR"
},{
  "city": "CHERRY VALLEY",
  "zip": "72324",
  "loc": {
    "y": 35.399122,
    "x": 90.761329
  },
  "pop": 1273,
  "state": "AR"
},{
  "city": "LUXORA",
  "zip": "72358",
  "loc": {
    "y": 35.760786,
    "x": 89.92204
  },
  "pop": 1593,
  "state": "AR"
},{
  "city": "OSCEOLA",
  "zip": "72370",
  "loc": {
    "y": 35.701864,
    "x": 89.979764
  },
  "pop": 10119,
  "state": "AR"
},{
  "city": "BLACK OAK",
  "zip": "72414",
  "loc": {
    "y": 35.835851,
    "x": 90.354227
  },
  "pop": 518,
  "state": "AR"
},{
  "city": "CASH",
  "zip": "72421",
  "loc": {
    "y": 35.830145,
    "x": 90.941007
  },
  "pop": 628,
  "state": "AR"
},{
  "city": "MAYNARD",
  "zip": "72444",
  "loc": {
    "y": 36.438563,
    "x": 90.874921
  },
  "pop": 1616,
  "state": "AR"
},{
  "city": "RECTOR",
  "zip": "72461",
  "loc": {
    "y": 36.267177,
    "x": 90.270201
  },
  "pop": 3515,
  "state": "AR"
},{
  "city": "WARM SPRINGS",
  "zip": "72478",
  "loc": {
    "y": 36.467531,
    "x": 91.038707
  },
  "pop": 238,
  "state": "AR"
},{
  "city": "FRANKLIN",
  "zip": "72536",
  "loc": {
    "y": 36.129093,
    "x": 91.809592
  },
  "pop": 364,
  "state": "AR"
},{
  "city": "HEBER SPRINGS",
  "zip": "72543",
  "loc": {
    "y": 35.510278,
    "x": 92.039211
  },
  "pop": 8709,
  "state": "AR"
},{
  "city": "GUION",
  "zip": "72540",
  "loc": {
    "y": 35.960135,
    "x": 91.934287
  },
  "pop": 226,
  "state": "AR"
},{
  "city": "OIL TROUGH",
  "zip": "72564",
  "loc": {
    "y": 35.613147,
    "x": 91.470305
  },
  "pop": 674,
  "state": "AR"
},{
  "city": "STURKIE",
  "zip": "72578",
  "loc": {
    "y": 36.463869,
    "x": 91.989917
  },
  "pop": 168,
  "state": "AR"
},{
  "city": "BASS",
  "zip": "72612",
  "loc": {
    "y": 35.892225,
    "x": 92.999832
  },
  "pop": 261,
  "state": "AR"
},{
  "city": "BERRYVILLE",
  "zip": "72616",
  "loc": {
    "y": 36.351908,
    "x": 93.558725
  },
  "pop": 6821,
  "state": "AR"
},{
  "city": "DEER",
  "zip": "72628",
  "loc": {
    "y": 35.852982,
    "x": 93.317388
  },
  "pop": 1378,
  "state": "AR"
},{
  "city": "SAFFELL",
  "zip": "72572",
  "loc": {
    "y": 35.917957,
    "x": 91.297753
  },
  "pop": 379,
  "state": "AR"
},{
  "city": "MC GEHEE",
  "zip": "71654",
  "loc": {
    "y": 33.62971,
    "x": 91.392781
  },
  "pop": 6646,
  "state": "AR"
},{
  "city": "PORTLAND",
  "zip": "71663",
  "loc": {
    "y": 33.231773,
    "x": 91.513935
  },
  "pop": 773,
  "state": "AR"
},{
  "city": "DUMAS",
  "zip": "71639",
  "loc": {
    "y": 33.892102,
    "x": 91.486056
  },
  "pop": 7033,
  "state": "AR"
},{
  "city": "WATSON",
  "zip": "71674",
  "loc": {
    "y": 33.890737,
    "x": 91.281455
  },
  "pop": 1003,
  "state": "AR"
},{
  "city": "WILMAR",
  "zip": "71675",
  "loc": {
    "y": 33.621296,
    "x": 91.925697
  },
  "pop": 1293,
  "state": "AR"
},{
  "city": "YORKTOWN",
  "zip": "71678",
  "loc": {
    "y": 34.017166,
    "x": 91.796472
  },
  "pop": 868,
  "state": "AR"
},{
  "city": "HARRELL",
  "zip": "71745",
  "loc": {
    "y": 33.510865,
    "x": 92.391243
  },
  "pop": 846,
  "state": "AR"
},{
  "city": "NORPHLET",
  "zip": "71759",
  "loc": {
    "y": 33.309619,
    "x": 92.657619
  },
  "pop": 1765,
  "state": "AR"
},{
  "city": "ASHDOWN",
  "zip": "71822",
  "loc": {
    "y": 33.678711,
    "x": 94.135102
  },
  "pop": 8514,
  "state": "AR"
},{
  "city": "BUCKNER",
  "zip": "71827",
  "loc": {
    "y": 33.375323,
    "x": 93.446998
  },
  "pop": 1364,
  "state": "AR"
},{
  "city": "LAKE CATHERINE",
  "zip": "71901",
  "loc": {
    "y": 34.501475,
    "x": 93.026024
  },
  "pop": 27402,
  "state": "AR"
},{
  "city": "GRANNIS",
  "zip": "71944",
  "loc": {
    "y": 34.237021,
    "x": 94.3255
  },
  "pop": 751,
  "state": "AR"
},{
  "city": "LOCKESBURG",
  "zip": "71846",
  "loc": {
    "y": 33.930553,
    "x": 94.127588
  },
  "pop": 2239,
  "state": "AR"
},{
  "city": "AUSTIN",
  "zip": "72007",
  "loc": {
    "y": 35.028369,
    "x": 91.959398
  },
  "pop": 1741,
  "state": "AR"
},{
  "city": "BIGELOW",
  "zip": "72016",
  "loc": {
    "y": 34.984659,
    "x": 92.630842
  },
  "pop": 2001,
  "state": "AR"
},{
  "city": "EL PASO",
  "zip": "72045",
  "loc": {
    "y": 35.114176,
    "x": 92.090076
  },
  "pop": 580,
  "state": "AR"
},{
  "city": "CARLISLE",
  "zip": "72024",
  "loc": {
    "y": 34.793291,
    "x": 91.745929
  },
  "pop": 2904,
  "state": "AR"
},{
  "city": "GRAVEL RIDGE",
  "zip": "72076",
  "loc": {
    "y": 34.881985,
    "x": 92.130435
  },
  "pop": 37428,
  "state": "AR"
},{
  "city": "MORRILTON",
  "zip": "72110",
  "loc": {
    "y": 35.169227,
    "x": 92.735436
  },
  "pop": 12976,
  "state": "AR"
},{
  "city": "NORTH LITTLE ROC",
  "zip": "72114",
  "loc": {
    "y": 34.766974,
    "x": 92.265376
  },
  "pop": 15485,
  "state": "AR"
},{
  "city": "SHERWOOD",
  "zip": "72116",
  "loc": {
    "y": 34.807629,
    "x": 92.237359
  },
  "pop": 29871,
  "state": "AR"
},{
  "city": "MC CRORY",
  "zip": "72101",
  "loc": {
    "y": 35.247292,
    "x": 91.179327
  },
  "pop": 4029,
  "state": "AR"
},{
  "city": "ROE",
  "zip": "72134",
  "loc": {
    "y": 34.628592,
    "x": 91.377058
  },
  "pop": 392,
  "state": "AR"
},{
  "city": "SHERRILL",
  "zip": "72152",
  "loc": {
    "y": 34.358148,
    "x": 91.993285
  },
  "pop": 615,
  "state": "AR"
},{
  "city": "STUTTGART",
  "zip": "72160",
  "loc": {
    "y": 34.485358,
    "x": 91.548742
  },
  "pop": 11801,
  "state": "AR"
},{
  "city": "WOOSTER",
  "zip": "72181",
  "loc": {
    "y": 35.197308,
    "x": 92.450998
  },
  "pop": 1264,
  "state": "AR"
},{
  "city": "LITTLE ROCK",
  "zip": "72205",
  "loc": {
    "y": 34.750971,
    "x": 92.345512
  },
  "pop": 25156,
  "state": "AR"
},{
  "city": "HOXIE",
  "zip": "72433",
  "loc": {
    "y": 36.032573,
    "x": 90.971504
  },
  "pop": 3436,
  "state": "AR"
},{
  "city": "LITTLEFIELD",
  "zip": "86432",
  "loc": {
    "y": 36.866524,
    "x": 113.913693
  },
  "pop": 87,
  "state": "AZ"
},{
  "city": "IMBODEN",
  "zip": "72434",
  "loc": {
    "y": 36.19763,
    "x": 91.185442
  },
  "pop": 889,
  "state": "AR"
},{
  "city": "PEACH ORCHARD",
  "zip": "72453",
  "loc": {
    "y": 36.283045,
    "x": 90.670217
  },
  "pop": 332,
  "state": "AR"
},{
  "city": "REED",
  "zip": "71670",
  "loc": {
    "y": 33.67479,
    "x": 91.520287
  },
  "pop": 739,
  "state": "AR"
},{
  "city": "PERRYTOWN",
  "zip": "71801",
  "loc": {
    "y": 33.656645,
    "x": 93.590305
  },
  "pop": 15955,
  "state": "AR"
},{
  "city": "SUCCESS",
  "zip": "72470",
  "loc": {
    "y": 36.453615,
    "x": 90.728128
  },
  "pop": 286,
  "state": "AR"
},{
  "city": "WILTON",
  "zip": "71865",
  "loc": {
    "y": 33.734794,
    "x": 94.135746
  },
  "pop": 983,
  "state": "AR"
},{
  "city": "SAINT FRANCIS",
  "zip": "72464",
  "loc": {
    "y": 36.454771,
    "x": 90.144991
  },
  "pop": 227,
  "state": "AR"
},{
  "city": "DESHA",
  "zip": "72527",
  "loc": {
    "y": 35.731524,
    "x": 91.678287
  },
  "pop": 876,
  "state": "AR"
},{
  "city": "PENCIL BLUFF",
  "zip": "71965",
  "loc": {
    "y": 34.639946,
    "x": 93.742947
  },
  "pop": 323,
  "state": "AR"
},{
  "city": "BOSWELL",
  "zip": "72516",
  "loc": {
    "y": 36.01084,
    "x": 92.044307
  },
  "pop": 321,
  "state": "AR"
},{
  "city": "CORD",
  "zip": "72524",
  "loc": {
    "y": 35.81844,
    "x": 91.337455
  },
  "pop": 205,
  "state": "AR"
},{
  "city": "ALTHEIMER",
  "zip": "72004",
  "loc": {
    "y": 34.306168,
    "x": 91.828916
  },
  "pop": 1929,
  "state": "AR"
},{
  "city": "CENTER RIDGE",
  "zip": "72027",
  "loc": {
    "y": 35.398063,
    "x": 92.558167
  },
  "pop": 981,
  "state": "AR"
},{
  "city": "SULPHUR ROCK",
  "zip": "72579",
  "loc": {
    "y": 35.754466,
    "x": 91.507333
  },
  "pop": 756,
  "state": "AR"
},{
  "city": "CLARKRIDGE",
  "zip": "72623",
  "loc": {
    "y": 36.443311,
    "x": 92.35159
  },
  "pop": 1031,
  "state": "AR"
},{
  "city": "DENNARD",
  "zip": "72629",
  "loc": {
    "y": 35.725236,
    "x": 92.557456
  },
  "pop": 1370,
  "state": "AR"
},{
  "city": "LEOLA",
  "zip": "72084",
  "loc": {
    "y": 34.185605,
    "x": 92.597865
  },
  "pop": 769,
  "state": "AR"
},{
  "city": "LONOKE",
  "zip": "72086",
  "loc": {
    "y": 34.783162,
    "x": 91.921367
  },
  "pop": 6733,
  "state": "AR"
},{
  "city": "EVERTON",
  "zip": "72633",
  "loc": {
    "y": 36.153366,
    "x": 92.914989
  },
  "pop": 436,
  "state": "AR"
},{
  "city": "NORTH LITTLE ROC",
  "zip": "72117",
  "loc": {
    "y": 34.776305,
    "x": 92.194604
  },
  "pop": 12736,
  "state": "AR"
},{
  "city": "SCOTT",
  "zip": "72142",
  "loc": {
    "y": 34.694215,
    "x": 92.11566
  },
  "pop": 1027,
  "state": "AR"
},{
  "city": "SPRINGFIELD",
  "zip": "72157",
  "loc": {
    "y": 35.274879,
    "x": 92.54567
  },
  "pop": 752,
  "state": "AR"
},{
  "city": "ULM",
  "zip": "72170",
  "loc": {
    "y": 34.579938,
    "x": 91.51343
  },
  "pop": 507,
  "state": "AR"
},{
  "city": "WABBASEKA",
  "zip": "72175",
  "loc": {
    "y": 34.393552,
    "x": 91.754948
  },
  "pop": 1021,
  "state": "AR"
},{
  "city": "CRAWFORDSVILLE",
  "zip": "72327",
  "loc": {
    "y": 35.211873,
    "x": 90.335107
  },
  "pop": 1834,
  "state": "AR"
},{
  "city": "HAYNES",
  "zip": "72341",
  "loc": {
    "y": 34.883752,
    "x": 90.766621
  },
  "pop": 552,
  "state": "AR"
},{
  "city": "JONESBORO",
  "zip": "72401",
  "loc": {
    "y": 35.833016,
    "x": 90.696526
  },
  "pop": 53532,
  "state": "AR"
},{
  "city": "ZION",
  "zip": "72556",
  "loc": {
    "y": 36.059958,
    "x": 91.905196
  },
  "pop": 1880,
  "state": "AR"
},{
  "city": "ROSIE",
  "zip": "72571",
  "loc": {
    "y": 35.663816,
    "x": 91.534003
  },
  "pop": 438,
  "state": "AR"
},{
  "city": "DOGPATCH",
  "zip": "72648",
  "loc": {
    "y": 36.095121,
    "x": 93.144822
  },
  "pop": 608,
  "state": "AR"
},{
  "city": "CHAMBERS",
  "zip": "86502",
  "loc": {
    "y": 35.143044,
    "x": 109.37389
  },
  "pop": 1085,
  "state": "AZ"
},{
  "city": "PARKDALE",
  "zip": "71661",
  "loc": {
    "y": 33.121267,
    "x": 91.542793
  },
  "pop": 560,
  "state": "AR"
},{
  "city": "JUNCTION CITY",
  "zip": "71749",
  "loc": {
    "y": 33.043965,
    "x": 92.684254
  },
  "pop": 1553,
  "state": "AR"
},{
  "city": "TINSMAN",
  "zip": "71767",
  "loc": {
    "y": 33.643436,
    "x": 92.382192
  },
  "pop": 203,
  "state": "AR"
},{
  "city": "THORNTON",
  "zip": "71766",
  "loc": {
    "y": 33.767694,
    "x": 92.468299
  },
  "pop": 1272,
  "state": "AR"
},{
  "city": "ANTOINE",
  "zip": "71922",
  "loc": {
    "y": 34.028296,
    "x": 93.437169
  },
  "pop": 474,
  "state": "AR"
},{
  "city": "ODEN",
  "zip": "71961",
  "loc": {
    "y": 34.611292,
    "x": 93.821103
  },
  "pop": 710,
  "state": "AR"
},{
  "city": "BAUXITE",
  "zip": "72011",
  "loc": {
    "y": 34.545537,
    "x": 92.360531
  },
  "pop": 6956,
  "state": "AR"
},{
  "city": "DE WITT",
  "zip": "72042",
  "loc": {
    "y": 34.285312,
    "x": 91.333627
  },
  "pop": 5320,
  "state": "AR"
},{
  "city": "ENGLAND",
  "zip": "72046",
  "loc": {
    "y": 34.557458,
    "x": 91.948422
  },
  "pop": 5254,
  "state": "AR"
},{
  "city": "HATTIEVILLE",
  "zip": "72063",
  "loc": {
    "y": 35.290713,
    "x": 92.778317
  },
  "pop": 360,
  "state": "AR"
},{
  "city": "JERUSALEM",
  "zip": "72080",
  "loc": {
    "y": 35.37975,
    "x": 92.813886
  },
  "pop": 765,
  "state": "AR"
},{
  "city": "JUDSONIA",
  "zip": "72081",
  "loc": {
    "y": 35.324954,
    "x": 91.649087
  },
  "pop": 7033,
  "state": "AR"
},{
  "city": "MAUMELLE",
  "zip": "72113",
  "loc": {
    "y": 34.849085,
    "x": 92.405892
  },
  "pop": 4806,
  "state": "AR"
},{
  "city": "PERRY",
  "zip": "72125",
  "loc": {
    "y": 35.042732,
    "x": 92.787976
  },
  "pop": 648,
  "state": "AR"
},{
  "city": "PRIM",
  "zip": "72130",
  "loc": {
    "y": 35.685733,
    "x": 92.134596
  },
  "pop": 74,
  "state": "AR"
},{
  "city": "TICHNOR",
  "zip": "72166",
  "loc": {
    "y": 34.089311,
    "x": 91.243684
  },
  "pop": 331,
  "state": "AR"
},{
  "city": "WILBURN",
  "zip": "72179",
  "loc": {
    "y": 35.454547,
    "x": 91.907248
  },
  "pop": 1924,
  "state": "AR"
},{
  "city": "BIRDEYE",
  "zip": "72314",
  "loc": {
    "y": 35.409571,
    "x": 90.67074
  },
  "pop": 505,
  "state": "AR"
},{
  "city": "ARMOREL",
  "zip": "72310",
  "loc": {
    "y": 35.942843,
    "x": 89.758118
  },
  "pop": 444,
  "state": "AR"
},{
  "city": "CRUMROD",
  "zip": "72328",
  "loc": {
    "y": 34.216167,
    "x": 90.949535
  },
  "pop": 514,
  "state": "AR"
},{
  "city": "LITTLE ROCK",
  "zip": "72212",
  "loc": {
    "y": 34.787076,
    "x": 92.422232
  },
  "pop": 16183,
  "state": "AR"
},{
  "city": "HUGHES",
  "zip": "72348",
  "loc": {
    "y": 34.945416,
    "x": 90.474142
  },
  "pop": 2477,
  "state": "AR"
},{
  "city": "PARKIN",
  "zip": "72373",
  "loc": {
    "y": 35.258557,
    "x": 90.556417
  },
  "pop": 2437,
  "state": "AR"
},{
  "city": "HELENA",
  "zip": "72342",
  "loc": {
    "y": 34.532491,
    "x": 90.629784
  },
  "pop": 9515,
  "state": "AR"
},{
  "city": "MONETTE",
  "zip": "72447",
  "loc": {
    "y": 35.900168,
    "x": 90.343658
  },
  "pop": 2008,
  "state": "AR"
},{
  "city": "WEINER",
  "zip": "72479",
  "loc": {
    "y": 35.629052,
    "x": 90.928928
  },
  "pop": 1223,
  "state": "AR"
},{
  "city": "CUSHMAN",
  "zip": "72526",
  "loc": {
    "y": 35.869663,
    "x": 91.776455
  },
  "pop": 336,
  "state": "AR"
},{
  "city": "HASTY",
  "zip": "72640",
  "loc": {
    "y": 36.015229,
    "x": 93.045966
  },
  "pop": 219,
  "state": "AR"
},{
  "city": "TILLY",
  "zip": "72679",
  "loc": {
    "y": 35.6976,
    "x": 92.844209
  },
  "pop": 118,
  "state": "AR"
},{
  "city": "VALLEY SPRINGS",
  "zip": "72682",
  "loc": {
    "y": 36.146823,
    "x": 92.979937
  },
  "pop": 1050,
  "state": "AR"
},{
  "city": "MOHAVE VALLEY",
  "zip": "86440",
  "loc": {
    "y": 34.892942,
    "x": 114.595115
  },
  "pop": 4139,
  "state": "AZ"
},{
  "city": "RIMROCK",
  "zip": "86335",
  "loc": {
    "y": 34.63799,
    "x": 111.784222
  },
  "pop": 1743,
  "state": "AZ"
},{
  "city": "MAYER",
  "zip": "86333",
  "loc": {
    "y": 34.365535,
    "x": 112.129551
  },
  "pop": 3248,
  "state": "AZ"
},{
  "city": "BULLHEAD CITY",
  "zip": "86442",
  "loc": {
    "y": 35.106001,
    "x": 114.594737
  },
  "pop": 22394,
  "state": "AZ"
},{
  "city": "MANY FARMS",
  "zip": "86538",
  "loc": {
    "y": 36.408259,
    "x": 109.634021
  },
  "pop": 4172,
  "state": "AZ"
},{
  "city": "PICKENS",
  "zip": "71662",
  "loc": {
    "y": 33.807923,
    "x": 91.39157
  },
  "pop": 1228,
  "state": "AR"
},{
  "city": "EMERSON",
  "zip": "71740",
  "loc": {
    "y": 33.089054,
    "x": 93.198699
  },
  "pop": 1888,
  "state": "AR"
},{
  "city": "SMACKOVER",
  "zip": "71762",
  "loc": {
    "y": 33.339831,
    "x": 92.74425
  },
  "pop": 3554,
  "state": "AR"
},{
  "city": "BEEDEVILLE",
  "zip": "72014",
  "loc": {
    "y": 35.420267,
    "x": 91.106371
  },
  "pop": 518,
  "state": "AR"
},{
  "city": "WICKES",
  "zip": "71973",
  "loc": {
    "y": 34.308806,
    "x": 94.340257
  },
  "pop": 1273,
  "state": "AR"
},{
  "city": "TWIN GROVES",
  "zip": "72039",
  "loc": {
    "y": 35.291042,
    "x": 92.432952
  },
  "pop": 1605,
  "state": "AR"
},{
  "city": "CLARENDON",
  "zip": "72029",
  "loc": {
    "y": 34.660138,
    "x": 91.256426
  },
  "pop": 3211,
  "state": "AR"
},{
  "city": "HUMNOKE",
  "zip": "72072",
  "loc": {
    "y": 34.541896,
    "x": 91.756616
  },
  "pop": 992,
  "state": "AR"
},{
  "city": "LONSDALE",
  "zip": "72087",
  "loc": {
    "y": 34.556203,
    "x": 92.834034
  },
  "pop": 456,
  "state": "AR"
},{
  "city": "NORTH LITTLE ROC",
  "zip": "72120",
  "loc": {
    "y": 34.859292,
    "x": 92.214169
  },
  "pop": 15389,
  "state": "AR"
},{
  "city": "JONES MILLS",
  "zip": "72105",
  "loc": {
    "y": 34.453624,
    "x": 92.861975
  },
  "pop": 1896,
  "state": "AR"
},{
  "city": "QUITMAN",
  "zip": "72131",
  "loc": {
    "y": 35.404988,
    "x": 92.133334
  },
  "pop": 3043,
  "state": "AR"
},{
  "city": "REYDELL",
  "zip": "72133",
  "loc": {
    "y": 34.143281,
    "x": 91.550395
  },
  "pop": 150,
  "state": "AR"
},{
  "city": "LITTLE ROCK",
  "zip": "72209",
  "loc": {
    "y": 34.672509,
    "x": 92.352919
  },
  "pop": 35211,
  "state": "AR"
},{
  "city": "MARION",
  "zip": "72364",
  "loc": {
    "y": 35.2077,
    "x": 90.198908
  },
  "pop": 7891,
  "state": "AR"
},{
  "city": "MARVELL",
  "zip": "72366",
  "loc": {
    "y": 34.548541,
    "x": 90.941322
  },
  "pop": 2733,
  "state": "AR"
},{
  "city": "ONEIDA",
  "zip": "72369",
  "loc": {
    "y": 34.405267,
    "x": 90.826045
  },
  "pop": 918,
  "state": "AR"
},{
  "city": "BIGGERS",
  "zip": "72413",
  "loc": {
    "y": 36.342978,
    "x": 90.784467
  },
  "pop": 1060,
  "state": "AR"
},{
  "city": "BLACK ROCK",
  "zip": "72415",
  "loc": {
    "y": 36.114874,
    "x": 91.117629
  },
  "pop": 1190,
  "state": "AR"
},{
  "city": "DELL",
  "zip": "72426",
  "loc": {
    "y": 35.850118,
    "x": 90.035449
  },
  "pop": 832,
  "state": "AR"
},{
  "city": "HARRISBURG",
  "zip": "72432",
  "loc": {
    "y": 35.572222,
    "x": 90.703752
  },
  "pop": 5961,
  "state": "AR"
},{
  "city": "RAVENDEN SPRINGS",
  "zip": "72460",
  "loc": {
    "y": 36.310384,
    "x": 91.209433
  },
  "pop": 944,
  "state": "AR"
},{
  "city": "AGNOS",
  "zip": "72513",
  "loc": {
    "y": 36.219732,
    "x": 91.610746
  },
  "pop": 1433,
  "state": "AR"
},{
  "city": "CHEROKEE VILLAGE",
  "zip": "72529",
  "loc": {
    "y": 36.30114,
    "x": 91.528075
  },
  "pop": 4523,
  "state": "AR"
},{
  "city": "FLORAL",
  "zip": "72534",
  "loc": {
    "y": 35.602337,
    "x": 91.734101
  },
  "pop": 940,
  "state": "AR"
},{
  "city": "IDA",
  "zip": "72546",
  "loc": {
    "y": 35.594326,
    "x": 91.930081
  },
  "pop": 539,
  "state": "AR"
},{
  "city": "CONCORD",
  "zip": "72523",
  "loc": {
    "y": 35.641355,
    "x": 91.833339
  },
  "pop": 1168,
  "state": "AR"
},{
  "city": "OXFORD",
  "zip": "72565",
  "loc": {
    "y": 36.211408,
    "x": 91.925849
  },
  "pop": 738,
  "state": "AR"
},{
  "city": "EUREKA SPRINGS",
  "zip": "72632",
  "loc": {
    "y": 36.417465,
    "x": 93.737915
  },
  "pop": 5444,
  "state": "AR"
},{
  "city": "FLIPPIN",
  "zip": "72634",
  "loc": {
    "y": 36.268219,
    "x": 92.577995
  },
  "pop": 2784,
  "state": "AR"
},{
  "city": "DOLAN SPRINGS",
  "zip": "86441",
  "loc": {
    "y": 35.774789,
    "x": 114.547771
  },
  "pop": 68,
  "state": "AZ"
},{
  "city": "NAVAJO",
  "zip": "86509",
  "loc": {
    "y": 34.817202,
    "x": 109.396217
  },
  "pop": 41,
  "state": "AZ"
},{
  "city": "NORTH CEDAR",
  "zip": "71601",
  "loc": {
    "y": 34.215405,
    "x": 91.995812
  },
  "pop": 23095,
  "state": "AR"
},{
  "city": "DENNEHOTSO",
  "zip": "86535",
  "loc": {
    "y": 36.777286,
    "x": 109.861001
  },
  "pop": 1693,
  "state": "AZ"
},{
  "city": "LAKE VILLAGE",
  "zip": "71653",
  "loc": {
    "y": 33.327408,
    "x": 91.282487
  },
  "pop": 5501,
  "state": "AR"
},{
  "city": "NEW EDINBURG",
  "zip": "71660",
  "loc": {
    "y": 33.758846,
    "x": 92.193909
  },
  "pop": 1105,
  "state": "AR"
},{
  "city": "ROHWER",
  "zip": "71666",
  "loc": {
    "y": 33.616003,
    "x": 91.205124
  },
  "pop": 656,
  "state": "AR"
},{
  "city": "HUTTIG",
  "zip": "71747",
  "loc": {
    "y": 33.045888,
    "x": 92.194153
  },
  "pop": 1287,
  "state": "AR"
},{
  "city": "LOUANN",
  "zip": "71751",
  "loc": {
    "y": 33.411744,
    "x": 92.782759
  },
  "pop": 1667,
  "state": "AR"
},{
  "city": "MOUNT HOLLY",
  "zip": "71758",
  "loc": {
    "y": 33.308534,
    "x": 92.944265
  },
  "pop": 514,
  "state": "AR"
},{
  "city": "STEPHENS",
  "zip": "71764",
  "loc": {
    "y": 33.455044,
    "x": 93.021391
  },
  "pop": 2906,
  "state": "AR"
},{
  "city": "WILLISVILLE",
  "zip": "71864",
  "loc": {
    "y": 33.484731,
    "x": 93.31212
  },
  "pop": 888,
  "state": "AR"
},{
  "city": "CABOT",
  "zip": "72023",
  "loc": {
    "y": 34.945724,
    "x": 92.031771
  },
  "pop": 21197,
  "state": "AR"
},{
  "city": "CASA",
  "zip": "72025",
  "loc": {
    "y": 35.032168,
    "x": 93.047005
  },
  "pop": 649,
  "state": "AR"
},{
  "city": "HOUSTON",
  "zip": "72070",
  "loc": {
    "y": 35.036209,
    "x": 92.691319
  },
  "pop": 642,
  "state": "AR"
},{
  "city": "HENSLEY",
  "zip": "72065",
  "loc": {
    "y": 34.591133,
    "x": 92.214019
  },
  "pop": 3696,
  "state": "AR"
},{
  "city": "HAZEN",
  "zip": "72064",
  "loc": {
    "y": 34.783833,
    "x": 91.576699
  },
  "pop": 1841,
  "state": "AR"
},{
  "city": "JEFFERSON",
  "zip": "72079",
  "loc": {
    "y": 34.355285,
    "x": 92.148574
  },
  "pop": 1682,
  "state": "AR"
},{
  "city": "SHANNON HILLS",
  "zip": "72103",
  "loc": {
    "y": 34.621756,
    "x": 92.384618
  },
  "pop": 8853,
  "state": "AR"
},{
  "city": "LITTLE ROCK",
  "zip": "72211",
  "loc": {
    "y": 34.758819,
    "x": 92.431485
  },
  "pop": 14006,
  "state": "AR"
},{
  "city": "DYESS",
  "zip": "72330",
  "loc": {
    "y": 35.595394,
    "x": 90.215716
  },
  "pop": 912,
  "state": "AR"
},{
  "city": "JOINER",
  "zip": "72350",
  "loc": {
    "y": 35.505239,
    "x": 90.14779
  },
  "pop": 986,
  "state": "AR"
},{
  "city": "GOODWIN",
  "zip": "72340",
  "loc": {
    "y": 34.959149,
    "x": 90.983518
  },
  "pop": 597,
  "state": "AR"
},{
  "city": "PROCTOR",
  "zip": "72376",
  "loc": {
    "y": 35.083396,
    "x": 90.255026
  },
  "pop": 953,
  "state": "AR"
},{
  "city": "MC DOUGAL",
  "zip": "72441",
  "loc": {
    "y": 36.379909,
    "x": 90.394093
  },
  "pop": 1552,
  "state": "AR"
},{
  "city": "WILLIFORD",
  "zip": "72482",
  "loc": {
    "y": 36.245335,
    "x": 91.379226
  },
  "pop": 349,
  "state": "AR"
},{
  "city": "GEPP",
  "zip": "72538",
  "loc": {
    "y": 36.436443,
    "x": 92.099507
  },
  "pop": 351,
  "state": "AR"
},{
  "city": "GLENCOE",
  "zip": "72539",
  "loc": {
    "y": 36.288962,
    "x": 91.769483
  },
  "pop": 514,
  "state": "AR"
},{
  "city": "HENDERSON",
  "zip": "72544",
  "loc": {
    "y": 36.356829,
    "x": 92.269253
  },
  "pop": 3441,
  "state": "AR"
},{
  "city": "SAGE",
  "zip": "72573",
  "loc": {
    "y": 36.042476,
    "x": 91.824569
  },
  "pop": 256,
  "state": "AR"
},{
  "city": "MOUNTAIN HOME",
  "zip": "72653",
  "loc": {
    "y": 36.331153,
    "x": 92.375337
  },
  "pop": 16131,
  "state": "AR"
},{
  "city": "PEEL",
  "zip": "72668",
  "loc": {
    "y": 36.444374,
    "x": 92.776143
  },
  "pop": 731,
  "state": "AR"
},{
  "city": "PARTHENON",
  "zip": "72666",
  "loc": {
    "y": 35.940836,
    "x": 93.267776
  },
  "pop": 518,
  "state": "AR"
},{
  "city": "WARREN",
  "zip": "71671",
  "loc": {
    "y": 33.613983,
    "x": 92.077824
  },
  "pop": 8828,
  "state": "AR"
},{
  "city": "BLUFF CITY",
  "zip": "71722",
  "loc": {
    "y": 33.698191,
    "x": 93.186811
  },
  "pop": 546,
  "state": "AR"
},{
  "city": "EL DORADO",
  "zip": "71730",
  "loc": {
    "y": 33.20735,
    "x": 92.662856
  },
  "pop": 35308,
  "state": "AR"
},{
  "city": "IVAN",
  "zip": "71748",
  "loc": {
    "y": 33.902984,
    "x": 92.439406
  },
  "pop": 353,
  "state": "AR"
},{
  "city": "MAGNOLIA",
  "zip": "71753",
  "loc": {
    "y": 33.264678,
    "x": 93.239153
  },
  "pop": 16379,
  "state": "AR"
},{
  "city": "DIERKS",
  "zip": "71833",
  "loc": {
    "y": 34.13232,
    "x": 94.015243
  },
  "pop": 2284,
  "state": "AR"
},{
  "city": "EMMET",
  "zip": "71835",
  "loc": {
    "y": 33.692896,
    "x": 93.423242
  },
  "pop": 1141,
  "state": "AR"
},{
  "city": "OGDEN",
  "zip": "71853",
  "loc": {
    "y": 33.585706,
    "x": 94.027826
  },
  "pop": 779,
  "state": "AR"
},{
  "city": "PRESCOTT",
  "zip": "71857",
  "loc": {
    "y": 33.804029,
    "x": 93.372544
  },
  "pop": 5732,
  "state": "AR"
},{
  "city": "ROSSTON",
  "zip": "71858",
  "loc": {
    "y": 33.561693,
    "x": 93.303891
  },
  "pop": 1561,
  "state": "AR"
},{
  "city": "LEWISVILLE",
  "zip": "71845",
  "loc": {
    "y": 33.373603,
    "x": 93.595258
  },
  "pop": 2550,
  "state": "AR"
},{
  "city": "FRIENDSHIP",
  "zip": "71942",
  "loc": {
    "y": 34.241225,
    "x": 92.980393
  },
  "pop": 626,
  "state": "AR"
},{
  "city": "BISCOE",
  "zip": "72017",
  "loc": {
    "y": 34.833706,
    "x": 91.490028
  },
  "pop": 1348,
  "state": "AR"
},{
  "city": "COTTON PLANT",
  "zip": "72036",
  "loc": {
    "y": 35.017827,
    "x": 91.229043
  },
  "pop": 1789,
  "state": "AR"
},{
  "city": "HIGGINSON",
  "zip": "72068",
  "loc": {
    "y": 35.188254,
    "x": 91.71828
  },
  "pop": 786,
  "state": "AR"
},{
  "city": "KENSETT",
  "zip": "72082",
  "loc": {
    "y": 35.229939,
    "x": 91.669672
  },
  "pop": 2123,
  "state": "AR"
},{
  "city": "MOUNT VERNON",
  "zip": "72111",
  "loc": {
    "y": 35.260613,
    "x": 92.137334
  },
  "pop": 534,
  "state": "AR"
},{
  "city": "SHIRLEY",
  "zip": "72153",
  "loc": {
    "y": 35.573259,
    "x": 92.29751
  },
  "pop": 4841,
  "state": "AR"
},{
  "city": "LITTLE ROCK",
  "zip": "72202",
  "loc": {
    "y": 34.736322,
    "x": 92.274067
  },
  "pop": 11686,
  "state": "AR"
},{
  "city": "LITTLE ROCK",
  "zip": "72206",
  "loc": {
    "y": 34.683599,
    "x": 92.277606
  },
  "pop": 27367,
  "state": "AR"
},{
  "city": "AUBREY",
  "zip": "72311",
  "loc": {
    "y": 34.702727,
    "x": 90.911331
  },
  "pop": 901,
  "state": "AR"
},{
  "city": "BRICKEYS",
  "zip": "72320",
  "loc": {
    "y": 34.854814,
    "x": 90.537738
  },
  "pop": 458,
  "state": "AR"
},{
  "city": "DRIVER",
  "zip": "72329",
  "loc": {
    "y": 35.559714,
    "x": 89.960526
  },
  "pop": 25,
  "state": "AR"
},{
  "city": "BLYTHEVILLE A F",
  "zip": "72315",
  "loc": {
    "y": 35.934482,
    "x": 89.922497
  },
  "pop": 30944,
  "state": "AR"
},{
  "city": "KEISER",
  "zip": "72351",
  "loc": {
    "y": 35.678626,
    "x": 90.096171
  },
  "pop": 980,
  "state": "AR"
},{
  "city": "HETH",
  "zip": "72346",
  "loc": {
    "y": 35.097335,
    "x": 90.458554
  },
  "pop": 859,
  "state": "AR"
},{
  "city": "POCAHONTAS",
  "zip": "72455",
  "loc": {
    "y": 36.282876,
    "x": 90.996782
  },
  "pop": 12280,
  "state": "AR"
},{
  "city": "JORDAN",
  "zip": "72519",
  "loc": {
    "y": 36.144771,
    "x": 92.145494
  },
  "pop": 2019,
  "state": "AR"
},{
  "city": "LOCUST GROVE",
  "zip": "72550",
  "loc": {
    "y": 35.717705,
    "x": 91.741443
  },
  "pop": 750,
  "state": "AR"
},{
  "city": "MOUNT PLEASANT",
  "zip": "72561",
  "loc": {
    "y": 35.975909,
    "x": 91.785013
  },
  "pop": 1264,
  "state": "AR"
},{
  "city": "TUMBLING SHOALS",
  "zip": "72581",
  "loc": {
    "y": 35.546985,
    "x": 91.970359
  },
  "pop": 768,
  "state": "AR"
},{
  "city": "VIOLA",
  "zip": "72583",
  "loc": {
    "y": 36.392429,
    "x": 91.993198
  },
  "pop": 823,
  "state": "AR"
},{
  "city": "WISEMAN",
  "zip": "72587",
  "loc": {
    "y": 36.228022,
    "x": 91.849499
  },
  "pop": 26,
  "state": "AR"
},{
  "city": "COMPTON",
  "zip": "72624",
  "loc": {
    "y": 36.097941,
    "x": 93.309903
  },
  "pop": 233,
  "state": "AR"
},{
  "city": "GREEN FOREST",
  "zip": "72638",
  "loc": {
    "y": 36.322408,
    "x": 93.405875
  },
  "pop": 5430,
  "state": "AR"
},{
  "city": "ARKANSAS CITY",
  "zip": "71630",
  "loc": {
    "y": 33.614328,
    "x": 91.232529
  },
  "pop": 7,
  "state": "AR"
},{
  "city": "TAMO",
  "zip": "71644",
  "loc": {
    "y": 34.030484,
    "x": 91.67082
  },
  "pop": 3768,
  "state": "AR"
},{
  "city": "INGALLS",
  "zip": "71647",
  "loc": {
    "y": 33.422207,
    "x": 92.127714
  },
  "pop": 2150,
  "state": "AR"
},{
  "city": "VILLAGE",
  "zip": "71769",
  "loc": {
    "y": 33.281849,
    "x": 93.046404
  },
  "pop": 882,
  "state": "AR"
},{
  "city": "DODDRIDGE",
  "zip": "71834",
  "loc": {
    "y": 33.105448,
    "x": 93.954307
  },
  "pop": 1435,
  "state": "AR"
},{
  "city": "HORATIO",
  "zip": "71842",
  "loc": {
    "y": 33.939221,
    "x": 94.295942
  },
  "pop": 2952,
  "state": "AR"
},{
  "city": "MINERAL SPRINGS",
  "zip": "71851",
  "loc": {
    "y": 33.863852,
    "x": 93.918828
  },
  "pop": 2732,
  "state": "AR"
},{
  "city": "TAYLOR",
  "zip": "71861",
  "loc": {
    "y": 33.107957,
    "x": 93.446019
  },
  "pop": 1660,
  "state": "AR"
},{
  "city": "DELIGHT",
  "zip": "71940",
  "loc": {
    "y": 34.023772,
    "x": 93.524666
  },
  "pop": 1529,
  "state": "AR"
},{
  "city": "GLENWOOD",
  "zip": "71943",
  "loc": {
    "y": 34.319207,
    "x": 93.555881
  },
  "pop": 2720,
  "state": "AR"
},{
  "city": "HATFIELD",
  "zip": "71945",
  "loc": {
    "y": 34.487703,
    "x": 94.371397
  },
  "pop": 1048,
  "state": "AR"
},{
  "city": "BLAKELY",
  "zip": "71931",
  "loc": {
    "y": 34.703957,
    "x": 93.063509
  },
  "pop": 271,
  "state": "AR"
},{
  "city": "BALD KNOB",
  "zip": "72010",
  "loc": {
    "y": 35.311331,
    "x": 91.550197
  },
  "pop": 5132,
  "state": "AR"
},{
  "city": "CLINTON",
  "zip": "72031",
  "loc": {
    "y": 35.604537,
    "x": 92.475825
  },
  "pop": 4098,
  "state": "AR"
},{
  "city": "CONWAY",
  "zip": "72032",
  "loc": {
    "y": 35.084199,
    "x": 92.423574
  },
  "pop": 43236,
  "state": "AR"
},{
  "city": "BRYANT",
  "zip": "72022",
  "loc": {
    "y": 34.606786,
    "x": 92.492015
  },
  "pop": 6065,
  "state": "AR"
},{
  "city": "PERRYVILLE",
  "zip": "72126",
  "loc": {
    "y": 34.970096,
    "x": 92.847171
  },
  "pop": 3851,
  "state": "AR"
},{
  "city": "POYEN",
  "zip": "72128",
  "loc": {
    "y": 34.350828,
    "x": 92.599037
  },
  "pop": 1753,
  "state": "AR"
},{
  "city": "LEPANTO",
  "zip": "72354",
  "loc": {
    "y": 35.606909,
    "x": 90.335883
  },
  "pop": 2023,
  "state": "AR"
},{
  "city": "WEST HELENA",
  "zip": "72390",
  "loc": {
    "y": 34.549635,
    "x": 90.654531
  },
  "pop": 12265,
  "state": "AR"
},{
  "city": "FAIR OAKS",
  "zip": "72397",
  "loc": {
    "y": 35.236817,
    "x": 91.014304
  },
  "pop": 285,
  "state": "AR"
},{
  "city": "PIGGOTT",
  "zip": "72454",
  "loc": {
    "y": 36.386993,
    "x": 90.19261
  },
  "pop": 4818,
  "state": "AR"
},{
  "city": "POLLARD",
  "zip": "72456",
  "loc": {
    "y": 36.431725,
    "x": 90.275123
  },
  "pop": 553,
  "state": "AR"
},{
  "city": "COLLEGE CITY",
  "zip": "72476",
  "loc": {
    "y": 36.077814,
    "x": 90.952809
  },
  "pop": 5794,
  "state": "AR"
},{
  "city": "RAVENDEN",
  "zip": "72459",
  "loc": {
    "y": 36.202863,
    "x": 91.25934
  },
  "pop": 1137,
  "state": "AR"
},{
  "city": "CHARLOTTE",
  "zip": "72522",
  "loc": {
    "y": 35.833393,
    "x": 91.396217
  },
  "pop": 797,
  "state": "AR"
},{
  "city": "CROWN KING",
  "zip": "86343",
  "loc": {
    "y": 34.224062,
    "x": 112.333971
  },
  "pop": 105,
  "state": "AZ"
},{
  "city": "SEDONA",
  "zip": "86336",
  "loc": {
    "y": 34.826645,
    "x": 111.750627
  },
  "pop": 13225,
  "state": "AZ"
},{
  "city": "GANADO",
  "zip": "86505",
  "loc": {
    "y": 35.651844,
    "x": 109.283168
  },
  "pop": 23428,
  "state": "AZ"
},{
  "city": "PINON",
  "zip": "86510",
  "loc": {
    "y": 36.100243,
    "x": 110.221077
  },
  "pop": 5911,
  "state": "AZ"
},{
  "city": "PINE BLUFF",
  "zip": "71603",
  "loc": {
    "y": 34.189745,
    "x": 92.044786
  },
  "pop": 36473,
  "state": "AR"
},{
  "city": "JERSEY",
  "zip": "71651",
  "loc": {
    "y": 33.388914,
    "x": 92.296613
  },
  "pop": 301,
  "state": "AR"
},{
  "city": "RISON",
  "zip": "71665",
  "loc": {
    "y": 33.945325,
    "x": 92.118762
  },
  "pop": 5669,
  "state": "AR"
},{
  "city": "MONTICELLO",
  "zip": "71655",
  "loc": {
    "y": 33.624951,
    "x": 91.794845
  },
  "pop": 14127,
  "state": "AR"
},{
  "city": "MANNING",
  "zip": "71763",
  "loc": {
    "y": 33.902989,
    "x": 92.810984
  },
  "pop": 2005,
  "state": "AR"
},{
  "city": "GILLHAM",
  "zip": "71841",
  "loc": {
    "y": 34.157003,
    "x": 94.316497
  },
  "pop": 853,
  "state": "AR"
},{
  "city": "OZAN",
  "zip": "71855",
  "loc": {
    "y": 33.902775,
    "x": 93.771443
  },
  "pop": 1695,
  "state": "AR"
},{
  "city": "NORMAN",
  "zip": "71960",
  "loc": {
    "y": 34.459633,
    "x": 93.674304
  },
  "pop": 688,
  "state": "AR"
},{
  "city": "AUGUSTA",
  "zip": "72006",
  "loc": {
    "y": 35.278806,
    "x": 91.352653
  },
  "pop": 3702,
  "state": "AR"
},{
  "city": "BEEBE",
  "zip": "72012",
  "loc": {
    "y": 35.093743,
    "x": 91.907449
  },
  "pop": 7862,
  "state": "AR"
},{
  "city": "BENTON",
  "zip": "72015",
  "loc": {
    "y": 34.580087,
    "x": 92.595241
  },
  "pop": 36525,
  "state": "AR"
},{
  "city": "CROCKETTS BLUFF",
  "zip": "72038",
  "loc": {
    "y": 34.425272,
    "x": 91.232079
  },
  "pop": 132,
  "state": "AR"
},{
  "city": "CASSCOE",
  "zip": "72026",
  "loc": {
    "y": 34.473625,
    "x": 91.324798
  },
  "pop": 1033,
  "state": "AR"
},{
  "city": "PLUMERVILLE",
  "zip": "72127",
  "loc": {
    "y": 35.157466,
    "x": 92.620435
  },
  "pop": 1940,
  "state": "AR"
},{
  "city": "TRASKWOOD",
  "zip": "72167",
  "loc": {
    "y": 34.450791,
    "x": 92.654734
  },
  "pop": 606,
  "state": "AR"
},{
  "city": "WRIGHT",
  "zip": "72182",
  "loc": {
    "y": 34.437656,
    "x": 92.06308
  },
  "pop": 302,
  "state": "AR"
},{
  "city": "BURDETTE",
  "zip": "72321",
  "loc": {
    "y": 35.814769,
    "x": 89.942312
  },
  "pop": 329,
  "state": "AR"
},{
  "city": "TYRONZA",
  "zip": "72386",
  "loc": {
    "y": 35.486477,
    "x": 90.351944
  },
  "pop": 1230,
  "state": "AR"
},{
  "city": "CORNING",
  "zip": "72422",
  "loc": {
    "y": 36.415532,
    "x": 90.58702
  },
  "pop": 5469,
  "state": "AR"
},{
  "city": "BATESVILLE",
  "zip": "72501",
  "loc": {
    "y": 35.782614,
    "x": 91.63519
  },
  "pop": 19976,
  "state": "AR"
},{
  "city": "SEDGWICK",
  "zip": "72465",
  "loc": {
    "y": 35.985965,
    "x": 90.880099
  },
  "pop": 503,
  "state": "AR"
},{
  "city": "ELIZABETH",
  "zip": "72531",
  "loc": {
    "y": 36.323776,
    "x": 92.093366
  },
  "pop": 390,
  "state": "AR"
},{
  "city": "FIFTY SIX",
  "zip": "72533",
  "loc": {
    "y": 35.991958,
    "x": 92.218169
  },
  "pop": 346,
  "state": "AR"
},{
  "city": "POUGHKEEPSIE",
  "zip": "72569",
  "loc": {
    "y": 36.071526,
    "x": 91.451575
  },
  "pop": 601,
  "state": "AR"
},{
  "city": "WIDEMAN",
  "zip": "72585",
  "loc": {
    "y": 36.198739,
    "x": 92.001796
  },
  "pop": 89,
  "state": "AR"
},{
  "city": "MOUNT JUDEA",
  "zip": "72655",
  "loc": {
    "y": 35.834674,
    "x": 93.082391
  },
  "pop": 665,
  "state": "AR"
},{
  "city": "OAKLAND",
  "zip": "72661",
  "loc": {
    "y": 36.444227,
    "x": 92.583187
  },
  "pop": 544,
  "state": "AR"
},{
  "city": "OMAHA",
  "zip": "72662",
  "loc": {
    "y": 36.46123,
    "x": 93.188753
  },
  "pop": 1251,
  "state": "AR"
},{
  "city": "SAINT JOE",
  "zip": "72675",
  "loc": {
    "y": 35.987707,
    "x": 92.792828
  },
  "pop": 1196,
  "state": "AR"
},{
  "city": "NEWNATA",
  "zip": "72680",
  "loc": {
    "y": 35.855318,
    "x": 92.337929
  },
  "pop": 397,
  "state": "AR"
},{
  "city": "TEEC NOS POS",
  "zip": "86514",
  "loc": {
    "y": 36.779694,
    "x": 109.359039
  },
  "pop": 4941,
  "state": "AZ"
},{
  "city": "WILMOT",
  "zip": "71676",
  "loc": {
    "y": 33.057557,
    "x": 91.572283
  },
  "pop": 1267,
  "state": "AR"
},{
  "city": "STRONG",
  "zip": "71765",
  "loc": {
    "y": 33.119526,
    "x": 92.362104
  },
  "pop": 2738,
  "state": "AR"
},{
  "city": "CALE",
  "zip": "71828",
  "loc": {
    "y": 33.616403,
    "x": 93.26497
  },
  "pop": 230,
  "state": "AR"
},{
  "city": "LAKE HAMILTON",
  "zip": "71913",
  "loc": {
    "y": 34.473304,
    "x": 93.109177
  },
  "pop": 31048,
  "state": "AR"
},{
  "city": "HOT SPRINGS VILL",
  "zip": "71909",
  "loc": {
    "y": 34.65862,
    "x": 93.006386
  },
  "pop": 8268,
  "state": "AR"
},{
  "city": "JESSIEVILLE",
  "zip": "71949",
  "loc": {
    "y": 34.693729,
    "x": 93.196318
  },
  "pop": 931,
  "state": "AR"
},{
  "city": "KIRBY",
  "zip": "71950",
  "loc": {
    "y": 34.255153,
    "x": 93.616716
  },
  "pop": 973,
  "state": "AR"
},{
  "city": "MENA",
  "zip": "71953",
  "loc": {
    "y": 34.581435,
    "x": 94.220984
  },
  "pop": 12505,
  "state": "AR"
},{
  "city": "MOUNT IDA",
  "zip": "71957",
  "loc": {
    "y": 34.561194,
    "x": 93.574904
  },
  "pop": 3052,
  "state": "AR"
},{
  "city": "MURFREESBORO",
  "zip": "71958",
  "loc": {
    "y": 34.101734,
    "x": 93.710903
  },
  "pop": 3775,
  "state": "AR"
},{
  "city": "OKOLONA",
  "zip": "71962",
  "loc": {
    "y": 34.055138,
    "x": 93.289679
  },
  "pop": 985,
  "state": "AR"
},{
  "city": "SIMS",
  "zip": "71969",
  "loc": {
    "y": 34.646181,
    "x": 93.674071
  },
  "pop": 461,
  "state": "AR"
},{
  "city": "GRAPEVINE",
  "zip": "72057",
  "loc": {
    "y": 34.130893,
    "x": 92.310944
  },
  "pop": 591,
  "state": "AR"
},{
  "city": "MC RAE",
  "zip": "72102",
  "loc": {
    "y": 35.11322,
    "x": 91.821551
  },
  "pop": 1095,
  "state": "AR"
},{
  "city": "CAMP JOSEPH T RO",
  "zip": "72118",
  "loc": {
    "y": 34.821598,
    "x": 92.307875
  },
  "pop": 26442,
  "state": "AR"
},{
  "city": "ROLAND",
  "zip": "72135",
  "loc": {
    "y": 34.88287,
    "x": 92.519152
  },
  "pop": 1824,
  "state": "AR"
},{
  "city": "SHERIDAN",
  "zip": "72150",
  "loc": {
    "y": 34.316527,
    "x": 92.365713
  },
  "pop": 9714,
  "state": "AR"
},{
  "city": "SNOW LAKE",
  "zip": "72379",
  "loc": {
    "y": 34.066466,
    "x": 91.007083
  },
  "pop": 225,
  "state": "AR"
},{
  "city": "TOMATO",
  "zip": "72381",
  "loc": {
    "y": 35.806666,
    "x": 89.787092
  },
  "pop": 0,
  "state": "AR"
},{
  "city": "TURRELL",
  "zip": "72384",
  "loc": {
    "y": 35.296936,
    "x": 90.262979
  },
  "pop": 1308,
  "state": "AR"
},{
  "city": "DELAPLAINE",
  "zip": "72425",
  "loc": {
    "y": 36.199485,
    "x": 90.734482
  },
  "pop": 719,
  "state": "AR"
},{
  "city": "PARAGOULD",
  "zip": "72450",
  "loc": {
    "y": 36.060033,
    "x": 90.525093
  },
  "pop": 27704,
  "state": "AR"
},{
  "city": "PORTIA",
  "zip": "72457",
  "loc": {
    "y": 36.080699,
    "x": 91.068004
  },
  "pop": 646,
  "state": "AR"
},{
  "city": "EVENING SHADE",
  "zip": "72532",
  "loc": {
    "y": 36.085532,
    "x": 91.598014
  },
  "pop": 1356,
  "state": "AR"
},{
  "city": "MAGNESS",
  "zip": "72553",
  "loc": {
    "y": 35.710062,
    "x": 91.485041
  },
  "pop": 413,
  "state": "AR"
},{
  "city": "HARRISON",
  "zip": "72601",
  "loc": {
    "y": 36.241707,
    "x": 93.106162
  },
  "pop": 23009,
  "state": "AR"
},{
  "city": "BRUNO",
  "zip": "72618",
  "loc": {
    "y": 36.124617,
    "x": 92.763651
  },
  "pop": 236,
  "state": "AR"
},{
  "city": "ONIA",
  "zip": "72663",
  "loc": {
    "y": 35.940339,
    "x": 92.345859
  },
  "pop": 444,
  "state": "AR"
},{
  "city": "LESLIE",
  "zip": "72645",
  "loc": {
    "y": 35.82716,
    "x": 92.566293
  },
  "pop": 1768,
  "state": "AR"
},{
  "city": "VENDOR",
  "zip": "72683",
  "loc": {
    "y": 35.948062,
    "x": 93.100815
  },
  "pop": 784,
  "state": "AR"
},{
  "city": "SELIGMAN",
  "zip": "86337",
  "loc": {
    "y": 35.321246,
    "x": 112.954805
  },
  "pop": 693,
  "state": "AZ"
},{
  "city": "KIRKLAND",
  "zip": "86332",
  "loc": {
    "y": 34.454149,
    "x": 112.896641
  },
  "pop": 186,
  "state": "AZ"
},{
  "city": "DERMOTT",
  "zip": "71638",
  "loc": {
    "y": 33.524054,
    "x": 91.439391
  },
  "pop": 5880,
  "state": "AR"
},{
  "city": "WINCHESTER",
  "zip": "71677",
  "loc": {
    "y": 33.752039,
    "x": 91.543059
  },
  "pop": 687,
  "state": "AR"
},{
  "city": "BEARDEN",
  "zip": "71720",
  "loc": {
    "y": 33.729797,
    "x": 92.61802
  },
  "pop": 1945,
  "state": "AR"
},{
  "city": "WALDO",
  "zip": "71770",
  "loc": {
    "y": 33.360017,
    "x": 93.294915
  },
  "pop": 2862,
  "state": "AR"
},{
  "city": "STAMPS",
  "zip": "71860",
  "loc": {
    "y": 33.356877,
    "x": 93.501307
  },
  "pop": 3106,
  "state": "AR"
},{
  "city": "WASHINGTON",
  "zip": "71862",
  "loc": {
    "y": 33.754596,
    "x": 93.673529
  },
  "pop": 821,
  "state": "AR"
},{
  "city": "STORY",
  "zip": "71970",
  "loc": {
    "y": 34.668695,
    "x": 93.537587
  },
  "pop": 350,
  "state": "AR"
},{
  "city": "AMAGON",
  "zip": "72005",
  "loc": {
    "y": 35.561559,
    "x": 91.079636
  },
  "pop": 457,
  "state": "AR"
},{
  "city": "DES ARC",
  "zip": "72040",
  "loc": {
    "y": 34.97507,
    "x": 91.511342
  },
  "pop": 3446,
  "state": "AR"
},{
  "city": "GILLETT",
  "zip": "72055",
  "loc": {
    "y": 34.121838,
    "x": 91.380048
  },
  "pop": 925,
  "state": "AR"
},{
  "city": "MAYFLOWER",
  "zip": "72106",
  "loc": {
    "y": 34.966853,
    "x": 92.400102
  },
  "pop": 3593,
  "state": "AR"
},{
  "city": "SOLGOHACHIA",
  "zip": "72156",
  "loc": {
    "y": 35.270056,
    "x": 92.675387
  },
  "pop": 133,
  "state": "AR"
},{
  "city": "SAINT CHARLES",
  "zip": "72140",
  "loc": {
    "y": 34.335296,
    "x": 91.16808
  },
  "pop": 607,
  "state": "AR"
},{
  "city": "FERNDALE",
  "zip": "72208",
  "loc": {
    "y": 34.781575,
    "x": 92.585581
  },
  "pop": 458,
  "state": "AR"
},{
  "city": "VILONIA",
  "zip": "72173",
  "loc": {
    "y": 35.071895,
    "x": 92.183235
  },
  "pop": 2492,
  "state": "AR"
},{
  "city": "FORREST CITY",
  "zip": "72335",
  "loc": {
    "y": 35.009129,
    "x": 90.788572
  },
  "pop": 17751,
  "state": "AR"
},{
  "city": "FRENCHMANS BAYOU",
  "zip": "72338",
  "loc": {
    "y": 35.478419,
    "x": 90.055933
  },
  "pop": 34,
  "state": "AR"
},{
  "city": "MARIANNA",
  "zip": "72360",
  "loc": {
    "y": 34.775929,
    "x": 90.77852
  },
  "pop": 8668,
  "state": "AR"
},{
  "city": "POPLAR GROVE",
  "zip": "72374",
  "loc": {
    "y": 34.539397,
    "x": 90.881274
  },
  "pop": 1466,
  "state": "AR"
},{
  "city": "WIDENER",
  "zip": "72394",
  "loc": {
    "y": 35.059167,
    "x": 90.629313
  },
  "pop": 1145,
  "state": "AR"
},{
  "city": "WHEATLEY",
  "zip": "72392",
  "loc": {
    "y": 34.920703,
    "x": 91.108645
  },
  "pop": 542,
  "state": "AR"
},{
  "city": "BONO",
  "zip": "72416",
  "loc": {
    "y": 35.908592,
    "x": 90.784753
  },
  "pop": 3030,
  "state": "AR"
},{
  "city": "ETOWAH",
  "zip": "72428",
  "loc": {
    "y": 35.714707,
    "x": 90.218172
  },
  "pop": 1330,
  "state": "AR"
},{
  "city": "O KEAN",
  "zip": "72449",
  "loc": {
    "y": 36.179672,
    "x": 90.824069
  },
  "pop": 420,
  "state": "AR"
},{
  "city": "LEACHVILLE",
  "zip": "72438",
  "loc": {
    "y": 35.933216,
    "x": 90.195488
  },
  "pop": 2810,
  "state": "AR"
},{
  "city": "DRASCO",
  "zip": "72530",
  "loc": {
    "y": 35.661606,
    "x": 91.939818
  },
  "pop": 886,
  "state": "AR"
},{
  "city": "CAMP",
  "zip": "72520",
  "loc": {
    "y": 36.402531,
    "x": 91.726166
  },
  "pop": 401,
  "state": "AR"
},{
  "city": "MOKO",
  "zip": "72557",
  "loc": {
    "y": 36.468902,
    "x": 91.858663
  },
  "pop": 321,
  "state": "AR"
},{
  "city": "HANOVER",
  "zip": "72560",
  "loc": {
    "y": 35.865769,
    "x": 92.114762
  },
  "pop": 5553,
  "state": "AR"
},{
  "city": "NEWARK",
  "zip": "72562",
  "loc": {
    "y": 35.71183,
    "x": 91.439395
  },
  "pop": 1816,
  "state": "AR"
},{
  "city": "PLEASANT PLAINS",
  "zip": "72568",
  "loc": {
    "y": 35.589301,
    "x": 91.632043
  },
  "pop": 1790,
  "state": "AR"
},{
  "city": "HARRIET",
  "zip": "72639",
  "loc": {
    "y": 35.974187,
    "x": 92.50055
  },
  "pop": 950,
  "state": "AR"
},{
  "city": "NORFORK",
  "zip": "72658",
  "loc": {
    "y": 36.206571,
    "x": 92.273011
  },
  "pop": 1824,
  "state": "AR"
},{
  "city": "PINDALL",
  "zip": "72669",
  "loc": {
    "y": 36.067479,
    "x": 92.886409
  },
  "pop": 499,
  "state": "AR"
},{
  "city": "YELLVILLE",
  "zip": "72687",
  "loc": {
    "y": 36.225322,
    "x": 92.724472
  },
  "pop": 5695,
  "state": "AR"
},{
  "city": "EVANSVILLE",
  "zip": "72729",
  "loc": {
    "y": 35.819345,
    "x": 94.478936
  },
  "pop": 380,
  "state": "AR"
},{
  "city": "LOWELL",
  "zip": "72745",
  "loc": {
    "y": 36.243318,
    "x": 94.082725
  },
  "pop": 5077,
  "state": "AR"
},{
  "city": "FAYETTEVILLE",
  "zip": "72701",
  "loc": {
    "y": 36.052045,
    "x": 94.153395
  },
  "pop": 28372,
  "state": "AR"
},{
  "city": "FAYETTEVILLE",
  "zip": "72703",
  "loc": {
    "y": 36.099183,
    "x": 94.17163
  },
  "pop": 24649,
  "state": "AR"
},{
  "city": "DANVILLE",
  "zip": "72833",
  "loc": {
    "y": 35.049541,
    "x": 93.392933
  },
  "pop": 3292,
  "state": "AR"
},{
  "city": "HARTFORD",
  "zip": "72938",
  "loc": {
    "y": 35.022233,
    "x": 94.381876
  },
  "pop": 1073,
  "state": "AR"
},{
  "city": "RUDY",
  "zip": "72952",
  "loc": {
    "y": 35.539805,
    "x": 94.237376
  },
  "pop": 1753,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90003",
  "loc": {
    "y": 33.965335,
    "x": 118.272739
  },
  "pop": 53938,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90014",
  "loc": {
    "y": 34.044272,
    "x": 118.250937
  },
  "pop": 2715,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90024",
  "loc": {
    "y": 34.063691,
    "x": 118.440796
  },
  "pop": 38370,
  "state": "CA"
},{
  "city": "BEVERLY HILLS",
  "zip": "90210",
  "loc": {
    "y": 34.090107,
    "x": 118.406477
  },
  "pop": 20700,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90064",
  "loc": {
    "y": 34.035279,
    "x": 118.425911
  },
  "pop": 23530,
  "state": "CA"
},{
  "city": "MAYWOOD",
  "zip": "90270",
  "loc": {
    "y": 33.988992,
    "x": 118.187685
  },
  "pop": 27801,
  "state": "CA"
},{
  "city": "REDONDO BEACH",
  "zip": "90278",
  "loc": {
    "y": 33.870654,
    "x": 118.371459
  },
  "pop": 34873,
  "state": "CA"
},{
  "city": "INGLEWOOD",
  "zip": "90303",
  "loc": {
    "y": 33.937691,
    "x": 118.332058
  },
  "pop": 26418,
  "state": "CA"
},{
  "city": "LONG BEACH",
  "zip": "90805",
  "loc": {
    "y": 33.863457,
    "x": 118.180102
  },
  "pop": 74011,
  "state": "CA"
},{
  "city": "PASADENA",
  "zip": "91101",
  "loc": {
    "y": 34.146762,
    "x": 118.139119
  },
  "pop": 16045,
  "state": "CA"
},{
  "city": "SAN FERNANDO",
  "zip": "91340",
  "loc": {
    "y": 34.287509,
    "x": 118.435242
  },
  "pop": 33379,
  "state": "CA"
},{
  "city": "NORTH HILLS",
  "zip": "91343",
  "loc": {
    "y": 34.236636,
    "x": 118.47582
  },
  "pop": 48751,
  "state": "CA"
},{
  "city": "VALENCIA",
  "zip": "91354",
  "loc": {
    "y": 34.446608,
    "x": 118.537437
  },
  "pop": 7918,
  "state": "CA"
},{
  "city": "ONTARIO",
  "zip": "91761",
  "loc": {
    "y": 34.031647,
    "x": 117.618662
  },
  "pop": 47921,
  "state": "CA"
},{
  "city": "SPRING VALLEY",
  "zip": "91977",
  "loc": {
    "y": 32.724014,
    "x": 116.997644
  },
  "pop": 52403,
  "state": "CA"
},{
  "city": "MARINE CORP BASE",
  "zip": "92055",
  "loc": {
    "y": 33.327929,
    "x": 117.409452
  },
  "pop": 13643,
  "state": "CA"
},{
  "city": "SANTEE",
  "zip": "92071",
  "loc": {
    "y": 32.848636,
    "x": 116.986154
  },
  "pop": 52816,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92122",
  "loc": {
    "y": 32.857736,
    "x": 117.211507
  },
  "pop": 30192,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92130",
  "loc": {
    "y": 32.955533,
    "x": 117.225201
  },
  "pop": 12681,
  "state": "CA"
},{
  "city": "SAN YSIDRO",
  "zip": "92173",
  "loc": {
    "y": 32.562567,
    "x": 117.042976
  },
  "pop": 30131,
  "state": "CA"
},{
  "city": "COACHELLA",
  "zip": "92236",
  "loc": {
    "y": 33.674965,
    "x": 116.177231
  },
  "pop": 17147,
  "state": "CA"
},{
  "city": "EAGLE MOUNTAIN",
  "zip": "92239",
  "loc": {
    "y": 33.604941,
    "x": 115.052603
  },
  "pop": 4499,
  "state": "CA"
},{
  "city": "GOSHEN",
  "zip": "72735",
  "loc": {
    "y": 36.107523,
    "x": 93.987262
  },
  "pop": 1639,
  "state": "AR"
},{
  "city": "GRAVETTE",
  "zip": "72736",
  "loc": {
    "y": 36.415513,
    "x": 94.477862
  },
  "pop": 3508,
  "state": "AR"
},{
  "city": "ROGERS",
  "zip": "72756",
  "loc": {
    "y": 36.336316,
    "x": 94.114784
  },
  "pop": 34081,
  "state": "AR"
},{
  "city": "BOLES",
  "zip": "72926",
  "loc": {
    "y": 34.765363,
    "x": 94.062864
  },
  "pop": 687,
  "state": "AR"
},{
  "city": "UNIONTOWN",
  "zip": "72955",
  "loc": {
    "y": 35.574822,
    "x": 94.43487
  },
  "pop": 710,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90007",
  "loc": {
    "y": 34.029442,
    "x": 118.287095
  },
  "pop": 46985,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90020",
  "loc": {
    "y": 34.066535,
    "x": 118.302211
  },
  "pop": 34926,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90019",
  "loc": {
    "y": 34.048158,
    "x": 118.33426
  },
  "pop": 64996,
  "state": "CA"
},{
  "city": "WINSLOW",
  "zip": "72959",
  "loc": {
    "y": 35.831206,
    "x": 94.118657
  },
  "pop": 2566,
  "state": "AR"
},{
  "city": "TEXARKANA",
  "zip": "75502",
  "loc": {
    "y": 33.432644,
    "x": 94.011281
  },
  "pop": 30471,
  "state": "AR"
},{
  "city": "COLE",
  "zip": "90046",
  "loc": {
    "y": 34.09743,
    "x": 118.357979
  },
  "pop": 48423,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90062",
  "loc": {
    "y": 34.00324,
    "x": 118.307277
  },
  "pop": 27517,
  "state": "CA"
},{
  "city": "LONG BEACH",
  "zip": "90802",
  "loc": {
    "y": 33.770553,
    "x": 118.182025
  },
  "pop": 33906,
  "state": "CA"
},{
  "city": "ALTADENA",
  "zip": "91001",
  "loc": {
    "y": 34.191187,
    "x": 118.13919
  },
  "pop": 36013,
  "state": "CA"
},{
  "city": "PASADENA",
  "zip": "91105",
  "loc": {
    "y": 34.135455,
    "x": 118.163577
  },
  "pop": 11165,
  "state": "CA"
},{
  "city": "CALABASAS",
  "zip": "91302",
  "loc": {
    "y": 34.141854,
    "x": 118.664103
  },
  "pop": 12690,
  "state": "CA"
},{
  "city": "NORTHRIDGE",
  "zip": "91325",
  "loc": {
    "y": 34.235332,
    "x": 118.51884
  },
  "pop": 28071,
  "state": "CA"
},{
  "city": "SOUTH EL MONTE",
  "zip": "91733",
  "loc": {
    "y": 34.055676,
    "x": 118.044381
  },
  "pop": 43691,
  "state": "CA"
},{
  "city": "NORTH HOLLYWOOD",
  "zip": "91601",
  "loc": {
    "y": 34.16867,
    "x": 118.371274
  },
  "pop": 33882,
  "state": "CA"
},{
  "city": "ESCONDIDO",
  "zip": "92027",
  "loc": {
    "y": 33.138824,
    "x": 117.051966
  },
  "pop": 39305,
  "state": "CA"
},{
  "city": "ESCONDIDO",
  "zip": "92029",
  "loc": {
    "y": 33.089497,
    "x": 117.112793
  },
  "pop": 18174,
  "state": "CA"
},{
  "city": "OCEANSIDE",
  "zip": "92054",
  "loc": {
    "y": 33.20723,
    "x": 117.357294
  },
  "pop": 61760,
  "state": "CA"
},{
  "city": "OCEANSIDE",
  "zip": "92057",
  "loc": {
    "y": 33.240654,
    "x": 117.302484
  },
  "pop": 33178,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92114",
  "loc": {
    "y": 32.705923,
    "x": 117.05235
  },
  "pop": 62258,
  "state": "CA"
},{
  "city": "CORONADO",
  "zip": "92118",
  "loc": {
    "y": 32.68069,
    "x": 117.169823
  },
  "pop": 16670,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92120",
  "loc": {
    "y": 32.79581,
    "x": 117.070708
  },
  "pop": 25375,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92119",
  "loc": {
    "y": 32.803587,
    "x": 117.026065
  },
  "pop": 24135,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92113",
  "loc": {
    "y": 32.697047,
    "x": 117.115257
  },
  "pop": 44741,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92121",
  "loc": {
    "y": 32.891894,
    "x": 117.203503
  },
  "pop": 2286,
  "state": "CA"
},{
  "city": "CHIRIACO SUMMIT",
  "zip": "92201",
  "loc": {
    "y": 33.721899,
    "x": 116.235729
  },
  "pop": 47118,
  "state": "CA"
},{
  "city": "HINDSVILLE",
  "zip": "72738",
  "loc": {
    "y": 36.142206,
    "x": 93.863339
  },
  "pop": 1024,
  "state": "AR"
},{
  "city": "BENTONVILLE",
  "zip": "72712",
  "loc": {
    "y": 36.357703,
    "x": 94.22242
  },
  "pop": 14439,
  "state": "AR"
},{
  "city": "ATKINS",
  "zip": "72823",
  "loc": {
    "y": 35.244948,
    "x": 92.950696
  },
  "pop": 4835,
  "state": "AR"
},{
  "city": "PONCA",
  "zip": "72670",
  "loc": {
    "y": 36.066225,
    "x": 93.401985
  },
  "pop": 435,
  "state": "AR"
},{
  "city": "KINGSTON",
  "zip": "72742",
  "loc": {
    "y": 36.04845,
    "x": 93.504357
  },
  "pop": 566,
  "state": "AR"
},{
  "city": "DELAWARE",
  "zip": "72835",
  "loc": {
    "y": 35.278005,
    "x": 93.346152
  },
  "pop": 645,
  "state": "AR"
},{
  "city": "POTTSVILLE",
  "zip": "72858",
  "loc": {
    "y": 35.239785,
    "x": 93.056386
  },
  "pop": 2494,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90021",
  "loc": {
    "y": 34.033303,
    "x": 118.244698
  },
  "pop": 2869,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90026",
  "loc": {
    "y": 34.076629,
    "x": 118.264641
  },
  "pop": 74751,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90028",
  "loc": {
    "y": 34.100549,
    "x": 118.325363
  },
  "pop": 30152,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90039",
  "loc": {
    "y": 34.112089,
    "x": 118.259428
  },
  "pop": 29189,
  "state": "CA"
},{
  "city": "CITY OF COMMERCE",
  "zip": "90040",
  "loc": {
    "y": 33.99471,
    "x": 118.151352
  },
  "pop": 9689,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90033",
  "loc": {
    "y": 34.048676,
    "x": 118.208442
  },
  "pop": 57469,
  "state": "CA"
},{
  "city": "BEVERLY HILLS",
  "zip": "90211",
  "loc": {
    "y": 34.065217,
    "x": 118.383007
  },
  "pop": 7746,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90059",
  "loc": {
    "y": 33.929331,
    "x": 118.24628
  },
  "pop": 34536,
  "state": "CA"
},{
  "city": "SANTA MONICA",
  "zip": "90403",
  "loc": {
    "y": 34.028658,
    "x": 118.49241
  },
  "pop": 22303,
  "state": "CA"
},{
  "city": "SANTA MONICA",
  "zip": "90405",
  "loc": {
    "y": 34.01001,
    "x": 118.471708
  },
  "pop": 26081,
  "state": "CA"
},{
  "city": "CYPRESS",
  "zip": "90630",
  "loc": {
    "y": 33.818613,
    "x": 118.038696
  },
  "pop": 43055,
  "state": "CA"
},{
  "city": "GLENDALE",
  "zip": "91201",
  "loc": {
    "y": 34.171606,
    "x": 118.289892
  },
  "pop": 22495,
  "state": "CA"
},{
  "city": "GLENDALE",
  "zip": "91208",
  "loc": {
    "y": 34.19212,
    "x": 118.234966
  },
  "pop": 14831,
  "state": "CA"
},{
  "city": "HACIENDA HEIGHTS",
  "zip": "91745",
  "loc": {
    "y": 33.997741,
    "x": 117.965205
  },
  "pop": 52182,
  "state": "CA"
},{
  "city": "MT BALDY",
  "zip": "91759",
  "loc": {
    "y": 34.218082,
    "x": 117.580219
  },
  "pop": 430,
  "state": "CA"
},{
  "city": "COVINA",
  "zip": "91722",
  "loc": {
    "y": 34.097162,
    "x": 117.906544
  },
  "pop": 31703,
  "state": "CA"
},{
  "city": "CHULA VISTA",
  "zip": "91915",
  "loc": {
    "y": 32.631513,
    "x": 116.940807
  },
  "pop": 12,
  "state": "CA"
},{
  "city": "LA MESA",
  "zip": "91942",
  "loc": {
    "y": 32.783506,
    "x": 117.018879
  },
  "pop": 23944,
  "state": "CA"
},{
  "city": "EL CAJON",
  "zip": "92020",
  "loc": {
    "y": 32.792765,
    "x": 116.966504
  },
  "pop": 55176,
  "state": "CA"
},{
  "city": "LAKESIDE",
  "zip": "92040",
  "loc": {
    "y": 32.856181,
    "x": 116.920089
  },
  "pop": 41054,
  "state": "CA"
},{
  "city": "FARMINGTON",
  "zip": "72730",
  "loc": {
    "y": 36.043635,
    "x": 94.253871
  },
  "pop": 3495,
  "state": "AR"
},{
  "city": "BRIGGSVILLE",
  "zip": "72828",
  "loc": {
    "y": 34.916065,
    "x": 93.515748
  },
  "pop": 164,
  "state": "AR"
},{
  "city": "OLA",
  "zip": "72853",
  "loc": {
    "y": 35.03091,
    "x": 93.21356
  },
  "pop": 1823,
  "state": "AR"
},{
  "city": "ROVER",
  "zip": "72860",
  "loc": {
    "y": 34.947522,
    "x": 93.401728
  },
  "pop": 299,
  "state": "AR"
},{
  "city": "OZARK",
  "zip": "72949",
  "loc": {
    "y": 35.524645,
    "x": 93.837423
  },
  "pop": 7338,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90002",
  "loc": {
    "y": 33.94969,
    "x": 118.246213
  },
  "pop": 40629,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90008",
  "loc": {
    "y": 34.011643,
    "x": 118.341123
  },
  "pop": 33073,
  "state": "CA"
},{
  "city": "EAST LOS ANGELES",
  "zip": "90022",
  "loc": {
    "y": 34.023638,
    "x": 118.155319
  },
  "pop": 65065,
  "state": "CA"
},{
  "city": "DOWNEY",
  "zip": "90240",
  "loc": {
    "y": 33.958135,
    "x": 118.117381
  },
  "pop": 20273,
  "state": "CA"
},{
  "city": "WHITTIER",
  "zip": "90602",
  "loc": {
    "y": 33.96931,
    "x": 118.033703
  },
  "pop": 23508,
  "state": "CA"
},{
  "city": "NORWALK",
  "zip": "90650",
  "loc": {
    "y": 33.90564,
    "x": 118.081767
  },
  "pop": 94188,
  "state": "CA"
},{
  "city": "ARCADIA",
  "zip": "91006",
  "loc": {
    "y": 34.132389,
    "x": 118.026374
  },
  "pop": 30550,
  "state": "CA"
},{
  "city": "SIGNAL HILL",
  "zip": "90807",
  "loc": {
    "y": 33.830712,
    "x": 118.18092
  },
  "pop": 28037,
  "state": "CA"
},{
  "city": "GLENDALE",
  "zip": "91206",
  "loc": {
    "y": 34.155605,
    "x": 118.232217
  },
  "pop": 30415,
  "state": "CA"
},{
  "city": "PASADENA",
  "zip": "91106",
  "loc": {
    "y": 34.143527,
    "x": 118.126647
  },
  "pop": 23854,
  "state": "CA"
},{
  "city": "PASADENA",
  "zip": "91107",
  "loc": {
    "y": 34.150997,
    "x": 118.088905
  },
  "pop": 31390,
  "state": "CA"
},{
  "city": "CHINO HILLS",
  "zip": "91709",
  "loc": {
    "y": 33.979735,
    "x": 117.730791
  },
  "pop": 37965,
  "state": "CA"
},{
  "city": "NEWBURY PARK",
  "zip": "91320",
  "loc": {
    "y": 34.177393,
    "x": 118.935798
  },
  "pop": 31941,
  "state": "CA"
},{
  "city": "ROWLAND HEIGHTS",
  "zip": "91748",
  "loc": {
    "y": 33.981777,
    "x": 117.896946
  },
  "pop": 40511,
  "state": "CA"
},{
  "city": "SAN GABRIEL",
  "zip": "91775",
  "loc": {
    "y": 34.115486,
    "x": 118.085658
  },
  "pop": 21426,
  "state": "CA"
},{
  "city": "BOULEVARD",
  "zip": "91905",
  "loc": {
    "y": 32.671934,
    "x": 116.319982
  },
  "pop": 1163,
  "state": "CA"
},{
  "city": "POWAY",
  "zip": "92064",
  "loc": {
    "y": 32.975619,
    "x": 117.040223
  },
  "pop": 43490,
  "state": "CA"
},{
  "city": "PALA",
  "zip": "92059",
  "loc": {
    "y": 33.377662,
    "x": 117.071725
  },
  "pop": 1064,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92107",
  "loc": {
    "y": 32.742531,
    "x": 117.243307
  },
  "pop": 25913,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92123",
  "loc": {
    "y": 32.797297,
    "x": 117.139248
  },
  "pop": 23541,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92127",
  "loc": {
    "y": 33.027854,
    "x": 117.085596
  },
  "pop": 11077,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92109",
  "loc": {
    "y": 32.796923,
    "x": 117.240534
  },
  "pop": 44804,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92131",
  "loc": {
    "y": 32.912343,
    "x": 117.089758
  },
  "pop": 16649,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92154",
  "loc": {
    "y": 32.575276,
    "x": 117.070725
  },
  "pop": 59925,
  "state": "CA"
},{
  "city": "BEAUMONT",
  "zip": "92223",
  "loc": {
    "y": 33.950429,
    "x": 116.970079
  },
  "pop": 16176,
  "state": "CA"
},{
  "city": "BIG RIVER",
  "zip": "92242",
  "loc": {
    "y": 34.149142,
    "x": 114.33928
  },
  "pop": 976,
  "state": "CA"
},{
  "city": "DECATUR",
  "zip": "72722",
  "loc": {
    "y": 36.334749,
    "x": 94.453411
  },
  "pop": 1633,
  "state": "AR"
},{
  "city": "CAVE SPRINGS",
  "zip": "72718",
  "loc": {
    "y": 36.266771,
    "x": 94.207836
  },
  "pop": 1629,
  "state": "AR"
},{
  "city": "PLAINVIEW",
  "zip": "72857",
  "loc": {
    "y": 34.966793,
    "x": 93.309897
  },
  "pop": 1260,
  "state": "AR"
},{
  "city": "PARKS",
  "zip": "72950",
  "loc": {
    "y": 34.800333,
    "x": 93.950913
  },
  "pop": 471,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90006",
  "loc": {
    "y": 34.049323,
    "x": 118.291687
  },
  "pop": 63389,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90029",
  "loc": {
    "y": 34.089982,
    "x": 118.294393
  },
  "pop": 41120,
  "state": "CA"
},{
  "city": "VAN BUREN",
  "zip": "72956",
  "loc": {
    "y": 35.453989,
    "x": 94.327762
  },
  "pop": 24719,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90068",
  "loc": {
    "y": 34.115625,
    "x": 118.330476
  },
  "pop": 25615,
  "state": "CA"
},{
  "city": "GARDENA",
  "zip": "90247",
  "loc": {
    "y": 33.892463,
    "x": 118.296122
  },
  "pop": 42072,
  "state": "CA"
},{
  "city": "HOLLY PARK",
  "zip": "90250",
  "loc": {
    "y": 33.913214,
    "x": 118.346978
  },
  "pop": 78511,
  "state": "CA"
},{
  "city": "LYNWOOD",
  "zip": "90262",
  "loc": {
    "y": 33.924076,
    "x": 118.201289
  },
  "pop": 61606,
  "state": "CA"
},{
  "city": "MALIBU",
  "zip": "90265",
  "loc": {
    "y": 34.040184,
    "x": 118.735149
  },
  "pop": 17850,
  "state": "CA"
},{
  "city": "MANHATTAN BEACH",
  "zip": "90266",
  "loc": {
    "y": 33.889594,
    "x": 118.399562
  },
  "pop": 31984,
  "state": "CA"
},{
  "city": "PACIFIC PALISADE",
  "zip": "90272",
  "loc": {
    "y": 34.054097,
    "x": 118.536874
  },
  "pop": 20984,
  "state": "CA"
},{
  "city": "LENNOX",
  "zip": "90304",
  "loc": {
    "y": 33.938514,
    "x": 118.355562
  },
  "pop": 28216,
  "state": "CA"
},{
  "city": "TORRANCE",
  "zip": "90501",
  "loc": {
    "y": 33.826817,
    "x": 118.31183
  },
  "pop": 37691,
  "state": "CA"
},{
  "city": "TORRANCE",
  "zip": "90502",
  "loc": {
    "y": 33.828555,
    "x": 118.292039
  },
  "pop": 15963,
  "state": "CA"
},{
  "city": "LAKEWOOD",
  "zip": "90715",
  "loc": {
    "y": 33.840453,
    "x": 118.076707
  },
  "pop": 17983,
  "state": "CA"
},{
  "city": "LONG BEACH",
  "zip": "90808",
  "loc": {
    "y": 33.824145,
    "x": 118.110299
  },
  "pop": 37809,
  "state": "CA"
},{
  "city": "BRADBURY",
  "zip": "91010",
  "loc": {
    "y": 34.137445,
    "x": 117.967005
  },
  "pop": 26462,
  "state": "CA"
},{
  "city": "CANOGA PARK",
  "zip": "91304",
  "loc": {
    "y": 34.219671,
    "x": 118.611059
  },
  "pop": 43675,
  "state": "CA"
},{
  "city": "SHERMAN OAKS",
  "zip": "91423",
  "loc": {
    "y": 34.152565,
    "x": 118.432208
  },
  "pop": 27747,
  "state": "CA"
},{
  "city": "STUDIO CITY",
  "zip": "91604",
  "loc": {
    "y": 34.143025,
    "x": 118.391311
  },
  "pop": 24354,
  "state": "CA"
},{
  "city": "CHINO",
  "zip": "91710",
  "loc": {
    "y": 34.012532,
    "x": 117.684401
  },
  "pop": 69244,
  "state": "CA"
},{
  "city": "POMONA",
  "zip": "91767",
  "loc": {
    "y": 34.081187,
    "x": 117.736171
  },
  "pop": 41420,
  "state": "CA"
},{
  "city": "CAMPO",
  "zip": "91906",
  "loc": {
    "y": 32.660491,
    "x": 116.490459
  },
  "pop": 2657,
  "state": "CA"
},{
  "city": "DULZURA",
  "zip": "91917",
  "loc": {
    "y": 32.615172,
    "x": 116.728523
  },
  "pop": 352,
  "state": "CA"
},{
  "city": "LA JOLLA",
  "zip": "92037",
  "loc": {
    "y": 32.845488,
    "x": 117.25208
  },
  "pop": 40399,
  "state": "CA"
},{
  "city": "JULIAN",
  "zip": "92036",
  "loc": {
    "y": 33.053355,
    "x": 116.565812
  },
  "pop": 2552,
  "state": "CA"
},{
  "city": "RANCHITA",
  "zip": "92066",
  "loc": {
    "y": 33.24055,
    "x": 116.539121
  },
  "pop": 389,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92104",
  "loc": {
    "y": 32.745425,
    "x": 117.127189
  },
  "pop": 44032,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92105",
  "loc": {
    "y": 32.7423,
    "x": 117.094681
  },
  "pop": 63344,
  "state": "CA"
},{
  "city": "MORROW",
  "zip": "72749",
  "loc": {
    "y": 35.85373,
    "x": 94.425793
  },
  "pop": 615,
  "state": "AR"
},{
  "city": "WITTER",
  "zip": "72776",
  "loc": {
    "y": 35.935583,
    "x": 93.621
  },
  "pop": 179,
  "state": "AR"
},{
  "city": "FORT SMITH",
  "zip": "72901",
  "loc": {
    "y": 35.365272,
    "x": 94.411035
  },
  "pop": 21722,
  "state": "AR"
},{
  "city": "HARTMAN",
  "zip": "72840",
  "loc": {
    "y": 35.443583,
    "x": 93.614196
  },
  "pop": 846,
  "state": "AR"
},{
  "city": "MAGAZINE",
  "zip": "72943",
  "loc": {
    "y": 35.15873,
    "x": 93.800336
  },
  "pop": 1336,
  "state": "AR"
},{
  "city": "HACKETT",
  "zip": "72937",
  "loc": {
    "y": 35.194476,
    "x": 94.398328
  },
  "pop": 1587,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90004",
  "loc": {
    "y": 34.076163,
    "x": 118.302863
  },
  "pop": 64062,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90013",
  "loc": {
    "y": 34.044841,
    "x": 118.243366
  },
  "pop": 5653,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90017",
  "loc": {
    "y": 34.055864,
    "x": 118.266582
  },
  "pop": 21790,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90032",
  "loc": {
    "y": 34.081785,
    "x": 118.175323
  },
  "pop": 46602,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90042",
  "loc": {
    "y": 34.114527,
    "x": 118.192902
  },
  "pop": 60003,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90061",
  "loc": {
    "y": 33.924493,
    "x": 118.271638
  },
  "pop": 21856,
  "state": "CA"
},{
  "city": "DOWNEY",
  "zip": "90241",
  "loc": {
    "y": 33.941612,
    "x": 118.13062
  },
  "pop": 34348,
  "state": "CA"
},{
  "city": "INGLEWOOD",
  "zip": "90302",
  "loc": {
    "y": 33.974496,
    "x": 118.354805
  },
  "pop": 28681,
  "state": "CA"
},{
  "city": "LA MIRADA",
  "zip": "90638",
  "loc": {
    "y": 33.906681,
    "x": 118.010081
  },
  "pop": 40452,
  "state": "CA"
},{
  "city": "PICO RIVERA",
  "zip": "90660",
  "loc": {
    "y": 33.98857,
    "x": 118.088269
  },
  "pop": 58891,
  "state": "CA"
},{
  "city": "TORRANCE",
  "zip": "90504",
  "loc": {
    "y": 33.870815,
    "x": 118.329517
  },
  "pop": 30245,
  "state": "CA"
},{
  "city": "CERRITOS",
  "zip": "90701",
  "loc": {
    "y": 33.866568,
    "x": 118.068046
  },
  "pop": 69130,
  "state": "CA"
},{
  "city": "ROSSMOOR",
  "zip": "90720",
  "loc": {
    "y": 33.795291,
    "x": 118.069891
  },
  "pop": 21695,
  "state": "CA"
},{
  "city": "BELLFLOWER",
  "zip": "90706",
  "loc": {
    "y": 33.886676,
    "x": 118.126527
  },
  "pop": 61650,
  "state": "CA"
},{
  "city": "CARSON",
  "zip": "90745",
  "loc": {
    "y": 33.822968,
    "x": 118.268352
  },
  "pop": 50251,
  "state": "CA"
},{
  "city": "CARSON",
  "zip": "90810",
  "loc": {
    "y": 33.810985,
    "x": 118.215006
  },
  "pop": 36694,
  "state": "CA"
},{
  "city": "NEWHALL",
  "zip": "91321",
  "loc": {
    "y": 34.379519,
    "x": 118.523005
  },
  "pop": 23520,
  "state": "CA"
},{
  "city": "CHATSWORTH",
  "zip": "91311",
  "loc": {
    "y": 34.258253,
    "x": 118.591357
  },
  "pop": 37225,
  "state": "CA"
},{
  "city": "VAN NUYS",
  "zip": "91405",
  "loc": {
    "y": 34.200068,
    "x": 118.445636
  },
  "pop": 39669,
  "state": "CA"
},{
  "city": "RANCHO CUCAMONGA",
  "zip": "91730",
  "loc": {
    "y": 34.107039,
    "x": 117.59408
  },
  "pop": 41087,
  "state": "CA"
},{
  "city": "SAN DIMAS",
  "zip": "91773",
  "loc": {
    "y": 34.102263,
    "x": 117.81694
  },
  "pop": 32453,
  "state": "CA"
},{
  "city": "UPLAND",
  "zip": "91786",
  "loc": {
    "y": 34.114432,
    "x": 117.658336
  },
  "pop": 66548,
  "state": "CA"
},{
  "city": "ALHAMBRA",
  "zip": "91801",
  "loc": {
    "y": 34.091436,
    "x": 118.129288
  },
  "pop": 51148,
  "state": "CA"
},{
  "city": "POMONA",
  "zip": "91768",
  "loc": {
    "y": 34.066168,
    "x": 117.776312
  },
  "pop": 31007,
  "state": "CA"
},{
  "city": "POTRERO",
  "zip": "91963",
  "loc": {
    "y": 32.620477,
    "x": 116.603748
  },
  "pop": 638,
  "state": "CA"
},{
  "city": "ENCINITAS",
  "zip": "92024",
  "loc": {
    "y": 33.053469,
    "x": 117.26891
  },
  "pop": 45995,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92102",
  "loc": {
    "y": 32.713893,
    "x": 117.121858
  },
  "pop": 45265,
  "state": "CA"
},{
  "city": "SAN MARCOS",
  "zip": "92069",
  "loc": {
    "y": 33.144386,
    "x": 117.169716
  },
  "pop": 45382,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92108",
  "loc": {
    "y": 32.778327,
    "x": 117.133525
  },
  "pop": 8860,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92128",
  "loc": {
    "y": 33.00666,
    "x": 117.068982
  },
  "pop": 30437,
  "state": "CA"
},{
  "city": "COAL HILL",
  "zip": "72832",
  "loc": {
    "y": 35.437117,
    "x": 93.67203
  },
  "pop": 1179,
  "state": "AR"
},{
  "city": "CENTERTON",
  "zip": "72719",
  "loc": {
    "y": 36.366993,
    "x": 94.30891
  },
  "pop": 1797,
  "state": "AR"
},{
  "city": "HIWASSE",
  "zip": "72739",
  "loc": {
    "y": 36.441589,
    "x": 94.338993
  },
  "pop": 1188,
  "state": "AR"
},{
  "city": "HECTOR",
  "zip": "72843",
  "loc": {
    "y": 35.40574,
    "x": 92.965559
  },
  "pop": 5067,
  "state": "AR"
},{
  "city": "LAMAR",
  "zip": "72846",
  "loc": {
    "y": 35.434868,
    "x": 93.355157
  },
  "pop": 2905,
  "state": "AR"
},{
  "city": "BETHEL HEIGHTS",
  "zip": "72764",
  "loc": {
    "y": 36.177918,
    "x": 94.104682
  },
  "pop": 17792,
  "state": "AR"
},{
  "city": "PARIS",
  "zip": "72855",
  "loc": {
    "y": 35.294149,
    "x": 93.726469
  },
  "pop": 5718,
  "state": "AR"
},{
  "city": "DARDANELLE",
  "zip": "72834",
  "loc": {
    "y": 35.195507,
    "x": 93.187316
  },
  "pop": 8281,
  "state": "AR"
},{
  "city": "BATES",
  "zip": "72924",
  "loc": {
    "y": 34.909295,
    "x": 94.393155
  },
  "pop": 213,
  "state": "AR"
},{
  "city": "FORT SMITH",
  "zip": "72903",
  "loc": {
    "y": 35.342673,
    "x": 94.378361
  },
  "pop": 32809,
  "state": "AR"
},{
  "city": "MULBERRY",
  "zip": "72947",
  "loc": {
    "y": 35.517246,
    "x": 93.988505
  },
  "pop": 738,
  "state": "AR"
},{
  "city": "CECIL",
  "zip": "72930",
  "loc": {
    "y": 35.434176,
    "x": 93.942932
  },
  "pop": 271,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90012",
  "loc": {
    "y": 34.061396,
    "x": 118.238479
  },
  "pop": 28518,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90023",
  "loc": {
    "y": 34.024478,
    "x": 118.197498
  },
  "pop": 47136,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90018",
  "loc": {
    "y": 34.028972,
    "x": 118.315173
  },
  "pop": 48267,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90041",
  "loc": {
    "y": 34.133932,
    "x": 118.208205
  },
  "pop": 26864,
  "state": "CA"
},{
  "city": "CULVER CITY",
  "zip": "90232",
  "loc": {
    "y": 34.016809,
    "x": 118.397332
  },
  "pop": 16138,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90037",
  "loc": {
    "y": 34.002982,
    "x": 118.286284
  },
  "pop": 56922,
  "state": "CA"
},{
  "city": "INGLEWOOD",
  "zip": "90301",
  "loc": {
    "y": 33.955048,
    "x": 118.355575
  },
  "pop": 36481,
  "state": "CA"
},{
  "city": "EAST RANCHO DOMI",
  "zip": "90221",
  "loc": {
    "y": 33.897324,
    "x": 118.203724
  },
  "pop": 47844,
  "state": "CA"
},{
  "city": "PLAYA DEL REY",
  "zip": "90293",
  "loc": {
    "y": 33.957745,
    "x": 118.437314
  },
  "pop": 11477,
  "state": "CA"
},{
  "city": "CULVER CITY",
  "zip": "90230",
  "loc": {
    "y": 33.994927,
    "x": 118.399115
  },
  "pop": 32207,
  "state": "CA"
},{
  "city": "WHITTIER",
  "zip": "90601",
  "loc": {
    "y": 34.001119,
    "x": 118.037139
  },
  "pop": 30501,
  "state": "CA"
},{
  "city": "LOS NIETOS",
  "zip": "90606",
  "loc": {
    "y": 33.977019,
    "x": 118.065639
  },
  "pop": 30185,
  "state": "CA"
},{
  "city": "TORRANCE",
  "zip": "90506",
  "loc": {
    "y": 33.885367,
    "x": 118.329543
  },
  "pop": 0,
  "state": "CA"
},{
  "city": "BUENA PARK",
  "zip": "90621",
  "loc": {
    "y": 33.873136,
    "x": 117.994257
  },
  "pop": 27502,
  "state": "CA"
},{
  "city": "CARSON",
  "zip": "90746",
  "loc": {
    "y": 33.858444,
    "x": 118.255449
  },
  "pop": 25970,
  "state": "CA"
},{
  "city": "RANCHO PALOS VER",
  "zip": "90717",
  "loc": {
    "y": 33.793339,
    "x": 118.31693
  },
  "pop": 19635,
  "state": "CA"
},{
  "city": "GLENDALE",
  "zip": "91204",
  "loc": {
    "y": 34.137871,
    "x": 118.259947
  },
  "pop": 15541,
  "state": "CA"
},{
  "city": "WILMINGTON",
  "zip": "90744",
  "loc": {
    "y": 33.785475,
    "x": 118.264451
  },
  "pop": 49178,
  "state": "CA"
},{
  "city": "CANOGA PARK",
  "zip": "91303",
  "loc": {
    "y": 34.199257,
    "x": 118.59828
  },
  "pop": 19656,
  "state": "CA"
},{
  "city": "LONG BEACH",
  "zip": "90803",
  "loc": {
    "y": 33.761932,
    "x": 118.134073
  },
  "pop": 32492,
  "state": "CA"
},{
  "city": "CALIFORNIA STATE",
  "zip": "91330",
  "loc": {
    "y": 34.23805,
    "x": 118.528634
  },
  "pop": 1604,
  "state": "CA"
},{
  "city": "WINNETKA",
  "zip": "91306",
  "loc": {
    "y": 34.2092,
    "x": 118.57492
  },
  "pop": 39261,
  "state": "CA"
},{
  "city": "GRANADA HILLS",
  "zip": "91344",
  "loc": {
    "y": 34.277068,
    "x": 118.4992
  },
  "pop": 45729,
  "state": "CA"
},{
  "city": "LA CRESCENTA",
  "zip": "91214",
  "loc": {
    "y": 34.231619,
    "x": 118.245687
  },
  "pop": 27249,
  "state": "CA"
},{
  "city": "AGUA DULCE",
  "zip": "91350",
  "loc": {
    "y": 34.459742,
    "x": 118.488955
  },
  "pop": 31741,
  "state": "CA"
},{
  "city": "VAN NUYS",
  "zip": "91401",
  "loc": {
    "y": 34.180152,
    "x": 118.432375
  },
  "pop": 35990,
  "state": "CA"
},{
  "city": "WESTLAKE VILLAGE",
  "zip": "91361",
  "loc": {
    "y": 34.147233,
    "x": 118.83832
  },
  "pop": 18608,
  "state": "CA"
},{
  "city": "CORONA",
  "zip": "91720",
  "loc": {
    "y": 33.876995,
    "x": 117.594288
  },
  "pop": 55741,
  "state": "CA"
},{
  "city": "WOODLAND HILLS",
  "zip": "91364",
  "loc": {
    "y": 34.155652,
    "x": 118.600019
  },
  "pop": 25638,
  "state": "CA"
},{
  "city": "BURBANK",
  "zip": "91506",
  "loc": {
    "y": 34.171746,
    "x": 118.323148
  },
  "pop": 18336,
  "state": "CA"
},{
  "city": "CASTAIC",
  "zip": "91384",
  "loc": {
    "y": 34.482695,
    "x": 118.62537
  },
  "pop": 19440,
  "state": "CA"
},{
  "city": "IMPERIAL BEACH",
  "zip": "91932",
  "loc": {
    "y": 32.578289,
    "x": 117.11478
  },
  "pop": 26567,
  "state": "CA"
},{
  "city": "NORTH HOLLYWOOD",
  "zip": "91606",
  "loc": {
    "y": 34.187182,
    "x": 118.386538
  },
  "pop": 39737,
  "state": "CA"
},{
  "city": "LEMON GROVE",
  "zip": "91945",
  "loc": {
    "y": 32.73323,
    "x": 117.032646
  },
  "pop": 24268,
  "state": "CA"
},{
  "city": "ALTA LOMA",
  "zip": "91701",
  "loc": {
    "y": 34.133922,
    "x": 117.599149
  },
  "pop": 31633,
  "state": "CA"
},{
  "city": "TECATE",
  "zip": "91980",
  "loc": {
    "y": 32.592205,
    "x": 116.606397
  },
  "pop": 230,
  "state": "CA"
},{
  "city": "CLAREMONT",
  "zip": "91711",
  "loc": {
    "y": 34.109167,
    "x": 117.718293
  },
  "pop": 34096,
  "state": "CA"
},{
  "city": "FALLBROOK",
  "zip": "92028",
  "loc": {
    "y": 33.369015,
    "x": 117.228952
  },
  "pop": 35232,
  "state": "CA"
},{
  "city": "ETIWANDA",
  "zip": "91739",
  "loc": {
    "y": 34.119873,
    "x": 117.519329
  },
  "pop": 13553,
  "state": "CA"
},{
  "city": "PAUMA VALLEY",
  "zip": "92061",
  "loc": {
    "y": 33.306285,
    "x": 116.959552
  },
  "pop": 1929,
  "state": "CA"
},{
  "city": "COVINA",
  "zip": "91723",
  "loc": {
    "y": 34.08596,
    "x": 117.884285
  },
  "pop": 15590,
  "state": "CA"
},{
  "city": "VALLEY CENTER",
  "zip": "92082",
  "loc": {
    "y": 33.249046,
    "x": 117.012232
  },
  "pop": 13196,
  "state": "CA"
},{
  "city": "MONTCLAIR",
  "zip": "91763",
  "loc": {
    "y": 34.073298,
    "x": 117.698669
  },
  "pop": 25862,
  "state": "CA"
},{
  "city": "SANTA YSABEL",
  "zip": "92070",
  "loc": {
    "y": 33.147579,
    "x": 116.69635
  },
  "pop": 1263,
  "state": "CA"
},{
  "city": "ROSEMEAD",
  "zip": "91770",
  "loc": {
    "y": 34.065767,
    "x": 118.08529
  },
  "pop": 59898,
  "state": "CA"
},{
  "city": "LOST LAKE",
  "zip": "92225",
  "loc": {
    "y": 33.605715,
    "x": 114.597131
  },
  "pop": 13852,
  "state": "CA"
},{
  "city": "BORREGO SPRINGS",
  "zip": "92004",
  "loc": {
    "y": 33.238649,
    "x": 116.351394
  },
  "pop": 2633,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92139",
  "loc": {
    "y": 32.680612,
    "x": 117.047375
  },
  "pop": 35577,
  "state": "CA"
},{
  "city": "CATHEDRAL CITY",
  "zip": "92234",
  "loc": {
    "y": 33.809839,
    "x": 116.466497
  },
  "pop": 29640,
  "state": "CA"
},{
  "city": "JASPER",
  "zip": "72641",
  "loc": {
    "y": 36.003798,
    "x": 93.204771
  },
  "pop": 1632,
  "state": "AR"
},{
  "city": "ELKINS",
  "zip": "72727",
  "loc": {
    "y": 36.017719,
    "x": 94.007323
  },
  "pop": 1767,
  "state": "AR"
},{
  "city": "CANEHILL",
  "zip": "72717",
  "loc": {
    "y": 35.910992,
    "x": 94.3862
  },
  "pop": 781,
  "state": "AR"
},{
  "city": "BLUE MOUNTAIN",
  "zip": "72826",
  "loc": {
    "y": 35.130386,
    "x": 93.716797
  },
  "pop": 200,
  "state": "AR"
},{
  "city": "CLARKSVILLE",
  "zip": "72830",
  "loc": {
    "y": 35.490763,
    "x": 93.491056
  },
  "pop": 11304,
  "state": "AR"
},{
  "city": "ALMA",
  "zip": "72921",
  "loc": {
    "y": 35.500043,
    "x": 94.207337
  },
  "pop": 7443,
  "state": "AR"
},{
  "city": "FORT SMITH",
  "zip": "72916",
  "loc": {
    "y": 35.250175,
    "x": 94.370308
  },
  "pop": 3494,
  "state": "AR"
},{
  "city": "FORT CHAFFEE",
  "zip": "72905",
  "loc": {
    "y": 35.297366,
    "x": 94.340521
  },
  "pop": 224,
  "state": "AR"
},{
  "city": "MOUNTAINBURG",
  "zip": "72946",
  "loc": {
    "y": 35.570027,
    "x": 94.109094
  },
  "pop": 4762,
  "state": "AR"
},{
  "city": "CEDARVILLE",
  "zip": "72932",
  "loc": {
    "y": 35.590231,
    "x": 94.344618
  },
  "pop": 1605,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90015",
  "loc": {
    "y": 34.043439,
    "x": 118.271613
  },
  "pop": 18880,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90025",
  "loc": {
    "y": 34.044662,
    "x": 118.448717
  },
  "pop": 37746,
  "state": "CA"
},{
  "city": "WALDRON",
  "zip": "72958",
  "loc": {
    "y": 34.902642,
    "x": 94.077243
  },
  "pop": 6884,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90044",
  "loc": {
    "y": 33.955089,
    "x": 118.290119
  },
  "pop": 83958,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90048",
  "loc": {
    "y": 34.073656,
    "x": 118.371969
  },
  "pop": 20863,
  "state": "CA"
},{
  "city": "BELL GARDENS",
  "zip": "90201",
  "loc": {
    "y": 33.969177,
    "x": 118.17205
  },
  "pop": 99568,
  "state": "CA"
},{
  "city": "WHITTIER",
  "zip": "90605",
  "loc": {
    "y": 33.941338,
    "x": 118.035568
  },
  "pop": 34035,
  "state": "CA"
},{
  "city": "MONTEBELLO",
  "zip": "90640",
  "loc": {
    "y": 34.013342,
    "x": 118.112986
  },
  "pop": 59068,
  "state": "CA"
},{
  "city": "WHITTIER",
  "zip": "90604",
  "loc": {
    "y": 33.929931,
    "x": 118.012075
  },
  "pop": 36371,
  "state": "CA"
},{
  "city": "SIGNAL HILL",
  "zip": "90806",
  "loc": {
    "y": 33.799319,
    "x": 118.187443
  },
  "pop": 44982,
  "state": "CA"
},{
  "city": "LONG BEACH",
  "zip": "90815",
  "loc": {
    "y": 33.793908,
    "x": 118.119249
  },
  "pop": 38603,
  "state": "CA"
},{
  "city": "WAL-MART INC",
  "zip": "72716",
  "loc": {
    "y": 36.326554,
    "x": 94.181483
  },
  "pop": 459,
  "state": "AR"
},{
  "city": "GENTRY",
  "zip": "72734",
  "loc": {
    "y": 36.26516,
    "x": 94.475131
  },
  "pop": 5145,
  "state": "AR"
},{
  "city": "MAYSVILLE",
  "zip": "72747",
  "loc": {
    "y": 36.401062,
    "x": 94.581278
  },
  "pop": 214,
  "state": "AR"
},{
  "city": "PASADENA",
  "zip": "91104",
  "loc": {
    "y": 34.167776,
    "x": 118.12609
  },
  "pop": 37973,
  "state": "CA"
},{
  "city": "WESLEY",
  "zip": "72773",
  "loc": {
    "y": 35.957264,
    "x": 93.911478
  },
  "pop": 1307,
  "state": "AR"
},{
  "city": "ALTUS",
  "zip": "72821",
  "loc": {
    "y": 35.404873,
    "x": 93.811494
  },
  "pop": 2292,
  "state": "AR"
},{
  "city": "BURBANK",
  "zip": "91504",
  "loc": {
    "y": 34.200097,
    "x": 118.326401
  },
  "pop": 22656,
  "state": "CA"
},{
  "city": "VALLEY VILLAGE",
  "zip": "91607",
  "loc": {
    "y": 34.167217,
    "x": 118.398905
  },
  "pop": 28021,
  "state": "CA"
},{
  "city": "FORT SMITH",
  "zip": "72904",
  "loc": {
    "y": 35.405122,
    "x": 94.38723
  },
  "pop": 18559,
  "state": "AR"
},{
  "city": "IRWINDALE",
  "zip": "91706",
  "loc": {
    "y": 34.084245,
    "x": 117.969539
  },
  "pop": 69464,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90027",
  "loc": {
    "y": 34.104031,
    "x": 118.292516
  },
  "pop": 50484,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90031",
  "loc": {
    "y": 34.078349,
    "x": 118.211279
  },
  "pop": 39706,
  "state": "CA"
},{
  "city": "ONTARIO",
  "zip": "91762",
  "loc": {
    "y": 34.058415,
    "x": 117.66647
  },
  "pop": 47653,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90034",
  "loc": {
    "y": 34.028977,
    "x": 118.400482
  },
  "pop": 53930,
  "state": "CA"
},{
  "city": "SAN GABRIEL",
  "zip": "91776",
  "loc": {
    "y": 34.089027,
    "x": 118.095471
  },
  "pop": 34995,
  "state": "CA"
},{
  "city": "DIAMOND BAR",
  "zip": "91789",
  "loc": {
    "y": 34.016625,
    "x": 117.857828
  },
  "pop": 42206,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90049",
  "loc": {
    "y": 34.066,
    "x": 118.473967
  },
  "pop": 35507,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90066",
  "loc": {
    "y": 34.002956,
    "x": 118.429769
  },
  "pop": 53095,
  "state": "CA"
},{
  "city": "BONITA",
  "zip": "91902",
  "loc": {
    "y": 32.667143,
    "x": 117.022065
  },
  "pop": 16579,
  "state": "CA"
},{
  "city": "PHILLIPS RANCH",
  "zip": "91766",
  "loc": {
    "y": 34.043268,
    "x": 117.752086
  },
  "pop": 64056,
  "state": "CA"
},{
  "city": "GARDENA",
  "zip": "90249",
  "loc": {
    "y": 33.899762,
    "x": 118.319854
  },
  "pop": 25806,
  "state": "CA"
},{
  "city": "MARINA DEL REY",
  "zip": "90292",
  "loc": {
    "y": 33.977876,
    "x": 118.452475
  },
  "pop": 16572,
  "state": "CA"
},{
  "city": "NATIONAL CITY",
  "zip": "91950",
  "loc": {
    "y": 32.674916,
    "x": 117.089747
  },
  "pop": 52005,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92116",
  "loc": {
    "y": 32.762446,
    "x": 117.124166
  },
  "pop": 32279,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92124",
  "loc": {
    "y": 32.820113,
    "x": 117.098613
  },
  "pop": 29171,
  "state": "CA"
},{
  "city": "CERRITOS",
  "zip": "90623",
  "loc": {
    "y": 33.849017,
    "x": 118.040618
  },
  "pop": 15066,
  "state": "CA"
},{
  "city": "STANTON",
  "zip": "90680",
  "loc": {
    "y": 33.803029,
    "x": 117.994709
  },
  "pop": 25160,
  "state": "CA"
},{
  "city": "HAWAIIAN GARDENS",
  "zip": "90716",
  "loc": {
    "y": 33.82958,
    "x": 118.072964
  },
  "pop": 13921,
  "state": "CA"
},{
  "city": "BANNING",
  "zip": "92220",
  "loc": {
    "y": 33.92816,
    "x": 116.889928
  },
  "pop": 22545,
  "state": "CA"
},{
  "city": "BRAWLEY",
  "zip": "92227",
  "loc": {
    "y": 32.979181,
    "x": 115.529613
  },
  "pop": 20199,
  "state": "CA"
},{
  "city": "LONG BEACH",
  "zip": "90822",
  "loc": {
    "y": 33.744415,
    "x": 118.239257
  },
  "pop": 7362,
  "state": "CA"
},{
  "city": "MONROVIA",
  "zip": "91016",
  "loc": {
    "y": 34.143959,
    "x": 118.001376
  },
  "pop": 39015,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92155",
  "loc": {
    "y": 32.676144,
    "x": 117.160335
  },
  "pop": 1570,
  "state": "CA"
},{
  "city": "TUJUNGA",
  "zip": "91042",
  "loc": {
    "y": 34.254389,
    "x": 118.284856
  },
  "pop": 24853,
  "state": "CA"
},{
  "city": "SAN MARINO",
  "zip": "91108",
  "loc": {
    "y": 34.120698,
    "x": 118.111745
  },
  "pop": 12953,
  "state": "CA"
},{
  "city": "OAK PARK",
  "zip": "91301",
  "loc": {
    "y": 34.157163,
    "x": 118.75718
  },
  "pop": 35520,
  "state": "CA"
},{
  "city": "RESEDA",
  "zip": "91335",
  "loc": {
    "y": 34.200663,
    "x": 118.539071
  },
  "pop": 62117,
  "state": "CA"
},{
  "city": "THOUSAND OAKS",
  "zip": "91360",
  "loc": {
    "y": 34.209179,
    "x": 118.873908
  },
  "pop": 41654,
  "state": "CA"
},{
  "city": "EL MONTE",
  "zip": "91732",
  "loc": {
    "y": 34.070533,
    "x": 118.01492
  },
  "pop": 58059,
  "state": "CA"
},{
  "city": "CHULA VISTA",
  "zip": "91910",
  "loc": {
    "y": 32.637139,
    "x": 117.06756
  },
  "pop": 56320,
  "state": "CA"
},{
  "city": "DIAMOND BAR",
  "zip": "91765",
  "loc": {
    "y": 34.006585,
    "x": 117.809822
  },
  "pop": 41920,
  "state": "CA"
},{
  "city": "LA MESA",
  "zip": "91941",
  "loc": {
    "y": 32.760431,
    "x": 117.011541
  },
  "pop": 42536,
  "state": "CA"
},{
  "city": "CHULA VISTA",
  "zip": "91914",
  "loc": {
    "y": 32.65875,
    "x": 116.96517
  },
  "pop": 0,
  "state": "CA"
},{
  "city": "EL CAJON",
  "zip": "92021",
  "loc": {
    "y": 32.817847,
    "x": 116.922336
  },
  "pop": 51773,
  "state": "CA"
},{
  "city": "RAMONA",
  "zip": "92065",
  "loc": {
    "y": 33.029349,
    "x": 116.853548
  },
  "pop": 27744,
  "state": "CA"
},{
  "city": "CARLSBAD",
  "zip": "92008",
  "loc": {
    "y": 33.160241,
    "x": 117.324998
  },
  "pop": 35651,
  "state": "CA"
},{
  "city": "CARLSBAD",
  "zip": "92009",
  "loc": {
    "y": 33.095407,
    "x": 117.261888
  },
  "pop": 27019,
  "state": "CA"
},{
  "city": "SOLANA BEACH",
  "zip": "92075",
  "loc": {
    "y": 32.993739,
    "x": 117.2598
  },
  "pop": 12259,
  "state": "CA"
},{
  "city": "VISTA",
  "zip": "92083",
  "loc": {
    "y": 33.187296,
    "x": 117.245854
  },
  "pop": 50641,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92126",
  "loc": {
    "y": 32.916136,
    "x": 117.140227
  },
  "pop": 56676,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92136",
  "loc": {
    "y": 32.681585,
    "x": 117.124678
  },
  "pop": 11750,
  "state": "CA"
},{
  "city": "SAINT PAUL",
  "zip": "72760",
  "loc": {
    "y": 35.849576,
    "x": 93.734743
  },
  "pop": 608,
  "state": "AR"
},{
  "city": "GARFIELD",
  "zip": "72732",
  "loc": {
    "y": 36.428817,
    "x": 93.951197
  },
  "pop": 1389,
  "state": "AR"
},{
  "city": "PRAIRIE GROVE",
  "zip": "72753",
  "loc": {
    "y": 35.991809,
    "x": 94.316861
  },
  "pop": 4105,
  "state": "AR"
},{
  "city": "BLUFFTON",
  "zip": "72827",
  "loc": {
    "y": 34.901635,
    "x": 93.591946
  },
  "pop": 208,
  "state": "AR"
},{
  "city": "LONDON",
  "zip": "72847",
  "loc": {
    "y": 35.337017,
    "x": 93.238907
  },
  "pop": 2396,
  "state": "AR"
},{
  "city": "BRANCH",
  "zip": "72928",
  "loc": {
    "y": 35.297055,
    "x": 93.94537
  },
  "pop": 597,
  "state": "AR"
},{
  "city": "RATCLIFF",
  "zip": "72951",
  "loc": {
    "y": 35.276032,
    "x": 93.842149
  },
  "pop": 1392,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90005",
  "loc": {
    "y": 34.058508,
    "x": 118.301197
  },
  "pop": 35864,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90038",
  "loc": {
    "y": 34.089769,
    "x": 118.321489
  },
  "pop": 33001,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90057",
  "loc": {
    "y": 34.062172,
    "x": 118.276262
  },
  "pop": 39017,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90065",
  "loc": {
    "y": 34.107307,
    "x": 118.226637
  },
  "pop": 45578,
  "state": "CA"
},{
  "city": "HAZARD",
  "zip": "90063",
  "loc": {
    "y": 34.044017,
    "x": 118.185432
  },
  "pop": 61123,
  "state": "CA"
},{
  "city": "ROSEWOOD",
  "zip": "90222",
  "loc": {
    "y": 33.911535,
    "x": 118.234034
  },
  "pop": 28754,
  "state": "CA"
},{
  "city": "INGLEWOOD",
  "zip": "90305",
  "loc": {
    "y": 33.958304,
    "x": 118.32585
  },
  "pop": 14370,
  "state": "CA"
},{
  "city": "PARAMOUNT",
  "zip": "90723",
  "loc": {
    "y": 33.896867,
    "x": 118.163152
  },
  "pop": 46679,
  "state": "CA"
},{
  "city": "TORRANCE",
  "zip": "90505",
  "loc": {
    "y": 33.810635,
    "x": 118.350733
  },
  "pop": 33933,
  "state": "CA"
},{
  "city": "GLENDALE",
  "zip": "91203",
  "loc": {
    "y": 34.151718,
    "x": 118.263614
  },
  "pop": 12714,
  "state": "CA"
},{
  "city": "PORTER RANCH",
  "zip": "91326",
  "loc": {
    "y": 34.274191,
    "x": 118.541235
  },
  "pop": 23466,
  "state": "CA"
},{
  "city": "CANYON COUNTRY",
  "zip": "91351",
  "loc": {
    "y": 34.426203,
    "x": 118.449011
  },
  "pop": 47273,
  "state": "CA"
},{
  "city": "ENCINO",
  "zip": "91316",
  "loc": {
    "y": 34.165479,
    "x": 118.517542
  },
  "pop": 24538,
  "state": "CA"
},{
  "city": "PANORAMA CITY",
  "zip": "91402",
  "loc": {
    "y": 34.226158,
    "x": 118.447009
  },
  "pop": 52577,
  "state": "CA"
},{
  "city": "VAN NUYS",
  "zip": "91406",
  "loc": {
    "y": 34.200568,
    "x": 118.486821
  },
  "pop": 46124,
  "state": "CA"
},{
  "city": "VALENCIA",
  "zip": "91355",
  "loc": {
    "y": 34.398456,
    "x": 118.55352
  },
  "pop": 23550,
  "state": "CA"
},{
  "city": "BURBANK",
  "zip": "91502",
  "loc": {
    "y": 34.174487,
    "x": 118.305912
  },
  "pop": 9833,
  "state": "CA"
},{
  "city": "WEST COVINA",
  "zip": "91792",
  "loc": {
    "y": 34.022852,
    "x": 117.897459
  },
  "pop": 30496,
  "state": "CA"
},{
  "city": "PINE VALLEY",
  "zip": "91962",
  "loc": {
    "y": 32.835047,
    "x": 116.512733
  },
  "pop": 1801,
  "state": "CA"
},{
  "city": "ESCONDIDO",
  "zip": "92026",
  "loc": {
    "y": 33.160513,
    "x": 117.097808
  },
  "pop": 37176,
  "state": "CA"
},{
  "city": "WARNER SPRINGS",
  "zip": "92086",
  "loc": {
    "y": 33.303666,
    "x": 116.721385
  },
  "pop": 780,
  "state": "CA"
},{
  "city": "HUNTSVILLE",
  "zip": "72740",
  "loc": {
    "y": 36.104348,
    "x": 93.727893
  },
  "pop": 7021,
  "state": "AR"
},{
  "city": "PETTIGREW",
  "zip": "72752",
  "loc": {
    "y": 35.834562,
    "x": 93.618079
  },
  "pop": 422,
  "state": "AR"
},{
  "city": "SILOAM SPRINGS",
  "zip": "72761",
  "loc": {
    "y": 36.179969,
    "x": 94.528036
  },
  "pop": 11677,
  "state": "AR"
},{
  "city": "LINCOLN",
  "zip": "72744",
  "loc": {
    "y": 35.956931,
    "x": 94.42724
  },
  "pop": 3129,
  "state": "AR"
},{
  "city": "ALIX",
  "zip": "72820",
  "loc": {
    "y": 35.430767,
    "x": 93.726416
  },
  "pop": 488,
  "state": "AR"
},{
  "city": "RUSSELLVILLE",
  "zip": "72801",
  "loc": {
    "y": 35.284208,
    "x": 93.131476
  },
  "pop": 25169,
  "state": "AR"
},{
  "city": "BELLEVILLE",
  "zip": "72824",
  "loc": {
    "y": 35.103762,
    "x": 93.451817
  },
  "pop": 988,
  "state": "AR"
},{
  "city": "DOVER",
  "zip": "72837",
  "loc": {
    "y": 35.407356,
    "x": 93.135526
  },
  "pop": 5687,
  "state": "AR"
},{
  "city": "CHESTER",
  "zip": "72934",
  "loc": {
    "y": 35.689776,
    "x": 94.202026
  },
  "pop": 1004,
  "state": "AR"
},{
  "city": "NATURAL DAM",
  "zip": "72948",
  "loc": {
    "y": 35.674259,
    "x": 94.412377
  },
  "pop": 497,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90011",
  "loc": {
    "y": 34.007856,
    "x": 118.258189
  },
  "pop": 96074,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90016",
  "loc": {
    "y": 34.029826,
    "x": 118.352787
  },
  "pop": 43669,
  "state": "CA"
},{
  "city": "VERNON",
  "zip": "90058",
  "loc": {
    "y": 33.997344,
    "x": 118.235365
  },
  "pop": 4090,
  "state": "CA"
},{
  "city": "WEST HOLLYWOOD",
  "zip": "90069",
  "loc": {
    "y": 34.090573,
    "x": 118.378753
  },
  "pop": 20587,
  "state": "CA"
},{
  "city": "EL SEGUNDO",
  "zip": "90245",
  "loc": {
    "y": 33.924275,
    "x": 118.411924
  },
  "pop": 15162,
  "state": "CA"
},{
  "city": "REDONDO BEACH",
  "zip": "90277",
  "loc": {
    "y": 33.830656,
    "x": 118.383221
  },
  "pop": 33102,
  "state": "CA"
},{
  "city": "VENICE",
  "zip": "90291",
  "loc": {
    "y": 33.993772,
    "x": 118.463463
  },
  "pop": 32987,
  "state": "CA"
},{
  "city": "WHITTIER",
  "zip": "90603",
  "loc": {
    "y": 33.943199,
    "x": 117.992685
  },
  "pop": 18063,
  "state": "CA"
},{
  "city": "GLENDALE",
  "zip": "91202",
  "loc": {
    "y": 34.165235,
    "x": 118.265649
  },
  "pop": 20331,
  "state": "CA"
},{
  "city": "WEST HILLS",
  "zip": "91307",
  "loc": {
    "y": 34.196343,
    "x": 118.638892
  },
  "pop": 22049,
  "state": "CA"
},{
  "city": "NORTHRIDGE",
  "zip": "91324",
  "loc": {
    "y": 34.236743,
    "x": 118.546595
  },
  "pop": 23252,
  "state": "CA"
},{
  "city": "MISSION HILLS",
  "zip": "91345",
  "loc": {
    "y": 34.261873,
    "x": 118.458659
  },
  "pop": 14886,
  "state": "CA"
},{
  "city": "ENCINO",
  "zip": "91436",
  "loc": {
    "y": 34.15098,
    "x": 118.488238
  },
  "pop": 13605,
  "state": "CA"
},{
  "city": "TARZANA",
  "zip": "91356",
  "loc": {
    "y": 34.16708,
    "x": 118.541354
  },
  "pop": 25316,
  "state": "CA"
},{
  "city": "CORONA",
  "zip": "91719",
  "loc": {
    "y": 33.861839,
    "x": 117.531916
  },
  "pop": 42717,
  "state": "CA"
},{
  "city": "INDUSTRY",
  "zip": "91744",
  "loc": {
    "y": 34.029428,
    "x": 117.934098
  },
  "pop": 77114,
  "state": "CA"
},{
  "city": "MIRA LOMA",
  "zip": "91752",
  "loc": {
    "y": 33.993845,
    "x": 117.523574
  },
  "pop": 17368,
  "state": "CA"
},{
  "city": "DESERT HOT SPRIN",
  "zip": "92240",
  "loc": {
    "y": 33.904973,
    "x": 116.366222
  },
  "pop": 686,
  "state": "CA"
},{
  "city": "GATEWAY",
  "zip": "72733",
  "loc": {
    "y": 36.485751,
    "x": 93.935016
  },
  "pop": 581,
  "state": "AR"
},{
  "city": "LEAD HILL",
  "zip": "72644",
  "loc": {
    "y": 36.430886,
    "x": 92.930194
  },
  "pop": 1818,
  "state": "AR"
},{
  "city": "COMBS",
  "zip": "72721",
  "loc": {
    "y": 35.848297,
    "x": 93.825218
  },
  "pop": 491,
  "state": "AR"
},{
  "city": "SUMMERS",
  "zip": "72769",
  "loc": {
    "y": 36.013827,
    "x": 94.500027
  },
  "pop": 1013,
  "state": "AR"
},{
  "city": "KNOXVILLE",
  "zip": "72845",
  "loc": {
    "y": 35.374897,
    "x": 93.361797
  },
  "pop": 848,
  "state": "AR"
},{
  "city": "GREENWOOD",
  "zip": "72936",
  "loc": {
    "y": 35.195476,
    "x": 94.253027
  },
  "pop": 8385,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90036",
  "loc": {
    "y": 34.069888,
    "x": 118.349175
  },
  "pop": 29887,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90056",
  "loc": {
    "y": 33.985329,
    "x": 118.370703
  },
  "pop": 8108,
  "state": "CA"
},{
  "city": "BEVERLY HILLS",
  "zip": "90212",
  "loc": {
    "y": 34.061855,
    "x": 118.399544
  },
  "pop": 10725,
  "state": "CA"
},{
  "city": "HUNTINGTON PARK",
  "zip": "90255",
  "loc": {
    "y": 33.976879,
    "x": 118.216053
  },
  "pop": 72139,
  "state": "CA"
},{
  "city": "LAWNDALE",
  "zip": "90260",
  "loc": {
    "y": 33.887908,
    "x": 118.351014
  },
  "pop": 29576,
  "state": "CA"
},{
  "city": "SOUTH GATE",
  "zip": "90280",
  "loc": {
    "y": 33.94617,
    "x": 118.201349
  },
  "pop": 87026,
  "state": "CA"
},{
  "city": "PALOS VERDES EST",
  "zip": "90274",
  "loc": {
    "y": 33.770094,
    "x": 118.374763
  },
  "pop": 60381,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90067",
  "loc": {
    "y": 34.055146,
    "x": 118.409479
  },
  "pop": 2731,
  "state": "CA"
},{
  "city": "SANTA MONICA",
  "zip": "90401",
  "loc": {
    "y": 34.017628,
    "x": 118.490708
  },
  "pop": 4813,
  "state": "CA"
},{
  "city": "SANTA MONICA",
  "zip": "90404",
  "loc": {
    "y": 34.026828,
    "x": 118.4733
  },
  "pop": 22480,
  "state": "CA"
},{
  "city": "LA HABRA HEIGHTS",
  "zip": "90631",
  "loc": {
    "y": 33.932173,
    "x": 117.949703
  },
  "pop": 59113,
  "state": "CA"
},{
  "city": "SANTA FE SPRINGS",
  "zip": "90670",
  "loc": {
    "y": 33.946407,
    "x": 118.083801
  },
  "pop": 14417,
  "state": "CA"
},{
  "city": "LAKEWOOD",
  "zip": "90712",
  "loc": {
    "y": 33.851201,
    "x": 118.145727
  },
  "pop": 28992,
  "state": "CA"
},{
  "city": "HARBOR CITY",
  "zip": "90710",
  "loc": {
    "y": 33.797006,
    "x": 118.299114
  },
  "pop": 24418,
  "state": "CA"
},{
  "city": "PASADENA",
  "zip": "91103",
  "loc": {
    "y": 34.166906,
    "x": 118.155119
  },
  "pop": 26641,
  "state": "CA"
},{
  "city": "LONG BEACH",
  "zip": "90813",
  "loc": {
    "y": 33.78202,
    "x": 118.183488
  },
  "pop": 58109,
  "state": "CA"
},{
  "city": "TOLUCA LAKE",
  "zip": "91602",
  "loc": {
    "y": 34.151095,
    "x": 118.367606
  },
  "pop": 14301,
  "state": "CA"
},{
  "city": "ALTA LOMA",
  "zip": "91737",
  "loc": {
    "y": 34.144883,
    "x": 117.579295
  },
  "pop": 19708,
  "state": "CA"
},{
  "city": "CHULA VISTA",
  "zip": "91911",
  "loc": {
    "y": 32.608428,
    "x": 117.056459
  },
  "pop": 65952,
  "state": "CA"
},{
  "city": "JAMUL",
  "zip": "91935",
  "loc": {
    "y": 32.716289,
    "x": 116.832332
  },
  "pop": 7879,
  "state": "CA"
},{
  "city": "EL CAJON",
  "zip": "92019",
  "loc": {
    "y": 32.777726,
    "x": 116.919055
  },
  "pop": 35425,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92111",
  "loc": {
    "y": 32.797185,
    "x": 117.17081
  },
  "pop": 45487,
  "state": "CA"
},{
  "city": "CALIPATRIA",
  "zip": "92233",
  "loc": {
    "y": 33.166956,
    "x": 115.511402
  },
  "pop": 4847,
  "state": "CA"
},{
  "city": "SULPHUR SPRINGS",
  "zip": "72768",
  "loc": {
    "y": 36.479434,
    "x": 94.452069
  },
  "pop": 982,
  "state": "AR"
},{
  "city": "OZONE",
  "zip": "72854",
  "loc": {
    "y": 35.657478,
    "x": 93.43111
  },
  "pop": 334,
  "state": "AR"
},{
  "city": "HARVEY",
  "zip": "72841",
  "loc": {
    "y": 34.867912,
    "x": 93.752538
  },
  "pop": 243,
  "state": "AR"
},{
  "city": "HAGARVILLE",
  "zip": "72839",
  "loc": {
    "y": 35.523291,
    "x": 93.344256
  },
  "pop": 584,
  "state": "AR"
},{
  "city": "BARLING",
  "zip": "72923",
  "loc": {
    "y": 35.332963,
    "x": 94.308226
  },
  "pop": 3857,
  "state": "AR"
},{
  "city": "GRAVELLY",
  "zip": "72838",
  "loc": {
    "y": 34.888123,
    "x": 93.680249
  },
  "pop": 150,
  "state": "AR"
},{
  "city": "BOONEVILLE",
  "zip": "72927",
  "loc": {
    "y": 35.136385,
    "x": 93.927433
  },
  "pop": 7502,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90001",
  "loc": {
    "y": 33.973093,
    "x": 118.247896
  },
  "pop": 51841,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90035",
  "loc": {
    "y": 34.053096,
    "x": 118.380615
  },
  "pop": 25723,
  "state": "CA"
},{
  "city": "DOWNEY",
  "zip": "90242",
  "loc": {
    "y": 33.921789,
    "x": 118.139465
  },
  "pop": 36988,
  "state": "CA"
},{
  "city": "GARDENA",
  "zip": "90248",
  "loc": {
    "y": 33.874506,
    "x": 118.289312
  },
  "pop": 9529,
  "state": "CA"
},{
  "city": "TORRANCE",
  "zip": "90503",
  "loc": {
    "y": 33.839709,
    "x": 118.354236
  },
  "pop": 40351,
  "state": "CA"
},{
  "city": "BUENA PARK",
  "zip": "90620",
  "loc": {
    "y": 33.840607,
    "x": 118.011359
  },
  "pop": 42966,
  "state": "CA"
},{
  "city": "SAN PEDRO",
  "zip": "90731",
  "loc": {
    "y": 33.733894,
    "x": 118.291425
  },
  "pop": 58821,
  "state": "CA"
},{
  "city": "RANCHO PALOS VER",
  "zip": "90732",
  "loc": {
    "y": 33.744947,
    "x": 118.310597
  },
  "pop": 26244,
  "state": "CA"
},{
  "city": "AVALON",
  "zip": "90704",
  "loc": {
    "y": 33.331963,
    "x": 118.343706
  },
  "pop": 3445,
  "state": "CA"
},{
  "city": "ARCADIA",
  "zip": "91007",
  "loc": {
    "y": 34.124271,
    "x": 118.051483
  },
  "pop": 25675,
  "state": "CA"
},{
  "city": "GLENDALE",
  "zip": "91205",
  "loc": {
    "y": 34.137798,
    "x": 118.24245
  },
  "pop": 38428,
  "state": "CA"
},{
  "city": "GLENDALE",
  "zip": "91207",
  "loc": {
    "y": 34.164856,
    "x": 118.245086
  },
  "pop": 8911,
  "state": "CA"
},{
  "city": "ARLETA",
  "zip": "91331",
  "loc": {
    "y": 34.258081,
    "x": 118.420692
  },
  "pop": 88114,
  "state": "CA"
},{
  "city": "SUN VALLEY",
  "zip": "91352",
  "loc": {
    "y": 34.220907,
    "x": 118.369853
  },
  "pop": 43722,
  "state": "CA"
},{
  "city": "SYLMAR",
  "zip": "91342",
  "loc": {
    "y": 34.30538,
    "x": 118.432181
  },
  "pop": 68612,
  "state": "CA"
},{
  "city": "WESTLAKE VILLAGE",
  "zip": "91362",
  "loc": {
    "y": 34.191884,
    "x": 118.830601
  },
  "pop": 26572,
  "state": "CA"
},{
  "city": "NEWHALL",
  "zip": "91381",
  "loc": {
    "y": 34.381067,
    "x": 118.582134
  },
  "pop": 1677,
  "state": "CA"
},{
  "city": "EL MONTE",
  "zip": "91731",
  "loc": {
    "y": 34.079142,
    "x": 118.037108
  },
  "pop": 26178,
  "state": "CA"
},{
  "city": "LA VERNE",
  "zip": "91750",
  "loc": {
    "y": 34.115905,
    "x": 117.77077
  },
  "pop": 33621,
  "state": "CA"
},{
  "city": "MONTEREY PARK",
  "zip": "91754",
  "loc": {
    "y": 34.053409,
    "x": 118.127144
  },
  "pop": 62133,
  "state": "CA"
},{
  "city": "ONTARIO",
  "zip": "91764",
  "loc": {
    "y": 34.076308,
    "x": 117.625402
  },
  "pop": 41958,
  "state": "CA"
},{
  "city": "TEMPLE CITY",
  "zip": "91780",
  "loc": {
    "y": 34.101586,
    "x": 118.053652
  },
  "pop": 31297,
  "state": "CA"
},{
  "city": "WEST COVINA",
  "zip": "91791",
  "loc": {
    "y": 34.065267,
    "x": 117.897767
  },
  "pop": 25685,
  "state": "CA"
},{
  "city": "DESCANSO",
  "zip": "91916",
  "loc": {
    "y": 32.872971,
    "x": 116.602732
  },
  "pop": 1826,
  "state": "CA"
},{
  "city": "DEL MAR",
  "zip": "92014",
  "loc": {
    "y": 32.971474,
    "x": 117.237314
  },
  "pop": 19885,
  "state": "CA"
},{
  "city": "OCEANSIDE",
  "zip": "92056",
  "loc": {
    "y": 33.196784,
    "x": 117.283089
  },
  "pop": 40161,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92103",
  "loc": {
    "y": 32.746638,
    "x": 117.163552
  },
  "pop": 31123,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92106",
  "loc": {
    "y": 32.72725,
    "x": 117.226829
  },
  "pop": 27640,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92115",
  "loc": {
    "y": 32.760742,
    "x": 117.072056
  },
  "pop": 51418,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92117",
  "loc": {
    "y": 32.823948,
    "x": 117.196536
  },
  "pop": 49737,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92129",
  "loc": {
    "y": 32.965185,
    "x": 117.121308
  },
  "pop": 43092,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92110",
  "loc": {
    "y": 32.763476,
    "x": 117.202847
  },
  "pop": 26787,
  "state": "CA"
},{
  "city": "WEST FORK",
  "zip": "72774",
  "loc": {
    "y": 35.908153,
    "x": 94.230375
  },
  "pop": 4473,
  "state": "AR"
},{
  "city": "NEW BLAINE",
  "zip": "72851",
  "loc": {
    "y": 35.318912,
    "x": 93.44457
  },
  "pop": 891,
  "state": "AR"
},{
  "city": "OARK",
  "zip": "72852",
  "loc": {
    "y": 35.709454,
    "x": 93.558531
  },
  "pop": 221,
  "state": "AR"
},{
  "city": "HUNTINGTON",
  "zip": "72940",
  "loc": {
    "y": 35.096267,
    "x": 94.331283
  },
  "pop": 2608,
  "state": "AR"
},{
  "city": "CENTRAL CITY",
  "zip": "72941",
  "loc": {
    "y": 35.337513,
    "x": 94.165637
  },
  "pop": 4138,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90043",
  "loc": {
    "y": 33.987099,
    "x": 118.33211
  },
  "pop": 45397,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90047",
  "loc": {
    "y": 33.956896,
    "x": 118.307304
  },
  "pop": 47975,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90071",
  "loc": {
    "y": 34.052043,
    "x": 118.257127
  },
  "pop": 15,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90077",
  "loc": {
    "y": 34.111245,
    "x": 118.450155
  },
  "pop": 7989,
  "state": "CA"
},{
  "city": "HERMOSA BEACH",
  "zip": "90254",
  "loc": {
    "y": 33.864309,
    "x": 118.395511
  },
  "pop": 18289,
  "state": "CA"
},{
  "city": "TOPANGA",
  "zip": "90290",
  "loc": {
    "y": 34.10759,
    "x": 118.602268
  },
  "pop": 5430,
  "state": "CA"
},{
  "city": "SANTA MONICA",
  "zip": "90402",
  "loc": {
    "y": 34.034875,
    "x": 118.503011
  },
  "pop": 14628,
  "state": "CA"
},{
  "city": "FLINTRIDGE",
  "zip": "91011",
  "loc": {
    "y": 34.209282,
    "x": 118.199008
  },
  "pop": 19699,
  "state": "CA"
},{
  "city": "VAN NUYS",
  "zip": "91411",
  "loc": {
    "y": 34.178133,
    "x": 118.457396
  },
  "pop": 21616,
  "state": "CA"
},{
  "city": "BURBANK",
  "zip": "91505",
  "loc": {
    "y": 34.168998,
    "x": 118.344175
  },
  "pop": 27676,
  "state": "CA"
},{
  "city": "BASSETT",
  "zip": "91746",
  "loc": {
    "y": 34.050963,
    "x": 117.980026
  },
  "pop": 30330,
  "state": "CA"
},{
  "city": "NORCO",
  "zip": "91760",
  "loc": {
    "y": 33.927983,
    "x": 117.557866
  },
  "pop": 23585,
  "state": "CA"
},{
  "city": "WEST COVINA",
  "zip": "91790",
  "loc": {
    "y": 34.067336,
    "x": 117.936643
  },
  "pop": 38113,
  "state": "CA"
},{
  "city": "BONSALL",
  "zip": "92003",
  "loc": {
    "y": 33.294033,
    "x": 117.18969
  },
  "pop": 2910,
  "state": "CA"
},{
  "city": "ESCONDIDO",
  "zip": "92025",
  "loc": {
    "y": 33.110117,
    "x": 117.069987
  },
  "pop": 39345,
  "state": "CA"
},{
  "city": "CARDIFF BY THE S",
  "zip": "92007",
  "loc": {
    "y": 33.025265,
    "x": 117.274371
  },
  "pop": 10236,
  "state": "CA"
},{
  "city": "SAN LUIS REY",
  "zip": "92068",
  "loc": {
    "y": 33.294367,
    "x": 117.306403
  },
  "pop": 9471,
  "state": "CA"
},{
  "city": "INDIAN WELLS",
  "zip": "92210",
  "loc": {
    "y": 33.716334,
    "x": 116.338129
  },
  "pop": 2599,
  "state": "CA"
},{
  "city": "BELLA VISTA",
  "zip": "72714",
  "loc": {
    "y": 36.465086,
    "x": 94.251969
  },
  "pop": 8645,
  "state": "AR"
},{
  "city": "LAKEVIEW",
  "zip": "72642",
  "loc": {
    "y": 36.397308,
    "x": 92.504416
  },
  "pop": 2815,
  "state": "AR"
},{
  "city": "PEA RIDGE",
  "zip": "72751",
  "loc": {
    "y": 36.453884,
    "x": 94.118026
  },
  "pop": 3584,
  "state": "AR"
},{
  "city": "SPRINGDALE",
  "zip": "72762",
  "loc": {
    "y": 36.183521,
    "x": 94.176216
  },
  "pop": 20104,
  "state": "AR"
},{
  "city": "PELSOR",
  "zip": "72856",
  "loc": {
    "y": 35.691158,
    "x": 93.016088
  },
  "pop": 117,
  "state": "AR"
},{
  "city": "WAVELAND",
  "zip": "72842",
  "loc": {
    "y": 35.111845,
    "x": 93.576719
  },
  "pop": 1294,
  "state": "AR"
},{
  "city": "SCRANTON",
  "zip": "72863",
  "loc": {
    "y": 35.330816,
    "x": 93.539362
  },
  "pop": 1683,
  "state": "AR"
},{
  "city": "SUBIACO",
  "zip": "72865",
  "loc": {
    "y": 35.31346,
    "x": 93.63869
  },
  "pop": 1190,
  "state": "AR"
},{
  "city": "CHARLESTON",
  "zip": "72933",
  "loc": {
    "y": 35.311502,
    "x": 94.03368
  },
  "pop": 3173,
  "state": "AR"
},{
  "city": "MANSFIELD",
  "zip": "72944",
  "loc": {
    "y": 35.0432,
    "x": 94.22036
  },
  "pop": 2607,
  "state": "AR"
},{
  "city": "LOS ANGELES",
  "zip": "90010",
  "loc": {
    "y": 34.060633,
    "x": 118.302664
  },
  "pop": 5335,
  "state": "CA"
},{
  "city": "LOS ANGELES",
  "zip": "90045",
  "loc": {
    "y": 33.963075,
    "x": 118.394128
  },
  "pop": 36480,
  "state": "CA"
},{
  "city": "RANCHO DOMINGUEZ",
  "zip": "90220",
  "loc": {
    "y": 33.890654,
    "x": 118.239044
  },
  "pop": 47631,
  "state": "CA"
},{
  "city": "LAKEWOOD",
  "zip": "90713",
  "loc": {
    "y": 33.847302,
    "x": 118.111464
  },
  "pop": 26646,
  "state": "CA"
},{
  "city": "SEAL BEACH",
  "zip": "90740",
  "loc": {
    "y": 33.760971,
    "x": 118.08428
  },
  "pop": 24537,
  "state": "CA"
},{
  "city": "SIGNAL HILL",
  "zip": "90804",
  "loc": {
    "y": 33.782993,
    "x": 118.155187
  },
  "pop": 36092,
  "state": "CA"
},{
  "city": "MONTROSE",
  "zip": "91020",
  "loc": {
    "y": 34.211425,
    "x": 118.230529
  },
  "pop": 6536,
  "state": "CA"
},{
  "city": "SIERRA MADRE",
  "zip": "91024",
  "loc": {
    "y": 34.165101,
    "x": 118.051916
  },
  "pop": 10560,
  "state": "CA"
},{
  "city": "SOUTH PASADENA",
  "zip": "91030",
  "loc": {
    "y": 34.110939,
    "x": 118.154696
  },
  "pop": 23936,
  "state": "CA"
},{
  "city": "SHADOW HILLS",
  "zip": "91040",
  "loc": {
    "y": 34.261025,
    "x": 118.321359
  },
  "pop": 18303,
  "state": "CA"
},{
  "city": "LONG BEACH",
  "zip": "90814",
  "loc": {
    "y": 33.771576,
    "x": 118.147988
  },
  "pop": 17359,
  "state": "CA"
},{
  "city": "SHERMAN OAKS",
  "zip": "91403",
  "loc": {
    "y": 34.151407,
    "x": 118.460325
  },
  "pop": 20046,
  "state": "CA"
},{
  "city": "WOODLAND HILLS",
  "zip": "91367",
  "loc": {
    "y": 34.176689,
    "x": 118.615891
  },
  "pop": 34253,
  "state": "CA"
},{
  "city": "NORTH HOLLYWOOD",
  "zip": "91605",
  "loc": {
    "y": 34.205747,
    "x": 118.400069
  },
  "pop": 50050,
  "state": "CA"
},{
  "city": "AZUSA",
  "zip": "91702",
  "loc": {
    "y": 34.12476,
    "x": 117.903083
  },
  "pop": 52261,
  "state": "CA"
},{
  "city": "BURBANK",
  "zip": "91501",
  "loc": {
    "y": 34.186238,
    "x": 118.300898
  },
  "pop": 15991,
  "state": "CA"
},{
  "city": "GLENDORA",
  "zip": "91740",
  "loc": {
    "y": 34.128663,
    "x": 117.855155
  },
  "pop": 48836,
  "state": "CA"
},{
  "city": "COVINA",
  "zip": "91724",
  "loc": {
    "y": 34.093752,
    "x": 117.855982
  },
  "pop": 23462,
  "state": "CA"
},{
  "city": "ALHAMBRA",
  "zip": "91803",
  "loc": {
    "y": 34.074514,
    "x": 118.143354
  },
  "pop": 30228,
  "state": "CA"
},{
  "city": "ALPINE",
  "zip": "91901",
  "loc": {
    "y": 32.828161,
    "x": 116.754328
  },
  "pop": 12566,
  "state": "CA"
},{
  "city": "CHULA VISTA",
  "zip": "91913",
  "loc": {
    "y": 32.651296,
    "x": 116.985237
  },
  "pop": 10079,
  "state": "CA"
},{
  "city": "JACUMBA",
  "zip": "91934",
  "loc": {
    "y": 32.624934,
    "x": 116.195184
  },
  "pop": 599,
  "state": "CA"
},{
  "city": "SPRING VALLEY",
  "zip": "91978",
  "loc": {
    "y": 32.732892,
    "x": 116.959551
  },
  "pop": 7601,
  "state": "CA"
},{
  "city": "VISTA",
  "zip": "92084",
  "loc": {
    "y": 33.213118,
    "x": 117.224285
  },
  "pop": 38088,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92101",
  "loc": {
    "y": 32.71852,
    "x": 117.159316
  },
  "pop": 20265,
  "state": "CA"
},{
  "city": "CALEXICO",
  "zip": "92231",
  "loc": {
    "y": 32.683227,
    "x": 115.502815
  },
  "pop": 22345,
  "state": "CA"
},{
  "city": "JOSHUA TREE",
  "zip": "92252",
  "loc": {
    "y": 34.150163,
    "x": 116.303763
  },
  "pop": 8227,
  "state": "CA"
},{
  "city": "FONTANA",
  "zip": "92335",
  "loc": {
    "y": 34.079351,
    "x": 117.455114
  },
  "pop": 81255,
  "state": "CA"
},{
  "city": "GRAND TERRACE",
  "zip": "92324",
  "loc": {
    "y": 34.057964,
    "x": 117.318577
  },
  "pop": 53822,
  "state": "CA"
},{
  "city": "YUCAIPA",
  "zip": "92399",
  "loc": {
    "y": 34.028197,
    "x": 117.048925
  },
  "pop": 33298,
  "state": "CA"
},{
  "city": "RIVERSIDE",
  "zip": "92505",
  "loc": {
    "y": 33.922769,
    "x": 117.486687
  },
  "pop": 37420,
  "state": "CA"
},{
  "city": "HEMET",
  "zip": "92544",
  "loc": {
    "y": 33.738978,
    "x": 116.924306
  },
  "pop": 34483,
  "state": "CA"
},{
  "city": "TEMECULA",
  "zip": "92590",
  "loc": {
    "y": 33.490269,
    "x": 117.182437
  },
  "pop": 2128,
  "state": "CA"
},{
  "city": "HUNTINGTON BEACH",
  "zip": "92648",
  "loc": {
    "y": 33.674577,
    "x": 117.999012
  },
  "pop": 34997,
  "state": "CA"
},{
  "city": "NEWPORT BEACH",
  "zip": "92657",
  "loc": {
    "y": 33.596382,
    "x": 117.855317
  },
  "pop": 8254,
  "state": "CA"
},{
  "city": "SAN CLEMENTE",
  "zip": "92672",
  "loc": {
    "y": 33.430809,
    "x": 117.610139
  },
  "pop": 46719,
  "state": "CA"
},{
  "city": "AVENAL",
  "zip": "93204",
  "loc": {
    "y": 35.987667,
    "x": 120.122716
  },
  "pop": 9882,
  "state": "CA"
},{
  "city": "GLENNVILLE",
  "zip": "93226",
  "loc": {
    "y": 35.737677,
    "x": 118.71693
  },
  "pop": 346,
  "state": "CA"
},{
  "city": "TAFT",
  "zip": "93268",
  "loc": {
    "y": 35.148164,
    "x": 119.455674
  },
  "pop": 15046,
  "state": "CA"
},{
  "city": "SANTA MARIA",
  "zip": "93454",
  "loc": {
    "y": 34.954538,
    "x": 120.43245
  },
  "pop": 60187,
  "state": "CA"
},{
  "city": "INDEPENDENCE",
  "zip": "93526",
  "loc": {
    "y": 36.839578,
    "x": 118.204808
  },
  "pop": 889,
  "state": "CA"
},{
  "city": "MENDOTA",
  "zip": "93640",
  "loc": {
    "y": 36.742365,
    "x": 120.409287
  },
  "pop": 8839,
  "state": "CA"
},{
  "city": "O NEALS",
  "zip": "93645",
  "loc": {
    "y": 37.086874,
    "x": 119.745369
  },
  "pop": 24,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93720",
  "loc": {
    "y": 36.857944,
    "x": 119.765522
  },
  "pop": 21498,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93722",
  "loc": {
    "y": 36.791779,
    "x": 119.880119
  },
  "pop": 33523,
  "state": "CA"
},{
  "city": "BELMONT",
  "zip": "94002",
  "loc": {
    "y": 37.517433,
    "x": 122.292671
  },
  "pop": 24960,
  "state": "CA"
},{
  "city": "SAN GREGORIO",
  "zip": "94074",
  "loc": {
    "y": 37.325513,
    "x": 122.355552
  },
  "pop": 312,
  "state": "CA"
},{
  "city": "SOUTH SAN FRANCI",
  "zip": "94080",
  "loc": {
    "y": 37.65382,
    "x": 122.4347
  },
  "pop": 54610,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94108",
  "loc": {
    "y": 37.792931,
    "x": 122.40791
  },
  "pop": 14143,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94116",
  "loc": {
    "y": 37.744144,
    "x": 122.486296
  },
  "pop": 39970,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94122",
  "loc": {
    "y": 37.759326,
    "x": 122.483647
  },
  "pop": 52318,
  "state": "CA"
},{
  "city": "STANFORD",
  "zip": "94305",
  "loc": {
    "y": 37.423573,
    "x": 122.161867
  },
  "pop": 18097,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92145",
  "loc": {
    "y": 32.870365,
    "x": 117.116518
  },
  "pop": 3089,
  "state": "CA"
},{
  "city": "DEATH VALLEY",
  "zip": "92328",
  "loc": {
    "y": 36.467165,
    "x": 116.893682
  },
  "pop": 440,
  "state": "CA"
},{
  "city": "HELENDALE",
  "zip": "92342",
  "loc": {
    "y": 34.749859,
    "x": 117.33666
  },
  "pop": 3612,
  "state": "CA"
},{
  "city": "RIVERSIDE",
  "zip": "92506",
  "loc": {
    "y": 33.945485,
    "x": 117.375696
  },
  "pop": 37294,
  "state": "CA"
},{
  "city": "RIVERSIDE",
  "zip": "92504",
  "loc": {
    "y": 33.931458,
    "x": 117.411948
  },
  "pop": 45308,
  "state": "CA"
},{
  "city": "HOMELAND",
  "zip": "92548",
  "loc": {
    "y": 33.74528,
    "x": 117.111845
  },
  "pop": 4290,
  "state": "CA"
},{
  "city": "MEAD VALLEY",
  "zip": "92570",
  "loc": {
    "y": 33.797535,
    "x": 117.280005
  },
  "pop": 31870,
  "state": "CA"
},{
  "city": "TEMECULA",
  "zip": "92591",
  "loc": {
    "y": 33.521687,
    "x": 117.128571
  },
  "pop": 13480,
  "state": "CA"
},{
  "city": "LAGUNA NIGUEL",
  "zip": "92651",
  "loc": {
    "y": 33.542927,
    "x": 117.772351
  },
  "pop": 20315,
  "state": "CA"
},{
  "city": "ANAHEIM",
  "zip": "92808",
  "loc": {
    "y": 33.857569,
    "x": 117.748445
  },
  "pop": 6206,
  "state": "CA"
},{
  "city": "SAN BUENAVENTURA",
  "zip": "93003",
  "loc": {
    "y": 34.270568,
    "x": 119.2214
  },
  "pop": 44627,
  "state": "CA"
},{
  "city": "SAN BUENAVENTURA",
  "zip": "93004",
  "loc": {
    "y": 34.278091,
    "x": 119.168727
  },
  "pop": 23430,
  "state": "CA"
},{
  "city": "BARDSDALE",
  "zip": "93015",
  "loc": {
    "y": 34.402557,
    "x": 118.904071
  },
  "pop": 15311,
  "state": "CA"
},{
  "city": "MOORPARK",
  "zip": "93021",
  "loc": {
    "y": 34.278421,
    "x": 118.877139
  },
  "pop": 27011,
  "state": "CA"
},{
  "city": "OAK VIEW",
  "zip": "93022",
  "loc": {
    "y": 34.402021,
    "x": 119.298168
  },
  "pop": 5611,
  "state": "CA"
},{
  "city": "ARMONA",
  "zip": "93202",
  "loc": {
    "y": 36.309459,
    "x": 119.705279
  },
  "pop": 752,
  "state": "CA"
},{
  "city": "SPRINGVILLE",
  "zip": "93265",
  "loc": {
    "y": 36.136314,
    "x": 118.796059
  },
  "pop": 3374,
  "state": "CA"
},{
  "city": "BAKERSFIELD",
  "zip": "93307",
  "loc": {
    "y": 35.327484,
    "x": 118.983851
  },
  "pop": 50585,
  "state": "CA"
},{
  "city": "ORCUTT",
  "zip": "93455",
  "loc": {
    "y": 34.879786,
    "x": 120.429128
  },
  "pop": 32891,
  "state": "CA"
},{
  "city": "AHWAHNEE",
  "zip": "93601",
  "loc": {
    "y": 37.407631,
    "x": 119.723251
  },
  "pop": 327,
  "state": "CA"
},{
  "city": "CHOWCHILLA",
  "zip": "93610",
  "loc": {
    "y": 37.101371,
    "x": 120.269077
  },
  "pop": 10745,
  "state": "CA"
},{
  "city": "DUNLAP",
  "zip": "93621",
  "loc": {
    "y": 36.744635,
    "x": 119.089931
  },
  "pop": 94,
  "state": "CA"
},{
  "city": "REEDLEY",
  "zip": "93654",
  "loc": {
    "y": 36.604406,
    "x": 119.437785
  },
  "pop": 22370,
  "state": "CA"
},{
  "city": "SAN JOAQUIN",
  "zip": "93660",
  "loc": {
    "y": 36.605869,
    "x": 120.188934
  },
  "pop": 2727,
  "state": "CA"
},{
  "city": "FIG GARDEN VILLA",
  "zip": "93704",
  "loc": {
    "y": 36.798781,
    "x": 119.799745
  },
  "pop": 26496,
  "state": "CA"
},{
  "city": "WISHON",
  "zip": "93669",
  "loc": {
    "y": 37.281028,
    "x": 119.557014
  },
  "pop": 474,
  "state": "CA"
},{
  "city": "FORT ORD",
  "zip": "93941",
  "loc": {
    "y": 36.644627,
    "x": 121.804999
  },
  "pop": 25009,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94118",
  "loc": {
    "y": 37.781174,
    "x": 122.461414
  },
  "pop": 38499,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94132",
  "loc": {
    "y": 37.721118,
    "x": 122.47545
  },
  "pop": 23632,
  "state": "CA"
},{
  "city": "PINON HILLS",
  "zip": "92372",
  "loc": {
    "y": 34.442937,
    "x": 117.640262
  },
  "pop": 1741,
  "state": "CA"
},{
  "city": "RIVERSIDE",
  "zip": "92503",
  "loc": {
    "y": 33.920808,
    "x": 117.458862
  },
  "pop": 55552,
  "state": "CA"
},{
  "city": "ANZA",
  "zip": "92539",
  "loc": {
    "y": 33.568812,
    "x": 116.71355
  },
  "pop": 1860,
  "state": "CA"
},{
  "city": "PERRIS",
  "zip": "92571",
  "loc": {
    "y": 33.810979,
    "x": 117.217968
  },
  "pop": 12436,
  "state": "CA"
},{
  "city": "FULLERTON",
  "zip": "92635",
  "loc": {
    "y": 33.901181,
    "x": 117.927801
  },
  "pop": 10531,
  "state": "CA"
},{
  "city": "ORANGE",
  "zip": "92668",
  "loc": {
    "y": 33.786481,
    "x": 117.87532
  },
  "pop": 20139,
  "state": "CA"
},{
  "city": "SANTA ANA",
  "zip": "92706",
  "loc": {
    "y": 33.764434,
    "x": 117.881791
  },
  "pop": 30673,
  "state": "CA"
},{
  "city": "SANTA ANA HEIGHT",
  "zip": "92707",
  "loc": {
    "y": 33.715938,
    "x": 117.870346
  },
  "pop": 56450,
  "state": "CA"
},{
  "city": "TUSTIN",
  "zip": "92680",
  "loc": {
    "y": 33.73713,
    "x": 117.819193
  },
  "pop": 51150,
  "state": "CA"
},{
  "city": "ANAHEIM",
  "zip": "92806",
  "loc": {
    "y": 33.837344,
    "x": 117.875928
  },
  "pop": 27945,
  "state": "CA"
},{
  "city": "OXNARD",
  "zip": "93030",
  "loc": {
    "y": 34.214142,
    "x": 119.174952
  },
  "pop": 66240,
  "state": "CA"
},{
  "city": "SANTA PAULA",
  "zip": "93060",
  "loc": {
    "y": 34.354718,
    "x": 119.071328
  },
  "pop": 28319,
  "state": "CA"
},{
  "city": "SANTA BARBARA",
  "zip": "93110",
  "loc": {
    "y": 34.441814,
    "x": 119.764668
  },
  "pop": 15352,
  "state": "CA"
},{
  "city": "EARLIMART",
  "zip": "93219",
  "loc": {
    "y": 35.854195,
    "x": 119.253406
  },
  "pop": 11963,
  "state": "CA"
},{
  "city": "GORMAN",
  "zip": "93243",
  "loc": {
    "y": 34.828862,
    "x": 118.879126
  },
  "pop": 1103,
  "state": "CA"
},{
  "city": "FRAZIER PARK",
  "zip": "93225",
  "loc": {
    "y": 34.826463,
    "x": 119.035488
  },
  "pop": 5257,
  "state": "CA"
},{
  "city": "POSEY",
  "zip": "93260",
  "loc": {
    "y": 35.813496,
    "x": 118.664286
  },
  "pop": 253,
  "state": "CA"
},{
  "city": "TIPTON",
  "zip": "93272",
  "loc": {
    "y": 36.054567,
    "x": 119.30781
  },
  "pop": 2365,
  "state": "CA"
},{
  "city": "BUELLTON",
  "zip": "93427",
  "loc": {
    "y": 34.62093,
    "x": 120.192233
  },
  "pop": 3883,
  "state": "CA"
},{
  "city": "SHELL BEACH",
  "zip": "93449",
  "loc": {
    "y": 35.149212,
    "x": 120.651788
  },
  "pop": 7474,
  "state": "CA"
},{
  "city": "MOJAVE",
  "zip": "93501",
  "loc": {
    "y": 35.047767,
    "x": 118.173475
  },
  "pop": 4774,
  "state": "CA"
},{
  "city": "CALIFORNIA CITY",
  "zip": "93505",
  "loc": {
    "y": 35.127783,
    "x": 117.965142
  },
  "pop": 6086,
  "state": "CA"
},{
  "city": "BRIDGEPORT",
  "zip": "93517",
  "loc": {
    "y": 38.256601,
    "x": 119.208025
  },
  "pop": 697,
  "state": "CA"
},{
  "city": "HAVILAH",
  "zip": "93518",
  "loc": {
    "y": 35.356798,
    "x": 118.410264
  },
  "pop": 899,
  "state": "CA"
},{
  "city": "CLOVIS",
  "zip": "93612",
  "loc": {
    "y": 36.823146,
    "x": 119.689757
  },
  "pop": 59963,
  "state": "CA"
},{
  "city": "KINGS CANYON NAT",
  "zip": "93633",
  "loc": {
    "y": 36.780601,
    "x": 119.068201
  },
  "pop": 472,
  "state": "CA"
},{
  "city": "MIRAMONTE",
  "zip": "93641",
  "loc": {
    "y": 36.68938,
    "x": 119.047718
  },
  "pop": 607,
  "state": "CA"
},{
  "city": "SANGER",
  "zip": "93657",
  "loc": {
    "y": 36.7243,
    "x": 119.547796
  },
  "pop": 27201,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93705",
  "loc": {
    "y": 36.786285,
    "x": 119.828617
  },
  "pop": 34114,
  "state": "CA"
},{
  "city": "SALINAS",
  "zip": "93901",
  "loc": {
    "y": 36.667693,
    "x": 121.659589
  },
  "pop": 25605,
  "state": "CA"
},{
  "city": "MARINA",
  "zip": "93933",
  "loc": {
    "y": 36.684922,
    "x": 121.793383
  },
  "pop": 16973,
  "state": "CA"
},{
  "city": "ATHERTON",
  "zip": "94027",
  "loc": {
    "y": 37.456255,
    "x": 122.200198
  },
  "pop": 7312,
  "state": "CA"
},{
  "city": "WOODSIDE",
  "zip": "94062",
  "loc": {
    "y": 37.452119,
    "x": 122.255879
  },
  "pop": 24947,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94124",
  "loc": {
    "y": 37.730888,
    "x": 122.388649
  },
  "pop": 27239,
  "state": "CA"
},{
  "city": "EAST PALO ALTO",
  "zip": "94303",
  "loc": {
    "y": 37.455641,
    "x": 122.131902
  },
  "pop": 35680,
  "state": "CA"
},{
  "city": "RUSSIAN RIVER",
  "zip": "94401",
  "loc": {
    "y": 37.572271,
    "x": 122.320262
  },
  "pop": 28190,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94133",
  "loc": {
    "y": 37.800175,
    "x": 122.409081
  },
  "pop": 27148,
  "state": "CA"
},{
  "city": "CALISTOGA",
  "zip": "94515",
  "loc": {
    "y": 38.582305,
    "x": 122.581384
  },
  "pop": 5758,
  "state": "CA"
},{
  "city": "CONCORD",
  "zip": "94518",
  "loc": {
    "y": 37.950434,
    "x": 122.026296
  },
  "pop": 25516,
  "state": "CA"
},{
  "city": "NEEDLES",
  "zip": "92363",
  "loc": {
    "y": 34.782369,
    "x": 114.587134
  },
  "pop": 6316,
  "state": "CA"
},{
  "city": "FONTANA",
  "zip": "92336",
  "loc": {
    "y": 34.117276,
    "x": 117.437759
  },
  "pop": 27957,
  "state": "CA"
},{
  "city": "ESSEX",
  "zip": "92332",
  "loc": {
    "y": 34.560626,
    "x": 115.280344
  },
  "pop": 214,
  "state": "CA"
},{
  "city": "SHOSHONE",
  "zip": "92384",
  "loc": {
    "y": 35.899239,
    "x": 116.264476
  },
  "pop": 353,
  "state": "CA"
},{
  "city": "MONARCH BAY",
  "zip": "92629",
  "loc": {
    "y": 33.476964,
    "x": 117.700483
  },
  "pop": 25618,
  "state": "CA"
},{
  "city": "HUNTINGTON BEACH",
  "zip": "92646",
  "loc": {
    "y": 33.668448,
    "x": 117.967771
  },
  "pop": 57915,
  "state": "CA"
},{
  "city": "BUTTONWILLOW",
  "zip": "93206",
  "loc": {
    "y": 35.403268,
    "x": 119.465926
  },
  "pop": 1975,
  "state": "CA"
},{
  "city": "PIXLEY",
  "zip": "93256",
  "loc": {
    "y": 35.955286,
    "x": 119.256427
  },
  "pop": 4768,
  "state": "CA"
},{
  "city": "TUPMAN",
  "zip": "93276",
  "loc": {
    "y": 35.288547,
    "x": 119.341994
  },
  "pop": 280,
  "state": "CA"
},{
  "city": "POND",
  "zip": "93280",
  "loc": {
    "y": 35.593375,
    "x": 119.344728
  },
  "pop": 13589,
  "state": "CA"
},{
  "city": "WOODLAKE",
  "zip": "93286",
  "loc": {
    "y": 36.431334,
    "x": 119.091764
  },
  "pop": 8421,
  "state": "CA"
},{
  "city": "BIG PINE",
  "zip": "93513",
  "loc": {
    "y": 37.167857,
    "x": 118.291597
  },
  "pop": 1642,
  "state": "CA"
},{
  "city": "TOMS PLACE",
  "zip": "93514",
  "loc": {
    "y": 37.386301,
    "x": 118.44156
  },
  "pop": 14072,
  "state": "CA"
},{
  "city": "JUNE LAKE",
  "zip": "93529",
  "loc": {
    "y": 37.777324,
    "x": 119.082492
  },
  "pop": 609,
  "state": "CA"
},{
  "city": "HI VISTA",
  "zip": "93535",
  "loc": {
    "y": 34.684751,
    "x": 118.063245
  },
  "pop": 49751,
  "state": "CA"
},{
  "city": "CHINA LAKE NWC",
  "zip": "93555",
  "loc": {
    "y": 35.631376,
    "x": 117.679733
  },
  "pop": 34246,
  "state": "CA"
},{
  "city": "PARLIER",
  "zip": "93648",
  "loc": {
    "y": 36.610265,
    "x": 119.537482
  },
  "pop": 9076,
  "state": "CA"
},{
  "city": "OROSI",
  "zip": "93647",
  "loc": {
    "y": 36.546368,
    "x": 119.281522
  },
  "pop": 7545,
  "state": "CA"
},{
  "city": "FIREBAUGH",
  "zip": "93622",
  "loc": {
    "y": 36.8651,
    "x": 120.470048
  },
  "pop": 7435,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93703",
  "loc": {
    "y": 36.768445,
    "x": 119.759401
  },
  "pop": 30457,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94109",
  "loc": {
    "y": 37.791687,
    "x": 122.418579
  },
  "pop": 49396,
  "state": "CA"
},{
  "city": "BENICIA",
  "zip": "94510",
  "loc": {
    "y": 38.068459,
    "x": 122.161392
  },
  "pop": 24545,
  "state": "CA"
},{
  "city": "FELICITY",
  "zip": "92283",
  "loc": {
    "y": 32.832922,
    "x": 114.636634
  },
  "pop": 3867,
  "state": "CA"
},{
  "city": "HEBER",
  "zip": "92249",
  "loc": {
    "y": 32.698918,
    "x": 115.428281
  },
  "pop": 206,
  "state": "CA"
},{
  "city": "RANCHO MIRAGE",
  "zip": "92270",
  "loc": {
    "y": 33.764284,
    "x": 116.422451
  },
  "pop": 9737,
  "state": "CA"
},{
  "city": "THOUSAND PALMS",
  "zip": "92276",
  "loc": {
    "y": 33.808158,
    "x": 116.371305
  },
  "pop": 5557,
  "state": "CA"
},{
  "city": "VIDAL",
  "zip": "92280",
  "loc": {
    "y": 34.156109,
    "x": 114.565602
  },
  "pop": 40,
  "state": "CA"
},{
  "city": "MENTONE",
  "zip": "92359",
  "loc": {
    "y": 34.077372,
    "x": 117.112581
  },
  "pop": 5832,
  "state": "CA"
},{
  "city": "SAN BERNARDINO",
  "zip": "92410",
  "loc": {
    "y": 34.107729,
    "x": 117.296789
  },
  "pop": 42522,
  "state": "CA"
},{
  "city": "COSTA MESA",
  "zip": "92626",
  "loc": {
    "y": 33.677711,
    "x": 117.909623
  },
  "pop": 45411,
  "state": "CA"
},{
  "city": "FULLERTON",
  "zip": "92631",
  "loc": {
    "y": 33.880519,
    "x": 117.89157
  },
  "pop": 28902,
  "state": "CA"
},{
  "city": "FULLERTON",
  "zip": "92633",
  "loc": {
    "y": 33.873913,
    "x": 117.961043
  },
  "pop": 42033,
  "state": "CA"
},{
  "city": "MIDWAY CITY",
  "zip": "92655",
  "loc": {
    "y": 33.744794,
    "x": 117.983539
  },
  "pop": 6224,
  "state": "CA"
},{
  "city": "VILLA PARK",
  "zip": "92667",
  "loc": {
    "y": 33.81036,
    "x": 117.828421
  },
  "pop": 40937,
  "state": "CA"
},{
  "city": "EL TORO MARINE C",
  "zip": "92709",
  "loc": {
    "y": 33.681287,
    "x": 117.715018
  },
  "pop": 8078,
  "state": "CA"
},{
  "city": "OXNARD",
  "zip": "93033",
  "loc": {
    "y": 34.168505,
    "x": 119.171732
  },
  "pop": 66043,
  "state": "CA"
},{
  "city": "SANTA BARBARA",
  "zip": "93103",
  "loc": {
    "y": 34.429065,
    "x": 119.683275
  },
  "pop": 18199,
  "state": "CA"
},{
  "city": "CALIFORNIA HOT S",
  "zip": "93207",
  "loc": {
    "y": 35.892422,
    "x": 118.646317
  },
  "pop": 436,
  "state": "CA"
},{
  "city": "WOODY",
  "zip": "93287",
  "loc": {
    "y": 35.70681,
    "x": 118.843872
  },
  "pop": 72,
  "state": "CA"
},{
  "city": "ADELAIDE",
  "zip": "93446",
  "loc": {
    "y": 35.635248,
    "x": 120.670676
  },
  "pop": 29255,
  "state": "CA"
},{
  "city": "PARKFIELD",
  "zip": "93451",
  "loc": {
    "y": 35.753209,
    "x": 120.696532
  },
  "pop": 1218,
  "state": "CA"
},{
  "city": "LANCASTER",
  "zip": "93534",
  "loc": {
    "y": 34.690888,
    "x": 118.149129
  },
  "pop": 32929,
  "state": "CA"
},{
  "city": "PEARSONVILLE",
  "zip": "93527",
  "loc": {
    "y": 35.674498,
    "x": 117.834844
  },
  "pop": 2633,
  "state": "CA"
},{
  "city": "JOHANNESBURG",
  "zip": "93528",
  "loc": {
    "y": 35.370655,
    "x": 117.637325
  },
  "pop": 306,
  "state": "CA"
},{
  "city": "CUTLER",
  "zip": "93615",
  "loc": {
    "y": 36.524266,
    "x": 119.287023
  },
  "pop": 4901,
  "state": "CA"
},{
  "city": "DOS PALOS",
  "zip": "93620",
  "loc": {
    "y": 37.00253,
    "x": 120.633348
  },
  "pop": 9311,
  "state": "CA"
},{
  "city": "SALINAS",
  "zip": "93906",
  "loc": {
    "y": 36.710339,
    "x": 121.643805
  },
  "pop": 39534,
  "state": "CA"
},{
  "city": "CARMEL VALLEY",
  "zip": "93924",
  "loc": {
    "y": 36.478709,
    "x": 121.724356
  },
  "pop": 6066,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94114",
  "loc": {
    "y": 37.758716,
    "x": 122.432977
  },
  "pop": 30698,
  "state": "CA"
},{
  "city": "BIRDS LANDING",
  "zip": "94512",
  "loc": {
    "y": 38.150402,
    "x": 121.844318
  },
  "pop": 32,
  "state": "CA"
},{
  "city": "APPLE VALLEY",
  "zip": "92307",
  "loc": {
    "y": 34.529081,
    "x": 117.2132
  },
  "pop": 26066,
  "state": "CA"
},{
  "city": "BARSTOW",
  "zip": "92311",
  "loc": {
    "y": 34.89145,
    "x": 117.038702
  },
  "pop": 33076,
  "state": "CA"
},{
  "city": "BLOOMINGTON",
  "zip": "92316",
  "loc": {
    "y": 34.066198,
    "x": 117.399295
  },
  "pop": 22916,
  "state": "CA"
},{
  "city": "HESPERIA",
  "zip": "92345",
  "loc": {
    "y": 34.422215,
    "x": 117.302527
  },
  "pop": 52170,
  "state": "CA"
},{
  "city": "AGUANGA",
  "zip": "92536",
  "loc": {
    "y": 33.447306,
    "x": 116.799693
  },
  "pop": 2309,
  "state": "CA"
},{
  "city": "SAN JACINTO",
  "zip": "92582",
  "loc": {
    "y": 33.788281,
    "x": 116.981911
  },
  "pop": 3233,
  "state": "CA"
},{
  "city": "ROMOLAND",
  "zip": "92585",
  "loc": {
    "y": 33.744518,
    "x": 117.171899
  },
  "pop": 5231,
  "state": "CA"
},{
  "city": "WILDOMAR",
  "zip": "92595",
  "loc": {
    "y": 33.602115,
    "x": 117.263953
  },
  "pop": 4758,
  "state": "CA"
},{
  "city": "GARDEN GROVE",
  "zip": "92641",
  "loc": {
    "y": 33.786651,
    "x": 117.975526
  },
  "pop": 29308,
  "state": "CA"
},{
  "city": "ANAHEIM",
  "zip": "92802",
  "loc": {
    "y": 33.806909,
    "x": 117.92219
  },
  "pop": 36262,
  "state": "CA"
},{
  "city": "CARPINTERIA",
  "zip": "93013",
  "loc": {
    "y": 34.403589,
    "x": 119.518257
  },
  "pop": 16591,
  "state": "CA"
},{
  "city": "SANTA SUSANA",
  "zip": "93063",
  "loc": {
    "y": 34.279202,
    "x": 118.699229
  },
  "pop": 47637,
  "state": "CA"
},{
  "city": "MOUNTAIN MESA",
  "zip": "93240",
  "loc": {
    "y": 35.617889,
    "x": 118.441256
  },
  "pop": 6285,
  "state": "CA"
},{
  "city": "STRATHMORE",
  "zip": "93267",
  "loc": {
    "y": 36.147237,
    "x": 119.079163
  },
  "pop": 4774,
  "state": "CA"
},{
  "city": "SAN SIMEON",
  "zip": "93452",
  "loc": {
    "y": 35.666815,
    "x": 121.144033
  },
  "pop": 500,
  "state": "CA"
},{
  "city": "COARSEGOLD",
  "zip": "93614",
  "loc": {
    "y": 37.221378,
    "x": 119.745545
  },
  "pop": 6950,
  "state": "CA"
},{
  "city": "SHAVER LAKE",
  "zip": "93664",
  "loc": {
    "y": 37.139695,
    "x": 119.273031
  },
  "pop": 925,
  "state": "CA"
},{
  "city": "SQUAW VALLEY",
  "zip": "93675",
  "loc": {
    "y": 36.707146,
    "x": 119.181449
  },
  "pop": 2731,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93721",
  "loc": {
    "y": 36.737714,
    "x": 119.784273
  },
  "pop": 6156,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93728",
  "loc": {
    "y": 36.758095,
    "x": 119.811314
  },
  "pop": 15386,
  "state": "CA"
},{
  "city": "PRUNEDALE",
  "zip": "93907",
  "loc": {
    "y": 36.765385,
    "x": 121.665588
  },
  "pop": 21061,
  "state": "CA"
},{
  "city": "BIG SUR",
  "zip": "93920",
  "loc": {
    "y": 36.245798,
    "x": 121.700897
  },
  "pop": 1669,
  "state": "CA"
},{
  "city": "WEST MENLO PARK",
  "zip": "94025",
  "loc": {
    "y": 37.453401,
    "x": 122.179136
  },
  "pop": 38383,
  "state": "CA"
},{
  "city": "LOMA MAR",
  "zip": "94021",
  "loc": {
    "y": 37.254437,
    "x": 122.281996
  },
  "pop": 237,
  "state": "CA"
},{
  "city": "BRENTWOOD",
  "zip": "94513",
  "loc": {
    "y": 37.932415,
    "x": 121.689427
  },
  "pop": 12372,
  "state": "CA"
},{
  "city": "AMBOY",
  "zip": "92304",
  "loc": {
    "y": 34.599012,
    "x": 115.774907
  },
  "pop": 29,
  "state": "CA"
},{
  "city": "BIG BEAR CITY",
  "zip": "92314",
  "loc": {
    "y": 34.242233,
    "x": 116.920412
  },
  "pop": 18959,
  "state": "CA"
},{
  "city": "LUDLOW",
  "zip": "92338",
  "loc": {
    "y": 34.901779,
    "x": 116.386202
  },
  "pop": 383,
  "state": "CA"
},{
  "city": "REDLANDS",
  "zip": "92374",
  "loc": {
    "y": 34.064989,
    "x": 117.167182
  },
  "pop": 36952,
  "state": "CA"
},{
  "city": "SAN BERNARDINO",
  "zip": "92408",
  "loc": {
    "y": 34.083127,
    "x": 117.271059
  },
  "pop": 13378,
  "state": "CA"
},{
  "city": "RIVERSIDE",
  "zip": "92508",
  "loc": {
    "y": 33.889676,
    "x": 117.304264
  },
  "pop": 13582,
  "state": "CA"
},{
  "city": "CAPISTRANO BEACH",
  "zip": "92624",
  "loc": {
    "y": 33.459115,
    "x": 117.662657
  },
  "pop": 7498,
  "state": "CA"
},{
  "city": "CORONA DEL MAR",
  "zip": "92625",
  "loc": {
    "y": 33.602066,
    "x": 117.874331
  },
  "pop": 5166,
  "state": "CA"
},{
  "city": "GARDEN GROVE",
  "zip": "92644",
  "loc": {
    "y": 33.765532,
    "x": 117.96935
  },
  "pop": 20467,
  "state": "CA"
},{
  "city": "ALISO VIEJO",
  "zip": "92656",
  "loc": {
    "y": 33.572367,
    "x": 117.708906
  },
  "pop": 16455,
  "state": "CA"
},{
  "city": "ORANGE",
  "zip": "92669",
  "loc": {
    "y": 33.791672,
    "x": 117.800285
  },
  "pop": 31583,
  "state": "CA"
},{
  "city": "WESTMINSTER",
  "zip": "92683",
  "loc": {
    "y": 33.752756,
    "x": 117.991312
  },
  "pop": 77965,
  "state": "CA"
},{
  "city": "SANTA ANA",
  "zip": "92701",
  "loc": {
    "y": 33.75016,
    "x": 117.857665
  },
  "pop": 63544,
  "state": "CA"
},{
  "city": "SANTA ANA",
  "zip": "92704",
  "loc": {
    "y": 33.726513,
    "x": 117.904683
  },
  "pop": 77151,
  "state": "CA"
},{
  "city": "ARVIN",
  "zip": "93203",
  "loc": {
    "y": 35.196629,
    "x": 118.8336
  },
  "pop": 10613,
  "state": "CA"
},{
  "city": "ONYX",
  "zip": "93255",
  "loc": {
    "y": 35.713584,
    "x": 118.190227
  },
  "pop": 380,
  "state": "CA"
},{
  "city": "GIANT FOREST",
  "zip": "93262",
  "loc": {
    "y": 36.573878,
    "x": 118.772271
  },
  "pop": 132,
  "state": "CA"
},{
  "city": "TERRA BELLA",
  "zip": "93270",
  "loc": {
    "y": 35.95698,
    "x": 119.031239
  },
  "pop": 5066,
  "state": "CA"
},{
  "city": "WELDON",
  "zip": "93283",
  "loc": {
    "y": 35.639076,
    "x": 118.285856
  },
  "pop": 2049,
  "state": "CA"
},{
  "city": "VISALIA",
  "zip": "93291",
  "loc": {
    "y": 36.355108,
    "x": 119.301029
  },
  "pop": 46656,
  "state": "CA"
},{
  "city": "CAYUCOS",
  "zip": "93430",
  "loc": {
    "y": 35.444606,
    "x": 120.890791
  },
  "pop": 3384,
  "state": "CA"
},{
  "city": "GROVER BEACH",
  "zip": "93433",
  "loc": {
    "y": 35.120969,
    "x": 120.617348
  },
  "pop": 11790,
  "state": "CA"
},{
  "city": "SAN ARDO",
  "zip": "93450",
  "loc": {
    "y": 35.985685,
    "x": 120.861191
  },
  "pop": 1684,
  "state": "CA"
},{
  "city": "FRIANT",
  "zip": "93626",
  "loc": {
    "y": 37.002416,
    "x": 119.696501
  },
  "pop": 871,
  "state": "CA"
},{
  "city": "SELMA",
  "zip": "93662",
  "loc": {
    "y": 36.569524,
    "x": 119.617026
  },
  "pop": 21798,
  "state": "CA"
},{
  "city": "SALINAS",
  "zip": "93908",
  "loc": {
    "y": 36.601122,
    "x": 121.672861
  },
  "pop": 15610,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93711",
  "loc": {
    "y": 36.830297,
    "x": 119.831896
  },
  "pop": 29809,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94111",
  "loc": {
    "y": 37.797376,
    "x": 122.400147
  },
  "pop": 3122,
  "state": "CA"
},{
  "city": "PALO ALTO",
  "zip": "94304",
  "loc": {
    "y": 37.433424,
    "x": 122.184234
  },
  "pop": 1835,
  "state": "CA"
},{
  "city": "CLAYTON",
  "zip": "94517",
  "loc": {
    "y": 37.915442,
    "x": 121.909967
  },
  "pop": 10353,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94110",
  "loc": {
    "y": 37.750858,
    "x": 122.415344
  },
  "pop": 70770,
  "state": "CA"
},{
  "city": "APPLE VALLEY",
  "zip": "92308",
  "loc": {
    "y": 34.469814,
    "x": 117.192684
  },
  "pop": 24973,
  "state": "CA"
},{
  "city": "LYTLE CREEK",
  "zip": "92358",
  "loc": {
    "y": 34.255755,
    "x": 117.518613
  },
  "pop": 625,
  "state": "CA"
},{
  "city": "FOREST FALLS",
  "zip": "92339",
  "loc": {
    "y": 34.08805,
    "x": 116.914147
  },
  "pop": 842,
  "state": "CA"
},{
  "city": "GILMAN HOT SPRIN",
  "zip": "92583",
  "loc": {
    "y": 33.78604,
    "x": 116.955201
  },
  "pop": 15506,
  "state": "CA"
},{
  "city": "TEMECULA",
  "zip": "92592",
  "loc": {
    "y": 33.498314,
    "x": 117.095774
  },
  "pop": 15567,
  "state": "CA"
},{
  "city": "FOOTHILL RANCH",
  "zip": "92610",
  "loc": {
    "y": 33.666822,
    "x": 117.664995
  },
  "pop": 3294,
  "state": "CA"
},{
  "city": "HUNTINGTON BEACH",
  "zip": "92647",
  "loc": {
    "y": 33.721018,
    "x": 118.003035
  },
  "pop": 56565,
  "state": "CA"
},{
  "city": "HUNTINGTON BEACH",
  "zip": "92649",
  "loc": {
    "y": 33.719111,
    "x": 118.045142
  },
  "pop": 34065,
  "state": "CA"
},{
  "city": "ORANGE",
  "zip": "92665",
  "loc": {
    "y": 33.83096,
    "x": 117.844903
  },
  "pop": 16566,
  "state": "CA"
},{
  "city": "PLACENTIA",
  "zip": "92670",
  "loc": {
    "y": 33.880323,
    "x": 117.859837
  },
  "pop": 47174,
  "state": "CA"
},{
  "city": "LAGUNA NIGUEL",
  "zip": "92677",
  "loc": {
    "y": 33.522871,
    "x": 117.705154
  },
  "pop": 40072,
  "state": "CA"
},{
  "city": "CAMARILLO",
  "zip": "93012",
  "loc": {
    "y": 34.22179,
    "x": 118.986648
  },
  "pop": 23489,
  "state": "CA"
},{
  "city": "SANTA BARBARA",
  "zip": "93109",
  "loc": {
    "y": 34.403848,
    "x": 119.7194
  },
  "pop": 11089,
  "state": "CA"
},{
  "city": "PORT HUENEME CBC",
  "zip": "93043",
  "loc": {
    "y": 34.16212,
    "x": 119.206008
  },
  "pop": 3389,
  "state": "CA"
},{
  "city": "CUYAMA",
  "zip": "93214",
  "loc": {
    "y": 34.933694,
    "x": 119.661339
  },
  "pop": 808,
  "state": "CA"
},{
  "city": "HANFORD",
  "zip": "93230",
  "loc": {
    "y": 36.331419,
    "x": 119.649094
  },
  "pop": 44686,
  "state": "CA"
},{
  "city": "GUADALUPE",
  "zip": "93434",
  "loc": {
    "y": 34.959989,
    "x": 120.570329
  },
  "pop": 6064,
  "state": "CA"
},{
  "city": "OCEANO",
  "zip": "93445",
  "loc": {
    "y": 35.10187,
    "x": 120.608044
  },
  "pop": 6249,
  "state": "CA"
},{
  "city": "FISH CAMP",
  "zip": "93623",
  "loc": {
    "y": 37.51692,
    "x": 119.642005
  },
  "pop": 132,
  "state": "CA"
},{
  "city": "MADERA",
  "zip": "93638",
  "loc": {
    "y": 36.968726,
    "x": 120.012778
  },
  "pop": 36525,
  "state": "CA"
},{
  "city": "OAKHURST",
  "zip": "93644",
  "loc": {
    "y": 37.347561,
    "x": 119.644854
  },
  "pop": 8190,
  "state": "CA"
},{
  "city": "FOWLER",
  "zip": "93625",
  "loc": {
    "y": 36.628153,
    "x": 119.671025
  },
  "pop": 5290,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93726",
  "loc": {
    "y": 36.794943,
    "x": 119.760445
  },
  "pop": 36325,
  "state": "CA"
},{
  "city": "CHUALAR",
  "zip": "93925",
  "loc": {
    "y": 36.595042,
    "x": 121.431964
  },
  "pop": 12,
  "state": "CA"
},{
  "city": "LOCKWOOD",
  "zip": "93932",
  "loc": {
    "y": 35.989287,
    "x": 121.205946
  },
  "pop": 939,
  "state": "CA"
},{
  "city": "SAN MATEO",
  "zip": "94403",
  "loc": {
    "y": 37.539495,
    "x": 122.299796
  },
  "pop": 35630,
  "state": "CA"
},{
  "city": "FOSTER CITY",
  "zip": "94404",
  "loc": {
    "y": 37.551614,
    "x": 122.263577
  },
  "pop": 33745,
  "state": "CA"
},{
  "city": "BYRON",
  "zip": "94514",
  "loc": {
    "y": 37.902616,
    "x": 121.602211
  },
  "pop": 5745,
  "state": "CA"
},{
  "city": "LA QUINTA",
  "zip": "92253",
  "loc": {
    "y": 33.668474,
    "x": 116.308081
  },
  "pop": 9392,
  "state": "CA"
},{
  "city": "SALTON CITY",
  "zip": "92274",
  "loc": {
    "y": 33.543418,
    "x": 116.11584
  },
  "pop": 19112,
  "state": "CA"
},{
  "city": "BLYTHE",
  "zip": "92272",
  "loc": {
    "y": 33.951256,
    "x": 116.495855
  },
  "pop": 18605,
  "state": "CA"
},{
  "city": "PARKER DAM",
  "zip": "92267",
  "loc": {
    "y": 34.297977,
    "x": 114.155969
  },
  "pop": 141,
  "state": "CA"
},{
  "city": "ADELANTO",
  "zip": "92301",
  "loc": {
    "y": 34.584128,
    "x": 117.424189
  },
  "pop": 7176,
  "state": "CA"
},{
  "city": "DAGGETT",
  "zip": "92327",
  "loc": {
    "y": 34.86677,
    "x": 116.887555
  },
  "pop": 701,
  "state": "CA"
},{
  "city": "TECOPA",
  "zip": "92389",
  "loc": {
    "y": 35.897925,
    "x": 115.829824
  },
  "pop": 48,
  "state": "CA"
},{
  "city": "RIVERSIDE",
  "zip": "92501",
  "loc": {
    "y": 33.9924,
    "x": 117.369421
  },
  "pop": 18478,
  "state": "CA"
},{
  "city": "MURRIETA",
  "zip": "92562",
  "loc": {
    "y": 33.563071,
    "x": 117.273838
  },
  "pop": 1988,
  "state": "CA"
},{
  "city": "LAKE FOREST",
  "zip": "92630",
  "loc": {
    "y": 33.640015,
    "x": 117.68819
  },
  "pop": 51666,
  "state": "CA"
},{
  "city": "FULLERTON",
  "zip": "92632",
  "loc": {
    "y": 33.865848,
    "x": 117.928376
  },
  "pop": 21680,
  "state": "CA"
},{
  "city": "NEWPORT BEACH",
  "zip": "92662",
  "loc": {
    "y": 33.606459,
    "x": 117.891732
  },
  "pop": 3472,
  "state": "CA"
},{
  "city": "NEWPORT BEACH",
  "zip": "92663",
  "loc": {
    "y": 33.623084,
    "x": 117.92788
  },
  "pop": 19826,
  "state": "CA"
},{
  "city": "YORBA LINDA",
  "zip": "92686",
  "loc": {
    "y": 33.888361,
    "x": 117.799619
  },
  "pop": 41141,
  "state": "CA"
},{
  "city": "FOUNTAIN VALLEY",
  "zip": "92708",
  "loc": {
    "y": 33.710762,
    "x": 117.952318
  },
  "pop": 54803,
  "state": "CA"
},{
  "city": "MISSION VIEJO",
  "zip": "92675",
  "loc": {
    "y": 33.511714,
    "x": 117.657409
  },
  "pop": 28121,
  "state": "CA"
},{
  "city": "ANAHEIM",
  "zip": "92805",
  "loc": {
    "y": 33.835332,
    "x": 117.906263
  },
  "pop": 55489,
  "state": "CA"
},{
  "city": "SANTA BARBARA",
  "zip": "93105",
  "loc": {
    "y": 34.436915,
    "x": 119.728538
  },
  "pop": 23284,
  "state": "CA"
},{
  "city": "FARMERSVILLE",
  "zip": "93223",
  "loc": {
    "y": 36.300169,
    "x": 119.205357
  },
  "pop": 6432,
  "state": "CA"
},{
  "city": "KETTLEMAN CITY",
  "zip": "93239",
  "loc": {
    "y": 36.021501,
    "x": 119.964361
  },
  "pop": 1762,
  "state": "CA"
},{
  "city": "LAMONT",
  "zip": "93241",
  "loc": {
    "y": 35.257059,
    "x": 118.912419
  },
  "pop": 13471,
  "state": "CA"
},{
  "city": "MC FARLAND",
  "zip": "93250",
  "loc": {
    "y": 35.675779,
    "x": 119.227156
  },
  "pop": 8494,
  "state": "CA"
},{
  "city": "BAKERSFIELD",
  "zip": "93311",
  "loc": {
    "y": 35.303891,
    "x": 119.105647
  },
  "pop": 10321,
  "state": "CA"
},{
  "city": "CANTIL",
  "zip": "93519",
  "loc": {
    "y": 35.282558,
    "x": 117.993868
  },
  "pop": 222,
  "state": "CA"
},{
  "city": "CRYSTALAIRE",
  "zip": "93544",
  "loc": {
    "y": 34.495914,
    "x": 117.798841
  },
  "pop": 1204,
  "state": "CA"
},{
  "city": "LONE PINE",
  "zip": "93545",
  "loc": {
    "y": 36.579781,
    "x": 118.057824
  },
  "pop": 2257,
  "state": "CA"
},{
  "city": "SALINAS",
  "zip": "93905",
  "loc": {
    "y": 36.681143,
    "x": 121.617606
  },
  "pop": 41956,
  "state": "CA"
},{
  "city": "MOUNTAIN VIEW",
  "zip": "94040",
  "loc": {
    "y": 37.385532,
    "x": 122.087983
  },
  "pop": 26969,
  "state": "CA"
},{
  "city": "PESCADERO",
  "zip": "94060",
  "loc": {
    "y": 37.206518,
    "x": 122.364876
  },
  "pop": 670,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94112",
  "loc": {
    "y": 37.71954,
    "x": 122.441081
  },
  "pop": 64320,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94115",
  "loc": {
    "y": 37.785607,
    "x": 122.435835
  },
  "pop": 28859,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94107",
  "loc": {
    "y": 37.762147,
    "x": 122.397099
  },
  "pop": 12143,
  "state": "CA"
},{
  "city": "SAN MATEO",
  "zip": "94402",
  "loc": {
    "y": 37.550685,
    "x": 122.32762
  },
  "pop": 23838,
  "state": "CA"
},{
  "city": "CONCORD",
  "zip": "94520",
  "loc": {
    "y": 37.982259,
    "x": 122.036178
  },
  "pop": 31474,
  "state": "CA"
},{
  "city": "CABAZON",
  "zip": "92230",
  "loc": {
    "y": 33.908583,
    "x": 116.773948
  },
  "pop": 1697,
  "state": "CA"
},{
  "city": "WHITE WATER",
  "zip": "92282",
  "loc": {
    "y": 33.927591,
    "x": 116.693154
  },
  "pop": 420,
  "state": "CA"
},{
  "city": "NILAND",
  "zip": "92257",
  "loc": {
    "y": 33.378373,
    "x": 115.696455
  },
  "pop": 875,
  "state": "CA"
},{
  "city": "BAKER",
  "zip": "92309",
  "loc": {
    "y": 35.360573,
    "x": 116.063754
  },
  "pop": 606,
  "state": "CA"
},{
  "city": "LUCERNE VALLEY",
  "zip": "92356",
  "loc": {
    "y": 34.44695,
    "x": 116.918857
  },
  "pop": 4353,
  "state": "CA"
},{
  "city": "SAN BERNARDINO",
  "zip": "92407",
  "loc": {
    "y": 34.20928,
    "x": 117.293697
  },
  "pop": 44927,
  "state": "CA"
},{
  "city": "HEMET",
  "zip": "92543",
  "loc": {
    "y": 33.741613,
    "x": 116.972974
  },
  "pop": 26985,
  "state": "CA"
},{
  "city": "SUN CITY",
  "zip": "92586",
  "loc": {
    "y": 33.704373,
    "x": 117.196942
  },
  "pop": 15225,
  "state": "CA"
},{
  "city": "SANTA BARBARA",
  "zip": "93101",
  "loc": {
    "y": 34.419668,
    "x": 119.70782
  },
  "pop": 29235,
  "state": "CA"
},{
  "city": "DELANO",
  "zip": "93215",
  "loc": {
    "y": 35.771511,
    "x": 119.24594
  },
  "pop": 23803,
  "state": "CA"
},{
  "city": "KERNVILLE",
  "zip": "93238",
  "loc": {
    "y": 35.755005,
    "x": 118.404723
  },
  "pop": 812,
  "state": "CA"
},{
  "city": "MARICOPA",
  "zip": "93252",
  "loc": {
    "y": 35.038353,
    "x": 119.407661
  },
  "pop": 1571,
  "state": "CA"
},{
  "city": "FELLOWS",
  "zip": "93224",
  "loc": {
    "y": 35.202579,
    "x": 119.564757
  },
  "pop": 521,
  "state": "CA"
},{
  "city": "STRATFORD",
  "zip": "93266",
  "loc": {
    "y": 36.178976,
    "x": 119.823564
  },
  "pop": 1135,
  "state": "CA"
},{
  "city": "COLLEGE HEIGHTS",
  "zip": "93305",
  "loc": {
    "y": 35.387772,
    "x": 118.982042
  },
  "pop": 34046,
  "state": "CA"
},{
  "city": "BAKERSFIELD",
  "zip": "93313",
  "loc": {
    "y": 35.297391,
    "x": 119.050936
  },
  "pop": 11417,
  "state": "CA"
},{
  "city": "HALCYON",
  "zip": "93420",
  "loc": {
    "y": 35.11449,
    "x": 120.57289
  },
  "pop": 21992,
  "state": "CA"
},{
  "city": "BALLARD",
  "zip": "93463",
  "loc": {
    "y": 34.609931,
    "x": 120.129286
  },
  "pop": 8327,
  "state": "CA"
},{
  "city": "ACTON",
  "zip": "93510",
  "loc": {
    "y": 34.483541,
    "x": 118.195929
  },
  "pop": 6139,
  "state": "CA"
},{
  "city": "KINGSBURG",
  "zip": "93631",
  "loc": {
    "y": 36.508047,
    "x": 119.543298
  },
  "pop": 12263,
  "state": "CA"
},{
  "city": "LOS BANOS",
  "zip": "93635",
  "loc": {
    "y": 37.06266,
    "x": 120.854387
  },
  "pop": 18199,
  "state": "CA"
},{
  "city": "NORTH FORK",
  "zip": "93643",
  "loc": {
    "y": 37.212531,
    "x": 119.514324
  },
  "pop": 2541,
  "state": "CA"
},{
  "city": "CARMEL",
  "zip": "93923",
  "loc": {
    "y": 36.545693,
    "x": 121.894875
  },
  "pop": 15293,
  "state": "CA"
},{
  "city": "BRISBANE",
  "zip": "94005",
  "loc": {
    "y": 37.681104,
    "x": 122.400118
  },
  "pop": 2952,
  "state": "CA"
},{
  "city": "MILLBRAE",
  "zip": "94030",
  "loc": {
    "y": 37.600382,
    "x": 122.401985
  },
  "pop": 20508,
  "state": "CA"
},{
  "city": "SAN BRUNO",
  "zip": "94066",
  "loc": {
    "y": 37.624742,
    "x": 122.429021
  },
  "pop": 38678,
  "state": "CA"
},{
  "city": "SUNNYVALE",
  "zip": "94089",
  "loc": {
    "y": 37.398255,
    "x": 122.000637
  },
  "pop": 13522,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94134",
  "loc": {
    "y": 37.718968,
    "x": 122.409577
  },
  "pop": 34635,
  "state": "CA"
},{
  "city": "SAN DIEGO",
  "zip": "92135",
  "loc": {
    "y": 32.702482,
    "x": 117.19202
  },
  "pop": 8122,
  "state": "CA"
},{
  "city": "WESTMORLAND",
  "zip": "92281",
  "loc": {
    "y": 33.041058,
    "x": 115.630723
  },
  "pop": 1902,
  "state": "CA"
},{
  "city": "MORONGO VALLEY",
  "zip": "92256",
  "loc": {
    "y": 34.060646,
    "x": 116.565641
  },
  "pop": 2721,
  "state": "CA"
},{
  "city": "YUCCA VALLEY",
  "zip": "92284",
  "loc": {
    "y": 34.155936,
    "x": 116.431313
  },
  "pop": 22131,
  "state": "CA"
},{
  "city": "HINKLEY",
  "zip": "92347",
  "loc": {
    "y": 34.92788,
    "x": 117.180867
  },
  "pop": 1905,
  "state": "CA"
},{
  "city": "SAN BERNARDINO",
  "zip": "92411",
  "loc": {
    "y": 34.121414,
    "x": 117.317158
  },
  "pop": 22994,
  "state": "CA"
},{
  "city": "MOUNTAIN CENTER",
  "zip": "92561",
  "loc": {
    "y": 33.531667,
    "x": 116.581954
  },
  "pop": 1896,
  "state": "CA"
},{
  "city": "NEWPORT BEACH",
  "zip": "92660",
  "loc": {
    "y": 33.630027,
    "x": 117.8757
  },
  "pop": 25390,
  "state": "CA"
},{
  "city": "COTO DE CAZA",
  "zip": "92679",
  "loc": {
    "y": 33.634576,
    "x": 117.577709
  },
  "pop": 6067,
  "state": "CA"
},{
  "city": "YORBA LINDA",
  "zip": "92687",
  "loc": {
    "y": 33.88238,
    "x": 117.731162
  },
  "pop": 14429,
  "state": "CA"
},{
  "city": "MISSION VIEJO",
  "zip": "92692",
  "loc": {
    "y": 33.610872,
    "x": 117.64245
  },
  "pop": 30777,
  "state": "CA"
},{
  "city": "ANAHEIM",
  "zip": "92801",
  "loc": {
    "y": 33.842679,
    "x": 117.954035
  },
  "pop": 47392,
  "state": "CA"
},{
  "city": "IRVINE",
  "zip": "92718",
  "loc": {
    "y": 33.658179,
    "x": 117.711476
  },
  "pop": 1,
  "state": "CA"
},{
  "city": "SOMIS",
  "zip": "93066",
  "loc": {
    "y": 34.279753,
    "x": 119.011537
  },
  "pop": 3025,
  "state": "CA"
},{
  "city": "PORT HUENEME",
  "zip": "93041",
  "loc": {
    "y": 34.162572,
    "x": 119.197317
  },
  "pop": 17337,
  "state": "CA"
},{
  "city": "POINT MUGU NAWC",
  "zip": "93042",
  "loc": {
    "y": 34.123432,
    "x": 119.09931
  },
  "pop": 1707,
  "state": "CA"
},{
  "city": "HURON",
  "zip": "93234",
  "loc": {
    "y": 36.237144,
    "x": 120.101964
  },
  "pop": 7050,
  "state": "CA"
},{
  "city": "LEMONCOVE",
  "zip": "93244",
  "loc": {
    "y": 36.396084,
    "x": 119.004986
  },
  "pop": 64,
  "state": "CA"
},{
  "city": "MC KITTRICK",
  "zip": "93251",
  "loc": {
    "y": 35.303097,
    "x": 119.636627
  },
  "pop": 616,
  "state": "CA"
},{
  "city": "GREENACRES",
  "zip": "93312",
  "loc": {
    "y": 35.382082,
    "x": 119.15014
  },
  "pop": 15935,
  "state": "CA"
},{
  "city": "CRESTON",
  "zip": "93432",
  "loc": {
    "y": 35.491543,
    "x": 120.554238
  },
  "pop": 726,
  "state": "CA"
},{
  "city": "TEMPLETON",
  "zip": "93465",
  "loc": {
    "y": 35.555082,
    "x": 120.710737
  },
  "pop": 5795,
  "state": "CA"
},{
  "city": "BENTON",
  "zip": "93512",
  "loc": {
    "y": 37.798099,
    "x": 118.498526
  },
  "pop": 241,
  "state": "CA"
},{
  "city": "JUNIPER HILLS",
  "zip": "93543",
  "loc": {
    "y": 34.547372,
    "x": 117.957405
  },
  "pop": 10046,
  "state": "CA"
},{
  "city": "LEONA VALLEY",
  "zip": "93551",
  "loc": {
    "y": 34.601404,
    "x": 118.181207
  },
  "pop": 20768,
  "state": "CA"
},{
  "city": "WILLOW SPRINGS",
  "zip": "93560",
  "loc": {
    "y": 34.863117,
    "x": 118.19636
  },
  "pop": 9898,
  "state": "CA"
},{
  "city": "VALYERMO",
  "zip": "93563",
  "loc": {
    "y": 34.339014,
    "x": 117.8271
  },
  "pop": 1456,
  "state": "CA"
},{
  "city": "ARGUS",
  "zip": "93562",
  "loc": {
    "y": 35.760817,
    "x": 117.382992
  },
  "pop": 3189,
  "state": "CA"
},{
  "city": "PINEDALE",
  "zip": "93650",
  "loc": {
    "y": 36.841107,
    "x": 119.800359
  },
  "pop": 4164,
  "state": "CA"
},{
  "city": "RAYMOND",
  "zip": "93653",
  "loc": {
    "y": 37.27898,
    "x": 119.876567
  },
  "pop": 491,
  "state": "CA"
},{
  "city": "RIVERDALE",
  "zip": "93656",
  "loc": {
    "y": 36.429525,
    "x": 119.871953
  },
  "pop": 4386,
  "state": "CA"
},{
  "city": "PACIFIC GROVE",
  "zip": "93950",
  "loc": {
    "y": 36.616737,
    "x": 121.921957
  },
  "pop": 16040,
  "state": "CA"
},{
  "city": "SAND CITY",
  "zip": "93955",
  "loc": {
    "y": 36.609208,
    "x": 121.835724
  },
  "pop": 23514,
  "state": "CA"
},{
  "city": "LOS ALTOS",
  "zip": "94024",
  "loc": {
    "y": 37.354745,
    "x": 122.086205
  },
  "pop": 20795,
  "state": "CA"
},{
  "city": "HILLSBOROUGH",
  "zip": "94010",
  "loc": {
    "y": 37.575884,
    "x": 122.362952
  },
  "pop": 38444,
  "state": "CA"
},{
  "city": "MOSS BEACH",
  "zip": "94038",
  "loc": {
    "y": 37.531039,
    "x": 122.50683
  },
  "pop": 5415,
  "state": "CA"
},{
  "city": "MOUNTAIN VIEW",
  "zip": "94043",
  "loc": {
    "y": 37.405567,
    "x": 122.077468
  },
  "pop": 28592,
  "state": "CA"
},{
  "city": "HALF MOON BAY",
  "zip": "94019",
  "loc": {
    "y": 37.479057,
    "x": 122.445929
  },
  "pop": 14073,
  "state": "CA"
},{
  "city": "REDWOOD CITY",
  "zip": "94065",
  "loc": {
    "y": 37.533128,
    "x": 122.248564
  },
  "pop": 2285,
  "state": "CA"
},{
  "city": "SAN CARLOS",
  "zip": "94070",
  "loc": {
    "y": 37.496859,
    "x": 122.267356
  },
  "pop": 27599,
  "state": "CA"
},{
  "city": "CONCORD",
  "zip": "94519",
  "loc": {
    "y": 37.984082,
    "x": 122.011948
  },
  "pop": 19032,
  "state": "CA"
},{
  "city": "ALAMO",
  "zip": "94507",
  "loc": {
    "y": 37.853695,
    "x": 122.022868
  },
  "pop": 8569,
  "state": "CA"
},{
  "city": "ANGELUS OAKS",
  "zip": "92305",
  "loc": {
    "y": 34.153149,
    "x": 116.948482
  },
  "pop": 238,
  "state": "CA"
},{
  "city": "CALIMESA",
  "zip": "92320",
  "loc": {
    "y": 33.994586,
    "x": 117.04304
  },
  "pop": 6345,
  "state": "CA"
},{
  "city": "PHELAN",
  "zip": "92371",
  "loc": {
    "y": 34.444901,
    "x": 117.519604
  },
  "pop": 13508,
  "state": "CA"
},{
  "city": "SAN BERNARDINO",
  "zip": "92404",
  "loc": {
    "y": 34.142577,
    "x": 117.260572
  },
  "pop": 50792,
  "state": "CA"
},{
  "city": "RIVERSIDE",
  "zip": "92507",
  "loc": {
    "y": 33.976086,
    "x": 117.338874
  },
  "pop": 45844,
  "state": "CA"
},{
  "city": "LAKE ELSINORE",
  "zip": "92530",
  "loc": {
    "y": 33.659816,
    "x": 117.348535
  },
  "pop": 34619,
  "state": "CA"
},{
  "city": "GARDEN GROVE",
  "zip": "92643",
  "loc": {
    "y": 33.762641,
    "x": 117.930193
  },
  "pop": 39473,
  "state": "CA"
},{
  "city": "COWAN HEIGHTS",
  "zip": "92705",
  "loc": {
    "y": 33.74866,
    "x": 117.768902
  },
  "pop": 37045,
  "state": "CA"
},{
  "city": "IRVINE",
  "zip": "92714",
  "loc": {
    "y": 33.68764,
    "x": 117.798928
  },
  "pop": 60654,
  "state": "CA"
},{
  "city": "IRVINE",
  "zip": "92720",
  "loc": {
    "y": 33.707495,
    "x": 117.765533
  },
  "pop": 23474,
  "state": "CA"
},{
  "city": "MONTECITO",
  "zip": "93108",
  "loc": {
    "y": 34.434258,
    "x": 119.64255
  },
  "pop": 12923,
  "state": "CA"
},{
  "city": "GOLETA",
  "zip": "93117",
  "loc": {
    "y": 34.429631,
    "x": 119.861245
  },
  "pop": 45988,
  "state": "CA"
},{
  "city": "THREE RIVERS",
  "zip": "93271",
  "loc": {
    "y": 36.437686,
    "x": 118.88754
  },
  "pop": 2245,
  "state": "CA"
},{
  "city": "SAN LUIS OBISPO",
  "zip": "93405",
  "loc": {
    "y": 35.290058,
    "x": 120.681724
  },
  "pop": 31976,
  "state": "CA"
},{
  "city": "ATASCADERO",
  "zip": "93422",
  "loc": {
    "y": 35.475439,
    "x": 120.663838
  },
  "pop": 27720,
  "state": "CA"
},{
  "city": "SANTA YNEZ",
  "zip": "93460",
  "loc": {
    "y": 34.623966,
    "x": 120.071332
  },
  "pop": 5659,
  "state": "CA"
},{
  "city": "LAKE LOS ANGELES",
  "zip": "93550",
  "loc": {
    "y": 34.571483,
    "x": 118.061306
  },
  "pop": 71024,
  "state": "CA"
},{
  "city": "MADERA",
  "zip": "93637",
  "loc": {
    "y": 36.94026,
    "x": 120.081966
  },
  "pop": 20440,
  "state": "CA"
},{
  "city": "TOLLHOUSE",
  "zip": "93667",
  "loc": {
    "y": 36.99434,
    "x": 119.391415
  },
  "pop": 1820,
  "state": "CA"
},{
  "city": "EASTON",
  "zip": "93706",
  "loc": {
    "y": 36.700589,
    "x": 119.820408
  },
  "pop": 33682,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93710",
  "loc": {
    "y": 36.823643,
    "x": 119.76205
  },
  "pop": 29719,
  "state": "CA"
},{
  "city": "GONZALES",
  "zip": "93926",
  "loc": {
    "y": 36.490038,
    "x": 121.410347
  },
  "pop": 12842,
  "state": "CA"
},{
  "city": "DALY CITY",
  "zip": "94015",
  "loc": {
    "y": 37.678696,
    "x": 122.478015
  },
  "pop": 57354,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94104",
  "loc": {
    "y": 37.791487,
    "x": 122.401826
  },
  "pop": 760,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94105",
  "loc": {
    "y": 37.786427,
    "x": 122.389229
  },
  "pop": 2054,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94121",
  "loc": {
    "y": 37.778616,
    "x": 122.489178
  },
  "pop": 40430,
  "state": "CA"
},{
  "city": "IMPERIAL",
  "zip": "92251",
  "loc": {
    "y": 32.846954,
    "x": 115.572984
  },
  "pop": 6092,
  "state": "CA"
},{
  "city": "TWENTYNINE PALMS",
  "zip": "92277",
  "loc": {
    "y": 34.145509,
    "x": 116.060133
  },
  "pop": 13371,
  "state": "CA"
},{
  "city": "HOLTVILLE",
  "zip": "92250",
  "loc": {
    "y": 32.810387,
    "x": 115.377456
  },
  "pop": 7060,
  "state": "CA"
},{
  "city": "PALM SPRINGS",
  "zip": "92262",
  "loc": {
    "y": 33.841406,
    "x": 116.53466
  },
  "pop": 22808,
  "state": "CA"
},{
  "city": "PALM SPRINGS",
  "zip": "92264",
  "loc": {
    "y": 33.801828,
    "x": 116.516958
  },
  "pop": 18733,
  "state": "CA"
},{
  "city": "WRIGHTWOOD",
  "zip": "92397",
  "loc": {
    "y": 34.362839,
    "x": 117.6249
  },
  "pop": 4148,
  "state": "CA"
},{
  "city": "LAKEVIEW",
  "zip": "92567",
  "loc": {
    "y": 33.807712,
    "x": 117.118704
  },
  "pop": 6480,
  "state": "CA"
},{
  "city": "MORENO VALLEY",
  "zip": "92557",
  "loc": {
    "y": 33.955257,
    "x": 117.245682
  },
  "pop": 37853,
  "state": "CA"
},{
  "city": "COSTA MESA",
  "zip": "92627",
  "loc": {
    "y": 33.647793,
    "x": 117.917667
  },
  "pop": 52357,
  "state": "CA"
},{
  "city": "GARDEN GROVE",
  "zip": "92640",
  "loc": {
    "y": 33.785826,
    "x": 117.92906
  },
  "pop": 43908,
  "state": "CA"
},{
  "city": "LAGUNA HILLS",
  "zip": "92653",
  "loc": {
    "y": 33.60028,
    "x": 117.70854
  },
  "pop": 45283,
  "state": "CA"
},{
  "city": "SAN BUENAVENTURA",
  "zip": "93001",
  "loc": {
    "y": 34.290531,
    "x": 119.28882
  },
  "pop": 31453,
  "state": "CA"
},{
  "city": "SANTA BARBARA",
  "zip": "93111",
  "loc": {
    "y": 34.445262,
    "x": 119.802509
  },
  "pop": 17689,
  "state": "CA"
},{
  "city": "BODFISH",
  "zip": "93205",
  "loc": {
    "y": 35.587046,
    "x": 118.484656
  },
  "pop": 1407,
  "state": "CA"
},{
  "city": "CORCORAN",
  "zip": "93212",
  "loc": {
    "y": 36.086455,
    "x": 119.560665
  },
  "pop": 16228,
  "state": "CA"
},{
  "city": "DI GIORGIO",
  "zip": "93217",
  "loc": {
    "y": 35.247604,
    "x": 118.846755
  },
  "pop": 258,
  "state": "CA"
},{
  "city": "VISALIA",
  "zip": "93277",
  "loc": {
    "y": 36.311379,
    "x": 119.306471
  },
  "pop": 51620,
  "state": "CA"
},{
  "city": "BAKERSFIELD",
  "zip": "93306",
  "loc": {
    "y": 35.386697,
    "x": 118.939104
  },
  "pop": 46699,
  "state": "CA"
},{
  "city": "LOS OSOS",
  "zip": "93402",
  "loc": {
    "y": 35.317203,
    "x": 120.833261
  },
  "pop": 14648,
  "state": "CA"
},{
  "city": "LOMPOC",
  "zip": "93437",
  "loc": {
    "y": 34.753215,
    "x": 120.517096
  },
  "pop": 9846,
  "state": "CA"
},{
  "city": "SHANDON",
  "zip": "93461",
  "loc": {
    "y": 35.651273,
    "x": 120.372047
  },
  "pop": 908,
  "state": "CA"
},{
  "city": "BORON",
  "zip": "93516",
  "loc": {
    "y": 35.003748,
    "x": 117.662921
  },
  "pop": 2904,
  "state": "CA"
},{
  "city": "DEL REY",
  "zip": "93616",
  "loc": {
    "y": 36.654306,
    "x": 119.59291
  },
  "pop": 1923,
  "state": "CA"
},{
  "city": "DINUBA",
  "zip": "93618",
  "loc": {
    "y": 36.534931,
    "x": 119.39087
  },
  "pop": 20012,
  "state": "CA"
},{
  "city": "KERMAN",
  "zip": "93630",
  "loc": {
    "y": 36.730576,
    "x": 120.072444
  },
  "pop": 11224,
  "state": "CA"
},{
  "city": "RAISIN",
  "zip": "93652",
  "loc": {
    "y": 36.598928,
    "x": 119.903158
  },
  "pop": 381,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93702",
  "loc": {
    "y": 36.739954,
    "x": 119.753215
  },
  "pop": 44477,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93727",
  "loc": {
    "y": 36.752796,
    "x": 119.706055
  },
  "pop": 51417,
  "state": "CA"
},{
  "city": "SOLEDAD",
  "zip": "93960",
  "loc": {
    "y": 36.41964,
    "x": 121.324286
  },
  "pop": 9046,
  "state": "CA"
},{
  "city": "LADERA",
  "zip": "94028",
  "loc": {
    "y": 37.378859,
    "x": 122.208131
  },
  "pop": 6379,
  "state": "CA"
},{
  "city": "MOFFETT FIELD",
  "zip": "94035",
  "loc": {
    "y": 37.41001,
    "x": 122.051944
  },
  "pop": 790,
  "state": "CA"
},{
  "city": "LA HONDA",
  "zip": "94020",
  "loc": {
    "y": 37.272285,
    "x": 122.293889
  },
  "pop": 1557,
  "state": "CA"
},{
  "city": "SUNNYVALE",
  "zip": "94086",
  "loc": {
    "y": 37.376407,
    "x": 122.023771
  },
  "pop": 56215,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94117",
  "loc": {
    "y": 37.771234,
    "x": 122.441272
  },
  "pop": 38127,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94123",
  "loc": {
    "y": 37.799865,
    "x": 122.434163
  },
  "pop": 23280,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94129",
  "loc": {
    "y": 37.800507,
    "x": 122.464958
  },
  "pop": 4715,
  "state": "CA"
},{
  "city": "PALO ALTO",
  "zip": "94306",
  "loc": {
    "y": 37.418009,
    "x": 122.127375
  },
  "pop": 24309,
  "state": "CA"
},{
  "city": "PALM CITY",
  "zip": "92260",
  "loc": {
    "y": 33.730842,
    "x": 116.366442
  },
  "pop": 31975,
  "state": "CA"
},{
  "city": "FORT IRWIN",
  "zip": "92310",
  "loc": {
    "y": 35.40148,
    "x": 116.644759
  },
  "pop": 6735,
  "state": "CA"
},{
  "city": "EAST HIGHLAND",
  "zip": "92346",
  "loc": {
    "y": 34.126969,
    "x": 117.208717
  },
  "pop": 37484,
  "state": "CA"
},{
  "city": "LOMA LINDA",
  "zip": "92354",
  "loc": {
    "y": 34.052833,
    "x": 117.251286
  },
  "pop": 17855,
  "state": "CA"
},{
  "city": "KELSO",
  "zip": "92351",
  "loc": {
    "y": 34.9678,
    "x": 115.577574
  },
  "pop": 30,
  "state": "CA"
},{
  "city": "SPRING VALLEY LA",
  "zip": "92392",
  "loc": {
    "y": 34.503917,
    "x": 117.319235
  },
  "pop": 51968,
  "state": "CA"
},{
  "city": "MUSCOY",
  "zip": "92405",
  "loc": {
    "y": 34.144101,
    "x": 117.310765
  },
  "pop": 35583,
  "state": "CA"
},{
  "city": "RUBIDOUX",
  "zip": "92509",
  "loc": {
    "y": 33.997355,
    "x": 117.444896
  },
  "pop": 52456,
  "state": "CA"
},{
  "city": "HEMET",
  "zip": "92545",
  "loc": {
    "y": 33.739857,
    "x": 117.015078
  },
  "pop": 19513,
  "state": "CA"
},{
  "city": "MURRIETA",
  "zip": "92563",
  "loc": {
    "y": 33.56903,
    "x": 117.178298
  },
  "pop": 22649,
  "state": "CA"
},{
  "city": "IDYLLWILD",
  "zip": "92549",
  "loc": {
    "y": 33.730433,
    "x": 116.710665
  },
  "pop": 3975,
  "state": "CA"
},{
  "city": "CANYON LAKE",
  "zip": "92587",
  "loc": {
    "y": 33.688756,
    "x": 117.252653
  },
  "pop": 12522,
  "state": "CA"
},{
  "city": "NEWPORT BEACH",
  "zip": "92661",
  "loc": {
    "y": 33.604429,
    "x": 117.906237
  },
  "pop": 6123,
  "state": "CA"
},{
  "city": "SANTA ANA",
  "zip": "92703",
  "loc": {
    "y": 33.746613,
    "x": 117.899589
  },
  "pop": 63104,
  "state": "CA"
},{
  "city": "ANAHEIM",
  "zip": "92807",
  "loc": {
    "y": 33.851583,
    "x": 117.787657
  },
  "pop": 35411,
  "state": "CA"
},{
  "city": "IRVINE",
  "zip": "92715",
  "loc": {
    "y": 33.650884,
    "x": 117.821251
  },
  "pop": 30690,
  "state": "CA"
},{
  "city": "SUMMERLAND",
  "zip": "93067",
  "loc": {
    "y": 34.424541,
    "x": 119.596016
  },
  "pop": 1330,
  "state": "CA"
},{
  "city": "EXETER",
  "zip": "93221",
  "loc": {
    "y": 36.304055,
    "x": 119.12928
  },
  "pop": 11088,
  "state": "CA"
},{
  "city": "LINDSAY",
  "zip": "93247",
  "loc": {
    "y": 36.209551,
    "x": 119.088427
  },
  "pop": 12983,
  "state": "CA"
},{
  "city": "NEW CUYAMA",
  "zip": "93254",
  "loc": {
    "y": 34.996709,
    "x": 119.823806
  },
  "pop": 80,
  "state": "CA"
},{
  "city": "WOFFORD HEIGHTS",
  "zip": "93285",
  "loc": {
    "y": 35.724556,
    "x": 118.455877
  },
  "pop": 3480,
  "state": "CA"
},{
  "city": "BAKERSFIELD",
  "zip": "93304",
  "loc": {
    "y": 35.339581,
    "x": 119.021793
  },
  "pop": 41870,
  "state": "CA"
},{
  "city": "SAN LUIS OBISPO",
  "zip": "93401",
  "loc": {
    "y": 35.263453,
    "x": 120.650933
  },
  "pop": 24638,
  "state": "CA"
},{
  "city": "BAKERSFIELD",
  "zip": "93308",
  "loc": {
    "y": 35.424395,
    "x": 119.043319
  },
  "pop": 39454,
  "state": "CA"
},{
  "city": "BRADLEY",
  "zip": "93426",
  "loc": {
    "y": 35.809255,
    "x": 120.972793
  },
  "pop": 862,
  "state": "CA"
},{
  "city": "CAMBRIA",
  "zip": "93428",
  "loc": {
    "y": 35.556568,
    "x": 121.084029
  },
  "pop": 5635,
  "state": "CA"
},{
  "city": "CHOLAME",
  "zip": "93431",
  "loc": {
    "y": 35.543847,
    "x": 120.194827
  },
  "pop": 206,
  "state": "CA"
},{
  "city": "MORRO BAY",
  "zip": "93442",
  "loc": {
    "y": 35.37953,
    "x": 120.844745
  },
  "pop": 10475,
  "state": "CA"
},{
  "city": "ELIZABETH LAKE",
  "zip": "93532",
  "loc": {
    "y": 34.668297,
    "x": 118.444719
  },
  "pop": 2337,
  "state": "CA"
},{
  "city": "QUARTZ HILL",
  "zip": "93536",
  "loc": {
    "y": 34.673619,
    "x": 118.213336
  },
  "pop": 39987,
  "state": "CA"
},{
  "city": "LEE VINING",
  "zip": "93541",
  "loc": {
    "y": 37.988988,
    "x": 119.123413
  },
  "pop": 415,
  "state": "CA"
},{
  "city": "BEAR VALLEY SPRI",
  "zip": "93561",
  "loc": {
    "y": 35.129776,
    "x": 118.522227
  },
  "pop": 24466,
  "state": "CA"
},{
  "city": "CROWLEY LAKE",
  "zip": "93546",
  "loc": {
    "y": 37.642361,
    "x": 118.976383
  },
  "pop": 4832,
  "state": "CA"
},{
  "city": "CANTUA CREEK",
  "zip": "93608",
  "loc": {
    "y": 36.492123,
    "x": 120.335252
  },
  "pop": 1622,
  "state": "CA"
},{
  "city": "CARUTHERS",
  "zip": "93609",
  "loc": {
    "y": 36.535847,
    "x": 119.844581
  },
  "pop": 4558,
  "state": "CA"
},{
  "city": "HELM",
  "zip": "93627",
  "loc": {
    "y": 36.499231,
    "x": 120.093598
  },
  "pop": 832,
  "state": "CA"
},{
  "city": "FRESNO",
  "zip": "93701",
  "loc": {
    "y": 36.748727,
    "x": 119.786705
  },
  "pop": 15024,
  "state": "CA"
},{
  "city": "GREENFIELD",
  "zip": "93927",
  "loc": {
    "y": 36.320178,
    "x": 121.24507
  },
  "pop": 8728,
  "state": "CA"
},{
  "city": "REDWOOD CITY",
  "zip": "94063",
  "loc": {
    "y": 37.481544,
    "x": 122.209134
  },
  "pop": 28251,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94102",
  "loc": {
    "y": 37.781334,
    "x": 122.416728
  },
  "pop": 26908,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94103",
  "loc": {
    "y": 37.77254,
    "x": 122.414664
  },
  "pop": 17867,
  "state": "CA"
},{
  "city": "COAST GUARD ISLA",
  "zip": "94501",
  "loc": {
    "y": 37.764783,
    "x": 122.260516
  },
  "pop": 76110,
  "state": "CA"
},{
  "city": "ANTIOCH",
  "zip": "94509",
  "loc": {
    "y": 37.993917,
    "x": 121.808906
  },
  "pop": 62830,
  "state": "CA"
},{
  "city": "EL CENTRO",
  "zip": "92243",
  "loc": {
    "y": 32.789332,
    "x": 115.566508
  },
  "pop": 39246,
  "state": "CA"
},{
  "city": "TWENTYNINE PALMS",
  "zip": "92278",
  "loc": {
    "y": 34.237969,
    "x": 116.06041
  },
  "pop": 11412,
  "state": "CA"
},{
  "city": "NEWBERRY SPRINGS",
  "zip": "92365",
  "loc": {
    "y": 34.885001,
    "x": 116.746373
  },
  "pop": 4296,
  "state": "CA"
},{
  "city": "ORO GRANDE",
  "zip": "92368",
  "loc": {
    "y": 34.617832,
    "x": 117.332733
  },
  "pop": 852,
  "state": "CA"
},{
  "city": "REDLANDS",
  "zip": "92373",
  "loc": {
    "y": 34.039659,
    "x": 117.180352
  },
  "pop": 29784,
  "state": "CA"
},{
  "city": "GEORGE AFB",
  "zip": "92394",
  "loc": {
    "y": 34.577325,
    "x": 117.363516
  },
  "pop": 6815,
  "state": "CA"
},{
  "city": "SAN BERNARDINO",
  "zip": "92409",
  "loc": {
    "y": 34.103685,
    "x": 117.241291
  },
  "pop": 1746,
  "state": "CA"
},{
  "city": "MORENO VALLEY",
  "zip": "92553",
  "loc": {
    "y": 33.915719,
    "x": 117.235066
  },
  "pop": 71314,
  "state": "CA"
},{
  "city": "RANCHO SANTA MAR",
  "zip": "92688",
  "loc": {
    "y": 33.651822,
    "x": 117.588388
  },
  "pop": 9489,
  "state": "CA"
},{
  "city": "MISSION VIEJO",
  "zip": "92691",
  "loc": {
    "y": 33.617155,
    "x": 117.664119
  },
  "pop": 48832,
  "state": "CA"
},{
  "city": "ANAHEIM",
  "zip": "92804",
  "loc": {
    "y": 33.81908,
    "x": 117.974985
  },
  "pop": 63622,
  "state": "CA"
},{
  "city": "OXNARD",
  "zip": "93035",
  "loc": {
    "y": 34.182177,
    "x": 119.215975
  },
  "pop": 23778,
  "state": "CA"
},{
  "city": "LATON",
  "zip": "93242",
  "loc": {
    "y": 36.437834,
    "x": 119.715565
  },
  "pop": 2860,
  "state": "CA"
},{
  "city": "LEMOORE NAVAL AI",
  "zip": "93245",
  "loc": {
    "y": 36.309535,
    "x": 119.831017
  },
  "pop": 26170,
  "state": "CA"
},{
  "city": "PORTERVILLE",
  "zip": "93257",
  "loc": {
    "y": 36.068636,
    "x": 119.031549
  },
  "pop": 54599,
  "state": "CA"
},{
  "city": "LOST HILLS",
  "zip": "93249",
  "loc": {
    "y": 35.613111,
    "x": 119.721573
  },
  "pop": 2373,
  "state": "CA"
},{
  "city": "SHAFTER",
  "zip": "93263",
  "loc": {
    "y": 35.496994,
    "x": 119.280075
  },
  "pop": 12270,
  "state": "CA"
},{
  "city": "TULARE",
  "zip": "93274",
  "loc": {
    "y": 36.202155,
    "x": 119.33802
  },
  "pop": 45567,
  "state": "CA"
},{
  "city": "BAKERSFIELD",
  "zip": "93309",
  "loc": {
    "y": 35.33839,
    "x": 119.062713
  },
  "pop": 58179,
  "state": "CA"
},{
  "city": "CALIFORNIA VALLE",
  "zip": "93453",
  "loc": {
    "y": 35.341254,
    "x": 120.3202
  },
  "pop": 1237,
  "state": "CA"
},{
  "city": "KEENE",
  "zip": "93531",
  "loc": {
    "y": 35.237502,
    "x": 118.607563
  },
  "pop": 455,
  "state": "CA"
},{
  "city": "NORTH EDWARDS",
  "zip": "93523",
  "loc": {
    "y": 34.930507,
    "x": 117.915384
  },
  "pop": 8996,
  "state": "CA"
},{
  "city": "AUBERRY",
  "zip": "93602",
  "loc": {
    "y": 37.072635,
    "x": 119.457202
  },
  "pop": 3179,
  "state": "CA"
},{
  "city": "BASS LAKE",
  "zip": "93604",
  "loc": {
    "y": 37.324359,
    "x": 119.556839
  },
  "pop": 628,
  "state": "CA"
},{
  "city": "ORANGE COVE",
  "zip": "93646",
  "loc": {
    "y": 36.624283,
    "x": 119.313502
  },
  "pop": 6374,
  "state": "CA"
},{
  "city": "CALWA",
  "zip": "93725",
  "loc": {
    "y": 36.675312,
    "x": 119.742477
  },
  "pop": 19698,
  "state": "CA"
},{
  "city": "MOUNTAIN VIEW",
  "zip": "94041",
  "loc": {
    "y": 37.389347,
    "x": 122.078341
  },
  "pop": 13438,
  "state": "CA"
},{
  "city": "REDWOOD CITY",
  "zip": "94061",
  "loc": {
    "y": 37.464661,
    "x": 122.230406
  },
  "pop": 33316,
  "state": "CA"
},{
  "city": "SUNNYVALE",
  "zip": "94087",
  "loc": {
    "y": 37.350214,
    "x": 122.034859
  },
  "pop": 47813,
  "state": "CA"
},{
  "city": "PACIFICA",
  "zip": "94044",
  "loc": {
    "y": 37.619559,
    "x": 122.481607
  },
  "pop": 37596,
  "state": "CA"
},{
  "city": "ANGWIN",
  "zip": "94508",
  "loc": {
    "y": 38.576906,
    "x": 122.447732
  },
  "pop": 4067,
  "state": "CA"
},{
  "city": "NIPTON",
  "zip": "92364",
  "loc": {
    "y": 35.46761,
    "x": 115.481436
  },
  "pop": 390,
  "state": "CA"
},{
  "city": "RIALTO",
  "zip": "92376",
  "loc": {
    "y": 34.113155,
    "x": 117.377133
  },
  "pop": 75341,
  "state": "CA"
},{
  "city": "SAN BERNARDINO",
  "zip": "92401",
  "loc": {
    "y": 34.110521,
    "x": 117.289753
  },
  "pop": 1193,
  "state": "CA"
},{
  "city": "LAKE ELSINORE",
  "zip": "92532",
  "loc": {
    "y": 33.651662,
    "x": 117.271278
  },
  "pop": 6796,
  "state": "CA"
},{
  "city": "MORENO VALLEY",
  "zip": "92555",
  "loc": {
    "y": 33.937659,
    "x": 117.185105
  },
  "pop": 9784,
  "state": "CA"
},{
  "city": "MENIFEE",
  "zip": "92584",
  "loc": {
    "y": 33.664744,
    "x": 117.1743
  },
  "pop": 8347,
  "state": "CA"
},{
  "city": "WINCHESTER",
  "zip": "92596",
  "loc": {
    "y": 33.624269,
    "x": 117.088518
  },
  "pop": 1195,
  "state": "CA"
},{
  "city": "BREA",
  "zip": "92621",
  "loc": {
    "y": 33.922897,
    "x": 117.886742
  },
  "pop": 45577,
  "state": "CA"
},{
  "city": "GARDEN GROVE",
  "zip": "92645",
  "loc": {
    "y": 33.78324,
    "x": 118.02639
  },
  "pop": 16398,
  "state": "CA"
},{
  "city": "ORANGE",
  "zip": "92666",
  "loc": {
    "y": 33.785258,
    "x": 117.845461
  },
  "pop": 13811,
  "state": "CA"
},{
  "city": "CAMARILLO",
  "zip": "93010",
  "loc": {
    "y": 34.231328,
    "x": 119.046361
  },
  "pop": 40173,
  "state": "CA"
},{
  "city": "SIMI VALLEY",
  "zip": "93065",
  "loc": {
    "y": 34.265589,
    "x": 118.765349
  },
  "pop": 55528,
  "state": "CA"
},{
  "city": "OJAI",
  "zip": "93023",
  "loc": {
    "y": 34.44512,
    "x": 119.256477
  },
  "pop": 22778,
  "state": "CA"
},{
  "city": "COALINGA",
  "zip": "93210",
  "loc": {
    "y": 36.162435,
    "x": 120.348928
  },
  "pop": 9579,
  "state": "CA"
},{
  "city": "IVANHOE",
  "zip": "93235",
  "loc": {
    "y": 36.385622,
    "x": 119.218884
  },
  "pop": 3326,
  "state": "CA"
},{
  "city": "BAKERSFIELD",
  "zip": "93301",
  "loc": {
    "y": 35.386611,
    "x": 119.017063
  },
  "pop": 12822,
  "state": "CA"
},{
  "city": "LOMPOC",
  "zip": "93436",
  "loc": {
    "y": 34.658349,
    "x": 120.450605
  },
  "pop": 49960,
  "state": "CA"
},{
  "city": "NIPOMO",
  "zip": "93444",
  "loc": {
    "y": 35.029806,
    "x": 120.489413
  },
  "pop": 11070,
  "state": "CA"
},{
  "city": "JUNIPER HILLS",
  "zip": "93553",
  "loc": {
    "y": 34.491124,
    "x": 117.902893
  },
  "pop": 1106,
  "state": "CA"
},{
  "city": "RANDSBURG",
  "zip": "93554",
  "loc": {
    "y": 35.352176,
    "x": 117.726396
  },
  "pop": 190,
  "state": "CA"
},{
  "city": "PRATHER",
  "zip": "93651",
  "loc": {
    "y": 36.993799,
    "x": 119.526771
  },
  "pop": 1446,
  "state": "CA"
},{
  "city": "TRANQUILLITY",
  "zip": "93668",
  "loc": {
    "y": 36.658376,
    "x": 120.261655
  },
  "pop": 1297,
  "state": "CA"
},{
  "city": "KING CITY",
  "zip": "93930",
  "loc": {
    "y": 36.202776,
    "x": 121.127329
  },
  "pop": 11299,
  "state": "CA"
},{
  "city": "DEL REY OAKS",
  "zip": "93940",
  "loc": {
    "y": 36.595642,
    "x": 121.8848
  },
  "pop": 35326,
  "state": "CA"
},{
  "city": "PEBBLE BEACH",
  "zip": "93953",
  "loc": {
    "y": 36.590735,
    "x": 121.942044
  },
  "pop": 5061,
  "state": "CA"
},{
  "city": "COLMA",
  "zip": "94014",
  "loc": {
    "y": 37.698187,
    "x": 122.452679
  },
  "pop": 40406,
  "state": "CA"
},{
  "city": "LOS ALTOS",
  "zip": "94022",
  "loc": {
    "y": 37.381432,
    "x": 122.125754
  },
  "pop": 17366,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94127",
  "loc": {
    "y": 37.735385,
    "x": 122.457116
  },
  "pop": 17906,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94130",
  "loc": {
    "y": 37.823128,
    "x": 122.369319
  },
  "pop": 4533,
  "state": "CA"
},{
  "city": "SAN FRANCISCO",
  "zip": "94131",
  "loc": {
    "y": 37.745032,
    "x": 122.438335
  },
  "pop": 30521,
  "state": "CA"
},{
  "city": "SUISUN CITY",
  "zip": "94585",
  "loc": {
    "y": 38.240834,
    "x": 122.042003
  },
  "pop": 31081,
  "state": "CA"
},{
  "city": "DIABLO",
  "zip": "94528",
  "loc": {
    "y": 37.83883,
    "x": 121.960951
  },
  "pop": 791,
  "state": "CA"
},{
  "city": "SUNOL",
  "zip": "94586",
  "loc": {
    "y": 37.609403,
    "x": 121.898636
  },
  "pop": 953,
  "state": "CA"
},{
  "city": "UNION CITY",
  "zip": "94587",
  "loc": {
    "y": 37.589458,
    "x": 122.049702
  },
  "pop": 52869,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94603",
  "loc": {
    "y": 37.740239,
    "x": 122.171017
  },
  "pop": 27303,
  "state": "CA"
},{
  "city": "BERKELEY",
  "zip": "94703",
  "loc": {
    "y": 37.863028,
    "x": 122.274914
  },
  "pop": 18554,
  "state": "CA"
},{
  "city": "NICASIO",
  "zip": "94946",
  "loc": {
    "y": 38.054622,
    "x": 122.696402
  },
  "pop": 665,
  "state": "CA"
},{
  "city": "CAPITOLA",
  "zip": "95010",
  "loc": {
    "y": 36.977359,
    "x": 121.952145
  },
  "pop": 9337,
  "state": "CA"
},{
  "city": "CASTROVILLE",
  "zip": "95012",
  "loc": {
    "y": 36.77142,
    "x": 121.747368
  },
  "pop": 7168,
  "state": "CA"
},{
  "city": "FELTON",
  "zip": "95018",
  "loc": {
    "y": 37.063124,
    "x": 122.062162
  },
  "pop": 8194,
  "state": "CA"
},{
  "city": "SAN GERONIMO",
  "zip": "94963",
  "loc": {
    "y": 38.017155,
    "x": 122.67784
  },
  "pop": 802,
  "state": "CA"
},{
  "city": "SAN JUAN BAUTIST",
  "zip": "95045",
  "loc": {
    "y": 36.849856,
    "x": 121.532721
  },
  "pop": 3657,
  "state": "CA"
},{
  "city": "SANTA CRUZ",
  "zip": "95065",
  "loc": {
    "y": 37.003319,
    "x": 121.982557
  },
  "pop": 8130,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95207",
  "loc": {
    "y": 38.002025,
    "x": 121.32056
  },
  "pop": 50167,
  "state": "CA"
},{
  "city": "VALLECITO",
  "zip": "95251",
  "loc": {
    "y": 38.101472,
    "x": 120.467879
  },
  "pop": 200,
  "state": "CA"
},{
  "city": "WOODBRIDGE",
  "zip": "95258",
  "loc": {
    "y": 38.155124,
    "x": 121.308632
  },
  "pop": 2241,
  "state": "CA"
},{
  "city": "CROWS LANDING",
  "zip": "95313",
  "loc": {
    "y": 37.438956,
    "x": 121.019893
  },
  "pop": 1896,
  "state": "CA"
},{
  "city": "MURPHYS",
  "zip": "95247",
  "loc": {
    "y": 38.126896,
    "x": 120.461772
  },
  "pop": 2691,
  "state": "CA"
},{
  "city": "ELK",
  "zip": "95432",
  "loc": {
    "y": 39.160402,
    "x": 123.723961
  },
  "pop": 199,
  "state": "CA"
},{
  "city": "MENDOCINO",
  "zip": "95460",
  "loc": {
    "y": 39.323212,
    "x": 123.78846
  },
  "pop": 1876,
  "state": "CA"
},{
  "city": "95489",
  "zip": "95489",
  "loc": {
    "y": 40.038453,
    "x": 124.032628
  },
  "pop": 358,
  "state": "CA"
},{
  "city": "WINDSOR",
  "zip": "95492",
  "loc": {
    "y": 38.543182,
    "x": 122.804375
  },
  "pop": 13717,
  "state": "CA"
},{
  "city": "MAD RIVER",
  "zip": "95552",
  "loc": {
    "y": 40.352352,
    "x": 123.413994
  },
  "pop": 6,
  "state": "CA"
},{
  "city": "FERNDALE",
  "zip": "95536",
  "loc": {
    "y": 40.574488,
    "x": 124.252268
  },
  "pop": 2942,
  "state": "CA"
},{
  "city": "BROOKS",
  "zip": "95606",
  "loc": {
    "y": 38.739277,
    "x": 122.133391
  },
  "pop": 162,
  "state": "CA"
},{
  "city": "ROCKLIN",
  "zip": "95677",
  "loc": {
    "y": 38.791898,
    "x": 121.243406
  },
  "pop": 19125,
  "state": "CA"
},{
  "city": "WOODLAND",
  "zip": "95695",
  "loc": {
    "y": 38.674294,
    "x": 121.77932
  },
  "pop": 44587,
  "state": "CA"
},{
  "city": "TWIN BRIDGES",
  "zip": "95735",
  "loc": {
    "y": 38.808615,
    "x": 120.128851
  },
  "pop": 0,
  "state": "CA"
},{
  "city": "SODA SPRINGS",
  "zip": "95728",
  "loc": {
    "y": 39.338467,
    "x": 120.465493
  },
  "pop": 96,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95823",
  "loc": {
    "y": 38.479711,
    "x": 121.443846
  },
  "pop": 55103,
  "state": "CA"
},{
  "city": "DURHAM",
  "zip": "95938",
  "loc": {
    "y": 39.641599,
    "x": 121.791983
  },
  "pop": 3327,
  "state": "CA"
},{
  "city": "FAIRFIELD",
  "zip": "94533",
  "loc": {
    "y": 38.267084,
    "x": 122.03565
  },
  "pop": 65455,
  "state": "CA"
},{
  "city": "EMERYVILLE",
  "zip": "94608",
  "loc": {
    "y": 37.836466,
    "x": 122.280363
  },
  "pop": 22318,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94613",
  "loc": {
    "y": 37.782427,
    "x": 122.181585
  },
  "pop": 627,
  "state": "CA"
},{
  "city": "KENSINGTON",
  "zip": "94707",
  "loc": {
    "y": 37.893118,
    "x": 122.276517
  },
  "pop": 9152,
  "state": "CA"
},{
  "city": "EL SOBRANTE",
  "zip": "94803",
  "loc": {
    "y": 37.969287,
    "x": 122.290092
  },
  "pop": 22238,
  "state": "CA"
},{
  "city": "RICHMOND",
  "zip": "94804",
  "loc": {
    "y": 37.926523,
    "x": 122.33421
  },
  "pop": 33990,
  "state": "CA"
},{
  "city": "RICHMOND",
  "zip": "94805",
  "loc": {
    "y": 37.941719,
    "x": 122.323756
  },
  "pop": 12342,
  "state": "CA"
},{
  "city": "NOVATO",
  "zip": "94947",
  "loc": {
    "y": 38.097258,
    "x": 122.583691
  },
  "pop": 22759,
  "state": "CA"
},{
  "city": "PETALUMA",
  "zip": "94952",
  "loc": {
    "y": 38.240349,
    "x": 122.677727
  },
  "pop": 29724,
  "state": "CA"
},{
  "city": "WOODACRE",
  "zip": "94973",
  "loc": {
    "y": 38.006933,
    "x": 122.638247
  },
  "pop": 1524,
  "state": "CA"
},{
  "city": "APTOS",
  "zip": "95003",
  "loc": {
    "y": 36.978477,
    "x": 121.891979
  },
  "pop": 23964,
  "state": "CA"
},{
  "city": "LAGUNITAS",
  "zip": "94938",
  "loc": {
    "y": 38.013929,
    "x": 122.701576
  },
  "pop": 276,
  "state": "CA"
},{
  "city": "LOS GATOS",
  "zip": "95032",
  "loc": {
    "y": 37.231571,
    "x": 121.950088
  },
  "pop": 18189,
  "state": "CA"
},{
  "city": "LA SELVA BEACH",
  "zip": "95076",
  "loc": {
    "y": 36.920515,
    "x": 121.763437
  },
  "pop": 68295,
  "state": "CA"
},{
  "city": "SCOTTS VALLEY",
  "zip": "95060",
  "loc": {
    "y": 36.982946,
    "x": 122.043612
  },
  "pop": 40334,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95124",
  "loc": {
    "y": 37.256844,
    "x": 121.920831
  },
  "pop": 44595,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95126",
  "loc": {
    "y": 37.322482,
    "x": 121.917398
  },
  "pop": 24778,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95134",
  "loc": {
    "y": 37.413999,
    "x": 121.943399
  },
  "pop": 4324,
  "state": "CA"
},{
  "city": "LODI",
  "zip": "95240",
  "loc": {
    "y": 38.123579,
    "x": 121.263034
  },
  "pop": 42726,
  "state": "CA"
},{
  "city": "WEST POINT",
  "zip": "95255",
  "loc": {
    "y": 38.406201,
    "x": 120.515862
  },
  "pop": 1513,
  "state": "CA"
},{
  "city": "MOUNTAIN RANCH",
  "zip": "95246",
  "loc": {
    "y": 38.220363,
    "x": 120.548137
  },
  "pop": 2323,
  "state": "CA"
},{
  "city": "ATWATER",
  "zip": "95301",
  "loc": {
    "y": 37.353154,
    "x": 120.600837
  },
  "pop": 24928,
  "state": "CA"
},{
  "city": "DENAIR",
  "zip": "95316",
  "loc": {
    "y": 37.538419,
    "x": 120.796474
  },
  "pop": 5878,
  "state": "CA"
},{
  "city": "HICKMAN",
  "zip": "95323",
  "loc": {
    "y": 37.619989,
    "x": 120.71722
  },
  "pop": 1405,
  "state": "CA"
},{
  "city": "MI WUK VILLAGE",
  "zip": "95346",
  "loc": {
    "y": 38.105576,
    "x": 120.131762
  },
  "pop": 701,
  "state": "CA"
},{
  "city": "GROVELAND",
  "zip": "95321",
  "loc": {
    "y": 37.840899,
    "x": 120.191809
  },
  "pop": 3616,
  "state": "CA"
},{
  "city": "TUOLUMNE",
  "zip": "95379",
  "loc": {
    "y": 37.971339,
    "x": 120.237496
  },
  "pop": 3402,
  "state": "CA"
},{
  "city": "TRACY",
  "zip": "95376",
  "loc": {
    "y": 37.742116,
    "x": 121.419723
  },
  "pop": 47291,
  "state": "CA"
},{
  "city": "RIPON",
  "zip": "95366",
  "loc": {
    "y": 37.753286,
    "x": 121.122909
  },
  "pop": 10879,
  "state": "CA"
},{
  "city": "ANNAPOLIS",
  "zip": "95412",
  "loc": {
    "y": 38.714485,
    "x": 123.314214
  },
  "pop": 24,
  "state": "CA"
},{
  "city": "95411",
  "zip": "95411",
  "loc": {
    "y": 40.161039,
    "x": 123.610187
  },
  "pop": 133,
  "state": "CA"
},{
  "city": "FORT BRAGG",
  "zip": "95437",
  "loc": {
    "y": 39.437452,
    "x": 123.78835
  },
  "pop": 13535,
  "state": "CA"
},{
  "city": "LITTLERIVER",
  "zip": "95456",
  "loc": {
    "y": 39.271042,
    "x": 123.753089
  },
  "pop": 1119,
  "state": "CA"
},{
  "city": "YORKVILLE",
  "zip": "95494",
  "loc": {
    "y": 38.908945,
    "x": 123.233867
  },
  "pop": 173,
  "state": "CA"
},{
  "city": "KNEELAND",
  "zip": "95549",
  "loc": {
    "y": 40.71262,
    "x": 123.946421
  },
  "pop": 265,
  "state": "CA"
},{
  "city": "ORLEANS",
  "zip": "95556",
  "loc": {
    "y": 41.318092,
    "x": 123.529564
  },
  "pop": 619,
  "state": "CA"
},{
  "city": "GOLD RIVER",
  "zip": "95670",
  "loc": {
    "y": 38.601897,
    "x": 121.289434
  },
  "pop": 42461,
  "state": "CA"
},{
  "city": "RESCUE",
  "zip": "95672",
  "loc": {
    "y": 38.719353,
    "x": 120.994526
  },
  "pop": 2987,
  "state": "CA"
},{
  "city": "RUMSEY",
  "zip": "95679",
  "loc": {
    "y": 38.8762,
    "x": 122.253738
  },
  "pop": 228,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95826",
  "loc": {
    "y": 38.553868,
    "x": 121.369265
  },
  "pop": 38107,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95832",
  "loc": {
    "y": 38.475387,
    "x": 121.482967
  },
  "pop": 7724,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95834",
  "loc": {
    "y": 38.633418,
    "x": 121.492052
  },
  "pop": 6375,
  "state": "CA"
},{
  "city": "COLUSA",
  "zip": "95932",
  "loc": {
    "y": 39.21311,
    "x": 122.011563
  },
  "pop": 7042,
  "state": "CA"
},{
  "city": "DOBBINS",
  "zip": "95935",
  "loc": {
    "y": 39.371469,
    "x": 121.234386
  },
  "pop": 1502,
  "state": "CA"
},{
  "city": "HAYWARD",
  "zip": "94541",
  "loc": {
    "y": 37.674048,
    "x": 122.089418
  },
  "pop": 48964,
  "state": "CA"
},{
  "city": "OAKLEY",
  "zip": "94561",
  "loc": {
    "y": 37.994034,
    "x": 121.703623
  },
  "pop": 20920,
  "state": "CA"
},{
  "city": "FREMONT",
  "zip": "94538",
  "loc": {
    "y": 37.530815,
    "x": 121.971215
  },
  "pop": 45430,
  "state": "CA"
},{
  "city": "HAYWARD",
  "zip": "94542",
  "loc": {
    "y": 37.658566,
    "x": 122.047236
  },
  "pop": 11165,
  "state": "CA"
},{
  "city": "CONCORD",
  "zip": "94521",
  "loc": {
    "y": 37.957503,
    "x": 121.974955
  },
  "pop": 39005,
  "state": "CA"
},{
  "city": "NEWARK",
  "zip": "94560",
  "loc": {
    "y": 37.536812,
    "x": 122.031956
  },
  "pop": 37861,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94606",
  "loc": {
    "y": 37.79565,
    "x": 122.24292
  },
  "pop": 38555,
  "state": "CA"
},{
  "city": "PIEDMONT",
  "zip": "94611",
  "loc": {
    "y": 37.828157,
    "x": 122.22683
  },
  "pop": 34238,
  "state": "CA"
},{
  "city": "COTATI",
  "zip": "94931",
  "loc": {
    "y": 38.325918,
    "x": 122.704831
  },
  "pop": 6849,
  "state": "CA"
},{
  "city": "INVERNESS",
  "zip": "94937",
  "loc": {
    "y": 38.083514,
    "x": 122.856774
  },
  "pop": 1716,
  "state": "CA"
},{
  "city": "AROMAS",
  "zip": "95004",
  "loc": {
    "y": 36.878522,
    "x": 121.639781
  },
  "pop": 2713,
  "state": "CA"
},{
  "city": "SANTA CLARA",
  "zip": "95051",
  "loc": {
    "y": 37.346992,
    "x": 121.983848
  },
  "pop": 49570,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95112",
  "loc": {
    "y": 37.341388,
    "x": 121.880414
  },
  "pop": 46470,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95135",
  "loc": {
    "y": 37.297539,
    "x": 121.757228
  },
  "pop": 9104,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95204",
  "loc": {
    "y": 37.974302,
    "x": 121.315364
  },
  "pop": 28860,
  "state": "CA"
},{
  "city": "UNIV OF THE PACI",
  "zip": "95211",
  "loc": {
    "y": 37.980364,
    "x": 121.310336
  },
  "pop": 1722,
  "state": "CA"
},{
  "city": "WILSEYVILLE",
  "zip": "95257",
  "loc": {
    "y": 38.384566,
    "x": 120.442356
  },
  "pop": 32,
  "state": "CA"
},{
  "city": "CERES",
  "zip": "95307",
  "loc": {
    "y": 37.588097,
    "x": 120.949936
  },
  "pop": 29037,
  "state": "CA"
},{
  "city": "MODESTO",
  "zip": "95355",
  "loc": {
    "y": 37.673515,
    "x": 120.954658
  },
  "pop": 43734,
  "state": "CA"
},{
  "city": "PINECREST",
  "zip": "95364",
  "loc": {
    "y": 38.341062,
    "x": 119.865195
  },
  "pop": 13,
  "state": "CA"
},{
  "city": "CAZADERO",
  "zip": "95421",
  "loc": {
    "y": 38.566335,
    "x": 123.182896
  },
  "pop": 2367,
  "state": "CA"
},{
  "city": "CLEARLAKE",
  "zip": "95422",
  "loc": {
    "y": 38.957138,
    "x": 122.636089
  },
  "pop": 12157,
  "state": "CA"
},{
  "city": "LAYTONVILLE",
  "zip": "95454",
  "loc": {
    "y": 39.667811,
    "x": 123.486862
  },
  "pop": 1815,
  "state": "CA"
},{
  "city": "FREESTONE",
  "zip": "95472",
  "loc": {
    "y": 38.391543,
    "x": 122.838503
  },
  "pop": 27943,
  "state": "CA"
},{
  "city": "KLAMATH",
  "zip": "95548",
  "loc": {
    "y": 41.542075,
    "x": 124.033907
  },
  "pop": 1390,
  "state": "CA"
},{
  "city": "SOMES BAR",
  "zip": "95568",
  "loc": {
    "y": 41.43304,
    "x": 123.475928
  },
  "pop": 195,
  "state": "CA"
},{
  "city": "WILLOW CREEK",
  "zip": "95573",
  "loc": {
    "y": 40.938894,
    "x": 123.631062
  },
  "pop": 1503,
  "state": "CA"
},{
  "city": "CLARKSBURG",
  "zip": "95612",
  "loc": {
    "y": 38.395963,
    "x": 121.556853
  },
  "pop": 1501,
  "state": "CA"
},{
  "city": "DIAMOND SPRINGS",
  "zip": "95619",
  "loc": {
    "y": 38.66302,
    "x": 120.836071
  },
  "pop": 6747,
  "state": "CA"
},{
  "city": "PENRYN",
  "zip": "95663",
  "loc": {
    "y": 38.856654,
    "x": 121.179149
  },
  "pop": 2048,
  "state": "CA"
},{
  "city": "ORANGEVALE",
  "zip": "95662",
  "loc": {
    "y": 38.682384,
    "x": 121.222902
  },
  "pop": 31361,
  "state": "CA"
},{
  "city": "LOOMIS",
  "zip": "95650",
  "loc": {
    "y": 38.80711,
    "x": 121.169826
  },
  "pop": 12973,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95819",
  "loc": {
    "y": 38.568293,
    "x": 121.436634
  },
  "pop": 18333,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95824",
  "loc": {
    "y": 38.517843,
    "x": 121.441883
  },
  "pop": 26507,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95864",
  "loc": {
    "y": 38.587768,
    "x": 121.376889
  },
  "pop": 25105,
  "state": "CA"
},{
  "city": "BIGGS",
  "zip": "95917",
  "loc": {
    "y": 39.414918,
    "x": 121.695873
  },
  "pop": 2784,
  "state": "CA"
},{
  "city": "COHASSET",
  "zip": "95926",
  "loc": {
    "y": 39.756466,
    "x": 121.851806
  },
  "pop": 55269,
  "state": "CA"
},{
  "city": "BERKELEY",
  "zip": "94704",
  "loc": {
    "y": 37.866428,
    "x": 122.257048
  },
  "pop": 23551,
  "state": "CA"
},{
  "city": "NOVATO",
  "zip": "94945",
  "loc": {
    "y": 38.1163,
    "x": 122.571416
  },
  "pop": 15535,
  "state": "CA"
},{
  "city": "PETALUMA",
  "zip": "94954",
  "loc": {
    "y": 38.250739,
    "x": 122.615536
  },
  "pop": 27667,
  "state": "CA"
},{
  "city": "CAMPBELL",
  "zip": "95008",
  "loc": {
    "y": 37.280007,
    "x": 121.95539
  },
  "pop": 41821,
  "state": "CA"
},{
  "city": "COYOTE",
  "zip": "95013",
  "loc": {
    "y": 37.216721,
    "x": 121.746021
  },
  "pop": 316,
  "state": "CA"
},{
  "city": "MONTE VISTA",
  "zip": "95014",
  "loc": {
    "y": 37.317363,
    "x": 122.038604
  },
  "pop": 47598,
  "state": "CA"
},{
  "city": "PAICINES",
  "zip": "95043",
  "loc": {
    "y": 36.49478,
    "x": 121.032853
  },
  "pop": 636,
  "state": "CA"
},{
  "city": "SANTA CLARA",
  "zip": "95054",
  "loc": {
    "y": 37.394673,
    "x": 121.95394
  },
  "pop": 10370,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95133",
  "loc": {
    "y": 37.372875,
    "x": 121.855959
  },
  "pop": 24136,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95215",
  "loc": {
    "y": 37.968545,
    "x": 121.215295
  },
  "pop": 18533,
  "state": "CA"
},{
  "city": "FARMINGTON",
  "zip": "95230",
  "loc": {
    "y": 37.944771,
    "x": 120.852343
  },
  "pop": 141,
  "state": "CA"
},{
  "city": "CHINESE CAMP",
  "zip": "95309",
  "loc": {
    "y": 37.856829,
    "x": 120.406673
  },
  "pop": 15,
  "state": "CA"
},{
  "city": "LE GRAND",
  "zip": "95333",
  "loc": {
    "y": 37.234175,
    "x": 120.251737
  },
  "pop": 1810,
  "state": "CA"
},{
  "city": "CASPAR",
  "zip": "95420",
  "loc": {
    "y": 39.365102,
    "x": 123.798489
  },
  "pop": 349,
  "state": "CA"
},{
  "city": "SANTA ROSA",
  "zip": "95401",
  "loc": {
    "y": 38.443123,
    "x": 122.751722
  },
  "pop": 30549,
  "state": "CA"
},{
  "city": "GLEN ELLEN",
  "zip": "95442",
  "loc": {
    "y": 38.362538,
    "x": 122.521002
  },
  "pop": 5055,
  "state": "CA"
},{
  "city": "HEALDSBURG",
  "zip": "95448",
  "loc": {
    "y": 38.61553,
    "x": 122.856529
  },
  "pop": 16884,
  "state": "CA"
},{
  "city": "KELSEYVILLE",
  "zip": "95451",
  "loc": {
    "y": 38.946164,
    "x": 122.781707
  },
  "pop": 10064,
  "state": "CA"
},{
  "city": "95440",
  "zip": "95440",
  "loc": {
    "y": 40.101665,
    "x": 123.842409
  },
  "pop": 2876,
  "state": "CA"
},{
  "city": "REDWOOD VALLEY",
  "zip": "95470",
  "loc": {
    "y": 39.269446,
    "x": 123.213289
  },
  "pop": 5328,
  "state": "CA"
},{
  "city": "BURNT RANCH",
  "zip": "95527",
  "loc": {
    "y": 40.772238,
    "x": 123.461248
  },
  "pop": 478,
  "state": "CA"
},{
  "city": "CRESCENT CITY",
  "zip": "95531",
  "loc": {
    "y": 41.785402,
    "x": 124.178448
  },
  "pop": 19400,
  "state": "CA"
},{
  "city": "CAPAY",
  "zip": "95607",
  "loc": {
    "y": 38.696964,
    "x": 122.100993
  },
  "pop": 175,
  "state": "CA"
},{
  "city": "LIBERTY FARMS",
  "zip": "95620",
  "loc": {
    "y": 38.458691,
    "x": 121.815825
  },
  "pop": 14536,
  "state": "CA"
},{
  "city": "CITRUS HEIGHTS",
  "zip": "95621",
  "loc": {
    "y": 38.695155,
    "x": 121.307501
  },
  "pop": 40540,
  "state": "CA"
},{
  "city": "IONE",
  "zip": "95640",
  "loc": {
    "y": 38.351882,
    "x": 120.943265
  },
  "pop": 8440,
  "state": "CA"
},{
  "city": "ESPARTO",
  "zip": "95627",
  "loc": {
    "y": 38.694191,
    "x": 122.021391
  },
  "pop": 2118,
  "state": "CA"
},{
  "city": "SOMERSET",
  "zip": "95684",
  "loc": {
    "y": 38.607414,
    "x": 120.666306
  },
  "pop": 2892,
  "state": "CA"
},{
  "city": "CAMINO",
  "zip": "95709",
  "loc": {
    "y": 38.744938,
    "x": 120.671979
  },
  "pop": 4394,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95835",
  "loc": {
    "y": 38.662595,
    "x": 121.483444
  },
  "pop": 373,
  "state": "CA"
},{
  "city": "MARYSVILLE",
  "zip": "95901",
  "loc": {
    "y": 39.141653,
    "x": 121.522467
  },
  "pop": 43785,
  "state": "CA"
},{
  "city": "ARBUCKLE",
  "zip": "95912",
  "loc": {
    "y": 39.013787,
    "x": 122.027405
  },
  "pop": 3851,
  "state": "CA"
},{
  "city": "CANYONDAM",
  "zip": "95923",
  "loc": {
    "y": 40.207958,
    "x": 121.156324
  },
  "pop": 39,
  "state": "CA"
},{
  "city": "BROWNSVILLE",
  "zip": "95919",
  "loc": {
    "y": 39.452534,
    "x": 121.261179
  },
  "pop": 1013,
  "state": "CA"
},{
  "city": "LIVERMORE",
  "zip": "94550",
  "loc": {
    "y": 37.68299,
    "x": 121.762983
  },
  "pop": 59709,
  "state": "CA"
},{
  "city": "PINOLE",
  "zip": "94564",
  "loc": {
    "y": 37.996903,
    "x": 122.287477
  },
  "pop": 16920,
  "state": "CA"
},{
  "city": "RODEO",
  "zip": "94572",
  "loc": {
    "y": 38.03069,
    "x": 122.258139
  },
  "pop": 7827,
  "state": "CA"
},{
  "city": "NAPA",
  "zip": "94559",
  "loc": {
    "y": 38.290362,
    "x": 122.284086
  },
  "pop": 23606,
  "state": "CA"
},{
  "city": "SAN LORENZO",
  "zip": "94580",
  "loc": {
    "y": 37.678671,
    "x": 122.129547
  },
  "pop": 23010,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94612",
  "loc": {
    "y": 37.808473,
    "x": 122.266774
  },
  "pop": 10763,
  "state": "CA"
},{
  "city": "KENSINGTON",
  "zip": "94708",
  "loc": {
    "y": 37.890829,
    "x": 122.25976
  },
  "pop": 8874,
  "state": "CA"
},{
  "city": "SAN PABLO",
  "zip": "94806",
  "loc": {
    "y": 37.972374,
    "x": 122.336929
  },
  "pop": 47668,
  "state": "CA"
},{
  "city": "CIVIC CENTER",
  "zip": "94903",
  "loc": {
    "y": 38.015044,
    "x": 122.54521
  },
  "pop": 25563,
  "state": "CA"
},{
  "city": "BELVEDERE",
  "zip": "94920",
  "loc": {
    "y": 37.889885,
    "x": 122.472627
  },
  "pop": 10993,
  "state": "CA"
},{
  "city": "BERKELEY",
  "zip": "94702",
  "loc": {
    "y": 37.865611,
    "x": 122.285126
  },
  "pop": 15004,
  "state": "CA"
},{
  "city": "MILPITAS",
  "zip": "95035",
  "loc": {
    "y": 37.436491,
    "x": 121.892885
  },
  "pop": 50907,
  "state": "CA"
},{
  "city": "SOQUEL",
  "zip": "95073",
  "loc": {
    "y": 37.003525,
    "x": 121.950255
  },
  "pop": 8143,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95111",
  "loc": {
    "y": 37.282276,
    "x": 121.824038
  },
  "pop": 48286,
  "state": "CA"
},{
  "city": "SANTA CRUZ",
  "zip": "95064",
  "loc": {
    "y": 36.995851,
    "x": 122.057803
  },
  "pop": 4658,
  "state": "CA"
},{
  "city": "MIDPINES",
  "zip": "95345",
  "loc": {
    "y": 37.571009,
    "x": 119.946548
  },
  "pop": 388,
  "state": "CA"
},{
  "city": "MODESTO",
  "zip": "95351",
  "loc": {
    "y": 37.625022,
    "x": 121.006033
  },
  "pop": 69275,
  "state": "CA"
},{
  "city": "FULTON",
  "zip": "95439",
  "loc": {
    "y": 38.494732,
    "x": 122.77608
  },
  "pop": 569,
  "state": "CA"
},{
  "city": "HOPLAND",
  "zip": "95449",
  "loc": {
    "y": 38.972056,
    "x": 123.116956
  },
  "pop": 1648,
  "state": "CA"
},{
  "city": "MANCHESTER",
  "zip": "95459",
  "loc": {
    "y": 38.992088,
    "x": 123.670962
  },
  "pop": 453,
  "state": "CA"
},{
  "city": "NICE",
  "zip": "95464",
  "loc": {
    "y": 39.122341,
    "x": 122.842409
  },
  "pop": 2374,
  "state": "CA"
},{
  "city": "PETROLIA",
  "zip": "95558",
  "loc": {
    "y": 40.300558,
    "x": 124.251236
  },
  "pop": 347,
  "state": "CA"
},{
  "city": "AUBURN",
  "zip": "95603",
  "loc": {
    "y": 38.928311,
    "x": 121.084347
  },
  "pop": 32535,
  "state": "CA"
},{
  "city": "FORESTHILL",
  "zip": "95631",
  "loc": {
    "y": 39.00229,
    "x": 120.861127
  },
  "pop": 4626,
  "state": "CA"
},{
  "city": "RANCHO MURIETA",
  "zip": "95683",
  "loc": {
    "y": 38.507475,
    "x": 121.094089
  },
  "pop": 3035,
  "state": "CA"
},{
  "city": "WHEATLAND",
  "zip": "95692",
  "loc": {
    "y": 39.019197,
    "x": 121.422126
  },
  "pop": 2532,
  "state": "CA"
},{
  "city": "WILTON",
  "zip": "95693",
  "loc": {
    "y": 38.412069,
    "x": 121.225656
  },
  "pop": 4082,
  "state": "CA"
},{
  "city": "APPLEGATE",
  "zip": "95703",
  "loc": {
    "y": 38.995487,
    "x": 120.990511
  },
  "pop": 1898,
  "state": "CA"
},{
  "city": "FREMONT",
  "zip": "94536",
  "loc": {
    "y": 37.560493,
    "x": 121.999935
  },
  "pop": 58580,
  "state": "CA"
},{
  "city": "BODEGA BAY",
  "zip": "94923",
  "loc": {
    "y": 38.330921,
    "x": 123.037308
  },
  "pop": 1427,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94621",
  "loc": {
    "y": 37.758924,
    "x": 122.185335
  },
  "pop": 26689,
  "state": "CA"
},{
  "city": "MARSHALL",
  "zip": "94940",
  "loc": {
    "y": 38.176221,
    "x": 122.890011
  },
  "pop": 55,
  "state": "CA"
},{
  "city": "NOVATO",
  "zip": "94949",
  "loc": {
    "y": 38.061837,
    "x": 122.540408
  },
  "pop": 16219,
  "state": "CA"
},{
  "city": "SARATOGA",
  "zip": "95070",
  "loc": {
    "y": 37.272871,
    "x": 122.018238
  },
  "pop": 28909,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95206",
  "loc": {
    "y": 37.931643,
    "x": 121.287169
  },
  "pop": 33154,
  "state": "CA"
},{
  "city": "MARIPOSA",
  "zip": "95338",
  "loc": {
    "y": 37.503918,
    "x": 119.892496
  },
  "pop": 9323,
  "state": "CA"
},{
  "city": "MODESTO",
  "zip": "95356",
  "loc": {
    "y": 37.699431,
    "x": 121.027051
  },
  "pop": 26202,
  "state": "CA"
},{
  "city": "STEVINSON",
  "zip": "95374",
  "loc": {
    "y": 37.32575,
    "x": 120.869856
  },
  "pop": 1564,
  "state": "CA"
},{
  "city": "95414",
  "zip": "95414",
  "loc": {
    "y": 40.290394,
    "x": 123.649246
  },
  "pop": 226,
  "state": "CA"
},{
  "city": "SANTA ROSA",
  "zip": "95403",
  "loc": {
    "y": 38.477273,
    "x": 122.748528
  },
  "pop": 30874,
  "state": "CA"
},{
  "city": "BAYSIDE",
  "zip": "95524",
  "loc": {
    "y": 40.822381,
    "x": 124.027305
  },
  "pop": 1744,
  "state": "CA"
},{
  "city": "CARMICHAEL",
  "zip": "95608",
  "loc": {
    "y": 38.628393,
    "x": 121.328683
  },
  "pop": 55815,
  "state": "CA"
},{
  "city": "ELK GROVE",
  "zip": "95624",
  "loc": {
    "y": 38.412744,
    "x": 121.359914
  },
  "pop": 23492,
  "state": "CA"
},{
  "city": "LOTUS",
  "zip": "95651",
  "loc": {
    "y": 38.801712,
    "x": 120.928864
  },
  "pop": 1832,
  "state": "CA"
},{
  "city": "PINE GROVE",
  "zip": "95665",
  "loc": {
    "y": 38.396783,
    "x": 120.643713
  },
  "pop": 3066,
  "state": "CA"
},{
  "city": "VACAVILLE",
  "zip": "95687",
  "loc": {
    "y": 38.341915,
    "x": 121.962285
  },
  "pop": 50280,
  "state": "CA"
},{
  "city": "VACAVILLE",
  "zip": "95688",
  "loc": {
    "y": 38.3812,
    "x": 121.989912
  },
  "pop": 29052,
  "state": "CA"
},{
  "city": "ELK GROVE",
  "zip": "95758",
  "loc": {
    "y": 38.404238,
    "x": 121.430706
  },
  "pop": 13455,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95818",
  "loc": {
    "y": 38.556778,
    "x": 121.492884
  },
  "pop": 22214,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95829",
  "loc": {
    "y": 38.472564,
    "x": 121.346631
  },
  "pop": 4610,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95841",
  "loc": {
    "y": 38.662699,
    "x": 121.340608
  },
  "pop": 21161,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95842",
  "loc": {
    "y": 38.687385,
    "x": 121.35046
  },
  "pop": 32169,
  "state": "CA"
},{
  "city": "BERRY CREEK",
  "zip": "95916",
  "loc": {
    "y": 39.638394,
    "x": 121.385467
  },
  "pop": 1285,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95833",
  "loc": {
    "y": 38.616993,
    "x": 121.494487
  },
  "pop": 29150,
  "state": "CA"
},{
  "city": "DOWNIEVILLE",
  "zip": "95936",
  "loc": {
    "y": 39.570265,
    "x": 120.677767
  },
  "pop": 46,
  "state": "CA"
},{
  "city": "GLENN",
  "zip": "95943",
  "loc": {
    "y": 39.606871,
    "x": 122.038443
  },
  "pop": 1090,
  "state": "CA"
},{
  "city": "LAFAYETTE",
  "zip": "94549",
  "loc": {
    "y": 37.896105,
    "x": 122.11194
  },
  "pop": 25979,
  "state": "CA"
},{
  "city": "POPE VALLEY",
  "zip": "94567",
  "loc": {
    "y": 38.678192,
    "x": 122.472244
  },
  "pop": 286,
  "state": "CA"
},{
  "city": "SAN LEANDRO",
  "zip": "94577",
  "loc": {
    "y": 37.720467,
    "x": 122.158705
  },
  "pop": 36779,
  "state": "CA"
},{
  "city": "ORINDA",
  "zip": "94563",
  "loc": {
    "y": 37.878659,
    "x": 122.172848
  },
  "pop": 16883,
  "state": "CA"
},{
  "city": "SAN LEANDRO",
  "zip": "94578",
  "loc": {
    "y": 37.702377,
    "x": 122.123969
  },
  "pop": 31780,
  "state": "CA"
},{
  "city": "SAN RAMON",
  "zip": "94583",
  "loc": {
    "y": 37.756188,
    "x": 121.952224
  },
  "pop": 35449,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94602",
  "loc": {
    "y": 37.801133,
    "x": 122.210368
  },
  "pop": 28629,
  "state": "CA"
},{
  "city": "BODEGA",
  "zip": "94922",
  "loc": {
    "y": 38.339264,
    "x": 122.951364
  },
  "pop": 93,
  "state": "CA"
},{
  "city": "CORTE MADERA",
  "zip": "94925",
  "loc": {
    "y": 37.922256,
    "x": 122.513202
  },
  "pop": 7974,
  "state": "CA"
},{
  "city": "POINT REYES STAT",
  "zip": "94956",
  "loc": {
    "y": 38.064794,
    "x": 122.81621
  },
  "pop": 951,
  "state": "CA"
},{
  "city": "VALLEY FORD",
  "zip": "94972",
  "loc": {
    "y": 38.315729,
    "x": 122.924457
  },
  "pop": 114,
  "state": "CA"
},{
  "city": "ALVISO",
  "zip": "95002",
  "loc": {
    "y": 37.427659,
    "x": 121.968597
  },
  "pop": 2179,
  "state": "CA"
},{
  "city": "HOLLISTER",
  "zip": "95023",
  "loc": {
    "y": 36.848404,
    "x": 121.387101
  },
  "pop": 31243,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95120",
  "loc": {
    "y": 37.217538,
    "x": 121.861547
  },
  "pop": 34577,
  "state": "CA"
},{
  "city": "GLENCOE",
  "zip": "95232",
  "loc": {
    "y": 38.351557,
    "x": 120.594546
  },
  "pop": 189,
  "state": "CA"
},{
  "city": "COULTERVILLE",
  "zip": "95311",
  "loc": {
    "y": 37.738642,
    "x": 119.985813
  },
  "pop": 2384,
  "state": "CA"
},{
  "city": "LODI",
  "zip": "95242",
  "loc": {
    "y": 38.132989,
    "x": 121.311814
  },
  "pop": 20669,
  "state": "CA"
},{
  "city": "SAN ANDREAS",
  "zip": "95249",
  "loc": {
    "y": 38.186732,
    "x": 120.668703
  },
  "pop": 3081,
  "state": "CA"
},{
  "city": "JAMESTOWN",
  "zip": "95327",
  "loc": {
    "y": 37.906544,
    "x": 120.494567
  },
  "pop": 8359,
  "state": "CA"
},{
  "city": "LA GRANGE",
  "zip": "95329",
  "loc": {
    "y": 37.678915,
    "x": 120.358131
  },
  "pop": 1305,
  "state": "CA"
},{
  "city": "GUSTINE",
  "zip": "95322",
  "loc": {
    "y": 37.242456,
    "x": 121.003965
  },
  "pop": 6083,
  "state": "CA"
},{
  "city": "WATERFORD",
  "zip": "95386",
  "loc": {
    "y": 37.650988,
    "x": 120.753862
  },
  "pop": 6505,
  "state": "CA"
},{
  "city": "GLENHAVEN",
  "zip": "95443",
  "loc": {
    "y": 38.99008,
    "x": 122.522035
  },
  "pop": 94,
  "state": "CA"
},{
  "city": "95495",
  "zip": "95495",
  "loc": {
    "y": 40.203331,
    "x": 123.381217
  },
  "pop": 367,
  "state": "CA"
},{
  "city": "EUREKA",
  "zip": "95501",
  "loc": {
    "y": 40.776237,
    "x": 124.155892
  },
  "pop": 45720,
  "state": "CA"
},{
  "city": "MC KINLEYVILLE",
  "zip": "95521",
  "loc": {
    "y": 40.904901,
    "x": 124.081069
  },
  "pop": 32283,
  "state": "CA"
},{
  "city": "WESTHAVEN",
  "zip": "95570",
  "loc": {
    "y": 41.087949,
    "x": 124.101253
  },
  "pop": 3143,
  "state": "CA"
},{
  "city": "COOL",
  "zip": "95614",
  "loc": {
    "y": 38.903633,
    "x": 120.972963
  },
  "pop": 2325,
  "state": "CA"
},{
  "city": "SCOTIA",
  "zip": "95565",
  "loc": {
    "y": 40.454665,
    "x": 124.039074
  },
  "pop": 321,
  "state": "CA"
},{
  "city": "HERALD",
  "zip": "95638",
  "loc": {
    "y": 38.31282,
    "x": 121.158898
  },
  "pop": 1009,
  "state": "CA"
},{
  "city": "ELVERTA",
  "zip": "95626",
  "loc": {
    "y": 38.716424,
    "x": 121.431038
  },
  "pop": 6154,
  "state": "CA"
},{
  "city": "RIO LINDA",
  "zip": "95673",
  "loc": {
    "y": 38.689311,
    "x": 121.445152
  },
  "pop": 12756,
  "state": "CA"
},{
  "city": "CAMERON PARK",
  "zip": "95682",
  "loc": {
    "y": 38.665616,
    "x": 120.975925
  },
  "pop": 20139,
  "state": "CA"
},{
  "city": "WINTERS",
  "zip": "95694",
  "loc": {
    "y": 38.529462,
    "x": 121.974544
  },
  "pop": 6253,
  "state": "CA"
},{
  "city": "DUTCH FLAT",
  "zip": "95714",
  "loc": {
    "y": 39.197788,
    "x": 120.826224
  },
  "pop": 533,
  "state": "CA"
},{
  "city": "EMIGRANT GAP",
  "zip": "95715",
  "loc": {
    "y": 39.286907,
    "x": 120.662902
  },
  "pop": 36,
  "state": "CA"
},{
  "city": "BROWNS VALLEY",
  "zip": "95918",
  "loc": {
    "y": 39.284428,
    "x": 121.346482
  },
  "pop": 1297,
  "state": "CA"
},{
  "city": "CASTRO VALLEY",
  "zip": "94546",
  "loc": {
    "y": 37.701527,
    "x": 122.078183
  },
  "pop": 37808,
  "state": "CA"
},{
  "city": "MARE ISLAND",
  "zip": "94592",
  "loc": {
    "y": 38.094654,
    "x": 122.27273
  },
  "pop": 3589,
  "state": "CA"
},{
  "city": "BERKELEY",
  "zip": "94710",
  "loc": {
    "y": 37.869603,
    "x": 122.295929
  },
  "pop": 6891,
  "state": "CA"
},{
  "city": "MILL VALLEY",
  "zip": "94941",
  "loc": {
    "y": 37.895757,
    "x": 122.533885
  },
  "pop": 27746,
  "state": "CA"
},{
  "city": "FOREST KNOLLS",
  "zip": "94933",
  "loc": {
    "y": 38.012178,
    "x": 122.69074
  },
  "pop": 732,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95118",
  "loc": {
    "y": 37.256162,
    "x": 121.889845
  },
  "pop": 30591,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95119",
  "loc": {
    "y": 37.230135,
    "x": 121.790067
  },
  "pop": 9823,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95219",
  "loc": {
    "y": 38.010233,
    "x": 121.363712
  },
  "pop": 13994,
  "state": "CA"
},{
  "city": "ESCALON",
  "zip": "95320",
  "loc": {
    "y": 37.804428,
    "x": 120.990044
  },
  "pop": 9405,
  "state": "CA"
},{
  "city": "COLD SPRINGS",
  "zip": "95335",
  "loc": {
    "y": 38.20336,
    "x": 120.001159
  },
  "pop": 201,
  "state": "CA"
},{
  "city": "KNIGHTS FERRY",
  "zip": "95361",
  "loc": {
    "y": 37.775323,
    "x": 120.849474
  },
  "pop": 20919,
  "state": "CA"
},{
  "city": "CLOVERDALE",
  "zip": "95425",
  "loc": {
    "y": 38.799396,
    "x": 123.011725
  },
  "pop": 7695,
  "state": "CA"
},{
  "city": "GUALALA",
  "zip": "95445",
  "loc": {
    "y": 38.803619,
    "x": 123.553975
  },
  "pop": 1806,
  "state": "CA"
},{
  "city": "LAKEPORT",
  "zip": "95453",
  "loc": {
    "y": 39.055147,
    "x": 122.915082
  },
  "pop": 10351,
  "state": "CA"
},{
  "city": "95467",
  "zip": "95467",
  "loc": {
    "y": 39.962583,
    "x": 123.814656
  },
  "pop": 328,
  "state": "CA"
},{
  "city": "CITRUS HEIGHTS",
  "zip": "95610",
  "loc": {
    "y": 38.694571,
    "x": 121.269211
  },
  "pop": 41476,
  "state": "CA"
},{
  "city": "GUINDA",
  "zip": "95637",
  "loc": {
    "y": 38.816568,
    "x": 122.189659
  },
  "pop": 198,
  "state": "CA"
},{
  "city": "KNIGHTS LANDING",
  "zip": "95645",
  "loc": {
    "y": 38.822032,
    "x": 121.720003
  },
  "pop": 1907,
  "state": "CA"
},{
  "city": "FAIR OAKS",
  "zip": "95628",
  "loc": {
    "y": 38.655408,
    "x": 121.261065
  },
  "pop": 40502,
  "state": "CA"
},{
  "city": "GOLD RUN",
  "zip": "95717",
  "loc": {
    "y": 39.175102,
    "x": 120.856909
  },
  "pop": 79,
  "state": "CA"
},{
  "city": "ECHO LAKE",
  "zip": "95721",
  "loc": {
    "y": 38.810254,
    "x": 120.070498
  },
  "pop": 17,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95828",
  "loc": {
    "y": 38.483718,
    "x": 121.401504
  },
  "pop": 43489,
  "state": "CA"
},{
  "city": "FORBESTOWN",
  "zip": "95941",
  "loc": {
    "y": 39.541712,
    "x": 121.213443
  },
  "pop": 517,
  "state": "CA"
},{
  "city": "AMERICAN CANYON",
  "zip": "94589",
  "loc": {
    "y": 38.148345,
    "x": 122.249333
  },
  "pop": 37599,
  "state": "CA"
},{
  "city": "WALNUT CREEK",
  "zip": "94595",
  "loc": {
    "y": 37.875317,
    "x": 122.070259
  },
  "pop": 16346,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94605",
  "loc": {
    "y": 37.764132,
    "x": 122.163326
  },
  "pop": 38511,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94609",
  "loc": {
    "y": 37.836096,
    "x": 122.26367
  },
  "pop": 20263,
  "state": "CA"
},{
  "city": "RICHMOND",
  "zip": "94801",
  "loc": {
    "y": 37.940039,
    "x": 122.36201
  },
  "pop": 23948,
  "state": "CA"
},{
  "city": "STINSON BEACH",
  "zip": "94970",
  "loc": {
    "y": 37.901992,
    "x": 122.639305
  },
  "pop": 630,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95110",
  "loc": {
    "y": 37.32966,
    "x": 121.890299
  },
  "pop": 17437,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95117",
  "loc": {
    "y": 37.308896,
    "x": 121.962126
  },
  "pop": 27414,
  "state": "CA"
},{
  "city": "SANTA CRUZ",
  "zip": "95062",
  "loc": {
    "y": 36.972101,
    "x": 121.988055
  },
  "pop": 34287,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95131",
  "loc": {
    "y": 37.386368,
    "x": 121.879977
  },
  "pop": 18425,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95139",
  "loc": {
    "y": 37.225162,
    "x": 121.766867
  },
  "pop": 6912,
  "state": "CA"
},{
  "city": "LOCKEFORD",
  "zip": "95237",
  "loc": {
    "y": 38.162436,
    "x": 121.135611
  },
  "pop": 2847,
  "state": "CA"
},{
  "city": "MERCED",
  "zip": "95348",
  "loc": {
    "y": 37.326964,
    "x": 120.500897
  },
  "pop": 19719,
  "state": "CA"
},{
  "city": "MODESTO",
  "zip": "95350",
  "loc": {
    "y": 37.674649,
    "x": 121.011303
  },
  "pop": 50618,
  "state": "CA"
},{
  "city": "GEYSERVILLE",
  "zip": "95441",
  "loc": {
    "y": 38.700398,
    "x": 122.888921
  },
  "pop": 2716,
  "state": "CA"
},{
  "city": "MIDDLETOWN",
  "zip": "95461",
  "loc": {
    "y": 38.782504,
    "x": 122.64352
  },
  "pop": 2863,
  "state": "CA"
},{
  "city": "MYERS FLAT",
  "zip": "95554",
  "loc": {
    "y": 40.194758,
    "x": 123.822713
  },
  "pop": 3791,
  "state": "CA"
},{
  "city": "ORICK",
  "zip": "95555",
  "loc": {
    "y": 41.30724,
    "x": 124.050319
  },
  "pop": 314,
  "state": "CA"
},{
  "city": "RIO DELL",
  "zip": "95562",
  "loc": {
    "y": 40.495147,
    "x": 124.104386
  },
  "pop": 4066,
  "state": "CA"
},{
  "city": "BRYTE",
  "zip": "95605",
  "loc": {
    "y": 38.592424,
    "x": 121.526377
  },
  "pop": 11611,
  "state": "CA"
},{
  "city": "PLYMOUTH",
  "zip": "95669",
  "loc": {
    "y": 38.48811,
    "x": 120.870258
  },
  "pop": 969,
  "state": "CA"
},{
  "city": "NEWCASTLE",
  "zip": "95658",
  "loc": {
    "y": 38.872467,
    "x": 121.142616
  },
  "pop": 5998,
  "state": "CA"
},{
  "city": "RIO OSO",
  "zip": "95674",
  "loc": {
    "y": 38.960998,
    "x": 121.505305
  },
  "pop": 1102,
  "state": "CA"
},{
  "city": "WALNUT GROVE",
  "zip": "95690",
  "loc": {
    "y": 38.236362,
    "x": 121.524849
  },
  "pop": 1839,
  "state": "CA"
},{
  "city": "WEST SACRAMENTO",
  "zip": "95691",
  "loc": {
    "y": 38.567979,
    "x": 121.539671
  },
  "pop": 17301,
  "state": "CA"
},{
  "city": "KYBURZ",
  "zip": "95720",
  "loc": {
    "y": 38.780036,
    "x": 120.25529
  },
  "pop": 159,
  "state": "CA"
},{
  "city": "MEADOW VISTA",
  "zip": "95722",
  "loc": {
    "y": 39.003101,
    "x": 121.029155
  },
  "pop": 3314,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95817",
  "loc": {
    "y": 38.549785,
    "x": 121.458324
  },
  "pop": 15767,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95821",
  "loc": {
    "y": 38.623889,
    "x": 121.383807
  },
  "pop": 33040,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95830",
  "loc": {
    "y": 38.476556,
    "x": 121.281453
  },
  "pop": 420,
  "state": "CA"
},{
  "city": "DUNNIGAN",
  "zip": "95937",
  "loc": {
    "y": 38.893671,
    "x": 121.996577
  },
  "pop": 850,
  "state": "CA"
},{
  "city": "HAYWARD",
  "zip": "94545",
  "loc": {
    "y": 37.633245,
    "x": 122.0971
  },
  "pop": 23760,
  "state": "CA"
},{
  "city": "DANVILLE",
  "zip": "94526",
  "loc": {
    "y": 37.813985,
    "x": 121.96598
  },
  "pop": 40613,
  "state": "CA"
},{
  "city": "PALO ALTO",
  "zip": "94301",
  "loc": {
    "y": 37.444324,
    "x": 122.149685
  },
  "pop": 15965,
  "state": "CA"
},{
  "city": "CROCKETT",
  "zip": "94525",
  "loc": {
    "y": 38.051865,
    "x": 122.217659
  },
  "pop": 3228,
  "state": "CA"
},{
  "city": "TRAVIS AFB",
  "zip": "94535",
  "loc": {
    "y": 38.274313,
    "x": 121.946317
  },
  "pop": 9874,
  "state": "CA"
},{
  "city": "FREMONT",
  "zip": "94555",
  "loc": {
    "y": 37.573458,
    "x": 122.046925
  },
  "pop": 29437,
  "state": "CA"
},{
  "city": "SAINT HELENA",
  "zip": "94574",
  "loc": {
    "y": 38.513776,
    "x": 122.461921
  },
  "pop": 9388,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94619",
  "loc": {
    "y": 37.787786,
    "x": 122.18838
  },
  "pop": 24501,
  "state": "CA"
},{
  "city": "SAN ANSELMO",
  "zip": "94960",
  "loc": {
    "y": 37.984579,
    "x": 122.571062
  },
  "pop": 15178,
  "state": "CA"
},{
  "city": "BEN LOMOND",
  "zip": "95005",
  "loc": {
    "y": 37.086183,
    "x": 122.083869
  },
  "pop": 7702,
  "state": "CA"
},{
  "city": "SAN MARTIN",
  "zip": "95046",
  "loc": {
    "y": 37.091118,
    "x": 121.599901
  },
  "pop": 5563,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95116",
  "loc": {
    "y": 37.351342,
    "x": 121.850221
  },
  "pop": 46754,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95212",
  "loc": {
    "y": 38.034428,
    "x": 121.246018
  },
  "pop": 5584,
  "state": "CA"
},{
  "city": "FRENCH CAMP",
  "zip": "95231",
  "loc": {
    "y": 37.877982,
    "x": 121.282704
  },
  "pop": 3673,
  "state": "CA"
},{
  "city": "VALLEY SPRINGS",
  "zip": "95252",
  "loc": {
    "y": 38.154355,
    "x": 120.859742
  },
  "pop": 7592,
  "state": "CA"
},{
  "city": "CATHEYS VALLEY",
  "zip": "95306",
  "loc": {
    "y": 37.441409,
    "x": 120.069017
  },
  "pop": 1033,
  "state": "CA"
},{
  "city": "HORNITOS",
  "zip": "95325",
  "loc": {
    "y": 37.492226,
    "x": 120.226443
  },
  "pop": 49,
  "state": "CA"
},{
  "city": "TURLOCK",
  "zip": "95380",
  "loc": {
    "y": 37.503605,
    "x": 120.850511
  },
  "pop": 50025,
  "state": "CA"
},{
  "city": "SANTA ROSA",
  "zip": "95404",
  "loc": {
    "y": 38.449556,
    "x": 122.689524
  },
  "pop": 31216,
  "state": "CA"
},{
  "city": "SANTA ROSA",
  "zip": "95409",
  "loc": {
    "y": 38.461242,
    "x": 122.642125
  },
  "pop": 22897,
  "state": "CA"
},{
  "city": "DOS RIOS",
  "zip": "95429",
  "loc": {
    "y": 39.709298,
    "x": 123.298294
  },
  "pop": 14,
  "state": "CA"
},{
  "city": "GRATON",
  "zip": "95444",
  "loc": {
    "y": 38.434971,
    "x": 122.866766
  },
  "pop": 259,
  "state": "CA"
},{
  "city": "95455",
  "zip": "95455",
  "loc": {
    "y": 39.851774,
    "x": 123.618247
  },
  "pop": 843,
  "state": "CA"
},{
  "city": "HYDESVILLE",
  "zip": "95547",
  "loc": {
    "y": 40.549576,
    "x": 124.084489
  },
  "pop": 919,
  "state": "CA"
},{
  "city": "GASQUET",
  "zip": "95543",
  "loc": {
    "y": 41.862768,
    "x": 123.912467
  },
  "pop": 658,
  "state": "CA"
},{
  "city": "SAMOA",
  "zip": "95564",
  "loc": {
    "y": 40.803712,
    "x": 124.193571
  },
  "pop": 527,
  "state": "CA"
},{
  "city": "REDCREST",
  "zip": "95569",
  "loc": {
    "y": 40.406458,
    "x": 123.94205
  },
  "pop": 208,
  "state": "CA"
},{
  "city": "SMITH RIVER",
  "zip": "95567",
  "loc": {
    "y": 41.936218,
    "x": 124.166115
  },
  "pop": 2012,
  "state": "CA"
},{
  "city": "GARDEN VALLEY",
  "zip": "95633",
  "loc": {
    "y": 38.866495,
    "x": 120.856672
  },
  "pop": 3628,
  "state": "CA"
},{
  "city": "EL DORADO HILLS",
  "zip": "95630",
  "loc": {
    "y": 38.687885,
    "x": 121.140927
  },
  "pop": 38587,
  "state": "CA"
},{
  "city": "FIDDLETOWN",
  "zip": "95629",
  "loc": {
    "y": 38.53141,
    "x": 120.715926
  },
  "pop": 1147,
  "state": "CA"
},{
  "city": "LINCOLN",
  "zip": "95648",
  "loc": {
    "y": 38.904035,
    "x": 121.295541
  },
  "pop": 11935,
  "state": "CA"
},{
  "city": "SHERIDAN",
  "zip": "95681",
  "loc": {
    "y": 38.99153,
    "x": 121.362062
  },
  "pop": 1169,
  "state": "CA"
},{
  "city": "PIONEER",
  "zip": "95666",
  "loc": {
    "y": 38.460271,
    "x": 120.531815
  },
  "pop": 4797,
  "state": "CA"
},{
  "city": "ROSEVILLE",
  "zip": "95661",
  "loc": {
    "y": 38.734612,
    "x": 121.233968
  },
  "pop": 29157,
  "state": "CA"
},{
  "city": "SUTTER CREEK",
  "zip": "95685",
  "loc": {
    "y": 38.418569,
    "x": 120.785454
  },
  "pop": 5677,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95820",
  "loc": {
    "y": 38.534694,
    "x": 121.445139
  },
  "pop": 35354,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95837",
  "loc": {
    "y": 38.681726,
    "x": 121.60297
  },
  "pop": 259,
  "state": "CA"
},{
  "city": "CAMPTONVILLE",
  "zip": "95922",
  "loc": {
    "y": 39.450784,
    "x": 121.023066
  },
  "pop": 1090,
  "state": "CA"
},{
  "city": "BUTTE CITY",
  "zip": "95920",
  "loc": {
    "y": 39.456348,
    "x": 121.978046
  },
  "pop": 548,
  "state": "CA"
},{
  "city": "HAYWARD",
  "zip": "94544",
  "loc": {
    "y": 37.637443,
    "x": 122.067029
  },
  "pop": 58348,
  "state": "CA"
},{
  "city": "DUBLIN",
  "zip": "94568",
  "loc": {
    "y": 37.716597,
    "x": 121.922589
  },
  "pop": 23275,
  "state": "CA"
},{
  "city": "RIO VISTA",
  "zip": "94571",
  "loc": {
    "y": 38.163734,
    "x": 121.701635
  },
  "pop": 4516,
  "state": "CA"
},{
  "city": "SAN LEANDRO",
  "zip": "94579",
  "loc": {
    "y": 37.689209,
    "x": 122.150659
  },
  "pop": 15754,
  "state": "CA"
},{
  "city": "WALNUT CREEK",
  "zip": "94596",
  "loc": {
    "y": 37.905279,
    "x": 122.054909
  },
  "pop": 38092,
  "state": "CA"
},{
  "city": "PLEASANTON",
  "zip": "94588",
  "loc": {
    "y": 37.687311,
    "x": 121.8957
  },
  "pop": 19032,
  "state": "CA"
},{
  "city": "ALBANY",
  "zip": "94706",
  "loc": {
    "y": 37.890045,
    "x": 122.295394
  },
  "pop": 17333,
  "state": "CA"
},{
  "city": "KENTFIELD",
  "zip": "94904",
  "loc": {
    "y": 37.950599,
    "x": 122.535501
  },
  "pop": 11820,
  "state": "CA"
},{
  "city": "ROHNERT PARK",
  "zip": "94928",
  "loc": {
    "y": 38.347027,
    "x": 122.69408
  },
  "pop": 35730,
  "state": "CA"
},{
  "city": "DAVENPORT",
  "zip": "95017",
  "loc": {
    "y": 37.06306,
    "x": 122.225735
  },
  "pop": 42,
  "state": "CA"
},{
  "city": "BOULDER CREEK",
  "zip": "95006",
  "loc": {
    "y": 37.149934,
    "x": 122.133053
  },
  "pop": 9434,
  "state": "CA"
},{
  "city": "SANTA CLARA",
  "zip": "95050",
  "loc": {
    "y": 37.34732,
    "x": 121.954079
  },
  "pop": 33310,
  "state": "CA"
},{
  "city": "FREEDOM",
  "zip": "95019",
  "loc": {
    "y": 36.936483,
    "x": 121.776761
  },
  "pop": 5075,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95125",
  "loc": {
    "y": 37.296187,
    "x": 121.895476
  },
  "pop": 42573,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95113",
  "loc": {
    "y": 37.335188,
    "x": 121.887227
  },
  "pop": 1265,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95129",
  "loc": {
    "y": 37.306537,
    "x": 122.000494
  },
  "pop": 33953,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95127",
  "loc": {
    "y": 37.3664,
    "x": 121.819516
  },
  "pop": 50371,
  "state": "CA"
},{
  "city": "HUGHSON",
  "zip": "95326",
  "loc": {
    "y": 37.594364,
    "x": 120.865281
  },
  "pop": 6383,
  "state": "CA"
},{
  "city": "ACAMPO",
  "zip": "95220",
  "loc": {
    "y": 38.200413,
    "x": 121.218576
  },
  "pop": 7734,
  "state": "CA"
},{
  "city": "SALIDA",
  "zip": "95368",
  "loc": {
    "y": 37.70713,
    "x": 121.090484
  },
  "pop": 3255,
  "state": "CA"
},{
  "city": "LINDEN",
  "zip": "95236",
  "loc": {
    "y": 38.021869,
    "x": 121.074442
  },
  "pop": 3656,
  "state": "CA"
},{
  "city": "SANTA ROSA",
  "zip": "95407",
  "loc": {
    "y": 38.410462,
    "x": 122.727896
  },
  "pop": 22086,
  "state": "CA"
},{
  "city": "MOKELUMNE HILL",
  "zip": "95245",
  "loc": {
    "y": 38.328918,
    "x": 120.567705
  },
  "pop": 3507,
  "state": "CA"
},{
  "city": "SANTA ROSA",
  "zip": "95405",
  "loc": {
    "y": 38.438279,
    "x": 122.66988
  },
  "pop": 20776,
  "state": "CA"
},{
  "city": "LIVINGSTON",
  "zip": "95334",
  "loc": {
    "y": 37.376168,
    "x": 120.716156
  },
  "pop": 10994,
  "state": "CA"
},{
  "city": "FORESTVILLE",
  "zip": "95436",
  "loc": {
    "y": 38.489442,
    "x": 122.896683
  },
  "pop": 7252,
  "state": "CA"
},{
  "city": "MODESTO",
  "zip": "95354",
  "loc": {
    "y": 37.644526,
    "x": 120.968323
  },
  "pop": 26630,
  "state": "CA"
},{
  "city": "COVELO",
  "zip": "95428",
  "loc": {
    "y": 39.801864,
    "x": 123.215015
  },
  "pop": 2182,
  "state": "CA"
},{
  "city": "PATTERSON",
  "zip": "95363",
  "loc": {
    "y": 37.490592,
    "x": 121.140732
  },
  "pop": 13437,
  "state": "CA"
},{
  "city": "UKIAH",
  "zip": "95482",
  "loc": {
    "y": 39.151917,
    "x": 123.200692
  },
  "pop": 28165,
  "state": "CA"
},{
  "city": "WINTON",
  "zip": "95388",
  "loc": {
    "y": 37.39233,
    "x": 120.6132
  },
  "pop": 10362,
  "state": "CA"
},{
  "city": "WESTPORT",
  "zip": "95488",
  "loc": {
    "y": 39.644059,
    "x": 123.76426
  },
  "pop": 369,
  "state": "CA"
},{
  "city": "TWAIN HARTE",
  "zip": "95383",
  "loc": {
    "y": 38.044722,
    "x": 120.2155
  },
  "pop": 5133,
  "state": "CA"
},{
  "city": "RUSSIAN RIVER MD",
  "zip": "95462",
  "loc": {
    "y": 38.462668,
    "x": 123.00447
  },
  "pop": 1999,
  "state": "CA"
},{
  "city": "ALBION",
  "zip": "95410",
  "loc": {
    "y": 39.215934,
    "x": 123.721366
  },
  "pop": 869,
  "state": "CA"
},{
  "city": "RUTH",
  "zip": "95526",
  "loc": {
    "y": 40.468566,
    "x": 123.549351
  },
  "pop": 1076,
  "state": "CA"
},{
  "city": "JENNER",
  "zip": "95450",
  "loc": {
    "y": 38.474093,
    "x": 123.135379
  },
  "pop": 156,
  "state": "CA"
},{
  "city": "GREENWOOD",
  "zip": "95635",
  "loc": {
    "y": 38.936234,
    "x": 120.916589
  },
  "pop": 226,
  "state": "CA"
},{
  "city": "LUCERNE",
  "zip": "95458",
  "loc": {
    "y": 39.083393,
    "x": 122.785125
  },
  "pop": 2330,
  "state": "CA"
},{
  "city": "MATHER AFB",
  "zip": "95655",
  "loc": {
    "y": 38.549224,
    "x": 121.282394
  },
  "pop": 4880,
  "state": "CA"
},{
  "city": "POINT ARENA",
  "zip": "95468",
  "loc": {
    "y": 38.915264,
    "x": 123.660756
  },
  "pop": 1129,
  "state": "CA"
},{
  "city": "PACIFIC HOUSE",
  "zip": "95726",
  "loc": {
    "y": 38.745581,
    "x": 120.585114
  },
  "pop": 7722,
  "state": "CA"
},{
  "city": "BLUE LAKE",
  "zip": "95525",
  "loc": {
    "y": 40.928701,
    "x": 123.896696
  },
  "pop": 328,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95825",
  "loc": {
    "y": 38.589226,
    "x": 121.405677
  },
  "pop": 27116,
  "state": "CA"
},{
  "city": "HOOPA",
  "zip": "95546",
  "loc": {
    "y": 41.105937,
    "x": 123.692754
  },
  "pop": 2702,
  "state": "CA"
},{
  "city": "BELDEN",
  "zip": "95915",
  "loc": {
    "y": 39.921746,
    "x": 121.325924
  },
  "pop": 32,
  "state": "CA"
},{
  "city": "LOLETA",
  "zip": "95551",
  "loc": {
    "y": 40.6531,
    "x": 124.228826
  },
  "pop": 1244,
  "state": "CA"
},{
  "city": "BANGOR",
  "zip": "95914",
  "loc": {
    "y": 39.424862,
    "x": 121.350499
  },
  "pop": 110,
  "state": "CA"
},{
  "city": "FORTUNA",
  "zip": "95540",
  "loc": {
    "y": 40.584931,
    "x": 124.140654
  },
  "pop": 10727,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95831",
  "loc": {
    "y": 38.496226,
    "x": 121.529661
  },
  "pop": 39369,
  "state": "CA"
},{
  "city": "DAVIS",
  "zip": "95616",
  "loc": {
    "y": 38.554817,
    "x": 121.748495
  },
  "pop": 52224,
  "state": "CA"
},{
  "city": "ZAMORA",
  "zip": "95698",
  "loc": {
    "y": 38.799896,
    "x": 121.90654
  },
  "pop": 317,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95827",
  "loc": {
    "y": 38.56623,
    "x": 121.328593
  },
  "pop": 19471,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95838",
  "loc": {
    "y": 38.640566,
    "x": 121.44396
  },
  "pop": 26996,
  "state": "CA"
},{
  "city": "PLEASANT HILL",
  "zip": "94523",
  "loc": {
    "y": 37.954002,
    "x": 122.07371
  },
  "pop": 31046,
  "state": "CA"
},{
  "city": "HERCULES",
  "zip": "94547",
  "loc": {
    "y": 38.006649,
    "x": 122.263702
  },
  "pop": 16376,
  "state": "CA"
},{
  "city": "SPANISH FLAT",
  "zip": "94558",
  "loc": {
    "y": 38.328137,
    "x": 122.305518
  },
  "pop": 57901,
  "state": "CA"
},{
  "city": "PORT COSTA",
  "zip": "94569",
  "loc": {
    "y": 38.046013,
    "x": 122.186649
  },
  "pop": 228,
  "state": "CA"
},{
  "city": "SHORE ACRES",
  "zip": "94565",
  "loc": {
    "y": 38.016887,
    "x": 121.908178
  },
  "pop": 64053,
  "state": "CA"
},{
  "city": "YOUNTVILLE",
  "zip": "94599",
  "loc": {
    "y": 38.403813,
    "x": 122.358506
  },
  "pop": 1876,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94601",
  "loc": {
    "y": 37.780595,
    "x": 122.216587
  },
  "pop": 47715,
  "state": "CA"
},{
  "city": "BERKELEY",
  "zip": "94705",
  "loc": {
    "y": 37.85711,
    "x": 122.249964
  },
  "pop": 11833,
  "state": "CA"
},{
  "city": "GILROY",
  "zip": "95020",
  "loc": {
    "y": 37.016005,
    "x": 121.57825
  },
  "pop": 39878,
  "state": "CA"
},{
  "city": "MORGAN HILL",
  "zip": "95037",
  "loc": {
    "y": 37.129171,
    "x": 121.64636
  },
  "pop": 31309,
  "state": "CA"
},{
  "city": "MONTE SERENO",
  "zip": "95030",
  "loc": {
    "y": 37.211677,
    "x": 121.978684
  },
  "pop": 25881,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95123",
  "loc": {
    "y": 37.244594,
    "x": 121.830502
  },
  "pop": 55146,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95130",
  "loc": {
    "y": 37.288628,
    "x": 121.979182
  },
  "pop": 13765,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95132",
  "loc": {
    "y": 37.40408,
    "x": 121.860336
  },
  "pop": 37995,
  "state": "CA"
},{
  "city": "MOUNT HAMILTON",
  "zip": "95140",
  "loc": {
    "y": 37.316087,
    "x": 121.639948
  },
  "pop": 37,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95210",
  "loc": {
    "y": 38.024997,
    "x": 121.297229
  },
  "pop": 33763,
  "state": "CA"
},{
  "city": "BEAR VALLEY",
  "zip": "95223",
  "loc": {
    "y": 38.24175,
    "x": 120.342231
  },
  "pop": 6205,
  "state": "CA"
},{
  "city": "ANGELS CAMP",
  "zip": "95222",
  "loc": {
    "y": 38.064011,
    "x": 120.55437
  },
  "pop": 3530,
  "state": "CA"
},{
  "city": "COPPEROPOLIS",
  "zip": "95228",
  "loc": {
    "y": 37.937246,
    "x": 120.638374
  },
  "pop": 1336,
  "state": "CA"
},{
  "city": "COLUMBIA",
  "zip": "95310",
  "loc": {
    "y": 38.03975,
    "x": 120.405552
  },
  "pop": 1512,
  "state": "CA"
},{
  "city": "RED TOP",
  "zip": "95340",
  "loc": {
    "y": 37.300724,
    "x": 120.461668
  },
  "pop": 59918,
  "state": "CA"
},{
  "city": "SOULSBYVILLE",
  "zip": "95372",
  "loc": {
    "y": 37.992794,
    "x": 120.259892
  },
  "pop": 1566,
  "state": "CA"
},{
  "city": "CLEARLAKE OAKS",
  "zip": "95423",
  "loc": {
    "y": 39.034838,
    "x": 122.66873
  },
  "pop": 3400,
  "state": "CA"
},{
  "city": "BOONVILLE",
  "zip": "95415",
  "loc": {
    "y": 39.035007,
    "x": 123.401954
  },
  "pop": 1744,
  "state": "CA"
},{
  "city": "FREMONT",
  "zip": "94539",
  "loc": {
    "y": 37.517579,
    "x": 121.928733
  },
  "pop": 39927,
  "state": "CA"
},{
  "city": "WITTER SPRINGS",
  "zip": "95493",
  "loc": {
    "y": 39.182118,
    "x": 122.97105
  },
  "pop": 300,
  "state": "CA"
},{
  "city": "KNIGHTSEN",
  "zip": "94548",
  "loc": {
    "y": 37.9818,
    "x": 121.672149
  },
  "pop": 118,
  "state": "CA"
},{
  "city": "MORAGA",
  "zip": "94556",
  "loc": {
    "y": 37.843653,
    "x": 122.124185
  },
  "pop": 15988,
  "state": "CA"
},{
  "city": "KORBEL",
  "zip": "95550",
  "loc": {
    "y": 40.824369,
    "x": 123.859413
  },
  "pop": 187,
  "state": "CA"
},{
  "city": "REDWAY",
  "zip": "95560",
  "loc": {
    "y": 40.110081,
    "x": 123.844194
  },
  "pop": 148,
  "state": "CA"
},{
  "city": "CASTRO VALLEY",
  "zip": "94552",
  "loc": {
    "y": 37.713107,
    "x": 122.038113
  },
  "pop": 7936,
  "state": "CA"
},{
  "city": "SALYER",
  "zip": "95563",
  "loc": {
    "y": 40.89095,
    "x": 123.547833
  },
  "pop": 903,
  "state": "CA"
},{
  "city": "COURTLAND",
  "zip": "95615",
  "loc": {
    "y": 38.305756,
    "x": 121.554297
  },
  "pop": 958,
  "state": "CA"
},{
  "city": "PACHECO",
  "zip": "94553",
  "loc": {
    "y": 37.993246,
    "x": 122.111693
  },
  "pop": 45532,
  "state": "CA"
},{
  "city": "VALLEJO",
  "zip": "94590",
  "loc": {
    "y": 38.105302,
    "x": 122.247367
  },
  "pop": 35516,
  "state": "CA"
},{
  "city": "GRIZZLY FLATS",
  "zip": "95636",
  "loc": {
    "y": 38.628665,
    "x": 120.542508
  },
  "pop": 237,
  "state": "CA"
},{
  "city": "JACKSON",
  "zip": "95642",
  "loc": {
    "y": 38.357514,
    "x": 120.754877
  },
  "pop": 5335,
  "state": "CA"
},{
  "city": "VALLEJO",
  "zip": "94591",
  "loc": {
    "y": 38.09853,
    "x": 122.212354
  },
  "pop": 43336,
  "state": "CA"
},{
  "city": "MADISON",
  "zip": "95653",
  "loc": {
    "y": 38.680164,
    "x": 121.972129
  },
  "pop": 523,
  "state": "CA"
},{
  "city": "ALTA",
  "zip": "95701",
  "loc": {
    "y": 39.228032,
    "x": 120.773165
  },
  "pop": 751,
  "state": "CA"
},{
  "city": "BERKELEY",
  "zip": "94709",
  "loc": {
    "y": 37.878397,
    "x": 122.265461
  },
  "pop": 9927,
  "state": "CA"
},{
  "city": "IOWA HILL",
  "zip": "95713",
  "loc": {
    "y": 39.076936,
    "x": 120.960163
  },
  "pop": 7344,
  "state": "CA"
},{
  "city": "CRESCENT MILLS",
  "zip": "95934",
  "loc": {
    "y": 40.081915,
    "x": 120.881993
  },
  "pop": 189,
  "state": "CA"
},{
  "city": "BOLINAS",
  "zip": "94924",
  "loc": {
    "y": 37.907875,
    "x": 122.694655
  },
  "pop": 1555,
  "state": "CA"
},{
  "city": "PENNGROVE",
  "zip": "94951",
  "loc": {
    "y": 38.315948,
    "x": 122.671772
  },
  "pop": 3886,
  "state": "CA"
},{
  "city": "CHICO",
  "zip": "95928",
  "loc": {
    "y": 39.729523,
    "x": 121.81555
  },
  "pop": 27452,
  "state": "CA"
},{
  "city": "FAIRFAX",
  "zip": "94930",
  "loc": {
    "y": 37.988289,
    "x": 122.593711
  },
  "pop": 8051,
  "state": "CA"
},{
  "city": "SAUSALITO",
  "zip": "94965",
  "loc": {
    "y": 37.860147,
    "x": 122.494555
  },
  "pop": 10032,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95122",
  "loc": {
    "y": 37.329313,
    "x": 121.833949
  },
  "pop": 52543,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95128",
  "loc": {
    "y": 37.314657,
    "x": 121.934364
  },
  "pop": 28275,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95138",
  "loc": {
    "y": 37.246259,
    "x": 121.778641
  },
  "pop": 5956,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95209",
  "loc": {
    "y": 38.033105,
    "x": 121.343292
  },
  "pop": 26289,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95202",
  "loc": {
    "y": 37.960632,
    "x": 121.287087
  },
  "pop": 7753,
  "state": "CA"
},{
  "city": "LATHROP",
  "zip": "95330",
  "loc": {
    "y": 37.820897,
    "x": 121.282652
  },
  "pop": 8426,
  "state": "CA"
},{
  "city": "OCCIDENTAL",
  "zip": "95465",
  "loc": {
    "y": 38.396911,
    "x": 122.988194
  },
  "pop": 2094,
  "state": "CA"
},{
  "city": "PHILO",
  "zip": "95466",
  "loc": {
    "y": 39.120005,
    "x": 123.538218
  },
  "pop": 498,
  "state": "CA"
},{
  "city": "UPPER LAKE",
  "zip": "95485",
  "loc": {
    "y": 39.160829,
    "x": 122.896114
  },
  "pop": 1771,
  "state": "CA"
},{
  "city": "CARLOTTA",
  "zip": "95528",
  "loc": {
    "y": 40.507027,
    "x": 123.974287
  },
  "pop": 1054,
  "state": "CA"
},{
  "city": "EL MACERO",
  "zip": "95618",
  "loc": {
    "y": 38.542151,
    "x": 121.676722
  },
  "pop": 1126,
  "state": "CA"
},{
  "city": "GALT",
  "zip": "95632",
  "loc": {
    "y": 38.269846,
    "x": 121.29383
  },
  "pop": 14173,
  "state": "CA"
},{
  "city": "GEORGETOWN",
  "zip": "95634",
  "loc": {
    "y": 38.919892,
    "x": 120.793388
  },
  "pop": 1634,
  "state": "CA"
},{
  "city": "ISLETON",
  "zip": "95641",
  "loc": {
    "y": 38.155392,
    "x": 121.604858
  },
  "pop": 2273,
  "state": "CA"
},{
  "city": "PLACERVILLE",
  "zip": "95667",
  "loc": {
    "y": 38.719479,
    "x": 120.804564
  },
  "pop": 30563,
  "state": "CA"
},{
  "city": "PLEASANT GROVE",
  "zip": "95668",
  "loc": {
    "y": 38.787773,
    "x": 121.507967
  },
  "pop": 1034,
  "state": "CA"
},{
  "city": "TROWBRIDGE",
  "zip": "95659",
  "loc": {
    "y": 38.882726,
    "x": 121.553043
  },
  "pop": 802,
  "state": "CA"
},{
  "city": "ALLEGHANY",
  "zip": "95910",
  "loc": {
    "y": 39.512698,
    "x": 120.727176
  },
  "pop": 0,
  "state": "CA"
},{
  "city": "PLEASANTON",
  "zip": "94566",
  "loc": {
    "y": 37.665804,
    "x": 121.8755
  },
  "pop": 32953,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94607",
  "loc": {
    "y": 37.807084,
    "x": 122.285051
  },
  "pop": 21294,
  "state": "CA"
},{
  "city": "SAN RAFAEL",
  "zip": "94901",
  "loc": {
    "y": 37.969144,
    "x": 122.510502
  },
  "pop": 41550,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95203",
  "loc": {
    "y": 37.956515,
    "x": 121.307688
  },
  "pop": 17847,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95141",
  "loc": {
    "y": 37.169912,
    "x": 121.755808
  },
  "pop": 0,
  "state": "CA"
},{
  "city": "BALLICO",
  "zip": "95303",
  "loc": {
    "y": 37.452455,
    "x": 120.700152
  },
  "pop": 1296,
  "state": "CA"
},{
  "city": "HILMAR",
  "zip": "95324",
  "loc": {
    "y": 37.408377,
    "x": 120.856144
  },
  "pop": 6676,
  "state": "CA"
},{
  "city": "MANTECA",
  "zip": "95336",
  "loc": {
    "y": 37.80875,
    "x": 121.21856
  },
  "pop": 51728,
  "state": "CA"
},{
  "city": "EL NIDO",
  "zip": "95317",
  "loc": {
    "y": 37.13452,
    "x": 120.483235
  },
  "pop": 1024,
  "state": "CA"
},{
  "city": "SNELLING",
  "zip": "95369",
  "loc": {
    "y": 37.514359,
    "x": 120.481615
  },
  "pop": 1335,
  "state": "CA"
},{
  "city": "SONORA",
  "zip": "95370",
  "loc": {
    "y": 37.995692,
    "x": 120.338498
  },
  "pop": 23398,
  "state": "CA"
},{
  "city": "GUERNEVILLE",
  "zip": "95446",
  "loc": {
    "y": 38.509573,
    "x": 122.994416
  },
  "pop": 5060,
  "state": "CA"
},{
  "city": "KENWOOD",
  "zip": "95452",
  "loc": {
    "y": 38.416794,
    "x": 122.554679
  },
  "pop": 1411,
  "state": "CA"
},{
  "city": "POTTER VALLEY",
  "zip": "95469",
  "loc": {
    "y": 39.329639,
    "x": 123.104181
  },
  "pop": 1970,
  "state": "CA"
},{
  "city": "SONOMA",
  "zip": "95476",
  "loc": {
    "y": 38.295659,
    "x": 122.472843
  },
  "pop": 30443,
  "state": "CA"
},{
  "city": "THE SEA RANCH",
  "zip": "95497",
  "loc": {
    "y": 38.725627,
    "x": 123.467486
  },
  "pop": 576,
  "state": "CA"
},{
  "city": "KELSEY",
  "zip": "95643",
  "loc": {
    "y": 38.797636,
    "x": 120.824056
  },
  "pop": 531,
  "state": "CA"
},{
  "city": "NORTH HIGHLANDS",
  "zip": "95660",
  "loc": {
    "y": 38.68855,
    "x": 121.374913
  },
  "pop": 42271,
  "state": "CA"
},{
  "city": "ROSEVILLE",
  "zip": "95678",
  "loc": {
    "y": 38.750895,
    "x": 121.302801
  },
  "pop": 28285,
  "state": "CA"
},{
  "city": "PILOT HILL",
  "zip": "95664",
  "loc": {
    "y": 38.826312,
    "x": 121.029765
  },
  "pop": 1152,
  "state": "CA"
},{
  "city": "RANCHO CORDOVA",
  "zip": "95742",
  "loc": {
    "y": 38.604313,
    "x": 121.204019
  },
  "pop": 186,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95836",
  "loc": {
    "y": 38.707346,
    "x": 121.532259
  },
  "pop": 8,
  "state": "CA"
},{
  "city": "ELK CREEK",
  "zip": "95939",
  "loc": {
    "y": 39.598914,
    "x": 122.557244
  },
  "pop": 497,
  "state": "CA"
},{
  "city": "EL CERRITO",
  "zip": "94530",
  "loc": {
    "y": 37.915633,
    "x": 122.298521
  },
  "pop": 28146,
  "state": "CA"
},{
  "city": "WALNUT CREEK",
  "zip": "94598",
  "loc": {
    "y": 37.919424,
    "x": 122.025879
  },
  "pop": 24174,
  "state": "CA"
},{
  "city": "OAKLAND",
  "zip": "94610",
  "loc": {
    "y": 37.812636,
    "x": 122.244322
  },
  "pop": 29637,
  "state": "CA"
},{
  "city": "PIEDMONT",
  "zip": "94618",
  "loc": {
    "y": 37.84368,
    "x": 122.24191
  },
  "pop": 15763,
  "state": "CA"
},{
  "city": "LARKSPUR",
  "zip": "94939",
  "loc": {
    "y": 37.936743,
    "x": 122.536202
  },
  "pop": 5884,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95121",
  "loc": {
    "y": 37.30593,
    "x": 121.811939
  },
  "pop": 32572,
  "state": "CA"
},{
  "city": "SCOTTS VALLEY",
  "zip": "95066",
  "loc": {
    "y": 37.057841,
    "x": 122.014961
  },
  "pop": 10636,
  "state": "CA"
},{
  "city": "STOCKTON",
  "zip": "95205",
  "loc": {
    "y": 37.960986,
    "x": 121.259241
  },
  "pop": 31314,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95148",
  "loc": {
    "y": 37.329765,
    "x": 121.792111
  },
  "pop": 37413,
  "state": "CA"
},{
  "city": "SAN JOSE",
  "zip": "95136",
  "loc": {
    "y": 37.268423,
    "x": 121.847625
  },
  "pop": 31200,
  "state": "CA"
},{
  "city": "DELHI",
  "zip": "95315",
  "loc": {
    "y": 37.428629,
    "x": 120.775489
  },
  "pop": 6151,
  "state": "CA"
},{
  "city": "NEWMAN",
  "zip": "95360",
  "loc": {
    "y": 37.317591,
    "x": 121.025943
  },
  "pop": 5313,
  "state": "CA"
},{
  "city": "RIVERBANK",
  "zip": "95367",
  "loc": {
    "y": 37.732809,
    "x": 120.943019
  },
  "pop": 9732,
  "state": "CA"
},{
  "city": "BRANSCOMB",
  "zip": "95417",
  "loc": {
    "y": 39.700531,
    "x": 123.554982
  },
  "pop": 708,
  "state": "CA"
},{
  "city": "COMPTCHE",
  "zip": "95427",
  "loc": {
    "y": 39.249919,
    "x": 123.585652
  },
  "pop": 538,
  "state": "CA"
},{
  "city": "LOWER LAKE",
  "zip": "95457",
  "loc": {
    "y": 38.860682,
    "x": 122.575426
  },
  "pop": 4880,
  "state": "CA"
},{
  "city": "WILLITS",
  "zip": "95490",
  "loc": {
    "y": 39.411426,
    "x": 123.350271
  },
  "pop": 12864,
  "state": "CA"
},{
  "city": "MCCLELLAN AFB",
  "zip": "95652",
  "loc": {
    "y": 38.655416,
    "x": 121.40311
  },
  "pop": 541,
  "state": "CA"
},{
  "city": "VOLCANO",
  "zip": "95689",
  "loc": {
    "y": 38.477319,
    "x": 120.617761
  },
  "pop": 1004,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95814",
  "loc": {
    "y": 38.579792,
    "x": 121.489404
  },
  "pop": 16414,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95822",
  "loc": {
    "y": 38.509139,
    "x": 121.493541
  },
  "pop": 43943,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95815",
  "loc": {
    "y": 38.613303,
    "x": 121.443543
  },
  "pop": 23491,
  "state": "CA"
},{
  "city": "SACRAMENTO",
  "zip": "95816",
  "loc": {
    "y": 38.572788,
    "x": 121.46753
  },
  "pop": 16211,
  "state": "CA"
},{
  "city": "NORDEN",
  "zip": "95724",
  "loc": {
    "y": 39.319566,
    "x": 120.400876
  },
  "pop": 316,
  "state": "CA"
},{
  "city": "MAXWELL",
  "zip": "95955",
  "loc": {
    "y": 39.292494,
    "x": 122.195161
  },
  "pop": 1410,
  "state": "CA"
},{
  "city": "GOODYEARS BAR",
  "zip": "95944",
  "loc": {
    "y": 39.572891,
    "x": 120.820698
  },
  "pop": 377,
  "state": "CA"
},{
  "city": "MAGALIA",
  "zip": "95954",
  "loc": {
    "y": 39.831728,
    "x": 121.597455
  },
  "pop": 10009,
  "state": "CA"
},{
  "city": "PARADISE",
  "zip": "95969",
  "loc": {
    "y": 39.759804,
    "x": 121.603097
  },
  "pop": 26327,
  "state": "CA"
},{
  "city": "GRIDLEY",
  "zip": "95948",
  "loc": {
    "y": 39.358855,
    "x": 121.689777
  },
  "pop": 9499,
  "state": "CA"
},{
  "city": "GREENVILLE",
  "zip": "95947",
  "loc": {
    "y": 40.142404,
    "x": 120.927299
  },
  "pop": 2690,
  "state": "CA"
},{
  "city": "PRINCETON",
  "zip": "95970",
  "loc": {
    "y": 39.428313,
    "x": 122.030181
  },
  "pop": 563,
  "state": "CA"
},{
  "city": "ROUGH AND READY",
  "zip": "95975",
  "loc": {
    "y": 39.228585,
    "x": 121.150856
  },
  "pop": 1811,
  "state": "CA"
},{
  "city": "WILLIAMS",
  "zip": "95987",
  "loc": {
    "y": 39.148855,
    "x": 122.162375
  },
  "pop": 3094,
  "state": "CA"
},{
  "city": "YUBA CITY",
  "zip": "95993",
  "loc": {
    "y": 39.128193,
    "x": 121.655168
  },
  "pop": 19635,
  "state": "CA"
},{
  "city": "ANDERSON",
  "zip": "96007",
  "loc": {
    "y": 40.457432,
    "x": 122.328218
  },
  "pop": 20309,
  "state": "CA"
},{
  "city": "HAT CREEK",
  "zip": "96040",
  "loc": {
    "y": 40.767673,
    "x": 121.463687
  },
  "pop": 150,
  "state": "CA"
},{
  "city": "HORNBROOK",
  "zip": "96044",
  "loc": {
    "y": 41.907738,
    "x": 122.526528
  },
  "pop": 905,
  "state": "CA"
},{
  "city": "LEWISTON",
  "zip": "96052",
  "loc": {
    "y": 40.745986,
    "x": 122.842591
  },
  "pop": 2461,
  "state": "CA"
},{
  "city": "COLEVILLE",
  "zip": "96107",
  "loc": {
    "y": 38.502903,
    "x": 119.482784
  },
  "pop": 1370,
  "state": "CA"
},{
  "city": "DOYLE",
  "zip": "96109",
  "loc": {
    "y": 40.000799,
    "x": 120.107693
  },
  "pop": 985,
  "state": "CA"
},{
  "city": "SIERRA CITY",
  "zip": "96125",
  "loc": {
    "y": 39.559248,
    "x": 120.624135
  },
  "pop": 311,
  "state": "CA"
},{
  "city": "DENVER",
  "zip": "80236",
  "loc": {
    "y": 39.653535,
    "x": 105.037595
  },
  "pop": 12979,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80223",
  "loc": {
    "y": 39.700239,
    "x": 105.002799
  },
  "pop": 16692,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80218",
  "loc": {
    "y": 39.732747,
    "x": 104.971652
  },
  "pop": 14916,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80235",
  "loc": {
    "y": 39.647175,
    "x": 105.079466
  },
  "pop": 5783,
  "state": "CO"
},{
  "city": "LEADVILLE",
  "zip": "80461",
  "loc": {
    "y": 39.249742,
    "x": 106.301545
  },
  "pop": 5544,
  "state": "CO"
},{
  "city": "PINECLIFFE",
  "zip": "80471",
  "loc": {
    "y": 39.942898,
    "x": 105.354004
  },
  "pop": 225,
  "state": "CO"
},{
  "city": "VIRGINIA DALE",
  "zip": "80536",
  "loc": {
    "y": 40.779878,
    "x": 105.367745
  },
  "pop": 513,
  "state": "CO"
},{
  "city": "WATTENBURG",
  "zip": "80621",
  "loc": {
    "y": 40.078876,
    "x": 104.865639
  },
  "pop": 12913,
  "state": "CO"
},{
  "city": "GALETON",
  "zip": "80622",
  "loc": {
    "y": 40.515034,
    "x": 104.597254
  },
  "pop": 360,
  "state": "CO"
},{
  "city": "KEENESBURG",
  "zip": "80643",
  "loc": {
    "y": 40.095847,
    "x": 104.446366
  },
  "pop": 1979,
  "state": "CO"
},{
  "city": "HOYT",
  "zip": "80654",
  "loc": {
    "y": 40.205651,
    "x": 104.052814
  },
  "pop": 1746,
  "state": "CO"
},{
  "city": "FORT MORGAN",
  "zip": "80701",
  "loc": {
    "y": 40.254084,
    "x": 103.803119
  },
  "pop": 13263,
  "state": "CO"
},{
  "city": "HALE",
  "zip": "80735",
  "loc": {
    "y": 39.733147,
    "x": 102.211563
  },
  "pop": 393,
  "state": "CO"
},{
  "city": "OTIS",
  "zip": "80743",
  "loc": {
    "y": 40.202989,
    "x": 102.939219
  },
  "pop": 1102,
  "state": "CO"
},{
  "city": "FLEMING",
  "zip": "80728",
  "loc": {
    "y": 40.637019,
    "x": 102.868821
  },
  "pop": 853,
  "state": "CO"
},{
  "city": "KIRK",
  "zip": "80824",
  "loc": {
    "y": 39.617072,
    "x": 102.477554
  },
  "pop": 479,
  "state": "CO"
},{
  "city": "WOODLAND PARK",
  "zip": "80863",
  "loc": {
    "y": 38.996929,
    "x": 105.062292
  },
  "pop": 8272,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80908",
  "loc": {
    "y": 39.023745,
    "x": 104.693331
  },
  "pop": 6803,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80928",
  "loc": {
    "y": 38.623261,
    "x": 104.457043
  },
  "pop": 273,
  "state": "CO"
},{
  "city": "DELHI",
  "zip": "81059",
  "loc": {
    "y": 37.478533,
    "x": 104.13074
  },
  "pop": 237,
  "state": "CO"
},{
  "city": "SUGAR CITY",
  "zip": "81076",
  "loc": {
    "y": 38.244368,
    "x": 103.655557
  },
  "pop": 400,
  "state": "CO"
},{
  "city": "CREEDE",
  "zip": "81130",
  "loc": {
    "y": 37.816367,
    "x": 106.927679
  },
  "pop": 558,
  "state": "CO"
},{
  "city": "LA JARA",
  "zip": "81140",
  "loc": {
    "y": 37.290726,
    "x": 106.005427
  },
  "pop": 2274,
  "state": "CO"
},{
  "city": "SAN PABLO",
  "zip": "81153",
  "loc": {
    "y": 37.134872,
    "x": 105.346196
  },
  "pop": 638,
  "state": "CO"
},{
  "city": "LAKE CITY",
  "zip": "81235",
  "loc": {
    "y": 37.986769,
    "x": 107.302037
  },
  "pop": 467,
  "state": "CO"
},{
  "city": "WESTCLIFFE",
  "zip": "81252",
  "loc": {
    "y": 38.123023,
    "x": 105.433154
  },
  "pop": 1569,
  "state": "CO"
},{
  "city": "HOWARD",
  "zip": "81233",
  "loc": {
    "y": 38.388519,
    "x": 105.747124
  },
  "pop": 485,
  "state": "CO"
},{
  "city": "EGNAR",
  "zip": "81325",
  "loc": {
    "y": 37.934448,
    "x": 108.929889
  },
  "pop": 119,
  "state": "CO"
},{
  "city": "GRAND JUNCTION",
  "zip": "81505",
  "loc": {
    "y": 39.107097,
    "x": 108.596834
  },
  "pop": 4877,
  "state": "CO"
},{
  "city": "FRUITA",
  "zip": "81521",
  "loc": {
    "y": 39.163656,
    "x": 108.721757
  },
  "pop": 6230,
  "state": "CO"
},{
  "city": "BATTLEMENT MESA",
  "zip": "81635",
  "loc": {
    "y": 39.440729,
    "x": 108.038038
  },
  "pop": 2602,
  "state": "CO"
},{
  "city": "NORFOLK",
  "zip": "06058",
  "loc": {
    "y": 41.985386,
    "x": 73.199197
  },
  "pop": 2060,
  "state": "CT"
},{
  "city": "NEW BRITAIN",
  "zip": "06051",
  "loc": {
    "y": 41.666683,
    "x": 72.772208
  },
  "pop": 28705,
  "state": "CT"
},{
  "city": "TARIFFVILLE",
  "zip": "06081",
  "loc": {
    "y": 41.907715,
    "x": 72.767786
  },
  "pop": 1477,
  "state": "CT"
},{
  "city": "WEST GRANBY",
  "zip": "06090",
  "loc": {
    "y": 41.965509,
    "x": 72.855496
  },
  "pop": 948,
  "state": "CT"
},{
  "city": "WINDSOR",
  "zip": "06095",
  "loc": {
    "y": 41.856122,
    "x": 72.663893
  },
  "pop": 27815,
  "state": "CT"
},{
  "city": "HARTFORD",
  "zip": "06112",
  "loc": {
    "y": 41.79053,
    "x": 72.69641
  },
  "pop": 29714,
  "state": "CT"
},{
  "city": "LEBANON",
  "zip": "06249",
  "loc": {
    "y": 41.632988,
    "x": 72.244035
  },
  "pop": 6043,
  "state": "CT"
},{
  "city": "WOODSTOCK VALLEY",
  "zip": "06282",
  "loc": {
    "y": 41.915296,
    "x": 72.09366
  },
  "pop": 1099,
  "state": "CT"
},{
  "city": "PRESTON",
  "zip": "06365",
  "loc": {
    "y": 41.522061,
    "x": 72.021079
  },
  "pop": 11191,
  "state": "CT"
},{
  "city": "PLAINFIELD",
  "zip": "06374",
  "loc": {
    "y": 41.67753,
    "x": 71.921968
  },
  "pop": 6533,
  "state": "CT"
},{
  "city": "NORTH HAVEN",
  "zip": "06473",
  "loc": {
    "y": 41.382156,
    "x": 72.85852
  },
  "pop": 22481,
  "state": "CT"
},{
  "city": "SANDY HOOK",
  "zip": "06482",
  "loc": {
    "y": 41.408706,
    "x": 73.248522
  },
  "pop": 8046,
  "state": "CT"
},{
  "city": "SOUTHINGTON",
  "zip": "06489",
  "loc": {
    "y": 41.605221,
    "x": 72.872681
  },
  "pop": 28567,
  "state": "CT"
},{
  "city": "TRUMBULL",
  "zip": "06611",
  "loc": {
    "y": 41.25641,
    "x": 73.211063
  },
  "pop": 32213,
  "state": "CT"
},{
  "city": "LITCHFIELD",
  "zip": "06759",
  "loc": {
    "y": 41.754069,
    "x": 73.200011
  },
  "pop": 5573,
  "state": "CT"
},{
  "city": "NAUGATUCK",
  "zip": "06770",
  "loc": {
    "y": 41.492039,
    "x": 73.049342
  },
  "pop": 30625,
  "state": "CT"
},{
  "city": "WATERBURY",
  "zip": "06706",
  "loc": {
    "y": 41.536261,
    "x": 73.03064
  },
  "pop": 15431,
  "state": "CT"
},{
  "city": "WATERTOWN",
  "zip": "06795",
  "loc": {
    "y": 41.605654,
    "x": 73.122122
  },
  "pop": 12021,
  "state": "CT"
},{
  "city": "TERRYVILLE",
  "zip": "06786",
  "loc": {
    "y": 41.676197,
    "x": 73.009214
  },
  "pop": 8912,
  "state": "CT"
},{
  "city": "NEW CANAAN",
  "zip": "06840",
  "loc": {
    "y": 41.151024,
    "x": 73.494356
  },
  "pop": 17937,
  "state": "CT"
},{
  "city": "STAMFORD",
  "zip": "06902",
  "loc": {
    "y": 41.052552,
    "x": 73.537428
  },
  "pop": 54605,
  "state": "CT"
},{
  "city": "STAMFORD",
  "zip": "06907",
  "loc": {
    "y": 41.094206,
    "x": 73.520297
  },
  "pop": 8498,
  "state": "CT"
},{
  "city": "SMARTVILLE",
  "zip": "95977",
  "loc": {
    "y": 39.204305,
    "x": 121.266716
  },
  "pop": 807,
  "state": "CA"
},{
  "city": "YUBA CITY",
  "zip": "95991",
  "loc": {
    "y": 39.128619,
    "x": 121.621599
  },
  "pop": 30201,
  "state": "CA"
},{
  "city": "SHASTA LAKE",
  "zip": "96019",
  "loc": {
    "y": 40.680262,
    "x": 122.365395
  },
  "pop": 6405,
  "state": "CA"
},{
  "city": "HELENA",
  "zip": "96048",
  "loc": {
    "y": 40.768187,
    "x": 123.062671
  },
  "pop": 606,
  "state": "CA"
},{
  "city": "LAKE CITY",
  "zip": "96115",
  "loc": {
    "y": 41.668208,
    "x": 120.181424
  },
  "pop": 234,
  "state": "CA"
},{
  "city": "AURORA",
  "zip": "80019",
  "loc": {
    "y": 39.765608,
    "x": 104.706906
  },
  "pop": 46,
  "state": "CO"
},{
  "city": "AGATE",
  "zip": "80101",
  "loc": {
    "y": 39.420256,
    "x": 103.984575
  },
  "pop": 230,
  "state": "CO"
},{
  "city": "DEER TRAIL",
  "zip": "80105",
  "loc": {
    "y": 39.593121,
    "x": 104.068003
  },
  "pop": 634,
  "state": "CO"
},{
  "city": "LARKSPUR",
  "zip": "80118",
  "loc": {
    "y": 39.201079,
    "x": 104.854587
  },
  "pop": 1424,
  "state": "CO"
},{
  "city": "BOW MAR",
  "zip": "80123",
  "loc": {
    "y": 39.596854,
    "x": 105.07766
  },
  "pop": 59418,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80211",
  "loc": {
    "y": 39.766515,
    "x": 105.020377
  },
  "pop": 34679,
  "state": "CO"
},{
  "city": "THORNTON",
  "zip": "80229",
  "loc": {
    "y": 39.860998,
    "x": 104.961749
  },
  "pop": 33512,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80249",
  "loc": {
    "y": 39.778264,
    "x": 104.75565
  },
  "pop": 2740,
  "state": "CO"
},{
  "city": "CLIMAX",
  "zip": "80429",
  "loc": {
    "y": 39.298804,
    "x": 106.258027
  },
  "pop": 346,
  "state": "CO"
},{
  "city": "GOLDEN",
  "zip": "80401",
  "loc": {
    "y": 39.730548,
    "x": 105.191528
  },
  "pop": 32876,
  "state": "CO"
},{
  "city": "KREMMLING",
  "zip": "80459",
  "loc": {
    "y": 40.063224,
    "x": 106.395472
  },
  "pop": 1580,
  "state": "CO"
},{
  "city": "GREELEY",
  "zip": "80634",
  "loc": {
    "y": 40.410947,
    "x": 104.754113
  },
  "pop": 14100,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80922",
  "loc": {
    "y": 38.90503,
    "x": 104.698161
  },
  "pop": 1836,
  "state": "CO"
},{
  "city": "BRANDON",
  "zip": "81026",
  "loc": {
    "y": 38.485133,
    "x": 102.781906
  },
  "pop": 1094,
  "state": "CO"
},{
  "city": "PUEBLO",
  "zip": "81003",
  "loc": {
    "y": 38.284277,
    "x": 104.62337
  },
  "pop": 13461,
  "state": "CO"
},{
  "city": "TRINCHERA",
  "zip": "81081",
  "loc": {
    "y": 37.075662,
    "x": 104.118354
  },
  "pop": 21,
  "state": "CO"
},{
  "city": "VILAS",
  "zip": "81087",
  "loc": {
    "y": 37.373043,
    "x": 102.44374
  },
  "pop": 145,
  "state": "CO"
},{
  "city": "MONTROSE",
  "zip": "81401",
  "loc": {
    "y": 38.46783,
    "x": 107.875182
  },
  "pop": 17834,
  "state": "CO"
},{
  "city": "SLATER",
  "zip": "81653",
  "loc": {
    "y": 40.947985,
    "x": 107.497178
  },
  "pop": 65,
  "state": "CO"
},{
  "city": "WINDSORVILLE",
  "zip": "06016",
  "loc": {
    "y": 41.911405,
    "x": 72.543667
  },
  "pop": 5067,
  "state": "CT"
},{
  "city": "FALLS VILLAGE",
  "zip": "06031",
  "loc": {
    "y": 41.95784,
    "x": 73.351659
  },
  "pop": 1192,
  "state": "CT"
},{
  "city": "NEW BRITAIN",
  "zip": "06052",
  "loc": {
    "y": 41.658792,
    "x": 72.798858
  },
  "pop": 8798,
  "state": "CT"
},{
  "city": "NEW HARTFORD",
  "zip": "06057",
  "loc": {
    "y": 41.846797,
    "x": 73.010369
  },
  "pop": 4521,
  "state": "CT"
},{
  "city": "NORTH CANTON",
  "zip": "06059",
  "loc": {
    "y": 41.923516,
    "x": 72.90414
  },
  "pop": 783,
  "state": "CT"
},{
  "city": "RIVERTON",
  "zip": "06065",
  "loc": {
    "y": 41.961395,
    "x": 73.025469
  },
  "pop": 155,
  "state": "CT"
},{
  "city": "VERNON ROCKVILLE",
  "zip": "06066",
  "loc": {
    "y": 41.850073,
    "x": 72.464855
  },
  "pop": 31966,
  "state": "CT"
},{
  "city": "ENFIELD",
  "zip": "06082",
  "loc": {
    "y": 41.989016,
    "x": 72.565218
  },
  "pop": 45558,
  "state": "CT"
},{
  "city": "EASTFORD",
  "zip": "06242",
  "loc": {
    "y": 41.877104,
    "x": 72.089451
  },
  "pop": 76,
  "state": "CT"
},{
  "city": "NEW LONDON",
  "zip": "06320",
  "loc": {
    "y": 41.350718,
    "x": 72.106245
  },
  "pop": 28367,
  "state": "CT"
},{
  "city": "GROTON",
  "zip": "06349",
  "loc": {
    "y": 41.397648,
    "x": 72.090058
  },
  "pop": 5398,
  "state": "CT"
},{
  "city": "MONTVILLE",
  "zip": "06353",
  "loc": {
    "y": 41.445331,
    "x": 72.126476
  },
  "pop": 258,
  "state": "CT"
},{
  "city": "OLD LYME",
  "zip": "06371",
  "loc": {
    "y": 41.334745,
    "x": 72.308562
  },
  "pop": 8484,
  "state": "CT"
},{
  "city": "HADDAM",
  "zip": "06438",
  "loc": {
    "y": 41.462718,
    "x": 72.504988
  },
  "pop": 2245,
  "state": "CT"
},{
  "city": "NEW HAVEN",
  "zip": "06510",
  "loc": {
    "y": 41.308701,
    "x": 72.92706
  },
  "pop": 4448,
  "state": "CT"
},{
  "city": "EAST HAVEN",
  "zip": "06513",
  "loc": {
    "y": 41.314215,
    "x": 72.882554
  },
  "pop": 31342,
  "state": "CT"
},{
  "city": "OROVILLE",
  "zip": "95966",
  "loc": {
    "y": 39.491448,
    "x": 121.502029
  },
  "pop": 27286,
  "state": "CA"
},{
  "city": "NEW HAVEN",
  "zip": "06519",
  "loc": {
    "y": 41.296284,
    "x": 72.937307
  },
  "pop": 19410,
  "state": "CT"
},{
  "city": "FORKS OF SALMON",
  "zip": "96031",
  "loc": {
    "y": 41.256978,
    "x": 123.09781
  },
  "pop": 469,
  "state": "CA"
},{
  "city": "FRENCH GULCH",
  "zip": "96033",
  "loc": {
    "y": 40.703517,
    "x": 122.622868
  },
  "pop": 640,
  "state": "CA"
},{
  "city": "EASTON",
  "zip": "06612",
  "loc": {
    "y": 41.252328,
    "x": 73.287108
  },
  "pop": 6213,
  "state": "CT"
},{
  "city": "WATERBURY",
  "zip": "06708",
  "loc": {
    "y": 41.551102,
    "x": 73.064495
  },
  "pop": 27661,
  "state": "CT"
},{
  "city": "BURNEY",
  "zip": "96013",
  "loc": {
    "y": 40.894927,
    "x": 121.655036
  },
  "pop": 4666,
  "state": "CA"
},{
  "city": "MINERAL",
  "zip": "96063",
  "loc": {
    "y": 40.328826,
    "x": 121.524807
  },
  "pop": 172,
  "state": "CA"
},{
  "city": "WATERBURY",
  "zip": "06704",
  "loc": {
    "y": 41.575435,
    "x": 73.031805
  },
  "pop": 26018,
  "state": "CT"
},{
  "city": "SOUTH KENT",
  "zip": "06785",
  "loc": {
    "y": 41.695051,
    "x": 73.469023
  },
  "pop": 719,
  "state": "CT"
},{
  "city": "LAKEHEAD",
  "zip": "96051",
  "loc": {
    "y": 40.958775,
    "x": 122.359281
  },
  "pop": 1709,
  "state": "CA"
},{
  "city": "DAVIS CREEK",
  "zip": "96108",
  "loc": {
    "y": 41.862555,
    "x": 120.323549
  },
  "pop": 285,
  "state": "CA"
},{
  "city": "AURORA",
  "zip": "80016",
  "loc": {
    "y": 39.618713,
    "x": 104.741734
  },
  "pop": 4085,
  "state": "CO"
},{
  "city": "BENNETT",
  "zip": "80102",
  "loc": {
    "y": 39.725398,
    "x": 104.427284
  },
  "pop": 3885,
  "state": "CO"
},{
  "city": "DAGSBORO",
  "zip": "19939",
  "loc": {
    "y": 38.559559,
    "x": 75.21133
  },
  "pop": 2593,
  "state": "DE"
},{
  "city": "BYERS",
  "zip": "80103",
  "loc": {
    "y": 39.698454,
    "x": 104.201872
  },
  "pop": 1448,
  "state": "CO"
},{
  "city": "WASHINGTON",
  "zip": "20004",
  "loc": {
    "y": 38.892955,
    "x": 77.026303
  },
  "pop": 11,
  "state": "DC"
},{
  "city": "WASHINGTON",
  "zip": "20012",
  "loc": {
    "y": 38.975712,
    "x": 77.028248
  },
  "pop": 15081,
  "state": "DC"
},{
  "city": "CALLAHAN",
  "zip": "32011",
  "loc": {
    "y": 30.551958,
    "x": 81.814465
  },
  "pop": 9111,
  "state": "FL"
},{
  "city": "RAIFORD",
  "zip": "32083",
  "loc": {
    "y": 30.070379,
    "x": 82.20012
  },
  "pop": 1594,
  "state": "FL"
},{
  "city": "MONUMENT",
  "zip": "80132",
  "loc": {
    "y": 39.100726,
    "x": 104.85416
  },
  "pop": 7411,
  "state": "CO"
},{
  "city": "SAN MATEO",
  "zip": "32187",
  "loc": {
    "y": 29.588827,
    "x": 81.5921
  },
  "pop": 1864,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32207",
  "loc": {
    "y": 30.290766,
    "x": 81.63205
  },
  "pop": 35661,
  "state": "FL"
},{
  "city": "DENVER",
  "zip": "80209",
  "loc": {
    "y": 39.707437,
    "x": 104.968587
  },
  "pop": 19691,
  "state": "CO"
},{
  "city": "LAKEWOOD",
  "zip": "80226",
  "loc": {
    "y": 39.712186,
    "x": 105.066703
  },
  "pop": 13675,
  "state": "CO"
},{
  "city": "TALLAHASSEE",
  "zip": "32304",
  "loc": {
    "y": 30.447752,
    "x": 84.321132
  },
  "pop": 33437,
  "state": "FL"
},{
  "city": "DENVER",
  "zip": "80227",
  "loc": {
    "y": 39.666746,
    "x": 105.085359
  },
  "pop": 26932,
  "state": "CO"
},{
  "city": "STEAMBOAT SPRING",
  "zip": "80487",
  "loc": {
    "y": 40.474124,
    "x": 106.8457
  },
  "pop": 9773,
  "state": "CO"
},{
  "city": "HENDERSON",
  "zip": "80640",
  "loc": {
    "y": 39.898304,
    "x": 104.871834
  },
  "pop": 1388,
  "state": "CO"
},{
  "city": "PIERCE",
  "zip": "80650",
  "loc": {
    "y": 40.635911,
    "x": 104.763764
  },
  "pop": 1020,
  "state": "CO"
},{
  "city": "WELDONA",
  "zip": "80653",
  "loc": {
    "y": 40.368093,
    "x": 103.967755
  },
  "pop": 328,
  "state": "CO"
},{
  "city": "JULESBURG",
  "zip": "80737",
  "loc": {
    "y": 40.97083,
    "x": 102.257501
  },
  "pop": 1712,
  "state": "CO"
},{
  "city": "ARRIBA",
  "zip": "80804",
  "loc": {
    "y": 39.30253,
    "x": 103.270968
  },
  "pop": 388,
  "state": "CO"
},{
  "city": "NORTH POLE",
  "zip": "80809",
  "loc": {
    "y": 38.921314,
    "x": 104.993684
  },
  "pop": 2259,
  "state": "CO"
},{
  "city": "GENOA",
  "zip": "80818",
  "loc": {
    "y": 39.338328,
    "x": 103.460689
  },
  "pop": 320,
  "state": "CO"
},{
  "city": "RAMAH",
  "zip": "80832",
  "loc": {
    "y": 39.073571,
    "x": 104.124733
  },
  "pop": 561,
  "state": "CO"
},{
  "city": "VONA",
  "zip": "80861",
  "loc": {
    "y": 39.323564,
    "x": 102.739287
  },
  "pop": 295,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80916",
  "loc": {
    "y": 38.807619,
    "x": 104.74034
  },
  "pop": 26402,
  "state": "CO"
},{
  "city": "PUEBLO",
  "zip": "81008",
  "loc": {
    "y": 38.313251,
    "x": 104.628433
  },
  "pop": 5953,
  "state": "CO"
},{
  "city": "RYE",
  "zip": "81069",
  "loc": {
    "y": 37.937145,
    "x": 104.886257
  },
  "pop": 2369,
  "state": "CO"
},{
  "city": "SALIDA",
  "zip": "81201",
  "loc": {
    "y": 38.525909,
    "x": 105.997818
  },
  "pop": 7658,
  "state": "CO"
},{
  "city": "TOWAOC",
  "zip": "81334",
  "loc": {
    "y": 37.208408,
    "x": 108.719993
  },
  "pop": 1135,
  "state": "CO"
},{
  "city": "RIFLE",
  "zip": "81650",
  "loc": {
    "y": 39.549073,
    "x": 107.789804
  },
  "pop": 7146,
  "state": "CO"
},{
  "city": "PLEASANT VALLEY",
  "zip": "06063",
  "loc": {
    "y": 41.924873,
    "x": 72.982675
  },
  "pop": 838,
  "state": "CT"
},{
  "city": "WEATOGUE",
  "zip": "06089",
  "loc": {
    "y": 41.837152,
    "x": 72.825254
  },
  "pop": 2308,
  "state": "CT"
},{
  "city": "CHAPLIN",
  "zip": "06235",
  "loc": {
    "y": 41.802584,
    "x": 72.137197
  },
  "pop": 902,
  "state": "CT"
},{
  "city": "NORTH FRANKLIN",
  "zip": "06254",
  "loc": {
    "y": 41.616141,
    "x": 72.142544
  },
  "pop": 1654,
  "state": "CT"
},{
  "city": "MYSTIC",
  "zip": "06355",
  "loc": {
    "y": 41.361626,
    "x": 71.977364
  },
  "pop": 11183,
  "state": "CT"
},{
  "city": "VOLUNTOWN",
  "zip": "06384",
  "loc": {
    "y": 41.583053,
    "x": 71.855002
  },
  "pop": 3167,
  "state": "CT"
},{
  "city": "CHESHIRE",
  "zip": "06410",
  "loc": {
    "y": 41.505473,
    "x": 72.908127
  },
  "pop": 25684,
  "state": "CT"
},{
  "city": "MONROE",
  "zip": "06468",
  "loc": {
    "y": 41.331171,
    "x": 73.224333
  },
  "pop": 16845,
  "state": "CT"
},{
  "city": "EAST HAMPTON",
  "zip": "06424",
  "loc": {
    "y": 41.576058,
    "x": 72.509345
  },
  "pop": 10309,
  "state": "CT"
},{
  "city": "OXFORD",
  "zip": "06478",
  "loc": {
    "y": 41.420237,
    "x": 73.12961
  },
  "pop": 9286,
  "state": "CT"
},{
  "city": "PORTLAND",
  "zip": "06480",
  "loc": {
    "y": 41.585223,
    "x": 72.612797
  },
  "pop": 8673,
  "state": "CT"
},{
  "city": "SHELTON",
  "zip": "06484",
  "loc": {
    "y": 41.304689,
    "x": 73.129439
  },
  "pop": 35447,
  "state": "CT"
},{
  "city": "EAST HAVEN",
  "zip": "06512",
  "loc": {
    "y": 41.280522,
    "x": 72.874144
  },
  "pop": 28963,
  "state": "CT"
},{
  "city": "OAKVILLE",
  "zip": "06779",
  "loc": {
    "y": 41.590932,
    "x": 73.087311
  },
  "pop": 8455,
  "state": "CT"
},{
  "city": "NORTHFIELD",
  "zip": "06778",
  "loc": {
    "y": 41.707382,
    "x": 73.132079
  },
  "pop": 442,
  "state": "CT"
},{
  "city": "WASHINGTON DEPOT",
  "zip": "06794",
  "loc": {
    "y": 41.655924,
    "x": 73.327352
  },
  "pop": 1323,
  "state": "CT"
},{
  "city": "DANBURY",
  "zip": "06811",
  "loc": {
    "y": 41.423983,
    "x": 73.471587
  },
  "pop": 27609,
  "state": "CT"
},{
  "city": "WILTON",
  "zip": "06897",
  "loc": {
    "y": 41.201761,
    "x": 73.438323
  },
  "pop": 15795,
  "state": "CT"
},{
  "city": "BEAR",
  "zip": "19701",
  "loc": {
    "y": 39.610187,
    "x": 75.674729
  },
  "pop": 21384,
  "state": "DE"
},{
  "city": "TALLEYVILLE",
  "zip": "19803",
  "loc": {
    "y": 39.793236,
    "x": 75.531076
  },
  "pop": 20901,
  "state": "DE"
},{
  "city": "NEWPORT",
  "zip": "19804",
  "loc": {
    "y": 39.720854,
    "x": 75.612815
  },
  "pop": 18306,
  "state": "DE"
},{
  "city": "EDGEMOOR",
  "zip": "19809",
  "loc": {
    "y": 39.771913,
    "x": 75.494592
  },
  "pop": 14285,
  "state": "DE"
},{
  "city": "DOVER AFB",
  "zip": "19902",
  "loc": {
    "y": 39.120246,
    "x": 75.478966
  },
  "pop": 5500,
  "state": "DE"
},{
  "city": "BETHANY BEACH",
  "zip": "19930",
  "loc": {
    "y": 38.531009,
    "x": 75.067396
  },
  "pop": 769,
  "state": "DE"
},{
  "city": "GREENVILLE",
  "zip": "19807",
  "loc": {
    "y": 39.782206,
    "x": 75.607205
  },
  "pop": 7176,
  "state": "DE"
},{
  "city": "SEAFORD",
  "zip": "19973",
  "loc": {
    "y": 38.640358,
    "x": 75.604122
  },
  "pop": 18404,
  "state": "DE"
},{
  "city": "MARYDEL",
  "zip": "19964",
  "loc": {
    "y": 39.099794,
    "x": 75.728661
  },
  "pop": 975,
  "state": "DE"
},{
  "city": "PENTAGON",
  "zip": "20301",
  "loc": {
    "y": 38.891019,
    "x": 77.038196
  },
  "pop": 21,
  "state": "DC"
},{
  "city": "O BRIEN",
  "zip": "32071",
  "loc": {
    "y": 30.038114,
    "x": 82.93005
  },
  "pop": 1305,
  "state": "FL"
},{
  "city": "SAINT AUGUSTINE",
  "zip": "32084",
  "loc": {
    "y": 29.880457,
    "x": 81.298367
  },
  "pop": 24906,
  "state": "FL"
},{
  "city": "DAY",
  "zip": "32013",
  "loc": {
    "y": 30.149666,
    "x": 83.285052
  },
  "pop": 1567,
  "state": "FL"
},{
  "city": "YULEE",
  "zip": "32097",
  "loc": {
    "y": 30.622225,
    "x": 81.590603
  },
  "pop": 7453,
  "state": "FL"
},{
  "city": "CITRA",
  "zip": "32113",
  "loc": {
    "y": 29.39182,
    "x": 82.106222
  },
  "pop": 3340,
  "state": "FL"
},{
  "city": "DE LEON SPRINGS",
  "zip": "32130",
  "loc": {
    "y": 29.116592,
    "x": 81.348762
  },
  "pop": 2267,
  "state": "FL"
},{
  "city": "ORLAND",
  "zip": "95963",
  "loc": {
    "y": 39.744578,
    "x": 122.157885
  },
  "pop": 14720,
  "state": "CA"
},{
  "city": "GRASS VALLEY",
  "zip": "95945",
  "loc": {
    "y": 39.207617,
    "x": 121.037401
  },
  "pop": 21263,
  "state": "CA"
},{
  "city": "NEVADA CITY",
  "zip": "95959",
  "loc": {
    "y": 39.275395,
    "x": 121.019634
  },
  "pop": 16670,
  "state": "CA"
},{
  "city": "DOUGLAS CITY",
  "zip": "96024",
  "loc": {
    "y": 40.634151,
    "x": 122.923867
  },
  "pop": 727,
  "state": "CA"
},{
  "city": "FALL RIVER MILLS",
  "zip": "96028",
  "loc": {
    "y": 41.03931,
    "x": 121.460562
  },
  "pop": 1843,
  "state": "CA"
},{
  "city": "BIG BAR",
  "zip": "96010",
  "loc": {
    "y": 40.74796,
    "x": 123.229006
  },
  "pop": 344,
  "state": "CA"
},{
  "city": "CALPINE",
  "zip": "96124",
  "loc": {
    "y": 39.651699,
    "x": 120.4442
  },
  "pop": 286,
  "state": "CA"
},{
  "city": "SIERRAVILLE",
  "zip": "96126",
  "loc": {
    "y": 39.594294,
    "x": 120.347789
  },
  "pop": 355,
  "state": "CA"
},{
  "city": "SUSANVILLE",
  "zip": "96130",
  "loc": {
    "y": 40.398282,
    "x": 120.646442
  },
  "pop": 19347,
  "state": "CA"
},{
  "city": "TAHOE CITY",
  "zip": "96145",
  "loc": {
    "y": 39.180618,
    "x": 120.144532
  },
  "pop": 4944,
  "state": "CA"
},{
  "city": "BROOMFIELD",
  "zip": "80020",
  "loc": {
    "y": 39.924513,
    "x": 105.060902
  },
  "pop": 31533,
  "state": "CO"
},{
  "city": "ELIZABETH",
  "zip": "80107",
  "loc": {
    "y": 39.383618,
    "x": 104.591961
  },
  "pop": 4973,
  "state": "CO"
},{
  "city": "CHERRY HILLS VIL",
  "zip": "80111",
  "loc": {
    "y": 39.610327,
    "x": 104.882832
  },
  "pop": 20230,
  "state": "CO"
},{
  "city": "PALMER LAKE",
  "zip": "80133",
  "loc": {
    "y": 39.120498,
    "x": 104.914795
  },
  "pop": 1237,
  "state": "CO"
},{
  "city": "STRASBURG",
  "zip": "80136",
  "loc": {
    "y": 39.781359,
    "x": 104.268258
  },
  "pop": 1197,
  "state": "CO"
},{
  "city": "MOUNTAIN VIEW",
  "zip": "80212",
  "loc": {
    "y": 39.772396,
    "x": 105.046979
  },
  "pop": 17745,
  "state": "CO"
},{
  "city": "GOLDEN",
  "zip": "80403",
  "loc": {
    "y": 39.823219,
    "x": 105.282516
  },
  "pop": 13159,
  "state": "CO"
},{
  "city": "BOULDER",
  "zip": "80301",
  "loc": {
    "y": 40.049733,
    "x": 105.21426
  },
  "pop": 18174,
  "state": "CO"
},{
  "city": "CLARK",
  "zip": "80428",
  "loc": {
    "y": 40.726783,
    "x": 106.921482
  },
  "pop": 455,
  "state": "CO"
},{
  "city": "JEFFERSON",
  "zip": "80456",
  "loc": {
    "y": 39.300926,
    "x": 105.78633
  },
  "pop": 157,
  "state": "CO"
},{
  "city": "MORRISON",
  "zip": "80465",
  "loc": {
    "y": 39.612452,
    "x": 105.174641
  },
  "pop": 13657,
  "state": "CO"
},{
  "city": "KERSEY",
  "zip": "80644",
  "loc": {
    "y": 40.396305,
    "x": 104.528768
  },
  "pop": 2843,
  "state": "CO"
},{
  "city": "BRUSH",
  "zip": "80723",
  "loc": {
    "y": 40.260255,
    "x": 103.62788
  },
  "pop": 5603,
  "state": "CO"
},{
  "city": "HOLYOKE",
  "zip": "80734",
  "loc": {
    "y": 40.582542,
    "x": 102.282545
  },
  "pop": 2642,
  "state": "CO"
},{
  "city": "KIT CARSON",
  "zip": "80825",
  "loc": {
    "y": 38.803984,
    "x": 102.819842
  },
  "pop": 698,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80930",
  "loc": {
    "y": 38.828926,
    "x": 104.526924
  },
  "pop": 484,
  "state": "CO"
},{
  "city": "BEULAH",
  "zip": "81023",
  "loc": {
    "y": 38.083712,
    "x": 104.97245
  },
  "pop": 867,
  "state": "CO"
},{
  "city": "SOUTH FORK",
  "zip": "81154",
  "loc": {
    "y": 37.67248,
    "x": 106.612451
  },
  "pop": 722,
  "state": "CO"
},{
  "city": "CIMARRON",
  "zip": "81220",
  "loc": {
    "y": 38.387633,
    "x": 107.482366
  },
  "pop": 84,
  "state": "CO"
},{
  "city": "PITKIN",
  "zip": "81241",
  "loc": {
    "y": 38.608542,
    "x": 106.516774
  },
  "pop": 53,
  "state": "CO"
},{
  "city": "OPHIR",
  "zip": "81426",
  "loc": {
    "y": 37.856197,
    "x": 107.851961
  },
  "pop": 138,
  "state": "CO"
},{
  "city": "REDVALE",
  "zip": "81431",
  "loc": {
    "y": 38.186452,
    "x": 108.389536
  },
  "pop": 409,
  "state": "CO"
},{
  "city": "FRUITVALE",
  "zip": "81504",
  "loc": {
    "y": 39.083136,
    "x": 108.489094
  },
  "pop": 16754,
  "state": "CO"
},{
  "city": "GLENWOOD SPRINGS",
  "zip": "81601",
  "loc": {
    "y": 39.529607,
    "x": 107.325188
  },
  "pop": 9606,
  "state": "CO"
},{
  "city": "PALISADE",
  "zip": "81526",
  "loc": {
    "y": 39.103178,
    "x": 108.367977
  },
  "pop": 4366,
  "state": "CO"
},{
  "city": "NEW CASTLE",
  "zip": "81647",
  "loc": {
    "y": 39.570922,
    "x": 107.542758
  },
  "pop": 2719,
  "state": "CO"
},{
  "city": "BRISTOL",
  "zip": "06010",
  "loc": {
    "y": 41.682293,
    "x": 72.930193
  },
  "pop": 60670,
  "state": "CT"
},{
  "city": "EAST GRANBY",
  "zip": "06026",
  "loc": {
    "y": 41.932215,
    "x": 72.745889
  },
  "pop": 4301,
  "state": "CT"
},{
  "city": "ELLINGTON",
  "zip": "06029",
  "loc": {
    "y": 41.911417,
    "x": 72.462599
  },
  "pop": 9070,
  "state": "CT"
},{
  "city": "SIMSBURY",
  "zip": "06070",
  "loc": {
    "y": 41.873712,
    "x": 72.821267
  },
  "pop": 14589,
  "state": "CT"
},{
  "city": "SOUTH GLASTONBUR",
  "zip": "06073",
  "loc": {
    "y": 41.660682,
    "x": 72.554308
  },
  "pop": 3614,
  "state": "CT"
},{
  "city": "SUFFIELD",
  "zip": "06078",
  "loc": {
    "y": 41.990029,
    "x": 72.641997
  },
  "pop": 8518,
  "state": "CT"
},{
  "city": "NORTH WINDHAM",
  "zip": "06256",
  "loc": {
    "y": 41.745144,
    "x": 72.160106
  },
  "pop": 3825,
  "state": "CT"
},{
  "city": "POMFRET CENTER",
  "zip": "06259",
  "loc": {
    "y": 41.869683,
    "x": 71.98201
  },
  "pop": 3325,
  "state": "CT"
},{
  "city": "QUINEBAUG",
  "zip": "06262",
  "loc": {
    "y": 42.021747,
    "x": 71.939137
  },
  "pop": 72,
  "state": "CT"
},{
  "city": "STORRS MANSFIELD",
  "zip": "06268",
  "loc": {
    "y": 41.805364,
    "x": 72.257172
  },
  "pop": 16117,
  "state": "CT"
},{
  "city": "CANTERBURY",
  "zip": "06331",
  "loc": {
    "y": 41.684403,
    "x": 72.000985
  },
  "pop": 4345,
  "state": "CT"
},{
  "city": "BOZRAH",
  "zip": "06334",
  "loc": {
    "y": 41.546515,
    "x": 72.171078
  },
  "pop": 2297,
  "state": "CT"
},{
  "city": "GALES FERRY",
  "zip": "06335",
  "loc": {
    "y": 41.42852,
    "x": 72.06719
  },
  "pop": 6994,
  "state": "CT"
},{
  "city": "NIANTIC",
  "zip": "06357",
  "loc": {
    "y": 41.3253,
    "x": 72.210819
  },
  "pop": 9245,
  "state": "CT"
},{
  "city": "STONINGTON",
  "zip": "06378",
  "loc": {
    "y": 41.366437,
    "x": 71.915544
  },
  "pop": 5282,
  "state": "CT"
},{
  "city": "DEEP RIVER",
  "zip": "06417",
  "loc": {
    "y": 41.376478,
    "x": 72.448568
  },
  "pop": 4332,
  "state": "CT"
},{
  "city": "GUILFORD",
  "zip": "06437",
  "loc": {
    "y": 41.31537,
    "x": 72.69679
  },
  "pop": 19717,
  "state": "CT"
},{
  "city": "ORANGE",
  "zip": "06477",
  "loc": {
    "y": 41.281527,
    "x": 73.028725
  },
  "pop": 12828,
  "state": "CT"
},{
  "city": "ROCKFALL",
  "zip": "06481",
  "loc": {
    "y": 41.534094,
    "x": 72.699674
  },
  "pop": 1330,
  "state": "CT"
},{
  "city": "WOODBRIDGE",
  "zip": "06525",
  "loc": {
    "y": 41.351668,
    "x": 73.013902
  },
  "pop": 7802,
  "state": "CT"
},{
  "city": "BANTAM",
  "zip": "06750",
  "loc": {
    "y": 41.721483,
    "x": 73.252028
  },
  "pop": 1418,
  "state": "CT"
},{
  "city": "GOSHEN",
  "zip": "06756",
  "loc": {
    "y": 41.833452,
    "x": 73.242876
  },
  "pop": 2314,
  "state": "CT"
},{
  "city": "COS COB",
  "zip": "06807",
  "loc": {
    "y": 41.052952,
    "x": 73.593498
  },
  "pop": 7000,
  "state": "CT"
},{
  "city": "DANBURY",
  "zip": "06810",
  "loc": {
    "y": 41.391663,
    "x": 73.453165
  },
  "pop": 37764,
  "state": "CT"
},{
  "city": "DARIEN",
  "zip": "06820",
  "loc": {
    "y": 41.076759,
    "x": 73.485254
  },
  "pop": 18062,
  "state": "CT"
},{
  "city": "NORWALK",
  "zip": "06853",
  "loc": {
    "y": 41.070243,
    "x": 73.439667
  },
  "pop": 3979,
  "state": "CT"
},{
  "city": "FRANKFORD",
  "zip": "19945",
  "loc": {
    "y": 38.51767,
    "x": 75.200633
  },
  "pop": 5500,
  "state": "DE"
},{
  "city": "CAMDEN WYOMING",
  "zip": "19934",
  "loc": {
    "y": 39.099099,
    "x": 75.596559
  },
  "pop": 8877,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20006",
  "loc": {
    "y": 38.896444,
    "x": 77.044701
  },
  "pop": 2317,
  "state": "DC"
},{
  "city": "WASHINGTON",
  "zip": "20010",
  "loc": {
    "y": 38.93272,
    "x": 77.032183
  },
  "pop": 28849,
  "state": "DC"
},{
  "city": "LA PORTE",
  "zip": "95981",
  "loc": {
    "y": 39.604136,
    "x": 121.074566
  },
  "pop": 242,
  "state": "CA"
},{
  "city": "MANTON",
  "zip": "96059",
  "loc": {
    "y": 40.433125,
    "x": 121.836521
  },
  "pop": 344,
  "state": "CA"
},{
  "city": "ALTURAS",
  "zip": "96101",
  "loc": {
    "y": 41.476742,
    "x": 120.545584
  },
  "pop": 5566,
  "state": "CA"
},{
  "city": "STANDISH",
  "zip": "96128",
  "loc": {
    "y": 40.350863,
    "x": 120.406847
  },
  "pop": 340,
  "state": "CA"
},{
  "city": "ARVADA",
  "zip": "80005",
  "loc": {
    "y": 39.842189,
    "x": 105.109719
  },
  "pop": 22613,
  "state": "CO"
},{
  "city": "SOUTH LAKE TAHOE",
  "zip": "96150",
  "loc": {
    "y": 38.916976,
    "x": 119.986469
  },
  "pop": 28975,
  "state": "CA"
},{
  "city": "AURORA",
  "zip": "80018",
  "loc": {
    "y": 39.710179,
    "x": 104.707102
  },
  "pop": 321,
  "state": "CO"
},{
  "city": "WHEAT RIDGE",
  "zip": "80033",
  "loc": {
    "y": 39.774036,
    "x": 105.096195
  },
  "pop": 23040,
  "state": "CO"
},{
  "city": "LITTLETON",
  "zip": "80124",
  "loc": {
    "y": 39.55061,
    "x": 104.897204
  },
  "pop": 5393,
  "state": "CO"
},{
  "city": "LITTLETON",
  "zip": "80127",
  "loc": {
    "y": 39.591968,
    "x": 105.132811
  },
  "pop": 23204,
  "state": "CO"
},{
  "city": "GRANBY",
  "zip": "80446",
  "loc": {
    "y": 40.012834,
    "x": 105.889916
  },
  "pop": 4839,
  "state": "CO"
},{
  "city": "MC COY",
  "zip": "80463",
  "loc": {
    "y": 39.913377,
    "x": 106.730906
  },
  "pop": 61,
  "state": "CO"
},{
  "city": "PARSHALL",
  "zip": "80468",
  "loc": {
    "y": 40.053765,
    "x": 106.225492
  },
  "pop": 345,
  "state": "CO"
},{
  "city": "WALDEN",
  "zip": "80480",
  "loc": {
    "y": 40.709978,
    "x": 106.276728
  },
  "pop": 1517,
  "state": "CO"
},{
  "city": "ERIE",
  "zip": "80516",
  "loc": {
    "y": 40.059746,
    "x": 105.068583
  },
  "pop": 304,
  "state": "CO"
},{
  "city": "FORT COLLINS",
  "zip": "80525",
  "loc": {
    "y": 40.538354,
    "x": 105.054715
  },
  "pop": 31263,
  "state": "CO"
},{
  "city": "ESTES PARK",
  "zip": "80517",
  "loc": {
    "y": 40.365761,
    "x": 105.514163
  },
  "pop": 6428,
  "state": "CO"
},{
  "city": "WARD",
  "zip": "80481",
  "loc": {
    "y": 40.072572,
    "x": 105.508023
  },
  "pop": 159,
  "state": "CO"
},{
  "city": "HUDSON",
  "zip": "80642",
  "loc": {
    "y": 40.060555,
    "x": 104.653208
  },
  "pop": 2369,
  "state": "CO"
},{
  "city": "JOES",
  "zip": "80822",
  "loc": {
    "y": 39.672771,
    "x": 102.615134
  },
  "pop": 315,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80905",
  "loc": {
    "y": 38.837692,
    "x": 104.836997
  },
  "pop": 3435,
  "state": "CO"
},{
  "city": "PUEBLO",
  "zip": "81004",
  "loc": {
    "y": 38.244063,
    "x": 104.627829
  },
  "pop": 25748,
  "state": "CO"
},{
  "city": "NORTH AVONDALE",
  "zip": "81022",
  "loc": {
    "y": 38.211603,
    "x": 104.359686
  },
  "pop": 1483,
  "state": "CO"
},{
  "city": "TIMPAS",
  "zip": "81050",
  "loc": {
    "y": 37.991552,
    "x": 103.549068
  },
  "pop": 11742,
  "state": "CO"
},{
  "city": "TOWNER",
  "zip": "81071",
  "loc": {
    "y": 38.462172,
    "x": 102.295367
  },
  "pop": 162,
  "state": "CO"
},{
  "city": "MC CLAVE",
  "zip": "81057",
  "loc": {
    "y": 38.150484,
    "x": 102.816934
  },
  "pop": 568,
  "state": "CO"
},{
  "city": "SPRINGFIELD",
  "zip": "81073",
  "loc": {
    "y": 37.406727,
    "x": 102.617322
  },
  "pop": 1992,
  "state": "CO"
},{
  "city": "MOFFAT",
  "zip": "81143",
  "loc": {
    "y": 38.045195,
    "x": 105.841051
  },
  "pop": 737,
  "state": "CO"
},{
  "city": "CRESTED BUTTE",
  "zip": "81224",
  "loc": {
    "y": 38.869081,
    "x": 106.961899
  },
  "pop": 1750,
  "state": "CO"
},{
  "city": "PLEASANT VIEW",
  "zip": "81331",
  "loc": {
    "y": 37.588763,
    "x": 108.809487
  },
  "pop": 223,
  "state": "CO"
},{
  "city": "FLORENCE",
  "zip": "81226",
  "loc": {
    "y": 38.385016,
    "x": 105.123233
  },
  "pop": 4461,
  "state": "CO"
},{
  "city": "GRAND JUNCTION",
  "zip": "81506",
  "loc": {
    "y": 39.103209,
    "x": 108.54911
  },
  "pop": 7471,
  "state": "CO"
},{
  "city": "MACK",
  "zip": "81525",
  "loc": {
    "y": 39.255367,
    "x": 108.929597
  },
  "pop": 176,
  "state": "CO"
},{
  "city": "HAYDEN",
  "zip": "81639",
  "loc": {
    "y": 40.494487,
    "x": 107.257055
  },
  "pop": 2028,
  "state": "CO"
},{
  "city": "COLEBROOK",
  "zip": "06021",
  "loc": {
    "y": 42.028217,
    "x": 73.104069
  },
  "pop": 203,
  "state": "CT"
},{
  "city": "ROCKY HILL",
  "zip": "06067",
  "loc": {
    "y": 41.658295,
    "x": 72.663197
  },
  "pop": 16638,
  "state": "CT"
},{
  "city": "SHARON",
  "zip": "06069",
  "loc": {
    "y": 41.871446,
    "x": 73.457758
  },
  "pop": 2794,
  "state": "CT"
},{
  "city": "UNIONVILLE",
  "zip": "06085",
  "loc": {
    "y": 41.747711,
    "x": 72.887406
  },
  "pop": 5604,
  "state": "CT"
},{
  "city": "W HARTFORD",
  "zip": "06110",
  "loc": {
    "y": 41.732566,
    "x": 72.733691
  },
  "pop": 11817,
  "state": "CT"
},{
  "city": "BROOKLYN",
  "zip": "06234",
  "loc": {
    "y": 41.780747,
    "x": 71.954129
  },
  "pop": 4835,
  "state": "CT"
},{
  "city": "DAYVILLE",
  "zip": "06241",
  "loc": {
    "y": 41.854045,
    "x": 71.868342
  },
  "pop": 5860,
  "state": "CT"
},{
  "city": "EAST KILLINGLY",
  "zip": "06243",
  "loc": {
    "y": 41.848756,
    "x": 71.798534
  },
  "pop": 25,
  "state": "CT"
},{
  "city": "PUTNAM",
  "zip": "06260",
  "loc": {
    "y": 41.91853,
    "x": 71.896804
  },
  "pop": 9031,
  "state": "CT"
},{
  "city": "LEDYARD",
  "zip": "06339",
  "loc": {
    "y": 41.44014,
    "x": 71.995626
  },
  "pop": 7602,
  "state": "CT"
},{
  "city": "WATERFORD",
  "zip": "06385",
  "loc": {
    "y": 41.346853,
    "x": 72.145816
  },
  "pop": 15217,
  "state": "CT"
},{
  "city": "FAIRFIELD",
  "zip": "06430",
  "loc": {
    "y": 41.166442,
    "x": 73.257109
  },
  "pop": 40889,
  "state": "CT"
},{
  "city": "SOUTHPORT",
  "zip": "06490",
  "loc": {
    "y": 41.14527,
    "x": 73.290205
  },
  "pop": 3701,
  "state": "CT"
},{
  "city": "WARREN",
  "zip": "06754",
  "loc": {
    "y": 41.770084,
    "x": 73.367472
  },
  "pop": 1278,
  "state": "CT"
},{
  "city": "WEST CORNWALL",
  "zip": "06796",
  "loc": {
    "y": 41.868888,
    "x": 73.331271
  },
  "pop": 1042,
  "state": "CT"
},{
  "city": "WESTON",
  "zip": "06883",
  "loc": {
    "y": 41.219499,
    "x": 73.371474
  },
  "pop": 8517,
  "state": "CT"
},{
  "city": "NEWARK",
  "zip": "19713",
  "loc": {
    "y": 39.669881,
    "x": 75.715101
  },
  "pop": 30699,
  "state": "DE"
},{
  "city": "MILFORD",
  "zip": "19963",
  "loc": {
    "y": 38.921801,
    "x": 75.429877
  },
  "pop": 12187,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20015",
  "loc": {
    "y": 38.965768,
    "x": 77.067961
  },
  "pop": 14569,
  "state": "DC"
},{
  "city": "WASHINGTON",
  "zip": "20020",
  "loc": {
    "y": 38.860039,
    "x": 76.974187
  },
  "pop": 54339,
  "state": "DC"
},{
  "city": "SAINT AUGUSTINE",
  "zip": "32086",
  "loc": {
    "y": 29.828514,
    "x": 81.323734
  },
  "pop": 16939,
  "state": "FL"
},{
  "city": "WELLBORN",
  "zip": "32094",
  "loc": {
    "y": 30.179624,
    "x": 82.850532
  },
  "pop": 1621,
  "state": "FL"
},{
  "city": "DUNLAWTON",
  "zip": "32119",
  "loc": {
    "y": 29.152526,
    "x": 81.022142
  },
  "pop": 36500,
  "state": "FL"
},{
  "city": "LADY LAKE",
  "zip": "32159",
  "loc": {
    "y": 28.929939,
    "x": 81.925598
  },
  "pop": 11493,
  "state": "FL"
},{
  "city": "PIERSON",
  "zip": "32180",
  "loc": {
    "y": 29.222596,
    "x": 81.43533
  },
  "pop": 7341,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32258",
  "loc": {
    "y": 30.145944,
    "x": 81.573864
  },
  "pop": 7261,
  "state": "FL"
},{
  "city": "GRASS VALLEY",
  "zip": "95949",
  "loc": {
    "y": 39.1029,
    "x": 121.069357
  },
  "pop": 20973,
  "state": "CA"
},{
  "city": "IGO",
  "zip": "96047",
  "loc": {
    "y": 40.431795,
    "x": 122.654023
  },
  "pop": 205,
  "state": "CA"
},{
  "city": "OLD STATION",
  "zip": "96071",
  "loc": {
    "y": 40.62557,
    "x": 121.458476
  },
  "pop": 213,
  "state": "CA"
},{
  "city": "MACDOEL",
  "zip": "96058",
  "loc": {
    "y": 41.883028,
    "x": 121.944472
  },
  "pop": 1945,
  "state": "CA"
},{
  "city": "LOS MOLINOS",
  "zip": "96055",
  "loc": {
    "y": 40.049735,
    "x": 122.099175
  },
  "pop": 3363,
  "state": "CA"
},{
  "city": "WEAVERVILLE",
  "zip": "96093",
  "loc": {
    "y": 40.731701,
    "x": 122.935303
  },
  "pop": 3188,
  "state": "CA"
},{
  "city": "SHINGLETOWN",
  "zip": "96088",
  "loc": {
    "y": 40.504959,
    "x": 121.885668
  },
  "pop": 3681,
  "state": "CA"
},{
  "city": "FORT BIDWELL",
  "zip": "96112",
  "loc": {
    "y": 41.864441,
    "x": 120.161983
  },
  "pop": 226,
  "state": "CA"
},{
  "city": "TERMO",
  "zip": "96132",
  "loc": {
    "y": 40.946667,
    "x": 120.517378
  },
  "pop": 199,
  "state": "CA"
},{
  "city": "ENGLEWOOD",
  "zip": "80112",
  "loc": {
    "y": 39.58051,
    "x": 104.901115
  },
  "pop": 20210,
  "state": "CO"
},{
  "city": "WESTMINSTER",
  "zip": "80021",
  "loc": {
    "y": 39.875996,
    "x": 105.102837
  },
  "pop": 20461,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80220",
  "loc": {
    "y": 39.7312,
    "x": 104.912866
  },
  "pop": 35520,
  "state": "CO"
},{
  "city": "NORTHGLENN",
  "zip": "80233",
  "loc": {
    "y": 39.901222,
    "x": 104.958257
  },
  "pop": 30749,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80224",
  "loc": {
    "y": 39.687995,
    "x": 104.910778
  },
  "pop": 14918,
  "state": "CO"
},{
  "city": "JOHNSTOWN",
  "zip": "80534",
  "loc": {
    "y": 40.335526,
    "x": 104.923558
  },
  "pop": 2601,
  "state": "CO"
},{
  "city": "RED FEATHER LAKE",
  "zip": "80545",
  "loc": {
    "y": 40.796451,
    "x": 105.624455
  },
  "pop": 440,
  "state": "CO"
},{
  "city": "LA SALLE",
  "zip": "80645",
  "loc": {
    "y": 40.321138,
    "x": 104.726784
  },
  "pop": 4455,
  "state": "CO"
},{
  "city": "AMHERST",
  "zip": "80721",
  "loc": {
    "y": 40.682386,
    "x": 102.170567
  },
  "pop": 86,
  "state": "CO"
},{
  "city": "VERNON",
  "zip": "80755",
  "loc": {
    "y": 39.933127,
    "x": 102.319343
  },
  "pop": 318,
  "state": "CO"
},{
  "city": "LAIRD",
  "zip": "80758",
  "loc": {
    "y": 40.104917,
    "x": 102.233751
  },
  "pop": 3396,
  "state": "CO"
},{
  "city": "YODER",
  "zip": "80864",
  "loc": {
    "y": 38.775252,
    "x": 104.218353
  },
  "pop": 511,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80909",
  "loc": {
    "y": 38.852038,
    "x": 104.773483
  },
  "pop": 34887,
  "state": "CO"
},{
  "city": "BRANSON",
  "zip": "81027",
  "loc": {
    "y": 37.051775,
    "x": 103.874115
  },
  "pop": 140,
  "state": "CO"
},{
  "city": "FOWLER",
  "zip": "81039",
  "loc": {
    "y": 38.123071,
    "x": 104.029908
  },
  "pop": 1877,
  "state": "CO"
},{
  "city": "WESTON",
  "zip": "81091",
  "loc": {
    "y": 37.170211,
    "x": 104.824749
  },
  "pop": 1094,
  "state": "CO"
},{
  "city": "CENTER",
  "zip": "81125",
  "loc": {
    "y": 37.734295,
    "x": 106.090628
  },
  "pop": 4419,
  "state": "CO"
},{
  "city": "ALMONT",
  "zip": "81210",
  "loc": {
    "y": 38.64997,
    "x": 106.627099
  },
  "pop": 150,
  "state": "CO"
},{
  "city": "POWDERHORN",
  "zip": "81243",
  "loc": {
    "y": 38.282165,
    "x": 107.108449
  },
  "pop": 11,
  "state": "CO"
},{
  "city": "WETMORE",
  "zip": "81253",
  "loc": {
    "y": 38.189857,
    "x": 105.106441
  },
  "pop": 357,
  "state": "CO"
},{
  "city": "GUNNISON",
  "zip": "81230",
  "loc": {
    "y": 38.551056,
    "x": 106.931013
  },
  "pop": 7814,
  "state": "CO"
},{
  "city": "NORTH GRANBY",
  "zip": "06060",
  "loc": {
    "y": 42.021925,
    "x": 72.840938
  },
  "pop": 1455,
  "state": "CT"
},{
  "city": "SOUTH WINDSOR",
  "zip": "06074",
  "loc": {
    "y": 41.834081,
    "x": 72.557585
  },
  "pop": 22090,
  "state": "CT"
},{
  "city": "HARTFORD",
  "zip": "06120",
  "loc": {
    "y": 41.78596,
    "x": 72.675807
  },
  "pop": 16739,
  "state": "CT"
},{
  "city": "DANIELSON",
  "zip": "06239",
  "loc": {
    "y": 41.798246,
    "x": 71.880703
  },
  "pop": 12754,
  "state": "CT"
},{
  "city": "NORTH STONINGTON",
  "zip": "06359",
  "loc": {
    "y": 41.453113,
    "x": 71.872701
  },
  "pop": 4882,
  "state": "CT"
},{
  "city": "STRATFORD",
  "zip": "06497",
  "loc": {
    "y": 41.2044,
    "x": 73.135594
  },
  "pop": 49495,
  "state": "CT"
},{
  "city": "NEW HAVEN",
  "zip": "06511",
  "loc": {
    "y": 41.318364,
    "x": 72.931771
  },
  "pop": 54142,
  "state": "CT"
},{
  "city": "HAMDEN",
  "zip": "06518",
  "loc": {
    "y": 41.409664,
    "x": 72.911001
  },
  "pop": 13802,
  "state": "CT"
},{
  "city": "BRIDGEPORT",
  "zip": "06607",
  "loc": {
    "y": 41.178382,
    "x": 73.165048
  },
  "pop": 9292,
  "state": "CT"
},{
  "city": "ROXBURY",
  "zip": "06783",
  "loc": {
    "y": 41.5509,
    "x": 73.299346
  },
  "pop": 1825,
  "state": "CT"
},{
  "city": "WASHINGTON DEPOT",
  "zip": "06793",
  "loc": {
    "y": 41.634595,
    "x": 73.293518
  },
  "pop": 1381,
  "state": "CT"
},{
  "city": "BYRAM",
  "zip": "06830",
  "loc": {
    "y": 41.030238,
    "x": 73.630047
  },
  "pop": 22685,
  "state": "CT"
},{
  "city": "FELTON",
  "zip": "19943",
  "loc": {
    "y": 39.022538,
    "x": 75.582906
  },
  "pop": 7282,
  "state": "DE"
},{
  "city": "EDGEMOOR",
  "zip": "19810",
  "loc": {
    "y": 39.819377,
    "x": 75.505999
  },
  "pop": 26334,
  "state": "DE"
},{
  "city": "HARBESON",
  "zip": "19951",
  "loc": {
    "y": 38.672294,
    "x": 75.223621
  },
  "pop": 598,
  "state": "DE"
},{
  "city": "SELBYVILLE",
  "zip": "19975",
  "loc": {
    "y": 38.465357,
    "x": 75.157325
  },
  "pop": 4478,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20032",
  "loc": {
    "y": 38.833843,
    "x": 76.999549
  },
  "pop": 40265,
  "state": "DC"
},{
  "city": "WASHINGTON",
  "zip": "20336",
  "loc": {
    "y": 38.839473,
    "x": 77.014827
  },
  "pop": 6311,
  "state": "DC"
},{
  "city": "LULU",
  "zip": "32061",
  "loc": {
    "y": 30.07544,
    "x": 82.538481
  },
  "pop": 295,
  "state": "FL"
},{
  "city": "MC ALPIN",
  "zip": "32062",
  "loc": {
    "y": 30.150899,
    "x": 82.966182
  },
  "pop": 2062,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32202",
  "loc": {
    "y": 30.329882,
    "x": 81.651672
  },
  "pop": 4724,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32216",
  "loc": {
    "y": 30.293907,
    "x": 81.547387
  },
  "pop": 58867,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32223",
  "loc": {
    "y": 30.154817,
    "x": 81.629961
  },
  "pop": 19120,
  "state": "FL"
},{
  "city": "JACKSONVILLE BEA",
  "zip": "32227",
  "loc": {
    "y": 30.388275,
    "x": 81.405424
  },
  "pop": 9055,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32225",
  "loc": {
    "y": 30.350968,
    "x": 81.506092
  },
  "pop": 26551,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32224",
  "loc": {
    "y": 30.303076,
    "x": 81.440427
  },
  "pop": 2535,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32256",
  "loc": {
    "y": 30.221356,
    "x": 81.557139
  },
  "pop": 17293,
  "state": "FL"
},{
  "city": "MEADOW VALLEY",
  "zip": "95956",
  "loc": {
    "y": 39.918488,
    "x": 121.05629
  },
  "pop": 91,
  "state": "CA"
},{
  "city": "QUINCY",
  "zip": "95971",
  "loc": {
    "y": 39.940504,
    "x": 120.928493
  },
  "pop": 6303,
  "state": "CA"
},{
  "city": "TAYLORSVILLE",
  "zip": "95983",
  "loc": {
    "y": 40.064911,
    "x": 120.801797
  },
  "pop": 177,
  "state": "CA"
},{
  "city": "GRENADA",
  "zip": "96038",
  "loc": {
    "y": 41.612512,
    "x": 122.525829
  },
  "pop": 703,
  "state": "CA"
},{
  "city": "YREKA",
  "zip": "96097",
  "loc": {
    "y": 41.720558,
    "x": 122.637604
  },
  "pop": 9151,
  "state": "CA"
},{
  "city": "CROMBERG",
  "zip": "96103",
  "loc": {
    "y": 39.784745,
    "x": 120.627397
  },
  "pop": 1774,
  "state": "CA"
},{
  "city": "CARNELIAN BAY",
  "zip": "96140",
  "loc": {
    "y": 39.231937,
    "x": 120.075328
  },
  "pop": 620,
  "state": "CA"
},{
  "city": "AURORA",
  "zip": "80010",
  "loc": {
    "y": 39.736788,
    "x": 104.864618
  },
  "pop": 27090,
  "state": "CO"
},{
  "city": "AURORA",
  "zip": "80013",
  "loc": {
    "y": 39.657457,
    "x": 104.784566
  },
  "pop": 45335,
  "state": "CO"
},{
  "city": "PENINSULA VILLAG",
  "zip": "96137",
  "loc": {
    "y": 40.270359,
    "x": 121.109224
  },
  "pop": 1843,
  "state": "CA"
},{
  "city": "AURORA",
  "zip": "80045",
  "loc": {
    "y": 39.748014,
    "x": 104.837954
  },
  "pop": 1715,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80202",
  "loc": {
    "y": 39.749107,
    "x": 104.994591
  },
  "pop": 2816,
  "state": "CO"
},{
  "city": "EDGEWATER",
  "zip": "80214",
  "loc": {
    "y": 39.746931,
    "x": 105.062036
  },
  "pop": 13154,
  "state": "CO"
},{
  "city": "FOXTON",
  "zip": "80441",
  "loc": {
    "y": 39.372056,
    "x": 105.24815
  },
  "pop": 127,
  "state": "CO"
},{
  "city": "OAK CREEK",
  "zip": "80467",
  "loc": {
    "y": 40.256733,
    "x": 106.929621
  },
  "pop": 1135,
  "state": "CO"
},{
  "city": "BERTHOUD",
  "zip": "80513",
  "loc": {
    "y": 40.299333,
    "x": 105.105459
  },
  "pop": 6886,
  "state": "CO"
},{
  "city": "AULT",
  "zip": "80610",
  "loc": {
    "y": 40.593772,
    "x": 104.735629
  },
  "pop": 2684,
  "state": "CO"
},{
  "city": "HAXTUN",
  "zip": "80731",
  "loc": {
    "y": 40.640587,
    "x": 102.605175
  },
  "pop": 1569,
  "state": "CO"
},{
  "city": "WILLARD",
  "zip": "80741",
  "loc": {
    "y": 40.511548,
    "x": 103.34471
  },
  "pop": 959,
  "state": "CO"
},{
  "city": "SNYDER",
  "zip": "80750",
  "loc": {
    "y": 40.330655,
    "x": 103.597134
  },
  "pop": 134,
  "state": "CO"
},{
  "city": "HUGO",
  "zip": "80821",
  "loc": {
    "y": 39.084318,
    "x": 103.498971
  },
  "pop": 1064,
  "state": "CO"
},{
  "city": "GUFFEY",
  "zip": "80820",
  "loc": {
    "y": 38.814584,
    "x": 105.57835
  },
  "pop": 300,
  "state": "CO"
},{
  "city": "RUSH",
  "zip": "80833",
  "loc": {
    "y": 38.764248,
    "x": 104.024065
  },
  "pop": 408,
  "state": "CO"
},{
  "city": "SIMLA",
  "zip": "80835",
  "loc": {
    "y": 39.146457,
    "x": 104.086236
  },
  "pop": 580,
  "state": "CO"
},{
  "city": "FORT CARSON",
  "zip": "80913",
  "loc": {
    "y": 38.741967,
    "x": 104.782218
  },
  "pop": 11309,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80910",
  "loc": {
    "y": 38.815164,
    "x": 104.770299
  },
  "pop": 24867,
  "state": "CO"
},{
  "city": "STRATTON",
  "zip": "80836",
  "loc": {
    "y": 39.308733,
    "x": 102.597928
  },
  "pop": 1102,
  "state": "CO"
},{
  "city": "SEIBERT",
  "zip": "80834",
  "loc": {
    "y": 39.318329,
    "x": 102.882184
  },
  "pop": 364,
  "state": "CO"
},{
  "city": "UNITED STATES AI",
  "zip": "80840",
  "loc": {
    "y": 38.990448,
    "x": 104.860139
  },
  "pop": 9062,
  "state": "CO"
},{
  "city": "ECKERT",
  "zip": "81418",
  "loc": {
    "y": 38.844982,
    "x": 107.962452
  },
  "pop": 1211,
  "state": "CO"
},{
  "city": "CRAIG",
  "zip": "81625",
  "loc": {
    "y": 40.522351,
    "x": 107.561458
  },
  "pop": 10242,
  "state": "CO"
},{
  "city": "EAST CANAAN",
  "zip": "06024",
  "loc": {
    "y": 42.011686,
    "x": 73.278462
  },
  "pop": 519,
  "state": "CT"
},{
  "city": "COLUMBIA",
  "zip": "06237",
  "loc": {
    "y": 41.697274,
    "x": 72.30717
  },
  "pop": 4510,
  "state": "CT"
},{
  "city": "THOMPSON",
  "zip": "06277",
  "loc": {
    "y": 41.980285,
    "x": 71.837587
  },
  "pop": 2960,
  "state": "CT"
},{
  "city": "WINDHAM",
  "zip": "06280",
  "loc": {
    "y": 41.702652,
    "x": 72.15261
  },
  "pop": 3337,
  "state": "CT"
},{
  "city": "GILMAN",
  "zip": "06336",
  "loc": {
    "y": 41.58117,
    "x": 72.126623
  },
  "pop": 156,
  "state": "CT"
},{
  "city": "UNCASVILLE",
  "zip": "06382",
  "loc": {
    "y": 41.462168,
    "x": 72.112556
  },
  "pop": 9909,
  "state": "CT"
},{
  "city": "COLCHESTER",
  "zip": "06415",
  "loc": {
    "y": 41.566198,
    "x": 72.344123
  },
  "pop": 10978,
  "state": "CT"
},{
  "city": "OLD SAYBROOK",
  "zip": "06475",
  "loc": {
    "y": 41.291297,
    "x": 72.385022
  },
  "pop": 9552,
  "state": "CT"
},{
  "city": "PLANTSVILLE",
  "zip": "06479",
  "loc": {
    "y": 41.579747,
    "x": 72.899031
  },
  "pop": 10024,
  "state": "CT"
},{
  "city": "BRIDGEPORT",
  "zip": "06608",
  "loc": {
    "y": 41.189466,
    "x": 73.181141
  },
  "pop": 17721,
  "state": "CT"
},{
  "city": "NEW MILFORD",
  "zip": "06776",
  "loc": {
    "y": 41.581745,
    "x": 73.412752
  },
  "pop": 22750,
  "state": "CT"
},{
  "city": "THOMASTON",
  "zip": "06787",
  "loc": {
    "y": 41.678643,
    "x": 73.088557
  },
  "pop": 8179,
  "state": "CT"
},{
  "city": "STAMFORD",
  "zip": "06906",
  "loc": {
    "y": 41.069218,
    "x": 73.523563
  },
  "pop": 7019,
  "state": "CT"
},{
  "city": "BETHEL",
  "zip": "19931",
  "loc": {
    "y": 38.568517,
    "x": 75.624298
  },
  "pop": 108,
  "state": "DE"
},{
  "city": "DELMAR",
  "zip": "19940",
  "loc": {
    "y": 38.476955,
    "x": 75.575887
  },
  "pop": 4257,
  "state": "DE"
},{
  "city": "WILMINGTON",
  "zip": "19806",
  "loc": {
    "y": 39.757076,
    "x": 75.563503
  },
  "pop": 9645,
  "state": "DE"
},{
  "city": "MILLVILLE",
  "zip": "19967",
  "loc": {
    "y": 38.558946,
    "x": 75.107762
  },
  "pop": 623,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20002",
  "loc": {
    "y": 38.902365,
    "x": 76.990055
  },
  "pop": 56756,
  "state": "DC"
},{
  "city": "WASHINGTON",
  "zip": "20007",
  "loc": {
    "y": 38.914365,
    "x": 77.074042
  },
  "pop": 27076,
  "state": "DC"
},{
  "city": "WASHINGTON",
  "zip": "20005",
  "loc": {
    "y": 38.906731,
    "x": 77.031236
  },
  "pop": 9862,
  "state": "DC"
},{
  "city": "AMELIA ISLAND",
  "zip": "32034",
  "loc": {
    "y": 30.635388,
    "x": 81.468829
  },
  "pop": 19016,
  "state": "FL"
},{
  "city": "HAMPTON",
  "zip": "32044",
  "loc": {
    "y": 29.857511,
    "x": 82.148347
  },
  "pop": 1274,
  "state": "FL"
},{
  "city": "LAKE CITY",
  "zip": "32055",
  "loc": {
    "y": 30.165239,
    "x": 82.659888
  },
  "pop": 38018,
  "state": "FL"
},{
  "city": "MAYO",
  "zip": "32066",
  "loc": {
    "y": 30.039979,
    "x": 83.146208
  },
  "pop": 3475,
  "state": "FL"
},{
  "city": "TALLAHASSEE",
  "zip": "32306",
  "loc": {
    "y": 30.442152,
    "x": 84.295594
  },
  "pop": 1690,
  "state": "FL"
},{
  "city": "TALLAHASSEE",
  "zip": "32310",
  "loc": {
    "y": 30.399125,
    "x": 84.3298
  },
  "pop": 30379,
  "state": "FL"
},{
  "city": "TWAIN",
  "zip": "95984",
  "loc": {
    "y": 40.002769,
    "x": 121.150729
  },
  "pop": 211,
  "state": "CA"
},{
  "city": "CANBY",
  "zip": "96015",
  "loc": {
    "y": 41.466358,
    "x": 120.921769
  },
  "pop": 424,
  "state": "CA"
},{
  "city": "KLAMATH RIVER",
  "zip": "96050",
  "loc": {
    "y": 41.863699,
    "x": 122.819693
  },
  "pop": 174,
  "state": "CA"
},{
  "city": "RAVENDALE",
  "zip": "96123",
  "loc": {
    "y": 40.831705,
    "x": 120.16001
  },
  "pop": 89,
  "state": "CA"
},{
  "city": "TULELAKE",
  "zip": "96134",
  "loc": {
    "y": 41.931621,
    "x": 121.434688
  },
  "pop": 2613,
  "state": "CA"
},{
  "city": "AURORA",
  "zip": "80015",
  "loc": {
    "y": 39.62552,
    "x": 104.787438
  },
  "pop": 28161,
  "state": "CO"
},{
  "city": "LITTLETON",
  "zip": "80120",
  "loc": {
    "y": 39.599426,
    "x": 105.0044
  },
  "pop": 24992,
  "state": "CO"
},{
  "city": "LITTLETON",
  "zip": "80125",
  "loc": {
    "y": 39.484466,
    "x": 105.056098
  },
  "pop": 3230,
  "state": "CO"
},{
  "city": "HIGHLANDS RANCH",
  "zip": "80126",
  "loc": {
    "y": 39.55134,
    "x": 104.963751
  },
  "pop": 13649,
  "state": "CO"
},{
  "city": "GLENDALE",
  "zip": "80222",
  "loc": {
    "y": 39.682803,
    "x": 104.927992
  },
  "pop": 28373,
  "state": "CO"
},{
  "city": "BAILEY",
  "zip": "80421",
  "loc": {
    "y": 39.448233,
    "x": 105.469282
  },
  "pop": 4448,
  "state": "CO"
},{
  "city": "NEDERLAND",
  "zip": "80466",
  "loc": {
    "y": 39.970259,
    "x": 105.481265
  },
  "pop": 2621,
  "state": "CO"
},{
  "city": "ALLENSPARK",
  "zip": "80510",
  "loc": {
    "y": 40.226775,
    "x": 105.520064
  },
  "pop": 183,
  "state": "CO"
},{
  "city": "LONGMONT",
  "zip": "80504",
  "loc": {
    "y": 40.130615,
    "x": 104.950446
  },
  "pop": 3716,
  "state": "CO"
},{
  "city": "DRAKE",
  "zip": "80515",
  "loc": {
    "y": 40.443257,
    "x": 105.296925
  },
  "pop": 721,
  "state": "CO"
},{
  "city": "BRIGGSDALE",
  "zip": "80611",
  "loc": {
    "y": 40.639192,
    "x": 104.28707
  },
  "pop": 259,
  "state": "CO"
},{
  "city": "ORCHARD",
  "zip": "80649",
  "loc": {
    "y": 40.363946,
    "x": 104.097325
  },
  "pop": 277,
  "state": "CO"
},{
  "city": "EATON",
  "zip": "80615",
  "loc": {
    "y": 40.527272,
    "x": 104.714559
  },
  "pop": 2902,
  "state": "CO"
},{
  "city": "GROVER",
  "zip": "80729",
  "loc": {
    "y": 40.871635,
    "x": 104.234613
  },
  "pop": 492,
  "state": "CO"
},{
  "city": "HILLROSE",
  "zip": "80733",
  "loc": {
    "y": 40.307186,
    "x": 103.541816
  },
  "pop": 516,
  "state": "CO"
},{
  "city": "STERLING",
  "zip": "80751",
  "loc": {
    "y": 40.63062,
    "x": 103.221183
  },
  "pop": 13524,
  "state": "CO"
},{
  "city": "MANITOU SPRINGS",
  "zip": "80829",
  "loc": {
    "y": 38.854994,
    "x": 104.905839
  },
  "pop": 4989,
  "state": "CO"
},{
  "city": "CADDOA",
  "zip": "81044",
  "loc": {
    "y": 38.107347,
    "x": 102.933145
  },
  "pop": 263,
  "state": "CO"
},{
  "city": "HASWELL",
  "zip": "81045",
  "loc": {
    "y": 38.447431,
    "x": 103.150543
  },
  "pop": 109,
  "state": "CO"
},{
  "city": "WALSH",
  "zip": "81090",
  "loc": {
    "y": 37.352057,
    "x": 102.253716
  },
  "pop": 1366,
  "state": "CO"
},{
  "city": "BAYFIELD",
  "zip": "81122",
  "loc": {
    "y": 37.260328,
    "x": 107.613728
  },
  "pop": 3866,
  "state": "CO"
},{
  "city": "PAGOSA SPRINGS",
  "zip": "81147",
  "loc": {
    "y": 37.252345,
    "x": 107.038497
  },
  "pop": 4758,
  "state": "CO"
},{
  "city": "SAN ACACIO",
  "zip": "81150",
  "loc": {
    "y": 37.201347,
    "x": 105.439949
  },
  "pop": 1146,
  "state": "CO"
},{
  "city": "GRANITE",
  "zip": "81228",
  "loc": {
    "y": 39.095294,
    "x": 106.311417
  },
  "pop": 79,
  "state": "CO"
},{
  "city": "CEDAREDGE",
  "zip": "81413",
  "loc": {
    "y": 38.911878,
    "x": 107.926786
  },
  "pop": 3254,
  "state": "CO"
},{
  "city": "NATURITA",
  "zip": "81422",
  "loc": {
    "y": 38.222559,
    "x": 108.572836
  },
  "pop": 554,
  "state": "CO"
},{
  "city": "RIDGWAY",
  "zip": "81432",
  "loc": {
    "y": 38.138074,
    "x": 107.753341
  },
  "pop": 1299,
  "state": "CO"
},{
  "city": "GATEWAY",
  "zip": "81522",
  "loc": {
    "y": 38.915136,
    "x": 108.791344
  },
  "pop": 752,
  "state": "CO"
},{
  "city": "MEEKER",
  "zip": "81641",
  "loc": {
    "y": 40.038726,
    "x": 107.892498
  },
  "pop": 3094,
  "state": "CO"
},{
  "city": "FARMINGTON",
  "zip": "06032",
  "loc": {
    "y": 41.72839,
    "x": 72.841476
  },
  "pop": 14953,
  "state": "CT"
},{
  "city": "PLAINVILLE",
  "zip": "06062",
  "loc": {
    "y": 41.672653,
    "x": 72.864373
  },
  "pop": 17320,
  "state": "CT"
},{
  "city": "GRANBY",
  "zip": "06035",
  "loc": {
    "y": 41.960227,
    "x": 72.799377
  },
  "pop": 6939,
  "state": "CT"
},{
  "city": "WINDSOR LOCKS",
  "zip": "06096",
  "loc": {
    "y": 41.926078,
    "x": 72.645762
  },
  "pop": 12358,
  "state": "CT"
},{
  "city": "WETHERSFIELD",
  "zip": "06109",
  "loc": {
    "y": 41.701332,
    "x": 72.676308
  },
  "pop": 25583,
  "state": "CT"
},{
  "city": "EAST HARTFORD",
  "zip": "06108",
  "loc": {
    "y": 41.780291,
    "x": 72.618014
  },
  "pop": 23698,
  "state": "CT"
},{
  "city": "W HARTFORD",
  "zip": "06117",
  "loc": {
    "y": 41.790021,
    "x": 72.745689
  },
  "pop": 14774,
  "state": "CT"
},{
  "city": "SOUTH WINDHAM",
  "zip": "06266",
  "loc": {
    "y": 41.667724,
    "x": 72.168112
  },
  "pop": 372,
  "state": "CT"
},{
  "city": "EAST LYME",
  "zip": "06333",
  "loc": {
    "y": 41.366806,
    "x": 72.232987
  },
  "pop": 6095,
  "state": "CT"
},{
  "city": "TAFTVILLE",
  "zip": "06380",
  "loc": {
    "y": 41.565263,
    "x": 72.052877
  },
  "pop": 2538,
  "state": "CT"
},{
  "city": "STERLING",
  "zip": "06377",
  "loc": {
    "y": 41.715629,
    "x": 71.819588
  },
  "pop": 2324,
  "state": "CT"
},{
  "city": "MIDDLEFIELD",
  "zip": "06455",
  "loc": {
    "y": 41.516789,
    "x": 72.718624
  },
  "pop": 2515,
  "state": "CT"
},{
  "city": "MIDDLETOWN",
  "zip": "06457",
  "loc": {
    "y": 41.556895,
    "x": 72.665225
  },
  "pop": 42846,
  "state": "CT"
},{
  "city": "ESSEX",
  "zip": "06426",
  "loc": {
    "y": 41.354944,
    "x": 72.396504
  },
  "pop": 2710,
  "state": "CT"
},{
  "city": "NORTH BRANFORD",
  "zip": "06471",
  "loc": {
    "y": 41.327985,
    "x": 72.776034
  },
  "pop": 6767,
  "state": "CT"
},{
  "city": "HAMDEN",
  "zip": "06517",
  "loc": {
    "y": 41.348393,
    "x": 72.911678
  },
  "pop": 14604,
  "state": "CT"
},{
  "city": "WATERBURY",
  "zip": "06702",
  "loc": {
    "y": 41.556568,
    "x": 73.038545
  },
  "pop": 4522,
  "state": "CT"
},{
  "city": "KENT",
  "zip": "06757",
  "loc": {
    "y": 41.731619,
    "x": 73.458345
  },
  "pop": 2035,
  "state": "CT"
},{
  "city": "MIDDLEBURY",
  "zip": "06762",
  "loc": {
    "y": 41.534277,
    "x": 73.11307
  },
  "pop": 6338,
  "state": "CT"
},{
  "city": "NEW PRESTON MARB",
  "zip": "06777",
  "loc": {
    "y": 41.689373,
    "x": 73.349296
  },
  "pop": 1697,
  "state": "CT"
},{
  "city": "SHERMAN",
  "zip": "06784",
  "loc": {
    "y": 41.571366,
    "x": 73.494694
  },
  "pop": 2808,
  "state": "CT"
},{
  "city": "NORWALK",
  "zip": "06855",
  "loc": {
    "y": 41.101382,
    "x": 73.401119
  },
  "pop": 7311,
  "state": "CT"
},{
  "city": "MILTON",
  "zip": "19968",
  "loc": {
    "y": 38.768687,
    "x": 75.295298
  },
  "pop": 4656,
  "state": "DE"
},{
  "city": "MAGNOLIA",
  "zip": "19962",
  "loc": {
    "y": 39.07353,
    "x": 75.508321
  },
  "pop": 4567,
  "state": "DE"
},{
  "city": "SMYRNA",
  "zip": "19977",
  "loc": {
    "y": 39.293379,
    "x": 75.600832
  },
  "pop": 14164,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20024",
  "loc": {
    "y": 38.875939,
    "x": 77.016028
  },
  "pop": 11562,
  "state": "DC"
},{
  "city": "LAWTEY",
  "zip": "32058",
  "loc": {
    "y": 30.047164,
    "x": 82.105544
  },
  "pop": 4108,
  "state": "FL"
},{
  "city": "HILLIARD",
  "zip": "32046",
  "loc": {
    "y": 30.688367,
    "x": 81.93453
  },
  "pop": 6486,
  "state": "FL"
},{
  "city": "SAINT AUGUSTINE",
  "zip": "32092",
  "loc": {
    "y": 29.947511,
    "x": 81.526379
  },
  "pop": 4702,
  "state": "FL"
},{
  "city": "DAYTONA BEACH",
  "zip": "32118",
  "loc": {
    "y": 29.221874,
    "x": 81.009469
  },
  "pop": 17009,
  "state": "FL"
},{
  "city": "MERIDIAN",
  "zip": "95957",
  "loc": {
    "y": 39.116812,
    "x": 121.88138
  },
  "pop": 907,
  "state": "CA"
},{
  "city": "GEORGETOWN",
  "zip": "32139",
  "loc": {
    "y": 29.403315,
    "x": 81.629783
  },
  "pop": 1839,
  "state": "FL"
},{
  "city": "EDGEWATER",
  "zip": "32141",
  "loc": {
    "y": 28.945481,
    "x": 80.896869
  },
  "pop": 11379,
  "state": "FL"
},{
  "city": "INTERLACHEN",
  "zip": "32148",
  "loc": {
    "y": 29.627001,
    "x": 81.889432
  },
  "pop": 15416,
  "state": "FL"
},{
  "city": "PORT ORANGE",
  "zip": "32124",
  "loc": {
    "y": 29.122456,
    "x": 81.106746
  },
  "pop": 7360,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32206",
  "loc": {
    "y": 30.351073,
    "x": 81.648769
  },
  "pop": 23301,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32218",
  "loc": {
    "y": 30.45067,
    "x": 81.662631
  },
  "pop": 30493,
  "state": "FL"
},{
  "city": "TALLAHASSEE",
  "zip": "32311",
  "loc": {
    "y": 30.415625,
    "x": 84.186995
  },
  "pop": 17005,
  "state": "FL"
},{
  "city": "COTTONWOOD",
  "zip": "96022",
  "loc": {
    "y": 40.369072,
    "x": 122.337463
  },
  "pop": 9579,
  "state": "CA"
},{
  "city": "HAPPY CAMP",
  "zip": "96039",
  "loc": {
    "y": 41.801802,
    "x": 123.388045
  },
  "pop": 1885,
  "state": "CA"
},{
  "city": "HAYFORK",
  "zip": "96041",
  "loc": {
    "y": 40.550431,
    "x": 123.163416
  },
  "pop": 2671,
  "state": "CA"
},{
  "city": "MOUNT SHASTA",
  "zip": "96067",
  "loc": {
    "y": 41.317435,
    "x": 122.324017
  },
  "pop": 6719,
  "state": "CA"
},{
  "city": "WILDWOOD",
  "zip": "96076",
  "loc": {
    "y": 40.316528,
    "x": 122.918013
  },
  "pop": 119,
  "state": "CA"
},{
  "city": "HOPE VALLEY",
  "zip": "96120",
  "loc": {
    "y": 38.76473,
    "x": 119.807275
  },
  "pop": 850,
  "state": "CA"
},{
  "city": "HOMEWOOD",
  "zip": "96141",
  "loc": {
    "y": 39.078157,
    "x": 120.179035
  },
  "pop": 283,
  "state": "CA"
},{
  "city": "ARVADA",
  "zip": "80002",
  "loc": {
    "y": 39.794533,
    "x": 105.098402
  },
  "pop": 12065,
  "state": "CO"
},{
  "city": "AURORA",
  "zip": "80012",
  "loc": {
    "y": 39.698672,
    "x": 104.837693
  },
  "pop": 37711,
  "state": "CO"
},{
  "city": "ELBERT",
  "zip": "80106",
  "loc": {
    "y": 39.096892,
    "x": 104.574631
  },
  "pop": 1808,
  "state": "CO"
},{
  "city": "KIOWA",
  "zip": "80117",
  "loc": {
    "y": 39.323972,
    "x": 104.452263
  },
  "pop": 680,
  "state": "CO"
},{
  "city": "LITTLETON",
  "zip": "80122",
  "loc": {
    "y": 39.581418,
    "x": 104.955673
  },
  "pop": 31135,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80210",
  "loc": {
    "y": 39.679003,
    "x": 104.963124
  },
  "pop": 30868,
  "state": "CO"
},{
  "city": "NORTHGLENN",
  "zip": "80234",
  "loc": {
    "y": 39.905479,
    "x": 105.004474
  },
  "pop": 13350,
  "state": "CO"
},{
  "city": "CONIFER",
  "zip": "80433",
  "loc": {
    "y": 39.519735,
    "x": 105.316873
  },
  "pop": 5919,
  "state": "CO"
},{
  "city": "LOVELAND",
  "zip": "80537",
  "loc": {
    "y": 40.384917,
    "x": 105.09164
  },
  "pop": 24502,
  "state": "CO"
},{
  "city": "WINDSOR",
  "zip": "80550",
  "loc": {
    "y": 40.483663,
    "x": 104.899442
  },
  "pop": 6724,
  "state": "CO"
},{
  "city": "EVANS",
  "zip": "80620",
  "loc": {
    "y": 40.380255,
    "x": 104.697095
  },
  "pop": 6262,
  "state": "CO"
},{
  "city": "CARR",
  "zip": "80612",
  "loc": {
    "y": 40.866551,
    "x": 104.885865
  },
  "pop": 94,
  "state": "CO"
},{
  "city": "PLATTEVILLE",
  "zip": "80651",
  "loc": {
    "y": 40.213121,
    "x": 104.802776
  },
  "pop": 2577,
  "state": "CO"
},{
  "city": "NEW RAYMER",
  "zip": "80742",
  "loc": {
    "y": 40.685079,
    "x": 103.838982
  },
  "pop": 310,
  "state": "CO"
},{
  "city": "DIVIDE",
  "zip": "80814",
  "loc": {
    "y": 38.957622,
    "x": 105.19937
  },
  "pop": 1675,
  "state": "CO"
},{
  "city": "FOUNTAIN",
  "zip": "80817",
  "loc": {
    "y": 38.699563,
    "x": 104.700469
  },
  "pop": 11570,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80918",
  "loc": {
    "y": 38.912924,
    "x": 104.773444
  },
  "pop": 36410,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80919",
  "loc": {
    "y": 38.926795,
    "x": 104.84642
  },
  "pop": 17468,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80929",
  "loc": {
    "y": 38.796837,
    "x": 104.607857
  },
  "pop": 197,
  "state": "CO"
},{
  "city": "FARISITA",
  "zip": "81040",
  "loc": {
    "y": 37.763753,
    "x": 105.237397
  },
  "pop": 428,
  "state": "CO"
},{
  "city": "PUEBLO",
  "zip": "81006",
  "loc": {
    "y": 38.24465,
    "x": 104.531834
  },
  "pop": 12277,
  "state": "CO"
},{
  "city": "DEORA",
  "zip": "81054",
  "loc": {
    "y": 38.065514,
    "x": 103.208492
  },
  "pop": 4217,
  "state": "CO"
},{
  "city": "BLANCA",
  "zip": "81123",
  "loc": {
    "y": 37.431702,
    "x": 105.517784
  },
  "pop": 429,
  "state": "CO"
},{
  "city": "LA GARITA",
  "zip": "81132",
  "loc": {
    "y": 37.671346,
    "x": 106.350502
  },
  "pop": 2791,
  "state": "CO"
},{
  "city": "SAGUACHE",
  "zip": "81149",
  "loc": {
    "y": 38.09775,
    "x": 106.187592
  },
  "pop": 895,
  "state": "CO"
},{
  "city": "CANON CITY",
  "zip": "81212",
  "loc": {
    "y": 38.445074,
    "x": 105.217829
  },
  "pop": 23049,
  "state": "CO"
},{
  "city": "PENROSE",
  "zip": "81240",
  "loc": {
    "y": 38.433622,
    "x": 105.011325
  },
  "pop": 3166,
  "state": "CO"
},{
  "city": "CAHONE",
  "zip": "81320",
  "loc": {
    "y": 37.69163,
    "x": 108.579442
  },
  "pop": 384,
  "state": "CO"
},{
  "city": "AUSTIN",
  "zip": "81410",
  "loc": {
    "y": 38.797544,
    "x": 107.97384
  },
  "pop": 1258,
  "state": "CO"
},{
  "city": "HOTCHKISS",
  "zip": "81419",
  "loc": {
    "y": 38.812417,
    "x": 107.747173
  },
  "pop": 2735,
  "state": "CO"
},{
  "city": "NORWOOD",
  "zip": "81423",
  "loc": {
    "y": 38.110406,
    "x": 108.284472
  },
  "pop": 1079,
  "state": "CO"
},{
  "city": "BEDROCK",
  "zip": "81411",
  "loc": {
    "y": 38.384352,
    "x": 108.953224
  },
  "pop": 191,
  "state": "CO"
},{
  "city": "PLACERVILLE",
  "zip": "81430",
  "loc": {
    "y": 38.008759,
    "x": 108.024775
  },
  "pop": 467,
  "state": "CO"
},{
  "city": "DINOSAUR",
  "zip": "81610",
  "loc": {
    "y": 40.256609,
    "x": 108.965184
  },
  "pop": 498,
  "state": "CO"
},{
  "city": "BASALT",
  "zip": "81621",
  "loc": {
    "y": 39.353466,
    "x": 106.998752
  },
  "pop": 3248,
  "state": "CO"
},{
  "city": "EAGLE",
  "zip": "81631",
  "loc": {
    "y": 39.634138,
    "x": 106.75884
  },
  "pop": 3368,
  "state": "CO"
},{
  "city": "AVON",
  "zip": "06001",
  "loc": {
    "y": 41.790498,
    "x": 72.865323
  },
  "pop": 13988,
  "state": "CT"
},{
  "city": "CANTON",
  "zip": "06019",
  "loc": {
    "y": 41.838401,
    "x": 72.898731
  },
  "pop": 4125,
  "state": "CT"
},{
  "city": "EAST BERLIN",
  "zip": "06023",
  "loc": {
    "y": 41.61277,
    "x": 72.719007
  },
  "pop": 1021,
  "state": "CT"
},{
  "city": "MANCHESTER",
  "zip": "06040",
  "loc": {
    "y": 41.777732,
    "x": 72.52444
  },
  "pop": 51618,
  "state": "CT"
},{
  "city": "HARTFORD",
  "zip": "06103",
  "loc": {
    "y": 41.767196,
    "x": 72.675966
  },
  "pop": 1202,
  "state": "CT"
},{
  "city": "HARTFORD",
  "zip": "06114",
  "loc": {
    "y": 41.740293,
    "x": 72.680726
  },
  "pop": 23302,
  "state": "CT"
},{
  "city": "WILLIMANTIC",
  "zip": "06226",
  "loc": {
    "y": 41.714918,
    "x": 72.213396
  },
  "pop": 16023,
  "state": "CT"
},{
  "city": "HAMPTON",
  "zip": "06247",
  "loc": {
    "y": 41.761668,
    "x": 72.067979
  },
  "pop": 2139,
  "state": "CT"
},{
  "city": "WOODSTOCK",
  "zip": "06281",
  "loc": {
    "y": 41.960218,
    "x": 72.004027
  },
  "pop": 5698,
  "state": "CT"
},{
  "city": "WINSTED",
  "zip": "06098",
  "loc": {
    "y": 41.925214,
    "x": 73.066341
  },
  "pop": 14584,
  "state": "CT"
},{
  "city": "BALTIC",
  "zip": "06330",
  "loc": {
    "y": 41.62629,
    "x": 72.077499
  },
  "pop": 3188,
  "state": "CT"
},{
  "city": "JEWETT CITY",
  "zip": "06351",
  "loc": {
    "y": 41.605182,
    "x": 71.980759
  },
  "pop": 11674,
  "state": "CT"
},{
  "city": "FAIRFIELD",
  "zip": "06432",
  "loc": {
    "y": 41.201651,
    "x": 73.235408
  },
  "pop": 8634,
  "state": "CT"
},{
  "city": "HAMDEN",
  "zip": "06514",
  "loc": {
    "y": 41.361987,
    "x": 72.93613
  },
  "pop": 23883,
  "state": "CT"
},{
  "city": "BRIDGEPORT",
  "zip": "06604",
  "loc": {
    "y": 41.179574,
    "x": 73.201859
  },
  "pop": 28219,
  "state": "CT"
},{
  "city": "WATERBURY",
  "zip": "06705",
  "loc": {
    "y": 41.550328,
    "x": 72.996268
  },
  "pop": 25128,
  "state": "CT"
},{
  "city": "WATERBURY",
  "zip": "06710",
  "loc": {
    "y": 41.567503,
    "x": 73.046821
  },
  "pop": 9921,
  "state": "CT"
},{
  "city": "GAYLORDSVILLE",
  "zip": "06755",
  "loc": {
    "y": 41.648635,
    "x": 73.483524
  },
  "pop": 890,
  "state": "CT"
},{
  "city": "PLYMOUTH",
  "zip": "06782",
  "loc": {
    "y": 41.661121,
    "x": 73.044887
  },
  "pop": 2910,
  "state": "CT"
},{
  "city": "FREDERICA",
  "zip": "19946",
  "loc": {
    "y": 39.034188,
    "x": 75.454458
  },
  "pop": 2725,
  "state": "DE"
},{
  "city": "HARTLY",
  "zip": "19953",
  "loc": {
    "y": 39.15421,
    "x": 75.693476
  },
  "pop": 3558,
  "state": "DE"
},{
  "city": "WILMINGTON",
  "zip": "19805",
  "loc": {
    "y": 39.743375,
    "x": 75.582724
  },
  "pop": 40087,
  "state": "DE"
},{
  "city": "GEORGETOWN",
  "zip": "19947",
  "loc": {
    "y": 38.679006,
    "x": 75.393198
  },
  "pop": 11371,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20003",
  "loc": {
    "y": 38.882941,
    "x": 76.989539
  },
  "pop": 24818,
  "state": "DC"
},{
  "city": "MACCLENNY",
  "zip": "32063",
  "loc": {
    "y": 30.273671,
    "x": 82.132475
  },
  "pop": 9749,
  "state": "FL"
},{
  "city": "PONTE VEDRA BEAC",
  "zip": "32082",
  "loc": {
    "y": 30.215326,
    "x": 81.386383
  },
  "pop": 14727,
  "state": "FL"
},{
  "city": "EAST PALATKA",
  "zip": "32131",
  "loc": {
    "y": 29.660861,
    "x": 81.587879
  },
  "pop": 5851,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32209",
  "loc": {
    "y": 30.35841,
    "x": 81.691974
  },
  "pop": 42856,
  "state": "FL"
},{
  "city": "ELKTON",
  "zip": "32033",
  "loc": {
    "y": 29.788243,
    "x": 81.46199
  },
  "pop": 1557,
  "state": "FL"
},{
  "city": "WHITE SPRINGS",
  "zip": "32096",
  "loc": {
    "y": 30.338749,
    "x": 82.776453
  },
  "pop": 1671,
  "state": "FL"
},{
  "city": "EDGEWATER",
  "zip": "32132",
  "loc": {
    "y": 28.981801,
    "x": 80.910344
  },
  "pop": 6690,
  "state": "FL"
},{
  "city": "FLAGLER BEACH",
  "zip": "32136",
  "loc": {
    "y": 29.474978,
    "x": 81.130288
  },
  "pop": 4608,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32205",
  "loc": {
    "y": 30.317236,
    "x": 81.722034
  },
  "pop": 46463,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32222",
  "loc": {
    "y": 30.229176,
    "x": 81.813081
  },
  "pop": 4093,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32259",
  "loc": {
    "y": 30.095578,
    "x": 81.621701
  },
  "pop": 6677,
  "state": "FL"
},{
  "city": "TALLAHASSEE",
  "zip": "32303",
  "loc": {
    "y": 30.487433,
    "x": 84.318946
  },
  "pop": 36053,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32226",
  "loc": {
    "y": 30.473485,
    "x": 81.544808
  },
  "pop": 6880,
  "state": "FL"
},{
  "city": "DUNSMUIR",
  "zip": "96025",
  "loc": {
    "y": 41.212439,
    "x": 122.273397
  },
  "pop": 2683,
  "state": "CA"
},{
  "city": "TRINITY CENTER",
  "zip": "96091",
  "loc": {
    "y": 41.061548,
    "x": 122.723919
  },
  "pop": 362,
  "state": "CA"
},{
  "city": "MILFORD",
  "zip": "96121",
  "loc": {
    "y": 40.182763,
    "x": 120.389508
  },
  "pop": 376,
  "state": "CA"
},{
  "city": "FLORISTON",
  "zip": "96111",
  "loc": {
    "y": 39.445746,
    "x": 120.025421
  },
  "pop": 169,
  "state": "CA"
},{
  "city": "VINTON",
  "zip": "96135",
  "loc": {
    "y": 39.720719,
    "x": 120.204994
  },
  "pop": 0,
  "state": "CA"
},{
  "city": "CASTLE ROCK",
  "zip": "80104",
  "loc": {
    "y": 39.39256,
    "x": 104.860187
  },
  "pop": 11763,
  "state": "CO"
},{
  "city": "LAKEWOOD",
  "zip": "80228",
  "loc": {
    "y": 39.696898,
    "x": 105.143009
  },
  "pop": 25008,
  "state": "CO"
},{
  "city": "LAKEWOOD",
  "zip": "80232",
  "loc": {
    "y": 39.697282,
    "x": 105.094524
  },
  "pop": 35087,
  "state": "CO"
},{
  "city": "NORTHGLENN",
  "zip": "80241",
  "loc": {
    "y": 39.927792,
    "x": 104.941809
  },
  "pop": 10108,
  "state": "CO"
},{
  "city": "AKRON",
  "zip": "80720",
  "loc": {
    "y": 40.180315,
    "x": 103.225885
  },
  "pop": 2559,
  "state": "CO"
},{
  "city": "PADRONI",
  "zip": "80745",
  "loc": {
    "y": 40.954911,
    "x": 103.358163
  },
  "pop": 72,
  "state": "CO"
},{
  "city": "SEDGWICK",
  "zip": "80749",
  "loc": {
    "y": 40.910317,
    "x": 102.529122
  },
  "pop": 415,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80925",
  "loc": {
    "y": 38.731329,
    "x": 104.660087
  },
  "pop": 2550,
  "state": "CO"
},{
  "city": "CHEYENNE MTN AFB",
  "zip": "80914",
  "loc": {
    "y": 38.784241,
    "x": 104.719052
  },
  "pop": 0,
  "state": "CO"
},{
  "city": "ARLINGTON",
  "zip": "81021",
  "loc": {
    "y": 38.40677,
    "x": 103.369741
  },
  "pop": 28,
  "state": "CO"
},{
  "city": "HARTMAN",
  "zip": "81043",
  "loc": {
    "y": 38.145291,
    "x": 102.186609
  },
  "pop": 256,
  "state": "CO"
},{
  "city": "ORDWAY",
  "zip": "81063",
  "loc": {
    "y": 38.209546,
    "x": 103.800277
  },
  "pop": 2692,
  "state": "CO"
},{
  "city": "HOLLY",
  "zip": "81047",
  "loc": {
    "y": 38.0205,
    "x": 102.141466
  },
  "pop": 1480,
  "state": "CO"
},{
  "city": "JANSEN",
  "zip": "81082",
  "loc": {
    "y": 37.175475,
    "x": 104.500715
  },
  "pop": 10978,
  "state": "CO"
},{
  "city": "LAMAR",
  "zip": "81052",
  "loc": {
    "y": 38.084136,
    "x": 102.619195
  },
  "pop": 9903,
  "state": "CO"
},{
  "city": "WILEY",
  "zip": "81092",
  "loc": {
    "y": 38.158978,
    "x": 102.714734
  },
  "pop": 711,
  "state": "CO"
},{
  "city": "IGNACIO",
  "zip": "81137",
  "loc": {
    "y": 37.126412,
    "x": 107.639465
  },
  "pop": 3494,
  "state": "CO"
},{
  "city": "SANFORD",
  "zip": "81151",
  "loc": {
    "y": 37.208724,
    "x": 105.928588
  },
  "pop": 3037,
  "state": "CO"
},{
  "city": "BUENA VISTA",
  "zip": "81211",
  "loc": {
    "y": 38.838003,
    "x": 106.147121
  },
  "pop": 5220,
  "state": "CO"
},{
  "city": "HESPERUS",
  "zip": "81326",
  "loc": {
    "y": 37.165368,
    "x": 108.121917
  },
  "pop": 1303,
  "state": "CO"
},{
  "city": "PAONIA",
  "zip": "81428",
  "loc": {
    "y": 38.864978,
    "x": 107.598483
  },
  "pop": 3314,
  "state": "CO"
},{
  "city": "OLATHE",
  "zip": "81425",
  "loc": {
    "y": 38.597575,
    "x": 107.992118
  },
  "pop": 4246,
  "state": "CO"
},{
  "city": "CLIFTON",
  "zip": "81520",
  "loc": {
    "y": 39.0805,
    "x": 108.449628
  },
  "pop": 8408,
  "state": "CO"
},{
  "city": "HAMILTON",
  "zip": "81638",
  "loc": {
    "y": 40.32504,
    "x": 107.584089
  },
  "pop": 191,
  "state": "CO"
},{
  "city": "SNOWMASS",
  "zip": "81654",
  "loc": {
    "y": 39.250059,
    "x": 106.950839
  },
  "pop": 2627,
  "state": "CO"
},{
  "city": "BERLIN",
  "zip": "06037",
  "loc": {
    "y": 41.620826,
    "x": 72.770482
  },
  "pop": 15755,
  "state": "CT"
},{
  "city": "MAPLE HILL",
  "zip": "06111",
  "loc": {
    "y": 41.686402,
    "x": 72.729747
  },
  "pop": 29192,
  "state": "CT"
},{
  "city": "W HARTFORD",
  "zip": "06119",
  "loc": {
    "y": 41.762765,
    "x": 72.726799
  },
  "pop": 15066,
  "state": "CT"
},{
  "city": "HEBRON",
  "zip": "06248",
  "loc": {
    "y": 41.684161,
    "x": 72.398553
  },
  "pop": 4192,
  "state": "CT"
},{
  "city": "QUAKER HILL",
  "zip": "06375",
  "loc": {
    "y": 41.40324,
    "x": 72.11722
  },
  "pop": 2886,
  "state": "CT"
},{
  "city": "CENTERBROOK",
  "zip": "06409",
  "loc": {
    "y": 41.34743,
    "x": 72.41731
  },
  "pop": 483,
  "state": "CT"
},{
  "city": "MADISON",
  "zip": "06443",
  "loc": {
    "y": 41.309019,
    "x": 72.615254
  },
  "pop": 15488,
  "state": "CT"
},{
  "city": "SEYMOUR",
  "zip": "06483",
  "loc": {
    "y": 41.386209,
    "x": 73.081745
  },
  "pop": 13660,
  "state": "CT"
},{
  "city": "WEST HAVEN",
  "zip": "06516",
  "loc": {
    "y": 41.270079,
    "x": 72.963842
  },
  "pop": 53642,
  "state": "CT"
},{
  "city": "MORRIS",
  "zip": "06763",
  "loc": {
    "y": 41.688121,
    "x": 73.176509
  },
  "pop": 849,
  "state": "CT"
},{
  "city": "GREENWICH",
  "zip": "06831",
  "loc": {
    "y": 41.054885,
    "x": 73.659405
  },
  "pop": 14545,
  "state": "CT"
},{
  "city": "OLD GREENWICH",
  "zip": "06870",
  "loc": {
    "y": 41.035437,
    "x": 73.567253
  },
  "pop": 6511,
  "state": "CT"
},{
  "city": "CLAYMONT",
  "zip": "19703",
  "loc": {
    "y": 39.804432,
    "x": 75.46494
  },
  "pop": 16699,
  "state": "DE"
},{
  "city": "ELLENDALE",
  "zip": "19941",
  "loc": {
    "y": 38.805737,
    "x": 75.405588
  },
  "pop": 2445,
  "state": "DE"
},{
  "city": "DEWEY BEACH",
  "zip": "19971",
  "loc": {
    "y": 38.714715,
    "x": 75.107346
  },
  "pop": 6249,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20018",
  "loc": {
    "y": 38.927724,
    "x": 76.976159
  },
  "pop": 18298,
  "state": "DC"
},{
  "city": "ORANGE PARK",
  "zip": "32073",
  "loc": {
    "y": 30.16369,
    "x": 81.72907
  },
  "pop": 37281,
  "state": "FL"
},{
  "city": "GREEN COVE SPRIN",
  "zip": "32043",
  "loc": {
    "y": 30.00425,
    "x": 81.726182
  },
  "pop": 16033,
  "state": "FL"
},{
  "city": "MIDDLEBURG",
  "zip": "32068",
  "loc": {
    "y": 30.083984,
    "x": 81.864476
  },
  "pop": 23245,
  "state": "FL"
},{
  "city": "PALATKA",
  "zip": "32177",
  "loc": {
    "y": 29.657748,
    "x": 81.659452
  },
  "pop": 24263,
  "state": "FL"
},{
  "city": "CECIL FIELD NAS",
  "zip": "32215",
  "loc": {
    "y": 30.23295,
    "x": 81.663142
  },
  "pop": 0,
  "state": "FL"
},{
  "city": "TALLAHASSEE",
  "zip": "32312",
  "loc": {
    "y": 30.518474,
    "x": 84.262708
  },
  "pop": 17743,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32208",
  "loc": {
    "y": 30.393664,
    "x": 81.688939
  },
  "pop": 35615,
  "state": "FL"
},{
  "city": "TALLAHASSEE",
  "zip": "32301",
  "loc": {
    "y": 30.428563,
    "x": 84.259337
  },
  "pop": 21329,
  "state": "FL"
},{
  "city": "APALACHICOLA",
  "zip": "32320",
  "loc": {
    "y": 29.725465,
    "x": 85.006264
  },
  "pop": 3859,
  "state": "FL"
},{
  "city": "SUTTER",
  "zip": "95982",
  "loc": {
    "y": 39.168114,
    "x": 121.756527
  },
  "pop": 3090,
  "state": "CA"
},{
  "city": "BUTTE MEADOWS",
  "zip": "95942",
  "loc": {
    "y": 40.129931,
    "x": 121.500205
  },
  "pop": 91,
  "state": "CA"
},{
  "city": "RACKERBY",
  "zip": "95972",
  "loc": {
    "y": 39.4059,
    "x": 121.336192
  },
  "pop": 260,
  "state": "CA"
},{
  "city": "BELLA VISTA",
  "zip": "96008",
  "loc": {
    "y": 40.740945,
    "x": 122.07245
  },
  "pop": 1218,
  "state": "CA"
},{
  "city": "CALLAHAN",
  "zip": "96014",
  "loc": {
    "y": 41.383257,
    "x": 122.764046
  },
  "pop": 196,
  "state": "CA"
},{
  "city": "GAZELLE",
  "zip": "96034",
  "loc": {
    "y": 41.510485,
    "x": 122.537122
  },
  "pop": 162,
  "state": "CA"
},{
  "city": "MCCLOUD",
  "zip": "96057",
  "loc": {
    "y": 41.252108,
    "x": 122.13562
  },
  "pop": 1743,
  "state": "CA"
},{
  "city": "MONTAGUE",
  "zip": "96064",
  "loc": {
    "y": 41.724294,
    "x": 122.463799
  },
  "pop": 4246,
  "state": "CA"
},{
  "city": "PALO CEDRO",
  "zip": "96073",
  "loc": {
    "y": 40.576661,
    "x": 122.239805
  },
  "pop": 3905,
  "state": "CA"
},{
  "city": "SCOTT BAR",
  "zip": "96085",
  "loc": {
    "y": 41.77364,
    "x": 122.988183
  },
  "pop": 21,
  "state": "CA"
},{
  "city": "RED BLUFF",
  "zip": "96080",
  "loc": {
    "y": 40.179535,
    "x": 122.238281
  },
  "pop": 25180,
  "state": "CA"
},{
  "city": "CHILCOOT",
  "zip": "96105",
  "loc": {
    "y": 39.805683,
    "x": 120.175212
  },
  "pop": 470,
  "state": "CA"
},{
  "city": "TAHOE VISTA",
  "zip": "96148",
  "loc": {
    "y": 39.24475,
    "x": 120.052128
  },
  "pop": 717,
  "state": "CA"
},{
  "city": "TRUCKEE",
  "zip": "96161",
  "loc": {
    "y": 39.338546,
    "x": 120.172942
  },
  "pop": 9544,
  "state": "CA"
},{
  "city": "TRUCKEE",
  "zip": "96162",
  "loc": {
    "y": 39.319321,
    "x": 120.295031
  },
  "pop": 199,
  "state": "CA"
},{
  "city": "PORTOLA",
  "zip": "96122",
  "loc": {
    "y": 39.810883,
    "x": 120.466858
  },
  "pop": 3685,
  "state": "CA"
},{
  "city": "WESTMINSTER",
  "zip": "80030",
  "loc": {
    "y": 39.854238,
    "x": 105.037086
  },
  "pop": 43235,
  "state": "CO"
},{
  "city": "FRANKTOWN",
  "zip": "80116",
  "loc": {
    "y": 39.372841,
    "x": 104.725569
  },
  "pop": 3742,
  "state": "CO"
},{
  "city": "PARKER",
  "zip": "80134",
  "loc": {
    "y": 39.505466,
    "x": 104.734904
  },
  "pop": 19466,
  "state": "CO"
},{
  "city": "FEDERAL HEIGHTS",
  "zip": "80221",
  "loc": {
    "y": 39.840562,
    "x": 105.007985
  },
  "pop": 54069,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80231",
  "loc": {
    "y": 39.679324,
    "x": 104.884326
  },
  "pop": 35985,
  "state": "CO"
},{
  "city": "FAIRPLAY",
  "zip": "80440",
  "loc": {
    "y": 39.225617,
    "x": 105.999416
  },
  "pop": 1030,
  "state": "CO"
},{
  "city": "BELLVUE",
  "zip": "80512",
  "loc": {
    "y": 40.626528,
    "x": 105.260977
  },
  "pop": 1982,
  "state": "CO"
},{
  "city": "FORT COLLINS",
  "zip": "80524",
  "loc": {
    "y": 40.59865,
    "x": 105.05811
  },
  "pop": 21204,
  "state": "CO"
},{
  "city": "FORT COLLINS",
  "zip": "80521",
  "loc": {
    "y": 40.581293,
    "x": 105.103884
  },
  "pop": 30059,
  "state": "CO"
},{
  "city": "LOVELAND",
  "zip": "80538",
  "loc": {
    "y": 40.426239,
    "x": 105.089985
  },
  "pop": 26449,
  "state": "CO"
},{
  "city": "OVID",
  "zip": "80744",
  "loc": {
    "y": 40.945865,
    "x": 102.387396
  },
  "pop": 563,
  "state": "CO"
},{
  "city": "ARAPAHOE",
  "zip": "80802",
  "loc": {
    "y": 38.841716,
    "x": 102.19401
  },
  "pop": 335,
  "state": "CO"
},{
  "city": "FLAGLER",
  "zip": "80815",
  "loc": {
    "y": 39.312654,
    "x": 103.062395
  },
  "pop": 854,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80903",
  "loc": {
    "y": 38.838832,
    "x": 104.814466
  },
  "pop": 13972,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80911",
  "loc": {
    "y": 38.745665,
    "x": 104.722322
  },
  "pop": 22116,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80915",
  "loc": {
    "y": 38.855845,
    "x": 104.713422
  },
  "pop": 18209,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80920",
  "loc": {
    "y": 38.949732,
    "x": 104.766951
  },
  "pop": 16907,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80926",
  "loc": {
    "y": 38.698073,
    "x": 104.85051
  },
  "pop": 1040,
  "state": "CO"
},{
  "city": "PUEBLO WEST",
  "zip": "81007",
  "loc": {
    "y": 38.319975,
    "x": 104.743264
  },
  "pop": 4592,
  "state": "CO"
},{
  "city": "81080",
  "zip": "81080",
  "loc": {
    "y": 38.438391,
    "x": 102.108268
  },
  "pop": 172,
  "state": "CO"
},{
  "city": "ANTONITO",
  "zip": "81120",
  "loc": {
    "y": 37.085473,
    "x": 106.037946
  },
  "pop": 2246,
  "state": "CO"
},{
  "city": "FORT GARLAND",
  "zip": "81133",
  "loc": {
    "y": 37.426978,
    "x": 105.404879
  },
  "pop": 725,
  "state": "CO"
},{
  "city": "LEWIS",
  "zip": "81327",
  "loc": {
    "y": 37.47101,
    "x": 108.61891
  },
  "pop": 1455,
  "state": "CO"
},{
  "city": "CRAWFORD",
  "zip": "81415",
  "loc": {
    "y": 38.69408,
    "x": 107.614864
  },
  "pop": 882,
  "state": "CO"
},{
  "city": "DELTA",
  "zip": "81416",
  "loc": {
    "y": 38.734891,
    "x": 108.060421
  },
  "pop": 8644,
  "state": "CO"
},{
  "city": "GRAND JUNCTION",
  "zip": "81501",
  "loc": {
    "y": 39.078326,
    "x": 108.545692
  },
  "pop": 19665,
  "state": "CO"
},{
  "city": "ASPEN",
  "zip": "81611",
  "loc": {
    "y": 39.195139,
    "x": 106.823593
  },
  "pop": 7431,
  "state": "CO"
},{
  "city": "MAYBELL",
  "zip": "81640",
  "loc": {
    "y": 40.650649,
    "x": 108.272264
  },
  "pop": 351,
  "state": "CO"
},{
  "city": "MESA",
  "zip": "81643",
  "loc": {
    "y": 39.161161,
    "x": 108.104401
  },
  "pop": 741,
  "state": "CO"
},{
  "city": "EAST WINDSOR",
  "zip": "06088",
  "loc": {
    "y": 41.9099,
    "x": 72.602945
  },
  "pop": 4988,
  "state": "CT"
},{
  "city": "WEST SUFFIELD",
  "zip": "06093",
  "loc": {
    "y": 42.011464,
    "x": 72.736232
  },
  "pop": 2912,
  "state": "CT"
},{
  "city": "HARTFORD",
  "zip": "06106",
  "loc": {
    "y": 41.749841,
    "x": 72.694734
  },
  "pop": 47841,
  "state": "CT"
},{
  "city": "EAST HARTFORD",
  "zip": "06118",
  "loc": {
    "y": 41.747211,
    "x": 72.610265
  },
  "pop": 26754,
  "state": "CT"
},{
  "city": "ANDOVER",
  "zip": "06232",
  "loc": {
    "y": 41.733215,
    "x": 72.376719
  },
  "pop": 2546,
  "state": "CT"
},{
  "city": "MANSFIELD CENTER",
  "zip": "06250",
  "loc": {
    "y": 41.769814,
    "x": 72.201112
  },
  "pop": 4306,
  "state": "CT"
},{
  "city": "NORWICH",
  "zip": "06360",
  "loc": {
    "y": 41.537055,
    "x": 72.08494
  },
  "pop": 30145,
  "state": "CT"
},{
  "city": "OAKDALE",
  "zip": "06370",
  "loc": {
    "y": 41.470573,
    "x": 72.190358
  },
  "pop": 6505,
  "state": "CT"
},{
  "city": "CLINTON",
  "zip": "06413",
  "loc": {
    "y": 41.29117,
    "x": 72.527973
  },
  "pop": 12772,
  "state": "CT"
},{
  "city": "MILFORD",
  "zip": "06460",
  "loc": {
    "y": 41.217466,
    "x": 73.054948
  },
  "pop": 49940,
  "state": "CT"
},{
  "city": "BRIDGEPORT",
  "zip": "06606",
  "loc": {
    "y": 41.20907,
    "x": 73.208619
  },
  "pop": 41879,
  "state": "CT"
},{
  "city": "BRIDGEPORT",
  "zip": "06610",
  "loc": {
    "y": 41.200508,
    "x": 73.168771
  },
  "pop": 20727,
  "state": "CT"
},{
  "city": "BRIDGEWATER",
  "zip": "06752",
  "loc": {
    "y": 41.528684,
    "x": 73.360936
  },
  "pop": 1654,
  "state": "CT"
},{
  "city": "WOLCOTT",
  "zip": "06716",
  "loc": {
    "y": 41.596995,
    "x": 72.982799
  },
  "pop": 13787,
  "state": "CT"
},{
  "city": "NEW FAIRFIELD",
  "zip": "06812",
  "loc": {
    "y": 41.472999,
    "x": 73.497784
  },
  "pop": 13013,
  "state": "CT"
},{
  "city": "LONG NECK",
  "zip": "19966",
  "loc": {
    "y": 38.593436,
    "x": 75.255547
  },
  "pop": 11962,
  "state": "DE"
},{
  "city": "VIOLA",
  "zip": "19979",
  "loc": {
    "y": 39.041872,
    "x": 75.572605
  },
  "pop": 153,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20036",
  "loc": {
    "y": 38.908704,
    "x": 77.041434
  },
  "pop": 4146,
  "state": "DC"
},{
  "city": "ORANGE PARK",
  "zip": "32065",
  "loc": {
    "y": 30.138233,
    "x": 81.774199
  },
  "pop": 19248,
  "state": "FL"
},{
  "city": "STARKE",
  "zip": "32091",
  "loc": {
    "y": 29.958299,
    "x": 82.118518
  },
  "pop": 15058,
  "state": "FL"
},{
  "city": "NEW SMYRNA BEACH",
  "zip": "32168",
  "loc": {
    "y": 29.024672,
    "x": 80.958436
  },
  "pop": 17624,
  "state": "FL"
},{
  "city": "SATSUMA",
  "zip": "32189",
  "loc": {
    "y": 29.559354,
    "x": 81.640596
  },
  "pop": 3490,
  "state": "FL"
},{
  "city": "NORTH SAN JUAN",
  "zip": "95960",
  "loc": {
    "y": 39.354037,
    "x": 121.13498
  },
  "pop": 228,
  "state": "CA"
},{
  "city": "LIVE OAK",
  "zip": "95953",
  "loc": {
    "y": 39.266904,
    "x": 121.66393
  },
  "pop": 6800,
  "state": "CA"
},{
  "city": "STONYFORD",
  "zip": "95979",
  "loc": {
    "y": 39.333652,
    "x": 122.517811
  },
  "pop": 683,
  "state": "CA"
},{
  "city": "REDDING",
  "zip": "96001",
  "loc": {
    "y": 40.560493,
    "x": 122.411627
  },
  "pop": 30690,
  "state": "CA"
},{
  "city": "FORT JONES",
  "zip": "96032",
  "loc": {
    "y": 41.617027,
    "x": 122.883207
  },
  "pop": 2363,
  "state": "CA"
},{
  "city": "OAK RUN",
  "zip": "96069",
  "loc": {
    "y": 40.68631,
    "x": 122.040932
  },
  "pop": 1160,
  "state": "CA"
},{
  "city": "CEDARVILLE",
  "zip": "96104",
  "loc": {
    "y": 41.475871,
    "x": 120.151551
  },
  "pop": 991,
  "state": "CA"
},{
  "city": "JANESVILLE",
  "zip": "96114",
  "loc": {
    "y": 40.296325,
    "x": 120.50982
  },
  "pop": 2655,
  "state": "CA"
},{
  "city": "LOYALTON",
  "zip": "96118",
  "loc": {
    "y": 39.662974,
    "x": 120.229662
  },
  "pop": 1500,
  "state": "CA"
},{
  "city": "AURORA",
  "zip": "80011",
  "loc": {
    "y": 39.737809,
    "x": 104.815233
  },
  "pop": 36021,
  "state": "CO"
},{
  "city": "WENDEL",
  "zip": "96136",
  "loc": {
    "y": 40.346233,
    "x": 120.352156
  },
  "pop": 148,
  "state": "CA"
},{
  "city": "DENVER",
  "zip": "80203",
  "loc": {
    "y": 39.731285,
    "x": 104.981111
  },
  "pop": 15775,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80216",
  "loc": {
    "y": 39.783469,
    "x": 104.966946
  },
  "pop": 9113,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80219",
  "loc": {
    "y": 39.695624,
    "x": 105.034134
  },
  "pop": 48234,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80239",
  "loc": {
    "y": 39.787757,
    "x": 104.828837
  },
  "pop": 17622,
  "state": "CO"
},{
  "city": "JAMESTOWN",
  "zip": "80455",
  "loc": {
    "y": 40.10056,
    "x": 105.418971
  },
  "pop": 654,
  "state": "CO"
},{
  "city": "FORT COLLINS",
  "zip": "80526",
  "loc": {
    "y": 40.547294,
    "x": 105.107646
  },
  "pop": 29180,
  "state": "CO"
},{
  "city": "LAPORTE",
  "zip": "80535",
  "loc": {
    "y": 40.634683,
    "x": 105.148757
  },
  "pop": 2300,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80917",
  "loc": {
    "y": 38.886027,
    "x": 104.739904
  },
  "pop": 27664,
  "state": "CO"
},{
  "city": "AGUILAR",
  "zip": "81020",
  "loc": {
    "y": 37.393304,
    "x": 104.676926
  },
  "pop": 928,
  "state": "CO"
},{
  "city": "BOONE",
  "zip": "81025",
  "loc": {
    "y": 38.264614,
    "x": 104.25851
  },
  "pop": 976,
  "state": "CO"
},{
  "city": "CAMPO",
  "zip": "81029",
  "loc": {
    "y": 37.119547,
    "x": 102.546423
  },
  "pop": 487,
  "state": "CO"
},{
  "city": "CHIVINGTON",
  "zip": "81036",
  "loc": {
    "y": 38.444141,
    "x": 102.50536
  },
  "pop": 123,
  "state": "CO"
},{
  "city": "OLNEY SPRINGS",
  "zip": "81062",
  "loc": {
    "y": 38.201877,
    "x": 103.941033
  },
  "pop": 706,
  "state": "CO"
},{
  "city": "CUCHARA",
  "zip": "81055",
  "loc": {
    "y": 37.498292,
    "x": 105.012994
  },
  "pop": 1234,
  "state": "CO"
},{
  "city": "UTLEYVILLE",
  "zip": "81064",
  "loc": {
    "y": 37.355885,
    "x": 102.893106
  },
  "pop": 383,
  "state": "CO"
},{
  "city": "MANZANOLA",
  "zip": "81058",
  "loc": {
    "y": 38.110861,
    "x": 103.876602
  },
  "pop": 961,
  "state": "CO"
},{
  "city": "PARLIN",
  "zip": "81239",
  "loc": {
    "y": 38.508762,
    "x": 106.677995
  },
  "pop": 67,
  "state": "CO"
},{
  "city": "DOVE CREEK",
  "zip": "81324",
  "loc": {
    "y": 37.763199,
    "x": 108.918147
  },
  "pop": 1120,
  "state": "CO"
},{
  "city": "DOLORES",
  "zip": "81323",
  "loc": {
    "y": 37.466571,
    "x": 108.471748
  },
  "pop": 1770,
  "state": "CO"
},{
  "city": "SILVERTON",
  "zip": "81433",
  "loc": {
    "y": 37.808995,
    "x": 107.666686
  },
  "pop": 745,
  "state": "CO"
},{
  "city": "WHITEWATER",
  "zip": "81527",
  "loc": {
    "y": 38.974422,
    "x": 108.399042
  },
  "pop": 664,
  "state": "CO"
},{
  "city": "DE BEQUE",
  "zip": "81630",
  "loc": {
    "y": 39.311764,
    "x": 108.230405
  },
  "pop": 464,
  "state": "CO"
},{
  "city": "COLLINSVILLE",
  "zip": "06022",
  "loc": {
    "y": 41.851319,
    "x": 72.92827
  },
  "pop": 4630,
  "state": "CT"
},{
  "city": "MARBLE",
  "zip": "81623",
  "loc": {
    "y": 39.385431,
    "x": 107.171012
  },
  "pop": 9406,
  "state": "CO"
},{
  "city": "GLASTONBURY",
  "zip": "06033",
  "loc": {
    "y": 41.707329,
    "x": 72.572705
  },
  "pop": 24287,
  "state": "CT"
},{
  "city": "HARTFORD",
  "zip": "06105",
  "loc": {
    "y": 41.769116,
    "x": 72.701006
  },
  "pop": 20887,
  "state": "CT"
},{
  "city": "CROMWELL",
  "zip": "06416",
  "loc": {
    "y": 41.61049,
    "x": 72.666317
  },
  "pop": 12286,
  "state": "CT"
},{
  "city": "KILLINGWORTH",
  "zip": "06419",
  "loc": {
    "y": 41.369622,
    "x": 72.571192
  },
  "pop": 4809,
  "state": "CT"
},{
  "city": "MARLBOROUGH",
  "zip": "06447",
  "loc": {
    "y": 41.641226,
    "x": 72.460871
  },
  "pop": 5535,
  "state": "CT"
},{
  "city": "NEWTOWN",
  "zip": "06470",
  "loc": {
    "y": 41.393095,
    "x": 73.316744
  },
  "pop": 12787,
  "state": "CT"
},{
  "city": "LAKESIDE",
  "zip": "06758",
  "loc": {
    "y": 41.69001,
    "x": 73.238235
  },
  "pop": 997,
  "state": "CT"
},{
  "city": "WOODBURY",
  "zip": "06798",
  "loc": {
    "y": 41.552061,
    "x": 73.208264
  },
  "pop": 8131,
  "state": "CT"
},{
  "city": "NORWALK",
  "zip": "06854",
  "loc": {
    "y": 41.095722,
    "x": 73.428485
  },
  "pop": 25358,
  "state": "CT"
},{
  "city": "WEST REDDING",
  "zip": "06896",
  "loc": {
    "y": 41.306915,
    "x": 73.3935
  },
  "pop": 7183,
  "state": "CT"
},{
  "city": "NEWARK",
  "zip": "19702",
  "loc": {
    "y": 39.634869,
    "x": 75.699339
  },
  "pop": 30402,
  "state": "DE"
},{
  "city": "NEWARK",
  "zip": "19711",
  "loc": {
    "y": 39.701129,
    "x": 75.737534
  },
  "pop": 50573,
  "state": "DE"
},{
  "city": "MARSHALLTON",
  "zip": "19808",
  "loc": {
    "y": 39.734737,
    "x": 75.663891
  },
  "pop": 34260,
  "state": "DE"
},{
  "city": "GREENWOOD",
  "zip": "19950",
  "loc": {
    "y": 38.817519,
    "x": 75.593547
  },
  "pop": 4279,
  "state": "DE"
},{
  "city": "DOVER",
  "zip": "19901",
  "loc": {
    "y": 39.156639,
    "x": 75.535983
  },
  "pop": 46005,
  "state": "DE"
},{
  "city": "LINCOLN",
  "zip": "19960",
  "loc": {
    "y": 38.86128,
    "x": 75.399961
  },
  "pop": 4435,
  "state": "DE"
},{
  "city": "MILLVILLE",
  "zip": "19970",
  "loc": {
    "y": 38.555528,
    "x": 75.096518
  },
  "pop": 1532,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20008",
  "loc": {
    "y": 38.936282,
    "x": 77.059936
  },
  "pop": 26736,
  "state": "DC"
},{
  "city": "WASHINGTON",
  "zip": "20001",
  "loc": {
    "y": 38.912217,
    "x": 77.017691
  },
  "pop": 34745,
  "state": "DC"
},{
  "city": "BOYS RANCH",
  "zip": "32060",
  "loc": {
    "y": 30.286622,
    "x": 83.024994
  },
  "pop": 19075,
  "state": "FL"
},{
  "city": "ASTOR",
  "zip": "32102",
  "loc": {
    "y": 29.165031,
    "x": 81.539929
  },
  "pop": 2092,
  "state": "FL"
},{
  "city": "FLORAHOME",
  "zip": "32140",
  "loc": {
    "y": 29.758105,
    "x": 81.862224
  },
  "pop": 1475,
  "state": "FL"
},{
  "city": "SEVILLE",
  "zip": "32190",
  "loc": {
    "y": 29.320084,
    "x": 81.527894
  },
  "pop": 436,
  "state": "FL"
},{
  "city": "JACKSONVILLE N A",
  "zip": "32212",
  "loc": {
    "y": 30.220905,
    "x": 81.68848
  },
  "pop": 2517,
  "state": "FL"
},{
  "city": "BRISTOL",
  "zip": "32321",
  "loc": {
    "y": 30.422279,
    "x": 84.946558
  },
  "pop": 4078,
  "state": "FL"
},{
  "city": "WILLOWS",
  "zip": "95988",
  "loc": {
    "y": 39.523751,
    "x": 122.199204
  },
  "pop": 8034,
  "state": "CA"
},{
  "city": "CHESTER",
  "zip": "96020",
  "loc": {
    "y": 40.297457,
    "x": 121.227338
  },
  "pop": 2361,
  "state": "CA"
},{
  "city": "CORNING",
  "zip": "96021",
  "loc": {
    "y": 39.929566,
    "x": 122.195991
  },
  "pop": 12436,
  "state": "CA"
},{
  "city": "MILLVILLE",
  "zip": "96062",
  "loc": {
    "y": 40.565316,
    "x": 122.111088
  },
  "pop": 1281,
  "state": "CA"
},{
  "city": "LITCHFIELD",
  "zip": "96117",
  "loc": {
    "y": 40.362788,
    "x": 120.253975
  },
  "pop": 23,
  "state": "CA"
},{
  "city": "TAHOMA",
  "zip": "96142",
  "loc": {
    "y": 39.064406,
    "x": 120.135747
  },
  "pop": 1029,
  "state": "CA"
},{
  "city": "CHERRY HILLS VIL",
  "zip": "80110",
  "loc": {
    "y": 39.646027,
    "x": 104.990022
  },
  "pop": 40226,
  "state": "CO"
},{
  "city": "LOUISVILLE",
  "zip": "80027",
  "loc": {
    "y": 39.978942,
    "x": 105.145557
  },
  "pop": 12612,
  "state": "CO"
},{
  "city": "DECKERS",
  "zip": "80135",
  "loc": {
    "y": 39.330109,
    "x": 105.008305
  },
  "pop": 3257,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80204",
  "loc": {
    "y": 39.734022,
    "x": 105.025854
  },
  "pop": 27439,
  "state": "CO"
},{
  "city": "WATKINS",
  "zip": "80137",
  "loc": {
    "y": 39.762317,
    "x": 104.583391
  },
  "pop": 406,
  "state": "CO"
},{
  "city": "BOULDER",
  "zip": "80302",
  "loc": {
    "y": 40.017235,
    "x": 105.285131
  },
  "pop": 29384,
  "state": "CO"
},{
  "city": "COALMONT",
  "zip": "80430",
  "loc": {
    "y": 40.538252,
    "x": 106.532134
  },
  "pop": 88,
  "state": "CO"
},{
  "city": "GRAND LAKE",
  "zip": "80447",
  "loc": {
    "y": 40.228862,
    "x": 105.860488
  },
  "pop": 1202,
  "state": "CO"
},{
  "city": "GILL",
  "zip": "80624",
  "loc": {
    "y": 40.469586,
    "x": 104.499995
  },
  "pop": 130,
  "state": "CO"
},{
  "city": "ILIFF",
  "zip": "80736",
  "loc": {
    "y": 40.769174,
    "x": 103.096808
  },
  "pop": 778,
  "state": "CO"
},{
  "city": "LINDON",
  "zip": "80740",
  "loc": {
    "y": 39.830849,
    "x": 103.314471
  },
  "pop": 136,
  "state": "CO"
},{
  "city": "ECKLEY",
  "zip": "80727",
  "loc": {
    "y": 40.113775,
    "x": 102.482776
  },
  "pop": 242,
  "state": "CO"
},{
  "city": "PEETZ",
  "zip": "80747",
  "loc": {
    "y": 40.95195,
    "x": 103.116606
  },
  "pop": 451,
  "state": "CO"
},{
  "city": "STONEHAM",
  "zip": "80754",
  "loc": {
    "y": 40.686994,
    "x": 103.638687
  },
  "pop": 141,
  "state": "CO"
},{
  "city": "LAST CHANCE",
  "zip": "80757",
  "loc": {
    "y": 39.938105,
    "x": 103.578033
  },
  "pop": 265,
  "state": "CO"
},{
  "city": "BURLINGTON",
  "zip": "80807",
  "loc": {
    "y": 39.310649,
    "x": 102.258281
  },
  "pop": 3982,
  "state": "CO"
},{
  "city": "COPE",
  "zip": "80812",
  "loc": {
    "y": 39.746227,
    "x": 102.988098
  },
  "pop": 626,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80904",
  "loc": {
    "y": 38.853318,
    "x": 104.859513
  },
  "pop": 17366,
  "state": "CO"
},{
  "city": "PUEBLO",
  "zip": "81005",
  "loc": {
    "y": 38.235157,
    "x": 104.660031
  },
  "pop": 26273,
  "state": "CO"
},{
  "city": "VILLEGREEN",
  "zip": "81049",
  "loc": {
    "y": 37.331189,
    "x": 103.358348
  },
  "pop": 389,
  "state": "CO"
},{
  "city": "ALAMOSA",
  "zip": "81101",
  "loc": {
    "y": 37.470274,
    "x": 105.878602
  },
  "pop": 12580,
  "state": "CO"
},{
  "city": "HOOPER",
  "zip": "81136",
  "loc": {
    "y": 37.723203,
    "x": 105.871193
  },
  "pop": 265,
  "state": "CO"
},{
  "city": "VILLA GROVE",
  "zip": "81155",
  "loc": {
    "y": 38.2952,
    "x": 106.110183
  },
  "pop": 53,
  "state": "CO"
},{
  "city": "81250",
  "zip": "81250",
  "loc": {
    "y": 38.395556,
    "x": 105.531825
  },
  "pop": 467,
  "state": "CO"
},{
  "city": "TWIN LAKES",
  "zip": "81251",
  "loc": {
    "y": 39.090231,
    "x": 106.435079
  },
  "pop": 49,
  "state": "CO"
},{
  "city": "DURANGO",
  "zip": "81301",
  "loc": {
    "y": 37.287388,
    "x": 107.861684
  },
  "pop": 23506,
  "state": "CO"
},{
  "city": "COLLBRAN",
  "zip": "81624",
  "loc": {
    "y": 39.245267,
    "x": 107.924945
  },
  "pop": 1043,
  "state": "CO"
},{
  "city": "BURLINGTON",
  "zip": "06013",
  "loc": {
    "y": 41.757296,
    "x": 72.944386
  },
  "pop": 7017,
  "state": "CT"
},{
  "city": "CANAAN",
  "zip": "06018",
  "loc": {
    "y": 42.024821,
    "x": 73.323177
  },
  "pop": 2948,
  "state": "CT"
},{
  "city": "CANTON CENTER",
  "zip": "06020",
  "loc": {
    "y": 41.871586,
    "x": 72.905847
  },
  "pop": 192,
  "state": "CT"
},{
  "city": "RANGELY",
  "zip": "81648",
  "loc": {
    "y": 40.082844,
    "x": 108.799148
  },
  "pop": 2740,
  "state": "CO"
},{
  "city": "NEW BRITAIN",
  "zip": "06053",
  "loc": {
    "y": 41.686667,
    "x": 72.790835
  },
  "pop": 37995,
  "state": "CT"
},{
  "city": "SALISBURY",
  "zip": "06068",
  "loc": {
    "y": 42.001452,
    "x": 73.421492
  },
  "pop": 1686,
  "state": "CT"
},{
  "city": "COVENTRY",
  "zip": "06238",
  "loc": {
    "y": 41.782195,
    "x": 72.333249
  },
  "pop": 10776,
  "state": "CT"
},{
  "city": "CHESTER",
  "zip": "06412",
  "loc": {
    "y": 41.404903,
    "x": 72.464293
  },
  "pop": 3417,
  "state": "CT"
},{
  "city": "BEACON FALLS",
  "zip": "06403",
  "loc": {
    "y": 41.436917,
    "x": 73.059656
  },
  "pop": 5083,
  "state": "CT"
},{
  "city": "EAST HADDAM",
  "zip": "06423",
  "loc": {
    "y": 41.469575,
    "x": 72.405876
  },
  "pop": 3451,
  "state": "CT"
},{
  "city": "HIGGANUM",
  "zip": "06441",
  "loc": {
    "y": 41.468246,
    "x": 72.575143
  },
  "pop": 4248,
  "state": "CT"
},{
  "city": "ANSONIA",
  "zip": "06401",
  "loc": {
    "y": 41.342712,
    "x": 73.074211
  },
  "pop": 18430,
  "state": "CT"
},{
  "city": "WALLINGFORD",
  "zip": "06492",
  "loc": {
    "y": 41.459997,
    "x": 72.822179
  },
  "pop": 40838,
  "state": "CT"
},{
  "city": "BETHEL",
  "zip": "06801",
  "loc": {
    "y": 41.381298,
    "x": 73.400827
  },
  "pop": 17538,
  "state": "CT"
},{
  "city": "NORWALK",
  "zip": "06850",
  "loc": {
    "y": 41.12222,
    "x": 73.435827
  },
  "pop": 17332,
  "state": "CT"
},{
  "city": "RIDGEFIELD",
  "zip": "06877",
  "loc": {
    "y": 41.297683,
    "x": 73.497268
  },
  "pop": 21691,
  "state": "CT"
},{
  "city": "STAMFORD",
  "zip": "06903",
  "loc": {
    "y": 41.135235,
    "x": 73.568356
  },
  "pop": 14172,
  "state": "CT"
},{
  "city": "MANOR",
  "zip": "19720",
  "loc": {
    "y": 39.67703,
    "x": 75.589938
  },
  "pop": 46906,
  "state": "DE"
},{
  "city": "BRIDGEVILLE",
  "zip": "19933",
  "loc": {
    "y": 38.736628,
    "x": 75.608768
  },
  "pop": 4353,
  "state": "DE"
},{
  "city": "WILMINGTON",
  "zip": "19802",
  "loc": {
    "y": 39.75638,
    "x": 75.534041
  },
  "pop": 27411,
  "state": "DE"
},{
  "city": "SANDERSON",
  "zip": "32087",
  "loc": {
    "y": 30.302536,
    "x": 82.337741
  },
  "pop": 2270,
  "state": "FL"
},{
  "city": "HASTINGS",
  "zip": "32145",
  "loc": {
    "y": 29.705147,
    "x": 81.490908
  },
  "pop": 2189,
  "state": "FL"
},{
  "city": "ORMOND BEACH",
  "zip": "32174",
  "loc": {
    "y": 29.283305,
    "x": 81.088216
  },
  "pop": 34477,
  "state": "FL"
},{
  "city": "SAINT AUGUSTINE",
  "zip": "32095",
  "loc": {
    "y": 29.905726,
    "x": 81.347626
  },
  "pop": 12132,
  "state": "FL"
},{
  "city": "WEIRSDALE",
  "zip": "32195",
  "loc": {
    "y": 28.978182,
    "x": 81.893168
  },
  "pop": 3034,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32204",
  "loc": {
    "y": 30.318899,
    "x": 81.685445
  },
  "pop": 8839,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32219",
  "loc": {
    "y": 30.403365,
    "x": 81.763451
  },
  "pop": 9570,
  "state": "FL"
},{
  "city": "NEPTUNE BEACH",
  "zip": "32266",
  "loc": {
    "y": 30.31548,
    "x": 81.405123
  },
  "pop": 6816,
  "state": "FL"
},{
  "city": "JACKSONVILLE BEA",
  "zip": "32250",
  "loc": {
    "y": 30.28319,
    "x": 81.406243
  },
  "pop": 22392,
  "state": "FL"
},{
  "city": "PENN VALLEY",
  "zip": "95946",
  "loc": {
    "y": 39.218778,
    "x": 121.193519
  },
  "pop": 7603,
  "state": "CA"
},{
  "city": "PULGA",
  "zip": "95965",
  "loc": {
    "y": 39.532967,
    "x": 121.578396
  },
  "pop": 16712,
  "state": "CA"
},{
  "city": "ADIN",
  "zip": "96006",
  "loc": {
    "y": 41.21751,
    "x": 120.943193
  },
  "pop": 355,
  "state": "CA"
},{
  "city": "SAWYERS BAR",
  "zip": "96027",
  "loc": {
    "y": 41.468303,
    "x": 122.914189
  },
  "pop": 2326,
  "state": "CA"
},{
  "city": "MCARTHUR",
  "zip": "96056",
  "loc": {
    "y": 41.111407,
    "x": 121.214896
  },
  "pop": 2797,
  "state": "CA"
},{
  "city": "SEIAD VALLEY",
  "zip": "96086",
  "loc": {
    "y": 41.886589,
    "x": 123.243762
  },
  "pop": 311,
  "state": "CA"
},{
  "city": "EDGEWOOD",
  "zip": "96094",
  "loc": {
    "y": 41.439466,
    "x": 122.384803
  },
  "pop": 5506,
  "state": "CA"
},{
  "city": "AURORA",
  "zip": "80014",
  "loc": {
    "y": 39.666171,
    "x": 104.834954
  },
  "pop": 31059,
  "state": "CO"
},{
  "city": "AURORA",
  "zip": "80017",
  "loc": {
    "y": 39.694827,
    "x": 104.788093
  },
  "pop": 25910,
  "state": "CO"
},{
  "city": "COMMERCE CITY",
  "zip": "80022",
  "loc": {
    "y": 39.825875,
    "x": 104.911349
  },
  "pop": 23205,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80206",
  "loc": {
    "y": 39.733109,
    "x": 104.9524
  },
  "pop": 19145,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80207",
  "loc": {
    "y": 39.758425,
    "x": 104.91771
  },
  "pop": 20955,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80237",
  "loc": {
    "y": 39.64314,
    "x": 104.89866
  },
  "pop": 14211,
  "state": "CO"
},{
  "city": "IDAHO SPRINGS",
  "zip": "80452",
  "loc": {
    "y": 39.740192,
    "x": 105.598261
  },
  "pop": 5113,
  "state": "CO"
},{
  "city": "LONGMONT",
  "zip": "80503",
  "loc": {
    "y": 40.15588,
    "x": 105.162432
  },
  "pop": 16814,
  "state": "CO"
},{
  "city": "LYONS",
  "zip": "80540",
  "loc": {
    "y": 40.235715,
    "x": 105.323071
  },
  "pop": 3696,
  "state": "CO"
},{
  "city": "ROGGEN",
  "zip": "80652",
  "loc": {
    "y": 40.207445,
    "x": 104.315747
  },
  "pop": 150,
  "state": "CO"
},{
  "city": "ATWOOD",
  "zip": "80722",
  "loc": {
    "y": 40.517432,
    "x": 103.039301
  },
  "pop": 140,
  "state": "CO"
},{
  "city": "CROOK",
  "zip": "80726",
  "loc": {
    "y": 40.874743,
    "x": 102.847174
  },
  "pop": 638,
  "state": "CO"
},{
  "city": "BETHUNE",
  "zip": "80805",
  "loc": {
    "y": 39.344771,
    "x": 102.428142
  },
  "pop": 543,
  "state": "CO"
},{
  "city": "FLORISSANT",
  "zip": "80816",
  "loc": {
    "y": 38.827669,
    "x": 105.226106
  },
  "pop": 2480,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80921",
  "loc": {
    "y": 39.048674,
    "x": 104.814042
  },
  "pop": 3539,
  "state": "CO"
},{
  "city": "FARISTA",
  "zip": "81089",
  "loc": {
    "y": 37.638159,
    "x": 104.804301
  },
  "pop": 4347,
  "state": "CO"
},{
  "city": "MOSCA",
  "zip": "81146",
  "loc": {
    "y": 37.635796,
    "x": 105.806866
  },
  "pop": 399,
  "state": "CO"
},{
  "city": "ARBOLES",
  "zip": "81121",
  "loc": {
    "y": 37.101633,
    "x": 107.390749
  },
  "pop": 587,
  "state": "CO"
},{
  "city": "OURAY",
  "zip": "81427",
  "loc": {
    "y": 38.02576,
    "x": 107.67261
  },
  "pop": 686,
  "state": "CO"
},{
  "city": "NUCLA",
  "zip": "81424",
  "loc": {
    "y": 38.268219,
    "x": 108.547644
  },
  "pop": 1135,
  "state": "CO"
},{
  "city": "LOMA",
  "zip": "81524",
  "loc": {
    "y": 39.227896,
    "x": 108.814902
  },
  "pop": 1067,
  "state": "CO"
},{
  "city": "SOMERSET",
  "zip": "81434",
  "loc": {
    "y": 38.946801,
    "x": 107.378145
  },
  "pop": 180,
  "state": "CO"
},{
  "city": "ELK SPRINGS",
  "zip": "81633",
  "loc": {
    "y": 40.414588,
    "x": 108.419729
  },
  "pop": 10,
  "state": "CO"
},{
  "city": "BLOOMFIELD",
  "zip": "06002",
  "loc": {
    "y": 41.831647,
    "x": 72.72493
  },
  "pop": 19524,
  "state": "CT"
},{
  "city": "SOMERS",
  "zip": "06071",
  "loc": {
    "y": 41.997813,
    "x": 72.458266
  },
  "pop": 9685,
  "state": "CT"
},{
  "city": "NORTH GROSVENORD",
  "zip": "06255",
  "loc": {
    "y": 41.987878,
    "x": 71.902734
  },
  "pop": 5641,
  "state": "CT"
},{
  "city": "WARRENVILLE",
  "zip": "06278",
  "loc": {
    "y": 41.86434,
    "x": 72.15873
  },
  "pop": 2720,
  "state": "CT"
},{
  "city": "GROTON",
  "zip": "06340",
  "loc": {
    "y": 41.357171,
    "x": 72.057947
  },
  "pop": 32435,
  "state": "CT"
},{
  "city": "MOOSUP",
  "zip": "06354",
  "loc": {
    "y": 41.721031,
    "x": 71.884962
  },
  "pop": 7048,
  "state": "CT"
},{
  "city": "DERBY",
  "zip": "06418",
  "loc": {
    "y": 41.322858,
    "x": 73.080035
  },
  "pop": 12199,
  "state": "CT"
},{
  "city": "NORTHFORD",
  "zip": "06472",
  "loc": {
    "y": 41.396219,
    "x": 72.780909
  },
  "pop": 6229,
  "state": "CT"
},{
  "city": "MOODUS",
  "zip": "06469",
  "loc": {
    "y": 41.507807,
    "x": 72.441879
  },
  "pop": 2634,
  "state": "CT"
},{
  "city": "SOUTHBURY",
  "zip": "06488",
  "loc": {
    "y": 41.476695,
    "x": 73.224077
  },
  "pop": 15818,
  "state": "CT"
},{
  "city": "NEW HAVEN",
  "zip": "06515",
  "loc": {
    "y": 41.329301,
    "x": 72.966445
  },
  "pop": 18603,
  "state": "CT"
},{
  "city": "BRIDGEPORT",
  "zip": "06605",
  "loc": {
    "y": 41.166796,
    "x": 73.216251
  },
  "pop": 23800,
  "state": "CT"
},{
  "city": "BETHLEHEM",
  "zip": "06751",
  "loc": {
    "y": 41.638683,
    "x": 73.209098
  },
  "pop": 3071,
  "state": "CT"
},{
  "city": "HARWINTON",
  "zip": "06791",
  "loc": {
    "y": 41.770145,
    "x": 73.072819
  },
  "pop": 5228,
  "state": "CT"
},{
  "city": "RIVERSIDE",
  "zip": "06878",
  "loc": {
    "y": 41.037998,
    "x": 73.581136
  },
  "pop": 7765,
  "state": "CT"
},{
  "city": "RIDGEWAY",
  "zip": "06905",
  "loc": {
    "y": 41.082576,
    "x": 73.543757
  },
  "pop": 17839,
  "state": "CT"
},{
  "city": "WESTPORT",
  "zip": "06880",
  "loc": {
    "y": 41.143433,
    "x": 73.349579
  },
  "pop": 24705,
  "state": "CT"
},{
  "city": "MIDDLETOWN",
  "zip": "19709",
  "loc": {
    "y": 39.481535,
    "x": 75.683183
  },
  "pop": 10243,
  "state": "DE"
},{
  "city": "HOUSTON",
  "zip": "19954",
  "loc": {
    "y": 38.91143,
    "x": 75.506354
  },
  "pop": 1776,
  "state": "DE"
},{
  "city": "LAUREL",
  "zip": "19956",
  "loc": {
    "y": 38.553695,
    "x": 75.563052
  },
  "pop": 9283,
  "state": "DE"
},{
  "city": "FORT WHITE",
  "zip": "32038",
  "loc": {
    "y": 29.92073,
    "x": 82.687938
  },
  "pop": 3439,
  "state": "FL"
},{
  "city": "LEE",
  "zip": "32059",
  "loc": {
    "y": 30.397863,
    "x": 83.284392
  },
  "pop": 1260,
  "state": "FL"
},{
  "city": "JASPER",
  "zip": "32052",
  "loc": {
    "y": 30.502914,
    "x": 82.932186
  },
  "pop": 6588,
  "state": "FL"
},{
  "city": "HOLLY HILL",
  "zip": "32117",
  "loc": {
    "y": 29.236006,
    "x": 81.054698
  },
  "pop": 22599,
  "state": "FL"
},{
  "city": "BUNNELL",
  "zip": "32110",
  "loc": {
    "y": 29.45616,
    "x": 81.324431
  },
  "pop": 4925,
  "state": "FL"
},{
  "city": "ORMOND BEACH",
  "zip": "32176",
  "loc": {
    "y": 29.322192,
    "x": 81.058432
  },
  "pop": 15383,
  "state": "FL"
},{
  "city": "WASHINGTON",
  "zip": "20019",
  "loc": {
    "y": 38.890237,
    "x": 76.937588
  },
  "pop": 59492,
  "state": "DC"
},{
  "city": "WASHINGTON",
  "zip": "20037",
  "loc": {
    "y": 38.901446,
    "x": 77.050448
  },
  "pop": 11046,
  "state": "DC"
},{
  "city": "BRANFORD",
  "zip": "32008",
  "loc": {
    "y": 29.939472,
    "x": 82.899288
  },
  "pop": 2439,
  "state": "FL"
},{
  "city": "BRYCEVILLE",
  "zip": "32009",
  "loc": {
    "y": 30.419274,
    "x": 81.972397
  },
  "pop": 1875,
  "state": "FL"
},{
  "city": "CRESCENT CITY",
  "zip": "32112",
  "loc": {
    "y": 29.445438,
    "x": 81.557909
  },
  "pop": 7481,
  "state": "FL"
},{
  "city": "PORT ORANGE",
  "zip": "32127",
  "loc": {
    "y": 29.1124,
    "x": 80.988351
  },
  "pop": 25925,
  "state": "FL"
},{
  "city": "SALT SPRINGS",
  "zip": "32134",
  "loc": {
    "y": 29.279554,
    "x": 81.887757
  },
  "pop": 14324,
  "state": "FL"
},{
  "city": "PALM COAST",
  "zip": "32137",
  "loc": {
    "y": 29.556515,
    "x": 81.21899
  },
  "pop": 18194,
  "state": "FL"
},{
  "city": "NEW SMYRNA BEACH",
  "zip": "32169",
  "loc": {
    "y": 29.017196,
    "x": 80.888463
  },
  "pop": 9169,
  "state": "FL"
},{
  "city": "OCKLAWAHA",
  "zip": "32179",
  "loc": {
    "y": 29.064308,
    "x": 81.88569
  },
  "pop": 4385,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32217",
  "loc": {
    "y": 30.240678,
    "x": 81.616956
  },
  "pop": 19356,
  "state": "FL"
},{
  "city": "TALLAHASSEE",
  "zip": "32308",
  "loc": {
    "y": 30.507725,
    "x": 84.206903
  },
  "pop": 34857,
  "state": "FL"
},{
  "city": "PALERMO",
  "zip": "95968",
  "loc": {
    "y": 39.436148,
    "x": 121.545389
  },
  "pop": 1843,
  "state": "CA"
},{
  "city": "HORSE CREEK",
  "zip": "96045",
  "loc": {
    "y": 41.833732,
    "x": 123.013919
  },
  "pop": 379,
  "state": "CA"
},{
  "city": "WHITMORE",
  "zip": "96096",
  "loc": {
    "y": 40.65255,
    "x": 121.877076
  },
  "pop": 593,
  "state": "CA"
},{
  "city": "CLIO",
  "zip": "96106",
  "loc": {
    "y": 39.74326,
    "x": 120.560458
  },
  "pop": 84,
  "state": "CA"
},{
  "city": "ARVADA",
  "zip": "80003",
  "loc": {
    "y": 39.828572,
    "x": 105.065549
  },
  "pop": 32980,
  "state": "CO"
},{
  "city": "ARVADA",
  "zip": "80004",
  "loc": {
    "y": 39.814066,
    "x": 105.11771
  },
  "pop": 33260,
  "state": "CO"
},{
  "city": "DENVER",
  "zip": "80205",
  "loc": {
    "y": 39.758993,
    "x": 104.966141
  },
  "pop": 24169,
  "state": "CO"
},{
  "city": "LAKEWOOD",
  "zip": "80215",
  "loc": {
    "y": 39.744033,
    "x": 105.102329
  },
  "pop": 27556,
  "state": "CO"
},{
  "city": "BLACK HAWK",
  "zip": "80422",
  "loc": {
    "y": 39.801105,
    "x": 105.503991
  },
  "pop": 551,
  "state": "CO"
},{
  "city": "BOND",
  "zip": "80423",
  "loc": {
    "y": 39.869119,
    "x": 106.676273
  },
  "pop": 149,
  "state": "CO"
},{
  "city": "KEYSTONE",
  "zip": "80435",
  "loc": {
    "y": 39.574827,
    "x": 106.057345
  },
  "pop": 12881,
  "state": "CO"
},{
  "city": "EVERGREEN",
  "zip": "80439",
  "loc": {
    "y": 39.637405,
    "x": 105.340248
  },
  "pop": 19250,
  "state": "CO"
},{
  "city": "ROLLINSVILLE",
  "zip": "80474",
  "loc": {
    "y": 39.910757,
    "x": 105.472596
  },
  "pop": 343,
  "state": "CO"
},{
  "city": "LONGMONT",
  "zip": "80501",
  "loc": {
    "y": 40.177921,
    "x": 105.10095
  },
  "pop": 47166,
  "state": "CO"
},{
  "city": "MILLIKEN",
  "zip": "80543",
  "loc": {
    "y": 40.310656,
    "x": 104.876137
  },
  "pop": 2632,
  "state": "CO"
},{
  "city": "WELLINGTON",
  "zip": "80549",
  "loc": {
    "y": 40.725525,
    "x": 105.031844
  },
  "pop": 3309,
  "state": "CO"
},{
  "city": "NUNN",
  "zip": "80648",
  "loc": {
    "y": 40.726483,
    "x": 104.785012
  },
  "pop": 505,
  "state": "CO"
},{
  "city": "ANTON",
  "zip": "80801",
  "loc": {
    "y": 39.686527,
    "x": 103.434296
  },
  "pop": 240,
  "state": "CO"
},{
  "city": "YUMA",
  "zip": "80759",
  "loc": {
    "y": 40.130063,
    "x": 102.707174
  },
  "pop": 3811,
  "state": "CO"
},{
  "city": "CHEYENNE WELLS",
  "zip": "80810",
  "loc": {
    "y": 38.819762,
    "x": 102.358173
  },
  "pop": 1364,
  "state": "CO"
},{
  "city": "MATHESON",
  "zip": "80830",
  "loc": {
    "y": 39.132044,
    "x": 103.913165
  },
  "pop": 439,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80906",
  "loc": {
    "y": 38.790164,
    "x": 104.819893
  },
  "pop": 38856,
  "state": "CO"
},{
  "city": "COLORADO SPRINGS",
  "zip": "80907",
  "loc": {
    "y": 38.876001,
    "x": 104.817034
  },
  "pop": 25123,
  "state": "CO"
},{
  "city": "PUEBLO",
  "zip": "81001",
  "loc": {
    "y": 38.287876,
    "x": 104.584828
  },
  "pop": 28837,
  "state": "CO"
},{
  "city": "BRISTOL",
  "zip": "81028",
  "loc": {
    "y": 38.133184,
    "x": 102.342642
  },
  "pop": 256,
  "state": "CO"
},{
  "city": "LYCAN",
  "zip": "81084",
  "loc": {
    "y": 37.57476,
    "x": 102.320128
  },
  "pop": 183,
  "state": "CO"
},{
  "city": "MESITA",
  "zip": "81152",
  "loc": {
    "y": 37.05057,
    "x": 105.575625
  },
  "pop": 252,
  "state": "CO"
},{
  "city": "CORTEZ",
  "zip": "81321",
  "loc": {
    "y": 37.354949,
    "x": 108.583726
  },
  "pop": 11937,
  "state": "CO"
},{
  "city": "YELLOW JACKET",
  "zip": "81335",
  "loc": {
    "y": 37.499526,
    "x": 108.785167
  },
  "pop": 126,
  "state": "CO"
},{
  "city": "GYPSUM",
  "zip": "81637",
  "loc": {
    "y": 39.661848,
    "x": 106.967083
  },
  "pop": 2593,
  "state": "CO"
},{
  "city": "MEREDITH",
  "zip": "81642",
  "loc": {
    "y": 39.335348,
    "x": 106.67823
  },
  "pop": 76,
  "state": "CO"
},{
  "city": "SILT",
  "zip": "81652",
  "loc": {
    "y": 39.541464,
    "x": 107.657411
  },
  "pop": 2430,
  "state": "CO"
},{
  "city": "EAST HARTLAND",
  "zip": "06027",
  "loc": {
    "y": 42.001617,
    "x": 72.924213
  },
  "pop": 1833,
  "state": "CT"
},{
  "city": "BOLTON",
  "zip": "06043",
  "loc": {
    "y": 41.768888,
    "x": 72.43958
  },
  "pop": 4569,
  "state": "CT"
},{
  "city": "STAFFORD SPRINGS",
  "zip": "06076",
  "loc": {
    "y": 41.966127,
    "x": 72.289857
  },
  "pop": 12392,
  "state": "CT"
},{
  "city": "TOLLAND",
  "zip": "06084",
  "loc": {
    "y": 41.869647,
    "x": 72.371789
  },
  "pop": 10973,
  "state": "CT"
},{
  "city": "WEST SIMSBURY",
  "zip": "06092",
  "loc": {
    "y": 41.871797,
    "x": 72.857749
  },
  "pop": 3691,
  "state": "CT"
},{
  "city": "W HARTFORD",
  "zip": "06107",
  "loc": {
    "y": 41.755553,
    "x": 72.75322
  },
  "pop": 18466,
  "state": "CT"
},{
  "city": "AMSTON",
  "zip": "06231",
  "loc": {
    "y": 41.628969,
    "x": 72.364601
  },
  "pop": 2887,
  "state": "CT"
},{
  "city": "PAWCATUCK",
  "zip": "06379",
  "loc": {
    "y": 41.373475,
    "x": 71.847761
  },
  "pop": 8082,
  "state": "CT"
},{
  "city": "MERIDEN",
  "zip": "06450",
  "loc": {
    "y": 41.533396,
    "x": 72.799734
  },
  "pop": 59441,
  "state": "CT"
},{
  "city": "WESTBROOK",
  "zip": "06498",
  "loc": {
    "y": 41.292662,
    "x": 72.456313
  },
  "pop": 5377,
  "state": "CT"
},{
  "city": "PROSPECT",
  "zip": "06712",
  "loc": {
    "y": 41.502198,
    "x": 72.978803
  },
  "pop": 7775,
  "state": "CT"
},{
  "city": "TORRINGTON",
  "zip": "06790",
  "loc": {
    "y": 41.813065,
    "x": 73.115579
  },
  "pop": 33969,
  "state": "CT"
},{
  "city": "BROOKFIELD",
  "zip": "06804",
  "loc": {
    "y": 41.46504,
    "x": 73.397986
  },
  "pop": 14223,
  "state": "CT"
},{
  "city": "NORWALK",
  "zip": "06851",
  "loc": {
    "y": 41.132346,
    "x": 73.405802
  },
  "pop": 24412,
  "state": "CT"
},{
  "city": "STAMFORD",
  "zip": "06901",
  "loc": {
    "y": 41.053083,
    "x": 73.539039
  },
  "pop": 5860,
  "state": "CT"
},{
  "city": "HOCKESSIN",
  "zip": "19707",
  "loc": {
    "y": 39.77604,
    "x": 75.688873
  },
  "pop": 13149,
  "state": "DE"
},{
  "city": "TOWNSEND",
  "zip": "19734",
  "loc": {
    "y": 39.381882,
    "x": 75.683368
  },
  "pop": 4512,
  "state": "DE"
},{
  "city": "LEWES",
  "zip": "19958",
  "loc": {
    "y": 38.738149,
    "x": 75.174702
  },
  "pop": 9503,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20009",
  "loc": {
    "y": 38.920202,
    "x": 77.037504
  },
  "pop": 47086,
  "state": "DC"
},{
  "city": "WASHINGTON",
  "zip": "20016",
  "loc": {
    "y": 38.938117,
    "x": 77.086037
  },
  "pop": 31042,
  "state": "DC"
},{
  "city": "POMONA PARK",
  "zip": "32181",
  "loc": {
    "y": 29.502106,
    "x": 81.630739
  },
  "pop": 1006,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32210",
  "loc": {
    "y": 30.268743,
    "x": 81.747312
  },
  "pop": 54548,
  "state": "FL"
},{
  "city": "OLIVEHURST",
  "zip": "95961",
  "loc": {
    "y": 39.089483,
    "x": 121.550059
  },
  "pop": 6418,
  "state": "CA"
},{
  "city": "OREGON HOUSE",
  "zip": "95962",
  "loc": {
    "y": 39.314388,
    "x": 121.209229
  },
  "pop": 0,
  "state": "CA"
},{
  "city": "REDDING",
  "zip": "96002",
  "loc": {
    "y": 40.548586,
    "x": 122.333932
  },
  "pop": 29008,
  "state": "CA"
},{
  "city": "REDDING",
  "zip": "96003",
  "loc": {
    "y": 40.627751,
    "x": 122.352962
  },
  "pop": 30889,
  "state": "CA"
},{
  "city": "CASSEL",
  "zip": "96016",
  "loc": {
    "y": 40.907832,
    "x": 121.524497
  },
  "pop": 566,
  "state": "CA"
},{
  "city": "GERBER",
  "zip": "96035",
  "loc": {
    "y": 40.042997,
    "x": 122.164937
  },
  "pop": 3337,
  "state": "CA"
},{
  "city": "MONTGOMERY CREEK",
  "zip": "96065",
  "loc": {
    "y": 40.912378,
    "x": 121.923313
  },
  "pop": 823,
  "state": "CA"
},{
  "city": "PAYNES CREEK",
  "zip": "96075",
  "loc": {
    "y": 40.351415,
    "x": 121.764952
  },
  "pop": 773,
  "state": "CA"
},{
  "city": "SHASTA",
  "zip": "96087",
  "loc": {
    "y": 40.610896,
    "x": 122.49685
  },
  "pop": 294,
  "state": "CA"
},{
  "city": "HERLONG",
  "zip": "96113",
  "loc": {
    "y": 40.148492,
    "x": 120.171271
  },
  "pop": 1518,
  "state": "CA"
},{
  "city": "TOPAZ",
  "zip": "96133",
  "loc": {
    "y": 38.64151,
    "x": 119.512164
  },
  "pop": 87,
  "state": "CA"
},{
  "city": "KINGS BEACH",
  "zip": "96143",
  "loc": {
    "y": 39.240119,
    "x": 120.023287
  },
  "pop": 3247,
  "state": "CA"
},{
  "city": "LAFAYETTE",
  "zip": "80026",
  "loc": {
    "y": 39.997964,
    "x": 105.096346
  },
  "pop": 17111,
  "state": "CO"
},{
  "city": "GREENWOOD VILLAG",
  "zip": "80121",
  "loc": {
    "y": 39.605835,
    "x": 104.957285
  },
  "pop": 17238,
  "state": "CO"
},{
  "city": "BOULDER",
  "zip": "80303",
  "loc": {
    "y": 39.991381,
    "x": 105.239178
  },
  "pop": 39860,
  "state": "CO"
},{
  "city": "BOULDER",
  "zip": "80304",
  "loc": {
    "y": 40.037482,
    "x": 105.277073
  },
  "pop": 21550,
  "state": "CO"
},{
  "city": "PINE",
  "zip": "80470",
  "loc": {
    "y": 39.46667,
    "x": 105.374116
  },
  "pop": 2827,
  "state": "CO"
},{
  "city": "TOPONAS",
  "zip": "80479",
  "loc": {
    "y": 40.119601,
    "x": 106.908172
  },
  "pop": 697,
  "state": "CO"
},{
  "city": "DACONO",
  "zip": "80514",
  "loc": {
    "y": 40.08361,
    "x": 104.929705
  },
  "pop": 2223,
  "state": "CO"
},{
  "city": "GARDEN CITY",
  "zip": "80631",
  "loc": {
    "y": 40.413968,
    "x": 104.704756
  },
  "pop": 53905,
  "state": "CO"
},{
  "city": "LOCHBUI",
  "zip": "80601",
  "loc": {
    "y": 39.980553,
    "x": 104.810278
  },
  "pop": 20533,
  "state": "CO"
},{
  "city": "CALHAN",
  "zip": "80808",
  "loc": {
    "y": 38.964773,
    "x": 104.355274
  },
  "pop": 2955,
  "state": "CO"
},{
  "city": "KARVAL",
  "zip": "80823",
  "loc": {
    "y": 38.71194,
    "x": 103.500613
  },
  "pop": 339,
  "state": "CO"
},{
  "city": "LAKE GEORGE",
  "zip": "80827",
  "loc": {
    "y": 39.034233,
    "x": 105.434654
  },
  "pop": 587,
  "state": "CO"
},{
  "city": "LIMON",
  "zip": "80828",
  "loc": {
    "y": 39.27126,
    "x": 103.685572
  },
  "pop": 2244,
  "state": "CO"
},{
  "city": "PEYTON",
  "zip": "80831",
  "loc": {
    "y": 38.954097,
    "x": 104.54722
  },
  "pop": 3707,
  "state": "CO"
},{
  "city": "GRANADA",
  "zip": "81041",
  "loc": {
    "y": 38.054485,
    "x": 102.32712
  },
  "pop": 741,
  "state": "CO"
},{
  "city": "ROCKY FORD",
  "zip": "81067",
  "loc": {
    "y": 38.049016,
    "x": 103.725143
  },
  "pop": 5946,
  "state": "CO"
},{
  "city": "MONTE VISTA",
  "zip": "81144",
  "loc": {
    "y": 37.573095,
    "x": 106.140833
  },
  "pop": 6041,
  "state": "CO"
},{
  "city": "NATHROP",
  "zip": "81236",
  "loc": {
    "y": 38.710343,
    "x": 106.116576
  },
  "pop": 440,
  "state": "CO"
},{
  "city": "MANCOS",
  "zip": "81328",
  "loc": {
    "y": 37.347133,
    "x": 108.298242
  },
  "pop": 2141,
  "state": "CO"
},{
  "city": "TELLURIDE",
  "zip": "81435",
  "loc": {
    "y": 37.940028,
    "x": 107.821371
  },
  "pop": 1850,
  "state": "CO"
},{
  "city": "GRAND JUNCTION",
  "zip": "81503",
  "loc": {
    "y": 39.056777,
    "x": 108.575609
  },
  "pop": 20467,
  "state": "CO"
},{
  "city": "VAIL",
  "zip": "81657",
  "loc": {
    "y": 39.623793,
    "x": 106.463454
  },
  "pop": 11449,
  "state": "CO"
},{
  "city": "LAKEVILLE",
  "zip": "06039",
  "loc": {
    "y": 41.951631,
    "x": 73.43766
  },
  "pop": 2086,
  "state": "CT"
},{
  "city": "SCOTLAND",
  "zip": "06264",
  "loc": {
    "y": 41.689849,
    "x": 72.078263
  },
  "pop": 102,
  "state": "CT"
},{
  "city": "WEST WILLINGTON",
  "zip": "06279",
  "loc": {
    "y": 41.873996,
    "x": 72.272774
  },
  "pop": 5981,
  "state": "CT"
},{
  "city": "BRANFORD",
  "zip": "06405",
  "loc": {
    "y": 41.279991,
    "x": 72.810643
  },
  "pop": 27726,
  "state": "CT"
},{
  "city": "DURHAM",
  "zip": "06422",
  "loc": {
    "y": 41.464951,
    "x": 72.68752
  },
  "pop": 5737,
  "state": "CT"
},{
  "city": "IVORYTON",
  "zip": "06442",
  "loc": {
    "y": 41.342101,
    "x": 72.440387
  },
  "pop": 2748,
  "state": "CT"
},{
  "city": "SALEM",
  "zip": "06420",
  "loc": {
    "y": 41.496627,
    "x": 72.272454
  },
  "pop": 4041,
  "state": "CT"
},{
  "city": "BETHANY",
  "zip": "06524",
  "loc": {
    "y": 41.426194,
    "x": 73.000704
  },
  "pop": 4730,
  "state": "CT"
},{
  "city": "WILMINGTON",
  "zip": "19801",
  "loc": {
    "y": 39.737752,
    "x": 75.549658
  },
  "pop": 15151,
  "state": "DE"
},{
  "city": "CLAYTON",
  "zip": "19938",
  "loc": {
    "y": 39.256395,
    "x": 75.690361
  },
  "pop": 4906,
  "state": "DE"
},{
  "city": "HARRINGTON",
  "zip": "19952",
  "loc": {
    "y": 38.924031,
    "x": 75.584268
  },
  "pop": 7972,
  "state": "DE"
},{
  "city": "WASHINGTON",
  "zip": "20011",
  "loc": {
    "y": 38.951786,
    "x": 77.020251
  },
  "pop": 62924,
  "state": "DC"
},{
  "city": "WASHINGTON",
  "zip": "20017",
  "loc": {
    "y": 38.936723,
    "x": 76.994038
  },
  "pop": 19548,
  "state": "DC"
},{
  "city": "GLEN SAINT MARY",
  "zip": "32040",
  "loc": {
    "y": 30.286058,
    "x": 82.204056
  },
  "pop": 6467,
  "state": "FL"
},{
  "city": "JENNINGS",
  "zip": "32053",
  "loc": {
    "y": 30.548243,
    "x": 83.134971
  },
  "pop": 2977,
  "state": "FL"
},{
  "city": "LAKE BUTLER",
  "zip": "32054",
  "loc": {
    "y": 30.003485,
    "x": 82.382796
  },
  "pop": 8658,
  "state": "FL"
},{
  "city": "DAYTONA BEACH",
  "zip": "32114",
  "loc": {
    "y": 29.201168,
    "x": 81.037071
  },
  "pop": 34235,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32211",
  "loc": {
    "y": 30.348034,
    "x": 81.588248
  },
  "pop": 54199,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32220",
  "loc": {
    "y": 30.329003,
    "x": 81.817572
  },
  "pop": 9389,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32221",
  "loc": {
    "y": 30.283707,
    "x": 81.820231
  },
  "pop": 18244,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32257",
  "loc": {
    "y": 30.192703,
    "x": 81.605042
  },
  "pop": 30022,
  "state": "FL"
},{
  "city": "PANAMA CITY BEAC",
  "zip": "32408",
  "loc": {
    "y": 30.160859,
    "x": 85.763628
  },
  "pop": 9702,
  "state": "FL"
},{
  "city": "SALEM",
  "zip": "32356",
  "loc": {
    "y": 29.823815,
    "x": 83.385828
  },
  "pop": 264,
  "state": "FL"
},{
  "city": "CARRABELLE",
  "zip": "32322",
  "loc": {
    "y": 29.869205,
    "x": 84.635845
  },
  "pop": 2138,
  "state": "FL"
},{
  "city": "CHATTAHOOCHEE",
  "zip": "32324",
  "loc": {
    "y": 30.683394,
    "x": 84.828044
  },
  "pop": 6325,
  "state": "FL"
},{
  "city": "EBRO",
  "zip": "32437",
  "loc": {
    "y": 30.435181,
    "x": 85.888066
  },
  "pop": 361,
  "state": "FL"
},{
  "city": "PONCE DE LEON",
  "zip": "32455",
  "loc": {
    "y": 30.704146,
    "x": 85.954633
  },
  "pop": 2200,
  "state": "FL"
},{
  "city": "BAKER",
  "zip": "32531",
  "loc": {
    "y": 30.831569,
    "x": 86.677015
  },
  "pop": 3389,
  "state": "FL"
},{
  "city": "GRAND RIDGE",
  "zip": "32442",
  "loc": {
    "y": 30.714831,
    "x": 85.020954
  },
  "pop": 1708,
  "state": "FL"
},{
  "city": "ARCHER",
  "zip": "32618",
  "loc": {
    "y": 29.559738,
    "x": 82.51084
  },
  "pop": 6188,
  "state": "FL"
},{
  "city": "PENSACOLA",
  "zip": "32501",
  "loc": {
    "y": 30.422282,
    "x": 87.224763
  },
  "pop": 16485,
  "state": "FL"
},{
  "city": "MORRISTON",
  "zip": "32668",
  "loc": {
    "y": 29.28126,
    "x": 82.491668
  },
  "pop": 2054,
  "state": "FL"
},{
  "city": "BRONSON",
  "zip": "32621",
  "loc": {
    "y": 29.460952,
    "x": 82.635644
  },
  "pop": 2111,
  "state": "FL"
},{
  "city": "NEWBERRY",
  "zip": "32669",
  "loc": {
    "y": 29.660906,
    "x": 82.585188
  },
  "pop": 5491,
  "state": "FL"
},{
  "city": "GAINESVILLE",
  "zip": "32606",
  "loc": {
    "y": 29.695393,
    "x": 82.402324
  },
  "pop": 18408,
  "state": "FL"
},{
  "city": "32675",
  "zip": "32675",
  "loc": {
    "y": 29.209198,
    "x": 82.231943
  },
  "pop": 21074,
  "state": "FL"
},{
  "city": "32665",
  "zip": "32665",
  "loc": {
    "y": 28.911886,
    "x": 82.501478
  },
  "pop": 11309,
  "state": "FL"
},{
  "city": "32691",
  "zip": "32691",
  "loc": {
    "y": 28.999563,
    "x": 82.046434
  },
  "pop": 10274,
  "state": "FL"
},{
  "city": "OLD TOWN",
  "zip": "32680",
  "loc": {
    "y": 29.624558,
    "x": 83.057393
  },
  "pop": 9494,
  "state": "FL"
},{
  "city": "FOREST CITY",
  "zip": "32714",
  "loc": {
    "y": 28.664983,
    "x": 81.408533
  },
  "pop": 29133,
  "state": "FL"
},{
  "city": "HEATHROW",
  "zip": "32746",
  "loc": {
    "y": 28.752352,
    "x": 81.338075
  },
  "pop": 9959,
  "state": "FL"
},{
  "city": "OSTEEN",
  "zip": "32764",
  "loc": {
    "y": 28.842617,
    "x": 81.156224
  },
  "pop": 2215,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32806",
  "loc": {
    "y": 28.513958,
    "x": 81.356968
  },
  "pop": 25996,
  "state": "FL"
},{
  "city": "GRAND ISLAND",
  "zip": "32735",
  "loc": {
    "y": 28.886552,
    "x": 81.739093
  },
  "pop": 1416,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32803",
  "loc": {
    "y": 28.555897,
    "x": 81.353462
  },
  "pop": 19992,
  "state": "FL"
},{
  "city": "TITUSVILLE",
  "zip": "32780",
  "loc": {
    "y": 28.569712,
    "x": 80.819141
  },
  "pop": 28649,
  "state": "FL"
},{
  "city": "VENTURA",
  "zip": "32822",
  "loc": {
    "y": 28.504765,
    "x": 81.293874
  },
  "pop": 33986,
  "state": "FL"
},{
  "city": "UNION PARK",
  "zip": "32820",
  "loc": {
    "y": 28.578256,
    "x": 81.110628
  },
  "pop": 2587,
  "state": "FL"
},{
  "city": "SEBASTIAN",
  "zip": "32958",
  "loc": {
    "y": 27.790082,
    "x": 80.478432
  },
  "pop": 14084,
  "state": "FL"
},{
  "city": "UNION PARK",
  "zip": "32817",
  "loc": {
    "y": 28.590251,
    "x": 81.253537
  },
  "pop": 20723,
  "state": "FL"
},{
  "city": "HIALEAH",
  "zip": "33012",
  "loc": {
    "y": 25.865395,
    "x": 80.3059
  },
  "pop": 73194,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32825",
  "loc": {
    "y": 28.546865,
    "x": 81.257081
  },
  "pop": 26373,
  "state": "FL"
},{
  "city": "POMPANO BEACH",
  "zip": "33068",
  "loc": {
    "y": 26.216021,
    "x": 80.22054
  },
  "pop": 41835,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32828",
  "loc": {
    "y": 28.552297,
    "x": 81.179489
  },
  "pop": 3249,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33126",
  "loc": {
    "y": 25.776255,
    "x": 80.291932
  },
  "pop": 39861,
  "state": "FL"
},{
  "city": "HIALEAH",
  "zip": "33014",
  "loc": {
    "y": 25.896349,
    "x": 80.306255
  },
  "pop": 35873,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33132",
  "loc": {
    "y": 25.786712,
    "x": 80.179996
  },
  "pop": 5198,
  "state": "FL"
},{
  "city": "HOLLYWOOD",
  "zip": "33028",
  "loc": {
    "y": 26.024804,
    "x": 80.330797
  },
  "pop": 186,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33135",
  "loc": {
    "y": 25.766391,
    "x": 80.231746
  },
  "pop": 35425,
  "state": "FL"
},{
  "city": "PEMBROKE PINES",
  "zip": "33024",
  "loc": {
    "y": 26.024273,
    "x": 80.240183
  },
  "pop": 54411,
  "state": "FL"
},{
  "city": "BAL HARBOUR",
  "zip": "33154",
  "loc": {
    "y": 25.879094,
    "x": 80.127055
  },
  "pop": 17312,
  "state": "FL"
},{
  "city": "OPA LOCKA",
  "zip": "33054",
  "loc": {
    "y": 25.909662,
    "x": 80.247004
  },
  "pop": 30405,
  "state": "FL"
},{
  "city": "QUAIL HEIGHTS",
  "zip": "33170",
  "loc": {
    "y": 25.558847,
    "x": 80.3981
  },
  "pop": 6842,
  "state": "FL"
},{
  "city": "CORAL SPRINGS",
  "zip": "33065",
  "loc": {
    "y": 26.271403,
    "x": 80.255578
  },
  "pop": 43659,
  "state": "FL"
},{
  "city": "WEST PALM BEACH",
  "zip": "33413",
  "loc": {
    "y": 26.67616,
    "x": 80.140474
  },
  "pop": 4864,
  "state": "FL"
},{
  "city": "POMPANO BEACH",
  "zip": "33062",
  "loc": {
    "y": 26.234314,
    "x": 80.094133
  },
  "pop": 20836,
  "state": "FL"
},{
  "city": "BOCA RATON",
  "zip": "33433",
  "loc": {
    "y": 26.346409,
    "x": 80.156399
  },
  "pop": 35495,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33158",
  "loc": {
    "y": 25.636433,
    "x": 80.318703
  },
  "pop": 6037,
  "state": "FL"
},{
  "city": "DEERFIELD BEACH",
  "zip": "33441",
  "loc": {
    "y": 26.309556,
    "x": 80.099173
  },
  "pop": 24529,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33168",
  "loc": {
    "y": 25.890232,
    "x": 80.210106
  },
  "pop": 21629,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33619",
  "loc": {
    "y": 27.93824,
    "x": 82.375558
  },
  "pop": 27185,
  "state": "FL"
},{
  "city": "OLYMPIA HEIGHTS",
  "zip": "33185",
  "loc": {
    "y": 25.718082,
    "x": 80.437366
  },
  "pop": 3606,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33626",
  "loc": {
    "y": 28.050932,
    "x": 82.616378
  },
  "pop": 2213,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33196",
  "loc": {
    "y": 25.661502,
    "x": 80.441031
  },
  "pop": 14612,
  "state": "FL"
},{
  "city": "DAVIE",
  "zip": "33331",
  "loc": {
    "y": 26.044366,
    "x": 80.364533
  },
  "pop": 6928,
  "state": "FL"
},{
  "city": "HAVERHILL",
  "zip": "33415",
  "loc": {
    "y": 26.655722,
    "x": 80.127966
  },
  "pop": 35663,
  "state": "FL"
},{
  "city": "VILLAGE OF GOLF",
  "zip": "33436",
  "loc": {
    "y": 26.526862,
    "x": 80.106423
  },
  "pop": 19263,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33603",
  "loc": {
    "y": 27.984534,
    "x": 82.462997
  },
  "pop": 19614,
  "state": "FL"
},{
  "city": "KENNETH CITY",
  "zip": "33709",
  "loc": {
    "y": 27.817427,
    "x": 82.729845
  },
  "pop": 26024,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33710",
  "loc": {
    "y": 27.789798,
    "x": 82.724285
  },
  "pop": 32402,
  "state": "FL"
},{
  "city": "HAVANA",
  "zip": "32333",
  "loc": {
    "y": 30.609242,
    "x": 84.41434
  },
  "pop": 9767,
  "state": "FL"
},{
  "city": "PERRY",
  "zip": "32347",
  "loc": {
    "y": 30.097489,
    "x": 83.585021
  },
  "pop": 15401,
  "state": "FL"
},{
  "city": "PANAMA CITY",
  "zip": "32403",
  "loc": {
    "y": 30.058252,
    "x": 85.576225
  },
  "pop": 5333,
  "state": "FL"
},{
  "city": "DE FUNIAK SPRING",
  "zip": "32433",
  "loc": {
    "y": 30.751783,
    "x": 86.138006
  },
  "pop": 15496,
  "state": "FL"
},{
  "city": "HOLT",
  "zip": "32564",
  "loc": {
    "y": 30.72522,
    "x": 86.704638
  },
  "pop": 1821,
  "state": "FL"
},{
  "city": "MILTON",
  "zip": "32570",
  "loc": {
    "y": 30.660413,
    "x": 87.047278
  },
  "pop": 20038,
  "state": "FL"
},{
  "city": "GAINESVILLE",
  "zip": "32608",
  "loc": {
    "y": 29.613204,
    "x": 82.387282
  },
  "pop": 22945,
  "state": "FL"
},{
  "city": "CHIEFLAND",
  "zip": "32626",
  "loc": {
    "y": 29.483243,
    "x": 82.880896
  },
  "pop": 7498,
  "state": "FL"
},{
  "city": "32636",
  "zip": "32636",
  "loc": {
    "y": 28.742508,
    "x": 82.290401
  },
  "pop": 7024,
  "state": "FL"
},{
  "city": "HAWTHORNE",
  "zip": "32640",
  "loc": {
    "y": 29.573998,
    "x": 82.105625
  },
  "pop": 4151,
  "state": "FL"
},{
  "city": "32674",
  "zip": "32674",
  "loc": {
    "y": 29.161336,
    "x": 82.172984
  },
  "pop": 12026,
  "state": "FL"
},{
  "city": "32649",
  "zip": "32649",
  "loc": {
    "y": 29.076034,
    "x": 82.661343
  },
  "pop": 4778,
  "state": "FL"
},{
  "city": "ALTOONA",
  "zip": "32702",
  "loc": {
    "y": 29.021935,
    "x": 81.632322
  },
  "pop": 1743,
  "state": "FL"
},{
  "city": "LONGWOOD",
  "zip": "32750",
  "loc": {
    "y": 28.711994,
    "x": 81.355238
  },
  "pop": 27633,
  "state": "FL"
},{
  "city": "WINTER PARK",
  "zip": "32789",
  "loc": {
    "y": 28.597824,
    "x": 81.353436
  },
  "pop": 24236,
  "state": "FL"
},{
  "city": "DELTONA",
  "zip": "32738",
  "loc": {
    "y": 28.909311,
    "x": 81.192171
  },
  "pop": 22426,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32812",
  "loc": {
    "y": 28.49981,
    "x": 81.328816
  },
  "pop": 26888,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32821",
  "loc": {
    "y": 28.395724,
    "x": 81.466602
  },
  "pop": 9982,
  "state": "FL"
},{
  "city": "PALM BAY",
  "zip": "32909",
  "loc": {
    "y": 27.96936,
    "x": 80.647327
  },
  "pop": 12028,
  "state": "FL"
},{
  "city": "HOMESTEAD",
  "zip": "33035",
  "loc": {
    "y": 25.457338,
    "x": 80.457153
  },
  "pop": 1727,
  "state": "FL"
},{
  "city": "POMPANO BEACH",
  "zip": "33076",
  "loc": {
    "y": 26.291902,
    "x": 80.248086
  },
  "pop": 4728,
  "state": "FL"
},{
  "city": "ALTHA",
  "zip": "32421",
  "loc": {
    "y": 30.531882,
    "x": 85.17043
  },
  "pop": 3280,
  "state": "FL"
},{
  "city": "MARGATE",
  "zip": "33063",
  "loc": {
    "y": 26.249221,
    "x": 80.211483
  },
  "pop": 37607,
  "state": "FL"
},{
  "city": "PENSACOLA",
  "zip": "32503",
  "loc": {
    "y": 30.456406,
    "x": 87.210432
  },
  "pop": 34491,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33179",
  "loc": {
    "y": 25.957095,
    "x": 80.181382
  },
  "pop": 31877,
  "state": "FL"
},{
  "city": "PENSACOLA",
  "zip": "32504",
  "loc": {
    "y": 30.487299,
    "x": 87.187242
  },
  "pop": 23077,
  "state": "FL"
},{
  "city": "DAVIE",
  "zip": "33330",
  "loc": {
    "y": 26.055479,
    "x": 80.312907
  },
  "pop": 9371,
  "state": "FL"
},{
  "city": "32661",
  "zip": "32661",
  "loc": {
    "y": 28.824661,
    "x": 82.528448
  },
  "pop": 20969,
  "state": "FL"
},{
  "city": "DAVIE",
  "zip": "33326",
  "loc": {
    "y": 26.114338,
    "x": 80.369941
  },
  "pop": 8393,
  "state": "FL"
},{
  "city": "MICANOPY",
  "zip": "32667",
  "loc": {
    "y": 29.526029,
    "x": 82.279698
  },
  "pop": 2409,
  "state": "FL"
},{
  "city": "WEST PALM BEACH",
  "zip": "33401",
  "loc": {
    "y": 26.713956,
    "x": 80.065874
  },
  "pop": 19833,
  "state": "FL"
},{
  "city": "32652",
  "zip": "32652",
  "loc": {
    "y": 28.80514,
    "x": 82.343647
  },
  "pop": 8683,
  "state": "FL"
},{
  "city": "BOCA RATON",
  "zip": "33431",
  "loc": {
    "y": 26.379929,
    "x": 80.097488
  },
  "pop": 13075,
  "state": "FL"
},{
  "city": "HORSESHOE BEACH",
  "zip": "32648",
  "loc": {
    "y": 29.48689,
    "x": 83.261587
  },
  "pop": 652,
  "state": "FL"
},{
  "city": "JUPITER",
  "zip": "33458",
  "loc": {
    "y": 26.933938,
    "x": 80.120091
  },
  "pop": 23869,
  "state": "FL"
},{
  "city": "TRENTON",
  "zip": "32693",
  "loc": {
    "y": 29.626375,
    "x": 82.809345
  },
  "pop": 6925,
  "state": "FL"
},{
  "city": "LITHIA",
  "zip": "33547",
  "loc": {
    "y": 27.829349,
    "x": 82.135679
  },
  "pop": 6780,
  "state": "FL"
},{
  "city": "FERN PARK",
  "zip": "32730",
  "loc": {
    "y": 28.651161,
    "x": 81.341837
  },
  "pop": 4815,
  "state": "FL"
},{
  "city": "FAIRVILLA",
  "zip": "32804",
  "loc": {
    "y": 28.576547,
    "x": 81.391955
  },
  "pop": 18087,
  "state": "FL"
},{
  "city": "PORT SAINT JOHN",
  "zip": "32927",
  "loc": {
    "y": 28.46844,
    "x": 80.791114
  },
  "pop": 17351,
  "state": "FL"
},{
  "city": "HOLLYWOOD",
  "zip": "33027",
  "loc": {
    "y": 25.997449,
    "x": 80.32484
  },
  "pop": 6955,
  "state": "FL"
},{
  "city": "LIGHTHOUSE POINT",
  "zip": "33064",
  "loc": {
    "y": 26.278698,
    "x": 80.112439
  },
  "pop": 50084,
  "state": "FL"
},{
  "city": "LAKE WORTH",
  "zip": "33460",
  "loc": {
    "y": 26.618207,
    "x": 80.055996
  },
  "pop": 28653,
  "state": "FL"
},{
  "city": "SOUTH BAY",
  "zip": "33493",
  "loc": {
    "y": 26.670126,
    "x": 80.731214
  },
  "pop": 3723,
  "state": "FL"
},{
  "city": "GIBSONTON",
  "zip": "33534",
  "loc": {
    "y": 27.841059,
    "x": 82.369831
  },
  "pop": 7010,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33713",
  "loc": {
    "y": 27.789015,
    "x": 82.677939
  },
  "pop": 29160,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33714",
  "loc": {
    "y": 27.817621,
    "x": 82.677612
  },
  "pop": 18227,
  "state": "FL"
},{
  "city": "SOPCHOPPY",
  "zip": "32358",
  "loc": {
    "y": 30.071353,
    "x": 84.454877
  },
  "pop": 3335,
  "state": "FL"
},{
  "city": "QUINCY",
  "zip": "32351",
  "loc": {
    "y": 30.586675,
    "x": 84.60945
  },
  "pop": 25013,
  "state": "FL"
},{
  "city": "PANAMA CITY",
  "zip": "32404",
  "loc": {
    "y": 30.165291,
    "x": 85.576264
  },
  "pop": 30101,
  "state": "FL"
},{
  "city": "BASCOM",
  "zip": "32423",
  "loc": {
    "y": 30.951365,
    "x": 85.09722
  },
  "pop": 1011,
  "state": "FL"
},{
  "city": "ALFORD",
  "zip": "32420",
  "loc": {
    "y": 30.714106,
    "x": 85.34838
  },
  "pop": 576,
  "state": "FL"
},{
  "city": "GAINESVILLE",
  "zip": "32609",
  "loc": {
    "y": 29.70053,
    "x": 82.308032
  },
  "pop": 17668,
  "state": "FL"
},{
  "city": "32650",
  "zip": "32650",
  "loc": {
    "y": 28.851002,
    "x": 82.320713
  },
  "pop": 15207,
  "state": "FL"
},{
  "city": "CASSELBERRY",
  "zip": "32707",
  "loc": {
    "y": 28.661671,
    "x": 81.312215
  },
  "pop": 30933,
  "state": "FL"
},{
  "city": "DEBARY",
  "zip": "32713",
  "loc": {
    "y": 28.884573,
    "x": 81.306506
  },
  "pop": 9491,
  "state": "FL"
},{
  "city": "ORANGE CITY",
  "zip": "32763",
  "loc": {
    "y": 28.945291,
    "x": 81.299524
  },
  "pop": 12946,
  "state": "FL"
},{
  "city": "SANFORD",
  "zip": "32771",
  "loc": {
    "y": 28.801307,
    "x": 81.285044
  },
  "pop": 27016,
  "state": "FL"
},{
  "city": "PAISLEY",
  "zip": "32767",
  "loc": {
    "y": 28.999323,
    "x": 81.503009
  },
  "pop": 1963,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32805",
  "loc": {
    "y": 28.5302,
    "x": 81.404516
  },
  "pop": 29117,
  "state": "FL"
},{
  "city": "KENNEDY SPACE CE",
  "zip": "32815",
  "loc": {
    "y": 28.498821,
    "x": 80.58248
  },
  "pop": 1,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32827",
  "loc": {
    "y": 28.43168,
    "x": 81.342979
  },
  "pop": 3831,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32832",
  "loc": {
    "y": 28.377428,
    "x": 81.188807
  },
  "pop": 1863,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32839",
  "loc": {
    "y": 28.487102,
    "x": 81.408162
  },
  "pop": 33946,
  "state": "FL"
},{
  "city": "PALM BAY",
  "zip": "32907",
  "loc": {
    "y": 28.016849,
    "x": 80.673889
  },
  "pop": 25674,
  "state": "FL"
},{
  "city": "EAU GALLIE",
  "zip": "32934",
  "loc": {
    "y": 28.136822,
    "x": 80.691683
  },
  "pop": 9539,
  "state": "FL"
},{
  "city": "MELBOURNE",
  "zip": "32940",
  "loc": {
    "y": 28.206136,
    "x": 80.684959
  },
  "pop": 5360,
  "state": "FL"
},{
  "city": "INDIAN HARBOR BE",
  "zip": "32937",
  "loc": {
    "y": 28.178571,
    "x": 80.598671
  },
  "pop": 28921,
  "state": "FL"
},{
  "city": "PRINCETON",
  "zip": "33032",
  "loc": {
    "y": 25.521191,
    "x": 80.40918
  },
  "pop": 18070,
  "state": "FL"
},{
  "city": "CAROL CITY",
  "zip": "33056",
  "loc": {
    "y": 25.946906,
    "x": 80.248059
  },
  "pop": 31968,
  "state": "FL"
},{
  "city": "SOUTH MIAMI",
  "zip": "33143",
  "loc": {
    "y": 25.700252,
    "x": 80.301408
  },
  "pop": 28410,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33150",
  "loc": {
    "y": 25.851214,
    "x": 80.206968
  },
  "pop": 28408,
  "state": "FL"
},{
  "city": "OJUS",
  "zip": "33180",
  "loc": {
    "y": 25.961902,
    "x": 80.139447
  },
  "pop": 14167,
  "state": "FL"
},{
  "city": "NORTH MIAMI BEAC",
  "zip": "33181",
  "loc": {
    "y": 25.896548,
    "x": 80.160329
  },
  "pop": 14089,
  "state": "FL"
},{
  "city": "OAKLAND PARK",
  "zip": "33306",
  "loc": {
    "y": 26.165091,
    "x": 80.112572
  },
  "pop": 3424,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33193",
  "loc": {
    "y": 25.696365,
    "x": 80.440087
  },
  "pop": 17432,
  "state": "FL"
},{
  "city": "TAMARAC",
  "zip": "33321",
  "loc": {
    "y": 26.212072,
    "x": 80.264356
  },
  "pop": 29504,
  "state": "FL"
},{
  "city": "FORT LAUDERDALE",
  "zip": "33388",
  "loc": {
    "y": 26.117586,
    "x": 80.250587
  },
  "pop": 435,
  "state": "FL"
},{
  "city": "WEST PALM BEACH",
  "zip": "33405",
  "loc": {
    "y": 26.669968,
    "x": 80.058234
  },
  "pop": 18164,
  "state": "FL"
},{
  "city": "CANAL POINT",
  "zip": "33438",
  "loc": {
    "y": 26.859279,
    "x": 80.629931
  },
  "pop": 1494,
  "state": "FL"
},{
  "city": "BOYNTON BEACH",
  "zip": "33437",
  "loc": {
    "y": 26.531187,
    "x": 80.141812
  },
  "pop": 14809,
  "state": "FL"
},{
  "city": "BRANDON",
  "zip": "33511",
  "loc": {
    "y": 27.905649,
    "x": 82.288116
  },
  "pop": 29861,
  "state": "FL"
},{
  "city": "RIDGE MANOR",
  "zip": "33525",
  "loc": {
    "y": 28.386912,
    "x": 82.207936
  },
  "pop": 29328,
  "state": "FL"
},{
  "city": "LUTZ",
  "zip": "33549",
  "loc": {
    "y": 28.136688,
    "x": 82.461045
  },
  "pop": 30905,
  "state": "FL"
},{
  "city": "SAN ANTONIO",
  "zip": "33576",
  "loc": {
    "y": 28.337139,
    "x": 82.288237
  },
  "pop": 1396,
  "state": "FL"
},{
  "city": "THONOTOSASSA",
  "zip": "33592",
  "loc": {
    "y": 28.061747,
    "x": 82.308212
  },
  "pop": 9009,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33602",
  "loc": {
    "y": 27.961381,
    "x": 82.45972
  },
  "pop": 8473,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33702",
  "loc": {
    "y": 27.842712,
    "x": 82.644795
  },
  "pop": 28888,
  "state": "FL"
},{
  "city": "LYNN HAVEN",
  "zip": "32444",
  "loc": {
    "y": 30.236165,
    "x": 85.646658
  },
  "pop": 12205,
  "state": "FL"
},{
  "city": "MALONE",
  "zip": "32445",
  "loc": {
    "y": 30.960245,
    "x": 85.163874
  },
  "pop": 1046,
  "state": "FL"
},{
  "city": "KINARD",
  "zip": "32449",
  "loc": {
    "y": 30.263241,
    "x": 85.206467
  },
  "pop": 297,
  "state": "FL"
},{
  "city": "SANTA ROSA BEACH",
  "zip": "32459",
  "loc": {
    "y": 30.365883,
    "x": 86.245809
  },
  "pop": 5039,
  "state": "FL"
},{
  "city": "PENSACOLA",
  "zip": "32507",
  "loc": {
    "y": 30.373707,
    "x": 87.312558
  },
  "pop": 23525,
  "state": "FL"
},{
  "city": "WALNUT HILL",
  "zip": "32568",
  "loc": {
    "y": 30.870043,
    "x": 87.449628
  },
  "pop": 3604,
  "state": "FL"
},{
  "city": "32630",
  "zip": "32630",
  "loc": {
    "y": 29.063564,
    "x": 82.433118
  },
  "pop": 20682,
  "state": "FL"
},{
  "city": "KEYSTONE HEIGHTS",
  "zip": "32656",
  "loc": {
    "y": 29.797579,
    "x": 81.989885
  },
  "pop": 8011,
  "state": "FL"
},{
  "city": "REDDICK",
  "zip": "32686",
  "loc": {
    "y": 29.375352,
    "x": 82.243995
  },
  "pop": 10006,
  "state": "FL"
},{
  "city": "DELAND",
  "zip": "32724",
  "loc": {
    "y": 29.04225,
    "x": 81.286341
  },
  "pop": 21715,
  "state": "FL"
},{
  "city": "VERO BEACH",
  "zip": "32968",
  "loc": {
    "y": 27.59993,
    "x": 80.438223
  },
  "pop": 5238,
  "state": "FL"
},{
  "city": "VERO BEACH",
  "zip": "32966",
  "loc": {
    "y": 27.637214,
    "x": 80.47939
  },
  "pop": 10687,
  "state": "FL"
},{
  "city": "VERO BEACH",
  "zip": "32967",
  "loc": {
    "y": 27.697223,
    "x": 80.441617
  },
  "pop": 9607,
  "state": "FL"
},{
  "city": "OCEAN REEF",
  "zip": "33037",
  "loc": {
    "y": 25.140214,
    "x": 80.406084
  },
  "pop": 12076,
  "state": "FL"
},{
  "city": "NORTH CORAL SPRI",
  "zip": "33067",
  "loc": {
    "y": 26.305134,
    "x": 80.22188
  },
  "pop": 7227,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33129",
  "loc": {
    "y": 25.755926,
    "x": 80.201301
  },
  "pop": 10225,
  "state": "FL"
},{
  "city": "NORTH BAY VILLAG",
  "zip": "33141",
  "loc": {
    "y": 25.852384,
    "x": 80.133578
  },
  "pop": 29489,
  "state": "FL"
},{
  "city": "NORTH MIAMI",
  "zip": "33161",
  "loc": {
    "y": 25.893806,
    "x": 80.182034
  },
  "pop": 44800,
  "state": "FL"
},{
  "city": "TAMARAC",
  "zip": "33319",
  "loc": {
    "y": 26.181153,
    "x": 80.225413
  },
  "pop": 36178,
  "state": "FL"
},{
  "city": "FORT LAUDERDALE",
  "zip": "33327",
  "loc": {
    "y": 26.097291,
    "x": 80.40645
  },
  "pop": 4605,
  "state": "FL"
},{
  "city": "BRINY BREEZES",
  "zip": "33435",
  "loc": {
    "y": 26.529161,
    "x": 80.06424
  },
  "pop": 28536,
  "state": "FL"
},{
  "city": "DELRAY BEACH",
  "zip": "33446",
  "loc": {
    "y": 26.451717,
    "x": 80.158016
  },
  "pop": 13016,
  "state": "FL"
},{
  "city": "LAKE WORTH",
  "zip": "33461",
  "loc": {
    "y": 26.62316,
    "x": 80.094573
  },
  "pop": 30905,
  "state": "FL"
},{
  "city": "DELRAY BEACH",
  "zip": "33483",
  "loc": {
    "y": 26.45457,
    "x": 80.065637
  },
  "pop": 10326,
  "state": "FL"
},{
  "city": "CLEWISTON",
  "zip": "33440",
  "loc": {
    "y": 26.717171,
    "x": 80.949249
  },
  "pop": 14427,
  "state": "FL"
},{
  "city": "ZEPHYRHILLS",
  "zip": "33541",
  "loc": {
    "y": 28.231063,
    "x": 82.20566
  },
  "pop": 17575,
  "state": "FL"
},{
  "city": "PLANT CITY",
  "zip": "33567",
  "loc": {
    "y": 27.976167,
    "x": 82.146268
  },
  "pop": 18937,
  "state": "FL"
},{
  "city": "SEFFNER",
  "zip": "33584",
  "loc": {
    "y": 27.992199,
    "x": 82.286296
  },
  "pop": 20956,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33647",
  "loc": {
    "y": 28.114698,
    "x": 82.367751
  },
  "pop": 5866,
  "state": "FL"
},{
  "city": "MADEIRA BEACH",
  "zip": "33708",
  "loc": {
    "y": 27.816529,
    "x": 82.800779
  },
  "pop": 18018,
  "state": "FL"
},{
  "city": "LAKELAND",
  "zip": "33801",
  "loc": {
    "y": 28.038134,
    "x": 81.939153
  },
  "pop": 45005,
  "state": "FL"
},{
  "city": "CLARKSVILLE",
  "zip": "32430",
  "loc": {
    "y": 30.356834,
    "x": 85.189806
  },
  "pop": 129,
  "state": "FL"
},{
  "city": "FOUNTAIN",
  "zip": "32438",
  "loc": {
    "y": 30.475327,
    "x": 85.429272
  },
  "pop": 1869,
  "state": "FL"
},{
  "city": "YOUNGSTOWN",
  "zip": "32466",
  "loc": {
    "y": 30.326913,
    "x": 85.516881
  },
  "pop": 3634,
  "state": "FL"
},{
  "city": "PENSACOLA",
  "zip": "32514",
  "loc": {
    "y": 30.524148,
    "x": 87.216723
  },
  "pop": 30185,
  "state": "FL"
},{
  "city": "PENSACOLA",
  "zip": "32534",
  "loc": {
    "y": 30.530065,
    "x": 87.279324
  },
  "pop": 12046,
  "state": "FL"
},{
  "city": "WESTVILLE",
  "zip": "32464",
  "loc": {
    "y": 30.874689,
    "x": 85.912973
  },
  "pop": 3081,
  "state": "FL"
},{
  "city": "WEWAHITCHKA",
  "zip": "32465",
  "loc": {
    "y": 30.093255,
    "x": 85.20483
  },
  "pop": 4014,
  "state": "FL"
},{
  "city": "PACE",
  "zip": "32571",
  "loc": {
    "y": 30.616173,
    "x": 87.15033
  },
  "pop": 15661,
  "state": "FL"
},{
  "city": "NICEVILLE",
  "zip": "32578",
  "loc": {
    "y": 30.495771,
    "x": 86.41446
  },
  "pop": 25146,
  "state": "FL"
},{
  "city": "GAINESVILLE",
  "zip": "32611",
  "loc": {
    "y": 29.644148,
    "x": 82.35092
  },
  "pop": 8023,
  "state": "FL"
},{
  "city": "BROOKER",
  "zip": "32622",
  "loc": {
    "y": 29.919028,
    "x": 82.295634
  },
  "pop": 1194,
  "state": "FL"
},{
  "city": "32698",
  "zip": "32698",
  "loc": {
    "y": 29.022103,
    "x": 82.728163
  },
  "pop": 173,
  "state": "FL"
},{
  "city": "ALTAMONTE SPRING",
  "zip": "32701",
  "loc": {
    "y": 28.662728,
    "x": 81.371908
  },
  "pop": 21392,
  "state": "FL"
},{
  "city": "MIMS",
  "zip": "32754",
  "loc": {
    "y": 28.697383,
    "x": 80.866278
  },
  "pop": 8943,
  "state": "FL"
},{
  "city": "CHULUOTA",
  "zip": "32766",
  "loc": {
    "y": 28.640634,
    "x": 81.118237
  },
  "pop": 3280,
  "state": "FL"
},{
  "city": "ALOMA",
  "zip": "32792",
  "loc": {
    "y": 28.60779,
    "x": 81.302112
  },
  "pop": 44973,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32824",
  "loc": {
    "y": 28.393157,
    "x": 81.362187
  },
  "pop": 8225,
  "state": "FL"
},{
  "city": "HOLLYWOOD",
  "zip": "33021",
  "loc": {
    "y": 26.021836,
    "x": 80.189085
  },
  "pop": 39987,
  "state": "FL"
},{
  "city": "ISLAMORADA",
  "zip": "33036",
  "loc": {
    "y": 24.923331,
    "x": 80.629953
  },
  "pop": 3810,
  "state": "FL"
},{
  "city": "CORAL GABLES",
  "zip": "33146",
  "loc": {
    "y": 25.720089,
    "x": 80.274649
  },
  "pop": 13791,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33183",
  "loc": {
    "y": 25.699977,
    "x": 80.412969
  },
  "pop": 32077,
  "state": "FL"
},{
  "city": "OAKLAND PARK",
  "zip": "33308",
  "loc": {
    "y": 26.187883,
    "x": 80.107674
  },
  "pop": 28624,
  "state": "FL"
},{
  "city": "FORT LAUDERDALE",
  "zip": "33309",
  "loc": {
    "y": 26.181698,
    "x": 80.174624
  },
  "pop": 28226,
  "state": "FL"
},{
  "city": "PLANTATION",
  "zip": "33317",
  "loc": {
    "y": 26.113536,
    "x": 80.224272
  },
  "pop": 31518,
  "state": "FL"
},{
  "city": "TAMARAC",
  "zip": "33351",
  "loc": {
    "y": 26.177148,
    "x": 80.273376
  },
  "pop": 26228,
  "state": "FL"
},{
  "city": "NORTH PALM BEACH",
  "zip": "33408",
  "loc": {
    "y": 26.828854,
    "x": 80.060334
  },
  "pop": 17968,
  "state": "FL"
},{
  "city": "LAKE PARK",
  "zip": "33403",
  "loc": {
    "y": 26.803187,
    "x": 80.073078
  },
  "pop": 8743,
  "state": "FL"
},{
  "city": "WEST PALM BEACH",
  "zip": "33414",
  "loc": {
    "y": 26.662707,
    "x": 80.25299
  },
  "pop": 22046,
  "state": "FL"
},{
  "city": "DOVER",
  "zip": "33527",
  "loc": {
    "y": 27.991975,
    "x": 82.213845
  },
  "pop": 13171,
  "state": "FL"
},{
  "city": "APOLLO BEACH",
  "zip": "33572",
  "loc": {
    "y": 27.771553,
    "x": 82.410199
  },
  "pop": 6074,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33635",
  "loc": {
    "y": 28.03013,
    "x": 82.604822
  },
  "pop": 6241,
  "state": "FL"
},{
  "city": "BONIFAY",
  "zip": "32425",
  "loc": {
    "y": 30.846369,
    "x": 85.689962
  },
  "pop": 9342,
  "state": "FL"
},{
  "city": "PENSACOLA",
  "zip": "32505",
  "loc": {
    "y": 30.448069,
    "x": 87.258937
  },
  "pop": 29026,
  "state": "FL"
},{
  "city": "PENSACOLA",
  "zip": "32526",
  "loc": {
    "y": 30.475593,
    "x": 87.317925
  },
  "pop": 28674,
  "state": "FL"
},{
  "city": "GULF BREEZE",
  "zip": "32561",
  "loc": {
    "y": 30.3847,
    "x": 87.043875
  },
  "pop": 27875,
  "state": "FL"
},{
  "city": "FORT WALTON BEAC",
  "zip": "32548",
  "loc": {
    "y": 30.415262,
    "x": 86.621479
  },
  "pop": 21791,
  "state": "FL"
},{
  "city": "VALPARAISO",
  "zip": "32580",
  "loc": {
    "y": 30.509197,
    "x": 86.500914
  },
  "pop": 4964,
  "state": "FL"
},{
  "city": "32670",
  "zip": "32670",
  "loc": {
    "y": 29.216545,
    "x": 82.111182
  },
  "pop": 24226,
  "state": "FL"
},{
  "city": "APOPKA",
  "zip": "32712",
  "loc": {
    "y": 28.711976,
    "x": 81.513615
  },
  "pop": 20208,
  "state": "FL"
},{
  "city": "OVIEDO",
  "zip": "32765",
  "loc": {
    "y": 28.651256,
    "x": 81.206593
  },
  "pop": 19519,
  "state": "FL"
},{
  "city": "SANFORD",
  "zip": "32773",
  "loc": {
    "y": 28.764385,
    "x": 81.282042
  },
  "pop": 19707,
  "state": "FL"
},{
  "city": "TITUSVILLE",
  "zip": "32796",
  "loc": {
    "y": 28.627078,
    "x": 80.842915
  },
  "pop": 19916,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32818",
  "loc": {
    "y": 28.580147,
    "x": 81.484618
  },
  "pop": 26887,
  "state": "FL"
},{
  "city": "LAKE BUENA VISTA",
  "zip": "32830",
  "loc": {
    "y": 28.369378,
    "x": 81.519034
  },
  "pop": 6,
  "state": "FL"
},{
  "city": "HIALEAH",
  "zip": "33010",
  "loc": {
    "y": 25.832536,
    "x": 80.280801
  },
  "pop": 40437,
  "state": "FL"
},{
  "city": "HIALEAH",
  "zip": "33015",
  "loc": {
    "y": 25.938841,
    "x": 80.316545
  },
  "pop": 31171,
  "state": "FL"
},{
  "city": "HOMESTEAD",
  "zip": "33033",
  "loc": {
    "y": 25.490576,
    "x": 80.438014
  },
  "pop": 25439,
  "state": "FL"
},{
  "city": "BIG PINE KEY",
  "zip": "33043",
  "loc": {
    "y": 24.679996,
    "x": 81.362029
  },
  "pop": 5956,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33125",
  "loc": {
    "y": 25.782547,
    "x": 80.234118
  },
  "pop": 47761,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33127",
  "loc": {
    "y": 25.814344,
    "x": 80.205121
  },
  "pop": 29900,
  "state": "FL"
},{
  "city": "NORTH MIAMI BEAC",
  "zip": "33160",
  "loc": {
    "y": 25.936086,
    "x": 80.135141
  },
  "pop": 26987,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33169",
  "loc": {
    "y": 25.944083,
    "x": 80.21436
  },
  "pop": 30294,
  "state": "FL"
},{
  "city": "QUAIL HEIGHTS",
  "zip": "33187",
  "loc": {
    "y": 25.597112,
    "x": 80.47137
  },
  "pop": 6882,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33186",
  "loc": {
    "y": 25.669437,
    "x": 80.408501
  },
  "pop": 43611,
  "state": "FL"
},{
  "city": "PLANTATION",
  "zip": "33324",
  "loc": {
    "y": 26.113639,
    "x": 80.271019
  },
  "pop": 29427,
  "state": "FL"
},{
  "city": "LOXAHATCHEE",
  "zip": "33470",
  "loc": {
    "y": 26.738295,
    "x": 80.276007
  },
  "pop": 14094,
  "state": "FL"
},{
  "city": "PALM BEACH",
  "zip": "33480",
  "loc": {
    "y": 26.72065,
    "x": 80.038825
  },
  "pop": 6588,
  "state": "FL"
},{
  "city": "HIGHLAND BEACH",
  "zip": "33487",
  "loc": {
    "y": 26.409142,
    "x": 80.089072
  },
  "pop": 14606,
  "state": "FL"
},{
  "city": "RUSKIN",
  "zip": "33570",
  "loc": {
    "y": 27.701501,
    "x": 82.435501
  },
  "pop": 14654,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33608",
  "loc": {
    "y": 27.865916,
    "x": 82.507097
  },
  "pop": 3578,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33615",
  "loc": {
    "y": 28.008057,
    "x": 82.580495
  },
  "pop": 36532,
  "state": "FL"
},{
  "city": "CARROLLWOOD",
  "zip": "33618",
  "loc": {
    "y": 28.075875,
    "x": 82.493291
  },
  "pop": 20229,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33637",
  "loc": {
    "y": 28.03377,
    "x": 82.365876
  },
  "pop": 9673,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33701",
  "loc": {
    "y": 27.772318,
    "x": 82.638609
  },
  "pop": 15737,
  "state": "FL"
},{
  "city": "PANAMA CITY",
  "zip": "32405",
  "loc": {
    "y": 30.194949,
    "x": 85.672686
  },
  "pop": 25701,
  "state": "FL"
},{
  "city": "PANACEA",
  "zip": "32346",
  "loc": {
    "y": 30.015322,
    "x": 84.391212
  },
  "pop": 1292,
  "state": "FL"
},{
  "city": "PANAMA CITY BEAC",
  "zip": "32413",
  "loc": {
    "y": 30.245835,
    "x": 85.904946
  },
  "pop": 5646,
  "state": "FL"
},{
  "city": "PENSACOLA",
  "zip": "32506",
  "loc": {
    "y": 30.412912,
    "x": 87.309185
  },
  "pop": 29834,
  "state": "FL"
},{
  "city": "PENSACOLA",
  "zip": "32508",
  "loc": {
    "y": 30.351063,
    "x": 87.274945
  },
  "pop": 3688,
  "state": "FL"
},{
  "city": "JAY",
  "zip": "32565",
  "loc": {
    "y": 30.898488,
    "x": 87.133237
  },
  "pop": 5952,
  "state": "FL"
},{
  "city": "EARLETON",
  "zip": "32631",
  "loc": {
    "y": 29.722159,
    "x": 82.113762
  },
  "pop": 1014,
  "state": "FL"
},{
  "city": "32672",
  "zip": "32672",
  "loc": {
    "y": 29.109572,
    "x": 82.012052
  },
  "pop": 14868,
  "state": "FL"
},{
  "city": "DELAND",
  "zip": "32720",
  "loc": {
    "y": 29.02659,
    "x": 81.334853
  },
  "pop": 23152,
  "state": "FL"
},{
  "city": "32688",
  "zip": "32688",
  "loc": {
    "y": 29.226185,
    "x": 82.043715
  },
  "pop": 1337,
  "state": "FL"
},{
  "city": "GENEVA",
  "zip": "32732",
  "loc": {
    "y": 28.750299,
    "x": 81.11137
  },
  "pop": 3827,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32801",
  "loc": {
    "y": 28.539882,
    "x": 81.372668
  },
  "pop": 9275,
  "state": "FL"
},{
  "city": "PINE CASTLE",
  "zip": "32809",
  "loc": {
    "y": 28.461916,
    "x": 81.381751
  },
  "pop": 17602,
  "state": "FL"
},{
  "city": "SAND LAKE",
  "zip": "32819",
  "loc": {
    "y": 28.467258,
    "x": 81.452484
  },
  "pop": 4434,
  "state": "FL"
},{
  "city": "MELBOURNE",
  "zip": "32901",
  "loc": {
    "y": 28.069132,
    "x": 80.620015
  },
  "pop": 21138,
  "state": "FL"
},{
  "city": "PALM BAY",
  "zip": "32908",
  "loc": {
    "y": 27.981636,
    "x": 80.689426
  },
  "pop": 3272,
  "state": "FL"
},{
  "city": "COCOA",
  "zip": "32922",
  "loc": {
    "y": 28.367183,
    "x": 80.746455
  },
  "pop": 17316,
  "state": "FL"
},{
  "city": "COCOA",
  "zip": "32926",
  "loc": {
    "y": 28.390987,
    "x": 80.786969
  },
  "pop": 17930,
  "state": "FL"
},{
  "city": "MELBOURNE BEACH",
  "zip": "32951",
  "loc": {
    "y": 28.021923,
    "x": 80.538936
  },
  "pop": 8060,
  "state": "FL"
},{
  "city": "MERRITT ISLAND",
  "zip": "32953",
  "loc": {
    "y": 28.391234,
    "x": 80.695865
  },
  "pop": 23338,
  "state": "FL"
},{
  "city": "NAVAL AIR STATIO",
  "zip": "33040",
  "loc": {
    "y": 24.565313,
    "x": 81.762179
  },
  "pop": 32986,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33128",
  "loc": {
    "y": 25.775612,
    "x": 80.208858
  },
  "pop": 6965,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33142",
  "loc": {
    "y": 25.812966,
    "x": 80.232023
  },
  "pop": 52262,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33174",
  "loc": {
    "y": 25.762779,
    "x": 80.361128
  },
  "pop": 27442,
  "state": "FL"
},{
  "city": "QUAIL HEIGHTS",
  "zip": "33189",
  "loc": {
    "y": 25.57431,
    "x": 80.350851
  },
  "pop": 15680,
  "state": "FL"
},{
  "city": "FORT LAUDERDALE",
  "zip": "33315",
  "loc": {
    "y": 26.098885,
    "x": 80.15408
  },
  "pop": 12849,
  "state": "FL"
},{
  "city": "OAKLAND PARK",
  "zip": "33305",
  "loc": {
    "y": 26.153115,
    "x": 80.127768
  },
  "pop": 11018,
  "state": "FL"
},{
  "city": "RIVIERA BEACH",
  "zip": "33404",
  "loc": {
    "y": 26.781343,
    "x": 80.06852
  },
  "pop": 27997,
  "state": "FL"
},{
  "city": "HAVERHILL",
  "zip": "33417",
  "loc": {
    "y": 26.713006,
    "x": 80.124764
  },
  "pop": 25892,
  "state": "FL"
},{
  "city": "HOBE SOUND",
  "zip": "33455",
  "loc": {
    "y": 27.081306,
    "x": 80.150851
  },
  "pop": 15209,
  "state": "FL"
},{
  "city": "LANTANA",
  "zip": "33462",
  "loc": {
    "y": 26.576766,
    "x": 80.077264
  },
  "pop": 30704,
  "state": "FL"
},{
  "city": "RIVERVIEW",
  "zip": "33569",
  "loc": {
    "y": 27.844952,
    "x": 82.312473
  },
  "pop": 21930,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33604",
  "loc": {
    "y": 28.017312,
    "x": 82.457848
  },
  "pop": 34243,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33607",
  "loc": {
    "y": 27.962538,
    "x": 82.489535
  },
  "pop": 22386,
  "state": "FL"
},{
  "city": "PANAMA CITY",
  "zip": "32401",
  "loc": {
    "y": 30.160624,
    "x": 85.649403
  },
  "pop": 24968,
  "state": "FL"
},{
  "city": "GREENWOOD",
  "zip": "32443",
  "loc": {
    "y": 30.852506,
    "x": 85.15549
  },
  "pop": 4058,
  "state": "FL"
},{
  "city": "CHIPLEY",
  "zip": "32428",
  "loc": {
    "y": 30.710658,
    "x": 85.548646
  },
  "pop": 11248,
  "state": "FL"
},{
  "city": "32620",
  "zip": "32620",
  "loc": {
    "y": 29.050444,
    "x": 82.04621
  },
  "pop": 11567,
  "state": "FL"
},{
  "city": "HIGH SPRINGS",
  "zip": "32643",
  "loc": {
    "y": 29.841022,
    "x": 82.615628
  },
  "pop": 7557,
  "state": "FL"
},{
  "city": "32676",
  "zip": "32676",
  "loc": {
    "y": 29.078026,
    "x": 82.18804
  },
  "pop": 9663,
  "state": "FL"
},{
  "city": "DELTONA",
  "zip": "32725",
  "loc": {
    "y": 28.898897,
    "x": 81.247307
  },
  "pop": 27678,
  "state": "FL"
},{
  "city": "SORRENTO",
  "zip": "32776",
  "loc": {
    "y": 28.803519,
    "x": 81.532317
  },
  "pop": 5382,
  "state": "FL"
},{
  "city": "NAVAL TRAINING C",
  "zip": "32813",
  "loc": {
    "y": 28.570467,
    "x": 81.328966
  },
  "pop": 9216,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32835",
  "loc": {
    "y": 28.528885,
    "x": 81.478663
  },
  "pop": 20343,
  "state": "FL"
},{
  "city": "COCOA BEACH",
  "zip": "32931",
  "loc": {
    "y": 28.332451,
    "x": 80.612066
  },
  "pop": 14989,
  "state": "FL"
},{
  "city": "INDIAN RIVER SHO",
  "zip": "32963",
  "loc": {
    "y": 27.653623,
    "x": 80.360916
  },
  "pop": 10980,
  "state": "FL"
},{
  "city": "HOLLYWOOD",
  "zip": "33020",
  "loc": {
    "y": 26.016091,
    "x": 80.15166
  },
  "pop": 35468,
  "state": "FL"
},{
  "city": "HOLLYWOOD",
  "zip": "33019",
  "loc": {
    "y": 26.007011,
    "x": 80.121931
  },
  "pop": 12115,
  "state": "FL"
},{
  "city": "BAREFOOT BAY",
  "zip": "32976",
  "loc": {
    "y": 27.878146,
    "x": 80.516051
  },
  "pop": 7870,
  "state": "FL"
},{
  "city": "PEMBROKE PINES",
  "zip": "33029",
  "loc": {
    "y": 26.01375,
    "x": 80.428407
  },
  "pop": 2882,
  "state": "FL"
},{
  "city": "FLORIDA CITY",
  "zip": "33034",
  "loc": {
    "y": 25.396332,
    "x": 80.548438
  },
  "pop": 12115,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33136",
  "loc": {
    "y": 25.786385,
    "x": 80.204232
  },
  "pop": 14040,
  "state": "FL"
},{
  "city": "KENDALL",
  "zip": "33156",
  "loc": {
    "y": 25.66767,
    "x": 80.308535
  },
  "pop": 27901,
  "state": "FL"
},{
  "city": "MIAMI SPRINGS",
  "zip": "33166",
  "loc": {
    "y": 25.817473,
    "x": 80.29902
  },
  "pop": 21066,
  "state": "FL"
},{
  "city": "SUNRISE",
  "zip": "33322",
  "loc": {
    "y": 26.151923,
    "x": 80.271954
  },
  "pop": 37348,
  "state": "FL"
},{
  "city": "HAVERHILL",
  "zip": "33409",
  "loc": {
    "y": 26.713218,
    "x": 80.096347
  },
  "pop": 16142,
  "state": "FL"
},{
  "city": "ROYAL PALM BEACH",
  "zip": "33411",
  "loc": {
    "y": 26.700539,
    "x": 80.209898
  },
  "pop": 21027,
  "state": "FL"
},{
  "city": "BOYNTON BEACH",
  "zip": "33426",
  "loc": {
    "y": 26.51747,
    "x": 80.083427
  },
  "pop": 9390,
  "state": "FL"
},{
  "city": "BELLE GLADE",
  "zip": "33430",
  "loc": {
    "y": 26.684289,
    "x": 80.672392
  },
  "pop": 22652,
  "state": "FL"
},{
  "city": "MOORE HAVEN",
  "zip": "33471",
  "loc": {
    "y": 26.832749,
    "x": 81.218776
  },
  "pop": 4724,
  "state": "FL"
},{
  "city": "LAKE PANASOFFKEE",
  "zip": "33538",
  "loc": {
    "y": 28.795261,
    "x": 82.136279
  },
  "pop": 3617,
  "state": "FL"
},{
  "city": "ZEPHYRHILLS",
  "zip": "33540",
  "loc": {
    "y": 28.24096,
    "x": 82.168347
  },
  "pop": 15608,
  "state": "FL"
},{
  "city": "RIDGE MANOR ESTA",
  "zip": "33597",
  "loc": {
    "y": 28.577492,
    "x": 82.092975
  },
  "pop": 5880,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33613",
  "loc": {
    "y": 28.077184,
    "x": 82.445519
  },
  "pop": 24849,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33617",
  "loc": {
    "y": 28.038358,
    "x": 82.394876
  },
  "pop": 38114,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33620",
  "loc": {
    "y": 28.069465,
    "x": 82.409188
  },
  "pop": 3757,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33706",
  "loc": {
    "y": 27.745606,
    "x": 82.751646
  },
  "pop": 18974,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33703",
  "loc": {
    "y": 27.816957,
    "x": 82.626393
  },
  "pop": 23348,
  "state": "FL"
},{
  "city": "LAMONT",
  "zip": "32336",
  "loc": {
    "y": 30.365341,
    "x": 83.900266
  },
  "pop": 1409,
  "state": "FL"
},{
  "city": "STEINHATCHEE",
  "zip": "32359",
  "loc": {
    "y": 29.673871,
    "x": 83.372332
  },
  "pop": 1415,
  "state": "FL"
},{
  "city": "SAINT GEORGE ISL",
  "zip": "32328",
  "loc": {
    "y": 29.733906,
    "x": 84.8701
  },
  "pop": 2541,
  "state": "FL"
},{
  "city": "ATLANTIC BEACH",
  "zip": "32233",
  "loc": {
    "y": 30.348258,
    "x": 81.415866
  },
  "pop": 23412,
  "state": "FL"
},{
  "city": "HOSFORD",
  "zip": "32334",
  "loc": {
    "y": 30.363875,
    "x": 84.805433
  },
  "pop": 1491,
  "state": "FL"
},{
  "city": "CRAWFORDVILLE",
  "zip": "32327",
  "loc": {
    "y": 30.210831,
    "x": 84.320479
  },
  "pop": 10004,
  "state": "FL"
},{
  "city": "COTTONDALE",
  "zip": "32431",
  "loc": {
    "y": 30.800359,
    "x": 85.384672
  },
  "pop": 3333,
  "state": "FL"
},{
  "city": "FREEPORT",
  "zip": "32439",
  "loc": {
    "y": 30.489596,
    "x": 86.168441
  },
  "pop": 744,
  "state": "FL"
},{
  "city": "GRACEVILLE",
  "zip": "32440",
  "loc": {
    "y": 30.942601,
    "x": 85.513622
  },
  "pop": 5353,
  "state": "FL"
},{
  "city": "EGLIN A F B",
  "zip": "32542",
  "loc": {
    "y": 30.479409,
    "x": 86.615958
  },
  "pop": 13431,
  "state": "FL"
},{
  "city": "CEDAR KEY",
  "zip": "32625",
  "loc": {
    "y": 29.171006,
    "x": 83.016793
  },
  "pop": 1173,
  "state": "FL"
},{
  "city": "WALDO",
  "zip": "32694",
  "loc": {
    "y": 29.787096,
    "x": 82.160791
  },
  "pop": 1676,
  "state": "FL"
},{
  "city": "TAVARES",
  "zip": "32778",
  "loc": {
    "y": 28.801027,
    "x": 81.73405
  },
  "pop": 12131,
  "state": "FL"
},{
  "city": "ORLO VISTA",
  "zip": "32811",
  "loc": {
    "y": 28.516082,
    "x": 81.442014
  },
  "pop": 21545,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32826",
  "loc": {
    "y": 28.582601,
    "x": 81.190705
  },
  "pop": 12369,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32837",
  "loc": {
    "y": 28.394861,
    "x": 81.417882
  },
  "pop": 13075,
  "state": "FL"
},{
  "city": "CAPE CANAVERAL",
  "zip": "32920",
  "loc": {
    "y": 28.39034,
    "x": 80.604267
  },
  "pop": 7655,
  "state": "FL"
},{
  "city": "CAMPBELLTON",
  "zip": "32426",
  "loc": {
    "y": 30.95629,
    "x": 85.376596
  },
  "pop": 741,
  "state": "FL"
},{
  "city": "CANTONMENT",
  "zip": "32533",
  "loc": {
    "y": 30.614253,
    "x": 87.325052
  },
  "pop": 19829,
  "state": "FL"
},{
  "city": "DANIA",
  "zip": "33004",
  "loc": {
    "y": 26.047557,
    "x": 80.144728
  },
  "pop": 12552,
  "state": "FL"
},{
  "city": "CHRISTMAS",
  "zip": "32709",
  "loc": {
    "y": 28.546244,
    "x": 81.01157
  },
  "pop": 2331,
  "state": "FL"
},{
  "city": "MARATHON",
  "zip": "33050",
  "loc": {
    "y": 24.727919,
    "x": 81.038581
  },
  "pop": 12792,
  "state": "FL"
},{
  "city": "OAK HILL",
  "zip": "32759",
  "loc": {
    "y": 28.869985,
    "x": 80.855063
  },
  "pop": 2261,
  "state": "FL"
},{
  "city": "CAROL CITY",
  "zip": "33055",
  "loc": {
    "y": 25.944076,
    "x": 80.277291
  },
  "pop": 40586,
  "state": "FL"
},{
  "city": "ZELLWOOD",
  "zip": "32798",
  "loc": {
    "y": 28.71944,
    "x": 81.576174
  },
  "pop": 1930,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33137",
  "loc": {
    "y": 25.815648,
    "x": 80.189663
  },
  "pop": 19862,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32836",
  "loc": {
    "y": 28.460842,
    "x": 81.49564
  },
  "pop": 21329,
  "state": "FL"
},{
  "city": "NORTH MIAMI BEAC",
  "zip": "33162",
  "loc": {
    "y": 25.92807,
    "x": 80.177238
  },
  "pop": 37052,
  "state": "FL"
},{
  "city": "UNION PARK",
  "zip": "32833",
  "loc": {
    "y": 28.531797,
    "x": 81.098129
  },
  "pop": 3748,
  "state": "FL"
},{
  "city": "FORT LAUDERDALE",
  "zip": "33311",
  "loc": {
    "y": 26.142104,
    "x": 80.172786
  },
  "pop": 65378,
  "state": "FL"
},{
  "city": "MELBOURNE",
  "zip": "32935",
  "loc": {
    "y": 28.138385,
    "x": 80.652353
  },
  "pop": 34153,
  "state": "FL"
},{
  "city": "DAVIE",
  "zip": "33314",
  "loc": {
    "y": 26.068199,
    "x": 80.225034
  },
  "pop": 19621,
  "state": "FL"
},{
  "city": "VERO BEACH",
  "zip": "32962",
  "loc": {
    "y": 27.588486,
    "x": 80.392251
  },
  "pop": 17462,
  "state": "FL"
},{
  "city": "OAKLAND PARK",
  "zip": "33334",
  "loc": {
    "y": 26.181514,
    "x": 80.135511
  },
  "pop": 29072,
  "state": "FL"
},{
  "city": "HIALEAH",
  "zip": "33013",
  "loc": {
    "y": 25.859351,
    "x": 80.272533
  },
  "pop": 30108,
  "state": "FL"
},{
  "city": "GLEN RIDGE",
  "zip": "33406",
  "loc": {
    "y": 26.655582,
    "x": 80.093026
  },
  "pop": 23595,
  "state": "FL"
},{
  "city": "MIRAMAR",
  "zip": "33023",
  "loc": {
    "y": 25.987516,
    "x": 80.216035
  },
  "pop": 54274,
  "state": "FL"
},{
  "city": "LAKE WORTH",
  "zip": "33467",
  "loc": {
    "y": 26.610366,
    "x": 80.168299
  },
  "pop": 21547,
  "state": "FL"
},{
  "city": "SUMMERLAND KEY",
  "zip": "33042",
  "loc": {
    "y": 24.655322,
    "x": 81.493564
  },
  "pop": 3952,
  "state": "FL"
},{
  "city": "JUPITER",
  "zip": "33478",
  "loc": {
    "y": 26.921242,
    "x": 80.214388
  },
  "pop": 10534,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33122",
  "loc": {
    "y": 25.7911,
    "x": 80.320733
  },
  "pop": 8,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33610",
  "loc": {
    "y": 27.995125,
    "x": 82.404584
  },
  "pop": 34244,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33140",
  "loc": {
    "y": 25.819505,
    "x": 80.127921
  },
  "pop": 13057,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33611",
  "loc": {
    "y": 27.891422,
    "x": 82.506714
  },
  "pop": 30070,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33147",
  "loc": {
    "y": 25.850675,
    "x": 80.236558
  },
  "pop": 49395,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33707",
  "loc": {
    "y": 27.75487,
    "x": 82.720791
  },
  "pop": 23630,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33178",
  "loc": {
    "y": 25.814079,
    "x": 80.354925
  },
  "pop": 3146,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33182",
  "loc": {
    "y": 25.787678,
    "x": 80.416643
  },
  "pop": 4983,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33184",
  "loc": {
    "y": 25.757382,
    "x": 80.402997
  },
  "pop": 19617,
  "state": "FL"
},{
  "city": "CITY OF SUNRISE",
  "zip": "33313",
  "loc": {
    "y": 26.151145,
    "x": 80.223142
  },
  "pop": 46804,
  "state": "FL"
},{
  "city": "BOCA RATON",
  "zip": "33432",
  "loc": {
    "y": 26.34619,
    "x": 80.084421
  },
  "pop": 17141,
  "state": "FL"
},{
  "city": "BOCA RATON",
  "zip": "33496",
  "loc": {
    "y": 26.402975,
    "x": 80.181287
  },
  "pop": 7116,
  "state": "FL"
},{
  "city": "DEERFIELD BEACH",
  "zip": "33442",
  "loc": {
    "y": 26.312365,
    "x": 80.141242
  },
  "pop": 21532,
  "state": "FL"
},{
  "city": "BOCA RATON",
  "zip": "33498",
  "loc": {
    "y": 26.390693,
    "x": 80.216087
  },
  "pop": 5871,
  "state": "FL"
},{
  "city": "CENTER HILL",
  "zip": "33514",
  "loc": {
    "y": 28.663484,
    "x": 81.996289
  },
  "pop": 1202,
  "state": "FL"
},{
  "city": "PLANT CITY",
  "zip": "33565",
  "loc": {
    "y": 28.069855,
    "x": 82.157554
  },
  "pop": 13299,
  "state": "FL"
},{
  "city": "PLANT CITY",
  "zip": "33566",
  "loc": {
    "y": 28.009448,
    "x": 82.113816
  },
  "pop": 19533,
  "state": "FL"
},{
  "city": "VALRICO",
  "zip": "33594",
  "loc": {
    "y": 27.912435,
    "x": 82.246557
  },
  "pop": 27594,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33614",
  "loc": {
    "y": 28.00914,
    "x": 82.503393
  },
  "pop": 39021,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33629",
  "loc": {
    "y": 27.92102,
    "x": 82.507897
  },
  "pop": 21545,
  "state": "FL"
},{
  "city": "PANAMA CITY BEAC",
  "zip": "32407",
  "loc": {
    "y": 30.194623,
    "x": 85.791984
  },
  "pop": 3115,
  "state": "FL"
},{
  "city": "PINETTA",
  "zip": "32350",
  "loc": {
    "y": 30.599703,
    "x": 83.340463
  },
  "pop": 642,
  "state": "FL"
},{
  "city": "CARYVILLE",
  "zip": "32427",
  "loc": {
    "y": 30.796878,
    "x": 85.799787
  },
  "pop": 2517,
  "state": "FL"
},{
  "city": "MARY ESTHER",
  "zip": "32569",
  "loc": {
    "y": 30.412186,
    "x": 86.712719
  },
  "pop": 9382,
  "state": "FL"
},{
  "city": "GAINESVILLE",
  "zip": "32601",
  "loc": {
    "y": 29.645029,
    "x": 82.310046
  },
  "pop": 31328,
  "state": "FL"
},{
  "city": "BELL",
  "zip": "32619",
  "loc": {
    "y": 29.78373,
    "x": 82.871106
  },
  "pop": 2446,
  "state": "FL"
},{
  "city": "32646",
  "zip": "32646",
  "loc": {
    "y": 28.785839,
    "x": 82.593623
  },
  "pop": 5676,
  "state": "FL"
},{
  "city": "32684",
  "zip": "32684",
  "loc": {
    "y": 28.920137,
    "x": 82.037814
  },
  "pop": 2574,
  "state": "FL"
},{
  "city": "EATONVILLE",
  "zip": "32751",
  "loc": {
    "y": 28.631284,
    "x": 81.354598
  },
  "pop": 19834,
  "state": "FL"
},{
  "city": "AZALEA PARK",
  "zip": "32807",
  "loc": {
    "y": 28.544924,
    "x": 81.305274
  },
  "pop": 28087,
  "state": "FL"
},{
  "city": "LOCKHART",
  "zip": "32810",
  "loc": {
    "y": 28.622183,
    "x": 81.425852
  },
  "pop": 23781,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32831",
  "loc": {
    "y": 28.488229,
    "x": 81.191768
  },
  "pop": 1123,
  "state": "FL"
},{
  "city": "PALM BAY",
  "zip": "32905",
  "loc": {
    "y": 28.014605,
    "x": 80.599087
  },
  "pop": 26367,
  "state": "FL"
},{
  "city": "ROCKLEDGE",
  "zip": "32955",
  "loc": {
    "y": 28.313441,
    "x": 80.73193
  },
  "pop": 20576,
  "state": "FL"
},{
  "city": "HALLANDALE",
  "zip": "33009",
  "loc": {
    "y": 25.985019,
    "x": 80.140737
  },
  "pop": 33743,
  "state": "FL"
},{
  "city": "HOLLYWOOD",
  "zip": "33026",
  "loc": {
    "y": 26.022927,
    "x": 80.297441
  },
  "pop": 21473,
  "state": "FL"
},{
  "city": "POMPANO BEACH",
  "zip": "33060",
  "loc": {
    "y": 26.231529,
    "x": 80.12346
  },
  "pop": 32292,
  "state": "FL"
},{
  "city": "HOMESTEAD AIR FO",
  "zip": "33039",
  "loc": {
    "y": 25.499088,
    "x": 80.390513
  },
  "pop": 6538,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33144",
  "loc": {
    "y": 25.762563,
    "x": 80.309631
  },
  "pop": 22968,
  "state": "FL"
},{
  "city": "KEY BISCAYNE",
  "zip": "33149",
  "loc": {
    "y": 25.692104,
    "x": 80.162475
  },
  "pop": 8854,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33176",
  "loc": {
    "y": 25.657449,
    "x": 80.362667
  },
  "pop": 47435,
  "state": "FL"
},{
  "city": "FORT LAUDERDALE",
  "zip": "33301",
  "loc": {
    "y": 26.121561,
    "x": 80.128778
  },
  "pop": 12040,
  "state": "FL"
},{
  "city": "QUAIL HEIGHTS",
  "zip": "33190",
  "loc": {
    "y": 25.560935,
    "x": 80.35381
  },
  "pop": 2807,
  "state": "FL"
},{
  "city": "DAVIE",
  "zip": "33328",
  "loc": {
    "y": 26.060708,
    "x": 80.272022
  },
  "pop": 17233,
  "state": "FL"
},{
  "city": "PALM BEACH GARDE",
  "zip": "33418",
  "loc": {
    "y": 26.838977,
    "x": 80.132533
  },
  "pop": 15974,
  "state": "FL"
},{
  "city": "BOCA RATON",
  "zip": "33428",
  "loc": {
    "y": 26.344605,
    "x": 80.210942
  },
  "pop": 24103,
  "state": "FL"
},{
  "city": "BUSHNELL",
  "zip": "33513",
  "loc": {
    "y": 28.661062,
    "x": 82.155297
  },
  "pop": 8728,
  "state": "FL"
},{
  "city": "ZEPHYRHILLS",
  "zip": "33544",
  "loc": {
    "y": 28.263664,
    "x": 82.34933
  },
  "pop": 5989,
  "state": "FL"
},{
  "city": "CARROLLWOOD",
  "zip": "33624",
  "loc": {
    "y": 28.077194,
    "x": 82.524944
  },
  "pop": 39616,
  "state": "FL"
},{
  "city": "TIERRA VERDE",
  "zip": "33715",
  "loc": {
    "y": 27.694792,
    "x": 82.715646
  },
  "pop": 3877,
  "state": "FL"
},{
  "city": "SOUTHPORT",
  "zip": "32409",
  "loc": {
    "y": 30.310679,
    "x": 85.644536
  },
  "pop": 5001,
  "state": "FL"
},{
  "city": "BLOUNTSTOWN",
  "zip": "32424",
  "loc": {
    "y": 30.4394,
    "x": 85.062022
  },
  "pop": 6984,
  "state": "FL"
},{
  "city": "MARIANNA",
  "zip": "32446",
  "loc": {
    "y": 30.758587,
    "x": 85.229367
  },
  "pop": 17908,
  "state": "FL"
},{
  "city": "PORT SAINT JOE",
  "zip": "32456",
  "loc": {
    "y": 29.83539,
    "x": 85.298787
  },
  "pop": 7490,
  "state": "FL"
},{
  "city": "CENTURY",
  "zip": "32535",
  "loc": {
    "y": 30.968742,
    "x": 87.321582
  },
  "pop": 5422,
  "state": "FL"
},{
  "city": "CRESTVIEW",
  "zip": "32536",
  "loc": {
    "y": 30.77061,
    "x": 86.553678
  },
  "pop": 21799,
  "state": "FL"
},{
  "city": "SNEADS",
  "zip": "32460",
  "loc": {
    "y": 30.727619,
    "x": 84.933655
  },
  "pop": 6334,
  "state": "FL"
},{
  "city": "ANTHONY",
  "zip": "32617",
  "loc": {
    "y": 29.304785,
    "x": 82.126157
  },
  "pop": 6296,
  "state": "FL"
},{
  "city": "GAINESVILLE",
  "zip": "32605",
  "loc": {
    "y": 29.678458,
    "x": 82.36794
  },
  "pop": 21349,
  "state": "FL"
},{
  "city": "MELROSE",
  "zip": "32666",
  "loc": {
    "y": 29.732456,
    "x": 82.027863
  },
  "pop": 5507,
  "state": "FL"
},{
  "city": "32671",
  "zip": "32671",
  "loc": {
    "y": 29.166825,
    "x": 82.090654
  },
  "pop": 30749,
  "state": "FL"
},{
  "city": "WILLISTON",
  "zip": "32696",
  "loc": {
    "y": 29.397737,
    "x": 82.485601
  },
  "pop": 7664,
  "state": "FL"
},{
  "city": "EUSTIS",
  "zip": "32726",
  "loc": {
    "y": 28.857686,
    "x": 81.64513
  },
  "pop": 19585,
  "state": "FL"
},{
  "city": "INDIALANTIC",
  "zip": "32903",
  "loc": {
    "y": 28.109059,
    "x": 80.578718
  },
  "pop": 11020,
  "state": "FL"
},{
  "city": "MELBOURNE VILLAG",
  "zip": "32904",
  "loc": {
    "y": 28.073177,
    "x": 80.668577
  },
  "pop": 15441,
  "state": "FL"
},{
  "city": "MERRITT ISLAND",
  "zip": "32952",
  "loc": {
    "y": 28.328607,
    "x": 80.67818
  },
  "pop": 12919,
  "state": "FL"
},{
  "city": "HOMESTEAD",
  "zip": "33031",
  "loc": {
    "y": 25.532314,
    "x": 80.507463
  },
  "pop": 5880,
  "state": "FL"
},{
  "city": "MARGATE",
  "zip": "33066",
  "loc": {
    "y": 26.254237,
    "x": 80.177878
  },
  "pop": 16494,
  "state": "FL"
},{
  "city": "CORAL GABLES",
  "zip": "33134",
  "loc": {
    "y": 25.755582,
    "x": 80.269576
  },
  "pop": 33492,
  "state": "FL"
},{
  "city": "CARL FISHER",
  "zip": "33139",
  "loc": {
    "y": 25.785179,
    "x": 80.136378
  },
  "pop": 48971,
  "state": "FL"
},{
  "city": "CORAL GABLES",
  "zip": "33145",
  "loc": {
    "y": 25.752648,
    "x": 80.235134
  },
  "pop": 28170,
  "state": "FL"
},{
  "city": "DAVIE",
  "zip": "33332",
  "loc": {
    "y": 26.054436,
    "x": 80.41299
  },
  "pop": 1511,
  "state": "FL"
},{
  "city": "BOCA RATON",
  "zip": "33434",
  "loc": {
    "y": 26.383909,
    "x": 80.174858
  },
  "pop": 19075,
  "state": "FL"
},{
  "city": "JUPITER",
  "zip": "33477",
  "loc": {
    "y": 26.921701,
    "x": 80.077034
  },
  "pop": 7748,
  "state": "FL"
},{
  "city": "PAHOKEE",
  "zip": "33476",
  "loc": {
    "y": 26.814199,
    "x": 80.662897
  },
  "pop": 8354,
  "state": "FL"
},{
  "city": "DELRAY BEACH",
  "zip": "33444",
  "loc": {
    "y": 26.456445,
    "x": 80.079321
  },
  "pop": 18450,
  "state": "FL"
},{
  "city": "ODESSA",
  "zip": "33556",
  "loc": {
    "y": 28.142072,
    "x": 82.590506
  },
  "pop": 7046,
  "state": "FL"
},{
  "city": "WIMAUMA",
  "zip": "33598",
  "loc": {
    "y": 27.701497,
    "x": 82.315136
  },
  "pop": 7538,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33605",
  "loc": {
    "y": 27.967078,
    "x": 82.433368
  },
  "pop": 19813,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33606",
  "loc": {
    "y": 27.933828,
    "x": 82.467035
  },
  "pop": 14191,
  "state": "FL"
},{
  "city": "JACKSONVILLE",
  "zip": "32244",
  "loc": {
    "y": 30.223137,
    "x": 81.75558
  },
  "pop": 37603,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33609",
  "loc": {
    "y": 27.942456,
    "x": 82.50572
  },
  "pop": 15797,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33612",
  "loc": {
    "y": 28.050187,
    "x": 82.450018
  },
  "pop": 36784,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33711",
  "loc": {
    "y": 27.74649,
    "x": 82.689708
  },
  "pop": 18084,
  "state": "FL"
},{
  "city": "BALDWIN",
  "zip": "32234",
  "loc": {
    "y": 30.229562,
    "x": 81.978345
  },
  "pop": 5830,
  "state": "FL"
},{
  "city": "GREENVILLE",
  "zip": "32331",
  "loc": {
    "y": 30.451199,
    "x": 83.647397
  },
  "pop": 4107,
  "state": "FL"
},{
  "city": "VERNON",
  "zip": "32462",
  "loc": {
    "y": 30.62668,
    "x": 85.755286
  },
  "pop": 4111,
  "state": "FL"
},{
  "city": "SANDESTIN",
  "zip": "32541",
  "loc": {
    "y": 30.397198,
    "x": 86.484903
  },
  "pop": 8080,
  "state": "FL"
},{
  "city": "FORT WALTON BEAC",
  "zip": "32547",
  "loc": {
    "y": 30.447297,
    "x": 86.627487
  },
  "pop": 27344,
  "state": "FL"
},{
  "city": "NAVARRE",
  "zip": "32566",
  "loc": {
    "y": 30.590261,
    "x": 86.937102
  },
  "pop": 5537,
  "state": "FL"
},{
  "city": "GAINESVILLE",
  "zip": "32607",
  "loc": {
    "y": 29.645618,
    "x": 82.403252
  },
  "pop": 21103,
  "state": "FL"
},{
  "city": "SANTA FE",
  "zip": "32615",
  "loc": {
    "y": 29.796996,
    "x": 82.480531
  },
  "pop": 9414,
  "state": "FL"
},{
  "city": "MILTON",
  "zip": "32583",
  "loc": {
    "y": 30.576058,
    "x": 87.066273
  },
  "pop": 9457,
  "state": "FL"
},{
  "city": "32673",
  "zip": "32673",
  "loc": {
    "y": 28.991755,
    "x": 82.231082
  },
  "pop": 4757,
  "state": "FL"
},{
  "city": "HUNT CLUB",
  "zip": "32703",
  "loc": {
    "y": 28.661865,
    "x": 81.485149
  },
  "pop": 34100,
  "state": "FL"
},{
  "city": "WINTER SPRINGS",
  "zip": "32708",
  "loc": {
    "y": 28.683097,
    "x": 81.281367
  },
  "pop": 27311,
  "state": "FL"
},{
  "city": "LAKE HELEN",
  "zip": "32744",
  "loc": {
    "y": 28.980567,
    "x": 81.233367
  },
  "pop": 3229,
  "state": "FL"
},{
  "city": "SPRINGS PLAZA",
  "zip": "32779",
  "loc": {
    "y": 28.703978,
    "x": 81.422767
  },
  "pop": 27075,
  "state": "FL"
},{
  "city": "DONA VISTA",
  "zip": "32784",
  "loc": {
    "y": 28.931443,
    "x": 81.671653
  },
  "pop": 7866,
  "state": "FL"
},{
  "city": "PATRICK A F B",
  "zip": "32925",
  "loc": {
    "y": 28.259896,
    "x": 80.607126
  },
  "pop": 597,
  "state": "FL"
},{
  "city": "VERO BEACH",
  "zip": "32960",
  "loc": {
    "y": 27.632985,
    "x": 80.403075
  },
  "pop": 19207,
  "state": "FL"
},{
  "city": "HIALEAH",
  "zip": "33016",
  "loc": {
    "y": 25.880262,
    "x": 80.33681
  },
  "pop": 32053,
  "state": "FL"
},{
  "city": "HOLLYWOOD",
  "zip": "33025",
  "loc": {
    "y": 25.992061,
    "x": 80.271236
  },
  "pop": 24778,
  "state": "FL"
},{
  "city": "HOMESTEAD",
  "zip": "33030",
  "loc": {
    "y": 25.476639,
    "x": 80.483853
  },
  "pop": 26721,
  "state": "FL"
},{
  "city": "POMPANO BEACH",
  "zip": "33069",
  "loc": {
    "y": 26.228817,
    "x": 80.163486
  },
  "pop": 20158,
  "state": "FL"
},{
  "city": "CORAL GABLES",
  "zip": "33133",
  "loc": {
    "y": 25.732251,
    "x": 80.243639
  },
  "pop": 28672,
  "state": "FL"
},{
  "city": "MIAMI SHORES",
  "zip": "33138",
  "loc": {
    "y": 25.850208,
    "x": 80.18526
  },
  "pop": 30108,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33155",
  "loc": {
    "y": 25.7392,
    "x": 80.31032
  },
  "pop": 42864,
  "state": "FL"
},{
  "city": "PERRINE",
  "zip": "33157",
  "loc": {
    "y": 25.604384,
    "x": 80.352473
  },
  "pop": 57749,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33167",
  "loc": {
    "y": 25.885605,
    "x": 80.229168
  },
  "pop": 18840,
  "state": "FL"
},{
  "city": "OLYMPIA HEIGHTS",
  "zip": "33165",
  "loc": {
    "y": 25.735353,
    "x": 80.359084
  },
  "pop": 56064,
  "state": "FL"
},{
  "city": "QUAIL HEIGHTS",
  "zip": "33177",
  "loc": {
    "y": 25.593255,
    "x": 80.39377
  },
  "pop": 25043,
  "state": "FL"
},{
  "city": "FORT LAUDERDALE",
  "zip": "33312",
  "loc": {
    "y": 26.096819,
    "x": 80.181038
  },
  "pop": 44230,
  "state": "FL"
},{
  "city": "SUNRISE",
  "zip": "33323",
  "loc": {
    "y": 26.164641,
    "x": 80.307583
  },
  "pop": 10658,
  "state": "FL"
},{
  "city": "DAVIE",
  "zip": "33325",
  "loc": {
    "y": 26.10862,
    "x": 80.321952
  },
  "pop": 19539,
  "state": "FL"
},{
  "city": "WEST PALM BEACH",
  "zip": "33407",
  "loc": {
    "y": 26.749154,
    "x": 80.072492
  },
  "pop": 25017,
  "state": "FL"
},{
  "city": "GREENACRES",
  "zip": "33463",
  "loc": {
    "y": 26.609609,
    "x": 80.130503
  },
  "pop": 28841,
  "state": "FL"
},{
  "city": "TEQUESTA",
  "zip": "33469",
  "loc": {
    "y": 26.966066,
    "x": 80.100161
  },
  "pop": 11781,
  "state": "FL"
},{
  "city": "BRANDON",
  "zip": "33510",
  "loc": {
    "y": 27.955112,
    "x": 82.296554
  },
  "pop": 20184,
  "state": "FL"
},{
  "city": "SUN CITY CENTER",
  "zip": "33573",
  "loc": {
    "y": 27.714711,
    "x": 82.353832
  },
  "pop": 9070,
  "state": "FL"
},{
  "city": "MADISON",
  "zip": "32340",
  "loc": {
    "y": 30.480209,
    "x": 83.406678
  },
  "pop": 11339,
  "state": "FL"
},{
  "city": "MONTICELLO",
  "zip": "32344",
  "loc": {
    "y": 30.519681,
    "x": 83.892454
  },
  "pop": 9578,
  "state": "FL"
},{
  "city": "LAUREL HILL",
  "zip": "32567",
  "loc": {
    "y": 30.95236,
    "x": 86.400323
  },
  "pop": 2967,
  "state": "FL"
},{
  "city": "SHALIMAR",
  "zip": "32579",
  "loc": {
    "y": 30.445565,
    "x": 86.571724
  },
  "pop": 9327,
  "state": "FL"
},{
  "city": "32629",
  "zip": "32629",
  "loc": {
    "y": 28.910801,
    "x": 82.60677
  },
  "pop": 4922,
  "state": "FL"
},{
  "city": "GAINESVILLE",
  "zip": "32603",
  "loc": {
    "y": 29.651484,
    "x": 82.349286
  },
  "pop": 5271,
  "state": "FL"
},{
  "city": "32642",
  "zip": "32642",
  "loc": {
    "y": 28.926371,
    "x": 82.392516
  },
  "pop": 8744,
  "state": "FL"
},{
  "city": "MOUNT DORA",
  "zip": "32757",
  "loc": {
    "y": 28.792787,
    "x": 81.645593
  },
  "pop": 15757,
  "state": "FL"
},{
  "city": "PINE HILLS",
  "zip": "32808",
  "loc": {
    "y": 28.580463,
    "x": 81.44758
  },
  "pop": 42278,
  "state": "FL"
},{
  "city": "ORLANDO",
  "zip": "32829",
  "loc": {
    "y": 28.484877,
    "x": 81.260778
  },
  "pop": 3848,
  "state": "FL"
},{
  "city": "FELLSMERE",
  "zip": "32948",
  "loc": {
    "y": 27.764273,
    "x": 80.601947
  },
  "pop": 2936,
  "state": "FL"
},{
  "city": "TAVERNIER",
  "zip": "33070",
  "loc": {
    "y": 25.010788,
    "x": 80.521816
  },
  "pop": 6196,
  "state": "FL"
},{
  "city": "POMPANO BEACH",
  "zip": "33071",
  "loc": {
    "y": 26.243515,
    "x": 80.260085
  },
  "pop": 28251,
  "state": "FL"
},{
  "city": "POMPANO BEACH",
  "zip": "33073",
  "loc": {
    "y": 26.299693,
    "x": 80.180966
  },
  "pop": 7091,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33130",
  "loc": {
    "y": 25.767197,
    "x": 80.205888
  },
  "pop": 21777,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33131",
  "loc": {
    "y": 25.762852,
    "x": 80.189506
  },
  "pop": 2614,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33172",
  "loc": {
    "y": 25.773523,
    "x": 80.357232
  },
  "pop": 29823,
  "state": "FL"
},{
  "city": "MIAMI",
  "zip": "33173",
  "loc": {
    "y": 25.699242,
    "x": 80.361824
  },
  "pop": 33787,
  "state": "FL"
},{
  "city": "OLYMPIA HEIGHTS",
  "zip": "33175",
  "loc": {
    "y": 25.733677,
    "x": 80.408226
  },
  "pop": 41712,
  "state": "FL"
},{
  "city": "FORT LAUDERDALE",
  "zip": "33316",
  "loc": {
    "y": 26.104193,
    "x": 80.125951
  },
  "pop": 11206,
  "state": "FL"
},{
  "city": "OAKLAND PARK",
  "zip": "33304",
  "loc": {
    "y": 26.137908,
    "x": 80.125283
  },
  "pop": 18976,
  "state": "FL"
},{
  "city": "PALM BEACH GARDE",
  "zip": "33410",
  "loc": {
    "y": 26.844373,
    "x": 80.087304
  },
  "pop": 23249,
  "state": "FL"
},{
  "city": "WEST PALM BEACH",
  "zip": "33412",
  "loc": {
    "y": 26.805526,
    "x": 80.248203
  },
  "pop": 312,
  "state": "FL"
},{
  "city": "DELRAY BEACH",
  "zip": "33445",
  "loc": {
    "y": 26.456359,
    "x": 80.105397
  },
  "pop": 20740,
  "state": "FL"
},{
  "city": "DELRAY BEACH",
  "zip": "33484",
  "loc": {
    "y": 26.454272,
    "x": 80.13459
  },
  "pop": 19141,
  "state": "FL"
},{
  "city": "BOCA RATON",
  "zip": "33486",
  "loc": {
    "y": 26.348099,
    "x": 80.110418
  },
  "pop": 19601,
  "state": "FL"
},{
  "city": "WESLEY CHAPEL",
  "zip": "33543",
  "loc": {
    "y": 28.210365,
    "x": 82.288956
  },
  "pop": 4073,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33616",
  "loc": {
    "y": 27.87418,
    "x": 82.52029
  },
  "pop": 11318,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33634",
  "loc": {
    "y": 28.006783,
    "x": 82.556006
  },
  "pop": 18712,
  "state": "FL"
},{
  "city": "TAMPA",
  "zip": "33625",
  "loc": {
    "y": 28.072551,
    "x": 82.558987
  },
  "pop": 14778,
  "state": "FL"
},{
  "city": "SOUTHSIDE",
  "zip": "33813",
  "loc": {
    "y": 27.969534,
    "x": 81.933187
  },
  "pop": 28497,
  "state": "FL"
},{
  "city": "WAUCHULA",
  "zip": "33873",
  "loc": {
    "y": 27.551742,
    "x": 81.807388
  },
  "pop": 11513,
  "state": "FL"
},{
  "city": "POLK CITY",
  "zip": "33868",
  "loc": {
    "y": 28.19867,
    "x": 81.808282
  },
  "pop": 7604,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33704",
  "loc": {
    "y": 27.795435,
    "x": 82.637289
  },
  "pop": 17112,
  "state": "FL"
},{
  "city": "ONA",
  "zip": "33865",
  "loc": {
    "y": 27.412657,
    "x": 81.92805
  },
  "pop": 885,
  "state": "FL"
},{
  "city": "FORT MYERS",
  "zip": "33907",
  "loc": {
    "y": 26.568057,
    "x": 81.873558
  },
  "pop": 19015,
  "state": "FL"
},{
  "city": "COLLEGE PARKWAY",
  "zip": "33919",
  "loc": {
    "y": 26.554159,
    "x": 81.900587
  },
  "pop": 22641,
  "state": "FL"
},{
  "city": "ALVA",
  "zip": "33920",
  "loc": {
    "y": 26.714657,
    "x": 81.635055
  },
  "pop": 3044,
  "state": "FL"
},{
  "city": "FORT MYERS",
  "zip": "33912",
  "loc": {
    "y": 26.49722,
    "x": 81.824554
  },
  "pop": 20141,
  "state": "FL"
},{
  "city": "LEHIGH ACRES",
  "zip": "33936",
  "loc": {
    "y": 26.615302,
    "x": 81.61046
  },
  "pop": 10851,
  "state": "FL"
},{
  "city": "PORT CHARLOTTE",
  "zip": "33981",
  "loc": {
    "y": 26.937925,
    "x": 82.238774
  },
  "pop": 5758,
  "state": "FL"
},{
  "city": "OSPREY",
  "zip": "34229",
  "loc": {
    "y": 27.18384,
    "x": 82.485339
  },
  "pop": 3612,
  "state": "FL"
},{
  "city": "SAINT CLOUD",
  "zip": "34772",
  "loc": {
    "y": 28.190518,
    "x": 81.264493
  },
  "pop": 6041,
  "state": "FL"
},{
  "city": "SAINT CLOUD",
  "zip": "34773",
  "loc": {
    "y": 28.129295,
    "x": 81.017552
  },
  "pop": 1000,
  "state": "FL"
},{
  "city": "FORT PIERCE",
  "zip": "34951",
  "loc": {
    "y": 27.539097,
    "x": 80.405195
  },
  "pop": 6821,
  "state": "FL"
},{
  "city": "CONLEY",
  "zip": "30027",
  "loc": {
    "y": 33.645104,
    "x": 84.327571
  },
  "pop": 6815,
  "state": "GA"
},{
  "city": "LITHIA SPRINGS",
  "zip": "30057",
  "loc": {
    "y": 33.772999,
    "x": 84.66081
  },
  "pop": 14533,
  "state": "GA"
},{
  "city": "TUCKER",
  "zip": "30084",
  "loc": {
    "y": 33.856986,
    "x": 84.21602
  },
  "pop": 29307,
  "state": "GA"
},{
  "city": "STONE MOUNTAIN",
  "zip": "30088",
  "loc": {
    "y": 33.75798,
    "x": 84.18022
  },
  "pop": 24029,
  "state": "GA"
},{
  "city": "SMYRNA",
  "zip": "30082",
  "loc": {
    "y": 33.863051,
    "x": 84.538234
  },
  "pop": 17917,
  "state": "GA"
},{
  "city": "BALL GROUND",
  "zip": "30107",
  "loc": {
    "y": 34.339262,
    "x": 84.375756
  },
  "pop": 4064,
  "state": "GA"
},{
  "city": "CARROLLTON",
  "zip": "30117",
  "loc": {
    "y": 33.579751,
    "x": 85.081211
  },
  "pop": 40344,
  "state": "GA"
},{
  "city": "CARTERSVILLE",
  "zip": "30120",
  "loc": {
    "y": 34.186975,
    "x": 84.820401
  },
  "pop": 33846,
  "state": "GA"
},{
  "city": "JASPER",
  "zip": "30143",
  "loc": {
    "y": 34.461965,
    "x": 84.475881
  },
  "pop": 8256,
  "state": "GA"
},{
  "city": "WOOLSEY",
  "zip": "30214",
  "loc": {
    "y": 33.448054,
    "x": 84.463586
  },
  "pop": 35007,
  "state": "GA"
},{
  "city": "STOVALL",
  "zip": "30222",
  "loc": {
    "y": 33.037169,
    "x": 84.742173
  },
  "pop": 4507,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30319",
  "loc": {
    "y": 33.868728,
    "x": 84.335091
  },
  "pop": 32138,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30329",
  "loc": {
    "y": 33.823555,
    "x": 84.321402
  },
  "pop": 17013,
  "state": "GA"
},{
  "city": "GIRARD",
  "zip": "30426",
  "loc": {
    "y": 33.043689,
    "x": 81.710581
  },
  "pop": 1074,
  "state": "GA"
},{
  "city": "REIDSVILLE",
  "zip": "30453",
  "loc": {
    "y": 32.054759,
    "x": 82.147809
  },
  "pop": 6286,
  "state": "GA"
},{
  "city": "BUFORD",
  "zip": "30518",
  "loc": {
    "y": 34.112373,
    "x": 83.996459
  },
  "pop": 24810,
  "state": "GA"
},{
  "city": "CLEVELAND",
  "zip": "30528",
  "loc": {
    "y": 34.583949,
    "x": 83.749985
  },
  "pop": 11036,
  "state": "GA"
},{
  "city": "CHERRYLOG",
  "zip": "30522",
  "loc": {
    "y": 34.773711,
    "x": 84.443136
  },
  "pop": 2150,
  "state": "GA"
},{
  "city": "HIAWASSEE",
  "zip": "30546",
  "loc": {
    "y": 34.937667,
    "x": 83.7478
  },
  "pop": 5067,
  "state": "GA"
},{
  "city": "JEFFERSON",
  "zip": "30549",
  "loc": {
    "y": 34.106197,
    "x": 83.570813
  },
  "pop": 8795,
  "state": "GA"
},{
  "city": "SUCHES",
  "zip": "30572",
  "loc": {
    "y": 34.72529,
    "x": 84.049582
  },
  "pop": 800,
  "state": "GA"
},{
  "city": "ATHENS",
  "zip": "30606",
  "loc": {
    "y": 33.946085,
    "x": 83.418019
  },
  "pop": 29839,
  "state": "GA"
},{
  "city": "GRENELEFE",
  "zip": "33844",
  "loc": {
    "y": 28.095073,
    "x": 81.614712
  },
  "pop": 23835,
  "state": "FL"
},{
  "city": "PUNTA GORDA",
  "zip": "33955",
  "loc": {
    "y": 26.823981,
    "x": 81.954712
  },
  "pop": 5206,
  "state": "FL"
},{
  "city": "LEHIGH ACRES",
  "zip": "33971",
  "loc": {
    "y": 26.602252,
    "x": 81.665822
  },
  "pop": 11401,
  "state": "FL"
},{
  "city": "PALMETTO",
  "zip": "34221",
  "loc": {
    "y": 27.542946,
    "x": 82.562957
  },
  "pop": 23994,
  "state": "FL"
},{
  "city": "ELLENTON",
  "zip": "34222",
  "loc": {
    "y": 27.53818,
    "x": 82.5006
  },
  "pop": 8252,
  "state": "FL"
},{
  "city": "COLLEGE PLAZA",
  "zip": "34207",
  "loc": {
    "y": 27.439663,
    "x": 82.580627
  },
  "pop": 27775,
  "state": "FL"
},{
  "city": "SPRING HILL",
  "zip": "34609",
  "loc": {
    "y": 28.477611,
    "x": 82.499896
  },
  "pop": 19824,
  "state": "FL"
},{
  "city": "LARGO",
  "zip": "34643",
  "loc": {
    "y": 27.880334,
    "x": 82.762806
  },
  "pop": 17707,
  "state": "FL"
},{
  "city": "LEESBURG",
  "zip": "34748",
  "loc": {
    "y": 28.807965,
    "x": 81.885772
  },
  "pop": 21309,
  "state": "FL"
},{
  "city": "OCOEE",
  "zip": "34761",
  "loc": {
    "y": 28.583685,
    "x": 81.532618
  },
  "pop": 14171,
  "state": "FL"
},{
  "city": "SAINT CLOUD",
  "zip": "34771",
  "loc": {
    "y": 28.27301,
    "x": 81.200311
  },
  "pop": 5870,
  "state": "FL"
},{
  "city": "FORT PIERCE",
  "zip": "34949",
  "loc": {
    "y": 27.389594,
    "x": 80.261468
  },
  "pop": 8853,
  "state": "FL"
},{
  "city": "NORCROSS",
  "zip": "30092",
  "loc": {
    "y": 33.967688,
    "x": 84.243787
  },
  "pop": 19901,
  "state": "GA"
},{
  "city": "BUCHANAN",
  "zip": "30113",
  "loc": {
    "y": 33.82828,
    "x": 85.150551
  },
  "pop": 5931,
  "state": "GA"
},{
  "city": "DOUGLASVILLE",
  "zip": "30135",
  "loc": {
    "y": 33.698936,
    "x": 84.745441
  },
  "pop": 32887,
  "state": "GA"
},{
  "city": "KINGSTON",
  "zip": "30145",
  "loc": {
    "y": 34.250053,
    "x": 84.997299
  },
  "pop": 2534,
  "state": "GA"
},{
  "city": "TAYLORSVILLE",
  "zip": "30178",
  "loc": {
    "y": 34.122941,
    "x": 84.973859
  },
  "pop": 2360,
  "state": "GA"
},{
  "city": "WACO",
  "zip": "30182",
  "loc": {
    "y": 33.683986,
    "x": 85.219674
  },
  "pop": 2297,
  "state": "GA"
},{
  "city": "WHITESBURG",
  "zip": "30185",
  "loc": {
    "y": 33.511093,
    "x": 84.925426
  },
  "pop": 3115,
  "state": "GA"
},{
  "city": "ALVATON",
  "zip": "30218",
  "loc": {
    "y": 33.149902,
    "x": 84.580576
  },
  "pop": 2327,
  "state": "GA"
},{
  "city": "MEANSVILLE",
  "zip": "30256",
  "loc": {
    "y": 33.013387,
    "x": 84.316938
  },
  "pop": 1668,
  "state": "GA"
},{
  "city": "RIVERDALE",
  "zip": "30274",
  "loc": {
    "y": 33.553126,
    "x": 84.400348
  },
  "pop": 23621,
  "state": "GA"
},{
  "city": "ZEBULON",
  "zip": "30295",
  "loc": {
    "y": 33.100235,
    "x": 84.310827
  },
  "pop": 2470,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30324",
  "loc": {
    "y": 33.820609,
    "x": 84.354867
  },
  "pop": 15044,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30336",
  "loc": {
    "y": 33.78534,
    "x": 84.510028
  },
  "pop": 1228,
  "state": "GA"
},{
  "city": "MOUNT VERNON",
  "zip": "30445",
  "loc": {
    "y": 32.18398,
    "x": 82.58672
  },
  "pop": 3097,
  "state": "GA"
},{
  "city": "CARNESVILLE",
  "zip": "30521",
  "loc": {
    "y": 34.394723,
    "x": 83.279209
  },
  "pop": 4135,
  "state": "GA"
},{
  "city": "COMMERCE",
  "zip": "30529",
  "loc": {
    "y": 34.213413,
    "x": 83.448011
  },
  "pop": 8792,
  "state": "GA"
},{
  "city": "CORNELIA",
  "zip": "30531",
  "loc": {
    "y": 34.520882,
    "x": 83.54527
  },
  "pop": 7597,
  "state": "GA"
},{
  "city": "EAST ELLIJAY",
  "zip": "30539",
  "loc": {
    "y": 34.682636,
    "x": 84.473062
  },
  "pop": 314,
  "state": "GA"
},{
  "city": "LULA",
  "zip": "30554",
  "loc": {
    "y": 34.398513,
    "x": 83.694459
  },
  "pop": 3365,
  "state": "GA"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33716",
  "loc": {
    "y": 27.873764,
    "x": 82.640039
  },
  "pop": 9328,
  "state": "FL"
},{
  "city": "EAGLE LAKE",
  "zip": "33839",
  "loc": {
    "y": 27.978661,
    "x": 81.756357
  },
  "pop": 1456,
  "state": "FL"
},{
  "city": "LAKE ALFRED",
  "zip": "33850",
  "loc": {
    "y": 28.089483,
    "x": 81.727138
  },
  "pop": 3916,
  "state": "FL"
},{
  "city": "LORIDA",
  "zip": "33857",
  "loc": {
    "y": 27.414952,
    "x": 81.196533
  },
  "pop": 1186,
  "state": "FL"
},{
  "city": "CAPE CORAL CENTR",
  "zip": "33914",
  "loc": {
    "y": 26.56971,
    "x": 81.990915
  },
  "pop": 15782,
  "state": "FL"
},{
  "city": "PLACIDA",
  "zip": "33947",
  "loc": {
    "y": 26.90039,
    "x": 82.293778
  },
  "pop": 7811,
  "state": "FL"
},{
  "city": "NAPLES",
  "zip": "33961",
  "loc": {
    "y": 26.027721,
    "x": 81.658635
  },
  "pop": 7121,
  "state": "FL"
},{
  "city": "SARASOTA",
  "zip": "34239",
  "loc": {
    "y": 27.311137,
    "x": 82.519545
  },
  "pop": 15949,
  "state": "FL"
},{
  "city": "BELLEAIR BLUFFS",
  "zip": "34640",
  "loc": {
    "y": 27.915835,
    "x": 82.801978
  },
  "pop": 22793,
  "state": "FL"
},{
  "city": "PINELLAS PARK",
  "zip": "34666",
  "loc": {
    "y": 27.860742,
    "x": 82.709353
  },
  "pop": 19840,
  "state": "FL"
},{
  "city": "KISSIMMEE",
  "zip": "34746",
  "loc": {
    "y": 28.26796,
    "x": 81.467478
  },
  "pop": 12922,
  "state": "FL"
},{
  "city": "OKEECHOBEE",
  "zip": "34974",
  "loc": {
    "y": 27.200224,
    "x": 80.84103
  },
  "pop": 18122,
  "state": "FL"
},{
  "city": "ELOISE",
  "zip": "33880",
  "loc": {
    "y": 27.999296,
    "x": 81.751507
  },
  "pop": 30803,
  "state": "FL"
},{
  "city": "FORT MYERS",
  "zip": "33903",
  "loc": {
    "y": 26.678138,
    "x": 81.909632
  },
  "pop": 20015,
  "state": "FL"
},{
  "city": "PORT SAINT LUCIE",
  "zip": "34953",
  "loc": {
    "y": 27.262506,
    "x": 80.379323
  },
  "pop": 11796,
  "state": "FL"
},{
  "city": "PORT SAINT LUCIE",
  "zip": "34984",
  "loc": {
    "y": 27.265476,
    "x": 80.338936
  },
  "pop": 7091,
  "state": "FL"
},{
  "city": "DECATUR",
  "zip": "30030",
  "loc": {
    "y": 33.769883,
    "x": 84.295044
  },
  "pop": 23185,
  "state": "GA"
},{
  "city": "PORT SAINT LUCIE",
  "zip": "34987",
  "loc": {
    "y": 27.260595,
    "x": 80.477052
  },
  "pop": 67,
  "state": "FL"
},{
  "city": "EL JOBEAN",
  "zip": "33927",
  "loc": {
    "y": 26.97608,
    "x": 82.19957
  },
  "pop": 91,
  "state": "FL"
},{
  "city": "NAPLES",
  "zip": "33963",
  "loc": {
    "y": 26.263499,
    "x": 81.808092
  },
  "pop": 14863,
  "state": "FL"
},{
  "city": "ELLENWOOD",
  "zip": "30049",
  "loc": {
    "y": 33.635376,
    "x": 84.264333
  },
  "pop": 16742,
  "state": "GA"
},{
  "city": "BRADENTON",
  "zip": "34210",
  "loc": {
    "y": 27.454393,
    "x": 82.635752
  },
  "pop": 11345,
  "state": "FL"
},{
  "city": "CORTEZ",
  "zip": "34215",
  "loc": {
    "y": 27.472686,
    "x": 82.700642
  },
  "pop": 1657,
  "state": "FL"
},{
  "city": "MARIETTA",
  "zip": "30066",
  "loc": {
    "y": 34.037807,
    "x": 84.503817
  },
  "pop": 41948,
  "state": "GA"
},{
  "city": "SARASOTA",
  "zip": "34237",
  "loc": {
    "y": 27.336915,
    "x": 82.512778
  },
  "pop": 15902,
  "state": "FL"
},{
  "city": "MID VENICE",
  "zip": "34292",
  "loc": {
    "y": 27.103245,
    "x": 82.415112
  },
  "pop": 13901,
  "state": "FL"
},{
  "city": "BREMEN",
  "zip": "30110",
  "loc": {
    "y": 33.730872,
    "x": 85.128638
  },
  "pop": 8495,
  "state": "GA"
},{
  "city": "WHITE",
  "zip": "30184",
  "loc": {
    "y": 34.271683,
    "x": 84.738327
  },
  "pop": 3231,
  "state": "GA"
},{
  "city": "NOKOMIS",
  "zip": "34275",
  "loc": {
    "y": 27.138398,
    "x": 82.451779
  },
  "pop": 13638,
  "state": "FL"
},{
  "city": "SHADY HILLS",
  "zip": "34610",
  "loc": {
    "y": 28.405084,
    "x": 82.530148
  },
  "pop": 9958,
  "state": "FL"
},{
  "city": "STARRSVILLE",
  "zip": "30209",
  "loc": {
    "y": 33.570328,
    "x": 83.890752
  },
  "pop": 35231,
  "state": "GA"
},{
  "city": "LARGO",
  "zip": "34647",
  "loc": {
    "y": 27.851549,
    "x": 82.758701
  },
  "pop": 15130,
  "state": "FL"
},{
  "city": "LAWRENCEVILLE",
  "zip": "30244",
  "loc": {
    "y": 33.923781,
    "x": 84.081652
  },
  "pop": 37778,
  "state": "GA"
},{
  "city": "PINELLAS PARK",
  "zip": "34665",
  "loc": {
    "y": 27.840313,
    "x": 82.71335
  },
  "pop": 24459,
  "state": "FL"
},{
  "city": "NEWNAN",
  "zip": "30265",
  "loc": {
    "y": 33.39576,
    "x": 84.712062
  },
  "pop": 5345,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30312",
  "loc": {
    "y": 33.746749,
    "x": 84.378125
  },
  "pop": 17683,
  "state": "GA"
},{
  "city": "SAFETY HARBOR",
  "zip": "34695",
  "loc": {
    "y": 28.009608,
    "x": 82.696658
  },
  "pop": 16853,
  "state": "FL"
},{
  "city": "KISSIMMEE",
  "zip": "34758",
  "loc": {
    "y": 28.198436,
    "x": 81.487014
  },
  "pop": 6306,
  "state": "FL"
},{
  "city": "ATLANTA",
  "zip": "30327",
  "loc": {
    "y": 33.862723,
    "x": 84.419966
  },
  "pop": 18467,
  "state": "GA"
},{
  "city": "GROVELAND",
  "zip": "34736",
  "loc": {
    "y": 28.564445,
    "x": 81.874526
  },
  "pop": 8692,
  "state": "FL"
},{
  "city": "HAINES CREEK",
  "zip": "34788",
  "loc": {
    "y": 28.85744,
    "x": 81.781159
  },
  "pop": 12883,
  "state": "FL"
},{
  "city": "ATLANTA",
  "zip": "30326",
  "loc": {
    "y": 33.848168,
    "x": 84.358232
  },
  "pop": 125,
  "state": "GA"
},{
  "city": "SANDY SPRINGS",
  "zip": "30328",
  "loc": {
    "y": 33.936295,
    "x": 84.381143
  },
  "pop": 24238,
  "state": "GA"
},{
  "city": "LITHONIA",
  "zip": "30038",
  "loc": {
    "y": 33.682311,
    "x": 84.160997
  },
  "pop": 15583,
  "state": "GA"
},{
  "city": "POWDER SPRINGS",
  "zip": "30073",
  "loc": {
    "y": 33.875377,
    "x": 84.685645
  },
  "pop": 27767,
  "state": "GA"
},{
  "city": "OAK PARK",
  "zip": "30401",
  "loc": {
    "y": 32.581938,
    "x": 82.338668
  },
  "pop": 12918,
  "state": "GA"
},{
  "city": "ACWORTH",
  "zip": "30101",
  "loc": {
    "y": 34.075627,
    "x": 84.647741
  },
  "pop": 37976,
  "state": "GA"
},{
  "city": "ARAGON",
  "zip": "30104",
  "loc": {
    "y": 34.066556,
    "x": 85.069559
  },
  "pop": 4692,
  "state": "GA"
},{
  "city": "MARIETTA",
  "zip": "30064",
  "loc": {
    "y": 33.934285,
    "x": 84.607584
  },
  "pop": 30260,
  "state": "GA"
},{
  "city": "BARTOW",
  "zip": "30413",
  "loc": {
    "y": 32.863186,
    "x": 82.470788
  },
  "pop": 945,
  "state": "GA"
},{
  "city": "DOUGLASVILLE",
  "zip": "30134",
  "loc": {
    "y": 33.760645,
    "x": 84.747719
  },
  "pop": 17182,
  "state": "GA"
},{
  "city": "GLENNVILLE",
  "zip": "30427",
  "loc": {
    "y": 31.946708,
    "x": 81.948313
  },
  "pop": 7702,
  "state": "GA"
},{
  "city": "DAHLONEGA",
  "zip": "30533",
  "loc": {
    "y": 34.529949,
    "x": 83.979838
  },
  "pop": 15003,
  "state": "GA"
},{
  "city": "KENNESAW",
  "zip": "30144",
  "loc": {
    "y": 34.028656,
    "x": 84.60466
  },
  "pop": 37120,
  "state": "GA"
},{
  "city": "TALKING ROCK",
  "zip": "30175",
  "loc": {
    "y": 34.539356,
    "x": 84.491154
  },
  "pop": 3037,
  "state": "GA"
},{
  "city": "WALESKA",
  "zip": "30183",
  "loc": {
    "y": 34.321662,
    "x": 84.561981
  },
  "pop": 3576,
  "state": "GA"
},{
  "city": "ALPHARETTA",
  "zip": "30202",
  "loc": {
    "y": 34.035487,
    "x": 84.238972
  },
  "pop": 24814,
  "state": "GA"
},{
  "city": "GRIFFIN",
  "zip": "30223",
  "loc": {
    "y": 33.2549,
    "x": 84.272759
  },
  "pop": 53247,
  "state": "GA"
},{
  "city": "MANSFIELD",
  "zip": "30255",
  "loc": {
    "y": 33.540373,
    "x": 83.727638
  },
  "pop": 1438,
  "state": "GA"
},{
  "city": "NEWBORN",
  "zip": "30262",
  "loc": {
    "y": 33.494923,
    "x": 83.668396
  },
  "pop": 1491,
  "state": "GA"
},{
  "city": "MORROW",
  "zip": "30260",
  "loc": {
    "y": 33.584934,
    "x": 84.324695
  },
  "pop": 20584,
  "state": "GA"
},{
  "city": "RAYMOND",
  "zip": "30263",
  "loc": {
    "y": 33.389404,
    "x": 84.816952
  },
  "pop": 32379,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30307",
  "loc": {
    "y": 33.769138,
    "x": 84.335957
  },
  "pop": 16330,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30314",
  "loc": {
    "y": 33.756103,
    "x": 84.425546
  },
  "pop": 26649,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30330",
  "loc": {
    "y": 33.70645,
    "x": 84.434735
  },
  "pop": 643,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30310",
  "loc": {
    "y": 33.727849,
    "x": 84.423173
  },
  "pop": 34017,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30334",
  "loc": {
    "y": 33.74715,
    "x": 84.388188
  },
  "pop": 0,
  "state": "GA"
},{
  "city": "CHAMBLEE",
  "zip": "30341",
  "loc": {
    "y": 33.886727,
    "x": 84.286969
  },
  "pop": 26846,
  "state": "GA"
},{
  "city": "UVALDA",
  "zip": "30473",
  "loc": {
    "y": 32.048271,
    "x": 82.508879
  },
  "pop": 1881,
  "state": "GA"
},{
  "city": "HILTONIA",
  "zip": "30467",
  "loc": {
    "y": 32.77627,
    "x": 81.633394
  },
  "pop": 9991,
  "state": "GA"
},{
  "city": "LAKEMONT",
  "zip": "30552",
  "loc": {
    "y": 34.761697,
    "x": 83.403763
  },
  "pop": 338,
  "state": "GA"
},{
  "city": "RABUN GAP",
  "zip": "30568",
  "loc": {
    "y": 34.957552,
    "x": 83.390122
  },
  "pop": 1828,
  "state": "GA"
},{
  "city": "BUCKHEAD",
  "zip": "30625",
  "loc": {
    "y": 33.536842,
    "x": 83.343484
  },
  "pop": 1222,
  "state": "GA"
},{
  "city": "COMER",
  "zip": "30629",
  "loc": {
    "y": 34.088776,
    "x": 83.121978
  },
  "pop": 3134,
  "state": "GA"
},{
  "city": "BONITA SPRINGS",
  "zip": "33923",
  "loc": {
    "y": 26.348035,
    "x": 81.789963
  },
  "pop": 19697,
  "state": "FL"
},{
  "city": "FORT MYERS BEACH",
  "zip": "33931",
  "loc": {
    "y": 26.451952,
    "x": 81.924543
  },
  "pop": 10612,
  "state": "FL"
},{
  "city": "PLACIDA",
  "zip": "33946",
  "loc": {
    "y": 26.819301,
    "x": 82.261638
  },
  "pop": 126,
  "state": "FL"
},{
  "city": "SANIBEL",
  "zip": "33957",
  "loc": {
    "y": 26.4514,
    "x": 82.086825
  },
  "pop": 5999,
  "state": "FL"
},{
  "city": "NAPLES",
  "zip": "33999",
  "loc": {
    "y": 26.191612,
    "x": 81.70927
  },
  "pop": 21226,
  "state": "FL"
},{
  "city": "PUNTA GORDA",
  "zip": "33983",
  "loc": {
    "y": 27.007398,
    "x": 82.016268
  },
  "pop": 7319,
  "state": "FL"
},{
  "city": "SARASOTA",
  "zip": "34243",
  "loc": {
    "y": 27.407235,
    "x": 82.530299
  },
  "pop": 14096,
  "state": "FL"
},{
  "city": "CLEARWATER",
  "zip": "34619",
  "loc": {
    "y": 27.976503,
    "x": 82.717248
  },
  "pop": 15886,
  "state": "FL"
},{
  "city": "CLEARWATER",
  "zip": "34621",
  "loc": {
    "y": 28.02961,
    "x": 82.723718
  },
  "pop": 16102,
  "state": "FL"
},{
  "city": "AIRPORT",
  "zip": "34622",
  "loc": {
    "y": 27.896713,
    "x": 82.676876
  },
  "pop": 3190,
  "state": "FL"
},{
  "city": "RIDGE MANOR WEST",
  "zip": "34602",
  "loc": {
    "y": 28.511167,
    "x": 82.290545
  },
  "pop": 4940,
  "state": "FL"
},{
  "city": "HUDSON",
  "zip": "34669",
  "loc": {
    "y": 28.350634,
    "x": 82.628793
  },
  "pop": 8577,
  "state": "FL"
},{
  "city": "PALM HARBOR",
  "zip": "34685",
  "loc": {
    "y": 28.096725,
    "x": 82.696357
  },
  "pop": 2278,
  "state": "FL"
},{
  "city": "ASTATULA",
  "zip": "34705",
  "loc": {
    "y": 28.708754,
    "x": 81.719473
  },
  "pop": 1831,
  "state": "FL"
},{
  "city": "KENANSVILLE",
  "zip": "34739",
  "loc": {
    "y": 27.876698,
    "x": 81.050049
  },
  "pop": 736,
  "state": "FL"
},{
  "city": "KISSIMMEE",
  "zip": "34741",
  "loc": {
    "y": 28.305056,
    "x": 81.424208
  },
  "pop": 23576,
  "state": "FL"
},{
  "city": "FORT PIERCE",
  "zip": "34950",
  "loc": {
    "y": 27.448567,
    "x": 80.3385
  },
  "pop": 19708,
  "state": "FL"
},{
  "city": "DECATUR",
  "zip": "30033",
  "loc": {
    "y": 33.812305,
    "x": 84.281918
  },
  "pop": 22071,
  "state": "GA"
},{
  "city": "SCOTTDALE",
  "zip": "30079",
  "loc": {
    "y": 33.793396,
    "x": 84.258521
  },
  "pop": 3288,
  "state": "GA"
},{
  "city": "DULUTH",
  "zip": "30136",
  "loc": {
    "y": 33.98619,
    "x": 84.157936
  },
  "pop": 30932,
  "state": "GA"
},{
  "city": "WINSTON",
  "zip": "30187",
  "loc": {
    "y": 33.663419,
    "x": 84.863915
  },
  "pop": 6850,
  "state": "GA"
},{
  "city": "LA GRANGE",
  "zip": "30240",
  "loc": {
    "y": 33.034025,
    "x": 85.039511
  },
  "pop": 43081,
  "state": "GA"
},{
  "city": "COLLEGE PARK",
  "zip": "30337",
  "loc": {
    "y": 33.644227,
    "x": 84.460849
  },
  "pop": 18106,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30339",
  "loc": {
    "y": 33.87125,
    "x": 84.462879
  },
  "pop": 11158,
  "state": "GA"
},{
  "city": "MURRAYVILLE",
  "zip": "30564",
  "loc": {
    "y": 34.434167,
    "x": 83.894919
  },
  "pop": 2126,
  "state": "GA"
},{
  "city": "OAKWOOD",
  "zip": "30566",
  "loc": {
    "y": 34.237196,
    "x": 83.894013
  },
  "pop": 6584,
  "state": "GA"
},{
  "city": "ATHENS",
  "zip": "30605",
  "loc": {
    "y": 33.932097,
    "x": 83.352508
  },
  "pop": 33299,
  "state": "GA"
},{
  "city": "CRAWFORDVILLE",
  "zip": "30631",
  "loc": {
    "y": 33.570801,
    "x": 82.887234
  },
  "pop": 1915,
  "state": "GA"
},{
  "city": "DANIELSVILLE",
  "zip": "30633",
  "loc": {
    "y": 34.170799,
    "x": 83.275841
  },
  "pop": 7119,
  "state": "GA"
},{
  "city": "NAPLES",
  "zip": "33940",
  "loc": {
    "y": 26.171391,
    "x": 81.802196
  },
  "pop": 20934,
  "state": "FL"
},{
  "city": "DUNDEE",
  "zip": "33838",
  "loc": {
    "y": 28.019412,
    "x": 81.621207
  },
  "pop": 2335,
  "state": "FL"
},{
  "city": "OCHOPEE",
  "zip": "33943",
  "loc": {
    "y": 25.87998,
    "x": 81.311228
  },
  "pop": 1257,
  "state": "FL"
},{
  "city": "WESTGATE",
  "zip": "34205",
  "loc": {
    "y": 27.480896,
    "x": 82.584733
  },
  "pop": 31114,
  "state": "FL"
},{
  "city": "WHITNEY BEACH",
  "zip": "34228",
  "loc": {
    "y": 27.38669,
    "x": 82.638403
  },
  "pop": 5937,
  "state": "FL"
},{
  "city": "CLEARWATER",
  "zip": "34623",
  "loc": {
    "y": 28.002734,
    "x": 82.747405
  },
  "pop": 20280,
  "state": "FL"
},{
  "city": "TARPON SPRINGS",
  "zip": "34689",
  "loc": {
    "y": 28.138465,
    "x": 82.743023
  },
  "pop": 26381,
  "state": "FL"
},{
  "city": "PORT SAINT LUCIE",
  "zip": "34983",
  "loc": {
    "y": 27.309444,
    "x": 80.345029
  },
  "pop": 22031,
  "state": "FL"
},{
  "city": "DECATUR",
  "zip": "30032",
  "loc": {
    "y": 33.740825,
    "x": 84.263165
  },
  "pop": 56056,
  "state": "GA"
},{
  "city": "CUMMING",
  "zip": "30130",
  "loc": {
    "y": 34.220197,
    "x": 84.146762
  },
  "pop": 35496,
  "state": "GA"
},{
  "city": "FELTON",
  "zip": "30140",
  "loc": {
    "y": 33.887066,
    "x": 85.220781
  },
  "pop": 489,
  "state": "GA"
},{
  "city": "ROME",
  "zip": "30165",
  "loc": {
    "y": 34.283679,
    "x": 85.223122
  },
  "pop": 32739,
  "state": "GA"
},{
  "city": "SUWANEE",
  "zip": "30174",
  "loc": {
    "y": 34.057245,
    "x": 84.082391
  },
  "pop": 5965,
  "state": "GA"
},{
  "city": "HOGANSVILLE",
  "zip": "30230",
  "loc": {
    "y": 33.164382,
    "x": 84.930856
  },
  "pop": 6378,
  "state": "GA"
},{
  "city": "SNELLVILLE",
  "zip": "30278",
  "loc": {
    "y": 33.848607,
    "x": 84.028011
  },
  "pop": 34314,
  "state": "GA"
},{
  "city": "STOCKBRIDGE",
  "zip": "30281",
  "loc": {
    "y": 33.563343,
    "x": 84.21649
  },
  "pop": 25401,
  "state": "GA"
},{
  "city": "THOMASTON",
  "zip": "30286",
  "loc": {
    "y": 32.901534,
    "x": 84.3324
  },
  "pop": 22925,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30308",
  "loc": {
    "y": 33.771839,
    "x": 84.375744
  },
  "pop": 8549,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30313",
  "loc": {
    "y": 33.76825,
    "x": 84.39352
  },
  "pop": 8038,
  "state": "GA"
},{
  "city": "MANASSAS",
  "zip": "30438",
  "loc": {
    "y": 32.096551,
    "x": 82.052925
  },
  "pop": 955,
  "state": "GA"
},{
  "city": "MIDVILLE",
  "zip": "30441",
  "loc": {
    "y": 32.863794,
    "x": 82.204181
  },
  "pop": 1533,
  "state": "GA"
},{
  "city": "DEMOREST",
  "zip": "30535",
  "loc": {
    "y": 34.575564,
    "x": 83.569625
  },
  "pop": 3521,
  "state": "GA"
},{
  "city": "EASTANOLLEE",
  "zip": "30538",
  "loc": {
    "y": 34.50366,
    "x": 83.258685
  },
  "pop": 1478,
  "state": "GA"
},{
  "city": "ARNOLDSVILLE",
  "zip": "30619",
  "loc": {
    "y": 33.880338,
    "x": 83.234137
  },
  "pop": 648,
  "state": "GA"
},{
  "city": "FROSTPROOF",
  "zip": "33843",
  "loc": {
    "y": 27.721058,
    "x": 81.514778
  },
  "pop": 8747,
  "state": "FL"
},{
  "city": "SEBRING",
  "zip": "33872",
  "loc": {
    "y": 27.470289,
    "x": 81.487242
  },
  "pop": 15390,
  "state": "FL"
},{
  "city": "MULBERRY",
  "zip": "33860",
  "loc": {
    "y": 27.90202,
    "x": 82.001489
  },
  "pop": 13338,
  "state": "FL"
},{
  "city": "NAPLES",
  "zip": "33962",
  "loc": {
    "y": 26.113096,
    "x": 81.749661
  },
  "pop": 28714,
  "state": "FL"
},{
  "city": "NAPLES",
  "zip": "33964",
  "loc": {
    "y": 26.211253,
    "x": 81.640436
  },
  "pop": 5869,
  "state": "FL"
},{
  "city": "PUNTA GORDA",
  "zip": "33982",
  "loc": {
    "y": 26.966751,
    "x": 81.954484
  },
  "pop": 6235,
  "state": "FL"
},{
  "city": "BRADENTON BEACH",
  "zip": "34217",
  "loc": {
    "y": 27.515149,
    "x": 82.721027
  },
  "pop": 6554,
  "state": "FL"
},{
  "city": "SARASOTA",
  "zip": "34233",
  "loc": {
    "y": 27.286614,
    "x": 82.47698
  },
  "pop": 11476,
  "state": "FL"
},{
  "city": "SOUTH VENICE",
  "zip": "34293",
  "loc": {
    "y": 27.053022,
    "x": 82.404096
  },
  "pop": 26720,
  "state": "FL"
},{
  "city": "SPRING HILL",
  "zip": "34606",
  "loc": {
    "y": 28.46551,
    "x": 82.598084
  },
  "pop": 18190,
  "state": "FL"
},{
  "city": "LARGO",
  "zip": "34644",
  "loc": {
    "y": 27.883597,
    "x": 82.826287
  },
  "pop": 20162,
  "state": "FL"
},{
  "city": "NEW PORT RICHEY",
  "zip": "34652",
  "loc": {
    "y": 28.232574,
    "x": 82.732721
  },
  "pop": 22422,
  "state": "FL"
},{
  "city": "LAKE TARPON",
  "zip": "34684",
  "loc": {
    "y": 28.073963,
    "x": 82.726573
  },
  "pop": 21753,
  "state": "FL"
},{
  "city": "BUENA VENTURA LA",
  "zip": "34743",
  "loc": {
    "y": 28.329656,
    "x": 81.356044
  },
  "pop": 14287,
  "state": "FL"
},{
  "city": "FRUITLAND PARK",
  "zip": "34731",
  "loc": {
    "y": 28.863949,
    "x": 81.899755
  },
  "pop": 8513,
  "state": "FL"
},{
  "city": "FORT PIERCE",
  "zip": "34945",
  "loc": {
    "y": 27.438233,
    "x": 80.443963
  },
  "pop": 3711,
  "state": "FL"
},{
  "city": "FORT PIERCE",
  "zip": "34947",
  "loc": {
    "y": 27.449281,
    "x": 80.359185
  },
  "pop": 10882,
  "state": "FL"
},{
  "city": "AUSTELL",
  "zip": "30001",
  "loc": {
    "y": 33.807226,
    "x": 84.605026
  },
  "pop": 25021,
  "state": "GA"
},{
  "city": "ROSWELL",
  "zip": "30076",
  "loc": {
    "y": 34.021324,
    "x": 84.310408
  },
  "pop": 34027,
  "state": "GA"
},{
  "city": "NORCROSS",
  "zip": "30071",
  "loc": {
    "y": 33.938145,
    "x": 84.197158
  },
  "pop": 16266,
  "state": "GA"
},{
  "city": "ROSWELL",
  "zip": "30075",
  "loc": {
    "y": 34.040832,
    "x": 84.385901
  },
  "pop": 32144,
  "state": "GA"
},{
  "city": "FAIRMOUNT",
  "zip": "30139",
  "loc": {
    "y": 34.465241,
    "x": 84.766878
  },
  "pop": 3405,
  "state": "GA"
},{
  "city": "TEMPLE",
  "zip": "30179",
  "loc": {
    "y": 33.767687,
    "x": 85.013315
  },
  "pop": 7111,
  "state": "GA"
},{
  "city": "CONCORD",
  "zip": "30206",
  "loc": {
    "y": 33.099836,
    "x": 84.447025
  },
  "pop": 1591,
  "state": "GA"
},{
  "city": "HAMPTON",
  "zip": "30228",
  "loc": {
    "y": 33.412398,
    "x": 84.294744
  },
  "pop": 10969,
  "state": "GA"
},{
  "city": "JACKSON",
  "zip": "30233",
  "loc": {
    "y": 33.282006,
    "x": 83.978391
  },
  "pop": 13206,
  "state": "GA"
},{
  "city": "ALAMO",
  "zip": "30411",
  "loc": {
    "y": 32.13298,
    "x": 82.794445
  },
  "pop": 2584,
  "state": "GA"
},{
  "city": "BROOKLET",
  "zip": "30415",
  "loc": {
    "y": 32.294046,
    "x": 81.628003
  },
  "pop": 4850,
  "state": "GA"
},{
  "city": "BALDWIN",
  "zip": "30511",
  "loc": {
    "y": 34.456411,
    "x": 83.529781
  },
  "pop": 3969,
  "state": "GA"
},{
  "city": "CANON",
  "zip": "30520",
  "loc": {
    "y": 34.347766,
    "x": 83.126693
  },
  "pop": 1393,
  "state": "GA"
},{
  "city": "HOMER",
  "zip": "30547",
  "loc": {
    "y": 34.356312,
    "x": 83.497432
  },
  "pop": 2949,
  "state": "GA"
},{
  "city": "MORGANTON",
  "zip": "30560",
  "loc": {
    "y": 34.871382,
    "x": 84.211479
  },
  "pop": 2558,
  "state": "GA"
},{
  "city": "NICHOLSON",
  "zip": "30565",
  "loc": {
    "y": 34.097016,
    "x": 83.421031
  },
  "pop": 3352,
  "state": "GA"
},{
  "city": "ATHENS",
  "zip": "30601",
  "loc": {
    "y": 33.976097,
    "x": 83.363174
  },
  "pop": 15661,
  "state": "GA"
},{
  "city": "CAPTIVA",
  "zip": "33924",
  "loc": {
    "y": 26.750541,
    "x": 82.261017
  },
  "pop": 831,
  "state": "FL"
},{
  "city": "IMMOKALEE",
  "zip": "33934",
  "loc": {
    "y": 26.409794,
    "x": 81.445365
  },
  "pop": 18066,
  "state": "FL"
},{
  "city": "VENUS",
  "zip": "33960",
  "loc": {
    "y": 27.13463,
    "x": 81.359412
  },
  "pop": 925,
  "state": "FL"
},{
  "city": "CRESCENT BEACH",
  "zip": "34242",
  "loc": {
    "y": 27.266025,
    "x": 82.546932
  },
  "pop": 10594,
  "state": "FL"
},{
  "city": "CLEARWATER",
  "zip": "34625",
  "loc": {
    "y": 27.973063,
    "x": 82.745504
  },
  "pop": 10394,
  "state": "FL"
},{
  "city": "LAND O LAKES",
  "zip": "34639",
  "loc": {
    "y": 28.225849,
    "x": 82.45472
  },
  "pop": 11815,
  "state": "FL"
},{
  "city": "POINCIANA",
  "zip": "34759",
  "loc": {
    "y": 28.124786,
    "x": 81.458984
  },
  "pop": 2430,
  "state": "FL"
},{
  "city": "OKAHUMPKA",
  "zip": "34762",
  "loc": {
    "y": 28.737257,
    "x": 81.883949
  },
  "pop": 1779,
  "state": "FL"
},{
  "city": "SAINT CLOUD",
  "zip": "34769",
  "loc": {
    "y": 28.247992,
    "x": 81.287626
  },
  "pop": 15024,
  "state": "FL"
},{
  "city": "WINDERMERE",
  "zip": "34786",
  "loc": {
    "y": 28.50061,
    "x": 81.535411
  },
  "pop": 5725,
  "state": "FL"
},{
  "city": "INDIANTOWN",
  "zip": "34956",
  "loc": {
    "y": 27.061461,
    "x": 80.480277
  },
  "pop": 7823,
  "state": "FL"
},{
  "city": "PORT SAINT LUCIE",
  "zip": "34986",
  "loc": {
    "y": 27.32148,
    "x": 80.403045
  },
  "pop": 610,
  "state": "FL"
},{
  "city": "VILLA RICA",
  "zip": "30180",
  "loc": {
    "y": 33.71729,
    "x": 84.929697
  },
  "pop": 12063,
  "state": "GA"
},{
  "city": "SILVER CREEK",
  "zip": "30173",
  "loc": {
    "y": 34.159272,
    "x": 85.142933
  },
  "pop": 5968,
  "state": "GA"
},{
  "city": "BROOKS",
  "zip": "30205",
  "loc": {
    "y": 33.298433,
    "x": 84.476941
  },
  "pop": 1662,
  "state": "GA"
},{
  "city": "LILBURN",
  "zip": "30247",
  "loc": {
    "y": 33.873182,
    "x": 84.119595
  },
  "pop": 46637,
  "state": "GA"
},{
  "city": "LOGANVILLE",
  "zip": "30249",
  "loc": {
    "y": 33.83366,
    "x": 83.903631
  },
  "pop": 14843,
  "state": "GA"
},{
  "city": "REX",
  "zip": "30273",
  "loc": {
    "y": 33.580805,
    "x": 84.278228
  },
  "pop": 7218,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30309",
  "loc": {
    "y": 33.798407,
    "x": 84.388338
  },
  "pop": 14766,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30316",
  "loc": {
    "y": 33.721686,
    "x": 84.333913
  },
  "pop": 34668,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30311",
  "loc": {
    "y": 33.722957,
    "x": 84.470219
  },
  "pop": 34880,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30350",
  "loc": {
    "y": 33.979471,
    "x": 84.341146
  },
  "pop": 24573,
  "state": "GA"
},{
  "city": "EPWORTH",
  "zip": "30541",
  "loc": {
    "y": 34.944249,
    "x": 84.441593
  },
  "pop": 1523,
  "state": "GA"
},{
  "city": "FLOWERY BRANCH",
  "zip": "30542",
  "loc": {
    "y": 34.181893,
    "x": 83.902407
  },
  "pop": 9361,
  "state": "GA"
},{
  "city": "MC CAYSVILLE",
  "zip": "30555",
  "loc": {
    "y": 34.952212,
    "x": 84.368294
  },
  "pop": 4720,
  "state": "GA"
},{
  "city": "MARTIN",
  "zip": "30557",
  "loc": {
    "y": 34.515482,
    "x": 83.168553
  },
  "pop": 1601,
  "state": "GA"
},{
  "city": "MAYSVILLE",
  "zip": "30558",
  "loc": {
    "y": 34.273627,
    "x": 83.584019
  },
  "pop": 4456,
  "state": "GA"
},{
  "city": "COLBERT",
  "zip": "30628",
  "loc": {
    "y": 34.038246,
    "x": 83.21906
  },
  "pop": 5943,
  "state": "GA"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33712",
  "loc": {
    "y": 27.735336,
    "x": 82.666298
  },
  "pop": 27715,
  "state": "FL"
},{
  "city": "LAKELAND",
  "zip": "33809",
  "loc": {
    "y": 28.123356,
    "x": 81.984219
  },
  "pop": 39958,
  "state": "FL"
},{
  "city": "FORT MEADE",
  "zip": "33841",
  "loc": {
    "y": 27.746356,
    "x": 81.782346
  },
  "pop": 8169,
  "state": "FL"
},{
  "city": "LAKE PLACID",
  "zip": "33852",
  "loc": {
    "y": 27.294474,
    "x": 81.364918
  },
  "pop": 13767,
  "state": "FL"
},{
  "city": "BOKEELIA",
  "zip": "33922",
  "loc": {
    "y": 26.662726,
    "x": 82.140064
  },
  "pop": 2979,
  "state": "FL"
},{
  "city": "PORT CHARLOTTE",
  "zip": "33948",
  "loc": {
    "y": 26.98268,
    "x": 82.141173
  },
  "pop": 12212,
  "state": "FL"
},{
  "city": "CAPE CORAL CENTR",
  "zip": "33990",
  "loc": {
    "y": 26.630893,
    "x": 81.945967
  },
  "pop": 16975,
  "state": "FL"
},{
  "city": "MEADOWS VILLAGE",
  "zip": "34234",
  "loc": {
    "y": 27.365355,
    "x": 82.535182
  },
  "pop": 20243,
  "state": "FL"
},{
  "city": "SARASOTA",
  "zip": "34240",
  "loc": {
    "y": 27.32765,
    "x": 82.385594
  },
  "pop": 4943,
  "state": "FL"
},{
  "city": "SPRING HILL",
  "zip": "34608",
  "loc": {
    "y": 28.479696,
    "x": 82.556206
  },
  "pop": 16755,
  "state": "FL"
},{
  "city": "STUART",
  "zip": "34996",
  "loc": {
    "y": 27.192857,
    "x": 80.216378
  },
  "pop": 7410,
  "state": "FL"
},{
  "city": "MARIETTA",
  "zip": "30067",
  "loc": {
    "y": 33.928198,
    "x": 84.473251
  },
  "pop": 40460,
  "state": "GA"
},{
  "city": "STONE MOUNTAIN",
  "zip": "30087",
  "loc": {
    "y": 33.811511,
    "x": 84.128829
  },
  "pop": 27251,
  "state": "GA"
},{
  "city": "NORCROSS",
  "zip": "30093",
  "loc": {
    "y": 33.905964,
    "x": 84.183953
  },
  "pop": 32345,
  "state": "GA"
},{
  "city": "DALLAS",
  "zip": "30132",
  "loc": {
    "y": 33.916315,
    "x": 84.827791
  },
  "pop": 28118,
  "state": "GA"
},{
  "city": "GLENN",
  "zip": "30217",
  "loc": {
    "y": 33.291073,
    "x": 85.105459
  },
  "pop": 7230,
  "state": "GA"
},{
  "city": "FLOVILLA",
  "zip": "30216",
  "loc": {
    "y": 33.250012,
    "x": 83.907938
  },
  "pop": 2238,
  "state": "GA"
},{
  "city": "MOLENA",
  "zip": "30258",
  "loc": {
    "y": 32.997845,
    "x": 84.45578
  },
  "pop": 2055,
  "state": "GA"
},{
  "city": "OXFORD",
  "zip": "30267",
  "loc": {
    "y": 33.686474,
    "x": 83.863517
  },
  "pop": 10601,
  "state": "GA"
},{
  "city": "SHARPSBURG",
  "zip": "30277",
  "loc": {
    "y": 33.401287,
    "x": 84.654027
  },
  "pop": 5956,
  "state": "GA"
},{
  "city": "SENOIA",
  "zip": "30276",
  "loc": {
    "y": 33.284459,
    "x": 84.591779
  },
  "pop": 4653,
  "state": "GA"
},{
  "city": "UNION CITY",
  "zip": "30291",
  "loc": {
    "y": 33.583155,
    "x": 84.549853
  },
  "pop": 7411,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30360",
  "loc": {
    "y": 33.937772,
    "x": 84.271645
  },
  "pop": 16023,
  "state": "GA"
},{
  "city": "ROCKLEDGE",
  "zip": "30454",
  "loc": {
    "y": 32.391507,
    "x": 82.747939
  },
  "pop": 160,
  "state": "GA"
},{
  "city": "TARRYTOWN",
  "zip": "30470",
  "loc": {
    "y": 32.290623,
    "x": 82.516933
  },
  "pop": 1181,
  "state": "GA"
},{
  "city": "STATESBORO",
  "zip": "30458",
  "loc": {
    "y": 32.440841,
    "x": 81.773956
  },
  "pop": 33469,
  "state": "GA"
},{
  "city": "ROCKY FORD",
  "zip": "30455",
  "loc": {
    "y": 32.656863,
    "x": 81.741749
  },
  "pop": 1554,
  "state": "GA"
},{
  "city": "GAINESVILLE",
  "zip": "30506",
  "loc": {
    "y": 34.356227,
    "x": 83.888211
  },
  "pop": 22232,
  "state": "GA"
},{
  "city": "CLAYTON",
  "zip": "30525",
  "loc": {
    "y": 34.882569,
    "x": 83.40655
  },
  "pop": 6700,
  "state": "GA"
},{
  "city": "TIGER",
  "zip": "30576",
  "loc": {
    "y": 34.81741,
    "x": 83.433317
  },
  "pop": 2454,
  "state": "GA"
},{
  "city": "ATHENS",
  "zip": "30607",
  "loc": {
    "y": 34.006978,
    "x": 83.427761
  },
  "pop": 7056,
  "state": "GA"
},{
  "city": "BOWMAN",
  "zip": "30624",
  "loc": {
    "y": 34.19193,
    "x": 83.028437
  },
  "pop": 2315,
  "state": "GA"
},{
  "city": "LAKELAND",
  "zip": "33803",
  "loc": {
    "y": 28.014045,
    "x": 81.952283
  },
  "pop": 23761,
  "state": "FL"
},{
  "city": "ARCADIA",
  "zip": "33821",
  "loc": {
    "y": 27.18996,
    "x": 81.865755
  },
  "pop": 23865,
  "state": "FL"
},{
  "city": "AUBURNDALE",
  "zip": "33823",
  "loc": {
    "y": 28.072443,
    "x": 81.812234
  },
  "pop": 24489,
  "state": "FL"
},{
  "city": "FORT MYERS",
  "zip": "33908",
  "loc": {
    "y": 26.502518,
    "x": 81.927589
  },
  "pop": 17050,
  "state": "FL"
},{
  "city": "FORT MYERS",
  "zip": "33913",
  "loc": {
    "y": 26.522808,
    "x": 81.706469
  },
  "pop": 473,
  "state": "FL"
},{
  "city": "LABELLE",
  "zip": "33935",
  "loc": {
    "y": 26.732093,
    "x": 81.434027
  },
  "pop": 11346,
  "state": "FL"
},{
  "city": "CAPE CORAL CENTR",
  "zip": "33991",
  "loc": {
    "y": 26.628881,
    "x": 82.006703
  },
  "pop": 5352,
  "state": "FL"
},{
  "city": "PALMA SOLA",
  "zip": "34209",
  "loc": {
    "y": 27.487909,
    "x": 82.627631
  },
  "pop": 30012,
  "state": "FL"
},{
  "city": "SARASOTA",
  "zip": "34235",
  "loc": {
    "y": 27.367162,
    "x": 82.484759
  },
  "pop": 11275,
  "state": "FL"
},{
  "city": "CLEARWATER",
  "zip": "34615",
  "loc": {
    "y": 27.986241,
    "x": 82.780807
  },
  "pop": 30847,
  "state": "FL"
},{
  "city": "LARGO",
  "zip": "34641",
  "loc": {
    "y": 27.907547,
    "x": 82.75937
  },
  "pop": 24087,
  "state": "FL"
},{
  "city": "BELLEAIR BEACH",
  "zip": "34635",
  "loc": {
    "y": 27.917605,
    "x": 82.840486
  },
  "pop": 7736,
  "state": "FL"
},{
  "city": "SEMINOLE",
  "zip": "34642",
  "loc": {
    "y": 27.844571,
    "x": 82.796896
  },
  "pop": 24078,
  "state": "FL"
},{
  "city": "LARGO",
  "zip": "34646",
  "loc": {
    "y": 27.852906,
    "x": 82.826978
  },
  "pop": 11284,
  "state": "FL"
},{
  "city": "DUNEDIN",
  "zip": "34698",
  "loc": {
    "y": 28.028382,
    "x": 82.779434
  },
  "pop": 15304,
  "state": "FL"
},{
  "city": "KISSIMMEE",
  "zip": "34744",
  "loc": {
    "y": 28.307807,
    "x": 81.368122
  },
  "pop": 21101,
  "state": "FL"
},{
  "city": "PORT SAINT LUCIE",
  "zip": "34988",
  "loc": {
    "y": 27.323233,
    "x": 80.51726
  },
  "pop": 416,
  "state": "FL"
},{
  "city": "FOREST PARK",
  "zip": "30050",
  "loc": {
    "y": 33.609737,
    "x": 84.367075
  },
  "pop": 26825,
  "state": "GA"
},{
  "city": "MARIETTA",
  "zip": "30060",
  "loc": {
    "y": 33.909199,
    "x": 84.564881
  },
  "pop": 52530,
  "state": "GA"
},{
  "city": "CAVE SPRING",
  "zip": "30124",
  "loc": {
    "y": 34.116683,
    "x": 85.337906
  },
  "pop": 2650,
  "state": "GA"
},{
  "city": "MARBLE HILL",
  "zip": "30148",
  "loc": {
    "y": 34.415353,
    "x": 84.337151
  },
  "pop": 98,
  "state": "GA"
},{
  "city": "ROOPVILLE",
  "zip": "30170",
  "loc": {
    "y": 33.432226,
    "x": 85.167148
  },
  "pop": 2952,
  "state": "GA"
},{
  "city": "TATE",
  "zip": "30177",
  "loc": {
    "y": 34.42387,
    "x": 84.365299
  },
  "pop": 4286,
  "state": "GA"
},{
  "city": "DACULA",
  "zip": "30211",
  "loc": {
    "y": 33.988234,
    "x": 83.883849
  },
  "pop": 7320,
  "state": "GA"
},{
  "city": "JONESBORO",
  "zip": "30236",
  "loc": {
    "y": 33.524236,
    "x": 84.358968
  },
  "pop": 55409,
  "state": "GA"
},{
  "city": "LUTHERSVILLE",
  "zip": "30251",
  "loc": {
    "y": 33.179817,
    "x": 84.757707
  },
  "pop": 3389,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30331",
  "loc": {
    "y": 33.72241,
    "x": 84.520468
  },
  "pop": 38185,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30345",
  "loc": {
    "y": 33.851347,
    "x": 84.286961
  },
  "pop": 19825,
  "state": "GA"
},{
  "city": "DUNWOODY",
  "zip": "30338",
  "loc": {
    "y": 33.944313,
    "x": 84.316529
  },
  "pop": 23565,
  "state": "GA"
},{
  "city": "DORAVILLE",
  "zip": "30340",
  "loc": {
    "y": 33.896377,
    "x": 84.248265
  },
  "pop": 22862,
  "state": "GA"
},{
  "city": "CLAXTON",
  "zip": "30417",
  "loc": {
    "y": 32.165009,
    "x": 81.908032
  },
  "pop": 8724,
  "state": "GA"
},{
  "city": "PORTAL",
  "zip": "30450",
  "loc": {
    "y": 32.55504,
    "x": 81.912257
  },
  "pop": 3160,
  "state": "GA"
},{
  "city": "COLLINS",
  "zip": "30421",
  "loc": {
    "y": 32.185228,
    "x": 82.10948
  },
  "pop": 1298,
  "state": "GA"
},{
  "city": "VIDALIA",
  "zip": "30474",
  "loc": {
    "y": 32.193408,
    "x": 82.406724
  },
  "pop": 15396,
  "state": "GA"
},{
  "city": "CLERMONT",
  "zip": "30527",
  "loc": {
    "y": 34.476091,
    "x": 83.785311
  },
  "pop": 2336,
  "state": "GA"
},{
  "city": "HELEN",
  "zip": "30545",
  "loc": {
    "y": 34.686601,
    "x": 83.739936
  },
  "pop": 469,
  "state": "GA"
},{
  "city": "BISHOP",
  "zip": "30621",
  "loc": {
    "y": 33.808091,
    "x": 83.477655
  },
  "pop": 3620,
  "state": "GA"
},{
  "city": "CARLTON",
  "zip": "30627",
  "loc": {
    "y": 33.985217,
    "x": 83.003827
  },
  "pop": 2046,
  "state": "GA"
},{
  "city": "CRAWFORD",
  "zip": "30630",
  "loc": {
    "y": 33.909533,
    "x": 83.189319
  },
  "pop": 2883,
  "state": "GA"
},{
  "city": "SOUTHSIDE",
  "zip": "33811",
  "loc": {
    "y": 27.966284,
    "x": 82.007236
  },
  "pop": 11456,
  "state": "FL"
},{
  "city": "DAVENPORT",
  "zip": "33837",
  "loc": {
    "y": 28.196265,
    "x": 81.607912
  },
  "pop": 8268,
  "state": "FL"
},{
  "city": "LAKELAND",
  "zip": "33805",
  "loc": {
    "y": 28.072006,
    "x": 81.96091
  },
  "pop": 19676,
  "state": "FL"
},{
  "city": "KATHLEEN",
  "zip": "33849",
  "loc": {
    "y": 28.205224,
    "x": 82.043499
  },
  "pop": 1096,
  "state": "FL"
},{
  "city": "AVON PARK",
  "zip": "33825",
  "loc": {
    "y": 27.600085,
    "x": 81.501486
  },
  "pop": 16945,
  "state": "FL"
},{
  "city": "CYPRESS GARDENS",
  "zip": "33884",
  "loc": {
    "y": 27.994901,
    "x": 81.678905
  },
  "pop": 14771,
  "state": "FL"
},{
  "city": "ZOLFO SPRINGS",
  "zip": "33890",
  "loc": {
    "y": 27.480042,
    "x": 81.742328
  },
  "pop": 3515,
  "state": "FL"
},{
  "city": "BRADEN RIVER",
  "zip": "34208",
  "loc": {
    "y": 27.485881,
    "x": 82.536961
  },
  "pop": 20668,
  "state": "FL"
},{
  "city": "ENGLEWOOD",
  "zip": "34223",
  "loc": {
    "y": 26.966743,
    "x": 82.359886
  },
  "pop": 15705,
  "state": "FL"
},{
  "city": "SOUTH TRAIL",
  "zip": "34231",
  "loc": {
    "y": 27.26757,
    "x": 82.513793
  },
  "pop": 32813,
  "state": "FL"
},{
  "city": "SARASOTA SQUARE",
  "zip": "34238",
  "loc": {
    "y": 27.243834,
    "x": 82.482898
  },
  "pop": 5493,
  "state": "FL"
},{
  "city": "PORT SAINT LUCIE",
  "zip": "34952",
  "loc": {
    "y": 27.288895,
    "x": 80.297971
  },
  "pop": 23437,
  "state": "FL"
},{
  "city": "STUART",
  "zip": "34997",
  "loc": {
    "y": 27.139817,
    "x": 80.212937
  },
  "pop": 25374,
  "state": "FL"
},{
  "city": "DECATUR",
  "zip": "30035",
  "loc": {
    "y": 33.72784,
    "x": 84.2143
  },
  "pop": 15062,
  "state": "GA"
},{
  "city": "CENTERVILLE GWIN",
  "zip": "30058",
  "loc": {
    "y": 33.746412,
    "x": 84.099291
  },
  "pop": 37322,
  "state": "GA"
},{
  "city": "STONE MOUNTAIN",
  "zip": "30083",
  "loc": {
    "y": 33.794233,
    "x": 84.201754
  },
  "pop": 48785,
  "state": "GA"
},{
  "city": "BOWDON",
  "zip": "30108",
  "loc": {
    "y": 33.537259,
    "x": 85.25329
  },
  "pop": 7318,
  "state": "GA"
},{
  "city": "CONYERS",
  "zip": "30207",
  "loc": {
    "y": 33.682932,
    "x": 84.019818
  },
  "pop": 24526,
  "state": "GA"
},{
  "city": "JENKINSBURG",
  "zip": "30234",
  "loc": {
    "y": 33.318619,
    "x": 84.026122
  },
  "pop": 1242,
  "state": "GA"
},{
  "city": "LAWRENCEVILLE",
  "zip": "30245",
  "loc": {
    "y": 33.944293,
    "x": 83.996413
  },
  "pop": 30171,
  "state": "GA"
},{
  "city": "MILNER",
  "zip": "30257",
  "loc": {
    "y": 33.141023,
    "x": 84.175909
  },
  "pop": 3789,
  "state": "GA"
},{
  "city": "PALMETTO",
  "zip": "30268",
  "loc": {
    "y": 33.524195,
    "x": 84.678999
  },
  "pop": 5838,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30303",
  "loc": {
    "y": 33.752504,
    "x": 84.388846
  },
  "pop": 1845,
  "state": "GA"
},{
  "city": "GLENWOOD",
  "zip": "30428",
  "loc": {
    "y": 32.157243,
    "x": 82.675881
  },
  "pop": 2319,
  "state": "GA"
},{
  "city": "GAINESVILLE",
  "zip": "30507",
  "loc": {
    "y": 34.25915,
    "x": 83.771625
  },
  "pop": 13327,
  "state": "GA"
},{
  "city": "BLUE RIDGE",
  "zip": "30513",
  "loc": {
    "y": 34.855523,
    "x": 84.328087
  },
  "pop": 4844,
  "state": "GA"
},{
  "city": "ELLIJAY",
  "zip": "30540",
  "loc": {
    "y": 34.677514,
    "x": 84.481226
  },
  "pop": 9672,
  "state": "GA"
},{
  "city": "JUNO",
  "zip": "30534",
  "loc": {
    "y": 34.394331,
    "x": 84.103705
  },
  "pop": 10196,
  "state": "GA"
},{
  "city": "MINERAL BLUFF",
  "zip": "30559",
  "loc": {
    "y": 34.934112,
    "x": 84.254066
  },
  "pop": 2180,
  "state": "GA"
},{
  "city": "TOCCOA",
  "zip": "30577",
  "loc": {
    "y": 34.566474,
    "x": 83.31144
  },
  "pop": 20324,
  "state": "GA"
},{
  "city": "WINTER HAVEN",
  "zip": "33881",
  "loc": {
    "y": 28.045219,
    "x": 81.732485
  },
  "pop": 25957,
  "state": "FL"
},{
  "city": "FORT MYERS",
  "zip": "33917",
  "loc": {
    "y": 26.707947,
    "x": 81.859447
  },
  "pop": 24751,
  "state": "FL"
},{
  "city": "SARASOTA",
  "zip": "34236",
  "loc": {
    "y": 27.331588,
    "x": 82.548624
  },
  "pop": 10942,
  "state": "FL"
},{
  "city": "BROOKSVILLE",
  "zip": "34614",
  "loc": {
    "y": 28.662244,
    "x": 82.523613
  },
  "pop": 3687,
  "state": "FL"
},{
  "city": "LARGO",
  "zip": "34648",
  "loc": {
    "y": 27.884391,
    "x": 82.795946
  },
  "pop": 13347,
  "state": "FL"
},{
  "city": "PALM HARBOR",
  "zip": "34683",
  "loc": {
    "y": 28.066248,
    "x": 82.758488
  },
  "pop": 42350,
  "state": "FL"
},{
  "city": "HOLIDAY",
  "zip": "34690",
  "loc": {
    "y": 28.191273,
    "x": 82.727935
  },
  "pop": 11980,
  "state": "FL"
},{
  "city": "HOLIDAY",
  "zip": "34691",
  "loc": {
    "y": 28.191336,
    "x": 82.755965
  },
  "pop": 16548,
  "state": "FL"
},{
  "city": "WILDWOOD",
  "zip": "34785",
  "loc": {
    "y": 28.845353,
    "x": 82.03473
  },
  "pop": 10604,
  "state": "FL"
},{
  "city": "WINTER GARDEN",
  "zip": "34787",
  "loc": {
    "y": 28.542321,
    "x": 81.591127
  },
  "pop": 18939,
  "state": "FL"
},{
  "city": "CLARKSTON",
  "zip": "30021",
  "loc": {
    "y": 33.810107,
    "x": 84.238825
  },
  "pop": 17325,
  "state": "GA"
},{
  "city": "MARIETTA",
  "zip": "30062",
  "loc": {
    "y": 34.002521,
    "x": 84.463291
  },
  "pop": 52642,
  "state": "GA"
},{
  "city": "HIRAM",
  "zip": "30141",
  "loc": {
    "y": 33.867286,
    "x": 84.769875
  },
  "pop": 6613,
  "state": "GA"
},{
  "city": "EMERSON",
  "zip": "30137",
  "loc": {
    "y": 34.119969,
    "x": 84.757045
  },
  "pop": 1353,
  "state": "GA"
},{
  "city": "ROCKMART",
  "zip": "30153",
  "loc": {
    "y": 33.997912,
    "x": 85.05937
  },
  "pop": 8946,
  "state": "GA"
},{
  "city": "GRANTVILLE",
  "zip": "30220",
  "loc": {
    "y": 33.247253,
    "x": 84.834977
  },
  "pop": 1825,
  "state": "GA"
},{
  "city": "GRAYSON",
  "zip": "30221",
  "loc": {
    "y": 33.898344,
    "x": 83.979846
  },
  "pop": 5528,
  "state": "GA"
},{
  "city": "LOCUST GROVE",
  "zip": "30248",
  "loc": {
    "y": 33.344936,
    "x": 84.09825
  },
  "pop": 5812,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30315",
  "loc": {
    "y": 33.705062,
    "x": 84.380771
  },
  "pop": 41061,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30349",
  "loc": {
    "y": 33.605331,
    "x": 84.481258
  },
  "pop": 48116,
  "state": "GA"
},{
  "city": "HAPEVILLE",
  "zip": "30354",
  "loc": {
    "y": 33.66546,
    "x": 84.387025
  },
  "pop": 16349,
  "state": "GA"
},{
  "city": "LYONS",
  "zip": "30436",
  "loc": {
    "y": 32.171148,
    "x": 82.307783
  },
  "pop": 8675,
  "state": "GA"
},{
  "city": "METTER",
  "zip": "30439",
  "loc": {
    "y": 32.401034,
    "x": 82.060722
  },
  "pop": 7744,
  "state": "GA"
},{
  "city": "AILEY",
  "zip": "30410",
  "loc": {
    "y": 32.214262,
    "x": 82.47619
  },
  "pop": 1004,
  "state": "GA"
},{
  "city": "SARDIS",
  "zip": "30456",
  "loc": {
    "y": 32.980946,
    "x": 81.773039
  },
  "pop": 1901,
  "state": "GA"
},{
  "city": "GAINESVILLE",
  "zip": "30504",
  "loc": {
    "y": 34.272281,
    "x": 83.879311
  },
  "pop": 10061,
  "state": "GA"
},{
  "city": "ALTO",
  "zip": "30510",
  "loc": {
    "y": 34.459079,
    "x": 83.601996
  },
  "pop": 4701,
  "state": "GA"
},{
  "city": "GILLSVILLE",
  "zip": "30543",
  "loc": {
    "y": 34.300148,
    "x": 83.675681
  },
  "pop": 1585,
  "state": "GA"
},{
  "city": "HOSCHTON",
  "zip": "30548",
  "loc": {
    "y": 34.086578,
    "x": 83.780253
  },
  "pop": 3444,
  "state": "GA"
},{
  "city": "BETHLEHEM",
  "zip": "30620",
  "loc": {
    "y": 33.926116,
    "x": 83.728227
  },
  "pop": 2181,
  "state": "GA"
},{
  "city": "LAKE WALES",
  "zip": "33853",
  "loc": {
    "y": 27.903734,
    "x": 81.548805
  },
  "pop": 32570,
  "state": "FL"
},{
  "city": "FORT MYERS",
  "zip": "33901",
  "loc": {
    "y": 26.620403,
    "x": 81.8725
  },
  "pop": 22150,
  "state": "FL"
},{
  "city": "CAPE CORAL CENTR",
  "zip": "33904",
  "loc": {
    "y": 26.57746,
    "x": 81.952243
  },
  "pop": 29483,
  "state": "FL"
},{
  "city": "TICE",
  "zip": "33905",
  "loc": {
    "y": 26.676472,
    "x": 81.785341
  },
  "pop": 25029,
  "state": "FL"
},{
  "city": "CAPE CORAL CENTR",
  "zip": "33909",
  "loc": {
    "y": 26.680276,
    "x": 81.958909
  },
  "pop": 8622,
  "state": "FL"
},{
  "city": "ESTERO",
  "zip": "33928",
  "loc": {
    "y": 26.435052,
    "x": 81.810244
  },
  "pop": 1846,
  "state": "FL"
},{
  "city": "MYAKKA CITY",
  "zip": "34251",
  "loc": {
    "y": 27.364764,
    "x": 82.184897
  },
  "pop": 1636,
  "state": "FL"
},{
  "city": "NORTH PORT",
  "zip": "34287",
  "loc": {
    "y": 27.047839,
    "x": 82.241616
  },
  "pop": 16491,
  "state": "FL"
},{
  "city": "CLEARWATER",
  "zip": "34620",
  "loc": {
    "y": 27.913981,
    "x": 82.715885
  },
  "pop": 15769,
  "state": "FL"
},{
  "city": "VENICE",
  "zip": "34285",
  "loc": {
    "y": 27.093312,
    "x": 82.44983
  },
  "pop": 9069,
  "state": "FL"
},{
  "city": "BASINGER",
  "zip": "34972",
  "loc": {
    "y": 27.311532,
    "x": 80.847853
  },
  "pop": 14955,
  "state": "FL"
},{
  "city": "MARIETTA",
  "zip": "30068",
  "loc": {
    "y": 33.967861,
    "x": 84.438549
  },
  "pop": 29488,
  "state": "GA"
},{
  "city": "ADAIRSVILLE",
  "zip": "30103",
  "loc": {
    "y": 34.359527,
    "x": 84.917634
  },
  "pop": 7273,
  "state": "GA"
},{
  "city": "PINE LOG",
  "zip": "30171",
  "loc": {
    "y": 34.392732,
    "x": 84.780315
  },
  "pop": 2257,
  "state": "GA"
},{
  "city": "CONYERS",
  "zip": "30208",
  "loc": {
    "y": 33.607711,
    "x": 84.012689
  },
  "pop": 24236,
  "state": "GA"
},{
  "city": "AUBURN",
  "zip": "30203",
  "loc": {
    "y": 34.007758,
    "x": 83.824128
  },
  "pop": 6457,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30306",
  "loc": {
    "y": 33.786027,
    "x": 84.351418
  },
  "pop": 20081,
  "state": "GA"
},{
  "city": "EAST POINT",
  "zip": "30344",
  "loc": {
    "y": 33.676214,
    "x": 84.457292
  },
  "pop": 33489,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30346",
  "loc": {
    "y": 33.926717,
    "x": 84.333354
  },
  "pop": 18,
  "state": "GA"
},{
  "city": "MILLEN",
  "zip": "30442",
  "loc": {
    "y": 32.787739,
    "x": 81.961807
  },
  "pop": 7700,
  "state": "GA"
},{
  "city": "BLAIRSVILLE",
  "zip": "30512",
  "loc": {
    "y": 34.876253,
    "x": 83.992027
  },
  "pop": 11360,
  "state": "GA"
},{
  "city": "SKY VALLEY",
  "zip": "30537",
  "loc": {
    "y": 34.979659,
    "x": 83.380113
  },
  "pop": 328,
  "state": "GA"
},{
  "city": "BOGART",
  "zip": "30622",
  "loc": {
    "y": 33.934038,
    "x": 83.50546
  },
  "pop": 7245,
  "state": "GA"
},{
  "city": "SEBRING",
  "zip": "33870",
  "loc": {
    "y": 27.492391,
    "x": 81.435712
  },
  "pop": 19922,
  "state": "FL"
},{
  "city": "FORT MYERS",
  "zip": "33916",
  "loc": {
    "y": 26.646595,
    "x": 81.842946
  },
  "pop": 17673,
  "state": "FL"
},{
  "city": "PORT CHARLOTTE",
  "zip": "33952",
  "loc": {
    "y": 26.990475,
    "x": 82.096372
  },
  "pop": 27923,
  "state": "FL"
},{
  "city": "PORT CHARLOTTE",
  "zip": "33953",
  "loc": {
    "y": 27.004008,
    "x": 82.211743
  },
  "pop": 1982,
  "state": "FL"
},{
  "city": "PORT CHARLOTTE",
  "zip": "33980",
  "loc": {
    "y": 26.983969,
    "x": 82.058886
  },
  "pop": 7753,
  "state": "FL"
},{
  "city": "SARASOTA",
  "zip": "34241",
  "loc": {
    "y": 27.282179,
    "x": 82.418112
  },
  "pop": 8902,
  "state": "FL"
},{
  "city": "BRADEN RIVER",
  "zip": "34203",
  "loc": {
    "y": 27.444871,
    "x": 82.5404
  },
  "pop": 22408,
  "state": "FL"
},{
  "city": "BROOKSVILLE",
  "zip": "34613",
  "loc": {
    "y": 28.546558,
    "x": 82.521286
  },
  "pop": 9899,
  "state": "FL"
},{
  "city": "CLEARWATER",
  "zip": "34616",
  "loc": {
    "y": 27.945624,
    "x": 82.786711
  },
  "pop": 28460,
  "state": "FL"
},{
  "city": "NEW PORT RICHEY",
  "zip": "34654",
  "loc": {
    "y": 28.302201,
    "x": 82.626423
  },
  "pop": 13750,
  "state": "FL"
},{
  "city": "MONTVERDE",
  "zip": "34756",
  "loc": {
    "y": 28.597153,
    "x": 81.679368
  },
  "pop": 2216,
  "state": "FL"
},{
  "city": "STUART",
  "zip": "34994",
  "loc": {
    "y": 27.196834,
    "x": 80.253786
  },
  "pop": 14524,
  "state": "FL"
},{
  "city": "DECATUR",
  "zip": "30034",
  "loc": {
    "y": 33.695385,
    "x": 84.248939
  },
  "pop": 32312,
  "state": "GA"
},{
  "city": "SMYRNA",
  "zip": "30080",
  "loc": {
    "y": 33.879602,
    "x": 84.502284
  },
  "pop": 36899,
  "state": "GA"
},{
  "city": "FAIRBURN",
  "zip": "30213",
  "loc": {
    "y": 33.56482,
    "x": 84.580857
  },
  "pop": 14110,
  "state": "GA"
},{
  "city": "PEACHTREE CITY",
  "zip": "30269",
  "loc": {
    "y": 33.391467,
    "x": 84.563478
  },
  "pop": 18724,
  "state": "GA"
},{
  "city": "SOCIAL CIRCLE",
  "zip": "30279",
  "loc": {
    "y": 33.656386,
    "x": 83.706149
  },
  "pop": 4598,
  "state": "GA"
},{
  "city": "TYRONE",
  "zip": "30290",
  "loc": {
    "y": 33.471948,
    "x": 84.591357
  },
  "pop": 3555,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30305",
  "loc": {
    "y": 33.831963,
    "x": 84.385145
  },
  "pop": 19122,
  "state": "GA"
},{
  "city": "GARFIELD",
  "zip": "30425",
  "loc": {
    "y": 32.600776,
    "x": 82.085599
  },
  "pop": 593,
  "state": "GA"
},{
  "city": "LOUISVILLE",
  "zip": "30434",
  "loc": {
    "y": 33.016342,
    "x": 82.383616
  },
  "pop": 7089,
  "state": "GA"
},{
  "city": "GAINESVILLE",
  "zip": "30501",
  "loc": {
    "y": 34.307269,
    "x": 83.825596
  },
  "pop": 22334,
  "state": "GA"
},{
  "city": "PENDERGRASS",
  "zip": "30567",
  "loc": {
    "y": 34.179634,
    "x": 83.663356
  },
  "pop": 1956,
  "state": "GA"
},{
  "city": "MARCO ISLAND",
  "zip": "33937",
  "loc": {
    "y": 25.939568,
    "x": 81.720394
  },
  "pop": 9495,
  "state": "FL"
},{
  "city": "PORT CHARLOTTE",
  "zip": "33954",
  "loc": {
    "y": 27.022815,
    "x": 82.110782
  },
  "pop": 3993,
  "state": "FL"
},{
  "city": "PARRISH",
  "zip": "34219",
  "loc": {
    "y": 27.557162,
    "x": 82.396009
  },
  "pop": 3811,
  "state": "FL"
},{
  "city": "GROVE CITY",
  "zip": "34224",
  "loc": {
    "y": 26.92504,
    "x": 82.311731
  },
  "pop": 5110,
  "state": "FL"
},{
  "city": "BROOKSVILLE",
  "zip": "34601",
  "loc": {
    "y": 28.565805,
    "x": 82.373674
  },
  "pop": 20190,
  "state": "FL"
},{
  "city": "NEW PORT RICHEY",
  "zip": "34655",
  "loc": {
    "y": 28.212898,
    "x": 82.680729
  },
  "pop": 13849,
  "state": "FL"
},{
  "city": "OLDSMAR",
  "zip": "34677",
  "loc": {
    "y": 28.046035,
    "x": 82.684778
  },
  "pop": 12858,
  "state": "FL"
},{
  "city": "HOWEY IN THE HIL",
  "zip": "34737",
  "loc": {
    "y": 28.709818,
    "x": 81.789983
  },
  "pop": 1370,
  "state": "FL"
},{
  "city": "CLERMONT",
  "zip": "34711",
  "loc": {
    "y": 28.552541,
    "x": 81.757407
  },
  "pop": 15109,
  "state": "FL"
},{
  "city": "FORT PIERCE",
  "zip": "34946",
  "loc": {
    "y": 27.50077,
    "x": 80.35996
  },
  "pop": 10873,
  "state": "FL"
},{
  "city": "FORT PIERCE",
  "zip": "34981",
  "loc": {
    "y": 27.404882,
    "x": 80.362257
  },
  "pop": 3243,
  "state": "FL"
},{
  "city": "PALM CITY",
  "zip": "34990",
  "loc": {
    "y": 27.165646,
    "x": 80.291646
  },
  "pop": 13225,
  "state": "FL"
},{
  "city": "AVONDALE ESTATES",
  "zip": "30002",
  "loc": {
    "y": 33.771727,
    "x": 84.260691
  },
  "pop": 4459,
  "state": "GA"
},{
  "city": "MABLETON",
  "zip": "30059",
  "loc": {
    "y": 33.816572,
    "x": 84.565062
  },
  "pop": 22519,
  "state": "GA"
},{
  "city": "CEDARTOWN",
  "zip": "30125",
  "loc": {
    "y": 34.011196,
    "x": 85.2459
  },
  "pop": 20720,
  "state": "GA"
},{
  "city": "LINDALE",
  "zip": "30147",
  "loc": {
    "y": 34.170741,
    "x": 85.182491
  },
  "pop": 3502,
  "state": "GA"
},{
  "city": "ROME",
  "zip": "30161",
  "loc": {
    "y": 34.250726,
    "x": 85.146501
  },
  "pop": 33058,
  "state": "GA"
},{
  "city": "WOODSTOCK",
  "zip": "30188",
  "loc": {
    "y": 34.106005,
    "x": 84.511683
  },
  "pop": 33172,
  "state": "GA"
},{
  "city": "ALPHARETTA",
  "zip": "30201",
  "loc": {
    "y": 34.107677,
    "x": 84.295167
  },
  "pop": 19393,
  "state": "GA"
},{
  "city": "BARNESVILLE",
  "zip": "30204",
  "loc": {
    "y": 33.045713,
    "x": 84.15147
  },
  "pop": 9595,
  "state": "GA"
},{
  "city": "MORELAND",
  "zip": "30259",
  "loc": {
    "y": 33.273437,
    "x": 84.75656
  },
  "pop": 2056,
  "state": "GA"
},{
  "city": "THE ROCK",
  "zip": "30285",
  "loc": {
    "y": 32.971734,
    "x": 84.242359
  },
  "pop": 333,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30318",
  "loc": {
    "y": 33.786454,
    "x": 84.445432
  },
  "pop": 53894,
  "state": "GA"
},{
  "city": "NEWINGTON",
  "zip": "30446",
  "loc": {
    "y": 32.588385,
    "x": 81.532686
  },
  "pop": 2296,
  "state": "GA"
},{
  "city": "TWIN CITY",
  "zip": "30471",
  "loc": {
    "y": 32.612926,
    "x": 82.197856
  },
  "pop": 5531,
  "state": "GA"
},{
  "city": "WADLEY",
  "zip": "30477",
  "loc": {
    "y": 32.874742,
    "x": 82.402459
  },
  "pop": 3376,
  "state": "GA"
},{
  "city": "SOPERTON",
  "zip": "30457",
  "loc": {
    "y": 32.386861,
    "x": 82.587098
  },
  "pop": 5996,
  "state": "GA"
},{
  "city": "BOWERSVILLE",
  "zip": "30516",
  "loc": {
    "y": 34.399592,
    "x": 83.048364
  },
  "pop": 2082,
  "state": "GA"
},{
  "city": "BRASELTON",
  "zip": "30517",
  "loc": {
    "y": 34.138941,
    "x": 83.781162
  },
  "pop": 3142,
  "state": "GA"
},{
  "city": "CLARKESVILLE",
  "zip": "30523",
  "loc": {
    "y": 34.644993,
    "x": 83.524304
  },
  "pop": 8931,
  "state": "GA"
},{
  "city": "MOUNT AIRY",
  "zip": "30563",
  "loc": {
    "y": 34.567825,
    "x": 83.471272
  },
  "pop": 2813,
  "state": "GA"
},{
  "city": "DEWY ROSE",
  "zip": "30634",
  "loc": {
    "y": 34.172052,
    "x": 82.940894
  },
  "pop": 1138,
  "state": "GA"
},{
  "city": "BABSON PARK",
  "zip": "33827",
  "loc": {
    "y": 27.831698,
    "x": 81.534221
  },
  "pop": 1901,
  "state": "FL"
},{
  "city": "BARTOW",
  "zip": "33830",
  "loc": {
    "y": 27.895664,
    "x": 81.812684
  },
  "pop": 25968,
  "state": "FL"
},{
  "city": "DUETTE",
  "zip": "33834",
  "loc": {
    "y": 27.627738,
    "x": 81.845058
  },
  "pop": 3700,
  "state": "FL"
},{
  "city": "SAINT PETERSBURG",
  "zip": "33705",
  "loc": {
    "y": 27.739113,
    "x": 82.64349
  },
  "pop": 28261,
  "state": "FL"
},{
  "city": "NAPLES",
  "zip": "33942",
  "loc": {
    "y": 26.201578,
    "x": 81.766125
  },
  "pop": 23719,
  "state": "FL"
},{
  "city": "PUNTA GORDA",
  "zip": "33950",
  "loc": {
    "y": 26.915163,
    "x": 82.053166
  },
  "pop": 15495,
  "state": "FL"
},{
  "city": "SAINT JAMES CITY",
  "zip": "33956",
  "loc": {
    "y": 26.529012,
    "x": 82.091591
  },
  "pop": 3653,
  "state": "FL"
},{
  "city": "BRADEN RIVER",
  "zip": "34202",
  "loc": {
    "y": 27.46521,
    "x": 82.431487
  },
  "pop": 6618,
  "state": "FL"
},{
  "city": "FOREST LAKES",
  "zip": "34232",
  "loc": {
    "y": 27.320056,
    "x": 82.475709
  },
  "pop": 29847,
  "state": "FL"
},{
  "city": "SPRING HILL",
  "zip": "34607",
  "loc": {
    "y": 28.506546,
    "x": 82.626671
  },
  "pop": 5420,
  "state": "FL"
},{
  "city": "CLEARWATER",
  "zip": "34624",
  "loc": {
    "y": 27.93595,
    "x": 82.743485
  },
  "pop": 27315,
  "state": "FL"
},{
  "city": "CLEARWATER",
  "zip": "34630",
  "loc": {
    "y": 27.984526,
    "x": 82.822281
  },
  "pop": 6231,
  "state": "FL"
},{
  "city": "NEW PORT RICHEY",
  "zip": "34653",
  "loc": {
    "y": 28.244398,
    "x": 82.6986
  },
  "pop": 26729,
  "state": "FL"
},{
  "city": "HUDSON",
  "zip": "34667",
  "loc": {
    "y": 28.364763,
    "x": 82.675669
  },
  "pop": 26410,
  "state": "FL"
},{
  "city": "PORT RICHEY",
  "zip": "34668",
  "loc": {
    "y": 28.301148,
    "x": 82.692714
  },
  "pop": 39471,
  "state": "FL"
},{
  "city": "YALAHA",
  "zip": "34797",
  "loc": {
    "y": 28.744443,
    "x": 81.826324
  },
  "pop": 1061,
  "state": "FL"
},{
  "city": "JENSEN BEACH",
  "zip": "34957",
  "loc": {
    "y": 27.235568,
    "x": 80.227656
  },
  "pop": 13656,
  "state": "FL"
},{
  "city": "FORT PIERCE",
  "zip": "34982",
  "loc": {
    "y": 27.390764,
    "x": 80.324633
  },
  "pop": 20061,
  "state": "FL"
},{
  "city": "ARMUCHEE",
  "zip": "30105",
  "loc": {
    "y": 34.441082,
    "x": 85.184298
  },
  "pop": 2131,
  "state": "GA"
},{
  "city": "CANTON",
  "zip": "30114",
  "loc": {
    "y": 34.205874,
    "x": 84.457756
  },
  "pop": 35773,
  "state": "GA"
},{
  "city": "TALLAPOOSA",
  "zip": "30176",
  "loc": {
    "y": 33.760174,
    "x": 85.300047
  },
  "pop": 6172,
  "state": "GA"
},{
  "city": "LAWRENCEVILLE",
  "zip": "30243",
  "loc": {
    "y": 34.005049,
    "x": 84.014944
  },
  "pop": 24119,
  "state": "GA"
},{
  "city": "MC DONOUGH",
  "zip": "30253",
  "loc": {
    "y": 33.46466,
    "x": 84.135751
  },
  "pop": 18550,
  "state": "GA"
},{
  "city": "WILLIAMSON",
  "zip": "30292",
  "loc": {
    "y": 33.159838,
    "x": 84.379493
  },
  "pop": 2940,
  "state": "GA"
},{
  "city": "RIVERDALE",
  "zip": "30296",
  "loc": {
    "y": 33.566716,
    "x": 84.43645
  },
  "pop": 18577,
  "state": "GA"
},{
  "city": "WOODBURY",
  "zip": "30293",
  "loc": {
    "y": 32.981318,
    "x": 84.598632
  },
  "pop": 3648,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30317",
  "loc": {
    "y": 33.749788,
    "x": 84.31685
  },
  "pop": 16395,
  "state": "GA"
},{
  "city": "ATLANTA",
  "zip": "30342",
  "loc": {
    "y": 33.884245,
    "x": 84.376091
  },
  "pop": 19057,
  "state": "GA"
},{
  "city": "COBBTOWN",
  "zip": "30420",
  "loc": {
    "y": 32.264237,
    "x": 82.133274
  },
  "pop": 1482,
  "state": "GA"
},{
  "city": "REGISTER",
  "zip": "30452",
  "loc": {
    "y": 32.338235,
    "x": 81.872828
  },
  "pop": 1655,
  "state": "GA"
},{
  "city": "LAVONIA",
  "zip": "30553",
  "loc": {
    "y": 34.452758,
    "x": 83.112992
  },
  "pop": 5797,
  "state": "GA"
},{
  "city": "TALMO",
  "zip": "30575",
  "loc": {
    "y": 34.19506,
    "x": 83.71872
  },
  "pop": 1153,
  "state": "GA"
},{
  "city": "SAUTEE NACOOCHEE",
  "zip": "30571",
  "loc": {
    "y": 34.716245,
    "x": 83.693116
  },
  "pop": 1504,
  "state": "GA"
},{
  "city": "YOUNG HARRIS",
  "zip": "30582",
  "loc": {
    "y": 34.958791,
    "x": 83.86882
  },
  "pop": 1687,
  "state": "GA"
},{
  "city": "UNION POINT",
  "zip": "30669",
  "loc": {
    "y": 33.634544,
    "x": 83.087913
  },
  "pop": 3561,
  "state": "GA"
},{
  "city": "WINTERVILLE",
  "zip": "30683",
  "loc": {
    "y": 33.954253,
    "x": 83.290645
  },
  "pop": 3056,
  "state": "GA"
},{
  "city": "ELBERTON",
  "zip": "30635",
  "loc": {
    "y": 34.108202,
    "x": 82.844765
  },
  "pop": 15503,
  "state": "GA"
},{
  "city": "CISCO",
  "zip": "30708",
  "loc": {
    "y": 34.847405,
    "x": 84.717382
  },
  "pop": 978,
  "state": "GA"
},{
  "city": "MADISON",
  "zip": "30650",
  "loc": {
    "y": 33.594681,
    "x": 83.461781
  },
  "pop": 8855,
  "state": "GA"
},{
  "city": "ROYSTON",
  "zip": "30662",
  "loc": {
    "y": 34.277793,
    "x": 83.140614
  },
  "pop": 8836,
  "state": "GA"
},{
  "city": "WILDWOOD",
  "zip": "30757",
  "loc": {
    "y": 34.977911,
    "x": 85.430456
  },
  "pop": 586,
  "state": "GA"
},{
  "city": "WASHINGTON",
  "zip": "30673",
  "loc": {
    "y": 33.726541,
    "x": 82.742912
  },
  "pop": 7699,
  "state": "GA"
},{
  "city": "CHATSWORTH",
  "zip": "30705",
  "loc": {
    "y": 34.758929,
    "x": 84.794293
  },
  "pop": 22271,
  "state": "GA"
},{
  "city": "SUMMERVILLE",
  "zip": "30747",
  "loc": {
    "y": 34.485899,
    "x": 85.336224
  },
  "pop": 10748,
  "state": "GA"
},{
  "city": "TRION",
  "zip": "30753",
  "loc": {
    "y": 34.54679,
    "x": 85.311156
  },
  "pop": 5963,
  "state": "GA"
},{
  "city": "PERKINS",
  "zip": "30822",
  "loc": {
    "y": 32.905747,
    "x": 81.869573
  },
  "pop": 549,
  "state": "GA"
},{
  "city": "CADWELL",
  "zip": "31009",
  "loc": {
    "y": 32.317395,
    "x": 83.026767
  },
  "pop": 1501,
  "state": "GA"
},{
  "city": "EATONTON",
  "zip": "31024",
  "loc": {
    "y": 33.312723,
    "x": 83.36277
  },
  "pop": 13086,
  "state": "GA"
},{
  "city": "HARRISON",
  "zip": "31035",
  "loc": {
    "y": 32.842007,
    "x": 82.71593
  },
  "pop": 1737,
  "state": "GA"
},{
  "city": "HELENA",
  "zip": "31037",
  "loc": {
    "y": 32.078093,
    "x": 82.91782
  },
  "pop": 1526,
  "state": "GA"
},{
  "city": "PINEVIEW",
  "zip": "31071",
  "loc": {
    "y": 32.090728,
    "x": 83.515835
  },
  "pop": 1154,
  "state": "GA"
},{
  "city": "MACON",
  "zip": "31204",
  "loc": {
    "y": 32.842393,
    "x": 83.676634
  },
  "pop": 38186,
  "state": "GA"
},{
  "city": "RICEBORO",
  "zip": "31323",
  "loc": {
    "y": 31.735696,
    "x": 81.467134
  },
  "pop": 1737,
  "state": "GA"
},{
  "city": "SAVANNAH",
  "zip": "31401",
  "loc": {
    "y": 32.067631,
    "x": 81.102394
  },
  "pop": 37544,
  "state": "GA"
},{
  "city": "TOWNSEND",
  "zip": "31331",
  "loc": {
    "y": 31.567339,
    "x": 81.418204
  },
  "pop": 2413,
  "state": "GA"
},{
  "city": "SAINT MARYS",
  "zip": "31558",
  "loc": {
    "y": 30.773467,
    "x": 81.565211
  },
  "pop": 15655,
  "state": "GA"
},{
  "city": "WAVERLY",
  "zip": "31565",
  "loc": {
    "y": 31.042672,
    "x": 81.56967
  },
  "pop": 331,
  "state": "GA"
},{
  "city": "LENOX",
  "zip": "31637",
  "loc": {
    "y": 31.266405,
    "x": 83.448135
  },
  "pop": 1993,
  "state": "GA"
},{
  "city": "NAYLOR",
  "zip": "31641",
  "loc": {
    "y": 30.89846,
    "x": 83.122368
  },
  "pop": 1110,
  "state": "GA"
},{
  "city": "GRAVES",
  "zip": "31742",
  "loc": {
    "y": 31.759846,
    "x": 84.430782
  },
  "pop": 8731,
  "state": "GA"
},{
  "city": "DOERUN",
  "zip": "31744",
  "loc": {
    "y": 31.313647,
    "x": 83.925316
  },
  "pop": 1738,
  "state": "GA"
},{
  "city": "PELHAM",
  "zip": "31779",
  "loc": {
    "y": 31.127233,
    "x": 84.156367
  },
  "pop": 7123,
  "state": "GA"
},{
  "city": "SHELLMAN",
  "zip": "31786",
  "loc": {
    "y": 31.743407,
    "x": 84.616616
  },
  "pop": 1900,
  "state": "GA"
},{
  "city": "SYLVESTER",
  "zip": "31791",
  "loc": {
    "y": 31.539268,
    "x": 83.860731
  },
  "pop": 9573,
  "state": "GA"
},{
  "city": "WRAY",
  "zip": "31798",
  "loc": {
    "y": 31.595229,
    "x": 83.107484
  },
  "pop": 978,
  "state": "GA"
},{
  "city": "UPATOI",
  "zip": "31829",
  "loc": {
    "y": 32.560057,
    "x": 84.744819
  },
  "pop": 725,
  "state": "GA"
},{
  "city": "WESTON",
  "zip": "31832",
  "loc": {
    "y": 31.963665,
    "x": 84.575579
  },
  "pop": 573,
  "state": "GA"
},{
  "city": "HAWI",
  "zip": "96719",
  "loc": {
    "y": 20.238021,
    "x": 155.838007
  },
  "pop": 1741,
  "state": "HI"
},{
  "city": "CUSTER TERRACE",
  "zip": "31905",
  "loc": {
    "y": 32.369728,
    "x": 84.945264
  },
  "pop": 22869,
  "state": "GA"
},{
  "city": "KANEOHE",
  "zip": "96744",
  "loc": {
    "y": 21.422819,
    "x": 157.811543
  },
  "pop": 55236,
  "state": "HI"
},{
  "city": "KIHEI",
  "zip": "96753",
  "loc": {
    "y": 20.744124,
    "x": 156.447543
  },
  "pop": 14759,
  "state": "HI"
},{
  "city": "KEKAHA",
  "zip": "96752",
  "loc": {
    "y": 21.973509,
    "x": 159.71988
  },
  "pop": 3785,
  "state": "HI"
},{
  "city": "LAUPAHOEHOE",
  "zip": "96764",
  "loc": {
    "y": 19.980194,
    "x": 155.232263
  },
  "pop": 1015,
  "state": "HI"
},{
  "city": "PEARL CITY",
  "zip": "96782",
  "loc": {
    "y": 21.408393,
    "x": 157.965164
  },
  "pop": 38207,
  "state": "HI"
},{
  "city": "ARCO",
  "zip": "83213",
  "loc": {
    "y": 43.635521,
    "x": 113.317559
  },
  "pop": 1823,
  "state": "ID"
},{
  "city": "FILER",
  "zip": "83328",
  "loc": {
    "y": 42.565269,
    "x": 114.614047
  },
  "pop": 4176,
  "state": "ID"
},{
  "city": "CLOUDLAND",
  "zip": "30731",
  "loc": {
    "y": 34.570909,
    "x": 85.459723
  },
  "pop": 3222,
  "state": "GA"
},{
  "city": "GROVETOWN",
  "zip": "30813",
  "loc": {
    "y": 33.476622,
    "x": 82.240937
  },
  "pop": 13283,
  "state": "GA"
},{
  "city": "COCHRAN",
  "zip": "31014",
  "loc": {
    "y": 32.398066,
    "x": 83.322886
  },
  "pop": 11373,
  "state": "GA"
},{
  "city": "FORT VALLEY",
  "zip": "31030",
  "loc": {
    "y": 32.54956,
    "x": 83.888727
  },
  "pop": 14027,
  "state": "GA"
},{
  "city": "LIZELLA",
  "zip": "31052",
  "loc": {
    "y": 32.777316,
    "x": 83.825009
  },
  "pop": 6992,
  "state": "GA"
},{
  "city": "MC RAE",
  "zip": "31055",
  "loc": {
    "y": 32.043529,
    "x": 82.887665
  },
  "pop": 4906,
  "state": "GA"
},{
  "city": "WARTHEN",
  "zip": "31094",
  "loc": {
    "y": 33.125455,
    "x": 82.803899
  },
  "pop": 1188,
  "state": "GA"
},{
  "city": "ROBINS A F B",
  "zip": "31098",
  "loc": {
    "y": 32.60958,
    "x": 83.58775
  },
  "pop": 3228,
  "state": "GA"
},{
  "city": "MERIDIAN",
  "zip": "31319",
  "loc": {
    "y": 31.411068,
    "x": 81.423915
  },
  "pop": 672,
  "state": "GA"
},{
  "city": "SAVANNAH",
  "zip": "31410",
  "loc": {
    "y": 32.016188,
    "x": 80.983859
  },
  "pop": 15808,
  "state": "GA"
},{
  "city": "SAVANNAH",
  "zip": "31411",
  "loc": {
    "y": 31.926801,
    "x": 81.038074
  },
  "pop": 4707,
  "state": "GA"
},{
  "city": "JACKSONVILLE",
  "zip": "31544",
  "loc": {
    "y": 31.848079,
    "x": 82.975003
  },
  "pop": 905,
  "state": "GA"
},{
  "city": "LUMBER CITY",
  "zip": "31549",
  "loc": {
    "y": 31.925124,
    "x": 82.707312
  },
  "pop": 2036,
  "state": "GA"
},{
  "city": "ODUM",
  "zip": "31555",
  "loc": {
    "y": 31.699916,
    "x": 81.994301
  },
  "pop": 2851,
  "state": "GA"
},{
  "city": "BARNEY",
  "zip": "31625",
  "loc": {
    "y": 31.007424,
    "x": 83.521934
  },
  "pop": 895,
  "state": "GA"
},{
  "city": "ALBANY",
  "zip": "31707",
  "loc": {
    "y": 31.578908,
    "x": 84.211834
  },
  "pop": 36439,
  "state": "GA"
},{
  "city": "GEORGETOWN",
  "zip": "31754",
  "loc": {
    "y": 31.884763,
    "x": 85.071137
  },
  "pop": 1415,
  "state": "GA"
},{
  "city": "WARWICK",
  "zip": "31796",
  "loc": {
    "y": 31.734495,
    "x": 83.920092
  },
  "pop": 2650,
  "state": "GA"
},{
  "city": "HAMILTON",
  "zip": "31811",
  "loc": {
    "y": 32.741795,
    "x": 84.884753
  },
  "pop": 1587,
  "state": "GA"
},{
  "city": "WEST POINT",
  "zip": "31833",
  "loc": {
    "y": 32.833683,
    "x": 85.119714
  },
  "pop": 8499,
  "state": "GA"
},{
  "city": "KURTISTOWN",
  "zip": "96760",
  "loc": {
    "y": 19.570637,
    "x": 155.020659
  },
  "pop": 3975,
  "state": "HI"
},{
  "city": "KEAAU",
  "zip": "96749",
  "loc": {
    "y": 19.589277,
    "x": 154.992644
  },
  "pop": 4297,
  "state": "HI"
},{
  "city": "WAHIAWA",
  "zip": "96786",
  "loc": {
    "y": 21.500596,
    "x": 158.043527
  },
  "pop": 43663,
  "state": "HI"
},{
  "city": "CHUBBUCK",
  "zip": "83202",
  "loc": {
    "y": 42.926548,
    "x": 112.474873
  },
  "pop": 11385,
  "state": "ID"
},{
  "city": "FORT HALL",
  "zip": "83203",
  "loc": {
    "y": 42.988717,
    "x": 112.459854
  },
  "pop": 1566,
  "state": "ID"
},{
  "city": "HOLBROOK",
  "zip": "83243",
  "loc": {
    "y": 42.222148,
    "x": 112.693404
  },
  "pop": 213,
  "state": "ID"
},{
  "city": "PRESTON",
  "zip": "83263",
  "loc": {
    "y": 42.110917,
    "x": 111.856516
  },
  "pop": 5402,
  "state": "ID"
},{
  "city": "BELLEVUE",
  "zip": "83313",
  "loc": {
    "y": 43.439694,
    "x": 114.249804
  },
  "pop": 2150,
  "state": "ID"
},{
  "city": "LYERLY",
  "zip": "30730",
  "loc": {
    "y": 34.402958,
    "x": 85.403826
  },
  "pop": 2585,
  "state": "GA"
},{
  "city": "ABBEVILLE",
  "zip": "31001",
  "loc": {
    "y": 31.96484,
    "x": 83.306845
  },
  "pop": 1991,
  "state": "GA"
},{
  "city": "ADRIAN",
  "zip": "31002",
  "loc": {
    "y": 32.563505,
    "x": 82.569508
  },
  "pop": 2880,
  "state": "GA"
},{
  "city": "PEACH ORCHARD",
  "zip": "30906",
  "loc": {
    "y": 33.402024,
    "x": 82.038358
  },
  "pop": 58646,
  "state": "GA"
},{
  "city": "ALLENTOWN",
  "zip": "31003",
  "loc": {
    "y": 32.653829,
    "x": 83.189796
  },
  "pop": 1099,
  "state": "GA"
},{
  "city": "HAWKINSVILLE",
  "zip": "31036",
  "loc": {
    "y": 32.277834,
    "x": 83.494763
  },
  "pop": 9154,
  "state": "GA"
},{
  "city": "REYNOLDS",
  "zip": "31076",
  "loc": {
    "y": 32.55411,
    "x": 84.101134
  },
  "pop": 2455,
  "state": "GA"
},{
  "city": "WARNER ROBINS",
  "zip": "31088",
  "loc": {
    "y": 32.593365,
    "x": 83.641578
  },
  "pop": 34526,
  "state": "GA"
},{
  "city": "ALBANY",
  "zip": "31701",
  "loc": {
    "y": 31.567783,
    "x": 84.161923
  },
  "pop": 25698,
  "state": "GA"
},{
  "city": "CLIMAX",
  "zip": "31734",
  "loc": {
    "y": 30.85731,
    "x": 84.443217
  },
  "pop": 1764,
  "state": "GA"
},{
  "city": "IRON CITY",
  "zip": "31759",
  "loc": {
    "y": 30.994728,
    "x": 84.796632
  },
  "pop": 1542,
  "state": "GA"
},{
  "city": "SUMNER",
  "zip": "31789",
  "loc": {
    "y": 31.53925,
    "x": 83.724463
  },
  "pop": 1125,
  "state": "GA"
},{
  "city": "MIDLAND",
  "zip": "31820",
  "loc": {
    "y": 32.561587,
    "x": 84.855851
  },
  "pop": 4725,
  "state": "GA"
},{
  "city": "COLUMBUS",
  "zip": "31904",
  "loc": {
    "y": 32.516091,
    "x": 84.978475
  },
  "pop": 29254,
  "state": "GA"
},{
  "city": "HOLUALOA",
  "zip": "96725",
  "loc": {
    "y": 19.610316,
    "x": 155.917639
  },
  "pop": 2096,
  "state": "HI"
},{
  "city": "KOLOA",
  "zip": "96756",
  "loc": {
    "y": 21.908293,
    "x": 159.474927
  },
  "pop": 4906,
  "state": "HI"
},{
  "city": "KAPAA",
  "zip": "96746",
  "loc": {
    "y": 22.086798,
    "x": 159.344842
  },
  "pop": 15627,
  "state": "HI"
},{
  "city": "MAKAWELI",
  "zip": "96769",
  "loc": {
    "y": 21.927639,
    "x": 159.790721
  },
  "pop": 797,
  "state": "HI"
},{
  "city": "OOKALA",
  "zip": "96774",
  "loc": {
    "y": 20.011887,
    "x": 155.274666
  },
  "pop": 315,
  "state": "HI"
},{
  "city": "MILILANI",
  "zip": "96789",
  "loc": {
    "y": 21.45311,
    "x": 158.017379
  },
  "pop": 34734,
  "state": "HI"
},{
  "city": "WAILUKU",
  "zip": "96793",
  "loc": {
    "y": 20.896586,
    "x": 156.503612
  },
  "pop": 15818,
  "state": "HI"
},{
  "city": "POCATELLO",
  "zip": "83204",
  "loc": {
    "y": 42.846463,
    "x": 112.443352
  },
  "pop": 15605,
  "state": "ID"
},{
  "city": "INKOM",
  "zip": "83245",
  "loc": {
    "y": 42.796379,
    "x": 112.246474
  },
  "pop": 823,
  "state": "ID"
},{
  "city": "SODA SPRINGS",
  "zip": "83276",
  "loc": {
    "y": 42.671819,
    "x": 111.569896
  },
  "pop": 3871,
  "state": "ID"
},{
  "city": "ELBA",
  "zip": "83326",
  "loc": {
    "y": 42.180865,
    "x": 113.663559
  },
  "pop": 163,
  "state": "ID"
},{
  "city": "HILL CITY",
  "zip": "30735",
  "loc": {
    "y": 34.591996,
    "x": 84.916251
  },
  "pop": 2926,
  "state": "GA"
},{
  "city": "HEPHZIBAH",
  "zip": "30815",
  "loc": {
    "y": 33.343328,
    "x": 82.088689
  },
  "pop": 27838,
  "state": "GA"
},{
  "city": "MARTINEZ",
  "zip": "30907",
  "loc": {
    "y": 33.511692,
    "x": 82.099505
  },
  "pop": 42573,
  "state": "GA"
},{
  "city": "DAVISBORO",
  "zip": "31018",
  "loc": {
    "y": 32.944296,
    "x": 82.622738
  },
  "pop": 2032,
  "state": "GA"
},{
  "city": "KATHLEEN",
  "zip": "31047",
  "loc": {
    "y": 32.467218,
    "x": 83.61284
  },
  "pop": 563,
  "state": "GA"
},{
  "city": "KNOXVILLE",
  "zip": "31050",
  "loc": {
    "y": 32.64724,
    "x": 83.943011
  },
  "pop": 2134,
  "state": "GA"
},{
  "city": "DEVEREUX",
  "zip": "31087",
  "loc": {
    "y": 33.265516,
    "x": 82.985948
  },
  "pop": 8908,
  "state": "GA"
},{
  "city": "ELLABELL",
  "zip": "31308",
  "loc": {
    "y": 32.127304,
    "x": 81.498302
  },
  "pop": 1309,
  "state": "GA"
},{
  "city": "LUDOWICI",
  "zip": "31316",
  "loc": {
    "y": 31.770477,
    "x": 81.745315
  },
  "pop": 6139,
  "state": "GA"
},{
  "city": "GARDEN CITY",
  "zip": "31408",
  "loc": {
    "y": 32.109245,
    "x": 81.168181
  },
  "pop": 12548,
  "state": "GA"
},{
  "city": "ALMA",
  "zip": "31510",
  "loc": {
    "y": 31.546525,
    "x": 82.4633
  },
  "pop": 9566,
  "state": "GA"
},{
  "city": "BAXLEY",
  "zip": "31513",
  "loc": {
    "y": 31.783663,
    "x": 82.348643
  },
  "pop": 14099,
  "state": "GA"
},{
  "city": "DOUGLAS",
  "zip": "31533",
  "loc": {
    "y": 31.497287,
    "x": 82.846468
  },
  "pop": 19607,
  "state": "GA"
},{
  "city": "LAKE PARK",
  "zip": "31636",
  "loc": {
    "y": 30.690615,
    "x": 83.175293
  },
  "pop": 4491,
  "state": "GA"
},{
  "city": "ARABI",
  "zip": "31712",
  "loc": {
    "y": 31.862923,
    "x": 83.72856
  },
  "pop": 1349,
  "state": "GA"
},{
  "city": "BAINBRIDGE",
  "zip": "31717",
  "loc": {
    "y": 30.897865,
    "x": 84.573975
  },
  "pop": 17739,
  "state": "GA"
},{
  "city": "CHULA",
  "zip": "31733",
  "loc": {
    "y": 31.543855,
    "x": 83.550864
  },
  "pop": 2425,
  "state": "GA"
},{
  "city": "COLQUITT",
  "zip": "31737",
  "loc": {
    "y": 31.161871,
    "x": 84.730896
  },
  "pop": 6277,
  "state": "GA"
},{
  "city": "AIEA",
  "zip": "96701",
  "loc": {
    "y": 21.390795,
    "x": 157.933237
  },
  "pop": 43273,
  "state": "HI"
},{
  "city": "KAHULUI",
  "zip": "96732",
  "loc": {
    "y": 20.881388,
    "x": 156.478327
  },
  "pop": 17289,
  "state": "HI"
},{
  "city": "KEALAKEKUA",
  "zip": "96750",
  "loc": {
    "y": 19.526149,
    "x": 155.930025
  },
  "pop": 1309,
  "state": "HI"
},{
  "city": "VOLCANO",
  "zip": "96785",
  "loc": {
    "y": 19.480066,
    "x": 155.19743
  },
  "pop": 2639,
  "state": "HI"
},{
  "city": "HONOLULU",
  "zip": "96822",
  "loc": {
    "y": 21.311704,
    "x": 157.829819
  },
  "pop": 39632,
  "state": "HI"
},{
  "city": "DOWNEY",
  "zip": "83234",
  "loc": {
    "y": 42.418127,
    "x": 112.109019
  },
  "pop": 939,
  "state": "ID"
},{
  "city": "ELLIS",
  "zip": "83235",
  "loc": {
    "y": 44.878829,
    "x": 114.001594
  },
  "pop": 192,
  "state": "ID"
},{
  "city": "GENEVA",
  "zip": "83238",
  "loc": {
    "y": 42.313585,
    "x": 111.072185
  },
  "pop": 125,
  "state": "ID"
},{
  "city": "SAINT CHARLES",
  "zip": "83272",
  "loc": {
    "y": 42.112812,
    "x": 111.389744
  },
  "pop": 199,
  "state": "ID"
},{
  "city": "ROGERSON",
  "zip": "83302",
  "loc": {
    "y": 42.219567,
    "x": 114.603794
  },
  "pop": 92,
  "state": "ID"
},{
  "city": "HAILEY",
  "zip": "83333",
  "loc": {
    "y": 43.523861,
    "x": 114.306398
  },
  "pop": 4683,
  "state": "ID"
},{
  "city": "DALTON",
  "zip": "30721",
  "loc": {
    "y": 34.77922,
    "x": 84.933871
  },
  "pop": 36051,
  "state": "GA"
},{
  "city": "RANGER",
  "zip": "30734",
  "loc": {
    "y": 34.540361,
    "x": 84.727018
  },
  "pop": 2015,
  "state": "GA"
},{
  "city": "EVANS",
  "zip": "30809",
  "loc": {
    "y": 33.541194,
    "x": 82.139775
  },
  "pop": 12788,
  "state": "GA"
},{
  "city": "DUDLEY",
  "zip": "31022",
  "loc": {
    "y": 32.525879,
    "x": 83.089918
  },
  "pop": 966,
  "state": "GA"
},{
  "city": "FORSYTH",
  "zip": "31029",
  "loc": {
    "y": 33.050764,
    "x": 83.936209
  },
  "pop": 8959,
  "state": "GA"
},{
  "city": "ROUND OAK",
  "zip": "31038",
  "loc": {
    "y": 33.179994,
    "x": 83.687092
  },
  "pop": 811,
  "state": "GA"
},{
  "city": "MONTEZUMA",
  "zip": "31063",
  "loc": {
    "y": 32.302615,
    "x": 84.004139
  },
  "pop": 6160,
  "state": "GA"
},{
  "city": "MONTROSE",
  "zip": "31065",
  "loc": {
    "y": 32.561867,
    "x": 83.160119
  },
  "pop": 587,
  "state": "GA"
},{
  "city": "PINEHURST",
  "zip": "31070",
  "loc": {
    "y": 32.196692,
    "x": 83.720853
  },
  "pop": 917,
  "state": "GA"
},{
  "city": "UNADILLA",
  "zip": "31091",
  "loc": {
    "y": 32.255766,
    "x": 83.74467
  },
  "pop": 2623,
  "state": "GA"
},{
  "city": "ALLENHURST",
  "zip": "31301",
  "loc": {
    "y": 31.774059,
    "x": 81.618577
  },
  "pop": 3075,
  "state": "GA"
},{
  "city": "TYBEE ISLAND",
  "zip": "31328",
  "loc": {
    "y": 32.006797,
    "x": 80.850938
  },
  "pop": 3106,
  "state": "GA"
},{
  "city": "SAVANNAH",
  "zip": "31406",
  "loc": {
    "y": 31.988993,
    "x": 81.097893
  },
  "pop": 34024,
  "state": "GA"
},{
  "city": "OKEFENOKEE",
  "zip": "31501",
  "loc": {
    "y": 31.219686,
    "x": 82.364512
  },
  "pop": 33068,
  "state": "GA"
},{
  "city": "BRUNSWICK",
  "zip": "31525",
  "loc": {
    "y": 31.230411,
    "x": 81.511365
  },
  "pop": 27079,
  "state": "GA"
},{
  "city": "KINGSLAND",
  "zip": "31548",
  "loc": {
    "y": 30.797681,
    "x": 81.707483
  },
  "pop": 8781,
  "state": "GA"
},{
  "city": "NAHUNTA",
  "zip": "31553",
  "loc": {
    "y": 31.182652,
    "x": 81.972212
  },
  "pop": 3158,
  "state": "GA"
},{
  "city": "MILLWOOD",
  "zip": "31552",
  "loc": {
    "y": 31.250566,
    "x": 82.644148
  },
  "pop": 500,
  "state": "GA"
},{
  "city": "BEMISS",
  "zip": "31602",
  "loc": {
    "y": 30.890268,
    "x": 83.273299
  },
  "pop": 32292,
  "state": "GA"
},{
  "city": "NASHVILLE",
  "zip": "31639",
  "loc": {
    "y": 31.207379,
    "x": 83.231946
  },
  "pop": 8396,
  "state": "GA"
},{
  "city": "ATTAPULGUS",
  "zip": "31715",
  "loc": {
    "y": 30.750639,
    "x": 84.486008
  },
  "pop": 3131,
  "state": "GA"
},{
  "city": "COBB",
  "zip": "31735",
  "loc": {
    "y": 31.961708,
    "x": 83.958087
  },
  "pop": 881,
  "state": "GA"
},{
  "city": "LESLIE",
  "zip": "31764",
  "loc": {
    "y": 31.953952,
    "x": 84.07834
  },
  "pop": 1273,
  "state": "GA"
},{
  "city": "LEESBURG",
  "zip": "31763",
  "loc": {
    "y": 31.681161,
    "x": 84.159263
  },
  "pop": 14641,
  "state": "GA"
},{
  "city": "OAKFIELD",
  "zip": "31772",
  "loc": {
    "y": 31.779768,
    "x": 83.97059
  },
  "pop": 149,
  "state": "GA"
},{
  "city": "PAVO",
  "zip": "31778",
  "loc": {
    "y": 30.940142,
    "x": 83.740856
  },
  "pop": 3573,
  "state": "GA"
},{
  "city": "KAAAWA",
  "zip": "96730",
  "loc": {
    "y": 21.56737,
    "x": 157.873734
  },
  "pop": 2305,
  "state": "HI"
},{
  "city": "PAPAIKOU",
  "zip": "96781",
  "loc": {
    "y": 19.791643,
    "x": 155.098442
  },
  "pop": 1700,
  "state": "HI"
},{
  "city": "PEPEEKEO",
  "zip": "96783",
  "loc": {
    "y": 19.835283,
    "x": 155.112994
  },
  "pop": 2038,
  "state": "HI"
},{
  "city": "PAPAALOA",
  "zip": "96780",
  "loc": {
    "y": 19.904835,
    "x": 155.218402
  },
  "pop": 208,
  "state": "HI"
},{
  "city": "HONOLULU",
  "zip": "96816",
  "loc": {
    "y": 21.288677,
    "x": 157.800626
  },
  "pop": 49208,
  "state": "HI"
},{
  "city": "HONOLULU",
  "zip": "96815",
  "loc": {
    "y": 21.281084,
    "x": 157.826616
  },
  "pop": 28650,
  "state": "HI"
},{
  "city": "STERLING",
  "zip": "83210",
  "loc": {
    "y": 42.976717,
    "x": 112.818124
  },
  "pop": 2653,
  "state": "ID"
},{
  "city": "MC CAMMON",
  "zip": "83250",
  "loc": {
    "y": 42.63362,
    "x": 112.175758
  },
  "pop": 2603,
  "state": "ID"
},{
  "city": "BUHL",
  "zip": "83316",
  "loc": {
    "y": 42.600763,
    "x": 114.782545
  },
  "pop": 8014,
  "state": "ID"
},{
  "city": "HEYBURN",
  "zip": "83336",
  "loc": {
    "y": 42.559922,
    "x": 113.770885
  },
  "pop": 4757,
  "state": "ID"
},{
  "city": "SUGAR VALLEY",
  "zip": "30746",
  "loc": {
    "y": 34.551929,
    "x": 85.026048
  },
  "pop": 1340,
  "state": "GA"
},{
  "city": "CHICKAMAUGA",
  "zip": "30707",
  "loc": {
    "y": 34.857963,
    "x": 85.322136
  },
  "pop": 13545,
  "state": "GA"
},{
  "city": "MITCHELL",
  "zip": "30820",
  "loc": {
    "y": 33.20515,
    "x": 82.681654
  },
  "pop": 708,
  "state": "GA"
},{
  "city": "STATHAM",
  "zip": "30666",
  "loc": {
    "y": 33.960233,
    "x": 83.5893
  },
  "pop": 3758,
  "state": "GA"
},{
  "city": "CULLODEN",
  "zip": "31016",
  "loc": {
    "y": 32.830078,
    "x": 84.045628
  },
  "pop": 2501,
  "state": "GA"
},{
  "city": "COHUTTA",
  "zip": "30710",
  "loc": {
    "y": 34.932635,
    "x": 84.945801
  },
  "pop": 5052,
  "state": "GA"
},{
  "city": "OGLETHORPE",
  "zip": "31068",
  "loc": {
    "y": 32.284186,
    "x": 84.082991
  },
  "pop": 2951,
  "state": "GA"
},{
  "city": "ROCK SPRING",
  "zip": "30739",
  "loc": {
    "y": 34.806534,
    "x": 85.241481
  },
  "pop": 4181,
  "state": "GA"
},{
  "city": "SHADY DALE",
  "zip": "31085",
  "loc": {
    "y": 33.401353,
    "x": 83.704031
  },
  "pop": 1606,
  "state": "GA"
},{
  "city": "WARRENTON",
  "zip": "30828",
  "loc": {
    "y": 33.40914,
    "x": 82.63568
  },
  "pop": 4091,
  "state": "GA"
},{
  "city": "WARNER ROBINS",
  "zip": "31093",
  "loc": {
    "y": 32.636839,
    "x": 83.639466
  },
  "pop": 27107,
  "state": "GA"
},{
  "city": "CHESTER",
  "zip": "31012",
  "loc": {
    "y": 32.398152,
    "x": 83.174029
  },
  "pop": 1517,
  "state": "GA"
},{
  "city": "DEEPSTEP",
  "zip": "31082",
  "loc": {
    "y": 32.986972,
    "x": 82.816934
  },
  "pop": 10459,
  "state": "GA"
},{
  "city": "CORDELE",
  "zip": "31015",
  "loc": {
    "y": 31.956625,
    "x": 83.783507
  },
  "pop": 18662,
  "state": "GA"
},{
  "city": "MACON",
  "zip": "31210",
  "loc": {
    "y": 32.892565,
    "x": 83.745537
  },
  "pop": 31255,
  "state": "GA"
},{
  "city": "CENTERVILLE",
  "zip": "31028",
  "loc": {
    "y": 32.634375,
    "x": 83.676773
  },
  "pop": 2764,
  "state": "GA"
},{
  "city": "M M",
  "zip": "31419",
  "loc": {
    "y": 31.985149,
    "x": 81.177387
  },
  "pop": 32901,
  "state": "GA"
},{
  "city": "MC INTYRE",
  "zip": "31054",
  "loc": {
    "y": 32.84679,
    "x": 83.203953
  },
  "pop": 3295,
  "state": "GA"
},{
  "city": "WHITE OAK",
  "zip": "31568",
  "loc": {
    "y": 31.034037,
    "x": 81.808237
  },
  "pop": 892,
  "state": "GA"
},{
  "city": "MUSELLA",
  "zip": "31066",
  "loc": {
    "y": 32.820228,
    "x": 84.045591
  },
  "pop": 121,
  "state": "GA"
},{
  "city": "SCREVEN",
  "zip": "31560",
  "loc": {
    "y": 31.516846,
    "x": 82.039742
  },
  "pop": 2325,
  "state": "GA"
},{
  "city": "VIENNA",
  "zip": "31092",
  "loc": {
    "y": 32.091291,
    "x": 83.792198
  },
  "pop": 4689,
  "state": "GA"
},{
  "city": "RAY CITY",
  "zip": "31645",
  "loc": {
    "y": 31.08247,
    "x": 83.214283
  },
  "pop": 1859,
  "state": "GA"
},{
  "city": "WRIGHTSVILLE",
  "zip": "31096",
  "loc": {
    "y": 32.721866,
    "x": 82.726206
  },
  "pop": 5755,
  "state": "GA"
},{
  "city": "CAMILLA",
  "zip": "31730",
  "loc": {
    "y": 31.219915,
    "x": 84.229683
  },
  "pop": 9207,
  "state": "GA"
},{
  "city": "MACON",
  "zip": "31211",
  "loc": {
    "y": 32.886905,
    "x": 83.602062
  },
  "pop": 16668,
  "state": "GA"
},{
  "city": "ANDERSONVILLE",
  "zip": "31711",
  "loc": {
    "y": 32.129907,
    "x": 84.10101
  },
  "pop": 984,
  "state": "GA"
},{
  "city": "HAZLEHURST",
  "zip": "31539",
  "loc": {
    "y": 31.860569,
    "x": 82.590947
  },
  "pop": 10577,
  "state": "GA"
},{
  "city": "OCHLOCKNEE",
  "zip": "31773",
  "loc": {
    "y": 30.959407,
    "x": 84.0326
  },
  "pop": 2665,
  "state": "GA"
},{
  "city": "WEST GREEN",
  "zip": "31567",
  "loc": {
    "y": 31.592271,
    "x": 82.756417
  },
  "pop": 1940,
  "state": "GA"
},{
  "city": "SALE CITY",
  "zip": "31784",
  "loc": {
    "y": 31.260004,
    "x": 84.042195
  },
  "pop": 1379,
  "state": "GA"
},{
  "city": "WAYNESVILLE",
  "zip": "31566",
  "loc": {
    "y": 31.244792,
    "x": 81.803928
  },
  "pop": 3248,
  "state": "GA"
},{
  "city": "OCILLA",
  "zip": "31774",
  "loc": {
    "y": 31.592944,
    "x": 83.256542
  },
  "pop": 5784,
  "state": "GA"
},{
  "city": "ADEL",
  "zip": "31620",
  "loc": {
    "y": 31.125143,
    "x": 83.421346
  },
  "pop": 9661,
  "state": "GA"
},{
  "city": "SMITHVILLE",
  "zip": "31787",
  "loc": {
    "y": 31.884692,
    "x": 84.227066
  },
  "pop": 1570,
  "state": "GA"
},{
  "city": "DU PONT",
  "zip": "31630",
  "loc": {
    "y": 30.999996,
    "x": 82.855518
  },
  "pop": 502,
  "state": "GA"
},{
  "city": "MANCHESTER",
  "zip": "31816",
  "loc": {
    "y": 32.8721,
    "x": 84.631166
  },
  "pop": 7721,
  "state": "GA"
},{
  "city": "FITZGERALD",
  "zip": "31750",
  "loc": {
    "y": 31.724769,
    "x": 83.249534
  },
  "pop": 16245,
  "state": "GA"
},{
  "city": "COLUMBUS",
  "zip": "31909",
  "loc": {
    "y": 32.536913,
    "x": 84.927404
  },
  "pop": 20880,
  "state": "GA"
},{
  "city": "MORGAN",
  "zip": "31766",
  "loc": {
    "y": 31.556557,
    "x": 84.617798
  },
  "pop": 883,
  "state": "GA"
},{
  "city": "HILO",
  "zip": "96720",
  "loc": {
    "y": 19.702522,
    "x": 155.093921
  },
  "pop": 40158,
  "state": "HI"
},{
  "city": "NEWTON",
  "zip": "31770",
  "loc": {
    "y": 31.313426,
    "x": 84.441107
  },
  "pop": 3615,
  "state": "GA"
},{
  "city": "KAMUELA",
  "zip": "96743",
  "loc": {
    "y": 20.008128,
    "x": 155.705189
  },
  "pop": 9140,
  "state": "HI"
},{
  "city": "SYCAMORE",
  "zip": "31790",
  "loc": {
    "y": 31.655329,
    "x": 83.606363
  },
  "pop": 2026,
  "state": "GA"
},{
  "city": "KUALAPUU",
  "zip": "96757",
  "loc": {
    "y": 21.160097,
    "x": 157.027669
  },
  "pop": 818,
  "state": "HI"
},{
  "city": "ABAC",
  "zip": "31794",
  "loc": {
    "y": 31.451722,
    "x": 83.498867
  },
  "pop": 27906,
  "state": "GA"
},{
  "city": "HONOLULU",
  "zip": "96819",
  "loc": {
    "y": 21.34877,
    "x": 157.875947
  },
  "pop": 50584,
  "state": "HI"
},{
  "city": "THOMASVILLE",
  "zip": "31792",
  "loc": {
    "y": 30.838543,
    "x": 83.969616
  },
  "pop": 28319,
  "state": "GA"
},{
  "city": "HONOLULU",
  "zip": "96818",
  "loc": {
    "y": 21.353173,
    "x": 157.926925
  },
  "pop": 62915,
  "state": "HI"
},{
  "city": "PARROTT",
  "zip": "31777",
  "loc": {
    "y": 31.872016,
    "x": 84.501152
  },
  "pop": 886,
  "state": "GA"
},{
  "city": "HONOLULU",
  "zip": "96825",
  "loc": {
    "y": 21.298684,
    "x": 157.698523
  },
  "pop": 27432,
  "state": "HI"
},{
  "city": "COLUMBUS",
  "zip": "31906",
  "loc": {
    "y": 32.463819,
    "x": 84.948422
  },
  "pop": 26061,
  "state": "GA"
},{
  "city": "PATTERSON",
  "zip": "83253",
  "loc": {
    "y": 44.701745,
    "x": 113.916039
  },
  "pop": 210,
  "state": "ID"
},{
  "city": "WAVERLY HALL",
  "zip": "31831",
  "loc": {
    "y": 32.679326,
    "x": 84.742463
  },
  "pop": 2323,
  "state": "GA"
},{
  "city": "PINGREE",
  "zip": "83262",
  "loc": {
    "y": 43.195618,
    "x": 112.449035
  },
  "pop": 7340,
  "state": "ID"
},{
  "city": "KAUNAKAKAI",
  "zip": "96748",
  "loc": {
    "y": 21.090504,
    "x": 156.969015
  },
  "pop": 4419,
  "state": "HI"
},{
  "city": "ROCKLAND",
  "zip": "83271",
  "loc": {
    "y": 42.555582,
    "x": 112.853982
  },
  "pop": 478,
  "state": "ID"
},{
  "city": "MAUNALOA",
  "zip": "96770",
  "loc": {
    "y": 21.142202,
    "x": 157.219277
  },
  "pop": 497,
  "state": "HI"
},{
  "city": "PAAUHAU",
  "zip": "96775",
  "loc": {
    "y": 20.027748,
    "x": 155.449088
  },
  "pop": 917,
  "state": "HI"
},{
  "city": "HONOLULU",
  "zip": "96814",
  "loc": {
    "y": 21.299846,
    "x": 157.843876
  },
  "pop": 14182,
  "state": "HI"
},{
  "city": "CHALLIS",
  "zip": "83226",
  "loc": {
    "y": 44.496912,
    "x": 114.19463
  },
  "pop": 2426,
  "state": "ID"
},{
  "city": "OBSIDIAN",
  "zip": "83340",
  "loc": {
    "y": 43.675459,
    "x": 114.373664
  },
  "pop": 5823,
  "state": "ID"
},{
  "city": "FORT OGLETHORPE",
  "zip": "30742",
  "loc": {
    "y": 34.964082,
    "x": 85.242812
  },
  "pop": 14807,
  "state": "GA"
},{
  "city": "TUNNEL HILL",
  "zip": "30755",
  "loc": {
    "y": 34.854129,
    "x": 85.046815
  },
  "pop": 6947,
  "state": "GA"
},{
  "city": "BLYTHE",
  "zip": "30805",
  "loc": {
    "y": 33.294088,
    "x": 82.203044
  },
  "pop": 297,
  "state": "GA"
},{
  "city": "AUGUSTA",
  "zip": "30901",
  "loc": {
    "y": 33.460084,
    "x": 81.972959
  },
  "pop": 24496,
  "state": "GA"
},{
  "city": "MILAN",
  "zip": "31060",
  "loc": {
    "y": 31.961797,
    "x": 83.058845
  },
  "pop": 1627,
  "state": "GA"
},{
  "city": "PITTS",
  "zip": "31072",
  "loc": {
    "y": 31.942533,
    "x": 83.55788
  },
  "pop": 1278,
  "state": "GA"
},{
  "city": "YATESVILLE",
  "zip": "31097",
  "loc": {
    "y": 32.915592,
    "x": 84.159253
  },
  "pop": 1188,
  "state": "GA"
},{
  "city": "SAPELO ISLAND",
  "zip": "31327",
  "loc": {
    "y": 31.421948,
    "x": 81.267933
  },
  "pop": 120,
  "state": "GA"
},{
  "city": "LAKELAND",
  "zip": "31635",
  "loc": {
    "y": 31.038107,
    "x": 83.088859
  },
  "pop": 4289,
  "state": "GA"
},{
  "city": "WILLACOOCHEE",
  "zip": "31650",
  "loc": {
    "y": 31.345481,
    "x": 83.044931
  },
  "pop": 1704,
  "state": "GA"
},{
  "city": "STOCKTON",
  "zip": "31649",
  "loc": {
    "y": 31.022865,
    "x": 83.013944
  },
  "pop": 1242,
  "state": "GA"
},{
  "city": "BRINSON",
  "zip": "31725",
  "loc": {
    "y": 30.960957,
    "x": 84.667112
  },
  "pop": 2877,
  "state": "GA"
},{
  "city": "OMAHA",
  "zip": "31821",
  "loc": {
    "y": 32.165234,
    "x": 84.900792
  },
  "pop": 884,
  "state": "GA"
},{
  "city": "PINE MOUNTAIN VA",
  "zip": "31823",
  "loc": {
    "y": 32.791849,
    "x": 84.823874
  },
  "pop": 887,
  "state": "GA"
},{
  "city": "RICHLAND",
  "zip": "31825",
  "loc": {
    "y": 32.084578,
    "x": 84.666724
  },
  "pop": 2626,
  "state": "GA"
},{
  "city": "TALBOTTON",
  "zip": "31827",
  "loc": {
    "y": 32.679702,
    "x": 84.546206
  },
  "pop": 2324,
  "state": "GA"
},{
  "city": "WARM SPRINGS",
  "zip": "31830",
  "loc": {
    "y": 32.895558,
    "x": 84.821728
  },
  "pop": 819,
  "state": "GA"
},{
  "city": "COLUMBUS",
  "zip": "31907",
  "loc": {
    "y": 32.477909,
    "x": 84.89799
  },
  "pop": 54915,
  "state": "GA"
},{
  "city": "ELEELE",
  "zip": "96705",
  "loc": {
    "y": 21.923017,
    "x": 159.538115
  },
  "pop": 6466,
  "state": "HI"
},{
  "city": "HAUULA",
  "zip": "96717",
  "loc": {
    "y": 21.61395,
    "x": 157.915704
  },
  "pop": 3477,
  "state": "HI"
},{
  "city": "HALEIWA",
  "zip": "96712",
  "loc": {
    "y": 21.631151,
    "x": 158.069315
  },
  "pop": 7870,
  "state": "HI"
},{
  "city": "HONAUNAU",
  "zip": "96726",
  "loc": {
    "y": 19.44845,
    "x": 155.893356
  },
  "pop": 1583,
  "state": "HI"
},{
  "city": "HONOLULU",
  "zip": "96821",
  "loc": {
    "y": 21.292811,
    "x": 157.755242
  },
  "pop": 18366,
  "state": "HI"
},{
  "city": "BLACKFOOT",
  "zip": "83221",
  "loc": {
    "y": 43.194327,
    "x": 112.361545
  },
  "pop": 18202,
  "state": "ID"
},{
  "city": "CONDA",
  "zip": "83230",
  "loc": {
    "y": 42.717126,
    "x": 111.54023
  },
  "pop": 21,
  "state": "ID"
},{
  "city": "DAYTON",
  "zip": "83232",
  "loc": {
    "y": 42.11836,
    "x": 111.985836
  },
  "pop": 659,
  "state": "ID"
},{
  "city": "GRACE",
  "zip": "83241",
  "loc": {
    "y": 42.549978,
    "x": 111.739981
  },
  "pop": 2050,
  "state": "ID"
},{
  "city": "LAVA HOT SPRINGS",
  "zip": "83246",
  "loc": {
    "y": 42.618474,
    "x": 112.017644
  },
  "pop": 512,
  "state": "ID"
},{
  "city": "MOORE",
  "zip": "83255",
  "loc": {
    "y": 43.782094,
    "x": 113.260349
  },
  "pop": 1083,
  "state": "ID"
},{
  "city": "SHELLEY",
  "zip": "83274",
  "loc": {
    "y": 43.376901,
    "x": 112.107549
  },
  "pop": 6164,
  "state": "ID"
},{
  "city": "BURLEY",
  "zip": "83318",
  "loc": {
    "y": 42.524442,
    "x": 113.793081
  },
  "pop": 12406,
  "state": "ID"
},{
  "city": "JEROME",
  "zip": "83338",
  "loc": {
    "y": 42.71784,
    "x": 114.501244
  },
  "pop": 12671,
  "state": "ID"
},{
  "city": "LOOKOUT MOUNTAIN",
  "zip": "30750",
  "loc": {
    "y": 34.933512,
    "x": 85.379384
  },
  "pop": 2818,
  "state": "GA"
},{
  "city": "PHILOMATH",
  "zip": "30660",
  "loc": {
    "y": 33.783593,
    "x": 82.909975
  },
  "pop": 1137,
  "state": "GA"
},{
  "city": "GREENSBORO",
  "zip": "30642",
  "loc": {
    "y": 33.563682,
    "x": 83.170192
  },
  "pop": 6206,
  "state": "GA"
},{
  "city": "TRENTON",
  "zip": "30752",
  "loc": {
    "y": 34.901681,
    "x": 85.517118
  },
  "pop": 7930,
  "state": "GA"
},{
  "city": "AVERA",
  "zip": "30803",
  "loc": {
    "y": 33.140997,
    "x": 82.514965
  },
  "pop": 836,
  "state": "GA"
},{
  "city": "WRENS",
  "zip": "30833",
  "loc": {
    "y": 33.210397,
    "x": 82.380962
  },
  "pop": 4782,
  "state": "GA"
},{
  "city": "DANVILLE",
  "zip": "31017",
  "loc": {
    "y": 32.593017,
    "x": 83.303298
  },
  "pop": 2221,
  "state": "GA"
},{
  "city": "MILLEDGEVILLE",
  "zip": "31061",
  "loc": {
    "y": 33.079958,
    "x": 83.237943
  },
  "pop": 39173,
  "state": "GA"
},{
  "city": "PERRY",
  "zip": "31069",
  "loc": {
    "y": 32.46051,
    "x": 83.728258
  },
  "pop": 13945,
  "state": "GA"
},{
  "city": "WILSON AIRPORT",
  "zip": "31206",
  "loc": {
    "y": 32.780758,
    "x": 83.682303
  },
  "pop": 42528,
  "state": "GA"
},{
  "city": "BLACKSHEAR",
  "zip": "31516",
  "loc": {
    "y": 31.293063,
    "x": 82.261708
  },
  "pop": 9612,
  "state": "GA"
},{
  "city": "GLYNCO",
  "zip": "31520",
  "loc": {
    "y": 31.169652,
    "x": 81.493045
  },
  "pop": 21343,
  "state": "GA"
},{
  "city": "JESUP",
  "zip": "31545",
  "loc": {
    "y": 31.604326,
    "x": 81.88706
  },
  "pop": 17180,
  "state": "GA"
},{
  "city": "HAHIRA",
  "zip": "31632",
  "loc": {
    "y": 30.941593,
    "x": 83.357366
  },
  "pop": 6921,
  "state": "GA"
},{
  "city": "MARINE CORPS LOG",
  "zip": "31704",
  "loc": {
    "y": 31.550099,
    "x": 84.050812
  },
  "pop": 1306,
  "state": "GA"
},{
  "city": "BLAKELY",
  "zip": "31723",
  "loc": {
    "y": 31.371854,
    "x": 84.935285
  },
  "pop": 8405,
  "state": "GA"
},{
  "city": "BACONTON",
  "zip": "31716",
  "loc": {
    "y": 31.387804,
    "x": 84.11345
  },
  "pop": 2566,
  "state": "GA"
},{
  "city": "DAMASCUS",
  "zip": "31741",
  "loc": {
    "y": 31.341528,
    "x": 84.720047
  },
  "pop": 1534,
  "state": "GA"
},{
  "city": "ENIGMA",
  "zip": "31749",
  "loc": {
    "y": 31.373599,
    "x": 83.355157
  },
  "pop": 2223,
  "state": "GA"
},{
  "city": "JUNIPER",
  "zip": "31801",
  "loc": {
    "y": 32.565562,
    "x": 84.612951
  },
  "pop": 1407,
  "state": "GA"
},{
  "city": "TAZEWELL",
  "zip": "31803",
  "loc": {
    "y": 32.354198,
    "x": 84.527347
  },
  "pop": 5590,
  "state": "GA"
},{
  "city": "LUMPKIN",
  "zip": "31815",
  "loc": {
    "y": 32.043465,
    "x": 84.802227
  },
  "pop": 2144,
  "state": "GA"
},{
  "city": "COLUMBUS",
  "zip": "31901",
  "loc": {
    "y": 32.473035,
    "x": 84.979456
  },
  "pop": 9694,
  "state": "GA"
},{
  "city": "HAIKU",
  "zip": "96708",
  "loc": {
    "y": 20.907097,
    "x": 156.299983
  },
  "pop": 5695,
  "state": "HI"
},{
  "city": "HOOLEHUA",
  "zip": "96729",
  "loc": {
    "y": 21.173025,
    "x": 157.079138
  },
  "pop": 853,
  "state": "HI"
},{
  "city": "KAUMAKANI",
  "zip": "96747",
  "loc": {
    "y": 21.921329,
    "x": 159.62413
  },
  "pop": 819,
  "state": "HI"
},{
  "city": "TWIN FALLS",
  "zip": "83301",
  "loc": {
    "y": 42.556495,
    "x": 114.469265
  },
  "pop": 34539,
  "state": "ID"
},{
  "city": "HANSEN",
  "zip": "83334",
  "loc": {
    "y": 42.524895,
    "x": 114.299364
  },
  "pop": 1525,
  "state": "ID"
},{
  "city": "STEPHENS",
  "zip": "30667",
  "loc": {
    "y": 33.771471,
    "x": 83.115902
  },
  "pop": 1069,
  "state": "GA"
},{
  "city": "CALHOUN",
  "zip": "30701",
  "loc": {
    "y": 34.496456,
    "x": 84.934545
  },
  "pop": 22017,
  "state": "GA"
},{
  "city": "APPLING",
  "zip": "30802",
  "loc": {
    "y": 33.627088,
    "x": 82.285631
  },
  "pop": 2255,
  "state": "GA"
},{
  "city": "GIBSON",
  "zip": "30810",
  "loc": {
    "y": 33.247097,
    "x": 82.576591
  },
  "pop": 1649,
  "state": "GA"
},{
  "city": "LINCOLNTON",
  "zip": "30817",
  "loc": {
    "y": 33.777335,
    "x": 82.443481
  },
  "pop": 7028,
  "state": "GA"
},{
  "city": "THOMSON",
  "zip": "30824",
  "loc": {
    "y": 33.477363,
    "x": 82.494204
  },
  "pop": 15487,
  "state": "GA"
},{
  "city": "HADDOCK",
  "zip": "31033",
  "loc": {
    "y": 33.051888,
    "x": 83.431219
  },
  "pop": 1193,
  "state": "GA"
},{
  "city": "MARSHALLVILLE",
  "zip": "31057",
  "loc": {
    "y": 32.452003,
    "x": 83.943478
  },
  "pop": 2008,
  "state": "GA"
},{
  "city": "TOOMSBORO",
  "zip": "31090",
  "loc": {
    "y": 32.821895,
    "x": 83.084427
  },
  "pop": 1129,
  "state": "GA"
},{
  "city": "GUYTON",
  "zip": "31312",
  "loc": {
    "y": 32.31399,
    "x": 81.389593
  },
  "pop": 4025,
  "state": "GA"
},{
  "city": "SAVANNAH",
  "zip": "31405",
  "loc": {
    "y": 32.039119,
    "x": 81.124192
  },
  "pop": 28739,
  "state": "GA"
},{
  "city": "AMBROSE",
  "zip": "31512",
  "loc": {
    "y": 31.536712,
    "x": 82.997637
  },
  "pop": 2853,
  "state": "GA"
},{
  "city": "ALAPAHA",
  "zip": "31622",
  "loc": {
    "y": 31.394027,
    "x": 83.21321
  },
  "pop": 1675,
  "state": "GA"
},{
  "city": "DIXIE",
  "zip": "31629",
  "loc": {
    "y": 30.772213,
    "x": 83.67918
  },
  "pop": 1462,
  "state": "GA"
},{
  "city": "SAINT GEORGE",
  "zip": "31646",
  "loc": {
    "y": 30.559161,
    "x": 82.083367
  },
  "pop": 2010,
  "state": "GA"
},{
  "city": "SPARKS",
  "zip": "31647",
  "loc": {
    "y": 31.178984,
    "x": 83.447586
  },
  "pop": 1772,
  "state": "GA"
},{
  "city": "ASHBURN",
  "zip": "31714",
  "loc": {
    "y": 31.705877,
    "x": 83.660775
  },
  "pop": 6047,
  "state": "GA"
},{
  "city": "CALVARY",
  "zip": "31729",
  "loc": {
    "y": 30.747036,
    "x": 84.32267
  },
  "pop": 1442,
  "state": "GA"
},{
  "city": "CUTHBERT",
  "zip": "31740",
  "loc": {
    "y": 31.769073,
    "x": 84.788874
  },
  "pop": 5708,
  "state": "GA"
},{
  "city": "MOULTRIE",
  "zip": "31768",
  "loc": {
    "y": 31.179244,
    "x": 83.764089
  },
  "pop": 34351,
  "state": "GA"
},{
  "city": "POULAN",
  "zip": "31781",
  "loc": {
    "y": 31.467206,
    "x": 83.761554
  },
  "pop": 3119,
  "state": "GA"
},{
  "city": "CATAULA",
  "zip": "31804",
  "loc": {
    "y": 32.624246,
    "x": 84.920691
  },
  "pop": 1108,
  "state": "GA"
},{
  "city": "CUSSETA",
  "zip": "31805",
  "loc": {
    "y": 32.299026,
    "x": 84.764537
  },
  "pop": 2290,
  "state": "GA"
},{
  "city": "ELLAVILLE",
  "zip": "31806",
  "loc": {
    "y": 32.23901,
    "x": 84.303868
  },
  "pop": 3599,
  "state": "GA"
},{
  "city": "REBECCA",
  "zip": "31783",
  "loc": {
    "y": 31.797921,
    "x": 83.523478
  },
  "pop": 630,
  "state": "GA"
},{
  "city": "OMEGA",
  "zip": "31775",
  "loc": {
    "y": 31.360432,
    "x": 83.593936
  },
  "pop": 2154,
  "state": "GA"
},{
  "city": "KAPAAU",
  "zip": "96755",
  "loc": {
    "y": 20.218323,
    "x": 155.798981
  },
  "pop": 2550,
  "state": "HI"
},{
  "city": "NINOLE",
  "zip": "96773",
  "loc": {
    "y": 19.904436,
    "x": 155.159923
  },
  "pop": 0,
  "state": "HI"
},{
  "city": "AMERICAN FALLS",
  "zip": "83211",
  "loc": {
    "y": 42.789876,
    "x": 112.870714
  },
  "pop": 5867,
  "state": "ID"
},{
  "city": "FRANKLIN",
  "zip": "83237",
  "loc": {
    "y": 42.030389,
    "x": 111.822862
  },
  "pop": 1699,
  "state": "ID"
},{
  "city": "STANLEY",
  "zip": "83278",
  "loc": {
    "y": 44.22908,
    "x": 114.725414
  },
  "pop": 444,
  "state": "ID"
},{
  "city": "RUTLEDGE",
  "zip": "30663",
  "loc": {
    "y": 33.616316,
    "x": 83.602302
  },
  "pop": 2161,
  "state": "GA"
},{
  "city": "FLINTSTONE",
  "zip": "30725",
  "loc": {
    "y": 34.925162,
    "x": 85.352443
  },
  "pop": 2775,
  "state": "GA"
},{
  "city": "LA FAYETTE",
  "zip": "30728",
  "loc": {
    "y": 34.692008,
    "x": 85.260212
  },
  "pop": 16287,
  "state": "GA"
},{
  "city": "RISING FAWN",
  "zip": "30738",
  "loc": {
    "y": 34.853491,
    "x": 85.471078
  },
  "pop": 4036,
  "state": "GA"
},{
  "city": "ROCKY FACE",
  "zip": "30740",
  "loc": {
    "y": 34.774456,
    "x": 85.056143
  },
  "pop": 6029,
  "state": "GA"
},{
  "city": "BUTLER",
  "zip": "31006",
  "loc": {
    "y": 32.572597,
    "x": 84.234308
  },
  "pop": 4731,
  "state": "GA"
},{
  "city": "POWERSVILLE",
  "zip": "31008",
  "loc": {
    "y": 32.647384,
    "x": 83.762244
  },
  "pop": 8205,
  "state": "GA"
},{
  "city": "GRAY",
  "zip": "31032",
  "loc": {
    "y": 33.017177,
    "x": 83.539951
  },
  "pop": 8781,
  "state": "GA"
},{
  "city": "KITE",
  "zip": "31049",
  "loc": {
    "y": 32.707833,
    "x": 82.527361
  },
  "pop": 1196,
  "state": "GA"
},{
  "city": "TENNILLE",
  "zip": "31089",
  "loc": {
    "y": 32.9063,
    "x": 82.840024
  },
  "pop": 3696,
  "state": "GA"
},{
  "city": "POOLER",
  "zip": "31322",
  "loc": {
    "y": 32.114931,
    "x": 81.251958
  },
  "pop": 4036,
  "state": "GA"
},{
  "city": "RINCON",
  "zip": "31326",
  "loc": {
    "y": 32.235632,
    "x": 81.287777
  },
  "pop": 14502,
  "state": "GA"
},{
  "city": "MORVEN",
  "zip": "31638",
  "loc": {
    "y": 30.893733,
    "x": 83.449796
  },
  "pop": 3416,
  "state": "GA"
},{
  "city": "STATENVILLE",
  "zip": "31648",
  "loc": {
    "y": 30.725503,
    "x": 82.979863
  },
  "pop": 1269,
  "state": "GA"
},{
  "city": "EDISON",
  "zip": "31746",
  "loc": {
    "y": 31.564979,
    "x": 84.745626
  },
  "pop": 1711,
  "state": "GA"
},{
  "city": "FORT GAINES",
  "zip": "31751",
  "loc": {
    "y": 31.646353,
    "x": 85.039375
  },
  "pop": 2565,
  "state": "GA"
},{
  "city": "IRWINVILLE",
  "zip": "31760",
  "loc": {
    "y": 31.654238,
    "x": 83.401708
  },
  "pop": 1887,
  "state": "GA"
},{
  "city": "JAKIN",
  "zip": "31761",
  "loc": {
    "y": 31.175064,
    "x": 84.994845
  },
  "pop": 1918,
  "state": "GA"
},{
  "city": "LEARY",
  "zip": "31762",
  "loc": {
    "y": 31.505924,
    "x": 84.509486
  },
  "pop": 1017,
  "state": "GA"
},{
  "city": "PRINCEVILLE",
  "zip": "96722",
  "loc": {
    "y": 22.215948,
    "x": 159.462587
  },
  "pop": 4631,
  "state": "HI"
},{
  "city": "HONOMU",
  "zip": "96728",
  "loc": {
    "y": 19.872767,
    "x": 155.11766
  },
  "pop": 548,
  "state": "HI"
},{
  "city": "WAIMEA",
  "zip": "96796",
  "loc": {
    "y": 21.968487,
    "x": 159.669429
  },
  "pop": 1960,
  "state": "HI"
},{
  "city": "HONOLULU",
  "zip": "96813",
  "loc": {
    "y": 21.317905,
    "x": 157.852072
  },
  "pop": 23082,
  "state": "HI"
},{
  "city": "DARLINGTON",
  "zip": "83231",
  "loc": {
    "y": 43.7715,
    "x": 113.380284
  },
  "pop": 12,
  "state": "ID"
},{
  "city": "WESTON",
  "zip": "83286",
  "loc": {
    "y": 42.044621,
    "x": 111.97154
  },
  "pop": 727,
  "state": "ID"
},{
  "city": "FISH HAVEN",
  "zip": "83287",
  "loc": {
    "y": 42.045926,
    "x": 111.463323
  },
  "pop": 65,
  "state": "ID"
},{
  "city": "FAIRFIELD",
  "zip": "83327",
  "loc": {
    "y": 43.367504,
    "x": 114.790845
  },
  "pop": 668,
  "state": "ID"
},{
  "city": "HAGERMAN",
  "zip": "83332",
  "loc": {
    "y": 42.814205,
    "x": 114.88697
  },
  "pop": 1613,
  "state": "ID"
},{
  "city": "WATKINSVILLE",
  "zip": "30677",
  "loc": {
    "y": 33.854247,
    "x": 83.408043
  },
  "pop": 7723,
  "state": "GA"
},{
  "city": "LEXINGTON",
  "zip": "30648",
  "loc": {
    "y": 33.879913,
    "x": 83.085809
  },
  "pop": 1712,
  "state": "GA"
},{
  "city": "MONROE",
  "zip": "30655",
  "loc": {
    "y": 33.808141,
    "x": 83.707221
  },
  "pop": 18405,
  "state": "GA"
},{
  "city": "DALTON",
  "zip": "30720",
  "loc": {
    "y": 34.76352,
    "x": 84.987477
  },
  "pop": 20680,
  "state": "GA"
},{
  "city": "ROSSVILLE",
  "zip": "30741",
  "loc": {
    "y": 34.953481,
    "x": 85.296785
  },
  "pop": 18436,
  "state": "GA"
},{
  "city": "DEARING",
  "zip": "30808",
  "loc": {
    "y": 33.40702,
    "x": 82.395512
  },
  "pop": 4632,
  "state": "GA"
},{
  "city": "HARLEM",
  "zip": "30814",
  "loc": {
    "y": 33.417007,
    "x": 82.309659
  },
  "pop": 4318,
  "state": "GA"
},{
  "city": "EAST DUBLIN",
  "zip": "31021",
  "loc": {
    "y": 32.547794,
    "x": 82.90368
  },
  "pop": 32030,
  "state": "GA"
},{
  "city": "RHINE",
  "zip": "31077",
  "loc": {
    "y": 32.011303,
    "x": 83.19831
  },
  "pop": 1449,
  "state": "GA"
},{
  "city": "ROCHELLE",
  "zip": "31079",
  "loc": {
    "y": 31.949119,
    "x": 83.444978
  },
  "pop": 2585,
  "state": "GA"
},{
  "city": "CLYO",
  "zip": "31303",
  "loc": {
    "y": 32.512646,
    "x": 81.30857
  },
  "pop": 400,
  "state": "GA"
},{
  "city": "DARIEN",
  "zip": "31305",
  "loc": {
    "y": 31.382574,
    "x": 81.431175
  },
  "pop": 3067,
  "state": "GA"
},{
  "city": "BROXTON",
  "zip": "31519",
  "loc": {
    "y": 31.648426,
    "x": 82.904954
  },
  "pop": 2915,
  "state": "GA"
},{
  "city": "SAINT SIMONS ISL",
  "zip": "31522",
  "loc": {
    "y": 31.16916,
    "x": 81.382421
  },
  "pop": 12924,
  "state": "GA"
},{
  "city": "BRIDGEBORO",
  "zip": "31705",
  "loc": {
    "y": 31.550851,
    "x": 84.090089
  },
  "pop": 35997,
  "state": "GA"
},{
  "city": "COOLIDGE",
  "zip": "31738",
  "loc": {
    "y": 30.985908,
    "x": 83.875245
  },
  "pop": 1970,
  "state": "GA"
},{
  "city": "DE SOTO",
  "zip": "31743",
  "loc": {
    "y": 31.950186,
    "x": 84.027101
  },
  "pop": 112,
  "state": "GA"
},{
  "city": "HARTSFIELD",
  "zip": "31756",
  "loc": {
    "y": 31.217316,
    "x": 83.970364
  },
  "pop": 285,
  "state": "GA"
},{
  "city": "MEIGS",
  "zip": "31765",
  "loc": {
    "y": 31.062536,
    "x": 84.082375
  },
  "pop": 1705,
  "state": "GA"
},{
  "city": "FORTSON",
  "zip": "31808",
  "loc": {
    "y": 32.628841,
    "x": 85.001654
  },
  "pop": 1780,
  "state": "GA"
},{
  "city": "WOODLAND",
  "zip": "31836",
  "loc": {
    "y": 32.806066,
    "x": 84.595187
  },
  "pop": 2377,
  "state": "GA"
},{
  "city": "CAPTAIN COOK",
  "zip": "96704",
  "loc": {
    "y": 19.438604,
    "x": 155.887463
  },
  "pop": 5338,
  "state": "HI"
},{
  "city": "EWA BEACH",
  "zip": "96706",
  "loc": {
    "y": 21.327418,
    "x": 158.010307
  },
  "pop": 26089,
  "state": "HI"
},{
  "city": "KAPOLEI",
  "zip": "96707",
  "loc": {
    "y": 21.345284,
    "x": 158.087007
  },
  "pop": 15891,
  "state": "HI"
},{
  "city": "HANA",
  "zip": "96713",
  "loc": {
    "y": 20.761635,
    "x": 156.039659
  },
  "pop": 1895,
  "state": "HI"
},{
  "city": "KAILUA KONA",
  "zip": "96740",
  "loc": {
    "y": 19.653053,
    "x": 155.979809
  },
  "pop": 19616,
  "state": "HI"
},{
  "city": "NAALEHU",
  "zip": "96772",
  "loc": {
    "y": 19.066844,
    "x": 155.657474
  },
  "pop": 2729,
  "state": "HI"
},{
  "city": "PAHOA",
  "zip": "96778",
  "loc": {
    "y": 19.508901,
    "x": 154.923135
  },
  "pop": 6702,
  "state": "HI"
},{
  "city": "ARBON",
  "zip": "83212",
  "loc": {
    "y": 42.502634,
    "x": 112.558481
  },
  "pop": 121,
  "state": "ID"
},{
  "city": "CLAYTON",
  "zip": "83227",
  "loc": {
    "y": 44.273289,
    "x": 114.410189
  },
  "pop": 41,
  "state": "ID"
},{
  "city": "OVID",
  "zip": "83260",
  "loc": {
    "y": 42.311423,
    "x": 111.451109
  },
  "pop": 290,
  "state": "ID"
},{
  "city": "PARIS",
  "zip": "83261",
  "loc": {
    "y": 42.207065,
    "x": 111.402938
  },
  "pop": 852,
  "state": "ID"
},{
  "city": "STONE",
  "zip": "83280",
  "loc": {
    "y": 42.038983,
    "x": 112.711473
  },
  "pop": 169,
  "state": "ID"
},{
  "city": "CAREY",
  "zip": "83320",
  "loc": {
    "y": 43.274443,
    "x": 113.892567
  },
  "pop": 820,
  "state": "ID"
},{
  "city": "GOODING",
  "zip": "83330",
  "loc": {
    "y": 42.937345,
    "x": 114.711966
  },
  "pop": 4846,
  "state": "ID"
},{
  "city": "EDEN",
  "zip": "83325",
  "loc": {
    "y": 42.580374,
    "x": 114.162762
  },
  "pop": 1762,
  "state": "ID"
},{
  "city": "HULL",
  "zip": "30646",
  "loc": {
    "y": 34.04781,
    "x": 83.311029
  },
  "pop": 5142,
  "state": "GA"
},{
  "city": "DANBURG",
  "zip": "30668",
  "loc": {
    "y": 33.883294,
    "x": 82.695558
  },
  "pop": 2293,
  "state": "GA"
},{
  "city": "WHITE PLAINS",
  "zip": "30678",
  "loc": {
    "y": 33.484338,
    "x": 83.090845
  },
  "pop": 1596,
  "state": "GA"
},{
  "city": "CRANDALL",
  "zip": "30711",
  "loc": {
    "y": 34.941225,
    "x": 84.764533
  },
  "pop": 2901,
  "state": "GA"
},{
  "city": "NORWOOD",
  "zip": "30821",
  "loc": {
    "y": 33.478921,
    "x": 82.735575
  },
  "pop": 882,
  "state": "GA"
},{
  "city": "WAYNESBORO",
  "zip": "30830",
  "loc": {
    "y": 33.101254,
    "x": 81.990797
  },
  "pop": 12213,
  "state": "GA"
},{
  "city": "BONAIRE",
  "zip": "31005",
  "loc": {
    "y": 32.546037,
    "x": 83.604736
  },
  "pop": 5095,
  "state": "GA"
},{
  "city": "FOREST HILLS",
  "zip": "30909",
  "loc": {
    "y": 33.480932,
    "x": 82.060439
  },
  "pop": 32202,
  "state": "GA"
},{
  "city": "CHAUNCEY",
  "zip": "31011",
  "loc": {
    "y": 32.083532,
    "x": 83.050804
  },
  "pop": 1954,
  "state": "GA"
},{
  "city": "IDEAL",
  "zip": "31041",
  "loc": {
    "y": 32.393022,
    "x": 84.148149
  },
  "pop": 1924,
  "state": "GA"
},{
  "city": "JEFFERSONVILLE",
  "zip": "31044",
  "loc": {
    "y": 32.741096,
    "x": 83.385896
  },
  "pop": 3953,
  "state": "GA"
},{
  "city": "MONTICELLO",
  "zip": "31064",
  "loc": {
    "y": 33.311797,
    "x": 83.714049
  },
  "pop": 5328,
  "state": "GA"
},{
  "city": "RENTZ",
  "zip": "31075",
  "loc": {
    "y": 32.363834,
    "x": 82.913987
  },
  "pop": 3037,
  "state": "GA"
},{
  "city": "FLEMING",
  "zip": "31309",
  "loc": {
    "y": 31.864477,
    "x": 81.423165
  },
  "pop": 548,
  "state": "GA"
},{
  "city": "MIDWAY",
  "zip": "31320",
  "loc": {
    "y": 31.801803,
    "x": 81.390897
  },
  "pop": 4486,
  "state": "GA"
},{
  "city": "SAVANNAH",
  "zip": "31409",
  "loc": {
    "y": 32.002104,
    "x": 81.158371
  },
  "pop": 3509,
  "state": "GA"
},{
  "city": "JEKYLL ISLAND",
  "zip": "31527",
  "loc": {
    "y": 31.074049,
    "x": 81.41281
  },
  "pop": 1150,
  "state": "GA"
},{
  "city": "SURRENCY",
  "zip": "31563",
  "loc": {
    "y": 31.648931,
    "x": 82.198218
  },
  "pop": 1643,
  "state": "GA"
},{
  "city": "PEARSON",
  "zip": "31642",
  "loc": {
    "y": 31.310583,
    "x": 82.859096
  },
  "pop": 3590,
  "state": "GA"
},{
  "city": "BLUFFTON",
  "zip": "31724",
  "loc": {
    "y": 31.556189,
    "x": 84.877175
  },
  "pop": 799,
  "state": "GA"
},{
  "city": "COLEMAN",
  "zip": "31736",
  "loc": {
    "y": 31.656831,
    "x": 84.874471
  },
  "pop": 359,
  "state": "GA"
},{
  "city": "NORMAN PARK",
  "zip": "31771",
  "loc": {
    "y": 31.069128,
    "x": 83.94044
  },
  "pop": 301,
  "state": "GA"
},{
  "city": "PINE MOUNTAIN",
  "zip": "31822",
  "loc": {
    "y": 32.873488,
    "x": 84.895953
  },
  "pop": 3548,
  "state": "GA"
},{
  "city": "PRESTON",
  "zip": "31824",
  "loc": {
    "y": 32.074031,
    "x": 84.548918
  },
  "pop": 1690,
  "state": "GA"
},{
  "city": "LAIE",
  "zip": "96762",
  "loc": {
    "y": 21.659513,
    "x": 157.939377
  },
  "pop": 8481,
  "state": "HI"
},{
  "city": "PAAUILO",
  "zip": "96776",
  "loc": {
    "y": 20.027119,
    "x": 155.369728
  },
  "pop": 947,
  "state": "HI"
},{
  "city": "KULA",
  "zip": "96790",
  "loc": {
    "y": 20.753353,
    "x": 156.326026
  },
  "pop": 5697,
  "state": "HI"
},{
  "city": "WAIMANALO",
  "zip": "96795",
  "loc": {
    "y": 21.341786,
    "x": 157.713094
  },
  "pop": 9055,
  "state": "HI"
},{
  "city": "BERN",
  "zip": "83220",
  "loc": {
    "y": 42.319144,
    "x": 111.392595
  },
  "pop": 261,
  "state": "ID"
},{
  "city": "MALAD CITY",
  "zip": "83252",
  "loc": {
    "y": 42.180783,
    "x": 112.262045
  },
  "pop": 3110,
  "state": "ID"
},{
  "city": "BLISS",
  "zip": "83314",
  "loc": {
    "y": 42.944859,
    "x": 114.910387
  },
  "pop": 845,
  "state": "ID"
},{
  "city": "RINGGOLD",
  "zip": "30736",
  "loc": {
    "y": 34.92052,
    "x": 85.154908
  },
  "pop": 25360,
  "state": "GA"
},{
  "city": "PLAINVILLE",
  "zip": "30733",
  "loc": {
    "y": 34.41447,
    "x": 85.031204
  },
  "pop": 1589,
  "state": "GA"
},{
  "city": "FORT GORDON",
  "zip": "30905",
  "loc": {
    "y": 33.419032,
    "x": 82.139179
  },
  "pop": 9260,
  "state": "GA"
},{
  "city": "BYROMVILLE",
  "zip": "31007",
  "loc": {
    "y": 32.185192,
    "x": 83.899128
  },
  "pop": 1672,
  "state": "GA"
},{
  "city": "DEXTER",
  "zip": "31019",
  "loc": {
    "y": 32.435639,
    "x": 83.052771
  },
  "pop": 1705,
  "state": "GA"
},{
  "city": "JEWELL",
  "zip": "31045",
  "loc": {
    "y": 33.328754,
    "x": 82.732803
  },
  "pop": 1105,
  "state": "GA"
},{
  "city": "MAUK",
  "zip": "31058",
  "loc": {
    "y": 32.509016,
    "x": 84.399906
  },
  "pop": 319,
  "state": "GA"
},{
  "city": "RUPERT",
  "zip": "31081",
  "loc": {
    "y": 32.432524,
    "x": 84.273753
  },
  "pop": 208,
  "state": "GA"
},{
  "city": "BLOOMINGDALE",
  "zip": "31302",
  "loc": {
    "y": 32.117654,
    "x": 81.308465
  },
  "pop": 3297,
  "state": "GA"
},{
  "city": "STILLWELL",
  "zip": "31329",
  "loc": {
    "y": 32.4121,
    "x": 81.326435
  },
  "pop": 6761,
  "state": "GA"
},{
  "city": "DENTON",
  "zip": "31532",
  "loc": {
    "y": 31.745842,
    "x": 82.720146
  },
  "pop": 1457,
  "state": "GA"
},{
  "city": "MANOR",
  "zip": "31550",
  "loc": {
    "y": 31.108829,
    "x": 82.574173
  },
  "pop": 794,
  "state": "GA"
},{
  "city": "MERSHON",
  "zip": "31551",
  "loc": {
    "y": 31.478279,
    "x": 82.216995
  },
  "pop": 365,
  "state": "GA"
},{
  "city": "CLYATTVILLE",
  "zip": "31601",
  "loc": {
    "y": 30.810578,
    "x": 83.277166
  },
  "pop": 32232,
  "state": "GA"
},{
  "city": "PATTERSON",
  "zip": "31557",
  "loc": {
    "y": 31.390338,
    "x": 82.127444
  },
  "pop": 2355,
  "state": "GA"
},{
  "city": "ARLINGTON",
  "zip": "31713",
  "loc": {
    "y": 31.445597,
    "x": 84.72572
  },
  "pop": 1402,
  "state": "GA"
},{
  "city": "DONALSONVILLE",
  "zip": "31745",
  "loc": {
    "y": 30.981801,
    "x": 84.887024
  },
  "pop": 7468,
  "state": "GA"
},{
  "city": "SPRINGVALE",
  "zip": "31767",
  "loc": {
    "y": 31.823432,
    "x": 85.057251
  },
  "pop": 850,
  "state": "GA"
},{
  "city": "PLAINS",
  "zip": "31780",
  "loc": {
    "y": 32.033908,
    "x": 84.358638
  },
  "pop": 3377,
  "state": "GA"
},{
  "city": "ELLERSLIE",
  "zip": "31807",
  "loc": {
    "y": 32.661718,
    "x": 84.877197
  },
  "pop": 2153,
  "state": "GA"
},{
  "city": "JUNCTION CITY",
  "zip": "31812",
  "loc": {
    "y": 32.608046,
    "x": 84.45741
  },
  "pop": 472,
  "state": "GA"
},{
  "city": "COLUMBUS",
  "zip": "31903",
  "loc": {
    "y": 32.424513,
    "x": 84.948127
  },
  "pop": 25362,
  "state": "GA"
},{
  "city": "PINETTA",
  "zip": "32350",
  "loc": {
    "y": 30.634794,
    "x": 83.310491
  },
  "pop": 0,
  "state": "GA"
},{
  "city": "HANAPEPE",
  "zip": "96716",
  "loc": {
    "y": 21.915644,
    "x": 159.592022
  },
  "pop": 1523,
  "state": "HI"
},{
  "city": "LAHAINA",
  "zip": "96761",
  "loc": {
    "y": 20.917432,
    "x": 156.677162
  },
  "pop": 14508,
  "state": "HI"
},{
  "city": "PAIA",
  "zip": "96779",
  "loc": {
    "y": 20.91539,
    "x": 156.38017
  },
  "pop": 2311,
  "state": "HI"
},{
  "city": "MOUNTAIN VIEW",
  "zip": "96771",
  "loc": {
    "y": 19.550587,
    "x": 155.086436
  },
  "pop": 3170,
  "state": "HI"
},{
  "city": "WAIANAE",
  "zip": "96792",
  "loc": {
    "y": 21.435192,
    "x": 158.178071
  },
  "pop": 37518,
  "state": "HI"
},{
  "city": "WAIPAHU",
  "zip": "96797",
  "loc": {
    "y": 21.398203,
    "x": 158.012418
  },
  "pop": 52411,
  "state": "HI"
},{
  "city": "HONOLULU",
  "zip": "96826",
  "loc": {
    "y": 21.294139,
    "x": 157.828388
  },
  "pop": 33672,
  "state": "HI"
},{
  "city": "MONTPELIER",
  "zip": "83254",
  "loc": {
    "y": 42.35199,
    "x": 111.31946
  },
  "pop": 4292,
  "state": "ID"
},{
  "city": "WAYAN",
  "zip": "83285",
  "loc": {
    "y": 43.02691,
    "x": 111.254056
  },
  "pop": 117,
  "state": "ID"
},{
  "city": "CASTLEFORD",
  "zip": "83321",
  "loc": {
    "y": 42.521015,
    "x": 114.873433
  },
  "pop": 365,
  "state": "ID"
},{
  "city": "CORRAL",
  "zip": "83322",
  "loc": {
    "y": 43.307127,
    "x": 115.00871
  },
  "pop": 59,
  "state": "ID"
},{
  "city": "MATTHEWS",
  "zip": "30818",
  "loc": {
    "y": 33.217582,
    "x": 82.286747
  },
  "pop": 607,
  "state": "GA"
},{
  "city": "AUGUSTA",
  "zip": "30904",
  "loc": {
    "y": 33.47374,
    "x": 82.013078
  },
  "pop": 30408,
  "state": "GA"
},{
  "city": "ELKO",
  "zip": "31025",
  "loc": {
    "y": 32.333648,
    "x": 83.730388
  },
  "pop": 934,
  "state": "GA"
},{
  "city": "JULIETTE",
  "zip": "31046",
  "loc": {
    "y": 33.119412,
    "x": 83.823529
  },
  "pop": 687,
  "state": "GA"
},{
  "city": "HUBER",
  "zip": "31201",
  "loc": {
    "y": 32.84386,
    "x": 83.598686
  },
  "pop": 31882,
  "state": "GA"
},{
  "city": "CRESCENT",
  "zip": "31304",
  "loc": {
    "y": 31.49675,
    "x": 81.389219
  },
  "pop": 2362,
  "state": "GA"
},{
  "city": "HINESVILLE",
  "zip": "31313",
  "loc": {
    "y": 31.851296,
    "x": 81.607214
  },
  "pop": 42962,
  "state": "GA"
},{
  "city": "PEMBROKE",
  "zip": "31321",
  "loc": {
    "y": 32.157088,
    "x": 81.553341
  },
  "pop": 6571,
  "state": "GA"
},{
  "city": "RICHMOND HILL",
  "zip": "31324",
  "loc": {
    "y": 31.896152,
    "x": 81.294026
  },
  "pop": 7455,
  "state": "GA"
},{
  "city": "HOBOKEN",
  "zip": "31542",
  "loc": {
    "y": 31.183777,
    "x": 82.183847
  },
  "pop": 3481,
  "state": "GA"
},{
  "city": "HORTENSE",
  "zip": "31543",
  "loc": {
    "y": 31.319949,
    "x": 81.959561
  },
  "pop": 968,
  "state": "GA"
},{
  "city": "AXSON",
  "zip": "31624",
  "loc": {
    "y": 31.303455,
    "x": 82.731945
  },
  "pop": 912,
  "state": "GA"
},{
  "city": "NICHOLLS",
  "zip": "31554",
  "loc": {
    "y": 31.449812,
    "x": 82.603207
  },
  "pop": 3615,
  "state": "GA"
},{
  "city": "BOSTON",
  "zip": "31626",
  "loc": {
    "y": 30.785547,
    "x": 83.797085
  },
  "pop": 2808,
  "state": "GA"
},{
  "city": "COGDELL",
  "zip": "31634",
  "loc": {
    "y": 31.044991,
    "x": 82.743103
  },
  "pop": 5098,
  "state": "GA"
},{
  "city": "QUITMAN",
  "zip": "31643",
  "loc": {
    "y": 30.779699,
    "x": 83.556748
  },
  "pop": 8028,
  "state": "GA"
},{
  "city": "SHILOH",
  "zip": "31826",
  "loc": {
    "y": 32.806678,
    "x": 84.741171
  },
  "pop": 1478,
  "state": "GA"
},{
  "city": "HAWAII NATIONAL",
  "zip": "96718",
  "loc": {
    "y": 19.431103,
    "x": 155.284015
  },
  "pop": 91,
  "state": "HI"
},{
  "city": "KALAUPAPA",
  "zip": "96742",
  "loc": {
    "y": 21.19289,
    "x": 156.983453
  },
  "pop": 130,
  "state": "HI"
},{
  "city": "KAILUA",
  "zip": "96734",
  "loc": {
    "y": 21.406262,
    "x": 157.744781
  },
  "pop": 53403,
  "state": "HI"
},{
  "city": "PAHALA",
  "zip": "96777",
  "loc": {
    "y": 19.207898,
    "x": 155.481506
  },
  "pop": 1616,
  "state": "HI"
},{
  "city": "HONOLULU",
  "zip": "96817",
  "loc": {
    "y": 21.329452,
    "x": 157.861469
  },
  "pop": 48920,
  "state": "HI"
},{
  "city": "POCATELLO",
  "zip": "83201",
  "loc": {
    "y": 42.887592,
    "x": 112.438142
  },
  "pop": 33282,
  "state": "ID"
},{
  "city": "FIRTH",
  "zip": "83236",
  "loc": {
    "y": 43.302066,
    "x": 112.158819
  },
  "pop": 2878,
  "state": "ID"
},{
  "city": "GOOD HOPE",
  "zip": "30641",
  "loc": {
    "y": 33.761346,
    "x": 83.594952
  },
  "pop": 1031,
  "state": "GA"
},{
  "city": "MACKAY",
  "zip": "83251",
  "loc": {
    "y": 43.91106,
    "x": 113.611984
  },
  "pop": 1207,
  "state": "ID"
},{
  "city": "THATCHER",
  "zip": "83283",
  "loc": {
    "y": 42.331959,
    "x": 111.78899
  },
  "pop": 207,
  "state": "ID"
},{
  "city": "HARTWELL",
  "zip": "30643",
  "loc": {
    "y": 34.357124,
    "x": 82.929576
  },
  "pop": 14886,
  "state": "GA"
},{
  "city": "WINDER",
  "zip": "30680",
  "loc": {
    "y": 33.998544,
    "x": 83.711473
  },
  "pop": 16981,
  "state": "GA"
},{
  "city": "KEYSVILLE",
  "zip": "30816",
  "loc": {
    "y": 33.17191,
    "x": 82.183368
  },
  "pop": 135,
  "state": "GA"
},{
  "city": "STAPLETON",
  "zip": "30823",
  "loc": {
    "y": 33.189423,
    "x": 82.459704
  },
  "pop": 884,
  "state": "GA"
},{
  "city": "EASTMAN",
  "zip": "31023",
  "loc": {
    "y": 32.208425,
    "x": 83.185959
  },
  "pop": 11744,
  "state": "GA"
},{
  "city": "DRY BRANCH",
  "zip": "31020",
  "loc": {
    "y": 32.70499,
    "x": 83.495105
  },
  "pop": 3702,
  "state": "GA"
},{
  "city": "STEVENS POTTERY",
  "zip": "31031",
  "loc": {
    "y": 32.909212,
    "x": 83.320416
  },
  "pop": 5415,
  "state": "GA"
},{
  "city": "IRWINTON",
  "zip": "31042",
  "loc": {
    "y": 32.808849,
    "x": 83.173963
  },
  "pop": 447,
  "state": "GA"
},{
  "city": "ROBERTA",
  "zip": "31078",
  "loc": {
    "y": 32.722152,
    "x": 84.045114
  },
  "pop": 2803,
  "state": "GA"
},{
  "city": "FORT STEWART",
  "zip": "31314",
  "loc": {
    "y": 31.979085,
    "x": 81.440489
  },
  "pop": 0,
  "state": "GA"
},{
  "city": "PORT WENTWORTH",
  "zip": "31407",
  "loc": {
    "y": 32.148075,
    "x": 81.162891
  },
  "pop": 2883,
  "state": "GA"
},{
  "city": "STATE COLLEGE",
  "zip": "31404",
  "loc": {
    "y": 32.044178,
    "x": 81.068704
  },
  "pop": 33927,
  "state": "GA"
},{
  "city": "BRISTOL",
  "zip": "31518",
  "loc": {
    "y": 31.40278,
    "x": 82.249594
  },
  "pop": 996,
  "state": "GA"
},{
  "city": "FOLKSTON",
  "zip": "31537",
  "loc": {
    "y": 30.850838,
    "x": 82.011617
  },
  "pop": 6486,
  "state": "GA"
},{
  "city": "WOODBINE",
  "zip": "31569",
  "loc": {
    "y": 30.943692,
    "x": 81.678313
  },
  "pop": 4508,
  "state": "GA"
},{
  "city": "FARGO",
  "zip": "31631",
  "loc": {
    "y": 30.716587,
    "x": 82.580056
  },
  "pop": 560,
  "state": "GA"
},{
  "city": "BRONWOOD",
  "zip": "31726",
  "loc": {
    "y": 31.821591,
    "x": 84.359389
  },
  "pop": 1075,
  "state": "GA"
},{
  "city": "GEORGIA SOUTHWES",
  "zip": "31709",
  "loc": {
    "y": 32.07077,
    "x": 84.224729
  },
  "pop": 23590,
  "state": "GA"
},{
  "city": "CAIRO",
  "zip": "31728",
  "loc": {
    "y": 30.892462,
    "x": 84.196246
  },
  "pop": 15393,
  "state": "GA"
},{
  "city": "TY TY",
  "zip": "31795",
  "loc": {
    "y": 31.45595,
    "x": 83.621989
  },
  "pop": 2513,
  "state": "GA"
},{
  "city": "WHIGHAM",
  "zip": "31797",
  "loc": {
    "y": 30.90701,
    "x": 84.315771
  },
  "pop": 2987,
  "state": "GA"
},{
  "city": "HAKALAU",
  "zip": "96710",
  "loc": {
    "y": 19.888217,
    "x": 155.133335
  },
  "pop": 198,
  "state": "HI"
},{
  "city": "HONOKAA",
  "zip": "96727",
  "loc": {
    "y": 20.08266,
    "x": 155.488026
  },
  "pop": 3681,
  "state": "HI"
},{
  "city": "LIHUE",
  "zip": "96766",
  "loc": {
    "y": 21.981618,
    "x": 159.368258
  },
  "pop": 10663,
  "state": "HI"
},{
  "city": "WAIALUA",
  "zip": "96791",
  "loc": {
    "y": 21.576623,
    "x": 158.126673
  },
  "pop": 7975,
  "state": "HI"
},{
  "city": "MAKAWAO",
  "zip": "96768",
  "loc": {
    "y": 20.846932,
    "x": 156.332735
  },
  "pop": 13389,
  "state": "HI"
},{
  "city": "LANAI CITY",
  "zip": "96763",
  "loc": {
    "y": 20.829323,
    "x": 156.921027
  },
  "pop": 2426,
  "state": "HI"
},{
  "city": "ARIMO",
  "zip": "83214",
  "loc": {
    "y": 42.559953,
    "x": 112.174649
  },
  "pop": 333,
  "state": "ID"
},{
  "city": "BANCROFT",
  "zip": "83217",
  "loc": {
    "y": 42.720463,
    "x": 111.842944
  },
  "pop": 988,
  "state": "ID"
},{
  "city": "CLIFTON",
  "zip": "83228",
  "loc": {
    "y": 42.215972,
    "x": 111.995737
  },
  "pop": 538,
  "state": "ID"
},{
  "city": "DECLO",
  "zip": "83323",
  "loc": {
    "y": 42.524005,
    "x": 113.644794
  },
  "pop": 2592,
  "state": "ID"
},{
  "city": "KIMBERLY",
  "zip": "83341",
  "loc": {
    "y": 42.528656,
    "x": 114.365725
  },
  "pop": 3779,
  "state": "ID"
},{
  "city": "DIETRICH",
  "zip": "83324",
  "loc": {
    "y": 42.91254,
    "x": 114.266408
  },
  "pop": 178,
  "state": "ID"
},{
  "city": "NAF",
  "zip": "83342",
  "loc": {
    "y": 42.364652,
    "x": 113.448656
  },
  "pop": 2315,
  "state": "ID"
},{
  "city": "PICABO",
  "zip": "83348",
  "loc": {
    "y": 43.310149,
    "x": 114.086065
  },
  "pop": 76,
  "state": "ID"
},{
  "city": "SWAN VALLEY",
  "zip": "83449",
  "loc": {
    "y": 43.405826,
    "x": 111.279358
  },
  "pop": 441,
  "state": "ID"
},{
  "city": "VICTOR",
  "zip": "83455",
  "loc": {
    "y": 43.614827,
    "x": 111.125934
  },
  "pop": 1084,
  "state": "ID"
},{
  "city": "LEADORE",
  "zip": "83464",
  "loc": {
    "y": 44.738909,
    "x": 113.492586
  },
  "pop": 594,
  "state": "ID"
},{
  "city": "KEUTERVILLE",
  "zip": "83538",
  "loc": {
    "y": 45.929443,
    "x": 116.535583
  },
  "pop": 0,
  "state": "ID"
},{
  "city": "BANKS",
  "zip": "83602",
  "loc": {
    "y": 44.149152,
    "x": 115.983737
  },
  "pop": 494,
  "state": "ID"
},{
  "city": "WEST MOUNTAIN",
  "zip": "83611",
  "loc": {
    "y": 44.493273,
    "x": 116.027676
  },
  "pop": 1681,
  "state": "ID"
},{
  "city": "EAGLE",
  "zip": "83616",
  "loc": {
    "y": 43.706879,
    "x": 116.361966
  },
  "pop": 6874,
  "state": "ID"
},{
  "city": "HAMMETT",
  "zip": "83627",
  "loc": {
    "y": 42.981755,
    "x": 115.565839
  },
  "pop": 73,
  "state": "ID"
},{
  "city": "BOISE",
  "zip": "83709",
  "loc": {
    "y": 43.574085,
    "x": 116.29407
  },
  "pop": 30382,
  "state": "ID"
},{
  "city": "BOISE",
  "zip": "83702",
  "loc": {
    "y": 43.632237,
    "x": 116.205192
  },
  "pop": 19423,
  "state": "ID"
},{
  "city": "MEDIMONT",
  "zip": "83842",
  "loc": {
    "y": 47.462482,
    "x": 116.568291
  },
  "pop": 32,
  "state": "ID"
},{
  "city": "SAGLE",
  "zip": "83860",
  "loc": {
    "y": 48.2035,
    "x": 116.5455
  },
  "pop": 3512,
  "state": "ID"
},{
  "city": "CRYSTAL LAKE",
  "zip": "60014",
  "loc": {
    "y": 42.230755,
    "x": 88.332364
  },
  "pop": 29595,
  "state": "IL"
},{
  "city": "ELK GROVE VILLAG",
  "zip": "60007",
  "loc": {
    "y": 42.005613,
    "x": 88.012775
  },
  "pop": 34577,
  "state": "IL"
},{
  "city": "LIBERTYVILLE",
  "zip": "60048",
  "loc": {
    "y": 42.281001,
    "x": 87.949955
  },
  "pop": 28573,
  "state": "IL"
},{
  "city": "BUFFALO GROVE",
  "zip": "60089",
  "loc": {
    "y": 42.159843,
    "x": 87.964364
  },
  "pop": 41478,
  "state": "IL"
},{
  "city": "PRAIRIE VIEW",
  "zip": "60069",
  "loc": {
    "y": 42.192872,
    "x": 87.904823
  },
  "pop": 4047,
  "state": "IL"
},{
  "city": "STREAMWOOD",
  "zip": "60107",
  "loc": {
    "y": 42.022539,
    "x": 88.168965
  },
  "pop": 30513,
  "state": "IL"
},{
  "city": "CLARE",
  "zip": "60111",
  "loc": {
    "y": 42.027045,
    "x": 88.837832
  },
  "pop": 373,
  "state": "IL"
},{
  "city": "FRANKLIN PARK",
  "zip": "60131",
  "loc": {
    "y": 41.933878,
    "x": 87.873423
  },
  "pop": 18572,
  "state": "IL"
},{
  "city": "DUNDEE",
  "zip": "60118",
  "loc": {
    "y": 42.096197,
    "x": 88.290202
  },
  "pop": 11919,
  "state": "IL"
},{
  "city": "GLENDALE HEIGHTS",
  "zip": "60139",
  "loc": {
    "y": 41.920523,
    "x": 88.079282
  },
  "pop": 27324,
  "state": "IL"
},{
  "city": "SCHILLER PARK",
  "zip": "60176",
  "loc": {
    "y": 41.956304,
    "x": 87.869179
  },
  "pop": 11189,
  "state": "IL"
},{
  "city": "CAROL STREAM",
  "zip": "60188",
  "loc": {
    "y": 41.91784,
    "x": 88.136962
  },
  "pop": 34902,
  "state": "IL"
},{
  "city": "GLENWOOD",
  "zip": "60425",
  "loc": {
    "y": 41.546718,
    "x": 87.612584
  },
  "pop": 10180,
  "state": "IL"
},{
  "city": "EVANSTON",
  "zip": "60202",
  "loc": {
    "y": 42.03022,
    "x": 87.686544
  },
  "pop": 31509,
  "state": "IL"
},{
  "city": "ROCKDALE",
  "zip": "60436",
  "loc": {
    "y": 41.508818,
    "x": 88.135779
  },
  "pop": 23888,
  "state": "IL"
},{
  "city": "LANSING",
  "zip": "60438",
  "loc": {
    "y": 41.566045,
    "x": 87.544634
  },
  "pop": 28810,
  "state": "IL"
},{
  "city": "MINOOKA",
  "zip": "60447",
  "loc": {
    "y": 41.461516,
    "x": 88.278596
  },
  "pop": 6005,
  "state": "IL"
},{
  "city": "LEE",
  "zip": "60530",
  "loc": {
    "y": 41.786418,
    "x": 88.971386
  },
  "pop": 825,
  "state": "IL"
},{
  "city": "LELAND",
  "zip": "60531",
  "loc": {
    "y": 41.606591,
    "x": 88.771574
  },
  "pop": 1601,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60607",
  "loc": {
    "y": 41.872075,
    "x": 87.657845
  },
  "pop": 13745,
  "state": "IL"
},{
  "city": "BEAVERVILLE",
  "zip": "60912",
  "loc": {
    "y": 40.967164,
    "x": 87.621715
  },
  "pop": 672,
  "state": "IL"
},{
  "city": "HERSCHER",
  "zip": "60941",
  "loc": {
    "y": 41.046441,
    "x": 88.085801
  },
  "pop": 2138,
  "state": "IL"
},{
  "city": "FELT",
  "zip": "83424",
  "loc": {
    "y": 43.872407,
    "x": 111.189496
  },
  "pop": 40,
  "state": "ID"
},{
  "city": "CARMEN",
  "zip": "83462",
  "loc": {
    "y": 45.255016,
    "x": 113.857267
  },
  "pop": 195,
  "state": "ID"
},{
  "city": "KENDRICK",
  "zip": "83537",
  "loc": {
    "y": 46.628628,
    "x": 116.604895
  },
  "pop": 970,
  "state": "ID"
},{
  "city": "LETHA",
  "zip": "83636",
  "loc": {
    "y": 43.840306,
    "x": 116.585004
  },
  "pop": 29,
  "state": "ID"
},{
  "city": "NAMPA",
  "zip": "83651",
  "loc": {
    "y": 43.58342,
    "x": 116.584818
  },
  "pop": 16068,
  "state": "ID"
},{
  "city": "SWEET",
  "zip": "83670",
  "loc": {
    "y": 43.99475,
    "x": 116.323215
  },
  "pop": 344,
  "state": "ID"
},{
  "city": "GARDEN CITY",
  "zip": "83714",
  "loc": {
    "y": 43.643036,
    "x": 116.265751
  },
  "pop": 5897,
  "state": "ID"
},{
  "city": "DESMET",
  "zip": "83824",
  "loc": {
    "y": 47.125954,
    "x": 116.893746
  },
  "pop": 265,
  "state": "ID"
},{
  "city": "ELK RIVER",
  "zip": "83827",
  "loc": {
    "y": 46.782972,
    "x": 116.179943
  },
  "pop": 154,
  "state": "ID"
},{
  "city": "BARRINGTON",
  "zip": "60010",
  "loc": {
    "y": 42.161387,
    "x": 88.138345
  },
  "pop": 37323,
  "state": "IL"
},{
  "city": "CRYSTAL LAKE",
  "zip": "60012",
  "loc": {
    "y": 42.266198,
    "x": 88.321294
  },
  "pop": 6855,
  "state": "IL"
},{
  "city": "FOX RIVER GROVE",
  "zip": "60021",
  "loc": {
    "y": 42.193594,
    "x": 88.220483
  },
  "pop": 4898,
  "state": "IL"
},{
  "city": "PROSPECT HEIGHTS",
  "zip": "60070",
  "loc": {
    "y": 42.103324,
    "x": 87.914934
  },
  "pop": 14692,
  "state": "IL"
},{
  "city": "RICHMOND",
  "zip": "60071",
  "loc": {
    "y": 42.466863,
    "x": 88.290024
  },
  "pop": 2658,
  "state": "IL"
},{
  "city": "BENSENVILLE",
  "zip": "60106",
  "loc": {
    "y": 41.950145,
    "x": 87.944973
  },
  "pop": 20080,
  "state": "IL"
},{
  "city": "BLOOMINGDALE",
  "zip": "60108",
  "loc": {
    "y": 41.94827,
    "x": 88.07824
  },
  "pop": 16560,
  "state": "IL"
},{
  "city": "FOREST PARK",
  "zip": "60130",
  "loc": {
    "y": 41.874373,
    "x": 87.810624
  },
  "pop": 14882,
  "state": "IL"
},{
  "city": "ADDISON",
  "zip": "60101",
  "loc": {
    "y": 41.933509,
    "x": 88.0054
  },
  "pop": 35140,
  "state": "IL"
},{
  "city": "MALTA",
  "zip": "60150",
  "loc": {
    "y": 41.918332,
    "x": 88.868818
  },
  "pop": 1619,
  "state": "IL"
},{
  "city": "MARENGO",
  "zip": "60152",
  "loc": {
    "y": 42.244189,
    "x": 88.607369
  },
  "pop": 8536,
  "state": "IL"
},{
  "city": "NORTHLAKE",
  "zip": "60164",
  "loc": {
    "y": 41.917961,
    "x": 87.89592
  },
  "pop": 21306,
  "state": "IL"
},{
  "city": "WEST CHICAGO",
  "zip": "60185",
  "loc": {
    "y": 41.888558,
    "x": 88.202168
  },
  "pop": 23894,
  "state": "IL"
},{
  "city": "MONEE",
  "zip": "60449",
  "loc": {
    "y": 41.419133,
    "x": 87.77484
  },
  "pop": 3537,
  "state": "IL"
},{
  "city": "HOMETOWN",
  "zip": "60456",
  "loc": {
    "y": 41.73113,
    "x": 87.731536
  },
  "pop": 4769,
  "state": "IL"
},{
  "city": "OLYMPIA FIELDS",
  "zip": "60461",
  "loc": {
    "y": 41.51564,
    "x": 87.689952
  },
  "pop": 4253,
  "state": "IL"
},{
  "city": "SHERIDAN",
  "zip": "60551",
  "loc": {
    "y": 41.516428,
    "x": 88.670634
  },
  "pop": 3345,
  "state": "IL"
},{
  "city": "SOMONAUK",
  "zip": "60552",
  "loc": {
    "y": 41.638289,
    "x": 88.681645
  },
  "pop": 1475,
  "state": "IL"
},{
  "city": "SUGAR GROVE",
  "zip": "60554",
  "loc": {
    "y": 41.774113,
    "x": 88.439721
  },
  "pop": 4255,
  "state": "IL"
},{
  "city": "WARRENVILLE",
  "zip": "60555",
  "loc": {
    "y": 41.828046,
    "x": 88.19213
  },
  "pop": 12421,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60626",
  "loc": {
    "y": 42.009475,
    "x": 87.668887
  },
  "pop": 57320,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60631",
  "loc": {
    "y": 41.995145,
    "x": 87.808215
  },
  "pop": 25175,
  "state": "IL"
},{
  "city": "CALUMET PARK",
  "zip": "60643",
  "loc": {
    "y": 41.693243,
    "x": 87.659445
  },
  "pop": 63953,
  "state": "IL"
},{
  "city": "AMMON",
  "zip": "83401",
  "loc": {
    "y": 43.517679,
    "x": 111.990626
  },
  "pop": 27974,
  "state": "ID"
},{
  "city": "MINIDOKA",
  "zip": "83343",
  "loc": {
    "y": 42.759784,
    "x": 113.620033
  },
  "pop": 1379,
  "state": "ID"
},{
  "city": "PAUL",
  "zip": "83347",
  "loc": {
    "y": 42.623999,
    "x": 113.797125
  },
  "pop": 3464,
  "state": "ID"
},{
  "city": "IDAHO FALLS",
  "zip": "83404",
  "loc": {
    "y": 43.475043,
    "x": 112.012449
  },
  "pop": 14962,
  "state": "ID"
},{
  "city": "MONTEVIEW",
  "zip": "83435",
  "loc": {
    "y": 43.986242,
    "x": 112.578321
  },
  "pop": 441,
  "state": "ID"
},{
  "city": "CRAIGMONT",
  "zip": "83523",
  "loc": {
    "y": 46.245292,
    "x": 116.467655
  },
  "pop": 820,
  "state": "ID"
},{
  "city": "ISLAND PARK",
  "zip": "83429",
  "loc": {
    "y": 44.446606,
    "x": 111.367914
  },
  "pop": 35,
  "state": "ID"
},{
  "city": "LENORE",
  "zip": "83541",
  "loc": {
    "y": 46.535408,
    "x": 116.513015
  },
  "pop": 473,
  "state": "ID"
},{
  "city": "IDAHO FALLS",
  "zip": "83402",
  "loc": {
    "y": 43.493373,
    "x": 112.057762
  },
  "pop": 20716,
  "state": "ID"
},{
  "city": "NEZPERCE",
  "zip": "83543",
  "loc": {
    "y": 46.247533,
    "x": 116.239281
  },
  "pop": 650,
  "state": "ID"
},{
  "city": "RIGBY",
  "zip": "83442",
  "loc": {
    "y": 43.671462,
    "x": 111.900481
  },
  "pop": 8178,
  "state": "ID"
},{
  "city": "SUGAR CITY",
  "zip": "83448",
  "loc": {
    "y": 43.866852,
    "x": 111.79004
  },
  "pop": 4517,
  "state": "ID"
},{
  "city": "GRASMERE",
  "zip": "83604",
  "loc": {
    "y": 42.76006,
    "x": 115.677259
  },
  "pop": 609,
  "state": "ID"
},{
  "city": "RIGGINS",
  "zip": "83549",
  "loc": {
    "y": 45.397006,
    "x": 116.300553
  },
  "pop": 818,
  "state": "ID"
},{
  "city": "GLENNS FERRY",
  "zip": "83623",
  "loc": {
    "y": 42.962202,
    "x": 115.315973
  },
  "pop": 2040,
  "state": "ID"
},{
  "city": "MESA",
  "zip": "83643",
  "loc": {
    "y": 44.657747,
    "x": 116.42113
  },
  "pop": 279,
  "state": "ID"
},{
  "city": "NAMPA",
  "zip": "83687",
  "loc": {
    "y": 43.593657,
    "x": 116.536024
  },
  "pop": 10589,
  "state": "ID"
},{
  "city": "WILDER",
  "zip": "83676",
  "loc": {
    "y": 43.657851,
    "x": 116.912199
  },
  "pop": 3042,
  "state": "ID"
},{
  "city": "BOISE",
  "zip": "83704",
  "loc": {
    "y": 43.633001,
    "x": 116.295099
  },
  "pop": 40912,
  "state": "ID"
},{
  "city": "BOISE",
  "zip": "83703",
  "loc": {
    "y": 43.660051,
    "x": 116.252396
  },
  "pop": 17005,
  "state": "ID"
},{
  "city": "BONNERS FERRY",
  "zip": "83805",
  "loc": {
    "y": 48.730642,
    "x": 116.332178
  },
  "pop": 5219,
  "state": "ID"
},{
  "city": "PRIEST RIVER",
  "zip": "83856",
  "loc": {
    "y": 48.16637,
    "x": 116.906617
  },
  "pop": 4345,
  "state": "ID"
},{
  "city": "NAPLES",
  "zip": "83847",
  "loc": {
    "y": 48.60491,
    "x": 116.319636
  },
  "pop": 1556,
  "state": "ID"
},{
  "city": "PRINCETON",
  "zip": "83857",
  "loc": {
    "y": 46.899556,
    "x": 116.828728
  },
  "pop": 733,
  "state": "ID"
},{
  "city": "RATHDRUM",
  "zip": "83858",
  "loc": {
    "y": 47.824107,
    "x": 116.887294
  },
  "pop": 4798,
  "state": "ID"
},{
  "city": "ARLINGTON HEIGHT",
  "zip": "60005",
  "loc": {
    "y": 42.066599,
    "x": 87.985461
  },
  "pop": 26742,
  "state": "IL"
},{
  "city": "GLENVIEW NAS",
  "zip": "60026",
  "loc": {
    "y": 42.09134,
    "x": 87.824782
  },
  "pop": 437,
  "state": "IL"
},{
  "city": "ROUND LAKE",
  "zip": "60073",
  "loc": {
    "y": 42.366809,
    "x": 88.088819
  },
  "pop": 28919,
  "state": "IL"
},{
  "city": "SPRING GROVE",
  "zip": "60081",
  "loc": {
    "y": 42.441267,
    "x": 88.223734
  },
  "pop": 2783,
  "state": "IL"
},{
  "city": "WILMETTE",
  "zip": "60091",
  "loc": {
    "y": 42.076462,
    "x": 87.724572
  },
  "pop": 26657,
  "state": "IL"
},{
  "city": "WHEELING",
  "zip": "60090",
  "loc": {
    "y": 42.13404,
    "x": 87.934097
  },
  "pop": 31261,
  "state": "IL"
},{
  "city": "HANOVER PARK",
  "zip": "60103",
  "loc": {
    "y": 41.983559,
    "x": 88.160356
  },
  "pop": 51877,
  "state": "IL"
},{
  "city": "ELMHURST",
  "zip": "60126",
  "loc": {
    "y": 41.892661,
    "x": 87.941025
  },
  "pop": 43637,
  "state": "IL"
},{
  "city": "BELLWOOD",
  "zip": "60104",
  "loc": {
    "y": 41.882484,
    "x": 87.878557
  },
  "pop": 19336,
  "state": "IL"
},{
  "city": "WESTCHESTER",
  "zip": "60154",
  "loc": {
    "y": 41.852368,
    "x": 87.884488
  },
  "pop": 16957,
  "state": "IL"
},{
  "city": "GENEVA",
  "zip": "60134",
  "loc": {
    "y": 41.886013,
    "x": 88.310954
  },
  "pop": 13603,
  "state": "IL"
},{
  "city": "HILLSIDE",
  "zip": "60162",
  "loc": {
    "y": 41.872452,
    "x": 87.901591
  },
  "pop": 7757,
  "state": "IL"
},{
  "city": "MELROSE PARK",
  "zip": "60160",
  "loc": {
    "y": 41.900347,
    "x": 87.858066
  },
  "pop": 21235,
  "state": "IL"
},{
  "city": "WINFIELD",
  "zip": "60190",
  "loc": {
    "y": 41.874358,
    "x": 88.151621
  },
  "pop": 9255,
  "state": "IL"
},{
  "city": "HILLSIDE",
  "zip": "60163",
  "loc": {
    "y": 41.886538,
    "x": 87.910678
  },
  "pop": 5079,
  "state": "IL"
},{
  "city": "LEWISVILLE",
  "zip": "83431",
  "loc": {
    "y": 43.672476,
    "x": 112.018884
  },
  "pop": 1565,
  "state": "ID"
},{
  "city": "TETON",
  "zip": "83451",
  "loc": {
    "y": 43.898751,
    "x": 111.668145
  },
  "pop": 1086,
  "state": "ID"
},{
  "city": "CHANNAHON",
  "zip": "60410",
  "loc": {
    "y": 41.434664,
    "x": 88.213786
  },
  "pop": 3870,
  "state": "IL"
},{
  "city": "HOMEWOOD",
  "zip": "60430",
  "loc": {
    "y": 41.555579,
    "x": 87.661578
  },
  "pop": 19469,
  "state": "IL"
},{
  "city": "JUSTICE",
  "zip": "60458",
  "loc": {
    "y": 41.744709,
    "x": 87.834587
  },
  "pop": 12773,
  "state": "IL"
},{
  "city": "HICKORY HILLS",
  "zip": "60457",
  "loc": {
    "y": 41.726228,
    "x": 87.828893
  },
  "pop": 12894,
  "state": "IL"
},{
  "city": "DIXIE",
  "zip": "83525",
  "loc": {
    "y": 45.888897,
    "x": 115.359158
  },
  "pop": 755,
  "state": "ID"
},{
  "city": "FERDINAND",
  "zip": "83526",
  "loc": {
    "y": 46.134877,
    "x": 116.39817
  },
  "pop": 323,
  "state": "ID"
},{
  "city": "NEW LENOX",
  "zip": "60451",
  "loc": {
    "y": 41.506701,
    "x": 87.963083
  },
  "pop": 17470,
  "state": "IL"
},{
  "city": "PALOS HEIGHTS",
  "zip": "60463",
  "loc": {
    "y": 41.662146,
    "x": 87.792697
  },
  "pop": 13509,
  "state": "IL"
},{
  "city": "IDAHO CITY",
  "zip": "83631",
  "loc": {
    "y": 43.758601,
    "x": 115.918436
  },
  "pop": 1324,
  "state": "ID"
},{
  "city": "OLA",
  "zip": "83657",
  "loc": {
    "y": 44.235026,
    "x": 116.290915
  },
  "pop": 159,
  "state": "ID"
},{
  "city": "BAYVIEW",
  "zip": "83803",
  "loc": {
    "y": 47.96535,
    "x": 116.568745
  },
  "pop": 722,
  "state": "ID"
},{
  "city": "WILLOW SPRINGS",
  "zip": "60480",
  "loc": {
    "y": 41.736416,
    "x": 87.878588
  },
  "pop": 4469,
  "state": "IL"
},{
  "city": "LYONS",
  "zip": "60534",
  "loc": {
    "y": 41.813016,
    "x": 87.823559
  },
  "pop": 9828,
  "state": "IL"
},{
  "city": "CAREYWOOD",
  "zip": "83809",
  "loc": {
    "y": 48.062494,
    "x": 116.598761
  },
  "pop": 361,
  "state": "ID"
},{
  "city": "BIG ROCK",
  "zip": "60511",
  "loc": {
    "y": 41.759308,
    "x": 88.537617
  },
  "pop": 1976,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60614",
  "loc": {
    "y": 41.92286,
    "x": 87.648295
  },
  "pop": 61350,
  "state": "IL"
},{
  "city": "CLARENDON HILLS",
  "zip": "60514",
  "loc": {
    "y": 41.779729,
    "x": 87.955322
  },
  "pop": 17321,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60629",
  "loc": {
    "y": 41.778149,
    "x": 87.706936
  },
  "pop": 91814,
  "state": "IL"
},{
  "city": "MULLAN",
  "zip": "83846",
  "loc": {
    "y": 47.470906,
    "x": 115.792603
  },
  "pop": 995,
  "state": "ID"
},{
  "city": "WALLACE",
  "zip": "83873",
  "loc": {
    "y": 47.490842,
    "x": 115.962001
  },
  "pop": 4688,
  "state": "ID"
},{
  "city": "DEERFIELD",
  "zip": "60015",
  "loc": {
    "y": 42.170494,
    "x": 87.859033
  },
  "pop": 22048,
  "state": "IL"
},{
  "city": "WOODRIDGE",
  "zip": "60517",
  "loc": {
    "y": 41.751755,
    "x": 88.04885
  },
  "pop": 23761,
  "state": "IL"
},{
  "city": "NORRIDGE",
  "zip": "60634",
  "loc": {
    "y": 41.945213,
    "x": 87.796054
  },
  "pop": 69160,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60651",
  "loc": {
    "y": 41.902509,
    "x": 87.739307
  },
  "pop": 78082,
  "state": "IL"
},{
  "city": "NAPERVILLE",
  "zip": "60540",
  "loc": {
    "y": 41.766198,
    "x": 88.141038
  },
  "pop": 35414,
  "state": "IL"
},{
  "city": "FORT SHERIDAN",
  "zip": "60037",
  "loc": {
    "y": 42.209683,
    "x": 87.805572
  },
  "pop": 2598,
  "state": "IL"
},{
  "city": "LINDENHURST",
  "zip": "60046",
  "loc": {
    "y": 42.414796,
    "x": 88.063318
  },
  "pop": 20764,
  "state": "IL"
},{
  "city": "CHATSWORTH",
  "zip": "60921",
  "loc": {
    "y": 40.748441,
    "x": 88.293662
  },
  "pop": 1703,
  "state": "IL"
},{
  "city": "NORTH AURORA",
  "zip": "60542",
  "loc": {
    "y": 41.808932,
    "x": 88.327424
  },
  "pop": 6618,
  "state": "IL"
},{
  "city": "EMINGTON",
  "zip": "60934",
  "loc": {
    "y": 40.978317,
    "x": 88.321135
  },
  "pop": 330,
  "state": "IL"
},{
  "city": "MUNDELEIN",
  "zip": "60060",
  "loc": {
    "y": 42.263616,
    "x": 88.004762
  },
  "pop": 22817,
  "state": "IL"
},{
  "city": "CHICAGO RIDGE",
  "zip": "60415",
  "loc": {
    "y": 41.70171,
    "x": 87.777381
  },
  "pop": 13472,
  "state": "IL"
},{
  "city": "PALOS HILLS",
  "zip": "60465",
  "loc": {
    "y": 41.700389,
    "x": 87.826276
  },
  "pop": 18112,
  "state": "IL"
},{
  "city": "ARGO",
  "zip": "60501",
  "loc": {
    "y": 41.784245,
    "x": 87.807468
  },
  "pop": 10525,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60608",
  "loc": {
    "y": 41.851482,
    "x": 87.669444
  },
  "pop": 84518,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60613",
  "loc": {
    "y": 41.954341,
    "x": 87.657491
  },
  "pop": 48963,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60615",
  "loc": {
    "y": 41.802211,
    "x": 87.600623
  },
  "pop": 44137,
  "state": "IL"
},{
  "city": "ELMWOOD PARK",
  "zip": "60635",
  "loc": {
    "y": 41.922907,
    "x": 87.808593
  },
  "pop": 38056,
  "state": "IL"
},{
  "city": "MERRIONETTE PARK",
  "zip": "60655",
  "loc": {
    "y": 41.693033,
    "x": 87.702188
  },
  "pop": 29847,
  "state": "IL"
},{
  "city": "BRADLEY",
  "zip": "60915",
  "loc": {
    "y": 41.145376,
    "x": 87.860115
  },
  "pop": 10071,
  "state": "IL"
},{
  "city": "CRESCENT CITY",
  "zip": "60928",
  "loc": {
    "y": 40.7682,
    "x": 87.83703
  },
  "pop": 1271,
  "state": "IL"
},{
  "city": "IDAHO FALLS",
  "zip": "83406",
  "loc": {
    "y": 43.473233,
    "x": 111.966052
  },
  "pop": 5935,
  "state": "ID"
},{
  "city": "REXBURG",
  "zip": "83440",
  "loc": {
    "y": 43.809968,
    "x": 111.789022
  },
  "pop": 19157,
  "state": "ID"
},{
  "city": "PIERCE",
  "zip": "83546",
  "loc": {
    "y": 46.492424,
    "x": 115.807071
  },
  "pop": 900,
  "state": "ID"
},{
  "city": "WINCHESTER",
  "zip": "83555",
  "loc": {
    "y": 46.238334,
    "x": 116.620382
  },
  "pop": 380,
  "state": "ID"
},{
  "city": "HOMEDALE",
  "zip": "83628",
  "loc": {
    "y": 43.613844,
    "x": 116.947228
  },
  "pop": 3079,
  "state": "ID"
},{
  "city": "ROBERTS",
  "zip": "83444",
  "loc": {
    "y": 43.7116,
    "x": 112.119591
  },
  "pop": 1436,
  "state": "ID"
},{
  "city": "KUNA",
  "zip": "83634",
  "loc": {
    "y": 43.487034,
    "x": 116.381859
  },
  "pop": 8141,
  "state": "ID"
},{
  "city": "PARMA",
  "zip": "83660",
  "loc": {
    "y": 43.789576,
    "x": 116.940066
  },
  "pop": 4477,
  "state": "ID"
},{
  "city": "BLANCHARD",
  "zip": "83804",
  "loc": {
    "y": 48.022344,
    "x": 116.990865
  },
  "pop": 507,
  "state": "ID"
},{
  "city": "COCOLALLA",
  "zip": "83813",
  "loc": {
    "y": 48.124828,
    "x": 116.657051
  },
  "pop": 715,
  "state": "ID"
},{
  "city": "HARRISON",
  "zip": "83833",
  "loc": {
    "y": 47.501692,
    "x": 116.744607
  },
  "pop": 1077,
  "state": "ID"
},{
  "city": "SMELTERVILLE",
  "zip": "83868",
  "loc": {
    "y": 47.537096,
    "x": 116.240113
  },
  "pop": 2272,
  "state": "ID"
},{
  "city": "KINGSTON",
  "zip": "83839",
  "loc": {
    "y": 47.550881,
    "x": 116.288722
  },
  "pop": 690,
  "state": "ID"
},{
  "city": "DES PLAINES",
  "zip": "60016",
  "loc": {
    "y": 42.046734,
    "x": 87.885899
  },
  "pop": 54734,
  "state": "IL"
},{
  "city": "HARVARD",
  "zip": "60033",
  "loc": {
    "y": 42.422727,
    "x": 88.604812
  },
  "pop": 10790,
  "state": "IL"
},{
  "city": "HIGHWOOD",
  "zip": "60040",
  "loc": {
    "y": 42.203549,
    "x": 87.814068
  },
  "pop": 3956,
  "state": "IL"
},{
  "city": "MORTON GROVE",
  "zip": "60053",
  "loc": {
    "y": 42.043133,
    "x": 87.789879
  },
  "pop": 22502,
  "state": "IL"
},{
  "city": "SKOKIE",
  "zip": "60077",
  "loc": {
    "y": 42.034525,
    "x": 87.754123
  },
  "pop": 22680,
  "state": "IL"
},{
  "city": "TECHNY",
  "zip": "60082",
  "loc": {
    "y": 42.121425,
    "x": 87.804882
  },
  "pop": 196,
  "state": "IL"
},{
  "city": "WADSWORTH",
  "zip": "60083",
  "loc": {
    "y": 42.446032,
    "x": 87.904048
  },
  "pop": 5510,
  "state": "IL"
},{
  "city": "GREAT LAKES",
  "zip": "60088",
  "loc": {
    "y": 42.303173,
    "x": 87.864192
  },
  "pop": 8831,
  "state": "IL"
},{
  "city": "SAINT CHARLES",
  "zip": "60174",
  "loc": {
    "y": 41.919417,
    "x": 88.307022
  },
  "pop": 27454,
  "state": "IL"
},{
  "city": "WHEATON",
  "zip": "60187",
  "loc": {
    "y": 41.856592,
    "x": 88.107633
  },
  "pop": 57758,
  "state": "IL"
},{
  "city": "GARDNER",
  "zip": "60424",
  "loc": {
    "y": 41.179321,
    "x": 88.296543
  },
  "pop": 2349,
  "state": "IL"
},{
  "city": "SHOREWOOD",
  "zip": "60435",
  "loc": {
    "y": 41.541468,
    "x": 88.128107
  },
  "pop": 56510,
  "state": "IL"
},{
  "city": "KINSMAN",
  "zip": "60437",
  "loc": {
    "y": 41.161825,
    "x": 88.480477
  },
  "pop": 687,
  "state": "IL"
},{
  "city": "RICHTON PARK",
  "zip": "60471",
  "loc": {
    "y": 41.481854,
    "x": 87.723834
  },
  "pop": 10776,
  "state": "IL"
},{
  "city": "TINLEY PARK",
  "zip": "60477",
  "loc": {
    "y": 41.582535,
    "x": 87.804963
  },
  "pop": 45371,
  "state": "IL"
},{
  "city": "AHSAHKA",
  "zip": "83520",
  "loc": {
    "y": 46.510318,
    "x": 116.371537
  },
  "pop": 335,
  "state": "ID"
},{
  "city": "EARLVILLE",
  "zip": "60518",
  "loc": {
    "y": 41.585901,
    "x": 88.910346
  },
  "pop": 2305,
  "state": "IL"
},{
  "city": "HINCKLEY",
  "zip": "60520",
  "loc": {
    "y": 41.769108,
    "x": 88.644831
  },
  "pop": 2387,
  "state": "IL"
},{
  "city": "OSWEGO",
  "zip": "60543",
  "loc": {
    "y": 41.684893,
    "x": 88.345305
  },
  "pop": 9649,
  "state": "IL"
},{
  "city": "PLANO",
  "zip": "60545",
  "loc": {
    "y": 41.666987,
    "x": 88.53838
  },
  "pop": 7506,
  "state": "IL"
},{
  "city": "WESTMONT",
  "zip": "60559",
  "loc": {
    "y": 41.772848,
    "x": 87.975736
  },
  "pop": 41903,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60605",
  "loc": {
    "y": 41.87125,
    "x": 87.627715
  },
  "pop": 7709,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60624",
  "loc": {
    "y": 41.880394,
    "x": 87.722349
  },
  "pop": 50030,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60653",
  "loc": {
    "y": 41.819645,
    "x": 87.612605
  },
  "pop": 40091,
  "state": "IL"
},{
  "city": "GREENCREEK",
  "zip": "83533",
  "loc": {
    "y": 46.115523,
    "x": 116.27239
  },
  "pop": 269,
  "state": "ID"
},{
  "city": "KAMIAH",
  "zip": "83536",
  "loc": {
    "y": 46.21856,
    "x": 116.034742
  },
  "pop": 2970,
  "state": "ID"
},{
  "city": "CALDWELL",
  "zip": "83605",
  "loc": {
    "y": 43.662719,
    "x": 116.700038
  },
  "pop": 32407,
  "state": "ID"
},{
  "city": "MONTOUR",
  "zip": "83617",
  "loc": {
    "y": 43.879152,
    "x": 116.511459
  },
  "pop": 11189,
  "state": "ID"
},{
  "city": "BOISE",
  "zip": "83705",
  "loc": {
    "y": 43.585077,
    "x": 116.219104
  },
  "pop": 25402,
  "state": "ID"
},{
  "city": "WORLEY",
  "zip": "83876",
  "loc": {
    "y": 47.429213,
    "x": 116.905634
  },
  "pop": 845,
  "state": "ID"
},{
  "city": "ANTIOCH",
  "zip": "60002",
  "loc": {
    "y": 42.464811,
    "x": 88.117802
  },
  "pop": 18058,
  "state": "IL"
},{
  "city": "INGLESIDE",
  "zip": "60041",
  "loc": {
    "y": 42.363093,
    "x": 88.158749
  },
  "pop": 4267,
  "state": "IL"
},{
  "city": "HEBRON",
  "zip": "60034",
  "loc": {
    "y": 42.464173,
    "x": 88.417583
  },
  "pop": 1606,
  "state": "IL"
},{
  "city": "ABBOTT PARK",
  "zip": "60064",
  "loc": {
    "y": 42.318901,
    "x": 87.847819
  },
  "pop": 26542,
  "state": "IL"
},{
  "city": "WAUKEGAN",
  "zip": "60087",
  "loc": {
    "y": 42.398906,
    "x": 87.855387
  },
  "pop": 17816,
  "state": "IL"
},{
  "city": "WONDER LAKE",
  "zip": "60097",
  "loc": {
    "y": 42.384908,
    "x": 88.353364
  },
  "pop": 8401,
  "state": "IL"
},{
  "city": "DE KALB",
  "zip": "60115",
  "loc": {
    "y": 41.934245,
    "x": 88.760673
  },
  "pop": 38360,
  "state": "IL"
},{
  "city": "GENOA",
  "zip": "60135",
  "loc": {
    "y": 42.09811,
    "x": 88.690803
  },
  "pop": 4356,
  "state": "IL"
},{
  "city": "LOMBARD",
  "zip": "60148",
  "loc": {
    "y": 41.872139,
    "x": 88.015988
  },
  "pop": 52289,
  "state": "IL"
},{
  "city": "SOUTH ELGIN",
  "zip": "60177",
  "loc": {
    "y": 41.996868,
    "x": 88.298558
  },
  "pop": 9117,
  "state": "IL"
},{
  "city": "HOFFMAN ESTATES",
  "zip": "60194",
  "loc": {
    "y": 42.039025,
    "x": 88.109442
  },
  "pop": 37295,
  "state": "IL"
},{
  "city": "BEECHER",
  "zip": "60401",
  "loc": {
    "y": 41.34437,
    "x": 87.611538
  },
  "pop": 3724,
  "state": "IL"
},{
  "city": "STICKNEY",
  "zip": "60402",
  "loc": {
    "y": 41.841819,
    "x": 87.79075
  },
  "pop": 51541,
  "state": "IL"
},{
  "city": "COAL CITY",
  "zip": "60416",
  "loc": {
    "y": 41.290769,
    "x": 88.282346
  },
  "pop": 6248,
  "state": "IL"
},{
  "city": "MARKHAM",
  "zip": "60426",
  "loc": {
    "y": 41.608536,
    "x": 87.661115
  },
  "pop": 48332,
  "state": "IL"
},{
  "city": "JOLIET",
  "zip": "60433",
  "loc": {
    "y": 41.511873,
    "x": 88.05687
  },
  "pop": 18342,
  "state": "IL"
},{
  "city": "MOOSEHEART",
  "zip": "60539",
  "loc": {
    "y": 41.824148,
    "x": 88.331532
  },
  "pop": 371,
  "state": "IL"
},{
  "city": "STEWARD",
  "zip": "60553",
  "loc": {
    "y": 41.847545,
    "x": 89.015086
  },
  "pop": 661,
  "state": "IL"
},{
  "city": "BRISTOL",
  "zip": "60512",
  "loc": {
    "y": 41.707446,
    "x": 88.401354
  },
  "pop": 595,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60616",
  "loc": {
    "y": 41.84258,
    "x": 87.630552
  },
  "pop": 45750,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60619",
  "loc": {
    "y": 41.745765,
    "x": 87.60539
  },
  "pop": 74469,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60621",
  "loc": {
    "y": 41.774993,
    "x": 87.642136
  },
  "pop": 56458,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60625",
  "loc": {
    "y": 41.970325,
    "x": 87.704157
  },
  "pop": 83401,
  "state": "IL"
},{
  "city": "ALSIP",
  "zip": "60658",
  "loc": {
    "y": 41.671505,
    "x": 87.729967
  },
  "pop": 16461,
  "state": "IL"
},{
  "city": "AROMA PARK",
  "zip": "60910",
  "loc": {
    "y": 41.094653,
    "x": 87.771887
  },
  "pop": 3151,
  "state": "IL"
},{
  "city": "BUCKINGHAM",
  "zip": "60917",
  "loc": {
    "y": 41.043316,
    "x": 88.177156
  },
  "pop": 557,
  "state": "IL"
},{
  "city": "CHEBANSE",
  "zip": "60922",
  "loc": {
    "y": 41.02541,
    "x": 87.895917
  },
  "pop": 3580,
  "state": "IL"
},{
  "city": "BOURBONNAIS",
  "zip": "60914",
  "loc": {
    "y": 41.166119,
    "x": 87.879023
  },
  "pop": 18311,
  "state": "IL"
},{
  "city": "HAZELTON",
  "zip": "83335",
  "loc": {
    "y": 42.595462,
    "x": 114.134984
  },
  "pop": 705,
  "state": "ID"
},{
  "city": "DUBOIS",
  "zip": "83423",
  "loc": {
    "y": 44.185769,
    "x": 112.325852
  },
  "pop": 650,
  "state": "ID"
},{
  "city": "REUBENS",
  "zip": "83548",
  "loc": {
    "y": 46.336112,
    "x": 116.533334
  },
  "pop": 121,
  "state": "ID"
},{
  "city": "ATLANTA",
  "zip": "83601",
  "loc": {
    "y": 43.567436,
    "x": 115.357042
  },
  "pop": 208,
  "state": "ID"
},{
  "city": "COUNCIL",
  "zip": "83612",
  "loc": {
    "y": 44.762754,
    "x": 116.451833
  },
  "pop": 1606,
  "state": "ID"
},{
  "city": "INDIAN VALLEY",
  "zip": "83632",
  "loc": {
    "y": 44.549134,
    "x": 116.442969
  },
  "pop": 188,
  "state": "ID"
},{
  "city": "MERIDIAN",
  "zip": "83642",
  "loc": {
    "y": 43.614963,
    "x": 116.397538
  },
  "pop": 19033,
  "state": "ID"
},{
  "city": "MELBA",
  "zip": "83641",
  "loc": {
    "y": 43.37842,
    "x": 116.548875
  },
  "pop": 1116,
  "state": "ID"
},{
  "city": "MIDVALE",
  "zip": "83645",
  "loc": {
    "y": 44.441979,
    "x": 116.703838
  },
  "pop": 621,
  "state": "ID"
},{
  "city": "AVERY",
  "zip": "83802",
  "loc": {
    "y": 47.271431,
    "x": 115.866012
  },
  "pop": 113,
  "state": "ID"
},{
  "city": "FOX LAKE",
  "zip": "60020",
  "loc": {
    "y": 42.393701,
    "x": 88.164752
  },
  "pop": 10336,
  "state": "IL"
},{
  "city": "HIGHLAND PARK",
  "zip": "60035",
  "loc": {
    "y": 42.179446,
    "x": 87.805894
  },
  "pop": 29346,
  "state": "IL"
},{
  "city": "NORTHFIELD",
  "zip": "60093",
  "loc": {
    "y": 42.103605,
    "x": 87.752256
  },
  "pop": 19317,
  "state": "IL"
},{
  "city": "ELGIN",
  "zip": "60123",
  "loc": {
    "y": 42.037574,
    "x": 88.318615
  },
  "pop": 43835,
  "state": "IL"
},{
  "city": "SYCAMORE",
  "zip": "60178",
  "loc": {
    "y": 41.991117,
    "x": 88.692809
  },
  "pop": 13512,
  "state": "IL"
},{
  "city": "VILLA PARK",
  "zip": "60181",
  "loc": {
    "y": 41.879899,
    "x": 87.978246
  },
  "pop": 27217,
  "state": "IL"
},{
  "city": "DWIGHT",
  "zip": "60420",
  "loc": {
    "y": 41.088701,
    "x": 88.415884
  },
  "pop": 4956,
  "state": "IL"
},{
  "city": "BRACEVILLE",
  "zip": "60407",
  "loc": {
    "y": 41.228788,
    "x": 88.269042
  },
  "pop": 1535,
  "state": "IL"
},{
  "city": "BOLINGBROOK",
  "zip": "60440",
  "loc": {
    "y": 41.697605,
    "x": 88.087315
  },
  "pop": 23726,
  "state": "IL"
},{
  "city": "MOKENA",
  "zip": "60448",
  "loc": {
    "y": 41.53421,
    "x": 87.891121
  },
  "pop": 12324,
  "state": "IL"
},{
  "city": "MORRIS",
  "zip": "60450",
  "loc": {
    "y": 41.367233,
    "x": 88.417769
  },
  "pop": 13423,
  "state": "IL"
},{
  "city": "SOUTH HOLLAND",
  "zip": "60473",
  "loc": {
    "y": 41.597916,
    "x": 87.593814
  },
  "pop": 24457,
  "state": "IL"
},{
  "city": "BATAVIA",
  "zip": "60510",
  "loc": {
    "y": 41.848165,
    "x": 88.309756
  },
  "pop": 19299,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60618",
  "loc": {
    "y": 41.946401,
    "x": 87.704214
  },
  "pop": 88377,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60632",
  "loc": {
    "y": 41.809274,
    "x": 87.70518
  },
  "pop": 62368,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60639",
  "loc": {
    "y": 41.920162,
    "x": 87.753502
  },
  "pop": 74209,
  "state": "IL"
},{
  "city": "EVERGREEN PARK",
  "zip": "60642",
  "loc": {
    "y": 41.718765,
    "x": 87.701721
  },
  "pop": 24016,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60649",
  "loc": {
    "y": 41.761968,
    "x": 87.570252
  },
  "pop": 54795,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60657",
  "loc": {
    "y": 41.93992,
    "x": 87.652805
  },
  "pop": 65533,
  "state": "IL"
},{
  "city": "BUCKLEY",
  "zip": "60918",
  "loc": {
    "y": 40.601827,
    "x": 88.036092
  },
  "pop": 875,
  "state": "IL"
},{
  "city": "GILMAN",
  "zip": "60938",
  "loc": {
    "y": 40.767987,
    "x": 87.993336
  },
  "pop": 2125,
  "state": "IL"
},{
  "city": "RICHFIELD",
  "zip": "83349",
  "loc": {
    "y": 43.058839,
    "x": 114.15079
  },
  "pop": 789,
  "state": "ID"
},{
  "city": "WENDELL",
  "zip": "83355",
  "loc": {
    "y": 42.757868,
    "x": 114.715391
  },
  "pop": 4400,
  "state": "ID"
},{
  "city": "GIBBONSVILLE",
  "zip": "83463",
  "loc": {
    "y": 45.484608,
    "x": 113.956466
  },
  "pop": 230,
  "state": "ID"
},{
  "city": "ACEQUIA",
  "zip": "83350",
  "loc": {
    "y": 42.621467,
    "x": 113.66699
  },
  "pop": 9761,
  "state": "ID"
},{
  "city": "NORTH FORK",
  "zip": "83466",
  "loc": {
    "y": 45.377605,
    "x": 113.857287
  },
  "pop": 267,
  "state": "ID"
},{
  "city": "SALMON",
  "zip": "83467",
  "loc": {
    "y": 45.157142,
    "x": 113.878356
  },
  "pop": 5159,
  "state": "ID"
},{
  "city": "WHITE BIRD",
  "zip": "83554",
  "loc": {
    "y": 45.752096,
    "x": 116.2889
  },
  "pop": 393,
  "state": "ID"
},{
  "city": "CALDER",
  "zip": "83808",
  "loc": {
    "y": 47.274135,
    "x": 116.222793
  },
  "pop": 77,
  "state": "ID"
},{
  "city": "GLENCOE",
  "zip": "60022",
  "loc": {
    "y": 42.133339,
    "x": 87.761486
  },
  "pop": 8168,
  "state": "IL"
},{
  "city": "MC HENRY",
  "zip": "60050",
  "loc": {
    "y": 42.345527,
    "x": 88.254429
  },
  "pop": 39545,
  "state": "IL"
},{
  "city": "CARPENTERSVILLE",
  "zip": "60110",
  "loc": {
    "y": 42.123004,
    "x": 88.2606
  },
  "pop": 23550,
  "state": "IL"
},{
  "city": "ESMOND",
  "zip": "60129",
  "loc": {
    "y": 42.022458,
    "x": 88.94386
  },
  "pop": 388,
  "state": "IL"
},{
  "city": "MAPLE PARK",
  "zip": "60151",
  "loc": {
    "y": 41.923217,
    "x": 88.59985
  },
  "pop": 4893,
  "state": "IL"
},{
  "city": "EVANSTON",
  "zip": "60203",
  "loc": {
    "y": 42.048487,
    "x": 87.71759
  },
  "pop": 4764,
  "state": "IL"
},{
  "city": "MAZON",
  "zip": "60444",
  "loc": {
    "y": 41.297189,
    "x": 88.409561
  },
  "pop": 3909,
  "state": "IL"
},{
  "city": "CRESTWOOD",
  "zip": "60445",
  "loc": {
    "y": 41.634106,
    "x": 87.732418
  },
  "pop": 26378,
  "state": "IL"
},{
  "city": "OAK LAWN",
  "zip": "60453",
  "loc": {
    "y": 41.714305,
    "x": 87.751564
  },
  "pop": 56039,
  "state": "IL"
},{
  "city": "PALOS PARK",
  "zip": "60464",
  "loc": {
    "y": 41.662352,
    "x": 87.852146
  },
  "pop": 8967,
  "state": "IL"
},{
  "city": "PEOTONE",
  "zip": "60468",
  "loc": {
    "y": 41.33609,
    "x": 87.78968
  },
  "pop": 4936,
  "state": "IL"
},{
  "city": "OAK BROOK",
  "zip": "60521",
  "loc": {
    "y": 41.7891,
    "x": 87.940089
  },
  "pop": 44245,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60602",
  "loc": {
    "y": 41.882883,
    "x": 87.632125
  },
  "pop": 59,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60609",
  "loc": {
    "y": 41.809721,
    "x": 87.653279
  },
  "pop": 89762,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60630",
  "loc": {
    "y": 41.969862,
    "x": 87.760273
  },
  "pop": 48371,
  "state": "IL"
},{
  "city": "BURNHAM",
  "zip": "60633",
  "loc": {
    "y": 41.649791,
    "x": 87.549489
  },
  "pop": 12367,
  "state": "IL"
},{
  "city": "LINCOLNWOOD",
  "zip": "60645",
  "loc": {
    "y": 42.007718,
    "x": 87.6962
  },
  "pop": 43829,
  "state": "IL"
},{
  "city": "AMF OHARE",
  "zip": "60666",
  "loc": {
    "y": 41.9821,
    "x": 87.906803
  },
  "pop": 262,
  "state": "IL"
},{
  "city": "CABERY",
  "zip": "60919",
  "loc": {
    "y": 40.981895,
    "x": 88.192085
  },
  "pop": 510,
  "state": "IL"
},{
  "city": "BONFIELD",
  "zip": "60913",
  "loc": {
    "y": 41.15731,
    "x": 88.061854
  },
  "pop": 1189,
  "state": "IL"
},{
  "city": "COTTONWOOD",
  "zip": "83522",
  "loc": {
    "y": 46.044789,
    "x": 116.373306
  },
  "pop": 1791,
  "state": "ID"
},{
  "city": "IONA",
  "zip": "83427",
  "loc": {
    "y": 43.525946,
    "x": 111.928356
  },
  "pop": 1491,
  "state": "ID"
},{
  "city": "SOUTH GATE PLAZA",
  "zip": "83501",
  "loc": {
    "y": 46.389457,
    "x": 116.987714
  },
  "pop": 29650,
  "state": "ID"
},{
  "city": "HORSESHOE BEND",
  "zip": "83629",
  "loc": {
    "y": 43.922882,
    "x": 116.180898
  },
  "pop": 1111,
  "state": "ID"
},{
  "city": "LAPWAI",
  "zip": "83540",
  "loc": {
    "y": 46.412403,
    "x": 116.790225
  },
  "pop": 1784,
  "state": "ID"
},{
  "city": "KING HILL",
  "zip": "83633",
  "loc": {
    "y": 42.936104,
    "x": 115.269098
  },
  "pop": 357,
  "state": "ID"
},{
  "city": "MOUNTAIN HOME",
  "zip": "83647",
  "loc": {
    "y": 43.139223,
    "x": 115.696334
  },
  "pop": 12235,
  "state": "ID"
},{
  "city": "LOWMAN",
  "zip": "83637",
  "loc": {
    "y": 44.110616,
    "x": 115.528488
  },
  "pop": 63,
  "state": "ID"
},{
  "city": "YELLOW PINE",
  "zip": "83677",
  "loc": {
    "y": 44.969809,
    "x": 115.49634
  },
  "pop": 68,
  "state": "ID"
},{
  "city": "MIDDLETON",
  "zip": "83644",
  "loc": {
    "y": 43.719052,
    "x": 116.61122
  },
  "pop": 3898,
  "state": "ID"
},{
  "city": "CATALDO",
  "zip": "83810",
  "loc": {
    "y": 47.552169,
    "x": 116.443138
  },
  "pop": 982,
  "state": "ID"
},{
  "city": "NEW PLYMOUTH",
  "zip": "83655",
  "loc": {
    "y": 43.959021,
    "x": 116.804818
  },
  "pop": 3165,
  "state": "ID"
},{
  "city": "VERNON HILLS",
  "zip": "60061",
  "loc": {
    "y": 42.228753,
    "x": 87.971852
  },
  "pop": 19713,
  "state": "IL"
},{
  "city": "PAYETTE",
  "zip": "83661",
  "loc": {
    "y": 44.07818,
    "x": 116.920277
  },
  "pop": 7913,
  "state": "ID"
},{
  "city": "PALATINE",
  "zip": "60074",
  "loc": {
    "y": 42.145775,
    "x": 88.022998
  },
  "pop": 11712,
  "state": "IL"
},{
  "city": "BOISE",
  "zip": "83712",
  "loc": {
    "y": 43.602311,
    "x": 116.164924
  },
  "pop": 7572,
  "state": "ID"
},{
  "city": "WINTHROP HARBOR",
  "zip": "60096",
  "loc": {
    "y": 42.479269,
    "x": 87.831788
  },
  "pop": 7433,
  "state": "IL"
},{
  "city": "MOSCOW",
  "zip": "83843",
  "loc": {
    "y": 46.730921,
    "x": 116.989683
  },
  "pop": 21714,
  "state": "ID"
},{
  "city": "HUNTLEY",
  "zip": "60142",
  "loc": {
    "y": 42.175555,
    "x": 88.426848
  },
  "pop": 4351,
  "state": "IL"
},{
  "city": "GAGES LAKE",
  "zip": "60030",
  "loc": {
    "y": 42.34848,
    "x": 88.037789
  },
  "pop": 8038,
  "state": "IL"
},{
  "city": "HINES",
  "zip": "60141",
  "loc": {
    "y": 41.862262,
    "x": 87.835542
  },
  "pop": 200,
  "state": "IL"
},{
  "city": "LAKE FOREST",
  "zip": "60045",
  "loc": {
    "y": 42.237398,
    "x": 87.848154
  },
  "pop": 17948,
  "state": "IL"
},{
  "city": "BROADVIEW",
  "zip": "60153",
  "loc": {
    "y": 41.874857,
    "x": 87.847675
  },
  "pop": 37099,
  "state": "IL"
},{
  "city": "MOUNT PROSPECT",
  "zip": "60056",
  "loc": {
    "y": 42.062392,
    "x": 87.937667
  },
  "pop": 54459,
  "state": "IL"
},{
  "city": "STONE PARK",
  "zip": "60165",
  "loc": {
    "y": 41.903005,
    "x": 87.881053
  },
  "pop": 4387,
  "state": "IL"
},{
  "city": "KENILWORTH",
  "zip": "60043",
  "loc": {
    "y": 42.088444,
    "x": 87.716463
  },
  "pop": 2509,
  "state": "IL"
},{
  "city": "HOFFMAN ESTATES",
  "zip": "60195",
  "loc": {
    "y": 42.073865,
    "x": 88.108709
  },
  "pop": 29236,
  "state": "IL"
},{
  "city": "TENSED",
  "zip": "83870",
  "loc": {
    "y": 47.170735,
    "x": 116.902716
  },
  "pop": 332,
  "state": "ID"
},{
  "city": "OAK PARK",
  "zip": "60304",
  "loc": {
    "y": 41.872458,
    "x": 87.787712
  },
  "pop": 18677,
  "state": "IL"
},{
  "city": "GILBERTS",
  "zip": "60136",
  "loc": {
    "y": 42.098377,
    "x": 88.369089
  },
  "pop": 1212,
  "state": "IL"
},{
  "city": "ELWOOD",
  "zip": "60421",
  "loc": {
    "y": 41.426018,
    "x": 88.08642
  },
  "pop": 2700,
  "state": "IL"
},{
  "city": "SCHAUMBURG",
  "zip": "60193",
  "loc": {
    "y": 42.014432,
    "x": 88.093481
  },
  "pop": 39438,
  "state": "IL"
},{
  "city": "FLOSSMOOR",
  "zip": "60422",
  "loc": {
    "y": 41.540574,
    "x": 87.683737
  },
  "pop": 8627,
  "state": "IL"
},{
  "city": "OAK PARK",
  "zip": "60302",
  "loc": {
    "y": 41.892471,
    "x": 87.789543
  },
  "pop": 33298,
  "state": "IL"
},{
  "city": "WOOD DALE",
  "zip": "60191",
  "loc": {
    "y": 41.960171,
    "x": 87.980971
  },
  "pop": 13750,
  "state": "IL"
},{
  "city": "RIVER FOREST",
  "zip": "60305",
  "loc": {
    "y": 41.895064,
    "x": 87.8159
  },
  "pop": 11669,
  "state": "IL"
},{
  "city": "POSEN",
  "zip": "60469",
  "loc": {
    "y": 41.62766,
    "x": 87.687213
  },
  "pop": 4158,
  "state": "IL"
},{
  "city": "THORNTON",
  "zip": "60476",
  "loc": {
    "y": 41.572726,
    "x": 87.607823
  },
  "pop": 2678,
  "state": "IL"
},{
  "city": "CALUMET CITY",
  "zip": "60409",
  "loc": {
    "y": 41.615257,
    "x": 87.548328
  },
  "pop": 36065,
  "state": "IL"
},{
  "city": "AURORA",
  "zip": "60506",
  "loc": {
    "y": 41.766414,
    "x": 88.344582
  },
  "pop": 42636,
  "state": "IL"
},{
  "city": "FRANKFORT",
  "zip": "60423",
  "loc": {
    "y": 41.509361,
    "x": 87.824774
  },
  "pop": 15682,
  "state": "IL"
},{
  "city": "AURORA",
  "zip": "60504",
  "loc": {
    "y": 41.752269,
    "x": 88.245281
  },
  "pop": 15334,
  "state": "IL"
},{
  "city": "HAZEL CREST",
  "zip": "60429",
  "loc": {
    "y": 41.573803,
    "x": 87.684885
  },
  "pop": 14987,
  "state": "IL"
},{
  "city": "BROOKFIELD",
  "zip": "60513",
  "loc": {
    "y": 41.82167,
    "x": 87.849246
  },
  "pop": 18859,
  "state": "IL"
},{
  "city": "JOLIET",
  "zip": "60432",
  "loc": {
    "y": 41.537758,
    "x": 88.057178
  },
  "pop": 20199,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60601",
  "loc": {
    "y": 41.885847,
    "x": 87.618123
  },
  "pop": 4585,
  "state": "IL"
},{
  "city": "MATTESON",
  "zip": "60443",
  "loc": {
    "y": 41.510183,
    "x": 87.740648
  },
  "pop": 13624,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60603",
  "loc": {
    "y": 41.87985,
    "x": 87.628499
  },
  "pop": 0,
  "state": "IL"
},{
  "city": "UNIVERSITY PARK",
  "zip": "60466",
  "loc": {
    "y": 41.474064,
    "x": 87.682867
  },
  "pop": 31607,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60611",
  "loc": {
    "y": 41.897105,
    "x": 87.622285
  },
  "pop": 22264,
  "state": "IL"
},{
  "city": "RANSOM",
  "zip": "60470",
  "loc": {
    "y": 41.153048,
    "x": 88.650214
  },
  "pop": 690,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60622",
  "loc": {
    "y": 41.901923,
    "x": 87.67785
  },
  "pop": 74468,
  "state": "IL"
},{
  "city": "STEGER",
  "zip": "60475",
  "loc": {
    "y": 41.468608,
    "x": 87.638585
  },
  "pop": 8531,
  "state": "IL"
},{
  "city": "RIVERDALE",
  "zip": "60627",
  "loc": {
    "y": 41.645918,
    "x": 87.618213
  },
  "pop": 24996,
  "state": "IL"
},{
  "city": "SANDWICH",
  "zip": "60548",
  "loc": {
    "y": 41.635286,
    "x": 88.639303
  },
  "pop": 10125,
  "state": "IL"
},{
  "city": "BEDFORD PARK",
  "zip": "60638",
  "loc": {
    "y": 41.789703,
    "x": 87.771927
  },
  "pop": 53145,
  "state": "IL"
},{
  "city": "SERENA",
  "zip": "60549",
  "loc": {
    "y": 41.499481,
    "x": 88.75089
  },
  "pop": 830,
  "state": "IL"
},{
  "city": "LINCOLNWOOD",
  "zip": "60646",
  "loc": {
    "y": 41.996414,
    "x": 87.759172
  },
  "pop": 32075,
  "state": "IL"
},{
  "city": "NAPERVILLE",
  "zip": "60563",
  "loc": {
    "y": 41.78955,
    "x": 88.16901
  },
  "pop": 26348,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60647",
  "loc": {
    "y": 41.920903,
    "x": 87.704322
  },
  "pop": 95971,
  "state": "IL"
},{
  "city": "NAPERVILLE",
  "zip": "60565",
  "loc": {
    "y": 41.732833,
    "x": 88.128245
  },
  "pop": 32693,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60654",
  "loc": {
    "y": 41.888533,
    "x": 87.635292
  },
  "pop": 0,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60628",
  "loc": {
    "y": 41.693443,
    "x": 87.624277
  },
  "pop": 94317,
  "state": "IL"
},{
  "city": "KANKAKEE",
  "zip": "60901",
  "loc": {
    "y": 41.116582,
    "x": 87.869607
  },
  "pop": 35952,
  "state": "IL"
},{
  "city": "CICERO",
  "zip": "60650",
  "loc": {
    "y": 41.84776,
    "x": 87.76008
  },
  "pop": 67670,
  "state": "IL"
},{
  "city": "GIBSON CITY",
  "zip": "60936",
  "loc": {
    "y": 40.465932,
    "x": 88.360873
  },
  "pop": 4608,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60660",
  "loc": {
    "y": 41.990879,
    "x": 87.662856
  },
  "pop": 45106,
  "state": "IL"
},{
  "city": "DONOVAN",
  "zip": "60931",
  "loc": {
    "y": 40.889074,
    "x": 87.604635
  },
  "pop": 613,
  "state": "IL"
},{
  "city": "OAKLEY",
  "zip": "83346",
  "loc": {
    "y": 42.347561,
    "x": 113.906945
  },
  "pop": 2056,
  "state": "ID"
},{
  "city": "MURTAUGH",
  "zip": "83344",
  "loc": {
    "y": 42.477597,
    "x": 114.160641
  },
  "pop": 1019,
  "state": "ID"
},{
  "city": "MENAN",
  "zip": "83434",
  "loc": {
    "y": 43.726576,
    "x": 111.983702
  },
  "pop": 1789,
  "state": "ID"
},{
  "city": "DRIGGS",
  "zip": "83422",
  "loc": {
    "y": 43.726291,
    "x": 111.119896
  },
  "pop": 1495,
  "state": "ID"
},{
  "city": "SHOUP",
  "zip": "83469",
  "loc": {
    "y": 45.18514,
    "x": 114.405987
  },
  "pop": 67,
  "state": "ID"
},{
  "city": "CLEARWATER",
  "zip": "83539",
  "loc": {
    "y": 46.125859,
    "x": 115.92396
  },
  "pop": 2704,
  "state": "ID"
},{
  "city": "FRUITLAND",
  "zip": "83619",
  "loc": {
    "y": 44.002658,
    "x": 116.914259
  },
  "pop": 4611,
  "state": "ID"
},{
  "city": "MC CALL",
  "zip": "83638",
  "loc": {
    "y": 44.891784,
    "x": 116.078873
  },
  "pop": 3681,
  "state": "ID"
},{
  "city": "NAMPA",
  "zip": "83686",
  "loc": {
    "y": 43.544125,
    "x": 116.565962
  },
  "pop": 17886,
  "state": "ID"
},{
  "city": "WEISER",
  "zip": "83672",
  "loc": {
    "y": 44.25222,
    "x": 116.96507
  },
  "pop": 6967,
  "state": "ID"
},{
  "city": "PINEHURST",
  "zip": "83850",
  "loc": {
    "y": 47.501823,
    "x": 116.264679
  },
  "pop": 371,
  "state": "ID"
},{
  "city": "PLUMMER",
  "zip": "83851",
  "loc": {
    "y": 47.327782,
    "x": 116.866161
  },
  "pop": 1439,
  "state": "ID"
},{
  "city": "POTLATCH",
  "zip": "83855",
  "loc": {
    "y": 46.944833,
    "x": 116.914101
  },
  "pop": 1836,
  "state": "ID"
},{
  "city": "ARLINGTON HEIGHT",
  "zip": "60004",
  "loc": {
    "y": 42.111619,
    "x": 87.979099
  },
  "pop": 52947,
  "state": "IL"
},{
  "city": "NORTHBROOK",
  "zip": "60062",
  "loc": {
    "y": 42.125443,
    "x": 87.846535
  },
  "pop": 40216,
  "state": "IL"
},{
  "city": "WAUCONDA",
  "zip": "60084",
  "loc": {
    "y": 42.263553,
    "x": 88.133284
  },
  "pop": 11142,
  "state": "IL"
},{
  "city": "ELGIN",
  "zip": "60120",
  "loc": {
    "y": 42.038356,
    "x": 88.260631
  },
  "pop": 42848,
  "state": "IL"
},{
  "city": "ELBURN",
  "zip": "60119",
  "loc": {
    "y": 41.882405,
    "x": 88.461106
  },
  "pop": 6271,
  "state": "IL"
},{
  "city": "HAMPSHIRE",
  "zip": "60140",
  "loc": {
    "y": 42.080748,
    "x": 88.517033
  },
  "pop": 6255,
  "state": "IL"
},{
  "city": "OAK PARK",
  "zip": "60301",
  "loc": {
    "y": 41.888601,
    "x": 87.798598
  },
  "pop": 1673,
  "state": "IL"
},{
  "city": "SAUK VILLAGE",
  "zip": "60411",
  "loc": {
    "y": 41.506202,
    "x": 87.613209
  },
  "pop": 60738,
  "state": "IL"
},{
  "city": "DOLTON",
  "zip": "60419",
  "loc": {
    "y": 41.625723,
    "x": 87.597952
  },
  "pop": 22705,
  "state": "IL"
},{
  "city": "COUNTRY CLUB HIL",
  "zip": "60478",
  "loc": {
    "y": 41.559773,
    "x": 87.718452
  },
  "pop": 16225,
  "state": "IL"
},{
  "city": "LISLE",
  "zip": "60532",
  "loc": {
    "y": 41.786174,
    "x": 88.0879
  },
  "pop": 24914,
  "state": "IL"
},{
  "city": "PLAINFIELD",
  "zip": "60544",
  "loc": {
    "y": 41.600884,
    "x": 88.199391
  },
  "pop": 10416,
  "state": "IL"
},{
  "city": "LINCOLNWOOD",
  "zip": "60659",
  "loc": {
    "y": 41.991687,
    "x": 87.700823
  },
  "pop": 35461,
  "state": "IL"
},{
  "city": "TETONIA",
  "zip": "83452",
  "loc": {
    "y": 43.843713,
    "x": 111.186997
  },
  "pop": 820,
  "state": "ID"
},{
  "city": "SPENCER",
  "zip": "83446",
  "loc": {
    "y": 44.281444,
    "x": 112.098821
  },
  "pop": 112,
  "state": "ID"
},{
  "city": "JULIAETTA",
  "zip": "83535",
  "loc": {
    "y": 46.575376,
    "x": 116.718849
  },
  "pop": 1014,
  "state": "ID"
},{
  "city": "MOUNTAIN HOME A",
  "zip": "83648",
  "loc": {
    "y": 43.049315,
    "x": 115.873609
  },
  "pop": 6304,
  "state": "ID"
},{
  "city": "NEW MEADOWS",
  "zip": "83654",
  "loc": {
    "y": 44.993969,
    "x": 116.287438
  },
  "pop": 1179,
  "state": "ID"
},{
  "city": "CLARK FORK",
  "zip": "83811",
  "loc": {
    "y": 48.140457,
    "x": 116.169865
  },
  "pop": 971,
  "state": "ID"
},{
  "city": "BOISE",
  "zip": "83706",
  "loc": {
    "y": 43.588495,
    "x": 116.191006
  },
  "pop": 24826,
  "state": "ID"
},{
  "city": "DEARY",
  "zip": "83823",
  "loc": {
    "y": 46.806062,
    "x": 116.523782
  },
  "pop": 1483,
  "state": "ID"
},{
  "city": "MOYIE SPRINGS",
  "zip": "83845",
  "loc": {
    "y": 48.746434,
    "x": 116.179603
  },
  "pop": 1496,
  "state": "ID"
},{
  "city": "TROY",
  "zip": "83871",
  "loc": {
    "y": 46.742648,
    "x": 116.768105
  },
  "pop": 1481,
  "state": "ID"
},{
  "city": "VIOLA",
  "zip": "83872",
  "loc": {
    "y": 46.858293,
    "x": 116.97319
  },
  "pop": 519,
  "state": "ID"
},{
  "city": "ROLLING MEADOWS",
  "zip": "60008",
  "loc": {
    "y": 42.072979,
    "x": 88.019075
  },
  "pop": 18672,
  "state": "IL"
},{
  "city": "GLENVIEW",
  "zip": "60025",
  "loc": {
    "y": 42.075785,
    "x": 87.822299
  },
  "pop": 45038,
  "state": "IL"
},{
  "city": "LONG GROVE",
  "zip": "60047",
  "loc": {
    "y": 42.196721,
    "x": 88.070299
  },
  "pop": 26893,
  "state": "IL"
},{
  "city": "LAKE IN THE HILL",
  "zip": "60102",
  "loc": {
    "y": 42.170923,
    "x": 88.301429
  },
  "pop": 22082,
  "state": "IL"
},{
  "city": "WOODSTOCK",
  "zip": "60098",
  "loc": {
    "y": 42.319775,
    "x": 88.447671
  },
  "pop": 21770,
  "state": "IL"
},{
  "city": "ITASCA",
  "zip": "60143",
  "loc": {
    "y": 41.971967,
    "x": 88.020247
  },
  "pop": 8650,
  "state": "IL"
},{
  "city": "SCHAUMBURG",
  "zip": "60173",
  "loc": {
    "y": 42.05807,
    "x": 88.048189
  },
  "pop": 9314,
  "state": "IL"
},{
  "city": "SAINT CHARLES",
  "zip": "60175",
  "loc": {
    "y": 41.947842,
    "x": 88.391799
  },
  "pop": 11851,
  "state": "IL"
},{
  "city": "UNION",
  "zip": "60180",
  "loc": {
    "y": 42.210274,
    "x": 88.528295
  },
  "pop": 1450,
  "state": "IL"
},{
  "city": "BRAIDWOOD",
  "zip": "60408",
  "loc": {
    "y": 41.26574,
    "x": 88.223124
  },
  "pop": 3814,
  "state": "IL"
},{
  "city": "BLUE ISLAND",
  "zip": "60406",
  "loc": {
    "y": 41.658187,
    "x": 87.679465
  },
  "pop": 23305,
  "state": "IL"
},{
  "city": "DOWNERS GROVE",
  "zip": "60516",
  "loc": {
    "y": 41.760157,
    "x": 88.015873
  },
  "pop": 35756,
  "state": "IL"
},{
  "city": "SHABBONA",
  "zip": "60550",
  "loc": {
    "y": 41.763846,
    "x": 88.875249
  },
  "pop": 1180,
  "state": "IL"
},{
  "city": "WATERMAN",
  "zip": "60556",
  "loc": {
    "y": 41.750365,
    "x": 88.775381
  },
  "pop": 1914,
  "state": "IL"
},{
  "city": "NAPERVILLE",
  "zip": "60564",
  "loc": {
    "y": 41.704022,
    "x": 88.195248
  },
  "pop": 8549,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60612",
  "loc": {
    "y": 41.880483,
    "x": 87.687333
  },
  "pop": 44363,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60620",
  "loc": {
    "y": 41.741119,
    "x": 87.654251
  },
  "pop": 92005,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60623",
  "loc": {
    "y": 41.849015,
    "x": 87.7157
  },
  "pop": 112047,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60604",
  "loc": {
    "y": 41.87845,
    "x": 87.632999
  },
  "pop": 3,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60648",
  "loc": {
    "y": 42.031101,
    "x": 87.81636
  },
  "pop": 30924,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60652",
  "loc": {
    "y": 41.745393,
    "x": 87.713516
  },
  "pop": 36337,
  "state": "IL"
},{
  "city": "HARWOOD HEIGHTS",
  "zip": "60656",
  "loc": {
    "y": 41.971844,
    "x": 87.819981
  },
  "pop": 43597,
  "state": "IL"
},{
  "city": "SAINT ANTHONY",
  "zip": "83445",
  "loc": {
    "y": 44.274499,
    "x": 111.523156
  },
  "pop": 747,
  "state": "ID"
},{
  "city": "TERRETON",
  "zip": "83450",
  "loc": {
    "y": 43.858635,
    "x": 112.420041
  },
  "pop": 1537,
  "state": "ID"
},{
  "city": "LUCILE",
  "zip": "83542",
  "loc": {
    "y": 45.556963,
    "x": 116.266899
  },
  "pop": 216,
  "state": "ID"
},{
  "city": "WEIPPE",
  "zip": "83553",
  "loc": {
    "y": 46.38069,
    "x": 115.938593
  },
  "pop": 1193,
  "state": "ID"
},{
  "city": "GRAND VIEW",
  "zip": "83624",
  "loc": {
    "y": 42.810101,
    "x": 116.08187
  },
  "pop": 1449,
  "state": "ID"
},{
  "city": "RIRIE",
  "zip": "83443",
  "loc": {
    "y": 43.631961,
    "x": 111.760692
  },
  "pop": 1749,
  "state": "ID"
},{
  "city": "STAR",
  "zip": "83669",
  "loc": {
    "y": 43.701296,
    "x": 116.496735
  },
  "pop": 1579,
  "state": "ID"
},{
  "city": "ATHOL",
  "zip": "83801",
  "loc": {
    "y": 47.92674,
    "x": 116.731821
  },
  "pop": 2520,
  "state": "ID"
},{
  "city": "COEUR D ALENE",
  "zip": "83814",
  "loc": {
    "y": 47.692841,
    "x": 116.784976
  },
  "pop": 33589,
  "state": "ID"
},{
  "city": "COOLIN",
  "zip": "83821",
  "loc": {
    "y": 48.522754,
    "x": 116.840823
  },
  "pop": 194,
  "state": "ID"
},{
  "city": "FERNWOOD",
  "zip": "83830",
  "loc": {
    "y": 47.116027,
    "x": 116.383126
  },
  "pop": 372,
  "state": "ID"
},{
  "city": "HAYDEN LAKE",
  "zip": "83835",
  "loc": {
    "y": 47.773853,
    "x": 116.776821
  },
  "pop": 9287,
  "state": "ID"
},{
  "city": "NORDMAN",
  "zip": "83848",
  "loc": {
    "y": 48.566944,
    "x": 116.92126
  },
  "pop": 446,
  "state": "ID"
},{
  "city": "POST FALLS",
  "zip": "83854",
  "loc": {
    "y": 47.720475,
    "x": 116.935349
  },
  "pop": 14952,
  "state": "ID"
},{
  "city": "HOPE",
  "zip": "83836",
  "loc": {
    "y": 48.244402,
    "x": 116.279504
  },
  "pop": 687,
  "state": "ID"
},{
  "city": "SAINT MARIES",
  "zip": "83861",
  "loc": {
    "y": 47.297727,
    "x": 116.568107
  },
  "pop": 5894,
  "state": "ID"
},{
  "city": "GURNEE",
  "zip": "60031",
  "loc": {
    "y": 42.366906,
    "x": 87.945232
  },
  "pop": 32114,
  "state": "IL"
},{
  "city": "MC GAW PARK",
  "zip": "60085",
  "loc": {
    "y": 42.361882,
    "x": 87.852585
  },
  "pop": 55778,
  "state": "IL"
},{
  "city": "SHOSHONE",
  "zip": "83352",
  "loc": {
    "y": 42.947353,
    "x": 114.382176
  },
  "pop": 2341,
  "state": "ID"
},{
  "city": "KINGSTON",
  "zip": "60145",
  "loc": {
    "y": 42.105654,
    "x": 88.769496
  },
  "pop": 1555,
  "state": "IL"
},{
  "city": "MEDINAH",
  "zip": "60157",
  "loc": {
    "y": 41.970545,
    "x": 88.057507
  },
  "pop": 3110,
  "state": "IL"
},{
  "city": "RIVER GROVE",
  "zip": "60171",
  "loc": {
    "y": 41.927886,
    "x": 87.838707
  },
  "pop": 9949,
  "state": "IL"
},{
  "city": "ROSELLE",
  "zip": "60172",
  "loc": {
    "y": 41.979834,
    "x": 88.085699
  },
  "pop": 22626,
  "state": "IL"
},{
  "city": "EVANSTON",
  "zip": "60201",
  "loc": {
    "y": 42.054551,
    "x": 87.694331
  },
  "pop": 41692,
  "state": "IL"
},{
  "city": "CRETE",
  "zip": "60417",
  "loc": {
    "y": 41.438952,
    "x": 87.602738
  },
  "pop": 14372,
  "state": "IL"
},{
  "city": "MANHATTAN",
  "zip": "60442",
  "loc": {
    "y": 41.428883,
    "x": 87.977133
  },
  "pop": 3657,
  "state": "IL"
},{
  "city": "OAK FOREST",
  "zip": "60452",
  "loc": {
    "y": 41.607684,
    "x": 87.754219
  },
  "pop": 26772,
  "state": "IL"
},{
  "city": "BURBANK",
  "zip": "60459",
  "loc": {
    "y": 41.744704,
    "x": 87.769907
  },
  "pop": 27870,
  "state": "IL"
},{
  "city": "ORLAND PARK",
  "zip": "60462",
  "loc": {
    "y": 41.619378,
    "x": 87.84225
  },
  "pop": 42564,
  "state": "IL"
},{
  "city": "AURORA",
  "zip": "60505",
  "loc": {
    "y": 41.758209,
    "x": 88.297139
  },
  "pop": 51422,
  "state": "IL"
},{
  "city": "NEWARK",
  "zip": "60541",
  "loc": {
    "y": 41.526679,
    "x": 88.527006
  },
  "pop": 3016,
  "state": "IL"
},{
  "city": "WESTERN SPRINGS",
  "zip": "60558",
  "loc": {
    "y": 41.804864,
    "x": 87.899485
  },
  "pop": 11862,
  "state": "IL"
},{
  "city": "YORKVILLE",
  "zip": "60560",
  "loc": {
    "y": 41.638725,
    "x": 88.443794
  },
  "pop": 8161,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60606",
  "loc": {
    "y": 41.886822,
    "x": 87.638648
  },
  "pop": 58,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60636",
  "loc": {
    "y": 41.775989,
    "x": 87.667368
  },
  "pop": 58048,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60644",
  "loc": {
    "y": 41.882913,
    "x": 87.758163
  },
  "pop": 57376,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60641",
  "loc": {
    "y": 41.945333,
    "x": 87.747376
  },
  "pop": 59870,
  "state": "IL"
},{
  "city": "GRANT PARK",
  "zip": "60940",
  "loc": {
    "y": 41.247677,
    "x": 87.647992
  },
  "pop": 3009,
  "state": "IL"
},{
  "city": "HAMER",
  "zip": "83425",
  "loc": {
    "y": 43.930751,
    "x": 112.187189
  },
  "pop": 396,
  "state": "ID"
},{
  "city": "CULDESAC",
  "zip": "83524",
  "loc": {
    "y": 46.378012,
    "x": 116.653579
  },
  "pop": 1161,
  "state": "ID"
},{
  "city": "GRANGEVILLE",
  "zip": "83530",
  "loc": {
    "y": 45.927239,
    "x": 116.107639
  },
  "pop": 4791,
  "state": "ID"
},{
  "city": "OROFINO",
  "zip": "83544",
  "loc": {
    "y": 46.495197,
    "x": 116.240417
  },
  "pop": 5738,
  "state": "ID"
},{
  "city": "PECK",
  "zip": "83545",
  "loc": {
    "y": 46.480661,
    "x": 116.411394
  },
  "pop": 295,
  "state": "ID"
},{
  "city": "POLLOCK",
  "zip": "83547",
  "loc": {
    "y": 45.306754,
    "x": 116.351742
  },
  "pop": 274,
  "state": "ID"
},{
  "city": "DONNELLY",
  "zip": "83615",
  "loc": {
    "y": 44.74937,
    "x": 116.08578
  },
  "pop": 681,
  "state": "ID"
},{
  "city": "CAMBRIDGE",
  "zip": "83610",
  "loc": {
    "y": 44.59216,
    "x": 116.675717
  },
  "pop": 962,
  "state": "ID"
},{
  "city": "OREANA",
  "zip": "83650",
  "loc": {
    "y": 43.207296,
    "x": 116.605379
  },
  "pop": 1156,
  "state": "ID"
},{
  "city": "GENESEE",
  "zip": "83832",
  "loc": {
    "y": 46.571394,
    "x": 116.928991
  },
  "pop": 1241,
  "state": "ID"
},{
  "city": "KELLOGG",
  "zip": "83837",
  "loc": {
    "y": 47.543069,
    "x": 116.125281
  },
  "pop": 4640,
  "state": "ID"
},{
  "city": "ROSEMONT",
  "zip": "60018",
  "loc": {
    "y": 42.015116,
    "x": 87.897882
  },
  "pop": 28884,
  "state": "IL"
},{
  "city": "PALATINE",
  "zip": "60067",
  "loc": {
    "y": 42.113888,
    "x": 88.042937
  },
  "pop": 57281,
  "state": "IL"
},{
  "city": "SKOKIE",
  "zip": "60076",
  "loc": {
    "y": 42.036168,
    "x": 87.732828
  },
  "pop": 31589,
  "state": "IL"
},{
  "city": "RINGWOOD",
  "zip": "60072",
  "loc": {
    "y": 42.380427,
    "x": 88.297073
  },
  "pop": 1926,
  "state": "IL"
},{
  "city": "ZION",
  "zip": "60099",
  "loc": {
    "y": 42.444249,
    "x": 87.838925
  },
  "pop": 24944,
  "state": "IL"
},{
  "city": "KIRKLAND",
  "zip": "60146",
  "loc": {
    "y": 42.101406,
    "x": 88.868522
  },
  "pop": 1930,
  "state": "IL"
},{
  "city": "ARGONNE",
  "zip": "60439",
  "loc": {
    "y": 41.695076,
    "x": 88.023558
  },
  "pop": 31018,
  "state": "IL"
},{
  "city": "BRIDGEVIEW",
  "zip": "60455",
  "loc": {
    "y": 41.743128,
    "x": 87.806572
  },
  "pop": 14065,
  "state": "IL"
},{
  "city": "ODELL",
  "zip": "60460",
  "loc": {
    "y": 41.023773,
    "x": 88.515641
  },
  "pop": 2795,
  "state": "IL"
},{
  "city": "ROBBINS",
  "zip": "60472",
  "loc": {
    "y": 41.642289,
    "x": 87.708909
  },
  "pop": 7132,
  "state": "IL"
},{
  "city": "VERONA",
  "zip": "60479",
  "loc": {
    "y": 41.250094,
    "x": 88.51701
  },
  "pop": 769,
  "state": "IL"
},{
  "city": "CUSTER PARK",
  "zip": "60481",
  "loc": {
    "y": 41.298063,
    "x": 88.130083
  },
  "pop": 11034,
  "state": "IL"
},{
  "city": "HODGKINS",
  "zip": "60525",
  "loc": {
    "y": 41.801345,
    "x": 87.875252
  },
  "pop": 45424,
  "state": "IL"
},{
  "city": "NORTH RIVERSIDE",
  "zip": "60546",
  "loc": {
    "y": 41.837367,
    "x": 87.821356
  },
  "pop": 14899,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60637",
  "loc": {
    "y": 41.781312,
    "x": 87.605097
  },
  "pop": 59637,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60661",
  "loc": {
    "y": 41.881351,
    "x": 87.642969
  },
  "pop": 2031,
  "state": "IL"
},{
  "city": "CISSNA PARK",
  "zip": "60924",
  "loc": {
    "y": 40.585814,
    "x": 87.87588
  },
  "pop": 2282,
  "state": "IL"
},{
  "city": "ASHTON",
  "zip": "83420",
  "loc": {
    "y": 43.988078,
    "x": 111.619526
  },
  "pop": 8639,
  "state": "ID"
},{
  "city": "NEWDALE",
  "zip": "83436",
  "loc": {
    "y": 43.888078,
    "x": 111.604192
  },
  "pop": 430,
  "state": "ID"
},{
  "city": "GARDEN VALLEY",
  "zip": "83622",
  "loc": {
    "y": 44.090932,
    "x": 115.824311
  },
  "pop": 513,
  "state": "ID"
},{
  "city": "MARSING",
  "zip": "83639",
  "loc": {
    "y": 43.539866,
    "x": 116.823968
  },
  "pop": 2281,
  "state": "ID"
},{
  "city": "CLARKIA",
  "zip": "83812",
  "loc": {
    "y": 47.044477,
    "x": 116.277408
  },
  "pop": 85,
  "state": "ID"
},{
  "city": "OLD TOWN",
  "zip": "83822",
  "loc": {
    "y": 48.187988,
    "x": 116.927382
  },
  "pop": 2229,
  "state": "ID"
},{
  "city": "HARVARD",
  "zip": "83834",
  "loc": {
    "y": 46.937647,
    "x": 116.702524
  },
  "pop": 226,
  "state": "ID"
},{
  "city": "PORTHILL",
  "zip": "83853",
  "loc": {
    "y": 48.992037,
    "x": 116.477517
  },
  "pop": 61,
  "state": "ID"
},{
  "city": "CARY",
  "zip": "60013",
  "loc": {
    "y": 42.219599,
    "x": 88.242594
  },
  "pop": 17521,
  "state": "IL"
},{
  "city": "ISLAND LAKE",
  "zip": "60042",
  "loc": {
    "y": 42.274186,
    "x": 88.19263
  },
  "pop": 3919,
  "state": "IL"
},{
  "city": "SANDPOINT",
  "zip": "83864",
  "loc": {
    "y": 48.311989,
    "x": 116.533249
  },
  "pop": 12421,
  "state": "ID"
},{
  "city": "SPIRIT LAKE",
  "zip": "83869",
  "loc": {
    "y": 47.965652,
    "x": 116.868046
  },
  "pop": 860,
  "state": "ID"
},{
  "city": "LAKE BLUFF",
  "zip": "60044",
  "loc": {
    "y": 42.28196,
    "x": 87.85595
  },
  "pop": 8031,
  "state": "IL"
},{
  "city": "PARK RIDGE",
  "zip": "60068",
  "loc": {
    "y": 42.012171,
    "x": 87.841675
  },
  "pop": 37450,
  "state": "IL"
},{
  "city": "GLEN ELLYN",
  "zip": "60137",
  "loc": {
    "y": 41.866112,
    "x": 88.064774
  },
  "pop": 35643,
  "state": "IL"
},{
  "city": "JOLIET",
  "zip": "60431",
  "loc": {
    "y": 41.527154,
    "x": 88.08241
  },
  "pop": 512,
  "state": "IL"
},{
  "city": "ROMEOVILLE",
  "zip": "60441",
  "loc": {
    "y": 41.613481,
    "x": 88.025581
  },
  "pop": 55268,
  "state": "IL"
},{
  "city": "WORTH",
  "zip": "60482",
  "loc": {
    "y": 41.689498,
    "x": 87.786272
  },
  "pop": 13081,
  "state": "IL"
},{
  "city": "DOWNERS GROVE",
  "zip": "60515",
  "loc": {
    "y": 41.803428,
    "x": 88.013753
  },
  "pop": 26971,
  "state": "IL"
},{
  "city": "MONTGOMERY",
  "zip": "60538",
  "loc": {
    "y": 41.717742,
    "x": 88.331965
  },
  "pop": 14146,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60617",
  "loc": {
    "y": 41.725743,
    "x": 87.556012
  },
  "pop": 98612,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60610",
  "loc": {
    "y": 41.903294,
    "x": 87.633565
  },
  "pop": 40840,
  "state": "IL"
},{
  "city": "CHICAGO",
  "zip": "60640",
  "loc": {
    "y": 41.971928,
    "x": 87.662405
  },
  "pop": 76829,
  "state": "IL"
},{
  "city": "ASHKUM",
  "zip": "60911",
  "loc": {
    "y": 40.884431,
    "x": 87.941148
  },
  "pop": 1484,
  "state": "IL"
},{
  "city": "ONARGA",
  "zip": "60955",
  "loc": {
    "y": 40.712005,
    "x": 87.995841
  },
  "pop": 1678,
  "state": "IL"
},{
  "city": "HOOPESTON",
  "zip": "60942",
  "loc": {
    "y": 40.463873,
    "x": 87.666229
  },
  "pop": 6600,
  "state": "IL"
},{
  "city": "MANTENO",
  "zip": "60950",
  "loc": {
    "y": 41.251439,
    "x": 87.846761
  },
  "pop": 5673,
  "state": "IL"
},{
  "city": "LUDLOW",
  "zip": "60949",
  "loc": {
    "y": 40.374736,
    "x": 88.137965
  },
  "pop": 832,
  "state": "IL"
},{
  "city": "CAPRON",
  "zip": "61012",
  "loc": {
    "y": 42.408659,
    "x": 88.746518
  },
  "pop": 1893,
  "state": "IL"
},{
  "city": "FORRESTON",
  "zip": "61030",
  "loc": {
    "y": 42.122924,
    "x": 89.583124
  },
  "pop": 2261,
  "state": "IL"
},{
  "city": "HILLSDALE",
  "zip": "61257",
  "loc": {
    "y": 41.592896,
    "x": 90.226255
  },
  "pop": 1807,
  "state": "IL"
},{
  "city": "MORRISON",
  "zip": "61270",
  "loc": {
    "y": 41.816664,
    "x": 89.968995
  },
  "pop": 7580,
  "state": "IL"
},{
  "city": "HAMPTON",
  "zip": "61256",
  "loc": {
    "y": 41.541805,
    "x": 90.323037
  },
  "pop": 538,
  "state": "IL"
},{
  "city": "MINERAL",
  "zip": "61344",
  "loc": {
    "y": 41.403556,
    "x": 89.820087
  },
  "pop": 648,
  "state": "IL"
},{
  "city": "NEW BEDFORD",
  "zip": "61346",
  "loc": {
    "y": 41.540883,
    "x": 89.778558
  },
  "pop": 641,
  "state": "IL"
},{
  "city": "NORMANDY",
  "zip": "61376",
  "loc": {
    "y": 41.553035,
    "x": 89.592237
  },
  "pop": 2050,
  "state": "IL"
},{
  "city": "CUBA",
  "zip": "61427",
  "loc": {
    "y": 40.4995,
    "x": 90.181055
  },
  "pop": 2169,
  "state": "IL"
},{
  "city": "DAHINDA",
  "zip": "61428",
  "loc": {
    "y": 40.95508,
    "x": 90.139808
  },
  "pop": 710,
  "state": "IL"
},{
  "city": "TOULON",
  "zip": "61483",
  "loc": {
    "y": 41.100949,
    "x": 89.860584
  },
  "pop": 2378,
  "state": "IL"
},{
  "city": "MAPLETON",
  "zip": "61547",
  "loc": {
    "y": 40.611699,
    "x": 89.718429
  },
  "pop": 2593,
  "state": "IL"
},{
  "city": "PRINCEVILLE",
  "zip": "61559",
  "loc": {
    "y": 40.909277,
    "x": 89.772285
  },
  "pop": 3210,
  "state": "IL"
},{
  "city": "BARTONVILLE",
  "zip": "61607",
  "loc": {
    "y": 40.652434,
    "x": 89.673898
  },
  "pop": 10389,
  "state": "IL"
},{
  "city": "HOPEDALE",
  "zip": "61747",
  "loc": {
    "y": 40.427318,
    "x": 89.421398
  },
  "pop": 1355,
  "state": "IL"
},{
  "city": "SAUNEMIN",
  "zip": "61769",
  "loc": {
    "y": 40.888516,
    "x": 88.40936
  },
  "pop": 683,
  "state": "IL"
},{
  "city": "DANVILLE",
  "zip": "61832",
  "loc": {
    "y": 40.136976,
    "x": 87.621737
  },
  "pop": 49857,
  "state": "IL"
},{
  "city": "TILTON",
  "zip": "61833",
  "loc": {
    "y": 40.096406,
    "x": 87.644048
  },
  "pop": 2945,
  "state": "IL"
},{
  "city": "ASHTON",
  "zip": "61006",
  "loc": {
    "y": 41.864327,
    "x": 89.2086
  },
  "pop": 1911,
  "state": "IL"
},{
  "city": "MONTICELLO",
  "zip": "61856",
  "loc": {
    "y": 40.02632,
    "x": 88.568555
  },
  "pop": 5339,
  "state": "IL"
},{
  "city": "EDWARDSVILLE",
  "zip": "62025",
  "loc": {
    "y": 38.804967,
    "x": 89.963697
  },
  "pop": 19241,
  "state": "IL"
},{
  "city": "FIDELITY",
  "zip": "62030",
  "loc": {
    "y": 39.132286,
    "x": 90.198803
  },
  "pop": 655,
  "state": "IL"
},{
  "city": "HARTFORD",
  "zip": "62048",
  "loc": {
    "y": 38.829852,
    "x": 90.074533
  },
  "pop": 3763,
  "state": "IL"
},{
  "city": "KANE",
  "zip": "62054",
  "loc": {
    "y": 39.203688,
    "x": 90.37188
  },
  "pop": 1044,
  "state": "IL"
},{
  "city": "PIASA",
  "zip": "62079",
  "loc": {
    "y": 39.151697,
    "x": 90.131147
  },
  "pop": 863,
  "state": "IL"
},{
  "city": "ROCKBRIDGE",
  "zip": "62081",
  "loc": {
    "y": 39.283146,
    "x": 90.255818
  },
  "pop": 718,
  "state": "IL"
},{
  "city": "ROSAMOND",
  "zip": "62083",
  "loc": {
    "y": 39.389229,
    "x": 89.1846
  },
  "pop": 443,
  "state": "IL"
},{
  "city": "VENICE",
  "zip": "62090",
  "loc": {
    "y": 38.67063,
    "x": 90.168928
  },
  "pop": 1559,
  "state": "IL"
},{
  "city": "SORENTO",
  "zip": "62086",
  "loc": {
    "y": 38.969342,
    "x": 89.565347
  },
  "pop": 2127,
  "state": "IL"
},{
  "city": "EAST SAINT LOUIS",
  "zip": "62205",
  "loc": {
    "y": 38.614947,
    "x": 90.127502
  },
  "pop": 14488,
  "state": "IL"
},{
  "city": "MOMENCE",
  "zip": "60954",
  "loc": {
    "y": 41.159308,
    "x": 87.657515
  },
  "pop": 6804,
  "state": "IL"
},{
  "city": "CALEDONIA",
  "zip": "61011",
  "loc": {
    "y": 42.38346,
    "x": 88.918456
  },
  "pop": 2086,
  "state": "IL"
},{
  "city": "EAST DUBUQUE",
  "zip": "61025",
  "loc": {
    "y": 42.487488,
    "x": 90.604597
  },
  "pop": 4999,
  "state": "IL"
},{
  "city": "SAVANNA",
  "zip": "61074",
  "loc": {
    "y": 42.095581,
    "x": 90.140061
  },
  "pop": 4943,
  "state": "IL"
},{
  "city": "SOUTH BELOIT",
  "zip": "61080",
  "loc": {
    "y": 42.483672,
    "x": 89.029791
  },
  "pop": 6833,
  "state": "IL"
},{
  "city": "FULTON",
  "zip": "61252",
  "loc": {
    "y": 41.8522,
    "x": 90.150653
  },
  "pop": 5743,
  "state": "IL"
},{
  "city": "SHERRARD",
  "zip": "61281",
  "loc": {
    "y": 41.302669,
    "x": 90.493863
  },
  "pop": 2192,
  "state": "IL"
},{
  "city": "MILAN",
  "zip": "61264",
  "loc": {
    "y": 41.426197,
    "x": 90.573935
  },
  "pop": 14565,
  "state": "IL"
},{
  "city": "MENDOTA",
  "zip": "61342",
  "loc": {
    "y": 41.544308,
    "x": 89.10828
  },
  "pop": 9660,
  "state": "IL"
},{
  "city": "INDUSTRY",
  "zip": "61440",
  "loc": {
    "y": 40.3256,
    "x": 90.610524
  },
  "pop": 885,
  "state": "IL"
},{
  "city": "LITTLE YORK",
  "zip": "61453",
  "loc": {
    "y": 41.01529,
    "x": 90.736434
  },
  "pop": 679,
  "state": "IL"
},{
  "city": "CAZENOVIA",
  "zip": "61545",
  "loc": {
    "y": 40.871082,
    "x": 89.370399
  },
  "pop": 1247,
  "state": "IL"
},{
  "city": "HEYWORTH",
  "zip": "61745",
  "loc": {
    "y": 40.3307,
    "x": 88.977608
  },
  "pop": 2934,
  "state": "IL"
},{
  "city": "HUDSON",
  "zip": "61748",
  "loc": {
    "y": 40.620485,
    "x": 88.975931
  },
  "pop": 1850,
  "state": "IL"
},{
  "city": "NORMAL",
  "zip": "61761",
  "loc": {
    "y": 40.512446,
    "x": 88.988287
  },
  "pop": 40851,
  "state": "IL"
},{
  "city": "DE LAND",
  "zip": "61839",
  "loc": {
    "y": 40.110656,
    "x": 88.639193
  },
  "pop": 848,
  "state": "IL"
},{
  "city": "ARCOLA",
  "zip": "61910",
  "loc": {
    "y": 39.687001,
    "x": 88.303679
  },
  "pop": 3132,
  "state": "IL"
},{
  "city": "CHARLESTON",
  "zip": "61920",
  "loc": {
    "y": 39.486933,
    "x": 88.176115
  },
  "pop": 22767,
  "state": "IL"
},{
  "city": "GODFREY",
  "zip": "62035",
  "loc": {
    "y": 38.946035,
    "x": 90.206024
  },
  "pop": 13959,
  "state": "IL"
},{
  "city": "ROXANA",
  "zip": "62084",
  "loc": {
    "y": 38.848154,
    "x": 90.07978
  },
  "pop": 1513,
  "state": "IL"
},{
  "city": "MEDORA",
  "zip": "62063",
  "loc": {
    "y": 39.198593,
    "x": 90.154225
  },
  "pop": 531,
  "state": "IL"
},{
  "city": "BELLEVILLE",
  "zip": "62220",
  "loc": {
    "y": 38.512677,
    "x": 89.984693
  },
  "pop": 23454,
  "state": "IL"
},{
  "city": "ALBERS",
  "zip": "62215",
  "loc": {
    "y": 38.531955,
    "x": 89.620151
  },
  "pop": 1641,
  "state": "IL"
},{
  "city": "BREESE",
  "zip": "62230",
  "loc": {
    "y": 38.618802,
    "x": 89.52838
  },
  "pop": 4882,
  "state": "IL"
},{
  "city": "PAXTON",
  "zip": "60957",
  "loc": {
    "y": 40.456546,
    "x": 88.098989
  },
  "pop": 5226,
  "state": "IL"
},{
  "city": "LODA",
  "zip": "60948",
  "loc": {
    "y": 40.524097,
    "x": 88.092675
  },
  "pop": 1474,
  "state": "IL"
},{
  "city": "MARTINTON",
  "zip": "60951",
  "loc": {
    "y": 40.905233,
    "x": 87.744257
  },
  "pop": 1004,
  "state": "IL"
},{
  "city": "BELVIDERE",
  "zip": "61008",
  "loc": {
    "y": 42.259465,
    "x": 88.850943
  },
  "pop": 22199,
  "state": "IL"
},{
  "city": "GARDEN PRAIRIE",
  "zip": "61038",
  "loc": {
    "y": 42.250983,
    "x": 88.74367
  },
  "pop": 1584,
  "state": "IL"
},{
  "city": "LOVES PARK",
  "zip": "61111",
  "loc": {
    "y": 42.32952,
    "x": 89.033521
  },
  "pop": 47733,
  "state": "IL"
},{
  "city": "BLACKSTONE",
  "zip": "61313",
  "loc": {
    "y": 41.071945,
    "x": 88.649782
  },
  "pop": 258,
  "state": "IL"
},{
  "city": "PAW PAW",
  "zip": "61353",
  "loc": {
    "y": 41.685228,
    "x": 88.967377
  },
  "pop": 1539,
  "state": "IL"
},{
  "city": "WEST BROOKLYN",
  "zip": "61378",
  "loc": {
    "y": 41.729156,
    "x": 89.190917
  },
  "pop": 946,
  "state": "IL"
},{
  "city": "ADAIR",
  "zip": "61411",
  "loc": {
    "y": 40.385197,
    "x": 90.503742
  },
  "pop": 731,
  "state": "IL"
},{
  "city": "ABINGDON",
  "zip": "61410",
  "loc": {
    "y": 40.802312,
    "x": 90.400898
  },
  "pop": 4241,
  "state": "IL"
},{
  "city": "BERWICK",
  "zip": "61417",
  "loc": {
    "y": 40.779911,
    "x": 90.505913
  },
  "pop": 461,
  "state": "IL"
},{
  "city": "SAINT AUGUSTINE",
  "zip": "61474",
  "loc": {
    "y": 40.7289,
    "x": 90.379781
  },
  "pop": 376,
  "state": "IL"
},{
  "city": "SPEER",
  "zip": "61479",
  "loc": {
    "y": 41.009682,
    "x": 89.693254
  },
  "pop": 398,
  "state": "IL"
},{
  "city": "WYOMING",
  "zip": "61491",
  "loc": {
    "y": 41.059879,
    "x": 89.778238
  },
  "pop": 1818,
  "state": "IL"
},{
  "city": "OAK HILL",
  "zip": "61518",
  "loc": {
    "y": 40.786938,
    "x": 89.83725
  },
  "pop": 1007,
  "state": "IL"
},{
  "city": "GLASFORD",
  "zip": "61533",
  "loc": {
    "y": 40.575976,
    "x": 89.811326
  },
  "pop": 2531,
  "state": "IL"
},{
  "city": "GREEN VALLEY",
  "zip": "61534",
  "loc": {
    "y": 40.41978,
    "x": 89.654925
  },
  "pop": 1800,
  "state": "IL"
},{
  "city": "WASHBURN",
  "zip": "61570",
  "loc": {
    "y": 40.91413,
    "x": 89.283049
  },
  "pop": 1771,
  "state": "IL"
},{
  "city": "PEORIA",
  "zip": "61615",
  "loc": {
    "y": 40.770165,
    "x": 89.632083
  },
  "pop": 15452,
  "state": "IL"
},{
  "city": "BLOOMINGTON",
  "zip": "61704",
  "loc": {
    "y": 40.471618,
    "x": 88.962466
  },
  "pop": 24135,
  "state": "IL"
},{
  "city": "CLINTON",
  "zip": "61727",
  "loc": {
    "y": 40.148708,
    "x": 88.96266
  },
  "pop": 10043,
  "state": "IL"
},{
  "city": "CROPSEY",
  "zip": "61731",
  "loc": {
    "y": 40.602983,
    "x": 88.494343
  },
  "pop": 240,
  "state": "IL"
},{
  "city": "ELLSWORTH",
  "zip": "61737",
  "loc": {
    "y": 40.443154,
    "x": 88.737121
  },
  "pop": 660,
  "state": "IL"
},{
  "city": "MINONK",
  "zip": "61760",
  "loc": {
    "y": 40.898501,
    "x": 89.034863
  },
  "pop": 2559,
  "state": "IL"
},{
  "city": "CHAMPAIGN",
  "zip": "61821",
  "loc": {
    "y": 40.107262,
    "x": 88.278847
  },
  "pop": 37547,
  "state": "IL"
},{
  "city": "BROCTON",
  "zip": "61917",
  "loc": {
    "y": 39.692311,
    "x": 87.926258
  },
  "pop": 748,
  "state": "IL"
},{
  "city": "ALTON",
  "zip": "62002",
  "loc": {
    "y": 38.908651,
    "x": 90.156806
  },
  "pop": 37541,
  "state": "IL"
},{
  "city": "BUTLER",
  "zip": "62015",
  "loc": {
    "y": 39.211419,
    "x": 89.530535
  },
  "pop": 570,
  "state": "IL"
},{
  "city": "CAMARGO",
  "zip": "61919",
  "loc": {
    "y": 39.799955,
    "x": 88.146815
  },
  "pop": 1015,
  "state": "IL"
},{
  "city": "RAMSEY",
  "zip": "62080",
  "loc": {
    "y": 39.078123,
    "x": 89.105147
  },
  "pop": 4166,
  "state": "IL"
},{
  "city": "WOOD RIVER",
  "zip": "62095",
  "loc": {
    "y": 38.864279,
    "x": 90.087507
  },
  "pop": 10817,
  "state": "IL"
},{
  "city": "MELVIN",
  "zip": "60952",
  "loc": {
    "y": 40.571379,
    "x": 88.255078
  },
  "pop": 654,
  "state": "IL"
},{
  "city": "MILFORD",
  "zip": "60953",
  "loc": {
    "y": 40.629253,
    "x": 87.685332
  },
  "pop": 2367,
  "state": "IL"
},{
  "city": "ROBERTS",
  "zip": "60962",
  "loc": {
    "y": 40.619333,
    "x": 88.180414
  },
  "pop": 617,
  "state": "IL"
},{
  "city": "BYRON",
  "zip": "61010",
  "loc": {
    "y": 42.129236,
    "x": 89.265887
  },
  "pop": 4894,
  "state": "IL"
},{
  "city": "HARMON",
  "zip": "61042",
  "loc": {
    "y": 41.697296,
    "x": 89.569513
  },
  "pop": 793,
  "state": "IL"
},{
  "city": "POPLAR GROVE",
  "zip": "61065",
  "loc": {
    "y": 42.359365,
    "x": 88.842774
  },
  "pop": 2593,
  "state": "IL"
},{
  "city": "ROCKFORD",
  "zip": "61103",
  "loc": {
    "y": 42.300986,
    "x": 89.083326
  },
  "pop": 24143,
  "state": "IL"
},{
  "city": "COAL VALLEY",
  "zip": "61240",
  "loc": {
    "y": 41.435143,
    "x": 90.465179
  },
  "pop": 5435,
  "state": "IL"
},{
  "city": "FENTON",
  "zip": "61251",
  "loc": {
    "y": 41.728495,
    "x": 90.045685
  },
  "pop": 289,
  "state": "IL"
},{
  "city": "PORT BYRON",
  "zip": "61275",
  "loc": {
    "y": 41.601346,
    "x": 90.326291
  },
  "pop": 3441,
  "state": "IL"
},{
  "city": "PROPHETSTOWN",
  "zip": "61277",
  "loc": {
    "y": 41.631223,
    "x": 89.946665
  },
  "pop": 3736,
  "state": "IL"
},{
  "city": "MANVILLE",
  "zip": "61319",
  "loc": {
    "y": 40.985827,
    "x": 88.742694
  },
  "pop": 968,
  "state": "IL"
},{
  "city": "TONICA",
  "zip": "61370",
  "loc": {
    "y": 41.232741,
    "x": 89.088993
  },
  "pop": 1409,
  "state": "IL"
},{
  "city": "VARNA",
  "zip": "61375",
  "loc": {
    "y": 41.032723,
    "x": 89.248331
  },
  "pop": 1527,
  "state": "IL"
},{
  "city": "GALESBURG",
  "zip": "61401",
  "loc": {
    "y": 40.952138,
    "x": 90.369807
  },
  "pop": 36161,
  "state": "IL"
},{
  "city": "MACOMB",
  "zip": "61455",
  "loc": {
    "y": 40.461674,
    "x": 90.678674
  },
  "pop": 23503,
  "state": "IL"
},{
  "city": "GERLAW",
  "zip": "61435",
  "loc": {
    "y": 40.999519,
    "x": 90.622765
  },
  "pop": 520,
  "state": "IL"
},{
  "city": "VIOLA",
  "zip": "61486",
  "loc": {
    "y": 41.202422,
    "x": 90.593583
  },
  "pop": 1651,
  "state": "IL"
},{
  "city": "BRYANT",
  "zip": "61519",
  "loc": {
    "y": 40.483072,
    "x": 90.066134
  },
  "pop": 1017,
  "state": "IL"
},{
  "city": "PEORIA",
  "zip": "61606",
  "loc": {
    "y": 40.698926,
    "x": 89.612189
  },
  "pop": 10299,
  "state": "IL"
},{
  "city": "CHENOA",
  "zip": "61726",
  "loc": {
    "y": 40.744633,
    "x": 88.721853
  },
  "pop": 2898,
  "state": "IL"
},{
  "city": "GRAYMONT",
  "zip": "61743",
  "loc": {
    "y": 40.90663,
    "x": 88.760299
  },
  "pop": 180,
  "state": "IL"
},{
  "city": "LEXINGTON",
  "zip": "61753",
  "loc": {
    "y": 40.635685,
    "x": 88.806203
  },
  "pop": 3098,
  "state": "IL"
},{
  "city": "WAPELLA",
  "zip": "61777",
  "loc": {
    "y": 40.232305,
    "x": 88.967264
  },
  "pop": 1031,
  "state": "IL"
},{
  "city": "GEORGETOWN",
  "zip": "61846",
  "loc": {
    "y": 39.97922,
    "x": 87.63648
  },
  "pop": 4534,
  "state": "IL"
},{
  "city": "HOMER",
  "zip": "61849",
  "loc": {
    "y": 40.034619,
    "x": 87.962742
  },
  "pop": 1624,
  "state": "IL"
},{
  "city": "SAINT JOSEPH",
  "zip": "61873",
  "loc": {
    "y": 40.120736,
    "x": 88.047232
  },
  "pop": 4168,
  "state": "IL"
},{
  "city": "TOLONO",
  "zip": "61880",
  "loc": {
    "y": 39.985006,
    "x": 88.259641
  },
  "pop": 2837,
  "state": "IL"
},{
  "city": "OAKLAND",
  "zip": "61943",
  "loc": {
    "y": 39.651618,
    "x": 88.025325
  },
  "pop": 1447,
  "state": "IL"
},{
  "city": "VILLA GROVE",
  "zip": "61956",
  "loc": {
    "y": 39.868716,
    "x": 88.161635
  },
  "pop": 3259,
  "state": "IL"
},{
  "city": "CARROLLTON",
  "zip": "62016",
  "loc": {
    "y": 39.300937,
    "x": 90.409211
  },
  "pop": 3079,
  "state": "IL"
},{
  "city": "HILLSBORO",
  "zip": "62049",
  "loc": {
    "y": 39.149412,
    "x": 89.488146
  },
  "pop": 7916,
  "state": "IL"
},{
  "city": "STAUNTON",
  "zip": "62088",
  "loc": {
    "y": 39.01348,
    "x": 89.785697
  },
  "pop": 5482,
  "state": "IL"
},{
  "city": "SCOTT A F B",
  "zip": "62225",
  "loc": {
    "y": 38.54692,
    "x": 89.858775
  },
  "pop": 7391,
  "state": "IL"
},{
  "city": "THAWVILLE",
  "zip": "60968",
  "loc": {
    "y": 40.684011,
    "x": 88.09993
  },
  "pop": 374,
  "state": "IL"
},{
  "city": "GALENA",
  "zip": "61036",
  "loc": {
    "y": 42.418233,
    "x": 90.419509
  },
  "pop": 5479,
  "state": "IL"
},{
  "city": "GERMAN VALLEY",
  "zip": "61039",
  "loc": {
    "y": 42.21761,
    "x": 89.471151
  },
  "pop": 1003,
  "state": "IL"
},{
  "city": "KINGS",
  "zip": "61045",
  "loc": {
    "y": 42.013987,
    "x": 89.099685
  },
  "pop": 377,
  "state": "IL"
},{
  "city": "ORANGEVILLE",
  "zip": "61060",
  "loc": {
    "y": 42.472779,
    "x": 89.644757
  },
  "pop": 1318,
  "state": "IL"
},{
  "city": "ALBANY",
  "zip": "61230",
  "loc": {
    "y": 41.765874,
    "x": 90.208051
  },
  "pop": 1287,
  "state": "IL"
},{
  "city": "KENT",
  "zip": "61044",
  "loc": {
    "y": 42.315528,
    "x": 89.919489
  },
  "pop": 425,
  "state": "IL"
},{
  "city": "WENONA",
  "zip": "61377",
  "loc": {
    "y": 41.054846,
    "x": 89.041637
  },
  "pop": 1410,
  "state": "IL"
},{
  "city": "FAIRVIEW",
  "zip": "61432",
  "loc": {
    "y": 40.64418,
    "x": 90.165265
  },
  "pop": 702,
  "state": "IL"
},{
  "city": "POLO",
  "zip": "61064",
  "loc": {
    "y": 41.98895,
    "x": 89.598358
  },
  "pop": 4524,
  "state": "IL"
},{
  "city": "ROCHELLE",
  "zip": "61068",
  "loc": {
    "y": 41.928156,
    "x": 89.071035
  },
  "pop": 12890,
  "state": "IL"
},{
  "city": "NORTH HENDERSON",
  "zip": "61466",
  "loc": {
    "y": 41.100607,
    "x": 90.473571
  },
  "pop": 390,
  "state": "IL"
},{
  "city": "DEER GROVE",
  "zip": "61243",
  "loc": {
    "y": 41.631599,
    "x": 89.6972
  },
  "pop": 393,
  "state": "IL"
},{
  "city": "EAST MOLINE",
  "zip": "61244",
  "loc": {
    "y": 41.511804,
    "x": 90.432118
  },
  "pop": 24023,
  "state": "IL"
},{
  "city": "SCIOTA",
  "zip": "61475",
  "loc": {
    "y": 40.567361,
    "x": 90.707999
  },
  "pop": 622,
  "state": "IL"
},{
  "city": "SEATON",
  "zip": "61476",
  "loc": {
    "y": 41.073222,
    "x": 90.825654
  },
  "pop": 704,
  "state": "IL"
},{
  "city": "LYNDON",
  "zip": "61261",
  "loc": {
    "y": 41.719933,
    "x": 89.916865
  },
  "pop": 936,
  "state": "IL"
},{
  "city": "OSCO",
  "zip": "61274",
  "loc": {
    "y": 41.363674,
    "x": 90.268093
  },
  "pop": 538,
  "state": "IL"
},{
  "city": "LYNN CENTER",
  "zip": "61262",
  "loc": {
    "y": 41.288761,
    "x": 90.330444
  },
  "pop": 1694,
  "state": "IL"
},{
  "city": "PUTNAM",
  "zip": "61560",
  "loc": {
    "y": 41.19486,
    "x": 89.440901
  },
  "pop": 724,
  "state": "IL"
},{
  "city": "ARROWSMITH",
  "zip": "61722",
  "loc": {
    "y": 40.411966,
    "x": 88.629648
  },
  "pop": 813,
  "state": "IL"
},{
  "city": "ATLANTA",
  "zip": "61723",
  "loc": {
    "y": 40.258624,
    "x": 89.230021
  },
  "pop": 1978,
  "state": "IL"
},{
  "city": "ARLINGTON",
  "zip": "61312",
  "loc": {
    "y": 41.443669,
    "x": 89.221949
  },
  "pop": 1044,
  "state": "IL"
},{
  "city": "MC NABB",
  "zip": "61335",
  "loc": {
    "y": 41.173026,
    "x": 89.218664
  },
  "pop": 747,
  "state": "IL"
},{
  "city": "LONGVIEW",
  "zip": "61852",
  "loc": {
    "y": 39.901241,
    "x": 88.075282
  },
  "pop": 555,
  "state": "IL"
},{
  "city": "PENFIELD",
  "zip": "61862",
  "loc": {
    "y": 40.310137,
    "x": 87.95702
  },
  "pop": 601,
  "state": "IL"
},{
  "city": "OTTAWA",
  "zip": "61350",
  "loc": {
    "y": 41.352619,
    "x": 88.841589
  },
  "pop": 23727,
  "state": "IL"
},{
  "city": "SIDNEY",
  "zip": "61877",
  "loc": {
    "y": 40.023206,
    "x": 88.069029
  },
  "pop": 1521,
  "state": "IL"
},{
  "city": "ATWOOD",
  "zip": "61913",
  "loc": {
    "y": 39.804368,
    "x": 88.449446
  },
  "pop": 2455,
  "state": "IL"
},{
  "city": "BUNKER HILL",
  "zip": "62014",
  "loc": {
    "y": 39.040827,
    "x": 89.962379
  },
  "pop": 3052,
  "state": "IL"
},{
  "city": "SPRING VALLEY",
  "zip": "61362",
  "loc": {
    "y": 41.327923,
    "x": 89.20417
  },
  "pop": 5541,
  "state": "IL"
},{
  "city": "UTICA",
  "zip": "61373",
  "loc": {
    "y": 41.363033,
    "x": 89.000795
  },
  "pop": 1926,
  "state": "IL"
},{
  "city": "BARDOLPH",
  "zip": "61416",
  "loc": {
    "y": 40.498078,
    "x": 90.502495
  },
  "pop": 365,
  "state": "IL"
},{
  "city": "EAST ALTON",
  "zip": "62024",
  "loc": {
    "y": 38.88031,
    "x": 90.083045
  },
  "pop": 13839,
  "state": "IL"
},{
  "city": "GRAFTON",
  "zip": "62037",
  "loc": {
    "y": 39.002134,
    "x": 90.432335
  },
  "pop": 2036,
  "state": "IL"
},{
  "city": "OQUAWKA",
  "zip": "61469",
  "loc": {
    "y": 40.944174,
    "x": 90.930199
  },
  "pop": 2410,
  "state": "IL"
},{
  "city": "KENNEY",
  "zip": "61749",
  "loc": {
    "y": 40.10247,
    "x": 89.078925
  },
  "pop": 789,
  "state": "IL"
},{
  "city": "SAYBROOK",
  "zip": "61770",
  "loc": {
    "y": 40.432005,
    "x": 88.524656
  },
  "pop": 1051,
  "state": "IL"
},{
  "city": "HAMEL",
  "zip": "62046",
  "loc": {
    "y": 38.878433,
    "x": 89.872678
  },
  "pop": 1685,
  "state": "IL"
},{
  "city": "BELLEVILLE",
  "zip": "62223",
  "loc": {
    "y": 38.545581,
    "x": 90.037775
  },
  "pop": 34650,
  "state": "IL"
},{
  "city": "STANFORD",
  "zip": "61774",
  "loc": {
    "y": 40.437575,
    "x": 89.216434
  },
  "pop": 996,
  "state": "IL"
},{
  "city": "BROADLANDS",
  "zip": "61816",
  "loc": {
    "y": 39.914247,
    "x": 87.994831
  },
  "pop": 481,
  "state": "IL"
},{
  "city": "CHAMPAIGN",
  "zip": "61820",
  "loc": {
    "y": 40.111017,
    "x": 88.240747
  },
  "pop": 33409,
  "state": "IL"
},{
  "city": "FAIRMOUNT",
  "zip": "61841",
  "loc": {
    "y": 40.037329,
    "x": 87.836456
  },
  "pop": 1317,
  "state": "IL"
},{
  "city": "IVESDALE",
  "zip": "61851",
  "loc": {
    "y": 39.950233,
    "x": 88.445095
  },
  "pop": 596,
  "state": "IL"
},{
  "city": "PHILO",
  "zip": "61864",
  "loc": {
    "y": 40.005156,
    "x": 88.159506
  },
  "pop": 1377,
  "state": "IL"
},{
  "city": "SADORUS",
  "zip": "61872",
  "loc": {
    "y": 39.961312,
    "x": 88.344717
  },
  "pop": 1022,
  "state": "IL"
},{
  "city": "ASHMORE",
  "zip": "61912",
  "loc": {
    "y": 39.525428,
    "x": 88.034097
  },
  "pop": 1467,
  "state": "IL"
},{
  "city": "SULLIVAN",
  "zip": "61951",
  "loc": {
    "y": 39.593431,
    "x": 88.603767
  },
  "pop": 6946,
  "state": "IL"
},{
  "city": "MEPPEN",
  "zip": "62013",
  "loc": {
    "y": 38.937115,
    "x": 90.590696
  },
  "pop": 814,
  "state": "IL"
},{
  "city": "WATSEKA",
  "zip": "60970",
  "loc": {
    "y": 40.773351,
    "x": 87.730932
  },
  "pop": 7072,
  "state": "IL"
},{
  "city": "BAILEYVILLE",
  "zip": "61007",
  "loc": {
    "y": 42.190465,
    "x": 89.593937
  },
  "pop": 430,
  "state": "IL"
},{
  "city": "FRANKLIN GROVE",
  "zip": "61031",
  "loc": {
    "y": 41.857968,
    "x": 89.317112
  },
  "pop": 2070,
  "state": "IL"
},{
  "city": "EGAN",
  "zip": "61047",
  "loc": {
    "y": 42.140975,
    "x": 89.401024
  },
  "pop": 1804,
  "state": "IL"
},{
  "city": "MILLEDGEVILLE",
  "zip": "61051",
  "loc": {
    "y": 41.96737,
    "x": 89.780121
  },
  "pop": 1526,
  "state": "IL"
},{
  "city": "ROCKFORD",
  "zip": "61108",
  "loc": {
    "y": 42.251406,
    "x": 89.023519
  },
  "pop": 25501,
  "state": "IL"
},{
  "city": "MATHERVILLE",
  "zip": "61263",
  "loc": {
    "y": 41.269075,
    "x": 90.602343
  },
  "pop": 1409,
  "state": "IL"
},{
  "city": "AMBOY",
  "zip": "61310",
  "loc": {
    "y": 41.704181,
    "x": 89.34716
  },
  "pop": 3994,
  "state": "IL"
},{
  "city": "ANCONA",
  "zip": "61311",
  "loc": {
    "y": 41.055118,
    "x": 88.766039
  },
  "pop": 38,
  "state": "IL"
},{
  "city": "GRAND RIDGE",
  "zip": "61325",
  "loc": {
    "y": 41.238621,
    "x": 88.816836
  },
  "pop": 1179,
  "state": "IL"
},{
  "city": "GRANVILLE",
  "zip": "61326",
  "loc": {
    "y": 41.264212,
    "x": 89.225029
  },
  "pop": 2784,
  "state": "IL"
},{
  "city": "LOSTANT",
  "zip": "61334",
  "loc": {
    "y": 41.145007,
    "x": 89.075031
  },
  "pop": 747,
  "state": "IL"
},{
  "city": "OHIO",
  "zip": "61349",
  "loc": {
    "y": 41.537149,
    "x": 89.457411
  },
  "pop": 1031,
  "state": "IL"
},{
  "city": "SUBLETTE",
  "zip": "61367",
  "loc": {
    "y": 41.633144,
    "x": 89.235409
  },
  "pop": 899,
  "state": "IL"
},{
  "city": "TISKILWA",
  "zip": "61368",
  "loc": {
    "y": 41.289055,
    "x": 89.507968
  },
  "pop": 1587,
  "state": "IL"
},{
  "city": "BRADFORD",
  "zip": "61421",
  "loc": {
    "y": 41.15323,
    "x": 89.652077
  },
  "pop": 2071,
  "state": "IL"
},{
  "city": "FIATT",
  "zip": "61433",
  "loc": {
    "y": 40.571779,
    "x": 90.162186
  },
  "pop": 495,
  "state": "IL"
},{
  "city": "BLANDINSVILLE",
  "zip": "61420",
  "loc": {
    "y": 40.551585,
    "x": 90.859521
  },
  "pop": 1272,
  "state": "IL"
},{
  "city": "GOOD HOPE",
  "zip": "61438",
  "loc": {
    "y": 40.574891,
    "x": 90.632432
  },
  "pop": 499,
  "state": "IL"
},{
  "city": "MONMOUTH",
  "zip": "61462",
  "loc": {
    "y": 40.910702,
    "x": 90.644828
  },
  "pop": 11245,
  "state": "IL"
},{
  "city": "VICTORIA",
  "zip": "61485",
  "loc": {
    "y": 41.025635,
    "x": 90.093325
  },
  "pop": 669,
  "state": "IL"
},{
  "city": "EDELSTEIN",
  "zip": "61526",
  "loc": {
    "y": 40.945367,
    "x": 89.585812
  },
  "pop": 1866,
  "state": "IL"
},{
  "city": "EUREKA",
  "zip": "61530",
  "loc": {
    "y": 40.715249,
    "x": 89.270561
  },
  "pop": 5688,
  "state": "IL"
},{
  "city": "MIDDLEGROVE",
  "zip": "61531",
  "loc": {
    "y": 40.690265,
    "x": 90.013434
  },
  "pop": 3569,
  "state": "IL"
},{
  "city": "LONDON MILLS",
  "zip": "61544",
  "loc": {
    "y": 40.694954,
    "x": 90.261594
  },
  "pop": 746,
  "state": "IL"
},{
  "city": "HENRY",
  "zip": "61537",
  "loc": {
    "y": 41.111543,
    "x": 89.374328
  },
  "pop": 3255,
  "state": "IL"
},{
  "city": "LIVERPOOL",
  "zip": "61543",
  "loc": {
    "y": 40.411574,
    "x": 90.038972
  },
  "pop": 730,
  "state": "IL"
},{
  "city": "SPARLAND",
  "zip": "61565",
  "loc": {
    "y": 41.013366,
    "x": 89.45711
  },
  "pop": 1190,
  "state": "IL"
},{
  "city": "TREMONT",
  "zip": "61568",
  "loc": {
    "y": 40.505337,
    "x": 89.483316
  },
  "pop": 4492,
  "state": "IL"
},{
  "city": "PEORIA",
  "zip": "61604",
  "loc": {
    "y": 40.711142,
    "x": 89.632377
  },
  "pop": 33171,
  "state": "IL"
},{
  "city": "BELLFLOWER",
  "zip": "61724",
  "loc": {
    "y": 40.340091,
    "x": 88.522702
  },
  "pop": 702,
  "state": "IL"
},{
  "city": "DANVERS",
  "zip": "61732",
  "loc": {
    "y": 40.536353,
    "x": 89.188487
  },
  "pop": 1825,
  "state": "IL"
},{
  "city": "TOWANDA",
  "zip": "61776",
  "loc": {
    "y": 40.553326,
    "x": 88.88865
  },
  "pop": 1191,
  "state": "IL"
},{
  "city": "BISMARCK",
  "zip": "61814",
  "loc": {
    "y": 40.255187,
    "x": 87.613769
  },
  "pop": 1476,
  "state": "IL"
},{
  "city": "INDIANOLA",
  "zip": "61850",
  "loc": {
    "y": 39.926819,
    "x": 87.73882
  },
  "pop": 715,
  "state": "IL"
},{
  "city": "WHITE HEATH",
  "zip": "61884",
  "loc": {
    "y": 40.100911,
    "x": 88.519297
  },
  "pop": 1481,
  "state": "IL"
},{
  "city": "DOW",
  "zip": "62022",
  "loc": {
    "y": 39.031198,
    "x": 90.301059
  },
  "pop": 1758,
  "state": "IL"
},{
  "city": "HARDIN",
  "zip": "62047",
  "loc": {
    "y": 39.154652,
    "x": 90.624002
  },
  "pop": 1232,
  "state": "IL"
},{
  "city": "GLEN CARBON",
  "zip": "62034",
  "loc": {
    "y": 38.760871,
    "x": 89.970583
  },
  "pop": 9729,
  "state": "IL"
},{
  "city": "JERSEYVILLE",
  "zip": "62052",
  "loc": {
    "y": 39.121324,
    "x": 90.333757
  },
  "pop": 9439,
  "state": "IL"
},{
  "city": "CAHOKIA",
  "zip": "62206",
  "loc": {
    "y": 38.561899,
    "x": 90.16587
  },
  "pop": 20356,
  "state": "IL"
},{
  "city": "WELLINGTON",
  "zip": "60973",
  "loc": {
    "y": 40.53394,
    "x": 87.65607
  },
  "pop": 782,
  "state": "IL"
},{
  "city": "HANOVER",
  "zip": "61041",
  "loc": {
    "y": 42.259405,
    "x": 90.289707
  },
  "pop": 1559,
  "state": "IL"
},{
  "city": "SCALES MOUND",
  "zip": "61075",
  "loc": {
    "y": 42.471548,
    "x": 90.258033
  },
  "pop": 909,
  "state": "IL"
},{
  "city": "ROCKFORD",
  "zip": "61104",
  "loc": {
    "y": 42.255355,
    "x": 89.076779
  },
  "pop": 19912,
  "state": "IL"
},{
  "city": "ROCKFORD",
  "zip": "61107",
  "loc": {
    "y": 42.278629,
    "x": 89.036107
  },
  "pop": 28879,
  "state": "IL"
},{
  "city": "ROCK ISLAND",
  "zip": "61201",
  "loc": {
    "y": 41.491317,
    "x": 90.564796
  },
  "pop": 37799,
  "state": "IL"
},{
  "city": "ANDALUSIA",
  "zip": "61232",
  "loc": {
    "y": 41.435324,
    "x": 90.728385
  },
  "pop": 1899,
  "state": "IL"
},{
  "city": "ATKINSON",
  "zip": "61235",
  "loc": {
    "y": 41.41619,
    "x": 90.022482
  },
  "pop": 1619,
  "state": "IL"
},{
  "city": "STILLMAN VALLEY",
  "zip": "61084",
  "loc": {
    "y": 42.11835,
    "x": 89.189762
  },
  "pop": 2772,
  "state": "IL"
},{
  "city": "SILVIS",
  "zip": "61282",
  "loc": {
    "y": 41.500677,
    "x": 90.412609
  },
  "pop": 9832,
  "state": "IL"
},{
  "city": "ALPHA",
  "zip": "61413",
  "loc": {
    "y": 41.193029,
    "x": 90.382081
  },
  "pop": 1152,
  "state": "IL"
},{
  "city": "ELLISVILLE",
  "zip": "61431",
  "loc": {
    "y": 40.604652,
    "x": 90.287469
  },
  "pop": 565,
  "state": "IL"
},{
  "city": "GALVA",
  "zip": "61434",
  "loc": {
    "y": 41.165627,
    "x": 90.048093
  },
  "pop": 3725,
  "state": "IL"
},{
  "city": "KEWANEE",
  "zip": "61443",
  "loc": {
    "y": 41.241116,
    "x": 89.92739
  },
  "pop": 14861,
  "state": "IL"
},{
  "city": "MAQUON",
  "zip": "61458",
  "loc": {
    "y": 40.784863,
    "x": 90.200841
  },
  "pop": 1226,
  "state": "IL"
},{
  "city": "ONEIDA",
  "zip": "61467",
  "loc": {
    "y": 41.083236,
    "x": 90.239093
  },
  "pop": 1122,
  "state": "IL"
},{
  "city": "IPAVA",
  "zip": "61441",
  "loc": {
    "y": 40.359375,
    "x": 90.296744
  },
  "pop": 1152,
  "state": "IL"
},{
  "city": "PRAIRIE CITY",
  "zip": "61470",
  "loc": {
    "y": 40.617952,
    "x": 90.472748
  },
  "pop": 651,
  "state": "IL"
},{
  "city": "TABLE GROVE",
  "zip": "61482",
  "loc": {
    "y": 40.378441,
    "x": 90.423901
  },
  "pop": 429,
  "state": "IL"
},{
  "city": "BRIMFIELD",
  "zip": "61517",
  "loc": {
    "y": 40.840654,
    "x": 89.897038
  },
  "pop": 1177,
  "state": "IL"
},{
  "city": "EDWARDS",
  "zip": "61528",
  "loc": {
    "y": 40.764362,
    "x": 89.705344
  },
  "pop": 2896,
  "state": "IL"
},{
  "city": "LACON",
  "zip": "61540",
  "loc": {
    "y": 41.021587,
    "x": 89.400842
  },
  "pop": 2809,
  "state": "IL"
},{
  "city": "PEKIN",
  "zip": "61554",
  "loc": {
    "y": 40.567435,
    "x": 89.624332
  },
  "pop": 44902,
  "state": "IL"
},{
  "city": "MORTON",
  "zip": "61550",
  "loc": {
    "y": 40.614771,
    "x": 89.460445
  },
  "pop": 15207,
  "state": "IL"
},{
  "city": "SUNNYLAND",
  "zip": "61571",
  "loc": {
    "y": 40.699364,
    "x": 89.447926
  },
  "pop": 18931,
  "state": "IL"
},{
  "city": "COOKSVILLE",
  "zip": "61730",
  "loc": {
    "y": 40.536014,
    "x": 88.735047
  },
  "pop": 478,
  "state": "IL"
},{
  "city": "FARMER CITY",
  "zip": "61842",
  "loc": {
    "y": 40.244689,
    "x": 88.663385
  },
  "pop": 2889,
  "state": "IL"
},{
  "city": "SAVOY",
  "zip": "61874",
  "loc": {
    "y": 40.065373,
    "x": 88.252837
  },
  "pop": 2972,
  "state": "IL"
},{
  "city": "THOMASBORO",
  "zip": "61878",
  "loc": {
    "y": 40.240206,
    "x": 88.183033
  },
  "pop": 1638,
  "state": "IL"
},{
  "city": "ARTHUR",
  "zip": "61911",
  "loc": {
    "y": 39.707679,
    "x": 88.455509
  },
  "pop": 4951,
  "state": "IL"
},{
  "city": "TUSCOLA",
  "zip": "61953",
  "loc": {
    "y": 39.799509,
    "x": 88.281585
  },
  "pop": 5056,
  "state": "IL"
},{
  "city": "BATCHTOWN",
  "zip": "62006",
  "loc": {
    "y": 39.072468,
    "x": 90.659114
  },
  "pop": 579,
  "state": "IL"
},{
  "city": "ELDRED",
  "zip": "62027",
  "loc": {
    "y": 39.283592,
    "x": 90.532874
  },
  "pop": 907,
  "state": "IL"
},{
  "city": "FILLMORE",
  "zip": "62032",
  "loc": {
    "y": 39.103872,
    "x": 89.294551
  },
  "pop": 977,
  "state": "IL"
},{
  "city": "GOLDEN EAGLE",
  "zip": "62036",
  "loc": {
    "y": 38.896138,
    "x": 90.560199
  },
  "pop": 266,
  "state": "IL"
},{
  "city": "GREENFIELD",
  "zip": "62044",
  "loc": {
    "y": 39.349058,
    "x": 90.208851
  },
  "pop": 1718,
  "state": "IL"
},{
  "city": "MOUNT OLIVE",
  "zip": "62069",
  "loc": {
    "y": 39.070504,
    "x": 89.744842
  },
  "pop": 3443,
  "state": "IL"
},{
  "city": "WASHINGTON PARK",
  "zip": "62204",
  "loc": {
    "y": 38.631335,
    "x": 90.102008
  },
  "pop": 14425,
  "state": "IL"
},{
  "city": "ALORTON",
  "zip": "62207",
  "loc": {
    "y": 38.58734,
    "x": 90.12829
  },
  "pop": 11681,
  "state": "IL"
},{
  "city": "CHESTER",
  "zip": "62233",
  "loc": {
    "y": 37.918822,
    "x": 89.821807
  },
  "pop": 9436,
  "state": "IL"
},{
  "city": "APPLE RIVER",
  "zip": "61001",
  "loc": {
    "y": 42.471432,
    "x": 90.120145
  },
  "pop": 1010,
  "state": "IL"
},{
  "city": "CHADWICK",
  "zip": "61014",
  "loc": {
    "y": 41.996205,
    "x": 89.896278
  },
  "pop": 1252,
  "state": "IL"
},{
  "city": "MC CONNELL",
  "zip": "61050",
  "loc": {
    "y": 42.439511,
    "x": 89.741545
  },
  "pop": 357,
  "state": "IL"
},{
  "city": "MOUNT MORRIS",
  "zip": "61054",
  "loc": {
    "y": 42.047903,
    "x": 89.434614
  },
  "pop": 4169,
  "state": "IL"
},{
  "city": "OREGON",
  "zip": "61061",
  "loc": {
    "y": 42.009512,
    "x": 89.344364
  },
  "pop": 6482,
  "state": "IL"
},{
  "city": "PEARL CITY",
  "zip": "61062",
  "loc": {
    "y": 42.260972,
    "x": 89.839329
  },
  "pop": 1987,
  "state": "IL"
},{
  "city": "SHANNON",
  "zip": "61078",
  "loc": {
    "y": 42.161049,
    "x": 89.748075
  },
  "pop": 1753,
  "state": "IL"
},{
  "city": "STOCKTON",
  "zip": "61085",
  "loc": {
    "y": 42.349224,
    "x": 90.020185
  },
  "pop": 3489,
  "state": "IL"
},{
  "city": "STERLING",
  "zip": "61081",
  "loc": {
    "y": 41.805511,
    "x": 89.70539
  },
  "pop": 22261,
  "state": "IL"
},{
  "city": "GENESEO",
  "zip": "61254",
  "loc": {
    "y": 41.46881,
    "x": 90.171127
  },
  "pop": 10023,
  "state": "IL"
},{
  "city": "TAMPICO",
  "zip": "61283",
  "loc": {
    "y": 41.652158,
    "x": 89.794793
  },
  "pop": 1753,
  "state": "IL"
},{
  "city": "OGLESBY",
  "zip": "61348",
  "loc": {
    "y": 41.292768,
    "x": 89.055341
  },
  "pop": 5323,
  "state": "IL"
},{
  "city": "SHEFFIELD",
  "zip": "61361",
  "loc": {
    "y": 41.394876,
    "x": 89.711502
  },
  "pop": 1964,
  "state": "IL"
},{
  "city": "GILSON",
  "zip": "61436",
  "loc": {
    "y": 40.876525,
    "x": 90.174663
  },
  "pop": 696,
  "state": "IL"
},{
  "city": "CAMERON",
  "zip": "61423",
  "loc": {
    "y": 40.888963,
    "x": 90.50013
  },
  "pop": 969,
  "state": "IL"
},{
  "city": "KIRKWOOD",
  "zip": "61447",
  "loc": {
    "y": 40.863849,
    "x": 90.745659
  },
  "pop": 1171,
  "state": "IL"
},{
  "city": "KEITHSBURG",
  "zip": "61442",
  "loc": {
    "y": 41.104333,
    "x": 90.926337
  },
  "pop": 1024,
  "state": "IL"
},{
  "city": "SMITHSHIRE",
  "zip": "61478",
  "loc": {
    "y": 40.740021,
    "x": 90.739874
  },
  "pop": 568,
  "state": "IL"
},{
  "city": "CANTON",
  "zip": "61520",
  "loc": {
    "y": 40.560137,
    "x": 90.024151
  },
  "pop": 16309,
  "state": "IL"
},{
  "city": "SAINT DAVID",
  "zip": "61563",
  "loc": {
    "y": 40.522571,
    "x": 90.043739
  },
  "pop": 241,
  "state": "IL"
},{
  "city": "TRIVOLI",
  "zip": "61569",
  "loc": {
    "y": 40.679506,
    "x": 89.913546
  },
  "pop": 1166,
  "state": "IL"
},{
  "city": "PEORIA HEIGHTS",
  "zip": "61603",
  "loc": {
    "y": 40.713915,
    "x": 89.580813
  },
  "pop": 20163,
  "state": "IL"
},{
  "city": "DEER CREEK",
  "zip": "61733",
  "loc": {
    "y": 40.627992,
    "x": 89.3003
  },
  "pop": 2277,
  "state": "IL"
},{
  "city": "FLANAGAN",
  "zip": "61740",
  "loc": {
    "y": 40.879003,
    "x": 88.86196
  },
  "pop": 1424,
  "state": "IL"
},{
  "city": "MC LEAN",
  "zip": "61754",
  "loc": {
    "y": 40.328159,
    "x": 89.164483
  },
  "pop": 1432,
  "state": "IL"
},{
  "city": "CISCO",
  "zip": "61830",
  "loc": {
    "y": 39.997164,
    "x": 88.696153
  },
  "pop": 732,
  "state": "IL"
},{
  "city": "FOOSLAND",
  "zip": "61845",
  "loc": {
    "y": 40.35537,
    "x": 88.420177
  },
  "pop": 319,
  "state": "IL"
},{
  "city": "PONTIAC",
  "zip": "61764",
  "loc": {
    "y": 40.876404,
    "x": 88.632775
  },
  "pop": 14036,
  "state": "IL"
},{
  "city": "BETHANY",
  "zip": "61914",
  "loc": {
    "y": 39.634754,
    "x": 88.754301
  },
  "pop": 1983,
  "state": "IL"
},{
  "city": "GAYS",
  "zip": "61928",
  "loc": {
    "y": 39.479553,
    "x": 88.524153
  },
  "pop": 678,
  "state": "IL"
},{
  "city": "HINDSBORO",
  "zip": "61930",
  "loc": {
    "y": 39.701799,
    "x": 88.148611
  },
  "pop": 811,
  "state": "IL"
},{
  "city": "DORSEY",
  "zip": "62021",
  "loc": {
    "y": 38.983237,
    "x": 89.978635
  },
  "pop": 652,
  "state": "IL"
},{
  "city": "DORCHESTER",
  "zip": "62033",
  "loc": {
    "y": 39.136106,
    "x": 89.818577
  },
  "pop": 6518,
  "state": "IL"
},{
  "city": "WORDEN",
  "zip": "62097",
  "loc": {
    "y": 38.944895,
    "x": 89.853214
  },
  "pop": 1818,
  "state": "IL"
},{
  "city": "SHELDON",
  "zip": "60966",
  "loc": {
    "y": 40.780288,
    "x": 87.57364
  },
  "pop": 1966,
  "state": "IL"
},{
  "city": "ROCKTON",
  "zip": "61072",
  "loc": {
    "y": 42.454371,
    "x": 89.088744
  },
  "pop": 6514,
  "state": "IL"
},{
  "city": "PIPER CITY",
  "zip": "60959",
  "loc": {
    "y": 40.755615,
    "x": 88.187347
  },
  "pop": 1187,
  "state": "IL"
},{
  "city": "DANFORTH",
  "zip": "60930",
  "loc": {
    "y": 40.82443,
    "x": 87.986824
  },
  "pop": 959,
  "state": "IL"
},{
  "city": "FREEPORT",
  "zip": "61032",
  "loc": {
    "y": 42.299148,
    "x": 89.634521
  },
  "pop": 33259,
  "state": "IL"
},{
  "city": "LANARK",
  "zip": "61046",
  "loc": {
    "y": 42.093534,
    "x": 89.824732
  },
  "pop": 1843,
  "state": "IL"
},{
  "city": "ROCK FALLS",
  "zip": "61071",
  "loc": {
    "y": 41.766525,
    "x": 89.692473
  },
  "pop": 14548,
  "state": "IL"
},{
  "city": "BUDA",
  "zip": "61314",
  "loc": {
    "y": 41.313973,
    "x": 89.679476
  },
  "pop": 931,
  "state": "IL"
},{
  "city": "ALTONA",
  "zip": "61414",
  "loc": {
    "y": 41.112828,
    "x": 90.159826
  },
  "pop": 813,
  "state": "IL"
},{
  "city": "KNOXVILLE",
  "zip": "61448",
  "loc": {
    "y": 40.910672,
    "x": 90.287116
  },
  "pop": 5958,
  "state": "IL"
},{
  "city": "MARIETTA",
  "zip": "61459",
  "loc": {
    "y": 40.497775,
    "x": 90.38846
  },
  "pop": 421,
  "state": "IL"
},{
  "city": "RARITAN",
  "zip": "61471",
  "loc": {
    "y": 40.687808,
    "x": 90.831891
  },
  "pop": 345,
  "state": "IL"
},{
  "city": "STRONGHURST",
  "zip": "61480",
  "loc": {
    "y": 40.752265,
    "x": 90.925702
  },
  "pop": 1055,
  "state": "IL"
},{
  "city": "ASTORIA",
  "zip": "61501",
  "loc": {
    "y": 40.231144,
    "x": 90.344254
  },
  "pop": 2093,
  "state": "IL"
},{
  "city": "BENSON",
  "zip": "61516",
  "loc": {
    "y": 40.83058,
    "x": 89.116501
  },
  "pop": 838,
  "state": "IL"
},{
  "city": "METAMORA",
  "zip": "61548",
  "loc": {
    "y": 40.784428,
    "x": 89.430876
  },
  "pop": 9052,
  "state": "IL"
},{
  "city": "BLOOMINGTON",
  "zip": "61701",
  "loc": {
    "y": 40.478295,
    "x": 88.989318
  },
  "pop": 35218,
  "state": "IL"
},{
  "city": "FAIRBURY",
  "zip": "61739",
  "loc": {
    "y": 40.745033,
    "x": 88.516486
  },
  "pop": 4706,
  "state": "IL"
},{
  "city": "SHIRLEY",
  "zip": "61772",
  "loc": {
    "y": 40.417437,
    "x": 89.082181
  },
  "pop": 332,
  "state": "IL"
},{
  "city": "MANSFIELD",
  "zip": "61854",
  "loc": {
    "y": 40.214697,
    "x": 88.517895
  },
  "pop": 1407,
  "state": "IL"
},{
  "city": "SEYMOUR",
  "zip": "61875",
  "loc": {
    "y": 40.103471,
    "x": 88.394431
  },
  "pop": 1135,
  "state": "IL"
},{
  "city": "LOVINGTON",
  "zip": "61937",
  "loc": {
    "y": 39.719192,
    "x": 88.641675
  },
  "pop": 1995,
  "state": "IL"
},{
  "city": "WINDSOR",
  "zip": "61957",
  "loc": {
    "y": 39.430198,
    "x": 88.585747
  },
  "pop": 2019,
  "state": "IL"
},{
  "city": "BINGHAM",
  "zip": "62011",
  "loc": {
    "y": 39.14667,
    "x": 89.195789
  },
  "pop": 565,
  "state": "IL"
},{
  "city": "62020",
  "zip": "62020",
  "loc": {
    "y": 39.048485,
    "x": 89.865796
  },
  "pop": 1517,
  "state": "IL"
},{
  "city": "MITCHELL",
  "zip": "62040",
  "loc": {
    "y": 38.721572,
    "x": 90.115822
  },
  "pop": 48697,
  "state": "IL"
},{
  "city": "MARINE",
  "zip": "62061",
  "loc": {
    "y": 38.785458,
    "x": 89.821376
  },
  "pop": 2020,
  "state": "IL"
},{
  "city": "62064",
  "zip": "62064",
  "loc": {
    "y": 39.010683,
    "x": 90.624693
  },
  "pop": 503,
  "state": "IL"
},{
  "city": "MOZIER",
  "zip": "62070",
  "loc": {
    "y": 39.287719,
    "x": 90.714978
  },
  "pop": 241,
  "state": "IL"
},{
  "city": "WALSHVILLE",
  "zip": "62091",
  "loc": {
    "y": 39.047257,
    "x": 89.634968
  },
  "pop": 359,
  "state": "IL"
},{
  "city": "CHERRY VALLEY",
  "zip": "61016",
  "loc": {
    "y": 42.220562,
    "x": 88.961923
  },
  "pop": 3768,
  "state": "IL"
},{
  "city": "ROCKFORD",
  "zip": "61112",
  "loc": {
    "y": 42.245639,
    "x": 88.970429
  },
  "pop": 15,
  "state": "IL"
},{
  "city": "WINNEBAGO",
  "zip": "61088",
  "loc": {
    "y": 42.272723,
    "x": 89.237316
  },
  "pop": 4059,
  "state": "IL"
},{
  "city": "MALDEN",
  "zip": "61337",
  "loc": {
    "y": 41.437743,
    "x": 89.36761
  },
  "pop": 1109,
  "state": "IL"
},{
  "city": "RUTLAND",
  "zip": "61358",
  "loc": {
    "y": 40.984407,
    "x": 89.038829
  },
  "pop": 629,
  "state": "IL"
},{
  "city": "BUSHNELL",
  "zip": "61422",
  "loc": {
    "y": 40.553916,
    "x": 90.506027
  },
  "pop": 3511,
  "state": "IL"
},{
  "city": "WOODHULL",
  "zip": "61490",
  "loc": {
    "y": 41.184887,
    "x": 90.283282
  },
  "pop": 1390,
  "state": "IL"
},{
  "city": "PEORIA",
  "zip": "61605",
  "loc": {
    "y": 40.677512,
    "x": 89.626325
  },
  "pop": 20320,
  "state": "IL"
},{
  "city": "HOLDER",
  "zip": "61736",
  "loc": {
    "y": 40.380858,
    "x": 88.870814
  },
  "pop": 992,
  "state": "IL"
},{
  "city": "LE ROY",
  "zip": "61752",
  "loc": {
    "y": 40.346781,
    "x": 88.759813
  },
  "pop": 3379,
  "state": "IL"
},{
  "city": "STRAWN",
  "zip": "61775",
  "loc": {
    "y": 40.647615,
    "x": 88.404036
  },
  "pop": 322,
  "state": "IL"
},{
  "city": "WAYNESVILLE",
  "zip": "61778",
  "loc": {
    "y": 40.243673,
    "x": 89.114299
  },
  "pop": 768,
  "state": "IL"
},{
  "city": "ELSAH",
  "zip": "62028",
  "loc": {
    "y": 38.961297,
    "x": 90.331913
  },
  "pop": 2553,
  "state": "IL"
},{
  "city": "MORO",
  "zip": "62067",
  "loc": {
    "y": 38.931769,
    "x": 89.961771
  },
  "pop": 2775,
  "state": "IL"
},{
  "city": "NEW DOUGLAS",
  "zip": "62074",
  "loc": {
    "y": 38.967633,
    "x": 89.739235
  },
  "pop": 2464,
  "state": "IL"
},{
  "city": "ROSSVILLE",
  "zip": "60963",
  "loc": {
    "y": 40.362548,
    "x": 87.669181
  },
  "pop": 2082,
  "state": "IL"
},{
  "city": "CHANA",
  "zip": "61015",
  "loc": {
    "y": 41.993343,
    "x": 89.211693
  },
  "pop": 1167,
  "state": "IL"
},{
  "city": "DAVIS JUNCTION",
  "zip": "61020",
  "loc": {
    "y": 42.09792,
    "x": 89.083838
  },
  "pop": 1263,
  "state": "IL"
},{
  "city": "DURAND",
  "zip": "61024",
  "loc": {
    "y": 42.433653,
    "x": 89.309378
  },
  "pop": 2633,
  "state": "IL"
},{
  "city": "ROCK CITY",
  "zip": "61070",
  "loc": {
    "y": 42.410345,
    "x": 89.475901
  },
  "pop": 1420,
  "state": "IL"
},{
  "city": "ROCKFORD",
  "zip": "61101",
  "loc": {
    "y": 42.292233,
    "x": 89.116118
  },
  "pop": 23908,
  "state": "IL"
},{
  "city": "ANNAWAN",
  "zip": "61234",
  "loc": {
    "y": 41.398022,
    "x": 89.912949
  },
  "pop": 1432,
  "state": "IL"
},{
  "city": "CAMBRIDGE",
  "zip": "61238",
  "loc": {
    "y": 41.311379,
    "x": 90.18048
  },
  "pop": 3265,
  "state": "IL"
},{
  "city": "GREEN ROCK",
  "zip": "61241",
  "loc": {
    "y": 41.475224,
    "x": 90.349231
  },
  "pop": 7809,
  "state": "IL"
},{
  "city": "MOLINE",
  "zip": "61265",
  "loc": {
    "y": 41.490609,
    "x": 90.497968
  },
  "pop": 45240,
  "state": "IL"
},{
  "city": "TAYLOR RIDGE",
  "zip": "61284",
  "loc": {
    "y": 41.382755,
    "x": 90.734047
  },
  "pop": 1090,
  "state": "IL"
},{
  "city": "NEPONSET",
  "zip": "61345",
  "loc": {
    "y": 41.290457,
    "x": 89.794382
  },
  "pop": 819,
  "state": "IL"
},{
  "city": "PERU",
  "zip": "61354",
  "loc": {
    "y": 41.333021,
    "x": 89.126478
  },
  "pop": 10050,
  "state": "IL"
},{
  "city": "SENECA",
  "zip": "61360",
  "loc": {
    "y": 41.315248,
    "x": 88.610013
  },
  "pop": 2246,
  "state": "IL"
},{
  "city": "STREATOR",
  "zip": "61364",
  "loc": {
    "y": 41.12249,
    "x": 88.830672
  },
  "pop": 22239,
  "state": "IL"
},{
  "city": "BIGGSVILLE",
  "zip": "61418",
  "loc": {
    "y": 40.853122,
    "x": 90.856057
  },
  "pop": 627,
  "state": "IL"
},{
  "city": "CARMAN",
  "zip": "61425",
  "loc": {
    "y": 40.755054,
    "x": 91.056396
  },
  "pop": 398,
  "state": "IL"
},{
  "city": "NEW WINDSOR",
  "zip": "61465",
  "loc": {
    "y": 41.198734,
    "x": 90.459842
  },
  "pop": 1171,
  "state": "IL"
},{
  "city": "ROSEVILLE",
  "zip": "61473",
  "loc": {
    "y": 40.723821,
    "x": 90.65145
  },
  "pop": 1734,
  "state": "IL"
},{
  "city": "LEWISTOWN",
  "zip": "61542",
  "loc": {
    "y": 40.383046,
    "x": 90.156287
  },
  "pop": 3849,
  "state": "IL"
},{
  "city": "CARLOCK",
  "zip": "61725",
  "loc": {
    "y": 40.602898,
    "x": 89.109779
  },
  "pop": 1066,
  "state": "IL"
},{
  "city": "DELAVAN",
  "zip": "61734",
  "loc": {
    "y": 40.369029,
    "x": 89.532133
  },
  "pop": 2285,
  "state": "IL"
},{
  "city": "DEWITT",
  "zip": "61735",
  "loc": {
    "y": 40.184759,
    "x": 88.763672
  },
  "pop": 417,
  "state": "IL"
},{
  "city": "SIBLEY",
  "zip": "61773",
  "loc": {
    "y": 40.582315,
    "x": 88.38146
  },
  "pop": 608,
  "state": "IL"
},{
  "city": "COLLISON",
  "zip": "61831",
  "loc": {
    "y": 40.220737,
    "x": 87.798709
  },
  "pop": 421,
  "state": "IL"
},{
  "city": "FISHER",
  "zip": "61843",
  "loc": {
    "y": 40.299126,
    "x": 88.355991
  },
  "pop": 2823,
  "state": "IL"
},{
  "city": "RANTOUL",
  "zip": "61868",
  "loc": {
    "y": 40.295886,
    "x": 88.149884
  },
  "pop": 7185,
  "state": "IL"
},{
  "city": "DALTON CITY",
  "zip": "61925",
  "loc": {
    "y": 39.711943,
    "x": 88.797459
  },
  "pop": 715,
  "state": "IL"
},{
  "city": "HAMMOND",
  "zip": "61929",
  "loc": {
    "y": 39.79465,
    "x": 88.579305
  },
  "pop": 797,
  "state": "IL"
},{
  "city": "ALHAMBRA",
  "zip": "62001",
  "loc": {
    "y": 38.882211,
    "x": 89.744123
  },
  "pop": 1543,
  "state": "IL"
},{
  "city": "DONNELLSON",
  "zip": "62019",
  "loc": {
    "y": 39.034422,
    "x": 89.490858
  },
  "pop": 1010,
  "state": "IL"
},{
  "city": "MADISON",
  "zip": "62060",
  "loc": {
    "y": 38.68109,
    "x": 90.156585
  },
  "pop": 7556,
  "state": "IL"
},{
  "city": "EAST SAINT LOUIS",
  "zip": "62203",
  "loc": {
    "y": 38.599191,
    "x": 90.074449
  },
  "pop": 12435,
  "state": "IL"
},{
  "city": "KEMPTON",
  "zip": "60946",
  "loc": {
    "y": 40.912604,
    "x": 88.209013
  },
  "pop": 462,
  "state": "IL"
},{
  "city": "MOUNT CARROLL",
  "zip": "61053",
  "loc": {
    "y": 42.105308,
    "x": 89.984454
  },
  "pop": 3529,
  "state": "IL"
},{
  "city": "ROCKFORD",
  "zip": "61102",
  "loc": {
    "y": 42.254669,
    "x": 89.124695
  },
  "pop": 19427,
  "state": "IL"
},{
  "city": "ROSCOE",
  "zip": "61073",
  "loc": {
    "y": 42.421659,
    "x": 88.99433
  },
  "pop": 10391,
  "state": "IL"
},{
  "city": "THOMSON",
  "zip": "61285",
  "loc": {
    "y": 41.981626,
    "x": 90.084443
  },
  "pop": 1868,
  "state": "IL"
},{
  "city": "LA SALLE",
  "zip": "61301",
  "loc": {
    "y": 41.344221,
    "x": 89.095468
  },
  "pop": 10188,
  "state": "IL"
},{
  "city": "LEONORE",
  "zip": "61332",
  "loc": {
    "y": 41.166368,
    "x": 88.996936
  },
  "pop": 437,
  "state": "IL"
},{
  "city": "MARSEILLES",
  "zip": "61341",
  "loc": {
    "y": 41.330201,
    "x": 88.694678
  },
  "pop": 7360,
  "state": "IL"
},{
  "city": "TOLUCA",
  "zip": "61369",
  "loc": {
    "y": 41.004553,
    "x": 89.13481
  },
  "pop": 1755,
  "state": "IL"
},{
  "city": "AVON",
  "zip": "61415",
  "loc": {
    "y": 40.654947,
    "x": 90.446053
  },
  "pop": 2125,
  "state": "IL"
},{
  "city": "GLADSTONE",
  "zip": "61437",
  "loc": {
    "y": 40.837682,
    "x": 90.994078
  },
  "pop": 1166,
  "state": "IL"
},{
  "city": "LITTLETON",
  "zip": "61452",
  "loc": {
    "y": 40.233929,
    "x": 90.619008
  },
  "pop": 386,
  "state": "IL"
},{
  "city": "LOMAX",
  "zip": "61454",
  "loc": {
    "y": 40.676143,
    "x": 91.039096
  },
  "pop": 1036,
  "state": "IL"
},{
  "city": "LAURA",
  "zip": "61451",
  "loc": {
    "y": 40.933468,
    "x": 89.934908
  },
  "pop": 500,
  "state": "IL"
},{
  "city": "RIO",
  "zip": "61472",
  "loc": {
    "y": 41.110319,
    "x": 90.389978
  },
  "pop": 570,
  "state": "IL"
},{
  "city": "CHILLICOTHE",
  "zip": "61523",
  "loc": {
    "y": 40.901349,
    "x": 89.506793
  },
  "pop": 9929,
  "state": "IL"
},{
  "city": "FOREST CITY",
  "zip": "61532",
  "loc": {
    "y": 40.35942,
    "x": 89.833426
  },
  "pop": 670,
  "state": "IL"
},{
  "city": "KINGSTON MINES",
  "zip": "61539",
  "loc": {
    "y": 40.49028,
    "x": 89.806791
  },
  "pop": 1745,
  "state": "IL"
},{
  "city": "ANCHOR",
  "zip": "61720",
  "loc": {
    "y": 40.544091,
    "x": 88.526581
  },
  "pop": 393,
  "state": "IL"
},{
  "city": "YATES CITY",
  "zip": "61572",
  "loc": {
    "y": 40.787826,
    "x": 90.026481
  },
  "pop": 1402,
  "state": "IL"
},{
  "city": "GRIDLEY",
  "zip": "61744",
  "loc": {
    "y": 40.74387,
    "x": 88.884044
  },
  "pop": 2142,
  "state": "IL"
},{
  "city": "BEMENT",
  "zip": "61813",
  "loc": {
    "y": 39.922207,
    "x": 88.56877
  },
  "pop": 1928,
  "state": "IL"
},{
  "city": "CATLIN",
  "zip": "61817",
  "loc": {
    "y": 40.069922,
    "x": 87.711255
  },
  "pop": 3359,
  "state": "IL"
},{
  "city": "MAHOMET",
  "zip": "61853",
  "loc": {
    "y": 40.196437,
    "x": 88.39283
  },
  "pop": 8734,
  "state": "IL"
},{
  "city": "URBANA",
  "zip": "61801",
  "loc": {
    "y": 40.109522,
    "x": 88.203631
  },
  "pop": 46110,
  "state": "IL"
},{
  "city": "NEWMAN",
  "zip": "61942",
  "loc": {
    "y": 39.784788,
    "x": 88.000055
  },
  "pop": 1591,
  "state": "IL"
},{
  "city": "BENLD",
  "zip": "62009",
  "loc": {
    "y": 39.093903,
    "x": 89.803057
  },
  "pop": 1604,
  "state": "IL"
},{
  "city": "FIELDON",
  "zip": "62031",
  "loc": {
    "y": 39.108608,
    "x": 90.529742
  },
  "pop": 1382,
  "state": "IL"
},{
  "city": "IRVING",
  "zip": "62051",
  "loc": {
    "y": 39.208903,
    "x": 89.41043
  },
  "pop": 909,
  "state": "IL"
},{
  "city": "ROODHOUSE",
  "zip": "62082",
  "loc": {
    "y": 39.484646,
    "x": 90.349814
  },
  "pop": 3020,
  "state": "IL"
},{
  "city": "RANKIN",
  "zip": "60960",
  "loc": {
    "y": 40.455911,
    "x": 87.888355
  },
  "pop": 1697,
  "state": "IL"
},{
  "city": "CULLOM",
  "zip": "60929",
  "loc": {
    "y": 40.878066,
    "x": 88.276476
  },
  "pop": 782,
  "state": "IL"
},{
  "city": "SAINT ANNE",
  "zip": "60964",
  "loc": {
    "y": 41.048725,
    "x": 87.656363
  },
  "pop": 6081,
  "state": "IL"
},{
  "city": "DAKOTA",
  "zip": "61018",
  "loc": {
    "y": 42.403078,
    "x": 89.546782
  },
  "pop": 1134,
  "state": "IL"
},{
  "city": "ROCKFORD",
  "zip": "61109",
  "loc": {
    "y": 42.216581,
    "x": 89.05118
  },
  "pop": 25246,
  "state": "IL"
},{
  "city": "ALEDO",
  "zip": "61231",
  "loc": {
    "y": 41.20078,
    "x": 90.741629
  },
  "pop": 5189,
  "state": "IL"
},{
  "city": "CORDOVA",
  "zip": "61242",
  "loc": {
    "y": 41.69278,
    "x": 90.307121
  },
  "pop": 954,
  "state": "IL"
},{
  "city": "ERIE",
  "zip": "61250",
  "loc": {
    "y": 41.655958,
    "x": 90.084264
  },
  "pop": 2428,
  "state": "IL"
},{
  "city": "ILLINOIS CITY",
  "zip": "61259",
  "loc": {
    "y": 41.389236,
    "x": 90.892507
  },
  "pop": 1553,
  "state": "IL"
},{
  "city": "REYNOLDS",
  "zip": "61279",
  "loc": {
    "y": 41.327675,
    "x": 90.638367
  },
  "pop": 944,
  "state": "IL"
},{
  "city": "COMPTON",
  "zip": "61318",
  "loc": {
    "y": 41.684976,
    "x": 89.087708
  },
  "pop": 551,
  "state": "IL"
},{
  "city": "DANA",
  "zip": "61321",
  "loc": {
    "y": 40.954675,
    "x": 88.962793
  },
  "pop": 257,
  "state": "IL"
},{
  "city": "HENNEPIN",
  "zip": "61327",
  "loc": {
    "y": 41.235154,
    "x": 89.321791
  },
  "pop": 1111,
  "state": "IL"
},{
  "city": "PRINCETON",
  "zip": "61356",
  "loc": {
    "y": 41.362934,
    "x": 89.427017
  },
  "pop": 12333,
  "state": "IL"
},{
  "city": "LA FAYETTE",
  "zip": "61449",
  "loc": {
    "y": 41.109535,
    "x": 89.957466
  },
  "pop": 454,
  "state": "IL"
},{
  "city": "LA HARPE",
  "zip": "61450",
  "loc": {
    "y": 40.584586,
    "x": 90.968746
  },
  "pop": 1686,
  "state": "IL"
},{
  "city": "SMITHFIELD",
  "zip": "61477",
  "loc": {
    "y": 40.48551,
    "x": 90.285601
  },
  "pop": 647,
  "state": "IL"
},{
  "city": "WATAGA",
  "zip": "61488",
  "loc": {
    "y": 41.022351,
    "x": 90.27231
  },
  "pop": 1197,
  "state": "IL"
},{
  "city": "WILLIAMSFIELD",
  "zip": "61489",
  "loc": {
    "y": 40.927724,
    "x": 90.026725
  },
  "pop": 912,
  "state": "IL"
},{
  "city": "DUNFERMLINE",
  "zip": "61524",
  "loc": {
    "y": 40.490342,
    "x": 90.031349
  },
  "pop": 319,
  "state": "IL"
},{
  "city": "PEORIA",
  "zip": "61602",
  "loc": {
    "y": 40.687987,
    "x": 89.601178
  },
  "pop": 740,
  "state": "IL"
},{
  "city": "ARMINGTON",
  "zip": "61721",
  "loc": {
    "y": 40.317046,
    "x": 89.321775
  },
  "pop": 1163,
  "state": "IL"
},{
  "city": "ALLERTON",
  "zip": "61810",
  "loc": {
    "y": 39.918818,
    "x": 87.931235
  },
  "pop": 405,
  "state": "IL"
},{
  "city": "FITHIAN",
  "zip": "61844",
  "loc": {
    "y": 40.11924,
    "x": 87.879713
  },
  "pop": 673,
  "state": "IL"
},{
  "city": "GIFFORD",
  "zip": "61847",
  "loc": {
    "y": 40.302755,
    "x": 88.031705
  },
  "pop": 1459,
  "state": "IL"
},{
  "city": "OAKWOOD",
  "zip": "61858",
  "loc": {
    "y": 40.116656,
    "x": 87.7825
  },
  "pop": 2852,
  "state": "IL"
},{
  "city": "WESTVILLE",
  "zip": "61883",
  "loc": {
    "y": 40.045113,
    "x": 87.635952
  },
  "pop": 4398,
  "state": "IL"
},{
  "city": "HUME",
  "zip": "61932",
  "loc": {
    "y": 39.800882,
    "x": 87.874659
  },
  "pop": 593,
  "state": "IL"
},{
  "city": "KANSAS",
  "zip": "61933",
  "loc": {
    "y": 39.552533,
    "x": 87.935238
  },
  "pop": 1114,
  "state": "IL"
},{
  "city": "METCALF",
  "zip": "61940",
  "loc": {
    "y": 39.800847,
    "x": 87.795524
  },
  "pop": 554,
  "state": "IL"
},{
  "city": "COTTAGE HILLS",
  "zip": "62018",
  "loc": {
    "y": 38.912377,
    "x": 90.082632
  },
  "pop": 4437,
  "state": "IL"
},{
  "city": "HILLVIEW",
  "zip": "62050",
  "loc": {
    "y": 39.467373,
    "x": 90.512837
  },
  "pop": 795,
  "state": "IL"
},{
  "city": "LITCHFIELD",
  "zip": "62056",
  "loc": {
    "y": 39.179345,
    "x": 89.649915
  },
  "pop": 9172,
  "state": "IL"
},{
  "city": "WITT",
  "zip": "62094",
  "loc": {
    "y": 39.246919,
    "x": 89.341426
  },
  "pop": 1251,
  "state": "IL"
},{
  "city": "SAUGET",
  "zip": "62201",
  "loc": {
    "y": 38.631538,
    "x": 90.138066
  },
  "pop": 11213,
  "state": "IL"
},{
  "city": "FAIRVIEW HEIGHTS",
  "zip": "62208",
  "loc": {
    "y": 38.596044,
    "x": 90.007093
  },
  "pop": 10882,
  "state": "IL"
},{
  "city": "CASEYVILLE",
  "zip": "62232",
  "loc": {
    "y": 38.634458,
    "x": 90.013486
  },
  "pop": 7601,
  "state": "IL"
},{
  "city": "CLIFTON",
  "zip": "60927",
  "loc": {
    "y": 40.939444,
    "x": 87.920237
  },
  "pop": 2033,
  "state": "IL"
},{
  "city": "LENA",
  "zip": "61048",
  "loc": {
    "y": 42.379054,
    "x": 89.825251
  },
  "pop": 4251,
  "state": "IL"
},{
  "city": "LINDENWOOD",
  "zip": "61049",
  "loc": {
    "y": 42.050741,
    "x": 89.033979
  },
  "pop": 351,
  "state": "IL"
},{
  "city": "MONROE CENTER",
  "zip": "61052",
  "loc": {
    "y": 42.10501,
    "x": 89.016946
  },
  "pop": 1327,
  "state": "IL"
},{
  "city": "DIXON",
  "zip": "61021",
  "loc": {
    "y": 41.847797,
    "x": 89.489303
  },
  "pop": 22293,
  "state": "IL"
},{
  "city": "RIDOTT",
  "zip": "61067",
  "loc": {
    "y": 42.299607,
    "x": 89.462664
  },
  "pop": 750,
  "state": "IL"
},{
  "city": "WARREN",
  "zip": "61087",
  "loc": {
    "y": 42.489001,
    "x": 89.985992
  },
  "pop": 1967,
  "state": "IL"
},{
  "city": "JOY",
  "zip": "61260",
  "loc": {
    "y": 41.226198,
    "x": 90.851757
  },
  "pop": 1185,
  "state": "IL"
},{
  "city": "ORION",
  "zip": "61273",
  "loc": {
    "y": 41.363367,
    "x": 90.384929
  },
  "pop": 3121,
  "state": "IL"
},{
  "city": "NEW BOSTON",
  "zip": "61272",
  "loc": {
    "y": 41.215259,
    "x": 90.98786
  },
  "pop": 1663,
  "state": "IL"
},{
  "city": "MAGNOLIA",
  "zip": "61336",
  "loc": {
    "y": 41.116374,
    "x": 89.22701
  },
  "pop": 519,
  "state": "IL"
},{
  "city": "WYANET",
  "zip": "61379",
  "loc": {
    "y": 41.378452,
    "x": 89.574423
  },
  "pop": 1799,
  "state": "IL"
},{
  "city": "MEDIA",
  "zip": "61460",
  "loc": {
    "y": 40.761775,
    "x": 90.85696
  },
  "pop": 484,
  "state": "IL"
},{
  "city": "VERMONT",
  "zip": "61484",
  "loc": {
    "y": 40.30623,
    "x": 90.422028
  },
  "pop": 1112,
  "state": "IL"
},{
  "city": "DUNLAP",
  "zip": "61525",
  "loc": {
    "y": 40.844417,
    "x": 89.639655
  },
  "pop": 4669,
  "state": "IL"
},{
  "city": "ELMWOOD",
  "zip": "61529",
  "loc": {
    "y": 40.772594,
    "x": 89.928882
  },
  "pop": 2698,
  "state": "IL"
},{
  "city": "TOPEKA",
  "zip": "61567",
  "loc": {
    "y": 40.38108,
    "x": 89.93263
  },
  "pop": 969,
  "state": "IL"
},{
  "city": "FORREST",
  "zip": "61741",
  "loc": {
    "y": 40.751324,
    "x": 88.411143
  },
  "pop": 1809,
  "state": "IL"
},{
  "city": "MACKINAW",
  "zip": "61755",
  "loc": {
    "y": 40.539643,
    "x": 89.345795
  },
  "pop": 2772,
  "state": "IL"
},{
  "city": "MINIER",
  "zip": "61759",
  "loc": {
    "y": 40.435889,
    "x": 89.316484
  },
  "pop": 1483,
  "state": "IL"
},{
  "city": "CERRO GORDO",
  "zip": "61818",
  "loc": {
    "y": 39.868062,
    "x": 88.725634
  },
  "pop": 2060,
  "state": "IL"
},{
  "city": "SECOR",
  "zip": "61771",
  "loc": {
    "y": 40.722402,
    "x": 89.127065
  },
  "pop": 952,
  "state": "IL"
},{
  "city": "DEWEY",
  "zip": "61840",
  "loc": {
    "y": 40.313055,
    "x": 88.276966
  },
  "pop": 548,
  "state": "IL"
},{
  "city": "SIDELL",
  "zip": "61876",
  "loc": {
    "y": 39.911018,
    "x": 87.824802
  },
  "pop": 703,
  "state": "IL"
},{
  "city": "MATTOON",
  "zip": "61938",
  "loc": {
    "y": 39.480184,
    "x": 88.376152
  },
  "pop": 23012,
  "state": "IL"
},{
  "city": "PARIS",
  "zip": "61944",
  "loc": {
    "y": 39.613219,
    "x": 87.697631
  },
  "pop": 12509,
  "state": "IL"
},{
  "city": "BETHALTO",
  "zip": "62010",
  "loc": {
    "y": 38.907353,
    "x": 90.034447
  },
  "pop": 10587,
  "state": "IL"
},{
  "city": "CHRISMAN",
  "zip": "61924",
  "loc": {
    "y": 39.799572,
    "x": 87.655552
  },
  "pop": 2269,
  "state": "IL"
},{
  "city": "COFFEEN",
  "zip": "62017",
  "loc": {
    "y": 39.090757,
    "x": 89.39454
  },
  "pop": 1207,
  "state": "IL"
},{
  "city": "HAMBURG",
  "zip": "62045",
  "loc": {
    "y": 39.223488,
    "x": 90.699546
  },
  "pop": 383,
  "state": "IL"
},{
  "city": "KAMPSVILLE",
  "zip": "62053",
  "loc": {
    "y": 39.306388,
    "x": 90.626934
  },
  "pop": 623,
  "state": "IL"
},{
  "city": "NOKOMIS",
  "zip": "62075",
  "loc": {
    "y": 39.303642,
    "x": 89.285297
  },
  "pop": 4576,
  "state": "IL"
},{
  "city": "WHITE HALL",
  "zip": "62092",
  "loc": {
    "y": 39.428804,
    "x": 90.401899
  },
  "pop": 3882,
  "state": "IL"
},{
  "city": "BELLEVILLE",
  "zip": "62221",
  "loc": {
    "y": 38.539639,
    "x": 89.958302
  },
  "pop": 29321,
  "state": "IL"
},{
  "city": "CARLYLE",
  "zip": "62231",
  "loc": {
    "y": 38.606609,
    "x": 89.380544
  },
  "pop": 6529,
  "state": "IL"
},{
  "city": "REDDICK",
  "zip": "60961",
  "loc": {
    "y": 41.10053,
    "x": 88.208928
  },
  "pop": 480,
  "state": "IL"
},{
  "city": "ESSEX",
  "zip": "60935",
  "loc": {
    "y": 41.167644,
    "x": 88.184528
  },
  "pop": 994,
  "state": "IL"
},{
  "city": "ELIZABETH",
  "zip": "61028",
  "loc": {
    "y": 42.308942,
    "x": 90.19862
  },
  "pop": 1951,
  "state": "IL"
},{
  "city": "DAVIS",
  "zip": "61019",
  "loc": {
    "y": 42.442157,
    "x": 89.406721
  },
  "pop": 2337,
  "state": "IL"
},{
  "city": "PECATONICA",
  "zip": "61063",
  "loc": {
    "y": 42.305111,
    "x": 89.347225
  },
  "pop": 3554,
  "state": "IL"
},{
  "city": "WINSLOW",
  "zip": "61089",
  "loc": {
    "y": 42.48383,
    "x": 89.806028
  },
  "pop": 887,
  "state": "IL"
},{
  "city": "DALZELL",
  "zip": "61320",
  "loc": {
    "y": 41.373077,
    "x": 89.203269
  },
  "pop": 2255,
  "state": "IL"
},{
  "city": "LONG POINT",
  "zip": "61333",
  "loc": {
    "y": 40.989553,
    "x": 88.881106
  },
  "pop": 541,
  "state": "IL"
},{
  "city": "LA MOILLE",
  "zip": "61330",
  "loc": {
    "y": 41.537557,
    "x": 89.297024
  },
  "pop": 1315,
  "state": "IL"
},{
  "city": "ALEXIS",
  "zip": "61412",
  "loc": {
    "y": 41.052146,
    "x": 90.543576
  },
  "pop": 1866,
  "state": "IL"
},{
  "city": "HANNA CITY",
  "zip": "61536",
  "loc": {
    "y": 40.679776,
    "x": 89.795242
  },
  "pop": 3255,
  "state": "IL"
},{
  "city": "MANITO",
  "zip": "61546",
  "loc": {
    "y": 40.415991,
    "x": 89.789791
  },
  "pop": 2593,
  "state": "IL"
},{
  "city": "ROANOKE",
  "zip": "61561",
  "loc": {
    "y": 40.795601,
    "x": 89.209334
  },
  "pop": 2653,
  "state": "IL"
},{
  "city": "CONGERVILLE",
  "zip": "61729",
  "loc": {
    "y": 40.620762,
    "x": 89.199397
  },
  "pop": 802,
  "state": "IL"
},{
  "city": "EAST PEORIA",
  "zip": "61611",
  "loc": {
    "y": 40.673121,
    "x": 89.55141
  },
  "pop": 29630,
  "state": "IL"
},{
  "city": "PEORIA HEIGHTS",
  "zip": "61614",
  "loc": {
    "y": 40.75481,
    "x": 89.603295
  },
  "pop": 35177,
  "state": "IL"
},{
  "city": "COLFAX",
  "zip": "61728",
  "loc": {
    "y": 40.570377,
    "x": 88.620016
  },
  "pop": 1391,
  "state": "IL"
},{
  "city": "EL PASO",
  "zip": "61738",
  "loc": {
    "y": 40.738948,
    "x": 89.011952
  },
  "pop": 3338,
  "state": "IL"
},{
  "city": "MAROA",
  "zip": "61756",
  "loc": {
    "y": 40.034159,
    "x": 88.957769
  },
  "pop": 1883,
  "state": "IL"
},{
  "city": "ALVIN",
  "zip": "61811",
  "loc": {
    "y": 40.3007,
    "x": 87.608003
  },
  "pop": 817,
  "state": "IL"
},{
  "city": "ARMSTRONG",
  "zip": "61812",
  "loc": {
    "y": 40.217548,
    "x": 87.894256
  },
  "pop": 247,
  "state": "IL"
},{
  "city": "MILMINE",
  "zip": "61855",
  "loc": {
    "y": 39.900702,
    "x": 88.648696
  },
  "pop": 148,
  "state": "IL"
},{
  "city": "OGDEN",
  "zip": "61859",
  "loc": {
    "y": 40.140117,
    "x": 87.966499
  },
  "pop": 1397,
  "state": "IL"
},{
  "city": "POTOMAC",
  "zip": "61865",
  "loc": {
    "y": 40.309,
    "x": 87.823192
  },
  "pop": 1544,
  "state": "IL"
},{
  "city": "PESOTUM",
  "zip": "61863",
  "loc": {
    "y": 39.9151,
    "x": 88.274331
  },
  "pop": 774,
  "state": "IL"
},{
  "city": "RIDGE FARM",
  "zip": "61870",
  "loc": {
    "y": 39.915455,
    "x": 87.634578
  },
  "pop": 2094,
  "state": "IL"
},{
  "city": "RANTOUL",
  "zip": "61866",
  "loc": {
    "y": 40.310742,
    "x": 88.146179
  },
  "pop": 11146,
  "state": "IL"
},{
  "city": "WELDON",
  "zip": "61882",
  "loc": {
    "y": 40.117741,
    "x": 88.753055
  },
  "pop": 579,
  "state": "IL"
},{
  "city": "HUMBOLDT",
  "zip": "61931",
  "loc": {
    "y": 39.60118,
    "x": 88.314089
  },
  "pop": 856,
  "state": "IL"
},{
  "city": "BRIGHTON",
  "zip": "62012",
  "loc": {
    "y": 39.036098,
    "x": 90.144312
  },
  "pop": 6467,
  "state": "IL"
},{
  "city": "MICHAEL",
  "zip": "62065",
  "loc": {
    "y": 39.21821,
    "x": 90.633498
  },
  "pop": 343,
  "state": "IL"
},{
  "city": "BALDWIN",
  "zip": "62217",
  "loc": {
    "y": 38.175351,
    "x": 89.841391
  },
  "pop": 1093,
  "state": "IL"
},{
  "city": "COLUMBIA",
  "zip": "62236",
  "loc": {
    "y": 38.432469,
    "x": 90.202717
  },
  "pop": 8489,
  "state": "IL"
},{
  "city": "VENEDY",
  "zip": "62214",
  "loc": {
    "y": 38.360422,
    "x": 89.52273
  },
  "pop": 539,
  "state": "IL"
},{
  "city": "ELLIS GROVE",
  "zip": "62241",
  "loc": {
    "y": 38.005358,
    "x": 89.900847
  },
  "pop": 999,
  "state": "IL"
},{
  "city": "RENAULT",
  "zip": "62279",
  "loc": {
    "y": 38.170396,
    "x": 90.095043
  },
  "pop": 929,
  "state": "IL"
},{
  "city": "SAINT JACOB",
  "zip": "62281",
  "loc": {
    "y": 38.72448,
    "x": 89.669616
  },
  "pop": 5477,
  "state": "IL"
},{
  "city": "TRENTON",
  "zip": "62293",
  "loc": {
    "y": 38.619102,
    "x": 89.644696
  },
  "pop": 5574,
  "state": "IL"
},{
  "city": "BURNSIDE",
  "zip": "62318",
  "loc": {
    "y": 40.497445,
    "x": 91.142392
  },
  "pop": 770,
  "state": "IL"
},{
  "city": "LA PRAIRIE",
  "zip": "62346",
  "loc": {
    "y": 40.157191,
    "x": 90.984387
  },
  "pop": 218,
  "state": "IL"
},{
  "city": "HIDALGO",
  "zip": "62432",
  "loc": {
    "y": 39.122808,
    "x": 88.139706
  },
  "pop": 820,
  "state": "IL"
},{
  "city": "SIGEL",
  "zip": "62462",
  "loc": {
    "y": 39.21762,
    "x": 88.480301
  },
  "pop": 2239,
  "state": "IL"
},{
  "city": "WATSON",
  "zip": "62473",
  "loc": {
    "y": 39.039488,
    "x": 88.559876
  },
  "pop": 2740,
  "state": "IL"
},{
  "city": "WESTFIELD",
  "zip": "62474",
  "loc": {
    "y": 39.442369,
    "x": 88.044799
  },
  "pop": 1602,
  "state": "IL"
},{
  "city": "MORRISONVILLE",
  "zip": "62546",
  "loc": {
    "y": 39.415336,
    "x": 89.45407
  },
  "pop": 1418,
  "state": "IL"
},{
  "city": "CLARKSBURG",
  "zip": "62565",
  "loc": {
    "y": 39.404873,
    "x": 88.804615
  },
  "pop": 7481,
  "state": "IL"
},{
  "city": "DOLLVILLE",
  "zip": "62571",
  "loc": {
    "y": 39.36576,
    "x": 88.974517
  },
  "pop": 1505,
  "state": "IL"
},{
  "city": "WAGGONER",
  "zip": "62572",
  "loc": {
    "y": 39.38383,
    "x": 89.647429
  },
  "pop": 547,
  "state": "IL"
},{
  "city": "COMER",
  "zip": "62626",
  "loc": {
    "y": 39.279821,
    "x": 89.888935
  },
  "pop": 7343,
  "state": "IL"
},{
  "city": "CONCORD",
  "zip": "62631",
  "loc": {
    "y": 39.822958,
    "x": 90.372175
  },
  "pop": 460,
  "state": "IL"
},{
  "city": "BROADWELL",
  "zip": "62634",
  "loc": {
    "y": 40.002394,
    "x": 89.474938
  },
  "pop": 922,
  "state": "IL"
},{
  "city": "LOAMI",
  "zip": "62661",
  "loc": {
    "y": 39.670394,
    "x": 89.858823
  },
  "pop": 1286,
  "state": "IL"
},{
  "city": "STEELEVILLE",
  "zip": "62288",
  "loc": {
    "y": 38.005713,
    "x": 89.666458
  },
  "pop": 2951,
  "state": "IL"
},{
  "city": "MIDDLETOWN",
  "zip": "62666",
  "loc": {
    "y": 40.096668,
    "x": 89.58182
  },
  "pop": 586,
  "state": "IL"
},{
  "city": "LIMA",
  "zip": "62348",
  "loc": {
    "y": 40.170098,
    "x": 91.386756
  },
  "pop": 559,
  "state": "IL"
},{
  "city": "ALLENDALE",
  "zip": "62410",
  "loc": {
    "y": 38.523236,
    "x": 87.721901
  },
  "pop": 1051,
  "state": "IL"
},{
  "city": "NILWOOD",
  "zip": "62672",
  "loc": {
    "y": 39.387199,
    "x": 89.778411
  },
  "pop": 633,
  "state": "IL"
},{
  "city": "OBLONG",
  "zip": "62449",
  "loc": {
    "y": 39.001043,
    "x": 87.895016
  },
  "pop": 3508,
  "state": "IL"
},{
  "city": "DECATUR",
  "zip": "62523",
  "loc": {
    "y": 39.841694,
    "x": 88.953435
  },
  "pop": 864,
  "state": "IL"
},{
  "city": "CENTRALIA",
  "zip": "62801",
  "loc": {
    "y": 38.524117,
    "x": 89.136478
  },
  "pop": 23956,
  "state": "IL"
},{
  "city": "GLENARM",
  "zip": "62536",
  "loc": {
    "y": 39.632713,
    "x": 89.658144
  },
  "pop": 739,
  "state": "IL"
},{
  "city": "WILLIAMSVILLE",
  "zip": "62693",
  "loc": {
    "y": 39.930438,
    "x": 89.534172
  },
  "pop": 2320,
  "state": "IL"
},{
  "city": "LATHAM",
  "zip": "62543",
  "loc": {
    "y": 39.97111,
    "x": 89.172492
  },
  "pop": 857,
  "state": "IL"
},{
  "city": "OCONEE",
  "zip": "62553",
  "loc": {
    "y": 39.288408,
    "x": 89.083636
  },
  "pop": 796,
  "state": "IL"
},{
  "city": "EWING",
  "zip": "62836",
  "loc": {
    "y": 38.07021,
    "x": 88.850441
  },
  "pop": 1286,
  "state": "IL"
},{
  "city": "WAYNE CITY",
  "zip": "62895",
  "loc": {
    "y": 38.332808,
    "x": 88.583317
  },
  "pop": 1523,
  "state": "IL"
},{
  "city": "HEMAN",
  "zip": "62573",
  "loc": {
    "y": 39.939737,
    "x": 89.068316
  },
  "pop": 1780,
  "state": "IL"
},{
  "city": "RAYMOND",
  "zip": "62560",
  "loc": {
    "y": 39.310551,
    "x": 89.585135
  },
  "pop": 1660,
  "state": "IL"
},{
  "city": "CACHE",
  "zip": "62913",
  "loc": {
    "y": 37.114131,
    "x": 89.298018
  },
  "pop": 80,
  "state": "IL"
},{
  "city": "HUBLY",
  "zip": "62642",
  "loc": {
    "y": 40.079859,
    "x": 89.711606
  },
  "pop": 1499,
  "state": "IL"
},{
  "city": "EDDYVILLE",
  "zip": "62928",
  "loc": {
    "y": 37.52439,
    "x": 88.594893
  },
  "pop": 677,
  "state": "IL"
},{
  "city": "HARTSBURG",
  "zip": "62643",
  "loc": {
    "y": 40.245073,
    "x": 89.451944
  },
  "pop": 602,
  "state": "IL"
},{
  "city": "OAKFORD",
  "zip": "62673",
  "loc": {
    "y": 40.099445,
    "x": 89.960135
  },
  "pop": 493,
  "state": "IL"
},{
  "city": "BONNIE",
  "zip": "62816",
  "loc": {
    "y": 38.198017,
    "x": 88.922884
  },
  "pop": 994,
  "state": "IL"
},{
  "city": "MC CLURE",
  "zip": "62957",
  "loc": {
    "y": 37.301983,
    "x": 89.453119
  },
  "pop": 1231,
  "state": "IL"
},{
  "city": "MILLER CITY",
  "zip": "62962",
  "loc": {
    "y": 37.103359,
    "x": 89.349443
  },
  "pop": 122,
  "state": "IL"
},{
  "city": "DALE",
  "zip": "62829",
  "loc": {
    "y": 37.996585,
    "x": 88.534231
  },
  "pop": 594,
  "state": "IL"
},{
  "city": "GALE",
  "zip": "62990",
  "loc": {
    "y": 37.191554,
    "x": 89.396896
  },
  "pop": 1732,
  "state": "IL"
},{
  "city": "DU BOIS",
  "zip": "62831",
  "loc": {
    "y": 38.252638,
    "x": 89.204187
  },
  "pop": 732,
  "state": "IL"
},{
  "city": "FAIRFIELD",
  "zip": "62837",
  "loc": {
    "y": 38.378214,
    "x": 88.359323
  },
  "pop": 8723,
  "state": "IL"
},{
  "city": "TUNNEL HILL",
  "zip": "62991",
  "loc": {
    "y": 37.573676,
    "x": 88.883459
  },
  "pop": 867,
  "state": "IL"
},{
  "city": "FOREST",
  "zip": "46039",
  "loc": {
    "y": 40.375728,
    "x": 86.320098
  },
  "pop": 879,
  "state": "IN"
},{
  "city": "FRANKFORT HEIGHT",
  "zip": "62840",
  "loc": {
    "y": 37.901301,
    "x": 88.845651
  },
  "pop": 778,
  "state": "IL"
},{
  "city": "GRANDVIEW",
  "zip": "62702",
  "loc": {
    "y": 39.816768,
    "x": 89.644147
  },
  "pop": 42047,
  "state": "IL"
},{
  "city": "VERNON",
  "zip": "62892",
  "loc": {
    "y": 38.803328,
    "x": 89.083001
  },
  "pop": 371,
  "state": "IL"
},{
  "city": "INGALLS",
  "zip": "46048",
  "loc": {
    "y": 40.000237,
    "x": 85.825596
  },
  "pop": 763,
  "state": "IN"
},{
  "city": "COBDEN",
  "zip": "62920",
  "loc": {
    "y": 37.542358,
    "x": 89.245741
  },
  "pop": 2348,
  "state": "IL"
},{
  "city": "WINDFALL",
  "zip": "46076",
  "loc": {
    "y": 40.366891,
    "x": 85.947624
  },
  "pop": 1535,
  "state": "IN"
},{
  "city": "BROWNSBURG",
  "zip": "46112",
  "loc": {
    "y": 39.846605,
    "x": 86.386933
  },
  "pop": 18768,
  "state": "IN"
},{
  "city": "GALATIA",
  "zip": "62935",
  "loc": {
    "y": 37.827444,
    "x": 88.623488
  },
  "pop": 2802,
  "state": "IL"
},{
  "city": "MILLCREEK",
  "zip": "62961",
  "loc": {
    "y": 37.353127,
    "x": 89.269889
  },
  "pop": 356,
  "state": "IL"
},{
  "city": "GREENFIELD",
  "zip": "46140",
  "loc": {
    "y": 39.790204,
    "x": 85.814102
  },
  "pop": 28919,
  "state": "IN"
},{
  "city": "MOUNDS",
  "zip": "62964",
  "loc": {
    "y": 37.11883,
    "x": 89.200064
  },
  "pop": 2064,
  "state": "IL"
},{
  "city": "ROBBS",
  "zip": "62985",
  "loc": {
    "y": 37.463032,
    "x": 88.762459
  },
  "pop": 507,
  "state": "IL"
},{
  "city": "GREENWOOD",
  "zip": "46142",
  "loc": {
    "y": 39.622398,
    "x": 86.148993
  },
  "pop": 24735,
  "state": "IN"
},{
  "city": "TAMMS",
  "zip": "62988",
  "loc": {
    "y": 37.234493,
    "x": 89.276346
  },
  "pop": 2020,
  "state": "IL"
},{
  "city": "LAPEL",
  "zip": "46051",
  "loc": {
    "y": 40.085429,
    "x": 85.84395
  },
  "pop": 3221,
  "state": "IN"
},{
  "city": "LIZTON",
  "zip": "46149",
  "loc": {
    "y": 39.884326,
    "x": 86.542857
  },
  "pop": 1586,
  "state": "IN"
},{
  "city": "NINEVEH",
  "zip": "46164",
  "loc": {
    "y": 39.365597,
    "x": 86.097641
  },
  "pop": 3528,
  "state": "IN"
},{
  "city": "WHITESTOWN",
  "zip": "46075",
  "loc": {
    "y": 40.00002,
    "x": 86.350716
  },
  "pop": 1378,
  "state": "IN"
},{
  "city": "GLENWOOD",
  "zip": "46133",
  "loc": {
    "y": 39.612436,
    "x": 85.273532
  },
  "pop": 149,
  "state": "IN"
},{
  "city": "KNIGHTSTOWN",
  "zip": "46148",
  "loc": {
    "y": 39.806029,
    "x": 85.526148
  },
  "pop": 3842,
  "state": "IN"
},{
  "city": "TRAFALGAR",
  "zip": "46181",
  "loc": {
    "y": 39.369585,
    "x": 86.183793
  },
  "pop": 3538,
  "state": "IN"
},{
  "city": "CUTLER",
  "zip": "62238",
  "loc": {
    "y": 38.042663,
    "x": 89.566127
  },
  "pop": 787,
  "state": "IL"
},{
  "city": "GERMANTOWN",
  "zip": "62245",
  "loc": {
    "y": 38.548677,
    "x": 89.54134
  },
  "pop": 1773,
  "state": "IL"
},{
  "city": "MAEYSTOWN",
  "zip": "62256",
  "loc": {
    "y": 38.24112,
    "x": 90.20178
  },
  "pop": 592,
  "state": "IL"
},{
  "city": "EAST CARONDELET",
  "zip": "62240",
  "loc": {
    "y": 38.534912,
    "x": 90.220782
  },
  "pop": 1579,
  "state": "IL"
},{
  "city": "DUPO",
  "zip": "62239",
  "loc": {
    "y": 38.514771,
    "x": 90.194188
  },
  "pop": 5663,
  "state": "IL"
},{
  "city": "NEW BADEN",
  "zip": "62265",
  "loc": {
    "y": 38.531485,
    "x": 89.692232
  },
  "pop": 3455,
  "state": "IL"
},{
  "city": "SMITHTON",
  "zip": "62285",
  "loc": {
    "y": 38.423137,
    "x": 89.989604
  },
  "pop": 2749,
  "state": "IL"
},{
  "city": "WATERLOO",
  "zip": "62298",
  "loc": {
    "y": 38.322273,
    "x": 90.147773
  },
  "pop": 8482,
  "state": "IL"
},{
  "city": "CLAYTON",
  "zip": "62324",
  "loc": {
    "y": 40.013342,
    "x": 90.955394
  },
  "pop": 1354,
  "state": "IL"
},{
  "city": "BARRY",
  "zip": "62312",
  "loc": {
    "y": 39.704662,
    "x": 91.026482
  },
  "pop": 2697,
  "state": "IL"
},{
  "city": "PALOMA",
  "zip": "62359",
  "loc": {
    "y": 40.036616,
    "x": 91.205287
  },
  "pop": 254,
  "state": "IL"
},{
  "city": "TENNESSEE",
  "zip": "62374",
  "loc": {
    "y": 40.41399,
    "x": 90.855605
  },
  "pop": 414,
  "state": "IL"
},{
  "city": "SUTTER",
  "zip": "62373",
  "loc": {
    "y": 40.309683,
    "x": 91.376094
  },
  "pop": 747,
  "state": "IL"
},{
  "city": "BIRDS",
  "zip": "62415",
  "loc": {
    "y": 38.812059,
    "x": 87.681545
  },
  "pop": 842,
  "state": "IL"
},{
  "city": "LERNA",
  "zip": "62440",
  "loc": {
    "y": 39.39579,
    "x": 88.253026
  },
  "pop": 1289,
  "state": "IL"
},{
  "city": "MARSHALL",
  "zip": "62441",
  "loc": {
    "y": 39.421999,
    "x": 87.692261
  },
  "pop": 8305,
  "state": "IL"
},{
  "city": "EDINBURG",
  "zip": "62531",
  "loc": {
    "y": 39.661223,
    "x": 89.377884
  },
  "pop": 1925,
  "state": "IL"
},{
  "city": "ARENZVILLE",
  "zip": "62611",
  "loc": {
    "y": 39.897927,
    "x": 90.363595
  },
  "pop": 1008,
  "state": "IL"
},{
  "city": "ALBION",
  "zip": "62806",
  "loc": {
    "y": 38.374003,
    "x": 88.063557
  },
  "pop": 3162,
  "state": "IL"
},{
  "city": "KINMUNDY",
  "zip": "62854",
  "loc": {
    "y": 38.755857,
    "x": 88.812999
  },
  "pop": 2134,
  "state": "IL"
},{
  "city": "LANCASTER",
  "zip": "62855",
  "loc": {
    "y": 38.537438,
    "x": 87.871216
  },
  "pop": 567,
  "state": "IL"
},{
  "city": "NOBLE",
  "zip": "62868",
  "loc": {
    "y": 38.711851,
    "x": 88.219038
  },
  "pop": 2425,
  "state": "IL"
},{
  "city": "SCHELLER",
  "zip": "62883",
  "loc": {
    "y": 38.173095,
    "x": 89.092691
  },
  "pop": 528,
  "state": "IL"
},{
  "city": "WHITTINGTON",
  "zip": "62897",
  "loc": {
    "y": 38.098937,
    "x": 88.863456
  },
  "pop": 370,
  "state": "IL"
},{
  "city": "ANNA",
  "zip": "62906",
  "loc": {
    "y": 37.466777,
    "x": 89.220684
  },
  "pop": 8151,
  "state": "IL"
},{
  "city": "HEROD",
  "zip": "62947",
  "loc": {
    "y": 37.469731,
    "x": 88.458062
  },
  "pop": 699,
  "state": "IL"
},{
  "city": "MURPHYSBORO",
  "zip": "62966",
  "loc": {
    "y": 37.765464,
    "x": 89.331749
  },
  "pop": 15335,
  "state": "IL"
},{
  "city": "POMONA",
  "zip": "62975",
  "loc": {
    "y": 37.641081,
    "x": 89.336308
  },
  "pop": 769,
  "state": "IL"
},{
  "city": "ROSICLARE",
  "zip": "62982",
  "loc": {
    "y": 37.423987,
    "x": 88.346189
  },
  "pop": 1422,
  "state": "IL"
},{
  "city": "CHESTERFIELD",
  "zip": "46017",
  "loc": {
    "y": 40.096431,
    "x": 85.601493
  },
  "pop": 6038,
  "state": "IN"
},{
  "city": "FOUNTAINTOWN",
  "zip": "46130",
  "loc": {
    "y": 39.675131,
    "x": 85.784827
  },
  "pop": 1555,
  "state": "IN"
},{
  "city": "AVON",
  "zip": "46168",
  "loc": {
    "y": 39.716036,
    "x": 86.395061
  },
  "pop": 29182,
  "state": "IN"
},{
  "city": "WALDRON",
  "zip": "46182",
  "loc": {
    "y": 39.468849,
    "x": 85.664407
  },
  "pop": 1878,
  "state": "IN"
},{
  "city": "MILLSTADT",
  "zip": "62260",
  "loc": {
    "y": 38.444264,
    "x": 90.088818
  },
  "pop": 4979,
  "state": "IL"
},{
  "city": "MULBERRY GROVE",
  "zip": "62262",
  "loc": {
    "y": 38.931082,
    "x": 89.246297
  },
  "pop": 1721,
  "state": "IL"
},{
  "city": "COLCHESTER",
  "zip": "62326",
  "loc": {
    "y": 40.415643,
    "x": 90.78456
  },
  "pop": 2470,
  "state": "IL"
},{
  "city": "NEW CANTON",
  "zip": "62356",
  "loc": {
    "y": 39.634242,
    "x": 91.088556
  },
  "pop": 658,
  "state": "IL"
},{
  "city": "MARTINSVILLE",
  "zip": "62442",
  "loc": {
    "y": 39.317443,
    "x": 87.870737
  },
  "pop": 1881,
  "state": "IL"
},{
  "city": "NEOGA",
  "zip": "62447",
  "loc": {
    "y": 39.322024,
    "x": 88.450288
  },
  "pop": 3494,
  "state": "IL"
},{
  "city": "ASSUMPTION",
  "zip": "62510",
  "loc": {
    "y": 39.509489,
    "x": 89.039807
  },
  "pop": 1949,
  "state": "IL"
},{
  "city": "CASNER",
  "zip": "62552",
  "loc": {
    "y": 39.896897,
    "x": 88.805591
  },
  "pop": 810,
  "state": "IL"
},{
  "city": "NORTONVILLE",
  "zip": "62668",
  "loc": {
    "y": 39.572952,
    "x": 90.231189
  },
  "pop": 1387,
  "state": "IL"
},{
  "city": "BARR",
  "zip": "62674",
  "loc": {
    "y": 39.41654,
    "x": 89.956736
  },
  "pop": 1490,
  "state": "IL"
},{
  "city": "TALLULA",
  "zip": "62688",
  "loc": {
    "y": 39.940188,
    "x": 89.882274
  },
  "pop": 1427,
  "state": "IL"
},{
  "city": "ANDREW",
  "zip": "62707",
  "loc": {
    "y": 39.772842,
    "x": 89.663991
  },
  "pop": 16264,
  "state": "IL"
},{
  "city": "BONE GAP",
  "zip": "62815",
  "loc": {
    "y": 38.448967,
    "x": 88.002491
  },
  "pop": 496,
  "state": "IL"
},{
  "city": "CARMI",
  "zip": "62821",
  "loc": {
    "y": 38.080819,
    "x": 88.166987
  },
  "pop": 8234,
  "state": "IL"
},{
  "city": "CHRISTOPHER",
  "zip": "62822",
  "loc": {
    "y": 37.984905,
    "x": 89.057367
  },
  "pop": 5042,
  "state": "IL"
},{
  "city": "BIBLE GROVE",
  "zip": "62858",
  "loc": {
    "y": 38.811856,
    "x": 88.510046
  },
  "pop": 3688,
  "state": "IL"
},{
  "city": "MILL SHOALS",
  "zip": "62862",
  "loc": {
    "y": 38.244675,
    "x": 88.333817
  },
  "pop": 412,
  "state": "IL"
},{
  "city": "SESSER",
  "zip": "62884",
  "loc": {
    "y": 38.089422,
    "x": 89.057404
  },
  "pop": 2844,
  "state": "IL"
},{
  "city": "CARBONDALE",
  "zip": "62901",
  "loc": {
    "y": 37.719994,
    "x": 89.215762
  },
  "pop": 31742,
  "state": "IL"
},{
  "city": "GRANTSBURG",
  "zip": "62943",
  "loc": {
    "y": 37.39672,
    "x": 88.770489
  },
  "pop": 2549,
  "state": "IL"
},{
  "city": "ALEXANDRIA",
  "zip": "46001",
  "loc": {
    "y": 40.256081,
    "x": 85.668148
  },
  "pop": 11011,
  "state": "IN"
},{
  "city": "MULBERRY",
  "zip": "46058",
  "loc": {
    "y": 40.343299,
    "x": 86.661261
  },
  "pop": 1938,
  "state": "IN"
},{
  "city": "CHARLOTTESVILLE",
  "zip": "46117",
  "loc": {
    "y": 39.811981,
    "x": 85.653599
  },
  "pop": 1762,
  "state": "IN"
},{
  "city": "FALMOUTH",
  "zip": "46127",
  "loc": {
    "y": 39.743617,
    "x": 85.352423
  },
  "pop": 531,
  "state": "IN"
},{
  "city": "NEEDHAM",
  "zip": "46162",
  "loc": {
    "y": 39.477935,
    "x": 86.004094
  },
  "pop": 2353,
  "state": "IN"
},{
  "city": "NEW ATHENS",
  "zip": "62264",
  "loc": {
    "y": 38.315998,
    "x": 89.872777
  },
  "pop": 2488,
  "state": "IL"
},{
  "city": "CARTHAGE",
  "zip": "62321",
  "loc": {
    "y": 40.412937,
    "x": 91.100522
  },
  "pop": 4171,
  "state": "IL"
},{
  "city": "GOLDEN",
  "zip": "62339",
  "loc": {
    "y": 40.120257,
    "x": 91.029588
  },
  "pop": 938,
  "state": "IL"
},{
  "city": "NEBO",
  "zip": "62355",
  "loc": {
    "y": 39.420181,
    "x": 90.7692
  },
  "pop": 1011,
  "state": "IL"
},{
  "city": "DIETERICH",
  "zip": "62424",
  "loc": {
    "y": 39.031875,
    "x": 88.407448
  },
  "pop": 1639,
  "state": "IL"
},{
  "city": "LAWRENCEVILLE",
  "zip": "62439",
  "loc": {
    "y": 38.730862,
    "x": 87.678397
  },
  "pop": 7833,
  "state": "IL"
},{
  "city": "HERRICK",
  "zip": "62431",
  "loc": {
    "y": 39.224481,
    "x": 88.981211
  },
  "pop": 628,
  "state": "IL"
},{
  "city": "ROBINSON",
  "zip": "62454",
  "loc": {
    "y": 39.007034,
    "x": 87.748352
  },
  "pop": 9243,
  "state": "IL"
},{
  "city": "NEWBURG",
  "zip": "62501",
  "loc": {
    "y": 39.991581,
    "x": 88.821371
  },
  "pop": 1444,
  "state": "IL"
},{
  "city": "MOUNT PULASKI",
  "zip": "62548",
  "loc": {
    "y": 40.004482,
    "x": 89.293482
  },
  "pop": 2500,
  "state": "IL"
},{
  "city": "OREANA",
  "zip": "62554",
  "loc": {
    "y": 39.935135,
    "x": 88.854675
  },
  "pop": 1554,
  "state": "IL"
},{
  "city": "CANTRALL",
  "zip": "62625",
  "loc": {
    "y": 39.911267,
    "x": 89.66426
  },
  "pop": 1811,
  "state": "IL"
},{
  "city": "KILBOURNE",
  "zip": "62655",
  "loc": {
    "y": 40.158696,
    "x": 90.004279
  },
  "pop": 633,
  "state": "IL"
},{
  "city": "FARMINGDALE",
  "zip": "62677",
  "loc": {
    "y": 39.849767,
    "x": 89.838361
  },
  "pop": 3081,
  "state": "IL"
},{
  "city": "BARCLAY",
  "zip": "62684",
  "loc": {
    "y": 39.889456,
    "x": 89.60251
  },
  "pop": 2185,
  "state": "IL"
},{
  "city": "ALLEN",
  "zip": "62682",
  "loc": {
    "y": 40.294466,
    "x": 89.625029
  },
  "pop": 669,
  "state": "IL"
},{
  "city": "GLASGOW",
  "zip": "62694",
  "loc": {
    "y": 39.614113,
    "x": 90.433696
  },
  "pop": 3909,
  "state": "IL"
},{
  "city": "FARINA",
  "zip": "62838",
  "loc": {
    "y": 38.846902,
    "x": 88.761412
  },
  "pop": 925,
  "state": "IL"
},{
  "city": "MOUNT VERNON",
  "zip": "62864",
  "loc": {
    "y": 38.317014,
    "x": 88.910525
  },
  "pop": 23844,
  "state": "IL"
},{
  "city": "SALEM",
  "zip": "62881",
  "loc": {
    "y": 38.626421,
    "x": 88.948077
  },
  "pop": 11599,
  "state": "IL"
},{
  "city": "SANDOVAL",
  "zip": "62882",
  "loc": {
    "y": 38.613113,
    "x": 89.11401
  },
  "pop": 3145,
  "state": "IL"
},{
  "city": "SAINT PETER",
  "zip": "62880",
  "loc": {
    "y": 38.869684,
    "x": 88.855998
  },
  "pop": 725,
  "state": "IL"
},{
  "city": "AVA",
  "zip": "62907",
  "loc": {
    "y": 37.879286,
    "x": 89.465366
  },
  "pop": 1806,
  "state": "IL"
},{
  "city": "HERRIN",
  "zip": "62948",
  "loc": {
    "y": 37.801884,
    "x": 89.02316
  },
  "pop": 13900,
  "state": "IL"
},{
  "city": "JOHNSTON CITY",
  "zip": "62951",
  "loc": {
    "y": 37.824477,
    "x": 88.920858
  },
  "pop": 5424,
  "state": "IL"
},{
  "city": "ANDERSON",
  "zip": "46013",
  "loc": {
    "y": 40.061865,
    "x": 85.680073
  },
  "pop": 17037,
  "state": "IN"
},{
  "city": "COLFAX",
  "zip": "46035",
  "loc": {
    "y": 40.195619,
    "x": 86.659271
  },
  "pop": 1343,
  "state": "IN"
},{
  "city": "PENDLETON",
  "zip": "46064",
  "loc": {
    "y": 39.979237,
    "x": 85.794614
  },
  "pop": 13824,
  "state": "IN"
},{
  "city": "GREENWOOD",
  "zip": "46143",
  "loc": {
    "y": 39.596037,
    "x": 86.130919
  },
  "pop": 24633,
  "state": "IN"
},{
  "city": "MILROY",
  "zip": "46156",
  "loc": {
    "y": 39.495474,
    "x": 85.504371
  },
  "pop": 2154,
  "state": "IN"
},{
  "city": "EVANSVILLE",
  "zip": "62242",
  "loc": {
    "y": 38.09258,
    "x": 89.917028
  },
  "pop": 1540,
  "state": "IL"
},{
  "city": "GREENVILLE",
  "zip": "62246",
  "loc": {
    "y": 38.893338,
    "x": 89.405185
  },
  "pop": 7623,
  "state": "IL"
},{
  "city": "SHATTUC",
  "zip": "62283",
  "loc": {
    "y": 38.643533,
    "x": 89.205436
  },
  "pop": 1079,
  "state": "IL"
},{
  "city": "CHAMBERSBURG",
  "zip": "62323",
  "loc": {
    "y": 39.807058,
    "x": 90.663017
  },
  "pop": 203,
  "state": "IL"
},{
  "city": "DETROIT",
  "zip": "62332",
  "loc": {
    "y": 39.618307,
    "x": 90.65449
  },
  "pop": 353,
  "state": "IL"
},{
  "city": "COATSBURG",
  "zip": "62325",
  "loc": {
    "y": 40.055385,
    "x": 91.174733
  },
  "pop": 446,
  "state": "IL"
},{
  "city": "LORAINE",
  "zip": "62349",
  "loc": {
    "y": 40.153197,
    "x": 91.21301
  },
  "pop": 634,
  "state": "IL"
},{
  "city": "BASCO",
  "zip": "62313",
  "loc": {
    "y": 40.328303,
    "x": 91.196983
  },
  "pop": 399,
  "state": "IL"
},{
  "city": "ROCKPORT",
  "zip": "62370",
  "loc": {
    "y": 39.532846,
    "x": 90.972178
  },
  "pop": 641,
  "state": "IL"
},{
  "city": "PERRY",
  "zip": "62362",
  "loc": {
    "y": 39.787042,
    "x": 90.746105
  },
  "pop": 703,
  "state": "IL"
},{
  "city": "URSA",
  "zip": "62376",
  "loc": {
    "y": 40.080918,
    "x": 91.373341
  },
  "pop": 1074,
  "state": "IL"
},{
  "city": "VERSAILLES",
  "zip": "62378",
  "loc": {
    "y": 39.888286,
    "x": 90.674147
  },
  "pop": 1136,
  "state": "IL"
},{
  "city": "PITTSFIELD",
  "zip": "62363",
  "loc": {
    "y": 39.601306,
    "x": 90.807269
  },
  "pop": 5678,
  "state": "IL"
},{
  "city": "OLNEY",
  "zip": "62450",
  "loc": {
    "y": 38.733389,
    "x": 88.080936
  },
  "pop": 11163,
  "state": "IL"
},{
  "city": "SUMNER",
  "zip": "62466",
  "loc": {
    "y": 38.734077,
    "x": 87.780728
  },
  "pop": 3517,
  "state": "IL"
},{
  "city": "WHEELER",
  "zip": "62479",
  "loc": {
    "y": 39.018185,
    "x": 88.317536
  },
  "pop": 809,
  "state": "IL"
},{
  "city": "WILLOW HILL",
  "zip": "62480",
  "loc": {
    "y": 38.975654,
    "x": 88.017156
  },
  "pop": 1708,
  "state": "IL"
},{
  "city": "BEASON",
  "zip": "62512",
  "loc": {
    "y": 40.143652,
    "x": 89.194801
  },
  "pop": 467,
  "state": "IL"
},{
  "city": "NIANTIC",
  "zip": "62551",
  "loc": {
    "y": 39.858175,
    "x": 89.170071
  },
  "pop": 850,
  "state": "IL"
},{
  "city": "NEWMANSVILLE",
  "zip": "62612",
  "loc": {
    "y": 39.89168,
    "x": 90.028721
  },
  "pop": 1904,
  "state": "IL"
},{
  "city": "AUBURN",
  "zip": "62615",
  "loc": {
    "y": 39.591787,
    "x": 89.744033
  },
  "pop": 3934,
  "state": "IL"
},{
  "city": "BARNHILL",
  "zip": "62809",
  "loc": {
    "y": 38.278144,
    "x": 88.350831
  },
  "pop": 165,
  "state": "IL"
},{
  "city": "GOLDEN GATE",
  "zip": "62843",
  "loc": {
    "y": 38.364514,
    "x": 88.207466
  },
  "pop": 733,
  "state": "IL"
},{
  "city": "HERALD",
  "zip": "62845",
  "loc": {
    "y": 37.967542,
    "x": 88.213152
  },
  "pop": 641,
  "state": "IL"
},{
  "city": "HOYLETON",
  "zip": "62803",
  "loc": {
    "y": 38.445468,
    "x": 89.306854
  },
  "pop": 1295,
  "state": "IL"
},{
  "city": "RINARD",
  "zip": "62878",
  "loc": {
    "y": 38.580596,
    "x": 88.464094
  },
  "pop": 377,
  "state": "IL"
},{
  "city": "CREAL SPRINGS",
  "zip": "62922",
  "loc": {
    "y": 37.628393,
    "x": 88.880697
  },
  "pop": 2743,
  "state": "IL"
},{
  "city": "BROWNFIELD",
  "zip": "62938",
  "loc": {
    "y": 37.349984,
    "x": 88.555148
  },
  "pop": 2997,
  "state": "IL"
},{
  "city": "ELIZABETHTOWN",
  "zip": "62931",
  "loc": {
    "y": 37.466492,
    "x": 88.286735
  },
  "pop": 815,
  "state": "IL"
},{
  "city": "GOREVILLE",
  "zip": "62939",
  "loc": {
    "y": 37.574985,
    "x": 88.965524
  },
  "pop": 2867,
  "state": "IL"
},{
  "city": "ELDORADO",
  "zip": "62930",
  "loc": {
    "y": 37.813885,
    "x": 88.443382
  },
  "pop": 7036,
  "state": "IL"
},{
  "city": "KARNAK",
  "zip": "62956",
  "loc": {
    "y": 37.291066,
    "x": 88.973943
  },
  "pop": 710,
  "state": "IL"
},{
  "city": "OLMSTED",
  "zip": "62970",
  "loc": {
    "y": 37.193507,
    "x": 89.093266
  },
  "pop": 692,
  "state": "IL"
},{
  "city": "STONEFORT",
  "zip": "62987",
  "loc": {
    "y": 37.62992,
    "x": 88.742807
  },
  "pop": 1255,
  "state": "IL"
},{
  "city": "CARMEL",
  "zip": "46032",
  "loc": {
    "y": 39.971232,
    "x": 86.124545
  },
  "pop": 40090,
  "state": "IN"
},{
  "city": "SHERIDAN",
  "zip": "46069",
  "loc": {
    "y": 40.110407,
    "x": 86.236741
  },
  "pop": 7155,
  "state": "IN"
},{
  "city": "MC CORDSVILLE",
  "zip": "46055",
  "loc": {
    "y": 39.901823,
    "x": 85.909502
  },
  "pop": 1450,
  "state": "IN"
},{
  "city": "ARLINGTON",
  "zip": "46104",
  "loc": {
    "y": 39.648791,
    "x": 85.582775
  },
  "pop": 1194,
  "state": "IN"
},{
  "city": "COATESVILLE",
  "zip": "46121",
  "loc": {
    "y": 39.693041,
    "x": 86.631447
  },
  "pop": 1992,
  "state": "IN"
},{
  "city": "FILLMORE",
  "zip": "46128",
  "loc": {
    "y": 39.647518,
    "x": 86.746861
  },
  "pop": 1711,
  "state": "IN"
},{
  "city": "FRANKLIN",
  "zip": "46131",
  "loc": {
    "y": 39.485389,
    "x": 86.060752
  },
  "pop": 14959,
  "state": "IN"
},{
  "city": "ROCKWOOD",
  "zip": "62280",
  "loc": {
    "y": 37.832201,
    "x": 89.621445
  },
  "pop": 770,
  "state": "IL"
},{
  "city": "SPARTA",
  "zip": "62286",
  "loc": {
    "y": 38.131815,
    "x": 89.703458
  },
  "pop": 8035,
  "state": "IL"
},{
  "city": "PERCY",
  "zip": "62272",
  "loc": {
    "y": 38.01261,
    "x": 89.616961
  },
  "pop": 1241,
  "state": "IL"
},{
  "city": "62296",
  "zip": "62296",
  "loc": {
    "y": 38.377482,
    "x": 89.644751
  },
  "pop": 1006,
  "state": "IL"
},{
  "city": "BOWEN",
  "zip": "62316",
  "loc": {
    "y": 40.234076,
    "x": 91.070491
  },
  "pop": 693,
  "state": "IL"
},{
  "city": "PLEASANT HILL",
  "zip": "62366",
  "loc": {
    "y": 39.446697,
    "x": 90.877011
  },
  "pop": 1521,
  "state": "IL"
},{
  "city": "HARVEL",
  "zip": "62538",
  "loc": {
    "y": 39.371865,
    "x": 89.53804
  },
  "pop": 374,
  "state": "IL"
},{
  "city": "CIMIC",
  "zip": "62530",
  "loc": {
    "y": 39.567684,
    "x": 89.654654
  },
  "pop": 1484,
  "state": "IL"
},{
  "city": "LINCOLN",
  "zip": "62656",
  "loc": {
    "y": 40.14508,
    "x": 89.368376
  },
  "pop": 20130,
  "state": "IL"
},{
  "city": "MODESTO",
  "zip": "62667",
  "loc": {
    "y": 39.475965,
    "x": 89.979386
  },
  "pop": 564,
  "state": "IL"
},{
  "city": "WAVERLY",
  "zip": "62692",
  "loc": {
    "y": 39.586983,
    "x": 89.944903
  },
  "pop": 1968,
  "state": "IL"
},{
  "city": "SOUTHERN VIEW",
  "zip": "62703",
  "loc": {
    "y": 39.772401,
    "x": 89.63333
  },
  "pop": 32501,
  "state": "IL"
},{
  "city": "JOHNSONVILLE",
  "zip": "62850",
  "loc": {
    "y": 38.525628,
    "x": 88.588701
  },
  "pop": 1264,
  "state": "IL"
},{
  "city": "NASON",
  "zip": "62866",
  "loc": {
    "y": 38.173872,
    "x": 88.968839
  },
  "pop": 269,
  "state": "IL"
},{
  "city": "BELKNAP",
  "zip": "62908",
  "loc": {
    "y": 37.326584,
    "x": 88.950652
  },
  "pop": 188,
  "state": "IL"
},{
  "city": "WALNUT HILL",
  "zip": "62893",
  "loc": {
    "y": 38.520006,
    "x": 88.984514
  },
  "pop": 1386,
  "state": "IL"
},{
  "city": "DE SOTO",
  "zip": "62924",
  "loc": {
    "y": 37.81473,
    "x": 89.221834
  },
  "pop": 2073,
  "state": "IL"
},{
  "city": "NEW BURNSIDE",
  "zip": "62967",
  "loc": {
    "y": 37.580608,
    "x": 88.771253
  },
  "pop": 512,
  "state": "IL"
},{
  "city": "SAINT MARY",
  "zip": "63673",
  "loc": {
    "y": 37.914034,
    "x": 89.929268
  },
  "pop": 130,
  "state": "IL"
},{
  "city": "BOGGSTOWN",
  "zip": "46110",
  "loc": {
    "y": 39.568331,
    "x": 85.915965
  },
  "pop": 958,
  "state": "IN"
},{
  "city": "KIRKLIN",
  "zip": "46050",
  "loc": {
    "y": 40.203066,
    "x": 86.332372
  },
  "pop": 2038,
  "state": "IN"
},{
  "city": "MORGANTOWN",
  "zip": "46160",
  "loc": {
    "y": 39.362841,
    "x": 86.280297
  },
  "pop": 2193,
  "state": "IN"
},{
  "city": "NORTH SALEM",
  "zip": "46165",
  "loc": {
    "y": 39.867051,
    "x": 86.638833
  },
  "pop": 1541,
  "state": "IN"
},{
  "city": "SWANWICK",
  "zip": "62237",
  "loc": {
    "y": 38.176401,
    "x": 89.582064
  },
  "pop": 2359,
  "state": "IL"
},{
  "city": "MASCOUTAH",
  "zip": "62258",
  "loc": {
    "y": 38.474496,
    "x": 89.787745
  },
  "pop": 8151,
  "state": "IL"
},{
  "city": "HIGHLAND",
  "zip": "62249",
  "loc": {
    "y": 38.763086,
    "x": 89.678894
  },
  "pop": 6772,
  "state": "IL"
},{
  "city": "FOWLER",
  "zip": "62338",
  "loc": {
    "y": 39.992504,
    "x": 91.245226
  },
  "pop": 508,
  "state": "IL"
},{
  "city": "LIBERTY",
  "zip": "62347",
  "loc": {
    "y": 39.889176,
    "x": 91.08688
  },
  "pop": 1331,
  "state": "IL"
},{
  "city": "MILTON",
  "zip": "62352",
  "loc": {
    "y": 39.550811,
    "x": 90.644346
  },
  "pop": 548,
  "state": "IL"
},{
  "city": "MOUNT STERLING",
  "zip": "62353",
  "loc": {
    "y": 39.980279,
    "x": 90.741424
  },
  "pop": 4058,
  "state": "IL"
},{
  "city": "NEW SALEM",
  "zip": "62357",
  "loc": {
    "y": 39.699573,
    "x": 90.843986
  },
  "pop": 292,
  "state": "IL"
},{
  "city": "PLAINVILLE",
  "zip": "62365",
  "loc": {
    "y": 39.800448,
    "x": 91.143598
  },
  "pop": 986,
  "state": "IL"
},{
  "city": "ANNAPOLIS",
  "zip": "62413",
  "loc": {
    "y": 39.117857,
    "x": 87.802875
  },
  "pop": 692,
  "state": "IL"
},{
  "city": "JEWETT",
  "zip": "62436",
  "loc": {
    "y": 39.207596,
    "x": 88.24744
  },
  "pop": 402,
  "state": "IL"
},{
  "city": "SHUMWAY",
  "zip": "62461",
  "loc": {
    "y": 39.188138,
    "x": 88.641826
  },
  "pop": 539,
  "state": "IL"
},{
  "city": "BERRY",
  "zip": "62563",
  "loc": {
    "y": 39.759047,
    "x": 89.547208
  },
  "pop": 8726,
  "state": "IL"
},{
  "city": "LYNCHBURG",
  "zip": "62617",
  "loc": {
    "y": 40.161774,
    "x": 90.148568
  },
  "pop": 1118,
  "state": "IL"
},{
  "city": "EXETER",
  "zip": "62621",
  "loc": {
    "y": 39.744078,
    "x": 90.530527
  },
  "pop": 1101,
  "state": "IL"
},{
  "city": "SPAULDING",
  "zip": "62561",
  "loc": {
    "y": 39.855239,
    "x": 89.541908
  },
  "pop": 3921,
  "state": "IL"
},{
  "city": "CHAPIN",
  "zip": "62628",
  "loc": {
    "y": 39.771581,
    "x": 90.411299
  },
  "pop": 879,
  "state": "IL"
},{
  "city": "LAYTON",
  "zip": "62681",
  "loc": {
    "y": 40.124189,
    "x": 90.560883
  },
  "pop": 4747,
  "state": "IL"
},{
  "city": "ASHLEY",
  "zip": "62808",
  "loc": {
    "y": 38.306002,
    "x": 89.231115
  },
  "pop": 1260,
  "state": "IL"
},{
  "city": "INA",
  "zip": "62846",
  "loc": {
    "y": 38.152743,
    "x": 88.889362
  },
  "pop": 800,
  "state": "IL"
},{
  "city": "IUKA",
  "zip": "62849",
  "loc": {
    "y": 38.613563,
    "x": 88.768925
  },
  "pop": 965,
  "state": "IL"
},{
  "city": "JEROME",
  "zip": "62704",
  "loc": {
    "y": 39.780319,
    "x": 89.681066
  },
  "pop": 41611,
  "state": "IL"
},{
  "city": "THOMPSONVILLE",
  "zip": "62890",
  "loc": {
    "y": 37.880438,
    "x": 88.768394
  },
  "pop": 2413,
  "state": "IL"
},{
  "city": "ALTO PASS",
  "zip": "62905",
  "loc": {
    "y": 37.568142,
    "x": 89.317179
  },
  "pop": 912,
  "state": "IL"
},{
  "city": "BUNCOMBE",
  "zip": "62912",
  "loc": {
    "y": 37.463661,
    "x": 88.980586
  },
  "pop": 696,
  "state": "IL"
},{
  "city": "CAVE IN ROCK",
  "zip": "62919",
  "loc": {
    "y": 37.517947,
    "x": 88.221961
  },
  "pop": 2266,
  "state": "IL"
},{
  "city": "BARGERSVILLE",
  "zip": "46106",
  "loc": {
    "y": 39.499989,
    "x": 86.179687
  },
  "pop": 3310,
  "state": "IN"
},{
  "city": "DANVILLE",
  "zip": "46122",
  "loc": {
    "y": 39.762815,
    "x": 86.534254
  },
  "pop": 8632,
  "state": "IN"
},{
  "city": "CENTERTON",
  "zip": "46151",
  "loc": {
    "y": 39.447646,
    "x": 86.42901
  },
  "pop": 31539,
  "state": "IN"
},{
  "city": "RUSHVILLE",
  "zip": "46173",
  "loc": {
    "y": 39.619232,
    "x": 85.43212
  },
  "pop": 11721,
  "state": "IN"
},{
  "city": "FREEBURG",
  "zip": "62243",
  "loc": {
    "y": 38.408016,
    "x": 89.91806
  },
  "pop": 5837,
  "state": "IL"
},{
  "city": "TROY",
  "zip": "62294",
  "loc": {
    "y": 38.724275,
    "x": 89.870848
  },
  "pop": 10526,
  "state": "IL"
},{
  "city": "CAMP POINT",
  "zip": "62320",
  "loc": {
    "y": 40.029285,
    "x": 91.076926
  },
  "pop": 2113,
  "state": "IL"
},{
  "city": "WARSAW",
  "zip": "62379",
  "loc": {
    "y": 40.354449,
    "x": 91.434803
  },
  "pop": 1882,
  "state": "IL"
},{
  "city": "WEST POINT",
  "zip": "62380",
  "loc": {
    "y": 40.245184,
    "x": 91.249568
  },
  "pop": 874,
  "state": "IL"
},{
  "city": "BEECHER CITY",
  "zip": "62414",
  "loc": {
    "y": 39.183515,
    "x": 88.80385
  },
  "pop": 1968,
  "state": "IL"
},{
  "city": "ALTAMONT",
  "zip": "62411",
  "loc": {
    "y": 39.063449,
    "x": 88.748092
  },
  "pop": 3867,
  "state": "IL"
},{
  "city": "DUNDAS",
  "zip": "62425",
  "loc": {
    "y": 38.830572,
    "x": 88.097309
  },
  "pop": 437,
  "state": "IL"
},{
  "city": "LAKEWOOD",
  "zip": "62438",
  "loc": {
    "y": 39.313358,
    "x": 88.871474
  },
  "pop": 415,
  "state": "IL"
},{
  "city": "FLAT ROCK",
  "zip": "62427",
  "loc": {
    "y": 38.909606,
    "x": 87.683747
  },
  "pop": 2173,
  "state": "IL"
},{
  "city": "LACLEDE",
  "zip": "62426",
  "loc": {
    "y": 38.91318,
    "x": 88.663868
  },
  "pop": 772,
  "state": "IL"
},{
  "city": "YALE",
  "zip": "62481",
  "loc": {
    "y": 39.129975,
    "x": 88.01047
  },
  "pop": 410,
  "state": "IL"
},{
  "city": "HERVEY CITY",
  "zip": "62549",
  "loc": {
    "y": 39.778883,
    "x": 88.870207
  },
  "pop": 5691,
  "state": "IL"
},{
  "city": "BUCKNER",
  "zip": "62819",
  "loc": {
    "y": 37.966881,
    "x": 88.977993
  },
  "pop": 278,
  "state": "IL"
},{
  "city": "BURNT PRAIRIE",
  "zip": "62820",
  "loc": {
    "y": 38.208151,
    "x": 88.214719
  },
  "pop": 503,
  "state": "IL"
},{
  "city": "CROSSVILLE",
  "zip": "62827",
  "loc": {
    "y": 38.166029,
    "x": 88.059474
  },
  "pop": 1388,
  "state": "IL"
},{
  "city": "OMAHA",
  "zip": "62871",
  "loc": {
    "y": 37.890423,
    "x": 88.286484
  },
  "pop": 638,
  "state": "IL"
},{
  "city": "SHOBONIER",
  "zip": "62885",
  "loc": {
    "y": 38.844584,
    "x": 89.078959
  },
  "pop": 219,
  "state": "IL"
},{
  "city": "SIMS",
  "zip": "62886",
  "loc": {
    "y": 38.392318,
    "x": 88.530642
  },
  "pop": 868,
  "state": "IL"
},{
  "city": "SPRINGERTON",
  "zip": "62887",
  "loc": {
    "y": 38.169868,
    "x": 88.372611
  },
  "pop": 737,
  "state": "IL"
},{
  "city": "WALTONVILLE",
  "zip": "62894",
  "loc": {
    "y": 38.246479,
    "x": 89.006702
  },
  "pop": 1923,
  "state": "IL"
},{
  "city": "WEST FRANKFORT",
  "zip": "62896",
  "loc": {
    "y": 37.897914,
    "x": 88.930724
  },
  "pop": 11800,
  "state": "IL"
},{
  "city": "RICHVIEW",
  "zip": "62877",
  "loc": {
    "y": 38.408227,
    "x": 89.175572
  },
  "pop": 1087,
  "state": "IL"
},{
  "city": "CARRIER MILLS",
  "zip": "62917",
  "loc": {
    "y": 37.678199,
    "x": 88.612706
  },
  "pop": 3355,
  "state": "IL"
},{
  "city": "MOUND CITY",
  "zip": "62963",
  "loc": {
    "y": 37.086474,
    "x": 89.163687
  },
  "pop": 845,
  "state": "IL"
},{
  "city": "ROYALTON",
  "zip": "62983",
  "loc": {
    "y": 37.879033,
    "x": 89.114149
  },
  "pop": 1344,
  "state": "IL"
},{
  "city": "RALEIGH",
  "zip": "62977",
  "loc": {
    "y": 37.825597,
    "x": 88.532368
  },
  "pop": 817,
  "state": "IL"
},{
  "city": "ZEIGLER",
  "zip": "62999",
  "loc": {
    "y": 37.906923,
    "x": 89.06026
  },
  "pop": 2502,
  "state": "IL"
},{
  "city": "WILLISVILLE",
  "zip": "62997",
  "loc": {
    "y": 37.982142,
    "x": 89.578487
  },
  "pop": 912,
  "state": "IL"
},{
  "city": "FISHERS",
  "zip": "46038",
  "loc": {
    "y": 39.957486,
    "x": 86.023048
  },
  "pop": 11918,
  "state": "IN"
},{
  "city": "SUMMITVILLE",
  "zip": "46070",
  "loc": {
    "y": 40.339833,
    "x": 85.640261
  },
  "pop": 1902,
  "state": "IN"
},{
  "city": "KEYESPORT",
  "zip": "62253",
  "loc": {
    "y": 38.738773,
    "x": 89.306323
  },
  "pop": 1464,
  "state": "IL"
},{
  "city": "OAKDALE",
  "zip": "62268",
  "loc": {
    "y": 38.257285,
    "x": 89.596046
  },
  "pop": 1348,
  "state": "IL"
},{
  "city": "ELVASTON",
  "zip": "62334",
  "loc": {
    "y": 40.40662,
    "x": 91.21642
  },
  "pop": 449,
  "state": "IL"
},{
  "city": "PAYSON",
  "zip": "62360",
  "loc": {
    "y": 39.815253,
    "x": 91.262676
  },
  "pop": 1939,
  "state": "IL"
},{
  "city": "INGRAHAM",
  "zip": "62434",
  "loc": {
    "y": 38.828446,
    "x": 88.320374
  },
  "pop": 1077,
  "state": "IL"
},{
  "city": "MASON",
  "zip": "62443",
  "loc": {
    "y": 38.964453,
    "x": 88.623396
  },
  "pop": 1774,
  "state": "IL"
},{
  "city": "PARKERSBURG",
  "zip": "62452",
  "loc": {
    "y": 38.589998,
    "x": 88.064722
  },
  "pop": 485,
  "state": "IL"
},{
  "city": "TRILLA",
  "zip": "62469",
  "loc": {
    "y": 39.385286,
    "x": 88.345698
  },
  "pop": 499,
  "state": "IL"
},{
  "city": "WEST UNION",
  "zip": "62477",
  "loc": {
    "y": 39.240185,
    "x": 87.651215
  },
  "pop": 993,
  "state": "IL"
},{
  "city": "BRUNSWICK",
  "zip": "62534",
  "loc": {
    "y": 39.503253,
    "x": 88.756208
  },
  "pop": 1410,
  "state": "IL"
},{
  "city": "EMDEN",
  "zip": "62635",
  "loc": {
    "y": 40.294538,
    "x": 89.517441
  },
  "pop": 1144,
  "state": "IL"
},{
  "city": "BATES",
  "zip": "62670",
  "loc": {
    "y": 39.736048,
    "x": 89.905721
  },
  "pop": 1470,
  "state": "IL"
},{
  "city": "VIRDEN",
  "zip": "62690",
  "loc": {
    "y": 39.506447,
    "x": 89.778332
  },
  "pop": 5939,
  "state": "IL"
},{
  "city": "BELLE RIVE",
  "zip": "62810",
  "loc": {
    "y": 38.215268,
    "x": 88.755801
  },
  "pop": 1149,
  "state": "IL"
},{
  "city": "GRAYVILLE",
  "zip": "62844",
  "loc": {
    "y": 38.262707,
    "x": 88.003539
  },
  "pop": 2569,
  "state": "IL"
},{
  "city": "ODIN",
  "zip": "62870",
  "loc": {
    "y": 38.608786,
    "x": 89.055228
  },
  "pop": 1758,
  "state": "IL"
},{
  "city": "OPDYKE",
  "zip": "62872",
  "loc": {
    "y": 38.274955,
    "x": 88.774955
  },
  "pop": 284,
  "state": "IL"
},{
  "city": "MARION",
  "zip": "62959",
  "loc": {
    "y": 37.725662,
    "x": 88.929447
  },
  "pop": 20722,
  "state": "IL"
},{
  "city": "OZARK",
  "zip": "62972",
  "loc": {
    "y": 37.536704,
    "x": 88.768778
  },
  "pop": 463,
  "state": "IL"
},{
  "city": "VERGENNES",
  "zip": "62994",
  "loc": {
    "y": 37.905128,
    "x": 89.326863
  },
  "pop": 681,
  "state": "IL"
},{
  "city": "VIENNA",
  "zip": "62995",
  "loc": {
    "y": 37.420541,
    "x": 88.887869
  },
  "pop": 2767,
  "state": "IL"
},{
  "city": "ANDERSON",
  "zip": "46012",
  "loc": {
    "y": 40.130947,
    "x": 85.653591
  },
  "pop": 20949,
  "state": "IN"
},{
  "city": "ATLANTA",
  "zip": "46031",
  "loc": {
    "y": 40.146964,
    "x": 85.933945
  },
  "pop": 2450,
  "state": "IN"
},{
  "city": "FRANKTON",
  "zip": "46044",
  "loc": {
    "y": 40.228548,
    "x": 85.77911
  },
  "pop": 3723,
  "state": "IN"
},{
  "city": "ZIONSVILLE",
  "zip": "46077",
  "loc": {
    "y": 39.956111,
    "x": 86.276737
  },
  "pop": 9759,
  "state": "IN"
},{
  "city": "CARTHAGE",
  "zip": "46115",
  "loc": {
    "y": 39.746627,
    "x": 85.575382
  },
  "pop": 1910,
  "state": "IN"
},{
  "city": "MONROVIA",
  "zip": "46157",
  "loc": {
    "y": 39.571397,
    "x": 86.48937
  },
  "pop": 2205,
  "state": "IN"
},{
  "city": "PARAGON",
  "zip": "46166",
  "loc": {
    "y": 39.404203,
    "x": 86.577867
  },
  "pop": 1244,
  "state": "IN"
},{
  "city": "PRAIRIE DU ROCHE",
  "zip": "62277",
  "loc": {
    "y": 38.085468,
    "x": 90.090147
  },
  "pop": 1017,
  "state": "IL"
},{
  "city": "MODOC",
  "zip": "62261",
  "loc": {
    "y": 38.050683,
    "x": 90.016261
  },
  "pop": 381,
  "state": "IL"
},{
  "city": "HECKER",
  "zip": "62248",
  "loc": {
    "y": 38.281039,
    "x": 89.983115
  },
  "pop": 1454,
  "state": "IL"
},{
  "city": "MENDON",
  "zip": "62351",
  "loc": {
    "y": 40.085658,
    "x": 91.289923
  },
  "pop": 1462,
  "state": "IL"
},{
  "city": "AUGUSTA",
  "zip": "62311",
  "loc": {
    "y": 40.234109,
    "x": 90.955416
  },
  "pop": 867,
  "state": "IL"
},{
  "city": "EFFINGHAM",
  "zip": "62401",
  "loc": {
    "y": 39.121727,
    "x": 88.561105
  },
  "pop": 15524,
  "state": "IL"
},{
  "city": "PEARL",
  "zip": "62361",
  "loc": {
    "y": 39.444072,
    "x": 90.637954
  },
  "pop": 415,
  "state": "IL"
},{
  "city": "CASEY",
  "zip": "62420",
  "loc": {
    "y": 39.301716,
    "x": 87.991306
  },
  "pop": 5300,
  "state": "IL"
},{
  "city": "CLAREMONT",
  "zip": "62421",
  "loc": {
    "y": 38.742904,
    "x": 87.972685
  },
  "pop": 1320,
  "state": "IL"
},{
  "city": "HUTSONVILLE",
  "zip": "62433",
  "loc": {
    "y": 39.106357,
    "x": 87.669455
  },
  "pop": 1039,
  "state": "IL"
},{
  "city": "BRIDGEPORT",
  "zip": "62417",
  "loc": {
    "y": 38.694506,
    "x": 87.854926
  },
  "pop": 2076,
  "state": "IL"
},{
  "city": "MOUNT ERIE",
  "zip": "62446",
  "loc": {
    "y": 38.522151,
    "x": 88.218521
  },
  "pop": 470,
  "state": "IL"
},{
  "city": "MONTROSE",
  "zip": "62445",
  "loc": {
    "y": 39.157274,
    "x": 88.33497
  },
  "pop": 1611,
  "state": "IL"
},{
  "city": "HAZEL DELL",
  "zip": "62428",
  "loc": {
    "y": 39.239454,
    "x": 88.144502
  },
  "pop": 2914,
  "state": "IL"
},{
  "city": "WEST SALEM",
  "zip": "62476",
  "loc": {
    "y": 38.518267,
    "x": 88.032297
  },
  "pop": 1994,
  "state": "IL"
},{
  "city": "WEST LIBERTY",
  "zip": "62475",
  "loc": {
    "y": 38.894989,
    "x": 88.097929
  },
  "pop": 593,
  "state": "IL"
},{
  "city": "BOODY",
  "zip": "62514",
  "loc": {
    "y": 39.762824,
    "x": 89.072061
  },
  "pop": 541,
  "state": "IL"
},{
  "city": "THOMASVILLE",
  "zip": "62533",
  "loc": {
    "y": 39.453048,
    "x": 89.642718
  },
  "pop": 1047,
  "state": "IL"
},{
  "city": "MACON",
  "zip": "62544",
  "loc": {
    "y": 39.704093,
    "x": 88.988026
  },
  "pop": 1737,
  "state": "IL"
},{
  "city": "BOLIVIA",
  "zip": "62545",
  "loc": {
    "y": 39.77771,
    "x": 89.417692
  },
  "pop": 2228,
  "state": "IL"
},{
  "city": "HEWITTSVILLE",
  "zip": "62568",
  "loc": {
    "y": 39.554516,
    "x": 89.313357
  },
  "pop": 17182,
  "state": "IL"
},{
  "city": "HETTICK",
  "zip": "62649",
  "loc": {
    "y": 39.375217,
    "x": 90.067161
  },
  "pop": 518,
  "state": "IL"
},{
  "city": "BLUFORD",
  "zip": "62814",
  "loc": {
    "y": 38.353138,
    "x": 88.75872
  },
  "pop": 2622,
  "state": "IL"
},{
  "city": "CLAY CITY",
  "zip": "62824",
  "loc": {
    "y": 38.669501,
    "x": 88.351641
  },
  "pop": 1753,
  "state": "IL"
},{
  "city": "DIX",
  "zip": "62830",
  "loc": {
    "y": 38.43329,
    "x": 88.965697
  },
  "pop": 1552,
  "state": "IL"
},{
  "city": "FLORA",
  "zip": "62839",
  "loc": {
    "y": 38.670337,
    "x": 88.49186
  },
  "pop": 6989,
  "state": "IL"
},{
  "city": "NEW LIBERTY",
  "zip": "62910",
  "loc": {
    "y": 37.138731,
    "x": 88.611944
  },
  "pop": 2565,
  "state": "IL"
},{
  "city": "EQUALITY",
  "zip": "62934",
  "loc": {
    "y": 37.727786,
    "x": 88.3445
  },
  "pop": 1173,
  "state": "IL"
},{
  "city": "ELKVILLE",
  "zip": "62932",
  "loc": {
    "y": 37.915506,
    "x": 89.233574
  },
  "pop": 2091,
  "state": "IL"
},{
  "city": "KARBERS RIDGE",
  "zip": "62955",
  "loc": {
    "y": 37.463071,
    "x": 88.367893
  },
  "pop": 686,
  "state": "IL"
},{
  "city": "MICHIGANTOWN",
  "zip": "46057",
  "loc": {
    "y": 40.310823,
    "x": 86.375306
  },
  "pop": 2207,
  "state": "IN"
},{
  "city": "SHARPSVILLE",
  "zip": "46068",
  "loc": {
    "y": 40.373232,
    "x": 86.108641
  },
  "pop": 3570,
  "state": "IN"
},{
  "city": "CLAYTON",
  "zip": "46118",
  "loc": {
    "y": 39.668154,
    "x": 86.495921
  },
  "pop": 4566,
  "state": "IN"
},{
  "city": "NEW PALESTINE",
  "zip": "46163",
  "loc": {
    "y": 39.723264,
    "x": 85.90515
  },
  "pop": 3794,
  "state": "IN"
},{
  "city": "SHELBYVILLE",
  "zip": "46176",
  "loc": {
    "y": 39.50434,
    "x": 85.787515
  },
  "pop": 24691,
  "state": "IN"
},{
  "city": "COLLINSVILLE",
  "zip": "62234",
  "loc": {
    "y": 38.683545,
    "x": 89.98529
  },
  "pop": 33686,
  "state": "IL"
},{
  "city": "POCAHONTAS",
  "zip": "62275",
  "loc": {
    "y": 38.78456,
    "x": 89.524684
  },
  "pop": 3279,
  "state": "IL"
},{
  "city": "PINCKNEYVILLE",
  "zip": "62274",
  "loc": {
    "y": 38.090327,
    "x": 89.38578
  },
  "pop": 7013,
  "state": "IL"
},{
  "city": "CAMDEN",
  "zip": "62319",
  "loc": {
    "y": 40.151076,
    "x": 90.754433
  },
  "pop": 317,
  "state": "IL"
},{
  "city": "GRIGGSVILLE",
  "zip": "62340",
  "loc": {
    "y": 39.708378,
    "x": 90.724891
  },
  "pop": 1611,
  "state": "IL"
},{
  "city": "COLMAR",
  "zip": "62367",
  "loc": {
    "y": 40.288493,
    "x": 90.873815
  },
  "pop": 1425,
  "state": "IL"
},{
  "city": "SAINT ELMO",
  "zip": "62458",
  "loc": {
    "y": 39.031544,
    "x": 88.855181
  },
  "pop": 2091,
  "state": "IL"
},{
  "city": "SAINT FRANCISVIL",
  "zip": "62460",
  "loc": {
    "y": 38.612494,
    "x": 87.673628
  },
  "pop": 1806,
  "state": "IL"
},{
  "city": "TEUTOPOLIS",
  "zip": "62467",
  "loc": {
    "y": 39.131978,
    "x": 88.476741
  },
  "pop": 3095,
  "state": "IL"
},{
  "city": "TOLEDO",
  "zip": "62468",
  "loc": {
    "y": 39.277223,
    "x": 88.246821
  },
  "pop": 2046,
  "state": "IL"
},{
  "city": "ATWATER",
  "zip": "62511",
  "loc": {
    "y": 39.310733,
    "x": 89.763374
  },
  "pop": 489,
  "state": "IL"
},{
  "city": "MOUNT AUBURN",
  "zip": "62547",
  "loc": {
    "y": 39.762845,
    "x": 89.235672
  },
  "pop": 1011,
  "state": "IL"
},{
  "city": "FANCY PRAIRIE",
  "zip": "62613",
  "loc": {
    "y": 39.964813,
    "x": 89.72108
  },
  "pop": 2696,
  "state": "IL"
},{
  "city": "HAGAMAN",
  "zip": "62630",
  "loc": {
    "y": 39.270756,
    "x": 90.076632
  },
  "pop": 683,
  "state": "IL"
},{
  "city": "MCVEY",
  "zip": "62640",
  "loc": {
    "y": 39.447182,
    "x": 89.780535
  },
  "pop": 2454,
  "state": "IL"
},{
  "city": "SCOTTVILLE",
  "zip": "62683",
  "loc": {
    "y": 39.478167,
    "x": 90.096921
  },
  "pop": 387,
  "state": "IL"
},{
  "city": "BROWNS",
  "zip": "62818",
  "loc": {
    "y": 38.376433,
    "x": 87.992824
  },
  "pop": 440,
  "state": "IL"
},{
  "city": "CISNE",
  "zip": "62823",
  "loc": {
    "y": 38.513774,
    "x": 88.404524
  },
  "pop": 1403,
  "state": "IL"
},{
  "city": "CYPRESS",
  "zip": "62923",
  "loc": {
    "y": 37.366223,
    "x": 89.014414
  },
  "pop": 618,
  "state": "IL"
},{
  "city": "JUNCTION",
  "zip": "62954",
  "loc": {
    "y": 37.695206,
    "x": 88.249071
  },
  "pop": 581,
  "state": "IL"
},{
  "city": "METROPOLIS",
  "zip": "62960",
  "loc": {
    "y": 37.175348,
    "x": 88.725179
  },
  "pop": 10500,
  "state": "IL"
},{
  "city": "PULASKI",
  "zip": "62976",
  "loc": {
    "y": 37.214575,
    "x": 89.196801
  },
  "pop": 663,
  "state": "IL"
},{
  "city": "ARCADIA",
  "zip": "46030",
  "loc": {
    "y": 40.17758,
    "x": 86.040882
  },
  "pop": 4137,
  "state": "IN"
},{
  "city": "CICERO",
  "zip": "46034",
  "loc": {
    "y": 40.126781,
    "x": 86.024844
  },
  "pop": 4309,
  "state": "IN"
},{
  "city": "WESTFIELD",
  "zip": "46074",
  "loc": {
    "y": 40.048868,
    "x": 86.149907
  },
  "pop": 6841,
  "state": "IN"
},{
  "city": "CLOVERDALE",
  "zip": "46120",
  "loc": {
    "y": 39.543442,
    "x": 86.814021
  },
  "pop": 7062,
  "state": "IN"
},{
  "city": "EDINBURGH",
  "zip": "46124",
  "loc": {
    "y": 39.362601,
    "x": 85.970712
  },
  "pop": 5115,
  "state": "IN"
},{
  "city": "GREENCASTLE",
  "zip": "46135",
  "loc": {
    "y": 39.649487,
    "x": 86.868614
  },
  "pop": 13300,
  "state": "IN"
},{
  "city": "JAMESTOWN",
  "zip": "46147",
  "loc": {
    "y": 39.95789,
    "x": 86.623561
  },
  "pop": 2355,
  "state": "IN"
},{
  "city": "MOORESVILLE",
  "zip": "46158",
  "loc": {
    "y": 39.591469,
    "x": 86.364173
  },
  "pop": 18800,
  "state": "IN"
},{
  "city": "OKAWVILLE",
  "zip": "62271",
  "loc": {
    "y": 38.431862,
    "x": 89.523045
  },
  "pop": 2187,
  "state": "IL"
},{
  "city": "QUINCY",
  "zip": "62301",
  "loc": {
    "y": 39.930701,
    "x": 91.376284
  },
  "pop": 52014,
  "state": "IL"
},{
  "city": "HAMILTON",
  "zip": "62341",
  "loc": {
    "y": 40.439213,
    "x": 91.344042
  },
  "pop": 5574,
  "state": "IL"
},{
  "city": "KINDERHOOK",
  "zip": "62345",
  "loc": {
    "y": 39.695313,
    "x": 91.163728
  },
  "pop": 427,
  "state": "IL"
},{
  "city": "BROWNSTOWN",
  "zip": "62418",
  "loc": {
    "y": 38.989118,
    "x": 88.949438
  },
  "pop": 2434,
  "state": "IL"
},{
  "city": "CALHOUN",
  "zip": "62419",
  "loc": {
    "y": 38.635116,
    "x": 88.003745
  },
  "pop": 715,
  "state": "IL"
},{
  "city": "FREDERICK",
  "zip": "62639",
  "loc": {
    "y": 40.070246,
    "x": 90.504391
  },
  "pop": 690,
  "state": "IL"
},{
  "city": "LUTHER",
  "zip": "62664",
  "loc": {
    "y": 40.199938,
    "x": 89.699256
  },
  "pop": 2968,
  "state": "IL"
},{
  "city": "MC LEANSBORO",
  "zip": "62859",
  "loc": {
    "y": 38.093861,
    "x": 88.528556
  },
  "pop": 4357,
  "state": "IL"
},{
  "city": "NORRIS CITY",
  "zip": "62869",
  "loc": {
    "y": 37.9773,
    "x": 88.32434
  },
  "pop": 2377,
  "state": "IL"
},{
  "city": "TAMAROA",
  "zip": "62888",
  "loc": {
    "y": 38.137969,
    "x": 89.223091
  },
  "pop": 1788,
  "state": "IL"
},{
  "city": "TEXICO",
  "zip": "62889",
  "loc": {
    "y": 38.425035,
    "x": 88.870151
  },
  "pop": 1159,
  "state": "IL"
},{
  "city": "CARTERVILLE",
  "zip": "62918",
  "loc": {
    "y": 37.774785,
    "x": 89.097793
  },
  "pop": 10457,
  "state": "IL"
},{
  "city": "JOPPA",
  "zip": "62953",
  "loc": {
    "y": 37.247192,
    "x": 88.84819
  },
  "pop": 1687,
  "state": "IL"
},{
  "city": "JONESBORO",
  "zip": "62952",
  "loc": {
    "y": 37.446082,
    "x": 89.291494
  },
  "pop": 3383,
  "state": "IL"
},{
  "city": "DONGOLA",
  "zip": "62926",
  "loc": {
    "y": 37.371234,
    "x": 89.134933
  },
  "pop": 2361,
  "state": "IL"
},{
  "city": "WOLF LAKE",
  "zip": "62998",
  "loc": {
    "y": 37.511985,
    "x": 89.440761
  },
  "pop": 533,
  "state": "IL"
},{
  "city": "ELWOOD",
  "zip": "46036",
  "loc": {
    "y": 40.280278,
    "x": 85.839055
  },
  "pop": 13598,
  "state": "IN"
},{
  "city": "ULLIN",
  "zip": "62992",
  "loc": {
    "y": 37.270385,
    "x": 89.191137
  },
  "pop": 787,
  "state": "IL"
},{
  "city": "THORNTOWN",
  "zip": "46071",
  "loc": {
    "y": 40.113335,
    "x": 86.589822
  },
  "pop": 4159,
  "state": "IN"
},{
  "city": "MANILLA",
  "zip": "46150",
  "loc": {
    "y": 39.575711,
    "x": 85.635369
  },
  "pop": 1696,
  "state": "IN"
},{
  "city": "MORRISTOWN",
  "zip": "46161",
  "loc": {
    "y": 39.667477,
    "x": 85.693419
  },
  "pop": 2215,
  "state": "IN"
},{
  "city": "SHILOH",
  "zip": "62269",
  "loc": {
    "y": 38.59052,
    "x": 89.9093
  },
  "pop": 21198,
  "state": "IL"
},{
  "city": "RED BUD",
  "zip": "62278",
  "loc": {
    "y": 38.190738,
    "x": 89.988356
  },
  "pop": 4923,
  "state": "IL"
},{
  "city": "SMITHBORO",
  "zip": "62284",
  "loc": {
    "y": 38.873893,
    "x": 89.326556
  },
  "pop": 771,
  "state": "IL"
},{
  "city": "PONTOOSUC",
  "zip": "62330",
  "loc": {
    "y": 40.620062,
    "x": 91.163454
  },
  "pop": 2146,
  "state": "IL"
},{
  "city": "DENNISON",
  "zip": "62423",
  "loc": {
    "y": 39.449033,
    "x": 87.58671
  },
  "pop": 753,
  "state": "IL"
},{
  "city": "NEWTON",
  "zip": "62448",
  "loc": {
    "y": 38.984678,
    "x": 88.170386
  },
  "pop": 5296,
  "state": "IL"
},{
  "city": "VANDALIA",
  "zip": "62471",
  "loc": {
    "y": 38.94391,
    "x": 89.104116
  },
  "pop": 7894,
  "state": "IL"
},{
  "city": "DECATUR",
  "zip": "62522",
  "loc": {
    "y": 39.843237,
    "x": 88.986139
  },
  "pop": 19224,
  "state": "IL"
},{
  "city": "RADFORD",
  "zip": "62550",
  "loc": {
    "y": 39.616135,
    "x": 89.012776
  },
  "pop": 3112,
  "state": "IL"
},{
  "city": "ILLIOPOLIS",
  "zip": "62539",
  "loc": {
    "y": 39.849929,
    "x": 89.251319
  },
  "pop": 1366,
  "state": "IL"
},{
  "city": "BLUE MOUND",
  "zip": "62513",
  "loc": {
    "y": 39.697813,
    "x": 89.113558
  },
  "pop": 1488,
  "state": "IL"
},{
  "city": "CLARKSDALE",
  "zip": "62556",
  "loc": {
    "y": 39.470817,
    "x": 89.425555
  },
  "pop": 689,
  "state": "IL"
},{
  "city": "BEARDSTOWN",
  "zip": "62618",
  "loc": {
    "y": 40.004356,
    "x": 90.422851
  },
  "pop": 7369,
  "state": "IL"
},{
  "city": "DUNKEL",
  "zip": "62557",
  "loc": {
    "y": 39.388124,
    "x": 89.078165
  },
  "pop": 7081,
  "state": "IL"
},{
  "city": "SICILY",
  "zip": "62558",
  "loc": {
    "y": 39.590966,
    "x": 89.578955
  },
  "pop": 2822,
  "state": "IL"
},{
  "city": "CHATHAM",
  "zip": "62629",
  "loc": {
    "y": 39.673679,
    "x": 89.711212
  },
  "pop": 4922,
  "state": "IL"
},{
  "city": "BIGGS",
  "zip": "62633",
  "loc": {
    "y": 40.235482,
    "x": 89.846447
  },
  "pop": 1056,
  "state": "IL"
},{
  "city": "ATTERBURY",
  "zip": "62675",
  "loc": {
    "y": 40.011529,
    "x": 89.847874
  },
  "pop": 5049,
  "state": "IL"
},{
  "city": "DU QUOIN",
  "zip": "62832",
  "loc": {
    "y": 38.013687,
    "x": 89.233268
  },
  "pop": 10061,
  "state": "IL"
},{
  "city": "KEENES",
  "zip": "62851",
  "loc": {
    "y": 38.369146,
    "x": 88.648058
  },
  "pop": 968,
  "state": "IL"
},{
  "city": "MACEDONIA",
  "zip": "62860",
  "loc": {
    "y": 38.013023,
    "x": 88.696077
  },
  "pop": 1505,
  "state": "IL"
},{
  "city": "MOUNT CARMEL",
  "zip": "62863",
  "loc": {
    "y": 38.414727,
    "x": 87.791107
  },
  "pop": 11493,
  "state": "IL"
},{
  "city": "PATOKA",
  "zip": "62875",
  "loc": {
    "y": 38.754852,
    "x": 89.094188
  },
  "pop": 857,
  "state": "IL"
},{
  "city": "XENIA",
  "zip": "62899",
  "loc": {
    "y": 38.669747,
    "x": 88.63789
  },
  "pop": 1252,
  "state": "IL"
},{
  "city": "GRAND CHAIN",
  "zip": "62941",
  "loc": {
    "y": 37.251043,
    "x": 89.008335
  },
  "pop": 603,
  "state": "IL"
},{
  "city": "HARRISBURG",
  "zip": "62946",
  "loc": {
    "y": 37.725661,
    "x": 88.54404
  },
  "pop": 12122,
  "state": "IL"
},{
  "city": "JACOB",
  "zip": "62950",
  "loc": {
    "y": 37.743738,
    "x": 89.544359
  },
  "pop": 257,
  "state": "IL"
},{
  "city": "MAKANDA",
  "zip": "62958",
  "loc": {
    "y": 37.656396,
    "x": 89.214232
  },
  "pop": 3893,
  "state": "IL"
},{
  "city": "PITTSBURG",
  "zip": "62974",
  "loc": {
    "y": 37.78387,
    "x": 88.870393
  },
  "pop": 1330,
  "state": "IL"
},{
  "city": "RIDGWAY",
  "zip": "62979",
  "loc": {
    "y": 37.804242,
    "x": 88.261202
  },
  "pop": 1686,
  "state": "IL"
},{
  "city": "FORTVILLE",
  "zip": "46040",
  "loc": {
    "y": 39.922835,
    "x": 85.818554
  },
  "pop": 5887,
  "state": "IN"
},{
  "city": "VILLA RIDGE",
  "zip": "62996",
  "loc": {
    "y": 37.157765,
    "x": 89.182522
  },
  "pop": 736,
  "state": "IL"
},{
  "city": "KEMPTON",
  "zip": "46049",
  "loc": {
    "y": 40.275946,
    "x": 86.1887
  },
  "pop": 1501,
  "state": "IN"
},{
  "city": "CAMBY",
  "zip": "46113",
  "loc": {
    "y": 39.640501,
    "x": 86.311811
  },
  "pop": 2681,
  "state": "IN"
},{
  "city": "FAIRLAND",
  "zip": "46126",
  "loc": {
    "y": 39.629467,
    "x": 85.891284
  },
  "pop": 6682,
  "state": "IN"
},{
  "city": "BARTELSO",
  "zip": "62218",
  "loc": {
    "y": 38.53851,
    "x": 89.457841
  },
  "pop": 1270,
  "state": "IL"
},{
  "city": "NASHVILLE",
  "zip": "62263",
  "loc": {
    "y": 38.335208,
    "x": 89.384058
  },
  "pop": 4546,
  "state": "IL"
},{
  "city": "FULTS",
  "zip": "62244",
  "loc": {
    "y": 38.179736,
    "x": 90.197353
  },
  "pop": 635,
  "state": "IL"
},{
  "city": "WALSH",
  "zip": "62297",
  "loc": {
    "y": 38.020286,
    "x": 89.829658
  },
  "pop": 801,
  "state": "IL"
},{
  "city": "LENZBURG",
  "zip": "62255",
  "loc": {
    "y": 38.295003,
    "x": 89.792202
  },
  "pop": 1316,
  "state": "IL"
},{
  "city": "HUNTSVILLE",
  "zip": "62344",
  "loc": {
    "y": 40.154396,
    "x": 90.853136
  },
  "pop": 189,
  "state": "IL"
},{
  "city": "NIOTA",
  "zip": "62358",
  "loc": {
    "y": 40.597753,
    "x": 91.299136
  },
  "pop": 672,
  "state": "IL"
},{
  "city": "LEBANON",
  "zip": "62254",
  "loc": {
    "y": 38.60528,
    "x": 89.799213
  },
  "pop": 4950,
  "state": "IL"
},{
  "city": "MARISSA",
  "zip": "62257",
  "loc": {
    "y": 38.245455,
    "x": 89.750119
  },
  "pop": 2634,
  "state": "IL"
},{
  "city": "COWDEN",
  "zip": "62422",
  "loc": {
    "y": 39.232643,
    "x": 88.886799
  },
  "pop": 1521,
  "state": "IL"
},{
  "city": "VALMEYER",
  "zip": "62295",
  "loc": {
    "y": 38.295163,
    "x": 90.309234
  },
  "pop": 1841,
  "state": "IL"
},{
  "city": "STEWARDSON",
  "zip": "62463",
  "loc": {
    "y": 39.27199,
    "x": 88.631853
  },
  "pop": 1219,
  "state": "IL"
},{
  "city": "HULL",
  "zip": "62343",
  "loc": {
    "y": 39.718562,
    "x": 91.233844
  },
  "pop": 892,
  "state": "IL"
},{
  "city": "STRASBURG",
  "zip": "62465",
  "loc": {
    "y": 39.364111,
    "x": 88.627862
  },
  "pop": 758,
  "state": "IL"
},{
  "city": "TIMEWELL",
  "zip": "62375",
  "loc": {
    "y": 40.011658,
    "x": 90.866067
  },
  "pop": 539,
  "state": "IL"
},{
  "city": "BUFFALO HART",
  "zip": "62515",
  "loc": {
    "y": 39.847201,
    "x": 89.388846
  },
  "pop": 797,
  "state": "IL"
},{
  "city": "BAYLIS",
  "zip": "62314",
  "loc": {
    "y": 39.761201,
    "x": 90.883216
  },
  "pop": 628,
  "state": "IL"
},{
  "city": "CHESTNUT",
  "zip": "62518",
  "loc": {
    "y": 40.058202,
    "x": 89.190014
  },
  "pop": 436,
  "state": "IL"
},{
  "city": "PALESTINE",
  "zip": "62451",
  "loc": {
    "y": 39.002823,
    "x": 87.615695
  },
  "pop": 2413,
  "state": "IL"
},{
  "city": "CLEMENTS",
  "zip": "62638",
  "loc": {
    "y": 39.608461,
    "x": 90.048535
  },
  "pop": 1280,
  "state": "IL"
},{
  "city": "WEST YORK",
  "zip": "62478",
  "loc": {
    "y": 39.193793,
    "x": 87.713073
  },
  "pop": 665,
  "state": "IL"
},{
  "city": "ECKARD",
  "zip": "62644",
  "loc": {
    "y": 40.295995,
    "x": 90.04952
  },
  "pop": 5593,
  "state": "IL"
},{
  "city": "BEARSDALE",
  "zip": "62526",
  "loc": {
    "y": 39.877413,
    "x": 88.953515
  },
  "pop": 39674,
  "state": "IL"
},{
  "city": "NAPLES",
  "zip": "62665",
  "loc": {
    "y": 39.797631,
    "x": 90.549542
  },
  "pop": 2215,
  "state": "IL"
},{
  "city": "NEW HOLLAND",
  "zip": "62671",
  "loc": {
    "y": 40.168226,
    "x": 89.56044
  },
  "pop": 663,
  "state": "IL"
},{
  "city": "DECATUR",
  "zip": "62521",
  "loc": {
    "y": 39.827137,
    "x": 88.925984
  },
  "pop": 39666,
  "state": "IL"
},{
  "city": "LITTLE INDIAN",
  "zip": "62691",
  "loc": {
    "y": 39.945475,
    "x": 90.212681
  },
  "pop": 2144,
  "state": "IL"
},{
  "city": "OWANECO",
  "zip": "62555",
  "loc": {
    "y": 39.477508,
    "x": 89.195071
  },
  "pop": 540,
  "state": "IL"
},{
  "city": "ALMA",
  "zip": "62807",
  "loc": {
    "y": 38.723089,
    "x": 88.915695
  },
  "pop": 1251,
  "state": "IL"
},{
  "city": "DAWSON",
  "zip": "62520",
  "loc": {
    "y": 39.85629,
    "x": 89.460329
  },
  "pop": 558,
  "state": "IL"
},{
  "city": "BENTON",
  "zip": "62812",
  "loc": {
    "y": 37.99998,
    "x": 88.922659
  },
  "pop": 11419,
  "state": "IL"
},{
  "city": "STONINGTON",
  "zip": "62567",
  "loc": {
    "y": 39.640482,
    "x": 89.191328
  },
  "pop": 1280,
  "state": "IL"
},{
  "city": "DAHLGREN",
  "zip": "62828",
  "loc": {
    "y": 38.197479,
    "x": 88.636311
  },
  "pop": 1627,
  "state": "IL"
},{
  "city": "ORLEANS",
  "zip": "62601",
  "loc": {
    "y": 39.725935,
    "x": 90.035304
  },
  "pop": 501,
  "state": "IL"
},{
  "city": "ENFIELD",
  "zip": "62835",
  "loc": {
    "y": 38.092746,
    "x": 88.332546
  },
  "pop": 1145,
  "state": "IL"
},{
  "city": "BADER",
  "zip": "62624",
  "loc": {
    "y": 40.155025,
    "x": 90.351671
  },
  "pop": 766,
  "state": "IL"
},{
  "city": "PANTHER CREEK",
  "zip": "62627",
  "loc": {
    "y": 40.038437,
    "x": 90.147657
  },
  "pop": 1283,
  "state": "IL"
},{
  "city": "CAIRO",
  "zip": "62914",
  "loc": {
    "y": 37.012293,
    "x": 89.181104
  },
  "pop": 5439,
  "state": "IL"
},{
  "city": "ARCADIA",
  "zip": "62650",
  "loc": {
    "y": 39.729269,
    "x": 90.236238
  },
  "pop": 28240,
  "state": "IL"
},{
  "city": "NEW HAVEN",
  "zip": "62867",
  "loc": {
    "y": 37.899907,
    "x": 88.128458
  },
  "pop": 558,
  "state": "IL"
},{
  "city": "ROYAL LAKES",
  "zip": "62685",
  "loc": {
    "y": 39.124165,
    "x": 90.048737
  },
  "pop": 844,
  "state": "IL"
},{
  "city": "GORHAM",
  "zip": "62940",
  "loc": {
    "y": 37.740611,
    "x": 89.444031
  },
  "pop": 982,
  "state": "IL"
},{
  "city": "PLAINVIEW",
  "zip": "62676",
  "loc": {
    "y": 39.128311,
    "x": 89.975687
  },
  "pop": 792,
  "state": "IL"
},{
  "city": "ANDERSON",
  "zip": "46016",
  "loc": {
    "y": 40.098799,
    "x": 85.684566
  },
  "pop": 22838,
  "state": "IN"
},{
  "city": "SPRINGFIELD",
  "zip": "62701",
  "loc": {
    "y": 39.80004,
    "x": 89.649531
  },
  "pop": 1155,
  "state": "IL"
},{
  "city": "NOBLESVILLE",
  "zip": "46060",
  "loc": {
    "y": 40.056292,
    "x": 86.016294
  },
  "pop": 26318,
  "state": "IN"
},{
  "city": "BROUGHTON",
  "zip": "62817",
  "loc": {
    "y": 37.954554,
    "x": 88.467775
  },
  "pop": 732,
  "state": "IL"
},{
  "city": "TIPTON",
  "zip": "46072",
  "loc": {
    "y": 40.281725,
    "x": 86.043291
  },
  "pop": 8060,
  "state": "IN"
},{
  "city": "ELLERY",
  "zip": "62833",
  "loc": {
    "y": 38.365021,
    "x": 88.133455
  },
  "pop": 141,
  "state": "IL"
},{
  "city": "BAINBRIDGE",
  "zip": "46105",
  "loc": {
    "y": 39.740664,
    "x": 86.771119
  },
  "pop": 3147,
  "state": "IN"
},{
  "city": "BEECH GROVE",
  "zip": "46107",
  "loc": {
    "y": 39.715434,
    "x": 86.093299
  },
  "pop": 13051,
  "state": "IN"
},{
  "city": "GEFF",
  "zip": "62842",
  "loc": {
    "y": 38.441326,
    "x": 88.414428
  },
  "pop": 632,
  "state": "IL"
},{
  "city": "ROSSVILLE",
  "zip": "46065",
  "loc": {
    "y": 40.410928,
    "x": 86.607966
  },
  "pop": 2217,
  "state": "IN"
},{
  "city": "KELL",
  "zip": "62853",
  "loc": {
    "y": 38.513256,
    "x": 88.841107
  },
  "pop": 1261,
  "state": "IL"
},{
  "city": "MULKEYTOWN",
  "zip": "62865",
  "loc": {
    "y": 37.968712,
    "x": 89.1159
  },
  "pop": 474,
  "state": "IL"
},{
  "city": "RUSSELLVILLE",
  "zip": "46175",
  "loc": {
    "y": 39.836598,
    "x": 86.966975
  },
  "pop": 775,
  "state": "IN"
},{
  "city": "WILKINSON",
  "zip": "46186",
  "loc": {
    "y": 39.895668,
    "x": 85.61436
  },
  "pop": 2567,
  "state": "IN"
},{
  "city": "WOODLAWN",
  "zip": "62898",
  "loc": {
    "y": 38.38444,
    "x": 89.074457
  },
  "pop": 1896,
  "state": "IL"
},{
  "city": "CAMPBELL HILL",
  "zip": "62916",
  "loc": {
    "y": 37.922778,
    "x": 89.579901
  },
  "pop": 976,
  "state": "IL"
},{
  "city": "GRAND TOWER",
  "zip": "62942",
  "loc": {
    "y": 37.63222,
    "x": 89.49986
  },
  "pop": 903,
  "state": "IL"
},{
  "city": "SHAWNEETOWN",
  "zip": "62984",
  "loc": {
    "y": 37.713188,
    "x": 88.178503
  },
  "pop": 2400,
  "state": "IL"
},{
  "city": "ANDERSON",
  "zip": "46011",
  "loc": {
    "y": 40.114577,
    "x": 85.725305
  },
  "pop": 17280,
  "state": "IN"
},{
  "city": "HILLISBURG",
  "zip": "46041",
  "loc": {
    "y": 40.288404,
    "x": 86.511387
  },
  "pop": 20713,
  "state": "IN"
},{
  "city": "LEBANON",
  "zip": "46052",
  "loc": {
    "y": 40.044894,
    "x": 86.464074
  },
  "pop": 17322,
  "state": "IN"
},{
  "city": "MARKLEVILLE",
  "zip": "46056",
  "loc": {
    "y": 39.994385,
    "x": 85.622736
  },
  "pop": 2957,
  "state": "IN"
},{
  "city": "SOUTHPORT",
  "zip": "46217",
  "loc": {
    "y": 39.664141,
    "x": 86.175394
  },
  "pop": 16644,
  "state": "IN"
},{
  "city": "PARK FLETCHER",
  "zip": "46241",
  "loc": {
    "y": 39.723814,
    "x": 86.250856
  },
  "pop": 44731,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46201",
  "loc": {
    "y": 39.775006,
    "x": 86.109348
  },
  "pop": 42096,
  "state": "IN"
},{
  "city": "STILESVILLE",
  "zip": "46180",
  "loc": {
    "y": 39.639113,
    "x": 86.61819
  },
  "pop": 1135,
  "state": "IN"
},{
  "city": "ROACHDALE",
  "zip": "46172",
  "loc": {
    "y": 39.832545,
    "x": 86.790225
  },
  "pop": 2293,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46202",
  "loc": {
    "y": 39.785063,
    "x": 86.159502
  },
  "pop": 15672,
  "state": "IN"
},{
  "city": "WANAMAKER",
  "zip": "46239",
  "loc": {
    "y": 39.721826,
    "x": 86.008209
  },
  "pop": 8611,
  "state": "IN"
},{
  "city": "CASTLETON",
  "zip": "46256",
  "loc": {
    "y": 39.90114,
    "x": 86.023877
  },
  "pop": 20589,
  "state": "IN"
},{
  "city": "LAKE STATION",
  "zip": "46405",
  "loc": {
    "y": 41.568629,
    "x": 87.262209
  },
  "pop": 12437,
  "state": "IN"
},{
  "city": "GARY",
  "zip": "46406",
  "loc": {
    "y": 41.587806,
    "x": 87.40621
  },
  "pop": 15132,
  "state": "IN"
},{
  "city": "BREMEN",
  "zip": "46506",
  "loc": {
    "y": 41.446701,
    "x": 86.19323
  },
  "pop": 13832,
  "state": "IN"
},{
  "city": "BRISTOL",
  "zip": "46507",
  "loc": {
    "y": 41.716885,
    "x": 85.826192
  },
  "pop": 7086,
  "state": "IN"
},{
  "city": "FORAKER",
  "zip": "46526",
  "loc": {
    "y": 41.584484,
    "x": 85.837988
  },
  "pop": 41317,
  "state": "IN"
},{
  "city": "MIDDLEBURY",
  "zip": "46540",
  "loc": {
    "y": 41.675415,
    "x": 85.711443
  },
  "pop": 7737,
  "state": "IN"
},{
  "city": "SOUTH BEND",
  "zip": "46635",
  "loc": {
    "y": 41.716768,
    "x": 86.207806
  },
  "pop": 6989,
  "state": "IN"
},{
  "city": "BUTLER",
  "zip": "46721",
  "loc": {
    "y": 41.42873,
    "x": 84.878716
  },
  "pop": 5982,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46806",
  "loc": {
    "y": 41.047988,
    "x": 85.113496
  },
  "pop": 28184,
  "state": "IN"
},{
  "city": "WOODBURN",
  "zip": "46797",
  "loc": {
    "y": 41.136102,
    "x": 84.892871
  },
  "pop": 5044,
  "state": "IN"
},{
  "city": "GALVESTON",
  "zip": "46932",
  "loc": {
    "y": 40.586249,
    "x": 86.1972
  },
  "pop": 3059,
  "state": "IN"
},{
  "city": "JONESBORO",
  "zip": "46938",
  "loc": {
    "y": 40.481456,
    "x": 85.636496
  },
  "pop": 3989,
  "state": "IN"
},{
  "city": "GEORGETOWN",
  "zip": "47122",
  "loc": {
    "y": 38.302943,
    "x": 85.961704
  },
  "pop": 4446,
  "state": "IN"
},{
  "city": "HARDINSBURG",
  "zip": "47125",
  "loc": {
    "y": 38.462599,
    "x": 86.317983
  },
  "pop": 2496,
  "state": "IN"
},{
  "city": "CLARKSVILLE",
  "zip": "47129",
  "loc": {
    "y": 38.537273,
    "x": 85.524438
  },
  "pop": 379,
  "state": "IN"
},{
  "city": "SPEED",
  "zip": "47172",
  "loc": {
    "y": 38.390331,
    "x": 85.763518
  },
  "pop": 8658,
  "state": "IN"
},{
  "city": "CANAAN",
  "zip": "47224",
  "loc": {
    "y": 38.869644,
    "x": 85.268896
  },
  "pop": 936,
  "state": "IN"
},{
  "city": "UNDERWOOD",
  "zip": "47177",
  "loc": {
    "y": 38.590251,
    "x": 85.767211
  },
  "pop": 818,
  "state": "IN"
},{
  "city": "CROTHERSVILLE",
  "zip": "47229",
  "loc": {
    "y": 38.806672,
    "x": 85.846965
  },
  "pop": 3865,
  "state": "IN"
},{
  "city": "MUNCIE",
  "zip": "47303",
  "loc": {
    "y": 40.217992,
    "x": 85.378966
  },
  "pop": 26033,
  "state": "IN"
},{
  "city": "CORTLAND",
  "zip": "47228",
  "loc": {
    "y": 38.991546,
    "x": 86.000918
  },
  "pop": 1680,
  "state": "IN"
},{
  "city": "MUNCIE",
  "zip": "47304",
  "loc": {
    "y": 40.211134,
    "x": 85.429115
  },
  "pop": 28452,
  "state": "IN"
},{
  "city": "DALEVILLE",
  "zip": "47334",
  "loc": {
    "y": 40.125738,
    "x": 85.511016
  },
  "pop": 5063,
  "state": "IN"
},{
  "city": "DUNKIRK",
  "zip": "47336",
  "loc": {
    "y": 40.388291,
    "x": 85.225541
  },
  "pop": 4413,
  "state": "IN"
},{
  "city": "HARTFORD CITY",
  "zip": "47348",
  "loc": {
    "y": 40.454106,
    "x": 85.375771
  },
  "pop": 9762,
  "state": "IN"
},{
  "city": "LYNN",
  "zip": "47355",
  "loc": {
    "y": 40.051863,
    "x": 84.93003
  },
  "pop": 3544,
  "state": "IN"
},{
  "city": "SPRINGPORT",
  "zip": "47386",
  "loc": {
    "y": 40.008848,
    "x": 85.368867
  },
  "pop": 3393,
  "state": "IN"
},{
  "city": "PAOLI",
  "zip": "47454",
  "loc": {
    "y": 38.550697,
    "x": 86.44902
  },
  "pop": 6790,
  "state": "IN"
},{
  "city": "SIBERIA",
  "zip": "47515",
  "loc": {
    "y": 38.163101,
    "x": 86.721815
  },
  "pop": 912,
  "state": "IN"
},{
  "city": "UNIONVILLE",
  "zip": "47468",
  "loc": {
    "y": 39.251396,
    "x": 86.418947
  },
  "pop": 1111,
  "state": "IN"
},{
  "city": "SHOALS",
  "zip": "47581",
  "loc": {
    "y": 38.679103,
    "x": 86.776094
  },
  "pop": 4562,
  "state": "IN"
},{
  "city": "STENDAL",
  "zip": "47585",
  "loc": {
    "y": 38.283472,
    "x": 87.12045
  },
  "pop": 596,
  "state": "IN"
},{
  "city": "CHANDLER",
  "zip": "47610",
  "loc": {
    "y": 38.042304,
    "x": 87.375552
  },
  "pop": 5641,
  "state": "IN"
},{
  "city": "WADESVILLE",
  "zip": "47638",
  "loc": {
    "y": 38.082791,
    "x": 87.754295
  },
  "pop": 3614,
  "state": "IN"
},{
  "city": "BRIDGEPORT",
  "zip": "46231",
  "loc": {
    "y": 39.740637,
    "x": 86.318289
  },
  "pop": 5531,
  "state": "IN"
},{
  "city": "LOWELL",
  "zip": "46356",
  "loc": {
    "y": 41.284531,
    "x": 87.419072
  },
  "pop": 12579,
  "state": "IN"
},{
  "city": "MICHIGAN CITY",
  "zip": "46360",
  "loc": {
    "y": 41.698031,
    "x": 86.869899
  },
  "pop": 55392,
  "state": "IN"
},{
  "city": "PORTAGE",
  "zip": "46368",
  "loc": {
    "y": 41.567201,
    "x": 87.175689
  },
  "pop": 40860,
  "state": "IN"
},{
  "city": "MISHAWAKA",
  "zip": "46545",
  "loc": {
    "y": 41.683498,
    "x": 86.168232
  },
  "pop": 23031,
  "state": "IN"
},{
  "city": "ANDREWS",
  "zip": "46702",
  "loc": {
    "y": 40.861792,
    "x": 85.606726
  },
  "pop": 2138,
  "state": "IN"
},{
  "city": "GENEVA",
  "zip": "46740",
  "loc": {
    "y": 40.607129,
    "x": 84.962074
  },
  "pop": 3676,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46845",
  "loc": {
    "y": 41.195783,
    "x": 85.119088
  },
  "pop": 9168,
  "state": "IN"
},{
  "city": "MACY",
  "zip": "46951",
  "loc": {
    "y": 40.961838,
    "x": 86.126428
  },
  "pop": 633,
  "state": "IN"
},{
  "city": "MARION",
  "zip": "46953",
  "loc": {
    "y": 40.53592,
    "x": 85.661624
  },
  "pop": 22079,
  "state": "IN"
},{
  "city": "FAIRMOUNT",
  "zip": "46928",
  "loc": {
    "y": 40.418755,
    "x": 85.671327
  },
  "pop": 6230,
  "state": "IN"
},{
  "city": "WALTON",
  "zip": "46994",
  "loc": {
    "y": 40.677225,
    "x": 86.280501
  },
  "pop": 4935,
  "state": "IN"
},{
  "city": "CROSS PLAINS",
  "zip": "47017",
  "loc": {
    "y": 38.949046,
    "x": 85.21221
  },
  "pop": 802,
  "state": "IN"
},{
  "city": "FRIENDSHIP",
  "zip": "47021",
  "loc": {
    "y": 39.114591,
    "x": 85.215296
  },
  "pop": 218,
  "state": "IN"
},{
  "city": "W HARRISON",
  "zip": "47060",
  "loc": {
    "y": 39.266727,
    "x": 84.878027
  },
  "pop": 5338,
  "state": "IN"
},{
  "city": "ECKERTY",
  "zip": "47116",
  "loc": {
    "y": 38.318548,
    "x": 86.605939
  },
  "pop": 971,
  "state": "IN"
},{
  "city": "GREENVILLE",
  "zip": "47124",
  "loc": {
    "y": 38.353533,
    "x": 86.008299
  },
  "pop": 1162,
  "state": "IN"
},{
  "city": "LANESVILLE",
  "zip": "47136",
  "loc": {
    "y": 38.244817,
    "x": 85.959314
  },
  "pop": 3524,
  "state": "IN"
},{
  "city": "NABB",
  "zip": "47147",
  "loc": {
    "y": 38.612768,
    "x": 85.521704
  },
  "pop": 2246,
  "state": "IN"
},{
  "city": "COLUMBUS",
  "zip": "47201",
  "loc": {
    "y": 39.205507,
    "x": 85.931745
  },
  "pop": 40769,
  "state": "IN"
},{
  "city": "MIDDLETOWN",
  "zip": "47356",
  "loc": {
    "y": 40.047488,
    "x": 85.536778
  },
  "pop": 4613,
  "state": "IN"
},{
  "city": "NEW CASTLE",
  "zip": "47362",
  "loc": {
    "y": 39.920765,
    "x": 85.366322
  },
  "pop": 25888,
  "state": "IN"
},{
  "city": "BLOOMINGTON",
  "zip": "47401",
  "loc": {
    "y": 39.140057,
    "x": 86.508262
  },
  "pop": 31456,
  "state": "IN"
},{
  "city": "OAKTOWN",
  "zip": "47561",
  "loc": {
    "y": 38.857939,
    "x": 87.387877
  },
  "pop": 2569,
  "state": "IN"
},{
  "city": "SAINT MEINRAD",
  "zip": "47577",
  "loc": {
    "y": 38.181946,
    "x": 86.842916
  },
  "pop": 652,
  "state": "IN"
},{
  "city": "TOBINSPORT",
  "zip": "47587",
  "loc": {
    "y": 37.874726,
    "x": 86.634128
  },
  "pop": 151,
  "state": "IN"
},{
  "city": "CHRISNEY",
  "zip": "47611",
  "loc": {
    "y": 38.005995,
    "x": 87.070421
  },
  "pop": 1455,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46225",
  "loc": {
    "y": 39.740599,
    "x": 86.156944
  },
  "pop": 8464,
  "state": "IN"
},{
  "city": "SOUTHPORT",
  "zip": "46227",
  "loc": {
    "y": 39.675,
    "x": 86.129817
  },
  "pop": 52257,
  "state": "IN"
},{
  "city": "NORA",
  "zip": "46290",
  "loc": {
    "y": 39.93077,
    "x": 86.167118
  },
  "pop": 75,
  "state": "IN"
},{
  "city": "GARY",
  "zip": "46404",
  "loc": {
    "y": 41.589937,
    "x": 87.373153
  },
  "pop": 23031,
  "state": "IN"
},{
  "city": "OBER",
  "zip": "46534",
  "loc": {
    "y": 41.29006,
    "x": 86.610715
  },
  "pop": 7437,
  "state": "IN"
},{
  "city": "MILFORD",
  "zip": "46542",
  "loc": {
    "y": 41.401141,
    "x": 85.855438
  },
  "pop": 4861,
  "state": "IN"
},{
  "city": "NEW PARIS",
  "zip": "46553",
  "loc": {
    "y": 41.491652,
    "x": 85.83383
  },
  "pop": 2723,
  "state": "IN"
},{
  "city": "TOPEKA",
  "zip": "46571",
  "loc": {
    "y": 41.563441,
    "x": 85.531668
  },
  "pop": 5749,
  "state": "IN"
},{
  "city": "SOUTH BEND",
  "zip": "46617",
  "loc": {
    "y": 41.684966,
    "x": 86.2351
  },
  "pop": 11057,
  "state": "IN"
},{
  "city": "WARSAW",
  "zip": "46580",
  "loc": {
    "y": 41.24377,
    "x": 85.85078
  },
  "pop": 22851,
  "state": "IN"
},{
  "city": "HARLAN",
  "zip": "46743",
  "loc": {
    "y": 41.228468,
    "x": 84.838635
  },
  "pop": 653,
  "state": "IN"
},{
  "city": "HELMER",
  "zip": "46747",
  "loc": {
    "y": 41.559887,
    "x": 85.141953
  },
  "pop": 2012,
  "state": "IN"
},{
  "city": "CRAIGVILLE",
  "zip": "46731",
  "loc": {
    "y": 40.793034,
    "x": 85.090379
  },
  "pop": 323,
  "state": "IN"
},{
  "city": "LAGRANGE",
  "zip": "46761",
  "loc": {
    "y": 41.652008,
    "x": 85.40401
  },
  "pop": 8410,
  "state": "IN"
},{
  "city": "WAWAKA",
  "zip": "46794",
  "loc": {
    "y": 41.483251,
    "x": 85.480427
  },
  "pop": 1545,
  "state": "IN"
},{
  "city": "ROCHESTER",
  "zip": "46975",
  "loc": {
    "y": 41.065493,
    "x": 86.231007
  },
  "pop": 14259,
  "state": "IN"
},{
  "city": "WINAMAC",
  "zip": "46996",
  "loc": {
    "y": 41.056242,
    "x": 86.630697
  },
  "pop": 6857,
  "state": "IN"
},{
  "city": "LAWRENCEBURG",
  "zip": "47025",
  "loc": {
    "y": 39.140123,
    "x": 84.865819
  },
  "pop": 15358,
  "state": "IN"
},{
  "city": "RISING SUN",
  "zip": "47040",
  "loc": {
    "y": 38.956667,
    "x": 84.880676
  },
  "pop": 4500,
  "state": "IN"
},{
  "city": "CRANDALL",
  "zip": "47114",
  "loc": {
    "y": 38.28927,
    "x": 86.069804
  },
  "pop": 239,
  "state": "IN"
},{
  "city": "METAMORA",
  "zip": "47030",
  "loc": {
    "y": 39.428775,
    "x": 85.15044
  },
  "pop": 1085,
  "state": "IN"
},{
  "city": "DEPAUW",
  "zip": "47115",
  "loc": {
    "y": 38.336078,
    "x": 86.210857
  },
  "pop": 3269,
  "state": "IN"
},{
  "city": "NEW SALISBURY",
  "zip": "47161",
  "loc": {
    "y": 38.339885,
    "x": 86.088731
  },
  "pop": 4814,
  "state": "IN"
},{
  "city": "SCOTTSBURG",
  "zip": "47170",
  "loc": {
    "y": 38.688499,
    "x": 85.798654
  },
  "pop": 13114,
  "state": "IN"
},{
  "city": "VERNON",
  "zip": "47282",
  "loc": {
    "y": 38.96887,
    "x": 85.598377
  },
  "pop": 2277,
  "state": "IN"
},{
  "city": "WESTPORT",
  "zip": "47283",
  "loc": {
    "y": 39.174856,
    "x": 85.585596
  },
  "pop": 3065,
  "state": "IN"
},{
  "city": "MUNCIE",
  "zip": "47302",
  "loc": {
    "y": 40.168414,
    "x": 85.380689
  },
  "pop": 29709,
  "state": "IN"
},{
  "city": "BALL STATE UNIVE",
  "zip": "47306",
  "loc": {
    "y": 40.192739,
    "x": 85.410153
  },
  "pop": 3259,
  "state": "IN"
},{
  "city": "FOUNTAIN CITY",
  "zip": "47341",
  "loc": {
    "y": 39.963429,
    "x": 84.908996
  },
  "pop": 2020,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46219",
  "loc": {
    "y": 39.782092,
    "x": 86.049533
  },
  "pop": 38198,
  "state": "IN"
},{
  "city": "YORKTOWN",
  "zip": "47396",
  "loc": {
    "y": 40.183581,
    "x": 85.495995
  },
  "pop": 5027,
  "state": "IN"
},{
  "city": "FREEDOM",
  "zip": "47431",
  "loc": {
    "y": 39.215147,
    "x": 86.850027
  },
  "pop": 1003,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46221",
  "loc": {
    "y": 39.750885,
    "x": 86.19243
  },
  "pop": 7920,
  "state": "IN"
},{
  "city": "CASTLETON",
  "zip": "46250",
  "loc": {
    "y": 39.9069,
    "x": 86.069112
  },
  "pop": 17196,
  "state": "IN"
},{
  "city": "NORA",
  "zip": "46260",
  "loc": {
    "y": 39.897488,
    "x": 86.184809
  },
  "pop": 29718,
  "state": "IN"
},{
  "city": "WASHINGTON",
  "zip": "47501",
  "loc": {
    "y": 38.653568,
    "x": 87.170656
  },
  "pop": 15495,
  "state": "IN"
},{
  "city": "NORTH JUDSON",
  "zip": "46366",
  "loc": {
    "y": 41.224372,
    "x": 86.696601
  },
  "pop": 8426,
  "state": "IN"
},{
  "city": "BRUCEVILLE",
  "zip": "47516",
  "loc": {
    "y": 38.756279,
    "x": 87.431299
  },
  "pop": 1167,
  "state": "IN"
},{
  "city": "HOLLAND",
  "zip": "47541",
  "loc": {
    "y": 38.23851,
    "x": 87.008768
  },
  "pop": 2072,
  "state": "IN"
},{
  "city": "HUNTINGBURG",
  "zip": "47542",
  "loc": {
    "y": 38.297902,
    "x": 86.953299
  },
  "pop": 7415,
  "state": "IN"
},{
  "city": "MONROE CITY",
  "zip": "47557",
  "loc": {
    "y": 38.60015,
    "x": 87.364136
  },
  "pop": 1915,
  "state": "IN"
},{
  "city": "VELPEN",
  "zip": "47590",
  "loc": {
    "y": 38.367981,
    "x": 87.098996
  },
  "pop": 393,
  "state": "IN"
},{
  "city": "SAINT JOHN",
  "zip": "46373",
  "loc": {
    "y": 41.44949,
    "x": 87.476376
  },
  "pop": 4786,
  "state": "IN"
},{
  "city": "WHITING",
  "zip": "46394",
  "loc": {
    "y": 41.678656,
    "x": 87.500537
  },
  "pop": 13157,
  "state": "IN"
},{
  "city": "VALPARAISO",
  "zip": "46383",
  "loc": {
    "y": 41.475661,
    "x": 87.075866
  },
  "pop": 53439,
  "state": "IN"
},{
  "city": "ELKHART",
  "zip": "46517",
  "loc": {
    "y": 41.646922,
    "x": 85.972849
  },
  "pop": 17983,
  "state": "IN"
},{
  "city": "NORTH WEBSTER",
  "zip": "46555",
  "loc": {
    "y": 41.308423,
    "x": 85.707872
  },
  "pop": 6197,
  "state": "IN"
},{
  "city": "OSCEOLA",
  "zip": "46561",
  "loc": {
    "y": 41.674074,
    "x": 86.078883
  },
  "pop": 8029,
  "state": "IN"
},{
  "city": "SOUTH BEND",
  "zip": "46619",
  "loc": {
    "y": 41.667397,
    "x": 86.315266
  },
  "pop": 19880,
  "state": "IN"
},{
  "city": "CROMWELL",
  "zip": "46732",
  "loc": {
    "y": 41.37514,
    "x": 85.603133
  },
  "pop": 2872,
  "state": "IN"
},{
  "city": "LAOTTO",
  "zip": "46763",
  "loc": {
    "y": 41.299119,
    "x": 85.190086
  },
  "pop": 3483,
  "state": "IN"
},{
  "city": "LARWILL",
  "zip": "46764",
  "loc": {
    "y": 41.164623,
    "x": 85.613869
  },
  "pop": 1496,
  "state": "IN"
},{
  "city": "YODER",
  "zip": "46798",
  "loc": {
    "y": 40.937059,
    "x": 85.195828
  },
  "pop": 691,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46835",
  "loc": {
    "y": 41.137051,
    "x": 85.068531
  },
  "pop": 26758,
  "state": "IN"
},{
  "city": "KOKOMO",
  "zip": "46901",
  "loc": {
    "y": 40.49884,
    "x": 86.145273
  },
  "pop": 37261,
  "state": "IN"
},{
  "city": "CONVERSE",
  "zip": "46919",
  "loc": {
    "y": 40.577031,
    "x": 85.876299
  },
  "pop": 1353,
  "state": "IN"
},{
  "city": "NORTH MANCHESTER",
  "zip": "46962",
  "loc": {
    "y": 40.998603,
    "x": 85.784184
  },
  "pop": 10772,
  "state": "IN"
},{
  "city": "GRISSOM AIR FORC",
  "zip": "46971",
  "loc": {
    "y": 40.663546,
    "x": 86.147292
  },
  "pop": 4364,
  "state": "IN"
},{
  "city": "SWAYZEE",
  "zip": "46986",
  "loc": {
    "y": 40.511199,
    "x": 85.826542
  },
  "pop": 1891,
  "state": "IN"
},{
  "city": "TWELVE MILE",
  "zip": "46988",
  "loc": {
    "y": 40.854661,
    "x": 86.212595
  },
  "pop": 873,
  "state": "IN"
},{
  "city": "LANDESS",
  "zip": "46991",
  "loc": {
    "y": 40.63199,
    "x": 85.481891
  },
  "pop": 3670,
  "state": "IN"
},{
  "city": "WABASH",
  "zip": "46992",
  "loc": {
    "y": 40.790947,
    "x": 85.832124
  },
  "pop": 17371,
  "state": "IN"
},{
  "city": "SUNMAN",
  "zip": "47041",
  "loc": {
    "y": 39.262307,
    "x": 85.115929
  },
  "pop": 4719,
  "state": "IN"
},{
  "city": "CORYDON",
  "zip": "47112",
  "loc": {
    "y": 38.218865,
    "x": 86.114465
  },
  "pop": 10928,
  "state": "IN"
},{
  "city": "MARYSVILLE",
  "zip": "47141",
  "loc": {
    "y": 38.554488,
    "x": 85.630809
  },
  "pop": 828,
  "state": "IN"
},{
  "city": "DEPUTY",
  "zip": "47230",
  "loc": {
    "y": 38.775891,
    "x": 85.630407
  },
  "pop": 1448,
  "state": "IN"
},{
  "city": "FLAT ROCK",
  "zip": "47234",
  "loc": {
    "y": 39.407503,
    "x": 85.675886
  },
  "pop": 1496,
  "state": "IN"
},{
  "city": "BROWNSVILLE",
  "zip": "47325",
  "loc": {
    "y": 39.684485,
    "x": 84.98807
  },
  "pop": 850,
  "state": "IN"
},{
  "city": "GREENS FORK",
  "zip": "47345",
  "loc": {
    "y": 39.89163,
    "x": 85.049413
  },
  "pop": 1054,
  "state": "IN"
},{
  "city": "FARMLAND",
  "zip": "47340",
  "loc": {
    "y": 40.194454,
    "x": 85.125381
  },
  "pop": 1784,
  "state": "IN"
},{
  "city": "MOORELAND",
  "zip": "47360",
  "loc": {
    "y": 39.994066,
    "x": 85.258065
  },
  "pop": 1265,
  "state": "IN"
},{
  "city": "JASONVILLE",
  "zip": "47438",
  "loc": {
    "y": 39.172333,
    "x": 87.202292
  },
  "pop": 4340,
  "state": "IN"
},{
  "city": "NEW HARMONY",
  "zip": "47631",
  "loc": {
    "y": 38.124502,
    "x": 87.917186
  },
  "pop": 1432,
  "state": "IN"
},{
  "city": "FRANCISCO",
  "zip": "47649",
  "loc": {
    "y": 38.332953,
    "x": 87.453621
  },
  "pop": 1503,
  "state": "IN"
},{
  "city": "SPEEDWAY",
  "zip": "46224",
  "loc": {
    "y": 39.798674,
    "x": 86.257308
  },
  "pop": 32130,
  "state": "IN"
},{
  "city": "EAGLE CREEK",
  "zip": "46254",
  "loc": {
    "y": 39.841379,
    "x": 86.2638
  },
  "pop": 23015,
  "state": "IN"
},{
  "city": "OAKLANDON",
  "zip": "46236",
  "loc": {
    "y": 39.849588,
    "x": 85.985059
  },
  "pop": 31475,
  "state": "IN"
},{
  "city": "WESTVILLE",
  "zip": "46391",
  "loc": {
    "y": 41.536516,
    "x": 86.901317
  },
  "pop": 6212,
  "state": "IN"
},{
  "city": "GARY",
  "zip": "46402",
  "loc": {
    "y": 41.599711,
    "x": 87.338548
  },
  "pop": 10873,
  "state": "IN"
},{
  "city": "CULVER MILITARY",
  "zip": "46511",
  "loc": {
    "y": 41.22307,
    "x": 86.412888
  },
  "pop": 3289,
  "state": "IN"
},{
  "city": "SOUTH BEND",
  "zip": "46615",
  "loc": {
    "y": 41.67413,
    "x": 86.210375
  },
  "pop": 15580,
  "state": "IN"
},{
  "city": "HUNTINGTON",
  "zip": "46750",
  "loc": {
    "y": 40.881128,
    "x": 85.505438
  },
  "pop": 23716,
  "state": "IN"
},{
  "city": "UNIONDALE",
  "zip": "46791",
  "loc": {
    "y": 40.871658,
    "x": 85.273206
  },
  "pop": 2419,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46808",
  "loc": {
    "y": 41.093877,
    "x": 85.162121
  },
  "pop": 19401,
  "state": "IN"
},{
  "city": "LUCERNE",
  "zip": "46950",
  "loc": {
    "y": 40.861434,
    "x": 86.407726
  },
  "pop": 809,
  "state": "IN"
},{
  "city": "MILAN",
  "zip": "47031",
  "loc": {
    "y": 39.150333,
    "x": 85.13242
  },
  "pop": 3877,
  "state": "IN"
},{
  "city": "ADAMS",
  "zip": "47240",
  "loc": {
    "y": 39.331223,
    "x": 85.473532
  },
  "pop": 19250,
  "state": "IN"
},{
  "city": "HOPE",
  "zip": "47246",
  "loc": {
    "y": 39.25733,
    "x": 85.766538
  },
  "pop": 5676,
  "state": "IN"
},{
  "city": "SEYMOUR",
  "zip": "47274",
  "loc": {
    "y": 38.957133,
    "x": 85.882477
  },
  "pop": 21094,
  "state": "IN"
},{
  "city": "VALLONIA",
  "zip": "47281",
  "loc": {
    "y": 38.817413,
    "x": 86.068997
  },
  "pop": 1338,
  "state": "IN"
},{
  "city": "ALBANY",
  "zip": "47320",
  "loc": {
    "y": 40.292049,
    "x": 85.257987
  },
  "pop": 4625,
  "state": "IN"
},{
  "city": "SELMA",
  "zip": "47383",
  "loc": {
    "y": 40.169295,
    "x": 85.273765
  },
  "pop": 4009,
  "state": "IN"
},{
  "city": "SPICELAND",
  "zip": "47385",
  "loc": {
    "y": 39.827078,
    "x": 85.445043
  },
  "pop": 2270,
  "state": "IN"
},{
  "city": "WINCHESTER",
  "zip": "47394",
  "loc": {
    "y": 40.16959,
    "x": 85.004366
  },
  "pop": 8830,
  "state": "IN"
},{
  "city": "NEWBERRY",
  "zip": "47449",
  "loc": {
    "y": 38.922905,
    "x": 87.008055
  },
  "pop": 386,
  "state": "IN"
},{
  "city": "SOLSBERRY",
  "zip": "47459",
  "loc": {
    "y": 39.119047,
    "x": 86.737843
  },
  "pop": 1832,
  "state": "IN"
},{
  "city": "WORTHINGTON",
  "zip": "47471",
  "loc": {
    "y": 39.12298,
    "x": 86.999058
  },
  "pop": 2365,
  "state": "IN"
},{
  "city": "DALE",
  "zip": "47523",
  "loc": {
    "y": 38.170638,
    "x": 87.006982
  },
  "pop": 3459,
  "state": "IN"
},{
  "city": "WEST BADEN SPRIN",
  "zip": "47469",
  "loc": {
    "y": 38.585501,
    "x": 86.613826
  },
  "pop": 1757,
  "state": "IN"
},{
  "city": "SCHNELLVILLE",
  "zip": "47580",
  "loc": {
    "y": 38.341436,
    "x": 86.756506
  },
  "pop": 199,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46204",
  "loc": {
    "y": 39.771986,
    "x": 86.153491
  },
  "pop": 4327,
  "state": "IN"
},{
  "city": "PITTSBORO",
  "zip": "46167",
  "loc": {
    "y": 39.861529,
    "x": 86.464548
  },
  "pop": 3466,
  "state": "IN"
},{
  "city": "FORT BENJAMIN HA",
  "zip": "46216",
  "loc": {
    "y": 39.857731,
    "x": 86.016688
  },
  "pop": 1566,
  "state": "IN"
},{
  "city": "CROWN POINT",
  "zip": "46307",
  "loc": {
    "y": 41.423571,
    "x": 87.355586
  },
  "pop": 37816,
  "state": "IN"
},{
  "city": "GRIFFITH",
  "zip": "46319",
  "loc": {
    "y": 41.53352,
    "x": 87.422837
  },
  "pop": 19758,
  "state": "IN"
},{
  "city": "HAMMOND",
  "zip": "46327",
  "loc": {
    "y": 41.632695,
    "x": 87.51135
  },
  "pop": 12384,
  "state": "IN"
},{
  "city": "LA CROSSE",
  "zip": "46348",
  "loc": {
    "y": 41.315709,
    "x": 86.868216
  },
  "pop": 1352,
  "state": "IN"
},{
  "city": "LA PORTE",
  "zip": "46350",
  "loc": {
    "y": 41.599438,
    "x": 86.707654
  },
  "pop": 36301,
  "state": "IN"
},{
  "city": "MILL CREEK",
  "zip": "46365",
  "loc": {
    "y": 41.556102,
    "x": 86.547247
  },
  "pop": 2091,
  "state": "IN"
},{
  "city": "GARY",
  "zip": "46403",
  "loc": {
    "y": 41.603612,
    "x": 87.258984
  },
  "pop": 16489,
  "state": "IN"
},{
  "city": "GRANGER",
  "zip": "46530",
  "loc": {
    "y": 41.742704,
    "x": 86.141104
  },
  "pop": 17591,
  "state": "IN"
},{
  "city": "PIERCETON",
  "zip": "46562",
  "loc": {
    "y": 41.212406,
    "x": 85.706119
  },
  "pop": 3128,
  "state": "IN"
},{
  "city": "WAKARUSA",
  "zip": "46573",
  "loc": {
    "y": 41.540073,
    "x": 86.020524
  },
  "pop": 2776,
  "state": "IN"
},{
  "city": "AVILLA",
  "zip": "46710",
  "loc": {
    "y": 41.36894,
    "x": 85.241418
  },
  "pop": 2154,
  "state": "IN"
},{
  "city": "PLEASANT LAKE",
  "zip": "46779",
  "loc": {
    "y": 41.584255,
    "x": 85.021276
  },
  "pop": 1625,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46803",
  "loc": {
    "y": 41.069452,
    "x": 85.107362
  },
  "pop": 13295,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46825",
  "loc": {
    "y": 41.146482,
    "x": 85.123156
  },
  "pop": 19522,
  "state": "IN"
},{
  "city": "AMBOY",
  "zip": "46911",
  "loc": {
    "y": 40.610505,
    "x": 85.949726
  },
  "pop": 1555,
  "state": "IN"
},{
  "city": "LA FONTAINE",
  "zip": "46940",
  "loc": {
    "y": 40.690896,
    "x": 85.697138
  },
  "pop": 2947,
  "state": "IN"
},{
  "city": "MARION",
  "zip": "46952",
  "loc": {
    "y": 40.574333,
    "x": 85.674127
  },
  "pop": 24986,
  "state": "IN"
},{
  "city": "ROANN",
  "zip": "46974",
  "loc": {
    "y": 40.906649,
    "x": 85.889885
  },
  "pop": 1612,
  "state": "IN"
},{
  "city": "BENNINGTON",
  "zip": "47011",
  "loc": {
    "y": 38.875993,
    "x": 85.071897
  },
  "pop": 1376,
  "state": "IN"
},{
  "city": "LEAVENWORTH",
  "zip": "47137",
  "loc": {
    "y": 38.194244,
    "x": 86.359862
  },
  "pop": 1152,
  "state": "IN"
},{
  "city": "MAUCKPORT",
  "zip": "47142",
  "loc": {
    "y": 38.04366,
    "x": 86.184622
  },
  "pop": 520,
  "state": "IN"
},{
  "city": "NEW ALBANY",
  "zip": "47150",
  "loc": {
    "y": 38.308919,
    "x": 85.822085
  },
  "pop": 44969,
  "state": "IN"
},{
  "city": "FREETOWN",
  "zip": "47235",
  "loc": {
    "y": 38.995728,
    "x": 86.124051
  },
  "pop": 1380,
  "state": "IN"
},{
  "city": "GRAMMER",
  "zip": "47236",
  "loc": {
    "y": 39.159192,
    "x": 85.718338
  },
  "pop": 412,
  "state": "IN"
},{
  "city": "NORTH VERNON",
  "zip": "47265",
  "loc": {
    "y": 39.001763,
    "x": 85.627216
  },
  "pop": 13466,
  "state": "IN"
},{
  "city": "PARKER CITY",
  "zip": "47368",
  "loc": {
    "y": 40.193841,
    "x": 85.196265
  },
  "pop": 1818,
  "state": "IN"
},{
  "city": "WOODBRIDGE",
  "zip": "47408",
  "loc": {
    "y": 39.183175,
    "x": 86.505836
  },
  "pop": 30907,
  "state": "IN"
},{
  "city": "MITCHELL",
  "zip": "47446",
  "loc": {
    "y": 38.742625,
    "x": 86.476096
  },
  "pop": 9516,
  "state": "IN"
},{
  "city": "SPENCER",
  "zip": "47460",
  "loc": {
    "y": 39.289067,
    "x": 86.77894
  },
  "pop": 10170,
  "state": "IN"
},{
  "city": "SWITZ CITY",
  "zip": "47465",
  "loc": {
    "y": 39.036937,
    "x": 87.050238
  },
  "pop": 1347,
  "state": "IN"
},{
  "city": "LINTON",
  "zip": "47441",
  "loc": {
    "y": 39.046139,
    "x": 87.172286
  },
  "pop": 9233,
  "state": "IN"
},{
  "city": "FERDINAND",
  "zip": "47532",
  "loc": {
    "y": 38.233582,
    "x": 86.860669
  },
  "pop": 3725,
  "state": "IN"
},{
  "city": "CRANE NAVAL DEPO",
  "zip": "47522",
  "loc": {
    "y": 38.849618,
    "x": 86.865473
  },
  "pop": 371,
  "state": "IN"
},{
  "city": "TROY",
  "zip": "47588",
  "loc": {
    "y": 37.997994,
    "x": 86.797766
  },
  "pop": 727,
  "state": "IN"
},{
  "city": "NORA",
  "zip": "46240",
  "loc": {
    "y": 39.9057,
    "x": 86.129548
  },
  "pop": 17553,
  "state": "IN"
},{
  "city": "DYER",
  "zip": "46311",
  "loc": {
    "y": 41.491976,
    "x": 87.510803
  },
  "pop": 13426,
  "state": "IN"
},{
  "city": "HANNA",
  "zip": "46340",
  "loc": {
    "y": 41.408767,
    "x": 86.775922
  },
  "pop": 941,
  "state": "IN"
},{
  "city": "KOUTS",
  "zip": "46347",
  "loc": {
    "y": 41.309085,
    "x": 87.024043
  },
  "pop": 3244,
  "state": "IN"
},{
  "city": "ARGOS",
  "zip": "46501",
  "loc": {
    "y": 41.230827,
    "x": 86.250573
  },
  "pop": 3630,
  "state": "IN"
},{
  "city": "CLAYPOOL",
  "zip": "46510",
  "loc": {
    "y": 41.116497,
    "x": 85.868571
  },
  "pop": 4891,
  "state": "IN"
},{
  "city": "ELKHART",
  "zip": "46514",
  "loc": {
    "y": 41.710083,
    "x": 85.972949
  },
  "pop": 33830,
  "state": "IN"
},{
  "city": "CHURUBUSCO",
  "zip": "46723",
  "loc": {
    "y": 41.228988,
    "x": 85.324364
  },
  "pop": 6796,
  "state": "IN"
},{
  "city": "GARRETT",
  "zip": "46738",
  "loc": {
    "y": 41.348216,
    "x": 85.13467
  },
  "pop": 6459,
  "state": "IN"
},{
  "city": "MONROE",
  "zip": "46772",
  "loc": {
    "y": 40.700523,
    "x": 84.844128
  },
  "pop": 873,
  "state": "IN"
},{
  "city": "ROME CITY",
  "zip": "46784",
  "loc": {
    "y": 41.484907,
    "x": 85.374303
  },
  "pop": 3040,
  "state": "IN"
},{
  "city": "WARREN",
  "zip": "46792",
  "loc": {
    "y": 40.688646,
    "x": 85.418337
  },
  "pop": 2404,
  "state": "IN"
},{
  "city": "WOLCOTTVILLE",
  "zip": "46795",
  "loc": {
    "y": 41.556972,
    "x": 85.314986
  },
  "pop": 5921,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46815",
  "loc": {
    "y": 41.105318,
    "x": 85.062397
  },
  "pop": 25377,
  "state": "IN"
},{
  "city": "ROYAL CENTER",
  "zip": "46978",
  "loc": {
    "y": 40.864499,
    "x": 86.507751
  },
  "pop": 1558,
  "state": "IN"
},{
  "city": "GUILFORD",
  "zip": "47022",
  "loc": {
    "y": 39.205855,
    "x": 84.961586
  },
  "pop": 2595,
  "state": "IN"
},{
  "city": "CENTRAL",
  "zip": "47110",
  "loc": {
    "y": 38.094543,
    "x": 86.197381
  },
  "pop": 779,
  "state": "IN"
},{
  "city": "PALMYRA",
  "zip": "47164",
  "loc": {
    "y": 38.410484,
    "x": 86.088778
  },
  "pop": 814,
  "state": "IN"
},{
  "city": "BROWNSTOWN",
  "zip": "47220",
  "loc": {
    "y": 38.883593,
    "x": 86.048619
  },
  "pop": 4963,
  "state": "IN"
},{
  "city": "COMMISKEY",
  "zip": "47227",
  "loc": {
    "y": 38.852629,
    "x": 85.643384
  },
  "pop": 896,
  "state": "IN"
},{
  "city": "SHIRLEY",
  "zip": "47384",
  "loc": {
    "y": 39.91582,
    "x": 85.518151
  },
  "pop": 2292,
  "state": "IN"
},{
  "city": "BLOOMINGTON",
  "zip": "47403",
  "loc": {
    "y": 39.12632,
    "x": 86.576867
  },
  "pop": 23435,
  "state": "IN"
},{
  "city": "HELTONVILLE",
  "zip": "47436",
  "loc": {
    "y": 38.948014,
    "x": 86.370328
  },
  "pop": 1402,
  "state": "IN"
},{
  "city": "GOSPORT",
  "zip": "47433",
  "loc": {
    "y": 39.344969,
    "x": 86.6583
  },
  "pop": 2269,
  "state": "IN"
},{
  "city": "BRANCHVILLE",
  "zip": "47514",
  "loc": {
    "y": 38.157189,
    "x": 86.585866
  },
  "pop": 1314,
  "state": "IN"
},{
  "city": "BIRDSEYE",
  "zip": "47513",
  "loc": {
    "y": 38.30058,
    "x": 86.710193
  },
  "pop": 1591,
  "state": "IN"
},{
  "city": "MOUNT PLEASANT",
  "zip": "47520",
  "loc": {
    "y": 37.910851,
    "x": 86.732617
  },
  "pop": 2290,
  "state": "IN"
},{
  "city": "GENTRYVILLE",
  "zip": "47537",
  "loc": {
    "y": 38.085458,
    "x": 87.044137
  },
  "pop": 824,
  "state": "IN"
},{
  "city": "OTWELL",
  "zip": "47564",
  "loc": {
    "y": 38.466221,
    "x": 87.098548
  },
  "pop": 912,
  "state": "IN"
},{
  "city": "SANDBORN",
  "zip": "47578",
  "loc": {
    "y": 38.881743,
    "x": 87.202532
  },
  "pop": 919,
  "state": "IN"
},{
  "city": "GRANDVIEW",
  "zip": "47615",
  "loc": {
    "y": 37.970297,
    "x": 86.956774
  },
  "pop": 1990,
  "state": "IN"
},{
  "city": "HAUBSTADT",
  "zip": "47639",
  "loc": {
    "y": 38.189536,
    "x": 87.579827
  },
  "pop": 3568,
  "state": "IN"
},{
  "city": "CYNTHIANA",
  "zip": "47612",
  "loc": {
    "y": 38.174299,
    "x": 87.711518
  },
  "pop": 1277,
  "state": "IN"
},{
  "city": "SOUTHPORT",
  "zip": "46237",
  "loc": {
    "y": 39.686777,
    "x": 86.07891
  },
  "pop": 18919,
  "state": "IN"
},{
  "city": "EAST CEDAR LAKE",
  "zip": "46303",
  "loc": {
    "y": 41.377338,
    "x": 87.444509
  },
  "pop": 11557,
  "state": "IN"
},{
  "city": "HAMMOND",
  "zip": "46323",
  "loc": {
    "y": 41.587755,
    "x": 87.453196
  },
  "pop": 23456,
  "state": "IN"
},{
  "city": "MENTONE",
  "zip": "46539",
  "loc": {
    "y": 41.161494,
    "x": 86.029918
  },
  "pop": 2163,
  "state": "IN"
},{
  "city": "LEO",
  "zip": "46765",
  "loc": {
    "y": 41.224864,
    "x": 85.030093
  },
  "pop": 3047,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46819",
  "loc": {
    "y": 41.005167,
    "x": 85.152743
  },
  "pop": 9139,
  "state": "IN"
},{
  "city": "KOKOMO",
  "zip": "46902",
  "loc": {
    "y": 40.450856,
    "x": 86.135227
  },
  "pop": 36889,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46818",
  "loc": {
    "y": 41.146847,
    "x": 85.206686
  },
  "pop": 10155,
  "state": "IN"
},{
  "city": "STAR CITY",
  "zip": "46985",
  "loc": {
    "y": 40.960176,
    "x": 86.540405
  },
  "pop": 951,
  "state": "IN"
},{
  "city": "BATESVILLE",
  "zip": "47006",
  "loc": {
    "y": 39.300057,
    "x": 85.222053
  },
  "pop": 6963,
  "state": "IN"
},{
  "city": "DILLSBORO",
  "zip": "47018",
  "loc": {
    "y": 38.996195,
    "x": 85.054994
  },
  "pop": 3699,
  "state": "IN"
},{
  "city": "LEXINGTON",
  "zip": "47138",
  "loc": {
    "y": 38.650643,
    "x": 85.658915
  },
  "pop": 2803,
  "state": "IN"
},{
  "city": "MEDORA",
  "zip": "47260",
  "loc": {
    "y": 38.825505,
    "x": 86.189733
  },
  "pop": 1576,
  "state": "IN"
},{
  "city": "HAGERSTOWN",
  "zip": "47346",
  "loc": {
    "y": 39.92277,
    "x": 85.160091
  },
  "pop": 3906,
  "state": "IN"
},{
  "city": "MODOC",
  "zip": "47358",
  "loc": {
    "y": 40.05816,
    "x": 85.091904
  },
  "pop": 1253,
  "state": "IN"
},{
  "city": "FRENCH LICK",
  "zip": "47432",
  "loc": {
    "y": 38.532351,
    "x": 86.619555
  },
  "pop": 3920,
  "state": "IN"
},{
  "city": "BOONVILLE",
  "zip": "47601",
  "loc": {
    "y": 38.047435,
    "x": 87.261994
  },
  "pop": 11964,
  "state": "IN"
},{
  "city": "EAGLE CREEK",
  "zip": "46214",
  "loc": {
    "y": 39.792678,
    "x": 86.289952
  },
  "pop": 16644,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46218",
  "loc": {
    "y": 39.80817,
    "x": 86.101425
  },
  "pop": 39965,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46220",
  "loc": {
    "y": 39.864685,
    "x": 86.11815
  },
  "pop": 35482,
  "state": "IN"
},{
  "city": "NEW AUGUSTA",
  "zip": "46268",
  "loc": {
    "y": 39.900296,
    "x": 86.222104
  },
  "pop": 14109,
  "state": "IN"
},{
  "city": "NEW AUGUSTA",
  "zip": "46278",
  "loc": {
    "y": 39.883858,
    "x": 86.291455
  },
  "pop": 4727,
  "state": "IN"
},{
  "city": "ROLLING PRAIRIE",
  "zip": "46371",
  "loc": {
    "y": 41.72286,
    "x": 86.584092
  },
  "pop": 3694,
  "state": "IN"
},{
  "city": "HAMLET",
  "zip": "46532",
  "loc": {
    "y": 41.393338,
    "x": 86.53213
  },
  "pop": 4314,
  "state": "IN"
},{
  "city": "ELKHART",
  "zip": "46516",
  "loc": {
    "y": 41.676333,
    "x": 85.962137
  },
  "pop": 29971,
  "state": "IN"
},{
  "city": "NEW CARLISLE",
  "zip": "46552",
  "loc": {
    "y": 41.705115,
    "x": 86.483827
  },
  "pop": 3574,
  "state": "IN"
},{
  "city": "ANGOLA",
  "zip": "46703",
  "loc": {
    "y": 41.656321,
    "x": 85.019803
  },
  "pop": 15134,
  "state": "IN"
},{
  "city": "MARKLE",
  "zip": "46770",
  "loc": {
    "y": 40.837972,
    "x": 85.373994
  },
  "pop": 3084,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46804",
  "loc": {
    "y": 41.050843,
    "x": 85.256013
  },
  "pop": 23713,
  "state": "IN"
},{
  "city": "FLORA",
  "zip": "46929",
  "loc": {
    "y": 40.544467,
    "x": 86.501572
  },
  "pop": 3249,
  "state": "IN"
},{
  "city": "LOGANSPORT",
  "zip": "46947",
  "loc": {
    "y": 40.760377,
    "x": 86.359888
  },
  "pop": 27829,
  "state": "IN"
},{
  "city": "LAGRO",
  "zip": "46941",
  "loc": {
    "y": 40.819897,
    "x": 85.720447
  },
  "pop": 2255,
  "state": "IN"
},{
  "city": "URBANA",
  "zip": "46990",
  "loc": {
    "y": 40.898655,
    "x": 85.748481
  },
  "pop": 505,
  "state": "IN"
},{
  "city": "VEVAY",
  "zip": "47043",
  "loc": {
    "y": 38.772423,
    "x": 85.085217
  },
  "pop": 3974,
  "state": "IN"
},{
  "city": "GRANTSBURG",
  "zip": "47123",
  "loc": {
    "y": 38.289183,
    "x": 86.466043
  },
  "pop": 154,
  "state": "IN"
},{
  "city": "MARENGO",
  "zip": "47140",
  "loc": {
    "y": 38.373603,
    "x": 86.357784
  },
  "pop": 1539,
  "state": "IN"
},{
  "city": "LIBERTY",
  "zip": "47353",
  "loc": {
    "y": 39.612645,
    "x": 84.908947
  },
  "pop": 6126,
  "state": "IN"
},{
  "city": "LOSANTVILLE",
  "zip": "47354",
  "loc": {
    "y": 40.047492,
    "x": 85.21085
  },
  "pop": 1768,
  "state": "IN"
},{
  "city": "STRAUGHN",
  "zip": "47387",
  "loc": {
    "y": 39.831946,
    "x": 85.272406
  },
  "pop": 1300,
  "state": "IN"
},{
  "city": "LYONS",
  "zip": "47443",
  "loc": {
    "y": 38.971731,
    "x": 87.101595
  },
  "pop": 1706,
  "state": "IN"
},{
  "city": "OOLITIC",
  "zip": "47451",
  "loc": {
    "y": 38.89378,
    "x": 86.524617
  },
  "pop": 1493,
  "state": "IN"
},{
  "city": "CANNELBURG",
  "zip": "47519",
  "loc": {
    "y": 38.694696,
    "x": 86.966868
  },
  "pop": 1265,
  "state": "IN"
},{
  "city": "PLAINVILLE",
  "zip": "47568",
  "loc": {
    "y": 38.791507,
    "x": 87.157822
  },
  "pop": 895,
  "state": "IN"
},{
  "city": "SAINT CROIX",
  "zip": "47576",
  "loc": {
    "y": 38.239773,
    "x": 86.603511
  },
  "pop": 325,
  "state": "IN"
},{
  "city": "LAWRENCE",
  "zip": "46226",
  "loc": {
    "y": 39.836969,
    "x": 86.048945
  },
  "pop": 47144,
  "state": "IN"
},{
  "city": "NEW WHITELAND",
  "zip": "46184",
  "loc": {
    "y": 39.555313,
    "x": 86.093476
  },
  "pop": 7226,
  "state": "IN"
},{
  "city": "REELSVILLE",
  "zip": "46171",
  "loc": {
    "y": 39.546416,
    "x": 86.94998
  },
  "pop": 2027,
  "state": "IN"
},{
  "city": "ACTON",
  "zip": "46259",
  "loc": {
    "y": 39.660901,
    "x": 85.992603
  },
  "pop": 3642,
  "state": "IN"
},{
  "city": "HAMMOND",
  "zip": "46320",
  "loc": {
    "y": 41.609929,
    "x": 87.507911
  },
  "pop": 16636,
  "state": "IN"
},{
  "city": "LEESBURG",
  "zip": "46538",
  "loc": {
    "y": 41.326592,
    "x": 85.816028
  },
  "pop": 1823,
  "state": "IN"
},{
  "city": "INWOOD",
  "zip": "46563",
  "loc": {
    "y": 41.333897,
    "x": 86.324087
  },
  "pop": 16087,
  "state": "IN"
},{
  "city": "SHIPSHEWANA",
  "zip": "46565",
  "loc": {
    "y": 41.663257,
    "x": 85.593198
  },
  "pop": 3850,
  "state": "IN"
},{
  "city": "HAMILTON",
  "zip": "46742",
  "loc": {
    "y": 41.5566,
    "x": 84.895092
  },
  "pop": 2344,
  "state": "IN"
},{
  "city": "LIGONIER",
  "zip": "46767",
  "loc": {
    "y": 41.466175,
    "x": 85.59272
  },
  "pop": 5212,
  "state": "IN"
},{
  "city": "ROANOKE",
  "zip": "46783",
  "loc": {
    "y": 40.960003,
    "x": 85.35263
  },
  "pop": 4973,
  "state": "IN"
},{
  "city": "SOUTH WHITLEY",
  "zip": "46787",
  "loc": {
    "y": 41.072635,
    "x": 85.614252
  },
  "pop": 3791,
  "state": "IN"
},{
  "city": "LIBERTY CENTER",
  "zip": "46766",
  "loc": {
    "y": 40.700159,
    "x": 85.277411
  },
  "pop": 1027,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46809",
  "loc": {
    "y": 41.02543,
    "x": 85.1834
  },
  "pop": 9804,
  "state": "IN"
},{
  "city": "DELPHI",
  "zip": "46923",
  "loc": {
    "y": 40.57339,
    "x": 86.678849
  },
  "pop": 7576,
  "state": "IN"
},{
  "city": "KEWANNA",
  "zip": "46939",
  "loc": {
    "y": 41.008706,
    "x": 86.406055
  },
  "pop": 1966,
  "state": "IN"
},{
  "city": "CAMDEN",
  "zip": "46917",
  "loc": {
    "y": 40.599588,
    "x": 86.515217
  },
  "pop": 1527,
  "state": "IN"
},{
  "city": "CHARLESTOWN",
  "zip": "47111",
  "loc": {
    "y": 38.456778,
    "x": 85.660614
  },
  "pop": 9896,
  "state": "IN"
},{
  "city": "FREDERICKSBURG",
  "zip": "47120",
  "loc": {
    "y": 38.482118,
    "x": 86.178255
  },
  "pop": 1846,
  "state": "IN"
},{
  "city": "DUPONT",
  "zip": "47231",
  "loc": {
    "y": 38.890504,
    "x": 85.509205
  },
  "pop": 716,
  "state": "IN"
},{
  "city": "HARTSVILLE",
  "zip": "47244",
  "loc": {
    "y": 39.273318,
    "x": 85.70046
  },
  "pop": 543,
  "state": "IN"
},{
  "city": "MUNCIE",
  "zip": "47305",
  "loc": {
    "y": 40.193299,
    "x": 85.386163
  },
  "pop": 5251,
  "state": "IN"
},{
  "city": "WILLIAMSBURG",
  "zip": "47393",
  "loc": {
    "y": 39.958005,
    "x": 84.998442
  },
  "pop": 1272,
  "state": "IN"
},{
  "city": "BLOOMINGTON",
  "zip": "47404",
  "loc": {
    "y": 39.195026,
    "x": 86.57572
  },
  "pop": 15079,
  "state": "IN"
},{
  "city": "BEDFORD",
  "zip": "47421",
  "loc": {
    "y": 38.872881,
    "x": 86.487072
  },
  "pop": 27071,
  "state": "IN"
},{
  "city": "SPRINGVILLE",
  "zip": "47462",
  "loc": {
    "y": 38.950655,
    "x": 86.613879
  },
  "pop": 1726,
  "state": "IN"
},{
  "city": "CELESTINE",
  "zip": "47521",
  "loc": {
    "y": 38.387789,
    "x": 86.756809
  },
  "pop": 858,
  "state": "IN"
},{
  "city": "DUBOIS",
  "zip": "47527",
  "loc": {
    "y": 38.472824,
    "x": 86.78319
  },
  "pop": 2200,
  "state": "IN"
},{
  "city": "ROME",
  "zip": "47574",
  "loc": {
    "y": 37.937561,
    "x": 86.595787
  },
  "pop": 297,
  "state": "IN"
},{
  "city": "MONTGOMERY",
  "zip": "47558",
  "loc": {
    "y": 38.652146,
    "x": 87.047603
  },
  "pop": 2675,
  "state": "IN"
},{
  "city": "MOUNT VERNON",
  "zip": "47620",
  "loc": {
    "y": 37.950569,
    "x": 87.856887
  },
  "pop": 16037,
  "state": "IN"
},{
  "city": "POSEYVILLE",
  "zip": "47633",
  "loc": {
    "y": 38.171986,
    "x": 87.802747
  },
  "pop": 2009,
  "state": "IN"
},{
  "city": "HAZLETON",
  "zip": "47640",
  "loc": {
    "y": 38.462283,
    "x": 87.498348
  },
  "pop": 1214,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46205",
  "loc": {
    "y": 39.826761,
    "x": 86.138582
  },
  "pop": 35328,
  "state": "IN"
},{
  "city": "HIGHLAND",
  "zip": "46322",
  "loc": {
    "y": 41.55005,
    "x": 87.456911
  },
  "pop": 24029,
  "state": "IN"
},{
  "city": "HOBART",
  "zip": "46342",
  "loc": {
    "y": 41.526281,
    "x": 87.252499
  },
  "pop": 32127,
  "state": "IN"
},{
  "city": "LAKE VILLAGE",
  "zip": "46349",
  "loc": {
    "y": 41.138741,
    "x": 87.445422
  },
  "pop": 2208,
  "state": "IN"
},{
  "city": "MERRILLVILLE",
  "zip": "46410",
  "loc": {
    "y": 41.4957,
    "x": 87.350932
  },
  "pop": 30765,
  "state": "IN"
},{
  "city": "GROVERTOWN",
  "zip": "46531",
  "loc": {
    "y": 41.321969,
    "x": 86.528905
  },
  "pop": 1077,
  "state": "IN"
},{
  "city": "SAINT MARYS",
  "zip": "46556",
  "loc": {
    "y": 41.70057,
    "x": 86.242893
  },
  "pop": 6903,
  "state": "IN"
},{
  "city": "SOUTH BEND",
  "zip": "46616",
  "loc": {
    "y": 41.691894,
    "x": 86.264739
  },
  "pop": 8132,
  "state": "IN"
},{
  "city": "ASHLEY",
  "zip": "46705",
  "loc": {
    "y": 41.534651,
    "x": 85.050385
  },
  "pop": 1272,
  "state": "IN"
},{
  "city": "KENDALLVILLE",
  "zip": "46755",
  "loc": {
    "y": 41.448206,
    "x": 85.260874
  },
  "pop": 11784,
  "state": "IN"
},{
  "city": "ORLAND",
  "zip": "46776",
  "loc": {
    "y": 41.730884,
    "x": 85.146512
  },
  "pop": 1326,
  "state": "IN"
},{
  "city": "SPENCERVILLE",
  "zip": "46788",
  "loc": {
    "y": 41.269555,
    "x": 84.93975
  },
  "pop": 1905,
  "state": "IN"
},{
  "city": "AKRON",
  "zip": "46910",
  "loc": {
    "y": 41.038921,
    "x": 86.039471
  },
  "pop": 2617,
  "state": "IN"
},{
  "city": "CHILI",
  "zip": "46926",
  "loc": {
    "y": 40.869363,
    "x": 86.076953
  },
  "pop": 5339,
  "state": "IN"
},{
  "city": "GAS CITY",
  "zip": "46933",
  "loc": {
    "y": 40.487895,
    "x": 85.605533
  },
  "pop": 6975,
  "state": "IN"
},{
  "city": "MONTEREY",
  "zip": "46960",
  "loc": {
    "y": 41.138334,
    "x": 86.517862
  },
  "pop": 997,
  "state": "IN"
},{
  "city": "SILVER LAKE",
  "zip": "46982",
  "loc": {
    "y": 41.074318,
    "x": 85.879207
  },
  "pop": 1566,
  "state": "IN"
},{
  "city": "AURORA",
  "zip": "47001",
  "loc": {
    "y": 39.071897,
    "x": 84.945188
  },
  "pop": 9435,
  "state": "IN"
},{
  "city": "FLORENCE",
  "zip": "47020",
  "loc": {
    "y": 38.822436,
    "x": 84.939872
  },
  "pop": 1019,
  "state": "IN"
},{
  "city": "OLDENBURG",
  "zip": "47036",
  "loc": {
    "y": 39.359797,
    "x": 85.22223
  },
  "pop": 1398,
  "state": "IN"
},{
  "city": "VERSAILLES",
  "zip": "47042",
  "loc": {
    "y": 39.051074,
    "x": 85.223489
  },
  "pop": 4753,
  "state": "IN"
},{
  "city": "ELIZABETH",
  "zip": "47117",
  "loc": {
    "y": 38.124389,
    "x": 85.958874
  },
  "pop": 3273,
  "state": "IN"
},{
  "city": "MEMPHIS",
  "zip": "47143",
  "loc": {
    "y": 38.464181,
    "x": 85.777501
  },
  "pop": 2381,
  "state": "IN"
},{
  "city": "NEW MIDDLETOWN",
  "zip": "47160",
  "loc": {
    "y": 38.144199,
    "x": 86.055261
  },
  "pop": 1593,
  "state": "IN"
},{
  "city": "PEKIN",
  "zip": "47165",
  "loc": {
    "y": 38.49308,
    "x": 86.017045
  },
  "pop": 5351,
  "state": "IN"
},{
  "city": "MILLTOWN",
  "zip": "47145",
  "loc": {
    "y": 38.344453,
    "x": 86.300344
  },
  "pop": 1724,
  "state": "IN"
},{
  "city": "BRYANT",
  "zip": "47326",
  "loc": {
    "y": 40.54462,
    "x": 84.911748
  },
  "pop": 1350,
  "state": "IN"
},{
  "city": "CAMBRIDGE CITY",
  "zip": "47327",
  "loc": {
    "y": 39.818171,
    "x": 85.168455
  },
  "pop": 4998,
  "state": "IN"
},{
  "city": "ECONOMY",
  "zip": "47339",
  "loc": {
    "y": 39.971215,
    "x": 85.087803
  },
  "pop": 677,
  "state": "IN"
},{
  "city": "GASTON",
  "zip": "47342",
  "loc": {
    "y": 40.29479,
    "x": 85.489842
  },
  "pop": 4594,
  "state": "IN"
},{
  "city": "CONNERSVILLE",
  "zip": "47331",
  "loc": {
    "y": 39.643508,
    "x": 85.146431
  },
  "pop": 25503,
  "state": "IN"
},{
  "city": "RIDGEVILLE",
  "zip": "47380",
  "loc": {
    "y": 40.280359,
    "x": 85.037101
  },
  "pop": 1343,
  "state": "IN"
},{
  "city": "SALAMONIA",
  "zip": "47381",
  "loc": {
    "y": 40.358234,
    "x": 84.855098
  },
  "pop": 741,
  "state": "IN"
},{
  "city": "PORTLAND",
  "zip": "47371",
  "loc": {
    "y": 40.430564,
    "x": 84.992825
  },
  "pop": 13186,
  "state": "IN"
},{
  "city": "PENNVILLE",
  "zip": "47369",
  "loc": {
    "y": 40.508195,
    "x": 85.149166
  },
  "pop": 1236,
  "state": "IN"
},{
  "city": "BLOOMFIELD",
  "zip": "47424",
  "loc": {
    "y": 39.029542,
    "x": 86.867549
  },
  "pop": 9014,
  "state": "IN"
},{
  "city": "COAL CITY",
  "zip": "47427",
  "loc": {
    "y": 39.257304,
    "x": 86.988297
  },
  "pop": 1647,
  "state": "IN"
},{
  "city": "DERBY",
  "zip": "47525",
  "loc": {
    "y": 38.023933,
    "x": 86.576951
  },
  "pop": 485,
  "state": "IN"
},{
  "city": "HAYSVILLE",
  "zip": "47546",
  "loc": {
    "y": 38.404392,
    "x": 86.940787
  },
  "pop": 16927,
  "state": "IN"
},{
  "city": "LINCOLN CITY",
  "zip": "47552",
  "loc": {
    "y": 38.127565,
    "x": 86.987204
  },
  "pop": 233,
  "state": "IN"
},{
  "city": "SANTA CLAUS",
  "zip": "47579",
  "loc": {
    "y": 38.094496,
    "x": 86.903528
  },
  "pop": 2323,
  "state": "IN"
},{
  "city": "TELL CITY",
  "zip": "47586",
  "loc": {
    "y": 37.965505,
    "x": 86.745704
  },
  "pop": 11583,
  "state": "IN"
},{
  "city": "ROCKPORT",
  "zip": "47635",
  "loc": {
    "y": 37.885803,
    "x": 87.07701
  },
  "pop": 4850,
  "state": "IN"
},{
  "city": "BUCKSKIN",
  "zip": "47647",
  "loc": {
    "y": 38.220867,
    "x": 87.43077
  },
  "pop": 236,
  "state": "IN"
},{
  "city": "PORTER",
  "zip": "46304",
  "loc": {
    "y": 41.603949,
    "x": 87.050196
  },
  "pop": 19024,
  "state": "IN"
},{
  "city": "SAN PIERRE",
  "zip": "46374",
  "loc": {
    "y": 41.21108,
    "x": 86.872532
  },
  "pop": 1499,
  "state": "IN"
},{
  "city": "WANATAH",
  "zip": "46390",
  "loc": {
    "y": 41.384477,
    "x": 86.876439
  },
  "pop": 711,
  "state": "IN"
},{
  "city": "NORTH LIBERTY",
  "zip": "46554",
  "loc": {
    "y": 41.542507,
    "x": 86.413328
  },
  "pop": 4056,
  "state": "IN"
},{
  "city": "SOUTH BEND",
  "zip": "46614",
  "loc": {
    "y": 41.625461,
    "x": 86.243278
  },
  "pop": 27521,
  "state": "IN"
},{
  "city": "SOUTH BEND",
  "zip": "46637",
  "loc": {
    "y": 41.729936,
    "x": 86.240694
  },
  "pop": 16351,
  "state": "IN"
},{
  "city": "LINN GROVE",
  "zip": "46711",
  "loc": {
    "y": 40.661517,
    "x": 84.934271
  },
  "pop": 6577,
  "state": "IN"
},{
  "city": "CORUNNA",
  "zip": "46730",
  "loc": {
    "y": 41.450377,
    "x": 85.137028
  },
  "pop": 2373,
  "state": "IN"
},{
  "city": "COLUMBIA CITY",
  "zip": "46725",
  "loc": {
    "y": 41.161855,
    "x": 85.473736
  },
  "pop": 17282,
  "state": "IN"
},{
  "city": "HOAGLAND",
  "zip": "46745",
  "loc": {
    "y": 40.952375,
    "x": 85.00751
  },
  "pop": 1483,
  "state": "IN"
},{
  "city": "PONETO",
  "zip": "46781",
  "loc": {
    "y": 40.641871,
    "x": 85.256188
  },
  "pop": 709,
  "state": "IN"
},{
  "city": "WATERLOO",
  "zip": "46793",
  "loc": {
    "y": 41.440216,
    "x": 85.022103
  },
  "pop": 3802,
  "state": "IN"
},{
  "city": "HOLTON",
  "zip": "47023",
  "loc": {
    "y": 39.049817,
    "x": 85.373945
  },
  "pop": 2384,
  "state": "IN"
},{
  "city": "LAUREL",
  "zip": "47024",
  "loc": {
    "y": 39.491573,
    "x": 85.208044
  },
  "pop": 3041,
  "state": "IN"
},{
  "city": "PATRIOT",
  "zip": "47038",
  "loc": {
    "y": 38.853691,
    "x": 84.851543
  },
  "pop": 1265,
  "state": "IN"
},{
  "city": "AUSTIN",
  "zip": "47102",
  "loc": {
    "y": 38.747801,
    "x": 85.796188
  },
  "pop": 6713,
  "state": "IN"
},{
  "city": "CAMPBELLSBURG",
  "zip": "47108",
  "loc": {
    "y": 38.669037,
    "x": 86.235846
  },
  "pop": 2900,
  "state": "IN"
},{
  "city": "HANOVER",
  "zip": "47243",
  "loc": {
    "y": 38.71378,
    "x": 85.476316
  },
  "pop": 4900,
  "state": "IN"
},{
  "city": "BUTLERVILLE",
  "zip": "47223",
  "loc": {
    "y": 39.120598,
    "x": 85.494415
  },
  "pop": 813,
  "state": "IN"
},{
  "city": "LEWISVILLE",
  "zip": "47352",
  "loc": {
    "y": 39.828288,
    "x": 85.36211
  },
  "pop": 1219,
  "state": "IN"
},{
  "city": "SULPHUR SPRINGS",
  "zip": "47388",
  "loc": {
    "y": 40.011121,
    "x": 85.440747
  },
  "pop": 1242,
  "state": "IN"
},{
  "city": "MONTPELIER",
  "zip": "47359",
  "loc": {
    "y": 40.557656,
    "x": 85.251339
  },
  "pop": 3753,
  "state": "IN"
},{
  "city": "EDWARDSPORT",
  "zip": "47528",
  "loc": {
    "y": 38.810584,
    "x": 87.251856
  },
  "pop": 497,
  "state": "IN"
},{
  "city": "VINCENNES",
  "zip": "47591",
  "loc": {
    "y": 38.67344,
    "x": 87.509806
  },
  "pop": 26841,
  "state": "IN"
},{
  "city": "WINSLOW",
  "zip": "47598",
  "loc": {
    "y": 38.363951,
    "x": 87.222328
  },
  "pop": 3994,
  "state": "IN"
},{
  "city": "NEWBURGH",
  "zip": "47630",
  "loc": {
    "y": 37.963746,
    "x": 87.393798
  },
  "pop": 21793,
  "state": "IN"
},{
  "city": "OAKLAND CITY",
  "zip": "47660",
  "loc": {
    "y": 38.336053,
    "x": 87.351907
  },
  "pop": 4244,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46222",
  "loc": {
    "y": 39.788971,
    "x": 86.213574
  },
  "pop": 39240,
  "state": "IN"
},{
  "city": "CUMBERLAND",
  "zip": "46229",
  "loc": {
    "y": 39.792219,
    "x": 85.983826
  },
  "pop": 19914,
  "state": "IN"
},{
  "city": "DEMOTTE",
  "zip": "46310",
  "loc": {
    "y": 41.171319,
    "x": 87.249129
  },
  "pop": 10188,
  "state": "IN"
},{
  "city": "HEBRON",
  "zip": "46341",
  "loc": {
    "y": 41.315537,
    "x": 87.208791
  },
  "pop": 6230,
  "state": "IN"
},{
  "city": "MUNSTER",
  "zip": "46321",
  "loc": {
    "y": 41.554438,
    "x": 87.501101
  },
  "pop": 19906,
  "state": "IN"
},{
  "city": "UNION MILLS",
  "zip": "46382",
  "loc": {
    "y": 41.460236,
    "x": 86.835512
  },
  "pop": 3155,
  "state": "IN"
},{
  "city": "NAPPANEE",
  "zip": "46550",
  "loc": {
    "y": 41.449297,
    "x": 85.994534
  },
  "pop": 10640,
  "state": "IN"
},{
  "city": "AUBURN",
  "zip": "46706",
  "loc": {
    "y": 41.359001,
    "x": 85.046848
  },
  "pop": 12503,
  "state": "IN"
},{
  "city": "DECATUR",
  "zip": "46733",
  "loc": {
    "y": 40.827333,
    "x": 84.931432
  },
  "pop": 19069,
  "state": "IN"
},{
  "city": "NEW HAVEN",
  "zip": "46774",
  "loc": {
    "y": 41.069856,
    "x": 85.01173
  },
  "pop": 12742,
  "state": "IN"
},{
  "city": "OSSIAN",
  "zip": "46777",
  "loc": {
    "y": 40.880611,
    "x": 85.157041
  },
  "pop": 5394,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46802",
  "loc": {
    "y": 41.070717,
    "x": 85.15431
  },
  "pop": 10837,
  "state": "IN"
},{
  "city": "OSGOOD",
  "zip": "47037",
  "loc": {
    "y": 39.157342,
    "x": 85.293812
  },
  "pop": 4785,
  "state": "IN"
},{
  "city": "JEFFERSONVILLE",
  "zip": "47130",
  "loc": {
    "y": 38.307767,
    "x": 85.735885
  },
  "pop": 56543,
  "state": "IN"
},{
  "city": "ELIZABETHTOWN",
  "zip": "47232",
  "loc": {
    "y": 39.124291,
    "x": 85.815311
  },
  "pop": 1222,
  "state": "IN"
},{
  "city": "PARIS CROSSING",
  "zip": "47270",
  "loc": {
    "y": 38.855843,
    "x": 85.748725
  },
  "pop": 972,
  "state": "IN"
},{
  "city": "SCIPIO",
  "zip": "47273",
  "loc": {
    "y": 39.066544,
    "x": 85.712859
  },
  "pop": 5043,
  "state": "IN"
},{
  "city": "MADISON",
  "zip": "47250",
  "loc": {
    "y": 38.764866,
    "x": 85.407019
  },
  "pop": 20596,
  "state": "IN"
},{
  "city": "MILTON",
  "zip": "47357",
  "loc": {
    "y": 39.776279,
    "x": 85.142267
  },
  "pop": 1488,
  "state": "IN"
},{
  "city": "ORLEANS",
  "zip": "47452",
  "loc": {
    "y": 38.653464,
    "x": 86.453157
  },
  "pop": 4309,
  "state": "IN"
},{
  "city": "QUINCY",
  "zip": "47456",
  "loc": {
    "y": 39.439521,
    "x": 86.802506
  },
  "pop": 2959,
  "state": "IN"
},{
  "city": "OWENSBURG",
  "zip": "47453",
  "loc": {
    "y": 38.952216,
    "x": 86.744122
  },
  "pop": 1497,
  "state": "IN"
},{
  "city": "NASHVILLE",
  "zip": "47448",
  "loc": {
    "y": 39.236712,
    "x": 86.22199
  },
  "pop": 11751,
  "state": "IN"
},{
  "city": "DECKER",
  "zip": "47524",
  "loc": {
    "y": 38.507629,
    "x": 87.553713
  },
  "pop": 621,
  "state": "IN"
},{
  "city": "ELNORA",
  "zip": "47529",
  "loc": {
    "y": 38.822284,
    "x": 87.065243
  },
  "pop": 2373,
  "state": "IN"
},{
  "city": "EVANSTON",
  "zip": "47531",
  "loc": {
    "y": 38.022436,
    "x": 86.836422
  },
  "pop": 163,
  "state": "IN"
},{
  "city": "PETERSBURG",
  "zip": "47567",
  "loc": {
    "y": 38.478929,
    "x": 87.288294
  },
  "pop": 6614,
  "state": "IN"
},{
  "city": "KYANA",
  "zip": "47575",
  "loc": {
    "y": 38.332222,
    "x": 86.824858
  },
  "pop": 2012,
  "state": "IN"
},{
  "city": "NORA",
  "zip": "46280",
  "loc": {
    "y": 39.938417,
    "x": 86.13894
  },
  "pop": 5281,
  "state": "IN"
},{
  "city": "GARY",
  "zip": "46407",
  "loc": {
    "y": 41.580429,
    "x": 87.334958
  },
  "pop": 21360,
  "state": "IN"
},{
  "city": "ETNA GREEN",
  "zip": "46524",
  "loc": {
    "y": 41.291789,
    "x": 86.034995
  },
  "pop": 1290,
  "state": "IN"
},{
  "city": "MILLERSBURG",
  "zip": "46543",
  "loc": {
    "y": 41.533513,
    "x": 85.707249
  },
  "pop": 2078,
  "state": "IN"
},{
  "city": "MISHAWAKA",
  "zip": "46544",
  "loc": {
    "y": 41.650659,
    "x": 86.162301
  },
  "pop": 29911,
  "state": "IN"
},{
  "city": "TIPPECANOE",
  "zip": "46570",
  "loc": {
    "y": 41.216609,
    "x": 86.109508
  },
  "pop": 1188,
  "state": "IN"
},{
  "city": "WALKERTON",
  "zip": "46574",
  "loc": {
    "y": 41.445748,
    "x": 86.451018
  },
  "pop": 5279,
  "state": "IN"
},{
  "city": "SOUTH BEND",
  "zip": "46628",
  "loc": {
    "y": 41.701525,
    "x": 86.294929
  },
  "pop": 24914,
  "state": "IN"
},{
  "city": "KIMMELL",
  "zip": "46760",
  "loc": {
    "y": 41.363103,
    "x": 85.518734
  },
  "pop": 2095,
  "state": "IN"
},{
  "city": "KEYSTONE",
  "zip": "46759",
  "loc": {
    "y": 40.589667,
    "x": 85.276748
  },
  "pop": 518,
  "state": "IN"
},{
  "city": "CUTLER",
  "zip": "46920",
  "loc": {
    "y": 40.4785,
    "x": 86.446172
  },
  "pop": 2495,
  "state": "IN"
},{
  "city": "GREENTOWN",
  "zip": "46936",
  "loc": {
    "y": 40.479096,
    "x": 85.958195
  },
  "pop": 5785,
  "state": "IN"
},{
  "city": "BUNKER HILL",
  "zip": "46914",
  "loc": {
    "y": 40.642267,
    "x": 86.09615
  },
  "pop": 3073,
  "state": "IN"
},{
  "city": "BATH",
  "zip": "47010",
  "loc": {
    "y": 39.499237,
    "x": 84.836007
  },
  "pop": 197,
  "state": "IN"
},{
  "city": "BROOKVILLE",
  "zip": "47012",
  "loc": {
    "y": 39.421305,
    "x": 84.999423
  },
  "pop": 9204,
  "state": "IN"
},{
  "city": "ENGLISH",
  "zip": "47118",
  "loc": {
    "y": 38.325807,
    "x": 86.442875
  },
  "pop": 3424,
  "state": "IN"
},{
  "city": "FLOYDS KNOBS",
  "zip": "47119",
  "loc": {
    "y": 38.351006,
    "x": 85.899555
  },
  "pop": 9954,
  "state": "IN"
},{
  "city": "SALEM",
  "zip": "47167",
  "loc": {
    "y": 38.607138,
    "x": 86.078742
  },
  "pop": 10949,
  "state": "IN"
},{
  "city": "SAINT PAUL",
  "zip": "47272",
  "loc": {
    "y": 39.427747,
    "x": 85.599374
  },
  "pop": 1389,
  "state": "IN"
},{
  "city": "CENTERVILLE",
  "zip": "47330",
  "loc": {
    "y": 39.808103,
    "x": 85.00317
  },
  "pop": 5475,
  "state": "IN"
},{
  "city": "WEBSTER",
  "zip": "47392",
  "loc": {
    "y": 39.905701,
    "x": 84.942908
  },
  "pop": 540,
  "state": "IN"
},{
  "city": "ELLETTSVILLE",
  "zip": "47429",
  "loc": {
    "y": 39.254477,
    "x": 86.619635
  },
  "pop": 4960,
  "state": "IN"
},{
  "city": "BUFFALOVILLE",
  "zip": "47550",
  "loc": {
    "y": 38.047904,
    "x": 86.962908
  },
  "pop": 202,
  "state": "IN"
},{
  "city": "LEOPOLD",
  "zip": "47551",
  "loc": {
    "y": 38.101138,
    "x": 86.60443
  },
  "pop": 623,
  "state": "IN"
},{
  "city": "GRIFFIN",
  "zip": "47616",
  "loc": {
    "y": 38.206858,
    "x": 87.916631
  },
  "pop": 329,
  "state": "IN"
},{
  "city": "LYNNVILLE",
  "zip": "47619",
  "loc": {
    "y": 38.196085,
    "x": 87.293486
  },
  "pop": 1329,
  "state": "IN"
},{
  "city": "SCHERERVILLE",
  "zip": "46375",
  "loc": {
    "y": 41.492233,
    "x": 87.460532
  },
  "pop": 14152,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46203",
  "loc": {
    "y": 39.743025,
    "x": 86.117859
  },
  "pop": 42566,
  "state": "IN"
},{
  "city": "BOURBON",
  "zip": "46504",
  "loc": {
    "y": 41.309785,
    "x": 86.117438
  },
  "pop": 2976,
  "state": "IN"
},{
  "city": "LAKEVILLE",
  "zip": "46536",
  "loc": {
    "y": 41.525328,
    "x": 86.27144
  },
  "pop": 3355,
  "state": "IN"
},{
  "city": "HOWE",
  "zip": "46746",
  "loc": {
    "y": 41.728594,
    "x": 85.472746
  },
  "pop": 6040,
  "state": "IN"
},{
  "city": "FREMONT",
  "zip": "46737",
  "loc": {
    "y": 41.733125,
    "x": 84.945247
  },
  "pop": 4248,
  "state": "IN"
},{
  "city": "MONROEVILLE",
  "zip": "46773",
  "loc": {
    "y": 40.987044,
    "x": 84.89373
  },
  "pop": 4093,
  "state": "IN"
},{
  "city": "HUNTERTOWN",
  "zip": "46748",
  "loc": {
    "y": 41.239113,
    "x": 85.167724
  },
  "pop": 2265,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46805",
  "loc": {
    "y": 41.097663,
    "x": 85.118865
  },
  "pop": 22657,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46807",
  "loc": {
    "y": 41.049054,
    "x": 85.146167
  },
  "pop": 18346,
  "state": "IN"
},{
  "city": "FORT WAYNE",
  "zip": "46816",
  "loc": {
    "y": 41.016519,
    "x": 85.097573
  },
  "pop": 15507,
  "state": "IN"
},{
  "city": "BRINGHURST",
  "zip": "46913",
  "loc": {
    "y": 40.516294,
    "x": 86.520369
  },
  "pop": 212,
  "state": "IN"
},{
  "city": "UPLAND",
  "zip": "46989",
  "loc": {
    "y": 40.454841,
    "x": 85.499049
  },
  "pop": 6027,
  "state": "IN"
},{
  "city": "BORDEN",
  "zip": "47106",
  "loc": {
    "y": 38.436171,
    "x": 85.921473
  },
  "pop": 4080,
  "state": "IN"
},{
  "city": "HENRYVILLE",
  "zip": "47126",
  "loc": {
    "y": 38.539829,
    "x": 85.773403
  },
  "pop": 2648,
  "state": "IN"
},{
  "city": "LACONIA",
  "zip": "47135",
  "loc": {
    "y": 38.052703,
    "x": 86.084415
  },
  "pop": 1058,
  "state": "IN"
},{
  "city": "OTISCO",
  "zip": "47163",
  "loc": {
    "y": 38.542342,
    "x": 85.664702
  },
  "pop": 1738,
  "state": "IN"
},{
  "city": "RAMSEY",
  "zip": "47166",
  "loc": {
    "y": 38.335442,
    "x": 86.130768
  },
  "pop": 1146,
  "state": "IN"
},{
  "city": "SULPHUR",
  "zip": "47174",
  "loc": {
    "y": 38.227194,
    "x": 86.487296
  },
  "pop": 303,
  "state": "IN"
},{
  "city": "RICHMOND",
  "zip": "47374",
  "loc": {
    "y": 39.83244,
    "x": 84.893606
  },
  "pop": 50516,
  "state": "IN"
},{
  "city": "SARATOGA",
  "zip": "47382",
  "loc": {
    "y": 40.257365,
    "x": 84.950846
  },
  "pop": 1244,
  "state": "IN"
},{
  "city": "47559",
  "zip": "47559",
  "loc": {
    "y": 38.126823,
    "x": 86.519682
  },
  "pop": 23,
  "state": "IN"
},{
  "city": "WHEATLAND",
  "zip": "47597",
  "loc": {
    "y": 38.667055,
    "x": 87.306204
  },
  "pop": 885,
  "state": "IN"
},{
  "city": "OWENSVILLE",
  "zip": "47665",
  "loc": {
    "y": 38.274414,
    "x": 87.709052
  },
  "pop": 3159,
  "state": "IN"
},{
  "city": "INDIANAPOLIS",
  "zip": "46208",
  "loc": {
    "y": 39.829905,
    "x": 86.179444
  },
  "pop": 39610,
  "state": "IN"
},{
  "city": "CLERMONT",
  "zip": "46234",
  "loc": {
    "y": 39.788438,
    "x": 86.324117
  },
  "pop": 13865,
  "state": "IN"
},{
  "city": "EAST CHICAGO",
  "zip": "46312",
  "loc": {
    "y": 41.634893,
    "x": 87.462734
  },
  "pop": 33775,
  "state": "IN"
},{
  "city": "HAMMOND",
  "zip": "46324",
  "loc": {
    "y": 41.583954,
    "x": 87.503393
  },
  "pop": 23585,
  "state": "IN"
},{
  "city": "WHEATFIELD",
  "zip": "46392",
  "loc": {
    "y": 41.177948,
    "x": 87.069876
  },
  "pop": 5415,
  "state": "IN"
},{
  "city": "GARY",
  "zip": "46409",
  "loc": {
    "y": 41.541247,
    "x": 87.327126
  },
  "pop": 14119,
  "state": "IN"
},{
  "city": "GARY",
  "zip": "46408",
  "loc": {
    "y": 41.542178,
    "x": 87.35883
  },
  "pop": 21586,
  "state": "IN"
},{
  "city": "SYRACUSE",
  "zip": "46567",
  "loc": {
    "y": 41.40649,
    "x": 85.718352
  },
  "pop": 7695,
  "state": "IN"
},{
  "city": "WINONA LAKE",
  "zip": "46590",
  "loc": {
    "y": 41.211007,
    "x": 85.830531
  },
  "pop": 7559,
  "state": "IN"
},{
  "city": "SOUTH BEND",
  "zip": "46601",
  "loc": {
    "y": 41.672699,
    "x": 86.253489
  },
  "pop": 5479,
  "state": "IN"
},{
  "city": "SOUTH BEND",
  "zip": "46613",
  "loc": {
    "y": 41.654636,
    "x": 86.247865
  },
  "pop": 11827,
  "state": "IN"
},{
  "city": "ALBION",
  "zip": "46701",
  "loc": {
    "y": 41.348217,
    "x": 85.414183
  },
  "pop": 6907,
  "state": "IN"
},{
  "city": "BLUFFTON",
  "zip": "46714",
  "loc": {
    "y": 40.736837,
    "x": 85.162199
  },
  "pop": 14669,
  "state": "IN"
},{
  "city": "GRABILL",
  "zip": "46741",
  "loc": {
    "y": 41.210753,
    "x": 84.940593
  },
  "pop": 4267,
  "state": "IN"
},{
  "city": "SAINT JOE",
  "zip": "46785",
  "loc": {
    "y": 41.324049,
    "x": 84.90425
  },
  "pop": 1161,
  "state": "IN"
},{
  "city": "PERU",
  "zip": "46970",
  "loc": {
    "y": 40.749203,
    "x": 86.068044
  },
  "pop": 19549,
  "state": "IN"
},{
  "city": "RUSSIAVILLE",
  "zip": "46979",
  "loc": {
    "y": 40.415086,
    "x": 86.267467
  },
  "pop": 1724,
  "state": "IN"
},{
  "city": "CEDAR GROVE",
  "zip": "47016",
  "loc": {
    "y": 39.345891,
    "x": 84.892402
  },
  "pop": 1522,
  "state": "IN"
},{
  "city": "MOORES HILL",
  "zip": "47032",
  "loc": {
    "y": 39.094459,
    "x": 85.063806
  },
  "pop": 2729,
  "state": "IN"
},{
  "city": "NEW WASHINGTON",
  "zip": "47162",
  "loc": {
    "y": 38.557521,
    "x": 85.45987
  },
  "pop": 380,
  "state": "IN"
},{
  "city": "TASWELL",
  "zip": "47175",
  "loc": {
    "y": 38.346302,
    "x": 86.538675
  },
  "pop": 950,
  "state": "IN"
},{
  "city": "COLUMBUS",
  "zip": "47203",
  "loc": {
    "y": 39.230097,
    "x": 85.885497
  },
  "pop": 15656,
  "state": "IN"
},{
  "city": "NORMAN",
  "zip": "47264",
  "loc": {
    "y": 38.929996,
    "x": 86.207934
  },
  "pop": 1834,
  "state": "IN"
},{
  "city": "EATON",
  "zip": "47338",
  "loc": {
    "y": 40.337673,
    "x": 85.354387
  },
  "pop": 3637,
  "state": "IN"
},{
  "city": "REDKEY",
  "zip": "47373",
  "loc": {
    "y": 40.326491,
    "x": 85.161966
  },
  "pop": 2971,
  "state": "IN"
},{
  "city": "UNION CITY",
  "zip": "47390",
  "loc": {
    "y": 40.202372,
    "x": 84.826787
  },
  "pop": 5393,
  "state": "IN"
},{
  "city": "BICKNELL",
  "zip": "47512",
  "loc": {
  },
},{
  },