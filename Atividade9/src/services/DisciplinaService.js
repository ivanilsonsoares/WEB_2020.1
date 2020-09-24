export default class FirebaseService {

    static list = (firestore, callback) => {

        let ref = firestore.collection('disciplinas')
        ref.onSnapshot((query) => {
            let disciplinas = []

            query.forEach((doc) => {
                const { nome, curso, capacidade } = doc.data()
                disciplinas.push({
                    _id: doc.id,
                    nome,
                    curso,
                    capacidade
                })//push
            })//forEach
            callback(disciplinas)
        })

    }

    static delete = (firestore, callback, id) => {

        firestore.collection('disciplinas').doc(id).delete()
            .then(
                () => {
                    //console.log(`${nome} apagado.`)
                    callback('ok')
                }
            )
            .catch(
                (error) => {
                    //console.log(error)
                    callback('nok')
                }
            )
    }

    static create = (firestore, callback, disciplina) => {

        firestore.collection('disciplina').add(
            {
                nome: disciplina.nome,
                curso: disciplina.curso,
                capacidade: disciplina.capacidade
            }
        )
            .then(
                () => {
                    callback('ok')
                }
            )
            .catch(
                (error) => {
                    callback('nok')
                }
            )
    }

    static retrieve = (firestore, callback, id) => {

        firestore.collection('disciplinas').doc(id).get()
            .then((doc) => {
                const disciplinas = {
                    nome: doc.data().nome,
                    curso: doc.data().curso,
                    capacidade: doc.data().capacidade
                }
                callback(disciplinas)
            })
            .catch(error => callback(null))

    }

    static edit = (firestore, callback, id, disciplinas) => {

        firestore.collection('estudantes').doc(id).set({
            nome: disciplinas.nome,
            curso: disciplinas.curso,
            capacidade: disciplinas.capacidade
        })
            .then(() => {
                callback('ok')
            })
            .catch(() => {
                callback('ok')
            });
    }
}