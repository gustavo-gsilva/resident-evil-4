function ImportantNotice() {
   return (
      <section
         className="
         flex 
         flex-col 
         justify-center 
         items-center 
         gap-30 
         px-15"
      >
         <h1
            className="
            text-[6rem] 
            font-bold
         text-[#fff]"
         >
            Aviso Importante
         </h1>

         <h2
            className="
            max-w-400 
            text-[2.5rem]
            sm:text-[3rem]
         text-[#fff]
            font-bold 
            uppercase
            text-center"
         >
            Este projeto foi desenvolvido unicamente para fins de estudo e aprendizado, sem qualquer intenção de obtenção de lucro ou finalidade comercial. Todos os direitos autorais e propriedades intelectuais relacionadas aos conteúdos, personagens, marcas e elementos utilizados pertencem aos seus respectivos criadores e detentores legais. Este trabalho não tem vínculo oficial com nenhuma empresa ou entidade e é destinado exclusivamente para uso educacional e demonstrativo.
         </h2>
      </section>
   );
};

export default ImportantNotice;