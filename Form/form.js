document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("surveyForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      let formData = {
       
          fullName: document.getElementById("fullName").value,
          email: document.getElementById("email").value,
          gradeLevel: document.getElementById("gradeLevel").value,
          schoolType: document.querySelector('input[name="schoolType"]:checked').value || "",
          otherSchoolType: document.getElementById("otherSchoolType").value || "",
          interestLevel: document.querySelector('input[name="interestLevel"]:checked').value || "",
          previousExperience: document.querySelector('input[name="previousExperience"]:checked').value || "",
          experienceDescription: document.getElementById("experienceDescription").value || "",
          activePedagogy: document.querySelector('input[name="activePedagogy"]:checked').value || "",
          pedagogyDescription: document.getElementById("pedagogyDescription").value || "",
          activePedagogyExperience: document.querySelector('input[name="activePedagogyExperience"]:checked').value || "",
          pedagogyActivityDescription: document.getElementById("pedagogyActivityDescription").value || "",
          learningPreferences: [],
          learningEnvironment: document.querySelector('input[name="learningEnvironment"]:checked').value || "",
          otherLearningEnvironment: document.getElementById("otherLearningEnvironment").value || "",
          peerInteraction: document.querySelector('input[name="peerInteraction"]:checked').value || "",
          instructorFeedback: document.querySelector('input[name="instructorFeedback"]:checked').value || "",
          goals: [],
          otherGoals: document.getElementById("otherGoals").value || "",
          careerImpact: document.getElementById("careerImpact").value || "",
          specificTopics: document.getElementById("specificTopics").value || "",
          trainingSuggestions: document.getElementById("trainingSuggestions").value || "",
          additionalComments: document.getElementById("additionalComments").value || "",
          webDevelopmentInterests: [],
          otherWebDevelopmentInterests: document.getElementById("otherWebDevelopmentInterests").value || ""
      };


      var learningPreferencesCheckboxes = document.querySelectorAll('input[name="learningPreferences"]:checked');
      for (var i = 0; i < learningPreferencesCheckboxes.length; i++) {
          formData.learningPreferences.push(learningPreferencesCheckboxes[i].value);
      }
      

      var goalsCheckboxes = document.querySelectorAll('input[name="goals"]:checked');
      for (var i = 0; i < goalsCheckboxes.length; i++) {
          formData.goals.push(goalsCheckboxes[i].value);
      }

      var webDevelopmentInterestsCheckboxes = document.querySelectorAll('input[name="webDevelopmentInterests"]:checked');
      for (var i = 0; i < webDevelopmentInterestsCheckboxes.length; i++) {
          formData.webDevelopmentInterests.push(webDevelopmentInterestsCheckboxes[i].value);
      }

      console.log("Form Data:", formData);

     window.location.replace("../Thanks Page/thank.html");


    const data = {
      answers: [
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 1,
          answer: [formData.fullName],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 2,
          answer: [formData.email],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 3,
          answer: [formData.gradeLevel],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 4,
          answer: [formData.schoolType],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 5,
          answer:[ formData.interestLevel],
          created_by: 'Group5'
          
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 6,
          answer: [ formData.previousExperience],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 7,
          answer: [formData.experienceDescription],
          created_by: 'Group5'


        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 8,
          answer: [formData.activePedagogy],
          created_by: 'Group5'
        },
  
        
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 9,
          answer: [formData.pedagogyDescription],
          created_by: 'Group5'

        }
        ,
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 10,
          answer: [formData.activePedagogyExperience],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 11,
          answer: [formData.pedagogyActivityDescription],
          created_by: 'Group5'

        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 12,
          answer: [formData.learningPreferences],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 13,
          answer: [formData.learningEnvironment],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 14,
          answer: [formData.peerInteraction],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 15,
          answer: [formData.instructorFeedback],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 16,
          answer: [formData.goals],
          created_by: 'Group5'
        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 17,
          answer: [formData.careerImpact],
          created_by: 'Group5'

        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 18,
          answer: [formData.specificTopics],
          created_by: 'Group5'


        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 19,
          answer: [formData.trainingSuggestions],
          created_by: 'Group5'

        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 20,
          answer: [formData.additionalComments],
          created_by: 'Group5'

        },
        {
          email: formData.email,
          fullname: formData.fullName,
          question_id: 21,
          answer: [formData.webDevelopmentInterests],
          created_by: 'Group5'



        },
      ]};

    savedata(data);
  });

  function savedata(data) {
    fetch('https://wmad-survey-backend.vercel.app/api/form-answers/submit', {
      method: 'POST',
      headers: {
        'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error('Error:', error);
    });
  }

});





