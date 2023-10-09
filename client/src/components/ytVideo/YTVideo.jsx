import { useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player/youtube";
import "./YTVideo.css";

import { FaPlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

Modal.setAppElement("#root");

const YTVideo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <div className="Grid">
        <div className="ytVideo-wrapper flex justify-center mt-10">
          <picture>
            <img src="/assets/youtube.jpg" alt="youtube" />
          </picture>
          <div
            className="ytVidInner p-6 pl-6
					"
            popup-trigger
            onClick={() => setModalIsOpen(true)}
          >
            <i className="text-xl">
              <FaPlay className="text-xl" />
            </i>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Nl_4MWNh08I"
          controls
          width="100%"
          height="100%"
        />
        <a href="##" onClick={() => setModalIsOpen(false)}>
          <i>
            <RxCross2 />
          </i>
        </a>
      </Modal>
    </div>
  );
};

export default YTVideo;
