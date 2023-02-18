import { motion } from "framer-motion";
import Backdrop from "../Backdrop/backdrop";

const dropIn = {
  hidden: {},
  visible: {},
  exit: {},
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
      ></motion.div>
    </Backdrop>
  );
};

export default Modal;
