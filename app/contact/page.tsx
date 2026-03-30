'use client';

export default function Contacts() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-3 pt-20 px-5 md:px-0">
      <h1 className="text-4xl md:text-6xl font-bold text-primary">Contact</h1>
      <p className="font-sourcesans text-black font-normal mb-5 md:mb-10 text-s md:text-xl">Feel free to contact us. We'd like to hear from you!</p>
      <form className="flex flex-col gap-8 w-full max-w-4xl bg-primary md:bg-transparent rounded-[30px] p-5" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-black font-bold">Name*</label>
            <input
              type="text"
              className="px-[22px] py-[14px] text-[15px] md:text-2xl border border-solid border-[1px] border-brown rounded-[10px] md:rounded-full placeholder-primary focus:outline-none max-h-[48px] bg-white"
            />
            <label className="text-black font-bold">Email*</label>
            <input
              type="email"
              className="px-[22px] py-[14px] text-[15px] md:text-2xl border border-solid border-[1px] border-brown rounded-[10px] md:rounded-full placeholder-primary focus:outline-none max-h-[48px] bg-white"
            />
            <label className="text-black font-bold">Phone</label>
            <input
              type="tel"
              className="px-[22px] py-[14px] text-[15px] md:text-2xl border border-solid border-[1px] border-brown rounded-[10px] md:rounded-full placeholder-primary focus:outline-none max-h-[48px] bg-white"
            />
          </div>
          
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-black font-bold">Message</label>
            <textarea
              className="p-5 text-[15px] md:text-2xl border border-solid border-[1px] border-brown rounded-[10px] md:rounded-[50px] placeholder-primary focus:outline-none flex-1 resize-none min-h-[142px] bg-white"
            />
          </div>
        </div>

        <button type="submit" className="px-[30px] py-2 md:px-10 md:py-5 text-[18px] md:text-2xl leading-[28px] bg-brown text-white rounded-full box-border border-2 border-transparent hover:border-brown hover:bg-transparent hover:text-brown active:border-transparent active:bg-softgray active:text-gray w-full md:w-auto md:self-end">
          Send Message
        </button>
        {/* <p className="font-sourcesans text-black text-center mt-2">
          Please contact us at <a href="mailto:sanjay_mishra@brown.edu" className="text-black hover:underline">sanjay_mishra@brown.edu</a> with any questions!
        </p> */}
      </form>

    </div>
  );
}
