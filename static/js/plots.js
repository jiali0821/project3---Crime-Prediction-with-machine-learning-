var crime_types = ['ARSON', 'ASSAULT', 'BATTERY', 'BURGLARY',
'CONCEALED CARRY LICENSE VIOLATION', 'CRIM SEXUAL ASSAULT',
'CRIMINAL DAMAGE', 'CRIMINAL TRESPASS', 'DECEPTIVE PRACTICE',
'GAMBLING', 'HOMICIDE', 'HUMAN TRAFFICKING',
'INTERFERENCE WITH PUBLIC OFFICER', 'INTIMIDATION', 'KIDNAPPING',
'LIQUOR LAW VIOLATION', 'MOTOR VEHICLE THEFT', 'NARCOTICS',
'NON-CRIMINAL', 'NON-CRIMINAL (SUBJECT SPECIFIED)', 'OBSCENITY',
'OFFENSE INVOLVING CHILDREN', 'OTHER OFFENSE', 'PROSTITUTION',
'PUBLIC INDECENCY', 'PUBLIC PEACE VIOLATION', 'ROBBERY',
'SEX OFFENSE', 'STALKING', 'THEFT', 'WEAPONS VIOLATION'] 

var beat = [111,  112,  113,  114,  121,  122,  123,  124,  131,  132,  133,
    211,  212,  213,  214,  215,  221,  222,  223,  224,  225,  231,
    232,  233,  234,  235,  311,  312,  313,  314,  321,  322,  323,
    324,  331,  332,  333,  334,  411,  412,  413,  414,  421,  422,
    423,  424,  431,  432,  433,  434,  511,  512,  513,  522,  523,
    524,  531,  532,  533,  611,  612,  613,  614,  621,  622,  623,
    624,  631,  632,  633,  634,  711,  712,  713,  714,  715,  722,
    723,  724,  725,  726,  731,  732,  733,  734,  735,  811,  812,
    813,  814,  815,  821,  822,  823,  824,  825,  831,  832,  833,
    834,  835,  911,  912,  913,  914,  915,  921,  922,  923,  924,
    925,  931,  932,  933,  934,  935, 1011, 1012, 1013, 1014, 1021,
   1022, 1023, 1024, 1031, 1032, 1033, 1034, 1111, 1112, 1113, 1114,
   1115, 1121, 1122, 1123, 1124, 1125, 1131, 1132, 1133, 1134, 1135,
   1211, 1212, 1213, 1214, 1215, 1221, 1222, 1223, 1224, 1225, 1231,
   1232, 1233, 1234, 1235, 1411, 1412, 1413, 1414, 1421, 1422, 1423,
   1424, 1431, 1432, 1433, 1434, 1511, 1512, 1513, 1522, 1523, 1524,
   1531, 1532, 1533, 1611, 1612, 1613, 1614, 1621, 1622, 1623, 1624,
   1631, 1632, 1633, 1634, 1651, 1652, 1653, 1654, 1655, 1711, 1712,
   1713, 1722, 1723, 1724, 1731, 1732, 1733, 1811, 1812, 1813, 1814,
   1821, 1822, 1823, 1824, 1831, 1832, 1833, 1834, 1911, 1912, 1913,
   1914, 1915, 1921, 1922, 1923, 1924, 1925, 1931, 1932, 1933, 1934,
   1935, 2011, 2012, 2013, 2022, 2023, 2024, 2031, 2032, 2033, 2211,
   2212, 2213, 2221, 2222, 2223, 2232, 2233, 2234, 2411, 2412, 2413,
   2422, 2423, 2424, 2431, 2432, 2433, 2511, 2512, 2513, 2514, 2515,
   2521, 2522, 2523, 2524, 2525, 2531, 2532, 2533, 2534, 2535]

var ward = [1.,   2.,   3.,   4.,   5.,   6.,   7.,   8.,   9.,  10.,  11.,
    12.,  13.,  14.,  15.,  16.,  17.,  18.,  19.,  20.,  21.,  22.,
    23.,  24.,  25.,  26.,  27.,  28.,  29.,  30.,  31.,  32.,  33.,
    34.,  35.,  36.,  37.,  38.,  39.,  40.,  41.,  42.,  43.,  44.,
    45.,  46.,  47.,  48.,  49.,  50.]

var district = [1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 14, 15, 16, 17, 18,
    19, 20, 22, 24, 25, 31]

