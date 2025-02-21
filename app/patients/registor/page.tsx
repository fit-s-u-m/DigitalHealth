"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "firstName must be at least 2 characters.",
  }),
  middleName: z.string().min(2, {
    message: "middleName must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "lastName must be at least 2 characters.",
  }),
  age: z.number().gt(0, {
    message: "age must be greater than zero"
  }),
  nationalId: z.string().min(5, {
    message: "National ID must be at least 5 characters.",
  }),
  recordId: z.string().min(5, {
    message: "Record ID must be at least 5 characters.",
  }),
  sex: z.string().nonempty({
    message: "sex of the patient can't be null ",
  }),
  phoneNumber: z.string()
    .min(10, {
      message: "Phone number must be at least 10 digits long",
    })
    .max(15, {
      message: "Phone number cannot exceed 15 digits",
    })
    .regex(/^[0-9]+$/, {
      message: "Phone number can only contain digits",
    }),

})

export default function Registor() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      age: 1,
      nationalId: "",
      recordId: "",
      sex: "",
      phoneNumber: ""
    }
  })
  const onSubmit = (value: any) => {
    setFullName(`${value?.firstName}  ${value?.middleName}  ${value?.lastName}`)
    console.log(value)
  }
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null
    setFile(selectedFile)
  }
  const handleSubmitFile = () => {
    if (file) {
      console.log("File selected:", file)
      // Handle file upload or further processing here
    } else {
      console.log("No file selected")
    }
  }


  const [fullName, setFullName] = useState<string>("")
  return (
    <div className="h-screen flex items-center bg-gray-100">
      <div>
        <div className="absolute top-4 left-4 bg-white px-4 py-2 shadow-md rounded-md">
          <h2 className="text-lg font-semibold">Patient name:</h2>
          <p className="text-gray-700">{fullName || "No name provided"}</p>
        </div>

        <div className="flex justify-center items-center h-full">
          <div className="grid max-w-sm items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-md">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" onChange={handleFileChange} />
            <Button onClick={handleSubmitFile}>submit </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-8 bg-white shadow-lg rounded-lg ml-auto">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input placeholder="middle name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationalId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>National id</FormLabel>
                  <FormControl>
                    <Input placeholder="national id" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a Sex" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="F">Female</SelectItem>
                          <SelectItem value="M">Male</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input className="w-[180px]" type="number" placeholder="age" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recordId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Record id</FormLabel>
                  <FormControl>
                    <Input placeholder="record id" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

