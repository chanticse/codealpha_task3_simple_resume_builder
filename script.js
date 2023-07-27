function generateResume() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const eduName = document.getElementById("eduName").value;
    const degree = document.getElementById("degree").value;
    const graduationYear = document.getElementById("graduationYear").value;
    const companyName = document.getElementById("companyName").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const jobDescription = document.getElementById("jobDescription").value;
    const skills = document.getElementById("skills").value;
  
    document.getElementById("outputFullName").textContent = `Full Name: ${fullName}`;
    document.getElementById("outputEmail").textContent = `Email: ${email}`;
    document.getElementById("outputPhoneNumber").textContent = `Phone Number: ${phoneNumber}`;
    document.getElementById("outputEducation").textContent = `${degree}, ${eduName}, ${graduationYear}`;
    document.getElementById("outputExperience").textContent = `${jobTitle} at ${companyName}, ${jobDescription}`;
    document.getElementById("outputSkills").textContent = `Skills: ${skills}`;
  
    document.getElementById("resumeOutput").classList.remove("hidden");
  }
  
  