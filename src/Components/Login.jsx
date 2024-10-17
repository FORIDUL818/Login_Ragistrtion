import { Link } from "react-router-dom"

function Login() {
  return (
    <div>
    <div className="bg-fixed bg-no-repeat bg-center bg-cover text-[18px] text-gray w-full p-[100px] flex justify-between items-center flex-wrap gap-5" style={{ backgroundImage: "url('../../imgases/forest-5855196_960_720.webp')" }}>
   {/* ragistration section start */}
    <div className=" w-full h-screen flex justify-center items-start">
        <div className=" w-[1000px]  fixed flex gap-1">
        {/* Ragistration Imagase  */}
        <div className=" w-[50%]  bg-white h-[515px]">
            <img className=" object-fill h-full w-full opacity-70" src="https://images.pexels.com/photos/3139497/pexels-photo-3139497.jpeg?cs=srgb&dl=pexels-achraf210-3139497.jpg&fm=jpg"/>
         </div>
        {/* Ragistration Imagase  */}
        {/* Ragistraion Form start */}
         <div className=" w-[50%] h-full bg-white ">
             <div className=" bg-dodger-blue p-5 text-white uppercase text-center text-[26px] border-b-2 border-yellow shadow-md"> Ragistraion Form</div>
             <div className=" p-5 bg-black w-full">
               <form className=" gap-4 flex flex-col">
                
                 <h1>Email</h1> 
                  <input className=" p-1 rounded-md border-2 border-dodger-blue w-full"/>
                 <h1>eamilerr</h1> 
                 <h1>Password</h1>
                  <input className=" p-1 rounded-md border-2 border-dodger-blue w-full"/>
                 <h1>passworderr</h1> 
                  <button type="submit" className=" w-full bg-dodger-blue p-2 rounded-md text-[#fff] uppercase">Login</button>
                   <div className=" flex justify-between items-center w-full p-3 ">
                     <p className=" text-light-steal-blue">already have an acount</p>
                     <Link to="/ragistration" type="button" className=" uppercase text-deep-pink">Ragistraion</Link>
                   </div>
                </form>
             </div>
         </div>
        {/* Ragistraion Form start */}
        </div>
    </div>
   {/* ragistration section end*/}
 </div>

  </div>

  )
}

export default Login