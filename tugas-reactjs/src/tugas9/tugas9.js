import React from 'react';
import { useState } from 'react';
import './tugas9.css';

const Tugas9 = () => {
    let [angka, setAngka]  =  useState(1)

    const tambahAngka = () => {
        setAngka(angka+1)
      }

    return (
        <div className="container">
            <p className="textAngka">{angka}</p>
            <button className="btnTambah" onClick={tambahAngka}>Tambah</button>
            {
                angka >= 11 ? <p>State count sudah lebih dari 10!!</p> : ""
            }
        </div>
    );
}

export default Tugas9;