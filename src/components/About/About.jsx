import AvailablesPlatforms from "../AvaliablesPlataforms/AvaliablesPlataforms";

function About() {
   return (
      <section
         id="about"
         className="
         h-full 
         flex 
         flex-col 
         justify-center 
         items-center 
         gap-20 
         bg-[linear-gradient(to_bottom,_#261e1e,_#5b4949)] 
         pb-60"
      >

         <AvailablesPlatforms className="pb-30" />

         <h2
            className="
            text-[6rem] 
            font-bold 
            uppercase
            text-[#fff]"
         >
            Sobre
         </h2>

         <p
            className="
            max-w-400 
            text-[2.5rem]
            sm:text-[3rem]
            text-center
            text-[#fff]
            font-bold 
            uppercase
            px-15"
         >
            Seis anos após os eventos de Resident Evil 2, Leon Kennedy, sobrevivente de Raccoon City, foi enviado a um vilarejo isolado na Europa para investigar o desaparecimento da filha do presidente dos Estados Unidos. O que ele descobre lá é diferente de tudo o que ele já viu antes.
         </p>
      </section>
   );
};

export default About;