"use client"

import React, { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, User, FileText, Briefcase, ArrowLeft, ArrowRight, Loader2, Badge } from "lucide-react"
import Link from "next/link"
import { uploadImage, uploadRaw } from "@/utils/cloudinary"
import { toast } from "sonner"
import { createAdmission } from "@/utils/admissions" // can rename to createApplication in future
import { motion } from "framer-motion"

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    fullName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    phone: "",
    email: "",
    address: "",

    // Step 2: Professional Details
    jobCategory: "",
    yearsExperience: "",
    education: "",
    skills: "",
    languages: "",
    preferredCountry: "",
    positionApplied: "",

    // Step 3: Documents
    resume: null as File | null,
    passport: null as File | null,
    certificates: null as File | null,

    // Step 4: Consent
    termsAccepted: false,
    dataConsent: false,
  })

  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }))
  }

  const validateStep = () => {
    if (currentStep === 1) {
      return formData.fullName && formData.gender && formData.phone && formData.email && formData.nationality
    }
    if (currentStep === 2) {
      return formData.jobCategory && formData.positionApplied && formData.education
    }
    return true
  }

  const nextStep = () => {
    if (validateStep()) setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    else alert("Please complete all required fields before continuing.")
  }

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)

    try {
      const uploads: any[] = []
      if (formData.resume) {
        const res = await uploadRaw(formData.resume)
        uploads.push({ type: "Resume", url: res.secure_url })
      }
      if (formData.passport) {
        const res = await uploadRaw(formData.passport)
        uploads.push({ type: "Passport", url: res.secure_url })
      }
      if (formData.certificates) {
        const res = await uploadRaw(formData.certificates)
        uploads.push({ type: "Certificates", url: res.secure_url })
      }

      const payload = {
        ...formData,
        attachments: uploads,
      }

      await createAdmission(payload as any)
      toast.success("Your application has been submitted successfully!")

      setFormData({
        fullName: "",
        gender: "",
        dateOfBirth: "",
        nationality: "",
        phone: "",
        email: "",
        address: "",
        jobCategory: "",
        yearsExperience: "",
        education: "",
        skills: "",
        languages: "",
        preferredCountry: "",
        positionApplied: "",
        resume: null,
        passport: null,
        certificates: null,
        termsAccepted: false,
        dataConsent: false,
      })
      setCurrentStep(1)
    } catch (err) {
      console.error(err)
      toast.error("There was an issue submitting your application.")
    } finally {
      setSubmitting(false)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-full">
                <User className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Personal Information</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InputField id="fullName" label="Full Name *" value={formData.fullName} onChange={handleInputChange} />
              <SelectField id="gender" label="Gender *" value={formData.gender} options={["Male", "Female", "Other"]} onChange={handleInputChange} />
              <InputField id="dateOfBirth" label="Date of Birth" type="date" value={formData.dateOfBirth} onChange={handleInputChange} />
              <InputField id="nationality" label="Nationality *" value={formData.nationality} onChange={handleInputChange} />
              <InputField id="phone" label="Phone Number *" value={formData.phone} onChange={handleInputChange} />
              <InputField id="email" label="Email *" type="email" value={formData.email} onChange={handleInputChange} />
              <div className="md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-full">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Professional Background</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <SelectField id="jobCategory" label="Job Category *" value={formData.jobCategory} options={["Healthcare", "Hospitality", "Construction", "Security", "Domestic Work", "Other"]} onChange={handleInputChange} />
              <InputField id="positionApplied" label="Position Applied For *" value={formData.positionApplied} onChange={handleInputChange} />
              <InputField id="education" label="Highest Level of Education *" value={formData.education} onChange={handleInputChange} />
              <InputField id="yearsExperience" label="Years of Experience" value={formData.yearsExperience} onChange={handleInputChange} />
              <InputField id="languages" label="Languages Spoken" value={formData.languages} onChange={handleInputChange} />
              <InputField id="preferredCountry" label="Preferred Country of Work" value={formData.preferredCountry} onChange={handleInputChange} />
              <div className="md:col-span-2">
                <Label htmlFor="skills">Skills Summary</Label>
                <Textarea id="skills" value={formData.skills} onChange={(e) => handleInputChange("skills", e.target.value)} rows={4} />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <FileUploadField id="resume" label="Resume / CV (PDF) *" file={formData.resume} accept="application/pdf" onChange={handleFileChange} />
            <FileUploadField id="passport" label="Passport Copy (PDF) *" file={formData.passport} accept="application/pdf" onChange={handleFileChange} />
            <FileUploadField id="certificates" label="Certificates (Optional, PDF)" file={formData.certificates} accept="application/pdf" onChange={handleFileChange} />
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <CheckboxRow id="termsAccepted" label={<>I accept the <Link href="/policies" className="text-primary">Terms & Conditions</Link> *</>} value={formData.termsAccepted} onChange={handleInputChange} />
            <CheckboxRow id="dataConsent" label="I consent to the collection and processing of my data for recruitment purposes *" value={formData.dataConsent} onChange={handleInputChange} />
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
            {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted/50 to-background">
      {/* 🌊 Animated Curved Background */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,200 Q150,100 300,200 T600,200 T900,200 T1200,200"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,300 Q150,400 300,300 T600,300 T900,300 T1200,300"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3}}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0b0f7e" />
            <stop offset="100%" stopColor="#4dfbdf" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4dfbdf" />
            <stop offset="100%" stopColor="#0b0f7e" />
          </linearGradient>
        </defs>
      </motion.svg>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Find your next opportunity</h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                    LinkPark connects skilled professionals with trusted international employers. Submit your application today and take the next step in your global career.
                  </p>
                </div>
            </div>
            
      
      </section>


      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Progress value={progress} className="h-2 mb-6" />
          <Card>
            <CardHeader>
              <CardTitle>Candidate Application Form</CardTitle>
              <CardDescription>Please complete all required fields marked with *</CardDescription>
            </CardHeader>
            <CardContent>
              {renderStepContent()}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                  <ArrowLeft className="h-4 w-4" /> Previous
                </Button>
                {currentStep < totalSteps ? (
                  <Button onClick={nextStep}><span>Next</span><ArrowRight className="h-4 w-4" /></Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={submitting || !formData.termsAccepted || !formData.dataConsent}>
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle className="h-4 w-4" />}
                    <span>{submitting ? "Submitting..." : "Submit Application"}</span>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  )
}

