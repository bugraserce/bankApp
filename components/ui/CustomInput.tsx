import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Control } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils';

interface CustomInput {
    control: Control<z.infer<typeof authFormSchema>>,
    name: string,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
    return (
        <FormField
            control={control} // Use control prop instead of form.control
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            type="password"
                            {...field}
                        />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomInput
