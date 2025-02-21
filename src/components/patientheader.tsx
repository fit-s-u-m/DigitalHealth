"use client"

function PatientHeader(){
    function handleAddPatient(){
        return(alert("add clicked"))
    }
    return(<>
    <div className="container flex justify-between ">
        <h1 className="font-bold m-2">Patients</h1>
<button className="bg-green-500 m-2 rounded-3xl p-2 " onClick={handleAddPatient}>+ Add Patient</button>
    </div>
    <div className="bg-white shadow-md m-1 rounded-lg p-6 max-w-xs">
    <h2 className="text-gray-600 text-sm">Total patients</h2>
    <p className="text-3xl font-bold text-gray-800">1,234</p>
</div>
    </>)
}
export default PatientHeader