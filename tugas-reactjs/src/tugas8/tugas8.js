import React from 'react';


const Tugas8 = (props) => {
    return (
        <div className="container">
            <h1>Data diri peserta kelas Reactjs</h1>
            <hr></hr>
            <ul>
                <li><b>Nama Lengkap:</b> {props.name}</li>
                <li><b>Email:</b> {props.email}</li>
                <li><b>Batch Pelatihan:</b> {props.batch}</li>
            </ul>
        </div>
    );
}



export default Tugas8;