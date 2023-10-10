import styles from "./customLoadder.module.css";

const CustomLoadder = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`${styles.loader}`}></div>
    </div>
  );
};

export default CustomLoadder;
