'use client';

export default function Contacts() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-6xl font-bold text-primary mb-[60px]">Contact</h1>
      <form className="flex flex-col gap-8 w-full max-w-4xl" onSubmit={handleSubmit}>
        <div className="flex gap-8">
          <div className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Name*"
              className="px-6 py-3 text-2xl border border-solid border-[1px] border-brown rounded-full placeholder-gray focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="px-6 py-3 text-2xl border border-solid border-[1px] border-brown rounded-full placeholder-gray focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="px-6 py-3 text-2xl border border-solid border-[1px] border-brown rounded-full placeholder-gray focus:outline-none"
            />
          </div>
          
          <div className="flex flex-col flex-1">
            <textarea
              placeholder="Message"
              className="p-5 text-2xl border border-solid border-[1px] border-brown rounded-[50px] placeholder-gray focus:outline-none flex-1 resize-none"
            />
          </div>
        </div>

        <button type="submit" className="px-[40px] py-[20px] text-2xl leading-[28px] bg-primary text-white rounded-full box-border border-2 border-transparent hover:border-brown hover:bg-transparent hover:text-brown active:border-transparent active:bg-softgray active:text-gray self-end">
          Send Message
        </button>
      </form>

    </div>
  );
}
