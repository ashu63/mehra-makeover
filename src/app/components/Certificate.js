'use client'

import { useState, useRef } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download, Printer } from 'lucide-react'
import { CertificateData } from '@/lib/db'
import Image from 'next/image'

export function CertificateDisplay({
  studentName,
  fatherName,
  courseName,
  dateOfIssue,
  grades,
  certificateType = "course",
  internshipDuration
}) {
  const certificateRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-center items-center mt-10">
        <Image
          className="rounded-full"
          src="/logo.JPG"
          alt="Mehra Makeover"
          width={100}
          height={100}
          />
      </div>
      <h1 className="text-4xl font-bold text-center text-primary mt-6 mb-16">Mehra <span className="text-orange-200">Makeover</span> </h1>
      <Card className="border-4 border-primary shadow-lg" ref={certificateRef}>
        <CardHeader className="text-center border-b border-primary">
          <CardTitle className="text-3xl font-bold text-primary mb-2">
            {certificateType === "internship" ? "Certificate of Internship" : "Certificate of Completion"}
          </CardTitle>
          <p className="text-xl font-semibold">This is to certify that</p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{studentName}</h2>
            <p className="text-lg">Child of {fatherName}</p>
          </div>
          <p className="text-center text-lg">
            {certificateType === "internship"
              ? "has successfully completed an internship in"
              : "has successfully completed the course"}
          </p>
          <h3 className="text-2xl font-bold text-center text-primary">{courseName}</h3>

          {certificateType === "internship" ? (
            <div className="mt-6 bg-gradient-to-r from-orange-50 to-pink-50 p-8 rounded-lg border-2 border-orange-200">
              <p className="text-center text-lg leading-relaxed mb-4">
                During this <span className="font-bold text-primary">{internshipDuration}</span> internship program, <span className="font-semibold text-primary">{studentName}</span> has demonstrated
                exceptional dedication and skill in the field of aesthetic and hair designing.
              </p>
              <p className="text-center text-lg leading-relaxed mb-4">
                Through hands-on experience and professional training, they have gained valuable expertise in various
                beauty and styling techniques, showing remarkable growth and commitment to excellence.
              </p>
              <p className="text-center text-lg leading-relaxed">
                Their performance throughout the internship has been outstanding, consistently displaying creativity,
                professionalism, and a passion for the beauty industry. We are confident that the skills and knowledge
                acquired during this period will serve as a strong foundation for their future endeavors.
              </p>
            </div>
          ) : (
            <div className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {grades.map((grade, index) => (
                    <TableRow key={index}>
                      <TableCell>{grade.title}</TableCell>
                      <TableCell>{grade.grade}</TableCell>
                      <TableCell>{grade.level}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center border-t border-primary pt-4">
          <div>
            <p className="font-semibold">Date of Issue:</p>
            <p>{new Date(dateOfIssue).toLocaleDateString()}</p>
          </div>
        </CardFooter>
      </Card>
      <div className="mt-6 flex justify-center space-x-4">
        <Button onClick={handlePrint} variant="outline">
          <Printer className="mr-2 h-4 w-4" />
          Print Certificate
        </Button>
      </div>
    </div>
  );
}
