"use client";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { showToast } from "@/components/ui/toast";

function ContactForm() {
  const [state, handleSubmit] = useForm("mdkewvlw");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (state.succeeded) {
      showToast("Message sent successfully!", "success");
      setEmail("");
      setMessage("");
    }
  }, [state.succeeded]);

  return (
    <div className="flex w-full max-w-[35rem]  md:w-[35rem] lg:w-[35rem] xl:w-[35rem] gap-4 p-4 bg-white w-full">
      <div className="flex flex-col gap-4 border rounded-md border-gray-200 w-full">
        <div className="p-4 w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
              <label htmlFor="email">Email Address</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <Textarea
                placeholder="Type your message here."
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button
                variant="default"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
