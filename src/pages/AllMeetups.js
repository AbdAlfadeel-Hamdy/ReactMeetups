import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    const loadMeetups = async () => {
      const response = await fetch(
        "https://react-meetups-4782a-default-rtdb.firebaseio.com/meetups.json"
      );
      const data = await response.json();
      const meetups = [];
      for (const key in data) meetups.push({ id: key, ...data[key] });
      setLoadedMeetups(meetups);
      setIsLoading(false);
    };
    loadMeetups();
  }, []);
  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <MeetupList meetups={loadedMeetups} />}
    </section>
  );
};

export default AllMeetupsPage;
