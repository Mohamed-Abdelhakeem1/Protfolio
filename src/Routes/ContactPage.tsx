import { useForm, ValidationError } from "@formspree/react";
import { useRef, useState } from "react";

export interface formInputsType {
  name: string;
  email: string;
  msg: string;
}

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xanowbnr");
  const formRef = useRef<HTMLFormElement>(null);
  const [formInputs, setFormInputs] = useState<formInputsType>({
    name: "",
    email: "",
    msg: "",
  });

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    if (state.succeeded) {
      formRef.current?.reset();
      setFormInputs({ name: "", email: "", msg: "" });
    }
    console.log("Submitted");
    console.log(formInputs);
  };

  const availability =
    formInputs.name.length > 0 &&
    formInputs.email.length > 0 &&
    formInputs.msg.length > 0;

  return (
    <main className="bodyBg pt-20 pb-10">
      <section className="container normalText">
        <h2 className="heading text-blue fontRoma">Be in touch</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmitForm}
          className="container flex flex-col gap-6"
        >
          <div className="mx-auto w-full max-w-[700px]">
            <label htmlFor="name">Name:</label>
            <input
              autoComplete="off"
              type="text"
              id="name"
              className="normalBg w-full mt-2"
              onChange={(e) =>
                setFormInputs({ ...formInputs, name: e.target.value })
              }
            />
          </div>
          <div className="mx-auto w-full  max-w-[700px]">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              className="normalBg w-full mt-2"
              onChange={(e) =>
                setFormInputs({ ...formInputs, email: e.target.value })
              }
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mx-auto w-full  max-w-[700px]">
            <label htmlFor="area">Message:</label>
            <textarea
              id="area"
              name="message"
              className="normalBg w-full mt-2 h-50 resize-none"
              onChange={(e) =>
                setFormInputs({ ...formInputs, msg: e.target.value })
              }
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          {state.submitting ? (
            <p className="mx-auto text-3xl font-bold">........</p>
          ) : (
            <input
              type="submit"
              value="Send"
              className="btn smoothy mx-auto text-lg w-fit"
              disabled={state.submitting || !availability}
            />
          )}
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
