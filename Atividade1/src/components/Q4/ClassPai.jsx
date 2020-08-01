import React, {Component} from 'react';
import ClassFilho from './ClassFilho'

export default class ClassPai extends Component{
    render(){
        return(
            <div>
                <ClassFilho nome ="Ivan" curso="Si" cidade="Caninde"/>
            </div>
        )
    }
}