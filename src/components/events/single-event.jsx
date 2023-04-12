import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState();

  const onSubmitHandler = async (e) => {
    console.log(inputEmail);
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }
    try {
      const response = await fetch("/pages/api/email-registration.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      if (!response.ok) throw new Error(`Error:${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
      console.log("POST", data);
    } catch (e) {
      console.log("ERROR", e);
    }
  };
  return (
    <div className="event-single-page">
      <h2>{data.title}</h2>
      <Image width={1000} height={500} src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <form className="email-registration" onSubmit={onSubmitHandler}>
        <label htmlFor="email">Get Registered For this event!</label>
        <input
          ref={inputEmail}
          // type="email"
          name="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
