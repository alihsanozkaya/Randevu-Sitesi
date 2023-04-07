import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { PostContext } from "../context/PostContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const RandevuModal = ({ ToastContainer }) => {
  const notify = () => toast.success("Randevunuz başarıyla oluşturuldu.");
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const { form, setForm, createRandevu } = useContext(PostContext);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="btn btn-success" onClick={openModal}>
        Randevu Al
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Randevu Sayfası</h2>
        <form>
          <input
            className="form-control my-3"
            value={form.isim}
            placeholder="Adınızı soyadınız"
            name="isim"
            onChange={(e) => setForm({...form, name: e.target.value})}
          />
          <input
            className="form-control my-2"
            value={form.id}
            type="text"
            placeholder="TC Kimlik Numaranız"
            name="id"
            onChange={(e) => setForm({...form, tc: e.target.value})}
          />
          <label>Randevu Tarihi</label>
          <input
            type="date"
            className="form-control"
            value={form.tarih}
            title="Randevu Tarihi"
            name="tarih"
            onChange={(e) => setForm({...form, date: e.target.value})}
          />
        </form>
        <button
          className="btn btn-success my-3"
          onClick={(e) => {
            e.preventDefault();
            createRandevu();
            closeModal();
            notify();
          }}
        >
          Kaydet
        </button>
      </Modal>
    </div>
  );
};
export default RandevuModal;
