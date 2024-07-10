



const Poppup = () => {
  return (
    <div className='w-full h-full fixed top-0 left-0 bg-black bg-opacity-15 flex items-center justify-center z-50'>
      <div className="w-1/2 bg-[#2A2B34] border border-white rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white">
          <h2 className="text-xl font-bold text-white">Ajouter un Évènement</h2>
    
        </div>
        {/* Body */}
        <div className="p-4 text-white">

        </div>
        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-white">
          <button 
            
            className="mr-2 bg-gray-500 text-white px-4 py-2 rounded">
            Annuler
          </button>
          <button 
         
            className="bg-blue-500 text-white px-4 py-2 rounded">
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poppup;