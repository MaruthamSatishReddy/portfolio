import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, Resolver } from 'react-hook-form';
import { resolveAny } from 'dns';
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = handleSubmit(
    (formData) =>
      (window.location.href = `mailto:smarutham@gmail.com?subject=${formData.subject} & body=My Name is ${formData.name}.${formData.message} (${formData.email})`)
  );
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[2px] text-gray-500 text-xl">
        Contact
      </h3>
      <div className="flex flex-col">
        <h4 className="text-sm font-semibold text-center">
          I have got just what you need .
          <span className="decoration-[#F7AB0A] underline">Lets talk</span>
        </h4>
        <div>
          <div className="flex items-center space-x-5 justify-center space-y-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm">+918867671633</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm">smarutham@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm">1234 Developer Lane</p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-1 w-fit max-auto top-10"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#F7AB0A]/70 py-2 px-5 text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
