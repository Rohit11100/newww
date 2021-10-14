import React, { Component ,useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers ,deleteContact } from './actionPagi';
import { nanoid } from 'nanoid';
import ReactPaginate from "react-paginate";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import {DELETE_CONTACT, USERS_ERROR} from '../action-types';
import axios from 'axios';

class users extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.current)
       

    }
    render() {
        const mm = this.props.a;
        const totel = this.props.totel;
        const current = this.props.current;

       



        const handlePageClick = async (data) => {
           

            let currentpage = data.selected + 1;

            
            console.log(currentpage);

            this.props.getUsers(currentpage)
        };
const myyy=(id)=>{
  this.props.deleteContact(id)
  localStorage.setItem('key', id);

}



        return (
            <div className='container'>
      <Table striped bordered hover>
        <thead>
          <tr>
          {/* <th>id</th> */}
          
            <th>Name</th>
            <th>country</th>
            <th>slogan</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>



          {
            mm.map((w , i)=>{
              let keyy=Object.keys(w);
              console.log(i);
              

              return(
                <tr key={nanoid()}>
                     {/* <td>{nanoid()}</td> */}
            <td>{w.name}</td>
            <td>{w.country}</td>
            <td>{w.slogan}</td>
            <td>{w.id}</td>
            <td><a className='btn btn-primary'  onClick={() => myyy(i)}>Delete </a></td>
            
          </tr>
              )
            })
          }
          
         
        </tbody>
      </Table>


                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={totel}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />



            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    a: state.rA.users,
    totel: state.rB.totel,
    current: state.rB.currentPage

});






export default connect(mapStateToProps, { getUsers , deleteContact })(users)