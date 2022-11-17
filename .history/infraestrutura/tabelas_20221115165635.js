class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarLaboratorios();
        this.criarExames();
        this.criarVideos();
        this.criarCategorias();
        this.criarFilmes();
    }

    criarFilmes() {
        const dbRef = firebase.firestore();
        const docRef = firebase.firestore().doc('filmes');
        // const fireSQL = new FireSQL(dbRef);
        console.log("tabela filmes::",docRef);
    }

    criarLaboratorios() {
        const sql = 'CREATE TABLE IF NOT EXISTS Laboratorios (id int NOT NULL AUTO_INCREMENT, exameId int, nome varchar(50), endereco varchar(30), status varchar(20), dataInclusao date, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('tabela Laboratorios criada com sucesso!')
            }
        })
    }

    criarExames() {
        const sql = 'CREATE TABLE IF NOT EXISTS Exames (id int NOT NULL AUTO_INCREMENT, nome varchar(50), tipo varchar(30), status varchar(20), dataInclusao date, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('tabela exames criada com sucesso!')
            }
        })
    }

    criarCategorias() {
        const sql = 'CREATE TABLE IF NOT EXISTS Categorias (id int NOT NULL AUTO_INCREMENT, titulo varchar(100), cor varchar(20), PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('tabela categorias criada com sucesso!')
            }
        })
    }

    criarVideos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Videos (id int NOT NULL AUTO_INCREMENT, titulo varchar(100), descricao varchar(100), url varchar(100), categoriaId int, PRIMARY KEY(id), FOREIGN KEY(categoriaId) REFERENCES Categorias(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('tabela videos criada com sucesso!')
            }
        })
    }


}

export default new Tabelas