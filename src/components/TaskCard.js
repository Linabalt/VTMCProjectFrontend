import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { removeTaskById } from '../actions/projects';
import { Link } from 'react-router-dom';

export default class TaskCard extends Component {


    handleDelete = (event) => {
        event.preventDefault();
        Axios.delete(`http://localhost:8080/projects/${this.props.projectId}/tasks/${this.props.id}`);
        this.props.dispatch(removeTaskById(this.props.projectId, this.props.id));

    }

    render() {
        return (

            <tbody>
                <tr className="row">
                    <td className="col-1"> {this.props.id} </td>
                    <td className="col-4"> {this.props.name} </td>
                    <td className="col-1 text-center"> {this.props.priority} </td>
                    <td className="col-1 text-center"> {this.props.status} </td>
                    <td className="col-1 text-center"> {this.props.deadline} </td>
                    <td className="col-1 text-center"> {this.props.created} </td>
                    <td className="col-1 text-center"> {this.props.modified} </td>
                    <td className="col-1 text-center"> <Link to={`/projects/${this.props.projectId}/tasks/${this.props.id}/edit`}><FontAwesomeIcon icon={faPencilAlt} /></Link></td>
                    <td className="col-1 text-center" onClick={this.handleDelete}> <span><FontAwesomeIcon icon={faTrashAlt} /> </span></td>
                </tr>
            </tbody>
        )
    }
}