var loc_descript = ['ABANDONED BUILDING', 'AIRCRAFT',
'AIRPORT BUILDING NON-TERMINAL - NON-SECURE AREA',
'AIRPORT BUILDING NON-TERMINAL - SECURE AREA',
'AIRPORT EXTERIOR - NON-SECURE AREA',
'AIRPORT EXTERIOR - SECURE AREA', 'AIRPORT PARKING LOT',
'AIRPORT TERMINAL LOWER LEVEL - NON-SECURE AREA',
'AIRPORT TERMINAL LOWER LEVEL - SECURE AREA',
'AIRPORT TERMINAL MEZZANINE - NON-SECURE AREA',
'AIRPORT TERMINAL UPPER LEVEL - NON-SECURE AREA',
'AIRPORT TERMINAL UPPER LEVEL - SECURE AREA',
'AIRPORT TRANSPORTATION SYSTEM (ATS)',
'AIRPORT VENDING ESTABLISHMENT', 'AIRPORT/AIRCRAFT', 'ALLEY',
'ANIMAL HOSPITAL', 'APARTMENT', 'APPLIANCE STORE', 'ATHLETIC CLUB',
'ATM (AUTOMATIC TELLER MACHINE)', 'AUTO',
'AUTO / BOAT / RV DEALERSHIP', 'BANK', 'BAR OR TAVERN',
'BARBERSHOP', 'BOAT/WATERCRAFT', 'BOWLING ALLEY', 'BRIDGE',
'CAR WASH', 'CEMETARY', 'CHA APARTMENT', 'CHA GROUNDS',
'CHA HALLWAY/STAIRWELL/ELEVATOR', 'CHA PARKING LOT/GROUNDS',
'CHURCH/SYNAGOGUE/PLACE OF WORSHIP', 'CLEANING STORE',
'COIN OPERATED MACHINE', 'COLLEGE/UNIVERSITY GROUNDS',
'COLLEGE/UNIVERSITY RESIDENCE HALL', 'COMMERCIAL / BUSINESS OFFICE',
'CONSTRUCTION SITE', 'CONVENIENCE STORE', 'CREDIT UNION', 'CTA BUS',
'CTA BUS STOP', 'CTA GARAGE / OTHER PROPERTY', 'CTA PLATFORM',
'CTA PROPERTY', 'CTA STATION', 'CTA TRACKS - RIGHT OF WAY',
'CTA TRAIN', 'CURRENCY EXCHANGE', 'DAY CARE CENTER',
'DEPARTMENT STORE', 'DRIVEWAY', 'DRIVEWAY - RESIDENTIAL',
'DRUG STORE', 'FACTORY/MANUFACTURING BUILDING', 'FARM',
'FEDERAL BUILDING', 'FIRE STATION', 'FOREST PRESERVE', 'GARAGE',
'GARAGE/AUTO REPAIR', 'GAS STATION', 'GOVERNMENT BUILDING',
'GOVERNMENT BUILDING/PROPERTY', 'GROCERY FOOD STORE', 'HALLWAY',
'HIGHWAY/EXPRESSWAY', 'HORSE STABLE', 'HOSPITAL BUILDING/GROUNDS',
'HOTEL', 'HOTEL/MOTEL', 'HOUSE', 'JAIL / LOCK-UP FACILITY',
'LAKEFRONT/WATERFRONT/RIVERBANK', 'LIBRARY', 'LIQUOR STORE',
'MEDICAL/DENTAL OFFICE', 'MOVIE HOUSE/THEATER', 'NEWSSTAND',
'NURSING HOME/RETIREMENT HOME', 'OTHER',
'OTHER COMMERCIAL TRANSPORTATION',
'OTHER RAILROAD PROP / TRAIN DEPOT', 'PARK PROPERTY', 'PARKING LOT',
'PARKING LOT/GARAGE(NON.RESID.)', 'PAWN SHOP',
'POLICE FACILITY/VEH PARKING LOT', 'POOL ROOM', 'PORCH',
'RESIDENCE', 'RESIDENCE PORCH/HALLWAY', 'RESIDENCE-GARAGE',
'RESIDENTIAL YARD (FRONT/BACK)', 'RESTAURANT', 'RETAIL STORE',
'SAVINGS AND LOAN', 'SCHOOL, PRIVATE, BUILDING',
'SCHOOL, PRIVATE, GROUNDS', 'SCHOOL, PUBLIC, BUILDING',
'SCHOOL, PUBLIC, GROUNDS', 'SIDEWALK', 'SMALL RETAIL STORE',
'SPORTS ARENA/STADIUM', 'STREET', 'TAVERN/LIQUOR STORE', 'TAXICAB',
'VACANT LOT', 'VACANT LOT/LAND', 'VEHICLE - DELIVERY TRUCK',
'VEHICLE - OTHER RIDE SHARE SERVICE (E.G., UBER, LYFT)',
'VEHICLE NON-COMMERCIAL', 'VEHICLE-COMMERCIAL',
'VEHICLE-COMMERCIAL - ENTERTAINMENT/PARTY BUS',
'VEHICLE-COMMERCIAL - TROLLEY BUS', 'WAREHOUSE', 'YARD', 'YMCA', 'nan']

var domestic_abuse = [0,  1]

var fbi_codes = ['01A', '01B', '04A', '04B', '08A', '08B', '10', '11', '12', '13',
'14', '15', '16', '17', '18', '19', '2', '20', '22', '24', '26',
'3', '5', '6', '7', '9']

