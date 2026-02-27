"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  type: z.enum(["Volunteer", "Partner"]),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  action: (data: FormData) => Promise<any>;
}

export function ContactForm({ action }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await action(data);
      toast({ title: "Success", description: "Your message has been sent." });
    } catch (e) {
      toast({
        title: "Error",
        description: "Something went wrong.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          className="mt-1 block w-full border rounded px-3 py-2"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-600 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          className="mt-1 block w-full border rounded px-3 py-2"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Type</label>
        <select
          className="mt-1 block w-full border rounded px-3 py-2"
          {...register("type")}
        >
          <option value="Volunteer">Volunteer</option>
          <option value="Partner">Partner</option>
        </select>
        {errors.type && (
          <p className="text-red-600 text-sm">{errors.type.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Message (optional)</label>
        <textarea
          className="mt-1 block w-full border rounded px-3 py-2"
          rows={4}
          {...register("message")}
        />
      </div>

      <Button disabled={isSubmitting} type="submit">
        Send
      </Button>
    </form>
  );
}
