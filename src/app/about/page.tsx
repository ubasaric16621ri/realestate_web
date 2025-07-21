"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            At EstateIQ, we&#39;re transforming real estate discovery with advanced analytics and global accessibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-2xl font-semibold">🌍 Our Mission</h2>
              <p className="text-muted-foreground">
                To simplify real estate investment and discovery using AI-powered insights and up-to-date global data.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-2xl font-semibold">🔍 What We Do</h2>
              <p className="text-muted-foreground">
                We aggregate and analyze real estate data from around the world, presenting the most relevant listings in an intuitive, easy-to-use platform.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-2xl font-semibold">💡 Why EstateIQ?</h2>
              <p className="text-muted-foreground">
                Whether you&#39;re a buyer, investor, or simply curious, our mission is to empower you with clarity and confidence in real estate decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-2xl font-semibold">🚀 Our Future</h2>
              <p className="text-muted-foreground">
                We&#39;re building tools that adapt to your needs. From predictive pricing to international expansion, EstateIQ is just getting started.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <p className="text-muted-foreground">
            Founded in 2024, EstateIQ began as a small group of enthusiasts passionate about demystifying property markets. Today our platform helps thousands of users explore opportunities worldwide.
          </p>
          <p className="text-muted-foreground">
            Our commitment is to blend cutting-edge analytics with a human-centered approach so that finding your next investment is both intuitive and transparent.
          </p>
        </div>

        <Separator />

        <motion.div
          className="text-center pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground">© {new Date().getFullYear()} EstateIQ. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}