function validateForm() {
  var isValid = true;

  function isAnyChecked(inputs, errorElement, errorMessage) {
    var anyChecked = false;
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        anyChecked = true;
        break;
      }
    }
    if (!anyChecked) {
      errorElement.textContent = errorMessage;
      isValid = false;
    } else {
      errorElement.textContent = "";
    }
  }

  var allInputs = document.querySelectorAll('input[type="text"], textarea, select');
  for (var i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value.trim() === "") {
      var errorElement = document.getElementById(allInputs[i].id + "-error");
      if (errorElement) {
        errorElement.textContent = "This field is required.";
      }
      isValid = false;
    }
  }

  var fullNameInput = document.getElementById("fullName");
  var fullNameError = document.getElementById("fullname-error");
  if (fullNameInput.value.trim() === "") {
    fullNameError.textContent = "Please enter your full name.";
    fullNameInput.classList.add("error-border");
    isValid = false;
  } else {
    fullNameError.textContent = "";
    fullNameInput.classList.remove("error-border");
  }

  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    emailInput.classList.add("error-border");
    isValid = false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error-border");
  }

  var gradeLevelInput = document.getElementById("gradeLevel");
  var gradeLevelError = document.getElementById("gradeLevel-error");
  if (gradeLevelInput.value === "") {
    gradeLevelError.textContent = "Please select your grade level.";
    gradeLevelInput.classList.add("error-border");
    isValid = false;
  } else {
    gradeLevelError.textContent = "";
    gradeLevelInput.classList.remove("error-border");
  }

  var schoolTypeInputs = document.getElementsByName("schoolType");
  var schoolTypeError = document.getElementById("schoolType-error");
  isAnyChecked(schoolTypeInputs, schoolTypeError, "Please select your school type.");

  var interestLevelInputs = document.getElementsByName("interestLevel");
  var interestLevelError = document.getElementById("interestLevel-error");
  isAnyChecked(interestLevelInputs, interestLevelError, "Please select your interest level.");

  var previousExperienceInputs = document.getElementsByName("previousExperience");
  var previousExperienceError = document.getElementById("previousExperience-error");
  isAnyChecked(previousExperienceInputs, previousExperienceError, "Please select your previous experience.");

  var activePedagogyInputs = document.getElementsByName("activePedagogy");
  var activePedagogyError = document.getElementById("activePedagogy-error");
  isAnyChecked(activePedagogyInputs, activePedagogyError, "Please select your familiarity with active pedagogy.");

  var activePedagogyExperienceInputs = document.getElementsByName("activePedagogyExperience");
  var activePedagogyExperienceError = document.getElementById("activePedagogyExperience-error");
  isAnyChecked(activePedagogyExperienceInputs, activePedagogyExperienceError, "Please select your active pedagogy experience.");

  var learningPreferencesInputs = document.getElementsByName("learningPreferences");
  var learningPreferencesError = document.getElementById("learningPreferences-error");
  isAnyChecked(learningPreferencesInputs, learningPreferencesError, "Please select your learning preferences.");

  var learningEnvironmentInputs = document.getElementsByName("learningEnvironment");
  var learningEnvironmentError = document.getElementById("learningEnvironment-error");
  isAnyChecked(learningEnvironmentInputs, learningEnvironmentError, "Please select your preferred learning environment.");

  var peerInteractionInputs = document.getElementsByName("peerInteraction");
  var peerInteractionError = document.getElementById("peerInteraction-error");
  isAnyChecked(peerInteractionInputs, peerInteractionError, "Please select how important peer interaction is.");

  var instructorFeedbackInputs = document.getElementsByName("instructorFeedback");
  var instructorFeedbackError = document.getElementById("instructorFeedback-error");
  isAnyChecked(instructorFeedbackInputs, instructorFeedbackError, "Please select how comfortable you are with instructor feedback.");

  var goalsInputs = document.getElementsByName("goals");
  var goalsError = document.getElementById("goals-error");
  isAnyChecked(goalsInputs, goalsError, "Please select your goals.");

  var careerImpactInput = document.getElementById("careerImpact");
  var careerImpactError = document.getElementById("careerImpact-error");
  if (careerImpactInput.value.trim() === "") {
    careerImpactError.textContent = "Please describe how web development skills will help you.";
    careerImpactInput.classList.add("error-border");
    isValid = false;
  } else {
    careerImpactError.textContent = "";
    careerImpactInput.classList.remove("error-border");
  }

  var specificTopicsInput = document.getElementById("specificTopics");
  var specificTopicsError = document.getElementById("specificTopics-error");
  if (specificTopicsInput.value.trim() === "") {
    specificTopicsError.textContent = "Please specify topics or technologies you want to learn.";
    specificTopicsInput.classList.add("error-border");
    isValid = false;
  } else {
    specificTopicsError.textContent = "";
    specificTopicsInput.classList.remove("error-border");
  }

  var trainingSuggestionsInput = document.getElementById("trainingSuggestions");
  var trainingSuggestionsError = document.getElementById("trainingSuggestions-error");
  if (trainingSuggestionsInput.value.trim() === "") {
    trainingSuggestionsError.textContent = "Please provide suggestions for improving the training.";
    trainingSuggestionsInput.classList.add("error-border");
    isValid = false;
  } else {
    trainingSuggestionsError.textContent = "";
    trainingSuggestionsInput.classList.remove("error-border");
  }

  var additionalCommentsInput = document.getElementById("additionalComments");
  var additionalCommentsError = document.getElementById("additionalComments-error");
  if (additionalCommentsInput.value.trim() === "") {
    additionalCommentsError.textContent = "Please share additional comments about your interest.";
    additionalCommentsInput.classList.add("error-border");
    isValid = false;
  } else {
    additionalCommentsError.textContent = "";
    additionalCommentsInput.classList.remove("error-border");
  }

  return isValid;
}





