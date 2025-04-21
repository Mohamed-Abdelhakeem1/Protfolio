import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xanowbnr");
  const formRef = useRef<HTMLFormElement>(null);
  if (state.succeeded) {
    formRef.current?.reset();
  }

  return (
    <main className={`bodyBg pt-20 pb-10`}>
      <section className="container normalText">
        <h2 className="heading text-blue fontRoma">Be in touch</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="container flex flex-col gap-6"
        >
          <div className="mx-auto w-full max-w-[700px]">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" className="normalBg w-full mt-2" />
          </div>
          <div className="mx-auto w-full  max-w-[700px]">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="normalBg w-full mt-2"
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
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <input
            type="submit"
            value={state.submitting ? "..." : state.succeeded ? "Send" : "Send"}
            className="btn smoothy mx-auto text-lg w-fit"
            disabled={state.submitting}
          />
          {state.succeeded && (
            <p className="text-center text-blue -mt-3 font-semibold">
              Thanks for your message! I will get back to you soon.
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
