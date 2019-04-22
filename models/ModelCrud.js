//@ts-check
const Knex = require('../config/bd');

class Crud {
    /**
     * @param {string} TABLE - Nome da tabela no banco de dados
     * @param {object} OBJ - Objeto de dados para inserir no banco de dados
     */
    Save(TABLE, OBJ) {
        return new Promise((resolve, reject) => {
            Knex(TABLE).insert(OBJ)
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                })
        })

    }
    /**
     * @param {string} TABLE - Nome da tabela no banco de dados
     * @param {object} OBJ  - Objeto para atualização de registro no banco de dados
     * @param {string} COLUNA - ID do registro para excluir
     * @param {string} COLUNACOMPARCAO - Coluna de comparação 
     */
    Update(TABLE, OBJ, COLUNA, COLUNACOMPARCAO) {
        return new Promise((resolve, reject) => {
            Knex(TABLE).update(OBJ)
                .where(COLUNA, COLUNACOMPARCAO)
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                })
        });
    }
    /**
     * @param {string} TABLE - Nome da tabela no banco de dados
     * @param {string} COLUNA - ID do registro para excluir
     * @param {string} COLUNACOMPARCAO - Coluna de comparação
     */
    Delete(TABLE, COLUNA, COLUNACOMPARCAO) {
        return new Promise((resolve, reject) => {
            Knex(TABLE)
                .delete()
                .where(COLUNA, COLUNACOMPARCAO)
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });
        });
    }
    /**
     * @param {string} TABLE - Nome da tabela no banco de dados
     * @param {string} COLUNA - Coluna referente a pesquisa no banco de
     * @param {string} OPERADOR - Operador de comparação
     * @param {string} COLUNACOMPARCAO  - Coluna de comparação 
     */
    ReadParams(TABLE, COLUNA, OPERADOR, COLUNACOMPARCAO) {
        return new Promise((resolve, reject) => {
            Knex.select()
                .table(TABLE)
                .where(COLUNA, OPERADOR, COLUNACOMPARCAO)
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });
        })
    }
    /**
     * @param {string} TABLE - Table para realizar a pesquisa
     */
    ReadAll(TABLE) {
        return new Promise((resolve, reject) => {
            Knex.select()
                .table(TABLE)
                .then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });
        })
    }
}


module.exports = Crud; 