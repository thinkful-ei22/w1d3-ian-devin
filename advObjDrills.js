'use strict';

function makeStudentsReport(data) {
  return data.map(record => `${record.name}: ${record.grade}`);
}

