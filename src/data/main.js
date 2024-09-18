export const phones = async () =>{
   try {
    const res = await fetch('https://data-lesson-13.vercel.app/phones');
    const data =  await res.json();
    return data;
   } catch (error) {
    return error.massage;
   }
}

export const phonesData = async (id) =>{
  try {
   const res = await fetch('https://data-lesson-13.vercel.app/phones${id}');
   const data =  await res.json();
   return data;
  } catch (error) {
   return error.massage;
  }
}


export const notebook = async () => {
  try {
    const res = await fetch('https://data-lesson-13.vercel.app/notebook');
    const data = await res.json();

    return data;
  } catch (error) {
    return error.massage;
  }
}