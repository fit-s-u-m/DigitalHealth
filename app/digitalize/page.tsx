'use client'

import ExtractText from "@/lib/extractText"
import { geminiResponceType } from "@/types/type"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import CreateModal from "@/components/modal"
import useModal from "../hook/useModal"


export default function Digitalize(){
 const [data, setData] = useState<geminiResponceType>()
 const [file, setFile] = useState<File | null>(null)
 const [fullName, setFullName] = useState<string>("")
 const {
    isOpen: isCreateModalOpen,
    openModal: openCreateModal,
    closeModal: closeCreateModal,
  } = useModal();

  const columns = (): { header: string; accessor: string }[] => {
    const patient = [
        "Patient full name",
        "Date of birth",
        "Sex",
        "Address",
        "Phone number",
        "Emergency contact",
        "Weight",
        "Height",
    ];
    const medicalInfo = [
        "Hospital name",
        "Doctors name",
        "Registration Date",
        "illness",
        "medical history"
    ];
    const patientAccessor = [
        "patientFullName",
        "dateOfBirth",
        "gender",
        "address",
        "phoneNumber",
        "emergencyContact",
        "weight" ,
        "height"
    ];
    const medicalInfoAccessor = [
        "hospitalName",
        "doctorName",
        "registrationDate",
        "illness",
        "medicalHistory"
    ]

 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null
    setFile(selectedFile)
 }
 const handleSubmitFile = async () => {
    if (file) {
      console.log("File selected:", file)
      const responce:geminiResponceType = await ExtractText(file)
      console.log(responce)
      if(responce.personalInformation.patientFullName){
        setFullName(responce.personalInformation.patientFullName)
      }
      setData(responce)
    } else {
        openCreateModal()
      console.log("No file selected")
    }
 }

    return (
        <div className="flex justify-center items-center h-full">
          <div className="grid max-w-sm items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-md">
             {
             data ? (
                Object.keys(data.personalInformation).map((key, index) => {
                  const value = data.personalInformation[key];

                  return (
                    <div key={index}>
                      <strong>{key}</strong> ---- 
                      {value && typeof value === 'object' ? (
                        <ul>
                          {Object.entries(value).map(([subKey, subValue], subIndex) => (
                            <li key={subIndex}>
                              <strong>{subKey}</strong>: {subValue ?? 'N/A'}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        value ?? 'N/A'
                      )}
                    </div>
                  );
                })
                ) : null
              }
            <Label htmlFor="picture">Digitalize Document</Label>
            <Input id="picture" type="file" onChange={handleFileChange} />
            <Button onClick={handleSubmitFile}>submit </Button>
            { isCreateModalOpen&&(
            <CreateModal isOpen={isCreateModalOpen} onClose={closeCreateModal}  title="Erorr" >
                hello world
            </CreateModal>
            )}
          </div>
        </div>

    )
}