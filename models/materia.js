module.exports = (sequelize, DataType) => {
    const materia = sequelize.define('materia', {
        id_materia: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER
        },
        nombre_mat: {
            allowNull: false,
            type: DataType.STRING
        }
    }, {
            timestamps: false
    });
    //Asociaciones
    
    return materia;
};

