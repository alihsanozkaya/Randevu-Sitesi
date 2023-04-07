import React from 'react'
import RandevuModal from '../components/RandevuModal'

const kuaforler = [
    {
        id: 1,
        adi: "Kadir",
        soyadi: "Alkan",
        alani: "Erkek kuaförü",
        resim: "https://www.kadiralkan.com.tr/wp-content/uploads/2021/02/kadir-alkan.jpeg"
    },
    {
        id: 2,
        adi: "Şenol",
        soyadi: "Erdoğan",
        alani: "Erkek kuaförü",
        resim: "https://isbh.tmgrup.com.tr/sbh/2021/04/05/650x344/unlu-berberi-olarak-taninan-berber-king-senol-erdo-1617619528979.jpg"
    },
    {
        id: 3,
        adi: "Yıldırım",
        soyadi: "Özdemir",
        alani: "Kadın kuaförü",
        resim: "https://hairist.com.tr/wp-content/uploads/2018/05/ENT_9213-1-600x398.jpg"
    },
    {
        id: 4,
        adi: "Ali",
        soyadi: "Akduru",
        resim: "https://admin.biyografya.com/_docs/photos/461c91ec2696b1fd9510fd1ed039b9c7.jpg"
    }
]

const kuaforListe = () =>{
    return(
        <>
            <div className='row'>
                {kuaforler.map((kuafor) => (
                    <div className='col-lg-2 mx-4' style={{width: "18rem", marginTop: "30px"}} key = {kuafor.id}>
                        <div className="card mb-5 mx-1 shadow-sm ">
                            <img src={kuafor.resim} alt="." style={{ width: "auto", height: "250px" }}/>
                            <div className="card-body">
                            <h5 className="card-title">{kuafor.brans}</h5>
                            <p className="card-text">Adi: {kuafor.adi}<br /> Soyadi: {kuafor.soyadi}</p>
                            <RandevuModal/>
                        </div>
                  </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default kuaforListe;