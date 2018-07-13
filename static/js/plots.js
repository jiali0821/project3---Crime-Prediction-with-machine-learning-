var crime_types = ['HOMICIDE', 'BATTERY', 'NARCOTICS', 'ASSAULT', 'THEFT', 'ROBBERY',
'OTHER OFFENSE', 'WEAPONS VIOLATION', 'CRIMINAL DAMAGE',
'MOTOR VEHICLE THEFT', 'BURGLARY', 'DECEPTIVE PRACTICE',
'OFFENSE INVOLVING CHILDREN', 'CRIM SEXUAL ASSAULT',
'CRIMINAL TRESPASS', 'SEX OFFENSE', 'PUBLIC PEACE VIOLATION',
'KIDNAPPING', 'GAMBLING', 'INTERFERENCE WITH PUBLIC OFFICER',
'ARSON', 'INTIMIDATION', 'CONCEALED CARRY LICENSE VIOLATION',
'PROSTITUTION', 'STALKING', 'HUMAN TRAFFICKING',
'LIQUOR LAW VIOLATION', 'OBSCENITY', 'NON-CRIMINAL',
'PUBLIC INDECENCY', 'NON-CRIMINAL (SUBJECT SPECIFIED)'] 

var beat = [523,  522,  532,  524,  215,  214,  223,  221,  224,  213,  623,
    322,  621,  731,  624,  323,  321,  312,  324,  722,  732,  311,
   2531, 1532, 2513, 1522, 2533, 1524, 1513, 2532, 1523, 1512, 1113,
   1533, 1111, 1531, 1131, 1511, 2515, 2512, 1655, 1654, 1651, 1614,
   1653, 1652, 1631,  513,  431,  434,  413,  433, 1432, 1434, 1414,
   1413, 1411, 1422, 1412, 2524, 1431, 1421, 2525, 1433, 2535, 2233,
    511,  512,  531,  634,  633, 2232,  622,  823,  833,  813,  822,
   1213, 1424, 1221, 1215, 1423, 1211, 1214, 1212, 1223, 1723, 1712,
   1722, 1713, 1724,  422,  423,  411,  424,  414,  412,  421, 2534,
   1121, 1112, 1122, 1123, 1222,  631,  632, 1232, 1231, 1135,  121,
    124, 1224, 1233, 1225, 1023, 1125, 1234, 2521, 2522, 2523,  613,
    614,  612,  611, 2221, 2223, 2222, 2012, 2022, 2023, 2433, 2013,
   1132, 1114, 1133, 1115,  231,  232,  225,  233,  835,  825,  832,
    831,  824,  931,  932,  934,  924,  933,  925,  935,  922,  921,
   1733, 1732, 1831, 1834, 1823, 1824, 1832, 1822, 1833, 1821,  334,
    331,  332,  333, 2511, 2211, 1812, 1814, 1811, 1935, 1931, 1932,
   1813,  112,  122,  113,  114,  111,  123, 2213, 2212, 1022, 1012,
   1134, 1011, 1014, 1021, 1013, 1024,  735,  725,  734,  726,  713,
    714,  724,  715, 1911, 2032, 2031, 2011, 1912,  314,  313,  235,
   1731, 1914, 1915, 2024, 2033, 1913, 1924, 1922, 1933, 1934, 1925,
   1923,  914,  915,  131, 1235, 1034,  912,  913, 2234, 2411, 2413,
   2412, 1611, 1613, 1612, 1622,  234,  911,  821,  133,  211,  212,
    132,  533,  834,  923, 1633, 1632,  712,  723,  733,  711,  812,
    811, 2514, 1124, 1711, 1031, 1032, 1033,  815, 1623, 1621,  814,
   1624, 1634,  222, 1921, 2432, 2424, 2422, 2423, 2431,  432]

