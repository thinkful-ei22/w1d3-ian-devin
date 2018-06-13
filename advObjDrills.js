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

