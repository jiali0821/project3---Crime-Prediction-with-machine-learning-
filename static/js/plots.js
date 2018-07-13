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

var area_names = []
for (var i = 0; i < crime_types.length;  i++) {
    var currentOption = document.createElement('option');
    currentOption.text = crime_types[i];
    currentOption.value = crime_types[i];
    selDataset.appendChild(currentOption);

    area_names.push(crime_types[i]["crime_type"])
 }