var ward = [34.,   9.,   3.,   4.,   6.,  17.,  20.,   8.,   5.,  29.,  28.,
    36.,  37.,  24.,  31.,  41.,  10.,   7.,  32.,  35.,  26.,   1.,
    30.,  21.,  13.,  16.,  27.,  42.,  33.,  39.,   2.,  25.,  18.,
    40.,  48.,  49.,  15.,  12.,  11.,  43.,  19.,  22.,  47.,  38.,
    45.,  46.,  44.,  50.,  14.,  23.]

var district = [5,  4,  2,  6,  3,  7, 25, 15, 11, 16, 31, 14, 22,  8, 12, 17,  1,
    10, 20, 24,  9, 18, 19]

var loc_descript = ['STREET', 'RESIDENCE', 'SIDEWALK', 'PARK PROPERTY', 'APARTMENT',
'CURRENCY EXCHANGE', 'GAS STATION', 'HOTEL/MOTEL',
'RESIDENCE-GARAGE', 'ALLEY', 'RESIDENTIAL YARD (FRONT/BACK)',
'POLICE FACILITY/VEH PARKING LOT', 'RESIDENCE PORCH/HALLWAY',
'OTHER', 'CHURCH/SYNAGOGUE/PLACE OF WORSHIP',
'SCHOOL, PUBLIC, BUILDING', 'ABANDONED BUILDING',
'PARKING LOT/GARAGE(NON.RESID.)', 'SMALL RETAIL STORE',
'FIRE STATION', 'DEPARTMENT STORE', 'CONVENIENCE STORE',
'VEHICLE NON-COMMERCIAL', 'SCHOOL, PRIVATE, GROUNDS',
'SCHOOL, PRIVATE, BUILDING', 'POOL ROOM', 'DRIVEWAY - RESIDENTIAL',
'CTA BUS', 'nan', 'APPLIANCE STORE', 'DAY CARE CENTER',
'GROCERY FOOD STORE', 'CTA BUS STOP',
'GOVERNMENT BUILDING/PROPERTY', 'COMMERCIAL / BUSINESS OFFICE',
'ATM (AUTOMATIC TELLER MACHINE)', 'SCHOOL, PUBLIC, GROUNDS',
'ATHLETIC CLUB', 'RESTAURANT', 'BANK', 'LIBRARY',
'OTHER RAILROAD PROP / TRAIN DEPOT',
'VEHICLE - OTHER RIDE SHARE SERVICE (E.G., UBER, LYFT)',
'TAVERN/LIQUOR STORE', 'CHA PARKING LOT/GROUNDS',
'SPORTS ARENA/STADIUM', 'NURSING HOME/RETIREMENT HOME',
'BARBERSHOP', 'DRUG STORE', 'HOUSE', 'VACANT LOT',
'LAKEFRONT/WATERFRONT/RIVERBANK', 'HOSPITAL BUILDING/GROUNDS',
'CTA STATION', 'CHA HALLWAY/STAIRWELL/ELEVATOR',
'CONSTRUCTION SITE', 'WAREHOUSE', 'VACANT LOT/LAND',
'CHA APARTMENT', 'PAWN SHOP', 'CTA PLATFORM', 'CTA TRAIN',
'TAXICAB', 'MEDICAL/DENTAL OFFICE',
'AIRPORT EXTERIOR - NON-SECURE AREA', 'VEHICLE-COMMERCIAL',
'LIQUOR STORE', 'CLEANING STORE', 'AUTO', 'CAR WASH',
'CTA GARAGE / OTHER PROPERTY', 'CEMETARY', 'BAR OR TAVERN',
'VEHICLE - DELIVERY TRUCK',
'AIRPORT TERMINAL LOWER LEVEL - SECURE AREA', 'HIGHWAY/EXPRESSWAY',
'ANIMAL HOSPITAL', 'FACTORY/MANUFACTURING BUILDING',
'AIRPORT EXTERIOR - SECURE AREA', 'CTA PROPERTY',
'AUTO / BOAT / RV DEALERSHIP', 'YARD', 'MOVIE HOUSE/THEATER',
'OTHER COMMERCIAL TRANSPORTATION',
'AIRPORT TERMINAL UPPER LEVEL - NON-SECURE AREA',
'AIRPORT TERMINAL LOWER LEVEL - NON-SECURE AREA',
'AIRPORT BUILDING NON-TERMINAL - NON-SECURE AREA',
'AIRPORT PARKING LOT', 'AIRPORT TRANSPORTATION SYSTEM (ATS)',
'AIRPORT TERMINAL UPPER LEVEL - SECURE AREA', 'AIRPORT/AIRCRAFT',
'AIRCRAFT', 'AIRPORT BUILDING NON-TERMINAL - SECURE AREA',
'AIRPORT VENDING ESTABLISHMENT',
'AIRPORT TERMINAL MEZZANINE - NON-SECURE AREA',
'VEHICLE-COMMERCIAL - TROLLEY BUS', 'BOWLING ALLEY',
'CTA TRACKS - RIGHT OF WAY', 'SAVINGS AND LOAN', 'HOTEL',
'COIN OPERATED MACHINE', 'GARAGE',
'COLLEGE/UNIVERSITY RESIDENCE HALL', 'PORCH',
'COLLEGE/UNIVERSITY GROUNDS', 'FARM', 'FEDERAL BUILDING',
'PARKING LOT', 'NEWSSTAND', 'JAIL / LOCK-UP FACILITY',
'BOAT/WATERCRAFT', 'CHA GROUNDS', 'HALLWAY', 'BRIDGE',
'VEHICLE-COMMERCIAL - ENTERTAINMENT/PARTY BUS', 'FOREST PRESERVE',
'CREDIT UNION', 'GOVERNMENT BUILDING', 'HORSE STABLE', 'YMCA',
'DRIVEWAY', 'RETAIL STORE', 'GARAGE/AUTO REPAIR']

