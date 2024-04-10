import Sequelize, { Model } from 'sequelize';
class User extends Model {

	static init(sequelize) {
		super.init(
			{
        access_name: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        person: Sequelize.INTEGER,
        role: Sequelize.INTEGER,
        photo: Sequelize.TEXT('long'),
        team: Sequelize.INTEGER,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'user',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Person, {foreignKey: 'person'})

  }
}

export default User;