/* Small helper components */

type InputFieldProps = {
  id: string
  label: React.ReactNode
  value: string
  onChange: (id: string, value: string) => void
  type?: string
}

const InputField = ({ id, label, value, onChange, type = "text" }: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(id, e.target.value)} />
    </div>
  )
}

type SelectFieldProps = {
  id: string
  label: React.ReactNode
  value: string
  options: string[]
  onChange: (id: string, value: string) => void
}

const SelectField = ({ id, label, value, options, onChange }: SelectFieldProps) => {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select value={value} onValueChange={(val) => onChange(id, val)}>
        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
        <SelectContent>{options.map((opt) => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}</SelectContent>
      </Select>
    </div>
  )
}

type FileUploadFieldProps = {
  id: string
  label: React.ReactNode
  file: File | null
  accept?: string
  onChange: (id: string, file: File | null) => void
}

const FileUploadField = ({ id, label, file, accept, onChange }: FileUploadFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type="file" accept={accept} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(id, e.target.files?.[0] || null)} />
      {file && <p className="text-sm text-muted-foreground">Selected: {file.name}</p>}
    </div>
  )
}

type CheckboxRowProps = {
  id: string
  label: React.ReactNode
  value: boolean
  onChange: (id: string, value: boolean) => void
}

const CheckboxRow = ({ id, label, value, onChange }: CheckboxRowProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} checked={value} onCheckedChange={(c) => onChange(id, c as boolean)} />
      <Label htmlFor={id} className="text-sm">{label}</Label>
    </div>
  )
}
