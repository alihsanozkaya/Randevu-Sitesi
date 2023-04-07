import React from 'react'
import RandevuModal from '../components/RandevuModal';

const doktorlar = [
    {
        id: 1,
        adi: "Mehmet",
        soyadi: "Özkaya",
        brans: "Aile Hekimi",
        resim: "http://sehribanozbicerasm.net/images/uploads/7ad52c2e4aDRMOZKAYA.jpg"
    },
    {
        id: 2,
        adi: "Halil",
        soyadi: "Boyunsuz",
        brans: "Kulak Burun Boğaz",
        resim: "https://www.hatemhastanesi.com.tr/wp-content/uploads/2022/05/2.png"
    },
    {
        id: 3,
        adi: "Mehmet",
        soyadi: "Aksoy",
        brans: "Kardiyolog",
        resim: "https://hastanelerburada.com/assets/img/doktor/prof-dr-mehmet-aksoy-kapak-resmi-8142"
    },
    {
        id: 4,
        adi: "İrfan",
        soyadi: "Kutlar",
        brans: "Kadın Doğum Uzmanı",
        resim: "http://hastanetip.gantep.edu.tr/upload/images/IMG_1163.JPG"
    },
    {
        id: 5,
        adi: "Ömer",
        soyadi: "Bayrak",
        brans: "Üroloji",
        resim: "http://hastanetip.gantep.edu.tr/upload/images/1(1).JPG"
    },
    {
        id: 6,
        adi: "Kadir",
        soyadi: "Sezen",
        brans: "Cildiye",
        resim: "https://devahastanesi.com/upload/hekim/temp/kadir-sezen-resim-166870_w1200_h400.jpg"
    },
    {
        id: 7,
        adi: "Barış",
        soyadi: "Keklik",
        brans: "Plastik Cerrah",
        resim: "https://s3-eu-west-1.amazonaws.com/eniyihekim.com/doctor/2ca056/2ca05626900611bc03c3203ccf0145a6_large.jpg"
    },
    {
        id: 8,
        adi: "Cengiz",
        soyadi: "Bayram",
        brans: "Çocuk Hastalıkları",
        resim: "https://www.tam-med.com.tr/images/hekimler/400x600/MTU5NmVmZjY0NDNiYTg.png"
    },
    {
        id: 9,
        adi: "Murat",
        soyadi: "Karslıgil",
        brans: "Göz Hastalıkları",
        resim: "https://www.netgoz.com.tr/resizer.php?src=uploads/FILE-20171023-07571LFJ7P1JEQK7.png&w=472&h=501&zc=1"
    },
    {
        id: 10,
        adi: "Cemil",
        soyadi: "Ertürk",
        brans: "Ortopedi",
        resim: "https://kanunieah.saglik.gov.tr/Resim/142225/0/cemil-erturkjpg.png"
    },
    {
        id: 11,
        adi: "Mustafa",
        soyadi: "Araz",
        brans: "İç Hastalıkları",
        resim: "https://s3-eu-west-1.amazonaws.com/doktortakvimi.com/doctor/71be7e/71be7ea0b7456f5169a6b94fe281cbc8_large.jpg"
    },
    {
        id: 12,
        adi: "Gökay",
        soyadi: "Alpay",
        brans: "Psikiyatri",
        resim: "https://s3-eu-west-1.amazonaws.com/eniyihekim.com/doctor/7b970f/7b970fa6d0d33a943d652debde9b4426_large.jpg"
    }
]
const DoktorListe = () =>{
    return (
        <>
        <div className="row">
            {doktorlar.map((doktor) => (
                <div className="col-lg-2 mx-4" style={{width: "18rem", marginTop: "30px"}} key={doktor.id}>
                  <div className="card mb-5 mx-1 shadow-sm ">
                    <img src={doktor.resim} alt="." style={{ width: "auto", height: "250px" }}/>
                    <div className="card-body">
                      <h5 className="card-title">{doktor.brans}</h5>
                      <p className="card-text">Adi: {doktor.adi}<br /> Soyadi: {doktor.soyadi}</p>
                      <RandevuModal/>
                    </div>
                  </div>
                </div>
            ))}
        </div>
        </>
      );
}


export default DoktorListe;