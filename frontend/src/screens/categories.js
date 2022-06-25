import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { FaFemale,
         FaMale,
         FaWrench,
         FaTools,
         FaFolder,
         FaHome
      }
from 'react-icons/fa';

import Modal from 'react-modal';
import '../css/category.css';

const Category = () => {

  // const navigate = useNavigate();
  // const loginPage = () =>{
  //     navigate("/login", {replace: true});
  //   }
  // const aboutPage = () =>{
  //     navigate("/about", {replace: true});
  // }

  const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Modal.setAppElement('#Category');

  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () =>{
    setIsOpen(true);
  }

  const afterOpenModal = () =>{
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  const closeModal = () =>{
    setIsOpen(false);
  }

  return(

    <section>
        <div className="container">
            <div className="content">
              <a onClick={openModal}>
                <FaFemale />
                <p> Women's Salon & Spa </p>
              </a>
            </div>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Women's Salon & Spa</h2>
              <button onClick={closeModal}>close</button>
              <form>
                <ul>
                  <li> Salon Prime </li>
                  <li> Spa for Women </li>
                  <li> Laser and Advanced facials </li>
                </ul>
              </form>
            </Modal>

            <div className="content">
                <FaMale />
                <p> Men's Salon & Massage </p>
            </div>

            <div className="content">
                <FaTools />
                <p> AC & Appliance Repair </p>
            </div>
            <div className="content">
                <FaFolder />
                <p> Cleaning & Pest Control </p>
            </div>
            <div className="content">
                <FaWrench />
                <p> Electrician, Plumber & Carpenter </p>
            </div>
            <div className="content">
                <FaHome />
                <p> Home painting </p>
            </div>
        </div>

    </section>

  )

}

export default Category;
