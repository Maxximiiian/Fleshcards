const path = require('path');
const fs = require('fs').promises;

module.exports = {
  async up(queryInterface, Sequelize) {
    const topics = (
      await fs.readFile(path.join(__dirname, './topics.txt'), 'utf-8')
    )
      .split('\n')
      .map((el) => ({
        name: el,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Topics', topics);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
