import React from 'react'
import { InputWithButton } from "./InputWithButton";

export const Newsletter = () => {
  return (
    <div className="mt-48 flex flex-col items-center gap-y-6 text-center">
      <p className='text-4xl font-bold'>Subscribe Our Newsletter</p>
      <p className="text-lg">Get the latest information and promo offers directly</p>
      <InputWithButton />
      <p className="text-9xl font-bold opacity-5 absolute -z-10">Newsletter</p>
    </div>
  );
}
