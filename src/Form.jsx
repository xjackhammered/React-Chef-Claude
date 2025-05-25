export default function Form(){
    
    return (
            
        <form className="flex justify-center mt-12 space-x-5" method="POST" action="">
      
            <input className="rounded-xl w-xl border-2" type="text" id="ingredient" name="ingredient" placeholder="e.g oregano" /><br />
            <input className="rounded-xl p-2 border-2 bg-black text-white font-bold" type="submit" value="+ Add Ingredient" />
             
        </form>
        
    );
}