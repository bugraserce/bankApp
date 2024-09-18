"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";

const AuthForm = ({ type }: { type: string }) => {
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    function onSubmit(values: z.infer<typeof authFormSchema>) {
        console.log(values);
    }

    return (
        <section className=" bg-green-700 h-screen flex flex-col items-center justify-center min-h-screen ">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">{type === 'register' ? 'Register' : 'Login'}</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <CustomInput 
                            control={form.control} 
                            name="username" 
                            label="Username" 
                            placeholder="Enter your username" />

                        <CustomInput 
                            control={form.control} 
                            name="password" 
                            label="Password" 
                            placeholder="Enter your password" />

                        <Button 
                            type="submit" 
                            className="w-full bg-green-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                            {type === 'register' ? 'Register' : 'Login'}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default AuthForm;
