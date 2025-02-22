"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ADD_PATIENT } from "@/queries/addPatients";


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  geminiResponceType } from "@/types/type";
import { useMutation } from "@apollo/client";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  middleName: z
    .string()
    .min(2, { message: "Middle name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  age: z
    .number({ invalid_type_error: "Age must be a number" })
    .gt(0, { message: "Age must be greater than zero" }),
  nationalId: z
    .string()
    .min(5, { message: "National ID must be at least 5 characters." }),
  sex: z.string().nonempty({ message: "Sex of the patient can't be empty." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long" })
    .max(15, { message: "Phone number cannot exceed 15 digits" })
    .regex(/^[0-9]+$/, { message: "Phone number can only contain digits" }),
});

export function Register({initalData}:{initalData?:geminiResponceType}) {
  const initData = initalData?.personalInformation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: initData?.fistName||"",
      middleName: initData?.middleName||"",
      lastName: initData?.lastName||"",
      age: initData?.age || 1,
      dateOfBirth:initData?.dateOfBirth ,
      nationalId: "",
      recordId: "",
      sex: initData?.sex||"",
      phoneNumber: initData?.phoneNumber || "",
    },
  });
  const [addPatient, { data, loading, error }] = useMutation(ADD_PATIENT);
    const patient = {
        "firstName":"first_name",
        "middleName":"middle_name",
        "lastName":"last_name",
        "nationalId":"national_id",
        "age":"age",
        "sex":"sex",
        "address": "address",
        "emergencyContact": "emergency_contact",
    };

  const onSubmit = async  (value: any) => {
  
    try {
        const toDatabaseValue = Object.keys(patient).reduce((acc, key) => {
            if (value[key] !== undefined) {
                acc[patient[key]] = value[key]; // Map patient[key] to the value[key]
              }
              else {
                acc[patient[key]] =''
              }
            return acc;
          }, {} as Record<string, any>); // Ensure it's an object
        // const toDatabaseValue= Object.keys(value).map(value=>patient[value])
        console.log(toDatabaseValue)
        const { data } = await addPatient({
        variables: {
            ...toDatabaseValue, // Spreading form values
        },
        });
        console.log("Form Submitted Successfully:", data);
    } catch (err) {
        console.error("Mutation Error:", err);
    }
  }

  return (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
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
                    <Input placeholder="Middle name" {...field} />
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
                    <Input placeholder="Last name" {...field} />
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
                  <FormLabel>National ID</FormLabel>
                  <FormControl>
                    <Input placeholder="National ID" {...field} />
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
                  <FormLabel>Sex</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
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
                    <Input
                      type="number"
                      placeholder="Age"
                      value={field.value}
                      onChange={(e) =>
                        field.onChange(Number(e.target.value))
                      }
                    />
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
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#2CAA83] hover:bg-green-700 text-white py-2"
            >
              Submit
            </Button>
          </form>
        </Form>
  );
}