var domestic_abuse = [false,  true]

var fbi_codes = ['01A', '08B', '18', '04A', '04B', '6', '3', '26', '15', '14', '7',
'5', '11', '20', '2', '08A', '17', '24', '19', '10', '9', '16',
'22', '13', '12', '01B']

var community_name = ['West Pullman', 'Grand Boulevard', 'Greater Grand Crossing',
'Austin', "O'Hare", 'South Deering', 'Logan Square', 'Roseland',
'West Lawn', 'West Town', 'Albany Park', 'South Chicago',
'Humboldt Park', 'Chatham', 'Near West Side', 'Hermosa',
'Auburn Gresham', 'Edgewater', 'West Garfield Park',
'Washington Park', 'Chicago Lawn', 'New City', 'Avondale',
'Near North Side', 'South Shore', 'Montclaire', 'Mount Greenwood',
'Lincoln Park', 'Loop', 'Beverly', 'North Lawndale',
'West Englewood', 'Lincoln Square', 'Woodlawn', 'Irving Park',
'Uptown', 'Lake View', 'Armour Square', 'Washington Heights',
'Avalon Park', 'Lower West Side', 'Morgan Park', 'West Ridge',
'Norwood Park', 'Hyde Park', 'Brighton Park', 'Douglas',
'Near South Side', 'Riverdale', 'Ashburn', 'Gage Park', 'Dunning',
'Englewood', 'Oakland', 'Clearing', 'Belmont Cragin',
'East Garfield Park', 'North Park', 'South Lawndale',
'Archer Heights', 'Burnside', 'Forest Glen', 'Garfield Ridge',
'West Elsdon', 'Portage Park', 'Kenwood', 'Calumet Heights',
'McKinley Park', 'Pullman', 'North Center', 'Bridgeport',
'Rogers Park', 'Jefferson Park', 'Hegewisch', 'Fuller Park',
'Edison Park', 'East Side']

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

  