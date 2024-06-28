function fetchApi() {
  const url = new URL(
    "https://wmad-survey-backend.vercel.app/api/form-answers/question/1/answers"
  );
  const params = {
    search_created_by: "Group5",
  };
  url.search = new URLSearchParams(params).toString();

  fetch(url, {
    method: "GET",
    headers: {
      "x-secret-key":
        "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const answers = data.length;
      document.querySelector(".stat").innerHTML = `
          <h3>Number of responses</h3>
          <p>${answers}</p>
        
        
        `;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

fetchApi();

function getApi() {
  const url = new URL(
    "https://wmad-survey-backend.vercel.app/api/form-answers/question/6/answers"
  );
  const params = {
    search_created_by: "Group5",
  };
  url.search = new URLSearchParams(params).toString();

  fetch(url, {
    method: "GET",
    headers: {
      "x-secret-key":
        "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const answers1 = data.length;
      document.querySelector(".stat1").innerHTML = `
        <h3>Students with previous experiences in web development</h3>
        <p>${answers1}</p>
        
        `;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

getApi();

function g9() {
  let grades = document.getElementById("gradeLevel").value;
  const url = new URL(
    "https://wmad-survey-backend.vercel.app/api/form-answers/question/3/answers?search_created_by=Group5&search_answer=" +
      grades
  );

  fetch(url, {
    method: "GET",
    headers: {
      "x-secret-key":
        "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const group9 = data.length;
      document.getElementById("demo").innerHTML = group9;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

g9();

function school() {
  let schools = document.getElementById("schoolType").value;
  const url = new URL(
    "https://wmad-survey-backend.vercel.app/api/form-answers/question/4/answers?search_created_by=Group5&search_answer=" +
      schools
  );

  fetch(url, {
    method: "GET",
    headers: {
      "x-secret-key":
        "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const schoolss = data.length;
      document.getElementById("type").innerHTML = schoolss;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

school();
