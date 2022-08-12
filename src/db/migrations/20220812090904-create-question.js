module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.TEXT,
      },
      answer: {
        type: Sequelize.TEXT,
      },
      option1: {
        type: Sequelize.STRING,
      },
      option2: {
        type: Sequelize.STRING,
      },
      option3: {
        type: Sequelize.STRING,
      },
      option4: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.TEXT,
      },
      Topic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Topics',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  },
};
