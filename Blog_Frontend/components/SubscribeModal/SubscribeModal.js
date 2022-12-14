import { useRef } from "react";
import styles from "../../styles/components/SubscribeModal/SubscribeModal.module.scss";

const SubscribeModal = ({ changeModalDisplay, displayModal }) => {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
    changeModalDisplay();
  };

  return (
    <div
      className={
        displayModal
          ? `${styles["modal"]} ${styles["show"]}`
          : `${styles["modal"]}`
      }
      id="subscribeModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="subscribeModalLabel"
      onClick={() => changeModalDisplay()}
    >
      <div
        className={styles["modal-dialog"]}
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["modal-content"]}>
          <div className={styles["modal-header"]}>
            <p className={styles["modal-title"]} id="subscribeModalLabel">
              Subscribe to my newsletter
            </p>
            <button
              type="button"
              className={styles["modal-close-button"]}
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => changeModalDisplay()}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className={styles["modal-body"]}>
            <form onSubmit={subscribeUser}>
              <div className={styles["modal-form-group"]}>
                <label htmlFor="subscribeEmail">Email address</label>
                <input
                  type="email"
                  className={styles["modal-form-control"]}
                  id="subscribeEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  autoCapitalize="off"
                  autoCorrect="off"
                  ref={inputRef}
                />
                <small id="emailHelp" className={styles["modal-form-text"]}>
                  I'll never share your email with anyone else.
                </small>
              </div>
              <button
                type="submit"
                value=""
                name="subscribe"
                className={styles["modal-form-submit-button"]}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
