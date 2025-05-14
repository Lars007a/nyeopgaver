import styles from "./loading.module.css";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return <ClipLoader color="#36d7b7" loading={true} size={40} />;
};

export default Loading;
