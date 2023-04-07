import React from 'react'
import RandevuModal from '../components/RandevuModal'


const avukatlar = [
    {
        id: 1,
        adi: "Ali Mahir",
        soyadi: "Başarır",
        resim: "https://www.basarirhukuk.com.tr/wp-content/uploads/2017/05/avukat-ali-mahir-basarir.jpg"
    },
    {
        id: 2,
        adi: "Mansur",
        soyadi: "Yavaş",
        resim: "https://pbs.twimg.com/profile_images/1421446532944048132/QhPEH7Xw_400x400.jpg"
    },
    {
        id: 3,
        adi: "Ersan",
        soyadi: "Şen",
        resim: "https://sen.av.tr/panel/upload/1597922418_1.jpg"
    }
]

const AvukatListe = () => {
  return (
    <>
            <div className='row'>
                {avukatlar.map((avukat) => (
                    <div className='col-lg-2 mx-4' style={{width: "18rem", marginTop: "30px"}} key = {avukat.id}>
                        <div className="card mb-5 mx-1 shadow-sm ">
                            <img src={avukat.resim} alt="." style={{ width: "auto", height: "250px" }}/>
                            <div className="card-body">
                            <h5 className="card-title">{avukat.brans}</h5>
                            <p className="card-text">Adi: {avukat.adi}<br /> Soyadi: {avukat.soyadi}</p>
                            <RandevuModal/>
                        </div>
                  </div>
                </div>
                ))}
            </div>
        </>
  )
}

export default AvukatListe