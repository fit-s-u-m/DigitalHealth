'use client'

import ExtractText from "@/lib/extractText"
import { geminiResponceType } from "@/types/type"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import CreateModal from "@/components/modal"
import useModal from "../hook/useModal"
import {Register} from "@/components/registor"
import BackButton from "@/components/backButton";

export default function Digitalize(){
 const [data, setData] = useState<geminiResponceType>()
 const [file, setFile] = useState<File | null>(null)
 const [fullName, setFullName] = useState<string>("")
 const {
    isOpen: isCreateModalOpen,
    openModal: openCreateModal,
    closeModal: closeCreateModal,
  } = useModal();

    const patient = {
        "firstName":"Patient first name",
        "dateOfBirth":"Date of birth",
        "sex":"Sex",
        "address": "Address",
        "phoneNumber":"Phone number",
        "emergencyContact": "Emergency contact",
    };
    const medical = {
        "hospitalName":"Hospital name",
        "doctorName":"Doctor's name",
        "registrationDate":"Registration Date",
        "illness":"Illness",
        "medicalHistory":"Medical history"
    };

 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null
    setFile(selectedFile)
 }
 const handleSubmitFile = async () => {
    if (file) {
      console.log("File selected:", file)
      const responce:geminiResponceType = await ExtractText(file)
      console.log(responce)
      if(responce.personalInformation.fistName){
        setFullName(responce.personalInformation.fistName)
      }
      setData(responce)
      openCreateModal()
    } else {
      console.log("No file selected")
    }
 }

    return (
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col ">
              {
             data ? (
                Object.keys(data.personalInformation).map((key, index) => {
                  const value = data.personalInformation[key];

                  return (
                    <div key={index}>
                      <strong>{patient[key]}</strong> ---- 
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
          </div>
          <div className="flex flex-col ">
          <div className="absolute top-6 left-6">
          <BackButton destinationRoute="/" />
    </div>
              {
             data ? (
                Object.keys(data.medicalInformation).map((key, index) => {
                  const value = data.medicalInformation[key];

                  return (
                    <div key={index}>
                      <strong>{medical[key]}</strong> ---- 
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
          </div>
          <div className="grid max-w-sm items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-md">
            <Label htmlFor="picture">Digitalize Document</Label>
            <Input id="picture" type="file" onChange={handleFileChange} />
            <Button className="bg-[#2CAA83] hover:bg-green-800" onClick={handleSubmitFile}>submit </Button>
            { isCreateModalOpen&&(
            <CreateModal isOpen={isCreateModalOpen} onClose={closeCreateModal}  title="Extracted form" >
              <Register initalData={data}></Register>
            </CreateModal>
            )}
          </div>
   
        </div>

    )
}