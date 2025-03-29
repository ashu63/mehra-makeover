
  const today = new Date().toISOString().split('T')[0];
  const certificatesData = {
    "1": {
        studentName: "Anuradha",
        fatherName: "Nirmal Singh",
        courseName: "Advance diploma in aesthetic & hair desinging",
        dateOfIssue: today, // Use today's date
        grades: [
        { title: "Nail Extension", grade: "A", level: "Expert" },
        { title: "Makeup", grade: "A", level: "Expert" },
        { title: "Hair Styling", grade: "A", level: "Advanced" },
        { title: "Skin Treatments", grade: "A+", level: "Intermediate" },
      ],
    },
    "2": {
        studentName: "Saneha Mehra",
        fatherName: "Naresh Kumar",
        courseName: "Advance diploma in aesthetic & hair desinging",
        dateOfIssue: today, // Use today's date
        grades: [
            { title: "Nail Extension", grade: "A", level: "Expert" },
            { title: "Makeup", grade: "A", level: "Expert" },
            { title: "Hair Styling", grade: "A", level: "Advanced" },
            { title: "Skin Treatments", grade: "A+", level: "Intermediate" },
      ],
    },
    // "3": {
    //   studentName: "Alex Johnson",
    //   fatherName: "Robert Johnson",
    //   courseName: "Mobile App Development",
    //   dateOfIssue: today, // Use today's date
    //   grades: [
    //     { title: "Swift", grade: "A", level: "Advanced" },
    //     { title: "iOS Development", grade: "A-", level: "Advanced" },
    //     { title: "UI/UX Design", grade: "B+", level: "Intermediate" },
    //     { title: "App Store Deployment", grade: "A", level: "Advanced" },
    //   ]
    // }
  };
  
  export async function getCertificateData(id) {
    // Simulate a database lookup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return certificatesData[id] || null;
  }
  
  