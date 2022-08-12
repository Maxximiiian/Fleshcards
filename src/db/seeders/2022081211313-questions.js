const path = require('path');
const fs = require('fs').promises;

module.exports = {
  async up(queryInterface, Sequelize) {
    const questions = (
      await fs.readFile(path.join(__dirname, './seed.txt'), 'utf-8')
    )
      .split('\n')
      .map((el) => el.split('&&&'))
      .map((el) => ({
        question: el[0],
        answer: el[1],
        option1: el[2],
        option2: el[3],
        option3: el[4],
        option4: el[5],
        image: el[6],
        Topic_id: el[7],
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Questions', questions);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
