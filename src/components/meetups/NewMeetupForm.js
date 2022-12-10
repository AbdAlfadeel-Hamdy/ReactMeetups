import Card from "../../ui/Card";
import styles from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows={5} />
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
