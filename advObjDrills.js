'use strict';

function makeStudentsReport(data) {
  return data.map(record => `${record.name}: ${record.grade}`);
}

function enrollInSummerSchool(students) {
  return students.map(function(record){
    record.status = 'In Summer school';
    return record;
  });
}


function findById(items, idNum) {
  return items.find(item => item.id === idNum);
}

function validateKeys(object, expectedKeys) {
  let actualKeys = Object.keys(object);
  if (actualKeys.length !== expectedKeys.length){
    return false;
  }
  for(let i = 0; i < expectedKeys.length; i++){
    if(actualKeys.find(key => key === expectedKeys[i]) === undefined){
      return false;
    }
  }
  return true;
}
