'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Patients', [
        {
          name: 'Matt Crawford',
          age: 32,
          gender: 'male',
          patientId: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sonny Fishback',
          age: 45,
          gender: 'male',
          patientId: 101,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'April Hickman',
          age: 19,
          gender: 'female',
          patientId: 102,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Abigaile Leonard',
          age: 47,
          gender: 'female',
          patientId: 103,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pete Rock',
          age: 67,
          gender: 'male',
          patientId: 104,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sarah Lipscomb',
          age: 23,
          gender: 'female',
          patientId: 105,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
