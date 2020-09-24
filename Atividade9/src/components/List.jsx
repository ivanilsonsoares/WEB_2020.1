import React, { Component } from 'react'

import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'

const ListPage = () => (
    <FirebaseContext.Consumer>
        {firebase => <List firebase={firebase} />}
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props) {
        super(props)
        this.state = { disciplina: [] }
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }
    componentDidMount() {
        this.ref = this.props.firebase.getFirestore().collection('disciplina')
        this.ref.onSnapshot(this.alimentarEstudante.bind(this))
    }

    alimentarEstudante(query) {
        let disciplina = []
        query.forEach(
            (doc) => {
                const { nome, curso, capacidade } = doc.data()
                disciplina.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        capacidade,
                    }
                )
            }
        )
        this.setState({ disciplina: disciplina })
    }

    montarTabela() {
        if (!this.state.disciplina) return
        if (this.state.loading) return this.loadingSpinner()
        return this.state.disciplina.map(
            (est, i) => {
                return <TableRow disciplina={est}
                    key={i}
                    apagarElementoPorId={this.apagarElementoPorId}
                    firebase={this.props.firebase} />
            }
        )
    }

    apagarElementoPorId(id) {
        let disciplinaTemp = this.state.disciplina
        for (let i = 0; i < disciplinaTemp.length; i++) {
            if (disciplinaTemp[i]._id === id) {
                disciplinaTemp.splice(i, 1)
            }
        }
        this.setState({ disciplina: disciplinaTemp })
    }
    render() {
        return (
            <div>
                <p>List Disciplina</p>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPage