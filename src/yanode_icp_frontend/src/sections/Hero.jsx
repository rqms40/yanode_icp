import { useState } from 'react';
import { yanode_icp_backend } from 'declarations/yanode_icp_backend';
import { content } from '../constants'; 

const Hero = () => {
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    yanode_icp_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    event.target.elements.name.value = ''; 
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center bg-opacity-80 p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="mb-10 animate-spin-slow">
          <img
            src={content.logo} 
            alt="Yanode logo"
            className="h-40 w-40 rounded-full border-4 border-white"
          />
        </div>

        <h1 className="text-5xl font-extrabold text-gold-shimmer mb-6 text-center">
          {content.title} 
        </h1>

        <p className="text-2xl text-center text-gray-300 mb-8 max-w-2xl px-4">
          {content.description} 
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg text-black max-w-md w-full" 
        >   
          <label htmlFor="name" className="text-lg mb-2">
            {content.greetingText} 
          </label>
          <input
            id="name"
            type="text"
            className="p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none w-full"
            placeholder={content.inputPlaceholder} 
          />
          <button
            type="submit"
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {content.buttonText} 
          </button>
        </form>

        <section id="greeting" className="mt-8 text-3xl text-yellow-500 font-bold">
          {greeting && <p>{greeting}</p>}
        </section>
      </div>
    </section>
  );
}

export default Hero;