var community_name = ['Albany Park', 'Archer Heights', 'Armour Square', 'Ashburn',
'Auburn Gresham', 'Austin', 'Avalon Park', 'Avondale',
'Belmont Cragin', 'Beverly', 'Bridgeport', 'Brighton Park',
'Burnside', 'Calumet Heights', 'Chatham', 'Chicago Lawn',
'Clearing', 'Douglas', 'Dunning', 'East Garfield Park', 'East Side',
'Edgewater', 'Edison Park', 'Englewood', 'Forest Glen',
'Fuller Park', 'Gage Park', 'Garfield Ridge', 'Grand Boulevard',
'Greater Grand Crossing', 'Hegewisch', 'Hermosa', 'Humboldt Park',
'Hyde Park', 'Irving Park', 'Jefferson Park', 'Kenwood',
'Lake View', 'Lincoln Park', 'Lincoln Square', 'Logan Square',
'Loop', 'Lower West Side', 'McKinley Park', 'Montclaire',
'Morgan Park', 'Mount Greenwood', 'Near North Side',
'Near South Side', 'Near West Side', 'New City', 'North Center',
'North Lawndale', 'North Park', 'Norwood Park', "O'Hare", 'Oakland',
'Portage Park', 'Pullman', 'Riverdale', 'Rogers Park', 'Roseland',
'South Chicago', 'South Deering', 'South Lawndale', 'South Shore',
'Uptown', 'Washington Heights', 'Washington Park', 'West Elsdon',
'West Englewood', 'West Garfield Park', 'West Lawn', 'West Pullman',
'West Ridge', 'West Town', 'Woodlawn']

var community_numbers = [ 1.,   2.,   3.,   4.,   5.,   6.,   7.,   8.,   9.,  10.,  11.,
    12.,  13.,  14.,  15.,  16.,  17.,  18.,  19.,  20.,  21.,  22.,
    23.,  24.,  25.,  26.,  27.,  28.,  29.,  30.,  31.,  32.,  33.,
    34.,  35.,  36.,  37.,  38.,  39.,  40.,  41.,  42.,  43.,  44.,
    45.,  46.,  47.,  48.,  49.,  50.,  51.,  52.,  53.,  54.,  55.,
    56.,  57.,  58.,  59.,  60.,  61.,  62.,  63.,  64.,  65.,  66.,
    67.,  68.,  69.,  70.,  71.,  72.,  73.,  74.,  75.,  76.,  77]

function making_dropdowns() {
var select_data = document.getElementById('selDataset');

for (var i = 0; i < crime_types.length;  i++) {
    var currentOption = document.createElement('option');
    currentOption.text = crime_types[i];
    currentOption.value = crime_types[i];
    selDataset.appendChild(currentOption);

    //crime_names.push(crime_types[i]["crime_type"])
 }

 var select_beat = document.getElementById('beats');
 //var beat_number = []
 for (var i = 0; i < beat.length;  i++) {
    var currentOption = document.createElement('option');
    currentOption.text = beat[i];
    currentOption.value = beat[i];
    beats.appendChild(currentOption);

    //beat_number.push(beat[i])
 }

 var select_beat = document.getElementById('wards');
 //var ward_number = []
 for (var i = 0; i < ward.length;  i++) {
     var currentOption = document.createElement('option');
     currentOption.text = ward[i];
     currentOption.value = ward[i];
     wards.appendChild(currentOption);
 
     //ward_number.push(ward[i])
  }

  var select_beat = document.getElementById('districts');
  //var district_number = []
  for (var i = 0; i < district.length;  i++) {
     var currentOption = document.createElement('option');
     currentOption.text = district[i];
     currentOption.value = district[i];
     districts.appendChild(currentOption);
 
     //district_number.push(district[i])
  } 

  //var location = []
  var select_beat = document.getElementById('locations');
  for (var i = 0; i < loc_descript.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = loc_descript[i];
      currentOption.value = loc_descript[i];
      locations.appendChild(currentOption);
  
    //location.push(loc_descript[i])
   } 

     //var location = []
  var select_fbicode = document.getElementById('fbi_code');
  for (var i = 0; i < fbi_codes.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = fbi_codes[i];
      currentOption.value = fbi_codes[i];
      fbi_code.appendChild(currentOption);
  
    //location.push(loc_descript[i])
   } 

   var select_domestic = document.getElementById('domestic');
  for (var i = 0; i < domestic_abuse.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = domestic_abuse[i];
      currentOption.value = domestic_abuse[i];
      domestic.appendChild(currentOption);
  }

  var select_cname = document.getElementById('community_areas');
    for (var i = 0; i < community_name.length;  i++) {
          var currentOption = document.createElement('option');
          currentOption.text = community_name[i];
          currentOption.value = community_name[i];
          community_areas.appendChild(currentOption);
  
    //location.push(loc_descript[i])
   } 
   var select_cnum = document.getElementById('community_number"');
    for (var i = 0; i < community_numbers.length;  i++) {
          var currentOption = document.createElement('option');
          currentOption.text = community_numbers[i];
          currentOption.value = community_numbers[i];
          community_number.appendChild(currentOption);
  
    //location.push(loc_descript[i])
   } 
}

making_dropdowns()

// SUBMITTIG FORM

 // This .on("click") function will trigger the request
 d3.select("#crime_info").on("click", function(event) {

    // d3.event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    //d3.event.preventDefault();

    // Here we grab the text from the input box
    //var movie = d3.select("#movie-input").node().value;

    //d3.select("h2>span").text(movie);

  });

  